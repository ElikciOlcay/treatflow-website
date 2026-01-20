import { Mail, Clock, Calendar, Heart, CheckCircle, ArrowRight, Bell, Zap, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Nachrichtenautomatisierung für Kosmetikstudios - Automatische Erinnerungen | Treatflow',
    description: 'Automatische Nachrichten für Kosmetikstudios: Terminerinnerungen, Follow-ups und Geburtstagswünsche. Steigere die Kundenbindung mit personalisierten, automatischen E-Mails.',
    keywords: ['Nachrichtenautomatisierung Kosmetik', 'Automatische Terminerinnerungen', 'Follow-up E-Mails', 'Geburtstagswünsche automatisch', 'Kundenbindung Beauty Studio'],
    alternates: {
        canonical: 'https://www.treatflow.io/nachrichtenautomatisierung',
    },
    openGraph: {
        title: 'Nachrichtenautomatisierung für Kosmetikstudios - Automatische Erinnerungen',
        description: 'Automatische Nachrichten für bessere Kundenbindung: Terminerinnerungen, Follow-ups und Geburtstagswünsche.',
        url: 'https://www.treatflow.io/nachrichtenautomatisierung',
        images: [
            {
                url: '/images/mockups/nachrichtenautomatisierung.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Nachrichtenautomatisierung',
            },
        ],
    },
};

export default function NachrichtenautomatisierungPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Nachrichtenautomatisierung
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Automatische <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Nachrichten</span> für mehr Kundenbindung
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Versende automatisch personalisierte Erinnerungen, Follow-ups und Geburtstagswünsche. 
                            Reduziere No-Shows um 80% und steigere die Kundenzufriedenheit.
                        </p>
                    </div>

                    {/* Mockup Placeholder */}
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">Nachrichtenautomatisierung</h3>
                                    <div className="flex items-center space-x-2">
                                        <button className="bg-white/20 px-3 py-1 rounded text-sm">Neue Vorlage</button>
                                        <button className="bg-white/20 px-3 py-1 rounded text-sm">Einstellungen</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Vor Termin */}
                                    <div className="border-2 border-orange-200 bg-orange-50 p-6 rounded-xl">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                <Clock className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Vor Termin</h4>
                                                <p className="text-sm text-gray-600">Erinnerung</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700 mb-3">3 Tage vorher</p>
                                        <div className="bg-white p-3 rounded border text-xs">
                                            <strong>Betreff:</strong> Erinnerung: Ihr Termin bei Beauty Studio<br/>
                                            <strong>Text:</strong> Liebe Frau Müller, wir freuen uns auf Ihren Termin am 15.03.2024...
                                        </div>
                                    </div>

                                    {/* Nach Termin */}
                                    <div className="border-2 border-blue-200 bg-blue-50 p-6 rounded-xl">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                <CheckCircle className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Nach Termin</h4>
                                                <p className="text-sm text-gray-600">Follow-up</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700 mb-3">1 Tag später</p>
                                        <div className="bg-white p-3 rounded border text-xs">
                                            <strong>Betreff:</strong> Wie war Ihre Behandlung?<br/>
                                            <strong>Text:</strong> Vielen Dank für Ihren Besuch! Wir würden uns über Ihr Feedback freuen...
                                        </div>
                                    </div>

                                    {/* Geburtstag */}
                                    <div className="border-2 border-pink-200 bg-pink-50 p-6 rounded-xl">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                                                <Heart className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Geburtstag</h4>
                                                <p className="text-sm text-gray-600">Geburtstagswünsche</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700 mb-3">Am Geburtstag</p>
                                        <div className="bg-white p-3 rounded border text-xs">
                                            <strong>Betreff:</strong> Herzlichen Glückwunsch!<br/>
                                            <strong>Text:</strong> Alles Gute zum Geburtstag! Als kleines Geschenk erhalten Sie 20% Rabatt...
                                        </div>
                                    </div>
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
                            Drei Arten automatischer Nachrichten
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Erreiche deine Kunden zur richtigen Zeit mit der richtigen Nachricht - vollautomatisch.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Terminerinnerungen */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Terminerinnerungen</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Reduziere No-Shows um bis zu 80% mit automatischen Erinnerungen 
                                1-7 Tage vor dem Termin.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Flexibler Zeitpunkt (1-7 Tage vorher)</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Personalisierte Nachrichten</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Behandlungsdetails inklusive</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>80% weniger No-Shows</span>
                                </li>
                            </ul>
                            <div className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
                                Weniger Ausfälle
                            </div>
                        </div>

                        {/* Follow-up Nachrichten */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <MessageCircle className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow-up Nachrichten</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Hole Feedback ein und biete Nachbehandlungen an. 
                                Perfekt für Kundenbindung und Zusatzumsätze.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Automatisches Feedback einholen</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Nachbehandlungen anbieten</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Pflegetipps versenden</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Höhere Kundenzufriedenheit</span>
                                </li>
                            </ul>
                            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                                Mehr Kundenbindung
                            </div>
                        </div>

                        {/* Geburtstagswünsche */}
                        <div className="bg-gradient-to-br from-pink-50 to-purple-100 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Geburtstagswünsche</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Überrasche deine Kunden mit personalisierten Geburtstagswünschen 
                                und exklusiven Angeboten.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Automatische Geburtstagswünsche</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Exklusive Geburtstagsrabatte</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Persönliche Note</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Stärkere Kundenbindung</span>
                                </li>
                            </ul>
                            <div className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium">
                                Persönlicher Service
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personalization Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Vollständig personalisierte Nachrichten
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nutze intelligente Platzhalter für automatisch personalisierte E-Mails.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-white font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligente Platzhalter</h3>
                                        <p className="text-gray-600">
                                            Verwende Platzhalter wie kunde_name, studio_name oder termin_datum 
                                            für automatisch personalisierte Nachrichten.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-white font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Behandlungsspezifisch</h3>
                                        <p className="text-gray-600">
                                            Erstelle verschiedene Vorlagen für unterschiedliche Behandlungsarten 
                                            mit spezifischen Nachsorgetipps.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-white font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibles Timing</h3>
                                        <p className="text-gray-600">
                                            Bestimme genau, wann welche Nachricht versendet wird - 
                                            von Stunden bis zu Wochen im Voraus oder danach.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Template Mockup */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">E-Mail Vorlage bearbeiten</h3>
                                    <div className="flex items-center space-x-2">
                                        <button className="bg-white/20 px-3 py-1 rounded text-sm">Vorschau</button>
                                        <button className="bg-white/20 px-3 py-1 rounded text-sm">Speichern</button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail-Betreff</label>
                                        <input 
                                            type="text" 
                                            className="w-full p-3 border border-gray-300 rounded-lg" 
                                            value="Erinnerung: Ihr Termin bei {studio_name} am {termin_datum}" 
                                            readOnly 
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail-Text</label>
                                        <textarea 
                                            className="w-full p-3 border border-gray-300 rounded-lg h-32" 
                                            value="Liebe/r {kunde_name},\n\nwir freuen uns auf Ihren Termin bei {studio_name} am {termin_datum} um {termin_uhrzeit}.\n\nBehandlung: {behandlung_name}\nDauer: {behandlung_dauer}\n\nBei Fragen erreichen Sie uns unter {studio_telefon}.\n\nHerzliche Grüße,\nIhr {studio_name} Team" 
                                            readOnly 
                                        />
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-blue-900 mb-2">Verfügbare Platzhalter:</h4>
                                        <div className="grid grid-cols-2 gap-2 text-sm text-blue-700">
                                            <span>kunde_name</span>
                                            <span>studio_name</span>
                                            <span>termin_datum</span>
                                            <span>termin_uhrzeit</span>
                                            <span>behandlung_name</span>
                                            <span>studio_telefon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum Nachrichtenautomatisierung?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Spare Zeit, reduziere Ausfälle und verbessere die Kundenerfahrung.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">80%</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Weniger No-Shows</h3>
                            <p className="text-gray-600">
                                Automatische Erinnerungen reduzieren Terminausfälle drastisch.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Zeit sparen</h3>
                            <p className="text-gray-600">
                                Keine manuellen Erinnerungen mehr - alles läuft automatisch.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Kundenbindung</h3>
                            <p className="text-gray-600">
                                Persönliche Nachrichten stärken die Beziehung zu deinen Kunden.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mehr Umsatz</h3>
                            <p className="text-gray-600">
                                Follow-ups und Geburtstagsangebote generieren Zusatztermine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für automatische Kundenkommunikation?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Teste die Nachrichtenautomatisierung 14 Tage kostenlos und erlebe, wie sich deine Kundenbindung verbessert.
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
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
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