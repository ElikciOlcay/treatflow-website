import {
    Calendar, Users, FileText, Bell,
    Clock, ClipboardCheck, Palette, Camera
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
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Permanent Makeup Software' }];
const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const faqs = [
    {
        question: 'Welche Software eignet sich für ein PMU-Studio mit digitaler Einwilligung und Fotodokumentation?',
        answer: 'Treatflow ist eine Software für Permanent Make-up und Microblading mit digitaler Einwilligung, Fotodokumentation je Sitzung und automatischen Nachsorge-Hinweisen. Kundinnen füllen Anamnese und Einwilligung vorab per Link oder im Studio am Tablet aus und unterschreiben digital. Pigment, Technik und Vorher-Nachher-Fotos werden pro Sitzung gespeichert, Nachstich-Termine buchst du direkt als Folgetermin. Ab 39 €/Monat, 14 Tage kostenlos testen.',
    },
    {
        question: 'Was sollte eine PMU-Dokumentation enthalten?',
        answer: 'Anamnese und Kontraindikationen, Aufklärung und unterschriebene Einwilligung, verwendetes Pigment, Technik und Nadel, Vorher-Nachher-Fotos, Nachsorge-Hinweise und den Nachstich-Termin. In Treatflow hängt all das am jeweiligen Termin in der Kundenkartei.',
    },
    {
        question: 'Eignet sich Treatflow für Microblading und PMU?',
        answer: 'Ja, Treatflow eignet sich für alle PMU-Techniken - Microblading, Powder Brows, Lip Blush, Eyeliner und mehr. Dokumentation und Formulare sind flexibel anpassbar.',
    },
    {
        question: 'Kann ich meine Einwilligungsformulare individualisieren?',
        answer: 'Ja, du kannst eigene Formulare erstellen oder bestehende Vorlagen anpassen. Deine Kunden unterschreiben digital - vor dem Termin oder im Studio.',
    },
    {
        question: 'Können Kunden online Termine buchen?',
        answer: 'Ja, über deinen persönlichen Buchungslink können Kunden rund um die Uhr Termine buchen - für Erstbehandlungen, Nachstiche und Auffrischungen.',
    },
    {
        question: 'Kann ich Fotos zur Behandlung speichern?',
        answer: 'Ja, du kannst bei jeder Behandlung Fotos aufnehmen und der Kundendatei zuordnen. Perfekt für die Vorher-Nachher Dokumentation und dein Portfolio.',
    },
];

export const metadata = {
    title: 'Permanent Make-up Software mit Einwilligung & Fotodoku',
    description: 'Software für Permanent Makeup Studios. Digitale Einwilligungen, Vorher-Nachher Doku, Online-Buchungen und Kundenverwaltung. 14 Tage gratis testen.',
    keywords: [
        'Permanent Makeup Software',
        'PMU Software',
        'Software Permanent Makeup Studio',
        'Microblading Software',
        'Permanent Makeup Dokumentation',
        'PMU Einwilligung digital',
        'Permanent Makeup Terminbuchung',
        'Permanent Makeup Kundenverwaltung',
        'PMU Studio Verwaltung',
        'Microblading Terminbuchung',
        'Permanent Makeup Anamnesebogen',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/permanent-makeup-software',
        ...buildHreflangAlternates("permanent-makeup-software"),
    },
    openGraph: {
        locale: 'de_DE',
        title: 'Permanent Makeup Software: Doku & Verwaltung',
        description: 'Digitale Einwilligungen, Vorher-Nachher Fotos und Online-Buchungen für PMU-Studios.',
        url: 'https://www.treatflow.io/permanent-makeup-software',
        images: [
            {
                url: '/images/og-pmu-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Permanent Makeup Studios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Einwilligungen und Aufklärung',
        description: 'Vor jeder PMU-Behandlung sind ausführliche Aufklärung und schriftliche Einwilligung Pflicht. Papiermappen werden unübersichtlich.',
    },
    {
        icon: Camera,
        title: 'Vorher-Nachher Dokumentation',
        description: 'Ergebnisse dokumentieren, Fotos zuordnen und Kunden den Heilungsverlauf zeigen - auf dem Smartphone wird das schnell chaotisch.',
    },
    {
        icon: Clock,
        title: 'Nachstich-Termine koordinieren',
        description: 'PMU-Kunden kommen zur Erstbehandlung und zum Nachstich. Den perfekten Zeitpunkt für den Folgetermin zu koordinieren kostet Zeit.',
    },
    {
        icon: Users,
        title: 'Allergien und Kontraindikationen',
        description: 'Farballergien, Medikamente und Hautkrankheiten müssen vor jeder Pigmentierung erfasst und geprüft werden.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Digitale Einwilligungen',
        description: 'Professionelle Aufklärungs- und Einwilligungsbögen, die deine Kunden digital mit Unterschrift ausfüllen - vor dem Termin oder im Studio.',
    },
    {
        icon: Camera,
        title: 'Vorher-Nachher Fotogalerie',
        description: 'Dokumentiere jeden Schritt mit Fotos - von der Vorzeichnung bis zum Endergebnis. Perfekt für dein Portfolio und die Kundenkommunikation.',
    },
    {
        icon: Calendar,
        title: 'Nachstich-Planung',
        description: 'Plane Folgetermine automatisch ein. Deine Kunden werden rechtzeitig an den Nachstich erinnert - im idealen Zeitfenster.',
    },
    {
        icon: Users,
        title: 'Kundenprofile mit Allergien',
        description: 'Erfasse Farbunverträglichkeiten, Medikamente und Kontraindikationen. Bei jedem Termin hast du alle relevanten Infos auf einen Blick.',
    },
    {
        icon: Bell,
        title: 'Pflegehinweise automatisch',
        description: 'Sende deinen Kunden automatisch Nachsorge-Hinweise nach der Behandlung. Für optimale Ergebnisse und weniger Rückfragen.',
    },
    {
        icon: Palette,
        title: 'Behandlungsdetails festhalten',
        description: 'Dokumentiere verwendete Farben, Nadeln, Techniken und Einstellungen pro Behandlung. Ideal für den Nachstich und Auffrischungen.',
    },
];

const features = [
    'Digitale Aufklärung und Einwilligung',
    'Anamnesebögen mit Allergieabfrage',
    'Vorher-Nachher Fotodokumentation',
    'Farbdokumentation pro Behandlung',
    'Nachstich-Terminplanung',
    'Online-Terminbuchung mit Buchungslink',
    'Automatische Terminerinnerungen',
    'Nachsorge-Hinweise automatisch senden',
    'Kundenverwaltung mit Behandlungshistorie',
    'Geburtstagsnachrichten automatisch',
    'DSGVO-konforme Datenspeicherung',
    'Mobil optimiert für Tablet und Smartphone',
];

const related = [
    { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', description: 'All-in-One für Studios' },
    { href: '/terminkalender', title: 'Terminsoftware', description: 'Online-Buchung & Kalender' },
    { href: '/kundenverwaltung', title: 'Digitale Kundenkartei', description: 'Kundendaten & Historie' },
    { href: '/anamnesebogen-kosmetikstudio', title: 'Digitale Anamnesebögen', description: 'Formulare & Einwilligungen' },
    { href: '/permanent-makeup-software-deutschland', title: 'PMU Software Deutschland', description: 'Permanent Makeup in ganz Deutschland' },
    { href: '/online-buchungen', title: 'Online-Terminbuchung', description: 'Kunden buchen 24/7 online' },
    { href: '/nachrichtenautomatisierung', title: 'WhatsApp-Erinnerungen', description: 'Weniger No-Shows durch Erinnerungen' },
    { href: '/behandlungsdokumentation-kosmetikstudio', title: 'Behandlungsdokumentation', description: 'NiSV-konforme Dokumentation' },
    { href: '/digitale-anamnese-kosmetikstudio', title: 'Digitale Anamnese', description: 'Formulare vorab per Link ausfüllen' },
];

export default function PermanentMakeupSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-pmu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-pmu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="rose"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für PMU-Studios"
                eyebrowIcon={Palette}
                title={<>Software für dein <FeatureTitleHighlight theme="rose">Permanent Makeup Studio</FeatureTitleHighlight></>}
                description="Software für Permanent Make-up und Microblading: digitale Einwilligung, Fotodokumentation je Sitzung, Nachsorge-Hinweise und Online-Buchung in einer App – damit du dich auf perfekte Ergebnisse konzentrieren kannst."
                chips={['Digitale Einwilligung', 'Vorher-Nachher Fotos', 'Nachstich-Planung']}
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/branchen/hero-pmu.jpg',
                    alt: 'Permanent Makeup Studio – professioneller Arbeitsplatz',
                }}
            />

            <ProductVideoSection
                title="Treatflow für PMU-Studios in einer Minute"
                description="Online-Buchung, Nachbehandlungen im Blick, digitale Einwilligung und Pigment-Doku per Diktat."
                videoSrc="/videos/branchen/pmu.mp4"
                posterSrc="/images/video/branchen/pmu-poster.jpg"
                posterAlt="Video: Treatflow für PMU-Studios in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Herausforderungen im PMU-Alltag"
                description="Permanent Makeup verlangt Präzision - bei der Arbeit und bei der Verwaltung."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="rose"
                title="So hilft Treatflow deinem PMU-Studio"
                description="Speziell für die Anforderungen von Permanent Makeup und Microblading entwickelt."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für PMU-Studios"
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
                theme="rose"
                title="Bereit für ein digitales PMU-Studio?"
                description="Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher Dokumentation und Verwaltung sein können."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Beratung buchen"
                secondaryHref={CONSULTING_URL}
                secondaryExternal
            />

            <Footer />
        </div>
    );
}
