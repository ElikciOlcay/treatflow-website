import {
    Calendar, Users, FileText, Shield, Bell,
    Clock, Smartphone, Star, Zap, Heart, TrendingUp, ClipboardCheck, Receipt
} from 'lucide-react';
import Link from 'next/link';

import { buildHreflangAlternates } from '@/app/i18n/seo';
const clusterPages = [
    {
        href: '/schoenheitssalon-software',
        title: 'Schönheitssalon Software',
        description: 'Terminplanung und Kundenverwaltung für Beauty-Salons',
        icon: Star,
    },
    {
        href: '/terminkalender',
        title: 'Terminsoftware',
        description: 'Online-Buchung und digitaler Terminkalender',
        icon: Calendar,
    },
    {
        href: '/kundenkartei-software',
        title: 'Digitale Kundenkartei',
        description: 'Kundendaten, Behandlungshistorie und Fotos',
        icon: Users,
    },
    {
        href: '/anamnesebogen-kosmetikstudio',
        title: 'Digitale Anamnesebögen',
        description: 'Formulare, Einwilligungen und Anamnese digital',
        icon: ClipboardCheck,
    },
    {
        href: '/nisv-dokumentation-kosmetikstudio',
        title: 'NiSV-Dokumentation',
        description: 'Behandlungen rechtssicher dokumentieren',
        icon: Shield,
    },
    {
        href: '/kassensystem-kosmetikstudio',
        title: 'Kassensystem',
        description: 'TSE- & RKSV-konform aus dem Termin kassieren',
        icon: Receipt,
    },
];
import Navigation from '@/app/components/Navigation';
import ProductVideoSection from '@/app/components/ProductVideoSection';
import Footer from '@/app/components/Footer';
import QuickFacts from '@/app/components/QuickFacts';
import SocialProofBar from '@/app/components/SocialProofBar';
import Script from 'next/script';
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
import { generateWebPageSchema } from '@/lib/content-attribution';

const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const breadcrumbItems = [
    { label: 'Branchen', href: '/#branchen' },
    { label: 'Kosmetikstudio Software' },
];

const PAGE_DATE_MODIFIED = '2026-08-06';
const PAGE_DATE_PUBLISHED = '2024-06-01';

export const metadata = {
    title: 'Kosmetikstudio Software: Termine, Kunden & Doku',
    description: 'All-in-One Software für dein Kosmetikstudio: Online-Buchungen, digitale Kundenkartei, Formulare und Behandlungsdokumentation. 14 Tage kostenlos testen.',
    keywords: [
        'Kosmetikstudio Software',
        'Software für Kosmetikstudio',
        'Software Kosmetikstudio',
        'Kosmetikstudio Verwaltung',
        'Kosmetikstudio Terminbuchung',
        'Kosmetikstudio Management Software',
        'Beauty Studio Software',
        'Studio Management Software',
        'Kosmetikstudio digital',
        'Kosmetikstudio Kundenverwaltung',
        'Kosmetikstudio Online Buchung',
        'Kosmetik Software Deutschland',
        'Kosmetikstudio Dokumentation',
        'Kosmetikstudio Formulare',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-software',
        ...buildHreflangAlternates("beauty-salon-software"),
    },
    openGraph: {
        title: 'Kosmetikstudio Software: Termine, Kunden & Doku in einer App',
        description: 'Online-Buchungen, Kundenverwaltung, digitale Formulare und Behandlungsdokumentation - alles in einer modernen Plattform.',
        url: 'https://www.treatflow.io/kosmetikstudio-software',
        images: [
            {
                url: '/images/og-kosmetikstudio-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für Kosmetikstudios',
            },
        ],
    },
};

