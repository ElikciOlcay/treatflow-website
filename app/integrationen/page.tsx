import type { Metadata } from 'next';
import {
    Receipt, Calendar, Zap, Plug, RefreshCw, Workflow, ShieldCheck, CreditCard, Wallet, Building2,
} from 'lucide-react';
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

export const metadata: Metadata = {
    title: 'Integrationen & Apps für dein Kosmetikstudio',
    description: 'Verbinde Treatflow mit Lexware Office, Google Kalender, SumUp, Zapier u. v. m. Buchhaltung, Kartenzahlung, Online-Bezahlung und Automatisierung – alles in einer Plattform.',
    keywords: [
        'Treatflow Integrationen',
        'Kosmetikstudio Software Schnittstellen',
        'Lexware Office Integration',
        'Google Kalender Synchronisation',
        'Zapier Kosmetikstudio',
        'SumUp Kartenterminal Kosmetikstudio',
        'Online Zahlung Kosmetikstudio',
        'Buchhaltung Kosmetikstudio',
        'Terminkalender Sync',
        'AbaNinja Schweiz',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/integrationen',
        ...buildHreflangAlternates('integrations'),
    },
    openGraph: {
        title: 'Integrationen & Apps | Treatflow',
        description: 'Verbinde Treatflow mit Lexware, SumUp, Google Kalender, Zapier u. v. m. – Buchhaltung, Kartenzahlung und Automatisierung in einer Plattform.',
        url: 'https://www.treatflow.io/integrationen',
    },
};

