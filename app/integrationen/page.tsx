import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Receipt, Calendar, Zap, CheckCircle, ArrowRight, Plug,
    RefreshCw, Workflow, ShieldCheck, CreditCard, Wallet, Building2,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

import { buildHreflangAlternates } from '../i18n/seo';
export const metadata: Metadata = {
    title: 'Integrationen & Apps für dein Kosmetikstudio',
    description: 'Verbinde Treatflow mit Lexware Office, Google Kalender, SumUp, Zapier u. v. m. Buchhaltung, Kartenzahlung, Online-Bezahlung und Automatisierung – alles in einer Plattform.',
    keywords: [
        'Treatflow Integrationen',
        'Kosmetikstudio Software Schnittstellen',
        'Lexware Office Integration',
        'Google Kalender Synchronisation',
        'Zapier Kosmetikstudio',
        'SumUp Kartenterminal Kosmetikstudio',
        'Online Zahlung Kosmetikstudio',
        'Buchhaltung Kosmetikstudio',
        'Terminkalender Sync',
        'AbaNinja Schweiz',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/integrationen',
        ...buildHreflangAlternates("integrations"),
    },
    openGraph: {
        title: 'Integrationen & Apps | Treatflow',
        description: 'Verbinde Treatflow mit Lexware, SumUp, Google Kalender, Zapier u. v. m. – Buchhaltung, Kartenzahlung und Automatisierung in einer Plattform.',
        url: 'https://www.treatflow.io/integrationen',
    },
};

const integrationen = [
    {
        id: 'lexware',
        icon: Receipt,
        name: 'Lexware Office',
        category: 'Buchhaltung & Rechnungen',
        description:
            'Synchronisiere deine Kunden automatisch und erstelle Rechnungen direkt aus dem Termin heraus – ganz ohne Doppelpflege.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        gradient: 'from-emerald-500 to-teal-600',
        border: 'border-emerald-200 hover:border-emerald-400',
        highlights: [
            'Kunden automatisch synchronisieren',
            'Rechnungen aus dem Kalender erstellen',
            'Keine manuelle Doppelerfassung',
            'Steuerberater-freundlicher Export',
        ],
    },
    {
        id: 'google-calendar',
        icon: Calendar,
        name: 'Google Kalender',
        category: 'Terminsynchronisation',
        description:
            'Halte deine Termine in beide Richtungen synchron. Buchungen in Treatflow erscheinen sofort in deinem Google Kalender – und umgekehrt.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        gradient: 'from-blue-500 to-indigo-600',
        border: 'border-blue-200 hover:border-blue-400',
        highlights: [
            'Zwei-Wege-Synchronisation',
            'Termine in Echtzeit abgleichen',
            'Keine Doppelbuchungen',
            'Privat- und Studio-Kalender getrennt',
        ],
    },
    {
        id: 'sumup-terminal',
        icon: CreditCard,
        name: 'SumUp Kartenterminal',
        category: 'Kartenzahlung',
        description:
            'Nimm Kartenzahlungen direkt aus der Treatflow Kasse an – mit dem SumUp Solo Terminal per Cloud API, ohne manuelles Eintippen.',
        color: 'text-sky-600',
        bg: 'bg-sky-50',
        gradient: 'from-sky-500 to-cyan-600',
        border: 'border-sky-200 hover:border-sky-400',
        highlights: [
            'Kartenzahlung direkt aus der Kasse',
            'SumUp Solo per Cloud API angebunden',
            'Kein manuelles Eintippen der Beträge',
            'Sichere, kontaktlose Zahlung',
        ],
    },
    {
        id: 'treatflow-pay',
        icon: Wallet,
        name: 'Treatflow Pay',
        category: 'Online-Bezahlung',
        description:
            'Lass Kunden Anzahlungen oder Vollzahlungen direkt bei der Online-Buchung leisten – sicher über Stripe, transparent abgerechnet.',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
        gradient: 'from-violet-500 to-purple-600',
        border: 'border-violet-200 hover:border-violet-400',
        highlights: [
            'Anzahlungen bei Online-Buchungen',
            'Vollzahlungen vorab möglich',
            'Sichere Abwicklung über Stripe',
            '2,69 % pro Transaktion – transparent',
        ],
    },
    {
        id: 'zapier',
        icon: Zap,
        name: 'Zapier',
        category: 'Automatisierung',
        description:
            'Verbinde Treatflow mit über 7.000 Apps. Löse bei neuen Terminen oder Formularen automatisch Workflows aus – z. B. in Google Sheets, Mailchimp oder deinem CRM.',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        gradient: 'from-orange-500 to-amber-600',
        border: 'border-orange-200 hover:border-orange-400',
        highlights: [
            'Über 7.000 Apps verbinden',
            'Webhooks bei neuen Terminen & Formularen',
            'Eigene Automatisierungen ohne Code',
            'Google Sheets, CRM, E-Mail u. v. m.',
        ],
    },
    {
        id: 'abaninja',
        icon: Building2,
        name: 'Swiss21 AbaNinja',
        category: 'Buchhaltung Schweiz',
        description:
            'Die Schweizer Buchhaltungslösung: Synchronisiere Kunden und erstelle QR-Rechnungen direkt aus Treatflow – speziell für Studios in der Schweiz.',
        color: 'text-red-600',
        bg: 'bg-red-50',
        gradient: 'from-red-500 to-rose-600',
        border: 'border-red-200 hover:border-red-400',
        highlights: [
            'Kunden automatisch synchronisieren',
            'Schweizer QR-Rechnungen erstellen',
            'Speziell für den Schweizer Markt',
            'Nahtlose Anbindung an Swiss21',
        ],
    },
];

