'use client';

import { useMemo } from 'react';
import { CalendarDays, Check, CreditCard, Lock, Sparkles, Wallet } from 'lucide-react';
import type { SiteMarket } from '@/app/site/content/shared';
import {
    DemoGlow,
    DemoStepper,
    DemoWindow,
    DrawCheck,
    pickLabels,
    useDemoSteps,
    type DemoLabels,
    type FeatureDemoProps,
} from './shared';
import './pay-demo.css';

const DURATIONS = [2800, 3400, 2800, 3800] as const;

/** Leistung 90 €, Anzahlung 30 % = 27 €, Rest im Studio 63 €. Gebühr 2,69 % von 27 € = 0,73 € (wie in tfv2 gerundet). */
const PRICE = 90;
const DEPOSIT_RATE = 0.3;
const DEPOSIT = 27;
const REST = 63;
const FEE_RATE = 0.0269;
const FEE = 0.73;
const PAYOUT = 26.27;

const LOCALES: Record<SiteMarket, string> = {
    de: 'de-DE',
    en: 'en-GB',
    tr: 'tr-TR',
    nl: 'nl-NL',
    it: 'it-IT',
    pl: 'pl-PL',
    es: 'es-ES',
    fr: 'fr-FR',
};

type Labels = {
    sr: string;
    steps: [string, string, string, string];
    stepAria: string;
    booking: string;
    when: string;
    day: string;
    deposit: string;
    summary: string;
    price: string;
    rest: string;
    dueToday: string;
    continueCta: string;
    card: string;
    secure: string;
    payCta: (amount: string) => string;
    booked: string;
    paidDeposit: string;
    emailSent: string;
    calendar: string;
    client: string;
    received: string;
    dueOnSite: string;
    setting: string;
    modes: [string, string, string];
    ofPrice: string;
    fee: string;
    payout: string;
};

