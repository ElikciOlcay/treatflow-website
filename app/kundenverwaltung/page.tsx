import { Users, Search, Upload, Database, Shield, Camera } from 'lucide-react';
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
    title: 'Kundenverwaltung Kosmetikstudio: Daten & Historie',
    description: 'Professionelle Kundenverwaltung für dein Kosmetikstudio: Behandlungsverlauf, Kundenhistorie, Notizen und Fotos zentral verwalten. DSGVO-konform.',
    keywords: ['Kundenverwaltung Kosmetikstudio', 'Kundenverwaltung Kosmetik', 'digitale Kundenverwaltung Kosmetik', 'Kundenmanagement Kosmetikstudio', 'Kundendaten verwalten Kosmetik', 'Kundenhistorie Kosmetik', 'Kundenprofil Kosmetikstudio', 'CRM Kosmetikstudio', 'Behandlungshistorie', 'DSGVO Kundendaten', 'Kundenkartei Kosmetik App', 'Kundenkartei App Kosmetikstudio'],
    alternates: {
        canonical: 'https://www.treatflow.io/kundenverwaltung',
        ...buildHreflangAlternates('client-records'),
    },
    openGraph: {
        title: 'Kundenverwaltung Kosmetikstudio: Daten & Historie | Treatflow',
        description: 'Professionelle Kundenverwaltung für dein Kosmetikstudio: Behandlungsverlauf, Kundenhistorie, Notizen und Fotos zentral verwalten.',
        url: 'https://www.treatflow.io/kundenverwaltung',
        images: [{ url: '/images/mockups/kundenverwaltung-overview.png', width: 1200, height: 630, alt: 'Treatflow Kundenverwaltung Interface' }],
    },
};

