import { FileText, Sparkles, Layout, Send, PenTool, Shield } from 'lucide-react';
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
    title: 'Anamneseformular Kosmetik: Fragen & Pflichten',
    description: 'Checkliste & Beispiele (Microneedling, Laser, PMU). Formulare mit KI-Generator – NiSV-konform und rechtssicher. Formulare digital im Studio umsetzen.',
    keywords: ['Anamnese Formular Kosmetikstudio', 'Anamnesebogen Kosmetik', 'Formular Generator Anamnese', 'Einverständniserklärung Kosmetik Behandlung', 'Formulare Kosmetik', 'Anamnese Software Kosmetik', 'digitaler Anamnesebogen', 'KI Formular Generator', 'Anamnese Vorlagen', 'NiSV konform Formulare', 'Einverständniserklärung Beauty'],
    alternates: {
        canonical: 'https://www.treatflow.io/formulare',
        ...buildHreflangAlternates('forms'),
    },
    openGraph: {
        title: 'Anamneseformular Kosmetik: Fragen & Pflichtangaben',
        description: 'Checkliste & Beispiele. Formulare mit KI-Generator für Kosmetikstudios – NiSV-konform und rechtssicher.',
        url: 'https://www.treatflow.io/formulare',
        images: [{ url: '/images/mockups/formulare-marketplace.png', width: 1200, height: 630, alt: 'Treatflow Formulare Marketplace' }],
    },
};

