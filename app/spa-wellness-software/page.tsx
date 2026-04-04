import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Zap, Heart, TrendingUp, ClipboardCheck, Waves, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

export const metadata = {
    title: 'Spa & Wellness Software: Termine & Verwaltung',
    description: 'Software für Spas und Wellness-Studios. Online-Buchungen, Kundenverwaltung, digitale Formulare und automatische Nachrichten. 14 Tage gratis testen.',
    keywords: [
        'Spa Software',
        'Wellness Software',
        'Spa Terminbuchung',
        'Wellness Studio Software',
        'Spa Verwaltung',
        'Day Spa Software',
        'Wellness Online Buchung',
        'Spa Kundenverwaltung',
        'Wellness Terminplaner',
        'Spa Management Software',
        'Wellness Praxis Software',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/spa-wellness-software',
    },
    openGraph: {
        title: 'Spa & Wellness Software - Termine & Verwaltung | Treatflow',
        description: 'Online-Buchungen, Kundenverwaltung und automatische Nachrichten für Spas und Wellness-Studios.',
        url: 'https://www.treatflow.io/spa-wellness-software',
        images: [{ url: '/images/og-spa-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Spa & Wellness' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Komplexe Terminplanung', description: 'Verschiedene Behandlungen, Räume und Therapeuten gleichzeitig zu koordinieren ist ohne Software extrem aufwendig.' },
    { icon: Users, title: 'Keine Kundenübersicht', description: 'Stammgäste erwarten, dass du ihre Vorlieben kennst. Ohne digitales System gehen diese Informationen schnell verloren.' },
    { icon: Bell, title: 'Hohe No-Show-Rate', description: 'Wellness-Termine werden oft spontan gebucht und dann vergessen. Ohne Erinnerungen bleiben Behandlungsräume leer.' },
    { icon: FileText, title: 'Gesundheitsfragebogen auf Papier', description: 'Vor Massagen und Behandlungen müssen Kontraindikationen abgefragt werden. Papierfragebogen sind unpraktisch und gehen verloren.' },
];

const solutions = [
    { icon: Calendar, title: 'Intelligente Terminplanung', description: 'Online-Buchungen mit Behandlungskategorien, Therapeuten-Auswahl und automatischer Verfügbarkeitsprüfung.', gradient: 'from-cyan-500 to-sky-600', bg: 'from-cyan-50 to-sky-50' },
    { icon: Users, title: 'Gästeprofile mit Vorlieben', description: 'Speichere Vorlieben, Allergien, bevorzugte Therapeuten und Behandlungshistorie. Für ein personalisiertes Spa-Erlebnis.', gradient: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Reduziere No-Shows mit automatischen Erinnerungen per E-Mail und SMS vor dem Termin.', gradient: 'from-violet-500 to-purple-600', bg: 'from-violet-50 to-purple-50' },
    { icon: ClipboardCheck, title: 'Digitale Gesundheitsfragebögen', description: 'Gäste füllen Fragebögen zu Kontraindikationen vorab digital aus. Du hast alle Infos vor der Behandlung.', gradient: 'from-orange-500 to-amber-600', bg: 'from-orange-50 to-amber-50' },
    { icon: Sparkles, title: 'Follow-up & Kundenbindung', description: 'Sende automatisch Danke-Nachrichten, Geburtstagswünsche und Angebote für Folgebehandlungen.', gradient: 'from-pink-500 to-rose-600', bg: 'from-pink-50 to-rose-50' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Gästedaten verschlüsselt in EU-Rechenzentren gespeichert. Datenschutzkonform und sicher.', gradient: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50' },
];

const stats = [
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '24/7', label: 'online buchbar', description: 'Gäste buchen jederzeit' },
    { value: '5h+', label: 'Zeit gespart pro Woche', description: 'durch automatisierte Prozesse' },
    { value: '100%', label: 'personalisiert', description: 'Gästevorlieben immer griffbereit' },
];

export default function SpaWellnessSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-sky-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Waves className="h-4 w-4 mr-2" />
                            Software für Spa & Wellness
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für dein{' '}
                            <span className="bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">Spa & Wellness Studio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Online-Buchungen, Gästeverwaltung und automatische Nachrichten - für ein reibungsloses Spa-Erlebnis von der Buchung bis zur Nachbetreuung.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center">
                                14 Tage kostenlos testen <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-cyan-600 hover:text-cyan-600 transition-colors duration-200">
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-spa.jpg"
                                alt="Spa und Wellness – Entspannung und Professionalität"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Herausforderungen im Spa-Alltag</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Deine Gäste erwarten Entspannung - nicht Wartezeiten und Papierkram.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {painPoints.map((p, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-2xl bg-red-50/50 border border-red-100">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"><p.icon className="h-6 w-6 text-red-600" /></div>
                                <div><h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3><p className="text-gray-600">{p.description}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">So unterstützt Treatflow dein Spa</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Für ein nahtloses Gästeerlebnis von der Buchung bis zur Nachbetreuung.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((s, i) => (
                            <div key={i} className={`bg-gradient-to-br ${s.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${s.gradient} rounded-lg flex items-center justify-center mb-6`}><s.icon className="h-6 w-6 text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => (<div key={i} className="text-center"><div className="text-5xl font-bold text-white mb-2">{s.value}</div><div className="text-lg font-semibold text-cyan-100 mb-1">{s.label}</div><div className="text-sm text-cyan-200">{s.description}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Alle Funktionen für Spas und Wellness</h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {['Online-Terminbuchung mit Behandlungsauswahl', 'Therapeuten-Kalender mit Verfügbarkeiten', 'Digitale Gesundheitsfragebögen', 'Gästeverwaltung mit Vorlieben', 'Automatische Terminerinnerungen per SMS', 'Follow-up Nachrichten nach Behandlungen', 'Geburtstagsnachrichten automatisch', 'Behandlungsdokumentation mit Notizen', 'Buchungslink für Website und Social Media', 'Mehrere Therapeuten verwalten', 'DSGVO-konforme Datenspeicherung', 'Mobil optimiert für Tablet und Desktop'].map((f, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 font-medium">{f}</span></div>
                        ))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Bereit für ein digitales Spa-Erlebnis?</h2>
                    <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Spa-Alltag sein kann.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">14 Tage gratis testen <ArrowRight className="ml-2 h-5 w-5" /></a>
                        <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200">Beratung buchen</a>
                    </div>
                    <p className="text-sm text-cyan-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Häufige Fragen</h2></div>
                    <div className="space-y-6">
                        {[
                            { q: 'Eignet sich Treatflow für Day Spas und Wellness-Studios?', a: 'Ja, Treatflow eignet sich für Day Spas, Wellness-Studios und Wellness-Hotels. Von der Online-Buchung bis zur Gästeverwaltung - alle Funktionen sind auf den Spa-Alltag zugeschnitten.' },
                            { q: 'Kann ich mehrere Therapeuten verwalten?', a: 'Ja, jeder Therapeut erhält einen eigenen Kalender und kann eigene Behandlungen anbieten. Du behältst den Überblick über alle Termine.' },
                            { q: 'Können Gäste Gesundheitsfragebögen vorab ausfüllen?', a: 'Ja, du kannst deinen Gästen einen Link senden. Sie füllen den Fragebogen bequem vorab aus - das spart Zeit vor Ort.' },
                            { q: 'Wie funktioniert die Online-Buchung?', a: 'Gäste wählen Behandlung, Therapeut und Wunschtermin über deinen Buchungslink. Das System zeigt nur verfügbare Zeiten an und verhindert Doppelbuchungen.' },
                        ].map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl p-6"><h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3><p className="text-gray-600 leading-relaxed">{faq.a}</p></div>
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

            <Footer />
        </div>
    );
}
