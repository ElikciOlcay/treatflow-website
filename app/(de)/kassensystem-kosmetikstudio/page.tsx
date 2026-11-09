import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import SocialProofBar from '@/app/components/SocialProofBar';
import ContentAttribution from '@/app/components/ContentAttribution';
import ProductVideoSection from '@/app/components/ProductVideoSection';
import { generateBreadcrumbSchema } from '@/app/components/Breadcrumbs';
import { FeatureFaq, FeaturePageCta, FeatureRelated } from '@/app/components/FeatureSections';
import KasseHero from '@/app/components/kasse/KasseHero';
import KasseTrustMarquee from '@/app/components/kasse/KasseTrustMarquee';
import KasseFlowSteps, { KASSE_FLOW_STEPS } from '@/app/components/kasse/KasseFlowSteps';
import KasseCountries from '@/app/components/kasse/KasseCountries';
import KasseFeatureBento from '@/app/components/kasse/KasseFeatureBento';
import KasseDayClose from '@/app/components/kasse/KasseDayClose';
import KasseComparison from '@/app/components/kasse/KasseComparison';
import KasseIndustries from '@/app/components/kasse/KasseIndustries';
import KassePricing from '@/app/components/kasse/KassePricing';

const PAGE_URL = 'https://www.treatflow.io/kassensystem-kosmetikstudio';
const DATE_PUBLISHED = '2026-06-23';
const DATE_MODIFIED = '2026-11-09';

