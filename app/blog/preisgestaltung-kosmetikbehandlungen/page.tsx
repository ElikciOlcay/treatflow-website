'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Euro, CheckCircle, AlertCircle, Target, Scale } from 'lucide-react';

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
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                Business
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                15. November 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                7 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Preisgestaltung im Kosmetikstudio: Was deine Behandlungen wirklich wert sind
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Viele Studios verkaufen sich unter Wert. So kalkulierst du deine Preise richtig und
                            kommunizierst den Wert deiner Arbeit professionell.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/preisgestaltung-guide.jpg"
                                alt="Preisgestaltung im Kosmetikstudio - Professionelle Kalkulation und Wertschätzung der Arbeit"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-red-900 mb-2 flex items-center">
                                <AlertCircle className="h-5 w-5 mr-2" />
                                Die teure Wahrheit
                            </h3>
                            <p className="text-red-800 mb-0">
                                <strong>67% der Kosmetikstudios kalkulieren ihre Preise falsch und arbeiten unrentabel.</strong>
                                Viele Kosmetikerinnen haben Angst vor höheren Preisen und verkaufen ihre Expertise unter Wert.
                                Das Ergebnis: Burnout bei minimalem Gewinn.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Du investierst Jahre in deine Ausbildung, kaufst teure Geräte und Produkte, arbeitest mit Leidenschaft -
                            aber deine Preise spiegeln diesen Wert nicht wider? Dann ist es Zeit für eine ehrliche Preiskalkulation.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Dieser Guide zeigt dir, wie du deine Preise wissenschaftlich kalkulierst, selbstbewusst kommunizierst
                            und dabei mehr verdienst - ohne deine Kundinnen zu verlieren.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Warum richtige Preisgestaltung überlebenswichtig ist</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-red-50 p-6 rounded-lg">
                                <AlertCircle className="h-8 w-8 text-red-600 mb-3" />
                                <h4 className="font-semibold text-red-900 mb-3">Zu niedrige Preise führen zu:</h4>
                                <ul className="text-red-800 text-sm space-y-1">
                                    <li>• Burnout durch Überarbeitung</li>
                                    <li>• Keine Investitionen in neue Geräte</li>
                                    <li>• Schlechte Kundenqualität</li>
                                    <li>• Kein Geld für Marketing</li>
                                    <li>• Unrentables Business</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                                <h4 className="font-semibold text-green-900 mb-3">Richtige Preise ermöglichen:</h4>
                                <ul className="text-green-800 text-sm space-y-1">
                                    <li>• Nachhaltiges Wachstum</li>
                                    <li>• Investitionen in Qualität</li>
                                    <li>• Wertschätzende Kundschaft</li>
                                    <li>• Work-Life-Balance</li>
                                    <li>• Profitables Studio</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Die 5-Schritt Preiskalkulation</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Schluss mit Bauchgefühl und Konkurrenzvergleichen. Diese systematische Kalkulation zeigt dir,
                            was deine Behandlungen mindestens kosten müssen.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Fixkosten pro Monat ermitteln
                                </h4>
                                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                    <h5 className="font-medium text-blue-900 mb-2">Beispiel-Kalkulation:</h5>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <ul className="text-blue-800 space-y-1">
                                            <li>• Miete: €800</li>
                                            <li>• Strom/Wasser: €120</li>
                                            <li>• Versicherungen: €150</li>
                                            <li>• Software (Treatflow): €59</li>
                                            <li>• Marketing: €200</li>
                                        </ul>
                                        <ul className="text-blue-800 space-y-1">
                                            <li>• Steuerberatung: €100</li>
                                            <li>• Fortbildungen: €100</li>
                                            <li>• Geräte-Leasing: €300</li>
                                            <li>• Sonstiges: €100</li>
                                            <li><strong>• Gesamt: €1.929/Monat</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Gewünschtes Gehalt festlegen
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Du bist Unternehmerin, keine Angestellte! Dein Gehalt sollte deine Expertise widerspiegeln.
                                </p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="text-sm text-green-800">
                                        <p><strong>Beispiel:</strong> €3.000 netto gewünscht</p>
                                        <p>+ 30% Steuern/Sozialabgaben = €3.900 brutto</p>
                                        <p><strong>Monatliches Gehaltsziel: €3.900</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Arbeitszeit realistisch einschätzen
                                </h4>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-yellow-900 mb-2">Realistische Arbeitszeit-Kalkulation:</h5>
                                    <div className="text-sm text-yellow-800 space-y-1">
                                        <p>• 20 Arbeitstage pro Monat</p>
                                        <p>• 8 Stunden pro Tag = 160 Stunden/Monat</p>
                                        <p>• Minus 20% für Verwaltung, Pausen, Krankheit</p>
                                        <p><strong>• Effektive Behandlungszeit: 128 Stunden/Monat</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                                    Mindest-Stundensatz berechnen
                                </h4>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-purple-900 mb-2">Formel:</h5>
                                    <div className="text-sm text-purple-800 space-y-2">
                                        <p>(Fixkosten + Gewünschtes Gehalt) ÷ Arbeitsstunden = Mindest-Stundensatz</p>
                                        <p><strong>Beispiel:</strong></p>
                                        <p>(€1.929 + €3.900) ÷ 128h = €45,54/Stunde</p>
                                        <p><strong>Mindest-Stundensatz: €46/Stunde</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                                    Behandlungspreise kalkulieren
                                </h4>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-gray-900 mb-2">Beispiel-Preise bei €46/Stunde:</h5>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <ul className="text-gray-800 space-y-1">
                                            <li>• Gesichtsreinigung (45 min): €35 + Produkte €10 = <strong>€45</strong></li>
                                            <li>• Anti-Aging Behandlung (60 min): €46 + Produkte €15 = <strong>€61</strong></li>
                                            <li>• Microneedling (90 min): €69 + Produkte €20 = <strong>€89</strong></li>
                                        </ul>
                                        <ul className="text-gray-800 space-y-1">
                                            <li>• Wimpernverlängerung (120 min): €92 + Material €25 = <strong>€117</strong></li>
                                            <li>• Permanent Make-up (180 min): €138 + Material €30 = <strong>€168</strong></li>
                                            <li>• Beratung (30 min): €23 = <strong>€23</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Preispsychologie: So kommunizierst du Wert</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Der Preis ist nur eine Zahl. Entscheidend ist, wie du den Wert dahinter kommunizierst.
                            Hier die wichtigsten psychologischen Prinzipien:
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-indigo-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
                                    <Target className="h-5 w-5 mr-2" />
                                    Prinzip #1: Wert vor Preis kommunizieren
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-red-700 font-medium text-sm mb-2">❌ Falsch:</p>
                                        <p className="text-red-700 text-sm bg-red-100 p-2 rounded">
                                            "Eine Gesichtsbehandlung kostet 65€."
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-green-700 font-medium text-sm mb-2">✅ Richtig:</p>
                                        <p className="text-green-700 text-sm bg-green-100 p-2 rounded">
                                            "Unsere Anti-Aging Behandlung mit Microneedling reduziert Falten um bis zu 40% und kostet 65€."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                                    <Scale className="h-5 w-5 mr-2" />
                                    Prinzip #2: Anker-Preise nutzen
                                </h4>
                                <p className="text-purple-800 text-sm mb-3">
                                    Präsentiere immer drei Optionen: Basic, Standard, Premium.
                                    Die meisten wählen die mittlere Option.
                                </p>
                                <div className="bg-white p-4 rounded border">
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div className="text-center">
                                            <h5 className="font-medium text-gray-900 mb-1">Basic Facial</h5>
                                            <p className="text-gray-600 text-xs mb-2">45 min, Reinigung + Maske</p>
                                            <p className="text-lg font-bold text-gray-900">€45</p>
                                        </div>
                                        <div className="text-center bg-indigo-50 p-3 rounded">
                                            <h5 className="font-medium text-indigo-900 mb-1">Premium Facial ⭐</h5>
                                            <p className="text-indigo-700 text-xs mb-2">75 min, + Peeling + Massage</p>
                                            <p className="text-lg font-bold text-indigo-900">€75</p>
                                        </div>
                                        <div className="text-center">
                                            <h5 className="font-medium text-gray-900 mb-1">Luxury Facial</h5>
                                            <p className="text-gray-600 text-xs mb-2">90 min, + Anti-Aging Serum</p>
                                            <p className="text-lg font-bold text-gray-900">€95</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                                    <Euro className="h-5 w-5 mr-2" />
                                    Prinzip #3: Preis-Rechtfertigung
                                </h4>
                                <p className="text-green-800 text-sm mb-3">
                                    Erkläre, warum deine Preise gerechtfertigt sind. Transparenz schafft Vertrauen.
                                </p>
                                <div className="bg-white p-4 rounded border">
                                    <p className="text-green-800 text-sm">
                                        <strong>"Unsere 75€ Behandlung beinhaltet:"</strong><br />
                                        • 15 Jahre Berufserfahrung<br />
                                        • Hochwertige Bio-Produkte (Wert: 20€)<br />
                                        • Professionelle Hautanalyse<br />
                                        • Individuelle Nachbetreuung<br />
                                        • 75 Minuten persönliche Betreuung
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Häufige Preisfehler und wie du sie vermeidest</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #1: Konkurrenz-Orientierung
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> "Studio XY kostet nur 40€, also kann ich nicht 60€ verlangen."
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Du kennst ihre Kosten nicht. Orientiere dich an deiner Kalkulation, nicht an anderen.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #2: Rabatt-Spirale
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Ständige Rabatte entwerten deine Leistung.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Maximal 2-3 Aktionen pro Jahr. Qualität hat ihren Preis.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #3: Emotionale Preisgestaltung
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> "Die Kundin tut mir leid, ich mache einen Sonderpreis."
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Professionelle Distanz wahren. Deine Zeit ist wertvoll.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Preiserhöhungen richtig durchführen</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Inflation, gestiegene Kosten, mehr Erfahrung - es gibt viele gute Gründe für Preiserhöhungen.
                            So machst du es professionell:
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-blue-900 mb-4">📋 Schritt-für-Schritt Preiserhöhung:</h4>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                                    <div>
                                        <strong className="text-blue-900">6 Wochen vorher ankündigen</strong>
                                        <p className="text-blue-800 text-sm">E-Mail, Aushang, persönliche Gespräche - alle Kanäle nutzen</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                                    <div>
                                        <strong className="text-blue-900">Gründe kommunizieren</strong>
                                        <p className="text-blue-800 text-sm">"Gestiegene Produktkosten, neue Geräte, Fortbildungen ermöglichen bessere Qualität"</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                                    <div>
                                        <strong className="text-blue-900">Übergangslösung anbieten</strong>
                                        <p className="text-blue-800 text-sm">"Bis zum 31.12. noch zum alten Preis buchbar"</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                                    <div>
                                        <strong className="text-blue-900">Mehrwert betonen</strong>
                                        <p className="text-blue-800 text-sm">"Neue XY-Behandlung, längere Beratung, premium Produkte"</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">5</span>
                                    <div>
                                        <strong className="text-blue-900">Souverän bleiben</strong>
                                        <p className="text-blue-800 text-sm">Diskussionen vermeiden. "Das sind unsere neuen Preise ab Januar."</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Digitale Preislisten und Transparenz</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Moderne Kundinnen erwarten Transparenz. Versteckte Preise wirken unseriös und schrecken ab.
                            So präsentierst du deine Preise professionell:
                        </p>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">💻 Preistransparenz mit Treatflow:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Digitale Preislisten auf Website und Social Media</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Online-Buchung mit sofortiger Preisanzeige</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Automatische Preiskalkulation für Pakete</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Einfache Preisanpassungen systemweit</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Umsatz-Tracking und Preisoptimierung</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Deine Arbeit ist mehr wert, als du denkst</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Richtige Preisgestaltung ist kein Luxus, sondern überlebenswichtig für dein Studio. Du hilfst Menschen dabei,
                            sich schöner und selbstbewusster zu fühlen - das hat seinen Preis.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Kalkuliere wissenschaftlich, kommuniziere selbstbewusst und stehe zu deinem Wert.
                            Kundinnen, die nur auf den Preis schauen, sind nicht deine Zielgruppe.
                            Die richtigen Kundinnen schätzen Qualität und sind bereit, dafür zu bezahlen.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">💰 Optimiere deine Preisgestaltung!</h3>
                            <p className="mb-6 text-indigo-100">
                                Treatflow hilft dir dabei, deine Preise professionell zu kalkulieren, zu präsentieren und zu verwalten.
                                Automatische Rechnungsstellung und Umsatz-Tracking inklusive.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://app.treatflow.io/"
                                    target="_blank"
                                    className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    14 Tage kostenlos testen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    href="/terminkalender"
                                    className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                                >
                                    Mehr zur Terminverwaltung
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Guide hilfreich?</h3>
                                <p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        const text = 'Preisgestaltung im Kosmetikstudio: Was deine Behandlungen wirklich wert sind - Treatflow Blog';
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
                                        const text = 'Preisgestaltung im Kosmetikstudio: Was deine Behandlungen wirklich wert sind';
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

