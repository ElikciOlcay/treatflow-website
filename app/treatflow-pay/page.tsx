import { Wallet, Percent, Banknote, CreditCard, ShieldCheck, Layers } from 'lucide-react';
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

const PAGE_DATE_MODIFIED = '2026-10-02';
const PAGE_DATE_PUBLISHED = '2026-10-02';

export const metadata = {
    title: 'Treatflow Pay – Anzahlung und Vollzahlung bei der Online-Buchung',
    description: 'Treatflow Pay: Kundinnen zahlen Anzahlung oder den vollen Preis direkt bei der Online-Buchung. Pro Leistung einstellbar, 2,69 % pro Transaktion.',
    keywords: [
        'Treatflow Pay',
        'Anzahlung Online-Buchung',
        'Online-Zahlung Kosmetikstudio',
        'Anzahlungsfunktion Kosmetikstudio',
        'Vorauszahlung Terminbuchung',
        'Stripe Zahlung Studio',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/treatflow-pay',
    },
    openGraph: {
        title: 'Treatflow Pay – Anzahlung und Vollzahlung bei der Online-Buchung',
        description: 'Anzahlung oder Vollzahlung direkt beim Buchen. Pro Leistung einstellbar, 2,69 % pro Transaktion.',
        url: 'https://www.treatflow.io/treatflow-pay',
        images: [{ url: '/images/product-updates/treatflow-pay.png', width: 1200, height: 675, alt: 'Treatflow Pay – Anzahlung oder Vollzahlung' }],
    },
};