const faqs = [
    {
        question: 'Welche Formulare brauche ich im Kosmetikstudio?',
        answer: 'Im Kosmetikstudio benötigst du mindestens Anamnesebögen, Einwilligungserklärungen und bei apparativer Kosmetik NiSV-Aufklärungsbögen. Je nach Behandlung kommen Allergie-Fragebögen, Nachsorgehinweise und Zufriedenheits-Umfragen hinzu.',
    },
    {
        question: 'Was muss in einem Anamnesebogen für Kosmetik stehen?',
        answer: 'Ein Anamnesebogen für Kosmetikbehandlungen sollte persönliche Daten, aktuelle Medikamenteneinnahme, Allergien und Unverträglichkeiten, Hauterkrankungen, Schwangerschaft und Vorbehandlungen abfragen. Bei NiSV-pflichtigen Behandlungen gelten zusätzliche Anforderungen.',
    },
    {
        question: 'Kann ich Anamneseboegen digital an Kunden senden?',
        answer: 'Ja. Mit Treatflow kannst du Formulare per E-Mail oder SMS vorab an deine Kunden schicken. Sie fuellen sie auf ihrem eigenen Handy aus – vor dem Termin. Das spart dir 10–15 Minuten pro Termin im Studio.',
    },
    {
        question: 'Sind digitale Einwilligungserklärungen rechtssicher?',
        answer: 'Ja. Digitale Einwilligungserklärungen mit elektronischer Unterschrift sind rechtlich anerkannt. Treatflow speichert alle Formulare mit Zeitstempel und Unterschrift DSGVO-konform in der EU.',
    },
    {
        question: 'Welche Formulare sind für NiSV-Behandlungen Pflicht?',
        answer: 'Für NiSV-pflichtige Behandlungen (Laser, IPL, Ultraschall, Radiofrequenz) sind Beratungsprotokoll, Einwilligungserklärung mit Risikoaufklärung und die Behandlungsdokumentation mit Parametern gesetzlich vorgeschrieben.',
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

export default function FormularePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Formulare' },
                        ])
                    ),
                }}
            />
            <Script id="formulare-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script
                id="formulare-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Anamneseformular Kosmetik: Fragen & Pflichten',
                            description: 'Checkliste & Beispiele (Microneedling, Laser, PMU). Formulare mit KI-Generator – NiSV-konform und rechtssicher.',
                            url: 'https://www.treatflow.io/formulare',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />

            <FeatureHero
                theme="green"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Formulare' },
                ]}
                eyebrow="Formulare & KI-Generator"
                eyebrowIcon={FileText}
                title={<>Formulare für jede <FeatureTitleHighlight theme="green">Behandlung</FeatureTitleHighlight></>}
                description="Marketplace, KI-Generator und Drag & Drop. Vorlagen nutzen oder eigene Formulare in Minuten erstellen."
                chips={['KI-Generator', 'Marketplace', 'Drag & Drop']}
                secondaryCta={{ label: 'Zur Anamnese-Checkliste', href: '/anamnesebogen-kosmetikstudio' }}
                aiCapsule={{
                    question: 'Welche Formulare brauche ich im Kosmetikstudio?',
                    answer: 'Mindestens Anamnesebögen, Einwilligungserklärungen und bei apparativer Kosmetik NiSV-Aufklärungsbögen. Treatflow liefert fertige Vorlagen plus KI-Generator; Kundinnen füllen digital vorab aus – die Daten landen DSGVO-konform in der Kundenkartei.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/mockups/formulare-marketplace.png',
                    alt: 'Treatflow Formulare Marketplace mit Vorlagen und KI-Generator',
                }}
            />

            <FeatureUnderstand
                theme="green"
                title="Anamnese und Einwilligung – digital statt auf Papier"
                description="Deine Kunden fuellen Formulare vor dem Termin auf dem eigenen Handy aus. Die Daten landen automatisch im Kundenprofil."
                items={[
                    {
                        icon: FileText,
                        title: 'Fertige Vorlagen nutzen',
                        text: 'Im Marketplace findest du Vorlagen fuer Anamnese, Aufklaerung und Einwilligung – auch fuer NiSV-Behandlungen.',
                    },
                    {
                        icon: Sparkles,
                        title: 'Eigene Formulare mit KI erstellen',
                        text: 'Beschreibe deine Behandlung in eigenen Worten und die KI baut dir das passende Formular. Danach kannst du alles anpassen.',
                    },
                    {
                        icon: Send,
                        title: 'Vor dem Termin ausfuellen lassen',
                        text: 'Schicke den Formular-Link per E-Mail oder SMS. Dein Kunde fuellt zu Hause aus – du sparst 10–15 Minuten pro Termin.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="green"
                description="In drei Schritten vom leeren Blatt zum fertigen Formular."
                steps={[
                    { title: 'Vorlage oder KI', text: 'Marketplace-Vorlage wählen oder der KI die Behandlung beschreiben – Felder entstehen automatisch.' },
                    { title: 'Per Drag & Drop anpassen', text: 'Felder verschieben, ergänzen oder streichen. Live-Vorschau zeigt, was die Kundin sieht.' },
                    { title: 'Teilen und archivieren', text: 'Per Link oder QR-Code senden. Unterschrift und Zeitstempel landen DSGVO-konform in der Kartei.' },
                ]}
            />

            <FeatureCards
                theme="green"
                title="Was du bekommst"
                description="Drei Wege zu Anamnese und Einwilligung – plus Versand und digitale Unterschrift."
                items={[
                    { icon: FileText, title: 'Formular-Marketplace', text: 'Fertige Vorlagen für Beauty-Behandlungen – rechtssicher und sofort nutzbar.', points: ['Anamnese & Aufklärung', 'Einwilligungen', 'NiSV-Vorlagen'] },
                    { icon: Sparkles, title: 'KI-Generator', text: 'Behandlung in eigenen Worten beschreiben – die KI baut das Formular mit den nötigen Feldern.', points: ['Felder automatisch', 'In Sekunden', 'Danach editierbar'] },
                    { icon: Layout, title: 'Drag & Drop Editor', text: 'Eigene Formulare bauen oder Vorlagen anpassen – mit allen Feldtypen und Live-Vorschau.', points: ['Alle Feldtypen', 'Live-Vorschau', 'Volle Kontrolle'] },
                    { icon: Send, title: 'Vorab per Link', text: 'Formular vor dem Termin per E-Mail oder SMS. Spart 10–15 Minuten am Empfang.', points: ['E-Mail & SMS', 'Eigenes Gerät', 'Im Kundenprofil'] },
                    { icon: PenTool, title: 'Digitale Unterschrift', text: 'Einwilligung am Tablet unterschreiben. Zeitstempel und Archiv in der EU.', points: ['Am Gerät', 'Zeitstempel', 'Nachvollziehbar'] },
                    { icon: Shield, title: 'NiSV-tauglich', text: 'Beratung, Risikoaufklärung und Einwilligung für Laser, IPL und weitere apparative Leistungen.', points: ['Beratungsprotokoll', 'Einwilligung', 'DSGVO-Archiv'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zu Formularen" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/behandlungsdokumentation', title: 'Dokumentation', description: 'Formulare plus Behandlungsverlauf' },
                    { href: '/kundenverwaltung', title: 'Kundenverwaltung', description: 'Ausgefüllte Bögen im Profil' },
                    { href: '/nisv-dokumentation', title: 'NiSV-Dokumentation', description: 'Beratung, Einwilligung & Archiv' },
                ]}
            />

            <FeaturePageCta
                theme="green"
                title="Bereit für digitale Formulare?"
                description="14 Tage kostenlos testen – Marketplace, KI-Generator und Drag & Drop ohne Kreditkarte."
                secondaryLabel="NiSV-Dokumentation"
                secondaryHref="/nisv-dokumentation"
            />

            <Footer />
        </div>
    );
}
