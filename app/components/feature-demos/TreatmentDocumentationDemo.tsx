'use client';

import { Camera, Check, ChevronLeft, ChevronRight, FileDown, History, Mic, PenLine, Sparkles } from 'lucide-react';
import type { SiteMarket } from '@/app/site/content/shared';
import { DemoGlow, DemoStepper, DemoWindow, DrawCheck, pickLabels, useDemoSteps, type FeatureDemoProps } from './shared';
import { TREATMENT_DOCUMENTATION_LABELS } from './treatment-documentation-demo-labels';
import { PhotoTag, SkinPhoto } from './treatment-documentation-demo-photo';
import './treatment-documentation-demo.css';

/** Parameter → Fotos → Sprachnotiz → Unterschrift & gespeichert (≈ 12,6 s) */
const DURATIONS = [2800, 3000, 3800, 3000] as const;

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

/** Preis der Behandlung: Euro, in der Türkei Lira */
const PRICE = { eur: 79, try: 2400 };

/** Pegel der Aufnahme (fest, damit Server und Browser gleich rendern) */
const LEVELS = [0.45, 0.7, 0.5, 0.9, 0.6, 1, 0.75, 0.4, 0.85, 0.55, 0.95, 0.65, 0.8];
const WAVE = Array.from({ length: 44 }, (_, index) => LEVELS[(index * 5) % LEVELS.length]);

/** Namenszug der Kundin, wird über stroke-dashoffset gezeichnet */
const SIGNATURE =
    'M6 30 C10 18 15 8 19 11 C23 14 16 28 15 33 C21 27 27 19 32 22 C36 25 32 31 38 30 C44 29 45 19 51 21 C55 23 51 31 57 30 C63 29 65 18 71 20 C75 22 73 30 79 29 C85 28 89 21 95 17';

/**
 * Behandlungsdokumentation im Hero: Parameter füllen sich → Vorher-Nachher-Fotos mit markierter Zone →
 * Sprachnotiz wird zu Text und per KI geglättet → Unterschrift, Eintrag landet in der Behandlungshistorie.
 */
