import {
    Calendar, Users, FileText, Shield, Bell, CheckCircle,
    Clock, ClipboardCheck, Footprints, Camera, MapPin
} from 'lucide-react';
import Link from 'next/link';
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
    FeatureFaq,
    FeatureRelated,
    FeaturePageCta,
} from '@/app/components/FeatureSections';
import { generateFaqSchema } from '@/lib/schema';

// Keyword-Lücke laut Search Console (Okt 2026): 30+ Fußpflege-Suchanfragen ohne passende Seite
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Fußpflege Software' }];
const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const faqs = [
    { question: 'Eignet sich Treatflow für die Fußpflege?', answer: 'Ja, für kosmetische und mobile Fußpflege. Du verwaltest Termine, eine digitale Kundenkartei mit Befunden und Fotos, Anamnesebögen mit Unterschrift und automatische Erinnerungen in einer App. Treatflow ist keine Praxissoftware für Podologie mit Kassen- bzw. Heilmittelabrechnung – wenn du Verordnungen mit Krankenkassen abrechnest, brauchst du dafür eine spezialisierte Podologie-Software.' },
    { question: 'Kann ich Befunde wie Nagelpilz oder Hühneraugen dokumentieren?', answer: 'Ja. Zu jeder Kundin und jeder Behandlung kannst du Notizen, Sprachnotizen und Vorher-Nachher-Fotos speichern. So siehst du beim nächsten Termin sofort, wie sich Nägel und Haut entwickelt haben und was zuletzt gemacht wurde.' },
    { question: 'Gibt es einen Anamnesebogen für die Fußpflege?', answer: 'Ja. Du erstellst deinen Anamnesebogen digital – z. B. mit Fragen zu Diabetes, Blutverdünnern, Durchblutungsstörungen und Allergien – und lässt ihn vorab per Link oder im Studio am Tablet ausfüllen und unterschreiben. Der Bogen landet automatisch in der Kundenkartei.' },
    { question: 'Funktioniert Treatflow auch für die mobile Fußpflege?', answer: 'Ja. Treatflow läuft im Browser auf Smartphone und Tablet. Du hast Termine, Adressen, Notizen und Formulare bei jedem Hausbesuch dabei – ohne Papierkartei.' },
    { question: 'Gibt es eine kostenlose Fußpflege Software?', answer: 'Treatflow kannst du 14 Tage kostenlos und ohne Kreditkarte testen. Danach startet der Basic-Plan mit Kundenkartei, Formularen und Dokumentation ab 39 € pro Monat, mit Terminkalender und Online-Buchung ab 59 € pro Monat (zzgl. MwSt.) – ohne Provision pro Buchung.' },
    { question: 'Brauche ich einen Hygieneplan für die Fußpflege?', answer: 'Ja, auch in der Fußpflege ist ein Hygieneplan Pflicht. Eine kostenlose Muster-Vorlage als PDF mit einem eigenen Abschnitt für die Fußpflege findest du in unserem Hygieneplan-Download.' },
];

export const metadata = {
    title: 'Fußpflege Software: Kundenkartei, Termine & Doku',
    description: 'Software für kosmetische und mobile Fußpflege: digitale Kundenkartei mit Befunden und Fotos, Anamnesebogen mit Unterschrift, Terminkalender und Erinnerungen. 14 Tage gratis testen.',
    keywords: [
        'Fußpflege Software',
        'Software für Fußpflege',
        'Fußpflege Programm',
        'Fußpflege Kundenkartei',
        'Fußpflege Software kostenlos',
        'mobile Fußpflege Software',
        'Fußpflege Terminplaner',
        'Anamnesebogen Fußpflege',
        'Fußpflege App',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/fusspflege-software',
    },
    openGraph: {
        title: 'Fußpflege Software: Kundenkartei, Termine & Doku',
        description: 'Kundenkartei mit Befunden und Fotos, Anamnesebogen, Termine und Erinnerungen für die Fußpflege.',
        url: 'https://www.treatflow.io/fusspflege-software',
        images: [{ url: '/images/branchen/hero-spa.jpg', width: 1200, height: 630, alt: 'Treatflow – Software für Fußpflege' }],
    },
};

const painPoints = [
    { icon: FileText, title: 'Papierkartei voller Befunde', description: 'Nagelpilz, Hühneraugen, eingewachsene Nägel – auf Karteikarten verstreut ist die Entwicklung kaum nachvollziehbar.' },
    { icon: ClipboardCheck, title: 'Risikofragen vergessen', description: 'Diabetes, Blutverdünner oder Durchblutungsstörungen müssen vor der Behandlung bekannt sein. Ein veralteter Papierbogen ist ein Risiko.' },
    { icon: Clock, title: 'Termine per Telefon', description: 'Viele Stammkundinnen kommen alle 4–6 Wochen. Ohne Erinnerung und Online-Buchung bleibt das Telefon im Dauereinsatz.' },
    { icon: MapPin, title: 'Mobile Fußpflege ohne Überblick', description: 'Bei Hausbesuchen fehlen Kartei, Adresse und letzte Notizen – oder liegen im Auto auf dem Beifahrersitz.' },
];

