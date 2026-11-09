'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, Download, Gift, Mail, Paperclip, Store, Truck } from 'lucide-react';
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
import './voucher-demo.css';

const DURATIONS = [3000, 3000, 3400, 3400] as const;

/** Gutschein 80 €, eingelöst für eine Behandlung über 59 € → Restguthaben 21 €. Code-Format wie in der Kasse (GS-JJJJ-NNNNN). */
const AMOUNTS = [50, 80, 100] as const;
const VALUE = 80;
const SERVICE_PRICE = 59;
const REMAINING = VALUE - SERVICE_PRICE;
const CODE = 'GS-2026-00042';

type Labels = {
    sr: string;
    steps: [string, string, string, string];
    stepAria: string;
    shop: string;
    amount: string;
    variant: string;
    variants: [string, string, string];
    payment: string;
    payOnline: string;
    transfer: string;
    transferHint: string;
    payCta: (amount: string) => string;
    thanks: string;
    sent: string;
    voucher: string;
    forFrom: string;
    validUntil: string;
    validDate: string;
    download: string;
    now: string;
    mailSubject: string;
    attachment: string;
    pos: string;
    cart: string;
    open: string;
    client: string;
    initials: string;
    service: string;
    redeem: string;
    redeemBtn: string;
    multi: string;
    credit: string;
    due: string;
    statusEnter: string;
    statusCovered: string;
    statusPaid: string;
    active: string;
    online: string;
    balance: string;
    value: string;
};

const LABELS: DemoLabels<Labels> = {
    de: {
        sr: 'Beispiel für Gutscheine mit Treatflow: Tom kauft auf der Buchungsseite von Studio Aurora einen Gutschein über 80 € und bezahlt online mit Treatflow Pay. Der Gutschein im Design des Studios kommt mit Code als PDF per E-Mail. Lena löst ihn später an der Kasse für eine Behandlung über 59 € ein, das Restguthaben von 21 € bleibt automatisch gespeichert.',
        steps: ['Kaufen', 'Per E-Mail', 'Einlösen', 'Restwert'], stepAria: 'Schritt',
        shop: 'Gutschein verschenken', amount: 'Betrag wählen', variant: 'Variante', variants: ['PDF per Mail', 'Per Post', 'Abholung'],
        payment: 'Bezahlen', payOnline: 'Online bezahlen', transfer: 'Überweisung', transferHint: 'Rechnung mit GiroCode',
        payCta: (a) => `Jetzt ${a} bezahlen`, thanks: 'Vielen Dank für deinen Kauf!', sent: 'Dein Gutschein ist als PDF per E-Mail unterwegs.',
        voucher: 'Gutschein', forFrom: 'Für Lena · Von Tom', validUntil: 'Gültig bis', validDate: '31.12.2029',
        download: 'Gutschein als PDF herunterladen', now: 'jetzt', mailSubject: 'Dein Gutschein von Studio Aurora', attachment: 'Gutschein.pdf',
        pos: 'Treatflow Kasse', cart: 'Warenkorb', open: 'Kasse offen · Mia',
        client: 'Lena Wagner', initials: 'LW', service: 'Gesichtsbehandlung · 60 Min.',
        redeem: 'Treatflow-Gutschein einlösen', redeemBtn: 'Einlösen', multi: 'Mehrzweck', credit: 'Guthaben',
        due: 'Noch zu zahlen', statusEnter: 'Gutschein-Code eingeben', statusCovered: 'Vollständig durch Gutschein gedeckt', statusPaid: 'Bezahlt · TSE-signiert',
        active: 'Aktiv', online: 'Online', balance: 'Restguthaben', value: 'Wert',
    },
    en: {
        sr: "Example of gift vouchers with Treatflow: Jack buys an €80 voucher on Studio Aurora's booking page and pays online with Treatflow Pay. The voucher in the studio's own design arrives with a code as a PDF by email. Later, Emma redeems it at the till for a €59 treatment; the remaining €21 balance is saved automatically.",
        steps: ['Buy', 'By email', 'Redeem', 'Balance'], stepAria: 'Step',
        shop: 'Give a gift voucher', amount: 'Choose amount', variant: 'Delivery', variants: ['PDF by email', 'By post', 'Pick-up'],
        payment: 'Payment', payOnline: 'Pay online', transfer: 'Bank transfer', transferHint: 'Invoice with GiroCode',
        payCta: (a) => `Pay ${a} now`, thanks: 'Thank you for your purchase!', sent: 'Your voucher is on its way as a PDF by email.',
        voucher: 'Gift voucher', forFrom: 'For Emma · From Jack', validUntil: 'Valid until', validDate: '31/12/2029',
        download: 'Download voucher as PDF', now: 'now', mailSubject: 'Your gift voucher from Studio Aurora', attachment: 'Voucher.pdf',
        pos: 'Treatflow POS', cart: 'Cart', open: 'Till open · Mia',
        client: 'Emma Clarke', initials: 'EC', service: 'Classic facial · 60 min',
        redeem: 'Redeem Treatflow voucher', redeemBtn: 'Redeem', multi: 'Multi-purpose', credit: 'Balance',
        due: 'Left to pay', statusEnter: 'Enter voucher code', statusCovered: 'Fully covered by voucher', statusPaid: 'Paid · fiscally signed',
        active: 'Active', online: 'Online', balance: 'Remaining balance', value: 'Value',
    },
};

