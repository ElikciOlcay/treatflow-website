import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Share2, FileText, Shield, CheckCircle, AlertTriangle, Scale, BookOpen } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';



export const metadata: Metadata = {
    title: 'NISV-konforme Behandlungsdokumentation',
    description: 'Alles zur neuen NISV-Verordnung für Kosmetikstudios. So dokumentierst du Behandlungen rechtssicher und vermeidest Bußgelder.',
    keywords: ["NISV Dokumentation","Behandlungsdokumentation Kosmetik","NISV konform","Rechtssichere Dokumentation","Kosmetik Gesetze","Beauty Compliance"],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/behandlungsdokumentation-nisv-konform',
    },
    openGraph: {
        title: 'NISV-konforme Behandlungsdokumentation: Leitfaden',
        description: 'Alles zur neuen NISV-Verordnung für Kosmetikstudios. So dokumentierst du Behandlungen rechtssicher und vermeidest Bußgelder.',
        url: 'https://www.treatflow.io/blog/behandlungsdokumentation-nisv-konform',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/nisv-dokumentation.jpg',
                width: 1200,
                height: 630,
                alt: 'NISV-konforme Behandlungsdokumentation: Rechtssicher dokumentieren',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-05T14:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Recht & Compliance',
        tags: ["NISV Dokumentation","Behandlungsdokumentation Kosmetik","NISV konform","Rechtssichere Dokumentation"],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NISV-konforme Behandlungsdokumentation: Leitfaden',
        description: 'Alles zur neuen NISV-Verordnung für Kosmetikstudios. So dokumentierst du Behandlungen rechtssicher und vermeidest Bußgelder.',
        images: ['/images/blog/nisv-dokumentation.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "NISV-konforme Behandlungsdokumentation: Rechtssicher dokumentieren",
        "description": "Alles zur neuen NISV-Verordnung für Kosmetikstudios. So dokumentierst du Behandlungen rechtssicher und vermeidest Bußgelder.",
        "image": "https://www.treatflow.io/images/blog/nisv-dokumentation.jpg",
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
        "datePublished": "2024-12-05T14:00:00.000Z",
        "dateModified": "2024-12-05T14:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/behandlungsdokumentation-nisv-konform"
        },
        "articleSection": "Recht & Compliance",
        "keywords": "NISV Dokumentation, Behandlungsdokumentation Kosmetik, NISV konform, Rechtssichere Dokumentation, Kosmetik Gesetze, Beauty Compliance",
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Blog', href: '/blog' },
                    { label: 'NISV-konforme Behandlungsdokumentation' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'NISV-konforme Behandlungsdokumentation' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                                Recht & Compliance
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                5. Dezember 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                10 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            NiSV-konforme Behandlungsdokumentation: Was du wissen musst
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Seit der NiSV-Verordnung ist professionelle Dokumentation Pflicht. So dokumentierst du rechtssicher
                            und effizient - ohne Mehraufwand für dein tägliches Business.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/nisv-dokumentation.jpg"
                                alt="Professionelle Dokumentation und Compliance - NiSV-konforme Behandlungsdokumentation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-red-900 mb-2 flex items-center">
                                <AlertTriangle className="h-5 w-5 mr-2" />
                                Wichtiger Hinweis
                            </h3>
                            <p className="text-red-800 mb-0">
                                <strong>Seit dem 31. Dezember 2022 ist die NiSV (Verordnung zum Schutz vor schädlichen Wirkungen nichtionisierender Strahlung) in Kraft.</strong>
                                Kosmetikstudios, die bestimmte Geräte verwenden, sind zur lückenlosen Dokumentation verpflichtet. Verstöße können teuer werden!
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die NiSV-Verordnung hat die Beauty-Branche aufgeschreckt. Plötzlich stehen viele Kosmetikerinnen vor der Frage:
                            Was muss ich dokumentieren? Wie mache ich das rechtssicher? Und vor allem: Wie schaffe ich das ohne stundenlangen Papierkram?
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            In diesem ausführlichen Guide erkläre ich dir alles, was du über die NiSV-konforme Behandlungsdokumentation wissen musst.
                            Von den gesetzlichen Anforderungen bis zu praktischen Lösungen für deinen Alltag.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Was ist die NiSV-Verordnung?</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die NiSV (Verordnung zum Schutz vor schädlichen Wirkungen nichtionisierender Strahlung) regelt den Umgang mit Geräten,
                            die elektromagnetische Felder, Ultraschall oder optische Strahlung abgeben. Das betrifft viele Geräte in der Kosmetik.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                                <Scale className="h-5 w-5 mr-2" />
                                NiSV-pflichtige Geräte in der Kosmetik:
                            </h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />
                                    <span className="text-blue-800">IPL-Geräte (Intense Pulsed Light)</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />
                                    <span className="text-blue-800">Laser-Geräte für Haarentfernung</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />
                                    <span className="text-blue-800">Radiofrequenz-Geräte</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />
                                    <span className="text-blue-800">Ultraschall-Geräte</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />
                                    <span className="text-blue-800">LED-Therapie Geräte</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />
                                    <span className="text-blue-800">Mikrowellen-Geräte</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dokumentationspflichten im Detail</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die NiSV schreibt eine umfassende Dokumentation vor. Jede Behandlung muss lückenlos nachvollziehbar sein.
                            Das mag zunächst überwältigend wirken, aber mit einer professionellen <Link href="/nisv-dokumentation" className="text-indigo-600 hover:text-indigo-700 font-medium">NiSV-Dokumentation Software</Link> ist es gut machbar.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Vor der ersten Behandlung</h3>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">📋 Pflichtdokumente:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <FileText className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Aufklärungsbogen:</strong>
                                        <span className="text-gray-700 block">Umfassende Aufklärung über Risiken, Nebenwirkungen und Behandlungsablauf</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FileText className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Anamnese-Bogen:</strong>
                                        <span className="text-gray-700 block">Gesundheitszustand, Medikamente, Vorerkrankungen, Hauttyp</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FileText className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Einverständniserklärung:</strong>
                                        <span className="text-gray-700 block">Schriftliche Zustimmung zur Behandlung mit Unterschrift</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FileText className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Bedenkzeit-Nachweis:</strong>
                                        <span className="text-gray-700 block">Mindestens 24 Stunden zwischen Aufklärung und Behandlung</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Bei jeder Behandlung</h3>

                        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                            <h4 className="font-semibold text-yellow-900 mb-3">⚡ Behandlungsprotokoll muss enthalten:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Datum und Uhrzeit</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Behandelte Körperregion</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Gerätetyp und -einstellungen</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Energiedosis/Intensität</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Behandlungsdauer</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Reaktionen der Haut</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Nachbehandlung</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                                        <span className="text-yellow-800">Unterschrift Kundin</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Nachbehandlung und Follow-Up</h3>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die Dokumentation endet nicht mit der Behandlung. Auch Nachkontrollen, Nebenwirkungen oder
                            Beschwerden müssen dokumentiert werden.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Häufige Fehler und wie du sie vermeidest</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #1: Unvollständige Dokumentation
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Einzelne Behandlungsschritte oder Parameter werden vergessen.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Verwende standardisierte Vorlagen und Checklisten für jede Behandlung.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #2: Fehlende Bedenkzeit
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Behandlung direkt nach der Aufklärung ohne 24h Bedenkzeit.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Plane immer einen separaten Aufklärungstermin vor der ersten Behandlung.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #3: Unleserliche Handschrift
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Handschriftliche Notizen sind im Ernstfall nicht nachvollziehbar.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Nutze digitale Dokumentationssysteme mit klaren, strukturierten Eingabefeldern.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Digitale vs. Papier-Dokumentation</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-red-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                                    <BookOpen className="h-5 w-5 mr-2" />
                                    Papier-Dokumentation
                                </h4>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm">
                                        <span className="text-red-600 mr-2">❌</span>
                                        <span className="text-red-800">Zeitaufwendig</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-red-600 mr-2">❌</span>
                                        <span className="text-red-800">Fehleranfällig</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-red-600 mr-2">❌</span>
                                        <span className="text-red-800">Schwer durchsuchbar</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-red-600 mr-2">❌</span>
                                        <span className="text-red-800">Platzverbrauch</span>
                                    </div>
                                </div>
                                <div className="text-green-700 text-sm">
                                    <span className="text-green-600 mr-2">✅</span>
                                    Kein technisches Know-how nötig
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                                    <Shield className="h-5 w-5 mr-2" />
                                    Digitale Dokumentation
                                </h4>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm">
                                        <span className="text-green-600 mr-2">✅</span>
                                        <span className="text-green-800">Zeitsparend</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-green-600 mr-2">✅</span>
                                        <span className="text-green-800">Automatische Backups</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-green-600 mr-2">✅</span>
                                        <span className="text-green-800">Schnelle Suche</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-green-600 mr-2">✅</span>
                                        <span className="text-green-800">Vorlagen & Automatisierung</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-green-600 mr-2">✅</span>
                                        <span className="text-green-800">DSGVO-konform</span>
                                    </div>
                                </div>
                                <div className="text-red-700 text-sm">
                                    <span className="text-red-600 mr-2">❌</span>
                                    Einarbeitungszeit erforderlich
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Aufbewahrungspflichten</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die NiSV schreibt vor, dass alle Dokumentationen mindestens 10 Jahre aufbewahrt werden müssen.
                            Das bedeutet: Sichere Archivierung ist Pflicht.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                            <h4 className="text-blue-800 font-semibold mb-2">💾 Aufbewahrung: Was du beachten musst</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3 mt-0.5" />
                                    <span className="text-blue-800"><strong>10 Jahre Mindestaufbewahrung</strong> ab letzter Behandlung</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3 mt-0.5" />
                                    <span className="text-blue-800"><strong>Sichere Archivierung</strong> gegen Verlust und unbefugten Zugriff</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3 mt-0.5" />
                                    <span className="text-blue-800"><strong>Schnelle Verfügbarkeit</strong> für Behörden und Gerichte</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-blue-600 mr-3 mt-0.5" />
                                    <span className="text-blue-800"><strong>DSGVO-Konformität</strong> beim Umgang mit Gesundheitsdaten</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Praktische Umsetzung mit Treatflow</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die gute Nachricht: Mit der richtigen Software wird NiSV-konforme Dokumentation zum Kinderspiel.
                            Treatflow wurde speziell für die Anforderungen der Beauty-Branche entwickelt.
                        </p>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">🚀 NiSV-Features in Treatflow:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">Formular-Generator für individuelle Dokumentation</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">Formular-Marktplatz mit vorgefertigten Vorlagen</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">Professionelle Behandlungsdokumentation</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">Digitale Kundenkartei mit Behandlungshistorie</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">Online-Terminkalender mit Buchungssystem</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">DSGVO-konforme Speicherung</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">Rechtssichere Dokumentation</span>
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                        <span className="text-indigo-800">Regelmäßige Updates</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Dokumentation als Chance begreifen</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die NiSV-Verordnung mag zunächst wie eine Belastung wirken, aber sie bietet auch Chancen.
                            Professionelle Dokumentation schützt nicht nur rechtlich, sondern verbessert auch die Behandlungsqualität
                            und das Vertrauen deiner Kundinnen.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Mit der richtigen <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-700 font-medium">Behandlungsdokumentation Software</Link> und strukturierten Abläufen wird die Dokumentation zur Routine.
                            Investiere jetzt in ein professionelles System - es zahlt sich langfristig aus.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">📝 Starte rechtssicher durch!</h3>
                            <p className="mb-6 text-indigo-100">
                                Treatflow macht NiSV-konforme Dokumentation einfach und sicher.
                                Alle Vorlagen, automatische Workflows und sichere Archivierung inklusive.
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
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/behandlungsdokumentation-nisv-konform')}&text=${encodeURIComponent('NISV-konforme Behandlungsdokumentation: Rechtssicher dokumentieren - Treatflow Blog')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
            >
                <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Twitter
            </a>
                                <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/behandlungsdokumentation-nisv-konform')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm"
            >
                <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                LinkedIn
            </a>
                                <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/behandlungsdokumentation-nisv-konform')}&quote=${encodeURIComponent('NISV-konforme Behandlungsdokumentation: Rechtssicher dokumentieren')}`}
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

            {/* Verwandte Seiten */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/behandlungsdokumentation-kosmetikstudio', title: 'Behandlungsdokumentation', desc: 'NiSV-konforme Dokumentation' },
                            { href: '/nisv-dokumentation-kosmetikstudio', title: 'NiSV-Dokumentation', desc: 'Rechtssichere Dokumentation nach NiSV' },
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
