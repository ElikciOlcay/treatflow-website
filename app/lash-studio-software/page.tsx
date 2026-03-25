import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Zap, Heart, TrendingUp, ClipboardCheck, Eye, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Lash Studio Software: Termine & Einwilligungen',
    description: 'Software für Wimpernstudios und Lash Artists. Online-Buchungen, Kundenverwaltung, digitale Einwilligungen und automatische Erinnerungen. 14 Tage gratis.',
    keywords: [
        'Lash Studio Software',
        'Wimpernstudio Software',
        'Wimpernverlängerung Software',
        'Lash Artist Software',
        'Wimpern Terminbuchung',
        'Lash Studio Verwaltung',
        'Wimpernstudio Online Buchung',
        'Lash Extension Software',
        'Wimpern Kundenverwaltung',
        'Lash Lift Software',
        'Wimpernstudio Management',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/lash-studio-software',
    },
    openGraph: {
        title: 'Lash Studio Software: Termine & Kundenverwaltung',
        description: 'Online-Buchungen, Einwilligungen und Kundenverwaltung für Wimpernstudios.',
        url: 'https://www.treatflow.io/lash-studio-software',
        images: [{ url: '/images/og-lash-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Lash Studios' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Terminvergabe über Social Media', description: 'Termine per Instagram-DM und WhatsApp zu koordinieren ist zeitraubend. Nachrichten gehen unter und Überbuchungen passieren.' },
    { icon: FileText, title: 'Einwilligungen auf Papier', description: 'Vor jeder Wimpernverlängerung müssen Allergien abgefragt und Einwilligungen eingeholt werden. Papiermappen werden unübersichtlich.' },
    { icon: Users, title: 'Kundenvorlieben nicht gespeichert', description: 'Welche Wimpernlänge, welche Biegung, welcher Kleber? Ohne System musst du bei jedem Termin neu fragen.' },
    { icon: Bell, title: 'No-Shows bei langen Terminen', description: 'Wimpernbehandlungen dauern 1-3 Stunden. Ein No-Show bedeutet enormen Umsatzverlust und eine Lücke im Kalender.' },
];

const solutions = [
    { icon: Calendar, title: 'Online-Buchungen per Link', description: 'Dein persönlicher Buchungslink für Instagram-Bio, Website und WhatsApp. Kundinnen buchen selbst - kein DM-Chaos mehr.', gradient: 'from-violet-500 to-purple-600', bg: 'from-violet-50 to-purple-50' },
    { icon: Users, title: 'Kundenprofile mit Lash-Details', description: 'Speichere Wimpernlänge, Biegung, Kleber-Typ, Allergien und individuelle Notizen pro Kundin.', gradient: 'from-pink-500 to-rose-600', bg: 'from-pink-50 to-rose-50' },
    { icon: ClipboardCheck, title: 'Digitale Einwilligungen', description: 'Allergieabfrage und Einwilligungsformulare digital ausfüllen und unterschreiben lassen - vorab per Link oder am Tablet.', gradient: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Reduziere No-Shows mit automatischen Erinnerungen per SMS und E-Mail. Sende auch Pflegehinweise nach der Behandlung.', gradient: 'from-orange-500 to-amber-600', bg: 'from-orange-50 to-amber-50' },
    { icon: Sparkles, title: 'Refill-Erinnerungen', description: 'Erinnere Kundinnen automatisch an den nächsten Refill-Termin im idealen Zeitfenster von 2-3 Wochen.', gradient: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Kundendaten verschlüsselt in EU-Rechenzentren gespeichert. Datenschutzkonform und sicher.', gradient: 'from-gray-600 to-gray-800', bg: 'from-gray-50 to-slate-100' },
];

const stats = [
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '5h+', label: 'Zeit gespart pro Woche', description: 'durch Online-Buchungen' },
    { value: '24/7', label: 'online buchbar', description: 'perfekt für Instagram' },
    { value: '100%', label: 'papierfrei', description: 'digitale Einwilligungen' },
];

export default function LashStudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-gradient-to-br from-violet-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Eye className="h-4 w-4 mr-2" />
                            Software für Lash Studios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für dein{' '}
                            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Wimpernstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Online-Buchungen, Kundenverwaltung mit Lash-Details und digitale Einwilligungen - damit du dich auf perfekte Wimpern konzentrieren kannst.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center">
                                14 Tage kostenlos testen <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-violet-600 hover:text-violet-600 transition-colors duration-200">
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-lash.jpg"
                                alt="Lash Studio – professionelle Wimpernbehandlung"
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Typische Probleme im Lash-Alltag</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Du willst Wimpern zaubern - nicht Verwaltung erledigen.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex gap-5 p-6 rounded-2xl bg-red-50/50 border border-red-100">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"><point.icon className="h-6 w-6 text-red-600" /></div>
                                <div><h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3><p className="text-gray-600">{point.description}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">So hilft Treatflow deinem Lash Studio</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Entwickelt für die speziellen Anforderungen von Wimpernstudios.</p>
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

            <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => (<div key={i} className="text-center"><div className="text-5xl font-bold text-white mb-2">{s.value}</div><div className="text-lg font-semibold text-violet-100 mb-1">{s.label}</div><div className="text-sm text-violet-200">{s.description}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Alle Funktionen für Lash Studios</h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {['Online-Terminbuchung per Buchungslink', 'Digitale Einwilligungsformulare', 'Allergieabfrage vor der Behandlung', 'Kundenprofile mit Wimpern-Details', 'Automatische Terminerinnerungen per SMS', 'Refill-Erinnerungen automatisch senden', 'Pflegehinweise nach Behandlung', 'Foto-Dokumentation', 'Kalender mit Tages- und Wochenansicht', 'Mehrere Lash Artists verwalten', 'DSGVO-konforme Datenspeicherung', 'Mobil optimiert für Tablet und Smartphone'].map((f, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 font-medium">{f}</span></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Bereit für ein digitales Lash Studio?</h2>
                    <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Studio-Alltag sein kann.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">14 Tage gratis testen <ArrowRight className="ml-2 h-5 w-5" /></a>
                        <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-violet-600 transition-colors duration-200">Beratung buchen</a>
                    </div>
                    <p className="text-sm text-violet-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Häufige Fragen</h2></div>
                    <div className="space-y-6">
                        {[
                            { q: 'Eignet sich Treatflow für Wimpernverlängerung und Lash Lifting?', a: 'Ja, Treatflow eignet sich für alle Wimpernbehandlungen - Wimpernverlängerung, Volume Lashes, Lash Lifting, Wimpernfärben und mehr. Formulare und Dokumentation sind flexibel anpassbar.' },
                            { q: 'Kann ich Wimpern-Details pro Kundin speichern?', a: 'Ja, du kannst Wimpernlänge, Biegung, Kleber-Typ und weitere Details pro Kundin speichern. So bist du beim Refill sofort vorbereitet.' },
                            { q: 'Können Kundinnen über Instagram buchen?', a: 'Ja, du erhältst einen persönlichen Buchungslink, den du in deine Instagram-Bio, auf deine Website oder per WhatsApp teilen kannst.' },
                            { q: 'Erinnert das System an Refill-Termine?', a: 'Ja, du kannst automatische Nachrichten konfigurieren, die Kundinnen nach der Behandlung an den nächsten Refill erinnern.' },
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

            <Footer />
        </div>
    );
}
