import { Users, Search, Upload, Database, CheckCircle, ArrowRight, Phone, Mail, Shield, Camera, FileText, Clock, Globe, XCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata = {
    title: 'Digitale Kundenkartei fürs Kosmetikstudio',
    description: 'Kundenverwaltung, Behandlungsverlauf und wichtige Infos an einem Ort. Weniger Zettel, mehr Überblick – sicher und strukturiert.',
    keywords: ['Kundenkartei Kosmetikstudio', 'Kundenverwaltung Kosmetikstudio', 'Digitale Kundenkartei Kosmetikstudio', 'Kundenkartei Kosmetik', 'digitale Kundenkartei Kosmetik', 'Kundenkartei App', 'CRM Beauty Salon', 'Kundenprofile Kosmetikstudio', 'Behandlungshistorie', 'DSGVO Kundendaten'],
    alternates: {
        canonical: 'https://www.treatflow.io/kundenverwaltung',
    },
    openGraph: {
        title: 'Kundenkartei Kosmetik: Historie, Notizen & Fotos',
        description: 'Kundenverwaltung, Behandlungsverlauf und wichtige Infos an einem Ort. Weniger Zettel, mehr Überblick.',
        url: 'https://www.treatflow.io/kundenverwaltung',
        images: [
            {
                url: '/images/mockups/kundenverwaltung-overview.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Kundenverwaltung Interface',
            },
        ],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Welche App eignet sich für die Kundenverwaltung im Kosmetikstudio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow ist eine spezialisierte Kundenverwaltung für Kosmetikstudios. Die App bietet digitale Kundenkartei, Behandlungshistorie, Fotos, Notizen und DSGVO-konforme Datenspeicherung in der EU. 14 Tage kostenlos testen."
            }
        },
        {
            "@type": "Question",
            "name": "Was ist eine digitale Kundenkartei für Kosmetikstudios?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eine digitale Kundenkartei ist eine Software, die alle Kundendaten, Behandlungshistorien, Vorher-Nachher-Fotos und Notizen an einem Ort speichert. Im Gegensatz zur Papierkartei ist sie DSGVO-konform, durchsuchbar und von jedem Gerät zugänglich."
            }
        },
        {
            "@type": "Question",
            "name": "Ist eine digitale Kundenkartei DSGVO-konform?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Treatflow speichert alle Kundendaten verschlüsselt auf EU-Servern und erfüllt alle Anforderungen der DSGVO. Kunden können ihre Daten jederzeit einsehen und löschen lassen."
            }
        },
        {
            "@type": "Question",
            "name": "Welche Daten sollte eine Kundenkartei im Kosmetikstudio enthalten?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eine professionelle Kundenkartei sollte Kontaktdaten, Behandlungshistorie, Allergien und Unverträglichkeiten, Vorher-Nachher-Fotos, ausgefüllte Formulare (Anamnese, Einwilligung), Notizen und Terminhistorie enthalten."
            }
        },
        {
            "@type": "Question",
            "name": "Kann ich bestehende Kundendaten importieren?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Treatflow unterstützt den Import von Kundendaten aus Excel- und CSV-Dateien. Das Onboarding-Team hilft dir kostenlos beim Datenumzug von deinem bisherigen System."
            }
        },
        {
            "@type": "Question",
            "name": "Kann Treatflow automatische Nachrichten an meine Kunden senden?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Treatflow bietet eine integrierte Nachrichtenautomatisierung. Du kannst automatische Terminerinnerungen, Geburtstagsnachrichten und Follow-up-Nachrichten nach Behandlungen einrichten, um die Kundenbindung zu stärken – ohne zusätzlichen Aufwand."
            }
        }
    ]
};

