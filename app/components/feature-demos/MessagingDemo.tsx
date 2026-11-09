'use client';

import { BellRing, CalendarCheck, Check, ChevronLeft, Clock, ExternalLink, Heart, Mail, MessageCircle, Mic, Search } from 'lucide-react';
import { featureAvailable } from '@/app/i18n/feature-availability';
import { DemoGlow, DemoStepper, DrawCheck, pickLabels, useDemoSteps, type DemoLabels, type FeatureDemoProps } from './shared';
import './messaging-demo.css';

const DURATIONS = [3600, 3800, 4600] as const;

/** Uhrzeit in der Statusleiste je Schritt: Buchung am Abend, Erinnerung 24 h vorher, Nachsorge am Tag danach */
const CLOCK = ['18:24', '10:00', '11:30'] as const;

const ROW_ICONS = [CalendarCheck, BellRing, Heart] as const;

/** Wann der neue Inhalt nach Schrittbeginn erscheint (erst „wird gesendet“, dann auf dem Handy) */
const ARRIVE_MS = 900;

type Message = { day: string; subject: string; text: string; button?: string };
type Triple<T> = [T, T, T];

type Labels = {
    sr: string;
    stepAria: string;
    steps: Triple<string>;
    client: string;
    messages: Triple<Message>;
    /** Studio-Seite: [Nachricht, Zeitpunkt] */
    rows: Triple<[string, string]>;
    cardTitle: string;
    sent: string;
    scheduled: string;
    auto: string;
    channel: string;
    /** WhatsApp: Platzhalter im Eingabefeld; E-Mail: Titel des Posteingangs */
    screen: string;
    search: string;
    profile: string;
};

