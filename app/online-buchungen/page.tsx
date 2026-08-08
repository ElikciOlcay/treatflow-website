import { Calendar, Link2, Bell, CheckCircle, ArrowRight, Clock, Users, Smartphone, Languages, Ticket, ListOrdered } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';
import ContentAttribution from '../components/ContentAttribution';
import { buildHreflangAlternates } from '../i18n/seo';
import { generateWebPageSchema } from '@/lib/content-attribution';

const PAGE_DATE_MODIFIED = '2026-08-08';
const PAGE_DATE_PUBLISHED = '2024-06-01';

export const metadata = {
    title: 'Online-Terminbuchung & Buchungssystem Kosmetikstudio',
    description: 'Online-Terminbuchung für dein Kosmetikstudio: Kunden buchen 24/7 über deinen persönlichen Link. Automatische Bestätigungen, weniger No-Shows.',
    keywords: ['Online Terminbuchung Kosmetikstudio', 'Online Buchungssystem Kosmetikstudio', 'Buchungssystem Kosmetik', 'Online Buchungssystem Kosmetik', 'Terminbuchungssoftware Kosmetik', 'Buchungssoftware Kosmetikstudio', 'Buchungslink Beauty', '24/7 Terminbuchung', 'Online-Terminbuchung Kosmetik', 'Kosmetikstudio Buchungssystem', 'mehrsprachige Buchungsseite', 'Buchungsseite mehrere Sprachen', 'Rabattcodes Online-Buchung', 'Rabattcode Kosmetikstudio', 'Warteliste Kosmetikstudio', 'Warteliste Online-Buchung'],
    alternates: {
        canonical: 'https://www.treatflow.io/online-buchungen',
        ...buildHreflangAlternates("online-booking"),
    },
    openGraph: {
        title: 'Online-Buchungen für Kosmetikstudios | Treatflow',
        description: 'Kein Telefonstress mehr: deine Kunden buchen rund um die Uhr, mit automatischen Bestätigungen und ohne Doppelbuchungen.',
        url: 'https://www.treatflow.io/online-buchungen',
        images: [
            {
                url: '/images/og-online-buchungen.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Online-Buchungssystem',
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
            "name": "Welches Online-Buchungssystem eignet sich für Kosmetikstudios?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow bietet ein spezialisiertes Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink, automatischen Bestätigungen per E-Mail und SMS, Mitarbeiterkalendern und Integration mit Kundenkartei und Dokumentation. Ab 59 EUR pro Monat."
            }
        },
        {
            "@type": "Question",
            "name": "Wie kann ich Online-Buchungen für mein Studio einrichten?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "In drei Schritten: 1) Behandlungen mit Dauer und Preis anlegen, 2) Arbeitszeiten und Verfügbarkeiten definieren, 3) Persönlichen Buchungslink auf Instagram, Website oder per WhatsApp teilen. Die Einrichtung dauert weniger als 10 Minuten."
            }
        },
        {
            "@type": "Question",
            "name": "Was kostet ein Online-Buchungssystem für Kosmetikstudios?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow bietet Online-Buchungen im Booking-Plan ab 59 EUR pro Monat an. Es gibt keine Provision pro Buchung, keine versteckten Kosten und 14 Tage kostenlose Testphase ohne Kreditkarte."
            }
        },
        {
            "@type": "Question",
            "name": "Können Kunden rund um die Uhr Termine buchen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Der persönliche Buchungslink ist 24/7 erreichbar. Kunden können jederzeit verfügbare Termine sehen und buchen - auch abends oder am Wochenende. Über 60% der Buchungen finden außerhalb der Geschäftszeiten statt."
            }
        },
        {
            "@type": "Question",
            "name": "Wie reduziert ein Buchungssystem No-Shows?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durch automatische Terminerinnerungen per SMS und E-Mail zu konfigurierbaren Zeitpunkten vor dem Termin. Kunden werden erinnert und können bei Bedarf stornieren, sodass der Termin für andere frei wird. Studios berichten von bis zu 80% weniger No-Shows."
            }
        },
        {
            "@type": "Question",
            "name": "Was passiert, wenn alle Termine ausgebucht sind?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mit der Warteliste-Funktion können sich Kund:innen auf freie Termine vormerken lassen. Wird ein bestehender Termin storniert, erhalten passende Interessenten automatisch eine E-Mail mit den frei gewordenen Zeiten. So gehen keine Anfragen verloren."
            }
        }
    ]
};