const vorteile = [
    {
        icon: RefreshCw,
        title: 'Weniger Doppelarbeit',
        description: 'Daten fließen automatisch zwischen deinen Tools – du pflegst sie nur einmal in Treatflow.',
        gradient: 'from-indigo-500 to-purple-600',
    },
    {
        icon: Workflow,
        title: 'Automatische Abläufe',
        description: 'Rechnungen, Kalendereinträge und Workflows laufen im Hintergrund, ohne dass du etwas tun musst.',
        gradient: 'from-emerald-500 to-teal-600',
    },
    {
        icon: ShieldCheck,
        title: 'DSGVO-konform',
        description: 'Alle Integrationen laufen über sichere Schnittstellen und EU-konforme Datenverarbeitung.',
        gradient: 'from-blue-500 to-indigo-600',
    },
];

const faqs = [
    {
        q: 'Welche Apps kann ich mit Treatflow verbinden?',
        a: 'Treatflow lässt sich direkt mit Lexware Office (Buchhaltung DE), Swiss21 AbaNinja (Buchhaltung CH), Google Kalender (Terminsynchronisation), SumUp (Kartenzahlung) und Treatflow Pay (Online-Bezahlung) verbinden. Über Zapier erreichst du zusätzlich mehr als 7.000 weitere Apps wie Google Sheets, Mailchimp oder dein CRM.',
    },
    {
        q: 'Wie synchronisiere ich meine Termine mit dem Google Kalender?',
        a: 'Du verbindest deinen Google-Account einmalig in den Studio-Einstellungen unter „Apps". Danach werden Termine automatisch in beide Richtungen abgeglichen: Buchungen in Treatflow erscheinen in deinem Google Kalender und umgekehrt – so vermeidest du Doppelbuchungen.',
    },
    {
        q: 'Kann ich Rechnungen automatisch an Lexware Office übergeben?',
        a: 'Ja. Mit der Lexware-Integration kannst du Kunden automatisch synchronisieren und Rechnungen direkt aus dem Termin heraus in Lexware Office erstellen. Das spart manuelle Doppelerfassung und hält deine Buchhaltung aktuell.',
    },
    {
        q: 'Wofür brauche ich die Zapier-Integration?',
        a: 'Mit Zapier automatisierst du individuelle Workflows ohne Programmierung. Bei einem neuen Termin oder einem ausgefüllten Formular kann Treatflow z. B. automatisch eine Zeile in Google Sheets anlegen, einen Kontakt im CRM erstellen oder eine E-Mail auslösen.',
    },
    {
        q: 'Kann ich Kartenzahlungen über Treatflow annehmen?',
        a: 'Ja. Mit der SumUp-Integration verbindest du dein SumUp Solo Terminal und nimmst Kartenzahlungen direkt aus der Treatflow Kasse an – per Cloud API, ohne manuelles Eintippen. Für Online-Buchungen bietet Treatflow Pay sichere Anzahlungen und Vollzahlungen über Stripe.',
    },
    {
        q: 'Sind die Integrationen in jedem Tarif enthalten?',
        a: 'Die Integrationen sind im Booking-Paket enthalten. Du findest und aktivierst sie nach der Anmeldung im Dashboard unter Studio-Einstellungen > Apps.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
        },
    })),
};