const LABELS: DemoLabels<Labels> = {
    de: {
        sr: 'Beispiel für automatische Nachrichten mit Treatflow: Nach der Online-Buchung bekommt Lena Wagner sofort eine Bestätigung per WhatsApp, einen Tag vor dem Termin eine Erinnerung und einen Tag nach der Behandlung eine Nachsorge-Nachricht mit Link zur nächsten Buchung – alles automatisch verschickt.',
        stepAria: 'Schritt',
        steps: ['Bestätigung', 'Erinnerung', 'Nachsorge'],
        client: 'Lena Wagner',
        messages: [
            { day: 'Montag', subject: '', text: 'Hallo Lena, dein Termin bei Studio Aurora wurde bestätigt: Hydrafacial am Do., 12.11. um 10:00 Uhr. Wir freuen uns auf dich!' },
            { day: 'Mittwoch', subject: '', text: 'Hallo Lena, dein Termin bei Studio Aurora steht an: Hydrafacial morgen um 10:00 Uhr. Bitte komme pünktlich. Dein Team von Studio Aurora freut sich auf dich.' },
            { day: 'Freitag', subject: '', text: 'Hallo Lena, danke für deinen Besuch bei Studio Aurora. Wie hat dir Hydrafacial gefallen? Wir würden uns freuen, dich bald wiederzusehen.', button: 'Termin buchen' },
        ],
        rows: [['Buchungsbestätigung', 'sofort'], ['Terminerinnerung', '1 Tag vorher'], ['Nachsorge', '1 Tag danach']],
        cardTitle: 'Automatische Nachrichten',
        sent: 'Gesendet', scheduled: 'Geplant',
        auto: 'automatisch gesendet',
        channel: 'per WhatsApp',
        screen: 'Nachricht', search: '', profile: 'Kosmetikstudio',
    },
    en: {
        sr: 'Example of automated messages in Treatflow: after booking online, Emma Clarke instantly receives a confirmation email, a reminder one day before her appointment and, one day after the treatment, an aftercare email with a link to book again – all sent automatically.',
        stepAria: 'Step',
        steps: ['Confirmation', 'Reminder', 'Follow-up'],
        client: 'Emma Clarke',
        messages: [
            { day: 'Mon', subject: 'Your appointment is confirmed', text: 'Hi Emma, your Hydrafacial at Studio Aurora on Thu 12 Nov at 10:00 is confirmed. We look forward to seeing you!', button: 'View booking' },
            { day: 'Wed', subject: 'Reminder: your appointment tomorrow', text: 'Hi Emma, just a quick reminder: your Hydrafacial at Studio Aurora is tomorrow at 10:00. See you soon!' },
            { day: 'Fri', subject: 'How was your Hydrafacial?', text: 'Hi Emma, thank you for visiting Studio Aurora. We hope you love the results – we would be happy to see you again soon.', button: 'Book now' },
        ],
        rows: [['Booking confirmation', 'right away'], ['Appointment reminder', '1 day before'], ['Follow-up', '1 day after']],
        cardTitle: 'Automated messages',
        sent: 'Sent', scheduled: 'Scheduled',
        auto: 'sent automatically',
        channel: 'by email',
        screen: 'Inbox', search: 'Search', profile: '',
    },
    tr: {
        sr: "Treatflow ile otomatik mesaj örneği: Elif Yılmaz online randevu aldıktan hemen sonra e-posta ile onay alır, randevudan bir gün önce hatırlatma ve işlemden bir gün sonra yeniden randevu bağlantısı içeren bir takip e-postası gelir – hepsi otomatik olarak gönderilir.",
        stepAria: 'Adım',
        steps: ['Onay', 'Hatırlatma', 'Takip'],
        client: 'Elif Yılmaz',
        messages: [
            { day: 'Pzt', subject: 'Randevunuz onaylandı', text: "Merhaba Elif, Studio Aurora'daki Hydrafacial randevunuz 12 Kasım Perşembe saat 10:00 için onaylandı. Sizi bekliyoruz!", button: 'Randevuyu görüntüle' },
            { day: 'Çar', subject: 'Hatırlatma: Randevunuz yarın', text: "Merhaba Elif, Studio Aurora'daki Hydrafacial randevunuz yarın saat 10:00'da. Görüşmek üzere!" },
            { day: 'Cum', subject: 'Hydrafacial nasıldı?', text: "Merhaba Elif, Studio Aurora'yı ziyaret ettiğiniz için teşekkür ederiz. Sonuçtan memnun kalmanızı dileriz, sizi yakında tekrar görmek isteriz.", button: 'Randevu al' },
        ],
        rows: [['Randevu onayı', 'hemen'], ['Randevu hatırlatması', '1 gün önce'], ['Takip mesajı', '1 gün sonra']],
        cardTitle: 'Otomatik mesajlar',
        sent: 'Gönderildi', scheduled: 'Planlandı',
        auto: 'otomatik gönderildi',
        channel: 'e-posta ile',
        screen: 'Gelen Kutusu', search: 'Ara', profile: '',
    },
    nl: {
        sr: 'Voorbeeld van automatische berichten in Treatflow: na haar online boeking krijgt Sanne de Vries direct een bevestiging per e-mail, een dag voor de afspraak een herinnering en een dag na de behandeling een nazorgmail met een link om opnieuw te boeken – allemaal automatisch verstuurd.',
        stepAria: 'Stap',
        steps: ['Bevestiging', 'Herinnering', 'Nazorg'],
        client: 'Sanne de Vries',
        messages: [
            { day: 'ma', subject: 'Je afspraak is bevestigd', text: 'Hoi Sanne, je afspraak voor Hydrafacial bij Studio Aurora op do 12 nov om 10:00 is bevestigd. We zien je graag!', button: 'Boeking bekijken' },
            { day: 'wo', subject: 'Herinnering: je afspraak is morgen', text: 'Hoi Sanne, even een herinnering: morgen om 10:00 staat je Hydrafacial bij Studio Aurora gepland. Tot morgen!' },
            { day: 'vr', subject: 'Hoe was je Hydrafacial?', text: 'Hoi Sanne, bedankt voor je bezoek aan Studio Aurora. We hopen dat je blij bent met het resultaat en zien je graag snel terug.', button: 'Nu boeken' },
        ],
        rows: [['Boekingsbevestiging', 'direct'], ['Afspraakherinnering', '1 dag vooraf'], ['Nazorg', '1 dag erna']],
        cardTitle: 'Automatische berichten',
        sent: 'Verstuurd', scheduled: 'Gepland',
        auto: 'automatisch verstuurd',
        channel: 'per e-mail',
        screen: 'Inbox', search: 'Zoeken', profile: '',
    },
    it: {
        sr: "Esempio di messaggi automatici con Treatflow: dopo la prenotazione online Giulia Rossi riceve subito una conferma via email, un promemoria il giorno prima dell'appuntamento e, il giorno dopo il trattamento, un'email di follow-up con il link per prenotare di nuovo. Tutto parte in automatico.",
        stepAria: 'Passaggio',
        steps: ['Conferma', 'Promemoria', 'Follow-up'],
        client: 'Giulia Rossi',
        messages: [
            { day: 'lun', subject: 'Appuntamento confermato', text: 'Ciao Giulia, il tuo Hydrafacial da Studio Aurora è confermato per giovedì 12 novembre alle 10:00. Ti aspettiamo!', button: 'Vedi prenotazione' },
            { day: 'mer', subject: 'Promemoria: il tuo appuntamento è domani', text: 'Ciao Giulia, ti ricordiamo il tuo Hydrafacial di domani alle 10:00 da Studio Aurora. A presto!' },
            { day: 'ven', subject: "Com'è andato il tuo Hydrafacial?", text: 'Ciao Giulia, grazie per essere passata da Studio Aurora. Speriamo che il risultato ti piaccia: ti aspettiamo presto!', button: 'Prenota ora' },
        ],
        rows: [['Conferma prenotazione', 'subito'], ['Promemoria', '1 giorno prima'], ['Follow-up', '1 giorno dopo']],
        cardTitle: 'Messaggi automatici',
        sent: 'Inviato', scheduled: 'Programmato',
        auto: 'inviato in automatico',
        channel: 'via email',
        screen: 'In arrivo', search: 'Cerca', profile: '',
    },
    pl: {
        sr: 'Przykład automatycznych wiadomości w Treatflow: po rezerwacji online Anna Nowak od razu dostaje potwierdzenie e-mailem, dzień przed wizytą przypomnienie, a dzień po zabiegu wiadomość z linkiem do kolejnej rezerwacji – wszystko wysyłane automatycznie.',
        stepAria: 'Krok',
        steps: ['Potwierdzenie', 'Przypomnienie', 'Po wizycie'],
        client: 'Anna Nowak',
        messages: [
            { day: 'pon.', subject: 'Wizyta potwierdzona', text: 'Dzień dobry Pani Anno, potwierdzamy wizytę w Studio Aurora: Hydrafacial, czwartek 12 listopada, godz. 10:00. Do zobaczenia!', button: 'Zobacz rezerwację' },
            { day: 'śr.', subject: 'Przypomnienie o jutrzejszej wizycie', text: 'Dzień dobry Pani Anno, przypominamy o jutrzejszej wizycie w Studio Aurora: Hydrafacial o godz. 10:00. Do zobaczenia!' },
            { day: 'pt.', subject: 'Jak minął zabieg Hydrafacial?', text: 'Dzień dobry Pani Anno, dziękujemy za wizytę w Studio Aurora. Mamy nadzieję, że efekt się podoba – zapraszamy ponownie!', button: 'Zarezerwuj wizytę' },
        ],
        rows: [['Potwierdzenie rezerwacji', 'od razu'], ['Przypomnienie o wizycie', '1 dzień przed'], ['Wiadomość po wizycie', '1 dzień po']],
        cardTitle: 'Automatyczne wiadomości',
        sent: 'Wysłano', scheduled: 'Zaplanowano',
        auto: 'wysłano automatycznie',
        channel: 'e-mailem',
        screen: 'Odebrane', search: 'Szukaj', profile: '',
    },
    es: {
        sr: 'Ejemplo de mensajes automáticos con Treatflow: tras reservar online, Lucía García recibe al instante una confirmación por email, un recordatorio el día antes de la cita y, el día después del tratamiento, un email de seguimiento con un enlace para volver a reservar. Todo se envía automáticamente.',
        stepAria: 'Paso',
        steps: ['Confirmación', 'Recordatorio', 'Seguimiento'],
        client: 'Lucía García',
        messages: [
            { day: 'lun', subject: 'Tu cita está confirmada', text: 'Hola, Lucía: tu Hydrafacial en Studio Aurora queda confirmado para el jueves 12 de noviembre a las 10:00. ¡Te esperamos!', button: 'Ver reserva' },
            { day: 'mié', subject: 'Recordatorio: tu cita es mañana', text: 'Hola, Lucía: te recordamos que mañana a las 10:00 tienes tu Hydrafacial en Studio Aurora. ¡Hasta mañana!' },
            { day: 'vie', subject: '¿Qué tal tu Hydrafacial?', text: 'Hola, Lucía: gracias por visitar Studio Aurora. Esperamos que te encante el resultado y verte pronto de nuevo.', button: 'Reservar cita' },
        ],
        rows: [['Confirmación de reserva', 'al instante'], ['Recordatorio de cita', '1 día antes'], ['Seguimiento', '1 día después']],
        cardTitle: 'Mensajes automáticos',
        sent: 'Enviado', scheduled: 'Programado',
        auto: 'enviado automáticamente',
        channel: 'por email',
        screen: 'Recibidos', search: 'Buscar', profile: '',
    },
    fr: {
        sr: 'Exemple de messages automatiques avec Treatflow : après sa réservation en ligne, Camille Martin reçoit aussitôt une confirmation par e-mail, un rappel la veille du rendez-vous et, le lendemain du soin, un e-mail de suivi avec un lien pour réserver à nouveau – le tout envoyé automatiquement.',
        stepAria: 'Étape',
        steps: ['Confirmation', 'Rappel', 'Suivi'],
        client: 'Camille Martin',
        messages: [
            { day: 'lun.', subject: 'Votre rendez-vous est confirmé', text: 'Bonjour Camille, votre Hydrafacial chez Studio Aurora est confirmé pour le jeudi 12 novembre à 10 h 00. À très bientôt !', button: 'Voir la réservation' },
            { day: 'mer.', subject: 'Rappel : votre rendez-vous demain', text: 'Bonjour Camille, petit rappel : votre Hydrafacial chez Studio Aurora a lieu demain à 10 h 00. À demain !' },
            { day: 'ven.', subject: 'Comment s’est passé votre Hydrafacial ?', text: 'Bonjour Camille, merci pour votre visite chez Studio Aurora. Nous espérons que le résultat vous plaît et serons ravis de vous revoir bientôt.', button: 'Prendre rendez-vous' },
        ],
        rows: [['Confirmation de réservation', 'immédiatement'], ['Rappel de rendez-vous', '1 jour avant'], ['Suivi après soin', '1 jour après']],
        cardTitle: 'Messages automatiques',
        sent: 'Envoyé', scheduled: 'Planifié',
        auto: 'envoyé automatiquement',
        channel: 'par e-mail',
        screen: 'Boîte de réception', search: 'Rechercher', profile: '',
    },
};

