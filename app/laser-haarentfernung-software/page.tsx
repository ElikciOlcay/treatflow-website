import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Zap, Star, TrendingUp, ClipboardCheck, Sparkles, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

export const metadata = {
    title: 'Software für Laser Haarentfernung & NiSV-Doku',
    description: 'Software für Laser-Studios und IPL. NiSV-konforme Dokumentation, digitale Einwilligungen, Online-Buchungen und Kundenverwaltung. Jetzt 14 Tage testen.',
    keywords: [
        'Laser Haarentfernung Software',
        'Software Laser Studio',
        'IPL Software',
        'Laser Klinik Software',
        'Haarentfernung Terminbuchung',
        'NiSV Dokumentation Laser',
        'Laser Behandlung Dokumentation',
        'Einwilligung Laser Behandlung',
        'Laser Studio Verwaltung',
        'Dauerhafte Haarentfernung Software',
        'Laser Haarentfernung Kundenverwaltung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/laser-haarentfernung-software',
    },
    openGraph: {
        title: 'Software für Laser Haarentfernung: NiSV-konform',
        description: 'NiSV-konforme Dokumentation, digitale Einwilligungen und Online-Buchungen für Laser-Studios.',
        url: 'https://www.treatflow.io/laser-haarentfernung-software',
        images: [
            {
                url: '/images/og-laser-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Laser Haarentfernung',
            },
        ],
    },
};

const painPoints = [
    {
        icon: AlertTriangle,
        title: 'NiSV-Dokumentationspflicht',
        description: 'Die NiSV verlangt eine lückenlose Dokumentation jeder Laserbehandlung. Auf Papier ist das fehleranfällig und zeitraubend.',
    },
    {
        icon: FileText,
        title: 'Aufklärung und Einwilligungen',
        description: 'Vor jeder Laserbehandlung müssen Kunden aufgeklärt werden und schriftlich einwilligen. Papierkram stapelt sich schnell.',
    },
    {
        icon: Clock,
        title: 'Behandlungsserien verwalten',
        description: 'Laser-Kunden kommen zu Serien von 6-10 Sitzungen. Den Überblick über Behandlungsstände und Folgetermine zu behalten ist mühsam.',
    },
    {
        icon: Users,
        title: 'Hauttypen und Kontraindikationen',
        description: 'Hauttyp, Medikamente und Kontraindikationen müssen für jeden Kunden erfasst und bei jedem Termin beachtet werden.',
    },
];

