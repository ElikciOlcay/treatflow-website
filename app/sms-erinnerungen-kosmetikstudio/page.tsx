import {
    Bell,
    MessageSquare,
    CheckCircle,
    ArrowRight,
    X,
    Clock,
    Users,
    TrendingUp,
    Zap,
    Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'SMS-Erinnerungen für Kosmetikstudios - No-Shows reduzieren | Treatflow',
    description:
        'Automatische SMS-Erinnerungen für dein Kosmetikstudio. Reduziere No-Shows um bis zu 80% mit Terminerinnerungen per SMS und E-Mail. 14 Tage gratis.',
    keywords: [
        'SMS Erinnerung Kosmetikstudio',
        'Terminerinnerung Kosmetik SMS',
        'No-Shows reduzieren Kosmetik',
        'Automatische Erinnerungen Beauty',
        'SMS Terminbestätigung Kosmetik',
        'Kosmetikstudio Terminerinnerung',
        'No-Show Reduktion Beauty',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/sms-erinnerungen-kosmetikstudio',
    },
    openGraph: {
        title: 'SMS-Erinnerungen für Kosmetikstudios - No-Shows reduzieren | Treatflow',
        description:
            'Automatische SMS-Erinnerungen für dein Kosmetikstudio. Reduziere No-Shows um bis zu 80% mit Terminerinnerungen per SMS und E-Mail.',
        url: 'https://www.treatflow.io/sms-erinnerungen-kosmetikstudio',
        images: [
            {
                url: '/images/og-sms-erinnerungen.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow SMS-Erinnerungen für Kosmetikstudios',
            },
        ],
    },
};

const smsFaqs = [
    {
        question: 'Wie funktionieren SMS-Erinnerungen bei Treatflow?',
        answer:
            'SMS-Erinnerungen werden automatisch versendet – 3 Tage und 1 Tag vor dem Termin. Du legst einmal die Vorlagen fest, danach läuft alles von selbst. Die Nachrichten werden personalisiert mit Namen, Datum und Behandlungsdetails.',
    },
    {
        question: 'Was kostet der SMS-Versand?',
        answer:
            'SMS werden kostengünstig pro Nachricht abgerechnet. Der genaue Preis hängt vom Zielland ab. E-Mail-Erinnerungen sind in allen Tarifen inkludiert. Du kannst jederzeit zwischen SMS und E-Mail wählen oder beide kombinieren.',
    },
    {
        question: 'Kann ich die Erinnerungen anpassen?',
        answer:
            'Ja! Du kannst die Texte vollständig individualisieren. Nutze Platzhalter wie kunde_name, termin_datum oder studio_name für personalisierte Nachrichten. Auch der Zeitpunkt der Erinnerung (1–7 Tage vorher) ist flexibel einstellbar.',
    },
    {
        question: 'Soll ich E-Mail oder SMS – oder beides nutzen?',
        answer:
            'Wir empfehlen beide: E-Mail 3 Tage vorher, SMS 24 Stunden vorher. E-Mails haben einen höheren Öffnungszeitpunkt, SMS erreichen Kunden sofort auf dem Smartphone. Die Kombination reduziert No-Shows am effektivsten.',
    },
];

