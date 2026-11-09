'use client';

import { useEffect, useState } from 'react';
import { Cake, Camera, ClipboardCheck, Heart, Mail, Phone, Search, Sparkles, StickyNote, Users } from 'lucide-react';
import type { SiteMarket } from '@/app/site/content/shared';
import { useCountUp } from '@/app/components/motion';
import { DemoGlow, DemoStepper, DemoWindow, DrawCheck, pickLabels, useDemoSteps, type FeatureDemoProps } from './shared';
import { CLIENT_RECORDS_LABELS } from './client-records-demo-labels';
import './client-records-demo.css';

/** Suchen → Profil → Verlauf → Hinweise (≈ 11,6 s) */
const DURATIONS = [2800, 2600, 3200, 3000] as const;

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

/** Umsatz der Beispielkundin: Euro, in der Türkei Lira */
const REVENUE = { eur: 1232, try: 36400 };
const APPOINTMENTS = 14;
const TAB_COUNTS = [null, 9, 6, 2] as const;

const AVATARS = [
    'from-sky-100 to-indigo-100 text-indigo-700',
    'from-indigo-500 to-purple-600 text-white',
    'from-emerald-100 to-teal-100 text-teal-700',
    'from-rose-100 to-amber-100 text-rose-700',
    'from-violet-100 to-fuchsia-100 text-violet-700',
];
const PHONES = ['482 1937', '230 5518', '917 4402', '664 0291', '358 7716'];

/** Hauttöne für die Mini-Vorschau der Fotos (gezeichnet, keine echten Bilder) */
const THUMB_BEFORE = 'radial-gradient(circle at 35% 60%, rgba(225,29,72,0.45), transparent 45%), linear-gradient(160deg, #fbe3d4, #eebfa6)';
const THUMB_AFTER = 'radial-gradient(circle at 60% 35%, rgba(255,255,255,0.7), transparent 40%), linear-gradient(160deg, #fdeee4, #f3cdb8)';

function initials(name: string): string {
    const parts = name.split(' ');
    return `${parts[0]?.[0] ?? ''}${parts[parts.length - 1]?.[0] ?? ''}`.toUpperCase();
}

/**
 * Kundenverwaltung im Hero: Name suchen → Profil mit Kennzahlen → Verlauf aus Behandlungen, Fotos,
 * Formularen und Notizen → Allergie-Hinweis und Geburtstag auf einen Blick.
 */
