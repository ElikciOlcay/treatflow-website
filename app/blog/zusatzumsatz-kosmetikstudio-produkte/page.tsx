'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, ShoppingBag, TrendingUp, Euro, CheckCircle, AlertCircle, Target, Star } from 'lucide-react';


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
                                28. November 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                12 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Zusatzumsatz generieren: Der ultimative Guide für Produktverkäufe
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Bis zu 40% mehr Umsatz durch cleveren Produktverkauf. Welche Produkte funktionieren und wie du sie
                            erfolgreich verkaufst - ohne aufdringlich zu wirken.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/produktverkauf-guide.jpg"
                                alt="Kosmetikprodukte im Beauty Salon - Zusatzumsatz durch professionellen Produktverkauf"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center">
                                <Euro className="h-5 w-5 mr-2" />
                                Erfolgs-Statistik
                            </h3>
                            <p className="text-green-800 mb-0">
                                <strong>Erfolgreiche Kosmetikstudios generieren 25-40% ihres Umsatzes durch Produktverkäufe.</strong>
                                Der Durchschnitt liegt bei nur 8%. Mit der richtigen Strategie kannst du deinen Umsatz ohne zusätzliche Termine massiv steigern!
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Stell dir vor: Deine Kundin verlässt das Studio nicht nur mit strahlender Haut, sondern auch mit den perfekten
                            Produkten für die Heimpflege. Sie ist glücklich, du hast zusätzlichen Umsatz gemacht - eine Win-Win-Situation.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Doch viele Kosmetikerinnen lassen diese Chance ungenutzt. Entweder aus Unsicherheit beim Verkaufen oder weil
                            sie nicht wissen, welche Produkte wirklich funktionieren. Dieser Guide ändert das!
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Warum Produktverkauf so wichtig ist</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Produktverkauf ist nicht nur eine nette Zusatzeinnahme - er ist essentiell für ein profitables Kosmetikstudio.
                            Hier die wichtigsten Gründe:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
                                <h4 className="font-semibold text-blue-900 mb-3">Höhere Gewinnmargen</h4>
                                <p className="text-blue-800 text-sm">
                                    Produktverkäufe haben oft 50-70% Gewinnmarge, während Behandlungen nur 30-40% abwerfen.
                                    Ein 50€ Produkt bringt mehr Gewinn als eine 80€ Behandlung.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-lg">
                                <Target className="h-8 w-8 text-purple-600 mb-3" />
                                <h4 className="font-semibold text-purple-900 mb-3">Bessere Behandlungsergebnisse</h4>
                                <p className="text-purple-800 text-sm">
                                    Kundinnen, die die richtigen Heimpflege-Produkte verwenden, haben bessere Hautresultate
                                    und sind zufriedener mit deiner Arbeit.
                                </p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <Star className="h-8 w-8 text-green-600 mb-3" />
                                <h4 className="font-semibold text-green-900 mb-3">Stärkere Kundenbindung</h4>
                                <p className="text-green-800 text-sm">
                                    Kundinnen, die deine Produkte verwenden, denken täglich an dich und dein Studio.
                                    Das stärkt die emotionale Bindung enorm.
                                </p>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-lg">
                                <ShoppingBag className="h-8 w-8 text-orange-600 mb-3" />
                                <h4 className="font-semibold text-orange-900 mb-3">Passive Einnahmen</h4>
                                <p className="text-orange-800 text-sm">
                                    Einmal verkauft, generieren Nachkäufe regelmäßige Einnahmen ohne zusätzlichen Zeitaufwand
                                    für Behandlungen.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Die 5 umsatzstärksten Produktkategorien</h2>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Gesichtsreinigung & Peeling (€15-45)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Der Einstieg in jede Routine. Kundinnen verstehen sofort den Nutzen und kaufen gerne nach.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-900 mb-2">💡 Verkaufstipp:</h4>
                            <p className="text-gray-700 text-sm">
                                "Für deine Haut empfehle ich diese sanfte Reinigung. Sie entfernt Make-up gründlich, ohne die
                                Haut auszutrocknen. Verwendest du sie morgens und abends, hält sie etwa 2-3 Monate."
                            </p>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Seren & Konzentrate (€25-80)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hochpreisige Produkte mit sichtbaren Ergebnissen. Perfekt für Kundinnen mit spezifischen Hautproblemen.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                            <h4 className="font-semibold text-yellow-900 mb-2">⭐ Bestseller-Tipp:</h4>
                            <p className="text-yellow-800 text-sm">
                                Vitamin C Seren sind absolute Verkaufsschlager. Jede Kundin versteht den Anti-Aging Nutzen
                                und die Ergebnisse sind schnell sichtbar.
                            </p>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Sonnenschutz (€20-35)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Ganzjährig verkaufbar und essentiell für jede Hautpflege. Hohe Nachkaufrate.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Masken & Treatments (€12-30)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Perfekt als "Belohnung" oder für besondere Anlässe. Kundinnen gönnen sich gerne etwas Luxus.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Körperpflege & Handcremes (€8-25)</h3>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Niedrige Einstiegspreise, häufige Nachkäufe. Ideal für preissensible Kundinnen.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Die 7-Schritte-Verkaufsstrategie</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-indigo-200 rounded-lg p-6">
                                <h4 className="text-indigo-800 font-semibold mb-2 flex items-center">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Hautanalyse als Grundlage
                                </h4>
                                <p className="text-gray-700">
                                    <strong>Niemals ohne Analyse verkaufen.</strong> Erst die Haut verstehen, dann passende Produkte empfehlen.
                                    Das schafft Vertrauen und Professionalität.
                                </p>
                            </div>

                            <div className="border border-indigo-200 rounded-lg p-6">
                                <h4 className="text-indigo-800 font-semibold mb-2 flex items-center">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Nutzen vor Produkt erklären
                                </h4>
                                <p className="text-gray-700">
                                    "Deine Haut braucht mehr Feuchtigkeit" kommt vor "Ich empfehle diese Creme".
                                    Erst das Problem, dann die Lösung.
                                </p>
                            </div>

                            <div className="border border-indigo-200 rounded-lg p-6">
                                <h4 className="text-indigo-800 font-semibold mb-2 flex items-center">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Maximal 3 Produkte empfehlen
                                </h4>
                                <p className="text-gray-700">
                                    Zu viele Optionen überfordern. Konzentriere dich auf die 2-3 wichtigsten Produkte
                                    für ihre Hautbedürfnisse.
                                </p>
                            </div>

                            <div className="border border-indigo-200 rounded-lg p-6">
                                <h4 className="text-indigo-800 font-semibold mb-2 flex items-center">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                                    Produkt erlebbar machen
                                </h4>
                                <p className="text-gray-700">
                                    Lass sie riechen, fühlen, testen. "Spürst du, wie schnell das einzieht?"
                                    Sinnliche Erfahrungen verkaufen besser als Worte.
                                </p>
                            </div>

                            <div className="border border-indigo-200 rounded-lg p-6">
                                <h4 className="text-indigo-800 font-semibold mb-2 flex items-center">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">5</span>
                                    Anwendung genau erklären
                                </h4>
                                <p className="text-gray-700">
                                    "Morgens nach der Reinigung, etwa eine Erbsengröße..." Je präziser die Anleitung,
                                    desto erfolgreicher die Anwendung.
                                </p>
                            </div>

                            <div className="border border-indigo-200 rounded-lg p-6">
                                <h4 className="text-indigo-800 font-semibold mb-2 flex items-center">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">6</span>
                                    Ergebnisse zeitlich einordnen
                                </h4>
                                <p className="text-gray-700">
                                    "Nach 2 Wochen siehst du erste Verbesserungen, nach 6 Wochen das volle Ergebnis."
                                    Realistische Erwartungen schaffen Zufriedenheit.
                                </p>
                            </div>

                            <div className="border border-indigo-200 rounded-lg p-6">
                                <h4 className="text-indigo-800 font-semibold mb-2 flex items-center">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">7</span>
                                    Nachkauf-Service anbieten
                                </h4>
                                <p className="text-gray-700">
                                    "Ich merke mir, was du gekauft hast. In 2 Monaten melde ich mich für den Nachkauf."
                                    Proaktiver Service sichert Folgeverkäufe.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Häufige Verkaufsfehler vermeiden</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #1: Zu früh verkaufen
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Produktempfehlung bereits während der Behandlung aussprechen.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Erst nach der Behandlung, wenn die Kundin entspannt ist und du ihre Haut analysiert hast.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #2: Zu viele Optionen
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> "Du könntest das nehmen, oder das, oder vielleicht auch das hier..."
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Klare Empfehlung aussprechen: "Für deine Haut ist das hier perfekt."
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #3: Nur über Preis sprechen
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> "Das kostet 45€" ohne Nutzen zu erklären.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Wert kommunizieren: "Für 45€ bekommst du 3 Monate perfekte Hautpflege."
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Einwandbehandlung wie ein Profi</h2>

                        <div className="bg-blue-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-blue-900 mb-4">🗣️ Die häufigsten Einwände und perfekte Antworten:</h4>

                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                                    <p className="text-red-700 font-medium mb-2">"Das ist mir zu teuer."</p>
                                    <p className="text-blue-800 text-sm">
                                        "Ich verstehe das. Lass uns rechnen: 45€ für 3 Monate sind 50 Cent pro Tag.
                                        Weniger als ein Kaffee für perfekte Hautpflege."
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                                    <p className="text-red-700 font-medium mb-2">"Ich habe schon so viele Produkte zu Hause."</p>
                                    <p className="text-blue-800 text-sm">
                                        "Das kenne ich! Aber passen sie zu deinem Hauttyp? Falsche Produkte können mehr schaden als helfen.
                                        Das hier ist speziell für deine Bedürfnisse ausgewählt."
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                                    <p className="text-red-700 font-medium mb-2">"Ich muss erst mit meinem Partner sprechen."</p>
                                    <p className="text-blue-800 text-sm">
                                        "Natürlich, das verstehe ich. Ich lege dir eins zur Seite. Du kannst auch gerne
                                        erst eine kleinere Größe probieren."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Digitale Unterstützung für mehr Verkaufserfolg</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Moderne Tools können deinen Produktverkauf erheblich steigern. Hier die wichtigsten digitalen Helfer:
                        </p>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">🚀 Produktverkauf mit Treatflow optimieren:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Digitale Kundenkartei mit Kaufhistorie</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Behandlungsdokumentation mit Produktempfehlungen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Online-Terminkalender für Beratungstermine</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Formular-Generator für Produktberatungs-Bögen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Online-Buchung mit Produktberatungs-Terminen</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Erfolgsmessung: Diese KPIs solltest du tracken</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-2">📊 Verkaufsrate</h4>
                                <p className="text-green-800 text-sm mb-2">
                                    <strong>Ziel:</strong> 60-80% der Kundinnen kaufen mindestens ein Produkt
                                </p>
                                <p className="text-green-700 text-xs">
                                    Formel: (Verkäufe / Behandlungen) × 100
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-2">💰 Durchschnittlicher Produktumsatz</h4>
                                <p className="text-blue-800 text-sm mb-2">
                                    <strong>Ziel:</strong> 25-35€ pro verkaufender Kundin
                                </p>
                                <p className="text-blue-700 text-xs">
                                    Formel: Produktumsatz / Anzahl Verkäufe
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-2">🔄 Nachkaufrate</h4>
                                <p className="text-purple-800 text-sm mb-2">
                                    <strong>Ziel:</strong> 70% kaufen das gleiche Produkt nach
                                </p>
                                <p className="text-purple-700 text-xs">
                                    Zeigt Kundenzufriedenheit und Produktqualität
                                </p>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-orange-900 mb-2">📈 Umsatzanteil Produkte</h4>
                                <p className="text-orange-800 text-sm mb-2">
                                    <strong>Ziel:</strong> 25-40% des Gesamtumsatzes
                                </p>
                                <p className="text-orange-700 text-xs">
                                    Zeigt die Profitabilität deines Studios
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Produktverkauf als Umsatzturbo</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Produktverkauf ist kein "netter Zusatz", sondern ein essentieller Baustein für ein profitables Kosmetikstudio.
                            Mit der richtigen Strategie, den passenden Produkten und professioneller Beratung kannst du deinen Umsatz
                            um 25-40% steigern.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Wichtig ist: Verkaufe nicht um des Verkaufens willen, sondern weil du deinen Kundinnen wirklich helfen willst.
                            Authentizität und Expertise sind die Grundlagen für langfristigen Verkaufserfolg.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">💰 Starte deinen Produktverkauf-Erfolg!</h3>
                            <p className="mb-6 text-indigo-100">
                                Treatflow hilft dir dabei, Produktverkäufe professionell zu managen. Mit digitaler Kundenkartei,
                                Behandlungsdokumentation und Online-Terminkalender - alles in einem System.
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
                                <Link
                                    href="/shop"
                                    className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                                >
                                    Mehr zum Shop-System
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
                                        const text = 'Zusatzumsatz generieren: Der ultimative Guide für Produktverkäufe - Treatflow Blog';
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
                                        const text = 'Zusatzumsatz generieren: Der ultimative Guide für Produktverkäufe';
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
