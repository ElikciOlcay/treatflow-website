import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Smartphone, Star, Zap, Heart, TrendingUp, ClipboardCheck
} from 'lucide-react';
import Link from 'next/link';

const clusterPages = [
    {
        href: '/schoenheitssalon-software',
        title: 'Schoenheitssalon Software',
        description: 'Software-Landing fuer Beauty- und Schoenheitssalons',
        icon: Star,
    },
    {
        href: '/terminsoftware-kosmetikstudio',
        title: 'Terminsoftware',
        description: 'Online-Buchung und digitaler Terminkalender',
        icon: Calendar,
    },
    {
        href: '/kundenkartei-kosmetikstudio',
        title: 'Digitale Kundenkartei',
        description: 'Kundendaten, Behandlungshistorie und Fotos',
        icon: Users,
    },
    {
        href: '/anamnesebogen-kosmetikstudio',
        title: 'Digitale Anamnesebögen',
        description: 'Formulare, Einwilligungen und Anamnese digital',
        icon: ClipboardCheck,
    },
    {
        href: '/nisv-dokumentation-kosmetikstudio',
        title: 'NiSV-Dokumentation',
        description: 'Behandlungen rechtssicher dokumentieren',
        icon: Shield,
    },
];
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Kosmetikstudio Software - Termine, Kunden & Dokumentation | Treatflow',
    description: 'Die moderne Software für Kosmetikstudios. Online-Buchungen, Kundenverwaltung, digitale Formulare und Behandlungsdokumentation in einer Plattform. 14 Tage gratis testen.',
    keywords: [
        'Kosmetikstudio Software',
        'Software für Kosmetikstudio',
        'Software Kosmetikstudio',
        'Kosmetikstudio Verwaltung',
        'Kosmetikstudio Terminbuchung',
        'Kosmetikstudio Management Software',
        'Beauty Studio Software',
        'Studio Management Software',
        'Kosmetikstudio digital',
        'Kosmetikstudio Kundenverwaltung',
        'Kosmetikstudio Online Buchung',
        'Kosmetik Software Deutschland',
        'Kosmetikstudio Dokumentation',
        'Kosmetikstudio Formulare',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-software',
    },
    openGraph: {
        title: 'Kosmetikstudio Software - Die All-in-One Lösung für dein Studio | Treatflow',
        description: 'Online-Buchungen, Kundenverwaltung, digitale Formulare und Behandlungsdokumentation - alles in einer modernen Plattform.',
        url: 'https://www.treatflow.io/kosmetikstudio-software',
        images: [
            {
                url: '/images/og-kosmetikstudio-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Kosmetikstudios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: Clock,
        title: 'Stundenlanges Telefonieren',
        description: 'Du verbringst mehr Zeit am Telefon als mit deinen Kunden. Terminvereinbarungen per WhatsApp und Telefon fressen deinen Tag auf.',
    },
    {
        icon: FileText,
        title: 'Papierchaos bei Formularen',
        description: 'Anamnesebögen, Einwilligungen und Dokumentationen auf Papier sind unübersichtlich, gehen verloren und kosten Platz.',
    },
    {
        icon: Users,
        title: 'Keine Kundenübersicht',
        description: 'Behandlungshistorien, Allergien und Kundenwünsche sind über Zettel und Notizen verstreut. Bei Stammkunden fehlt der Überblick.',
    },
    {
        icon: Bell,
        title: 'No-Shows und Ausfälle',
        description: 'Kunden vergessen ihre Termine, erscheinen nicht und du hast Umsatzausfälle. Manuelle Erinnerungen sind zeitaufwendig.',
    },
];

const solutions = [
    {
        icon: Calendar,
        title: 'Online-Buchungen rund um die Uhr',
        description: 'Deine Kunden buchen selbstständig über deinen persönlichen Buchungslink - auch nach Feierabend. Keine Telefonate, keine Doppelbuchungen.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: Users,
        title: 'Digitale Kundenverwaltung',
        description: 'Alle Kundendaten, Behandlungshistorien, Allergien und Fotos an einem Ort. Sofort abrufbar bei jedem Termin.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: ClipboardCheck,
        title: 'Digitale Formulare & Anamnese',
        description: 'Anamnesebögen und Einwilligungen digital ausfüllen lassen - vor dem Termin oder am Tablet im Studio. Papierfrei und rechtssicher.',
        gradient: 'from-orange-500 to-red-600',
        bg: 'from-orange-50 to-red-50',
    },
    {
        icon: FileText,
        title: 'Behandlungsdokumentation',
        description: 'Dokumentiere jede Behandlung digital mit Fotos, Notizen und Produkten. Perfekt für Nachbehandlungen und den Überblick.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Reduziere No-Shows um bis zu 80% mit automatischen Terminerinnerungen per E-Mail und SMS.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Shield,
        title: 'DSGVO-konform & sicher',
        description: 'Alle Daten werden verschlüsselt in der EU gespeichert. Datenschutzkonform und sicher - für dich und deine Kunden.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
];

const stats = [
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '5h+', label: 'Zeit gespart pro Woche', description: 'durch Online-Buchungen' },
    { value: '100%', label: 'papierlos', description: 'digitale Formulare & Dokumentation' },
    { value: '24/7', label: 'buchbar', description: 'auch nach Feierabend' },
];

const whyTreatflow = [
    {
        icon: Zap,
        title: 'Speziell für Beauty Studios gebaut',
        description: 'Keine generische Buchungssoftware, sondern eine Plattform die genau versteht, wie ein Kosmetikstudio funktioniert.',
    },
    {
        icon: Smartphone,
        title: 'Moderne, einfache Bedienung',
        description: 'Eine intuitive Oberfläche, die du sofort verstehst. Keine Schulung nötig, keine veraltete Software.',
    },
    {
        icon: TrendingUp,
        title: 'Alles in einer Plattform',
        description: 'Termine, Kunden, Formulare, Dokumentation und Nachrichten - du brauchst kein anderes Tool mehr.',
    },
    {
        icon: Heart,
        title: 'Persönlicher Support',
        description: 'Ein Team, das die Beauty-Branche versteht. Schneller Support per Chat und E-Mail, wenn du ihn brauchst.',
    },
];

export default function KosmetikstudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Star className="h-4 w-4 mr-2" />
                            Deine All-in-One Software für Kosmetikstudios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Die moderne Software für dein{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Kosmetikstudio
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Termine, Kunden, Formulare und Dokumentation - alles in einer Plattform.
                            Weniger Verwaltung, mehr Zeit für deine Kunden.
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
                            alt="Modernes Kosmetikstudio – professionell und einladend"
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
                            Kennst du diese Probleme?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Die meisten Kosmetikerinnen kämpfen täglich mit denselben Herausforderungen.
                            Es gibt einen besseren Weg.
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
                            So löst Treatflow deine Probleme
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Eine Plattform, die speziell für die Bedürfnisse von Kosmetikstudios entwickelt wurde.
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
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
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

            {/* Why Treatflow Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum Treatflow statt generischer Buchungssoftware?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Generische Tools wie Calendly oder SimplyBook verstehen dein Studio nicht.
                            Treatflow wurde von Anfang an für Beauty Studios gebaut.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {whyTreatflow.map((item, index) => (
                            <div key={index} className="flex gap-5 p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                    <item.icon className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cluster-Verlinkung */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Entdecke alle Funktionen im Detail
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Treatflow bietet spezialisierte Lösungen für jeden Bereich deines Studios.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {clusterPages.map((page) => (
                            <Link
                                key={page.href}
                                href={page.href}
                                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
                            >
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                    <page.icon className="h-6 w-6 text-indigo-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {page.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">{page.description}</p>
                                <span className="inline-flex items-center text-indigo-600 text-sm font-medium">
                                    Mehr erfahren
                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature List Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Alles was dein Kosmetikstudio braucht
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der Terminbuchung bis zur Dokumentation - Treatflow deckt deinen gesamten Studio-Alltag ab.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Online-Terminbuchung mit persönlichem Link',
                            'Übersichtlicher Terminkalender',
                            'Digitale Anamnesebögen',
                            'Einwilligungsformulare mit Unterschrift',
                            'Behandlungsdokumentation mit Fotos',
                            'Kundenverwaltung mit Behandlungshistorie',
                            'Automatische Terminerinnerungen per SMS',
                            'Follow-up Nachrichten nach Behandlungen',
                            'Geburtstagsnachrichten automatisch',
                            'NiSV-konforme Dokumentation',
                            'DSGVO-konform & EU-Hosting',
                            'Mobil optimiert für Tablet und Smartphone',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit, dein Kosmetikstudio zu digitalisieren?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Studio-Alltag sein kann.
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
                            Häufige Fragen
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'Ist Treatflow wirklich speziell für Kosmetikstudios?',
                                a: 'Ja, Treatflow wurde speziell für die Bedürfnisse von Kosmetikstudios, Beauty Studios und ästhetischen Praxen entwickelt. Von der Anamnesebogen-Verwaltung bis zur Behandlungsdokumentation - jede Funktion ist auf deinen Arbeitsalltag zugeschnitten.',
                            },
                            {
                                q: 'Wie lange dauert die Einrichtung?',
                                a: 'Die Grundeinrichtung dauert nur wenige Minuten. Behandlungen anlegen, Arbeitszeiten einstellen und deinen Buchungslink teilen - und du bist startklar. Unser Onboarding-Team hilft dir gerne bei der Einrichtung.',
                            },
                            {
                                q: 'Können meine Kunden selbst Termine buchen?',
                                a: 'Ja, über deinen persönlichen Buchungslink können deine Kunden rund um die Uhr Termine buchen. Du erhältst automatische Bestätigungen und Erinnerungen werden automatisch versendet.',
                            },
                            {
                                q: 'Ist Treatflow DSGVO-konform?',
                                a: 'Absolut. Alle Daten werden verschlüsselt in EU-Rechenzentren gespeichert. Treatflow erfüllt alle Anforderungen der DSGVO und ist ideal für die sensiblen Kundendaten in Kosmetikstudios.',
                            },
                            {
                                q: 'Was kostet Treatflow?',
                                a: 'Treatflow bietet flexible Pläne ab 39 EUR im Monat. Du kannst alle Funktionen 14 Tage kostenlos testen - ohne Kreditkarte und ohne versteckte Kosten.',
                            },
                        ].map((faq, index) => (
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
