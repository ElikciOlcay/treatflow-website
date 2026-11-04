import {
    Calendar, Users, FileText, Shield, Bell,
    Clock, ClipboardCheck, Hand, Sparkles
} from 'lucide-react';
import Script from 'next/script';
import Navigation from '@/app/components/Navigation';
import ProductVideoSection from '@/app/components/ProductVideoSection';
import Footer from '@/app/components/Footer';
import SocialProofBar from '@/app/components/SocialProofBar';
import { generateBreadcrumbSchema } from '@/app/components/Breadcrumbs';
import FeatureHero, { FeatureTitleHighlight } from '@/app/components/FeatureHero';
import {
    FeatureUnderstand,
    FeatureCards,
    FeatureChecklist,
    FeatureFaq,
    FeatureRelated,
    FeaturePageCta,
} from '@/app/components/FeatureSections';
import { generateFaqSchema } from '@/lib/schema';

import { buildHreflangAlternates } from "@/app/i18n/seo";
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Massage Software' }];

const faqs = [
    { question: 'Eignet sich Treatflow für verschiedene Massagearten?', answer: 'Ja, du kannst beliebige Behandlungen anlegen - Sportmassage, Aromaöl-Massage, Hot Stone, Lymphdrainage und mehr. Jede mit eigener Dauer und Preis.' },
    { question: 'Können Kunden vorab Fragebögen ausfüllen?', answer: 'Ja, du kannst Kunden einen Link senden. Sie füllen den Gesundheitsfragebogen bequem vorab aus und du hast alle Infos vor der Behandlung.' },
    { question: 'Kann ich Beschwerdebilder pro Kunde speichern?', answer: 'Ja, du kannst für jeden Kunden Beschwerden, Behandlungsbereiche und Notizen speichern. So bist du bei jedem Besuch bestens vorbereitet.' },
    { question: 'Funktioniert die Software für mehrere Masseure?', answer: 'Ja, jeder Masseur erhält einen eigenen Kalender und Buchungslink. Du behältst den Überblick über alle Termine.' },
    { question: 'Was kostet Treatflow?', answer: 'Treatflow bietet flexible Pläne ab 39 EUR im Monat. Du kannst alle Funktionen 14 Tage kostenlos testen - ohne Kreditkarte.' },
];

