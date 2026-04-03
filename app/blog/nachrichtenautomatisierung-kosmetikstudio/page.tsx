import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Share2, MessageCircle, CheckCircle, Mail, Bell, Zap, TrendingUp, Users, Heart } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Nachrichtenautomatisierung: Weniger No-Shows',
    description: 'Automatische Terminerinnerungen, Follow-ups und Geburtstagswünsche reduzieren No-Shows um 80% und steigern die Kundenbindung.',
    keywords: [
        'Nachrichtenautomatisierung Kosmetikstudio',
        'Automatische Terminerinnerungen',
        'No-Shows reduzieren',
        'Follow-up E-Mails Beauty',
        'Geburtstagswünsche automatisch',
        'Kundenbindung Kosmetikstudio',
        'E-Mail Marketing Beauty',
        'Terminausfälle vermeiden',
        'Kosmetikstudio Software',
        'Automatisierte Kundenkommunikation'
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/nachrichtenautomatisierung-kosmetikstudio',
    },
    openGraph: {
        title: 'Nachrichtenautomatisierung: 80% weniger No-Shows',
        description: 'Automatische Terminerinnerungen, Follow-ups und Geburtstagswünsche reduzieren No-Shows um 80% und steigern die Kundenbindung.',
        url: 'https://www.treatflow.io/blog/nachrichtenautomatisierung-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/no-shows.png',
                width: 1200,
                height: 630,
                alt: 'Nachrichtenautomatisierung für Kosmetikstudios - Automatische Erinnerungen und Follow-ups',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-01-20T10:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Automatisierung',
        tags: ['Automatisierung', 'Kundenkommunikation', 'No-Shows', 'E-Mail Marketing'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nachrichtenautomatisierung: 80% weniger No-Shows',
        description: 'Automatische Terminerinnerungen, Follow-ups und Geburtstagswünsche für mehr Kundenbindung.',
        images: ['/images/blog/no-shows.png'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Nachrichtenautomatisierung im Kosmetikstudio: 80% weniger No-Shows durch automatische Erinnerungen",
        "description": "Automatische Terminerinnerungen, Follow-ups und Geburtstagswünsche reduzieren No-Shows um 80% und steigern die Kundenbindung. So funktioniert moderne Kundenkommunikation.",
        "image": "https://www.treatflow.io/images/blog/No-Shows.png",
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
        "datePublished": "2024-01-20T10:00:00.000Z",
        "dateModified": "2024-01-20T10:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/nachrichtenautomatisierung-kosmetikstudio"
        },
        "articleSection": "Automatisierung",
        "keywords": "Nachrichtenautomatisierung Kosmetikstudio, Automatische Terminerinnerungen, No-Shows reduzieren",
        "wordCount": 2200,
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Blog', href: '/blog' },
                    { label: 'Nachrichtenautomatisierung: Weniger No-Shows' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Nachrichtenautomatisierung: Weniger No-Shows' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                                Automatisierung
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                20. Januar 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                8 Min. Lesezeit
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Nachrichtenautomatisierung im Kosmetikstudio: 80% weniger No-Shows durch automatische Erinnerungen
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Terminausfälle sind ein teures Problem für jedes Kosmetikstudio. Erfahre, wie automatische
                            Nachrichten No-Shows drastisch reduzieren und gleichzeitig die Kundenbindung stärken.
                        </p>

                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-4">Teilen:</span>
                                <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                    <Share2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <img
                        src="/images/blog/no-shows.png"
                        alt="Nachrichtenautomatisierung für Kosmetikstudios - Automatische Erinnerungen und Follow-ups"
                        className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg mb-12"
                    />

                    <div className="prose prose-lg max-w-none">

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-bold text-red-900 mb-2">Das Problem kennt jeder Studio-Inhaber:</h3>
                            <p className="text-red-800 mb-0">
                                Ein Kunde sagt kurzfristig ab oder erscheint gar nicht erst zum Termin. Der Zeitslot bleibt leer,
                                der Umsatz fällt weg und oft ist es zu spät, um den Termin anderweitig zu vergeben.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            No-Shows: Ein teures Problem für Kosmetikstudios
                        </h2>

                        <p className="text-lg text-gray-700 mb-6">
                            Studien zeigen, dass in der Beauty-Branche durchschnittlich 20-30% aller gebuchten Termine
                            ausfallen. Ein Beispiel: Bei 10 geplanten Terminen pro Woche à 80€ fallen 2-3 Termine aus.
                            Das entspricht einem Umsatzverlust von 160-240€ pro Woche - oder über 8.000€ im Jahr.
                        </p>

                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Warum Kunden Termine verpassen:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    <span>Sie vergessen den Termin schlichtweg</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    <span>Unvorhergesehene Ereignisse kommen dazwischen</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    <span>Sie sind unsicher über Details wie Uhrzeit oder Vorbereitung</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                    <span>Schlechte Erfahrungen oder mangelnde Bindung zum Studio</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Die Lösung: Intelligente Nachrichtenautomatisierung
                        </h2>

                        <p className="text-lg text-gray-700 mb-6">
                            Moderne Kosmetikstudios setzen auf automatisierte Kundenkommunikation, um diese Probleme
                            zu lösen. Drei Arten von automatischen Nachrichten haben sich als besonders effektiv erwiesen:
                        </p>

                        <div className="space-y-8 mb-12">

                            {/* Feature 1 */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Automatische Terminerinnerungen</h3>
                                        <p className="text-orange-700 font-medium">Der wichtigste Baustein gegen No-Shows</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    Erinnerungen werden automatisch 24-48 Stunden vor dem Termin versendet und enthalten
                                    alle wichtigen Informationen: Behandlungsart, Uhrzeit, Adresse und spezielle Hinweise.
                                </p>

                                <div className="bg-white rounded-lg p-4 border border-orange-200 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Beispiel einer effektiven Erinnerung:</h4>
                                    <p className="text-sm text-gray-700 italic">
                                        "Liebe Frau Müller, wir freuen uns auf Ihren Termin morgen um 14:00 Uhr
                                        für eine Anti-Aging Gesichtsbehandlung. Bitte kommen Sie ungeschminkt.
                                        Bei Fragen erreichen Sie uns unter 0123/456789. Ihr Beauty Studio Team"
                                    </p>
                                </div>

                                <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                                    <p className="text-green-800 font-medium mb-0">
                                        ✅ Studien zeigen: Automatische Erinnerungen reduzieren No-Shows um 60-80%
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Follow-up Nachrichten</h3>
                                        <p className="text-blue-700 font-medium">Kundenzufriedenheit und Zusatzumsätze steigern</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    Nach jeder Behandlung erhalten Kunden automatisch eine persönliche Nachricht mit
                                    Pflegetipps, der Bitte um Feedback und Angeboten für Folgebehandlungen.
                                </p>

                                <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Beispiel Follow-up:</h4>
                                    <p className="text-sm text-gray-700 italic">
                                        "Liebe Frau Müller, wie hat Ihnen Ihre Gesichtsbehandlung gestern gefallen?
                                        Für optimale Ergebnisse empfehlen wir die nächsten 24h auf Make-up zu verzichten.
                                        Für langanhaltende Effekte vereinbaren Sie gerne Ihren nächsten Termin in 4 Wochen."
                                    </p>
                                </div>

                                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                                    <p className="text-blue-800 font-medium mb-0">
                                        ✅ Ergebnis: 35% mehr Folgebuchungen durch gezielte Follow-up Kommunikation
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                        <Heart className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Geburtstagswünsche & Anlässe</h3>
                                        <p className="text-pink-700 font-medium">Persönliche Bindung aufbauen</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    Automatische Geburtstagswünsche mit exklusiven Angeboten zeigen Wertschätzung
                                    und generieren zusätzliche Buchungen zu besonderen Anlässen.
                                </p>

                                <div className="bg-white rounded-lg p-4 border border-pink-200 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Beispiel Geburtstagswunsch:</h4>
                                    <p className="text-sm text-gray-700 italic">
                                        "Herzlichen Glückwunsch zum Geburtstag, liebe Frau Müller! Als kleines
                                        Geschenk erhalten Sie 20% Rabatt auf alle Behandlungen im Geburtsmonat.
                                        Lassen Sie sich verwöhnen - Sie haben es sich verdient!"
                                    </p>
                                </div>

                                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
                                    <p className="text-purple-800 font-medium mb-0">
                                        ✅ Effekt: 15% höhere Kundenbindung und zusätzlicher Umsatz durch Anlass-Marketing
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Die messbaren Ergebnisse
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                                <div className="text-green-800 font-medium mb-1">Weniger No-Shows</div>
                                <div className="text-sm text-green-700">Durch rechtzeitige Erinnerungen</div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
                                <div className="text-blue-800 font-medium mb-1">Mehr Folgebuchungen</div>
                                <div className="text-sm text-blue-700">Durch gezielte Follow-ups</div>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
                                <div className="text-purple-800 font-medium mb-1">Höhere Kundenzufriedenheit</div>
                                <div className="text-sm text-purple-700">Durch persönliche Betreuung</div>
                            </div>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">20%</div>
                                <div className="text-orange-800 font-medium mb-1">Zeitersparnis</div>
                                <div className="text-sm text-orange-700">Weniger manuelle Kommunikation</div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Worauf du bei der Umsetzung achten solltest
                        </h2>

                        <div className="space-y-6 mb-8">
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                                <h3 className="text-lg font-bold text-blue-900 mb-2">💡 Timing ist entscheidend</h3>
                                <p className="text-blue-800">
                                    Erinnerungen sollten 24-48 Stunden vor dem Termin versendet werden. Das ist früh genug
                                    für Umplanungen, aber nicht so früh, dass der Termin wieder vergessen wird.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6">
                                <h3 className="text-lg font-bold text-green-900 mb-2">💡 Personalisierung macht den Unterschied</h3>
                                <p className="text-green-800">
                                    Verwende den Namen der Kundin, die spezifische Behandlung und persönliche Details.
                                    Automatisch bedeutet nicht unpersönlich.
                                </p>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                                <h3 className="text-lg font-bold text-purple-900 mb-2">💡 Mehrwert in jeder Nachricht</h3>
                                <p className="text-purple-800">
                                    Jede automatische Nachricht sollte einen Nutzen haben: Erinnerung, Pflegetipp,
                                    exklusives Angebot oder wichtige Information.
                                </p>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                                <h3 className="text-lg font-bold text-orange-900 mb-2">💡 Frequenz beachten</h3>
                                <p className="text-orange-800">
                                    Zu viele Nachrichten nerven, zu wenige sind ineffektiv. Finde die richtige Balance
                                    für deine Kundschaft und teste verschiedene Ansätze.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Technische Umsetzung: Diese Optionen hast du
                        </h2>

                        <p className="text-lg text-gray-700 mb-6">
                            Für die Umsetzung von Nachrichtenautomatisierung gibt es verschiedene Ansätze,
                            von einfachen E-Mail-Tools bis hin zu integrierten Praxissoftware-Lösungen:
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="border border-gray-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">E-Mail Marketing Tools</h3>
                                <p className="text-gray-700 mb-3">
                                    Tools wie Mailchimp oder CleverReach bieten Automatisierungsfunktionen.
                                    Erfordern jedoch manuelle Datenpflege und sind nicht mit der Terminverwaltung verbunden.
                                </p>
                                <div className="flex items-center text-sm">
                                    <span className="text-green-600 mr-2">✅ Günstig</span>
                                    <span className="text-red-600 mr-2">❌ Aufwendig</span>
                                    <span className="text-red-600">❌ Nicht integriert</span>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrierte Praxissoftware</h3>
                                <p className="text-gray-700 mb-3">
                                    Moderne Kosmetikstudio-Software bietet Nachrichtenautomatisierung als integrierte
                                    Funktion. Alle Daten sind automatisch verfügbar und synchronisiert.
                                </p>
                                <div className="flex items-center text-sm">
                                    <span className="text-green-600 mr-2">✅ Vollautomatisch</span>
                                    <span className="text-green-600 mr-2">✅ Integriert</span>
                                    <span className="text-green-600">✅ Personalisiert</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Fazit: Automatisierung als Wettbewerbsvorteil
                        </h2>

                        <p className="text-lg text-gray-700 mb-6">
                            Nachrichtenautomatisierung ist längst kein "Nice-to-have" mehr, sondern ein entscheidender
                            Wettbewerbsvorteil. Studios, die ihre Kundenkommunikation automatisieren, haben messbar
                            weniger Ausfälle, zufriedenere Kunden und höhere Umsätze.
                        </p>

                        <p className="text-lg text-gray-700 mb-8">
                            Der Schlüssel liegt in der intelligenten Kombination aus Automatisierung und Personalisierung.
                            Deine Kunden sollen spüren, dass sie geschätzt werden - auch wenn die Nachricht automatisch
                            versendet wurde.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bereit für automatisierte Kundenkommunikation?</h3>
                            <p className="text-gray-700 mb-6">
                                Moderne Kosmetikstudio-Software wie Treatflow bietet alle diese Automatisierungsfunktionen
                                bereits integriert. So kannst du dich auf das konzentrieren, was wirklich zählt:
                                deine Kunden zu verwöhnen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://app.treatflow.io/auth/register"
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                                >
                                    Jetzt kostenlos testen
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="/nachrichtenautomatisierung"
                                    className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
                                >
                                    Mehr über Treatflow erfahren
                                </Link>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ähnliche Artikel</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Link href="/blog/online-buchungssystem-vorteile" className="group">
                                    <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                                            Online-Buchungssystem: 30% mehr Termine durch 24/7 Verfügbarkeit
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Entdecke, wie ein Online-Buchungssystem dein Kosmetikstudio revolutioniert...
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/blog/kundenbindung-kosmetikstudio-5-strategien" className="group">
                                    <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                                            5 bewährte Strategien für mehr Kundenbindung
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Lerne die wichtigsten Strategien für langfristige Kundenbindung...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            {/* Verwandte Seiten */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/sms-erinnerungen-kosmetikstudio', title: 'SMS-Erinnerungen', desc: 'Automatische Erinnerungen per SMS' },
                            { href: '/nachrichtenautomatisierung', title: 'Nachrichtenautomatisierung', desc: 'Alle automatischen Nachrichten' },
                        ].map((link, i) => (
                            <Link key={i} href={link.href} className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                                <div>
                                    <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block">{link.title}</span>
                                    <span className="text-sm text-gray-500">{link.desc}</span>
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}