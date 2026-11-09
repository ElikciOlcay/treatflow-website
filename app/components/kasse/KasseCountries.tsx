import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

type Country = {
    id: string;
    flag: string[];
    name: string;
    title: string;
    lead: string;
    receipt: { label: string; detail: string };
    points: { title: string; text: string }[];
    link: { href: string; label: string };
};

const COUNTRIES: Country[] = [
    {
        id: 'deutschland',
        flag: ['bg-gray-900', 'bg-red-600', 'bg-amber-400'],
        name: 'Deutschland',
        title: 'KassenSichV & TSE',
        lead: 'Wer elektronisch kassiert, braucht eine zertifizierte technische Sicherheitseinrichtung (TSE). Treatflow nutzt eine Cloud-TSE – ohne USB-Stick und ohne Hardware.',
        receipt: { label: 'TSE-Signatur', detail: 'Transaktion 2026-0418 signiert' },
        points: [
            {
                title: 'Jeder Verkauf signiert',
                text: 'Signatur nach KassenSichV, Pflichtangaben und QR-Code stehen automatisch auf dem Beleg.',
            },
            {
                title: 'Belegausgabepflicht erfüllt',
                text: 'Beleg als PDF oder per E-Mail. Kleinbetragsrechnungen bis 250 € erkennt die Kasse selbst.',
            },
            {
                title: 'ELSTER-Meldung erledigt',
                text: 'Seit 2025 muss jede elektronische Kasse dem Finanzamt gemeldet werden. Du bestätigst die Angaben, Treatflow übermittelt die Meldung bei der Einrichtung.',
            },
            {
                title: 'DSFinV-K auf Knopfdruck',
                text: 'Der Export für Kassen-Nachschau und Betriebsprüfung ist jederzeit bereit.',
            },
        ],
        link: { href: '/kassensystem-kosmetikstudio-deutschland', label: 'TSE-Kasse für Deutschland' },
    },
    {
        id: 'oesterreich',
        flag: ['bg-red-600', 'bg-white', 'bg-red-600'],
        name: 'Österreich',
        title: 'RKSV-Registrierkasse (Kassa)',
        lead: 'Ab 15.000 € Jahresumsatz, davon mehr als 7.500 € bar, gilt die Registrierkassenpflicht – Bankomat- und Kreditkartenzahlungen zählen mit. Treatflow erfüllt die RKSV ohne Signaturkarte.',
        receipt: { label: 'RKSV-Signatur', detail: 'Beleg mit maschinenlesbarem Code' },
        points: [
            {
                title: 'Signatur und QR-Code',
                text: 'Jeder Beleg wird über fiskaly SIGN AT signiert und trägt den RKSV-QR-Code.',
            },
            {
                title: 'FinanzOnline-Registrierung',
                text: 'Kasse und Signaturerstellungseinheit werden mit deinen FinanzOnline-Webservice-Zugangsdaten automatisch angemeldet.',
            },
            {
                title: 'Sonderbelege automatisch',
                text: 'Start-, Monats-, Jahres- und Schlussbeleg erstellt die Kasse selbst.',
            },
            {
                title: 'Belegerteilungspflicht & DEP7',
                text: 'Kleinbetragsrechnungen bis 400 € werden erkannt, das Datenerfassungsprotokoll exportierst du mit einem Klick.',
            },
        ],
        link: { href: '/registrierkasse-kosmetikstudio-oesterreich', label: 'Registrierkasse für Österreich' },
    },
];

/** Gesetzliche Vorgaben in Deutschland und Österreich nebeneinander. */
export default function KasseCountries() {
    return (
        <section id="deutschland-oesterreich" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Fiskalisierung</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 hyphens-none lg:text-4xl" lang="de">
                        Rechtssicher in Deutschland und Österreich
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Treatflow erkennt das Land deines Studios und richtet die passende Sicherheitseinrichtung über fiskaly ein. Um
                        TSE, Signatur und Meldung an das Finanzamt musst du dich nicht selbst kümmern.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {COUNTRIES.map((country) => (
                        <article
                            key={country.id}
                            id={country.id}
                            className="tf-reveal flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] sm:p-8"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-9 flex-col overflow-hidden rounded-[4px] ring-1 ring-gray-200" aria-hidden="true">
                                    {country.flag.map((stripe, index) => (
                                        <span key={index} className={`flex-1 ${stripe}`} />
                                    ))}
                                </span>
                                <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">{country.name}</span>
                            </div>

                            <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">{country.title}</h3>
                            <p className="mt-3 leading-relaxed text-gray-600">{country.lead}</p>

                            {/* kleiner Beleg mit Prüfhaken */}
                            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 px-4 py-3">
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                                    <svg viewBox="0 0 24 24" className="tf-pos-check h-5 w-5" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                                    </svg>
                                </span>
                                <span className="text-sm">
                                    <span className="block font-semibold text-emerald-800">{country.receipt.label} gültig</span>
                                    <span className="block text-emerald-700/80">{country.receipt.detail}</span>
                                </span>
                            </div>

                            <ul className="mt-6 space-y-4">
                                {country.points.map((point) => (
                                    <li key={point.title} className="flex gap-3">
                                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                                            <Check className="h-3.5 w-3.5" />
                                        </span>
                                        <span>
                                            <span className="block font-semibold text-gray-900">{point.title}</span>
                                            <span className="block text-gray-600 leading-relaxed">{point.text}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={country.link.href}
                                className="group mt-8 inline-flex items-center gap-1.5 self-start font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                {country.link.label}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </article>
                    ))}
                </div>

                <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-500">
                    Die Treatflow Kasse ist für Studios in Deutschland und Österreich ausgelegt, inklusive der dortigen Steuersätze. Die
                    Angaben auf dieser Seite ersetzen keine Steuerberatung.
                </p>
            </div>
        </section>
    );
}