export const metadata = {
    title: 'Massage Software: Termine, Kunden & Verwaltung',
    description: 'Software für Massage-Praxen und Massagestudios. Online-Terminbuchung, Kundenverwaltung, digitale Formulare und automatische Erinnerungen. 14 Tage gratis.',
    keywords: [
        'Massage Software',
        'Massagepraxis Software',
        'Massage Terminbuchung',
        'Massagestudio Software',
        'Massage Online Buchung',
        'Massage Kundenverwaltung',
        'Massage Terminplaner',
        'Massage Praxis Verwaltung',
        'Masseur Software',
        'Massage Management Software',
        'Physiotherapie Terminbuchung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/massage-software',
        ...buildHreflangAlternates("massage-software"),
    },
    openGraph: {
        title: 'Massage Software - Termine & Kundenverwaltung',
        description: 'Online-Buchungen, Kundenverwaltung und automatische Erinnerungen für Massage-Praxen.',
        url: 'https://www.treatflow.io/massage-software',
        images: [{ url: '/images/og-massage-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Massage-Praxen' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Terminvergabe bindet Zeit', description: 'Telefonische Terminvereinbarungen und Rückrufe kosten Zeit, die du besser für Behandlungen nutzen könntest.' },
    { icon: FileText, title: 'Gesundheitsfragebogen auf Papier', description: 'Vor jeder Massage müssen Beschwerden, Medikamente und Kontraindikationen abgefragt werden. Papierformulare sind umständlich.' },
    { icon: Users, title: 'Beschwerdebilder nicht dokumentiert', description: 'Welche Beschwerden hatte der Kunde beim letzten Besuch? Welche Bereiche wurden behandelt? Ohne System fehlt der Überblick.' },
    { icon: Bell, title: 'Kunden vergessen Folgetermine', description: 'Regelmäßige Massagen sind wichtig für den Behandlungserfolg. Aber Kunden vergessen oft, den nächsten Termin zu buchen.' },
];

const solutions = [
    { icon: Calendar, title: 'Online-Terminbuchung', description: 'Kunden buchen Massagetermine online - nach Behandlungsart, Dauer und Wunschtermin. Rund um die Uhr verfügbar.' },
    { icon: Users, title: 'Kundenprofile mit Beschwerden', description: 'Erfasse Beschwerdebereiche, Behandlungshistorie und individuelle Hinweise pro Kunde. Bei jedem Termin sofort parat.' },
    { icon: ClipboardCheck, title: 'Digitale Gesundheitsfragebögen', description: 'Kunden füllen Fragebögen zu Beschwerden und Kontraindikationen vorab digital aus - das spart Zeit vor der Behandlung.' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Terminerinnerungen per WhatsApp und E-Mail reduzieren No-Shows. Sende auch Erinnerungen an regelmäßige Folgetermine.' },
    { icon: Sparkles, title: 'Follow-up & Kundenbindung', description: 'Automatische Nachrichten nach der Behandlung, Geburtstagswünsche und Erinnerungen an den nächsten Termin.' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Kundendaten verschlüsselt in EU-Rechenzentren gespeichert. Datenschutzkonform und sicher.' },
];

const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const features = [
    'Online-Terminbuchung nach Massageart',
    'Übersichtlicher Terminkalender',
    'Digitale Gesundheitsfragebögen',
    'Kundenverwaltung mit Beschwerdehistorie',
    'Automatische Terminerinnerungen per WhatsApp',
    'Erinnerungen an Folgetermine',
    'Follow-up Nachrichten nach Behandlungen',
    'Geburtstagsnachrichten automatisch',
    'Buchungslink für Website und Social Media',
    'Mehrere Masseure verwalten',
    'DSGVO-konforme Datenspeicherung',
    'Mobil optimiert für Tablet und Smartphone',
];

const related = [
    { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', description: 'All-in-One für Studios' },
    { href: '/terminkalender', title: 'Terminsoftware', description: 'Online-Buchung & Kalender' },
    { href: '/kundenverwaltung', title: 'Digitale Kundenkartei', description: 'Kundendaten & Historie' },
    { href: '/anamnesebogen-kosmetikstudio', title: 'Digitale Anamnesebögen', description: 'Formulare & Einwilligungen' },
    { href: '/online-buchungen', title: 'Online-Terminbuchung', description: 'Kunden buchen 24/7 online' },
    { href: '/nachrichtenautomatisierung', title: 'WhatsApp-Erinnerungen', description: 'Weniger No-Shows durch Erinnerungen' },
    { href: '/behandlungsdokumentation-kosmetikstudio', title: 'Behandlungsdokumentation', description: 'NiSV-konforme Dokumentation' },
    { href: '/digitale-anamnese-kosmetikstudio', title: 'Digitale Anamnese', description: 'Formulare vorab per Link ausfüllen' },
];

export default function MassageSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-massage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-massage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="orange"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für Massage-Praxen"
                eyebrowIcon={Hand}
                title={<>Software für deine <FeatureTitleHighlight theme="orange">Massage-Praxis</FeatureTitleHighlight></>}
                description="Online-Buchungen, Kundenverwaltung und automatische Erinnerungen - damit du dich auf die Behandlung konzentrieren kannst."
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/branchen/hero-massage.jpg',
                    alt: 'Massage-Praxis – ruhig und professionell',
                }}
            />

            <ProductVideoSection
                title="Treatflow für Massagepraxen in einer Minute"
                description="Online-Buchung, Kalender fürs Team, Gesundheitsfragebogen und Befund per Diktat."
                videoSrc="/videos/branchen/massage.mp4"
                posterSrc="/images/video/branchen/massage-poster.jpg"
                posterAlt="Video: Treatflow für Massagepraxen in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Typische Probleme in Massage-Praxen"
                description="Deine Hände sollten behandeln - nicht Papierkram erledigen."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="orange"
                title="So hilft Treatflow deiner Massage-Praxis"
                description="Weniger Verwaltung, mehr Zeit für deine Kunden."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für Massage-Praxen"
                items={features}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen" items={faqs} />

            <FeatureRelated
                title="Weitere Funktionen für dein Studio"
                description="Treatflow vereint Terminkalender, Kundenverwaltung, Formulare und Dokumentation in einer Plattform."
                items={related}
            />

            <FeaturePageCta
                theme="orange"
                title="Bereit für eine digitale Massage-Praxis?"
                description="Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Praxis-Alltag sein kann."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Beratung buchen"
                secondaryHref={CONSULTING_URL}
                secondaryExternal
            />

            <Footer />
        </div>
    );
}
