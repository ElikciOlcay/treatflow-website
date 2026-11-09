'use client';

import { Check, Clock, FileText, ShieldCheck, Wallet } from 'lucide-react';
import { formatEuro, useCountUp, useInView } from '@/app/components/motion';

const POINTS = [
    { icon: Wallet, text: 'Kasse am Morgen mit Wechselgeld öffnen, Bareinlagen und Barentnahmen jederzeit erfassen' },
    { icon: FileText, text: 'X-Bericht für Zwischenstände, zum Beispiel beim Schichtwechsel' },
    { icon: ShieldCheck, text: 'Kassenminus-Prüfung warnt, bevor der Bargeldbestand ins Minus rutscht' },
    { icon: Clock, text: 'Vergessen? Offene Kassensitzungen schließt Treatflow um 05:00 Uhr automatisch' },
];

function Row({ label, value, run, muted = false, strong = false }: { label: string; value: number; run: boolean; muted?: boolean; strong?: boolean }) {
    const shown = useCountUp(Math.abs(value), run, 1300);
    return (
        <div className={`flex justify-between gap-4 py-1.5 ${strong ? 'font-semibold text-gray-900' : muted ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>{label}</span>
            <span className="tabular-nums">
                {value < 0 ? '−' : ''}
                {formatEuro(shown)}
            </span>
        </div>
    );
}

/** Tagesabschluss mit einem Z-Bericht, dessen Zahlen beim Sichtbarwerden hochzählen. */
export default function KasseDayClose() {
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

    return (
        <section id="tagesabschluss" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Tagesabschluss</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 hyphens-none lg:text-4xl" lang="de">
                        Kassensturz und Z-Bericht in einer Minute
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Am Abend zählst du das Bargeld und tippst den Betrag ein. Treatflow rechnet den Soll-Bestand, zeigt jede Differenz als
                        Kassenplus oder Kassenminus und erstellt den Z-Bericht – fertig für die Buchhaltung.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {POINTS.map(({ icon: Icon, text }) => (
                            <li key={text} className="flex gap-3">
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <Icon className="h-[18px] w-[18px]" />
                                </span>
                                <span className="pt-1.5 leading-relaxed text-gray-700">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div ref={ref} className="relative mx-auto w-full max-w-md" aria-hidden="true">
                    <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-200/50 via-sky-100/50 to-transparent blur-2xl" />
                    <div className="relative rotate-[-1.5deg] rounded-2xl border border-gray-200/80 bg-white p-6 font-medium shadow-[0_30px_70px_-35px_rgba(15,23,42,0.5)] transition-transform duration-500 hover:rotate-0">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Z-Bericht</p>
                                <p className="mt-1 text-lg font-bold text-gray-900">Studio Aurora · Kasse 1</p>
                                <p className="text-sm text-gray-400">Kassensitzung 214 · 08:47 – 19:12</p>
                            </div>
                            <span className="rounded-full bg-gray-900 px-2.5 py-1 text-[11px] font-semibold text-white">Heute</span>
                        </div>

                        <div className="mt-5 border-t border-dashed border-gray-200 pt-3 text-sm">
                            <Row label="Bruttoumsatz" value={1518.5} run={inView} strong />
                            <Row label="davon Karte" value={986} run={inView} />
                            <Row label="davon Bar" value={412.5} run={inView} />
                            <Row label="davon Gutschein" value={120} run={inView} />
                            <Row label="Trinkgeld (nicht im Umsatz)" value={38} run={inView} muted />
                        </div>

                        <div className="mt-3 border-t border-dashed border-gray-200 pt-3 text-sm">
                            <Row label="Anfangsbestand" value={150} run={inView} />
                            <Row label="Barentnahme Bank" value={-100} run={inView} />
                            <Row label="Soll-Bestand" value={462.5} run={inView} strong />
                            <Row label="Gezählt" value={462.5} run={inView} strong />
                        </div>

                        <div
                            className={`mt-4 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 text-emerald-700 transition-all duration-500 ${
                                inView ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ transitionDelay: inView ? '1300ms' : '0ms' }}
                        >
                            <span className="flex items-center gap-2 font-semibold">
                                <Check className="h-4 w-4" />
                                Differenz 0,00 € – Kasse stimmt
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
