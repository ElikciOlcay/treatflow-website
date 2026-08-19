import { Calendar, Users, Bell, Move, Clock, LayoutGrid } from 'lucide-react';
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
import { buildHreflangAlternates } from '../i18n/seo';
import { generateWebPageSchema } from '@/lib/content-attribution';

const PAGE_DATE_MODIFIED = '2026-08-18';
const PAGE_DATE_PUBLISHED = '2024-06-01';

export const metadata = {
    title: 'Terminkalender Kosmetikstudio: Team & Räume planen',
    description: 'Terminplaner fürs Kosmetikstudio mit Tagesansicht für Mitarbeiter und Räume, Drag & Drop, Online-Buchung und automatischen Erinnerungen. Auslastung planen und Doppelbelegungen vermeiden.',
    keywords: ['Terminsoftware Kosmetikstudio', 'Terminplaner Kosmetikstudio', 'Terminplaner für Kosmetikstudio', 'Terminkalender Kosmetikstudio', 'Tagesansicht Mitarbeiter', 'Raumplanung Kosmetikstudio', 'Mitarbeiter Auslastung planen', 'Drag and Drop Terminplaner', 'Kosmetikstudio Terminverwaltung', 'Terminbuchungssoftware Kosmetiker'],
    alternates: {
        canonical: 'https://www.treatflow.io/terminkalender',
        ...buildHreflangAlternates('appointment-calendar'),
    },
    openGraph: {
        title: 'Terminkalender für Team & Räume | Treatflow',
        description: 'Plane Mitarbeiter, Räume und Termine übersichtlich in einer Tagesansicht – mit Drag & Drop, Online-Buchungen und automatischen Erinnerungen.',
        url: 'https://www.treatflow.io/terminkalender',
        images: [{ url: '/images/mockups/kalender-overview.png', width: 1200, height: 630, alt: 'Treatflow Terminkalender Interface' }],
    },
};

