import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Star, Zap, TrendingUp, ClipboardCheck, Pen, Camera
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Tattoo Studio Software - Termine, Kunden & Einwilligungen | Treatflow',
    description: 'Die Software für Tattoo Studios. Digitale Einwilligungsformulare, Kundenverwaltung, Online-Terminbuchung und Dokumentation. 14 Tage gratis testen.',
    keywords: [
        'Tattoo Studio Software',
        'Software für Tattoo Studios',
        'Tattoo Terminbuchung',
        'Tattoo Einwilligung digital',
        'Tattoo Studio Verwaltung',
        'Tattoo Kundenverwaltung',
        'Tattoo Anamnesebogen',
        'Tattoo Studio Management',
        'Tattoo Online Buchung',
        'Tattoo Dokumentation',
        'Tätowierer Software',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/tattoo-studio-software',
    },
    openGraph: {
        title: 'Tattoo Studio Software - Einwilligungen & Kundenverwaltung | Treatflow',
        description: 'Digitale Einwilligungen, Online-Buchungen und Kundenverwaltung für Tattoo Studios.',
        url: 'https://www.treatflow.io/tattoo-studio-software',
        images: [
            {
                url: '/images/og-tattoo-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Tattoo Studios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Einwilligungen auf Papier',
        description: 'Vor jedem Tattoo müssen Kunden über Risiken aufgeklärt werden und einwilligen. Papiermappen mit hunderten Formularen sind unpraktisch.',
    },
    {
        icon: Clock,
        title: 'Terminkoordination per DM',
        description: 'Termine über Instagram-DMs und WhatsApp zu koordinieren ist zeitraubend. Nachrichten gehen unter, Doppelbuchungen passieren.',
    },
    {
        icon: Users,
        title: 'Keine Kundenübersicht',
        description: 'Welcher Kunde hat welches Tattoo? Welche Allergien gibt es? Ohne System fehlt der Überblick über Stammkunden.',
    },
    {
        icon: Bell,
        title: 'No-Shows bei Terminen',
        description: 'Kunden erscheinen nicht zum gebuchten Termin. Ohne automatische Erinnerungen sind No-Shows ein häufiges und teures Problem.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Digitale Einwilligungen',
        description: 'Kunden füllen den Einwilligungsbogen digital aus und unterschreiben elektronisch - vor dem Termin per Link oder am Tablet im Studio.',
        gradient: 'from-gray-700 to-gray-900',
        bg: 'from-gray-50 to-slate-100',
    },
    {
        icon: Calendar,
        title: 'Online-Terminbuchung',
        description: 'Schluss mit DM-Chaos. Dein persönlicher Buchungslink für Instagram, Website und Co. Kunden buchen selbst, du erhältst alle Infos.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: Users,
        title: 'Kundenverwaltung',
        description: 'Alle Kunden mit Kontaktdaten, Allergien, bisherigen Tattoos und Notizen an einem Ort. Sofort abrufbar bei jedem Termin.',
        gradient: 'from-orange-500 to-amber-600',
        bg: 'from-orange-50 to-amber-50',
    },
    {
        icon: Camera,
        title: 'Tattoo-Dokumentation',
        description: 'Dokumentiere fertige Tattoos mit Fotos. Verknüpfe jedes Werk mit dem Kundenprofil für eine vollständige Übersicht.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Reduziere No-Shows mit automatischen Terminerinnerungen per E-Mail und SMS. Sende auch Pflegehinweise nach dem Termin.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Pen,
        title: 'Nachsorge automatisiert',
        description: 'Sende deinen Kunden automatisch Pflegehinweise nach dem Stechen. Für optimale Heilung und zufriedene Kunden.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
];

const stats = [
    { value: '100%', label: 'papierfrei', description: 'digitale Einwilligungen & Anamnese' },
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '24/7', label: 'online buchbar', description: 'perfekt für Instagram-Link' },
    { value: '0', label: 'verlorene Formulare', description: 'alles digital gespeichert' },
];

export default function TattooStudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-gray-100 via-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Pen className="h-4 w-4 mr-2" />
                            Software für Tattoo Studios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für dein{' '}
                            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                Tattoo Studio
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Digitale Einwilligungen, Online-Buchungen und Kundenverwaltung -
                            damit du dich auf deine Kunst konzentrieren kannst.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <img
                            src="/images/branchen/hero-tattoo.jpg"
                            alt="Tattoo Studio – professionell und kreativ"
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
                            Typische Probleme im Tattoo-Alltag
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Du willst tätowieren - nicht Papierkram erledigen und Termine per DM koordinieren.
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
                            So hilft Treatflow deinem Tattoo Studio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Weniger Verwaltung, mehr Zeit für deine Kunst.
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
            <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                                <div className="text-sm text-gray-400">{stat.description}</div>
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
                            Alle Funktionen für Tattoo Studios
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Digitale Einwilligungsformulare',
                            'Anamnesebögen mit Allergieabfrage',
                            'Online-Terminbuchung per Buchungslink',
                            'Kundenverwaltung mit Tattoo-Historie',
                            'Foto-Dokumentation fertiger Arbeiten',
                            'Automatische Terminerinnerungen per SMS',
                            'Pflegehinweise automatisch senden',
                            'Persönlicher Buchungslink für Instagram',
                            'Kalender mit Tages- und Wochenansicht',
                            'Geburtstagsnachrichten automatisch',
                            'DSGVO-konforme Datenspeicherung',
                            'Mobil optimiert für Smartphone und Tablet',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Integration Highlight */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Perfekt für Instagram
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Dein Buchungslink passt perfekt in deine Instagram-Bio.
                        Follower werden zu Kunden - ohne DM-Chaos.
                    </p>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md mx-auto">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Pen className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Ink Masters Studio</h3>
                            <p className="text-sm text-gray-500 mt-1">Termine buchen per Link</p>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-4 mb-6">
                            <code className="text-gray-700 font-medium">treatflow.io/ink-masters</code>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">IG</span>
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">WEB</span>
                            </div>
                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">WA</span>
                            </div>
                        </div>
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
                        <Link href="/anamnesebogen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Anamnesebögen</span>
                            <span className="text-sm text-gray-600 block mb-2">Formulare & Einwilligungen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für weniger Papierkram?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und digitalisiere die Verwaltung deines Tattoo Studios.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
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
                                q: 'Eignet sich Treatflow wirklich für Tattoo Studios?',
                                a: 'Ja, Treatflow eignet sich hervorragend für Tattoo Studios. Digitale Einwilligungen, Online-Buchungen und Kundenverwaltung sind genau die Funktionen, die den Tattoo-Alltag erleichtern.',
                            },
                            {
                                q: 'Können meine Kunden über Instagram buchen?',
                                a: 'Ja, du erhältst einen persönlichen Buchungslink, den du in deine Instagram-Bio, auf deine Website oder per WhatsApp teilen kannst. Kunden buchen direkt - ohne DM.',
                            },
                            {
                                q: 'Kann ich Einwilligungsformulare individualisieren?',
                                a: 'Ja, du kannst eigene Formulare erstellen oder Vorlagen anpassen. Typische Fragen zu Allergien, Medikamenten, Alkohol und Blutgerinnung sind bereits voreingestellt.',
                            },
                            {
                                q: 'Erinnert das System meine Kunden automatisch?',
                                a: 'Ja, Treatflow sendet automatisch Terminerinnerungen per E-Mail und SMS - z.B. 3 Tage und 1 Tag vor dem Termin. Das reduziert No-Shows um bis zu 80%.',
                            },
                            {
                                q: 'Funktioniert die Software auch für mehrere Tätowierer?',
                                a: 'Ja, du kannst mehrere Mitarbeiter mit eigenen Kalendern und Buchungslinks anlegen. Jeder Tätowierer hat seinen eigenen Terminplan.',
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