export default function KundenverwaltungPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kundenverwaltung' },
                ])) }}
            />
            <Script
                id="kundenverwaltung-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Hero Section */}
            <section className="pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kundenverwaltung' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Users className="h-4 w-4 mr-2" />
                            Digitale Kundenkartei
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Kundenkartei Kosmetik</span> – alle Kundendaten in einer App
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Digitale Kundenkartei für Kosmetikstudios: unbegrenzte Kundendatenbank, Import bestehender Daten,
                            schnelle Suche und alle wichtigen Informationen auf einen Blick.
                        </p>
                        <div className="mt-8 max-w-3xl mx-auto bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg p-6">
                            <p className="text-gray-700 leading-relaxed">
                                Eine digitale Kundenkartei für Kosmetikstudios ist eine Software, die alle Kundendaten, Behandlungshistorien, Vorher-Nachher-Fotos und Notizen an einem Ort speichert. Im Gegensatz zur Papierkartei ist sie DSGVO-konform, durchsuchbar und von jedem Gerät zugänglich.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/funktionen/hero-kundenverwaltung.jpg"
                                alt="Gute Beziehung zu Kunden"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Kundenverwaltung Screenshot */}
                    <div className="mt-12 max-w-5xl mx-auto">
                        <Image
                            src="/images/mockups/kundenverwaltung-overview.png"
                            alt="Treatflow Kundenkartei - Übersichtliche Darstellung aller Kunden mit Suchfunktion und Detailansicht"
                            width={1200}
                            height={800}
                            sizes="(max-width: 1024px) 100vw, 80vw"
                            className="w-full h-auto shadow-2xl rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Kundenverwaltung die mitwächst
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der ersten Kundin bis zum großen Studio - unsere Kundenverwaltung skaliert mit deinem Erfolg.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Unbegrenzte Kunden */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <Database className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Unbegrenzte Kapazität</h3>
                            <p className="text-gray-600 mb-6">
                                Speichere unbegrenzt viele Kunden. Das System wächst mit deinem Studio
                                und bleibt dabei immer schnell und übersichtlich.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Keine Begrenzung der Kundenzahl
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bleibt immer schnell
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Backups
                                </li>
                            </ul>
                        </div>

                        {/* Schnelle Suche */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <Search className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Blitzschnelle Suche</h3>
                            <p className="text-gray-600 mb-6">
                                Finde jeden Kunden in Sekunden. Suche nach Name, Telefonnummer,
                                E-Mail oder sogar nach Behandlungsart.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Intelligente Suchfunktion
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Filter nach Behandlungen
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Sortierung nach Datum
                                </li>
                            </ul>
                        </div>

                        {/* Daten Import */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Upload className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Einfacher Import</h3>
                            <p className="text-gray-600 mb-6">
                                Übertrage bestehende Kundendaten mit wenigen Klicks.
                                Excel, CSV oder andere Formate - wir machen es möglich.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Excel & CSV Import
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Zuordnung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Duplikat-Erkennung
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vorteile einer digitalen Kundenkartei */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Vorteile einer digitalen Kundenkartei
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Der Umstieg von der Papierkartei auf eine digitale Lösung spart Zeit, erhöht die Sicherheit deiner Kundendaten und verbessert die Qualität deiner Behandlungen im Kosmetikstudio. Im direkten Vergleich zeigen sich die Vorteile einer digitalen Kundenverwaltung besonders deutlich.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="grid grid-cols-3">
                                <div className="p-5 bg-gray-50 border-b border-gray-200">
                                    <span className="font-semibold text-gray-900">Kriterium</span>
                                </div>
                                <div className="p-5 bg-gray-100 border-b border-gray-200 text-center">
                                    <span className="font-semibold text-gray-500">Papierkartei</span>
                                </div>
                                <div className="p-5 bg-indigo-50 border-b border-indigo-100 text-center">
                                    <span className="font-semibold text-indigo-700">Digitale Kartei</span>
                                </div>
                            </div>
                            {[
                                { label: 'Zeitersparnis', icon: Clock, analog: 'Manuelles Suchen & Sortieren', digital: 'Sofort-Suche in Sekunden' },
                                { label: 'Datensicherheit', icon: Shield, analog: 'Verlust- und Schadensgefahr', digital: 'Verschlüsselt mit automatischen Backups' },
                                { label: 'Suchfunktion', icon: Search, analog: 'Nur manuelles Durchblättern', digital: 'Volltextsuche nach Name, Behandlung & mehr' },
                                { label: 'Behandlungshistorie', icon: FileText, analog: 'Unübersichtliche Zettelwirtschaft', digital: 'Lückenlose digitale Dokumentation' },
                                { label: 'Fotos (vorher/nachher)', icon: Camera, analog: 'Separate Ablage nötig', digital: 'Direkt im Kundenprofil gespeichert' },
                                { label: 'DSGVO-Konformität', icon: Shield, analog: 'Schwer nachweisbar', digital: 'Automatisch konform mit EU-Servern' },
                                { label: 'Zugriff von überall', icon: Globe, analog: 'Nur vor Ort im Studio', digital: 'Von jedem Gerät, jederzeit' },
                            ].map((row, idx) => {
                                const Icon = row.icon;
                                return (
                                    <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                                        <div className="p-4 sm:p-5 flex items-center border-b border-gray-100">
                                            <Icon className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 hidden sm:block" />
                                            <span className="font-medium text-gray-900 text-sm sm:text-base">{row.label}</span>
                                        </div>
                                        <div className="p-4 sm:p-5 flex items-center justify-center border-b border-gray-100 text-center">
                                            <XCircle className="h-4 w-4 text-red-400 mr-1.5 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm text-gray-500">{row.analog}</span>
                                        </div>
                                        <div className="p-4 sm:p-5 flex items-center justify-center border-b border-gray-100 text-center bg-indigo-50/30">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-1.5 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm text-gray-700">{row.digital}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto mt-12 text-center">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Mit einer digitalen <Link href="/kundenkartei-software" className="text-indigo-600 font-medium hover:underline">Kundenkartei-Software</Link> eliminierst du die typischen Probleme der Papierverwaltung. Alle Kundendaten sind sofort verfügbar, sicher gespeichert und erfüllen automatisch die DSGVO-Anforderungen. Gerade im Kosmetikbereich, wo Behandlungshistorien, Hauttypen und Allergien eine entscheidende Rolle spielen, bietet die digitale Kartei einen enormen Qualitätsvorsprung gegenüber klassischen Karteikarten.
                        </p>
                    </div>
                </div>
            </section>

            {/* Customer Profile Detail */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Vollständige Kundenprofile
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Alle wichtigen Informationen zu deinen Kunden an einem Ort.
                            Von Kontaktdaten bis zur kompletten Behandlungshistorie.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                                        <span className="text-2xl font-bold">MM</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Maria Müller</h3>
                                        <p className="text-indigo-100">Kundin seit Januar 2023</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Kontaktdaten</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 text-gray-400 mr-3" />
                                                <span className="text-gray-700">+49 123 456 789</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Mail className="h-4 w-4 text-gray-400 mr-3" />
                                                <span className="text-gray-700">maria@example.com</span>
                                            </div>
                                        </div>

                                        <h4 className="text-lg font-semibold text-gray-900 mb-4 mt-8">Statistiken</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                                <p className="text-2xl font-bold text-blue-600">24</p>
                                                <p className="text-sm text-gray-600">Behandlungen</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                                <p className="text-2xl font-bold text-green-600">€2.890</p>
                                                <p className="text-sm text-gray-600">Umsatz gesamt</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Letzte Behandlungen</h4>
                                        <div className="space-y-3">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-medium text-gray-900">Gesichtsbehandlung</p>
                                                        <p className="text-sm text-gray-600">15.09.2024</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-green-600">€120</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-medium text-gray-900">Microneedling</p>
                                                        <p className="text-sm text-gray-600">28.08.2024</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-green-600">€180</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-medium text-gray-900">Beratung</p>
                                                        <p className="text-sm text-gray-600">10.08.2024</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-green-600">€50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welche Daten gehören in eine professionelle Kundenkartei? */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Welche Daten gehören in eine professionelle Kundenkartei?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Eine vollständige Kundenkartei im Kosmetikstudio geht weit über Name und Telefonnummer hinaus. Je besser du deine Kundinnen kennst, desto individueller und sicherer kannst du behandeln. Hier ist die komplette Checkliste für eine professionelle digitale Kundenkartei.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: 'Kontaktdaten', desc: 'Name, Telefon, E-Mail, Adresse und Geburtsdatum – die Basis für jeden Kundenkontakt und automatische Geburtstagsnachrichten.' },
                            { title: 'Hauttyp & Hautzustand', desc: 'Fitzpatrick-Klassifizierung, aktuelle Hautprobleme und Pflegegewohnheiten für gezielte Behandlungsempfehlungen.' },
                            { title: 'Allergien & Unverträglichkeiten', desc: 'Dokumentierte Allergien und Unverträglichkeiten sorgen für sichere Behandlungen und schützen dich rechtlich ab.' },
                            { title: 'Behandlungshistorie', desc: 'Alle durchgeführten Behandlungen mit Datum, verwendeten Produkten und Ergebnissen – lückenlos und chronologisch dokumentiert.' },
                            { title: 'Fotos (vorher/nachher)', desc: 'Visuelle Dokumentation des Behandlungserfolgs. Fotos helfen bei der Beratung und zeigen Kundinnen den Fortschritt ihrer Behandlung.' },
                            { title: 'Formulare & Einwilligungen', desc: 'Digitale Anamnesebögen und Einwilligungserklärungen – rechtssicher archiviert mit elektronischer Unterschrift.' },
                            { title: 'Präferenzen', desc: 'Lieblingsbehandlungen, bevorzugte Termine, Produktpräferenzen und Kommunikationsvorlieben für persönlichen Service.' },
                            { title: 'Individuelle Notizen', desc: 'Freie Textnotizen für alles, was nicht in Standardfelder passt – von Gesprächsnotizen bis zu besonderen Wünschen der Kundin.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all">
                                <div className="flex items-start mb-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto mt-12 text-center">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Treatflow deckt all diese Datenpunkte ab und bietet zusätzlich digitale <Link href="/formulare" className="text-indigo-600 font-medium hover:underline">Formulare und Anamnesebögen</Link>, die deine Kundinnen bequem auf dem Tablet oder Smartphone ausfüllen können. In Kombination mit der <Link href="/behandlungsdokumentation" className="text-indigo-600 font-medium hover:underline">Behandlungsdokumentation</Link> entsteht ein lückenloses Bild jeder Kundenbeziehung.
                        </p>
                    </div>
                </div>
            </section>

            {/* In 3 Schritten zur digitalen Kundenkartei */}
            <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            In 3 Schritten zur digitalen Kundenkartei
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Der Umstieg auf eine digitale Kundenverwaltung ist einfacher als du denkst. In wenigen Minuten bist du startklar und kannst sofort mit der professionellen Verwaltung deiner Kundendaten beginnen.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Treatflow kostenlos testen</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Registriere dich in unter einer Minute und erhalte sofort 14 Tage kostenlosen Zugang zu allen Funktionen. Keine Kreditkarte erforderlich, keine Verpflichtung. Du kannst die gesamte Kundenverwaltung, den Terminkalender und alle weiteren Funktionen uneingeschränkt ausprobieren.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kunden anlegen oder importieren</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Lege neue Kundinnen manuell an oder importiere deine bestehende Kundenliste aus Excel- oder CSV-Dateien. Treatflow erkennt automatisch Duplikate und ordnet die Daten den richtigen Feldern zu. Falls du Hilfe beim Import benötigst, unterstützt dich unser Onboarding-Team kostenlos beim gesamten Datenumzug von deinem bisherigen System.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Behandlungen dokumentieren</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ab sofort dokumentierst du jede Behandlung digital – mit Fotos, verwendeten Produkten und individuellen Notizen. Die <Link href="/behandlungsdokumentation" className="text-indigo-600 font-medium hover:underline">Behandlungsdokumentation</Link> wird automatisch in der Kundenhistorie gespeichert. So hast du beim nächsten Termin sofort alle relevanten Informationen parat und kannst deine Kundinnen optimal beraten.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 text-center">
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Zusätzlich zur Kundenverwaltung bietet Treatflow eine <Link href="/nachrichtenautomatisierung" className="text-indigo-600 font-medium hover:underline">automatische Nachrichtenfunktion</Link>: Terminerinnerungen, Geburtstagsnachrichten und Follow-up-Nachrichten werden automatisch an deine Kundinnen versendet – für stärkere Kundenbindung ohne zusätzlichen Aufwand.
                            </p>
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
                            >
                                Jetzt 14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verwandte Seiten / Cluster-Verlinkung */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Verwandte Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Treatflow vereint Kundenverwaltung, Terminkalender, Formulare und Dokumentation in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/kosmetikstudio-software" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600 block mb-2">All-in-One für dein Studio</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/kundenkartei-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Kundenkartei Kosmetik</span>
                            <span className="text-sm text-gray-600 block mb-2">Kundendaten & Behandlungshistorie</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/terminsoftware-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Terminsoftware</span>
                            <span className="text-sm text-gray-600 block mb-2">Online-Buchung & Kalender</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/anamnesebogen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Anamnesebögen</span>
                            <span className="text-sm text-gray-600 block mb-2">Formulare & Einwilligungen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <SocialProofBar />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen zur Kundenverwaltung
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Welche App eignet sich für die Kundenverwaltung im Kosmetikstudio?',
                                a: 'Treatflow ist eine spezialisierte Kundenverwaltung für Kosmetikstudios. Die App bietet digitale Kundenkartei, Behandlungshistorie, Fotos, Notizen und DSGVO-konforme Datenspeicherung in der EU. 14 Tage kostenlos testen.',
                            },
                            {
                                q: 'Was ist eine digitale Kundenkartei für Kosmetikstudios?',
                                a: 'Eine digitale Kundenkartei ist eine Software, die alle Kundendaten, Behandlungshistorien, Vorher-Nachher-Fotos und Notizen an einem Ort speichert. Im Gegensatz zur Papierkartei ist sie DSGVO-konform, durchsuchbar und von jedem Gerät zugänglich.',
                            },
                            {
                                q: 'Ist eine digitale Kundenkartei DSGVO-konform?',
                                a: 'Ja. Treatflow speichert alle Kundendaten verschlüsselt auf EU-Servern und erfüllt alle Anforderungen der DSGVO. Kunden können ihre Daten jederzeit einsehen und löschen lassen.',
                            },
                            {
                                q: 'Welche Daten sollte eine Kundenkartei im Kosmetikstudio enthalten?',
                                a: 'Eine professionelle Kundenkartei sollte Kontaktdaten, Behandlungshistorie, Allergien und Unverträglichkeiten, Vorher-Nachher-Fotos, ausgefüllte Formulare (Anamnese, Einwilligung), Notizen und Terminhistorie enthalten.',
                            },
                            {
                                q: 'Kann ich bestehende Kundendaten importieren?',
                                a: 'Ja. Treatflow unterstützt den Import von Kundendaten aus Excel- und CSV-Dateien. Das Onboarding-Team hilft dir kostenlos beim Datenumzug von deinem bisherigen System.',
                            },
                            {
                                q: 'Kann Treatflow automatische Nachrichten an meine Kunden senden?',
                                a: 'Ja. Treatflow bietet eine integrierte Nachrichtenautomatisierung. Du kannst automatische Terminerinnerungen, Geburtstagsnachrichten und Follow-up-Nachrichten nach Behandlungen einrichten, um die Kundenbindung zu stärken – ohne zusätzlichen Aufwand.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für professionelle Kundenverwaltung?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Teste die Kundenverwaltung 14 Tage kostenlos und organisiere dein Studio wie nie zuvor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                        >
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Treatflow Kundenverwaltung',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'Digitale Kundenkartei für Kosmetikstudios mit Behandlungshistorie, Notizen und Fotos.',
                        url: 'https://www.treatflow.io/kundenverwaltung',
                        offers: { '@type': 'Offer', price: '39', priceCurrency: 'EUR' },
                    }),
                }}
            />

            <Footer />
        </div>
    );
}
