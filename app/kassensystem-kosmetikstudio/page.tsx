import {
    Receipt, ShieldCheck, CreditCard, Banknote, Gift, FileText,
    CheckCircle, ArrowRight, Calculator, Lock, RefreshCcw, Mail,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';

export const metadata = {
    title: 'Kassensystem für Kosmetikstudios – TSE & RKSV konform',
    description: 'Treatflow Kasse: TSE-konforme Kassensoftware (KassenSichV) für Deutschland und RKSV-Registrierkasse für Österreich. Direkt aus dem Terminkalender kassieren, Belege mit QR-Code, Gutscheine, Tagesabschluss und DSFinV-K-/DEP7-Export. Ab 39 €/Monat als Add-on, ohne Transaktionsgebühren.',
    keywords: [
        'Kassensystem Kosmetikstudio', 'Kassensoftware Kosmetikstudio', 'TSE Kasse Kosmetik',
        'Registrierkasse Kosmetikstudio', 'RKSV Kasse Österreich', 'KassenSichV Kasse',
        'Kasse Beauty Salon', 'Kassensystem Friseur', 'Kasse mit Terminbuchung',
        'GoBD konforme Kasse', 'DSFinV-K Export', 'Gutscheinverwaltung Kasse',
        'Kassensystem Studio Österreich', 'Kassensystem Studio Deutschland',
        'TSE Pflicht Kosmetikstudio', 'Belegausgabepflicht', 'Kassensicherungsverordnung',
        'mobile Kasse Tablet', 'Kasse ohne Provision', 'cloudbasierte Kasse',
        'Kassensystem Nagelstudio', 'Kassensystem Friseursalon', 'DEP7 Export Österreich',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kassensystem-kosmetikstudio',
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        siteName: 'Treatflow',
        title: 'Kassensystem für Kosmetikstudios – TSE & RKSV konform | Treatflow',
        description: 'TSE-konforme Kasse (DE) und RKSV-Registrierkasse (AT) direkt in deiner Studio-Software. Kassieren aus dem Termin, fiskalkonforme Belege, Gutscheine, Tagesabschluss und Steuerberater-Export.',
        url: 'https://www.treatflow.io/kassensystem-kosmetikstudio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kassensystem für Kosmetikstudios – TSE & RKSV konform | Treatflow',
        description: 'TSE-konforme Kasse (DE) und RKSV-Registrierkasse (AT) direkt in deiner Studio-Software – kassieren aus dem Termin, fiskalkonforme Belege, ab 39 €/Monat.',
    },
};

const faqData = [
    {
        question: 'Ist die Treatflow Kasse TSE- und RKSV-konform?',
        answer: 'Ja. In Deutschland signiert Treatflow jeden Verkauf über eine zertifizierte technische Sicherheitseinrichtung (TSE) gemäß KassenSichV und erstellt DSFinV-K-Exporte für das Finanzamt. In Österreich erfüllt die Kasse die RKSV mit Fiskaly als Sicherheitseinrichtung, inklusive Start-, Monats-, Jahres- und Schlussbeleg sowie DEP7-Export. Belege tragen den maschinenlesbaren Signatur-QR-Code.',
    },
    {
        question: 'Was kostet das Kassensystem von Treatflow?',
        answer: 'Die Kasse ist ein Add-on zum Booking-Plan und kostet 39 €/Monat (zzgl. MwSt.), jährlich 35 €/Monat. Einmalig kommen 149 € Einrichtungsgebühr für die TSE-/RKSV-Provisionierung hinzu. Es gibt keine Transaktionsgebühren und keine Provision pro Verkauf.',
    },
    {
        question: 'Kann ich direkt aus einem Termin kassieren?',
        answer: 'Ja. Aus dem Treatflow-Terminkalender startest du den Kassiervorgang mit einem Klick – Kunde, Behandlung und Preis werden automatisch in den Warenkorb übernommen. Du kannst Produkte ergänzen, Rabatte vergeben, Einzelpreise anpassen und die Zahlart wählen.',
    },
    {
        question: 'Welche Zahlarten unterstützt die Kasse?',
        answer: 'Barzahlung mit automatischer Wechselgeldberechnung, Kartenzahlung, Gutschein (Einzweck- und Mehrzweckgutscheine) sowie Überweisung mit Rechnung und GiroCode. Alle Zahlungen werden fiskalkonform auf dem Beleg dokumentiert.',
    },
    {
        question: 'Wie funktioniert der Tagesabschluss?',
        answer: 'Du öffnest eine Kassensitzung mit Anfangsbestand und schließt sie per Kassensturz: Treatflow zeigt den Soll-Bestand (Anfangsbestand + Bareinnahmen) gegen den gezählten Ist-Bestand. Daraus entsteht ein Z-Bericht. Offene Tagesabschlüsse werden dir im Dashboard angezeigt.',
    },
    {
        question: 'Kann mein Steuerberater die Daten exportieren?',
        answer: 'Ja. Treatflow bietet CSV-Exporte (Transaktionen, Positionen, Zahlungen, Sitzungen), einen Steuerberater-Kassenbericht als PDF/CSV, eine Belegsammlung als PDF sowie die amtlichen Exporte DSFinV-K (Deutschland) und DEP7 (Österreich).',
    },
    {
        question: 'Brauche ich zusätzliche Hardware?',
        answer: 'Nein. Treatflow ist eine cloudbasierte Kassensoftware und läuft im Browser auf Tablet, Laptop oder Smartphone. Belege kannst du als PDF drucken oder per E-Mail an deine Kunden senden. Optionale Hardware wie Bondrucker oder Kartenterminal lässt sich ergänzen.',
    },
    {
        question: 'Braucht mein Kosmetikstudio überhaupt eine TSE-Kasse?',
        answer: 'Sobald du in Deutschland ein elektronisches Kassensystem einsetzt, muss es seit der Kassensicherungsverordnung (KassenSichV) eine zertifizierte technische Sicherheitseinrichtung (TSE) besitzen. In Österreich gilt ab 15.000 € Jahresumsatz (davon über 7.500 € bar) die Registrierkassenpflicht nach RKSV. Treatflow erfüllt beide Vorgaben automatisch – du musst dich nicht selbst um TSE oder Signaturzertifikat kümmern.',
    },
    {
        question: 'Gibt es eine Belegausgabepflicht?',
        answer: 'Ja. In Deutschland gilt seit 2020 die Belegausgabepflicht: Für jeden Verkauf muss ein Beleg bereitgestellt werden. Mit Treatflow erfüllst du das automatisch – du druckst den Beleg als PDF oder sendest ihn per E-Mail an den Kunden. Auch in Österreich besteht eine Belegerteilungspflicht, die Treatflow abdeckt.',
    },
    {
        question: 'Was ist DSFinV-K bzw. DEP7?',
        answer: 'DSFinV-K (Digitale Schnittstelle der Finanzverwaltung für Kassensysteme) ist das einheitliche Exportformat, das Betriebsprüfer in Deutschland verlangen. DEP7 (Datenerfassungsprotokoll) ist das österreichische Pendant nach RKSV. Treatflow erzeugt beide Exporte auf Knopfdruck, sodass dein Steuerberater oder das Finanzamt alle Daten in der geforderten Struktur erhält.',
    },
    {
        question: 'Kann ich von meinem alten Kassensystem zu Treatflow wechseln?',
        answer: 'Ja. Du startest mit Treatflow einfach eine neue Kassensitzung – Bestandsdaten wie Kunden und Leistungen sind bereits in deiner Studio-Software vorhanden. Die TSE-/RKSV-Provisionierung übernehmen wir im Rahmen der einmaligen Einrichtung. Deine alten Kassendaten bewahrst du gemäß den gesetzlichen Aufbewahrungsfristen separat auf.',
    },
    {
        question: 'Funktioniert die Kasse auf dem Tablet oder Smartphone?',
        answer: 'Ja. Treatflow ist webbasiert und für Tablet, Laptop und Smartphone optimiert. Du kannst mobil am Behandlungsplatz, an der Theke oder im Homestudio kassieren – ohne installierte Kassen-Hardware. Eine stabile Internetverbindung genügt.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow Kasse',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Point of Sale / Kassensoftware',
    operatingSystem: 'Web',
    url: 'https://www.treatflow.io/kassensystem-kosmetikstudio',
    description:
        'TSE- und RKSV-konforme Kassensoftware für Kosmetikstudios, Beauty-Salons und Wellnessbetriebe. Kassieren aus dem Terminkalender, fiskalkonforme Belege, Gutscheine, Tagesabschluss und Steuerberater-Export.',
    brand: {
        '@type': 'Brand',
        name: 'Treatflow',
    },
    featureList: [
        'TSE-Signatur nach KassenSichV (Deutschland)',
        'RKSV-Registrierkasse über Fiskaly (Österreich)',
        'Kassieren direkt aus dem Terminkalender',
        'Zahlarten: Bar, Karte, Gutschein, Überweisung mit GiroCode',
        'Gutscheinverwaltung (Einzweck- und Mehrzweckgutscheine)',
        'Fiskalkonforme Belege mit Signatur-QR, PDF-Druck und E-Mail-Versand',
        'Storno als revisionssichere Gegenbuchung',
        'Tagesabschluss mit Kassensturz (Soll/Ist) und Z-Bericht',
        'Exporte: DSFinV-K (DE), DEP7 (AT), CSV, Steuerberater-Kassenbericht',
    ],
    offers: {
        '@type': 'Offer',
        name: 'Kasse Add-on',
        price: '39',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        description: 'Add-on zum Booking-Plan, 39 €/Monat zzgl. einmalig 149 € Einrichtung.',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.6',
        reviewCount: '19',
        bestRating: '5',
    },
};

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'In 3 Schritten fiskalkonform kassieren mit Treatflow',
    description:
        'So kassierst du mit der Treatflow Kasse vom Termin bis zum TSE-/RKSV-signierten Beleg.',
    totalTime: 'PT1M',
    step: [
        {
            '@type': 'HowToStep',
            position: 1,
            name: 'Warenkorb füllen',
            text: 'Aus dem Termin kassieren oder Behandlungen und Produkte manuell hinzufügen. Rabatte und Einzelpreise anpassen, Kunde zuordnen.',
            url: 'https://www.treatflow.io/kassensystem-kosmetikstudio#so-funktionierts',
        },
        {
            '@type': 'HowToStep',
            position: 2,
            name: 'Zahlart wählen',
            text: 'Bar, Karte, Gutschein oder Überweisung wählen. Treatflow signiert den Verkauf automatisch über TSE (DE) bzw. RKSV (AT).',
            url: 'https://www.treatflow.io/kassensystem-kosmetikstudio#so-funktionierts',
        },
        {
            '@type': 'HowToStep',
            position: 3,
            name: 'Beleg ausgeben',
            text: 'Beleg als PDF drucken oder per E-Mail senden. Am Tagesende Kassensturz und Z-Bericht erstellen.',
            url: 'https://www.treatflow.io/kassensystem-kosmetikstudio#so-funktionierts',
        },
    ],
};

const features = [
    {
        icon: ShieldCheck,
        title: 'TSE & RKSV inklusive',
        text: 'Jeder Verkauf wird fiskalkonform signiert – KassenSichV/TSE in Deutschland, RKSV in Österreich. System-, Monats-, Jahres- und Schlussbelege laufen automatisch.',
        points: ['KassenSichV (DE)', 'RKSV (AT)', 'Signatur-QR auf dem Beleg'],
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-100',
    },
    {
        icon: Calculator,
        title: 'Kassieren aus dem Termin',
        text: 'Starte den Verkauf direkt aus dem Kalender. Kunde, Behandlung und Preis landen automatisch im Warenkorb – Produkte, Rabatte und Einzelpreise ergänzt du in Sekunden.',
        points: ['Termin → Warenkorb', 'Produkte & Rabatte', 'Preis pro Position anpassbar'],
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-100',
    },
    {
        icon: CreditCard,
        title: 'Alle Zahlarten',
        text: 'Bar mit Wechselgeld, Karte, Gutschein und Überweisung mit GiroCode-Rechnung. Jede Zahlung wird sauber auf dem Beleg dokumentiert.',
        points: ['Bar, Karte, Gutschein', 'Überweisung mit GiroCode', 'Automatisches Wechselgeld'],
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-100',
    },
    {
        icon: Gift,
        title: 'Gutscheinverwaltung',
        text: 'Verkaufe und löse Gutscheine direkt an der Kasse ein – als Einzweck- oder Mehrzweckgutschein mit korrekter steuerlicher Behandlung.',
        points: ['Einzweck & Mehrzweck', 'Verkauf & Einlösung', 'Korrekte Steuerlogik'],
        gradient: 'from-purple-500 to-pink-600',
        bg: 'from-purple-50 to-pink-100',
    },
    {
        icon: Receipt,
        title: 'Belege digital & per E-Mail',
        text: 'Unveränderliche Belege mit Hash-Kette und Signatur-QR. Drucke sie als PDF oder sende sie direkt per E-Mail an deine Kunden.',
        points: ['PDF-Druck', 'E-Mail-Versand', 'Revisionssichere Hash-Kette'],
        gradient: 'from-rose-500 to-red-600',
        bg: 'from-rose-50 to-red-100',
    },
    {
        icon: FileText,
        title: 'Tagesabschluss & Export',
        text: 'Kassensturz mit Soll/Ist, Z-Bericht und alle Exporte, die dein Steuerberater braucht – inklusive DSFinV-K (DE) und DEP7 (AT).',
        points: ['Kassensturz & Z-Bericht', 'Steuerberater-Export (CSV/PDF)', 'DSFinV-K & DEP7'],
        gradient: 'from-amber-500 to-orange-600',
        bg: 'from-amber-50 to-orange-100',
    },
];

export default function KassensystemPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem' },
                ])) }}
            />
            <Script
                id="kassensystem-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="kassensystem-product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Script
                id="kassensystem-howto-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Receipt className="h-4 w-4 mr-2" />
                            Kassensystem
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 break-words hyphens-auto" lang="de">
                            Kassensystem für <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Kosmetikstudios</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            TSE-konform in Deutschland, RKSV-konform in Österreich. Kassiere direkt
                            aus dem Termin, erstelle fiskalkonforme Belege und exportiere alles für
                            deinen Steuerberater – ohne separate Kassen-Hardware.
                        </p>
                        <AiAnswerCapsule
                            question="Welches Kassensystem eignet sich für Kosmetikstudios?"
                            answer="Treatflow bietet eine cloudbasierte Kasse, die direkt in die Studio-Software integriert ist: TSE-konform nach KassenSichV (Deutschland) und RKSV-konform (Österreich) über Fiskaly. Du kassierst direkt aus dem Terminkalender, akzeptierst Bar, Karte, Gutschein und Überweisung, erstellst fiskalkonforme Belege mit Signatur-QR und exportierst DSFinV-K bzw. DEP7 für den Steuerberater. Die Kasse ist ein Add-on zum Booking-Plan für 39 €/Monat zzgl. einmalig 149 € Einrichtung, ohne Transaktionsgebühren."
                        />
                    </div>

                    {/* Beleg-/Kassen-Visual */}
                    <div className="max-w-md mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-white">
                                    <Receipt className="h-5 w-5" />
                                    <span className="font-semibold">Beleg 2026-0042</span>
                                </div>
                                <span className="text-indigo-100 text-xs">TSE signiert</span>
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex justify-between text-sm text-gray-700">
                                    <span>Gesichtsbehandlung Deluxe</span>
                                    <span className="tabular-nums">89,00 €</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700">
                                    <span>Pflegeserum (Produkt)</span>
                                    <span className="tabular-nums">39,00 €</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Rabatt Stammkunde</span>
                                    <span className="tabular-nums">−10,00 €</span>
                                </div>
                                <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between font-bold text-gray-900">
                                    <span>Gesamt</span>
                                    <span className="tabular-nums">118,00 €</span>
                                </div>
                                <div className="flex items-center gap-3 pt-2">
                                    <div className="w-14 h-14 rounded-lg bg-gray-900 flex items-center justify-center">
                                        <div className="grid grid-cols-3 grid-rows-3 gap-0.5">
                                            {Array.from({ length: 9 }).map((_, i) => (
                                                <span key={i} className={`w-1.5 h-1.5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-900'}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-snug">
                                        Maschinenlesbarer Signatur-QR – KassenSichV (DE) / RKSV (AT)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Alles, was eine Studio-Kasse braucht
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der fiskalkonformen Signatur bis zum Steuerberater-Export – eine Kasse,
                            die mit deiner Terminplanung und Kundenkartei verbunden ist.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className={`bg-gradient-to-br ${feature.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}>
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.text}</p>
                                <ul className="space-y-2">
                                    {feature.points.map((p) => (
                                        <li key={p} className="flex items-center text-sm text-gray-700">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fiskal-Konformität DE/AT */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Fiskalkonform in Deutschland und Österreich
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Treatflow erkennt automatisch dein Land und wendet die passenden gesetzlichen
                            Vorgaben an – du musst dich um nichts kümmern.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl border border-gray-200 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">🇩🇪</span>
                                <h3 className="text-xl font-bold text-gray-900">Deutschland – KassenSichV</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Zertifizierte TSE signiert jeden Verkauf',
                                    'GoBD-konforme, unveränderliche Belege',
                                    'DSFinV-K-Export für die Finanzverwaltung',
                                    'TSE-Klartext und QR-Code auf jedem Beleg',
                                ].map((p) => (
                                    <li key={p} className="flex items-start text-gray-700">
                                        <ShieldCheck className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">🇦🇹</span>
                                <h3 className="text-xl font-bold text-gray-900">Österreich – RKSV</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'RKSV-Signatur über Fiskaly-Sicherheitseinrichtung',
                                    'Start-, Monats-, Jahres- und Schlussbeleg automatisch',
                                    'DEP7-Export mit quartalsweiser Erinnerung',
                                    'Maschinenlesbarer Code auf jedem Beleg',
                                ].map((p) => (
                                    <li key={p} className="flex items-start text-gray-700">
                                        <ShieldCheck className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fachbegriffe / Glossar */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Kassen-Fachbegriffe einfach erklärt
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Die wichtigsten Begriffe rund um die Kassenpflicht in Deutschland und
                            Österreich – verständlich zusammengefasst.
                        </p>
                    </div>

                    <dl className="grid md:grid-cols-2 gap-6">
                        {[
                            { t: 'TSE', d: 'Technische Sicherheitseinrichtung. Sie signiert in Deutschland jeden Kassenvorgang manipulationssicher – seit der KassenSichV Pflicht für elektronische Kassen.' },
                            { t: 'KassenSichV', d: 'Kassensicherungsverordnung. Sie schreibt vor, dass elektronische Aufzeichnungssysteme in Deutschland über eine zertifizierte TSE verfügen müssen.' },
                            { t: 'GoBD', d: 'Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form. Belege müssen unveränderbar und nachvollziehbar sein.' },
                            { t: 'DSFinV-K', d: 'Digitale Schnittstelle der Finanzverwaltung für Kassensysteme. Das standardisierte Exportformat, das deutsche Betriebsprüfer bei einer Kassennachschau verlangen.' },
                            { t: 'RKSV', d: 'Registrierkassensicherheitsverordnung (Österreich). Regelt die manipulationssichere Signierung von Barumsätzen und die Belegpflicht.' },
                            { t: 'DEP7', d: 'Datenerfassungsprotokoll nach RKSV. Das österreichische Exportformat aller Barumsätze für die Finanzbehörde.' },
                            { t: 'Belegausgabepflicht', d: 'Seit 2020 muss in Deutschland für jeden Verkauf ein Beleg ausgegeben werden – digital per E-Mail oder ausgedruckt.' },
                            { t: 'Z-Bericht / Kassensturz', d: 'Tagesabschluss: Der gezählte Ist-Bestand wird gegen den Soll-Bestand (Anfangsbestand + Bareinnahmen) abgeglichen und dokumentiert.' },
                        ].map((item) => (
                            <div key={item.t} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <dt className="text-lg font-bold text-gray-900 mb-2">{item.t}</dt>
                                <dd className="text-gray-600 text-sm leading-relaxed">{item.d}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* So funktioniert's */}
            <section id="so-funktionierts" className="py-20 bg-gray-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            So einfach kassierst du
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            In drei Schritten vom Termin zum fiskalkonformen Beleg.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { n: '1', t: 'Warenkorb füllen', d: 'Aus dem Termin kassieren oder Behandlungen und Produkte manuell hinzufügen. Rabatte und Einzelpreise anpassen, Kunde zuordnen.', g: 'from-indigo-500 to-purple-600' },
                            { n: '2', t: 'Zahlart wählen', d: 'Bar, Karte, Gutschein oder Überweisung. Treatflow signiert den Verkauf automatisch über TSE bzw. RKSV.', g: 'from-blue-500 to-indigo-600' },
                            { n: '3', t: 'Beleg ausgeben', d: 'Beleg als PDF drucken oder per E-Mail senden. Am Tagesende: Kassensturz und Z-Bericht – fertig.', g: 'from-emerald-500 to-teal-600' },
                        ].map((step) => (
                            <div key={step.n} className="text-center">
                                <div className={`w-16 h-16 bg-gradient-to-r ${step.g} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <span className="text-white font-bold text-xl">{step.n}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.t}</h3>
                                <p className="text-gray-600">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Warum die Treatflow Kasse?
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, t: 'Rechtssicher', d: 'TSE/KassenSichV und RKSV erfüllt – ohne dass du dich mit den Details beschäftigen musst.' },
                            { icon: RefreshCcw, t: 'Alles verbunden', d: 'Kasse, Terminkalender und Kundenkartei in einer Plattform – keine doppelte Pflege.' },
                            { icon: Lock, t: 'Keine Provision', d: 'Fester Add-on-Preis statt Gebühren pro Verkauf. Deine Umsätze gehören dir.' },
                            { icon: Mail, t: 'Digitale Belege', d: 'Beleg per E-Mail oder PDF – papierlos und jederzeit nachvollziehbar.' },
                        ].map((b) => (
                            <div key={b.t} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <b.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{b.t}</h3>
                                <p className="text-gray-600 text-sm">{b.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preis-Hinweis */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Kasse als Add-on zum Booking-Plan</h2>
                        <div className="text-4xl font-bold mb-1">39 €<span className="text-lg text-indigo-200">/Monat</span></div>
                        <p className="text-indigo-200 text-sm mb-1">jährlich 35 €/Monat · zzgl. MwSt.</p>
                        <p className="text-indigo-200 text-sm mb-6">einmalig 149 € Einrichtung (TSE-/RKSV-Provisionierung)</p>
                        <Link
                            href="/preise"
                            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Alle Preise ansehen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Kasse für deine Branche */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Kasse für deine Branche
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Die Treatflow Kasse ist für alle Beauty- und Wellnessbetriebe geeignet –
                        TSE-konform in Deutschland und RKSV-konform in Österreich.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: '/kosmetikstudio-software', t: 'Kosmetikstudios' },
                            { href: '/nagelstudio-software', t: 'Nagelstudios' },
                            { href: '/lash-studio-software', t: 'Lash Studios' },
                            { href: '/permanent-makeup-software', t: 'Permanent Makeup' },
                            { href: '/laser-haarentfernung-software', t: 'Laser & IPL' },
                            { href: '/tattoo-studio-software', t: 'Tattoo Studios' },
                            { href: '/massage-software', t: 'Massage-Praxen' },
                            { href: '/spa-wellness-software', t: 'Spa & Wellness' },
                            { href: '/schoenheitssalon-software', t: 'Schönheitssalons' },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                            >
                                {item.t}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verwandte Funktionen */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Verwandte Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Die Kasse ist Teil der All-in-One Plattform von Treatflow.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { href: '/terminkalender', t: 'Terminkalender', d: 'Aus dem Termin direkt kassieren' },
                            { href: '/online-buchungen', t: 'Online-Buchungen', d: '24/7 Buchung über deinen Link' },
                            { href: '/kundenverwaltung', t: 'Digitale Kundenkartei', d: 'Kundendaten & Historie' },
                            { href: '/shop', t: 'Produktverkauf & Lager', d: 'Pflegeprodukte verkaufen' },
                            { href: '/studio-software-oesterreich', t: 'Studio-Software Österreich', d: 'RKSV-konform kassieren' },
                            { href: '/funktionen', t: 'Alle Funktionen', d: 'Der komplette Überblick' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">{item.t}</span>
                                <span className="text-sm text-gray-600 block mb-2">{item.d}</span>
                                <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Häufige Fragen zum Kassensystem
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 break-words hyphens-auto" lang="de">
                        Bereit für eine rechtssichere Kasse?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und schalte die Kasse als Add-on dazu –
                        TSE- und RKSV-konform, ohne Provision.
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
                            href="/preise"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                        >
                            Preise ansehen
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
