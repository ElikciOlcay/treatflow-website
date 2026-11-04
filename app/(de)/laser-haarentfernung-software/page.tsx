import {
    Calendar, Users, FileText, Shield, Bell,
    Clock, Zap, ClipboardCheck, Sparkles, AlertTriangle
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
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Laser & IPL Software' }];
const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const faqs = [
    {
        question: 'Erfüllt Treatflow die NiSV-Dokumentationspflicht?',
        answer: 'Ja, Treatflow unterstützt die NiSV-konforme Dokumentation von Laserbehandlungen. Du kannst Behandlungsparameter, Zonen, Ergebnisse und Kundeninformationen lückenlos digital dokumentieren.',
    },
    {
        question: 'Kann ich Behandlungsserien verwalten?',
        answer: 'Ja, du kannst mehrteilige Behandlungsserien anlegen und den Fortschritt deiner Kunden über alle Sitzungen verfolgen. Folgetermine werden automatisch geplant.',
    },
    {
        question: 'Können Kunden digital einwilligen?',
        answer: 'Ja, deine Kunden können Aufklärungsbögen und Einwilligungen digital mit elektronischer Unterschrift ausfüllen - wahlweise vorab per Link oder am Tablet im Studio.',
    },
    {
        question: 'Kann ich Vorher-Nachher Fotos speichern?',
        answer: 'Ja, du kannst bei jeder Sitzung Fotos der Behandlungszonen dokumentieren. So können du und deine Kunden den Fortschritt über die gesamte Behandlungsserie nachvollziehen.',
    },
    {
        question: 'Ist die Software auch für IPL-Behandlungen geeignet?',
        answer: 'Absolut. Treatflow eignet sich für alle Formen der dauerhaften Haarentfernung - ob Diodenlaser, Alexandritlaser, Nd:YAG oder IPL. Die Dokumentation ist flexibel anpassbar.',
    },
];

export const metadata = {
    title: 'Software für Laser Haarentfernung & NiSV-Doku',
    description: 'Software für Laser-Studios und IPL. NiSV-konforme Dokumentation, digitale Einwilligungen, Online-Buchungen und Kundenverwaltung. Jetzt 14 Tage testen.',
    keywords: [
        'Laser Haarentfernung Software',
        'Software Laser Studio',
        'IPL Software',
        'Laser Klinik Software',
        'Haarentfernung Terminbuchung',
        'NiSV Dokumentation Laser',
        'Laser Behandlung Dokumentation',
        'Einwilligung Laser Behandlung',
        'Laser Studio Verwaltung',
        'Dauerhafte Haarentfernung Software',
        'Laser Haarentfernung Kundenverwaltung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/laser-haarentfernung-software',
        ...buildHreflangAlternates("laser-hair-removal-software"),
    },
    openGraph: {
        title: 'Software für Laser Haarentfernung: NiSV-konform',
        description: 'NiSV-konforme Dokumentation, digitale Einwilligungen und Online-Buchungen für Laser-Studios.',
        url: 'https://www.treatflow.io/laser-haarentfernung-software',
        images: [
            {
                url: '/images/og-laser-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Laser Haarentfernung',
            },
        ],
    },
};

const painPoints = [
    {
        icon: AlertTriangle,
        title: 'NiSV-Dokumentationspflicht',
        description: 'Die NiSV verlangt eine lückenlose Dokumentation jeder Laserbehandlung. Auf Papier ist das fehleranfällig und zeitraubend.',
    },
    {
        icon: FileText,
        title: 'Aufklärung und Einwilligungen',
        description: 'Vor jeder Laserbehandlung müssen Kunden aufgeklärt werden und schriftlich einwilligen. Papierkram stapelt sich schnell.',
    },
    {
        icon: Clock,
        title: 'Behandlungsserien verwalten',
        description: 'Laser-Kunden kommen zu Serien von 6-10 Sitzungen. Den Überblick über Behandlungsstände und Folgetermine zu behalten ist mühsam.',
    },
    {
        icon: Users,
        title: 'Hauttypen und Kontraindikationen',
        description: 'Hauttyp, Medikamente und Kontraindikationen müssen für jeden Kunden erfasst und bei jedem Termin beachtet werden.',
    },
];

const solutions = [
    {
        icon: Shield,
        title: 'NiSV-konforme Dokumentation',
        description: 'Dokumentiere jede Laserbehandlung NiSV-konform digital. Parameter, Behandlungszonen und Ergebnisse - alles rechtssicher gespeichert.',
    },
    {
        icon: ClipboardCheck,
        title: 'Digitale Aufklärung & Einwilligung',
        description: 'Kunden füllen Anamnesebögen und Einwilligungen digital aus - mit elektronischer Unterschrift. Rechtssicher und papierfrei.',
    },
    {
        icon: Calendar,
        title: 'Serien und Folgetermine',
        description: 'Plane Behandlungsserien im Voraus. Deine Kunden sehen ihren Fortschritt und du behältst den Überblick über alle Sitzungen.',
    },
    {
        icon: Users,
        title: 'Kunden-Profile mit Hauttyp',
        description: 'Erfasse Hauttyp, Kontraindikationen und Medikamente pro Kunde. Bei jedem Termin hast du alle relevanten Infos sofort parat.',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Erinnere Kunden automatisch an Folgetermine und Hinweise vor der Behandlung - wie Sonnenvermeidung oder Rasur.',
    },
    {
        icon: Sparkles,
        title: 'Vorher-Nachher Dokumentation',
        description: 'Fotografiere Behandlungszonen vor und nach der Laser-Sitzung. Zeige Kunden ihren Fortschritt über die gesamte Serie.',
    },
];

const features = [
    'NiSV-konforme Behandlungsdokumentation',
    'Digitale Einwilligungsformulare mit Unterschrift',
    'Hauttyp-Erfassung und Kontraindikationen',
    'Vorher-Nachher Fotodokumentation',
    'Behandlungsserien-Verwaltung',
    'Online-Terminbuchung für Folgetermine',
    'Automatische Terminerinnerungen per WhatsApp',
    'Hinweise vor Behandlung automatisch senden',
    'Kundenverwaltung mit vollständiger Historie',
    'Laserparameter pro Sitzung dokumentieren',
    'DSGVO-konforme Datenspeicherung in der EU',
    'Mobil optimiert für Tablet im Studio',
];

const related = [
    { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', description: 'All-in-One für Studios' },
    { href: '/terminkalender', title: 'Terminsoftware', description: 'Online-Buchung & Kalender' },
    { href: '/kundenverwaltung', title: 'Digitale Kundenkartei', description: 'Kundendaten & Historie' },
    { href: '/nisv-dokumentation-kosmetikstudio', title: 'NiSV-Dokumentation Kosmetik', description: 'Rechtssicher dokumentieren' },
    { href: '/laserstudio-software-deutschland', title: 'Laserstudio Software Deutschland', description: 'NiSV-konform in ganz Deutschland' },
    { href: '/online-buchungen', title: 'Online-Terminbuchung', description: 'Kunden buchen 24/7 online' },
    { href: '/nachrichtenautomatisierung', title: 'WhatsApp-Erinnerungen', description: 'Weniger No-Shows durch Erinnerungen' },
    { href: '/behandlungsdokumentation-kosmetikstudio', title: 'Behandlungsdokumentation', description: 'NiSV-konforme Dokumentation' },
    { href: '/digitale-anamnese-kosmetikstudio', title: 'Digitale Anamnese', description: 'Formulare vorab per Link ausfüllen' },
];

export default function LaserHaarentfernungSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-laser"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-laser"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="blue"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für Laser-Studios"
                eyebrowIcon={Zap}
                title={<>Software für <FeatureTitleHighlight theme="blue">Laser Haarentfernung</FeatureTitleHighlight></>}
                description="NiSV-konforme Dokumentation, digitale Einwilligungen und Serienverwaltung - alles was dein Laser-Studio für den Alltag braucht."
                chips={['NiSV-konform', 'Behandlungsserien', 'Digitale Einwilligung']}
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/lifestyle/laser-studio-beratung.png',
                    alt: 'Laser-Behandlungsberatung mit Tablet-Dokumentation im modernen Studio',
                }}
            />

            <ProductVideoSection
                title="Treatflow fürs Laserstudio in einer Minute"
                description="Online-Buchung, Laserräume im Kalender, Anamnese mit Unterschrift und Laser-Doku per Diktat."
                videoSrc="/videos/branchen/laser.mp4"
                posterSrc="/images/video/branchen/laser-poster.jpg"
                posterAlt="Video: Treatflow fürs Laserstudio in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Die Herausforderungen in Laser-Studios"
                description="Strenge Dokumentationspflichten und komplexe Behandlungsserien machen den Alltag im Laser-Studio besonders anspruchsvoll."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="blue"
                title="So unterstützt Treatflow dein Laser-Studio"
                description="Entwickelt für die speziellen Anforderungen der dauerhaften Haarentfernung."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für Laser-Studios"
                description="Von der ersten Beratung bis zur letzten Sitzung - Treatflow begleitet den gesamten Behandlungsprozess."
                items={features}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur Laser-Studio Software" items={faqs} />

            <FeatureRelated
                title="Weitere Funktionen für dein Studio"
                description="Treatflow vereint NiSV-Dokumentation, Terminkalender, Kundenverwaltung und Formulare in einer Plattform."
                items={related}
            />

            <FeaturePageCta
                theme="blue"
                title="Bereit für NiSV-konforme Dokumentation?"
                description="Teste Treatflow 14 Tage kostenlos und erlebe, wie einfach Dokumentation und Verwaltung in deinem Laser-Studio sein können."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Beratung buchen"
                secondaryHref={CONSULTING_URL}
                secondaryExternal
            />

            <Footer />
        </div>
    );
}
