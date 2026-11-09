'use client';

import { useEffect, useState, type ReactNode } from 'react';
import type { SiteMarket } from '@/app/site/content/shared';
import { useInView, usePrefersReducedMotion } from '@/app/components/motion';

/** Jede Szene bekommt nur die Sprache; alle Texte stehen in der Szene selbst (8 Sprachen). */
export type FeatureDemoProps = { market: SiteMarket };

/** Texte einer Szene je Sprache. Fehlt eine Sprache, gilt Englisch. */
export type DemoLabels<T> = { de: T; en: T } & Partial<Record<SiteMarket, T>>;

export function pickLabels<T>(labels: DemoLabels<T>, market: SiteMarket): T {
    return labels[market] ?? labels.en;
}

/**
 * Schritt-Automat für eine Szene: läuft nur, solange sie sichtbar ist, und beginnt nach dem letzten
 * Schritt von vorn. Bei „Bewegung reduzieren“ steht der letzte Schritt fest.
 * `cycle` zählt jeden Neustart hoch – als `key` nutzen, damit Einblend-Animationen erneut laufen.
 */
export function useDemoSteps(durations: readonly number[]) {
    const reduced = usePrefersReducedMotion();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: false });
    const [step, setStep] = useState(0);
    const [cycle, setCycle] = useState(0);
    const playing = inView && !reduced;
    const last = durations.length - 1;
    const duration = durations[step] ?? 3000;

    // Abhängig von der Dauer als Zahl, nicht vom Array – sonst würde jedes Neuzeichnen den Timer zurücksetzen
    useEffect(() => {
        if (!playing) return;
        const timer = window.setTimeout(() => {
            if (step >= last) {
                setCycle((c) => c + 1);
                setStep(0);
            } else {
                setStep(step + 1);
            }
        }, duration);
        return () => window.clearTimeout(timer);
    }, [step, playing, cycle, last, duration]);

    const goTo = (index: number) => {
        setStep(index);
        setCycle((c) => c + 1);
    };

    return { ref, step: reduced ? last : step, cycle, playing, reduced, goTo };
}

/** Weicher Farbschein hinter der Szene. */
export function DemoGlow({ className = '' }: { className?: string }) {
    return (
        <div
            className={`pointer-events-none absolute inset-x-4 bottom-16 top-16 rounded-[2rem] bg-gradient-to-br from-indigo-400/30 via-sky-300/25 to-fuchsia-300/20 blur-3xl ${className}`}
            aria-hidden="true"
        />
    );
}

/** App-Fenster im Treatflow-Stil: Kopfzeile mit Logo, Titel und optionaler Statusangabe rechts. */
export function DemoWindow({
    title,
    subtitle,
    status,
    children,
    className = '',
}: {
    title: string;
    subtitle?: string;
    status?: ReactNode;
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.5)] ${className}`}>
            <div className="flex items-center justify-between gap-3 border-b border-gray-100 bg-gray-50/80 px-4 py-2.5">
                <div className="flex min-w-0 items-center gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-sky-500 text-[11px] font-bold text-white">
                        T
                    </span>
                    <span className="truncate text-sm font-semibold text-gray-900">{title}</span>
                    {subtitle && <span className="hidden truncate text-sm text-gray-400 sm:inline">/ {subtitle}</span>}
                </div>
                {status && <span className="flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-gray-500">{status}</span>}
            </div>
            {children}
        </div>
    );
}

/** Haken, der sich selbst zeichnet. */
export function DrawCheck({ className = 'h-5 w-5', color = 'currentColor' }: { className?: string; color?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={`tf-ui-check ${className}`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
    );
}

/** Anklickbare Schrittleiste unter einer Szene, mit Fortschrittsbalken für den aktiven Schritt. */
export function DemoStepper({
    labels,
    durations,
    step,
    cycle,
    playing,
    onSelect,
    stepAriaPrefix,
}: {
    labels: readonly string[];
    durations: readonly number[];
    step: number;
    cycle: number;
    playing: boolean;
    onSelect: (index: number) => void;
    /** z. B. „Schritt“ / „Step“ */
    stepAriaPrefix: string;
}) {
    return (
        <div className="relative mt-12 grid items-start gap-2 sm:mt-14" style={{ gridTemplateColumns: `repeat(${labels.length}, minmax(0, 1fr))` }}>
            {labels.map((label, index) => {
                const done = index < step;
                const active = index === step;
                return (
                    <button
                        key={label}
                        type="button"
                        onClick={() => onSelect(index)}
                        aria-pressed={active}
                        aria-label={`${stepAriaPrefix} ${index + 1}: ${label}`}
                        className="group min-w-0 text-left"
                    >
                        <span className="block h-1 overflow-hidden rounded-full bg-gray-200">
                            {(done || active) && (
                                <span
                                    key={`${cycle}-${index}-${active}`}
                                    className={`block h-full w-full rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 ${active && playing ? 'tf-ui-fill' : ''}`}
                                    style={active && playing ? { animationDuration: `${durations[index]}ms` } : undefined}
                                />
                            )}
                        </span>
                        <span
                            // Lange Wörter auf dem Handy umbrechen statt abschneiden („Tagesansicht“, „Réservation“)
                            className={`mt-2 block break-words text-xs font-semibold leading-snug transition-colors [hyphens:auto] sm:text-sm ${
                                active ? 'text-indigo-700' : done ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-600'
                            }`}
                        >
                            <span className="tabular-nums">{index + 1}</span> {label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