const solutions = [
    {
        icon: Shield,
        title: 'NiSV-konforme Dokumentation',
        description: 'Dokumentiere jede Laserbehandlung NiSV-konform digital. Parameter, Behandlungszonen und Ergebnisse - alles rechtssicher gespeichert.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: ClipboardCheck,
        title: 'Digitale Aufklärung & Einwilligung',
        description: 'Kunden füllen Anamnesebögen und Einwilligungen digital aus - mit elektronischer Unterschrift. Rechtssicher und papierfrei.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Calendar,
        title: 'Serien und Folgetermine',
        description: 'Plane Behandlungsserien im Voraus. Deine Kunden sehen ihren Fortschritt und du behältst den Überblick über alle Sitzungen.',
        gradient: 'from-orange-500 to-red-600',
        bg: 'from-orange-50 to-red-50',
    },
    {
        icon: Users,
        title: 'Kunden-Profile mit Hauttyp',
        description: 'Erfasse Hauttyp, Kontraindikationen und Medikamente pro Kunde. Bei jedem Termin hast du alle relevanten Infos sofort parat.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Erinnere Kunden automatisch an Folgetermine und Hinweise vor der Behandlung - wie Sonnenvermeidung oder Rasur.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Sparkles,
        title: 'Vorher-Nachher Dokumentation',
        description: 'Fotografiere Behandlungszonen vor und nach der Laser-Sitzung. Zeige Kunden ihren Fortschritt über die gesamte Serie.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
];

const stats = [
    { value: '100%', label: 'NiSV-konform', description: 'lückenlose digitale Dokumentation' },
    { value: '80%', label: 'weniger Papierkram', description: 'durch digitale Formulare' },
    { value: '5h+', label: 'Zeit gespart', description: 'pro Woche weniger Verwaltung' },
    { value: '24/7', label: 'online buchbar', description: 'für Folgetermine und Neukunden' },
];

export default function LaserHaarentfernungSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Zap className="h-4 w-4 mr-2" />
                            Software für Laser-Studios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Laser Haarentfernung
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            NiSV-konforme Dokumentation, digitale Einwilligungen und Serienverwaltung -
                            alles was dein Laser-Studio für den Alltag braucht.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-laser.jpg"
                                alt="Professionelles Laser-Studio – moderne Haarentfernung"
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
                            Die Herausforderungen in Laser-Studios
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Strenge Dokumentationspflichten und komplexe Behandlungsserien machen den Alltag im Laser-Studio besonders anspruchsvoll.
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
                            So unterstützt Treatflow dein Laser-Studio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Entwickelt für die speziellen Anforderungen der dauerhaften Haarentfernung.
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
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</div>
                                <div className="text-sm text-blue-200">{stat.description}</div>
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
                            Alle Funktionen für Laser-Studios
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der ersten Beratung bis zur letzten Sitzung - Treatflow begleitet den gesamten Behandlungsprozess.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'NiSV-konforme Behandlungsdokumentation',
                            'Digitale Einwilligungsformulare mit Unterschrift',
                            'Hauttyp-Erfassung und Kontraindikationen',
                            'Vorher-Nachher Fotodokumentation',
                            'Behandlungsserien-Verwaltung',
                            'Online-Terminbuchung für Folgetermine',
                            'Automatische Terminerinnerungen per SMS',
                            'Hinweise vor Behandlung automatisch senden',
                            'Kundenverwaltung mit vollständiger Historie',
                            'Laserparameter pro Sitzung dokumentieren',
                            'DSGVO-konforme Datenspeicherung in der EU',
                            'Mobil optimiert für Tablet im Studio',
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
                            Treatflow vereint NiSV-Dokumentation, Terminkalender, Kundenverwaltung und Formulare in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/kosmetikstudio-software" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600 block mb-2">All-in-One für Studios</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/terminsoftware-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Terminsoftware</span>
                            <span className="text-sm text-gray-600 block mb-2">Online-Buchung & Kalender</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/kundenkartei-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Kundenkartei</span>
                            <span className="text-sm text-gray-600 block mb-2">Kundendaten & Historie</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/nisv-dokumentation-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">NiSV-Dokumentation Kosmetik</span>
                            <span className="text-sm text-gray-600 block mb-2">Rechtssicher dokumentieren</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/laserstudio-software-deutschland" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Laserstudio Software Deutschland</span>
                            <span className="text-sm text-gray-600 block mb-2">NiSV-konform in ganz Deutschland</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für NiSV-konforme Dokumentation?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie einfach Dokumentation und Verwaltung in deinem Laser-Studio sein können.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-blue-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen zur Laser-Studio Software
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'Erfüllt Treatflow die NiSV-Dokumentationspflicht?',
                                a: 'Ja, Treatflow unterstützt die NiSV-konforme Dokumentation von Laserbehandlungen. Du kannst Behandlungsparameter, Zonen, Ergebnisse und Kundeninformationen lückenlos digital dokumentieren.',
                            },
                            {
                                q: 'Kann ich Behandlungsserien verwalten?',
                                a: 'Ja, du kannst mehrteilige Behandlungsserien anlegen und den Fortschritt deiner Kunden über alle Sitzungen verfolgen. Folgetermine werden automatisch geplant.',
                            },
                            {
                                q: 'Können Kunden digital einwilligen?',
                                a: 'Ja, deine Kunden können Aufklärungsbögen und Einwilligungen digital mit elektronischer Unterschrift ausfüllen - wahlweise vorab per Link oder am Tablet im Studio.',
                            },
                            {
                                q: 'Kann ich Vorher-Nachher Fotos speichern?',
                                a: 'Ja, du kannst bei jeder Sitzung Fotos der Behandlungszonen dokumentieren. So können du und deine Kunden den Fortschritt über die gesamte Behandlungsserie nachvollziehen.',
                            },
                            {
                                q: 'Ist die Software auch für IPL-Behandlungen geeignet?',
                                a: 'Absolut. Treatflow eignet sich für alle Formen der dauerhaften Haarentfernung - ob Diodenlaser, Alexandritlaser, Nd:YAG oder IPL. Die Dokumentation ist flexibel anpassbar.',
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
