'use client';

import type { CSSProperties } from 'react';
import { BatteryFull, BellRing, Check, Clock, Lock, Mail, Sparkles } from 'lucide-react';
import type { SiteMarket } from '@/app/site/content/shared';
import { DemoGlow, DemoStepper, DrawCheck, pickLabels, useDemoSteps, type FeatureDemoProps } from './shared';
import { ONLINE_BOOKING_LABELS } from './online-booking-demo-labels';
import './online-booking-demo.css';

const DURATIONS = [2800, 3000, 2800, 3800] as const;
/** Ab wann der Button im jeweiligen Schritt aktiv wird (ms) */
const BUTTON_READY = [1400, 2000, 1500];

/** Beispielpreise: Euro in allen Märkten, Lira in der Türkei */
const SERVICES = [
    { minutes: 60, eur: 89, try: 1500 },
    { minutes: 75, eur: 119, try: 2400 },
    { minutes: 45, eur: 59, try: 900 },
];
const PICKED = 1;
const DAYS = [10, 11, 12, 13, 14];
/** Freie Kapazität je Tag wie auf der Buchungsseite: 3 viel, 2 mittel, 1 wenig */
const DAY_LEVEL = [2, 3, 3, 1, 2];
const PICKED_DAY = 2;
/** Die Buchungsseite zeigt nur freie Zeiten */
const TIMES = ['09:30', '11:00', '12:30', '14:30', '16:00', '17:30'];
const PICKED_TIME = 3;
const TIME = TIMES[PICKED_TIME];

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