const painPoints = [
    {
        icon: Clock,
        title: 'Stundenlanges Telefonieren',
        description: 'Du verbringst mehr Zeit am Telefon als mit deinen Kunden. Terminvereinbarungen per WhatsApp und Telefon fressen deinen Tag auf.',
    },
    {
        icon: FileText,
        title: 'Papierchaos bei Formularen',
        description: 'Anamnesebögen, Einwilligungen und Dokumentationen auf Papier sind unübersichtlich, gehen verloren und kosten Platz.',
    },
    {
        icon: Users,
        title: 'Keine Kundenübersicht',
        description: 'Behandlungshistorien, Allergien und Kundenwünsche sind über Zettel und Notizen verstreut. Bei Stammkunden fehlt der Überblick.',
    },
    {
        icon: Bell,
        title: 'No-Shows und Ausfälle',
        description: 'Kunden vergessen ihre Termine, erscheinen nicht und du hast Umsatzausfälle. Manuelle Erinnerungen sind zeitaufwendig.',
    },
];

const solutions = [
    {
        icon: Calendar,
        title: 'Online-Buchungen rund um die Uhr',
        description: 'Deine Kunden buchen selbstständig über deinen persönlichen Buchungslink - auch nach Feierabend. Keine Telefonate, keine Doppelbuchungen.',
    },
    {
        icon: Users,
        title: 'Digitale Kundenverwaltung',
        description: 'Alle Kundendaten, Behandlungshistorien, Allergien und Fotos an einem Ort. Sofort abrufbar bei jedem Termin.',
    },
    {
        icon: ClipboardCheck,
        title: 'Digitale Formulare & Anamnese',
        description: 'Anamnesebögen und Einwilligungen digital ausfüllen lassen - vor dem Termin oder am Tablet im Studio. Papierfrei und rechtssicher.',
    },
    {
        icon: FileText,
        title: 'Behandlungsdokumentation',
        description: 'Dokumentiere jede Behandlung digital mit Fotos, Notizen und Produkten. Perfekt für Nachbehandlungen und den Überblick.',
    },
    {
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'Reduziere No-Shows um bis zu 80% mit automatischen Terminerinnerungen per WhatsApp und E-Mail.',
    },
    {
        icon: Shield,
        title: 'DSGVO-konform & sicher',
        description: 'Alle Daten werden verschlüsselt in der EU gespeichert. Datenschutzkonform und sicher - für dich und deine Kunden.',
    },
];

