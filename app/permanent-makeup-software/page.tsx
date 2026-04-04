import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Star, Zap, TrendingUp, ClipboardCheck, Palette, Camera
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

export const metadata = {
    title: 'Permanent Makeup Software: Termine & Doku',
    description: 'Software für Permanent Makeup Studios. Digitale Einwilligungen, Vorher-Nachher Doku, Online-Buchungen und Kundenverwaltung. 14 Tage gratis testen.',
    keywords: [
        'Permanent Makeup Software',
        'PMU Software',
        'Software Permanent Makeup Studio',
        'Microblading Software',
        'Permanent Makeup Dokumentation',
        'PMU Einwilligung digital',
        'Permanent Makeup Terminbuchung',
        'Permanent Makeup Kundenverwaltung',
        'PMU Studio Verwaltung',
        'Microblading Terminbuchung',
        'Permanent Makeup Anamnesebogen',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/permanent-makeup-software',
    },
    openGraph: {
        title: 'Permanent Makeup Software: Doku & Verwaltung',
        description: 'Digitale Einwilligungen, Vorher-Nachher Fotos und Online-Buchungen für PMU-Studios.',
        url: 'https://www.treatflow.io/permanent-makeup-software',
        images: [
            {
                url: '/images/og-pmu-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Permanent Makeup Studios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Einwilligungen und Aufklärung',
        description: 'Vor jeder PMU-Behandlung sind ausführliche Aufklärung und schriftliche Einwilligung Pflicht. Papiermappen werden unübersichtlich.',
    },
    {
        icon: Camera,
        title: 'Vorher-Nachher Dokumentation',
        description: 'Ergebnisse dokumentieren, Fotos zuordnen und Kunden den Heilungsverlauf zeigen - auf dem Smartphone wird das schnell chaotisch.',
    },
    {
        icon: Clock,
        title: 'Nachstich-Termine koordinieren',
        description: 'PMU-Kunden kommen zur Erstbehandlung und zum Nachstich. Den perfekten Zeitpunkt für den Folgetermin zu koordinieren kostet Zeit.',
    },
    {
        icon: Users,
        title: 'Allergien und Kontraindikationen',
        description: 'Farballergien, Medikamente und Hautkrankheiten müssen vor jeder Pigmentierung erfasst und geprüft werden.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Digitale Einwilligungen',
        description: 'Professionelle Aufklärungs- und Einwilligungsbögen, die deine Kunden digital mit Unterschrift ausfüllen - vor dem Termin oder im Studio.',
        gradient: 'from-rose-500 to-pink-600',
        bg: 'from-rose-50 to-pink-50',
    },
    {
        icon: Camera,
        title: 'Vorher-Nachher Fotogalerie',
        description: 'Dokumentiere jeden Schritt mit Fotos - von der Vorzeichnung bis zum Endergebnis. Perfekt für dein Portfolio und die Kundenkommunikation.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
    {
        icon: Calendar,
        title: 'Nachstich-Planung',
        description: 'Plane Folgetermine automatisch ein. Deine Kunden werden rechtzeitig an den Nachstich erinnert - im idealen Zeitfenster.',
        gradient: 'from-orange-500 to-amber-600',
        bg: 'from-orange-50 to-amber-50',
    },
    {
        icon: Users,
        title: 'Kundenprofile mit Allergien',
        description: 'Erfasse Farbunverträglichkeiten, Medikamente und Kontraindikationen. Bei jedem Termin hast du alle relevanten Infos auf einen Blick.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Bell,
        title: 'Pflegehinweise automatisch',
        description: 'Sende deinen Kunden automatisch Nachsorge-Hinweise nach der Behandlung. Für optimale Ergebnisse und weniger Rückfragen.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Palette,
        title: 'Behandlungsdetails festhalten',
        description: 'Dokumentiere verwendete Farben, Nadeln, Techniken und Einstellungen pro Behandlung. Ideal für den Nachstich und Auffrischungen.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
];

const stats = [
    { value: '100%', label: 'papierfrei', description: 'digitale Einwilligungen & Anamnese' },
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '24/7', label: 'online buchbar', description: 'für Erstbehandlung und Nachstich' },
    { value: '5h+', label: 'Zeit gespart', description: 'pro Woche weniger Verwaltung' },
];

export default function PermanentMakeupSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Palette className="h-4 w-4 mr-2" />
                            Software für PMU-Studios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für dein{' '}
                            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                                Permanent Makeup Studio
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Digitale Einwilligungen, Vorher-Nachher Dokumentation und Kundenverwaltung -
                            damit du dich auf perfekte Ergebnisse konzentrieren kannst.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-rose-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-rose-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-rose-600 hover:text-rose-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-pmu.jpg"
                                alt="Permanent Makeup Studio – professioneller Arbeitsplatz"
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
                            Herausforderungen im PMU-Alltag
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Permanent Makeup verlangt Präzision - bei der Arbeit und bei der Verwaltung.
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
                            So hilft Treatflow deinem PMU-Studio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Speziell für die Anforderungen von Permanent Makeup und Microblading entwickelt.
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
            <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-rose-100 mb-1">{stat.label}</div>
                                <div className="text-sm text-rose-200">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature List Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Alle Funktionen für PMU-Studios
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Digitale Aufklärung und Einwilligung',
                            'Anamnesebögen mit Allergieabfrage',
                            'Vorher-Nachher Fotodokumentation',
                            'Farbdokumentation pro Behandlung',
                            'Nachstich-Terminplanung',
                            'Online-Terminbuchung mit Buchungslink',
                            'Automatische Terminerinnerungen',
                            'Nachsorge-Hinweise automatisch senden',
                            'Kundenverwaltung mit Behandlungshistorie',
                            'Geburtstagsnachrichten automatisch',
                            'DSGVO-konforme Datenspeicherung',
                            'Mobil optimiert für Tablet und Smartphone',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verwandte Seiten / Cluster-Verlinkung */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Weitere Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Treatflow vereint Terminkalender, Kundenverwaltung, Formulare und Dokumentation in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/kosmetikstudio-software" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600 block mb-2">All-in-One für Studios</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/terminkalender" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Terminsoftware</span>
                            <span className="text-sm text-gray-600 block mb-2">Online-Buchung & Kalender</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/kundenverwaltung" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Kundenkartei</span>
                            <span className="text-sm text-gray-600 block mb-2">Kundendaten & Historie</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/anamnesebogen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Anamnesebögen</span>
                            <span className="text-sm text-gray-600 block mb-2">Formulare & Einwilligungen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/permanent-makeup-software-deutschland" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">PMU Software Deutschland</span>
                            <span className="text-sm text-gray-600 block mb-2">Permanent Makeup in ganz Deutschland</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/online-buchungen" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Online-Terminbuchung</span>
                            <span className="text-sm text-gray-600 block mb-2">Kunden buchen 24/7 online</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/sms-erinnerungen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">SMS-Erinnerungen</span>
                            <span className="text-sm text-gray-600 block mb-2">Weniger No-Shows durch Erinnerungen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/behandlungsdokumentation-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Behandlungsdokumentation</span>
                            <span className="text-sm text-gray-600 block mb-2">NiSV-konforme Dokumentation</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/digitale-anamnese-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Anamnese</span>
                            <span className="text-sm text-gray-600 block mb-2">Formulare vorab per Link ausfüllen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für ein digitales PMU-Studio?
                    </h2>
                    <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher Dokumentation und Verwaltung sein können.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-rose-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-rose-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
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
                                q: 'Eignet sich Treatflow für Microblading und PMU?',
                                a: 'Ja, Treatflow eignet sich für alle PMU-Techniken - Microblading, Powder Brows, Lip Blush, Eyeliner und mehr. Dokumentation und Formulare sind flexibel anpassbar.',
                            },
                            {
                                q: 'Kann ich meine Einwilligungsformulare individualisieren?',
                                a: 'Ja, du kannst eigene Formulare erstellen oder bestehende Vorlagen anpassen. Deine Kunden unterschreiben digital - vor dem Termin oder im Studio.',
                            },
                            {
                                q: 'Können Kunden online Termine buchen?',
                                a: 'Ja, über deinen persönlichen Buchungslink können Kunden rund um die Uhr Termine buchen - für Erstbehandlungen, Nachstiche und Auffrischungen.',
                            },
                            {
                                q: 'Kann ich Fotos zur Behandlung speichern?',
                                a: 'Ja, du kannst bei jeder Behandlung Fotos aufnehmen und der Kundendatei zuordnen. Perfekt für die Vorher-Nachher Dokumentation und dein Portfolio.',
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
