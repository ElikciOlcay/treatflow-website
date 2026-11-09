'use client';

import { useEffect, useState } from 'react';
import { BellRing, CalendarSearch, Check, CircleHelp, Clock, Mail, Users, type LucideIcon } from 'lucide-react';
import { featureAvailable } from '@/app/i18n/feature-availability';
import { DemoGlow, DemoStepper, DemoWindow, DrawCheck, pickLabels, useDemoSteps, type DemoLabels, type FeatureDemoProps } from './shared';
import './workflow-demo.css';

const DURATIONS = [2400, 3200, 3200, 3600] as const;

/**
 * Position der Kundin im Ablauf: gerade Zahl = Schritt (Knoten n = 2n), ungerade = unterwegs auf der Linie dahinter.
 * -1 = noch nicht im Workflow. Je Szenen-Schritt: [Position, ms nach Schrittbeginn].
 */
const TIMELINE: ReadonlyArray<ReadonlyArray<readonly [number, number]>> = [
    [[-1, 0], [0, 600]],
    [[1, 0], [2, 450], [3, 1450], [4, 1900]],
    [[5, 0], [6, 450], [7, 1450], [8, 1900]],
    [[9, 0], [10, 450]],
];
const FINAL = 10;

type Kind = 'trigger' | 'wait' | 'message' | 'condition';
const KINDS: readonly Kind[] = ['trigger', 'wait', 'message', 'wait', 'condition', 'message'];

/** Farben und Symbole wie die Schritt-Karten im Treatflow-Builder */
const KIND_STYLE: Record<Kind, { icon: LucideIcon; iconBg: string; ring: string }> = {
    trigger: { icon: BellRing, iconBg: 'bg-indigo-50 text-indigo-600', ring: 'border-indigo-300' },
    wait: { icon: Clock, iconBg: 'bg-amber-50 text-amber-600', ring: 'border-amber-300' },
    message: { icon: Mail, iconBg: 'bg-emerald-50 text-emerald-600', ring: 'border-emerald-300' },
    condition: { icon: CircleHelp, iconBg: 'bg-sky-50 text-sky-600', ring: 'border-sky-300' },
};

type MailText = { subject: string; text: string; button?: string };

type Labels = {
    sr: string;
    stepAria: string;
    steps: [string, string, string, string];
    title: string;
    subtitle: string;
    client: string;
    /** [Titel, Detail] je Knoten; „{ch}“ wird durch den Versandkanal ersetzt */
    nodes: [string, string][];
    email: string;
    no: string;
    sent: string;
    active: string;
    counter: string;
    completed: string;
    mails: [MailText, MailText];
    check: [string, string, string];
};

