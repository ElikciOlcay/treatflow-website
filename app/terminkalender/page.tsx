import { Calendar, Clock, Users, CheckCircle, Zap, ArrowRight, Bell, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';
import { buildHreflangAlternates } from '@/app/i18n/seo';

export const metadata = {
    title: 'Terminkalender Kosmetikstudio: Team & Räume planen',
    description:
        'Terminkalender fürs Kosmetikstudio: Mitarbeiter & Räume in einer Tagesansicht, Drag & Drop, Online-Buchung und SMS-/E-Mail-Erinnerungen. Weniger No-Shows, 14 Tage testen.',
    keywords: ['Terminsoftware Kosmetikstudio', 'Terminplaner Kosmetikstudio', 'Terminplaner für Kosmetikstudio', 'Terminkalender Kosmetikstudio', 'Tagesansicht Mitarbeiter', 'Raumplanung Kosmetikstudio', 'Mitarbeiter Auslastung planen', 'Drag and Drop Terminplaner', 'Kosmetikstudio Terminverwaltung', 'Terminbuchungssoftware Kosmetiker'],
    alternates: {
        canonical: 'https://www.treatflow.io/terminkalender',
        ...buildHreflangAlternates('appointment-calendar'),
    },
    openGraph: {
        title: 'Terminkalender Kosmetikstudio: Team & Räume | Treatflow',
        description: 'Plane Mitarbeiter, Räume und Termine übersichtlich in einer Tagesansicht – mit Drag & Drop, Online-Buchungen und automatischen Erinnerungen.',
        url: 'https://www.treatflow.io/terminkalender',
        images: [
            {
                url: '/images/mockups/kalender-overview.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Terminkalender Interface',
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
            "name": "Wie organisiere ich Termine im Kosmetikstudio am besten?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mit einer spezialisierten Terminsoftware wie Treatflow organisierst du Termine am effizientesten. Online-Buchungen ermöglichen Kunden 24/7 zu buchen, automatische Erinnerungen per SMS reduzieren No-Shows um bis zu 80%, und die übersichtliche Kalenderansicht gibt dir jederzeit den vollen Überblick."
            }
        },
        {
            "@type": "Question",
            "name": "Was kostet eine Terminsoftware für Kosmetikstudios?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow bietet Terminverwaltung mit Online-Buchungen ab 59 EUR pro Monat im Booking-Plan. 14 Tage kostenlos testen, keine Kreditkarte nötig. Es gibt keine versteckten Kosten oder Provisionen pro Buchung."
            }
        },
        {
            "@type": "Question",
            "name": "Können meine Kunden online Termine buchen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Jedes Studio erhält einen persönlichen Buchungslink. Kunden können darüber rund um die Uhr Behandlungen und Termine auswählen. Neue Buchungen erscheinen sofort im Kalender, Bestätigungen werden automatisch per E-Mail und SMS versendet."
            }
        },
        {
            "@type": "Question",
            "name": "Wie reduziere ich No-Shows im Kosmetikstudio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Automatische Terminerinnerungen per SMS und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten vor dem Termin. Studios berichten von bis zu 80% weniger No-Shows."
            }
        },
        {
            "@type": "Question",
            "name": "Welche Funktionen sollte ein Terminplaner für Kosmetikstudios haben?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ein guter Terminplaner für Kosmetikstudios sollte Online-Buchungen, Tages-/Wochen-/Monatsansichten, Mitarbeiter- und Raumplanung, automatische Erinnerungen per SMS und E-Mail, Drag & Drop und eine Integration mit Kundenkartei und Dokumentation bieten."
            }
        },
        {
            "@type": "Question",
            "name": "Wie plane ich mehrere Mitarbeiter und Räume im Kosmetikstudio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mit der Tagesansicht von Treatflow siehst du Mitarbeiter oder Räume in getrennten Spalten. So erkennst du freie Kapazitäten, vermeidest Doppelbelegungen und kannst spontane Änderungen im Studioalltag leichter koordinieren."
            }
        },
        {
            "@type": "Question",
            "name": "Wie vermeide ich Doppelbelegungen bei Mitarbeitern und Räumen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow stellt die Auslastung von Mitarbeitern und Räumen übersichtlich nebeneinander dar. Freie und belegte Zeiten sind direkt erkennbar, sodass Engpässe und Doppelbelegungen frühzeitig vermieden werden."
            }
        }
    ]
};

