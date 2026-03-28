import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Zap, Heart, TrendingUp, ClipboardCheck, Hand, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

export const metadata = {
    title: 'Massage Software: Termine, Kunden & Verwaltung',
    description: 'Software für Massage-Praxen und Massagestudios. Online-Terminbuchung, Kundenverwaltung, digitale Formulare und automatische Erinnerungen. 14 Tage gratis.',
    keywords: [
        'Massage Software',
        'Massagepraxis Software',
        'Massage Terminbuchung',
        'Massagestudio Software',
        'Massage Online Buchung',
        'Massage Kundenverwaltung',
        'Massage Terminplaner',
        'Massage Praxis Verwaltung',
        'Masseur Software',
        'Massage Management Software',
        'Physiotherapie Terminbuchung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/massage-software',
    },
    openGraph: {
        title: 'Massage Software - Termine & Kundenverwaltung | Treatflow',
        description: 'Online-Buchungen, Kundenverwaltung und automatische Erinnerungen für Massage-Praxen.',
        url: 'https://www.treatflow.io/massage-software',
        images: [{ url: '/images/og-massage-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Massage-Praxen' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Terminvergabe bindet Zeit', description: 'Telefonische Terminvereinbarungen und Rückrufe kosten Zeit, die du besser für Behandlungen nutzen könntest.' },
    { icon: FileText, title: 'Gesundheitsfragebogen auf Papier', description: 'Vor jeder Massage müssen Beschwerden, Medikamente und Kontraindikationen abgefragt werden. Papierformulare sind umständlich.' },
    { icon: Users, title: 'Beschwerdebilder nicht dokumentiert', description: 'Welche Beschwerden hatte der Kunde beim letzten Besuch? Welche Bereiche wurden behandelt? Ohne System fehlt der Überblick.' },
    { icon: Bell, title: 'Kunden vergessen Folgetermine', description: 'Regelmäßige Massagen sind wichtig für den Behandlungserfolg. Aber Kunden vergessen oft, den nächsten Termin zu buchen.' },
];

const solutions = [
    { icon: Calendar, title: 'Online-Terminbuchung', description: 'Kunden buchen Massagetermine online - nach Behandlungsart, Dauer und Wunschtermin. Rund um die Uhr verfügbar.', gradient: 'from-amber-500 to-orange-600', bg: 'from-amber-50 to-orange-50' },
    { icon: Users, title: 'Kundenprofile mit Beschwerden', description: 'Erfasse Beschwerdebereiche, Behandlungshistorie und individuelle Hinweise pro Kunde. Bei jedem Termin sofort parat.', gradient: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50' },
    { icon: ClipboardCheck, title: 'Digitale Gesundheitsfragebögen', description: 'Kunden füllen Fragebögen zu Beschwerden und Kontraindikationen vorab digital aus - das spart Zeit vor der Behandlung.', gradient: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Terminerinnerungen per SMS und E-Mail reduzieren No-Shows. Sende auch Erinnerungen an regelmäßige Folgetermine.', gradient: 'from-pink-500 to-rose-600', bg: 'from-pink-50 to-rose-50' },
    { icon: Sparkles, title: 'Follow-up & Kundenbindung', description: 'Automatische Nachrichten nach der Behandlung, Geburtstagswünsche und Erinnerungen an den nächsten Termin.', gradient: 'from-violet-500 to-purple-600', bg: 'from-violet-50 to-purple-50' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Kundendaten verschlüsselt in EU-Rechenzentren gespeichert. Datenschutzkonform und sicher.', gradient: 'from-gray-600 to-gray-800', bg: 'from-gray-50 to-slate-100' },
];

const stats = [
    { value: '80%', label: 'weniger No-Shows', description: 'durch automatische Erinnerungen' },
    { value: '5h+', label: 'Zeit gespart pro Woche', description: 'durch Online-Buchungen' },
    { value: '24/7', label: 'online buchbar', description: 'Kunden buchen jederzeit' },
    { value: '100%', label: 'Kundenübersicht', description: 'Beschwerden und Historie digital' },
];

export default function MassageSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Hand className="h-4 w-4 mr-2" />
                            Software für Massage-Praxen
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für deine{' '}
                            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Massage-Praxis</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Online-Buchungen, Kundenverwaltung und automatische Erinnerungen - damit du dich auf die Behandlung konzentrieren kannst.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center">
                                14 Tage kostenlos testen <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-amber-600 hover:text-amber-600 transition-colors duration-200">
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-massage.jpg"
                                alt="Massage-Praxis – ruhig und professionell"
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Typische Probleme in Massage-Praxen</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Deine Hände sollten behandeln - nicht Papierkram erledigen.</p>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">So hilft Treatflow deiner Massage-Praxis</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Weniger Verwaltung, mehr Zeit für deine Kunden.</p>
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

            <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => (<div key={i} className="text-center"><div className="text-5xl font-bold text-white mb-2">{s.value}</div><div className="text-lg font-semibold text-amber-100 mb-1">{s.label}</div><div className="text-sm text-amber-200">{s.description}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Alle Funktionen für Massage-Praxen</h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {['Online-Terminbuchung nach Massageart', 'Übersichtlicher Terminkalender', 'Digitale Gesundheitsfragebögen', 'Kundenverwaltung mit Beschwerdehistorie', 'Automatische Terminerinnerungen per SMS', 'Erinnerungen an Folgetermine', 'Follow-up Nachrichten nach Behandlungen', 'Geburtstagsnachrichten automatisch', 'Buchungslink für Website und Social Media', 'Mehrere Masseure verwalten', 'DSGVO-konforme Datenspeicherung', 'Mobil optimiert für Tablet und Smartphone'].map((f, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 font-medium">{f}</span></div>
                        ))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Bereit für eine digitale Massage-Praxis?</h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Praxis-Alltag sein kann.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">14 Tage gratis testen <ArrowRight className="ml-2 h-5 w-5" /></a>
                        <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200">Beratung buchen</a>
                    </div>
                    <p className="text-sm text-amber-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Häufige Fragen</h2></div>
                    <div className="space-y-6">
                        {[
                            { q: 'Eignet sich Treatflow für verschiedene Massagearten?', a: 'Ja, du kannst beliebige Behandlungen anlegen - Sportmassage, Aromaöl-Massage, Hot Stone, Lymphdrainage und mehr. Jede mit eigener Dauer und Preis.' },
                            { q: 'Können Kunden vorab Fragebögen ausfüllen?', a: 'Ja, du kannst Kunden einen Link senden. Sie füllen den Gesundheitsfragebogen bequem vorab aus und du hast alle Infos vor der Behandlung.' },
                            { q: 'Kann ich Beschwerdebilder pro Kunde speichern?', a: 'Ja, du kannst für jeden Kunden Beschwerden, Behandlungsbereiche und Notizen speichern. So bist du bei jedem Besuch bestens vorbereitet.' },
                            { q: 'Funktioniert die Software für mehrere Masseure?', a: 'Ja, jeder Masseur erhält einen eigenen Kalender und Buchungslink. Du behältst den Überblick über alle Termine.' },
                            { q: 'Was kostet Treatflow?', a: 'Treatflow bietet flexible Pläne ab 39 EUR im Monat. Du kannst alle Funktionen 14 Tage kostenlos testen - ohne Kreditkarte.' },
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
                        <Link href="/online-terminbuchung-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
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