export default function IntegrationenPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Integrationen' },
                ])) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Integrationen' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Plug className="h-4 w-4 mr-2" />
                            Integrationen
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 break-words hyphens-auto" lang="de">
                            Treatflow mit deinen <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Lieblings-Apps</span> verbinden
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Verbinde Treatflow mit den Tools, die du täglich nutzt – für automatische Buchhaltung,
                            synchrone Termine und individuelle Workflows. Daten einmal pflegen, überall aktuell.
                        </p>
                    </div>
                </div>
            </section>

            {/* Integrationen Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Diese Apps sind bereits integriert
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Von Buchhaltung über Kartenzahlung bis Automatisierung – starke Verbindungen, die dir täglich Zeit sparen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {integrationen.map((app) => (
                            <div
                                key={app.id}
                                className={`group flex flex-col border rounded-2xl p-8 transition-all duration-200 hover:shadow-lg ${app.border}`}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-r ${app.gradient} rounded-xl flex items-center justify-center mb-5`}>
                                    <app.icon className="h-7 w-7 text-white" />
                                </div>
                                <span className={`text-xs font-semibold uppercase tracking-wide ${app.color} mb-2`}>
                                    {app.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {app.name}
                                </h3>
                                <p className="text-gray-600 mb-5 leading-relaxed">
                                    {app.description}
                                </p>
                                <ul className="space-y-2 mt-auto">
                                    {app.highlights.map((h) => (
                                        <li key={h} className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className={`h-4 w-4 ${app.color} mr-2 mt-0.5 flex-shrink-0`} />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Warum Integrationen?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Vernetzte Tools bedeuten weniger manuelle Arbeit und mehr Zeit für deine Kunden.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {vorteile.map((vorteil) => (
                            <div key={vorteil.title} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                                <div className={`w-16 h-16 bg-gradient-to-r ${vorteil.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <vorteil.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{vorteil.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{vorteil.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* So funktioniert's */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            In drei Schritten verbunden
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Die Einrichtung dauert nur wenige Minuten – ganz ohne technisches Vorwissen.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {[
                            { step: '1', title: 'App auswählen', text: 'Öffne im Dashboard die Studio-Einstellungen unter „Apps" und wähle die gewünschte Integration aus.', gradient: 'from-indigo-500 to-purple-600' },
                            { step: '2', title: 'Konto verbinden', text: 'Melde dich einmalig beim jeweiligen Anbieter an – z. B. Lexware, Google, SumUp oder Zapier – und autorisiere die Verbindung.', gradient: 'from-emerald-500 to-teal-600' },
                            { step: '3', title: 'Automatisch synchron', text: 'Ab sofort laufen Termine, Kunden und Workflows automatisch im Hintergrund zusammen.', gradient: 'from-orange-500 to-amber-600' },
                        ].map((item) => (
                            <div key={item.step} className="flex items-start">
                                <div className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                                    <span className="text-white font-bold text-sm">{item.step}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verwandte Funktionen */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Verwandte Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Treatflow vereint Terminkalender, Online-Buchungen, Kassensystem und mehr in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { href: '/terminkalender', title: 'Terminkalender', desc: 'Termine zentral verwalten & synchronisieren' },
                            { href: '/kassensystem-kosmetikstudio', title: 'Kassensystem', desc: 'TSE- & RKSV-konform kassieren' },
                            { href: '/online-buchungen', title: 'Online-Buchungen', desc: 'Kunden buchen 24/7 über deinen Link' },
                            { href: '/nachrichtenautomatisierung', title: 'Nachrichten', desc: 'E-Mail & SMS automatisiert versenden' },
                            { href: '/kundenverwaltung', title: 'Kundenverwaltung', desc: 'Kundendaten & Behandlungshistorie' },
                            { href: '/funktionen', title: 'Alle Funktionen', desc: 'Der komplette Überblick' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="group p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">{item.title}</span>
                                <span className="text-sm text-gray-600 block mb-2">{item.desc}</span>
                                <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Häufige Fragen zu Integrationen
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 break-words hyphens-auto" lang="de">
                        Vernetze dein Studio mit den richtigen Tools
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und verbinde Lexware, SumUp, Google Kalender, Zapier und mehr in wenigen Minuten.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/funktionen"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                        >
                            Alle Funktionen ansehen
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
