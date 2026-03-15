import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Star, Zap, TrendingUp, ClipboardCheck, Stethoscope, Syringe
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Software für ästhetische Medizin - Praxis, Dokumentation & Termine | Treatflow',
    description: 'Die Software für ästhetische Kliniken und Praxen. Behandlungsdokumentation, digitale Einwilligungen, Patientenverwaltung und Online-Buchungen. 14 Tage gratis testen.',
    keywords: [
        'Ästhetische Medizin Software',
        'Software ästhetische Praxis',
        'Botox Dokumentation Software',
        'Filler Dokumentation Software',
        'Ästhetische Klinik Software',
        'Praxissoftware ästhetische Medizin',
        'Schönheitsklinik Software',
        'Ästhetik Praxis Verwaltung',
        'Patientenverwaltung ästhetische Medizin',
        'Einwilligung ästhetische Behandlung',
        'Ästhetische Medizin Terminbuchung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/aesthetische-medizin-software',
    },
    openGraph: {
        title: 'Software für ästhetische Medizin - Dokumentation & Praxisverwaltung | Treatflow',
        description: 'Behandlungsdokumentation, digitale Einwilligungen und Patientenverwaltung für ästhetische Praxen.',
        url: 'https://www.treatflow.io/aesthetische-medizin-software',
        images: [
            {
                url: '/images/og-aesthetik-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für ästhetische Medizin',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Umfangreiche Dokumentationspflicht',
        description: 'Jede ästhetische Behandlung muss detailliert dokumentiert werden - Produkte, Dosierungen, Injektionspunkte und Aufklärung.',
    },
    {
        icon: Shield,
        title: 'Rechtssichere Einwilligungen',
        description: 'Patienten müssen vor invasiven Behandlungen umfassend aufgeklärt werden. Fehlende oder unvollständige Dokumentation kann rechtliche Folgen haben.',
    },
    {
        icon: Users,
        title: 'Komplexe Patientenhistorien',
        description: 'Vorbehandlungen, Medikamente, Allergien und Behandlungspläne - die Patientenakte in der Ästhetik ist komplex und muss jederzeit abrufbar sein.',
    },
    {
        icon: Clock,
        title: 'Nachsorge und Follow-ups',
        description: 'Nach Hyaluron, Botox oder anderen Behandlungen sind Nachsorge-Termine und Kontrollen wichtig. Die Koordination bindet wertvolle Zeit.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Strukturierte Dokumentation',
        description: 'Dokumentiere jede Behandlung strukturiert - Produkte, Dosierungen, Injektionspunkte und Ergebnisse. Alles digital und jederzeit abrufbar.',
        gradient: 'from-teal-500 to-emerald-600',
        bg: 'from-teal-50 to-emerald-50',
    },
    {
        icon: FileText,
        title: 'Digitale Aufklärung & Einwilligung',
        description: 'Professionelle Aufklärungsbögen für ästhetische Eingriffe. Patienten unterschreiben digital - rechtssicher und lückenlos dokumentiert.',
        gradient: 'from-indigo-500 to-blue-600',
        bg: 'from-indigo-50 to-blue-50',
    },
    {
        icon: Users,
        title: 'Umfassende Patientenakte',
        description: 'Alle Behandlungen, Produkte, Fotos und Dokumente in einer digitalen Patientenakte. Vollständige Historie auf einen Blick.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
    {
        icon: Calendar,
        title: 'Online-Terminbuchung',
        description: 'Patienten buchen Beratungstermine und Behandlungen online. Du definierst Verfügbarkeiten, das System verhindert Doppelbuchungen.',
        gradient: 'from-orange-500 to-amber-600',
        bg: 'from-orange-50 to-amber-50',
    },
    {
        icon: Bell,
        title: 'Automatische Nachsorge',
        description: 'Sende automatisch Nachsorge-Hinweise, Kontrolltermin-Erinnerungen und Follow-up Nachrichten nach Behandlungen.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Syringe,
        title: 'Produkt- und Chargendokumentation',
        description: 'Dokumentiere verwendete Produkte mit Chargennummern. Lückenlose Rückverfolgbarkeit für maximale Sicherheit.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
];

const stats = [
    { value: '100%', label: 'digital dokumentiert', description: 'lückenlose Behandlungsdokumentation' },
    { value: '80%', label: 'weniger Verwaltung', description: 'durch digitale Formulare' },
    { value: '24/7', label: 'online buchbar', description: 'für Beratung und Behandlung' },
    { value: 'EU', label: 'Datenspeicherung', description: 'DSGVO-konform verschlüsselt' },
];

export default function AesthetischeMedizinSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Stethoscope className="h-4 w-4 mr-2" />
                            Software für ästhetische Praxen
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                ästhetische Medizin
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Behandlungsdokumentation, digitale Einwilligungen und Patientenverwaltung -
                            die moderne Praxislösung für ästhetische Kliniken und Praxen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Herausforderungen in ästhetischen Praxen
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hohe Dokumentationsanforderungen, sensible Patientendaten und komplexe Behandlungspläne prägen den Alltag.
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
                            So unterstützt Treatflow deine Praxis
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Entwickelt für die speziellen Anforderungen der ästhetischen Medizin.
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
            <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-teal-100 mb-1">{stat.label}</div>
                                <div className="text-sm text-teal-200">{stat.description}</div>
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
                            Alle Funktionen für ästhetische Praxen
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Strukturierte Behandlungsdokumentation',
                            'Digitale Aufklärung mit Unterschrift',
                            'Produkt- und Chargendokumentation',
                            'Vorher-Nachher Fotodokumentation',
                            'Umfassende Patientenakte',
                            'Online-Terminbuchung',
                            'Automatische Terminerinnerungen per SMS',
                            'Follow-up Nachrichten nach Behandlungen',
                            'Kontrolltermin-Erinnerungen',
                            'NiSV-konforme Dokumentation',
                            'DSGVO-konform mit EU-Hosting',
                            'Mobil optimiert für Tablet und Desktop',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für eine moderne Praxisverwaltung?
                    </h2>
                    <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie digital und effizient deine Praxis arbeiten kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-teal-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
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
                                q: 'Ist Treatflow für medizinisch-ästhetische Behandlungen geeignet?',
                                a: 'Ja, Treatflow unterstützt die Dokumentation von Botox, Fillern, Mesotherapie, PRP und weiteren ästhetischen Behandlungen. Die Formulare sind flexibel anpassbar.',
                            },
                            {
                                q: 'Kann ich Chargennummern von Produkten dokumentieren?',
                                a: 'Ja, du kannst bei jeder Behandlung die verwendeten Produkte mit Chargennummern und Dosierungen dokumentieren. So ist die Rückverfolgbarkeit jederzeit gewährleistet.',
                            },
                            {
                                q: 'Erfüllt die Software die Anforderungen der NiSV?',
                                a: 'Ja, Treatflow unterstützt die NiSV-konforme Dokumentation für nicht-invasive Anwendungen wie Laser, IPL und Ultraschall-Behandlungen.',
                            },
                            {
                                q: 'Können Patienten Formulare vorab digital ausfüllen?',
                                a: 'Ja, du kannst deinen Patienten einen Link senden. Sie füllen Anamnesebogen und Einwilligungen bequem vorab aus und unterschreiben digital.',
                            },
                            {
                                q: 'Ist Treatflow DSGVO-konform für Patientendaten?',
                                a: 'Absolut. Alle Daten werden verschlüsselt in EU-Rechenzentren gespeichert. Treatflow erfüllt alle Anforderungen der DSGVO für sensible Gesundheitsdaten.',
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
