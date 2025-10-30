import { Calendar, Clock, Users, CheckCircle, Zap, ArrowRight, Bell, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Terminkalender mit Online-Buchungen für Kosmetikstudios | Treatflow',
    description: 'Professioneller Terminkalender für Kosmetikstudios mit Online-Buchungssystem. Automatische Erinnerungen, 24/7 Buchungen und perfekte Terminübersicht. 30% mehr Buchungen garantiert.',
    keywords: ['Terminkalender Kosmetik', 'Online Buchungssystem', 'Kosmetikstudio Terminverwaltung', 'Automatische Erinnerungen', 'Beauty Salon Software'],
    alternates: {
        canonical: 'https://www.treatflow.io/terminkalender',
    },
    openGraph: {
        title: 'Terminkalender mit Online-Buchungen für Kosmetikstudios',
        description: 'Professioneller Terminkalender mit Online-Buchungssystem für Kosmetikstudios. 30% mehr Buchungen durch 24/7 Verfügbarkeit.',
        url: 'https://www.treatflow.io/terminkalender',
        images: [
            {
                url: '/images/mockups/kalender-overview.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Terminkalender Interface',
            },
        ],
    },
};

export default function TerminkalenderPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Calendar className="h-4 w-4 mr-2" />
                            Terminkalender
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Dein <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Terminkalender</span> immer im Blick
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Professioneller Kalender mit Wochen-, Tages- und Monatsansicht. Deine Kunden buchen direkt
                            über deinen persönlichen Buchungslink - ohne Doppelbuchungen.
                        </p>
                    </div>

                    {/* Terminkalender Screenshot */}
                    <div className="max-w-5xl mx-auto">
                        <img
                            src="/images/mockups/kalender-overview.png"
                            alt="Treatflow Terminkalender - Professionelle Terminverwaltung mit Online-Buchungen und Übersicht"
                            className="w-full h-auto shadow-2xl rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Why Online Booking Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Warum Online-Buchungen dein Studio revolutionieren
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            In der heutigen Zeit erwarten deine Kunden moderne, digitale Lösungen. Ein Online-Buchungskalender
                            ist nicht nur ein Nice-to-have, sondern ein Must-have für jedes erfolgreiche Studio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* 24/7 Verfügbarkeit */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">24/7 Erreichbarkeit</h3>
                            <p className="text-gray-600 text-center">
                                Deine Kunden können auch um 22 Uhr abends oder am Wochenende buchen,
                                wenn sie Zeit haben - ohne dass du erreichbar sein musst.
                            </p>
                        </div>

                        {/* Mehr Buchungen */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">30% mehr Buchungen</h3>
                            <p className="text-gray-600 text-center">
                                Studios mit Online-Buchung verzeichnen durchschnittlich 30% mehr Termine,
                                da spontane Buchungen möglich werden.
                            </p>
                        </div>

                        {/* Weniger Aufwand */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Weniger Telefonate</h3>
                            <p className="text-gray-600 text-center">
                                Bis zu 80% weniger Anrufe für Terminbuchungen. Konzentriere dich auf deine Kunden
                                statt auf das Telefon.
                            </p>
                        </div>

                        {/* Professioneller Eindruck */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Professioneller Auftritt</h3>
                            <p className="text-gray-600 text-center">
                                Zeige deinen Kunden, dass du mit der Zeit gehst. Online-Buchungen signalisieren
                                Modernität und Professionalität.
                            </p>
                        </div>

                        {/* Kundenbindung */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Bell className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Bessere Kundenbindung</h3>
                            <p className="text-gray-600 text-center">
                                Automatische Erinnerungen und einfache Terminbuchung führen zu zufriedeneren
                                Kunden und weniger No-Shows.
                            </p>
                        </div>

                        {/* Zeitersparnis */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Calendar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">5h Zeit pro Woche</h3>
                            <p className="text-gray-600 text-center">
                                Durchschnittlich 5 Stunden weniger Verwaltungsaufwand pro Woche durch
                                automatisierte Terminplanung.
                            </p>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-4">Das sagen die Zahlen</h3>
                            <p className="text-indigo-100 max-w-2xl mx-auto">
                                Studios, die auf Online-Buchungen setzen, sind erfolgreicher und effizienter.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">73%</div>
                                <div className="text-indigo-100 text-sm">der Kunden bevorzugen Online-Buchung</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">45%</div>
                                <div className="text-indigo-100 text-sm">weniger No-Shows mit Erinnerungen</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">60%</div>
                                <div className="text-indigo-100 text-sm">der Buchungen außerhalb Geschäftszeiten</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">90%</div>
                                <div className="text-indigo-100 text-sm">Kundenzufriedenheit mit Online-System</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Alles was du für perfekte Terminplanung brauchst
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der Online-Buchung bis zur automatischen Erinnerung - unser Kalender macht Terminplanung einfach.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Online Buchungen */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Online-Buchungen</h3>
                            <p className="text-gray-600 mb-6">
                                Deine Kunden buchen selbstständig über deinen persönlichen Buchungslink.
                                Keine Telefonate mehr nötig.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Persönlicher Buchungslink
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Bestätigung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Keine Doppelbuchungen
                                </li>
                            </ul>
                        </div>

                        {/* Flexible Ansichten */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Ansichten</h3>
                            <p className="text-gray-600 mb-6">
                                Wechsle zwischen Tages-, Wochen- und Monatsansicht.
                                Perfekte Übersicht für jede Situation.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tagesansicht für Details
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Wochenansicht für Planung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Monatsansicht für Übersicht
                                </li>
                            </ul>
                        </div>

                        {/* Automatische Erinnerungen */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Automatische Erinnerungen</h3>
                            <p className="text-gray-600 mb-6">
                                Reduziere No-Shows mit automatischen E-Mail-Erinnerungen
                                zu verschiedenen Zeitpunkten vor dem Termin.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Flexible Zeitpunkte (3 Tage, 1 Tag vorher)
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Individuelle Texte
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Weniger No-Shows
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für perfekte Terminplanung?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste den Terminkalender 14 Tage kostenlos und erlebe, wie einfach Terminplanung sein kann.
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
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                        >
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
