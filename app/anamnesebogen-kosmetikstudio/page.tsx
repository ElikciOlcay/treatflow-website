import { FileText, Shield, ArrowRight, CheckCircle, Clock, Star, Users, Smartphone, ClipboardCheck, PenTool, QrCode, Zap, Bell, Eye } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Anamnesebogen Kosmetik: Formulare & Vorlagen',
    description: 'Digitale Anamnesebögen für Kosmetikstudios: Anamnese, Einwilligungen und Formulare papierlos ausfüllen. Vorlagen inklusive. DSGVO-konform.',
    keywords: [
        'Anamnesebogen Kosmetik',
        'Anamnesebogen Kosmetik Vorlage',
        'Anamnesebogen Kosmetik Download',
        'Anamnese Fragebogen Kosmetik',
        'Kosmetik Anamnese Formular',
        'digitale Anamnesebögen Kosmetik',
        'Einwilligungserklärung Kosmetik',
        'Einwilligungserklärung Kosmetik Vorlage',
        'Formulare Kosmetikstudio',
        'Anamnese Kosmetik digital',
        'Anamnesebogen Gesichtsbehandlung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/anamnesebogen-kosmetikstudio',
    },
    openGraph: {
        title: 'Anamnesebogen Kosmetik: Digitale Formulare & Vorlagen',
        description: 'Digitale Anamnesebögen für Kosmetikstudios: Anamnese, Einwilligungen und Formulare papierlos ausfüllen. Vorlagen inklusive. DSGVO-konform.',
        url: 'https://www.treatflow.io/anamnesebogen-kosmetikstudio',
        images: [
            {
                url: '/images/og-anamnesebogen-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Digitale Anamnesebögen für Kosmetikstudios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Stapel von Papierformularen',
        description: 'Papierstapel im Schrank, vergilbte Anamnesebögen und Formulare, die keiner mehr findet. Der administrative Aufwand ist enorm.',
    },
    {
        icon: Clock,
        title: 'Wartezeit vor der Behandlung',
        description: 'Kundinnen kommen und müssen erstmal zehn Minuten Formulare ausfüllen. Das kostet deine Zeit und nervt die Kunden.',
    },
    {
        icon: Shield,
        title: 'DSGVO-Risiken bei Papierformularen',
        description: 'Offene Formulare im Empfangsbereich, fehlende Zugriffskontrolle und kein Löschkonzept. Das kann teuer werden.',
    },
    {
        icon: PenTool,
        title: 'Unleserliche Handschriften',
        description: 'Wenn die Kundin ihre Allergien hinkritzelt und du es nicht entziffern kannst, wird es kritisch. Digitale Formulare sind immer lesbar.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Digitale Anamnesebögen',
        description: 'Professionelle Anamnese-Vorlagen für Kosmetik, Laser, Permanent Make-up und mehr. Sofort einsetzbar und individuell anpassbar.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: PenTool,
        title: 'Elektronische Unterschrift',
        description: 'Kundinnen unterschreiben direkt auf dem Tablet oder Smartphone. Rechtssicher und sofort im Kundenprofil gespeichert.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: QrCode,
        title: 'Vorab-Ausfüllung per Link',
        description: 'Sende einen Link per E-Mail oder SMS. Kundinnen füllen den Anamnesebogen vor dem Termin bequem zu Hause aus.',
        gradient: 'from-orange-500 to-amber-600',
        bg: 'from-orange-50 to-amber-50',
    },
    {
        icon: Users,
        title: 'Automatische Zuordnung',
        description: 'Ausgefüllte Formulare werden automatisch dem Kundenprofil zugeordnet. Kein manuelles Einsortieren, kein Papierkram.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Eye,
        title: 'Vorlagen für jede Behandlung',
        description: 'Ob Microneedling, Laser oder klassische Gesichtsbehandlung - nutze fertige Vorlagen oder erstelle eigene Formulare.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Shield,
        title: 'DSGVO-konform archiviert',
        description: 'Alle Formulare werden verschlüsselt gespeichert. Zugriff nur für berechtigte Mitarbeiter. Automatisches Löschkonzept inklusive.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
];

const stats = [
    { value: '100%', label: 'papierlos', description: 'alle Formulare digital' },
    { value: '0 Min', label: 'Wartezeit', description: 'Vorab-Ausfüllung per Link' },
    { value: 'DSGVO', label: 'konform', description: 'verschlüsselt in der EU' },
    { value: 'Sofort', label: 'einsetzbar', description: 'fertige Vorlagen inklusive' },
];

const vorlagen = [
    {
        title: 'Kosmetik-Anamnesebogen',
        description: 'Hauttyp, Allergien, Medikamente, Vorerkrankungen',
    },
    {
        title: 'Einwilligungserklärung Behandlung',
        description: 'Aufklärung und Einwilligung mit Unterschrift',
    },
    {
        title: 'Laser / IPL Anamnesebogen',
        description: 'Hauttyp, Kontraindikationen, NiSV-spezifische Fragen',
    },
    {
        title: 'Permanent Make-up Anamnese',
        description: 'Farbwünsche, Vorbehandlungen, Allergien',
    },
    {
        title: 'Microneedling Anamnese',
        description: 'Hauterkrankungen, Medikamente, Erwartungen',
    },
    {
        title: 'DSGVO-Einwilligungserklärung',
        description: 'Datenschutzhinweis und Einwilligung zur Datenverarbeitung',
    },
];

const internalLinks = [
    {
        href: '/kosmetikstudio-software',
        title: 'Kosmetikstudio Software',
        description: 'Die All-in-One Lösung für dein Studio',
    },
    {
        href: '/terminsoftware-kosmetikstudio',
        title: 'Terminsoftware',
        description: 'Online-Buchungen und Terminkalender',
    },
    {
        href: '/kundenkartei-kosmetikstudio',
        title: 'Kundenkartei',
        description: 'Digitale Kundenverwaltung und Profile',
    },
    {
        href: '/nisv-dokumentation-kosmetikstudio',
        title: 'NiSV-Dokumentation',
        description: 'Rechtssichere Dokumentation nach NiSV',
    },
];

const features = [
    'Fertige Anamnese-Vorlagen',
    'Einwilligungsformulare',
    'Elektronische Unterschrift',
    'Vorab-Ausfüllung per Link',
    'QR-Code zum Ausfüllen am Empfang',
    'Automatische Zuordnung zum Kundenprofil',
    'Individuelle Formulare erstellen',
    'Pflichtfelder konfigurierbar',
    'Mehrsprachige Formulare',
    'PDF-Export',
    'DSGVO-konforme Archivierung',
    'Tablet-optimierte Ansicht',
];

const faqs = [
    {
        q: 'Gibt es fertige Anamnesebogen-Vorlagen?',
        a: 'Ja, Treatflow enthält professionelle Vorlagen für Kosmetik, Laser, Permanent Make-up, Microneedling und mehr. Du kannst sie sofort verwenden oder individuell anpassen.',
    },
    {
        q: 'Können Kundinnen den Anamnesebogen vorab ausfüllen?',
        a: 'Ja, du kannst einen Link per SMS oder E-Mail senden. Die Kundin füllt den Bogen bequem vor dem Termin aus und du hast alle Infos schon bereit.',
    },
    {
        q: 'Ist die elektronische Unterschrift rechtssicher?',
        a: 'Ja, die elektronische Unterschrift in Treatflow entspricht den rechtlichen Anforderungen für Einwilligungserklärungen im Kosmetikbereich.',
    },
    {
        q: 'Werden die Formulare DSGVO-konform gespeichert?',
        a: 'Alle Formulare werden verschlüsselt in EU-Rechenzentren gespeichert und sind nur für berechtigte Mitarbeiter zugänglich.',
    },
    {
        q: 'Kann ich eigene Formulare erstellen?',
        a: 'Ja, du kannst eigene Formulare mit Textfeldern, Checkboxen, Dropdowns und Unterschriftsfeldern erstellen und für verschiedene Behandlungen nutzen.',
    },
    {
        q: 'Was kostet die digitale Anamnese?',
        a: 'Digitale Anamnesebögen und Formulare sind in jedem Treatflow-Plan enthalten. 14 Tage kostenlos testen - ab 39 EUR/Monat.',
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

const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Digitale Anamnesebögen und Formulare für Kosmetikstudios. Vorlagen, elektronische Unterschrift und DSGVO-konforme Archivierung.',
    url: 'https://www.treatflow.io/anamnesebogen-kosmetikstudio',
    offers: {
        '@type': 'Offer',
        price: '39',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '120',
    },
};

export default function AnamnesebogenKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Star className="h-4 w-4 mr-2" />
                            Digitale Anamnesebögen für Kosmetikstudios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Anamnesebögen und Formulare digital im{' '}
                            <span className="text-indigo-600">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Schluss mit Papierformularen. Deine Kundinnen füllen Anamnesebögen, Einwilligungen und Formulare digital aus - vorab von zu Hause oder am Tablet im Studio. Rechtssicher, DSGVO-konform und immer griffbereit.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <img
                            src="/images/mockups/formulare-marketplace.png"
                            alt="Digitale Anamnesebögen und Formulare für Kosmetikstudios in Treatflow"
                            className="w-full rounded-2xl shadow-xl object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum Papierformulare deinem Studio schaden
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex gap-5 p-6 rounded-2xl bg-red-50/50 border border-red-100">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                    <point.icon className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                                    <p className="text-gray-600">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            So digitalisierst du Anamnesebögen mit Treatflow
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className={`bg-gradient-to-br ${solution.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center mb-6`}>
                                    <solution.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-indigo-100 mb-1">{stat.label}</div>
                                <div className="text-sm text-indigo-200">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vorlagen-Übersicht Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Fertige Vorlagen für dein Kosmetikstudio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Starte sofort mit professionellen Formularen - oder erstelle deine eigenen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vorlagen.map((vorlage, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
                            >
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-indigo-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{vorlage.title}</h3>
                                <p className="text-gray-600">{vorlage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Nahtlos integriert in dein Studio-Management
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {internalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-200 group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                                    {link.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                                <span className="inline-flex items-center text-indigo-600 text-sm font-medium">
                                    Mehr erfahren
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Checklist */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Alle Formular-Funktionen im Überblick
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Papierformulare gehören der Vergangenheit an
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste digitale Anamnesebögen, Einwilligungen und Formulare 14 Tage kostenlos. Alles in einer Plattform.
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
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-indigo-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen zu digitalen Anamnesebögen
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

            <Footer />
        </div>
    );
}