export default function SmsErinnerungenKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            SMS-Erinnerungen
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            SMS-Erinnerungen für dein{' '}
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Kosmetikstudio
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Reduziere No-Shows um bis zu 80% mit automatischen Terminerinnerungen per SMS und E-Mail.
                            Deine Kunden werden pünktlich erinnert – du sparst Zeit und Ärger.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center shadow-lg shadow-purple-200"
                            >
                                14 Tage gratis testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center"
                            >
                                Kostenlose Beratung
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <img src="/images/funktionen/hero-sms-erinnerungen.jpg" alt="Erinnerung erhalten, Ruhe und Zuverlaessigkeit" className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Das Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Das Problem mit verpassten Terminen</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                No-Shows kosten bares Geld: Ausfallende Umsätze, leergebliebene Termine und Ärger. Manuell
                                an jeden Kunden zu erinnern ist unmöglich – und WhatsApp-Nachrichten werden oft
                                übersehen oder vergessen. Ohne zuverlässige Erinnerungen bleibt die No-Show-Rate hoch.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    Manuelle Erinnerungen kosten zu viel Zeit
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    WhatsApp-Erinnerungen sind unzuverlässig
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    Vergessene Termine = verlorener Umsatz
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100 w-full max-w-md">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl font-bold text-white">35%</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">No-Show-Rate ohne Erinnerungen</h3>
                                    <p className="text-gray-600">
                                        Ohne systematische Terminerinnerungen verpassen bis zu 35% der Kunden ihren
                                        Termin – oft einfach aus Vergesslichkeit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Die Lösung Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Die Lösung: Automatische SMS-Erinnerungen</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mit Treatflow erinnern sich deine Kunden automatisch an ihren Termin – per SMS und E-Mail, zum richtigen Zeitpunkt.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                                <Bell className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">SMS 3 Tage + 1 Tag vorher</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Automatische Erinnerungen per SMS – 3 Tage und 24 Stunden vor dem Termin. Deine Kunden
                                haben Zeit zu planen oder rechtzeitig abzusagen.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    Zwei Erinnerungstermine
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    Hohe Öffnungsrate bei SMS
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                <MessageSquare className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">E-Mail-Bestätigungen</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Direkt nach der Buchung erhält der Kunde eine Bestätigung per E-Mail. Bei der
                                Terminerinnerung kannst du E-Mail zusätzlich zur SMS nutzen – für maximale Reichweite.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    Sofortige Buchungsbestätigung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    Kombinierbar mit SMS
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                <Clock className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow-up Nachrichten</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nach dem Termin: Automatische Follow-up-Nachrichten per E-Mail oder SMS für Feedback
                                und Nachbehandlungstermine. Stärkt die Kundenbindung und bringt Buchungen.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    Nach Termin automatisch
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    Mehr Wiederkäufer
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ohne vs. Mit Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ohne vs. Mit SMS-Erinnerungen</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Der Unterschied ist messbar – und spürbar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                                    <X className="h-6 w-6 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Ohne automatische Erinnerungen</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700">
                                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    Manuelle Anrufe oder Nachrichten an jeden Kunden
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    Vergessene Termine – Kunden erscheinen nicht
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    Hoher Zeitaufwand ohne Planbarkeit
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    Verlorener Umsatz durch No-Shows
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                    <CheckCircle className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Mit automatischen SMS-Erinnerungen</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    Vollautomatisch – keine manuelle Arbeit
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    Erinnerte Kunden kommen pünktlich
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    Planbare Abläufe, mehr Zeit für Behandlungen
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    Bis zu 80% weniger No-Shows
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Messbare Ergebnisse</h2>
                        <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                            Zahlen, die für sich sprechen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">80%</div>
                            <p className="text-purple-100 font-medium">weniger No-Shows</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">3x</div>
                            <p className="text-purple-100 font-medium">automatische Nachrichten</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">0</div>
                            <p className="text-purple-100 font-medium">manueller Aufwand</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">24h</div>
                            <p className="text-purple-100 font-medium">vorher erinnert</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für weniger No-Shows?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Teste SMS-Erinnerungen 14 Tage kostenlos und erlebe, wie deutlich weniger Termine verpasst werden.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                        >
                            Kostenlose Beratung
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            FAQ
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen zu SMS-Erinnerungen
                        </h2>
                        <p className="text-xl text-gray-600">
                            Hier findest du Antworten auf die wichtigsten Fragen.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {smsFaqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-white rounded-2xl border border-gray-200 hover:border-purple-200 transition-colors overflow-hidden"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none px-8 py-6 hover:bg-gray-50 transition-colors">
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                    <span className="text-purple-600 text-2xl group-open:rotate-180 transition-transform">
                                        +
                                    </span>
                                </summary>
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
