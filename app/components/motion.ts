'use client';

import { useEffect, useRef, useState } from 'react';

/** true, wenn Nutzer:innen im System „Bewegung reduzieren“ eingestellt haben. */
export function usePrefersReducedMotion(): boolean {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const query = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduced(query.matches);
        const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
        query.addEventListener('change', onChange);
        return () => query.removeEventListener('change', onChange);
    }, []);
    return reduced;
}

/**
 * Meldet, ob ein Element sichtbar ist. `once` (Standard) bleibt nach dem ersten Sichtbarwerden auf true,
 * damit Animationen nur einmal laufen.
 */
export function useInView<T extends Element>({
    threshold = 0.3,
    once = true,
}: { threshold?: number; once?: boolean } = {}) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once]);

    return { ref, inView };
}

const euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

export function formatEuro(value: number): string {
    return euro.format(value);
}

/**
 * Zählt eine Zahl hoch, sobald `run` true wird. Ohne JavaScript bzw. bei reduzierter Bewegung
 * steht sofort der Endwert da.
 */
export function useCountUp(target: number, run: boolean, durationMs = 1200): number {
    const reduced = usePrefersReducedMotion();
    const [value, setValue] = useState(target);
    const armed = useRef(false);

    useEffect(() => {
        if (reduced) {
            setValue(target);
            return;
        }
        if (!run) {
            // Vor dem Sichtbarwerden bei 0 starten, damit das Hochzählen zu sehen ist
            if (!armed.current) setValue(0);
            return;
        }
        armed.current = true;
        let frame = 0;
        const start = performance.now();
        const tick = (now: number) => {
            // rAF-Zeitstempel kann knapp vor `start` liegen → nie unter 0
            const progress = Math.max(0, Math.min(1, (now - start) / durationMs));
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, run, durationMs, reduced]);

    return value;
}