const arrive = { animationDelay: `${ARRIVE_MS}ms` };

/**
 * Animierte Hero-Szene „Nachrichten“: Bestätigung → Erinnerung 1 Tag vorher → Nachsorge 1 Tag danach.
 * DE als WhatsApp-Verlauf, alle anderen Märkte als E-Mail-Posteingang (WhatsApp gibt es nur in DACH).
 */
export default function MessagingDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(LABELS, market);
    const whatsapp = featureAvailable('whatsapp', market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const ChannelIcon = whatsapp ? MessageCircle : Mail;

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>
            <DemoGlow />

            <div className="relative" aria-hidden="true">
                {/* Handy der Kundin */}
                <div className="relative mx-auto w-[15.5rem] sm:ml-10 sm:mr-0 sm:w-[17rem] lg:mx-auto xl:ml-10 xl:mr-0">
                    <div className="rounded-[2.4rem] border border-gray-200 bg-gray-900 p-2 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.6)]">
                        <div className="relative flex h-[25rem] flex-col overflow-hidden rounded-[1.9rem] bg-white">
                            <div className={`relative flex h-7 flex-shrink-0 items-center justify-between px-5 text-[10px] font-semibold text-gray-900 ${whatsapp ? 'bg-[#f7f5f2]' : ''}`}>
                                <span className="tabular-nums">{CLOCK[step]}</span>
                                <span className="absolute left-1/2 top-1.5 h-4 w-14 -translate-x-1/2 rounded-full bg-gray-900" />
                                <span className="flex items-end gap-0.5">
                                    {[2, 3, 4].map((h) => (
                                        <span key={h} className="w-0.5 rounded-sm bg-gray-900" style={{ height: h * 2 }} />
                                    ))}
                                    <span className="ml-1 h-2.5 w-5 rounded-[3px] border border-gray-900 p-px">
                                        <span className="block h-full w-3/4 rounded-[1px] bg-gray-900" />
                                    </span>
                                </span>
                            </div>

                            {whatsapp ? (
                                <>
                                    <div className="flex flex-shrink-0 items-center gap-2 border-b border-black/5 bg-[#f7f5f2] px-2.5 pb-2 pt-1">
                                        <ChevronLeft className="h-4 w-4 text-emerald-700" />
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-[10px] font-bold text-white">SA</span>
                                        <span className="min-w-0 leading-tight">
                                            <span className="block truncate text-xs font-semibold text-gray-900">Studio Aurora</span>
                                            <span className="block truncate text-[10px] text-gray-500">{t.profile}</span>
                                        </span>
                                    </div>
                                    {/* Neueste Nachricht unten, ältere wandern wie im Chat nach oben */}
                                    <div className="relative flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden bg-[#efeae2] px-2.5 py-2.5">
                                        <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#efeae2] to-transparent" />
                                        {t.messages.slice(0, step + 1).map((message, index) => (
                                            <div key={`${cycle}-${index}`} className={`flex-shrink-0 ${index === step ? 'tf-messaging-arrive' : ''}`} style={index === step ? arrive : undefined}>
                                                <span className="mx-auto mb-2 block w-fit rounded-md bg-white/90 px-2 py-0.5 text-[9px] font-medium text-gray-500 shadow-sm">{message.day}</span>
                                                <div className="max-w-[90%] rounded-lg rounded-tl-none bg-white px-2.5 pb-1 pt-1.5 text-[11px] leading-snug text-gray-800 shadow-sm">
                                                    {message.text}
                                                    <span className="mt-0.5 block text-right text-[9px] tabular-nums text-gray-400">{CLOCK[index]}</span>
                                                    {message.button && (
                                                        <span className="mt-1 flex items-center justify-center gap-1 border-t border-gray-100 pt-1.5 text-[11px] font-semibold text-sky-600">
                                                            <ExternalLink className="h-3 w-3" />
                                                            {message.button}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-shrink-0 items-center gap-1.5 bg-[#f7f5f2] px-2 pb-3 pt-2">
                                        <span className="flex-1 rounded-full bg-white px-3 py-1.5 text-[10px] text-gray-400">{t.screen}</span>
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white">
                                            <Mic className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex-shrink-0 px-3.5 pb-2.5">
                                        <p className="mt-1 truncate text-base font-bold text-gray-900">{t.screen}</p>
                                        <span className="mt-1.5 flex items-center gap-1.5 rounded-lg bg-gray-100 px-2 py-1 text-[10px] text-gray-400">
                                            <Search className="h-3 w-3" />
                                            {t.search}
                                        </span>
                                    </div>
                                    {/* Posteingang: neueste E-Mail oben, ungelesen markiert */}
                                    <div className="min-h-0 flex-1 overflow-hidden border-t border-gray-100">
                                        {[2, 1, 0]
                                            .filter((index) => index <= step)
                                            .map((index) => {
                                                const message = t.messages[index];
                                                const fresh = index === step;
                                                return (
                                                    <div key={`${cycle}-${index}`} className={fresh ? 'tf-messaging-arrive' : ''} style={fresh ? arrive : undefined}>
                                                        <div className={`relative flex gap-2 border-b border-gray-100 py-2.5 pl-3 pr-3 ${fresh ? 'bg-sky-50/60' : ''}`}>
                                                            {fresh && <span className="absolute left-1 top-[1.2rem] h-1.5 w-1.5 rounded-full bg-sky-500" />}
                                                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-[10px] font-bold text-white">SA</span>
                                                            <span className="min-w-0 flex-1">
                                                                <span className="flex items-baseline justify-between gap-2">
                                                                    <span className={`truncate text-[11px] text-gray-900 ${fresh ? 'font-bold' : 'font-semibold'}`}>Studio Aurora</span>
                                                                    <span className={`flex-shrink-0 text-[9px] ${fresh ? 'font-semibold text-sky-600' : 'text-gray-400'}`}>{message.day}</span>
                                                                </span>
                                                                <span className={`block truncate text-[11px] ${fresh ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>{message.subject}</span>
                                                                <span className="line-clamp-2 text-[10px] leading-snug text-gray-500">{message.text}</span>
                                                                {fresh && message.button && (
                                                                    <span className="mt-1.5 inline-flex max-w-full items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[9px] font-semibold text-indigo-600">
                                                                        <CalendarCheck className="h-3 w-3 flex-shrink-0" />
                                                                        <span className="truncate">{message.button}</span>
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Studio-Seite: was automatisch rausgeht – nur wenn neben dem Handy Platz ist (nicht in der schmalen lg-Spalte) */}
                <div className="absolute -right-8 top-16 z-10 hidden w-[16rem] sm:block lg:hidden xl:block">
                    <div className="tf-ui-float">
                        <div className="rounded-2xl border border-gray-200 bg-white p-3.5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)]">
                            <div className="flex items-center gap-2">
                                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-sky-500 text-[10px] font-bold text-white">T</span>
                                <span className="truncate text-xs font-semibold text-gray-900">{t.cardTitle}</span>
                            </div>
                            <p className="mt-1 truncate text-[10px] text-gray-500">{t.client} · Hydrafacial</p>
                            <ul className="mt-3 space-y-2">
                                {t.rows.map(([title, timing], index) => {
                                    const Icon = ROW_ICONS[index];
                                    const done = index <= step;
                                    return (
                                        <li
                                            key={title}
                                            className={`relative flex items-center gap-2 overflow-hidden rounded-xl border px-2.5 py-2 transition-colors duration-500 ${
                                                index === step ? 'border-indigo-200 bg-indigo-50/60' : 'border-gray-100 bg-white'
                                            }`}
                                        >
                                            <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg ${done ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'}`}>
                                                <Icon className="h-3.5 w-3.5" />
                                            </span>
                                            <span className="min-w-0 flex-1 leading-tight">
                                                <span className={`block truncate text-[11px] font-semibold ${done ? 'text-gray-900' : 'text-gray-500'}`}>{title}</span>
                                                <span className="block truncate text-[10px] text-gray-500">
                                                    {timing} ·{' '}
                                                    {index < step ? (
                                                        <span className="font-medium text-emerald-600">{t.sent}</span>
                                                    ) : index === step ? (
                                                        <span key={`label-${cycle}`} className="tf-ui-pop inline-block font-medium text-emerald-600" style={arrive}>
                                                            {t.sent}
                                                        </span>
                                                    ) : (
                                                        t.scheduled
                                                    )}
                                                </span>
                                            </span>
                                            {index < step ? (
                                                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                                    <Check className="h-3 w-3" strokeWidth={3} />
                                                </span>
                                            ) : index === step ? (
                                                <span key={`check-${cycle}`} className="tf-ui-pop flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500" style={arrive}>
                                                    <DrawCheck className="h-3 w-3" color="white" />
                                                </span>
                                            ) : (
                                                <Clock className="h-4 w-4 flex-shrink-0 text-gray-300" />
                                            )}
                                            {index === step && (
                                                <span key={`bar-${cycle}`} className="tf-send-progress absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-sky-500" />
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                            <p className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-500">
                                <ChannelIcon className="h-3.5 w-3.5 text-indigo-500" />
                                {t.channel}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Schmale Ansicht: kurzer Hinweis statt Studio-Karte */}
                <div key={`toast-${cycle}-${step}`} className="tf-ui-pop absolute -bottom-5 -left-2 z-10 max-w-[13rem] sm:hidden lg:block xl:hidden" style={arrive}>
                    <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white py-2 pl-2 pr-3 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.5)]">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                            <DrawCheck className="h-3.5 w-3.5" color="white" />
                        </span>
                        <span className="min-w-0 leading-tight">
                            <span className="block truncate text-[11px] font-semibold text-gray-900">{t.rows[step][0]}</span>
                            <span className="block truncate text-[10px] text-emerald-700">{t.auto}</span>
                        </span>
                    </div>
                </div>
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
