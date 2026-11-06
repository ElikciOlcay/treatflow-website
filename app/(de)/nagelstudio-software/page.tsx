import {
    Calendar, Users, FileText, Shield, Bell,
    Clock, ClipboardCheck, Gem, Sparkles
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
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Nagelstudio Software' }];
const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const faqs = [
    { question: 'Eignet sich Treatflow für Nagelstudios?', answer: 'Ja, Treatflow eignet sich hervorragend für Nagelstudios. Online-Buchungen, Kundenverwaltung mit Nagelvorlieben und automatische Erinnerungen sind genau die Funktionen, die den Alltag im Nagelstudio erleichtern.' },
    { question: 'Kann ich Kundenvorlieben wie Farben und Formen speichern?', answer: 'Ja, du kannst für jede Kundin individuelle Notizen, Lieblingsfarben, Nagelform und weitere Vorlieben speichern. So bist du bei jedem Termin bestens vorbereitet.' },
    { question: 'Können meine Kundinnen online Termine buchen?', answer: 'Ja, über deinen persönlichen Buchungslink können Kundinnen rund um die Uhr buchen. Perfekt für deine Instagram-Bio oder Website.' },
    { question: 'Funktioniert die Software für mehrere Mitarbeiter?', answer: 'Ja, du kannst mehrere Nageldesignerinnen mit eigenen Kalendern und Buchungslinks anlegen. Jede hat ihren eigenen Terminplan.' },
    { question: 'Gibt es eine digitale Kundenkartei fürs Nagelstudio?', answer: 'Ja. Die Kundenkartei speichert pro Kundin Kontaktdaten, Lieblingsfarben, Nagelform, verwendete Produkte, Allergien und Fotos deiner Arbeiten. So bist du bei jedem Termin vorbereitet – auch wenn eine Kollegin übernimmt.' },
    { question: 'Was kostet Treatflow?', answer: 'Die Kundenkartei mit Formularen startet im Basic-Plan ab 39 EUR im Monat, Terminkalender und Online-Buchung gibt es im Booking-Plan ab 59 EUR im Monat (zzgl. MwSt.). Du kannst alle Funktionen 14 Tage kostenlos testen – ohne Kreditkarte.' },
];

export const metadata = {
    title: 'Nagelstudio Software: Termine & Kundenkartei',
    description: 'Software für Nagelstudios: Online-Terminbuchung, digitale Kundenkartei mit Farben, Formen und Allergien, Formulare und WhatsApp-Erinnerungen. Ohne Provision, 14 Tage gratis testen.',
    keywords: [
        'Nagelstudio Software',
        'Software für Nagelstudios',
        'Nagelstudio Terminbuchung',
        'Nagelstudio Verwaltung',
        'Nageldesign Software',
        'Nagelstudio Online Buchung',
        'Nagelstudio Kundenverwaltung',
        'Kundenkartei Nagelstudio',
        'Nail Studio Software',
        'Maniküre Software',
        'Nagelstudio Management',
        'Nagelstudio Erinnerungen',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/nagelstudio-software',
        ...buildHreflangAlternates("nail-salon-software"),
    },
    openGraph: {
        locale: 'de_DE',
        title: 'Nagelstudio Software: Termine & Kundenverwaltung',
        description: 'Online-Buchungen, Kundenverwaltung und automatische Erinnerungen für Nagelstudios.',
        url: 'https://www.treatflow.io/nagelstudio-software',
        images: [{ url: '/images/og-nagelstudio-software.jpg', width: 1200, height: 630, alt: 'Treatflow - Software für Nagelstudios' }],
    },
};

const painPoints = [
    { icon: Clock, title: 'Terminkoordination per WhatsApp', description: 'Termine über WhatsApp und Telefon zu vergeben frisst Zeit. Nachrichten gehen unter, Termine werden verwechselt oder doppelt vergeben.' },
    { icon: Users, title: 'Keine Kundenhistorie', description: 'Welche Farbe hatte die Kundin zuletzt? Welche Form? Ohne System musst du jedes Mal neu fragen oder in Notizbüchern blättern.' },
    { icon: Bell, title: 'No-Shows und kurzfristige Absagen', description: 'Kundinnen vergessen ihre Termine oder sagen nicht ab. Ohne automatische Erinnerungen bleiben Lücken im Kalender.' },
    { icon: FileText, title: 'Allergien und Unverträglichkeiten', description: 'Gel-Allergien, Acryl-Unverträglichkeiten und Hautprobleme müssen erfasst werden - auf Papier geht das schnell verloren.' },
];

const solutions = [
    { icon: Calendar, title: 'Online-Terminbuchung', description: 'Dein persönlicher Buchungslink für Instagram und Website. Kundinnen buchen selbst, du erhältst alle Infos automatisch.' },
    { icon: Users, title: 'Kundenprofile mit Vorlieben', description: 'Speichere Lieblingsfarben, Nagelform, Allergien und Notizen pro Kundin. Alles auf einen Blick bei jedem Termin.' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Reduziere No-Shows mit automatischen Erinnerungen per WhatsApp und E-Mail. Deine Kundinnen vergessen keinen Termin mehr.' },
    { icon: ClipboardCheck, title: 'Digitale Formulare', description: 'Anamnesebögen für Allergien und Unverträglichkeiten digital ausfüllen lassen - vor dem Termin oder im Studio.' },
    { icon: Sparkles, title: 'Geburtstagsnachrichten', description: 'Überrasche deine Kundinnen automatisch zum Geburtstag mit persönlichen Wünschen und stärke die Kundenbindung.' },
    { icon: Shield, title: 'DSGVO-konform & sicher', description: 'Alle Kundendaten verschlüsselt in der EU gespeichert. Datenschutzkonform und sicher.' },
];

const features = [
    'Online-Terminbuchung mit persönlichem Link',
    'Übersichtlicher Terminkalender',
    'Kundenverwaltung mit Nagelvorlieben',
    'Allergien und Unverträglichkeiten erfassen',
    'Automatische Terminerinnerungen per WhatsApp',
    'Geburtstagsnachrichten automatisch',
    'Follow-up Nachrichten nach Behandlungen',
    'Buchungslink für Instagram-Bio',
    'Tages- und Wochenansicht',
    'Mehrere Mitarbeiter verwalten',
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

export default function NagelstudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-nagelstudio"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-nagelstudio"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="rose"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für Nagelstudios"
                eyebrowIcon={Gem}
                title={<>Software für dein <FeatureTitleHighlight theme="rose">Nagelstudio</FeatureTitleHighlight></>}
                description="Online-Buchungen, Kundenverwaltung und automatische Erinnerungen - damit du dich auf perfekte Nägel konzentrieren kannst."
                chips={['Online-Buchungen', 'Kundenverwaltung', 'Automatische Erinnerungen']}
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/branchen/hero-nagelstudio.jpg',
                    alt: 'Nagelstudio – modern und einladend',
                }}
            />

            <ProductVideoSection
                title="Treatflow fürs Nagelstudio in einer Minute"
                description="Online-Buchung, Auffüllen im Blick, digitale Anamnese und Design-Doku per Diktat."
                videoSrc="/videos/branchen/nagel.mp4"
                posterSrc="/images/video/branchen/nagel-poster.jpg"
                posterAlt="Video: Treatflow fürs Nagelstudio in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Kennst du diese Probleme?"
                description="Der Alltag im Nagelstudio ist stressig genug - die Verwaltung sollte es nicht sein."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="rose"
                title="So hilft Treatflow deinem Nagelstudio"
                description="Speziell für die Bedürfnisse von Nagelstudios entwickelt."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für Nagelstudios"
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
                title="Bereit für ein digitales Nagelstudio?"
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
