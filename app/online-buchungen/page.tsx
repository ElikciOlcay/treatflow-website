import { Link2, Calendar, Bell, Languages, Ticket, ListOrdered } from 'lucide-react';
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
    title: 'Online-Terminbuchung & Buchungssystem Kosmetikstudio',
    description: 'Online-Terminbuchung für dein Kosmetikstudio: Kunden buchen 24/7 über deinen persönlichen Link. Automatische Bestätigungen, weniger No-Shows.',
    keywords: ['Online Terminbuchung Kosmetikstudio', 'Online Buchungssystem Kosmetikstudio', 'Buchungssystem Kosmetik', 'Online Buchungssystem Kosmetik', 'Terminbuchungssoftware Kosmetik', 'Buchungssoftware Kosmetikstudio', 'Buchungslink Beauty', '24/7 Terminbuchung', 'Online-Terminbuchung Kosmetik', 'Kosmetikstudio Buchungssystem', 'mehrsprachige Buchungsseite', 'Buchungsseite mehrere Sprachen', 'Rabattcodes Online-Buchung', 'Rabattcode Kosmetikstudio', 'Warteliste Kosmetikstudio', 'Warteliste Online-Buchung'],
    alternates: {
        canonical: 'https://www.treatflow.io/online-buchungen',
        ...buildHreflangAlternates('online-booking'),
    },
    openGraph: {
        title: 'Online-Buchungen für Kosmetikstudios',
        description: 'Kein Telefonstress mehr: deine Kunden buchen rund um die Uhr, mit automatischen Bestätigungen und ohne Doppelbuchungen.',
        url: 'https://www.treatflow.io/online-buchungen',
        images: [{ url: '/images/og-online-buchungen.jpg', width: 1200, height: 630, alt: 'Treatflow Online-Buchungssystem' }],
    },
};

