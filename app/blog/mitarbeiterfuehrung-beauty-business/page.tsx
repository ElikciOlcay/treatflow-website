'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Users, Heart, CheckCircle, AlertCircle, Target } from 'lucide-react';

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Zurück zum Blog
                        </Link>
                    </nav>

                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                Business
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                3. Dezember 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                10 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Mitarbeiterführung im Beauty-Business: So baust du ein Traumteam auf
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Erfolgreiche Kosmetikstudios brauchen mehr als gute Behandlungen - sie brauchen motivierte Mitarbeiter.
                            So führst du dein Team zum Erfolg.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/mitarbeiterfuehrung.jpg"
                                alt="Teamwork im Kosmetikstudio - Erfolgreiche Mitarbeiterführung im Beauty-Business"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                                <Users className="h-5 w-5 mr-2" />
                                Warum Mitarbeiterführung entscheidend ist
                            </h3>
                            <p className="text-blue-800 mb-0">
                                <strong>Studios mit motivierten Teams haben 40% weniger Fluktuation und 25% höhere Kundenzufriedenheit.</strong>
                                Gute Mitarbeiterführung ist nicht nur menschlich richtig, sondern auch wirtschaftlich sinnvoll.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Die richtige Einstellung und Auswahl</h2>

                        <div className="bg-green-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-green-900 mb-4">✅ Worauf du bei der Personalauswahl achten solltest:</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-medium text-green-900 mb-2">Fachliche Qualifikationen:</h5>
                                    <ul className="text-green-800 text-sm space-y-1">
                                        <li>• Abgeschlossene Kosmetikausbildung</li>
                                        <li>• Zusatzqualifikationen (Wimpern, PMU, etc.)</li>
                                        <li>• Berufserfahrung in vergleichbaren Studios</li>
                                        <li>• Weiterbildungsbereitschaft</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-green-900 mb-2">Persönliche Eigenschaften:</h5>
                                    <ul className="text-green-800 text-sm space-y-1">
                                        <li>• Empathie und Kundenorientierung</li>
                                        <li>• Teamfähigkeit und Kommunikationsstärke</li>
                                        <li>• Zuverlässigkeit und Pünktlichkeit</li>
                                        <li>• Positive Ausstrahlung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onboarding: Der perfekte Start</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Erste Woche: Orientierung
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Studio-Tour und Sicherheitseinweisung</li>
                                    <li>• Vorstellung des Teams und der Abläufe</li>
                                    <li>• Einarbeitung in die Software (Treatflow)</li>
                                    <li>• Beobachtung erfahrener Kollegen</li>
                                </ul>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Zweite Woche: Erste Behandlungen
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Begleitete erste Kundenbehandlungen</li>
                                    <li>• Feedback-Gespräche nach jeder Behandlung</li>
                                    <li>• Produktschulung und Verkaufstraining</li>
                                    <li>• Integration in den Terminplan</li>
                                </ul>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Erste Monate: Selbstständigkeit
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Eigenverantwortliche Kundenbetreuung</li>
                                    <li>• Regelmäßige Feedback-Gespräche</li>
                                    <li>• Teilnahme an Teamevents</li>
                                    <li>• Erste Weiterbildungsmaßnahmen</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Motivation und Mitarbeiterbindung</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                                    <Heart className="h-5 w-5 mr-2" />
                                    Materielle Anreize
                                </h4>
                                <ul className="text-purple-800 text-sm space-y-1">
                                    <li>• Leistungsgerechte Bezahlung</li>
                                    <li>• Umsatzbeteiligung/Provisionen</li>
                                    <li>• Weihnachts- und Urlaubsgeld</li>
                                    <li>• Kostenlose Behandlungen</li>
                                    <li>• Fortbildungsbudget</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                                    <Target className="h-5 w-5 mr-2" />
                                    Immaterielle Anreize
                                </h4>
                                <ul className="text-orange-800 text-sm space-y-1">
                                    <li>• Anerkennung und Lob</li>
                                    <li>• Eigenverantwortung und Entscheidungsfreiheit</li>
                                    <li>• Entwicklungsmöglichkeiten</li>
                                    <li>• Flexible Arbeitszeiten</li>
                                    <li>• Angenehme Arbeitsatmosphäre</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kommunikation und Feedback</h2>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">💬 Regelmäßige Gespräche führen:</h4>
                            <div className="space-y-3">
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-1">Tägliche Kurzbesprechungen (5 min):</h5>
                                    <p className="text-indigo-800 text-sm">Tagesplanung, besondere Termine, aktuelle Themen</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-1">Wöchentliche Teammeetings (30 min):</h5>
                                    <p className="text-indigo-800 text-sm">Umsatz-Review, neue Produkte/Behandlungen, Probleme besprechen</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-1">Monatliche Einzelgespräche (30 min):</h5>
                                    <p className="text-indigo-800 text-sm">Leistung bewerten, Ziele definieren, Entwicklung planen</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-1">Jährliche Mitarbeitergespräche (60 min):</h5>
                                    <p className="text-indigo-800 text-sm">Gehaltsverhandlung, Karriereplanung, langfristige Ziele</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Konflikte lösen und Probleme angehen</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Häufige Konfliktquellen
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Unklare Aufgabenverteilung</li>
                                    <li>• Ungerechte Behandlung bei Terminen/Umsätzen</li>
                                    <li>• Kommunikationsprobleme zwischen Kollegen</li>
                                    <li>• Unterschiedliche Arbeitsweisen</li>
                                    <li>• Überlastung einzelner Mitarbeiter</li>
                                </ul>
                            </div>

                            <div className="border border-green-200 rounded-lg p-6">
                                <h4 className="text-green-800 font-semibold mb-2 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Lösungsansätze
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Klare Regeln und Prozesse definieren</li>
                                    <li>• Offene Gesprächskultur etablieren</li>
                                    <li>• Fairness bei Terminverteilung sicherstellen</li>
                                    <li>• Mediation bei Konflikten anbieten</li>
                                    <li>• Regelmäßige Teambuilding-Aktivitäten</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Digitale Tools für bessere Führung</h2>

                        <div className="bg-purple-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-purple-900 mb-4">🚀 Mitarbeiterführung mit Treatflow:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Individuelle Mitarbeiter-Dashboards mit Leistungskennzahlen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Umsatz-Tracking pro Mitarbeiter für faire Provisionen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Terminplanung mit automatischer Verteilung</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Interne Kommunikation und Notizen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Schulungsmodule und Wissensdatenbank</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Investition in Menschen zahlt sich aus</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Gute Mitarbeiterführung ist kein Luxus, sondern eine Notwendigkeit für nachhaltigen Erfolg.
                            Investiere Zeit und Energie in dein Team - es wird sich vielfach auszahlen.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Motivierte Mitarbeiter sind deine besten Botschafter, verkaufen mehr Produkte und sorgen
                            für zufriedene Kunden, die gerne wiederkommen.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">👥 Führe dein Team zum Erfolg!</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow behältst du alle wichtigen Mitarbeiter-KPIs im Blick und schaffst
                                Transparenz für faire Leistungsbewertung.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://app.treatflow.io/auth/register"
                                    target="_blank"
                                    className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    14 Tage kostenlos testen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Artikel hilfreich?</h3>
                                <p className="text-gray-600">Teile ihn mit anderen Studio-Inhabern!</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        const text = 'Mitarbeiterführung im Beauty-Business: So baust du ein Traumteam auf - Treatflow Blog';
                                        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Twitter
                                </button>
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-700 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    LinkedIn
                                </button>
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        const text = 'Mitarbeiterführung im Beauty-Business: So baust du ein Traumteam auf';
                                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Facebook
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link in die Zwischenablage kopiert!');
                                    }}
                                    className="inline-flex items-center bg-gray-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-gray-700 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Kopieren
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}

