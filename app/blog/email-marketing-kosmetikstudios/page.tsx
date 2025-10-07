import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Mail, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen | Treatflow Blog',
    description: 'Mit strategischem Email-Marketing holst du verlorene Kunden zurück und steigerst deinen Umsatz um bis zu 40%. So baust du eine erfolgreiche Email-Strategie auf.',
    keywords: ['Email-Marketing Kosmetik', 'Kundenbindung Email', 'Newsletter Kosmetikstudio', 'Kunden zurückgewinnen', 'Email-Kampagnen Beauty', 'Marketing Automation'],
    authors: [{ name: 'Treatflow Team' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/email-marketing-kosmetikstudios',
    },
    openGraph: {
        title: 'Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen',
        description: 'Mit strategischem Email-Marketing holst du verlorene Kunden zurück und steigerst deinen Umsatz um bis zu 40%.',
        url: 'https://www.treatflow.io/blog/email-marketing-kosmetikstudios',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/email-marketing-kosmetikstudios.jpg',
                width: 1200,
                height: 630,
                alt: 'Email-Marketing Strategien für Kosmetikstudios',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-15T12:00:00.000Z',
        authors: ['Treatflow Team'],
        section: 'Marketing',
        tags: ['Email-Marketing', 'Kundenbindung', 'Marketing', 'Kosmetikstudio'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen',
        description: 'Mit strategischem Email-Marketing holst du verlorene Kunden zurück und steigerst deinen Umsatz um bis zu 40%.',
        images: ['/images/blog/email-marketing-kosmetikstudios.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen",
        "description": "Mit strategischem Email-Marketing holst du verlorene Kunden zurück und steigerst deinen Umsatz um bis zu 40%. So baust du eine erfolgreiche Email-Strategie auf.",
        "image": "https://www.treatflow.io/images/blog/email-marketing-kosmetikstudios.jpg",
        "author": {
            "@type": "Organization",
            "name": "Treatflow Team",
            "url": "https://www.treatflow.io/ueber-uns"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Treatflow",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg"
            }
        },
        "datePublished": "2024-12-15T12:00:00.000Z",
        "dateModified": "2024-12-15T12:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/email-marketing-kosmetikstudios"
        },
        "articleSection": "Marketing",
        "keywords": "Email-Marketing Kosmetik, Kundenbindung Email, Newsletter Kosmetikstudio",
        "wordCount": 2200,
        "timeRequired": "PT10M",
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
                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                Marketing
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                15. Dezember 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                10 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Mit strategischem Email-Marketing holst du verlorene Kunden zurück und steigerst deinen Umsatz um bis zu 40%.
                            So baust du eine erfolgreiche Email-Strategie auf.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/email-marketing-kosmetikstudios.jpg"
                                alt="Email-Marketing für Kosmetikstudios - Newsletter und Kundenbindung"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                                <Mail className="h-5 w-5 mr-2" />
                                Warum Email-Marketing so kraftvoll ist
                            </h3>
                            <p className="text-blue-800 mb-0">
                                <strong>Email-Marketing hat einen ROI von 4200%</strong> - für jeden investierten Euro bekommst du 42€ zurück.
                                Kein anderer Marketing-Kanal ist so effektiv für Kosmetikstudios.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Die 5 wichtigsten Email-Typen für Kosmetikstudios</h2>

                        <div className="space-y-8 mb-12">
                            <div className="border border-blue-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Willkommens-Serie für Neukunden
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Die ersten 48 Stunden nach der Anmeldung sind entscheidend. Eine 3-teilige Willkommens-Serie
                                    baut Vertrauen auf und führt zu 320% mehr Umsatz.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-blue-900 mb-2">📧 Willkommens-Serie Aufbau:</h5>
                                    <ul className="text-blue-800 text-sm space-y-1">
                                        <li><strong>Email 1 (sofort):</strong> Herzlich Willkommen + Studio-Vorstellung</li>
                                        <li><strong>Email 2 (nach 24h):</strong> Deine Behandlungsphilosophie + Kundenstimmen</li>
                                        <li><strong>Email 3 (nach 48h):</strong> Exklusiver Neukunden-Rabatt (20%)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Reaktivierungs-Kampagnen
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Kunden, die 3+ Monate nicht da waren, brauchen einen besonderen Anreiz.
                                    Diese Emails holen 25% der "verlorenen" Kunden zurück.
                                </p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-green-900 mb-2">💌 Reaktivierungs-Strategie:</h5>
                                    <ul className="text-green-800 text-sm space-y-1">
                                        <li><strong>Betreff:</strong> "Wir vermissen dich, [Name]!"</li>
                                        <li><strong>Inhalt:</strong> Persönliche Nachricht + "Comeback-Angebot"</li>
                                        <li><strong>Anreiz:</strong> 30% Rabatt auf die nächste Behandlung</li>
                                        <li><strong>Timing:</strong> Nach 90 Tagen Inaktivität</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-purple-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Geburtstags- und Jubiläums-Emails
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Persönliche Anlässe haben eine Öffnungsrate von über 80%. Diese Emails fühlen sich wie
                                    ein Geschenk an und generieren hohe Conversion-Rates.
                                </p>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-purple-900 mb-2">🎉 Anlass-Emails:</h5>
                                    <ul className="text-purple-800 text-sm space-y-1">
                                        <li><strong>Geburtstag:</strong> "Alles Gute + 25% Geburtstags-Rabatt"</li>
                                        <li><strong>1-Jahr-Jubiläum:</strong> "Danke für deine Treue + Überraschung"</li>
                                        <li><strong>Jahrestag erste Behandlung:</strong> "Erinnerst du dich noch?"</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-orange-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                                    Nachbehandlungs-Follow-Up
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Nach jeder Behandlung sollte eine Follow-Up Email folgen. Das zeigt Professionalität
                                    und führt zu 60% mehr Folgebuchungen.
                                </p>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-orange-900 mb-2">💅 Follow-Up Sequence:</h5>
                                    <ul className="text-orange-800 text-sm space-y-1">
                                        <li><strong>Nach 24h:</strong> "Wie geht es deiner Haut?" + Pflegetipps</li>
                                        <li><strong>Nach 1 Woche:</strong> Produktempfehlungen für zuhause</li>
                                        <li><strong>Nach 4 Wochen:</strong> "Zeit für die nächste Behandlung?"</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                                    Saisonale Kampagnen
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Nutze Jahreszeiten und Feiertage für thematische Kampagnen. Diese Emails haben
                                    45% höhere Klickraten als Standard-Newsletter.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h5 className="font-medium text-red-900 mb-2">🌟 Saisonale Highlights:</h5>
                                    <ul className="text-red-800 text-sm space-y-1">
                                        <li><strong>Frühling:</strong> "Frühjahrskur für deine Haut"</li>
                                        <li><strong>Sommer:</strong> "Beach-Ready Behandlungen"</li>
                                        <li><strong>Herbst:</strong> "After-Summer Regeneration"</li>
                                        <li><strong>Winter:</strong> "Wellness-Verwöhn-Pakete"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Email-Listen aufbauen: Die besten Strategien</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-indigo-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-indigo-900 mb-4">💎 Lead-Magneten für Beauty-Studios:</h4>
                                <ul className="text-indigo-800 text-sm space-y-2">
                                    <li>• <strong>Hauttyp-Analyse:</strong> "Finde deinen perfekten Hauttyp"</li>
                                    <li>• <strong>Pflege-Guide:</strong> "10 Schritte zur perfekten Haut"</li>
                                    <li>• <strong>Seasonal Care:</strong> "Winterpflege-Programm"</li>
                                    <li>• <strong>Produkt-Guide:</strong> "Diese Produkte brauchst du wirklich"</li>
                                    <li>• <strong>Video-Serie:</strong> "5 Minuten täglich für schöne Haut"</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-4">🎯 Sammelpunkte für Email-Adressen:</h4>
                                <ul className="text-green-800 text-sm space-y-2">
                                    <li>• <strong>Website:</strong> Pop-Up nach 30 Sekunden</li>
                                    <li>• <strong>Social Media:</strong> "Link in Bio" zu Lead-Magnet</li>
                                    <li>• <strong>Im Studio:</strong> Tablet am Empfang</li>
                                    <li>• <strong>Nach Behandlung:</strong> "Bleib informiert über Neuigkeiten"</li>
                                    <li>• <strong>Events:</strong> Gewinnspiele und Verlosungen</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Betreffzeilen, die funktionieren</h2>

                        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-yellow-900 mb-4">⭐ Bewährte Betreffzeilen-Formeln:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-medium text-yellow-900 mb-2">Hohe Öffnungsraten:</h5>
                                    <ul className="text-yellow-800 text-sm space-y-1">
                                        <li>• "[Name], deine Haut braucht das jetzt"</li>
                                        <li>• "Nur noch 24h: Dein 30% Rabatt"</li>
                                        <li>• "Warum deine Haut im Winter leidet"</li>
                                        <li>• "Das passiert, wenn du nicht..."</li>
                                        <li>• "Geheimtipp von [Dein Name]"</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-yellow-900 mb-2">Hohe Klickraten:</h5>
                                    <ul className="text-yellow-800 text-sm space-y-1">
                                        <li>• "3 Fehler, die deine Haut altern lassen"</li>
                                        <li>• "Vorher/Nachher: Unglaubliche Ergebnisse"</li>
                                        <li>• "Schnell buchen: Nur noch 2 Termine frei"</li>
                                        <li>• "Neue Behandlung: 50% bessere Ergebnisse"</li>
                                        <li>• "Kundenfrage: Hilft XY wirklich?"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Häufige Email-Marketing Fehler vermeiden</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #1: Zu viele Emails senden
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Täglich oder mehrmals wöchentlich Emails senden nervt Kunden.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Maximal 1-2 Emails pro Woche. Qualität vor Quantität.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #2: Nur Werbung senden
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Jede Email ist ein Verkaufsversuch ohne Mehrwert.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> 80% Mehrwert (Tipps, Infos), 20% Verkauf. Die 80/20-Regel.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #3: Unpersönliche Massenmails
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> "Liebe Kundin" statt persönlicher Ansprache.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Namen verwenden + Segmentierung nach Behandlungstyp.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Email-Marketing Tools für Kosmetikstudios</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">📧 Mailchimp</h5>
                                <p className="text-gray-600 text-sm mb-2">Einsteigerfreundlich</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>• Kostenlos bis 2.000 Kontakte</li>
                                    <li>• Schöne Templates</li>
                                    <li>• Einfache Automatisierung</li>
                                </ul>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">⚡ ActiveCampaign</h5>
                                <p className="text-gray-600 text-sm mb-2">Für Profis</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>• Erweiterte Automatisierung</li>
                                    <li>• CRM integriert</li>
                                    <li>• Verhalten-basierte Trigger</li>
                                </ul>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">🚀 ConvertKit</h5>
                                <p className="text-gray-600 text-sm mb-2">Creator-fokussiert</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>• Einfache Segmentierung</li>
                                    <li>• Landing Pages</li>
                                    <li>• Tagging-System</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Email-Marketing mit Treatflow</h2>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">🚀 Treatflow unterstützt dein Email-Marketing:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Kundendaten zentral verwalten für Email-Listen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Behandlungshistorie für personalisierte Ansprache</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Terminkalender mit Online-Buchung verknüpfen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Kundenkartei mit Kontaktdaten und Notizen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Behandlungsdokumentation für Follow-Up Ideen</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Email-Marketing ist dein Umsatz-Booster</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Email-Marketing ist der direkteste Weg zu deinen Kunden. Mit den richtigen Strategien
                            holst du nicht nur verlorene Kunden zurück, sondern baust auch langfristige Beziehungen auf.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Starte klein: Sammle Email-Adressen, versende eine Willkommens-Serie und baue nach und nach
                            weitere Automatisierungen auf. Der Erfolg wird sich schnell zeigen.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">📧 Starte dein Email-Marketing!</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow hast du alle Kundendaten zentral verfügbar für dein Email-Marketing.
                                Online Kalender, Kundenkartei und Behandlungsdokumentation unterstützen deine Kampagnen.
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Email-Guide hilfreich?</h3>
                                <p className="text-gray-600">Teile ihn mit anderen Studio-Betreibern!</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/email-marketing-kosmetikstudios')}&text=${encodeURIComponent('Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen - Treatflow Blog')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Twitter
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/email-marketing-kosmetikstudios')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-700 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    LinkedIn
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/email-marketing-kosmetikstudios')}&quote=${encodeURIComponent('Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen')}`}
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
