'use client';

import { useEffect, useRef, useState } from 'react';
import { Banknote, Check, CreditCard, Gift, Nfc, Split } from 'lucide-react';
import ReceiptQr from './ReceiptQr';
import { formatEuro, useInView, usePrefersReducedMotion } from '@/app/components/motion';

const STEPS = [
    { label: 'Termin', duration: 2400 },
    { label: 'Warenkorb', duration: 3000 },
    { label: 'Karte', duration: 2800 },
    { label: 'Beleg', duration: 4400 },
] as const;

const ITEMS = [
    { name: 'Hydrafacial Deluxe', meta: 'Behandlung · 60 Min.', price: 89 },
    { name: 'Pflegeserum 30 ml', meta: 'Produkt', price: 39 },
];

const TOTAL = ITEMS.reduce((sum, item) => sum + item.price, 0);

const METHODS = [
    { label: 'Bar', icon: Banknote },
    { label: 'Karte', icon: CreditCard },
    { label: 'Gutschein', icon: Gift },
    { label: 'Split', icon: Split },
];

/** Gezackte Unterkante eines Kassenbons */
const ZIGZAG = Array.from({ length: 20 }, (_, i) => `L${i * 5 + 2.5} 6 L${i * 5 + 5} 0`).join(' ');

/**
 * Animierter Kassiervorgang im Hero: Termin → Warenkorb → Kartenzahlung über SumUp → signierter Beleg.
 * Läuft nur, solange er sichtbar ist; bei „Bewegung reduzieren“ steht der fertige Beleg da.
 */
