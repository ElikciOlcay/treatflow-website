import {
    Calendar, Users, FileText, Bell,
    Clock, ClipboardCheck, Pen, Camera
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
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Tattoo Studio Software' }];
const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const faqs = [
    {
        question: 'Eignet sich Treatflow wirklich für Tattoo Studios?',
        answer: 'Ja, Treatflow eignet sich hervorragend für Tattoo Studios. Digitale Einwilligungen, Online-Buchungen und Kundenverwaltung sind genau die Funktionen, die den Tattoo-Alltag erleichtern.',
    },
    {
        question: 'Können meine Kunden über Instagram buchen?',
        answer: 'Ja, du erhältst einen persönlichen Buchungslink, den du in deine Instagram-Bio, auf deine Website oder per WhatsApp teilen kannst. Kunden buchen direkt - ohne DM.',
    },
    {
        question: 'Kann ich Einwilligungsformulare individualisieren?',
        answer: 'Ja, du kannst eigene Formulare erstellen oder Vorlagen anpassen. Typische Fragen zu Allergien, Medikamenten, Alkohol und Blutgerinnung sind bereits voreingestellt.',
    },
    {
        question: 'Erinnert das System meine Kunden automatisch?',
        answer: 'Ja, Treatflow sendet automatisch Terminerinnerungen per WhatsApp und E-Mail - z.B. 3 Tage und 1 Tag vor dem Termin. Das reduziert No-Shows um bis zu 80%.',
    },
    {
        question: 'Funktioniert die Software auch für mehrere Tätowierer?',
        answer: 'Ja, du kannst mehrere Mitarbeiter mit eigenen Kalendern und Buchungslinks anlegen. Jeder Tätowierer hat seinen eigenen Terminplan.',
    },
];

export const metadata = {
    title: 'Tattoo Studio Software: Termine & Verwaltung',
    description: 'Die Software für Tattoo Studios. Digitale Einwilligungsformulare, Kundenverwaltung, Online-Terminbuchung und Dokumentation. 14 Tage gratis testen.',
    keywords: [
        'Tattoo Studio Software',
        'Software für Tattoo Studios',
        'Tattoo Terminbuchung',
        'Tattoo Einwilligung digital',
        'Tattoo Studio Verwaltung',
        'Tattoo Kundenverwaltung',
        'Tattoo Anamnesebogen',
        'Tattoo Studio Management',
        'Tattoo Online Buchung',
        'Tattoo Dokumentation',
        'Tätowierer Software',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/tattoo-studio-software',
        ...buildHreflangAlternates("tattoo-studio-software"),
    },
    openGraph: {
        title: 'Tattoo Studio Software: Einwilligungen & Verwaltung',
        description: 'Digitale Einwilligungen, Online-Buchungen und Kundenverwaltung für Tattoo Studios.',
        url: 'https://www.treatflow.io/tattoo-studio-software',
        images: [
            {
                url: '/images/og-tattoo-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Tattoo Studios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Einwilligungen auf Papier',
        description: 'Vor jedem Tattoo müssen Kunden über Risiken aufgeklärt werden und einwilligen. Papiermappen mit hunderten Formularen sind unpraktisch.',
    },
    {
        icon: Clock,
        title: 'Terminkoordination per DM',
        description: 'Termine über Instagram-DMs und WhatsApp zu koordinieren ist zeitraubend. Nachrichten gehen unter, Doppelbuchungen passieren.',
    },
    {
        icon: Users,
        title: 'Keine Kundenübersicht',
        description: 'Welcher Kunde hat welches Tattoo? Welche Allergien gibt es? Ohne System fehlt der Überblick über Stammkunden.',
    },
    {
        icon: Bell,
        title: 'No-Shows bei Terminen',
        description: 'Kunden erscheinen nicht zum gebuchten Termin. Ohne automatische Erinnerungen sind No-Shows ein häufiges und teures Problem.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Digitale Einwilligungen',
        description: 'Kunden füllen den Einwilligungsbogen digital aus und unterschreiben elektronisch - vor dem Termin per Link oder am Tablet im Studio.',
    },
    {
        icon: Calendar,
        title: 'Online-Terminbuchung',
        description: 'Schluss mit DM-Chaos. Dein persönlicher Buchungslink für Instagram, Website und Co. Kunden buchen selbst, du erhältst alle Infos.',
    },
    {
        icon: Users,
        title: 'Kundenverwaltung',
        description: 'Alle Kunden mit Kontaktdaten, Allergien, bisherigen Tattoos und Notizen an einem Ort. Sofort abrufbar bei jedem Termin.',
    },
    {
        icon: Camera,
        title: 'Tattoo-Dokumentation',
        description: 'Dokumentiere fertige Tattoos mit Fotos. Verknüpfe jedes Werk mit dem Kundenprofil für eine vollständige Übersicht.',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Reduziere No-Shows mit automatischen Terminerinnerungen per WhatsApp und E-Mail. Sende auch Pflegehinweise nach dem Termin.',
    },
    {
        icon: Pen,
        title: 'Nachsorge automatisiert',
        description: 'Sende deinen Kunden automatisch Pflegehinweise nach dem Stechen. Für optimale Heilung und zufriedene Kunden.',
    },
];

const features = [
    'Digitale Einwilligungsformulare',
    'Anamnesebögen mit Allergieabfrage',
    'Online-Terminbuchung per Buchungslink',
    'Kundenverwaltung mit Tattoo-Historie',
    'Foto-Dokumentation fertiger Arbeiten',
    'Automatische Terminerinnerungen per WhatsApp',
    'Pflegehinweise automatisch senden',
    'Persönlicher Buchungslink für Instagram',
    'Kalender mit Tages- und Wochenansicht',
    'Geburtstagsnachrichten automatisch',
    'DSGVO-konforme Datenspeicherung',
    'Mobil optimiert für Smartphone und Tablet',
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

export default function TattooStudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-tattoo"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-tattoo"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="indigo"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für Tattoo Studios"
                eyebrowIcon={Pen}
                title={<>Software für dein <FeatureTitleHighlight theme="indigo">Tattoo Studio</FeatureTitleHighlight></>}
                description="Digitale Einwilligungen, Online-Buchungen und Kundenverwaltung - damit du dich auf deine Kunst konzentrieren kannst."
                chips={['Digitale Einwilligungen', 'Online-Buchungen', 'Kundenverwaltung']}
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/branchen/hero-tattoo.jpg',
                    alt: 'Tattoo Studio – professionell und kreativ',
                }}
            />

            <ProductVideoSection
                title="Treatflow fürs Tattoo-Studio in einer Minute"
                description="Online-Buchung, Kalender für alle Artists, digitale Einverständniserklärung und Session-Doku per Diktat."
                videoSrc="/videos/branchen/tattoo.mp4"
                posterSrc="/images/video/branchen/tattoo-poster.jpg"
                posterAlt="Video: Treatflow fürs Tattoo-Studio in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Typische Probleme im Tattoo-Alltag"
                description="Du willst tätowieren - nicht Papierkram erledigen und Termine per DM koordinieren."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="indigo"
                title="So hilft Treatflow deinem Tattoo Studio"
                description="Weniger Verwaltung, mehr Zeit für deine Kunst."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für Tattoo Studios"
                items={features}
            />

            {/* Instagram-Buchungslink */}
            <section className="py-20 sm:py-24 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4 hyphens-none" lang="de">
                        Perfekt für Instagram
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                        Dein Buchungslink passt perfekt in deine Instagram-Bio.
                        Follower werden zu Kunden - ohne DM-Chaos.
                    </p>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)] p-8 max-w-md mx-auto">
                        <div className="mb-6">
                            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Pen className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Ink Masters Studio</h3>
                            <p className="text-sm text-gray-500 mt-1">Termine buchen per Link</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
                            <code className="text-gray-700 font-medium">treatflow.io/ink-masters</code>
                        </div>

                        <div className="flex justify-center gap-3">
                            {['IG', 'WEB', 'WA'].map((channel) => (
                                <span
                                    key={channel}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-600"
                                >
                                    {channel}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen" items={faqs} />

            <FeatureRelated
                title="Weitere Funktionen für dein Studio"
                description="Treatflow vereint Terminkalender, Kundenverwaltung, Formulare und Dokumentation in einer Plattform."
                items={related}
            />

            <FeaturePageCta
                theme="indigo"
                title="Bereit für weniger Papierkram?"
                description="Teste Treatflow 14 Tage kostenlos und digitalisiere die Verwaltung deines Tattoo Studios."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Beratung buchen"
                secondaryHref={CONSULTING_URL}
                secondaryExternal
            />

            <Footer />
        </div>
    );
}