const faqs = [
    {
        question: 'Welches Online-Buchungssystem eignet sich für Kosmetikstudios?',
        answer: 'Treatflow bietet ein spezialisiertes Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink, automatischen Bestätigungen per E-Mail und SMS, Mitarbeiterkalendern und Integration mit Kundenkartei und Dokumentation. Ab 59 EUR pro Monat.',
    },
    {
        question: 'Wie kann ich Online-Buchungen für mein Studio einrichten?',
        answer: 'In drei Schritten: 1) Lege deine Behandlungen mit Dauer und Preis an, 2) Hinterlege deine Arbeitszeiten und Verfügbarkeit, 3) Teile deinen persönlichen Buchungslink auf Instagram, deiner Website oder per WhatsApp. Die Einrichtung dauert weniger als 10 Minuten.',
    },
    {
        question: 'Was kostet ein Online-Buchungssystem für Kosmetikstudios?',
        answer: 'Treatflow bietet Online-Buchungen im Booking-Plan ab 59 EUR pro Monat an. Es gibt keine Provision pro Buchung, keine versteckten Kosten und 14 Tage kostenlose Testphase ohne Kreditkarte.',
    },
    {
        question: 'Können Kunden rund um die Uhr Termine buchen?',
        answer: 'Ja. Dein persönlicher Buchungslink ist 24/7 erreichbar. Deine Kunden können jederzeit verfügbare Termine sehen und buchen – auch abends oder am Wochenende. Über 60 % der Buchungen finden außerhalb der Geschäftszeiten statt.',
    },
    {
        question: 'Wie reduziert ein Buchungssystem No-Shows?',
        answer: 'Durch automatische Terminerinnerungen per SMS und E-Mail zu konfigurierbaren Zeitpunkten vor dem Termin. Kunden werden erinnert und können bei Bedarf stornieren, sodass der Termin für andere frei wird. Studios berichten von bis zu 80% weniger No-Shows.',
    },
    {
        question: 'Was passiert, wenn alle Termine ausgebucht sind?',
        answer: 'Mit der Warteliste können sich deine Kunden auf freie Termine vormerken lassen. Wird ein bestehender Termin storniert, bekommen passende Interessenten automatisch eine E-Mail mit den frei gewordenen Zeiten. So gehen dir keine Anfragen verloren.',
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

export default function OnlineBuchungenPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Online-Buchungen' },
                        ])
                    ),
                }}
            />
            <Script id="online-buchungen-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script
                id="online-buchungen-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Online-Terminbuchung & Buchungssystem Kosmetikstudio',
                            description: 'Online-Terminbuchung für dein Kosmetikstudio: Kunden buchen 24/7 über deinen persönlichen Link. Automatische Bestätigungen, weniger No-Shows.',
                            url: 'https://www.treatflow.io/online-buchungen',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />

            <FeatureHero
                theme="orange"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Online-Buchungen' },
                ]}
                eyebrow="Online-Buchungen"
                eyebrowIcon={Link2}
                title={<>Online-Buchung für dein <FeatureTitleHighlight theme="orange">Studio</FeatureTitleHighlight></>}
                description="Persönlicher Buchungslink – Kundinnen buchen rund um die Uhr. Termine landen automatisch im Kalender."
                chips={['24/7 buchbar', 'Keine Provision', 'Warteliste inklusive']}
                secondaryCta={{ label: 'Zum Terminkalender', href: '/terminkalender' }}
                aiCapsule={{
                    question: 'Welches Online-Buchungssystem eignet sich für Kosmetikstudios?',
                    answer: 'Treatflow bietet ein spezialisiertes Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink, 24/7-Terminbuchung, automatischen Bestätigungen per E-Mail und SMS sowie Integration mit Kundenkartei und Dokumentation. Keine Provision pro Buchung, ab 59 EUR/Monat im Booking-Plan, 14 Tage kostenlos testen.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/mockups/online-buchung-hero.png',
                    alt: 'Treatflow Online-Buchungssystem – persönlicher Buchungslink',
                }}
            />

            <FeatureUnderstand
                theme="orange"
                title="Deine Kunden buchen selbst – du behandelst"
                description="Mit deinem persönlichen Buchungslink können Kunden rund um die Uhr Termine auswählen. Du sparst dir Telefonate und Hin-und-Her-Schreiben."
                items={[
                    {
                        icon: Calendar,
                        title: 'Rund um die Uhr geöffnet',
                        text: 'Dein Buchungslink ist 24/7 erreichbar. Über 60 % der Buchungen kommen abends oder am Wochenende rein.',
                    },
                    {
                        icon: Bell,
                        title: 'Bestätigung und Erinnerung automatisch',
                        text: 'Nach der Buchung bekommt dein Kunde sofort eine Bestätigung. Vor dem Termin folgt eine Erinnerung per SMS oder E-Mail.',
                    },
                    {
                        icon: ListOrdered,
                        title: 'Warteliste bei vollen Tagen',
                        text: 'Wenn alles ausgebucht ist, kann sich dein Kunde vormerken. Wird ein Termin frei, bekommt er automatisch Bescheid.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="orange"
                description="In drei Schritten zum eigenen Buchungslink."
                steps={[
                    { title: 'Behandlungen anlegen', text: 'Lege fest, welche Behandlungen buchbar sind, wie lange sie dauern und was sie kosten. Das System zeigt deinen Kunden nur freie Zeiten.' },
                    { title: 'Link teilen', text: 'Teile deinen persönlichen Buchungslink auf Instagram, deiner Website oder per WhatsApp. Einen QR-Code zum Ausdrucken gibt es auch.' },
                    { title: 'Buchungen kommen rein', text: 'Neue Termine erscheinen automatisch in deinem Kalender. Bestätigungen und Erinnerungen gehen von allein raus.' },
                ]}
            />

            <FeatureCards
                theme="orange"
                title="Was du bekommst"
                description="Buchungslink, Sprachen, Warteliste und Rabatte – ohne Provision pro Termin."
                items={[
                    { icon: Link2, title: 'Persönlicher Buchungslink', text: 'Dein Link zum Teilen auf Website und Social Media – mit Studio-Branding.', points: ['Individueller Link', 'QR-Code', 'Studio-Branding'] },
                    { icon: Languages, title: 'Sechs Sprachen', text: 'Die Buchungsseite passt sich der Sprache der Kundin an – ohne extra Setup.', points: ['DE, EN, TR, PL, IT, RU', 'Automatische Sprache', 'Ohne Barriere'] },
                    { icon: ListOrdered, title: 'Warteliste', text: 'Bei Ausbuchung vormerken. Wird ein Termin frei, geht eine E-Mail an passende Interessenten.', points: ['Auto-Mail bei Storno', 'Zwei Benachrichtigungsmodi', 'Übersicht im Dashboard'] },
                    { icon: Ticket, title: 'Rabattcodes', text: 'Codes für Neukunden und Kampagnen – direkt bei der Online-Buchung einlösen.', points: ['Neukunden & Aktionen', 'Einlösung beim Buchen', 'Nutzungsstatistik'] },
                    { icon: Bell, title: 'Erinnerungen', text: 'SMS und E-Mail vor dem Termin. Kundinnen können rechtzeitig stornieren, der Slot wird frei.', points: ['SMS & E-Mail', 'Flexible Zeitpunkte', 'Weniger No-Shows'] },
                    { icon: Calendar, title: 'Flexible Termine', text: 'Arbeitszeiten, Behandlungsdauern, Pausen und Urlaub – nur echte Verfügbarkeit wird angeboten.', points: ['Arbeitszeiten', 'Pausen & Urlaub', 'Keine Doppelbuchung'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zu Online-Buchungen" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/terminkalender', title: 'Terminkalender', description: 'Buchungen landen direkt im Plan' },
                    { href: '/nachrichtenautomatisierung', title: 'Nachrichten', description: 'Bestätigung und Reminder automatisch' },
                    { href: '/kundenverwaltung', title: 'Kundenverwaltung', description: 'Neue Buchung, bekanntes Profil' },
                ]}
            />

            <FeaturePageCta
                theme="orange"
                title="Bereit für automatische Buchungen?"
                description="14 Tage kostenlos testen – ohne Kreditkarte und ohne Provision pro Buchung."
                secondaryLabel="Zum Terminkalender"
                secondaryHref="/terminkalender"
            />

            <Footer />
        </div>
    );
}
