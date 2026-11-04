import {
    Calendar, Users, FileText, Shield, Bell,
    Clock, ClipboardCheck, Eye, Sparkles
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
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Lash Studio Software' }];
const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const faqs = [
    { question: 'Eignet sich Treatflow für Wimpernverlängerung und Lash Lifting?', answer: 'Ja, Treatflow eignet sich für alle Wimpernbehandlungen - Wimpernverlängerung, Volume Lashes, Lash Lifting, Wimpernfärben und mehr. Formulare und Dokumentation sind flexibel anpassbar.' },
    { question: 'Kann ich Wimpern-Details pro Kundin speichern?', answer: 'Ja, du kannst Wimpernlänge, Biegung, Kleber-Typ und weitere Details pro Kundin speichern. So bist du beim Refill sofort vorbereitet.' },
    { question: 'Können Kundinnen über Instagram buchen?', answer: 'Ja, du erhältst einen persönlichen Buchungslink, den du in deine Instagram-Bio, auf deine Website oder per WhatsApp teilen kannst.' },
    { question: 'Erinnert das System an Refill-Termine?', answer: 'Ja, du kannst automatische Nachrichten konfigurieren, die Kundinnen nach der Behandlung an den nächsten Refill erinnern.' },
];

export const metadata = {
    title: 'Lash Studio Software: Termine & Einwilligungen',
    description: 'Software für Wimpernstudios und Lash Artists. Online-Buchungen, Kundenverwaltung, digitale Einwilligungen und automatische Erinnerungen. 14 Tage gratis.',
    keywords: [
        'Lash Studio Software',
        'Wimpernstudio Software',
        'Wimpernverlängerung Software',
        'Lash Artist Software',
        'Wimpern Terminbuchung',
        'Lash Studio Verwaltung',
        'Wimpernstudio Online Buchung',
        'Lash Extension Software',
        'Wimpern Kundenverwaltung',
        'Lash Lift Software',
        'Wimpernstudio Management',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/lash-studio-software',
        ...buildHreflangAlternates("lash-studio-software"),
    },
    openGraph: {
        title: 'Lash Studio Software: Termine & Kundenverwaltung',
        description: 'Online-Buchungen, Einwilligungen und Kundenverwaltung für Wimpernstudios.',
        url: 'https://www.treatflow.io/lash-studio-software',
        images: [{ url: '/images/og-lash-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Lash Studios' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Terminvergabe über Social Media', description: 'Termine per Instagram-DM und WhatsApp zu koordinieren ist zeitraubend. Nachrichten gehen unter und Überbuchungen passieren.' },
    { icon: FileText, title: 'Einwilligungen auf Papier', description: 'Vor jeder Wimpernverlängerung müssen Allergien abgefragt und Einwilligungen eingeholt werden. Papiermappen werden unübersichtlich.' },
    { icon: Users, title: 'Kundenvorlieben nicht gespeichert', description: 'Welche Wimpernlänge, welche Biegung, welcher Kleber? Ohne System musst du bei jedem Termin neu fragen.' },
    { icon: Bell, title: 'No-Shows bei langen Terminen', description: 'Wimpernbehandlungen dauern 1-3 Stunden. Ein No-Show bedeutet enormen Umsatzverlust und eine Lücke im Kalender.' },
];

const solutions = [
    { icon: Calendar, title: 'Online-Buchungen per Link', description: 'Dein persönlicher Buchungslink für Instagram-Bio, Website und WhatsApp. Kundinnen buchen selbst - kein DM-Chaos mehr.' },
    { icon: Users, title: 'Kundenprofile mit Lash-Details', description: 'Speichere Wimpernlänge, Biegung, Kleber-Typ, Allergien und individuelle Notizen pro Kundin.' },
    { icon: ClipboardCheck, title: 'Digitale Einwilligungen', description: 'Allergieabfrage und Einwilligungsformulare digital ausfüllen und unterschreiben lassen - vorab per Link oder am Tablet.' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Reduziere No-Shows mit automatischen Erinnerungen per WhatsApp und E-Mail. Sende auch Pflegehinweise nach der Behandlung.' },
    { icon: Sparkles, title: 'Refill-Erinnerungen', description: 'Erinnere Kundinnen automatisch an den nächsten Refill-Termin im idealen Zeitfenster von 2-3 Wochen.' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Kundendaten verschlüsselt in EU-Rechenzentren gespeichert. Datenschutzkonform und sicher.' },
];

const features = [
    'Online-Terminbuchung per Buchungslink',
    'Digitale Einwilligungsformulare',
    'Allergieabfrage vor der Behandlung',
    'Kundenprofile mit Wimpern-Details',
    'Automatische Terminerinnerungen per WhatsApp',
    'Refill-Erinnerungen automatisch senden',
    'Pflegehinweise nach Behandlung',
    'Foto-Dokumentation',
    'Kalender mit Tages- und Wochenansicht',
    'Mehrere Lash Artists verwalten',
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

export default function LashStudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-lash"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-lash"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="purple"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für Lash Studios"
                eyebrowIcon={Eye}
                title={<>Software für dein <FeatureTitleHighlight theme="purple">Wimpernstudio</FeatureTitleHighlight></>}
                description="Online-Buchungen, Kundenverwaltung mit Lash-Details und digitale Einwilligungen - damit du dich auf perfekte Wimpern konzentrieren kannst."
                chips={['Online-Buchungen', 'Lash-Details pro Kundin', 'Digitale Einwilligungen']}
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/branchen/hero-lash.jpg',
                    alt: 'Lash Studio – professionelle Wimpernbehandlung',
                }}
            />

            <ProductVideoSection
                title="Treatflow fürs Lash-Studio in einer Minute"
                description="Online-Buchung, Refills im Blick, digitale Anamnese und Wimpern-Doku per Diktat."
                videoSrc="/videos/branchen/lash.mp4"
                posterSrc="/images/video/branchen/lash-poster.jpg"
                posterAlt="Video: Treatflow fürs Lash-Studio in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Typische Probleme im Lash-Alltag"
                description="Du willst Wimpern zaubern - nicht Verwaltung erledigen."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="purple"
                title="So hilft Treatflow deinem Lash Studio"
                description="Entwickelt für die speziellen Anforderungen von Wimpernstudios."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für Lash Studios"
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
                theme="purple"
                title="Bereit für ein digitales Lash Studio?"
                description="Teste Treatflow 14 Tage kostenlos und erlebe, wie viel einfacher dein Studio-Alltag sein kann."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Beratung buchen"
                secondaryHref={CONSULTING_URL}
                secondaryExternal
            />

            <Footer />
        </div>
    );
}