const LABELS: DemoLabels<Labels> = {
    de: {
        sr: 'Beispiel für Treatflow Pay: Eine Kundin bucht online einen Hydrafacial für 90 € und zahlt direkt 30 % Anzahlung, also 27 €, per Karte. Der Termin ist sofort bestätigt und steht im Studio-Kalender als bezahlt, die restlichen 63 € zahlt sie im Studio. Die Gebühr beträgt 2,69 % pro Transaktion.',
        steps: ['Leistung', 'Bezahlen', 'Gebucht', 'Kalender'], stepAria: 'Schritt',
        booking: 'Online-Buchung', when: 'Fr. 10:00', day: 'Fr. 20. Nov.', deposit: 'Anzahlung',
        summary: 'Zahlung bei Buchung', price: 'Preis', rest: 'Rest im Studio', dueToday: 'Heute online',
        continueCta: 'Weiter zur Anzahlung', card: 'Karteninformationen', secure: 'Sicher bezahlen über Stripe',
        payCta: (a) => `${a} bezahlen`, booked: 'Termin gebucht', paidDeposit: 'Online-Anzahlung', emailSent: 'Bestätigung per E-Mail verschickt',
        calendar: 'Kalender', client: 'Lena Wagner', received: 'Anzahlung eingegangen', dueOnSite: 'Noch vor Ort zu zahlen',
        setting: 'Zahlung bei Online-Buchung', modes: ['Keine', 'Anzahlung', 'Voll'], ofPrice: 'vom Preis', fee: 'Gebühr', payout: 'Auszahlung',
    },
    en: {
        sr: 'Example of Treatflow Pay: a client books a €90 Hydrafacial online and pays a 30% deposit of €27 by card right away. The appointment is confirmed instantly and shows as paid in the salon calendar; the remaining €63 is paid at the salon. The fee is 2.69% per transaction.',
        steps: ['Service', 'Pay', 'Booked', 'Calendar'], stepAria: 'Step',
        booking: 'Online booking', when: 'Fri 10:00', day: 'Fri 20 Nov', deposit: 'Deposit',
        summary: 'Payment at booking', price: 'Price', rest: 'Rest at the salon', dueToday: 'Due online today',
        continueCta: 'Continue to deposit', card: 'Card information', secure: 'Secure payment via Stripe',
        payCta: (a) => `Pay ${a}`, booked: 'Appointment booked', paidDeposit: 'Online deposit', emailSent: 'Confirmation sent by email',
        calendar: 'Calendar', client: 'Emma Clarke', received: 'Deposit received', dueOnSite: 'To be paid on site',
        setting: 'Payment at online booking', modes: ['None', 'Deposit', 'Full'], ofPrice: 'of price', fee: 'Fee', payout: 'Payout',
    },
    nl: {
        sr: 'Voorbeeld van Treatflow Pay: een klant boekt online een Hydrafacial van € 90 en betaalt meteen 30% aanbetaling, € 27, met haar kaart. De afspraak is direct bevestigd en staat als betaald in de agenda van de salon; de resterende € 63 betaalt ze in de salon. De kosten zijn 2,69% per transactie.',
        steps: ['Kiezen', 'Betalen', 'Geboekt', 'Agenda'], stepAria: 'Stap',
        booking: 'Online boeken', when: 'vr 10:00', day: 'vr 20 nov', deposit: 'Aanbetaling',
        summary: 'Betaling bij boeken', price: 'Prijs', rest: 'Rest in de salon', dueToday: 'Vandaag online',
        continueCta: 'Verder naar aanbetaling', card: 'Kaartgegevens', secure: 'Veilig betalen via Stripe',
        payCta: (a) => `${a} betalen`, booked: 'Afspraak geboekt', paidDeposit: 'Online aanbetaling', emailSent: 'Bevestiging per e-mail verstuurd',
        calendar: 'Agenda', client: 'Sanne de Vries', received: 'Aanbetaling ontvangen', dueOnSite: 'Nog te betalen in salon',
        setting: 'Betaling bij online boeken', modes: ['Geen', 'Aanbetaling', 'Volledig'], ofPrice: 'van de prijs', fee: 'Kosten', payout: 'Uitbetaling',
    },
    it: {
        sr: "Esempio di Treatflow Pay: una cliente prenota online un Hydrafacial da 90 € e paga subito con carta un acconto del 30%, cioè 27 €. L'appuntamento è confermato all'istante e risulta pagato nell'agenda del centro; i restanti 63 € li paga in centro. La commissione è del 2,69% per transazione.",
        steps: ['Servizio', 'Paga', 'Prenotato', 'Agenda'], stepAria: 'Passo',
        booking: 'Prenotazione online', when: 'ven 10:00', day: 'ven 20 nov', deposit: 'Acconto',
        summary: 'Pagamento alla prenotazione', price: 'Prezzo', rest: 'Saldo in centro', dueToday: 'Oggi online',
        continueCta: "Continua con l'acconto", card: 'Dati della carta', secure: 'Pagamento sicuro con Stripe',
        payCta: (a) => `Paga ${a}`, booked: 'Appuntamento prenotato', paidDeposit: 'Acconto online', emailSent: 'Conferma inviata via e-mail',
        calendar: 'Agenda', client: 'Giulia Romano', received: 'Acconto ricevuto', dueOnSite: 'Da pagare in centro',
        setting: 'Pagamento alla prenotazione', modes: ['Nessuno', 'Acconto', 'Intero'], ofPrice: 'del prezzo', fee: 'Commissione', payout: 'Versamento',
    },
    pl: {
        sr: 'Przykład Treatflow Pay: klientka rezerwuje online Hydrafacial za 90 € i od razu płaci kartą 30% zaliczki, czyli 27 €. Wizyta jest od razu potwierdzona i widnieje w kalendarzu salonu jako opłacona, pozostałe 63 € klientka płaci w salonie. Opłata wynosi 2,69% za transakcję.',
        steps: ['Usługa', 'Płatność', 'Gotowe', 'Kalendarz'], stepAria: 'Krok',
        booking: 'Rezerwacja online', when: 'pt. 10:00', day: 'pt. 20 lis', deposit: 'Zaliczka',
        summary: 'Płatność przy rezerwacji', price: 'Cena', rest: 'Reszta w salonie', dueToday: 'Dziś online',
        continueCta: 'Przejdź do zaliczki', card: 'Dane karty', secure: 'Bezpieczna płatność przez Stripe',
        payCta: (a) => `Zapłać ${a}`, booked: 'Wizyta zarezerwowana', paidDeposit: 'Zaliczka online', emailSent: 'Potwierdzenie wysłane e-mailem',
        calendar: 'Kalendarz', client: 'Anna Nowak', received: 'Zaliczka wpłynęła', dueOnSite: 'Do zapłaty w salonie',
        setting: 'Płatność przy rezerwacji online', modes: ['Brak', 'Zaliczka', 'Całość'], ofPrice: 'ceny', fee: 'Opłata', payout: 'Wypłata',
    },
    es: {
        sr: 'Ejemplo de Treatflow Pay: una clienta reserva online un Hydrafacial de 90 € y paga al momento con tarjeta una señal del 30 %, es decir, 27 €. La cita queda confirmada al instante y aparece como pagada en la agenda del centro; los 63 € restantes los paga en el centro. La comisión es del 2,69 % por transacción.',
        steps: ['Servicio', 'Pago', 'Reservado', 'Agenda'], stepAria: 'Paso',
        booking: 'Reserva online', when: 'vie 10:00', day: 'vie 20 nov', deposit: 'Señal',
        summary: 'Pago al reservar', price: 'Precio', rest: 'Resto en el centro', dueToday: 'Hoy online',
        continueCta: 'Continuar a la señal', card: 'Datos de la tarjeta', secure: 'Pago seguro con Stripe',
        payCta: (a) => `Pagar ${a}`, booked: 'Cita reservada', paidDeposit: 'Señal online', emailSent: 'Confirmación enviada por e-mail',
        calendar: 'Agenda', client: 'Lucía Martín', received: 'Señal recibida', dueOnSite: 'Pendiente en el centro',
        setting: 'Pago al reservar online', modes: ['Ninguno', 'Señal', 'Completo'], ofPrice: 'del precio', fee: 'Comisión', payout: 'Ingreso',
    },
    fr: {
        sr: "Exemple de Treatflow Pay : une cliente réserve en ligne un Hydrafacial à 90 € et règle tout de suite par carte un acompte de 30 %, soit 27 €. Le rendez-vous est confirmé immédiatement et apparaît comme payé dans l'agenda de l'institut ; le solde de 63 € est réglé à l'institut. Les frais sont de 2,69 % par transaction.",
        steps: ['Soin', 'Paiement', 'Réservé', 'Agenda'], stepAria: 'Étape',
        booking: 'Réservation en ligne', when: 'ven. 10:00', day: 'ven. 20 nov.', deposit: 'Acompte',
        summary: 'Paiement à la réservation', price: 'Prix', rest: "Solde à l'institut", dueToday: 'À payer en ligne',
        continueCta: "Continuer vers l'acompte", card: 'Informations de carte', secure: 'Paiement sécurisé via Stripe',
        payCta: (a) => `Payer ${a}`, booked: 'Rendez-vous réservé', paidDeposit: 'Acompte en ligne', emailSent: 'Confirmation envoyée par e-mail',
        calendar: 'Agenda', client: 'Camille Laurent', received: 'Acompte reçu', dueOnSite: 'Reste à payer sur place',
        setting: 'Paiement à la réservation', modes: ['Aucun', 'Acompte', 'Intégral'], ofPrice: 'du prix', fee: 'Frais', payout: 'Virement',
    },
};