export default function ClientRecordsDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(CLIENT_RECORDS_LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const name = `${t.first} ${t.last}`;
    const rows = [t.others[0], name, t.others[1], t.others[2], t.others[3]];

    const isTr = market === 'tr';
    const money = new Intl.NumberFormat(LOCALES[market] ?? 'en-GB', {
        style: 'currency',
        currency: isTr ? 'TRY' : 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    const revenueTarget = isTr ? REVENUE.try : REVENUE.eur;
    const revenue = useCountUp(revenueTarget, step >= 1, 1100);

    // Vorname wird Buchstabe für Buchstabe ins Suchfeld getippt
    const letters = Array.from(t.first);
    const [typed, setTyped] = useState(0);
    useEffect(() => {
        if (step !== 0) return;
        setTyped(0);
        let count = 0;
        let timer = 0;
        const tick = () => {
            count += 1;
            setTyped(count);
            if (count < letters.length) timer = window.setTimeout(tick, 140);
        };
        timer = window.setTimeout(tick, 350);
        return () => window.clearTimeout(timer);
    }, [step, cycle, letters.length]);
    const query = step === 0 ? letters.slice(0, typed).join('') : t.first;

    const timeline = [
        { icon: Sparkles, tone: 'bg-indigo-50 text-indigo-600', text: t.treatment },
        { icon: Camera, tone: 'bg-sky-50 text-sky-600', text: t.photos },
        { icon: ClipboardCheck, tone: 'bg-emerald-50 text-emerald-600', text: t.form },
        { icon: StickyNote, tone: 'bg-amber-50 text-amber-600', text: t.note },
    ];

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
                        {/* Suchfeld */}
                        <div className="flex h-10 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                            <Search className="h-4 w-4 flex-shrink-0 text-gray-400" />
                            <span className="relative min-w-0 flex-1 truncate text-sm text-gray-900">
                                {step === 0 && typed === 0 && <span className="absolute inset-0 truncate text-gray-400">{t.search}</span>}
                                {query}
                                {step === 0 && <span className="tf-records-caret ml-px inline-block h-4 w-px translate-y-0.5 bg-indigo-600" />}
                            </span>
                            <span
                                key={`hits-${cycle}`}
                                className={`flex-shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700 ${step === 0 ? 'tf-ui-pop' : ''}`}
                                style={step === 0 ? { animationDelay: '1300ms' } : undefined}
                            >
                                {t.hits}
                            </span>
                        </div>

                        <div className="relative mt-3 h-[21.5rem]">
                            {step === 0 ? (
                                /* Kundenliste: alle außer der Gesuchten treten zurück */
                                <div key={`list-${cycle}`} className="flex h-full flex-col">
                                    <div className="flex items-center justify-between px-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                                        <span>{t.listTitle}</span>
                                        <span className="flex items-center gap-1.5 normal-case tracking-normal">
                                            <Heart className="h-3.5 w-3.5" />
                                            A–Z
                                        </span>
                                    </div>
                                    <ul className="mt-2 space-y-1.5">
                                        {rows.map((row, index) => {
                                            const target = index === 1;
                                            return (
                                                <li
                                                    key={row}
                                                    className={`flex h-11 items-center gap-2.5 rounded-xl border border-gray-100 px-2.5 ${target ? 'tf-records-hit' : 'tf-records-dim'}`}
                                                    style={{ animationDelay: target ? '1500ms' : '1400ms' }}
                                                >
                                                    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[11px] font-semibold ${AVATARS[index]}`}>
                                                        {initials(row)}
                                                    </span>
                                                    <span className="min-w-0 flex-1">
                                                        <span className="block truncate text-sm font-medium text-gray-900">{row}</span>
                                                        <span className="block truncate text-[11px] tabular-nums text-gray-400">
                                                            {t.phone} {PHONES[index]}
                                                        </span>
                                                    </span>
                                                    {target && <Heart className="h-4 w-4 flex-shrink-0 fill-rose-500 text-rose-500" />}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <p className="mt-auto flex items-center justify-center gap-1.5 pb-1 text-xs text-gray-400">
                                        <Users className="h-3.5 w-3.5" />
                                        {t.total}
                                    </p>
                                </div>
                            ) : (
                                /* Kundenprofil */
                                <div key={`profile-${cycle}`} className="flex h-full flex-col">
                                    <div className={`flex items-center gap-3 ${step === 1 ? 'tf-ui-line-in' : ''}`}>
                                        <span className="relative flex-shrink-0">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-indigo-500/25">
                                                {initials(name)}
                                            </span>
                                            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-rose-500">
                                                <Heart className="h-2 w-2 fill-white text-white" />
                                            </span>
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-sm font-semibold text-gray-900">{name}</span>
                                            <span className="block truncate text-[11px] text-gray-500">{t.since}</span>
                                        </span>
                                        <span className="flex flex-shrink-0 flex-col items-end gap-1">
                                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                                                <DrawCheck className="h-2.5 w-2.5" />
                                                {t.verified}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="rounded-full border border-teal-200 bg-teal-50 px-1.5 py-0.5 text-[10px] font-semibold text-teal-800">
                                                    {t.marketing}
                                                </span>
                                                <Phone className="h-3.5 w-3.5 text-gray-400" />
                                                <Mail className="h-3.5 w-3.5 text-gray-400" />
                                            </span>
                                        </span>
                                    </div>

                                    {/* Kennzahlen */}
                                    <div className="mt-3 grid grid-cols-3 gap-2">
                                        {[String(APPOINTMENTS), money.format(Math.round(revenue)), t.next].map((value, index) => (
                                            <div
                                                key={t.stats[index]}
                                                className={`min-w-0 rounded-xl border border-gray-100 bg-gray-50/70 px-2 py-2 sm:px-2.5 ${step === 1 ? 'tf-ui-pop' : ''}`}
                                                style={step === 1 ? { animationDelay: `${200 + index * 120}ms` } : undefined}
                                            >
                                                <span className="block truncate text-sm font-bold tabular-nums text-gray-900">{value}</span>
                                                <span className="block truncate text-[10px] text-gray-500">{t.stats[index]}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Reiter */}
                                    <div className="mt-3 flex gap-1 overflow-hidden whitespace-nowrap border-b border-gray-100">
                                        {t.tabs.map((tab, index) => (
                                            <span
                                                key={tab}
                                                className={`flex flex-shrink-0 items-center gap-1 border-b-2 px-1.5 pb-1.5 text-[11px] font-medium ${
                                                    index === 0 ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-gray-500'
                                                }`}
                                            >
                                                {tab}
                                                {TAB_COUNTS[index] !== null && (
                                                    <span className="rounded-full bg-gray-100 px-1.5 text-[10px] tabular-nums text-gray-600">{TAB_COUNTS[index]}</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Verlauf */}
                                    <ul className="mt-2 space-y-1.5">
                                        {timeline.map(({ icon: Icon, tone, text }, index) => {
                                            const note = index === 3;
                                            if (step === 1) {
                                                return (
                                                    <li key={index} className="flex h-10 items-center gap-2.5 rounded-xl border border-gray-100 px-2.5">
                                                        <span className="h-7 w-7 flex-shrink-0 rounded-lg bg-gray-100" />
                                                        <span className="flex-1 space-y-1.5">
                                                            <span className="block h-2 w-2/3 rounded-full bg-gray-100" />
                                                            <span className="block h-2 w-1/3 rounded-full bg-gray-100" />
                                                        </span>
                                                    </li>
                                                );
                                            }
                                            return (
                                                <li
                                                    key={index}
                                                    className={`flex h-10 items-center gap-2.5 rounded-xl border px-2.5 ${
                                                        note ? 'border-amber-200 border-l-4 border-l-amber-400 bg-amber-50/40' : 'border-gray-100 bg-white'
                                                    } ${step === 2 ? 'tf-ui-line-in' : ''} ${note && step === 3 ? 'tf-records-alert' : ''}`}
                                                    style={step === 2 ? { animationDelay: `${150 + index * 260}ms` } : undefined}
                                                >
                                                    <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${tone}`}>
                                                        <Icon className="h-3.5 w-3.5" />
                                                    </span>
                                                    <span className="min-w-0 flex-1 leading-tight">
                                                        <span className="block truncate text-xs font-semibold text-gray-900">{text[0]}</span>
                                                        <span className="block truncate text-[11px] text-gray-500">{text[1]}</span>
                                                    </span>
                                                    {index === 1 && (
                                                        <span className="flex flex-shrink-0 gap-1">
                                                            <span className="h-7 w-7 rounded-md ring-1 ring-black/5" style={{ background: THUMB_BEFORE }} />
                                                            <span className="h-7 w-7 rounded-md ring-1 ring-black/5" style={{ background: THUMB_AFTER }} />
                                                        </span>
                                                    )}
                                                    {index === 2 && (
                                                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                                                            <DrawCheck className="h-3.5 w-3.5" color="white" />
                                                        </span>
                                                    )}
                                                    {note && (
                                                        <span className="flex-shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                                                            {t.important}
                                                        </span>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </DemoWindow>

                {/* Geburtstagshinweis aus der Profil-Übersicht */}
                {step === 3 && (
                    <div key={`birthday-${cycle}`} className="tf-ui-pop absolute -right-2 -top-8 z-20 w-[11.5rem] sm:-right-10 sm:-top-9 sm:w-56">
                        <div className="tf-ui-float">
                            <div className="flex items-center gap-2.5 rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.5)]">
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 to-amber-300 text-white">
                                    <Cake className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-xs font-semibold leading-snug text-gray-900">{t.birthday[0]}</span>
                                    <span className="block text-[11px] text-gray-500">{t.birthday[1]}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