export const metadata = {
    title: 'Kassensystem Kosmetikstudio: TSE- & RKSV-Kasse ab 39 €',
    description:
        'Kassensystem fürs Kosmetikstudio: aus dem Termin kassieren, TSE (DE) & RKSV (AT) inklusive, SumUp, Gutscheine, Z-Bericht. Ab 39 €/Monat, ohne Provision.',
    keywords: [
        'Kassensystem Kosmetikstudio', 'Kassensystem Kosmetik', 'Kosmetikstudio Kassensystem', 'Kassensysteme für Kosmetikstudios',
        'Kasse Kosmetikstudio', 'Kassa Kosmetikstudio', 'Kassasystem Kosmetikstudio', 'Registrierkasse Kosmetikstudio',
        'Kassensoftware Kosmetik', 'TSE Kasse Kosmetikstudio', 'RKSV Registrierkasse', 'KassenSichV Kasse',
        'Kasse Beauty Salon', 'Kassensystem Nagelstudio', 'Kassensystem Massage', 'Kasse mit Terminbuchung',
        'Kasse mit Kundenkartei', 'ELSTER Kassenmeldung', 'Registrierkasse FinanzOnline', 'DSFinV-K Export', 'DEP7 Export',
        'SumUp Kasse Kosmetikstudio', 'Kartenzahlung Kosmetikstudio', 'Gutscheine Kasse', 'Z-Bericht Tagesabschluss',
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        siteName: 'Treatflow',
        title: 'Kassensystem Kosmetikstudio: TSE- & RKSV-Kasse',
        description:
            'Direkt aus dem Termin kassieren – TSE (DE) und RKSV (AT) inklusive, SumUp-Kartenzahlung, Gutscheine, Z-Bericht und Steuerberater-Export.',
        url: PAGE_URL,
        images: [
            {
                url: '/images/sumup-solo.jpg',
                width: 996,
                height: 721,
                alt: 'SumUp Solo Kartenterminal – verbunden mit der Treatflow Kasse',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kassensystem fürs Kosmetikstudio – TSE & RKSV',
        description: 'Direkt aus dem Termin kassieren, TSE- und RKSV-konform, mit SumUp und Gutscheinen. Ab 39 €/Monat.',
    },
};

const quickAnswers = [
    {
        question: 'Welches Kassensystem eignet sich für Kosmetikstudios?',
        answer:
            'Ein Kassensystem fürs Kosmetikstudio sollte mit Terminen und Kundenkartei verbunden und fiskalkonform sein. Treatflow bietet eine cloudbasierte Kasse, die direkt in die Studio-Software integriert ist: TSE-konform nach KassenSichV in Deutschland und RKSV-konform in Österreich, beides über fiskaly. Du kassierst aus dem Terminkalender, nimmst Bar, Karte über SumUp, Gutschein und Überweisung an und exportierst DSFinV-K bzw. DEP7 für den Steuerberater. Die Kasse kostet 39 €/Monat als Add-on zum Booking-Plan, zzgl. einmalig 149 € Einrichtung, ohne Transaktionsgebühr.',
    },
    {
        question: 'Brauche ich als Kosmetikstudio eine Registrierkasse?',
        answer:
            'In Deutschland nicht zwingend – wer aber elektronisch kassiert, braucht eine zertifizierte TSE, muss Belege ausgeben und die Kasse über ELSTER beim Finanzamt melden. In Österreich gilt die Registrierkassenpflicht ab 15.000 € Jahresumsatz, wenn mehr als 7.500 € davon Barumsätze sind; Bankomat- und Kreditkartenzahlungen zählen dabei mit. Treatflow erfüllt beide Vorgaben automatisch.',
    },
];

const faqs = [
    {
        question: 'Kasse, Kassa oder Registrierkasse – was ist der Unterschied?',
        answer:
            'Gemeint ist meist dasselbe: In Deutschland sagt man Kasse, in Österreich Kassa. „Registrierkasse“ ist der österreichische Begriff aus der Registrierkassensicherheitsverordnung (RKSV); in Deutschland spricht das Gesetz von einem elektronischen Aufzeichnungssystem mit technischer Sicherheitseinrichtung (TSE). Die Treatflow Kasse erfüllt beide Vorgaben – passend zum Land deines Studios.',
    },
    {
        question: 'Ist die Treatflow Kasse TSE- und RKSV-konform?',
        answer:
            'Ja. In Deutschland signiert Treatflow jeden Verkauf über eine zertifizierte Cloud-TSE von fiskaly gemäß KassenSichV und erstellt DSFinV-K-Exporte. In Österreich erfüllt die Kasse die RKSV über fiskaly SIGN AT, inklusive Start-, Monats-, Jahres- und Schlussbeleg sowie DEP7-Export. Die Belege tragen Signatur und QR-Code.',
    },
    {
        question: 'Braucht mein Kosmetikstudio in Deutschland eine TSE-Kasse?',
        answer:
            'Eine allgemeine Kassenpflicht gibt es in Deutschland nicht – eine offene Ladenkasse ist weiterhin erlaubt. Sobald du aber elektronisch kassierst, muss das System nach der Kassensicherungsverordnung (KassenSichV) eine zertifizierte TSE haben. Außerdem gilt die Belegausgabepflicht, und seit 2025 muss die Kasse dem Finanzamt über ELSTER gemeldet werden. Mit Treatflow ist all das abgedeckt.',
    },
    {
        question: 'Ab wann brauche ich in Österreich eine Registrierkasse?',
        answer:
            'Die Registrierkassenpflicht gilt ab einem Jahresumsatz von 15.000 € netto pro Betrieb, wenn davon mehr als 7.500 € Barumsätze sind. Als Barumsatz zählen auch Zahlungen mit Bankomat- oder Kreditkarte. Unabhängig davon musst du für jede Barzahlung einen Beleg ausstellen (Belegerteilungspflicht).',
    },
    {
        question: 'Muss ich meine Kasse beim Finanzamt anmelden?',
        answer:
            'Ja, in beiden Ländern. In Deutschland müssen elektronische Kassen seit 2025 über ELSTER gemeldet werden: Du bestätigst in Treatflow die Angaben, Treatflow übermittelt die Meldung. In Österreich werden Kasse und Signaturerstellungseinheit in FinanzOnline registriert – Treatflow erledigt das mit deinen FinanzOnline-Webservice-Zugangsdaten automatisch.',
    },
    {
        question: 'Was kostet das Kassensystem von Treatflow?',
        answer:
            'Die Kasse ist ein Add-on zum Booking-Plan und kostet 39 €/Monat (zzgl. MwSt.), bei jährlicher Zahlung 35 €/Monat. Einmalig kommen 149 € für die Einrichtung von TSE bzw. RKSV dazu. Treatflow verlangt keine Transaktionsgebühr und keine Provision pro Verkauf; für Kartenzahlungen gelten die Gebühren deines SumUp-Kontos.',
    },
    {
        question: 'Kann ich die Kasse vorher testen?',
        answer:
            'Ja. Treatflow selbst testest du 14 Tage kostenlos. Die Kasse kannst du in der App zusätzlich 7 Tage im Testmodus nutzen – ohne Einrichtungsgebühr und noch ohne Fiskalisierung. Erst wenn du sie aktivierst, wird die TSE- bzw. RKSV-Anbindung eingerichtet.',
    },
    {
        question: 'Kann ich direkt aus einem Termin kassieren?',
        answer:
            'Ja. Aus dem Treatflow-Terminkalender startest du den Kassiervorgang mit einem Klick – Kundin, Behandlung und Preis werden automatisch in den Warenkorb übernommen. Du kannst Produkte ergänzen, Rabatte vergeben, Preise anpassen und die Zahlart wählen. Der Verkauf erscheint danach in der Kundenkartei.',
    },
    {
        question: 'Welche Zahlarten unterstützt die Kasse?',
        answer:
            'Barzahlung mit Wechselgeld-Rechnung, Kartenzahlung über SumUp, Gutschein, Überweisung und Split-Zahlung (ein Teil bar, der Rest mit Karte). Alle Zahlungen stehen getrennt auf dem Beleg und im Kassenbericht.',
    },
    {
        question: 'Funktioniert die Treatflow Kasse mit SumUp?',
        answer:
            'Ja. Du verbindest dein SumUp-Konto und koppelst ein SumUp Solo oder Air Terminal. Beim Kassieren wählst du „Karte“, und der Betrag geht automatisch ans Terminal – ohne Eintippen. Erst wenn die Kundin am Terminal bezahlt hat, wird der Verkauf abgeschlossen; bricht sie ab, wählst du einfach eine andere Zahlart.',
    },
    {
        question: 'Wie funktioniert der Tagesabschluss?',
        answer:
            'Du öffnest morgens eine Kassensitzung mit dem Wechselgeld als Anfangsbestand. Am Abend zählst du das Bargeld, Treatflow vergleicht Soll- und Ist-Bestand und erstellt den Z-Bericht. Zwischendurch zeigt der X-Bericht den aktuellen Stand. Vergessene Sitzungen schließt Treatflow nachts um 05:00 Uhr automatisch.',
    },
    {
        question: 'Wie wird Trinkgeld behandelt?',
        answer:
            'Trinkgeld erfasst du beim Bezahlen separat. Es steht als eigene Position auf dem Beleg, zählt nicht zum Umsatz und wird in Dashboard, Z-Bericht und Export getrennt ausgewiesen.',
    },
    {
        question: 'Kann mein Steuerberater die Daten exportieren?',
        answer:
            'Ja. Du exportierst Kassenberichte als PDF, alle Belege als Archiv und Transaktionen als CSV. Für Prüfungen stehen die amtlichen Formate DSFinV-K (Deutschland) und DEP7 (Österreich) auf Knopfdruck bereit.',
    },
    {
        question: 'Was ist DSFinV-K bzw. DEP7?',
        answer:
            'DSFinV-K (Digitale Schnittstelle der Finanzverwaltung für Kassensysteme) ist das einheitliche Exportformat, das Prüfer in Deutschland verlangen. DEP7 ist das Datenerfassungsprotokoll nach der österreichischen RKSV. Treatflow erzeugt beide Exporte, sodass dein Steuerberater oder das Finanzamt alle Daten in der geforderten Struktur erhält.',
    },
    {
        question: 'Brauche ich zusätzliche Hardware?',
        answer:
            'Nein. Die Kasse läuft im Browser auf Tablet, Laptop oder Smartphone. Belege druckst du als PDF auf jedem Drucker oder schickst sie per E-Mail. Für Kartenzahlungen brauchst du nur ein SumUp-Terminal (Solo oder Air).',
    },
    {
        question: 'Können mehrere Mitarbeiterinnen an einer Kasse arbeiten?',
        answer:
            'Ja. Mit der Mitarbeiter-PIN meldet sich jede Mitarbeiterin mit ihrer eigenen vierstelligen PIN an. Jeder Verkauf, jedes Storno und jede Bargeldbewegung wird der angemeldeten Person zugeordnet.',
    },
    {
        question: 'Kann ich von meinem alten Kassensystem zu Treatflow wechseln?',
        answer:
            'Ja. Kundinnen, Leistungen und Produkte hast du in Treatflow ohnehin schon, die TSE- bzw. RKSV-Anbindung richten wir bei der Aktivierung ein. Deine alte Kasse meldest du beim Finanzamt ab und bewahrst ihre Daten nach den gesetzlichen Fristen auf.',
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
    alternateName: ['Treatflow Kassa', 'Treatflow Kassensystem'],
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Point of Sale / Kassensoftware',
    operatingSystem: 'Web',
    url: PAGE_URL,
    description:
        'TSE- und RKSV-konforme Kassensoftware für Kosmetikstudios, Beauty-Salons und Wellnessbetriebe. Kassieren aus dem Terminkalender, fiskalkonforme Belege, Gutscheine, Tagesabschluss und Steuerberater-Export.',
    brand: { '@type': 'Brand', name: 'Treatflow' },
    featureList: [
        'TSE-Signatur nach KassenSichV über fiskaly (Deutschland)',
        'RKSV-Registrierkasse über fiskaly SIGN AT (Österreich)',
        'ELSTER-Kassenmeldung und FinanzOnline-Registrierung bei der Einrichtung',
        'Kassieren direkt aus dem Terminkalender',
        'Zahlarten: Bar, Karte über SumUp Solo und Air, Gutschein, Überweisung, Split-Zahlung',
        'Trinkgeld getrennt vom Umsatz',
        'Gutscheine verkaufen und einlösen',
        'Belege mit Signatur und QR-Code als PDF oder per E-Mail',
        'Storno als revisionssichere Gegenbuchung',
        'Kassensitzung, X-Bericht, Tagesabschluss mit Kassensturz und Z-Bericht',
        'Mitarbeiter-PIN',
        'Exporte: DSFinV-K (DE), DEP7 (AT), CSV, Kassenbericht und Belegarchiv',
    ],
    offers: {
        '@type': 'Offer',
        name: 'Kasse Add-on',
        price: '39',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        description: 'Add-on zum Booking-Plan, 39 €/Monat zzgl. MwSt. und einmalig 149 € Einrichtung.',
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
    name: 'So kassierst du mit der Treatflow Kasse vom Termin bis zum signierten Beleg',
    totalTime: 'PT1M',
    step: KASSE_FLOW_STEPS.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.text,
        url: `${PAGE_URL}#so-funktionierts`,
    })),
};

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kassensystem fürs Kosmetikstudio',
    url: PAGE_URL,
    inLanguage: 'de',
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    about: { '@type': 'Thing', name: 'Kassensystem für Kosmetikstudios' },
};