const faqs = [
    {
        question: 'Welche App eignet sich für die Kundenverwaltung im Kosmetikstudio?',
        answer: 'Treatflow ist eine spezialisierte Kundenverwaltung für Kosmetikstudios. Die App bietet digitale Kundenkartei, Behandlungshistorie, Fotos, Notizen und DSGVO-konforme Datenspeicherung in der EU. 14 Tage kostenlos testen.',
    },
    {
        question: 'Was ist eine digitale Kundenkartei für Kosmetikstudios?',
        answer: 'Eine digitale Kundenkartei ist eine Software, die alle Kundendaten, Behandlungshistorien, Vorher-Nachher-Fotos und Notizen an einem Ort speichert. Im Gegensatz zur Papierkartei ist sie DSGVO-konform, durchsuchbar und von jedem Gerät zugänglich.',
    },
    {
        question: 'Ist eine digitale Kundenkartei DSGVO-konform?',
        answer: 'Ja. Treatflow speichert alle Kundendaten verschlüsselt auf EU-Servern und erfüllt alle Anforderungen der DSGVO. Kunden können ihre Daten jederzeit einsehen und löschen lassen.',
    },
    {
        question: 'Welche Daten sollte eine Kundenkartei im Kosmetikstudio enthalten?',
        answer: 'Eine professionelle Kundenkartei sollte Kontaktdaten, Behandlungshistorie, Allergien und Unverträglichkeiten, Vorher-Nachher-Fotos, ausgefüllte Formulare (Anamnese, Einwilligung), Notizen und Terminhistorie enthalten.',
    },
    {
        question: 'Kann ich bestehende Kundendaten importieren?',
        answer: 'Ja. Treatflow unterstützt den Import von Kundendaten aus Excel- und CSV-Dateien. Unser Onboarding-Team hilft dir kostenlos beim Datenumzug von deinem bisherigen System.',
    },
    {
        question: 'Kann Treatflow automatische Nachrichten an meine Kunden senden?',
        answer: 'Ja. Treatflow bietet eine integrierte Nachrichtenautomatisierung. Du kannst automatische Terminerinnerungen, Geburtstagsnachrichten und Follow-up-Nachrichten nach Behandlungen einrichten, um die Kundenbindung zu stärken – ohne zusätzlichen Aufwand.',
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

const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow Kundenverwaltung',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Digitale Kundenkartei für Kosmetikstudios mit Behandlungshistorie, Notizen und Fotos.',
    url: 'https://www.treatflow.io/kundenverwaltung',
    offers: { '@type': 'Offer', price: '39', priceCurrency: 'EUR' },
};

export default function KundenverwaltungPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Kundenverwaltung' },
                        ])
                    ),
                }}
            />
            <Script id="kundenverwaltung-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script
                id="kundenverwaltung-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Kundenverwaltung Kosmetikstudio: Daten & Historie',
                            description: 'Professionelle Kundenverwaltung für dein Kosmetikstudio: Behandlungsverlauf, Kundenhistorie, Notizen und Fotos zentral verwalten. DSGVO-konform.',
                            url: 'https://www.treatflow.io/kundenverwaltung',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />
            <Script id="kundenverwaltung-software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

            <FeatureHero
                theme="blue"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kundenverwaltung' },
                ]}
                eyebrow="Digitale Kundenkartei"
                eyebrowIcon={Users}
                title={<>Kundendaten an einem <FeatureTitleHighlight theme="blue">Ort</FeatureTitleHighlight></>}
                description="Unbegrenzte Kundenkartei mit Historie, Import und Suche. DSGVO-konform auf EU-Servern."
                chips={['DSGVO-konform', 'Daten-Import', 'Unbegrenzte Kunden']}
                secondaryCta={{ label: 'Zur Kundenkartei-App', href: '/kundenkartei-software' }}
                aiCapsule={{
                    question: 'Welche App eignet sich für die Kundenverwaltung im Kosmetikstudio?',
                    answer: 'Treatflow bietet eine spezialisierte Kundenverwaltung für Kosmetikstudios mit digitaler Kundenkartei, Behandlungshistorie, Fotos und DSGVO-konformem EU-Hosting. Alle Kundendaten sind am Desktop, Tablet und Smartphone abrufbar. Mehr zur Kundenkartei-App: treatflow.io/kundenkartei-software. 14 Tage kostenlos testen.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/mockups/kundenverwaltung-overview.png',
                    alt: 'Treatflow Kundenkartei – Übersicht mit Suche und Detailansicht',
                }}
            />

            <FeatureUnderstand
                theme="blue"
                title="Alle Kundendaten an einem Ort"
                description="Für jede Kundin ein Profil mit Kontaktdaten, Behandlungshistorie und Fotos – jederzeit und von jedem Gerät abrufbar."
                items={[
                    {
                        icon: Shield,
                        title: 'Sicher und DSGVO-konform',
                        text: 'Deine Kundendaten liegen verschlüsselt auf EU-Servern. Auskunft und Löschung sind jederzeit möglich.',
                    },
                    {
                        icon: Upload,
                        title: 'Bestehende Daten übernehmen',
                        text: 'Du hast schon eine Kundenliste? Importiere sie einfach aus Excel oder CSV. Unser Team hilft dir beim Umzug.',
                    },
                    {
                        icon: Database,
                        title: 'Unbegrenzt viele Kunden',
                        text: 'Egal ob 50 oder 5.000 Kunden – kein Limit, keine Zusatzkosten pro Kontakt.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="blue"
                description="In drei Schritten zur digitalen Kundenkartei."
                steps={[
                    { title: 'Kunden anlegen oder importieren', text: 'Lege neue Kunden manuell an oder importiere deine bestehende Liste aus Excel oder CSV. Duplikate werden automatisch erkannt.' },
                    { title: 'Profil mit Infos füllen', text: 'Kontaktdaten, Allergien, Notizen und Fotos im Profil speichern. Ausgefüllte Formulare landen automatisch dazu.' },
                    { title: 'Beim nächsten Termin alles parat', text: 'Öffne vor der Behandlung das Kundenprofil – du siehst sofort, was zuletzt gemacht wurde und worauf du achten musst.' },
                ]}
            />

            <FeatureCards
                theme="blue"
                title="Was du bekommst"
                description="Digitale Kundenkartei ohne Limit – inkl. Import, Suche und DSGVO."
                items={[
                    { icon: Database, title: 'Unbegrenzte Kunden', text: 'So viele Profile wie dein Studio braucht – ohne Aufpreis pro Kontakt.', points: ['Keine Kundenzahl-Grenze', 'Bleibt schnell', 'Automatische Backups'] },
                    { icon: Upload, title: 'Daten-Import', text: 'Bestehende Listen aus Excel oder CSV übernehmen. Hilfe beim Umzug inklusive.', points: ['Excel & CSV', 'Feldzuordnung', 'Duplikat-Erkennung'] },
                    { icon: Shield, title: 'DSGVO-konform', text: 'Speicherung in der EU, Verschlüsselung, Auskunft und Löschung auf Anfrage.', points: ['EU-Server', 'Verschlüsselt', 'Löschrecht'] },
                    { icon: Search, title: 'Schnelle Suche', text: 'Finde Profile nach Name, Telefon, E-Mail oder Behandlung – in Sekunden.', points: ['Volltextsuche', 'Filter', 'Sortierung'] },
                    { icon: Camera, title: 'Fotos & Historie', text: 'Vorher-Nachher-Bilder und Behandlungen direkt am Profil, nicht in extra Ordnern.', points: ['Fotos im Profil', 'Behandlungshistorie', 'Notizen'] },
                    { icon: Users, title: 'Überall dabei', text: 'Webbasiert auf Smartphone, Tablet und Desktop – ohne extra App-Installation.', points: ['Smartphone', 'Tablet am Platz', 'Desktop'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur Kundenverwaltung" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/terminkalender', title: 'Terminkalender', description: 'Profil direkt am Termin' },
                    { href: '/formulare', title: 'Formulare', description: 'Anamnese landet in der Kartei' },
                    { href: '/behandlungsdokumentation', title: 'Dokumentation', description: 'Verlauf im Kundenprofil' },
                ]}
            />

            <FeaturePageCta
                theme="blue"
                title="Bereit für eine klare Kundenkartei?"
                description="14 Tage kostenlos testen – ohne Kreditkarte. Import, Historie und DSGVO in einer App."
                secondaryLabel="Zur Kundenkartei-App"
                secondaryHref="/kundenkartei-software"
            />

            <Footer />
        </div>
    );
}