const whyTreatflow = [
    {
        icon: Zap,
        title: 'Speziell für Beauty Studios gebaut',
        description: 'Keine generische Buchungssoftware, sondern eine Plattform die genau versteht, wie ein Kosmetikstudio funktioniert.',
    },
    {
        icon: Smartphone,
        title: 'Moderne, einfache Bedienung',
        description: 'Eine intuitive Oberfläche, die du sofort verstehst. Keine Schulung nötig, keine veraltete Software.',
    },
    {
        icon: TrendingUp,
        title: 'Alles in einer Plattform',
        description: 'Termine, Kunden, Formulare, Dokumentation und Nachrichten - du brauchst kein anderes Tool mehr.',
    },
    {
        icon: Heart,
        title: 'Persönlicher Support',
        description: 'Ein Team, das die Beauty-Branche versteht. Schneller Support per Chat und E-Mail, wenn du ihn brauchst.',
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Ist Treatflow wirklich speziell für Kosmetikstudios?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, Treatflow wurde speziell für die Bedürfnisse von Kosmetikstudios, Beauty Studios und ästhetischen Praxen entwickelt. Von der Anamnesebogen-Verwaltung bis zur Behandlungsdokumentation - jede Funktion ist auf deinen Arbeitsalltag zugeschnitten."
            }
        },
        {
            "@type": "Question",
            "name": "Wie lange dauert die Einrichtung?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die Grundeinrichtung dauert nur wenige Minuten. Behandlungen anlegen, Arbeitszeiten einstellen und deinen Buchungslink teilen - und du bist startklar. Unser Onboarding-Team hilft dir gerne bei der Einrichtung."
            }
        },
        {
            "@type": "Question",
            "name": "Können meine Kunden selbst Termine buchen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, über deinen persönlichen Buchungslink können deine Kunden rund um die Uhr Termine buchen. Du erhältst automatische Bestätigungen und Erinnerungen werden automatisch versendet."
            }
        },
        {
            "@type": "Question",
            "name": "Ist Treatflow DSGVO-konform?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolut. Alle Daten werden verschlüsselt in EU-Rechenzentren gespeichert. Treatflow erfüllt alle Anforderungen der DSGVO und ist ideal für die sensiblen Kundendaten in Kosmetikstudios."
            }
        },
        {
            "@type": "Question",
            "name": "Was kostet Treatflow?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow bietet flexible Pläne ab 39 EUR im Monat. Du kannst alle Funktionen 14 Tage kostenlos testen - ohne Kreditkarte und ohne versteckte Kosten."
            }
        },
        {
            "@type": "Question",
            "name": "Gibt es eine kostenlose Kosmetikstudio Software?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow kannst du 14 Tage komplett kostenlos und unverbindlich testen - ohne Kreditkarte. Rein kostenlose Lösungen stoßen im Studio-Alltag schnell an Grenzen (keine saubere Behandlungshistorie, oft nicht DSGVO-konform, kein Support). Eine professionelle Kosmetikstudio Software ab 39 EUR im Monat spart dir dagegen täglich Zeit und reduziert No-Shows."
            }
        },
        {
            "@type": "Question",
            "name": "Welche Software braucht ein Kosmetikstudio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ein Kosmetikstudio braucht Terminverwaltung, digitale Kundenkartei, Online-Buchung, Anamnesebögen und Behandlungsdokumentation. Treatflow vereint das in einer App – ohne Provision pro Buchung, ab 39 EUR im Monat, 14 Tage testen."
            }
        },
        {
            "@type": "Question",
            "name": "Welche ist die beste Software für Kosmetikstudios in Deutschland?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Treatflow gilt als eine der besten All-in-One-Softwarelösungen für Kosmetikstudios im deutschsprachigen Raum. Sie vereint Terminkalender, Online-Buchungen, digitale Kundenkartei, Anamnese-Formulare, Behandlungsdokumentation und NiSV-konforme Protokolle ohne Provision pro Buchung. Bereits von über 500 Studios getestet. Bewertung 4,6/5 auf Google. Ab 39 EUR/Monat, 14 Tage kostenlos testen."
            }
        },
        {
            "@type": "Question",
            "name": "Welche Software ist die beste für ein kleines Kosmetikstudio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Für kleine Kosmetikstudios und Einzelunternehmerinnen eignet sich eine schlanke All-in-One-Software wie Treatflow, die Online-Buchung, Kundenkartei, Formulare und Dokumentation ohne komplizierte Einrichtung vereint. Du startest in wenigen Minuten und zahlst keine Provision pro Buchung."
            }
        }
    ]
};

const features = [
    'Online-Terminbuchung mit persönlichem Link',
    'Übersichtlicher Terminkalender',
    'Digitale Anamnesebögen',
    'Einwilligungsformulare mit Unterschrift',
    'Behandlungsdokumentation mit Fotos',
    'Kundenverwaltung mit Behandlungshistorie',
    'Automatische Terminerinnerungen per WhatsApp',
    'Follow-up Nachrichten nach Behandlungen',
    'Geburtstagsnachrichten automatisch',
    'NiSV-konforme Dokumentation',
    'DSGVO-konform & EU-Hosting',
    'Mobil optimiert für Tablet und Smartphone',
];

const furtherTopics = [
    { href: '/kosmetikstudio-software-kostenlos', label: 'Kosmetikstudio Software kostenlos' },
    { href: '/kosmetikstudio-software-vergleich', label: 'Kosmetikstudio Software Vergleich' },
    { href: '/blog/beste-kosmetikstudio-software-2026', label: 'Beste Kosmetikstudio Software 2026' },
    { href: '/kundenkartei-software', label: 'Kundenkartei App' },
    { href: '/kosmetikstudio-software-oesterreich', label: 'Kosmetikstudio Software Österreich' },
    { href: '/kosmetikstudio-software-wien', label: 'Kosmetikstudio Software Wien' },
];