const breadcrumbs = [{ label: 'Funktionen', href: '/funktionen' }, { label: 'Kassensystem' }];

const jsonLd = [generateBreadcrumbSchema(breadcrumbs), webPageSchema, productSchema, faqSchema, howToSchema];

export default function KassensystemPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            {jsonLd.map((schema, index) => (
                <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}

            <main>
                <KasseHero breadcrumbs={breadcrumbs} />

                <KasseTrustMarquee />

                {/* Kurz erklärt – direkte Antworten für Suche und KI-Assistenten */}
                <section className="bg-white py-14 sm:py-16">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-indigo-600 lg:text-left">Kurz erklärt</p>
                        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                            {quickAnswers.map((item) => (
                                <div key={item.question}>
                                    <h2 className="mb-2 text-lg font-semibold text-gray-900 hyphens-none" lang="de">
                                        {item.question}
                                    </h2>
                                    <p className="leading-relaxed text-gray-600">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                        <ContentAttribution dateModified={DATE_MODIFIED} datePublished={DATE_PUBLISHED} className="mt-8 lg:justify-start" />
                    </div>
                </section>

                <KasseFlowSteps />

                <KasseCountries />

                <KasseFeatureBento />

                <KasseDayClose />

                <ProductVideoSection
                    title="Die Treatflow Kasse in einer Minute erklärt"
                    description="Behandlungen und Produkte mit wenigen Klicks kassieren – mit TSE und RKSV."
                    videoSrc="/videos/funktionen/kassensystem.mp4"
                    posterSrc="/images/video/funktionen/kassensystem-poster.jpg"
                    posterAlt="Video: Die Treatflow Kasse in einer Minute erklärt"
                />

                <KasseComparison />

                <KasseIndustries />

                <KassePricing />

                <SocialProofBar />

                <FeatureFaq title="Häufige Fragen zum Kassensystem fürs Kosmetikstudio" items={faqs} />

                <FeatureRelated
                    title="Weiterlesen: Länderseiten und Ratgeber"
                    items={[
                        { href: '/kassensystem-kosmetikstudio-deutschland', title: 'Kassensystem Deutschland', description: 'TSE, KassenSichV und ELSTER-Meldung' },
                        { href: '/registrierkasse-kosmetikstudio-oesterreich', title: 'Registrierkasse Österreich', description: 'RKSV, FinanzOnline und DEP7' },
                        { href: '/kasse-mit-kundenkartei-kosmetikstudio', title: 'Kasse mit Kundenkartei', description: 'Verkäufe direkt in der Kartei' },
                        { href: '/blog/kassensystem-kosmetikstudio', title: 'Ratgeber: Kassensystem wählen', description: 'TSE-Pflicht, GoBD und Auswahl' },
                        { href: '/blog/registrierkasse-kosmetikstudio-oesterreich', title: 'Ratgeber: Registrierkasse', description: 'Wann die RKSV greift' },
                        { href: '/gutscheine-kosmetikstudio', title: 'Gutscheine', description: 'Online und an der Kasse verkaufen' },
                    ]}
                />

                <FeaturePageCta
                    title="Bereit für eine Kasse, die dein Studio kennt?"
                    description="14 Tage kostenlos testen. Kasse als Add-on ab 39 €/Monat zzgl. einmalig 149 € Einrichtung – ohne Transaktionsgebühr an Treatflow."
                    secondaryLabel="Preise ansehen"
                    secondaryHref="/preise"
                />
            </main>

            <Footer />
        </div>
    );
}