const LABELS: DemoLabels<Labels> = {
    de: {
        sr: 'Beispiel für einen Kunden-Workflow in Treatflow: Nach einer abgeschlossenen Hydrafacial-Behandlung wartet der Workflow 2 Tage und schickt Lena Wagner Pflegetipps per E-Mail und WhatsApp. Nach 6 Wochen prüft er, ob sie schon einen neuen Termin gebucht hat – weil nicht, geht automatisch eine Einladung zum Folgetermin raus.',
        stepAria: 'Schritt',
        steps: ['Auslöser', 'Nachsorge', 'Prüfung', 'Einladung'],
        title: 'Workflows',
        subtitle: 'Nachsorge Hydrafacial',
        client: 'Lena Wagner',
        nodes: [['Behandlung abgeschlossen', 'Auslöser · Hydrafacial'], ['Warten', '2 Tage'], ['Pflegetipps', '{ch}'], ['Warten', '6 Wochen'], ['Neuer Termin gebucht?', 'Ja → Ende'], ['Folgetermin-Einladung', '{ch}']],
        email: 'E-Mail', no: 'Nein', sent: 'Gesendet', active: 'Aktiv',
        counter: 'Kund:innen im Workflow',
        completed: 'Termin abgeschlossen',
        mails: [
            { subject: 'Pflegetipps nach deiner Behandlung', text: 'Hallo Lena, vielen Dank für deinen Besuch! Damit sich deine Haut optimal erholt, hier ein paar Tipps …' },
            { subject: 'Zeit für deine nächste Behandlung?', text: 'Hallo Lena, für ein optimales Ergebnis empfehlen wir regelmäßige Sitzungen.', button: 'Termin buchen' },
        ],
        check: ['Prüft Neubuchung', 'Noch kein neuer Termin', 'Bucht sie neu, stoppt der Workflow.'],
    },
    en: {
        sr: 'Example of a client workflow in Treatflow: after a completed Hydrafacial, the workflow waits 2 days and sends Emma Clarke aftercare tips by email. After 6 weeks it checks whether she has booked a new appointment – she has not, so an invitation to rebook goes out automatically.',
        stepAria: 'Step',
        steps: ['Trigger', 'Aftercare', 'Check', 'Invite'],
        title: 'Workflows',
        subtitle: 'Hydrafacial aftercare',
        client: 'Emma Clarke',
        nodes: [['Treatment completed', 'Trigger · Hydrafacial'], ['Wait', '2 days'], ['Aftercare tips', '{ch}'], ['Wait', '6 weeks'], ['New appointment booked?', 'Yes → End'], ['Rebooking invite', '{ch}']],
        email: 'Email', no: 'No', sent: 'Sent', active: 'Active',
        counter: 'Clients in this workflow',
        completed: 'Appointment completed',
        mails: [
            { subject: 'Aftercare tips for your skin', text: 'Hi Emma, thank you for your visit! To help your skin recover perfectly, here are a few tips …' },
            { subject: 'Time for your next treatment?', text: 'Hi Emma, for the best results we recommend regular sessions.', button: 'Book now' },
        ],
        check: ['Checks new booking', 'No new appointment yet', 'If she books, the workflow stops.'],
    },
    tr: {
        sr: "Treatflow'da müşteri otomasyonu örneği: Tamamlanan bir Hydrafacial işleminden 2 gün sonra Elif Yılmaz'a e-posta ile bakım önerileri gönderilir. 6 hafta sonra yeni randevu alıp almadığı kontrol edilir – almadığı için yeni randevu daveti otomatik olarak gönderilir.",
        stepAria: 'Adım',
        steps: ['Tetikleyici', 'Bakım', 'Kontrol', 'Davet'],
        title: 'Otomasyonlar',
        subtitle: 'Hydrafacial bakım takibi',
        client: 'Elif Yılmaz',
        nodes: [['İşlem tamamlandı', 'Tetikleyici · Hydrafacial'], ['Bekle', '2 gün'], ['Bakım önerileri', '{ch}'], ['Bekle', '6 hafta'], ['Yeni randevu alındı mı?', 'Evet → Bitir'], ['Yeni randevu daveti', '{ch}']],
        email: 'E-posta', no: 'Hayır', sent: 'Gönderildi', active: 'Aktif',
        counter: 'Akıştaki müşteriler',
        completed: 'Randevu tamamlandı',
        mails: [
            { subject: 'İşlem sonrası bakım önerileri', text: 'Merhaba Elif, ziyaretiniz için teşekkürler! Cildinizin en iyi şekilde toparlanması için birkaç öneri …' },
            { subject: 'Bir sonraki bakımınızın zamanı geldi mi?', text: 'Merhaba Elif, en iyi sonuç için düzenli seanslar öneriyoruz.', button: 'Randevu al' },
        ],
        check: ['Yeni randevuyu kontrol eder', 'Henüz yeni randevu yok', 'Randevu alırsa akış durur.'],
    },
    nl: {
        sr: 'Voorbeeld van een klantworkflow in Treatflow: na een afgeronde Hydrafacial wacht de workflow 2 dagen en stuurt Sanne de Vries nazorgtips per e-mail. Na 6 weken controleert hij of ze al een nieuwe afspraak heeft geboekt – dat is niet zo, dus gaat er automatisch een uitnodiging voor een vervolgafspraak uit.',
        stepAria: 'Stap',
        steps: ['Trigger', 'Nazorg', 'Controle', 'Uitnodiging'],
        title: 'Workflows',
        subtitle: 'Nazorg Hydrafacial',
        client: 'Sanne de Vries',
        nodes: [['Behandeling afgerond', 'Trigger · Hydrafacial'], ['Wachten', '2 dagen'], ['Nazorgtips', '{ch}'], ['Wachten', '6 weken'], ['Opnieuw geboekt?', 'Ja → Einde'], ['Vervolgafspraak aanbieden', '{ch}']],
        email: 'E-mail', no: 'Nee', sent: 'Verstuurd', active: 'Actief',
        counter: 'Klanten in deze workflow',
        completed: 'Afspraak afgerond',
        mails: [
            { subject: 'Nazorgtips na je behandeling', text: 'Hoi Sanne, bedankt voor je bezoek! Zo herstelt je huid optimaal – een paar tips …' },
            { subject: 'Tijd voor je volgende behandeling?', text: 'Hoi Sanne, voor het beste resultaat raden we regelmatige sessies aan.', button: 'Nu boeken' },
        ],
        check: ['Controleert nieuwe boeking', 'Nog geen nieuwe afspraak', 'Boekt ze opnieuw, dan stopt de workflow.'],
    },
    it: {
        sr: "Esempio di flusso clienti in Treatflow: dopo un Hydrafacial completato, il flusso attende 2 giorni e invia a Giulia Rossi i consigli post-trattamento via email. Dopo 6 settimane controlla se ha già prenotato un nuovo appuntamento: non l'ha fatto, quindi parte in automatico l'invito a riprenotare.",
        stepAria: 'Passaggio',
        steps: ['Trigger', 'Consigli', 'Verifica', 'Invito'],
        title: 'Flussi',
        subtitle: 'Post-trattamento Hydrafacial',
        client: 'Giulia Rossi',
        nodes: [['Trattamento completato', 'Trigger · Hydrafacial'], ['Attendi', '2 giorni'], ['Consigli post-trattamento', '{ch}'], ['Attendi', '6 settimane'], ['Ha riprenotato?', 'Sì → Fine'], ['Invito a riprenotare', '{ch}']],
        email: 'Email', no: 'No', sent: 'Inviato', active: 'Attivo',
        counter: 'Clienti nel flusso',
        completed: 'Appuntamento completato',
        mails: [
            { subject: 'Consigli dopo il tuo trattamento', text: 'Ciao Giulia, grazie per la visita! Ecco qualche consiglio per far recuperare al meglio la tua pelle …' },
            { subject: 'È ora del tuo prossimo trattamento?', text: 'Ciao Giulia, per un risultato ottimale consigliamo sedute regolari.', button: 'Prenota ora' },
        ],
        check: ['Verifica nuove prenotazioni', 'Nessun nuovo appuntamento', 'Se prenota, il flusso si ferma.'],
    },
    pl: {
        sr: 'Przykład automatyzacji dla klienta w Treatflow: po zakończonym zabiegu Hydrafacial sekwencja czeka 2 dni i wysyła Annie Nowak porady po zabiegu e-mailem. Po 6 tygodniach sprawdza, czy umówiła kolejną wizytę – nie umówiła, więc automatycznie wychodzi zaproszenie na wizytę.',
        stepAria: 'Krok',
        steps: ['Wyzwalacz', 'Porady', 'Warunek', 'Powrót'],
        title: 'Automatyzacje',
        subtitle: 'Opieka po Hydrafacial',
        client: 'Anna Nowak',
        nodes: [['Zabieg zakończony', 'Wyzwalacz · Hydrafacial'], ['Odczekaj', '2 dni'], ['Porady po zabiegu', '{ch}'], ['Odczekaj', '6 tygodni'], ['Nowa wizyta umówiona?', 'Tak → Koniec'], ['Zaproszenie na wizytę', '{ch}']],
        email: 'E-mail', no: 'Nie', sent: 'Wysłano', active: 'Aktywna',
        counter: 'Klienci w tej sekwencji',
        completed: 'Wizyta zakończona',
        mails: [
            { subject: 'Porady po zabiegu', text: 'Dzień dobry Pani Anno, dziękujemy za wizytę! Kilka wskazówek, aby skóra jak najlepiej się zregenerowała …' },
            { subject: 'Czas na kolejny zabieg?', text: 'Dzień dobry Pani Anno, dla najlepszego efektu polecamy regularne wizyty.', button: 'Zarezerwuj wizytę' },
        ],
        check: ['Sprawdza nowe rezerwacje', 'Brak nowej wizyty', 'Gdy klientka się umówi, sekwencja się zatrzyma.'],
    },
    es: {
        sr: 'Ejemplo de flujo de clientes en Treatflow: tras un Hydrafacial completado, el flujo espera 2 días y envía a Lucía García consejos de cuidado por email. A las 6 semanas comprueba si ya ha reservado una nueva cita; como no lo ha hecho, sale automáticamente una invitación para volver.',
        stepAria: 'Paso',
        steps: ['Disparador', 'Cuidados', 'Comprobar', 'Invitación'],
        title: 'Flujos',
        subtitle: 'Seguimiento Hydrafacial',
        client: 'Lucía García',
        nodes: [['Tratamiento completado', 'Disparador · Hydrafacial'], ['Esperar', '2 días'], ['Consejos de cuidado', '{ch}'], ['Esperar', '6 semanas'], ['¿Nueva cita reservada?', 'Sí → Fin'], ['Invitación a volver', '{ch}']],
        email: 'Email', no: 'No', sent: 'Enviado', active: 'Activo',
        counter: 'Clientes en el flujo',
        completed: 'Cita completada',
        mails: [
            { subject: 'Consejos tras tu tratamiento', text: 'Hola, Lucía: ¡gracias por tu visita! Para que tu piel se recupere de forma óptima, aquí tienes unos consejos…' },
            { subject: '¿Es hora de tu próximo tratamiento?', text: 'Hola, Lucía: para un resultado óptimo te recomendamos sesiones regulares.', button: 'Reservar cita' },
        ],
        check: ['Comprueba nuevas reservas', 'Aún no hay nueva cita', 'Si reserva, el flujo se detiene.'],
    },
    fr: {
        sr: 'Exemple de parcours client dans Treatflow : après un Hydrafacial terminé, le parcours attend 2 jours puis envoie à Camille Martin des conseils après soin par e-mail. Au bout de 6 semaines, il vérifie si elle a déjà repris rendez-vous – ce n’est pas le cas, donc une invitation à revenir part automatiquement.',
        stepAria: 'Étape',
        steps: ['Départ', 'Conseils', 'Condition', 'Invitation'],
        title: 'Parcours',
        subtitle: 'Suivi Hydrafacial',
        client: 'Camille Martin',
        nodes: [['Soin terminé', 'Déclencheur · Hydrafacial'], ['Attendre', '2 jours'], ['Conseils après soin', '{ch}'], ['Attendre', '6 semaines'], ['Nouveau RDV réservé ?', 'Oui → Fin'], ['Invitation à revenir', '{ch}']],
        email: 'E-mail', no: 'Non', sent: 'Envoyé', active: 'Actif',
        counter: 'Clients dans le parcours',
        completed: 'Rendez-vous terminé',
        mails: [
            { subject: 'Nos conseils après votre soin', text: 'Bonjour Camille, merci pour votre visite ! Pour que votre peau récupère au mieux, voici quelques conseils…' },
            { subject: 'C’est l’heure de votre prochain soin ?', text: 'Bonjour Camille, pour un résultat optimal, nous recommandons des séances régulières.', button: 'Prendre rendez-vous' },
        ],
        check: ['Vérifie les nouvelles réservations', 'Pas encore de nouveau rendez-vous', 'Si elle réserve, le parcours s’arrête.'],
    },
};

