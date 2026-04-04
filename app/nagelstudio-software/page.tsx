import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Zap, Heart, TrendingUp, ClipboardCheck, Gem, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

export const metadata = {
    title: 'Nagelstudio Software: Termine & Verwaltung',
    description: 'Software für Nagelstudios. Online-Terminbuchung, Kundenverwaltung, digitale Formulare und automatische Erinnerungen. 14 Tage gratis testen.',
    keywords: [
        'Nagelstudio Software',
        'Software für Nagelstudios',
        'Nagelstudio Terminbuchung',
        'Nagelstudio Verwaltung',
        'Nageldesign Software',
        'Nagelstudio Online Buchung',
        'Nagelstudio Kundenverwaltung',
        'Nail Studio Software',
        'Maniküre Software',
        'Nagelstudio Management',
        'Nagelstudio Erinnerungen',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/nagelstudio-software',
    },
    openGraph: {
        title: 'Nagelstudio Software: Termine & Kundenverwaltung',
        description: 'Online-Buchungen, Kundenverwaltung und automatische Erinnerungen für Nagelstudios.',
        url: 'https://www.treatflow.io/nagelstudio-software',
        images: [{ url: '/images/og-nagelstudio-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Nagelstudios' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Terminkoordination per WhatsApp', description: 'Termine über WhatsApp und Telefon zu vergeben frisst Zeit. Nachrichten gehen unter, Termine werden verwechselt oder doppelt vergeben.' },
    { icon: Users, title: 'Keine Kundenhistorie', description: 'Welche Farbe hatte die Kundin zuletzt? Welche Form? Ohne System musst du jedes Mal neu fragen oder in Notizbüchern blättern.' },
    { icon: Bell, title: 'No-Shows und kurzfristige Absagen', description: 'Kundinnen vergessen ihre Termine oder sagen nicht ab. Ohne automatische Erinnerungen bleiben Lücken im Kalender.' },
    { icon: FileText, title: 'Allergien und Unverträglichkeiten', description: 'Gel-Allergien, Acryl-Unverträglichkeiten und Hautprobleme müssen erfasst werden - auf Papier geht das schnell verloren.' },
];

const solutions = [
    { icon: Calendar, title: 'Online-Terminbuchung', description: 'Dein persönlicher Buchungslink für Instagram und Website. Kundinnen buchen selbst, du erhältst alle Infos automatisch.', gradient: 'from-pink-500 to-fuchsia-600', bg: 'from-pink-50 to-fuchsia-50' },
    { icon: Users, title: 'Kundenprofile mit Vorlieben', description: 'Speichere Lieblingsfarben, Nagelform, Allergien und Notizen pro Kundin. Alles auf einen Blick bei jedem Termin.', gradient: 'from-violet-500 to-purple-600', bg: 'from-violet-50 to-purple-50' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Reduziere No-Shows mit automatischen Erinnerungen per E-Mail und SMS. Deine Kundinnen vergessen keinen Termin mehr.', gradient: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50' },
    { icon: ClipboardCheck, title: 'Digitale Formulare', description: 'Anamnesebögen für Allergien und Unverträglichkeiten digital ausfüllen lassen - vor dem Termin oder im Studio.', gradient: 'from-orange-500 to-amber-600', bg: 'from-orange-50 to-amber-50' },
    { icon: Sparkles, title: 'Geburtstagsnachrichten', description: 'Überrasche deine Kundinnen automatisch zum Geburtstag mit persönlichen Wünschen und stärke die Kundenbindung.', gradient: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Kundendaten verschlüsselt in der EU gespeichert. Datenschutzkonform und sicher.', gradient: 'from-rose-500 to-pink-600', bg: 'from-rose-50 to-pink-50' },
];

const stats = [
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '5h+', label: 'Zeit gespart pro Woche', description: 'durch Online-Buchungen' },
    { value: '24/7', label: 'online buchbar', description: 'perfekt für Instagram-Bio' },
    { value: '100%', label: 'Kundenübersicht', description: 'Vorlieben und Historie digital' },
];

export default function NagelstudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-white to-fuchsia-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Gem className="h-4 w-4 mr-2" />
                            Software für Nagelstudios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für dein{' '}
                            <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">Nagelstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Online-Buchungen, Kundenverwaltung und automatische Erinnerungen - damit du dich auf perfekte Nägel konzentrieren kannst.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center">
                                14 Tage kostenlos testen <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-pink-600 hover:text-pink-600 transition-colors duration-200">
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-nagelstudio.jpg"
                                alt="Nagelstudio – modern und einladend"
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Kennst du diese Probleme?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Der Alltag im Nagelstudio ist stressig genug - die Verwaltung sollte es nicht sein.</p>
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

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">So hilft Treatflow deinem Nagelstudio</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Speziell für die Bedürfnisse von Nagelstudios entwickelt.</p>
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

            <section className="py-20 bg-gradient-to-r from-pink-600 to-fuchsia-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-pink-100 mb-1">{stat.label}</div>
                                <div className="text-sm text-pink-200">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Alle Funktionen für Nagelstudios</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {['Online-Terminbuchung mit persönlichem Link', 'Übersichtlicher Terminkalender', 'Kundenverwaltung mit Nagelvorlieben', 'Allergien und Unverträglichkeiten erfassen', 'Automatische Terminerinnerungen per SMS', 'Geburtstagsnachrichten automatisch', 'Follow-up Nachrichten nach Behandlungen', 'Buchungslink für Instagram-Bio', 'Tages- und Wochenansicht', 'Mehrere Mitarbeiter verwalten', 'DSGVO-konforme Datenspeicherung', 'Mobil optimiert für Tablet und Smartphone'].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            <section className="py-20 bg-gradient-to-r from-pink-600 to-fuchsia-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Bereit für ein digitales Nagelstudio?</h2>
                    <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Studio-Alltag sein kann.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                            14 Tage gratis testen <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-200">
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-pink-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Häufige Fragen</h2></div>
                    <div className="space-y-6">
                        {[
                            { q: 'Eignet sich Treatflow für Nagelstudios?', a: 'Ja, Treatflow eignet sich hervorragend für Nagelstudios. Online-Buchungen, Kundenverwaltung mit Nagelvorlieben und automatische Erinnerungen sind genau die Funktionen, die den Alltag im Nagelstudio erleichtern.' },
                            { q: 'Kann ich Kundenvorlieben wie Farben und Formen speichern?', a: 'Ja, du kannst für jede Kundin individuelle Notizen, Lieblingsfarben, Nagelform und weitere Vorlieben speichern. So bist du bei jedem Termin bestens vorbereitet.' },
                            { q: 'Können meine Kundinnen online Termine buchen?', a: 'Ja, über deinen persönlichen Buchungslink können Kundinnen rund um die Uhr buchen. Perfekt für deine Instagram-Bio oder Website.' },
                            { q: 'Funktioniert die Software für mehrere Mitarbeiter?', a: 'Ja, du kannst mehrere Nageldesignerinnen mit eigenen Kalendern und Buchungslinks anlegen. Jede hat ihren eigenen Terminplan.' },
                            { q: 'Was kostet Treatflow?', a: 'Treatflow bietet flexible Pläne ab 39 EUR im Monat. Du kannst alle Funktionen 14 Tage kostenlos testen - ohne Kreditkarte.' },
                        ].map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
