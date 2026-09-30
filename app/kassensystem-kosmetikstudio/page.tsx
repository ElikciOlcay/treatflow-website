import {
    Receipt, ShieldCheck, CreditCard, Gift, FileText, Calculator,
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import FeatureHero, { FeatureTitleHighlight } from '../components/FeatureHero';
import {
    FeatureUnderstand,
    FeatureHowItWorks,
    FeatureCards,
    FeatureFaq,
    FeatureRelated,
    FeaturePageCta,
} from '../components/FeatureSections';

export const metadata = {
    title: 'Kassensystem für Kosmetikstudios – TSE & RKSV konform',
    description: 'Treatflow Kasse: TSE-konforme Kassensoftware (KassenSichV) für Deutschland und RKSV-Registrierkasse für Österreich. Mit SumUp Solo Kartenterminal, Belegen mit QR-Code, Gutscheinen und DSFinV-K-/DEP7-Export. Ab 39 €/Monat als Add-on.',
    keywords: [
        'Kassensystem Kosmetikstudio', 'Kassensoftware Kosmetikstudio', 'TSE Kasse Kosmetik',
        'Registrierkasse Kosmetikstudio', 'RKSV Kasse Österreich', 'KassenSichV Kasse',
        'Kasse Beauty Salon', 'Kassensystem Friseur', 'Kasse mit Terminbuchung',
        'GoBD konforme Kasse', 'DSFinV-K Export', 'Gutscheinverwaltung Kasse',
        'Kassensystem Studio Österreich', 'Kassensystem Studio Deutschland',
        'TSE Pflicht Kosmetikstudio', 'Belegausgabepflicht', 'Kassensicherungsverordnung',
        'mobile Kasse Tablet', 'Kasse ohne Provision', 'cloudbasierte Kasse',
        'Kassensystem Nagelstudio', 'Kassensystem Friseursalon', 'DEP7 Export Österreich',
        'SumUp Kasse Kosmetikstudio', 'SumUp Solo Terminal', 'Kartenzahlung Kosmetikstudio',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kassensystem-kosmetikstudio',
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        siteName: 'Treatflow',
        title: 'Kassensystem für Kosmetikstudios – TSE & RKSV konform',
        description: 'TSE-konforme Kasse (DE) und RKSV-Registrierkasse (AT) mit SumUp Kartenterminal. Kassieren aus dem Termin, fiskalkonforme Belege, Gutscheine und Steuerberater-Export.',
        url: 'https://www.treatflow.io/kassensystem-kosmetikstudio',
        images: [
            {
                url: '/images/sumup-solo.jpg',
                width: 996,
                height: 721,
                alt: 'SumUp Solo Kartenterminal – integriert in die Treatflow Kasse',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kassensystem für Kosmetikstudios – TSE & RKSV konform',
        description: 'TSE- und RKSV-konform kassieren – inkl. SumUp Solo Kartenterminal, direkt aus dem Termin, ab 39 €/Monat.',
    },
};

const faqs = [
    {
        question: 'Ist die Treatflow Kasse TSE- und RKSV-konform?',
        answer: 'Ja. In Deutschland signiert Treatflow jeden Verkauf über eine zertifizierte technische Sicherheitseinrichtung (TSE) gemäß KassenSichV und erstellt DSFinV-K-Exporte für das Finanzamt. In Österreich erfüllt die Kasse die RKSV mit Fiskaly als Sicherheitseinrichtung, inklusive Start-, Monats-, Jahres- und Schlussbeleg sowie DEP7-Export. Belege tragen den maschinenlesbaren Signatur-QR-Code.',
    },
    {
        question: 'In welchen Ländern funktioniert die Treatflow Kasse?',
        answer: 'Die Treatflow Kasse ist fiskalkonform in Deutschland (KassenSichV/TSE) und Österreich (RKSV) – Treatflow erkennt automatisch das Land deines Studios und wendet die passenden Vorgaben an. In der Schweiz ist die Kasse ebenfalls nutzbar, da dort keine gesetzliche Signatur- oder Registrierkassenpflicht besteht. Die Bedienoberfläche ist auf Deutsch.',
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
        answer: 'Barzahlung mit automatischer Wechselgeldberechnung, Kartenzahlung über SumUp Solo (Betrag wird per Cloud API direkt ans Terminal gesendet), Gutschein (Einzweck- und Mehrzweckgutscheine) sowie Überweisung mit Rechnung und GiroCode. Alle Zahlungen werden fiskalkonform auf dem Beleg dokumentiert.',
    },
    {
        question: 'Funktioniert die Treatflow Kasse mit SumUp?',
        answer: 'Ja. Treatflow unterstützt SumUp vollständig: Du verbindest dein SumUp-Konto und dein SumUp Solo Terminal einmalig. Beim Kassieren wählst du „Karte“ – der Betrag geht automatisch an das Terminal, ohne manuelles Eintippen. Kontaktlos, Karte und PIN werden am Terminal abgewickelt und der Verkauf bleibt TSE-/RKSV-konform.',
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
        answer: 'Nein. Treatflow ist eine cloudbasierte Kassensoftware und läuft im Browser auf Tablet, Laptop oder Smartphone. Belege kannst du als PDF drucken oder per E-Mail an deine Kunden senden. Für Kartenzahlungen empfehlen wir das SumUp Solo Terminal – es ist direkt angebunden. Optional lässt sich auch ein Bondrucker ergänzen.',
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
    mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
        'Zahlarten: Bar, Karte (SumUp Solo), Gutschein, Überweisung mit GiroCode',
        'SumUp Kartenterminal per Cloud API – Betrag ohne manuelles Eintippen',
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
    description: 'So kassierst du mit der Treatflow Kasse vom Termin bis zum TSE-/RKSV-signierten Beleg.',
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
            text: 'Bar, Karte über SumUp Solo, Gutschein oder Überweisung wählen. Treatflow signiert den Verkauf automatisch über TSE (DE) bzw. RKSV (AT).',
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

export default function KassensystemPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Kassensystem' },
                        ])
                    ),
                }}
            />
            <Script id="kassensystem-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="kassensystem-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="kassensystem-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            <FeatureHero
                theme="indigo"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem' },
                ]}
                eyebrow="Kassensystem"
                eyebrowIcon={Receipt}
                title={<>Kasse mit <FeatureTitleHighlight theme="indigo">TSE & RKSV</FeatureTitleHighlight></>}
                description="Direkt aus dem Termin kassieren – SumUp Solo, fiskalkonforme Belege und Export für den Steuerberater."
                chips={['TSE & RKSV inklusive', 'SumUp Solo integriert', 'Ohne Transaktionsgebühr']}
                secondaryCta={{ label: 'SumUp-Integration', href: '/integrationen' }}
                aiCapsule={{
                    question: 'Welches Kassensystem eignet sich für Kosmetikstudios?',
                    answer: 'Treatflow bietet eine cloudbasierte Kasse, die direkt in die Studio-Software integriert ist: TSE-konform nach KassenSichV (Deutschland) und RKSV-konform (Österreich) über Fiskaly. Du kassierst direkt aus dem Terminkalender, akzeptierst Bar, Karte über SumUp Solo, Gutschein und Überweisung, erstellst fiskalkonforme Belege mit Signatur-QR und exportierst DSFinV-K bzw. DEP7 für den Steuerberater. Die Kasse ist ein Add-on zum Booking-Plan für 39 €/Monat zzgl. einmalig 149 € Einrichtung, ohne Transaktionsgebühren an Treatflow.',
                }}
                visual={
                    <div className="relative grid gap-4 sm:grid-cols-2 items-end">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden order-2 sm:order-1">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-white">
                                    <Receipt className="h-4 w-4" />
                                    <span className="font-semibold text-sm">Beleg 2026-0042</span>
                                </div>
                                <span className="text-indigo-100 text-xs">TSE signiert</span>
                            </div>
                            <div className="p-4 space-y-2.5">
                                <div className="flex justify-between text-sm text-gray-700">
                                    <span>Gesichtsbehandlung</span>
                                    <span className="tabular-nums">89,00 €</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700">
                                    <span>Pflegeserum</span>
                                    <span className="tabular-nums">39,00 €</span>
                                </div>
                                <div className="border-t border-dashed border-gray-200 pt-2.5 flex justify-between font-bold text-gray-900 text-sm">
                                    <span>Gesamt</span>
                                    <span className="tabular-nums">118,00 €</span>
                                </div>
                                <div className="rounded-lg bg-sky-50 border border-sky-100 px-2.5 py-2 flex items-center gap-2">
                                    <CreditCard className="h-3.5 w-3.5 text-sky-600 flex-shrink-0" />
                                    <p className="text-xs text-sky-800">Karte · SumUp Solo</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white order-1 sm:order-2">
                            <Image
                                src="/images/sumup-solo.jpg"
                                alt="SumUp Solo Kartenterminal – voll integriert in die Treatflow Kasse"
                                width={996}
                                height={721}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                }
            />

            <FeatureUnderstand
                theme="indigo"
                title="Sofort klar: wofür die Kasse da ist"
                description="Fiskalkonform kassieren – verbunden mit Termin, Kunden und Produkten."
                items={[
                    {
                        icon: ShieldCheck,
                        title: 'TSE & RKSV',
                        text: 'Jeder Verkauf wird signiert – KassenSichV in Deutschland, RKSV in Österreich. Signatur-QR auf dem Beleg.',
                    },
                    {
                        icon: CreditCard,
                        title: 'SumUp Solo',
                        text: 'Kartenzahlung direkt aus der Kasse – Betrag per Cloud API ans Terminal, ohne Eintippen.',
                    },
                    {
                        icon: Calculator,
                        title: 'Aus dem Termin',
                        text: 'Ein Klick: Kunde, Behandlung und Preis landen im Warenkorb – Produkte und Rabatte ergänzt du sofort.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="indigo"
                title="So funktioniert’s"
                description="In drei Schritten vom Termin zum signierten Beleg."
                steps={[
                    { title: 'Warenkorb füllen', text: 'Aus dem Termin kassieren oder Leistungen und Produkte manuell hinzufügen. Rabatte und Preise anpassen.' },
                    { title: 'Zahlart wählen', text: 'Bar, Karte (SumUp Solo), Gutschein oder Überweisung. Treatflow signiert automatisch über TSE bzw. RKSV.' },
                    { title: 'Beleg ausgeben', text: 'PDF drucken oder per E-Mail senden. Am Tagesende Kassensturz und Z-Bericht.' },
                ]}
            />

            <FeatureCards
                theme="indigo"
                title="Was du bekommst"
                description="Alles, was eine Studio-Kasse braucht – ohne Transaktionsgebühr an Treatflow."
                items={[
                    {
                        icon: ShieldCheck,
                        title: 'TSE & RKSV inklusive',
                        text: 'Fiskalkonforme Signatur und Belege mit QR-Code.',
                        points: ['KassenSichV (DE)', 'RKSV (AT)', 'Signatur-QR'],
                    },
                    {
                        icon: Calculator,
                        title: 'Kassieren aus dem Termin',
                        text: 'Kunde und Leistung automatisch im Warenkorb.',
                        points: ['Termin → Warenkorb', 'Produkte & Rabatte', 'Preis anpassbar'],
                    },
                    {
                        icon: CreditCard,
                        title: 'SumUp & alle Zahlarten',
                        text: 'Bar, Karte, Gutschein, Überweisung mit GiroCode.',
                        points: ['SumUp Solo', 'Wechselgeld', 'Fiskalkonform'],
                    },
                    {
                        icon: Gift,
                        title: 'Gutscheine',
                        text: 'Verkauf und Einlösung – Einzweck und Mehrzweck.',
                        points: ['Steuer korrekt', 'Restwert', 'An der Kasse'],
                    },
                    {
                        icon: Receipt,
                        title: 'Belege digital',
                        text: 'PDF-Druck und E-Mail – revisionssicher mit Hash-Kette.',
                        points: ['PDF', 'E-Mail', 'Unveränderlich'],
                    },
                    {
                        icon: FileText,
                        title: 'Tagesabschluss & Export',
                        text: 'Kassensturz, Z-Bericht, DSFinV-K und DEP7.',
                        points: ['Kassensturz', 'Steuerberater-Export', 'DSFinV-K & DEP7'],
                    },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur Kasse" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/gutscheine-kosmetikstudio', title: 'Gutscheine', description: 'Verkaufen & einlösen an der Kasse' },
                    { href: '/integrationen', title: 'Integrationen', description: 'SumUp, Lexware & mehr' },
                    { href: '/terminkalender', title: 'Terminkalender', description: 'Direkt aus dem Termin kassieren' },
                ]}
            />

            <FeaturePageCta
                theme="indigo"
                title="Bereit für eine fiskalkonforme Studio-Kasse?"
                description="14 Tage kostenlos testen. Kasse als Add-on ab 39 €/Monat zzgl. einmalig 149 € Einrichtung – ohne Transaktionsgebühr an Treatflow."
                secondaryLabel="Preise ansehen"
                secondaryHref="/preise"
            />

            <Footer />
        </div>
    );
}
