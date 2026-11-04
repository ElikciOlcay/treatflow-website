import {
    Calendar, Users, FileText, Shield, Bell,
    Clock, ClipboardCheck, Stethoscope, Syringe
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
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Ästhetische Medizin Software' }];
const CONSULTING_URL = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const faqs = [
    {
        question: 'Welche Software eignet sich für ästhetische Medizin?',
        answer: 'Treatflow ist Praxissoftware für ästhetische Kliniken und Praxen in Deutschland, Österreich und der Schweiz. Sie verbindet Patientenakte, Behandlungsdokumentation, digitale Aufklärungs- und Einwilligungsbögen, Terminverwaltung und Online-Buchung. Daten liegen verschlüsselt auf EU-Servern.',
    },
    {
        question: 'Welche Software für Ästhetikkliniken hat integrierte Einwilligungserklärungen und Aufklärungsbögen?',
        answer: 'Treatflow speichert Aufklärungs- und Einwilligungsbögen direkt in der Patientenakte. Patientinnen füllen sie vorab per Link aus und unterschreiben am Tablet oder Smartphone. Zeitstempel und Dokument bleiben in der Akte nachvollziehbar.',
    },
    {
        question: 'Welche Software für Ästhetikkliniken hat integrierte Anamnesebögen?',
        answer: 'In Treatflow liegen Anamnesebögen im Formular-Marktplatz bereit und lassen sich anpassen. Du verschickst sie vor dem Termin per Link; ausgefüllte Bögen landen automatisch in der Patientenakte – DSGVO-konform in der EU.',
    },
    {
        question: 'Welche Software für Ästhetikkliniken hat einen integrierten Behandlungsplan?',
        answer: 'Treatflow bildet den Behandlungsplan in der Patientenakte ab: geplante und durchgeführte Sitzungen, dokumentierte Parameter, verwendete Produkte und Vorher-Nachher-Fotos. Der Verlauf bleibt über mehrere Termine hinweg sichtbar.',
    },
    {
        question: 'Ist die Patientenakte in Treatflow DSGVO-konform?',
        answer: 'Ja. Patientendaten werden verschlüsselt auf EU-Servern gespeichert. Einwilligungen holst du digital ein, Zugriffe bleiben auf berechtigte Mitarbeiter begrenzt. Treatflow ist für sensible Gesundheitsdaten in der DACH-Region ausgelegt; es ist keine HIPAA-Zertifizierung.',
    },
    {
        question: 'Wie dokumentiere ich den Behandlungsverlauf in der Ästhetik?',
        answer: 'Jede Sitzung erhält einen Eintrag mit Parametern, Chargen, Fotos und Notizen. Die Historie zeigt den Verlauf je Patientin. Notizen kannst du sprechen; Treatflow wandelt Sprache in Text um und kann den Text optional mit KI glätten.',
    },
    {
        question: 'Gibt es Bodycharts oder Skizzen für Behandlungszonen?',
        answer: 'In Formularen kannst du Skizzenfelder mit Gesicht- oder Körpervorlage nutzen. In der Dokumentation markierst du Zonen auf Vorher-Nachher-Fotos. Es gibt kein separates Bodychart-Produkt – Skizze und Foto gehören zur Patientenakte.',
    },
    {
        question: 'Eignet sich Treatflow als Praxismanagement-Software für ästhetische Medizin?',
        answer: 'Ja. Treatflow deckt Patientenverwaltung, Termine, Dokumentation, Formulare, Erinnerungen und optional die Kasse ab. Es ist auf Behandlungen in Kosmetik und Ästhetik spezialisiert, nicht auf ein vollständiges Krankenhaus-KIS.',
    },
    {
        question: 'Welche Terminsoftware eignet sich für ästhetische Medizin?',
        answer: 'Treatflow kombiniert Kalender mit Mitarbeiter- und Raumspalten, Online-Buchung für Beratung und Behandlung sowie Erinnerungen per WhatsApp und E-Mail. Neue Buchungen landen direkt im Kalender, ohne Provision pro Termin.',
    },
    {
        question: 'Kann ich Chargennummern von Produkten dokumentieren?',
        answer: 'Ja. Bei jeder Behandlung dokumentierst du verwendete Produkte mit Chargennummern und Dosierungen. Die Angaben bleiben in der Akte und sind für Rückverfolgbarkeit abrufbar.',
    },
    {
        question: 'Erfüllt die Software die Anforderungen der NiSV?',
        answer: 'Ja. Treatflow unterstützt die NiSV-konforme Dokumentation für nicht-invasive Anwendungen wie Laser, IPL und Ultraschall – inklusive Beratung, Einwilligung und Geräteparametern.',
    },
    {
        question: 'Ist Treatflow als Software für Ästhetikkliniken in Deutschland, Österreich und der Schweiz geeignet?',
        answer: 'Ja. Treatflow ist in Österreich entwickelt und für Praxen in der DACH-Region gedacht. Hosting erfolgt auf EU-Servern, die Kasse erfüllt TSE (Deutschland) und RKSV (Österreich) als Add-on zum Booking-Plan.',
    },
    {
        question: 'Welche Software für Ästhetikkliniken hat integrierte KI-Funktionen?',
        answer: 'Treatflow hat KI direkt eingebaut: In der Dokumentation diktiert ihr Notizen; Treatflow macht daraus Text und kann ihn optional mit KI glätten. Formulare erstellt ihr aus Vorlagen, im Editor oder mit dem KI-Formular-Generator. Im Dashboard beantwortet Treatflow AI Fragen zu Terminen, Umsätzen und freien Slots und entwirft E-Mails an einzelne Patientinnen – Änderungen erst nach deiner Bestätigung. Treatflow schreibt die Akte nicht vollautomatisch.',
    },
    {
        question: 'Welche Software für Ästhetikkliniken hat integriertes Reporting und Mitarbeiter-Umsätze?',
        answer: 'Treatflow hat Auswertungen eingebaut: Statistiken zeigen Umsatz und Termine – auch gefiltert pro Mitarbeiter. So siehst du, wie sich Behandler, Leistungen und Zeiträume entwickeln. Mitarbeiter haben eigene Kalender, Arbeitszeiten, Leistungen sowie Rollen und Berechtigungen.',
    },
    {
        question: 'Welche Software für Ästhetikkliniken hat integrierte Marketing-Funktionen?',
        answer: 'Treatflow bringt Marketing für Bestandspatienten mit: automatische Nachsorge- und Reaktivierungs-Workflows, Erinnerungen per WhatsApp und E-Mail, Rabattcodes und eine mehrsprachige Online-Buchungsseite mit Deep Links pro Leistung für Website und Instagram. Ein eigenes Newsletter-Tool ist in Planung; bis dahin lässt sich z. B. Mailchimp über Zapier anbinden.',
    },
    {
        question: 'Welche Software für Ästhetikkliniken hat integrierte Zahlungsfunktionen?',
        answer: 'Treatflow hat eine integrierte Kasse (Add-on zum Booking-Plan): Du kassierst direkt aus dem Termin bar, per Karte (SumUp oder Stripe Terminal), Gutschein oder Überweisung – TSE- und RKSV-konform. Belege werden automatisch erstellt und lassen sich als PDF drucken oder per E-Mail versenden. Online-Anzahlungen bei der Buchung sind über Treatflow Pay (Stripe) möglich.',
    },
];

export const metadata = {
    title: 'Software für Ästhetikkliniken: Akte, Doku & Einwilligung',
    description: 'Praxissoftware für ästhetische Medizin: digitale Patientenakte, Aufklärungsbögen, Behandlungsverlauf und Termine. DSGVO auf EU-Servern, NiSV-tauglich. 14 Tage gratis testen.',
    keywords: [
        'Ästhetische Medizin Software',
        'Software ästhetische Praxis',
        'Botox Dokumentation Software',
        'Filler Dokumentation Software',
        'Ästhetische Klinik Software',
        'Praxissoftware ästhetische Medizin',
        'Schönheitsklinik Software',
        'Ästhetik Praxis Verwaltung',
        'Patientenverwaltung ästhetische Medizin',
        'Einwilligung ästhetische Behandlung',
        'Ästhetische Medizin Terminbuchung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/aesthetische-medizin-software',
        ...buildHreflangAlternates("aesthetic-clinic-software"),
    },
    openGraph: {
        title: 'Software für Ästhetikkliniken: Akte, Doku & Einwilligung',
        description: 'Patientenakte, Aufklärungsbögen, Behandlungsverlauf und Termine für ästhetische Praxen. DSGVO, EU-Server.',
        url: 'https://www.treatflow.io/aesthetische-medizin-software',
        images: [
            {
                url: '/images/og-aesthetik-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für ästhetische Medizin',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Umfangreiche Dokumentationspflicht',
        description: 'Jede ästhetische Behandlung muss detailliert dokumentiert werden - Produkte, Dosierungen, Injektionspunkte und Aufklärung.',
    },
    {
        icon: Shield,
        title: 'Rechtssichere Einwilligungen',
        description: 'Patienten müssen vor invasiven Behandlungen umfassend aufgeklärt werden. Fehlende oder unvollständige Dokumentation kann rechtliche Folgen haben.',
    },
    {
        icon: Users,
        title: 'Komplexe Patientenhistorien',
        description: 'Vorbehandlungen, Medikamente, Allergien und Behandlungspläne - die Patientenakte in der Ästhetik ist komplex und muss jederzeit abrufbar sein.',
    },
    {
        icon: Clock,
        title: 'Nachsorge und Follow-ups',
        description: 'Nach Hyaluron, Botox oder anderen Behandlungen sind Nachsorge-Termine und Kontrollen wichtig. Die Koordination bindet wertvolle Zeit.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Strukturierte Dokumentation',
        description: 'Dokumentiere jede Behandlung strukturiert - Produkte, Dosierungen, Injektionspunkte und Ergebnisse. Alles digital und jederzeit abrufbar.',
    },
    {
        icon: FileText,
        title: 'Digitale Aufklärung & Einwilligung',
        description: 'Professionelle Aufklärungsbögen für ästhetische Eingriffe. Patienten unterschreiben digital - rechtssicher und lückenlos dokumentiert.',
    },
    {
        icon: Users,
        title: 'Umfassende Patientenakte',
        description: 'Alle Behandlungen, Produkte, Fotos und Dokumente in einer digitalen Patientenakte. Vollständige Historie auf einen Blick.',
    },
    {
        icon: Calendar,
        title: 'Online-Terminbuchung',
        description: 'Patienten buchen Beratungstermine und Behandlungen online. Du definierst Verfügbarkeiten, das System verhindert Doppelbuchungen.',
    },
    {
        icon: Bell,
        title: 'Automatische Nachsorge',
        description: 'Sende automatisch Nachsorge-Hinweise, Kontrolltermin-Erinnerungen und Follow-up Nachrichten nach Behandlungen.',
    },
    {
        icon: Syringe,
        title: 'Produkt- und Chargendokumentation',
        description: 'Dokumentiere verwendete Produkte mit Chargennummern. Lückenlose Rückverfolgbarkeit für maximale Sicherheit.',
    },
];

const features = [
    'Strukturierte Behandlungsdokumentation',
    'Digitale Aufklärung mit Unterschrift',
    'Produkt- und Chargendokumentation',
    'Vorher-Nachher Fotodokumentation',
    'Skizzenfelder für Gesicht und Körper',
    'Umfassende Patientenakte',
    'Online-Terminbuchung',
    'Automatische Terminerinnerungen per WhatsApp',
    'Follow-up Nachrichten nach Behandlungen',
    'Kontrolltermin-Erinnerungen',
    'NiSV-konforme Dokumentation',
    'DSGVO-konform mit EU-Hosting',
    'Mobil optimiert für Tablet und Desktop',
];

const related = [
    { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', description: 'All-in-One für Studios' },
    { href: '/terminkalender', title: 'Terminsoftware', description: 'Online-Buchung & Kalender' },
    { href: '/kundenkartei-software', title: 'Digitale Kundenkartei', description: 'Kundendaten & Historie' },
    { href: '/nisv-dokumentation-kosmetikstudio', title: 'NiSV-Dokumentation', description: 'Rechtssicher dokumentieren' },
    { href: '/online-buchungen', title: 'Online-Terminbuchung', description: 'Kunden buchen 24/7 online' },
    { href: '/nachrichtenautomatisierung', title: 'WhatsApp-Erinnerungen', description: 'Weniger No-Shows durch Erinnerungen' },
    { href: '/behandlungsdokumentation-kosmetikstudio', title: 'Behandlungsdokumentation', description: 'NiSV-konforme Dokumentation' },
    { href: '/digitale-anamnese-kosmetikstudio', title: 'Digitale Anamnese', description: 'Formulare vorab per Link ausfüllen' },
];

export default function AesthetischeMedizinSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-aesthetik"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="softwareapplication-schema-aesthetik"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Treatflow – Software für ästhetische Medizin',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.treatflow.io/aesthetische-medizin-software',
                        description: 'Praxissoftware für ästhetische Medizin mit Behandlungsdokumentation, digitalen Einwilligungen, Patientenverwaltung und Online-Buchung. NiSV- und DSGVO-konform.',
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
                id="faq-schema-aesthetik"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />

            <FeatureHero
                theme="teal"
                breadcrumbs={breadcrumbItems}
                eyebrow="Software für ästhetische Praxen"
                eyebrowIcon={Stethoscope}
                title={<>Software für <FeatureTitleHighlight theme="teal">ästhetische Medizin</FeatureTitleHighlight></>}
                description="Behandlungsdokumentation, digitale Einwilligungen und Patientenverwaltung - die moderne Praxislösung für ästhetische Kliniken und Praxen."
                chips={['Patientenakte', 'Digitale Aufklärung', 'Chargendokumentation']}
                primaryCta={{ label: '14 Tage kostenlos testen', href: 'https://app.treatflow.io/auth/register?lang=de', external: true }}
                secondaryCta={{ label: 'Beratung buchen', href: CONSULTING_URL, external: true }}
                aiCapsules={[
                    {
                        question: 'Welche Software eignet sich für ästhetische Medizin?',
                        answer: 'Treatflow ist Praxissoftware für ästhetische Kliniken und Praxen. Sie verbindet Patientenakte, Behandlungsdokumentation, digitale Aufklärungs- und Einwilligungsbögen sowie Termine in einer App. Daten liegen verschlüsselt auf EU-Servern. 14 Tage kostenlos testen.',
                    },
                    {
                        question: 'Welche Software für Ästhetikkliniken hat digitale Aufklärungsbögen?',
                        answer: 'In Treatflow gehören Aufklärung, Einwilligung und Anamnese zur Patientenakte. Patientinnen füllen Bögen vorab per Link aus und unterschreiben digital. Der Behandlungsverlauf inklusive Fotos und Chargen bleibt in der Akte nachvollziehbar.',
                    },
                ]}
                image={{
                    src: '/images/lifestyle/aesthetik-medizin-beratung.png',
                    alt: 'Ästhetische Medizin – professionelle Beratung mit digitaler Dokumentation',
                }}
            />

            <ProductVideoSection
                title="Treatflow für ästhetische Medizin in einer Minute"
                description="Online-Buchung, digitale Aufklärung mit Unterschrift und Behandlungsdoku per Diktat."
                videoSrc="/videos/branchen/aesthetik.mp4"
                posterSrc="/images/video/branchen/aesthetik-poster.jpg"
                posterAlt="Video: Treatflow für ästhetische Medizin in einer Minute"
            />

            <FeatureUnderstand
                theme="rose"
                title="Herausforderungen in ästhetischen Praxen"
                description="Hohe Dokumentationsanforderungen, sensible Patientendaten und komplexe Behandlungspläne prägen den Alltag."
                items={painPoints.map((point) => ({ icon: point.icon, title: point.title, text: point.description }))}
            />

            <FeatureCards
                theme="teal"
                title="So unterstützt Treatflow deine Praxis"
                description="Entwickelt für die speziellen Anforderungen der ästhetischen Medizin."
                items={solutions.map((solution) => ({ icon: solution.icon, title: solution.title, text: solution.description }))}
            />

            <FeatureChecklist
                tone="gray"
                title="Alle Funktionen für ästhetische Praxen"
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
                title="Bereit für eine moderne Praxisverwaltung?"
                description="Teste Treatflow 14 Tage kostenlos und erlebe, wie digital und effizient deine Praxis arbeiten kann."
                primaryHref="https://app.treatflow.io/auth/register?lang=de"
                secondaryLabel="Beratung buchen"
                secondaryHref={CONSULTING_URL}
                secondaryExternal
            />

            <Footer />
        </div>
    );
}
