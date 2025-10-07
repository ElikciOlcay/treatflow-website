import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Euro, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst | Treatflow Blog',
    description: 'Spare bis zu 40% Steuern mit der richtigen Buchhaltung. Alle Ausgaben, die du als Kosmetikstudio-Betreiberin absetzen kannst - plus praktische Tipps für den Alltag.',
    keywords: ['Kosmetikstudio Buchhaltung', 'Steuerliche Absetzbarkeit', 'Beauty Business Steuern', 'Kosmetik Betriebsausgaben', 'Steuerberatung Kosmetik', 'Buchhaltung Beauty Salon'],
    authors: [{ name: 'Treatflow Team' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/kosmetikstudio-buchhaltung-steuern',
    },
    openGraph: {
        title: 'Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst',
        description: 'Spare bis zu 40% Steuern mit der richtigen Buchhaltung. Alle Ausgaben, die du als Kosmetikstudio-Betreiberin absetzen kannst.',
        url: 'https://www.treatflow.io/blog/kosmetikstudio-buchhaltung-steuern',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/kosmetikstudio-buchhaltung.jpg',
                width: 1200,
                height: 630,
                alt: 'Kosmetikstudio Buchhaltung und Steuern',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-18T11:00:00.000Z',
        authors: ['Treatflow Team'],
        section: 'Business',
        tags: ['Buchhaltung', 'Steuern', 'Business', 'Kosmetikstudio'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst',
        description: 'Spare bis zu 40% Steuern mit der richtigen Buchhaltung. Alle Ausgaben für dein Kosmetikstudio.',
        images: ['/images/blog/kosmetikstudio-buchhaltung.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst",
        "description": "Spare bis zu 40% Steuern mit der richtigen Buchhaltung. Alle Ausgaben, die du als Kosmetikstudio-Betreiberin absetzen kannst - plus praktische Tipps für den Alltag.",
        "image": "https://www.treatflow.io/images/blog/kosmetikstudio-buchhaltung.jpg",
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
        "datePublished": "2024-12-18T11:00:00.000Z",
        "dateModified": "2024-12-18T11:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/kosmetikstudio-buchhaltung-steuern"
        },
        "articleSection": "Business",
        "keywords": "Kosmetikstudio Buchhaltung, Steuerliche Absetzbarkeit, Beauty Business Steuern",
        "wordCount": 2400,
        "timeRequired": "PT12M",
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
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                Business
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                18. Dezember 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                13 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Spare bis zu 40% Steuern mit der richtigen Buchhaltung. Alle Ausgaben, die du als Kosmetikstudio-Betreiberin
                            absetzen kannst - plus praktische Tipps für den Alltag.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/kosmetikstudio-buchhaltung.jpg"
                                alt="Buchhaltung für Kosmetikstudios - Steuerliche Absetzbarkeit und Finanzen"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center">
                                <Euro className="h-5 w-5 mr-2" />
                                Warum richtige Buchhaltung Gold wert ist
                            </h3>
                            <p className="text-green-800 mb-0">
                                <strong>Die meisten Kosmetikstudios verschenken 3.000-5.000€ pro Jahr</strong> durch falsche oder
                                unvollständige Buchhaltung. Mit den richtigen Abschreibungen sparst du richtig Geld!
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Betriebsausgaben: Was du alles absetzen kannst</h2>

                        <div className="space-y-8 mb-12">
                            <div className="border border-blue-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Geräte und Ausstattung (100% absetzbar)
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-2">🔧 Behandlungsgeräte:</h5>
                                        <ul className="text-blue-800 text-sm space-y-1">
                                            <li>• Mikrodermabrasion-Geräte</li>
                                            <li>• Ultraschall-Geräte</li>
                                            <li>• LED-Lichttherapie</li>
                                            <li>• Radiofrequenz-Geräte</li>
                                            <li>• Dampfgeräte & Bedampfer</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-2">🪑 Studio-Ausstattung:</h5>
                                        <ul className="text-blue-800 text-sm space-y-1">
                                            <li>• Behandlungsliegen</li>
                                            <li>• Rollwagen & Arbeitsplätze</li>
                                            <li>• Beleuchtung & Lupen</li>
                                            <li>• Klimaanlage & Luftreiniger</li>
                                            <li>• Empfangstresen & Möbel</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-blue-50 rounded">
                                    <p className="text-blue-900 text-sm">
                                        <strong>💡 Tipp:</strong> Geräte über 800€ müssen über mehrere Jahre abgeschrieben werden.
                                        Kleinere Anschaffungen können sofort komplett abgesetzt werden.
                                    </p>
                                </div>
                            </div>

                            <div className="border border-purple-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Verbrauchsmaterialien & Produkte
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-medium text-purple-900 mb-2">🧴 Behandlungsprodukte:</h5>
                                        <ul className="text-purple-800 text-sm space-y-1">
                                            <li>• Reinigungsprodukte</li>
                                            <li>• Peelings & Masken</li>
                                            <li>• Seren & Ampullen</li>
                                            <li>• Cremes & Öle</li>
                                            <li>• Desinfektionsmittel</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-purple-900 mb-2">🧽 Verbrauchsmaterial:</h5>
                                        <ul className="text-purple-800 text-sm space-y-1">
                                            <li>• Handschuhe & Mundschutz</li>
                                            <li>• Wattepads & Kompressen</li>
                                            <li>• Einmalhandtücher</li>
                                            <li>• Hygieneartikel</li>
                                            <li>• Behandlungsunterlagen</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-purple-50 rounded">
                                    <p className="text-purple-900 text-sm">
                                        <strong>💰 Sparpotential:</strong> Durchschnittlich 2.000-4.000€ pro Jahr absetzbar.
                                        Sammle alle Belege - auch die kleinen!
                                    </p>
                                </div>
                            </div>

                            <div className="border border-orange-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Miete & Nebenkosten (Anteilig absetzbar)
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h5 className="font-medium text-orange-900 mb-2">🏠 Home-Studio (Häusliches Arbeitszimmer):</h5>
                                        <ul className="text-orange-800 text-sm space-y-1">
                                            <li>• <strong>Anteilige Miete:</strong> Nach Quadratmeter-Verhältnis</li>
                                            <li>• <strong>Nebenkosten:</strong> Strom, Heizung, Wasser (anteilig)</li>
                                            <li>• <strong>Internet & Telefon:</strong> Geschäftlicher Anteil</li>
                                            <li>• <strong>Versicherungen:</strong> Hausrat, Haftpflicht (anteilig)</li>
                                        </ul>
                                        <div className="mt-2 p-2 bg-orange-100 rounded text-xs text-orange-900">
                                            <strong>Beispiel:</strong> Studio = 20m², Wohnung = 80m² → 25% aller Kosten absetzbar
                                        </div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h5 className="font-medium text-orange-900 mb-2">🏢 Externes Studio:</h5>
                                        <ul className="text-orange-800 text-sm space-y-1">
                                            <li>• <strong>Komplette Miete:</strong> 100% absetzbar</li>
                                            <li>• <strong>Nebenkosten:</strong> Strom, Heizung, Reinigung</li>
                                            <li>• <strong>Renovierungskosten:</strong> Malerarbeiten, Böden</li>
                                            <li>• <strong>Sicherheit:</strong> Alarmanlage, Schlösser</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                                    Fahrtkosten & Mobilität
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-medium text-red-900 mb-2">🚗 Geschäftliche Fahrten:</h5>
                                        <ul className="text-red-800 text-sm space-y-1">
                                            <li>• <strong>Kundenbesuche:</strong> 0,30€ pro km</li>
                                            <li>• <strong>Einkaufsfahrten:</strong> Produkte, Geräte</li>
                                            <li>• <strong>Fortbildungen:</strong> Hin- und Rückfahrt</li>
                                            <li>• <strong>Messen & Events:</strong> Branchenveranstaltungen</li>
                                            <li>• <strong>Bank & Behörden:</strong> Geschäftstermine</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-red-900 mb-2">🚙 Fahrzeug-Kosten:</h5>
                                        <ul className="text-red-800 text-sm space-y-1">
                                            <li>• <strong>Benzin/Diesel:</strong> Geschäftlicher Anteil</li>
                                            <li>• <strong>Versicherung:</strong> Anteilig absetzbar</li>
                                            <li>• <strong>Reparaturen:</strong> Bei geschäftlicher Nutzung</li>
                                            <li>• <strong>TÜV & Wartung:</strong> Anteilig</li>
                                            <li>• <strong>Parkgebühren:</strong> Bei Geschäftsterminen</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-red-50 rounded">
                                    <p className="text-red-900 text-sm">
                                        <strong>📱 App-Tipp:</strong> Nutze Fahrtenbuch-Apps wie "Vimcar" oder führe ein handschriftliches Fahrtenbuch.
                                        Ohne Nachweis erkennt das Finanzamt nichts an!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Marketing & Werbung: Alles absetzbar!</h2>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">📢 Marketing-Ausgaben (100% absetzbar):</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-2">Online-Marketing:</h5>
                                    <ul className="text-indigo-800 text-sm space-y-1">
                                        <li>• Website-Erstellung & Pflege</li>
                                        <li>• Google Ads & Facebook Werbung</li>
                                        <li>• Social Media Tools (Hootsuite, etc.)</li>
                                        <li>• Email-Marketing Software</li>
                                        <li>• SEO-Tools & Analytics</li>
                                        <li>• Fotograf für Studio-Bilder</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-2">Offline-Marketing:</h5>
                                    <ul className="text-indigo-800 text-sm space-y-1">
                                        <li>• Flyer & Visitenkarten</li>
                                        <li>• Zeitungsanzeigen</li>
                                        <li>• Messestände & Events</li>
                                        <li>• Gewinnspiele & Aktionen</li>
                                        <li>• Kundengeschenke</li>
                                        <li>• Werbeartikel mit Logo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fortbildung & Weiterbildung</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-green-200 rounded-lg p-6">
                                <h4 className="text-green-800 font-semibold mb-4 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Absetzbare Fortbildungskosten
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-medium text-green-900 mb-2">📚 Kursgebühren:</h5>
                                        <ul className="text-green-800 text-sm space-y-1">
                                            <li>• Neue Behandlungsmethoden</li>
                                            <li>• Geräte-Schulungen</li>
                                            <li>• Business-Seminare</li>
                                            <li>• Online-Kurse</li>
                                            <li>• Zertifizierungen</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-green-900 mb-2">🏨 Reisekosten:</h5>
                                        <ul className="text-green-800 text-sm space-y-1">
                                            <li>• Hotel & Übernachtung</li>
                                            <li>• Anreise (Bahn, Flug, Auto)</li>
                                            <li>• Verpflegung (Pauschale)</li>
                                            <li>• Parkgebühren</li>
                                            <li>• Taxi zum Veranstaltungsort</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-yellow-200 rounded-lg p-6">
                                <h4 className="text-yellow-800 font-semibold mb-4">📖 Fachliteratur & Abonnements</h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <h6 className="font-medium text-yellow-900 mb-1">Fachzeitschriften:</h6>
                                        <ul className="text-yellow-800 text-xs space-y-1">
                                            <li>• Beauty Forum</li>
                                            <li>• Kosmetik International</li>
                                            <li>• Wellness Magazin</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium text-yellow-900 mb-1">Bücher:</h6>
                                        <ul className="text-yellow-800 text-xs space-y-1">
                                            <li>• Hautpflege-Ratgeber</li>
                                            <li>• Business-Bücher</li>
                                            <li>• Marketing-Guides</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium text-yellow-900 mb-1">Online-Abos:</h6>
                                        <ul className="text-yellow-800 text-xs space-y-1">
                                            <li>• Fach-Portale</li>
                                            <li>• E-Learning Plattformen</li>
                                            <li>• Branchen-Newsletter</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Versicherungen & Rechtliches</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-4">🛡️ Betriebsversicherungen:</h4>
                                <ul className="text-blue-800 text-sm space-y-2">
                                    <li>• <strong>Betriebshaftpflicht:</strong> Pflicht für jeden Betrieb</li>
                                    <li>• <strong>Berufshaftpflicht:</strong> Für Behandlungsfehler</li>
                                    <li>• <strong>Rechtsschutz:</strong> Geschäftlich</li>
                                    <li>• <strong>Cyber-Versicherung:</strong> Datenschutz & IT</li>
                                    <li>• <strong>Inhaltsversicherung:</strong> Geräte & Einrichtung</li>
                                </ul>
                                <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-900">
                                    <strong>💰 Kosten:</strong> Ca. 500-1.200€/Jahr - komplett absetzbar
                                </div>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-4">⚖️ Rechts- & Beratungskosten:</h4>
                                <ul className="text-purple-800 text-sm space-y-2">
                                    <li>• <strong>Steuerberater:</strong> Monatliche Beratung</li>
                                    <li>• <strong>Rechtsanwalt:</strong> Verträge, Abmahnungen</li>
                                    <li>• <strong>Notar:</strong> Geschäftsgründung</li>
                                    <li>• <strong>Wirtschaftsprüfer:</strong> Bei größeren Betrieben</li>
                                    <li>• <strong>Datenschutzbeauftragte:</strong> DSGVO-Compliance</li>
                                </ul>
                                <div className="mt-3 p-2 bg-purple-100 rounded text-xs text-purple-900">
                                    <strong>💡 Tipp:</strong> Auch die Erstberatung ist absetzbar!
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Häufige Fehler bei der Buchhaltung</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #1: Belege nicht sammeln
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Kleine Ausgaben (unter 10€) werden nicht dokumentiert.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Jeden Beleg sammeln! Auch der 3€ Parkschein ist absetzbar.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #2: Private und geschäftliche Ausgaben mischen
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Alles über ein Konto laufen lassen und später trennen wollen.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Separates Geschäftskonto + Geschäfts-Kreditkarte verwenden.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #3: Umsatzsteuer falsch handhaben
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Nicht wissen, ob man umsatzsteuerpflichtig ist oder nicht.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Ab 22.000€ Jahresumsatz ist man umsatzsteuerpflichtig. Steuerberater fragen!
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Digitale Buchhaltung: Tools & Software</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">💼 Lexoffice</h5>
                                <p className="text-gray-600 text-sm mb-2">Für Einsteiger</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>• Einfache Bedienung</li>
                                    <li>• Belege per App scannen</li>
                                    <li>• Umsatzsteuer-Voranmeldung</li>
                                    <li>• Ab 5,90€/Monat</li>
                                </ul>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">📊 DATEV</h5>
                                <p className="text-gray-600 text-sm mb-2">Für Profis</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>• Steuerberater-kompatibel</li>
                                    <li>• Alle Funktionen</li>
                                    <li>• Lohnbuchhaltung</li>
                                    <li>• Ab 15€/Monat</li>
                                </ul>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">⚡ sevDesk</h5>
                                <p className="text-gray-600 text-sm mb-2">Allrounder</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>• Banking integriert</li>
                                    <li>• Rechnungen & Angebote</li>
                                    <li>• Automatisierung</li>
                                    <li>• Ab 7,90€/Monat</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Buchhaltung mit Treatflow vereinfachen</h2>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">🚀 Treatflow hilft bei der Buchhaltung:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Terminkalender mit Online-Buchung für Umsatz-Tracking</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Kundenverwaltung mit Behandlungshistorie</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Behandlungsdokumentation für Nachweise</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Formularsystem für strukturierte Dokumentation</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Integrierter Shop für Produktverkäufe</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Geld sparen durch richtige Buchhaltung</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Eine ordentliche Buchhaltung ist keine lästige Pflicht, sondern dein bester Freund beim Steuern sparen.
                            Mit den richtigen Abschreibungen kannst du jährlich tausende Euro sparen.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Starte heute: Sammle alle Belege, führe ein Fahrtenbuch und nutze digitale Tools.
                            Dein zukünftiges Ich wird dir dankbar sein!
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">💰 Schluss mit Steuern verschenken!</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow hast du alle Behandlungen und Verkäufe strukturiert dokumentiert.
                                Online Kalender, Kundenkartei und integrierter Shop für bessere Buchhaltung.
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Steuer-Guide hilfreich?</h3>
                                <p className="text-gray-600">Teile ihn mit anderen Unternehmern!</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/kosmetikstudio-buchhaltung-steuern')}&text=${encodeURIComponent('Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst - Treatflow Blog')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Twitter
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/kosmetikstudio-buchhaltung-steuern')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-700 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    LinkedIn
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/kosmetikstudio-buchhaltung-steuern')}&quote=${encodeURIComponent('Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst')}`}
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