const faqs = [
    {
        question: 'Wie organisiere ich Termine im Kosmetikstudio am besten?',
        answer: 'Mit einer spezialisierten Terminsoftware wie Treatflow organisierst du Termine am effizientesten. Online-Buchungen ermöglichen Kunden 24/7 zu buchen, automatische Erinnerungen per SMS reduzieren No-Shows um bis zu 80%, und die übersichtliche Kalenderansicht gibt dir jederzeit den vollen Überblick.',
    },
    {
        question: 'Was kostet eine Terminsoftware für Kosmetikstudios?',
        answer: 'Treatflow bietet Terminverwaltung mit Online-Buchungen ab 59 EUR pro Monat im Booking-Plan. 14 Tage kostenlos testen, keine Kreditkarte nötig. Es gibt keine versteckten Kosten oder Provisionen pro Buchung.',
    },
    {
        question: 'Können meine Kunden online Termine buchen?',
        answer: 'Ja. Du bekommst einen persönlichen Buchungslink, den du auf deiner Website, auf Instagram oder per WhatsApp teilen kannst. Deine Kunden können darüber rund um die Uhr Behandlungen und Termine auswählen. Neue Buchungen erscheinen sofort im Kalender, Bestätigungen werden automatisch per E-Mail und SMS versendet.',
    },
    {
        question: 'Wie reduziere ich No-Shows im Kosmetikstudio?',
        answer: 'Automatische Terminerinnerungen per SMS und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten vor dem Termin. Studios berichten von bis zu 80% weniger No-Shows.',
    },
    {
        question: 'Welche Funktionen sollte ein Terminplaner für Kosmetikstudios haben?',
        answer: 'Ein guter Terminplaner für Kosmetikstudios sollte Online-Buchungen, Tages-/Wochen-/Monatsansichten, Mitarbeiter- und Raumplanung, automatische Erinnerungen per SMS und E-Mail, Drag & Drop und eine Integration mit Kundenkartei und Dokumentation bieten.',
    },
    {
        question: 'Wie plane ich mehrere Mitarbeiter und Räume im Kosmetikstudio?',
        answer: 'Mit der Tagesansicht von Treatflow siehst du Mitarbeiter oder Räume in getrennten Spalten. So erkennst du freie Kapazitäten, vermeidest Doppelbelegungen und kannst spontane Änderungen im Studioalltag leichter koordinieren.',
    },
    {
        question: 'Wie vermeide ich Doppelbelegungen bei Mitarbeitern und Räumen?',
        answer: 'Treatflow stellt die Auslastung von Mitarbeitern und Räumen übersichtlich nebeneinander dar. Freie und belegte Zeiten sind direkt erkennbar, sodass Engpässe und Doppelbelegungen frühzeitig vermieden werden.',
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

const softwareSchema = {
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
};

export default function TerminkalenderPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Terminkalender' },
                        ])
                    ),
                }}
            />
            <Script id="terminkalender-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script
                id="terminkalender-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Terminkalender Kosmetikstudio: Team & Räume planen',
                            description: 'Terminplaner fürs Kosmetikstudio mit Tagesansicht für Mitarbeiter und Räume, Drag & Drop, Online-Buchung und automatischen Erinnerungen.',
                            url: 'https://www.treatflow.io/terminkalender',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />
            <Script id="terminkalender-software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

            <FeatureHero
                theme="indigo"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Terminkalender' },
                ]}
                eyebrow="Terminkalender"
                eyebrowIcon={Calendar}
                title={<>Termine für Team und <FeatureTitleHighlight>Räume</FeatureTitleHighlight></>}
                description="Mitarbeiter, Räume und Termine in einer Ansicht. Per Drag & Drop umplanen und Doppelbelegungen vermeiden."
                chips={['Drag & Drop', 'Team & Räume', 'Weniger No-Shows']}
                secondaryCta={{ label: 'Online-Buchungen', href: '/online-buchungen' }}
                aiCapsule={{
                    question: 'Wie organisiere ich Termine im Kosmetikstudio am besten?',
                    answer: 'Treatflow bündelt Termine, Mitarbeiter und Räume in einem Kalender. Die Tagesansicht zeigt jede Person oder jeden Raum in einer eigenen Spalte. Dadurch erkennst du freie Kapazitäten, vermeidest Doppelbelegungen und koordinierst Änderungen schneller. Online-Buchungen und automatische Erinnerungen reduzieren zusätzlich Telefonaufwand und No-Shows.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/mockups/kalender-overview.png',
                    alt: 'Treatflow Terminkalender – Tagesansicht mit Mitarbeitern und Räumen',
                }}
            />

            <FeatureUnderstand
                theme="indigo"
                title="Dein digitaler Terminplan für das ganze Studio"
                description="Alle Termine, Mitarbeiter und Räume auf einen Blick – du siehst sofort, wer wann frei ist."
                items={[
                    {
                        icon: Users,
                        title: 'Team, Räume und Leistungen',
                        text: 'Lege deine Mitarbeiter, Behandlungsräume und Leistungen an. Im Kalender siehst du dann für jede Person oder jeden Raum eine eigene Spalte.',
                    },
                    {
                        icon: Move,
                        title: 'Termine verschieben per Drag & Drop',
                        text: 'Wenn sich etwas ändert, ziehst du den Termin einfach an eine andere Stelle – kein Löschen und Neuanlegen nötig.',
                    },
                    {
                        icon: Bell,
                        title: 'Automatische Erinnerungen',
                        text: 'Deine Kunden bekommen vor dem Termin eine SMS oder E-Mail. Das reduziert vergessene Termine um bis zu 80 %.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="indigo"
                description="In drei Schritten zum laufenden Studioplan."
                steps={[
                    { title: 'Team, Leistungen und Räume einrichten', text: 'Trage deine Mitarbeiter, Behandlungen und Räume mit Arbeitszeiten ein. Danach zeigt der Kalender für jeden eine eigene Spalte.' },
                    { title: 'Termine eintragen', text: 'Trage Termine selbst ein oder aktiviere die Online-Buchung – dann erscheinen Buchungen deiner Kunden automatisch im Kalender.' },
                    { title: 'Erinnerungen laufen automatisch', text: 'Deine Kunden bekommen Terminbestätigung und Erinnerung per SMS oder E-Mail – du musst nichts manuell verschicken.' },
                ]}
            />

            <FeatureCards
                theme="indigo"
                title="Was du bekommst"
                description="Alles für die Terminplanung im Studio – Team, Räume und Erinnerungen in einem Kalender."
                items={[
                    { icon: Users, title: 'Team & Räume', text: 'Eine Spalte pro Mitarbeiter oder Raum. Auslastung und freie Zeiten auf einen Blick.', points: ['Spaltenansicht', 'Kapazitäten erkennen', 'Keine Doppelbelegung'] },
                    { icon: Move, title: 'Drag & Drop', text: 'Termine verschieben, verlängern oder tauschen – ohne Formulare und ohne Chaos.', points: ['Umplanen in Sekunden', 'Live im Kalender', 'Fürs ganze Team'] },
                    { icon: LayoutGrid, title: 'Tages- bis Monatsansicht', text: 'Wechsle zwischen Tag, Woche und Monat – je nachdem, was du gerade brauchst.', points: ['Tagesansicht', 'Woche', 'Monat'] },
                    { icon: Bell, title: 'Automatische Erinnerungen', text: 'E-Mail und SMS vor dem Termin. Weniger No-Shows, weniger Nachtelefonieren.', points: ['SMS & E-Mail', 'Flexible Zeitpunkte', 'Storno-Hinweis'] },
                    { icon: Calendar, title: 'Online-Buchung', text: 'Buchungen landen direkt im Kalender. Keine Doppelbuchung, automatische Bestätigung.', points: ['Persönlicher Link', 'Sofort im Kalender', 'Ohne Provision'] },
                    { icon: Clock, title: 'Weniger Verwaltungszeit', text: 'Weniger Anrufe, klarere Abläufe – mehr Zeit für Behandlungen statt für den Plan.', points: ['Weniger Telefonate', 'Klare Slots', 'Schneller Überblick'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur Terminplanung" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/online-buchungen', title: 'Online-Buchungen', description: '24/7 über deinen Buchungslink' },
                    { href: '/kundenverwaltung', title: 'Kundenverwaltung', description: 'Historie direkt am Termin' },
                    { href: '/nachrichtenautomatisierung', title: 'Nachrichten', description: 'Erinnerungen per SMS und E-Mail' },
                ]}
            />

            <FeaturePageCta
                theme="indigo"
                title="Bereit für klare Terminplanung?"
                description="14 Tage kostenlos testen – ohne Kreditkarte. Kalender, Teamplanung und Online-Buchung in einer App."
                secondaryLabel="Online-Buchungen"
                secondaryHref="/online-buchungen"
            />

            <Footer />
        </div>
    );
}
