import {
    Calendar, Users, FileText, Shield, Bell,
    Clock, ClipboardCheck, Waves, Sparkles
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
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Spa & Wellness Software' }];

const faqs = [
    { question: 'Eignet sich Treatflow für Day Spas und Wellness-Studios?', answer: 'Ja, Treatflow eignet sich für Day Spas, Wellness-Studios und Wellness-Hotels. Von der Online-Buchung bis zur Gästeverwaltung - alle Funktionen sind auf den Spa-Alltag zugeschnitten.' },
    { question: 'Kann ich mehrere Therapeuten verwalten?', answer: 'Ja, jeder Therapeut erhält einen eigenen Kalender und kann eigene Behandlungen anbieten. Du behältst den Überblick über alle Termine.' },
    { question: 'Können Gäste Gesundheitsfragebögen vorab ausfüllen?', answer: 'Ja, du kannst deinen Gästen einen Link senden. Sie füllen den Fragebogen bequem vorab aus - das spart Zeit vor Ort.' },
    { question: 'Wie funktioniert die Online-Buchung?', answer: 'Gäste wählen Behandlung, Therapeut und Wunschtermin über deinen Buchungslink. Das System zeigt nur verfügbare Zeiten an und verhindert Doppelbuchungen.' },
];

export const metadata = {
    title: 'Spa & Wellness Software: Termine & Verwaltung',
    description: 'Software für Spas und Wellness-Studios. Online-Buchungen, Kundenverwaltung, digitale Formulare und automatische Nachrichten. 14 Tage gratis testen.',
    keywords: [
        'Spa Software',
        'Wellness Software',
        'Spa Terminbuchung',
        'Wellness Studio Software',
        'Spa Verwaltung',
        'Day Spa Software',
        'Wellness Online Buchung',
        'Spa Kundenverwaltung',
        'Wellness Terminplaner',
        'Spa Management Software',
        'Wellness Praxis Software',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/spa-wellness-software',
        ...buildHreflangAlternates("spa-wellness-software"),
    },
    openGraph: {
        title: 'Spa & Wellness Software - Termine & Verwaltung',
        description: 'Online-Buchungen, Kundenverwaltung und automatische Nachrichten für Spas und Wellness-Studios.',
        url: 'https://www.treatflow.io/spa-wellness-software',
        images: [{ url: '/images/og-spa-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Spa & Wellness' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Komplexe Terminplanung', description: 'Verschiedene Behandlungen, Räume und Therapeuten gleichzeitig zu koordinieren ist ohne Software extrem aufwendig.' },
    { icon: Users, title: 'Keine Kundenübersicht', description: 'Stammgäste erwarten, dass du ihre Vorlieben kennst. Ohne digitales System gehen diese Informationen schnell verloren.' },
    { icon: Bell, title: 'Hohe No-Show-Rate', description: 'Wellness-Termine werden oft spontan gebucht und dann vergessen. Ohne Erinnerungen bleiben Behandlungsräume leer.' },
    { icon: FileText, title: 'Gesundheitsfragebogen auf Papier', description: 'Vor Massagen und Behandlungen müssen Kontraindikationen abgefragt werden. Papierfragebogen sind unpraktisch und gehen verloren.' },
];

const solutions = [
    { icon: Calendar, title: 'Intelligente Terminplanung', description: 'Online-Buchungen mit Behandlungskategorien, Therapeuten-Auswahl und automatischer Verfügbarkeitsprüfung.' },
    { icon: Users, title: 'Gästeprofile mit Vorlieben', description: 'Speichere Vorlieben, Allergien, bevorzugte Therapeuten und Behandlungshistorie. Für ein personalisiertes Spa-Erlebnis.' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Reduziere No-Shows mit automatischen Erinnerungen per WhatsApp und E-Mail vor dem Termin.' },
    { icon: ClipboardCheck, title: 'Digitale Gesundheitsfragebögen', description: 'Gäste füllen Fragebögen zu Kontraindikationen vorab digital aus. Du hast alle Infos vor der Behandlung.' },
    { icon: Sparkles, title: 'Follow-up & Kundenbindung', description: 'Sende automatisch Danke-Nachrichten, Geburtstagswünsche und Angebote für Folgebehandlungen.' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Gästedaten verschlüsselt in EU-Rechenzentren gespeichert. Datenschutzkonform und sicher.' },
];

const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const features = [
    'Online-Terminbuchung mit Behandlungsauswahl',
    'Therapeuten-Kalender mit Verfügbarkeiten',
    'Digitale Gesundheitsfragebögen',
    'Gästeverwaltung mit Vorlieben',
    'Automatische Terminerinnerungen per WhatsApp',
    'Follow-up Nachrichten nach Behandlungen',
    'Geburtstagsnachrichten automatisch',
    'Behandlungsdokumentation mit Notizen',
    'Buchungslink für Website und Social Media',
    'Mehrere Therapeuten verwalten',
    'DSGVO-konforme Datenspeicherung',
    'Mobil optimiert für Tablet und Desktop',
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

export default function SpaWellnessSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-spa"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-spa"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="teal"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für Spa & Wellness"
                eyebrowIcon={Waves}
                title={<>Software für dein <FeatureTitleHighlight theme="teal">Spa & Wellness Studio</FeatureTitleHighlight></>}
                description="Online-Buchungen, Gästeverwaltung und automatische Nachrichten - für ein reibungsloses Spa-Erlebnis von der Buchung bis zur Nachbetreuung."
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/branchen/hero-spa.jpg',
                    alt: 'Spa und Wellness – Entspannung und Professionalität',
                }}
            />

            <ProductVideoSection
                title="Treatflow für Spa & Wellness in einer Minute"
                description="Online-Buchung, Räume und Team im Kalender, Gesundheitsfragebogen und Doku per Diktat."
                videoSrc="/videos/branchen/spa.mp4"
                posterSrc="/images/video/branchen/spa-poster.jpg"
                posterAlt="Video: Treatflow für Spa & Wellness in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Herausforderungen im Spa-Alltag"
                description="Deine Gäste erwarten Entspannung - nicht Wartezeiten und Papierkram."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="teal"
                title="So unterstützt Treatflow dein Spa"
                description="Für ein nahtloses Gästeerlebnis von der Buchung bis zur Nachbetreuung."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für Spas und Wellness"
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
                theme="teal"
                title="Bereit für ein digitales Spa-Erlebnis?"
                description="Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Spa-Alltag sein kann."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Beratung buchen"
                secondaryHref={CONSULTING_URL}
                secondaryExternal
            />

            <Footer />
        </div>
    );
}
