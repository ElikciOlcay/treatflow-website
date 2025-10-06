import { Calendar, Link2, Bell, CheckCircle, ArrowRight, Clock, Users, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export const metadata = {
    title: 'Online-Buchungssystem für Kosmetikstudios - 24/7 Verfügbar',
    description: 'Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink. 30% mehr Termine durch 24/7 Verfügbarkeit. Automatische Bestätigungen und keine Doppelbuchungen.',
    keywords: ['Online Buchungssystem Kosmetik', '24/7 Terminbuchung', 'Kosmetikstudio Online Termin', 'Automatische Terminbestätigung', 'Buchungslink Beauty'],
    openGraph: {
        title: 'Online-Buchungssystem für Kosmetikstudios - 24/7 Verfügbar',
        description: 'Online-Buchungssystem mit persönlichem Buchungslink. 30% mehr Termine durch 24/7 Verfügbarkeit.',
        url: 'https://www.treatflow.io/online-buchungen',
        images: [
            {
                url: '/images/og-online-buchungen.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Online-Buchungssystem',
            },
        ],
    },
};

export default function OnlineBuchungenPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Link2 className="h-4 w-4 mr-2" />
                            Online-Buchungen
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Deine Kunden buchen <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">selbstständig</span> online
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Persönlicher Buchungslink für dein Studio. Deine Kunden buchen rund um die Uhr,
                            du erhältst automatisch alle Termine - ohne Telefonate oder Nachrichten.
                        </p>
                    </div>

                    {/* Online-Buchungen Screenshot */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <img
                            src="/images/mockups/online-buchung-hero.png"
                            alt="Treatflow Online-Buchungssystem - Persönlicher Buchungslink für 24/7 Terminbuchungen"
                            className="w-full h-auto shadow-2xl rounded-2xl"
                        />
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                24/7 buchbar - auch nach Feierabend
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Deine Kunden können jederzeit buchen, wann es ihnen passt.
                                Du erhältst automatisch alle Buchungen und Bestätigungen.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Keine Doppelbuchungen</h3>
                                    <p className="text-gray-600">
                                        Das System prüft automatisch deine Verfügbarkeit und verhindert Doppelbuchungen.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Bell className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatische Bestätigungen</h3>
                                    <p className="text-gray-600">
                                        Kunden erhalten sofort eine Buchungsbestätigung per E-Mail mit allen Details.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Smartphone className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobil optimiert</h3>
                                    <p className="text-gray-600">
                                        Perfekt für Smartphone und Tablet - deine Kunden buchen von überall.
                                    </p>
                                </div>
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
                            Alles was du für Online-Buchungen brauchst
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der Buchung bis zur Erinnerung - unser System übernimmt alles automatisch für dich.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Persönlicher Link */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                                <Link2 className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Persönlicher Buchungslink</h3>
                            <p className="text-gray-600 mb-6">
                                Erhalte deinen eigenen Buchungslink zum Teilen in sozialen Medien,
                                auf deiner Website oder per WhatsApp.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Individueller Link
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    QR-Code inklusive
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Studio-Branding
                                </li>
                            </ul>
                        </div>

                        {/* Flexible Termine */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Terminvergabe</h3>
                            <p className="text-gray-600 mb-6">
                                Definiere deine Arbeitszeiten, Behandlungsdauern und Pausen.
                                Das System zeigt nur verfügbare Termine an.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Individuelle Arbeitszeiten
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Behandlungsdauern
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Pausen & Urlaub
                                </li>
                            </ul>
                        </div>

                        {/* Automatische Erinnerungen */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Bell className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Automatische Erinnerungen</h3>
                            <p className="text-gray-600 mb-6">
                                Reduziere No-Shows mit automatischen E-Mail-Erinnerungen
                                zu verschiedenen Zeitpunkten vor dem Termin.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Mehrere Erinnerungen (3 Tage, 1 Tag vorher)
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Individuelle Texte
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Weniger Ausfälle
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            So einfach funktioniert&rsquo;s
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            In nur 3 Schritten zu deinem eigenen Online-Buchungssystem.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Behandlungen definieren</h3>
                            <p className="text-gray-600">
                                Lege deine Behandlungen mit Dauer und Preis fest.
                                Bestimme deine Arbeitszeiten und Verfügbarkeiten.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Link teilen</h3>
                            <p className="text-gray-600">
                                Teile deinen persönlichen Buchungslink auf Instagram,
                                deiner Website oder per WhatsApp mit deinen Kunden.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Termine erhalten</h3>
                            <p className="text-gray-600">
                                Erhalte automatisch alle Buchungen in deinem Kalender.
                                Bestätigungen und Erinnerungen laufen automatisch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum Online-Buchungen dein Studio voranbringen
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mehr Buchungen, weniger Aufwand und zufriedenere Kunden - das sind die Vorteile von Online-Buchungen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Mehr Zeit</h3>
                            <p className="text-gray-600 text-sm">
                                Keine Telefonate mehr für Terminbuchungen.
                                Konzentriere dich voll auf deine Kunden.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Mehr Kunden</h3>
                            <p className="text-gray-600 text-sm">
                                24/7 Buchungen bedeuten mehr Termine,
                                auch außerhalb deiner Geschäftszeiten.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Weniger Fehler</h3>
                            <p className="text-gray-600 text-sm">
                                Automatische Terminvergabe verhindert
                                Doppelbuchungen und Missverständnisse.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Smartphone className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Modern</h3>
                            <p className="text-gray-600 text-sm">
                                Biete deinen Kunden den Komfort,
                                den sie von modernen Unternehmen erwarten.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Example Link Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        So könnte dein Buchungslink aussehen
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Kurz, merkbar und perfekt für Social Media oder deine Website.
                    </p>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md mx-auto">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">BS</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Beauty Studio Maria</h3>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-4 mb-6">
                            <code className="text-orange-600 font-medium">treatflow.io/beauty-studio-maria</code>
                        </div>

                        <p className="text-sm text-gray-600 mb-6">
                            Teile diesen Link überall dort, wo deine Kunden sind
                        </p>

                        <div className="flex justify-center space-x-4">
                            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">IG</span>
                            </div>
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">WA</span>
                            </div>
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">FB</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">WEB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für automatische Buchungen?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Teste Online-Buchungen 14 Tage kostenlos und erlebe, wie einfach Terminvergabe sein kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                        >
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