const FLOAT_SHADOW = 'shadow-[0_24px_50px_-20px_rgba(15,23,42,0.55)]';

/** Läuft von 0 nach 1 (ease-out), sobald `run` true wird; `restart` startet die Animation neu. */
function useProgress(run: boolean, delay: number, duration: number, restart: number): number {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!run) {
            setValue(0);
            return;
        }
        let frame = 0;
        const start = performance.now() + delay;
        const tick = (now: number) => {
            const progress = Math.max(0, Math.min(1, (now - start) / duration));
            setValue(1 - Math.pow(1 - progress, 3));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [run, delay, duration, restart]);
    return value;
}

/**
 * Gutscheine im Hero: online auf der Buchungsseite kaufen → PDF im Studio-Design per E-Mail →
 * an der Kasse mit Code einlösen → Restguthaben wird automatisch fortgeführt.
 */
export default function VouchersDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(LABELS, market);
    const { ref, step, cycle, playing, reduced, goTo } = useDemoSteps(DURATIONS);
    const eur = useMemo(() => {
        // Seite gibt es nur auf Deutsch; Englisch nur als Pflicht-Fallback der Labels
        const money = new Intl.NumberFormat(market === 'de' ? 'de-DE' : 'en-GB', { style: 'currency', currency: 'EUR' });
        return (v: number) => money.format(v);
    }, [market]);

    // An der Kasse: erst Code tippen, dann wird der Gutschein angerechnet
    const [applied, setApplied] = useState(false);
    useEffect(() => {
        if (step !== 2) return;
        const timer = window.setTimeout(() => setApplied(true), 1500);
        return () => {
            window.clearTimeout(timer);
            setApplied(false);
        };
    }, [step, cycle]);
    const redeemed = step === 3 || (step === 2 && applied);
    const settle = useProgress(step === 2 && applied, 0, 700, cycle);
    const due = step === 3 ? 0 : redeemed ? SERVICE_PRICE * (1 - settle) : SERVICE_PRICE;
    const drain = useProgress(step === 3 && !reduced, 350, 1100, cycle);
    const balance = reduced ? REMAINING : VALUE - SERVICE_PRICE * drain;
    const atPos = step >= 2;

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>

            <DemoGlow />

            <div className="relative" aria-hidden="true">
                <DemoWindow
                    title={atPos ? t.pos : 'Studio Aurora'}
                    subtitle={atPos ? t.cart : t.shop}
                    status={
                        atPos ? (
                            <>
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                {t.open}
                            </>
                        ) : undefined
                    }
                >
                    <div className="h-[19.5rem] p-4">
                        {/* 1 · Online kaufen */}
                        {step === 0 && (
                            <div key={`shop-${cycle}`} className="flex h-full flex-col gap-2.5">
                                <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                    <Gift className="h-4 w-4 text-rose-500" />
                                    {t.shop}
                                </p>
                                <div className="tf-ui-line-in">
                                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{t.amount}</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {AMOUNTS.map((amount) => (
                                            <span
                                                key={amount}
                                                className={`flex h-9 items-center justify-center rounded-xl border text-sm font-semibold tabular-nums ${
                                                    amount === VALUE
                                                        ? 'border-indigo-300 bg-indigo-50 text-indigo-700 shadow-[0_0_0_3px_rgba(99,102,241,0.15)]'
                                                        : 'border-gray-200 text-gray-600'
                                                }`}
                                            >
                                                {eur(amount)}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="tf-ui-line-in" style={{ animationDelay: '150ms' }}>
                                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{t.variant}</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[Mail, Truck, Store].map((Icon, index) => (
                                            <span
                                                key={t.variants[index]}
                                                className={`flex h-9 items-center justify-center gap-1 rounded-xl border px-1 text-[11px] font-medium ${
                                                    index === 0 ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500'
                                                }`}
                                            >
                                                <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                                                <span className="truncate">{t.variants[index]}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="tf-ui-line-in" style={{ animationDelay: '300ms' }}>
                                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{t.payment}</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="rounded-xl border border-indigo-300 bg-indigo-50 px-2.5 py-1.5">
                                            <span className="block truncate text-xs font-semibold text-indigo-700">{t.payOnline}</span>
                                            <span className="block truncate text-[10px] text-indigo-500">Treatflow Pay</span>
                                        </span>
                                        <span className="rounded-xl border border-gray-200 px-2.5 py-1.5">
                                            <span className="block truncate text-xs font-semibold text-gray-600">{t.transfer}</span>
                                            <span className="block truncate text-[10px] text-gray-400">{t.transferHint}</span>
                                        </span>
                                    </div>
                                </div>
                                <span className="tf-ui-ring mt-auto flex h-10 items-center justify-center rounded-xl bg-indigo-600 px-3 text-xs font-semibold text-white sm:text-sm">
                                    <span className="truncate">{t.payCta(eur(VALUE))}</span>
                                </span>
                            </div>
                        )}

                        {/* 2 · PDF im eigenen Design per E-Mail */}
                        {step === 1 && (
                            <div key={`sent-${cycle}`} className="flex h-full flex-col items-center">
                                <div className="flex w-full items-center gap-2.5">
                                    <span className="tf-ui-pop flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                                        <DrawCheck className="h-4 w-4" color="white" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm font-semibold text-gray-900">{t.thanks}</span>
                                        <span className="block truncate text-xs text-gray-500">{t.sent}</span>
                                    </span>
                                </div>
                                <div
                                    className="tf-ui-pop relative mt-4 aspect-[210/148] w-[15.5rem] overflow-hidden rounded-lg bg-gradient-to-br from-rose-500 via-fuchsia-600 to-indigo-600 p-3 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.6)]"
                                    style={{ animationDelay: '250ms' }}
                                >
                                    <span className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-white/10" />
                                    <span className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-white/10" />
                                    <div className="relative flex h-full flex-col items-center justify-center rounded-md bg-white px-3 text-center leading-tight">
                                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gray-400">Studio Aurora</p>
                                        <p className="mt-0.5 font-serif text-lg italic text-fuchsia-700">{t.voucher}</p>
                                        <p className="text-2xl font-bold tabular-nums text-gray-900">{eur(VALUE)}</p>
                                        <p className="mt-0.5 text-[9px] text-gray-500">{t.forFrom}</p>
                                        <span className="my-1.5 w-2/3 border-t border-dashed border-fuchsia-300" />
                                        <p className="font-mono text-[10px] font-bold text-fuchsia-700">{CODE}</p>
                                        <p className="text-[8px] text-gray-400">
                                            {t.validUntil} {t.validDate}
                                        </p>
                                    </div>
                                </div>
                                <span className="mt-auto flex items-center gap-1.5 text-xs font-medium text-indigo-600">
                                    <Download className="h-3.5 w-3.5" />
                                    {t.download}
                                </span>
                            </div>
                        )}

                        {/* 3/4 · An der Kasse einlösen, Restwert bleibt */}
                        {atPos && (
                            <div key={`pos-${cycle}`} className="flex h-full flex-col gap-2.5">
                                <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-3">
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-sm font-semibold text-rose-700">
                                        {t.initials}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block truncate text-sm font-semibold text-gray-900">{t.client}</span>
                                        <span className="block truncate text-xs text-gray-500">{t.service}</span>
                                    </span>
                                    <span className="text-sm font-semibold tabular-nums text-indigo-600">{eur(SERVICE_PRICE)}</span>
                                </div>

                                <div className="rounded-xl border border-gray-100 p-3">
                                    <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                                        <Gift className="h-3.5 w-3.5 text-rose-500" />
                                        {t.redeem}
                                    </p>
                                    <div className="mt-2 h-11">
                                        {redeemed ? (
                                            <div className={`${step === 2 ? 'tf-ui-pop' : ''} flex h-full items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5`}>
                                                <span className="min-w-0">
                                                    <span className="block font-mono text-xs font-bold text-gray-900">{CODE}</span>
                                                    <span className="block truncate text-[10px] text-emerald-800">
                                                        {t.multi} · {t.credit} {eur(VALUE)}
                                                    </span>
                                                </span>
                                                <span className="flex-shrink-0 text-sm font-bold tabular-nums text-emerald-700">−{eur(SERVICE_PRICE)}</span>
                                            </div>
                                        ) : (
                                            <div className="flex h-full gap-2">
                                                <span className="flex min-w-0 flex-1 items-center rounded-lg border border-indigo-300 px-2.5 font-mono text-xs font-semibold text-gray-900 shadow-[0_0_0_3px_rgba(99,102,241,0.12)]">
                                                    <span className="tf-voucher-type">{CODE}</span>
                                                </span>
                                                <span className="flex items-center rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white">{t.redeemBtn}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-end justify-between gap-3 border-t border-dashed border-gray-200 px-1 pt-2">
                                    <span className="text-sm text-gray-500">{t.due}</span>
                                    <span className="text-2xl font-bold tabular-nums tracking-tight text-gray-900">{eur(due)}</span>
                                </div>

                                <div
                                    className={`mt-auto flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-center text-xs font-semibold transition-colors duration-500 sm:text-sm ${
                                        step === 3 ? 'bg-emerald-50 text-emerald-700' : redeemed ? 'bg-indigo-50 text-indigo-700' : 'bg-gray-50 text-gray-400'
                                    }`}
                                >
                                    {step === 3 && <Check className="h-4 w-4 flex-shrink-0" />}
                                    <span className="truncate">{step === 3 ? t.statusPaid : redeemed ? t.statusCovered : t.statusEnter}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </DemoWindow>

                {/* E-Mail mit PDF im Anhang */}
                {step === 1 && (
                    <div key={`mail-${cycle}`} className="tf-ui-pop absolute -right-2 -top-9 z-20 w-[12.5rem] sm:-right-10 sm:w-60" style={{ animationDelay: '700ms' }}>
                        <div className="tf-ui-float">
                            <div className={`flex items-start gap-2 rounded-2xl border border-gray-200 bg-white p-2.5 ${FLOAT_SHADOW}`}>
                                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 text-white">
                                    <Mail className="h-4 w-4" />
                                </span>
                                <span className="min-w-0 flex-1 text-[11px] leading-snug">
                                    <span className="flex justify-between gap-2">
                                        <span className="truncate font-semibold text-gray-900">Studio Aurora</span>
                                        <span className="text-gray-400">{t.now}</span>
                                    </span>
                                    <span className="block truncate text-gray-600">{t.mailSubject}</span>
                                    <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-rose-50 px-1.5 py-0.5 text-[10px] font-medium text-rose-700">
                                        <Paperclip className="h-3 w-3" />
                                        {t.attachment}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Gutschein in der Kasse: Restguthaben läuft herunter */}
                {step === 3 && (
                    <div key={`balance-${cycle}`} className="tf-ui-pop absolute -right-2 -top-9 z-20 w-[11rem] sm:-right-10 sm:w-52">
                        <div className="tf-ui-float">
                            <div className={`rounded-2xl border border-gray-200 bg-white p-3 ${FLOAT_SHADOW}`}>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="truncate font-mono text-[11px] font-bold text-gray-900">{CODE}</span>
                                    <span className="rounded-full bg-emerald-100 px-1.5 text-[9px] font-semibold leading-4 text-emerald-800">{t.active}</span>
                                </div>
                                <p className="mt-0.5 truncate text-[10px] text-gray-500">
                                    {t.online} · {t.multi}
                                </p>
                                <p className="mt-2 text-[10px] text-gray-500">{t.balance}</p>
                                <p className="text-xl font-bold tabular-nums tracking-tight text-gray-900">{eur(balance)}</p>
                                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-100">
                                    <span
                                        className="block h-full rounded-full bg-gradient-to-r from-indigo-600 to-sky-500"
                                        style={{ width: `${(balance / VALUE) * 100}%` }}
                                    />
                                </div>
                                <p className="mt-1.5 flex justify-between gap-2 text-[10px] text-gray-400">
                                    <span>{t.value}</span>
                                    <span className="tabular-nums">{eur(VALUE)}</span>
                                </p>
                                <p className="flex justify-between gap-2 text-[10px] text-gray-400">
                                    <span className="truncate">{t.validUntil}</span>
                                    <span className="tabular-nums">{t.validDate}</span>
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