const solutions = [
    { icon: Users, title: 'Digitale Kundenkartei', description: 'Alle Kundinnen mit Kontaktdaten, Risiken, Allergien und Behandlungsverlauf – durchsuchbar statt Karteikasten.' },
    { icon: Camera, title: 'Befunde & Fotos', description: 'Vorher-Nachher-Fotos von Nägeln und Haut direkt in der Behandlung speichern. Die Entwicklung siehst du auf einen Blick.' },
    { icon: ClipboardCheck, title: 'Anamnesebogen mit Unterschrift', description: 'Risikofragen digital abfragen und unterschreiben lassen – vorab per Link oder im Studio am Tablet.' },
    { icon: Calendar, title: 'Terminplaner & Online-Buchung', description: 'Wiederkehrende Termine planen, Online-Buchung über deinen Link, alles in einem Kalender.' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Erinnerungen per WhatsApp oder E-Mail – gerade für ältere Stammkundinnen ein spürbarer Unterschied.' },
    { icon: Shield, title: 'DSGVO & EU-Server', description: 'Gesundheitsangaben gehören geschützt: verschlüsselte Speicherung auf EU-Servern, entwickelt in Österreich.' },
];

const features = [
    'Kundenkartei mit Risiken (Diabetes, Blutverdünner)',
    'Behandlungsverlauf mit Fotos',
    'Anamnesebogen mit digitaler Unterschrift',
    'Terminplaner mit Online-Buchung',
    'Erinnerungen per WhatsApp und E-Mail',
    'Mobil nutzbar bei Hausbesuchen',
    'Kasse mit TSE (DE) bzw. RKSV (AT) als Add-on',
    'DSGVO-konform auf EU-Servern',
];

const related = [
    { href: '/kundenkartei-software', title: 'Digitale Kundenkartei', description: 'Befunde, Fotos & Historie' },
    { href: '/anamnesebogen-kosmetikstudio', title: 'Anamnesebögen', description: 'Digital mit Unterschrift' },
    { href: '/terminkalender', title: 'Terminplaner', description: 'Kalender & Online-Buchung' },
    { href: '/nagelstudio-software', title: 'Nagelstudio Software', description: 'Maniküre & Nageldesign' },
];

export default function FusspflegeSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-fusspflege"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-fusspflege"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="teal"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für Fußpflege"
                eyebrowIcon={Footprints}
                title={<>Software für die <FeatureTitleHighlight theme="teal">Fußpflege</FeatureTitleHighlight></>}
                description="Kundenkartei mit Befunden und Fotos, Anamnesebogen mit Unterschrift, Termine und Erinnerungen – für kosmetische und mobile Fußpflege in einer App."
                chips={['Kundenkartei mit Befunden', 'Anamnesebogen mit Unterschrift', 'Mobile Fußpflege']}
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                image={{
                    src: '/images/branchen/hero-spa.jpg',
                    alt: 'Ruhiger Behandlungsraum für Fußpflege',
                }}
            />

            <ProductVideoSection
                title="Treatflow für die Fußpflege in einer Minute"
                description="Online-Buchung, Kalender fürs Team, Anamnese mit Vorerkrankungen und Doku per Diktat."
                videoSrc="/videos/branchen/fusspflege.mp4"
                posterSrc="/images/video/branchen/fusspflege-poster.jpg"
                posterAlt="Video: Treatflow für die Fußpflege in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Typische Probleme in der Fußpflege"
                description="Viel Stammkundschaft, viele Befunde – und meist noch eine Papierkartei."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="teal"
                title="So hilft Treatflow in der Fußpflege"
                description="Kundenkartei, Doku und Termine an einem Ort – im Studio und unterwegs."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <section className="py-20 sm:py-24 lg:py-28 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6 hyphens-none" lang="de">
                            Kosmetische Fußpflege, mobile Fußpflege oder Podologie?
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Treatflow ist für <strong className="text-gray-900">kosmetische Fußpflege</strong> und <strong className="text-gray-900">mobile Fußpflege</strong> gemacht – also für Studios und Fußpflegerinnen,
                                die privat abrechnen und eine gute Kundenkartei, Dokumentation und Terminplanung brauchen. Viele Kosmetikstudios bieten
                                Fußpflege zusätzlich an und führen alles in derselben Software.
                            </p>
                            <p>
                                Wenn du als <strong className="text-gray-900">Podologin</strong> Heilmittelverordnungen mit Krankenkassen abrechnest, brauchst du dafür eine spezialisierte
                                Praxissoftware mit Kassenabrechnung – das deckt Treatflow nicht ab. Für Privatleistungen, Kartei und Termine kannst du
                                Treatflow trotzdem einsetzen.
                            </p>
                        </div>
                    </div>
                    <ul className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl mx-auto">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-gray-700">
                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-600 mt-12 max-w-3xl mx-auto">
                        Noch kein Hygieneplan? Lade dir unsere kostenlose{' '}
                        <Link href="/hygieneplan-kosmetikstudio-pdf" className="text-teal-700 hover:text-teal-800 underline underline-offset-4">
                            Hygieneplan-Vorlage mit Fußpflege-Abschnitt
                        </Link>{' '}
                        herunter.
                    </p>
                </div>
            </section>

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur Fußpflege Software" items={faqs} />

            <FeatureRelated title="Passende Funktionen" items={related} />

            <FeaturePageCta
                theme="teal"
                title="Fußpflege ohne Papierkartei"
                description="Teste Treatflow 14 Tage kostenlos – Kundenkartei, Doku und Termine in einer App."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Preise ansehen"
                secondaryHref="/preise"
            />

            <Footer />
        </div>
    );
}
