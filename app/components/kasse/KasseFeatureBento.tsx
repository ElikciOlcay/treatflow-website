'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Banknote,
    CalendarCheck,
    Check,
    CreditCard,
    FileSpreadsheet,
    Gift,
    HandCoins,
    History,
    KeyRound,
    Landmark,
    LayoutDashboard,
    MonitorSmartphone,
    Smartphone,
    Split,
    Tablet,
    Undo2,
    UserRound,
} from 'lucide-react';
import { formatEuro, useCountUp, useInView, usePrefersReducedMotion } from './motion';

const PAYMENT_METHODS = [
    { label: 'Bar', icon: Banknote },
    { label: 'Karte', icon: CreditCard },
    { label: 'Gutschein', icon: Gift },
    { label: 'Überweisung', icon: Landmark },
    { label: 'Split', icon: Split },
];

const HOURS = [
    { hour: '9', value: 32 },
    { hour: '10', value: 68 },
    { hour: '11', value: 54 },
    { hour: '12', value: 22 },
    { hour: '13', value: 46 },
    { hour: '14', value: 82 },
    { hour: '15', value: 96 },
    { hour: '16', value: 74 },
    { hour: '17', value: 58 },
    { hour: '18', value: 38 },
];

function Tile({
    className = '',
    icon: Icon,
    title,
    text,
    children,
    link,
}: {
    className?: string;
    icon: typeof Banknote;
    title: string;
    text: string;
    children?: ReactNode;
    link?: { href: string; label: string };
}) {
    return (
        <article
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_24px_60px_-36px_rgba(79,70,229,0.55)] ${className}`}
        >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1.5 text-gray-600 leading-relaxed">{text}</p>
            {children && <div className="mt-5 flex-1">{children}</div>}
            {link && (
                <Link href={link.href} className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                    {link.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            )}
        </article>
    );
}

/** Funktionskacheln mit kleinen Animationen, die beim Sichtbarwerden starten. */
export default function KasseFeatureBento() {
    const reduced = usePrefersReducedMotion();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
    const [activeMethod, setActiveMethod] = useState(1);
    const [pinDigits, setPinDigits] = useState(4);

    // Zahlarten der Reihe nach hervorheben
    useEffect(() => {
        if (!inView || reduced) return;
        const timer = window.setInterval(() => setActiveMethod((i) => (i + 1) % PAYMENT_METHODS.length), 1400);
        return () => window.clearInterval(timer);
    }, [inView, reduced]);

    // PIN-Eingabe: Punkte füllen sich, dann wechselt die Mitarbeiterin
    useEffect(() => {
        if (!inView || reduced) return;
        setPinDigits(0);
        const timer = window.setInterval(() => setPinDigits((d) => (d >= 6 ? 0 : d + 1)), 500);
        return () => window.clearInterval(timer);
    }, [inView, reduced]);

    const revenue = useCountUp(1518.5, inView, 1600);
    const voucherRest = useCountUp(21, inView, 1400);

    return (
        <section id="funktionen" className="scroll-mt-24 bg-gray-50/80 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Funktionen</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 hyphens-none lg:text-4xl" lang="de">
                        Alles, was eine Studio-Kasse können muss
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Und ein paar Dinge, die eine normale Registrierkasse nicht kann – weil Treatflow deine Termine und Kundinnen kennt.
                    </p>
                </div>

                <div ref={ref} className="grid grid-flow-row-dense gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {/* 1. Kassieren aus dem Termin */}
                    <Tile
                        className="md:col-span-2"
                        icon={CalendarCheck}
                        title="Kassieren aus dem Termin"
                        text="Kein Abtippen: Kundin, Behandlung und Preis kommen aus dem Kalender. Nach dem Bezahlen steht der Verkauf in der Kundenkartei – mit Behandlungshistorie, Fotos und Formularen an einem Ort."
                        link={{ href: '/kasse-mit-kundenkartei-kosmetikstudio', label: 'Kasse mit Kundenkartei' }}
                    >
                        <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]" aria-hidden="true">
                            <div className="space-y-2 rounded-2xl bg-gray-50 p-3">
                                {[
                                    { time: '09:00', name: 'Sarah K. · Lash Lifting', active: false },
                                    { time: '10:00', name: 'Lena W. · Hydrafacial', active: true },
                                    { time: '11:30', name: 'Nina P. · Maniküre', active: false },
                                ].map((slot) => (
                                    <div
                                        key={slot.time}
                                        className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${
                                            slot.active ? 'bg-white text-gray-900 shadow-sm ring-1 ring-indigo-200' : 'text-gray-400'
                                        }`}
                                    >
                                        <span className="font-semibold tabular-nums">{slot.time}</span>
                                        <span className="truncate">{slot.name}</span>
                                        {slot.active && (
                                            <span className="ml-auto rounded-md bg-indigo-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">Kassieren</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-indigo-400 sm:rotate-0" />
                            <div className="space-y-2 rounded-2xl bg-indigo-50/60 p-3 text-xs">
                                <div className="flex justify-between rounded-lg bg-white px-2.5 py-2 shadow-sm">
                                    <span className="font-medium text-gray-900">Hydrafacial Deluxe</span>
                                    <span className="font-semibold tabular-nums text-indigo-600">89,00 €</span>
                                </div>
                                <div className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 font-medium text-emerald-700 ${inView ? 'tf-pos-pop' : ''}`} style={{ animationDelay: '400ms' }}>
                                    <Check className="h-3.5 w-3.5" />
                                    In Lenas Kundenkartei gespeichert
                                </div>
                            </div>
                        </div>
                    </Tile>

                    {/* 2. Zahlarten */}
                    <Tile
                        icon={Banknote}
                        title="Alle Zahlarten"
                        text="Bar mit Wechselgeld-Rechnung, Karte, Gutschein, Überweisung – oder Split: ein Teil bar, der Rest mit Karte."
                    >
                        <ul className="flex flex-wrap gap-2">
                            {PAYMENT_METHODS.map(({ label, icon: Icon }, index) => (
                                <li
                                    key={label}
                                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                                        index === activeMethod
                                            ? 'border-indigo-300 bg-indigo-50 text-indigo-700 shadow-[0_0_0_3px_rgba(99,102,241,0.12)]'
                                            : 'border-gray-200 text-gray-600'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </Tile>

                    {/* 3. SumUp */}
                    <Tile
                        icon={CreditCard}
                        title="SumUp Solo & Air"
                        text="Der Betrag geht per Cloud direkt ans Terminal – kein Vertippen. Kontaktlos mit Karte, Smartphone oder Uhr."
                    >
                        <div className="relative mx-auto max-w-[15rem] overflow-hidden rounded-2xl bg-gray-50">
                            <Image
                                src="/images/sumup-solo.jpg"
                                alt="SumUp Solo Kartenterminal, verbunden mit der Treatflow Kasse"
                                width={996}
                                height={721}
                                sizes="240px"
                                className="h-auto w-full"
                            />
                        </div>
                    </Tile>

                    {/* 4. Gutscheine */}
                    <Tile
                        icon={Gift}
                        title="Gutscheine"
                        text="An der Kasse oder online über deine Buchungsseite verkaufen, beim Bezahlen einlösen. Der Restwert wird automatisch gebucht."
                        link={{ href: '/gutscheine-kosmetikstudio', label: 'Gutscheine im Detail' }}
                    >
                        <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-sky-500 p-4 text-white shadow-[0_18px_40px_-24px_rgba(79,70,229,0.9)]" aria-hidden="true">
                            <div className="flex items-center justify-between text-xs text-white/80">
                                <span>Studio Aurora</span>
                                <span className="font-mono">AURORA-50</span>
                            </div>
                            <p className="mt-3 text-2xl font-bold tabular-nums">{formatEuro(voucherRest)}</p>
                            <p className="text-xs text-white/80">Restwert von 50,00 €</p>
                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/25">
                                <div className="h-full rounded-full bg-white transition-[width] duration-300" style={{ width: `${(voucherRest / 50) * 100}%` }} />
                            </div>
                        </div>
                    </Tile>

                    {/* 5. Trinkgeld */}
                    <Tile
                        icon={HandCoins}
                        title="Trinkgeld getrennt"
                        text="Trinkgeld wird eigens erfasst, auf dem Beleg ausgewiesen und zählt nicht zum Umsatz – auch nicht im Export."
                    >
                        <div className="space-y-2 text-sm" aria-hidden="true">
                            <div className="flex justify-between rounded-xl bg-gray-50 px-3 py-2">
                                <span className="text-gray-600">Umsatz</span>
                                <span className="font-semibold tabular-nums text-gray-900">128,00 €</span>
                            </div>
                            <div className="flex justify-between rounded-xl bg-amber-50 px-3 py-2">
                                <span className="text-amber-800">Trinkgeld</span>
                                <span className="font-semibold tabular-nums text-amber-800">5,00 €</span>
                            </div>
                            <p className="px-1 text-xs text-gray-400">Getrennt im Dashboard, Z-Bericht und Export</p>
                        </div>
                    </Tile>

                    {/* 6. Mitarbeiter-PIN */}
                    <Tile
                        icon={KeyRound}
                        title="Mitarbeiter-PIN"
                        text="Jede Mitarbeiterin meldet sich mit ihrer PIN an. Du siehst immer, wer kassiert, storniert oder Bargeld entnommen hat."
                    >
                        <div className="flex items-center gap-4 rounded-2xl bg-gray-50 px-4 py-3" aria-hidden="true">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 text-indigo-700">
                                <UserRound className="h-5 w-5" />
                            </span>
                            <span className="flex-1">
                                <span className="block text-sm font-semibold text-gray-900">Mia</span>
                                <span className="mt-1.5 flex gap-1.5">
                                    {[0, 1, 2, 3].map((dot) => (
                                        <span
                                            key={dot}
                                            className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                                                dot < pinDigits ? 'bg-indigo-600' : 'bg-gray-300'
                                            }`}
                                        />
                                    ))}
                                </span>
                            </span>
                            <span
                                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-opacity duration-300 ${
                                    pinDigits >= 4 ? 'bg-emerald-50 text-emerald-700 opacity-100' : 'opacity-0'
                                }`}
                            >
                                Angemeldet
                            </span>
                        </div>
                    </Tile>

                    {/* 7. Dashboard */}
                    <Tile
                        className="md:col-span-2"
                        icon={LayoutDashboard}
                        title="Kassen-Dashboard"
                        text="Umsatz, Zahlungsarten, Trinkgeld und alle Transaktionen des Tages auf einen Blick – inklusive wer wann kassiert hat."
                    >
                        <div className="grid gap-4 rounded-2xl bg-gray-50 p-4 sm:grid-cols-[auto_1fr] sm:items-end" aria-hidden="true">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Umsatz heute</p>
                                <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight text-gray-900">{formatEuro(revenue)}</p>
                                <div className="mt-3 flex h-2 w-48 overflow-hidden rounded-full">
                                    <span className="h-full bg-indigo-600" style={{ width: '65%' }} />
                                    <span className="h-full bg-sky-400" style={{ width: '27%' }} />
                                    <span className="h-full bg-fuchsia-400" style={{ width: '8%' }} />
                                </div>
                                <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-gray-500">
                                    {[
                                        { label: 'Karte 65 %', color: 'bg-indigo-600' },
                                        { label: 'Bar 27 %', color: 'bg-sky-400' },
                                        { label: 'Gutschein 8 %', color: 'bg-fuchsia-400' },
                                    ].map((entry) => (
                                        <span key={entry.label} className="flex items-center gap-1">
                                            <span className={`h-2 w-2 rounded-sm ${entry.color}`} />
                                            {entry.label}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <div className="flex h-28 items-end gap-1.5 sm:gap-2">
                                {HOURS.map(({ hour, value }, index) => (
                                    <span key={hour} className="flex h-full flex-1 flex-col items-center gap-1">
                                        <span className="flex w-full flex-1 items-end">
                                            <span
                                                className={`block w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-sky-400 ${inView ? 'tf-pos-bar' : ''}`}
                                                style={{ height: `${value}%`, animationDelay: `${index * 70}ms` }}
                                            />
                                        </span>
                                        <span className="text-[10px] tabular-nums text-gray-400">{hour}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Tile>

                    {/* 8. Exporte */}
                    <Tile
                        icon={FileSpreadsheet}
                        title="Exporte für den Steuerberater"
                        text="Kassenbericht, Belegarchiv und Transaktionen als PDF oder CSV – dazu die amtlichen Formate für Prüfungen."
                    >
                        <ul className="flex flex-wrap gap-2 text-sm">
                            {['DSFinV-K (DE)', 'DEP7 (AT)', 'Kassenbericht PDF', 'Transaktionen CSV', 'Belegarchiv'].map((label) => (
                                <li key={label} className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 font-medium text-gray-700">
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </Tile>

                    {/* 9. Storno & Historie */}
                    <Tile
                        icon={History}
                        title="Storno & Historie"
                        text="Stornos laufen als revisionssichere Gegenbuchung. Jeder Beleg bleibt durchsuchbar und lässt sich erneut senden."
                    >
                        <div className="space-y-2 text-sm" aria-hidden="true">
                            <div className="flex justify-between rounded-xl bg-gray-50 px-3 py-2 text-gray-400">
                                <span className="line-through">Beleg 0412 · Maniküre</span>
                                <span className="tabular-nums line-through">45,00 €</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-rose-50 px-3 py-2 text-rose-700">
                                <span className="flex items-center gap-1.5">
                                    <Undo2 className="h-3.5 w-3.5" />
                                    Storno 0413
                                </span>
                                <span className="tabular-nums">−45,00 €</span>
                            </div>
                        </div>
                    </Tile>

                    {/* 10. Geräte */}
                    <Tile
                        icon={MonitorSmartphone}
                        title="Läuft auf jedem Gerät"
                        text="Im Browser auf Tablet, Laptop oder Smartphone – an der Theke, am Behandlungsplatz oder im Homestudio. Keine Kassenhardware nötig."
                    >
                        <div className="flex items-end justify-center gap-4 text-gray-300" aria-hidden="true">
                            <MonitorSmartphone className="h-12 w-12" />
                            <Tablet className="h-10 w-10 text-indigo-400" />
                            <Smartphone className="h-8 w-8" />
                        </div>
                    </Tile>
                </div>
            </div>
        </section>
    );
}
