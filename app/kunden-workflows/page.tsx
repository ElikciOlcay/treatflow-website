import { Workflow, Clock, GitBranch, MessageCircle, Zap, Bell, Heart } from 'lucide-react';
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
import { generateWebPageSchema } from '@/lib/content-attribution';

const PAGE_DATE_MODIFIED = '2026-08-21';
const PAGE_DATE_PUBLISHED = '2026-08-21';

export const metadata = {
    title: 'Kunden-Workflows fürs Kosmetikstudio',
    description:
        'Mehrstufige Automationen in Treatflow: Nachsorge, Reaktivierung und Follow-ups mit Wartezeiten, Bedingungen und Versand per E-Mail oder WhatsApp – ohne manuelles Nachfassen.',
    keywords: [
        'Kunden-Workflows Kosmetikstudio',
        'Automatisierung Beauty Studio',
        'Nachsorge Automatisierung',
        'Kunden reaktivieren Kosmetik',
        'Follow-up Workflow Studio',
        'Treatflow Workflows',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kunden-workflows',
    },
    openGraph: {
        title: 'Kunden-Workflows für Kosmetikstudios',
        description:
            'Mehrstufige Automationen: Nachsorge, Reaktivierung und Follow-ups – mit Wartezeiten, Bedingungen und E-Mail oder WhatsApp.',
        url: 'https://www.treatflow.io/kunden-workflows',
        images: [
            {
                url: '/images/mockups/kunden-workflows.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Kunden-Workflows Builder',
            },
        ],
    },
};