const faqs = [
    {
        question: 'Was kann ich mit Treatflow Pay einstellen?',
        answer: 'Pro Leistung wählst du: keine Online-Zahlung, eine Anzahlung oder die Vollzahlung. Die Anzahlung ist ein Prozentsatz oder ein fester Betrag. Bucht die Kundin mehrere Leistungen, werden die fälligen Beträge addiert, höchstens bis zum Preis der Buchung.',
    },
    {
        question: 'Welche Zahlarten gibt es?',
        answer: 'Die Kundin bezahlt im Stripe-Checkout mit Kredit- oder Debitkarte. Apple Pay und Google Pay erscheinen dort, wenn ihr Gerät sie anbietet.',
    },
    {
        question: 'Was kostet Treatflow Pay?',
        answer: '2,69 % pro Transaktion, all-in. Es gibt keine weitere Treatflow-Gebühr auf die Zahlung. Der Mindestbetrag liegt bei 0,50 €.',
    },
    {
        question: 'Ersetzt Treatflow Pay die Kasse oder SumUp?',
        answer: 'Nein. Treatflow Pay gilt für die Online-Buchung. Kartenzahlung im Studio läuft weiter über die Kasse, zum Beispiel mit SumUp.',
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

export default function TreatflowPayPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema([
                        { label: 'Funktionen', href: '/funktionen' },
                        { label: 'Treatflow Pay' },
                    ])),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Treatflow Pay – Anzahlung und Vollzahlung bei der Online-Buchung',
                            description: 'Treatflow Pay: Kundinnen zahlen Anzahlung oder den vollen Preis direkt bei der Online-Buchung. Pro Leistung einstellbar, 2,69 % pro Transaktion.',
                            url: 'https://www.treatflow.io/treatflow-pay',
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
                    { label: 'Treatflow Pay' },
                ]}
                eyebrow="Treatflow Pay"
                eyebrowIcon={Wallet}
                title={<>Anzahlung oder Vollzahlung <FeatureTitleHighlight>beim Buchen</FeatureTitleHighlight></>}
                description="Lege pro Leistung fest, ob die Kundin eine Anzahlung, den vollen Preis oder nichts online zahlt."
                chips={['Pro Leistung', 'Karte, Apple Pay, Google Pay', '2,69 %']}
                secondaryCta={{ label: 'Zur Online-Buchung', href: '/online-buchungen' }}
                aiCapsule={{
                    question: 'Was ist Treatflow Pay?',
                    answer: 'Treatflow Pay ist die Online-Zahlung bei der Terminbuchung. Pro Leistung kann das Studio keine Zahlung, eine Anzahlung in Prozent oder als Betrag, oder die Vollzahlung verlangen. Bezahlt wird per Kredit- oder Debitkarte, dazu Apple Pay und Google Pay im Stripe-Checkout. Die Gebühr beträgt 2,69 % pro Transaktion.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                image={{
                    src: '/images/product-updates/treatflow-pay.png',
                    alt: 'Treatflow Pay – Anzahlung oder Vollzahlung bei der Online-Buchung',
                    width: 1200,
                    height: 675,
                }}
            />

            <FeatureUnderstand
                theme="indigo"
                title="Weniger Ausfälle, klarer Zahlungseingang"
                description="Du entscheidest je Behandlung, was online fällig ist. Die Kundin bezahlt direkt im Buchungsablauf."
                items={[
                    {
                        icon: Percent,
                        title: 'Pro Leistung festlegen',
                        text: 'Keine Online-Zahlung, Anzahlung oder Vollzahlung. Die Anzahlung ist ein Prozentsatz oder ein fester Euro-Betrag.',
                    },
                    {
                        icon: CreditCard,
                        title: 'Bezahlen beim Buchen',
                        text: 'Kredit- und Debitkarte im Stripe-Checkout. Apple Pay und Google Pay, wenn das Gerät der Kundin sie anbietet.',
                    },
                    {
                        icon: Banknote,
                        title: '2,69 % pro Transaktion',
                        text: 'Eine Gebühr, all-in. Keine weitere Treatflow-Gebühr auf die Zahlung.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="indigo"
                description="Einmal verbinden, danach je Leistung festlegen."
                steps={[
                    { title: 'Treatflow Pay verbinden', text: 'Unter Apps richtest du Treatflow Pay ein und verbindest dein Stripe-Konto. Erst danach kann bei der Buchung kassiert werden.' },
                    { title: 'Je Leistung wählen', text: 'Bei jeder Behandlung: keine Online-Zahlung, Anzahlung in Prozent oder als Betrag, oder den vollen Preis.' },
                    { title: 'Kundin bezahlt', text: 'Sie schließt die Buchung mit der Zahlung ab. Bei einer Anzahlung bleibt der Rest vor Ort.' },
                ]}
            />

            <FeatureCards
                theme="indigo"
                title="Alle Möglichkeiten"
                description="Das stellt Treatflow Pay bei der Online-Buchung bereit."
                items={[
                    { icon: Wallet, title: 'Keine Zahlung, Anzahlung oder Vollzahlung', text: 'Jede Leistung hat einen eigenen Modus. Leistungen ohne Online-Zahlung bleiben wie bisher buchbar.', points: ['Keine Online-Zahlung', 'Anzahlung', 'Vollzahlung'] },
                    { icon: Percent, title: 'Anzahlung in Prozent', text: 'Zum Beispiel 30 % des Leistungspreises. Der Satz gilt für diese Behandlung.', points: ['Prozent vom Preis', 'Pro Leistung', 'Rest vor Ort'] },
                    { icon: Banknote, title: 'Anzahlung als Betrag', text: 'Ein fester Euro-Betrag, höchstens der Preis der Leistung.', points: ['Fester Betrag', 'Gedeckelt auf den Preis', 'Rest vor Ort'] },
                    { icon: CreditCard, title: 'Karte und Wallets', text: 'Zahlung im Stripe-Checkout mit Karte, Apple Pay und Google Pay.', points: ['Kredit- und Debitkarte', 'Apple Pay', 'Google Pay'] },
                    { icon: ShieldCheck, title: '2,69 % all-in', text: 'Eine Gebühr pro Transaktion. Mindestbetrag 0,50 €.', points: ['2,69 % pro Zahlung', 'Ab 0,50 €', 'All-in'] },
                    { icon: Layers, title: 'Mehrere Leistungen', text: 'Beträge einer Buchung werden zusammengerechnet, höchstens bis zum Buchungspreis.', points: ['Summe der Leistungen', 'Gedeckelt auf den Preis', 'Pro Leistung einstellbar'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zu Treatflow Pay" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/online-buchungen', title: 'Online-Buchungen', description: 'Buchungslink mit Treatflow Pay' },
                    { href: '/kassensystem-kosmetikstudio', title: 'Kassensystem', description: 'Zahlung im Studio' },
                    { href: '/integrationen', title: 'Integrationen', description: 'Stripe, SumUp und mehr' },
                ]}
            />

            <FeaturePageCta
                theme="indigo"
                title="Anzahlung direkt bei der Buchung"
                description="14 Tage kostenlos testen. Treatflow Pay verbindest du danach unter Apps, die Gebühr fällt nur bei einer echten Zahlung an."
                secondaryLabel="Zur Online-Buchung"
                secondaryHref="/online-buchungen"
            />

            <Footer />
        </div>
    );
}