/** Begleitkarte rechts neben dem jeweiligen Schritt (ab sm), passend zur Höhe des Knotens */
const SIDE_TOP = { event: 'top-[4.5rem]', mail0: 'top-[11rem]', check: 'top-[19.5rem]', mail1: 'top-[19rem]' } as const;

const cardShadow = 'shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)]';

/**
 * Animierte Hero-Szene „Kunden-Workflows“: Auslöser → 2 Tage warten → Pflegetipps → 6 Wochen warten →
 * Bedingung „Neuer Termin gebucht?“ → Einladung zum Folgetermin. Ein Leuchtpunkt trägt die Kundin von Schritt zu Schritt.
 */
export default function ClientWorkflowsDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(LABELS, market);
    // WhatsApp gibt es nur im DACH-Markt, sonst laufen Workflow-Nachrichten per E-Mail
    const channel = featureAvailable('whatsapp', market) ? `${t.email} · WhatsApp` : t.email;
    const { ref, step, cycle, playing, reduced, goTo } = useDemoSteps(DURATIONS);
    const [pos, setPos] = useState(-1);
    const initials = t.client.split(' ').map((part) => part[0]).join('');

    // Feinablauf innerhalb eines Schritts: Linie entlang, Knoten aktiv, nächste Linie …
    useEffect(() => {
        if (reduced) {
            setPos(FINAL);
            return;
        }
        const plan = TIMELINE[step] ?? TIMELINE[0];
        setPos(plan[0][0]);
        const timers = plan.slice(1).map(([target, at]) => window.setTimeout(() => setPos(target), at));
        return () => timers.forEach((timer) => window.clearTimeout(timer));
    }, [step, cycle, reduced]);

    const entered = pos >= 0;
    const side = step === 0 && entered ? 'event' : step === 1 && pos >= 4 ? 'mail0' : step === 2 && pos >= 8 ? 'check' : step === 3 && pos >= FINAL ? 'mail1' : null;
    const mail = side === 'mail1' ? t.mails[1] : t.mails[0];

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>
            <DemoGlow />

            <div className="relative" aria-hidden="true">
                <DemoWindow title={t.title} subtitle={t.subtitle}>
                    <div className="p-4 sm:p-5">
                        <div className="rounded-xl border border-gray-100 bg-gray-50/70 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] px-3 py-4 [background-size:14px_14px] sm:px-5">
                            <div className="w-[15rem] sm:w-[16rem]">
                                {KINDS.map((kind, index) => {
                                    const node = 2 * index;
                                    const active = pos === node;
                                    const done = pos > node;
                                    const { icon: Icon, iconBg, ring } = KIND_STYLE[kind];
                                    const [title, detail] = t.nodes[index];
                                    const connector = node + 1;
                                    return (
                                        <div key={index}>
                                            <div className="relative">
                                                <div
                                                    className={`relative flex h-10 items-center gap-2.5 overflow-hidden rounded-xl border bg-white px-2.5 transition-colors duration-500 ${
                                                        active ? `tf-ui-ring ${ring}` : 'border-gray-200 shadow-sm'
                                                    }`}
                                                >
                                                    <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
                                                        <Icon className="h-3.5 w-3.5" />
                                                    </span>
                                                    <span className="min-w-0 flex-1 leading-tight">
                                                        <span className="block truncate text-[11px] font-semibold text-gray-900 sm:text-xs">{title}</span>
                                                        <span className="block truncate text-[10px] text-gray-500">{detail === '{ch}' ? channel : detail}</span>
                                                    </span>
                                                    {kind === 'message' && (active || done) && (
                                                        <span
                                                            key={`sent-${cycle}`}
                                                            className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 ${active ? 'tf-ui-pop' : ''}`}
                                                            style={active ? { animationDelay: '400ms' } : undefined}
                                                        >
                                                            {active ? <DrawCheck className="h-3 w-3" color="white" /> : <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                                                        </span>
                                                    )}
                                                    {kind === 'condition' && (active || done) && (
                                                        <span key={`no-${cycle}`} className="tf-ui-pop flex-shrink-0 rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-semibold text-sky-700" style={{ animationDelay: '400ms' }}>
                                                            {t.no}
                                                        </span>
                                                    )}
                                                    {kind === 'wait' && active && (
                                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-100">
                                                            <span key={`wait-${cycle}`} className="tf-ui-fill block h-full w-full bg-amber-400" style={{ animationDuration: '1000ms' }} />
                                                        </span>
                                                    )}
                                                </div>
                                                {active && (
                                                    <span
                                                        key={`token-${cycle}-${pos}`}
                                                        className="tf-ui-pop absolute left-full top-1/2 -mt-3 ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-[9px] font-bold text-rose-700 shadow-md ring-2 ring-white"
                                                    >
                                                        {initials}
                                                    </span>
                                                )}
                                            </div>
                                            {index < KINDS.length - 1 && (
                                                <div className="relative mx-auto h-5 w-0.5">
                                                    <span className="absolute inset-0 rounded-full bg-gray-200" />
                                                    {pos >= connector && (
                                                        <span
                                                            key={`line-${cycle}`}
                                                            className={`absolute inset-0 rounded-full bg-gradient-to-b from-indigo-500 to-sky-400 ${pos === connector ? 'tf-workflow-line' : ''}`}
                                                        />
                                                    )}
                                                    {pos === connector && (
                                                        <span key={`dot-${cycle}`} className="tf-workflow-dot absolute left-1/2 top-0 h-2.5 w-2.5 rounded-full bg-sky-400" />
                                                    )}
                                                    {kind === 'condition' && (
                                                        <span className={`absolute left-2.5 top-1/2 -translate-y-1/2 text-[9px] font-semibold ${pos >= connector ? 'text-sky-700' : 'text-gray-400'}`}>
                                                            {t.no}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </DemoWindow>

                {/* Zähler: Kund:innen, die gerade im Workflow sind */}
                <div className="absolute -right-2 -top-8 z-20 w-[9.5rem] sm:-right-10 sm:-top-9 sm:w-44">
                    <div className="tf-ui-float">
                        <div className={`rounded-2xl border border-gray-200 bg-white p-3 ${cardShadow}`}>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="flex items-center gap-1 font-semibold text-emerald-600">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    {t.active}
                                </span>
                                <Users className="h-3.5 w-3.5 text-gray-400" />
                            </div>
                            <p className="mt-1 flex items-center gap-1.5">
                                <span key={`count-${cycle}-${entered}`} className={`text-2xl font-bold tabular-nums tracking-tight text-gray-900 ${entered ? 'tf-ui-pop' : ''}`}>
                                    {entered ? 24 : 23}
                                </span>
                                {entered && step === 0 && (
                                    <span key={`plus-${cycle}`} className="tf-ui-pop rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                                        +1
                                    </span>
                                )}
                            </p>
                            <p className="text-[10px] leading-snug text-gray-500">{t.counter}</p>
                        </div>
                    </div>
                </div>

                {/* Begleitkarte zum Schritt – nur mit Platz daneben (nicht auf dem Handy, nicht in der schmalen lg-Spalte) */}
                {side && (
                    <div key={`side-${cycle}-${side}`} className={`tf-ui-pop absolute -right-10 z-10 hidden w-[13rem] sm:block lg:hidden xl:block ${SIDE_TOP[side]}`} style={{ animationDelay: '350ms' }}>
                        <div className={`rounded-2xl border border-gray-200 bg-white p-3 ${cardShadow}`}>
                            {side === 'event' && (
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-[11px] font-semibold text-rose-700">{initials}</span>
                                    <span className="min-w-0 flex-1 leading-tight">
                                        <span className="block truncate text-xs font-semibold text-gray-900">{t.client}</span>
                                        <span className="block truncate text-[10px] font-medium text-emerald-600">{t.completed}</span>
                                    </span>
                                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                                        <DrawCheck className="h-3 w-3" color="white" />
                                    </span>
                                </div>
                            )}
                            {side === 'check' && (
                                <>
                                    <p className="flex items-center gap-1.5 text-[10px] font-semibold text-sky-700">
                                        <CalendarSearch className="h-3.5 w-3.5" />
                                        {t.check[0]}
                                    </p>
                                    <p className="mt-1 text-xs font-semibold text-gray-900">{t.check[1]}</p>
                                    <p className="mt-0.5 text-[10px] leading-snug text-gray-500">{t.check[2]}</p>
                                </>
                            )}
                            {(side === 'mail0' || side === 'mail1') && (
                                <>
                                    <p className="flex items-center gap-1.5 truncate text-[10px] text-gray-500">
                                        <Mail className="h-3.5 w-3.5 flex-shrink-0 text-emerald-600" />
                                        Studio Aurora → {t.client.split(' ')[0]}
                                    </p>
                                    <p className="mt-1.5 text-xs font-semibold leading-snug text-gray-900">{mail.subject}</p>
                                    <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-gray-500">{mail.text}</p>
                                    {mail.button && <span className="mt-2 inline-flex rounded-lg bg-indigo-600 px-2.5 py-1 text-[10px] font-semibold text-white">{mail.button}</span>}
                                    <p className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                                        <DrawCheck className="h-3 w-3" />
                                        <span className="truncate">
                                            {t.sent} · {channel}
                                        </span>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
