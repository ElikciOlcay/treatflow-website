import { Clock, Heart, MessageCircle, Zap, Mail, Bell } from 'lucide-react';
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
    title: 'SMS & E-Mail Erinnerungen fürs Kosmetikstudio',
    description: 'Automatische Nachrichten per E-Mail und SMS für Kosmetikstudios: Terminbestätigungen, Erinnerungen, Stornierungen und Follow-ups. Ab 0,09 EUR pro SMS.',
    keywords: ['Nachrichtenautomatisierung Kosmetik', 'SMS Terminerinnerung Kosmetikstudio', 'No-Show reduzieren Kosmetikstudio', 'Automatische Terminerinnerungen', 'SMS Terminbestätigung', 'Follow-up E-Mails', 'Geburtstagswünsche automatisch', 'Kundenbindung Beauty Studio'],
    alternates: {
        canonical: 'https://www.treatflow.io/nachrichtenautomatisierung',
        ...buildHreflangAlternates('messaging'),
    },
    openGraph: {
        title: 'SMS & E-Mail Erinnerungen für Kosmetikstudios',
        description: 'Automatische Nachrichten per E-Mail und SMS: Terminbestätigungen, Erinnerungen, Stornierungen und Follow-ups.',
        url: 'https://www.treatflow.io/nachrichtenautomatisierung',
        images: [
            {
                url: '/images/mockups/nachrichtenautomatisierung.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Nachrichtenautomatisierung',
            },
        ],
    },
};

