import { FileText, Camera, Brain, Shield, Mic, PenTool } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import FeatureHero, { FeatureTitleHighlight } from '../components/FeatureHero';
import {
    FeatureUnderstand,
    FeatureHowItWorks,
    FeatureCards,
    FeatureFaq,
    FeatureRelated,
    FeaturePageCta,
} from '../components/FeatureSections';
import { buildHreflangAlternates } from '../i18n/seo';
import { generateWebPageSchema } from '@/lib/content-attribution';

const PAGE_DATE_MODIFIED = '2026-08-18';
const PAGE_DATE_PUBLISHED = '2024-06-01';

export const metadata = {
    title: 'Behandlungsdokumentation Kosmetik digital',
    description: 'Digitale Behandlungsdokumentation Kosmetik mit Vorher-Nachher-Fotos, Notizen und Historie. Strukturiert, nachvollziehbar und NiSV-konform.',
    keywords: ['Behandlungsdokumentation Kosmetik', 'Behandlungsdokumentation Kosmetikstudio', 'Vorher Nachher Fotos Software', 'Dokumentation App Kosmetikstudio', 'NiSV konform dokumentieren', 'Behandlungsdokumentation Software Kosmetik', 'NiSV Dokumentation Software', 'Automatische Behandlungsnotizen', 'Rechtssichere Dokumentation', 'Behandlung per Sprache diktieren', 'KI Diktat Kosmetik', 'Foto-Markierungen Behandlung', 'digitale Unterschrift Behandlung'],
    alternates: {
        canonical: 'https://www.treatflow.io/behandlungsdokumentation',
        ...buildHreflangAlternates('treatment-documentation'),
    },
    openGraph: {
        title: 'Behandlungsdokumentation Kosmetik: Fotos & Notizen',
        description: 'Halte jede Behandlung strukturiert fest. Vorher-Nachher-Fotos, Notizen, NiSV-konform.',
        url: 'https://www.treatflow.io/behandlungsdokumentation',
        images: [{ url: '/images/mockups/ai-doc.png', width: 1200, height: 630, alt: 'Treatflow Behandlungsdokumentation' }],
    },
};