export default function KasseCheckoutDemo() {
    const reduced = usePrefersReducedMotion();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: false });
    const [step, setStep] = useState(0);
    const [cycle, setCycle] = useState(0);
    const [total, setTotal] = useState(0);
    const playing = inView && !reduced;
    const shownStep = reduced ? 3 : step;

    // Nächster Schritt nach Ablauf der Zeit; nach dem Beleg beginnt der Ablauf von vorn
    useEffect(() => {
        if (!playing) return;
        const timer = window.setTimeout(() => {
            if (step === STEPS.length - 1) {
                setCycle((c) => c + 1);
                setStep(0);
            } else {
                setStep(step + 1);
            }
        }, STEPS[step].duration);
        return () => window.clearTimeout(timer);
    }, [step, playing, cycle]);

    // Summe zählt hoch, sobald die Positionen im Warenkorb landen
    const totalFrame = useRef(0);
    useEffect(() => {
        cancelAnimationFrame(totalFrame.current);
        if (shownStep === 0) {
            setTotal(0);
            return;
        }
        if (shownStep > 1 || reduced) {
            setTotal(TOTAL);
            return;
        }
        const start = performance.now() + 350;
        const tick = (now: number) => {
            const progress = Math.max(0, Math.min(1, (now - start) / 900));
            setTotal(Math.round(TOTAL * (1 - Math.pow(1 - progress, 3)) * 100) / 100);
            if (progress < 1) totalFrame.current = requestAnimationFrame(tick);
        };
        totalFrame.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(totalFrame.current);
    }, [shownStep, reduced, cycle]);

    const goTo = (index: number) => {
        setStep(index);
        setCycle((c) => c + 1);
    };

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">
                Beispiel für einen Kassiervorgang mit Treatflow: Ein Termin wird mit einem Klick in den Warenkorb übernommen,
                die Kundin zahlt mit Karte am SumUp-Terminal und erhält einen TSE-signierten Beleg per E-Mail.
            </p>

            <div
                className="pointer-events-none absolute inset-x-4 bottom-16 top-16 rounded-[2rem] bg-gradient-to-br from-indigo-400/30 via-sky-300/25 to-fuchsia-300/20 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative" aria-hidden="true">
                {/* Kassenfenster */}
                <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.5)]">
                    <div className="flex items-center justify-between gap-3 border-b border-gray-100 bg-gray-50/80 px-4 py-2.5">
                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-sky-500 text-[11px] font-bold text-white">
                                T
                            </span>
                            <span className="text-sm font-semibold text-gray-900">Treatflow Kasse</span>
                            <span className="hidden text-sm text-gray-400 sm:inline">/ Warenkorb</span>
                        </div>
                        <span className="flex items-center gap-1.5 whitespace-nowrap text-xs text-gray-500">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Kasse offen · Mia
                        </span>
                    </div>

                    <div className="space-y-3.5 p-4 sm:p-5">
                        {/* Termin aus dem Kalender */}
                        <div
                            className={`flex items-center gap-3 rounded-xl border p-3 transition-colors duration-500 ${
                                shownStep === 0 ? 'border-indigo-200 bg-indigo-50/70' : 'border-gray-100 bg-white'
                            }`}
                        >
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-sm font-semibold text-rose-700">
                                LW
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-semibold text-gray-900">Lena Wagner</span>
                                <span className="block truncate text-xs text-gray-500">Heute 10:00 · Hydrafacial Deluxe</span>
                            </span>
                            {shownStep === 0 ? (
                                <span className="tf-ui-ring whitespace-nowrap rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white">
                                    Kassieren
                                </span>
                            ) : (
                                <span
                                    key={`taken-${cycle}`}
                                    className="tf-ui-pop inline-flex items-center gap-1 whitespace-nowrap rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700"
                                >
                                    <Check className="h-3.5 w-3.5" />
                                    Übernommen
                                </span>
                            )}
                        </div>

                        {/* Warenkorb */}
                        <div className="rounded-xl border border-gray-100">
                            <div className="flex items-center justify-between px-3 pt-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                                <span>Warenkorb</span>
                                <span>{shownStep >= 1 ? `${ITEMS.length} Positionen` : 'leer'}</span>
                            </div>
                            <ul className="min-h-[6.25rem] px-3">
                                {shownStep >= 1 ? (
                                    ITEMS.map((item, index) => (
                                        <li
                                            key={`${cycle}-${item.name}`}
                                            className="tf-ui-line-in flex items-center justify-between gap-3 border-b border-gray-50 py-2.5 last:border-0"
                                            style={{ animationDelay: `${index * 240}ms` }}
                                        >
                                            <span className="min-w-0">
                                                <span className="block truncate text-sm font-medium text-gray-900">{item.name}</span>
                                                <span className="block text-xs text-gray-400">{item.meta}</span>
                                            </span>
                                            <span className="text-sm font-semibold tabular-nums text-indigo-600">{formatEuro(item.price)}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="flex h-[6.25rem] items-center justify-center text-xs text-gray-400">
                                        Termin antippen – Kundin und Leistung kommen automatisch
                                    </li>
                                )}
                            </ul>
                            <div className="flex items-end justify-between border-t border-dashed border-gray-200 px-3 py-3">
                                <span className="text-sm text-gray-500">
                                    Gesamt <span className="text-xs text-gray-400">inkl. USt.</span>
                                </span>
                                <span className="text-2xl font-bold tabular-nums tracking-tight text-gray-900">{formatEuro(total)}</span>
                            </div>
                        </div>

                        {/* Zahlarten */}
                        <div className="grid grid-cols-4 gap-2">
                            {METHODS.map(({ label, icon: Icon }) => {
                                const active = shownStep >= 2 && label === 'Karte';
                                return (
                                    <span
                                        key={label}
                                        className={`flex flex-col items-center gap-1 rounded-xl border px-1 py-2 text-[11px] font-medium transition-all duration-300 ${
                                            active
                                                ? 'border-indigo-300 bg-indigo-50 text-indigo-700 shadow-[0_0_0_3px_rgba(99,102,241,0.15)]'
                                                : shownStep === 1
                                                  ? 'border-gray-200 bg-white text-gray-700'
                                                  : 'border-gray-100 bg-gray-50/60 text-gray-400'
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {label}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Status */}
                        <div
                            className={`flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-center text-xs font-semibold transition-colors duration-500 sm:text-sm ${
                                shownStep === 3
                                    ? 'bg-emerald-50 text-emerald-700'
                                    : shownStep === 2
                                      ? 'bg-indigo-50 text-indigo-700'
                                      : 'bg-gray-50 text-gray-400'
                            }`}
                        >
                            {shownStep === 3 ? (
                                <>
                                    <Check className="h-4 w-4 flex-shrink-0" />
                                    Bezahlt · TSE-signiert · Beleg per E-Mail
                                </>
                            ) : shownStep === 2 ? (
                                <>
                                    Betrag an SumUp Solo gesendet
                                    <span className="flex gap-0.5">
                                        {[0, 1, 2].map((dot) => (
                                            <span
                                                key={dot}
                                                className="tf-typing-dot h-1 w-1 rounded-full bg-indigo-500"
                                                style={{ animationDelay: `${dot * 150}ms` }}
                                            />
                                        ))}
                                    </span>
                                </>
                            ) : shownStep === 1 ? (
                                'Zahlart wählen'
                            ) : (
                                'Bereit zum Kassieren'
                            )}
                        </div>
                    </div>
                </div>

                {/* SumUp-Terminal */}
                {shownStep >= 2 && (
                    <div
                        key={`terminal-${cycle}`}
                        // Auf dem Handy nur während der Zahlung zeigen, damit der Beleg danach frei steht
                        className={`tf-ui-pop absolute -bottom-6 -left-2 z-10 w-[8.75rem] sm:-left-12 sm:block sm:w-40 ${shownStep === 3 ? 'hidden' : ''}`}
                    >
                        <div className="tf-ui-float">
                            <div className="rounded-[1.35rem] border border-gray-200 bg-white p-2 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.55)]">
                                <div className="rounded-2xl bg-gray-900 px-3 pb-3 pt-2 text-white">
                                    <div className="flex items-center justify-between text-[9px] text-gray-400">
                                        <span>SumUp Solo</span>
                                        <span>100 %</span>
                                    </div>
                                    <p className="mt-1 text-center text-lg font-bold tabular-nums">{formatEuro(TOTAL)}</p>
                                    <div className="relative mx-auto mt-2 flex h-12 w-12 items-center justify-center">
                                        {shownStep === 2 ? (
                                            <>
                                                {[0, 1, 2].map((wave) => (
                                                    <span
                                                        key={wave}
                                                        className="tf-ui-wave absolute inset-0 rounded-full border-2 border-sky-400"
                                                        style={{ animationDelay: `${wave * 500}ms` }}
                                                    />
                                                ))}
                                                <Nfc className="h-6 w-6 text-sky-300" />
                                            </>
                                        ) : (
                                            <span className="tf-ui-pop flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
                                                <svg viewBox="0 0 24 24" className="tf-ui-check h-6 w-6" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-1.5 text-center text-[10px] text-gray-300">
                                        {shownStep === 2 ? 'Karte hinhalten' : 'Zahlung erfolgreich'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Signierter Beleg */}
                {shownStep === 3 && (
                    <div key={`receipt-${cycle}`} className="absolute -right-2 -top-9 z-20 w-[10.5rem] drop-shadow-[0_22px_28px_rgba(15,23,42,0.28)] sm:-right-10 sm:w-48">
                        <div className="tf-ui-print">
                            <div className="rounded-t-md bg-white px-3 pb-2 pt-3 text-[10px] leading-relaxed text-gray-600">
                                <p className="text-center text-xs font-bold text-gray-900">Studio Aurora</p>
                                <p className="text-center text-[9px] text-gray-400">Beleg 2026-0418 · 10:58</p>
                                <div className="my-2 border-t border-dashed border-gray-200" />
                                {ITEMS.map((item) => (
                                    <p key={item.name} className="flex justify-between gap-2">
                                        <span className="truncate">{item.name}</span>
                                        <span className="tabular-nums">{formatEuro(item.price)}</span>
                                    </p>
                                ))}
                                <div className="my-2 border-t border-dashed border-gray-200" />
                                <p className="flex justify-between font-bold text-gray-900">
                                    <span>Summe</span>
                                    <span className="tabular-nums">{formatEuro(TOTAL)}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Karte (SumUp)</span>
                                    <span className="tabular-nums">{formatEuro(TOTAL)}</span>
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                    <ReceiptQr className="h-12 w-12 flex-shrink-0" />
                                    <span className="text-[9px] leading-snug">
                                        <span className="flex items-center gap-1 font-semibold text-emerald-600">
                                            <svg viewBox="0 0 24 24" className="tf-ui-check h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12.5l4.5 4.5L19 7.5" />
                                            </svg>
                                            TSE-Signatur
                                        </span>
                                        <span className="text-gray-400">KassenSichV · fiskaly</span>
                                    </span>
                                </div>
                            </div>
                            <svg viewBox="0 0 100 6" preserveAspectRatio="none" className="block h-2 w-full" aria-hidden="true">
                                <path d={`M0 0 ${ZIGZAG} L100 0 Z`} fill="#fff" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* Schritte zum Anklicken */}
            <div className="relative mt-12 grid grid-cols-4 gap-2 sm:mt-14">
                {STEPS.map(({ label, duration }, index) => {
                    const done = index < shownStep;
                    const active = index === shownStep;
                    return (
                        <button
                            key={label}
                            type="button"
                            onClick={() => goTo(index)}
                            aria-pressed={active}
                            aria-label={`Schritt ${index + 1}: ${label}`}
                            className="group text-left"
                        >
                            <span className="block h-1 overflow-hidden rounded-full bg-gray-200">
                                {(done || active) && (
                                    <span
                                        key={`${cycle}-${index}-${active}`}
                                        className={`block h-full w-full rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 ${
                                            active && playing ? 'tf-ui-fill' : ''
                                        }`}
                                        style={active && playing ? { animationDuration: `${duration}ms` } : undefined}
                                    />
                                )}
                            </span>
                            <span
                                className={`mt-2 block text-xs font-semibold transition-colors sm:text-sm ${
                                    active ? 'text-indigo-700' : done ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-600'
                                }`}
                            >
                                <span className="tabular-nums">{index + 1}</span> {label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