function formatPrice(market: SiteMarket, index: number) {
    const lira = market === 'tr';
    return new Intl.NumberFormat(LOCALES[market], {
        style: 'currency',
        currency: lira ? 'TRY' : 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(lira ? SERVICES[index].try : SERVICES[index].eur);
}

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

function Dots({ level }: { level: number }) {
    const color = level === 3 ? 'bg-emerald-400' : level === 2 ? 'bg-amber-400' : 'bg-red-400';
    return (
        <span className="flex gap-px">
            {[0, 1, 2].map((dot) => (
                <span key={dot} className={`h-1 w-1 rounded-full ${dot < level ? color : 'bg-gray-200'}`} />
            ))}
        </span>
    );
}

const chip = 'tf-ui-float flex items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-700 shadow-md';

/**
 * Online-Buchung im Hero: Buchungsseite des Studios auf dem Handy – Leistung → freie Zeit → Kontaktdaten →
 * bestätigt. Zum Schluss landet der Termin im Studio-Kalender.
 */
export default function OnlineBookingDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(ONLINE_BOOKING_LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const service = t.services[PICKED];
    const buttonLabel = step === 2 ? t.submit : t.next;

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>
            <DemoGlow />

            <div className="relative" aria-hidden="true">
                {/* Hinweise über dem Handy */}
                <span className="absolute -top-8 left-0 z-20 sm:left-4">
                    <span className={chip}>
                        <Clock className="h-3.5 w-3.5 text-indigo-600" />
                        {t.open247}
                    </span>
                </span>
                <span className="absolute -top-8 right-0 z-20 sm:right-4">
                    <span className={chip} style={delay(-3000)}>
                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-white">
                            <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                        </span>
                        {t.noCommission}
                    </span>
                </span>

                {/* Buchungsseite des Studios auf dem Handy */}
                <div className="relative mx-auto w-[15rem] sm:w-[16rem]">
                    <div className="rounded-[2.25rem] border border-gray-200 bg-white p-2 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.5)]">
                        <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-indigo-50/70 via-white to-white ring-1 ring-gray-100">
                            {/* Statuszeile: gebucht wird auch abends */}
                            <div className="flex items-center justify-between px-5 pt-2 text-[10px] font-semibold text-gray-900">
                                <span className="tabular-nums">22:14</span>
                                <span className="h-3.5 w-14 rounded-full bg-gray-900" />
                                <BatteryFull className="h-3.5 w-3.5" />
                            </div>
                            <div className="mx-3 mt-2 flex items-center justify-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-[10px] text-gray-500">
                                <Lock className="h-2.5 w-2.5 flex-shrink-0" />
                                <span className="truncate">app.treatflow.io/studio/aurora</span>
                            </div>
                            <div className="flex items-center gap-2.5 px-4 pt-3">
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-200 to-amber-100 text-xs font-bold text-rose-700">
                                    SA
                                </span>
                                <span className="min-w-0">
                                    <span className="block truncate text-sm font-semibold text-gray-900">Studio Aurora</span>
                                    <span className="block truncate text-[11px] text-gray-500">{t.bookOnline}</span>
                                </span>
                            </div>
                            <div className="mt-3 grid grid-cols-4 gap-1 px-4">
                                {DURATIONS.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`h-1 rounded-full transition-colors duration-500 ${index <= step ? 'bg-gradient-to-r from-indigo-600 to-sky-500' : 'bg-gray-200'}`}
                                    />
                                ))}
                            </div>

                            <div className="h-[16rem] px-4 pt-3">
                                {/* 1 – Leistung wählen */}
                                {step === 0 && (
                                    <>
                                        <p className="text-sm font-semibold text-gray-900">{t.chooseService}</p>
                                        <div className="mt-2.5 space-y-2">
                                            {SERVICES.map((item, index) => {
                                                const picked = index === PICKED;
                                                return (
                                                    <div key={`${cycle}-${index}`} className="tf-ui-line-in" style={delay(index * 120)}>
                                                        <div
                                                            className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 ${
                                                                picked ? 'tf-book-pick border-indigo-400 bg-indigo-50 shadow-[0_0_0_3px_rgba(99,102,241,0.15)]' : 'border-gray-200 bg-white'
                                                            }`}
                                                            style={picked ? delay(1000) : undefined}
                                                        >
                                                            <span
                                                                className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border ${
                                                                    picked ? 'tf-book-solid border-indigo-600 bg-indigo-600' : 'border-gray-300 bg-white'
                                                                }`}
                                                                style={picked ? delay(1000) : undefined}
                                                            >
                                                                {picked && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />}
                                                            </span>
                                                            <span className="min-w-0 flex-1">
                                                                <span className="block truncate text-xs font-semibold text-gray-900">{t.services[index]}</span>
                                                                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    {item.minutes} {t.minUnit}
                                                                </span>
                                                            </span>
                                                            <span className="whitespace-nowrap text-xs font-semibold tabular-nums text-gray-900">{formatPrice(market, index)}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                                )}

                                {/* 2 – Mitarbeiterin, Tag und freie Uhrzeit */}
                                {step === 1 && (
                                    <>
                                        <div className="flex items-center justify-between gap-2 rounded-lg bg-indigo-50 px-2.5 py-1 text-[11px]">
                                            <span className="truncate font-semibold text-indigo-900">{service}</span>
                                            <span className="flex-shrink-0 tabular-nums text-indigo-700">
                                                {SERVICES[PICKED].minutes} {t.minUnit} · {formatPrice(market, PICKED)}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm font-semibold text-gray-900">{t.chooseTime}</p>
                                        <div className="mt-2 flex gap-1">
                                            {[t.anyStaff, ...t.staff].map((name, index) => (
                                                <span
                                                    key={name}
                                                    className={`min-w-0 truncate rounded-full border px-2 py-1 text-[10px] font-semibold ${
                                                        index === 0 ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-gray-200 bg-white text-gray-600'
                                                    }`}
                                                >
                                                    {name}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-2 grid grid-cols-5 gap-1">
                                            {DAYS.map((day, index) => {
                                                const picked = index === PICKED_DAY;
                                                return (
                                                    <span
                                                        key={`${cycle}-${day}`}
                                                        className={`flex flex-col items-center gap-0.5 rounded-lg border py-1 ${
                                                            picked ? 'tf-book-solid border-indigo-600 bg-indigo-600 text-white' : 'border-gray-100 bg-white text-gray-900'
                                                        }`}
                                                        style={picked ? delay(500) : undefined}
                                                    >
                                                        <span className="text-[9px] font-semibold uppercase opacity-70">{t.weekdays[index]}</span>
                                                        <span className="text-xs font-semibold tabular-nums">{day}</span>
                                                        <Dots level={DAY_LEVEL[index]} />
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <div key={`times-${cycle}`} className="tf-ui-pop" style={delay(800)}>
                                            <p className="mt-2 truncate text-[10px] font-semibold uppercase tracking-wide text-gray-400">{t.freeTimes}</p>
                                            <div className="mt-1 grid grid-cols-3 gap-1.5">
                                                {TIMES.map((time, index) => {
                                                    const picked = index === PICKED_TIME;
                                                    return (
                                                        <span
                                                            key={time}
                                                            className={`rounded-lg border py-1.5 text-center text-[11px] font-semibold tabular-nums ${
                                                                picked ? 'tf-book-solid border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 bg-white text-gray-700'
                                                            }`}
                                                            style={picked ? delay(1700) : undefined}
                                                        >
                                                            {time}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* 3 – Kontaktdaten */}
                                {step === 2 && (
                                    <>
                                        <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-1">
                                            <p className="truncate text-xs font-semibold text-gray-900">{service}</p>
                                            <p className="truncate text-[10px] tabular-nums text-gray-500">
                                                {t.date} · {TIME} · {t.staff[0]}
                                            </p>
                                        </div>
                                        <p className="mt-2 text-sm font-semibold text-gray-900">{t.contact}</p>
                                        <div className="mt-1.5 space-y-1.5">
                                            {t.fields.map((label, index) => (
                                                <div
                                                    key={`${cycle}-${label}`}
                                                    className="tf-ui-line-in rounded-lg border border-gray-200 bg-white px-2.5 py-1"
                                                    style={delay(200 + index * 250)}
                                                >
                                                    <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
                                                    <p className="truncate text-[11px] text-gray-900">{t.customer[index]}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p key={`consent-${cycle}`} className="tf-ui-pop mt-2.5 flex items-center gap-1.5 text-[10px] text-gray-600" style={delay(1100)}>
                                            <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded bg-indigo-600 text-white">
                                                <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                                            </span>
                                            <span className="truncate">{t.consent}</span>
                                        </p>
                                    </>
                                )}

                                {/* 4 – Gebucht */}
                                {step === 3 && (
                                    <>
                                        <div className="flex flex-col items-center text-center">
                                            <span
                                                key={`done-${cycle}`}
                                                className="tf-ui-pop flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 shadow-[0_10px_24px_-10px_rgba(16,185,129,0.9)]"
                                            >
                                                <DrawCheck className="h-6 w-6" color="white" />
                                            </span>
                                            <p className="mt-2 text-sm font-bold text-gray-900">{t.booked}</p>
                                            <p className="mt-0.5 max-w-full truncate text-[11px] tabular-nums text-gray-500">
                                                {service} · {t.date} · {TIME}
                                            </p>
                                        </div>
                                        <ul className="mt-2.5 space-y-1.5">
                                            {[
                                                { icon: Mail, text: t.confirm },
                                                { icon: BellRing, text: t.reminder },
                                            ].map(({ icon: Icon, text }, index) => (
                                                <li
                                                    key={`${cycle}-${index}`}
                                                    className="tf-ui-line-in flex items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-1.5 text-[11px] leading-snug text-gray-700"
                                                    style={delay(400 + index * 200)}
                                                >
                                                    <Icon className="h-3.5 w-3.5 flex-shrink-0 text-indigo-500" />
                                                    <span className="min-w-0">{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            {/* Button wird aktiv, sobald alles gewählt ist */}
                            <div className="h-14 px-4 pt-1">
                                {step < 3 && (
                                    <span
                                        key={`button-${step}-${cycle}`}
                                        className={`relative flex h-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-3 text-xs font-semibold text-white ${
                                            step === 2 ? 'tf-ui-ring' : ''
                                        }`}
                                        style={step === 2 ? delay(BUTTON_READY[2]) : undefined}
                                    >
                                        <span className="truncate">{buttonLabel}</span>
                                        <span className="tf-book-off absolute inset-0 flex items-center justify-center bg-gray-100 px-3 text-gray-400" style={delay(BUTTON_READY[step])}>
                                            <span className="truncate">{buttonLabel}</span>
                                        </span>
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-center pb-2">
                                <span className="h-1 w-20 rounded-full bg-gray-900/80" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Der Termin landet im Kalender des Studios */}
                {step === 3 && (
                    <div key={`calendar-${cycle}`} className="tf-ui-pop absolute -bottom-9 -right-2 z-30 w-[10.5rem] sm:-bottom-6 sm:-right-8 sm:w-[13rem]" style={delay(700)}>
                        <div className="tf-ui-float rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.5)]">
                            <p className="flex items-center justify-between gap-2 text-[11px] font-semibold text-gray-900">
                                <span className="flex min-w-0 items-center gap-1.5">
                                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-sky-500 text-[9px] font-bold text-white">
                                        T
                                    </span>
                                    <span className="truncate">{t.calendar}</span>
                                </span>
                                <span className="flex flex-shrink-0 items-center gap-1 text-[10px] font-medium text-gray-500">
                                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                                    {t.staff[0]}
                                </span>
                            </p>
                            {/* 13:00–16:00, 26 px pro Stunde */}
                            <div className="relative mt-2 h-[78px]">
                                {[13, 14, 15].map((hour, index) => (
                                    <span key={hour} className="absolute inset-x-0 border-t border-gray-100" style={{ top: index * 26 }}>
                                        <span className="absolute left-0 top-0.5 text-[9px] tabular-nums text-gray-400">{hour}:00</span>
                                    </span>
                                ))}
                                <div className="absolute left-8 right-0 overflow-hidden rounded-md border-l-[3px] border-sky-400 bg-sky-50 px-1.5 text-[10px] leading-[22px] text-sky-900" style={{ top: 1, height: 24 }}>
                                    <p className="truncate">
                                        <span className="font-semibold">{t.existingCustomer}</span> · {t.services[0]}
                                    </p>
                                </div>
                                <div
                                    className="tf-book-land absolute left-8 right-0 overflow-hidden rounded-md border-l-[3px] border-sky-400 bg-sky-50 px-1.5 py-[3px] text-[10px] leading-tight text-sky-900"
                                    style={{ top: 40, height: 31, animationDelay: '1200ms' }}
                                >
                                    <p className="truncate font-semibold">{t.customer[0]}</p>
                                    <p className="truncate opacity-75">
                                        {service} · {TIME}
                                    </p>
                                </div>
                            </div>
                            <p className="tf-ui-pop mt-2 flex items-center gap-1 text-[10px] font-semibold text-indigo-700" style={delay(1700)}>
                                <Sparkles className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{t.newBadge}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