const faqs = [
    {
        question: 'Welche Software eignet sich für Behandlungsdokumentation in der Kosmetik?',
        answer: 'Treatflow bietet eine spezialisierte Behandlungsdokumentation für Kosmetikstudios. Mit KI-Unterstützung, Vorher-Nachher-Fotos, Behandlungsparametern und NiSV-konformer Archivierung dokumentierst du professionell und rechtssicher.',
    },
    {
        question: 'Ist Behandlungsdokumentation im Kosmetikstudio Pflicht?',
        answer: 'Für NiSV-pflichtige Behandlungen (Laser, IPL, Ultraschall, Radiofrequenz) ist eine Behandlungsdokumentation gesetzlich vorgeschrieben. Für alle anderen Behandlungen ist sie empfehlenswert – für Rechtssicherheit, Qualität und Kundenzufriedenheit.',
    },
    {
        question: 'Was gehört in eine professionelle Behandlungsdokumentation?',
        answer: 'Behandlungsart und -datum, Produkte und Parameter, Vorher-Nachher-Fotos, Hautbefund, Verlaufsnotizen, Nachsorge-Empfehlungen und optional die Unterschrift der Kundin.',
    },
    {
        question: 'Wie dokumentiere ich Vorher-Nachher-Fotos korrekt?',
        answer: 'Unter gleichen Bedingungen (Licht, Winkel, Abstand). In Treatflow speicherst du Fotos direkt in der Dokumentation und ordnest sie dem Kundenprofil zu.',
    },
    {
        question: 'Was muss bei NiSV-Behandlungen dokumentiert werden?',
        answer: 'Beratungsprotokoll, Einwilligung, Geräteeinstellungen (z. B. Energie, Frequenz, Impulsdauer), Behandlungsgebiet, Hautreaktion und Nachsorgehinweise.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

export default function BehandlungsdokumentationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Dokumentation' },
                        ])
                    ),
                }}
            />
            <Script id="behandlungsdokumentation-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script
                id="behandlungsdokumentation-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Behandlungsdokumentation Kosmetik digital',
                            description: 'Digitale Behandlungsdokumentation Kosmetik mit Vorher-Nachher-Fotos, Notizen und Historie.',
                            url: 'https://www.treatflow.io/behandlungsdokumentation',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />

            <FeatureHero
                theme="purple"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Dokumentation' },
                ]}
                eyebrow="Behandlungsdokumentation"
                eyebrowIcon={FileText}
                title={<>Behandlung digital <FeatureTitleHighlight theme="purple">dokumentieren</FeatureTitleHighlight></>}
                description="Fotos, Notizen und Parameter an einem Ort – mit KI-Unterstützung. Beim nächsten Termin weißt du sofort, was gemacht wurde."
                chips={['Vorher-Nachher-Fotos', 'KI-Diktat', 'NiSV-konform']}
                secondaryCta={{ label: 'NiSV-Dokumentation', href: '/nisv-dokumentation' }}
                aiCapsule={{
                    question: 'Welche Software eignet sich für Behandlungsdokumentation in der Kosmetik?',
                    answer: 'Treatflow dokumentiert Behandlungen digital mit Vorher-Nachher-Fotos, Parametern, Notizen und Unterschrift. Für NiSV-pflichtige Anwendungen ist eine konforme Dokumentation gesetzlich vorgeschrieben – Treatflow unterstützt genau diesen Workflow.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/mockups/dokumentation-hero.png',
                    alt: 'Treatflow Behandlungsdokumentation mit Fotos und Notizen',
                }}
            />

            <FeatureUnderstand
                theme="purple"
                title="Jede Behandlung sauber festhalten"
                description="Nach jeder Sitzung hast du einen digitalen Eintrag mit Fotos, Notizen und Parametern – alles im Kundenprofil gespeichert."
                items={[
                    {
                        icon: Camera,
                        title: 'Vorher-Nachher-Fotos',
                        text: 'Halte den Fortschritt mit Fotos fest. So kannst du deiner Kundin den Behandlungsverlauf zeigen.',
                    },
                    {
                        icon: Brain,
                        title: 'Per Sprache oder KI erfassen',
                        text: 'Diktiere deine Notizen oder lass dir von der KI Vorschlaege machen. Weniger Tippen, mehr Zeit fuer die Behandlung.',
                    },
                    {
                        icon: Shield,
                        title: 'Rechtlich auf der sicheren Seite',
                        text: 'Bei NiSV-Behandlungen (Laser, IPL etc.) brauchst du eine lueckenlose Dokumentation – die ist damit automatisch abgedeckt.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="purple"
                description="In drei Schritten zur fertigen Dokumentation."
                steps={[
                    { title: 'Dokumentation oeffnen', text: 'Oeffne die Dokumentation direkt aus dem Termin oder Kundenprofil – Kundin und Behandlung sind schon vorausgefuellt.' },
                    { title: 'Fotos und Notizen erfassen', text: 'Lade Fotos hoch, trage Behandlungsparameter ein und diktiere oder tippe deine Notizen. Wenn noetig, lass die Kundin unterschreiben.' },
                    { title: 'Gespeichert und abrufbar', text: 'Alles landet automatisch im Kundenprofil. Beim naechsten Termin siehst du sofort, was zuletzt gemacht wurde.' },
                ]}
            />

            <FeatureCards
                theme="purple"
                title="Was du bekommst"
                description="Alles, was du für eine saubere Behandlungsdokumentation brauchst – ohne Zettelwirtschaft."
                items={[
                    { icon: Camera, title: 'Vorher-Nachher-Fotos', text: 'Fotos direkt zur Behandlung speichern und chronologisch vergleichen.', points: ['Gleicher Kontext', 'Am Kundenprofil', 'DSGVO-konform'] },
                    { icon: Mic, title: 'Sprach-Diktat', text: 'Notizen sprechen statt tippen – ideal während oder direkt nach der Behandlung.', points: ['Hands-free', 'Schnell', 'Klar formuliert'] },
                    { icon: Brain, title: 'KI-Assistent', text: 'Vorschläge für Notizen und strukturierte Einträge, damit nichts fehlt.', points: ['Textvorschläge', 'Struktur', 'Weniger Aufwand'] },
                    { icon: FileText, title: 'Parameter & Produkte', text: 'Gerätewerte, Produkte und Einstellungen sauber festhalten.', points: ['Laser/IPL', 'Produkte', 'Nachsorge'] },
                    { icon: PenTool, title: 'Digitale Unterschrift', text: 'Einwilligung oder Bestätigung digital am Tablet erfassen.', points: ['Am Gerät', 'Im Profil', 'Nachvollziehbar'] },
                    { icon: Shield, title: 'NiSV-tauglich', text: 'Für apparative Behandlungen die Pflichtfelder abdecken und archivieren.', points: ['Beratung', 'Einwilligung', 'Archiv'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur Dokumentation" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/nisv-dokumentation', title: 'NiSV-Dokumentation', description: 'Beratung, Einwilligung & Archiv' },
                    { href: '/formulare', title: 'Formulare', description: 'Anamnese & Einwilligungen digital' },
                    { href: '/kundenverwaltung', title: 'Kundenverwaltung', description: 'Historie im Kundenprofil' },
                ]}
            />

            <FeaturePageCta
                theme="purple"
                title="Bereit für klare Dokumentation?"
                description="14 Tage kostenlos testen – ohne Kreditkarte. Dokumentation, Fotos und NiSV-Workflow in einer App."
                secondaryLabel="NiSV-Dokumentation"
                secondaryHref="/nisv-dokumentation"
            />

            <Footer />
        </div>
    );
}