const faqs = [
    {
        question: 'Wie kann ich No-Shows im Kosmetikstudio reduzieren?',
        answer: 'Automatische Terminerinnerungen per SMS und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten (z.B. 3 Tage und 1 Tag vor dem Termin). Studios berichten von bis zu 80% weniger Ausfällen.',
    },
    {
        question: 'Was kosten SMS-Erinnerungen für Termine?',
        answer: 'SMS-Erinnerungen bei Treatflow kosten ab 0,09 EUR pro SMS. Die SMS-Automatisierung ist im Booking-Plan (59 EUR/Monat) enthalten. E-Mail-Erinnerungen sind in allen Plänen kostenlos und unbegrenzt.',
    },
    {
        question: 'Welche Nachrichten sollte ich automatisieren?',
        answer: 'Die wichtigsten automatisierten Nachrichten sind: Buchungsbestätigungen, Terminerinnerungen (1-7 Tage vorher), Stornierungsbenachrichtigungen, Follow-up-Nachrichten nach Behandlungen und Geburtstagswünsche. Damit sparst du Zeit und stärkst die Kundenbindung.',
    },
    {
        question: 'Funktionieren SMS-Erinnerungen besser als E-Mails?',
        answer: 'SMS haben eine Öffnungsrate von über 95%, E-Mails nur 20-30%. Für Terminerinnerungen empfehlen wir SMS, für ausführlichere Nachrichten wie Follow-ups oder Nachsorgehinweise eignen sich E-Mails besser. Treatflow unterstützt beide Kanäle.',
    },
    {
        question: 'Kann ich Nachsorge-Nachrichten automatisch versenden?',
        answer: 'Ja. Mit Treatflow kannst du automatische Follow-up-Nachrichten nach Behandlungen einrichten. Diese können Nachsorgetipps, Feedback-Anfragen oder Angebote für Folgetermine enthalten - per E-Mail oder SMS.',
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

export default function NachrichtenautomatisierungPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Nachrichten' },
                        ])
                    ),
                }}
            />
            <Script
                id="nachrichtenautomatisierung-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="nachrichtenautomatisierung-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'SMS & E-Mail Erinnerungen fürs Kosmetikstudio',
                            description:
                                'Automatische Nachrichten per E-Mail und SMS für Kosmetikstudios: Terminbestätigungen, Erinnerungen, Stornierungen und Follow-ups.',
                            url: 'https://www.treatflow.io/nachrichtenautomatisierung',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />

            <FeatureHero
                theme="purple"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Nachrichten' },
                ]}
                eyebrow="Nachrichtenautomatisierung"
                eyebrowIcon={MessageCircle}
                title={<>Automatische <FeatureTitleHighlight theme="purple">Erinnerungen</FeatureTitleHighlight></>}
                description="Terminbestätigungen, Reminder und Follow-ups per E-Mail und SMS – weniger No-Shows, mehr Bindung."
                chips={['SMS & E-Mail', 'Bis 80% weniger No-Shows', 'Geburtstagsgrüße']}
                secondaryCta={{ label: 'Zum Terminkalender', href: '/terminkalender' }}
                aiCapsule={{
                    question: 'Wie kann ich No-Shows im Kosmetikstudio reduzieren?',
                    answer: 'Automatische Terminerinnerungen per SMS und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten (z. B. 24 Stunden und 2 Stunden vor dem Termin). Studios mit aktivierten Remindern berichten von bis zu 80% weniger ausgefallenen Terminen.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/lifestyle/sms-erinnerung-studio.png',
                    alt: 'SMS-Erinnerung im Studio – Kundin erhält Terminerinnerung auf dem Smartphone',
                }}
            />

            <FeatureUnderstand
                theme="purple"
                title="Nachrichten, die automatisch rausgehen"
                description="Terminbestätigung, Erinnerung und Nachsorge – deine Kunden bekommen die richtige Nachricht zur richtigen Zeit, ohne dass du etwas tun musst."
                items={[
                    {
                        icon: Bell,
                        title: 'Weniger vergessene Termine',
                        text: 'Deine Kunden bekommen 1–7 Tage vor dem Termin eine Erinnerung per SMS oder E-Mail. Studios berichten von bis zu 80 % weniger Ausfällen.',
                    },
                    {
                        icon: MessageCircle,
                        title: 'Nachsorge und Follow-up',
                        text: 'Nach der Behandlung bekommt dein Kunde automatisch Tipps, eine Feedback-Anfrage oder ein Folgetermin-Angebot.',
                    },
                    {
                        icon: Heart,
                        title: 'Persönliche Grüße',
                        text: 'Geburtstagswünsche und personalisierte Nachrichten gehen automatisch raus – das stärkt die Bindung ohne Extra-Aufwand.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="purple"
                description="In drei Schritten zu automatischen Nachrichten."
                steps={[
                    { title: 'Vorlage wählen', text: 'Wähle eine fertige Vorlage für Bestätigung, Erinnerung oder Follow-up. Platzhalter wie Name und Termindatum werden automatisch gefüllt.' },
                    { title: 'Zeitpunkt festlegen', text: 'Bestimme, wann die Nachricht rausgehen soll – z. B. 3 Tage und 1 Tag vor dem Termin oder direkt nach der Behandlung.' },
                    { title: 'Läuft von allein', text: 'Treatflow verschickt die Nachrichten per E-Mail oder SMS zur richtigen Zeit. Du kümmerst dich um deine Kunden.' },
                ]}
            />

            <FeatureCards
                theme="purple"
                title="Was du bekommst"
                description="Alles für automatische Kundenkommunikation – klar und steuerbar."
                items={[
                    { icon: Clock, title: 'Terminerinnerungen', text: 'Flexibler Zeitpunkt, personalisierte Texte, SMS und E-Mail.', points: ['1–7 Tage vorher', 'Beide Kanäle', 'Weniger Ausfälle'] },
                    { icon: Mail, title: 'Buchungsbestätigung', text: 'Sofort nach der Buchung – mit Termin, Behandlung und Studio-Infos.', points: ['Automatisch', 'Klarer Inhalt', 'Weniger Rückfragen'] },
                    { icon: MessageCircle, title: 'Follow-up & Nachsorge', text: 'Nach der Behandlung Tipps, Feedback oder Folgetermin anbieten.', points: ['E-Mail oder SMS', 'Vorlagen', 'Mehr Bindung'] },
                    { icon: Heart, title: 'Geburtstagswünsche', text: 'Persönliche Grüße und optionale Angebote am Geburtstag.', points: ['Automatisch', 'Rabatt möglich', 'Stärkere Bindung'] },
                    { icon: Zap, title: 'Platzhalter', text: 'Name, Termin, Behandlung – Texte füllen sich von selbst.', points: ['Personalisierung', 'Behandlungsspezifisch', 'Schnelle Vorlagen'] },
                    { icon: Bell, title: 'Storno-Infos', text: 'Kunden und Studio bleiben bei Absagen auf dem Laufenden.', points: ['Sofort', 'Transparent', 'Weniger Chaos'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur Nachrichtenautomatisierung" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/sms-erinnerungen-kosmetikstudio', title: 'SMS-Erinnerungen', description: 'Weniger No-Shows durch SMS' },
                    { href: '/terminkalender', title: 'Terminkalender', description: 'Termine & Erinnerungen zusammen' },
                    { href: '/online-buchungen', title: 'Online-Buchungen', description: '24/7 Buchung über deinen Link' },
                ]}
            />

            <FeaturePageCta
                theme="purple"
                title="Bereit für automatische Kundenkommunikation?"
                description="14 Tage kostenlos testen – Erinnerungen, Follow-ups und Geburtstage ohne Extra-Arbeit."
                secondaryLabel="Zum Terminkalender"
                secondaryHref="/terminkalender"
            />

            <Footer />
        </div>
    );
}