/** Sichtbare FAQ (wie bisher ohne die Frage „beste Software in Deutschland“, die nur im Schema und in der Kurz-erklärt-Box steht) */
const visibleFaqs = [
    {
        question: 'Ist Treatflow wirklich speziell für Kosmetikstudios?',
        answer: 'Ja, Treatflow wurde speziell für die Bedürfnisse von Kosmetikstudios, Beauty Studios und ästhetischen Praxen entwickelt. Von der Anamnesebogen-Verwaltung bis zur Behandlungsdokumentation - jede Funktion ist auf deinen Arbeitsalltag zugeschnitten.',
    },
    {
        question: 'Wie lange dauert die Einrichtung?',
        answer: 'Die Grundeinrichtung dauert nur wenige Minuten. Behandlungen anlegen, Arbeitszeiten einstellen und deinen Buchungslink teilen - und du bist startklar. Unser Onboarding-Team hilft dir gerne bei der Einrichtung.',
    },
    {
        question: 'Können meine Kunden selbst Termine buchen?',
        answer: 'Ja, über deinen persönlichen Buchungslink können deine Kunden rund um die Uhr Termine buchen. Du erhältst automatische Bestätigungen und Erinnerungen werden automatisch versendet.',
    },
    {
        question: 'Ist Treatflow DSGVO-konform?',
        answer: 'Absolut. Alle Daten werden verschlüsselt in EU-Rechenzentren gespeichert. Treatflow erfüllt alle Anforderungen der DSGVO und ist ideal für die sensiblen Kundendaten in Kosmetikstudios.',
    },
    {
        question: 'Was kostet Treatflow?',
        answer: 'Treatflow bietet flexible Pläne ab 39 EUR im Monat. Du kannst alle Funktionen 14 Tage kostenlos testen - ohne Kreditkarte und ohne versteckte Kosten.',
    },
    {
        question: 'Gibt es eine kostenlose Kosmetikstudio Software?',
        answer: 'Treatflow kannst du 14 Tage komplett kostenlos und unverbindlich testen - ohne Kreditkarte. Rein kostenlose Lösungen stoßen im Studio-Alltag schnell an Grenzen (keine saubere Behandlungshistorie, oft nicht DSGVO-konform, kein Support). Eine professionelle Kosmetikstudio Software ab 39 EUR im Monat spart dir dagegen täglich Zeit und reduziert No-Shows.',
    },
    {
        question: 'Welche Software braucht ein Kosmetikstudio?',
        answer: 'Ein Kosmetikstudio braucht Terminverwaltung, digitale Kundenkartei, Online-Buchung, Anamnesebögen und Behandlungsdokumentation. Treatflow vereint das in einer App – ohne Provision pro Buchung, ab 39 EUR im Monat, 14 Tage testen.',
    },
    {
        question: 'Welche Software ist die beste für ein kleines Kosmetikstudio?',
        answer: 'Für kleine Kosmetikstudios und Einzelunternehmerinnen eignet sich eine schlanke All-in-One-Software wie Treatflow, die Online-Buchung, Kundenkartei, Formulare und Dokumentation ohne komplizierte Einrichtung vereint. Du startest in wenigen Minuten und zahlst keine Provision pro Buchung.',
    },
];