export default function TerminkalenderPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Terminkalender' },
                ])) }}
            />
            <Script
                id="terminkalender-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Hero Section */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Terminkalender' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Calendar className="h-4 w-4 mr-2" />
                            Terminkalender
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Der <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Terminplaner</span> für dein Kosmetikstudio
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Plane Mitarbeiter, Räume und Termine auf einen Blick. Erkenne freie Kapazitäten,
                            vermeide Doppelbelegungen und koordiniere spontane Änderungen ohne Planungschaos.
                        </p>
                        <AiAnswerCapsule
                            question="Wie organisiere ich Termine im Kosmetikstudio am besten?"
                            answer="Treatflow bündelt Termine, Mitarbeiter und Räume in einem Kalender. Die Tagesansicht zeigt jede Person oder jeden Raum in einer eigenen Spalte. Dadurch erkennst du freie Kapazitäten, vermeidest Doppelbelegungen und koordinierst Änderungen schneller. Online-Buchungen und automatische Erinnerungen reduzieren zusätzlich Telefonaufwand und No-Shows."
                        />
                    </div>

                    {/* Lifestyle-Bild */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/lifestyle/terminkalender-wochenplanung.png"
                                alt="Terminplanung im Kosmetikstudio – Beratung am Laptop mit Kalenderansicht"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Terminkalender Screenshot */}
                    <div className="max-w-5xl mx-auto">
                        <Image
                            src="/images/mockups/kalender-overview.png"
                            alt="Treatflow Terminkalender - Professionelle Terminverwaltung mit Online-Buchungen und Übersicht"
                            width={1200}
                            height={800}
                            sizes="(max-width: 1024px) 100vw, 80vw"
                            className="w-full h-auto shadow-2xl rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Why Online Booking Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Warum Online-Buchungen dein Studio revolutionieren
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            In der heutigen Zeit erwarten deine Kunden moderne, digitale Lösungen. Ein Online-Buchungskalender
                            ist nicht nur ein Nice-to-have, sondern ein Must-have für jedes erfolgreiche Studio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* 24/7 Verfügbarkeit */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">24/7 Erreichbarkeit</h3>
                            <p className="text-gray-600 text-center">
                                Deine Kunden können auch um 22 Uhr abends oder am Wochenende buchen,
                                wenn sie Zeit haben - ohne dass du erreichbar sein musst.
                            </p>
                        </div>

                        {/* Mehr Buchungen */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">30% mehr Buchungen</h3>
                            <p className="text-gray-600 text-center">
                                Studios mit Online-Buchung verzeichnen durchschnittlich 30% mehr Termine,
                                da spontane Buchungen möglich werden.
                            </p>
                        </div>

                        {/* Weniger Aufwand */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Weniger Telefonate</h3>
                            <p className="text-gray-600 text-center">
                                Bis zu 80% weniger Anrufe für Terminbuchungen. Konzentriere dich auf deine Kunden
                                statt auf das Telefon.
                            </p>
                        </div>

                        {/* Professioneller Eindruck */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Professioneller Auftritt</h3>
                            <p className="text-gray-600 text-center">
                                Zeige deinen Kunden, dass du mit der Zeit gehst. Online-Buchungen signalisieren
                                Modernität und Professionalität.
                            </p>
                        </div>

                        {/* Kundenbindung */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Bell className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Bessere Kundenbindung</h3>
                            <p className="text-gray-600 text-center">
                                Automatische Erinnerungen per E-Mail und SMS sowie einfache Terminbuchung
                                führen zu zufriedeneren Kunden und weniger No-Shows.
                            </p>
                        </div>

                        {/* Zeitersparnis */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Calendar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">5h Zeit pro Woche</h3>
                            <p className="text-gray-600 text-center">
                                Durchschnittlich 5 Stunden weniger Verwaltungsaufwand pro Woche durch
                                automatisierte Terminplanung.
                            </p>
                        </div>
                    </div>

                    {/* Emotionales Bild: Online-Buchung im Studio */}
                    <div className="max-w-7xl mx-auto mb-16">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/terminkalender-online-buchung-emotional.jpg"
                                alt="Entspannt und organisiert – dein Studio mit Online-Buchungen"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-4">Das sagen die Zahlen</h3>
                            <p className="text-indigo-100 max-w-2xl mx-auto">
                                Studios, die auf Online-Buchungen setzen, sind erfolgreicher und effizienter.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">73%</div>
                                <div className="text-indigo-100 text-sm">der Kunden bevorzugen Online-Buchung</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">45%</div>
                                <div className="text-indigo-100 text-sm">weniger No-Shows mit Erinnerungen</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">60%</div>
                                <div className="text-indigo-100 text-sm">der Buchungen außerhalb Geschäftszeiten</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">90%</div>
                                <div className="text-indigo-100 text-sm">Kundenzufriedenheit mit Online-System</div>
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
                            Alles was du für perfekte Terminplanung brauchst
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der Online-Buchung bis zur automatischen Erinnerung - unser Kalender macht Terminplanung einfach.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Online Buchungen */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Online-Buchungen</h3>
                            <p className="text-gray-600 mb-6">
                                Deine Kunden buchen selbstständig über deinen persönlichen Buchungslink.
                                Keine Telefonate mehr nötig - Bestätigung kommt automatisch per E-Mail und SMS.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Persönlicher Buchungslink
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bestätigung per E-Mail und SMS
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Keine Doppelbuchungen
                                </li>
                            </ul>
                        </div>

                        {/* Flexible Ansichten */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Team & Räume im Blick</h3>
                            <p className="text-gray-600 mb-6">
                                Die Tagesansicht ordnet Mitarbeiter oder Räume übersichtlich in Spalten.
                                So erkennst du Auslastung, freie Zeiten und mögliche Engpässe sofort.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Eine Spalte pro Mitarbeiter oder Raum
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Freie Kapazitäten schneller erkennen
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Doppelbelegungen vermeiden
                                </li>
                            </ul>
                        </div>

                        {/* Automatische Erinnerungen */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Automatische Erinnerungen</h3>
                            <p className="text-gray-600 mb-6">
                                Reduziere No-Shows mit automatischen Erinnerungen per E-Mail, SMS
                                zu verschiedenen Zeitpunkten vor dem Termin.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Per E-Mail und SMS
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Flexible Zeitpunkte (3 Tage, 1 Tag vorher)
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Stornierungsbenachrichtigungen per SMS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verwandte Seiten / Cluster-Verlinkung */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Verwandte Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Treatflow vereint Terminkalender, Kundenverwaltung, Formulare und Dokumentation in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/kosmetikstudio-software" className="group p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600 block mb-2">All-in-One für dein Studio</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/terminkalender" className="group p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Terminsoftware Kosmetikstudio</span>
                            <span className="text-sm text-gray-600 block mb-2">Online-Buchung & Kalender</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/kundenverwaltung" className="group p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Kundenkartei</span>
                            <span className="text-sm text-gray-600 block mb-2">Kundendaten & Historie</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/anamnesebogen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
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
                            Häufige Fragen zur Terminplanung
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Wie organisiere ich Termine im Kosmetikstudio am besten?',
                                a: 'Mit einer spezialisierten Terminsoftware wie Treatflow organisierst du Termine am effizientesten. Online-Buchungen ermöglichen Kunden 24/7 zu buchen, automatische Erinnerungen per SMS reduzieren No-Shows um bis zu 80%, und die übersichtliche Kalenderansicht gibt dir jederzeit den vollen Überblick.',
                            },
                            {
                                q: 'Was kostet eine Terminsoftware für Kosmetikstudios?',
                                a: 'Treatflow bietet Terminverwaltung mit Online-Buchungen ab 59 EUR pro Monat im Booking-Plan. 14 Tage kostenlos testen, keine Kreditkarte nötig. Es gibt keine versteckten Kosten oder Provisionen pro Buchung.',
                            },
                            {
                                q: 'Können meine Kunden online Termine buchen?',
                                a: 'Ja. Jedes Studio erhält einen persönlichen Buchungslink. Kunden können darüber rund um die Uhr Behandlungen und Termine auswählen. Neue Buchungen erscheinen sofort im Kalender, Bestätigungen werden automatisch per E-Mail und SMS versendet.',
                            },
                            {
                                q: 'Wie reduziere ich No-Shows im Kosmetikstudio?',
                                a: 'Automatische Terminerinnerungen per SMS und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten vor dem Termin. Studios berichten von bis zu 80% weniger No-Shows.',
                            },
                            {
                                q: 'Welche Funktionen sollte ein Terminplaner für Kosmetikstudios haben?',
                                a: 'Ein guter Terminplaner für Kosmetikstudios sollte Online-Buchungen, Tages-/Wochen-/Monatsansichten, Mitarbeiter- und Raumplanung, automatische Erinnerungen per SMS und E-Mail, Drag & Drop und eine Integration mit Kundenkartei und Dokumentation bieten.',
                            },
                            {
                                q: 'Wie plane ich mehrere Mitarbeiter und Räume im Kosmetikstudio?',
                                a: 'Mit der Tagesansicht von Treatflow siehst du Mitarbeiter oder Räume in getrennten Spalten. So erkennst du freie Kapazitäten, vermeidest Doppelbelegungen und kannst spontane Änderungen im Studioalltag leichter koordinieren.',
                            },
                            {
                                q: 'Wie vermeide ich Doppelbelegungen bei Mitarbeitern und Räumen?',
                                a: 'Treatflow stellt die Auslastung von Mitarbeitern und Räumen übersichtlich nebeneinander dar. Freie und belegte Zeiten sind direkt erkennbar, sodass Engpässe und Doppelbelegungen frühzeitig vermieden werden.',
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
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für perfekte Terminplanung?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste den Terminkalender 14 Tage kostenlos und erlebe, wie einfach Terminplanung sein kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
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
                        name: 'Treatflow Terminkalender',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: 'Terminkalender für Kosmetikstudios mit Mitarbeiter- und Raumspalten, Drag & Drop, Online-Buchung und automatischen Erinnerungen.',
                        url: 'https://www.treatflow.io/terminkalender',
                        featureList: [
                            'Tagesansicht mit Spalten pro Mitarbeiter oder Raum',
                            'Auslastung und freie Kapazitäten erkennen',
                            'Doppelbelegungen von Team und Räumen vermeiden',
                            'Termine per Drag & Drop umplanen',
                            'Tages-, Wochen- und Monatsansicht',
                            'Online-Buchung und automatische Erinnerungen',
                        ],
                        offers: { '@type': 'Offer', price: '39', priceCurrency: 'EUR' },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.6',
                            reviewCount: '19',
                            bestRating: '5',
                        },
                    }),
                }}
            />

            <Footer />
        </div>
    );
}
