import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Smartphone, Star
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

export const metadata = {
    title: 'Terminsoftware & Terminplaner Kosmetikstudio',
    description: 'Terminsoftware und Terminplaner für Kosmetikstudios: Online-Buchungen 24/7, Terminkalender, automatische Erinnerungen. 14 Tage kostenlos testen.',
    keywords: [
        'Terminsoftware Kosmetikstudio',
        'Terminplaner Kosmetikstudio',
        'Terminplaner für Kosmetikstudio',
        'Terminplaner Kosmetik',
        'Kosmetik Terminplaner',
        'Terminkalender Kosmetikstudio',
        'Online Terminbuchung Kosmetikstudio',
        'Buchungssystem Kosmetik',
        'Terminplaner Kosmetik kostenlos',
        'Terminverwaltung Kosmetikstudio',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/terminsoftware-kosmetikstudio',
    },
    openGraph: {
        title: 'Terminsoftware Kosmetikstudio: Online-Buchung & Kalender',
        description: 'Terminsoftware für Kosmetikstudios. Online-Buchungen, digitaler Terminkalender, automatische Erinnerungen und weniger No-Shows.',
        url: 'https://www.treatflow.io/terminsoftware-kosmetikstudio',
        images: [
            {
                url: '/images/og-terminsoftware-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Terminsoftware für Kosmetikstudios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: Clock,
        title: 'Telefon, WhatsApp, Instagram - alles auf einmal',
        description: 'Terminanfragen kommen über fünf verschiedene Kanäle. Du jonglierst zwischen Nachrichten, rufst zurück und vergisst trotzdem Termine.',
    },
    {
        icon: Calendar,
        title: 'Doppelbuchungen und Lücken im Kalender',
        description: 'Ohne ein zentrales System passieren Doppelbuchungen oder der Kalender hat unnötige Lücken, die bares Geld kosten.',
    },
    {
        icon: Bell,
        title: 'No-Shows fressen deinen Umsatz',
        description: 'Kunden vergessen ihren Termin und erscheinen einfach nicht. Ohne automatische Erinnerungen verlierst du jede Woche Umsatz.',
    },
    {
        icon: FileText,
        title: 'Zettelwirtschaft bei der Terminplanung',
        description: 'Papierkalender, Post-its und handgeschriebene Listen sind unübersichtlich und nicht synchron, wenn du mehrere Mitarbeiter hast.',
    },
];

const solutions = [
    {
        icon: Calendar,
        title: '24/7 Online-Buchung',
        description: 'Deine Kunden buchen selbstständig über deinen persönlichen Buchungslink - auch um Mitternacht. Du wachst morgens auf und der Kalender ist gefüllt.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: Clock,
        title: 'Intelligenter Terminkalender',
        description: 'Tages-, Wochen- und Monatsansicht. Ziehe Termine per Drag & Drop. Sieh sofort, welche Zeiten frei sind und wo noch Lücken zu füllen sind.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Per SMS oder E-Mail - Treatflow erinnert deine Kunden automatisch an ihren Termin. No-Shows sinken um bis zu 80 %.',
        gradient: 'from-orange-500 to-red-600',
        bg: 'from-orange-50 to-red-50',
    },
    {
        icon: Users,
        title: 'Mitarbeiterplanung',
        description: 'Jeder Mitarbeiter hat seinen eigenen Kalender. Kunden können direkt den gewünschten Behandler auswählen. Arbeitszeiten und Pausen individuell konfigurierbar.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Smartphone,
        title: 'Mobil optimiert',
        description: 'Verwalte deinen Terminkalender von überall - am Tablet im Studio oder unterwegs auf dem Smartphone. Alles synchronisiert sich in Echtzeit.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Shield,
        title: 'DSGVO-konform & sicher',
        description: 'Alle Buchungsdaten werden verschlüsselt in der EU gespeichert. Deine Kunden können sich darauf verlassen.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
];

const stats = [
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '5h+', label: 'Zeitersparnis pro Woche', description: 'durch Online-Buchungen' },
    { value: '24/7', label: 'Online buchbar', description: 'auch nach Feierabend' },
    { value: '60s', label: 'Einrichtung pro Behandlung', description: 'schnell startklar' },
];

const steps = [
    {
        number: '1',
        title: 'Behandlungen & Zeiten anlegen',
        description: 'Definiere deine Behandlungen, Arbeitszeiten und Pausen. Treatflow erstellt automatisch deinen Buchungskalender.',
    },
    {
        number: '2',
        title: 'Buchungslink teilen',
        description: 'Teile deinen persönlichen Link auf Instagram, Google, deiner Website oder per QR-Code im Studio. Kunden buchen online.',
    },
    {
        number: '3',
        title: 'Termine verwalten',
        description: 'Neue Buchungen erscheinen sofort im Kalender. Erinnerungen gehen automatisch raus. Du konzentrierst dich auf deine Kunden.',
    },
];

const clusterLinks = [
    {
        href: '/kosmetikstudio-software',
        title: 'Kosmetikstudio Software',
        description: 'Die All-in-One Lösung für dein Studio',
    },
    {
        href: '/kundenkartei-kosmetikstudio',
        title: 'Digitale Kundenkartei',
        description: 'Alle Kundendaten immer griffbereit',
    },
    {
        href: '/anamnesebogen-kosmetikstudio',
        title: 'Digitale Anamnesebögen',
        description: 'Formulare, Einwilligungen und Anamnese digital',
    },
    {
        href: '/nisv-dokumentation-kosmetikstudio',
        title: 'NiSV-Dokumentation',
        description: 'Behandlungen rechtssicher dokumentieren',
    },
];

const features = [
    'Persönlicher Buchungslink',
    'Online-Buchung 24/7',
    'Tages- und Wochenansicht',
    'Drag & Drop Terminplanung',
    'Mitarbeiterkalender',
    'Pausen und Blocker',
    'Automatische SMS-Erinnerungen',
    'E-Mail-Erinnerungen',
    'Folgetermin-Vorschläge',
    'Google Calendar Sync (bald)',
    'Warteliste für ausgebuchte Zeiten',
    'Mehrere Standorte verwalten',
];

const faqs = [
    {
        q: 'Können meine Kunden wirklich rund um die Uhr buchen?',
        a: 'Ja, über deinen persönlichen Buchungslink können deine Kunden jederzeit Termine buchen - auch nachts oder am Wochenende. Du erhältst sofort eine Benachrichtigung und der Termin erscheint automatisch in deinem Kalender.',
    },
    {
        q: 'Wie funktionieren die automatischen Erinnerungen?',
        a: 'Nach der Buchung erhalten deine Kunden automatisch eine Bestätigung. 24 Stunden und 2 Stunden vor dem Termin wird eine Erinnerung per SMS oder E-Mail versendet. Das reduziert No-Shows um bis zu 80 %.',
    },
    {
        q: 'Kann ich mehrere Mitarbeiter verwalten?',
        a: 'Ja, jeder Mitarbeiter bekommt seinen eigenen Kalender und eigene Arbeitszeiten. Kunden können bei der Buchung den gewünschten Behandler auswählen. Du siehst alle Kalender in einer Übersicht.',
    },
    {
        q: 'Was passiert bei Terminänderungen?',
        a: 'Termine können einfach per Drag & Drop verschoben werden. Der Kunde wird automatisch über die Änderung informiert. Auch Absagen und Umbuchungen sind mit wenigen Klicks erledigt.',
    },
    {
        q: 'Funktioniert Treatflow auch auf dem Tablet?',
        a: 'Ja, Treatflow ist voll responsiv und funktioniert auf Tablet, Smartphone und Desktop. Ideal für den Empfangstresen oder unterwegs.',
    },
    {
        q: 'Was kostet die Terminsoftware?',
        a: 'Treatflow bietet flexible Pläne ab 39 EUR im Monat. Die Terminsoftware ist in jedem Plan enthalten. Du kannst 14 Tage kostenlos testen - ohne Kreditkarte und ohne versteckte Kosten.',
    },
];

const faqJsonLd = {
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

const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow Terminsoftware',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
        '@type': 'Offer',
        price: '39',
        priceCurrency: 'EUR',
    },
    description: 'Terminsoftware für Kosmetikstudios mit Online-Buchung, Terminkalender und automatischen Erinnerungen.',
};

export default function TerminsoftwareKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Star className="h-4 w-4 mr-2" />
                            Terminsoftware für Kosmetikstudios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Online-Termine und Kalender für dein{' '}
                            <span className="text-indigo-600">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Kunden buchen online, du behältst den Überblick. Treatflow vereint Terminkalender,
                            automatische Erinnerungen und Online-Buchungen in einer Plattform für Kosmetikstudios.
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
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-kosmetikstudio.jpg"
                                alt="Terminsoftware für Kosmetikstudios - Online-Buchung und Terminkalender"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum herkömmliche Terminplanung Kosmetikstudios ausbremst
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Zwischen Telefon, WhatsApp und Papierkalender geht wertvolle Zeit verloren.
                            Diese Probleme kennst du bestimmt.
                        </p>
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
                            So funktioniert die Terminbuchung mit Treatflow
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der Online-Buchung bis zur automatischen Erinnerung - alles aus einer Hand.
                        </p>
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

            {/* Workflow Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            In 3 Schritten zum digitalen Terminkalender
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Keine komplizierte Einrichtung. In wenigen Minuten bist du startklar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-200">
                                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold text-indigo-600">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                            Mehr als nur Terminplanung
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Treatflow vereint alle Tools, die dein Kosmetikstudio braucht.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clusterLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
                                    {link.title}
                                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </h3>
                                <p className="text-gray-600 text-sm">{link.description}</p>
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
                            Alles für deine Terminverwaltung
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

            <SocialProofBar />

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Schluss mit Terminchaos - starte jetzt mit Treatflow
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie einfach Terminverwaltung sein kann.
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
                            Häufige Fragen zur Terminsoftware
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

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
        </div>
    );
}