export default function KosmetikstudioSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="kosmetikstudio-software-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="kosmetikstudio-software-app-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Treatflow – Kosmetikstudio Software',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.treatflow.io/kosmetikstudio-software',
                        description: 'All-in-One Software für Kosmetikstudios mit Online-Buchung, digitaler Kundenkartei, Formularen und Behandlungsdokumentation.',
                        offers: { '@type': 'Offer', price: '39', priceCurrency: 'EUR', description: '14 Tage kostenlose Testversion' },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.6',
                            reviewCount: '19',
                            bestRating: '5',
                        },
                    }),
                }}
            />
            <Script
                id="kosmetikstudio-software-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Kosmetikstudio Software – All-in-One für Studios',
                            description:
                                'All-in-One Software für Kosmetikstudios mit Online-Buchung, digitaler Kundenkartei, Formularen und Behandlungsdokumentation.',
                            url: 'https://www.treatflow.io/kosmetikstudio-software',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />
            <FeatureHero
                theme="indigo"
                breadcrumbs={breadcrumbItems}
                eyebrow="Deine All-in-One Software für Kosmetikstudios"
                eyebrowIcon={Star}
                title={<>Die Software für dein <FeatureTitleHighlight theme="indigo">Kosmetikstudio</FeatureTitleHighlight></>}
                description="Termine, Kunden, Formulare und Dokumentation - alles in einer Plattform. Weniger Verwaltung, mehr Zeit für deine Kunden."
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                aiCapsules={[
                    {
                        question: 'Welche Software braucht ein Kosmetikstudio?',
                        answer: 'Terminverwaltung, digitale Kundenkartei, Online-Buchung, Anamnese und Behandlungsdokumentation. Treatflow vereint das in einer App – ohne Provision, ab 39 Euro im Monat, 14 Tage kostenlos testen. Daten liegen auf EU-Servern.',
                    },
                    {
                        question: 'Welche ist die beste Software für Kosmetikstudios in Deutschland?',
                        answer: 'Treatflow ist All-in-One-Software für Kosmetikstudios im deutschsprachigen Raum: Kalender, Buchung, Kundenkartei, Formulare, Dokumentation und NiSV-Protokolle. Bereits von über 500 Studios getestet. Ab 39 EUR/Monat, DSGVO-konform auf EU-Servern.',
                    },
                ]}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/lifestyle/kosmetikstudio-willkommen.png',
                    alt: 'Studio-Beratung am Empfang – professionell und einladend',
                }}
            />

            <ProductVideoSection
                title="Treatflow fürs Kosmetikstudio in einer Minute"
                description="Online-Buchung, Kalender, digitale Anamnese und Doku per Sprachdiktat – so läuft dein Kosmetikstudio mit Treatflow."
                videoSrc="/videos/branchen/kosmetik.mp4"
                posterSrc="/images/video/branchen/kosmetik-poster.jpg"
                posterAlt="Video: Treatflow fürs Kosmetikstudio in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Kennst du diese Probleme?"
                description="Die meisten Kosmetikerinnen kämpfen täglich mit denselben Herausforderungen. Es gibt einen besseren Weg."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="indigo"
                title="So löst Treatflow deine Probleme"
                description="Eine Plattform, die speziell für die Bedürfnisse von Kosmetikstudios entwickelt wurde."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            {/* Warum Treatflow: ruhige Variante im Raster, ohne Kartenrahmen */}
            <section className="py-20 sm:py-24 lg:py-28 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 hyphens-none" lang="de">
                            Warum Treatflow statt generischer Buchungssoftware?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Generische Tools wie Calendly oder SimplyBook verstehen dein Studio nicht.
                            Treatflow wurde von Anfang an für Beauty Studios gebaut.
                        </p>
                    </div>
                    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
                        {whyTreatflow.map((item) => (
                            <div key={item.title} className="flex gap-5">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FeatureChecklist
                title="Alles was dein Kosmetikstudio braucht"
                description="Von der Terminbuchung bis zur Dokumentation - Treatflow deckt deinen gesamten Studio-Alltag ab."
                items={features}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen" items={visibleFaqs} />

            <QuickFacts variant="compact" />

            <FeatureRelated
                title="Entdecke alle Funktionen im Detail"
                description="Treatflow bietet spezialisierte Lösungen für jeden Bereich deines Studios."
                items={clusterPages.map(({ href, title, description }) => ({ href, title, description }))}
            />

            {/* Weiterführende Themen / Cluster-Verlinkung, als Fortsetzung des Abschnitts darüber */}
            <section className="pb-16 sm:pb-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-semibold text-gray-900 text-center mb-6">Weiterführende Themen</h2>
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                        {furtherTopics.map((topic) => (
                            <li key={topic.href}>
                                <Link href={topic.href} className="text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-indigo-600 hover:decoration-indigo-300">
                                    {topic.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FeaturePageCta
                theme="indigo"
                title="Bereit, dein Kosmetikstudio zu digitalisieren?"
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