export default function OnlineBuchungenPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Online-Buchungen' },
                ])) }}
            />
            <Script
                id="online-buchungen-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="online-buchungen-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Online-Terminbuchung & Buchungssystem Kosmetikstudio',
                            description:
                                'Online-Terminbuchung für dein Kosmetikstudio: Kunden buchen 24/7 über deinen persönlichen Link. Automatische Bestätigungen, weniger No-Shows.',
                            url: 'https://www.treatflow.io/online-buchungen',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />
            {/* Hero Section */}
            <section className="pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Online-Buchungen' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Link2 className="h-4 w-4 mr-2" />
                            Online-Buchungen
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 break-words hyphens-auto" lang="de">
                            Online Buchungssystem für <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Persönlicher Buchungslink für dein Studio. Deine Kunden buchen rund um die Uhr,
                            du erhältst automatisch alle Termine - ohne Telefonate oder Nachrichten.
                        </p>
                        <AiAnswerCapsule
                            question="Welches Online-Buchungssystem eignet sich für Kosmetikstudios?"
                            answer="Treatflow bietet ein spezialisiertes Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink, 24/7-Terminbuchung, automatischen Bestätigungen per E-Mail und SMS sowie Integration mit Kundenkartei und Dokumentation. Keine Provision pro Buchung, ab 59 EUR/Monat im Booking-Plan, 14 Tage kostenlos testen."
                        />
                        <ContentAttribution
                            dateModified={PAGE_DATE_MODIFIED}
                            datePublished={PAGE_DATE_PUBLISHED}
                        />
                    </div>

                    {/* Lifestyle-Bild */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/lifestyle/online-buchung-smartphone.png"
                                alt="Online-Terminbuchung – Kundin und Studio-Inhaber planen Termine am Laptop"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Online-Buchungen Screenshot */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <Image
                            src="/images/mockups/online-buchung-hero.png"
                            alt="Treatflow Online-Buchungssystem - Persönlicher Buchungslink für 24/7 Terminbuchungen"
                            width={1200}
                            height={800}
                            sizes="(max-width: 1024px) 100vw, 80vw"
                            className="w-full h-auto shadow-2xl rounded-2xl"
                        />
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                24/7 buchbar - auch nach Feierabend
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Deine Kunden können jederzeit buchen, wann es ihnen passt.
                                Du erhältst automatisch alle Buchungen und Bestätigungen.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Keine Doppelbuchungen</h3>
                                    <p className="text-gray-600">
                                        Das System prüft automatisch deine Verfügbarkeit und verhindert Doppelbuchungen.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Bell className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatische Bestätigungen</h3>
                                    <p className="text-gray-600">
                                        Kunden erhalten sofort eine Buchungsbestätigung per E-Mail und SMS mit allen Details.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Smartphone className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobil optimiert</h3>
                                    <p className="text-gray-600">
                                        Perfekt für Smartphone und Tablet - deine Kunden buchen von überall.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Alles was du für Online-Buchungen brauchst
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der Buchung bis zur Erinnerung - unser System übernimmt alles automatisch für dich.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Persönlicher Link */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                                <Link2 className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Persönlicher Buchungslink</h3>
                            <p className="text-gray-600 mb-6">
                                Erhalte deinen eigenen Buchungslink zum Teilen in sozialen Medien,
                                auf deiner Website.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Individueller Link
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    QR-Code inklusive
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Studio-Branding
                                </li>
                            </ul>
                        </div>

                        {/* Flexible Termine */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Terminvergabe</h3>
                            <p className="text-gray-600 mb-6">
                                Definiere deine Arbeitszeiten, Behandlungsdauern und Pausen.
                                Das System zeigt nur verfügbare Termine an.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Individuelle Arbeitszeiten
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Behandlungsdauern
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Pausen & Urlaub
                                </li>
                            </ul>
                        </div>

                        {/* Automatische Erinnerungen */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Bell className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Automatische Erinnerungen</h3>
                            <p className="text-gray-600 mb-6">
                                Reduziere No-Shows mit automatischen Erinnerungen per
                                E-Mail und SMS zu verschiedenen Zeitpunkten vor dem Termin.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Per E-Mail und SMS
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Mehrere Erinnerungen (3 Tage, 1 Tag vorher)
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

            {/* Warteliste -- NEU */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-start gap-10">
                            <div className="flex-1">
                                <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                                    Neu
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                                    Warteliste bei ausgebuchten Terminen
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Ausgebucht heißt nicht verloren: Wenn online keine freien Termine mehr verfügbar sind, können sich Kund:innen auf die Warteliste setzen.
                                    Wird ein Termin storniert, erhalten passende Interessenten automatisch eine E-Mail mit den frei gewordenen Zeiten.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Automatische Benachrichtigung bei Storno – per E-Mail an passende Interessenten</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Zwei Modi: nur den Nächsten benachrichtigen oder alle Interessenten des Tages</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Übersicht aller Einträge und manuelle Benachrichtigung im Dashboard</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Aktivierung mit einem Klick unter Einstellungen &gt; Online-Buchung</span>
                                    </li>
                                </ul>
                                <a
                                    href="https://app.treatflow.io/auth/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
                                >
                                    Jetzt kostenlos testen
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-80">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                        <ListOrdered className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">So funktioniert die Warteliste</h3>
                                    <ol className="space-y-3 text-sm text-gray-600">
                                        <li className="flex items-start">
                                            <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                                            <span>Tag ist ausgebucht – Kund:in trägt sich mit Wunschtermin ein</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                                            <span>Ein bestehender Termin wird storniert</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                                            <span>Passende Interessenten erhalten automatisch eine E-Mail mit freien Zeiten</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mehrsprachig & Rabattcodes */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Mehr Reichweite, mehr Buchungen
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Erreiche Kunden in ihrer Sprache und belohne sie mit gezielten Aktionen - direkt über deine Buchungsseite.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Mehrsprachige Buchungsseite */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Languages className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Buchungsseite in 6 Sprachen</h3>
                            <p className="text-gray-600 mb-6">
                                Deine Online-Buchungsseite passt sich automatisch an die Sprache deiner Kunden an. So bucht jeder bequem und ohne Sprachbarriere.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Deutsch', 'Englisch', 'Türkisch', 'Polnisch', 'Italienisch', 'Russisch'].map((lang) => (
                                    <span key={lang} className="inline-flex items-center rounded-full bg-sky-50 border border-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Rabattcodes */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-6">
                                <Ticket className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Rabattcodes für Aktionen</h3>
                            <p className="text-gray-600 mb-6">
                                Erstelle Rabattcodes für deine Online-Buchung - ideal für Neukunden, Kampagnen und saisonale Aktionen. Deine Kunden lösen sie direkt beim Buchen ein.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Codes für Neukunden & Kampagnen
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Einlösung direkt bei der Buchung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Nutzungsstatistik pro Code
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            So einfach funktioniert&rsquo;s
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            In nur 3 Schritten zu deinem eigenen Online-Buchungssystem.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Behandlungen definieren</h3>
                            <p className="text-gray-600">
                                Lege deine Behandlungen mit Dauer und Preis fest.
                                Bestimme deine Arbeitszeiten und Verfügbarkeiten.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Link teilen</h3>
                            <p className="text-gray-600">
                                Teile deinen persönlichen Buchungslink auf Instagram,
                                deiner Website mit deinen Kunden.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Termine erhalten</h3>
                            <p className="text-gray-600">
                                Erhalte automatisch alle Buchungen in deinem Kalender.
                                Bestätigungen per E-Mail und SMS sowie Erinnerungen laufen automatisch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Warum Online-Buchungen dein Studio voranbringen
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mehr Buchungen, weniger Aufwand und zufriedenere Kunden - das sind die Vorteile von Online-Buchungen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Mehr Zeit</h3>
                            <p className="text-gray-600 text-sm">
                                Keine Telefonate mehr für Terminbuchungen.
                                Konzentriere dich voll auf deine Kunden.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Mehr Kunden</h3>
                            <p className="text-gray-600 text-sm">
                                24/7 Buchungen bedeuten mehr Termine,
                                auch außerhalb deiner Geschäftszeiten.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Weniger Fehler</h3>
                            <p className="text-gray-600 text-sm">
                                Automatische Terminvergabe verhindert
                                Doppelbuchungen und Missverständnisse.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Smartphone className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Modern</h3>
                            <p className="text-gray-600 text-sm">
                                Biete deinen Kunden den Komfort,
                                den sie von modernen Unternehmen erwarten.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Example Link Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        So könnte dein Buchungslink aussehen
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Kurz, merkbar und perfekt für Social Media oder deine Website.
                    </p>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md mx-auto">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">BS</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Beauty Studio Maria</h3>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-4 mb-6">
                            <code className="text-orange-600 font-medium">treatflow.io/beauty-studio-maria</code>
                        </div>

                        <p className="text-sm text-gray-600 mb-6">
                            Teile diesen Link überall dort, wo deine Kunden sind
                        </p>

                        <div className="flex justify-center space-x-4">
                            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">IG</span>
                            </div>
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">WA</span>
                            </div>
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">FB</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold">WEB</span>
                            </div>
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
                            Treatflow vereint Online-Buchungen, Terminkalender, Kundenverwaltung und Formulare in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/online-buchungen" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Online-Terminbuchung Kosmetikstudio</span>
                            <span className="text-sm text-gray-600 block mb-2">24/7 Buchung über deinen Link</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/sms-erinnerungen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">SMS-Erinnerungen</span>
                            <span className="text-sm text-gray-600 block mb-2">Weniger No-Shows durch Erinnerungen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/kosmetikstudio-software" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600 block mb-2">All-in-One für dein Studio</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/terminkalender" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Terminsoftware Kosmetikstudio</span>
                            <span className="text-sm text-gray-600 block mb-2">Online-Buchung & Kalender</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/kundenverwaltung" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Kundenkartei</span>
                            <span className="text-sm text-gray-600 block mb-2">Kundendaten & Historie</span>
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

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Häufige Fragen zu Online-Buchungen
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Welches Online-Buchungssystem eignet sich für Kosmetikstudios?',
                                a: 'Treatflow bietet ein spezialisiertes Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink, automatischen Bestätigungen per E-Mail und SMS, Mitarbeiterkalendern und Integration mit Kundenkartei und Dokumentation. Ab 59 EUR pro Monat.',
                            },
                            {
                                q: 'Wie kann ich Online-Buchungen für mein Studio einrichten?',
                                a: 'In drei Schritten: 1) Behandlungen mit Dauer und Preis anlegen, 2) Arbeitszeiten und Verfügbarkeiten definieren, 3) Persönlichen Buchungslink auf Instagram, Website oder per WhatsApp teilen. Die Einrichtung dauert weniger als 10 Minuten.',
                            },
                            {
                                q: 'Was kostet ein Online-Buchungssystem für Kosmetikstudios?',
                                a: 'Treatflow bietet Online-Buchungen im Booking-Plan ab 59 EUR pro Monat an. Es gibt keine Provision pro Buchung, keine versteckten Kosten und 14 Tage kostenlose Testphase ohne Kreditkarte.',
                            },
                            {
                                q: 'Können Kunden rund um die Uhr Termine buchen?',
                                a: 'Ja. Der persönliche Buchungslink ist 24/7 erreichbar. Kunden können jederzeit verfügbare Termine sehen und buchen - auch abends oder am Wochenende. Über 60% der Buchungen finden außerhalb der Geschäftszeiten statt.',
                            },
                            {
                                q: 'Wie reduziert ein Buchungssystem No-Shows?',
                                a: 'Durch automatische Terminerinnerungen per SMS und E-Mail zu konfigurierbaren Zeitpunkten vor dem Termin. Kunden werden erinnert und können bei Bedarf stornieren, sodass der Termin für andere frei wird. Studios berichten von bis zu 80% weniger No-Shows.',
                            },
                            {
                                q: 'Was passiert, wenn alle Termine ausgebucht sind?',
                                a: 'Mit der Warteliste-Funktion können sich Kund:innen auf freie Termine vormerken lassen. Wird ein bestehender Termin storniert, erhalten passende Interessenten automatisch eine E-Mail mit den frei gewordenen Zeiten. So gehen keine Anfragen verloren.',
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
            <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 break-words hyphens-auto" lang="de">
                        Bereit für automatische Buchungen?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Teste Online-Buchungen 14 Tage kostenlos und erlebe, wie einfach Terminvergabe sein kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                        >
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