const faqs = [
    {
        question: 'Was sind Kunden-Workflows in Treatflow?',
        answer:
            'Kunden-Workflows sind mehrstufige Automationen: Du baust Abläufe mit Auslöser, Wartezeiten, Nachrichten und Bedingungen. So laufen Nachsorge, Reaktivierung und Follow-ups automatisch – ohne dass du jede Nachricht manuell schreibst.',
    },
    {
        question: 'Worin unterscheiden sich Workflows von einfachen Erinnerungen?',
        answer:
            'Einfache Nachrichten (z. B. Terminerinnerungen) sind ein Auslöser und eine Nachricht. Workflows eignen sich für Abläufe mit mehreren Schritten und Verzweigungen – etwa: nach der Behandlung nachfragen, warten, prüfen ob neu gebucht wurde und nur dann eine zweite Nachricht senden.',
    },
    {
        question: 'Über welche Kanäle werden Workflow-Nachrichten versendet?',
        answer:
            'Workflow-Schritte können per E-Mail und optional per WhatsApp versendet werden. Terminerinnerungen und klassische SMS-Automation bleiben unter den einfachen Nachrichten verfügbar.',
    },
    {
        question: 'Kann ein Workflow stoppen, wenn der Kunde neu bucht?',
        answer:
            'Ja. Du kannst Bedingungen setzen, z. B. prüfen, ob seit dem letzten Termin neu gebucht wurde. Wenn ja, stoppt der Ablauf – so bleibst du präsent, ohne doppelt zu schreiben.',
    },
    {
        question: 'Welche Workflows eignen sich für den Start?',
        answer:
            'Beliebt sind: Nachsorge 1–2 Tage nach der Behandlung, Reaktivierung nach 60–90 Tagen ohne Besuch und mehrstufige Nachsorge mit einer zweiten Nachricht nur, wenn noch kein Folgetermin gebucht wurde.',
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

export default function KundenWorkflowsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Kunden-Workflows' },
                        ])
                    ),
                }}
            />
            <Script
                id="kunden-workflows-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="kunden-workflows-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Kunden-Workflows fürs Kosmetikstudio',
                            description:
                                'Mehrstufige Automationen: Nachsorge, Reaktivierung und Follow-ups mit Wartezeiten, Bedingungen und Versand per E-Mail oder WhatsApp.',
                            url: 'https://www.treatflow.io/kunden-workflows',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />

            <FeatureHero
                theme="indigo"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kunden-Workflows' },
                ]}
                eyebrow="Kunden-Workflows"
                eyebrowIcon={Workflow}
                title={
                    <>
                        Mehrstufige{' '}
                        <FeatureTitleHighlight theme="indigo">Automationen</FeatureTitleHighlight>
                    </>
                }
                description="Nachsorge, Reaktivierung und Follow-ups bauen – mit Wartezeiten, Bedingungen und Versand per E-Mail oder WhatsApp."
                chips={['Visueller Builder', 'E-Mail & WhatsApp', 'Stoppt bei neuer Buchung']}
                secondaryCta={{ label: 'Zu den Erinnerungen', href: '/nachrichtenautomatisierung' }}
                aiCapsule={{
                    question: 'Wie automatisiere ich Nachsorge und Wiedervorlage im Kosmetikstudio?',
                    answer:
                        'Mit Kunden-Workflows in Treatflow baust du mehrstufige Abläufe: z. B. nach der Behandlung 2 Tage warten, nachfragen, prüfen ob neu gebucht wurde und nur dann eine Folgetermin-Einladung senden. So bleibst du präsent, ohne manuell nachzufassen.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/mockups/kunden-workflows.jpg',
                    alt: 'Treatflow Workflow-Builder mit Auslöser, Wartezeit und Nachricht',
                }}
            />

            <FeatureUnderstand
                theme="indigo"
                title="Abläufe, die von allein weiterlaufen"
                description="Statt einzelner Erinnerungen baust du Sequenzen – genau für Nachsorge, Reaktivierung und Follow-ups mit mehreren Schritten."
                items={[
                    {
                        icon: Heart,
                        title: 'Nachsorge ohne Extra-Aufwand',
                        text: 'Frag automatisch nach, wie es der Haut geht – und biete bei Interesse den Folgetermin an.',
                    },
                    {
                        icon: Bell,
                        title: 'Inaktive Kund:innen zurückholen',
                        text: 'Nach 60–90 Tagen ohne Besuch geht eine Einladung zurück ins Studio – persönlich und zur richtigen Zeit.',
                    },
                    {
                        icon: GitBranch,
                        title: 'Intelligent verzweigen',
                        text: 'Prüfe, ob neu gebucht wurde. Wenn ja, stoppt der Workflow – kein doppeltes Anschreiben.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="indigo"
                description="In drei Schritten zu deinem ersten Workflow."
                steps={[
                    {
                        title: 'Auslöser wählen',
                        text: 'Starte z. B. nach Terminende oder wenn jemand länger nicht da war.',
                    },
                    {
                        title: 'Schritte verbinden',
                        text: 'Wartezeiten, Nachrichten und Bedingungen im visuellen Builder anordnen.',
                    },
                    {
                        title: 'Aktivieren',
                        text: 'Treatflow führt den Ablauf aus – per E-Mail und optional WhatsApp.',
                    },
                ]}
            />

            <FeatureCards
                theme="indigo"
                title="Was du bekommst"
                description="Alles für mehrstufige Kundenkommunikation – klar und steuerbar."
                items={[
                    {
                        icon: Workflow,
                        title: 'Visueller Builder',
                        text: 'Auslöser, Wartezeiten, Nachricht und Bedingung per Drag & Drop.',
                        points: ['Klarer Überblick', 'Mehrere Stufen', 'Schnell anpassbar'],
                    },
                    {
                        icon: MessageCircle,
                        title: 'E-Mail & WhatsApp',
                        text: 'Versand über die Kanäle, die deine Kund:innen lesen.',
                        points: ['E-Mail', 'WhatsApp optional', 'Dein Text'],
                    },
                    {
                        icon: Clock,
                        title: 'Wartezeiten',
                        text: 'Tage oder Stunden zwischen den Schritten – genau wie im Studio-Ablauf.',
                        points: ['Nachsorge-Timing', 'Reaktivierung', 'Kein manuelles Merken'],
                    },
                    {
                        icon: GitBranch,
                        title: 'Bedingungen',
                        text: 'Prüfe z. B. neue Buchungen und stoppe den Ablauf rechtzeitig.',
                        points: ['Keine Doppelmails', 'Smarte Verzweigung', 'Mehr Relevanz'],
                    },
                    {
                        icon: Heart,
                        title: 'Nachsorge-Sequenzen',
                        text: 'Erste Nachfrage, dann optional Folgetermin – nur wenn sinnvoll.',
                        points: ['Mehr Bindung', 'Weniger No-Shows später', 'Mehr Folgetermine'],
                    },
                    {
                        icon: Zap,
                        title: 'Reaktivierung',
                        text: 'Kund:innen nach längerer Pause automatisch wieder einladen.',
                        points: ['60–90 Tage', 'Persönlich', 'Ohne Listen-Chaos'],
                    },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zu Kunden-Workflows" items={faqs} />

            <FeatureRelated
                items={[
                    {
                        href: '/nachrichtenautomatisierung',
                        title: 'Erinnerungen',
                        description: 'SMS & E-Mail vor dem Termin',
                    },
                    {
                        href: '/terminkalender',
                        title: 'Terminkalender',
                        description: 'Termine und Automationen zusammen',
                    },
                    {
                        href: '/kundenverwaltung',
                        title: 'Kundenverwaltung',
                        description: 'Historie und Wiedervorlage',
                    },
                ]}
            />

            <FeaturePageCta
                theme="indigo"
                title="Bereit für mehrstufige Kunden-Workflows?"
                description="14 Tage kostenlos testen – Nachsorge und Reaktivierung ohne manuelles Nachfassen."
                secondaryLabel="Zu den Erinnerungen"
                secondaryHref="/nachrichtenautomatisierung"
            />

            <Footer />
        </div>
    );
}