const faqs = [
    {
        question: 'Welche Apps kann ich mit Treatflow verbinden?',
        answer: 'Treatflow lässt sich direkt mit Lexware Office (Buchhaltung DE), Swiss21 AbaNinja (Buchhaltung CH), Google Kalender (Terminsynchronisation), SumUp (Kartenzahlung) und Treatflow Pay (Online-Bezahlung) verbinden. Über Zapier erreichst du zusätzlich mehr als 7.000 weitere Apps wie Google Sheets, Mailchimp oder dein CRM.',
    },
    {
        question: 'Wie synchronisiere ich meine Termine mit dem Google Kalender?',
        answer: 'Du verbindest deinen Google-Account einmalig in den Studio-Einstellungen unter „Apps". Danach werden Termine automatisch in beide Richtungen abgeglichen: Buchungen in Treatflow erscheinen in deinem Google Kalender und umgekehrt – so vermeidest du Doppelbuchungen.',
    },
    {
        question: 'Kann ich Rechnungen automatisch an Lexware Office übergeben?',
        answer: 'Ja. Mit der Lexware-Integration kannst du Kunden automatisch synchronisieren und Rechnungen direkt aus dem Termin heraus in Lexware Office erstellen. Das spart manuelle Doppelerfassung und hält deine Buchhaltung aktuell.',
    },
    {
        question: 'Wofür brauche ich die Zapier-Integration?',
        answer: 'Mit Zapier automatisierst du individuelle Workflows ohne Programmierung. Bei einem neuen Termin oder einem ausgefüllten Formular kann Treatflow z. B. automatisch eine Zeile in Google Sheets anlegen, einen Kontakt im CRM erstellen oder eine E-Mail auslösen.',
    },
    {
        question: 'Kann ich Kartenzahlungen über Treatflow annehmen?',
        answer: 'Ja. Mit der SumUp-Integration verbindest du dein SumUp Solo Terminal und nimmst Kartenzahlungen direkt aus der Treatflow Kasse an – per Cloud API, ohne manuelles Eintippen. Für Online-Buchungen bietet Treatflow Pay sichere Anzahlungen und Vollzahlungen über Stripe.',
    },
    {
        question: 'Sind die Integrationen in jedem Tarif enthalten?',
        answer: 'Die Integrationen sind im Booking-Paket enthalten. Du findest und aktivierst sie nach der Anmeldung im Dashboard unter Studio-Einstellungen > Apps.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
};

export default function IntegrationenPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Integrationen' },
                        ])
                    ),
                }}
            />
            <Script id="integrationen-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <FeatureHero
                theme="indigo"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Integrationen' },
                ]}
                eyebrow="Integrationen"
                eyebrowIcon={Plug}
                title={<>Apps verbinden, <FeatureTitleHighlight theme="indigo">Daten</FeatureTitleHighlight> synchron</>}
                description="Lexware, SumUp, Google Kalender, Zapier und mehr – einmal verbinden, überall aktuell."
                chips={['Lexware', 'SumUp Solo', 'Google Kalender', 'Zapier']}
                secondaryCta={{ label: 'Zur Kasse', href: '/kassensystem-kosmetikstudio' }}
                visual={
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {[
                            { name: 'Lexware', cat: 'Buchhaltung', g: 'from-blue-500 to-indigo-600', Icon: Receipt },
                            { name: 'SumUp', cat: 'Kartenzahlung', g: 'from-sky-500 to-cyan-600', Icon: CreditCard },
                            { name: 'Google', cat: 'Kalender', g: 'from-emerald-500 to-teal-600', Icon: Calendar },
                            { name: 'Zapier', cat: 'Automatisierung', g: 'from-orange-500 to-amber-600', Icon: Zap },
                            { name: 'Treatflow Pay', cat: 'Online-Zahlung', g: 'from-violet-500 to-purple-600', Icon: Wallet },
                            { name: 'AbaNinja', cat: 'Schweiz', g: 'from-red-500 to-rose-600', Icon: Building2 },
                        ].map((app) => (
                            <div
                                key={app.name}
                                className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-lg shadow-gray-100/80"
                            >
                                <div className={`w-11 h-11 bg-gradient-to-r ${app.g} rounded-xl flex items-center justify-center mb-3`}>
                                    <app.Icon className="h-5 w-5 text-white" />
                                </div>
                                <p className="font-semibold text-gray-900 text-sm sm:text-base">{app.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{app.cat}</p>
                            </div>
                        ))}
                    </div>
                }
            />

            <FeatureUnderstand
                theme="indigo"
                title="Sofort klar: wofür Integrationen da sind"
                description="Weniger Doppelarbeit – Daten fließen zwischen deinen Tools."
                items={[
                    {
                        icon: RefreshCw,
                        title: 'Weniger Doppelarbeit',
                        text: 'Kunden und Termine einmal pflegen – Lexware, Kalender und Co. bleiben aktuell.',
                    },
                    {
                        icon: Workflow,
                        title: 'Automatische Abläufe',
                        text: 'Rechnungen, Kalendereinträge und Zapier-Workflows laufen im Hintergrund.',
                    },
                    {
                        icon: ShieldCheck,
                        title: 'DSGVO-konform',
                        text: 'Sichere Schnittstellen und EU-konforme Datenverarbeitung.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="indigo"
                description="In drei Schritten verbunden – ohne technisches Vorwissen."
                steps={[
                    { title: 'App auswählen', text: 'Unter Studio-Einstellungen > Apps die gewünschte Integration wählen.' },
                    { title: 'Konto verbinden', text: 'Einmalig beim Anbieter anmelden – z. B. Lexware, Google, SumUp oder Zapier.' },
                    { title: 'Automatisch synchron', text: 'Termine, Kunden und Workflows laufen ab sofort zusammen.' },
                ]}
            />

            <FeatureCards
                theme="indigo"
                title="Diese Apps sind integriert"
                description="Von Buchhaltung über Kartenzahlung bis Automatisierung."
                items={[
                    {
                        icon: Receipt,
                        title: 'Lexware Office',
                        text: 'Kunden synchronisieren und Rechnungen aus dem Termin erstellen – ohne Doppelpflege.',
                        points: ['Kunden sync', 'Rechnungen aus dem Kalender', 'Kein Doppelaufwand'],
                    },
                    {
                        icon: Calendar,
                        title: 'Google Kalender',
                        text: 'Zwei-Wege-Sync: Treatflow und Google bleiben in Echtzeit abgestimmt.',
                        points: ['Zwei-Wege-Sync', 'Keine Doppelbuchungen', 'Privat & Studio getrennt'],
                    },
                    {
                        icon: CreditCard,
                        title: 'SumUp Kartenterminal',
                        text: 'Kartenzahlung direkt aus der Kasse – SumUp Solo per Cloud API, ohne Eintippen.',
                        points: ['Direkt aus der Kasse', 'Cloud API', 'Kontaktlos'],
                    },
                    {
                        icon: Wallet,
                        title: 'Treatflow Pay',
                        text: 'Anzahlungen oder Vollzahlungen bei Online-Buchungen – sicher über Stripe.',
                        points: ['Anzahlungen', 'Vollzahlung vorab', '2,69 % transparent'],
                    },
                    {
                        icon: Zap,
                        title: 'Zapier',
                        text: 'Über 7.000 Apps verbinden – Workflows bei Terminen und Formularen.',
                        points: ['7.000+ Apps', 'Webhooks', 'Ohne Code'],
                    },
                    {
                        icon: Building2,
                        title: 'Swiss21 AbaNinja',
                        text: 'Schweizer Buchhaltung: Kunden sync und QR-Rechnungen aus Treatflow.',
                        points: ['Kunden sync', 'QR-Rechnungen', 'Für die Schweiz'],
                    },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zu Integrationen" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/kassensystem-kosmetikstudio', title: 'Kassensystem', description: 'TSE- & RKSV-konform kassieren' },
                    { href: '/terminkalender', title: 'Terminkalender', description: 'Termine zentral & sync' },
                    { href: '/online-buchungen', title: 'Online-Buchungen', description: '24/7 Buchung mit Pay' },
                ]}
            />

            <FeaturePageCta
                theme="indigo"
                title="Vernetzte Tools für dein Studio"
                description="14 Tage kostenlos testen – Lexware, SumUp, Google Kalender und Zapier in Minuten verbinden."
                secondaryLabel="Alle Funktionen"
                secondaryHref="/funktionen"
            />

            <Footer />
        </div>
    );
}
