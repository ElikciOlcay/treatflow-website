import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Eye, CheckCircle, AlertCircle } from 'lucide-react';


export const metadata: Metadata = {
    title: 'Professionelle Hautanalyse im Kosmetikstudio',
    description: 'Eine gründliche Hautanalyse ist die Basis jeder erfolgreichen Kosmetikbehandlung. 7-Schritte Prozess für professionelle Beratung und Kundenbindung.',
    keywords: ["Hautanalyse Kosmetik","Professionelle Hautberatung","Kosmetik Beratung","Hauttyp bestimmen","Beauty Consultation","Kosmetikstudio Beratung"],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/hautanalyse-beratung-kosmetikstudio',
    },
    openGraph: {
        title: 'Professionelle Hautanalyse für erfolgreiche Behandlungen',
        description: 'Eine gründliche Hautanalyse ist die Basis jeder erfolgreichen Kosmetikbehandlung. 7-Schritte Prozess für professionelle Beratung und Kundenbindung.',
        url: 'https://www.treatflow.io/blog/hautanalyse-beratung-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/hautanalyse-beratung.jpg',
                width: 1200,
                height: 630,
                alt: 'Professionelle Hautanalyse: Der Schlüssel zu erfolgreichen Behandlungen',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-12T09:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Fachkompetenz',
        tags: ["Hautanalyse Kosmetik","Professionelle Hautberatung","Kosmetik Beratung","Hauttyp bestimmen"],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Professionelle Hautanalyse für erfolgreiche Behandlungen',
        description: 'Eine gründliche Hautanalyse ist die Basis jeder erfolgreichen Kosmetikbehandlung. 7-Schritte Prozess für professionelle Beratung und Kundenbindung.',
        images: ['/images/blog/hautanalyse-beratung.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Professionelle Hautanalyse: Der Schlüssel zu erfolgreichen Behandlungen",
        "description": "Eine gründliche Hautanalyse ist die Basis jeder erfolgreichen Kosmetikbehandlung. 7-Schritte Prozess für professionelle Beratung und Kundenbindung.",
        "image": "https://www.treatflow.io/images/blog/hautanalyse-beratung.jpg",
        "author": {
            "@type": "Person",
            "name": "Olcay Elikci",
            "url": "https://www.treatflow.io/ueber-uns",
            "jobTitle": "Gründer von Treatflow",
            "worksFor": {
                "@type": "Organization",
                "name": "Treatflow"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "Treatflow",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg"
            }
        },
        "datePublished": "2024-12-12T09:00:00.000Z",
        "dateModified": "2024-12-12T09:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/hautanalyse-beratung-kosmetikstudio"
        },
        "articleSection": "Fachkompetenz",
        "keywords": "Hautanalyse Kosmetik, Professionelle Hautberatung, Kosmetik Beratung, Hauttyp bestimmen, Beauty Consultation, Kosmetikstudio Beratung",
        "wordCount": 1800,
        "timeRequired": "PT8M",
        "inLanguage": "de-DE",
        "isAccessibleForFree": true
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
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
                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                                Fachkompetenz
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                12. Dezember 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                8 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Professionelle Hautanalyse: Der Schlüssel zu erfolgreichen Behandlungen
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Eine gründliche Hautanalyse ist die Basis jeder erfolgreichen Kosmetikbehandlung.
                            So führst du sie professionell durch und überzeugst deine Kundinnen.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/hautanalyse-beratung.jpg"
                                alt="Professionelle Hautanalyse im Kosmetikstudio - Beratung und Diagnose"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-purple-900 mb-2 flex items-center">
                                <Eye className="h-5 w-5 mr-2" />
                                Warum Hautanalyse so wichtig ist
                            </h3>
                            <p className="text-purple-800 mb-0">
                                <strong>85% der Behandlungsfehler entstehen durch unzureichende Hautanalyse.</strong>
                                Eine professionelle Analyse ist nicht nur fachlich korrekt, sondern auch der beste Weg,
                                Vertrauen aufzubauen und höhere Preise zu rechtfertigen.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Jede Haut ist einzigartig - und genau das sollte sich in deiner Beratung widerspiegeln.
                            Eine oberflächliche Betrachtung reicht nicht aus, um optimale Behandlungsergebnisse zu erzielen.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            In diesem Guide lernst du, wie du eine systematische Hautanalyse durchführst, die richtigen
                            Fragen stellst und deine Expertise professionell kommunizierst.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Die 7-Schritte Hautanalyse</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Anamnese-Gespräch
                                </h4>
                                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                    <h5 className="font-medium text-blue-900 mb-2">Wichtige Fragen:</h5>
                                    <ul className="text-blue-800 text-sm space-y-1">
                                        <li>• Welche Hautpflegeprodukte verwendest du aktuell?</li>
                                        <li>• Hattest du schon mal Hautprobleme oder Allergien?</li>
                                        <li>• Nimmst du Medikamente oder Hormone?</li>
                                        <li>• Wie reagiert deine Haut auf Sonne?</li>
                                        <li>• Was stört dich am meisten an deiner Haut?</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Visuelle Inspektion
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-2">Zu beachten:</h5>
                                        <ul className="text-blue-800 text-sm space-y-1">
                                            <li>• Hautfarbe und Pigmentierung</li>
                                            <li>• Porengröße und -verteilung</li>
                                            <li>• Unreinheiten und Mitesser</li>
                                            <li>• Rötungen und Irritationen</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-2">Alterszeichen:</h5>
                                        <ul className="text-blue-800 text-sm space-y-1">
                                            <li>• Feine Linien und Falten</li>
                                            <li>• Elastizitätsverlust</li>
                                            <li>• Pigmentflecken</li>
                                            <li>• Hautdichte und -struktur</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Tastuntersuchung
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Mit sauberen Händen die Haut abtasten und auf Folgendes achten:
                                </p>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <ul className="text-yellow-800 text-sm space-y-1">
                                        <li>• <strong>Hautdicke:</strong> Dünn, normal oder verdickt?</li>
                                        <li>• <strong>Elastizität:</strong> Schnellt die Haut zurück?</li>
                                        <li>• <strong>Feuchtigkeit:</strong> Trocken, normal oder fettig?</li>
                                        <li>• <strong>Temperatur:</strong> Warme oder kühle Hautpartien?</li>
                                        <li>• <strong>Verhärtungen:</strong> Knötchen oder Unebenheiten?</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                                    Hauttyp-Bestimmung
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h5 className="font-medium text-green-900 mb-2">Normale Haut</h5>
                                        <p className="text-green-800 text-sm">Ausgewogene Talgproduktion, kleine Poren, glatter Teint</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h5 className="font-medium text-blue-900 mb-2">Trockene Haut</h5>
                                        <p className="text-blue-800 text-sm">Wenig Talg, kleine Poren, Spannungsgefühl, Schuppung</p>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h5 className="font-medium text-orange-900 mb-2">Fettige Haut</h5>
                                        <p className="text-orange-800 text-sm">Viel Talg, große Poren, Glanz, Neigung zu Unreinheiten</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h5 className="font-medium text-purple-900 mb-2">Mischhaut</h5>
                                        <p className="text-purple-800 text-sm">T-Zone fettig, Wangen normal bis trocken</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                                    Hautzustand analysieren
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Der Hautzustand kann sich ändern - im Gegensatz zum Hauttyp:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <AlertCircle className="h-4 w-4 text-red-500 mr-3" />
                                        <span className="text-gray-700 text-sm"><strong>Dehydriert:</strong> Wassermangel, feine Trockenheitsfältchen</span>
                                    </div>
                                    <div className="flex items-center">
                                        <AlertCircle className="h-4 w-4 text-orange-500 mr-3" />
                                        <span className="text-gray-700 text-sm"><strong>Sensibel:</strong> Rötungen, Brennen, Juckreiz</span>
                                    </div>
                                    <div className="flex items-center">
                                        <AlertCircle className="h-4 w-4 text-yellow-500 mr-3" />
                                        <span className="text-gray-700 text-sm"><strong>Unrein:</strong> Mitesser, Pickel, Entzündungen</span>
                                    </div>
                                    <div className="flex items-center">
                                        <AlertCircle className="h-4 w-4 text-purple-500 mr-3" />
                                        <span className="text-gray-700 text-sm"><strong>Reif:</strong> Falten, Elastizitätsverlust, Pigmentflecken</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                                    Technische Hilfsmittel nutzen
                                </h4>
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-indigo-900 mb-2">Moderne Analysegeräte:</h5>
                                    <ul className="text-indigo-800 text-sm space-y-1">
                                        <li>• <strong>Hautanalysegerät:</strong> Misst Feuchtigkeit, Talg und pH-Wert</li>
                                        <li>• <strong>Wood-Lampe:</strong> Zeigt Pigmentierungen und Unreinheiten</li>
                                        <li>• <strong>Digitalmikroskop:</strong> Vergrößerte Hautstruktur-Analyse</li>
                                        <li>• <strong>Hautkamera:</strong> Dokumentation für Verlaufskontrollen</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-blue-200 rounded-lg p-6">
                                <h4 className="text-blue-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                                    Dokumentation und Beratung
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Alle Erkenntnisse systematisch festhalten und der Kundin verständlich erklären. Eine professionelle <Link href="/kundenverwaltung" className="text-indigo-600 underline hover:text-indigo-800">Kundenverwaltung</Link> hilft dir dabei, alle Daten übersichtlich zu speichern.
                                </p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-green-900 mb-2">Dokumentiere immer:</h5>
                                    <ul className="text-green-800 text-sm space-y-1">
                                        <li>• Hauttyp und aktueller Hautzustand</li>
                                        <li>• Besonderheiten und Problemzonen</li>
                                        <li>• Behandlungsempfehlungen</li>
                                        <li>• Heimpflege-Empfehlungen</li>
                                        <li>• Fotos (mit Einverständnis)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Häufige Analyse-Fehler vermeiden</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #1: Zu oberflächliche Betrachtung
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Nur kurzer Blick auf die Haut, keine systematische Analyse.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Nimm dir mindestens 10-15 Minuten Zeit für eine gründliche Analyse.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #2: Vorschnelle Schlüsse
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Behandlung festlegen, bevor die Analyse abgeschlossen ist.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Erst analysieren, dann beraten und behandeln.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    Fehler #3: Unzureichende Dokumentation
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Erkenntnisse nicht festhalten, beim nächsten Termin alles vergessen.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Digitale Kundenkarten mit detaillierter Hautanalyse führen - am besten mit einer professionellen <Link href="/behandlungsdokumentation" className="underline hover:text-indigo-600">Behandlungsdokumentation</Link>.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Beratungsgespräch professionell führen</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die beste Analyse nützt nichts, wenn du sie nicht verständlich kommunizierst.
                            So führst du ein überzeugendes Beratungsgespräch:
                        </p>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">💬 Gesprächsleitfaden:</h4>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                                    <div>
                                        <strong className="text-indigo-900">Befunde erklären</strong>
                                        <p className="text-indigo-800 text-sm">"Ihre Haut ist grundsätzlich normal, zeigt aber Zeichen von Dehydrierung..."</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                                    <div>
                                        <strong className="text-indigo-900">Ursachen aufzeigen</strong>
                                        <p className="text-indigo-800 text-sm">"Das liegt wahrscheinlich an der trockenen Heizungsluft und zu wenig Wasserzufuhr..."</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                                    <div>
                                        <strong className="text-indigo-900">Lösungen anbieten</strong>
                                        <p className="text-indigo-800 text-sm">"Mit einer Feuchtigkeitsbehandlung und der richtigen Heimpflege..."</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                                    <div>
                                        <strong className="text-indigo-900">Ergebnisse prognostizieren</strong>
                                        <p className="text-indigo-800 text-sm">"Nach 4 Wochen sollten Sie deutliche Verbesserungen sehen..."</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Digitale Hautanalyse mit Treatflow</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Moderne Software unterstützt dich bei der systematischen Hautanalyse und sorgt für
                            professionelle Dokumentation.
                        </p>

                        <div className="bg-purple-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-purple-900 mb-4">🔬 Hautanalyse-Features in Treatflow:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Digitale <Link href="/formulare" className="underline hover:text-indigo-600">Anamnese-Bögen</Link> mit vordefinierten Fragen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Hauttyp- und Hautzustand-Katalog</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Foto-Dokumentation mit Verlaufsvergleich</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Automatische Behandlungsempfehlungen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Heimpflege-Protokolle zum Ausdrucken</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Erinnerungen für Folgebehandlungen</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Expertise zeigen und Vertrauen schaffen</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Eine professionelle Hautanalyse ist dein wichtigstes Werkzeug als Kosmetikerin.
                            Sie zeigt deine Fachkompetenz, schafft Vertrauen und ist die Basis für erfolgreiche Behandlungen.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Investiere Zeit in eine gründliche Analyse - deine Kundinnen werden es zu schätzen wissen
                            und gerne für deine Expertise bezahlen.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">🔬 Professionelle Hautanalyse leicht gemacht!</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow dokumentierst du Hautanalysen systematisch und professionell.
                                Vorlagen, Foto-Verwaltung und automatische Empfehlungen inklusive.
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
                                    href="/behandlungsdokumentation"
                                    className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                                >
                                    Mehr zur Dokumentation
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
                                <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/hautanalyse-beratung-kosmetikstudio')}&text=${encodeURIComponent('Professionelle Hautanalyse: Der Schlüssel zu erfolgreichen Behandlungen - Treatflow Blog')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
            >
                <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Twitter
            </a>
                                <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/hautanalyse-beratung-kosmetikstudio')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm"
            >
                <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                LinkedIn
            </a>
                                <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/hautanalyse-beratung-kosmetikstudio')}&quote=${encodeURIComponent('Professionelle Hautanalyse: Der Schlüssel zu erfolgreichen Behandlungen')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
            >
                <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Facebook
            </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}

