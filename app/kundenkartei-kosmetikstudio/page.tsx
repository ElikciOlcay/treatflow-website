import {
    Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Star, Search, Heart, TrendingUp, Smartphone, Camera, Tag
} from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Digitale Kundenkartei Kosmetikstudio - Kundenverwaltung | Treatflow',
    description: 'Digitale Kundenkartei für Kosmetikstudios: Kundendaten, Behandlungshistorie, Fotos und Notizen zentral verwalten. DSGVO-konform. 14 Tage kostenlos testen.',
    keywords: [
        'Kundenkartei Kosmetik',
        'digitale Kundenkartei Kosmetik',
        'Kundenkartei Kosmetik App',
        'Kundenverwaltung Kosmetikstudio',
        'Kundenverwaltung Beauty Studio',
        'Kundenmanagement Kosmetik',
        'Kundendatenbank Kosmetikstudio',
        'digitale Kundenkartei Beauty',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kundenkartei-kosmetikstudio',
    },
    openGraph: {
        title: 'Digitale Kundenkartei Kosmetikstudio - Kundenverwaltung | Treatflow',
        description: 'Digitale Kundenkartei für Kosmetikstudios: Kundendaten, Behandlungshistorie, Fotos und Notizen zentral verwalten. DSGVO-konform. 14 Tage kostenlos testen.',
        url: 'https://www.treatflow.io/kundenkartei-kosmetikstudio',
        images: [
            {
                url: '/images/og-kundenkartei-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Digitale Kundenkartei für Kosmetikstudios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Verstreute Kundendaten',
        description: 'Handgeschriebene Karteikarten, Post-its und Notizbücher. Wenn eine Stammkundin kommt, suchst du minutenlang nach ihren Daten.',
    },
    {
        icon: Camera,
        title: 'Keine Behandlungsfotos',
        description: 'Vorher-Nachher-Vergleiche auf dem Handy, die irgendwann gelöscht werden. Kein strukturierter Zugang zu Behandlungsverläufen.',
    },
    {
        icon: Search,
        title: 'Kein Überblick über Stammkunden',
        description: 'Wer war wann zuletzt da? Welche Produkte verträgt die Kundin nicht? Bei Papierkarteien fehlt die Übersicht.',
    },
    {
        icon: Shield,
        title: 'Datenschutz-Risiken',
        description: 'Offene Karteikarten im Empfangsbereich, ungesicherte Excel-Listen und fehlende Löschkonzepte gefährden die DSGVO-Konformität.',
    },
];

const solutions = [
    {
        icon: Users,
        title: 'Zentrale Kundendatenbank',
        description: 'Alle Kundendaten an einem Ort: Kontaktdaten, Allergien, Präferenzen und Notizen. Sofort abrufbar bei jedem Termin.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: Clock,
        title: 'Lückenlose Behandlungshistorie',
        description: 'Jede Behandlung wird automatisch dokumentiert. Du siehst auf einen Blick, wann welche Behandlung mit welchen Produkten durchgeführt wurde.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Camera,
        title: 'Behandlungsfotos verwalten',
        description: 'Vorher-Nachher-Fotos direkt in der Kundenkartei. Zeige deinen Kundinnen den Behandlungsfortschritt.',
        gradient: 'from-orange-500 to-red-600',
        bg: 'from-orange-50 to-red-50',
    },
    {
        icon: Tag,
        title: 'Kundinnen taggen und segmentieren',
        description: 'Vergib Tags wie "Stammkundin", "Empfindliche Haut" oder "NiSV-Kundin". Finde die richtigen Kunden in Sekunden.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Geburtstagsnachrichten, Follow-ups nach Behandlungen und Terminerinnerungen - alles automatisch basierend auf den Kundendaten.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Shield,
        title: 'DSGVO-konform & sicher',
        description: 'Verschlüsselte Speicherung in der EU, Zugriffsrechte für Mitarbeiter und automatische Löschkonzepte.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
];

const stats = [
    { value: '100%', label: 'digital & papierlos' },
    { value: '3s', label: 'Kundendaten abrufbar' },
    { value: 'DSGVO', label: 'konform gespeichert' },
    { value: '24/7', label: 'Zugriff von überall' },
];

const workflowSteps = [
    {
        step: '1',
        title: 'Kundin anlegen oder importieren',
        description: 'Erstelle neue Kundenprofile in Sekunden oder importiere bestehende Daten.',
    },
    {
        step: '2',
        title: 'Daten bei jedem Termin automatisch ergänzen',
        description: 'Bei jeder Behandlung wird die Kundenkartei automatisch aktualisiert - Behandlungen, Produkte, Fotos.',
    },
    {
        step: '3',
        title: 'Alles im Blick bei der nächsten Behandlung',
        description: 'Wenn die Kundin wiederkommt, hast du sofort alle Infos: letzte Behandlung, Allergien, Vorher-Nachher-Fotos.',
    },
];

const internalLinks = [
    {
        href: '/kosmetikstudio-software',
        title: 'Kosmetikstudio Software',
        description: 'Die komplette Lösung für dein Studio',
    },
    {
        href: '/online-terminbuchung-kosmetikstudio',
        title: 'Terminsoftware',
        description: 'Online-Buchung und Terminkalender',
    },
    {
        href: '/digitale-anamnese-kosmetikstudio',
        title: 'Digitale Anamnesebögen',
        description: 'Formulare und Einwilligungen digital',
    },
    {
        href: '/nisv-dokumentation-kosmetikstudio',
        title: 'NiSV-Dokumentation',
        description: 'Behandlungen rechtssicher dokumentieren',
    },
];

const features = [
    'Zentrale Kundendatenbank',
    'Behandlungshistorie pro Kundin',
    'Vorher-Nachher-Fotos',
    'Kundennotizen und Präferenzen',
    'Allergien und Unverträglichkeiten',
    'Tags und Segmentierung',
    'Automatische Geburtstagsnachrichten',
    'Follow-up nach Behandlungen',
    'Individuelle Kundenprofile',
    'DSGVO-konformes Löschkonzept',
    'Mitarbeiter-Zugriffsrechte',
    'Import bestehender Kundendaten',
];

const faqs = [
    {
        question: 'Kann ich meine bestehenden Kundendaten importieren?',
        answer: 'Ja, du kannst Kundendaten über unseren Import einfach übertragen. Unser Support hilft dir dabei.',
    },
    {
        question: 'Wer hat Zugriff auf die Kundendaten?',
        answer: 'Du bestimmst, welche Mitarbeiter auf welche Daten zugreifen können. Treatflow bietet granulare Zugriffsrechte.',
    },
    {
        question: 'Werden die Daten DSGVO-konform gespeichert?',
        answer: 'Ja, alle Daten werden verschlüsselt in EU-Rechenzentren gespeichert. Treatflow erfüllt alle DSGVO-Anforderungen.',
    },
    {
        question: 'Kann ich Behandlungsfotos speichern?',
        answer: 'Ja, du kannst Fotos direkt in der Kundenkartei hinterlegen. Ideal für Vorher-Nachher-Dokumentationen und Behandlungsverläufe.',
    },
    {
        question: 'Funktioniert die Kundenkartei auch auf dem Tablet?',
        answer: 'Ja, Treatflow ist voll responsiv. Die Kundenkartei funktioniert auf Tablet, Smartphone und Desktop.',
    },
    {
        question: 'Was kostet die Kundenverwaltung?',
        answer: 'Die digitale Kundenkartei ist in jedem Treatflow-Plan enthalten. Du kannst 14 Tage kostenlos testen - ab 39 EUR/Monat.',
    },
];

const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow - Digitale Kundenkartei für Kosmetikstudios',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Digitale Kundenkartei für Kosmetikstudios: Kundendaten, Behandlungshistorie, Fotos und Notizen zentral verwalten. DSGVO-konform.',
    offers: {
        '@type': 'Offer',
        price: '39',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '48',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function KundenkarteiKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="kundenkartei-software-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <Script
                id="kundenkartei-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Star className="h-4 w-4 mr-2" />
                            Kundenkartei für Kosmetikstudios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Digitale Kundenkartei für dein{' '}
                            <span className="text-indigo-600">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Schluss mit Papierkarteien und Zettelwirtschaft. Treatflow bringt alle Kundendaten,
                            Behandlungshistorien und Fotos in eine zentrale, DSGVO-konforme Plattform.
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
                            src="/images/branchen/hero-kosmetikstudio.jpg"
                            alt="Digitale Kundenkartei im Kosmetikstudio - Treatflow"
                            className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]"
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
                            Warum Papierkarteien dein Studio ausbremsen
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
                            Deine Kundenverwaltung mit Treatflow
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
                                <div className="text-lg font-semibold text-indigo-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            So einfach funktioniert die digitale Kundenkartei
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {workflowSteps.map((item, index) => (
                            <div key={index} className="text-center p-8">
                                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-indigo-600">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
                            Perfekt kombiniert mit weiteren Treatflow-Funktionen
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {internalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-200 group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {link.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                                <span className="text-indigo-600 text-sm font-medium flex items-center">
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
                            Alle Funktionen für deine Kundenverwaltung
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
                        Deine Kundenverwaltung verdient ein Upgrade
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie einfach digitale Kundenverwaltung sein kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage kostenlos testen
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
                            Häufige Fragen zur digitalen Kundenkartei
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