export default function TreatmentDocumentationDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(TREATMENT_DOCUMENTATION_LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const isTr = market === 'tr';
    const price = new Intl.NumberFormat(LOCALES[market] ?? 'en-GB', {
        style: 'currency',
        currency: isTr ? 'TRY' : 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(isTr ? PRICE.try : PRICE.eur);
    const initials = t.client
        .split(' ')
        .filter((_, index, parts) => index === 0 || index === parts.length - 1)
        .map((part) => part[0])
        .join('')
        .toUpperCase();
    const label = 'text-[11px] font-semibold uppercase tracking-wide text-gray-400';

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>
            <DemoGlow />

            <div className="relative" aria-hidden="true">
                <DemoWindow
                    title="Treatflow"
                    subtitle={t.section}
                    status={
                        <>
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Studio Aurora
                        </>
                    }
                >
                    <div className="p-4 sm:p-5">
                        {/* Behandlung, Kundin, Preis */}
                        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-2.5">
                            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
                                {initials}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-semibold text-gray-900">{t.template}</span>
                                <span className="block truncate text-xs text-gray-500">
                                    {t.client} · {t.when}
                                </span>
                            </span>
                            <span className="flex-shrink-0 text-right">
                                <span className="block text-sm font-semibold tabular-nums text-indigo-600">{price}</span>
                                <span className="block text-[11px] text-gray-400">{t.duration}</span>
                            </span>
                        </div>

                        {/* Fortschritt im Doku-Assistenten */}
                        <div className="mt-3 flex items-center justify-between gap-3">
                            <span className="truncate text-[11px] font-medium text-gray-500">
                                {t.sections[step]} · <span className="tabular-nums">{step + 2}/5</span>
                            </span>
                            <span className="flex flex-shrink-0 gap-1">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <span
                                        key={index}
                                        className={`h-1 w-5 rounded-full transition-colors duration-500 ${
                                            index <= step + 1 ? 'bg-gradient-to-r from-indigo-600 to-sky-500' : 'bg-gray-200'
                                        }`}
                                    />
                                ))}
                            </span>
                        </div>

                        <div key={`panel-${step}-${cycle}`} className="tf-ui-line-in mt-3 h-[13.75rem]">
                            {step === 0 && (
                                <>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={label}>{t.sections[0]}</span>
                                        <span className="truncate rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700">{t.zone}</span>
                                    </div>
                                    <div className="mt-2 grid grid-cols-2 gap-2">
                                        {t.fields.map(([name, value], index) => (
                                            <div
                                                key={name}
                                                className="tf-tdoc-focus min-w-0 rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5"
                                                style={{ animationDelay: `${250 + index * 300}ms` }}
                                            >
                                                <span className="block truncate text-[10px] text-gray-400">{name}</span>
                                                <span className="tf-ui-line-in block truncate text-xs font-semibold text-gray-900" style={{ animationDelay: `${330 + index * 300}ms` }}>
                                                    {value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {step === 1 && (
                                <>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={label}>{t.sections[1]}</span>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700">
                                            <PenLine className="h-3 w-3" />
                                            {t.draw}
                                        </span>
                                    </div>
                                    <div className="mt-2 grid grid-cols-2 gap-2">
                                        <div className="relative h-[10.5rem] overflow-hidden rounded-xl ring-1 ring-black/5">
                                            <SkinPhoto mark={t.mark} />
                                            <PhotoTag>{`${t.before} · 10:02`}</PhotoTag>
                                        </div>
                                        <div className="relative h-[10.5rem] overflow-hidden rounded-xl bg-gray-50 ring-1 ring-black/5">
                                            <span className="absolute inset-0 flex items-center justify-center text-gray-300">
                                                <Camera className="h-6 w-6" />
                                            </span>
                                            <div className="tf-tdoc-wipe absolute inset-0" style={{ animationDelay: '500ms' }}>
                                                <SkinPhoto after />
                                                <PhotoTag>{`${t.after} · 10:41`}</PhotoTag>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={label}>{t.sections[2]}</span>
                                        <span className="hidden truncate text-[11px] text-gray-400 sm:block">{t.voiceHint}</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-3 rounded-xl border border-gray-100 p-2.5">
                                        <span className="relative h-9 w-9 flex-shrink-0">
                                            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                                                <Mic className="h-4 w-4" />
                                            </span>
                                            <span className="tf-tdoc-out absolute inset-0" style={{ animationDelay: '1800ms' }}>
                                                <span className="tf-tdoc-rec flex h-full w-full items-center justify-center rounded-full bg-rose-500 text-white">
                                                    <Mic className="h-4 w-4" />
                                                </span>
                                            </span>
                                        </span>
                                        {/* Pegel während der Aufnahme, danach die fertige Aufnahme in Hellblau */}
                                        <span className="relative h-8 min-w-0 flex-1 overflow-hidden">
                                            <span className="absolute inset-0 flex items-center gap-[3px]">
                                                {WAVE.map((level, index) => (
                                                    <span key={index} className="w-[3px] flex-shrink-0 rounded-full bg-indigo-200" style={{ height: `${level * 70}%` }} />
                                                ))}
                                            </span>
                                            <span className="tf-tdoc-out absolute inset-0 flex items-center gap-[3px] bg-white" style={{ animationDelay: '1800ms' }}>
                                                {WAVE.map((level, index) => (
                                                    <span
                                                        key={index}
                                                        className="tf-tdoc-wave w-[3px] flex-shrink-0 rounded-full bg-gradient-to-t from-indigo-600 to-sky-400"
                                                        style={{ height: `${level * 100}%`, animationDelay: `${(index * 113) % 800}ms` }}
                                                    />
                                                ))}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="relative mt-2 h-[4.75rem] overflow-hidden rounded-xl border border-gray-100 bg-gray-50/60 p-2.5 text-xs leading-relaxed">
                                        <p className="tf-tdoc-out text-gray-500" style={{ animationDelay: '2000ms' }}>
                                            {t.raw.split(' ').map((word, index) => (
                                                <span key={index} className="tf-tdoc-word" style={{ animationDelay: `${200 + index * 85}ms` }}>
                                                    {word}{' '}
                                                </span>
                                            ))}
                                        </p>
                                        <p className="tf-ui-pop absolute inset-2.5 text-gray-800" style={{ animationDelay: '2250ms' }}>
                                            {t.refined}
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center justify-between gap-3">
                                        <span className="relative h-5 min-w-0 flex-1 text-[11px] font-medium">
                                            <span className="tf-tdoc-out absolute inset-0 flex items-center gap-1.5 truncate text-rose-600" style={{ animationDelay: '1800ms' }}>
                                                <span className="tf-msg-pulse h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                                                {t.recording}
                                            </span>
                                            <span className="tf-ui-pop absolute inset-0 flex items-center gap-1 truncate text-emerald-700" style={{ animationDelay: '2300ms' }}>
                                                <Check className="h-3.5 w-3.5 flex-shrink-0" />
                                                {t.ready}
                                            </span>
                                        </span>
                                        <span
                                            className="tf-tdoc-press inline-flex flex-shrink-0 items-center gap-1 rounded-lg border border-indigo-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-indigo-700"
                                            style={{ animationDelay: '1850ms' }}
                                        >
                                            <Sparkles className="h-3.5 w-3.5" />
                                            {t.ai}
                                        </span>
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <span className={label}>{t.sections[3]}</span>
                                    <div className="relative mt-2 h-16 rounded-xl border border-dashed border-gray-200 bg-gray-50/60">
                                        <span className="absolute right-3 top-2 text-[10px] text-gray-400">{t.signature}</span>
                                        <svg viewBox="0 0 100 40" className="absolute bottom-2.5 left-5 h-[50px] w-[125px]" aria-hidden="true">
                                            <path
                                                d={SIGNATURE}
                                                pathLength={1}
                                                className="tf-tdoc-sign"
                                                style={{ animationDelay: '200ms' }}
                                                fill="none"
                                                stroke="#312e81"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="absolute inset-x-3 bottom-3 border-t border-gray-300" />
                                    </div>
                                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                                        {t.summary.map((item, index) => (
                                            <span
                                                key={item}
                                                className="tf-ui-pop inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-700"
                                                style={{ animationDelay: `${900 + index * 150}ms` }}
                                            >
                                                <Check className="h-3 w-3 text-emerald-600" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div
                                        className="tf-ui-pop mt-2.5 flex h-9 items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 text-center text-xs font-semibold text-emerald-700"
                                        style={{ animationDelay: '1400ms' }}
                                    >
                                        <Check className="h-4 w-4 flex-shrink-0" />
                                        {t.savedBanner}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Navigation des Assistenten */}
                        <div className="mt-3 flex items-center justify-between gap-3">
                            <span className="inline-flex h-9 items-center gap-1 rounded-lg border border-gray-200 px-3 text-xs font-medium text-gray-500">
                                {step === 3 ? <FileDown className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
                                {step === 3 ? 'PDF' : t.back}
                            </span>
                            {step < 3 ? (
                                <span
                                    key={`next-${step}-${cycle}`}
                                    className="tf-tdoc-press inline-flex h-9 items-center gap-1 rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white"
                                    style={{ animationDelay: `${DURATIONS[step] - 650}ms` }}
                                >
                                    {t.next}
                                    <ChevronRight className="h-3.5 w-3.5" />
                                </span>
                            ) : (
                                <span key={`save-${cycle}`} className="grid">
                                    <span
                                        className="tf-tdoc-out col-start-1 row-start-1 inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white"
                                        style={{ animationDelay: '1300ms' }}
                                    >
                                        {t.save}
                                    </span>
                                    <span
                                        className="tf-ui-pop col-start-1 row-start-1 inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-emerald-50 px-4 text-xs font-semibold text-emerald-700"
                                        style={{ animationDelay: '1350ms' }}
                                    >
                                        <DrawCheck className="h-3.5 w-3.5" />
                                        {t.saved}
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                </DemoWindow>

                {/* KI glättet das Diktat – nur ab Tablet, auf dem Handy würde der Hinweis den Text verdecken */}
                {step === 2 && (
                    <div key={`ai-${cycle}`} className="tf-ui-pop absolute -right-16 top-[12rem] z-20 hidden w-60 sm:block" style={{ animationDelay: '2300ms' }}>
                        <div className="tf-ui-float">
                            <div className="flex items-center gap-2.5 rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.5)]">
                                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white">
                                    <Sparkles className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-xs font-semibold text-gray-900">{t.aiNote[0]}</span>
                                    <span className="block text-[11px] text-gray-500">{t.aiNote[1]}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Eintrag landet in der Behandlungshistorie */}
                {step === 3 && (
                    <div key={`history-${cycle}`} className="tf-ui-pop absolute -right-2 -top-9 z-20 w-[11.5rem] sm:-right-10 sm:w-56" style={{ animationDelay: '1500ms' }}>
                        <div className="tf-ui-float">
                            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.5)]">
                                <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                                    <History className="h-3.5 w-3.5 flex-shrink-0 text-indigo-600" />
                                    <span className="truncate">{t.history}</span>
                                </p>
                                <p className="truncate text-[10px] text-gray-400">{t.client}</p>
                                <ul className="mt-2 space-y-1">
                                    <li className="rounded-lg bg-emerald-50 px-2 py-1.5">
                                        <span className="block truncate text-[11px] font-semibold text-gray-900">{t.template}</span>
                                        <span className="flex items-center gap-1.5 text-[10px] text-gray-500">
                                            {t.today}
                                            <span className="rounded-full bg-emerald-500 px-1.5 text-[9px] font-bold leading-4 text-white">{t.isNew}</span>
                                        </span>
                                    </li>
                                    {t.older.map(([date, name]) => (
                                        <li key={date} className="px-2 py-1">
                                            <span className="block truncate text-[11px] text-gray-700">{name}</span>
                                            <span className="block text-[10px] text-gray-400">{date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
