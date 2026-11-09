import Link from 'next/link';
import { ArrowRight, Check, FlaskConical, Info } from 'lucide-react';
import { APP_REGISTER_BY_MARKET } from '@/app/i18n/market-access';

const INCLUDED = [
    'TSE (Deutschland) bzw. RKSV (Österreich) über fiskaly',
    'ELSTER- bzw. FinanzOnline-Anmeldung bei der Einrichtung',
    'Bar, Karte über SumUp, Gutschein, Überweisung, Split',
    'Gutscheine, Trinkgeld, Rabatte und Storno',
    'Kassensitzungen, X- und Z-Bericht, Kassen-Dashboard',
    'DSFinV-K, DEP7, Kassenbericht, CSV und Belegarchiv',
    'Mitarbeiter-PIN für dein ganzes Team',
];

/** Preis der Kasse als Add-on, transparent mit Einrichtung und Kartengebühren. */
export default function KassePricing() {
    return (
        <section id="preise" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)]"
                aria-hidden="true"
            />
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Preise</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 hyphens-none lg:text-4xl" lang="de">
                        Was kostet das Kassensystem?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Ein fester Monatspreis, keine Provision pro Verkauf und keine Kassenhardware, die du kaufen musst.
                    </p>
                </div>

                <div className="tf-reveal grid overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_30px_70px_-40px_rgba(15,23,42,0.5)] md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 p-8 text-white sm:p-10">
                        <div
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(24rem_14rem_at_90%_0%,rgba(255,255,255,0.2),transparent_60%)]"
                            aria-hidden="true"
                        />
                        <p className="relative text-sm font-semibold uppercase tracking-wide text-white/80">Treatflow Kasse</p>
                        <p className="relative mt-1 text-white/90">Add-on zum Booking-Plan</p>
                        <p className="relative mt-6 flex items-end gap-2">
                            <span className="text-6xl font-bold tracking-tight">39 €</span>
                            <span className="pb-2 text-white/80">/ Monat</span>
                        </p>
                        <p className="relative mt-1 text-sm text-white/80">zzgl. MwSt. · jährlich 35 €/Monat</p>
                        <p className="relative mt-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
                            einmalig 149 € Einrichtung (TSE/RKSV)
                        </p>
                        <a
                            href={APP_REGISTER_BY_MARKET.de}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 shadow-lg transition-colors hover:bg-indigo-50"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <Link href="/preise" className="relative mt-3 block text-center text-sm font-medium text-white/85 hover:text-white">
                            Alle Pläne und Preise
                        </Link>
                    </div>

                    <div className="p-8 sm:p-10">
                        <p className="font-semibold text-gray-900">Im Preis enthalten</p>
                        <ul className="mt-4 space-y-3">
                            {INCLUDED.map((item) => (
                                <li key={item} className="flex gap-3 text-gray-700">
                                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                        <Check className="h-3.5 w-3.5" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 space-y-3 text-sm">
                            <p className="flex gap-3 rounded-2xl bg-indigo-50/70 px-4 py-3 text-indigo-900">
                                <FlaskConical className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                                <span>
                                    <strong className="font-semibold">Erst ausprobieren:</strong> In der App kannst du die Kasse 7 Tage im Testmodus
                                    nutzen – ohne Einrichtungsgebühr und noch ohne Fiskalisierung.
                                </span>
                            </p>
                            <p className="flex gap-3 rounded-2xl bg-gray-50 px-4 py-3 text-gray-600">
                                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                <span>
                                    Treatflow nimmt keine Gebühr pro Verkauf. Für Kartenzahlungen gelten die Gebühren deines SumUp-Kontos. Der
                                    Booking-Plan kostet ab 59 €/Monat und enthält Terminkalender, Online-Buchung und Erinnerungen.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