const FLOAT_SHADOW = 'shadow-[0_24px_50px_-20px_rgba(15,23,42,0.55)]';

/**
 * Treatflow Pay im Hero: Leistung mit Anzahlung wählen → im Stripe-Checkout mit Karte zahlen →
 * Termin gebucht → im Studio-Kalender als bezahlt markiert (mit Gebühr und Auszahlung ab sm).
 */
export default function TreatflowPayDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const { eur, pct } = useMemo(() => {
        const locale = LOCALES[market] ?? 'en-GB';
        const money = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' });
        const percent = new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 2 });
        return { eur: (v: number) => money.format(v), pct: (v: number) => percent.format(v) };
    }, [market]);

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>

            <DemoGlow />

            <div className="relative" aria-hidden="true">
                <DemoWindow
                    title="Studio Aurora"
                    subtitle={t.booking}
                    status={
                        <>
                            <Lock className="h-3.5 w-3.5 text-emerald-600" />
                            Treatflow Pay
                        </>
                    }
                >
                    <div className="space-y-3 p-4 sm:p-5">
                        {/* Leistung mit Anzahlung */}
                        <div
                            className={`flex items-center gap-3 rounded-xl border p-3 transition-colors duration-500 ${
                                step === 0 ? 'border-indigo-200 bg-indigo-50/70' : 'border-gray-100 bg-white'
                            }`}
                        >
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 text-indigo-600">
                                <Sparkles className="h-5 w-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-semibold text-gray-900">Hydrafacial Deluxe</span>
                                <span className="block truncate text-xs tabular-nums text-gray-500">
                                    {t.when} · {eur(PRICE)}
                                </span>
                            </span>
                            <span className="flex-shrink-0 rounded-lg bg-white px-2.5 py-1 text-right ring-1 ring-indigo-100">
                                <span className="block text-[10px] font-medium text-indigo-500">{t.deposit}</span>
                                <span className="block text-sm font-bold tabular-nums text-indigo-700">{eur(DEPOSIT)}</span>
                            </span>
                        </div>

                        {/* Wechselnder Bereich mit fester Höhe */}
                        <div className="h-[9rem] overflow-hidden rounded-xl border border-gray-100">
                            {step === 0 && (
                                <div key={`summary-${cycle}`} className="flex h-full flex-col">
                                    <p className="px-3 pt-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{t.summary}</p>
                                    <div className="flex-1 space-y-1.5 px-3 pt-2 text-xs">
                                        {[
                                            { label: t.price, value: PRICE },
                                            { label: t.rest, value: REST },
                                        ].map(({ label, value }, index) => (
                                            <p
                                                key={label}
                                                className="tf-ui-line-in flex justify-between gap-3"
                                                style={{ animationDelay: `${index * 160}ms` }}
                                            >
                                                <span className="truncate text-gray-500">{label}</span>
                                                <span className="tabular-nums text-gray-700">{eur(value)}</span>
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between gap-3 border-t border-dashed border-gray-200 px-3 py-2.5">
                                        <span className="flex min-w-0 items-center gap-1.5 text-sm text-gray-500">
                                            <span className="truncate">{t.dueToday}</span>
                                            <span className="rounded bg-indigo-50 px-1.5 text-[10px] font-semibold text-indigo-600">{pct(DEPOSIT_RATE)}</span>
                                        </span>
                                        <span className="text-xl font-bold tabular-nums tracking-tight text-gray-900">{eur(DEPOSIT)}</span>
                                    </div>
                                </div>
                            )}

                            {step === 1 && (
                                <div key={`card-${cycle}`} className="tf-ui-line-in flex h-full flex-col p-3">
                                    <p className="mb-1 text-[11px] font-medium text-gray-500">{t.card}</p>
                                    <div className="overflow-hidden rounded-lg border border-indigo-300 font-mono text-xs text-gray-900 shadow-[0_0_0_3px_rgba(99,102,241,0.12)]">
                                        <div className="flex h-8 items-center gap-2 border-b border-gray-200 px-2.5">
                                            <span className="tf-pay-type">4242 4242 4242 4242</span>
                                            <CreditCard className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400" />
                                        </div>
                                        <div className="grid h-8 grid-cols-2 divide-x divide-gray-200">
                                            <span className="flex items-center px-2.5">
                                                <span className="tf-pay-type" style={{ animationDelay: '1.3s', animationDuration: '0.4s' }}>
                                                    12 / 28
                                                </span>
                                            </span>
                                            <span className="flex items-center px-2.5">
                                                <span className="tf-pay-type" style={{ animationDelay: '1.8s', animationDuration: '0.3s' }}>
                                                    •••
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mt-auto flex items-center gap-1 text-[11px] text-gray-400">
                                        <Lock className="h-3 w-3" />
                                        {t.secure}
                                    </p>
                                </div>
                            )}

                            {step >= 2 && (
                                <div key={`booked-${cycle}`} className="flex h-full flex-col items-center justify-center gap-1 px-3 text-center">
                                    <span className="tf-ui-pop mb-1 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500">
                                        <DrawCheck className="h-6 w-6" color="white" />
                                    </span>
                                    <p className="text-sm font-semibold text-gray-900">{t.booked}</p>
                                    <p className="text-xs text-gray-500">
                                        {t.paidDeposit}: <span className="font-semibold tabular-nums text-emerald-700">{eur(DEPOSIT)}</span>
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {t.rest}: <span className="tabular-nums">{eur(REST)}</span>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Aktion */}
                        <div
                            key={`action-${step < 2 ? step : 2}-${cycle}`}
                            className={`flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-center text-xs font-semibold sm:text-sm ${
                                step >= 2 ? 'tf-ui-pop bg-emerald-50 text-emerald-700' : 'tf-ui-ring bg-indigo-600 text-white'
                            }`}
                            style={step === 1 ? { animationDelay: '2.2s' } : undefined}
                        >
                            {step >= 2 && <Check className="h-4 w-4 flex-shrink-0" />}
                            <span className="truncate">{step === 0 ? t.continueCta : step === 1 ? t.payCta(eur(DEPOSIT)) : t.emailSent}</span>
                        </div>
                    </div>
                </DemoWindow>

                {/* Einstellung pro Leistung (nur ab sm, damit auf dem Handy nichts verdeckt wird) */}
                {step === 0 && (
                    <div key={`setting-${cycle}`} className="tf-ui-pop absolute -bottom-8 -left-12 z-10 hidden w-56 sm:block" style={{ animationDelay: '300ms' }}>
                        <div className="tf-ui-float">
                            <div className={`rounded-2xl border border-gray-200 bg-white p-3 ${FLOAT_SHADOW}`}>
                                <p className="truncate text-[11px] font-semibold text-gray-900">{t.setting}</p>
                                <div className="mt-2 grid grid-cols-3 gap-1 rounded-lg bg-gray-100 p-0.5 text-[10px] font-medium">
                                    {t.modes.map((mode, index) => (
                                        <span
                                            key={mode}
                                            className={`truncate rounded-md px-1 py-1 text-center ${index === 1 ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500'}`}
                                        >
                                            {mode}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-2 text-[11px] text-gray-500">
                                    <span className="font-semibold tabular-nums text-gray-900">{pct(DEPOSIT_RATE)}</span> {t.ofPrice}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Termin im Studio-Kalender */}
                {step === 3 && (
                    <div key={`calendar-${cycle}`} className="tf-ui-pop absolute -right-2 -top-9 z-20 w-[11.5rem] sm:-right-10 sm:w-52">
                        <div className="tf-ui-float">
                            <div className={`rounded-2xl border border-gray-200 bg-white p-3 ${FLOAT_SHADOW}`}>
                                <div className="flex items-center justify-between gap-2 text-[10px] font-semibold text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <CalendarDays className="h-3.5 w-3.5 text-indigo-500" />
                                        {t.calendar}
                                    </span>
                                    <span className="truncate">{t.day}</span>
                                </div>
                                <div className="mt-2 flex gap-2 border-t border-gray-100 pt-2">
                                    <span className="w-7 flex-shrink-0 text-[9px] tabular-nums text-gray-400">10:00</span>
                                    <div className="min-w-0 flex-1 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 px-2 py-1.5 text-white">
                                        <p className="flex items-center gap-1 text-[11px] font-semibold">
                                            <span className="flex-shrink-0 rounded-full bg-white/25 px-1 text-[9px] font-bold leading-[14px]">Pay</span>
                                            <span className="truncate">{t.client}</span>
                                        </p>
                                        <p className="truncate text-[10px] text-white/85">Hydrafacial Deluxe</p>
                                    </div>
                                </div>
                                <div className="mt-2 rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1.5 text-[10px] leading-snug">
                                    <p className="font-medium text-emerald-700">Treatflow Pay</p>
                                    <p className="flex justify-between gap-2 font-semibold text-emerald-900">
                                        <span className="truncate">{t.received}</span>
                                        <span className="tabular-nums">{eur(DEPOSIT)}</span>
                                    </p>
                                    <p className="flex justify-between gap-2 text-gray-600">
                                        <span className="truncate">{t.dueOnSite}</span>
                                        <span className="tabular-nums">{eur(REST)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Gebühr und Auszahlung (nur ab sm) */}
                {step === 3 && (
                    <div key={`fee-${cycle}`} className="tf-ui-pop absolute -bottom-6 -left-12 z-10 hidden w-48 sm:block" style={{ animationDelay: '450ms' }}>
                        <div className="tf-ui-float" style={{ animationDelay: '-3s' }}>
                            <div className={`rounded-2xl border border-gray-200 bg-white p-3 text-[11px] ${FLOAT_SHADOW}`}>
                                <p className="flex items-center gap-1.5 font-semibold text-gray-900">
                                    <Wallet className="h-3.5 w-3.5 text-indigo-500" />
                                    Treatflow Pay
                                </p>
                                <p className="mt-1.5 flex justify-between gap-2 text-gray-500">
                                    <span className="truncate">
                                        {t.fee} {pct(FEE_RATE)}
                                    </span>
                                    <span className="tabular-nums">−{eur(FEE)}</span>
                                </p>
                                <p className="mt-0.5 flex justify-between gap-2 font-semibold text-emerald-700">
                                    <span className="truncate">{t.payout}</span>
                                    <span className="tabular-nums">{eur(PAYOUT)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper
                labels={t.steps}
                durations={DURATIONS}
                step={step}
                cycle={cycle}
                playing={playing}
                onSelect={goTo}
                stepAriaPrefix={t.stepAria}
            />
        </div>
    );
}
