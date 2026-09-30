import { Package, TrendingUp, Camera, ShoppingBag, BarChart3, CreditCard } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import FeatureHero, { FeatureTitleHighlight } from '../components/FeatureHero';
import {
    FeatureUnderstand,
    FeatureHowItWorks,
    FeatureCards,
    FeatureRelated,
    FeaturePageCta,
} from '../components/FeatureSections';
import { buildHreflangAlternates } from '../i18n/seo';

export const metadata = {
    title: 'Produktverkauf & Lager für Kosmetikstudios',
    description: 'Integriertes Produktverkauf-System für Kosmetikstudios. Verkaufe Pflegeprodukte direkt an deine Kunden mit einfacher Lagerverwaltung.',
    keywords: ['Produktverkauf Kosmetikstudio', 'Lagerverwaltung Beauty', 'Kosmetik Produkte verkaufen', 'Studio Verkaufssystem', 'Zusatzumsatz Kosmetik'],
    alternates: {
        canonical: 'https://www.treatflow.io/shop',
        ...buildHreflangAlternates('shop'),
    },
    openGraph: {
        title: 'Produktverkauf & Lagerverwaltung für Kosmetikstudios',
        description: 'Integriertes System für Produktverkauf mit einfacher Lagerverwaltung und Nachverfolgung.',
        url: 'https://www.treatflow.io/shop',
        images: [
            {
                url: '/images/og-shop.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Produktverkauf System',
            },
        ],
    },
};

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <FeatureHero
                theme="emerald"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Shop' },
                ]}
                eyebrow="Produktverkauf & Lager"
                eyebrowIcon={Package}
                title={<>Produkte verkaufen, <FeatureTitleHighlight theme="emerald">Lager</FeatureTitleHighlight> im Blick</>}
                description="Pflegeprodukte im Studio verkaufen – mit Lagerbestand und Verkaufshistorie."
                chips={['Lager im Blick', 'Verkaufshistorie', 'Unbegrenzte Produkte']}
                secondaryCta={{ label: 'Zur Kasse', href: '/kassensystem-kosmetikstudio' }}
                image={{
                    src: '/images/mockups/shop-hero.png',
                    alt: 'Treatflow Produktverkauf und Lagerverwaltung',
                }}
            />

            <FeatureUnderstand
                theme="emerald"
                title="Pflegeprodukte direkt im Studio verkaufen"
                description="Empfiehl deiner Kundin nach der Behandlung das passende Produkt – und verkaufe es direkt an der Kasse. Lagerbestand und Verkaufshistorie werden automatisch aktualisiert."
                items={[
                    {
                        icon: Package,
                        title: 'Produkte anlegen und verkaufen',
                        text: 'Lege Seren, Cremes und Zubehör als Artikel an. Nach der Behandlung oder an der Theke direkt verkaufen.',
                    },
                    {
                        icon: TrendingUp,
                        title: 'Lagerbestand im Blick',
                        text: 'Du siehst jederzeit, wie viel von einem Produkt noch da ist. Bei niedrigem Bestand weisst du, dass du nachbestellen musst.',
                    },
                    {
                        icon: BarChart3,
                        title: 'Verkaufshistorie pro Kundin',
                        text: 'Im Kundenprofil siehst du, wer welches Produkt gekauft hat – ideal für Empfehlungen und Nachbestellungen.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="emerald"
                description="In drei Schritten vom Produkt zum Verkauf."
                steps={[
                    { title: 'Produkte anlegen', text: 'Trage deine Artikel mit Name, Preis, Bild und Anfangsbestand ein. Du kannst so viele Produkte anlegen, wie du möchtest.' },
                    { title: 'Im Studio verkaufen', text: 'Empfiehl der Kundin nach der Behandlung das passende Produkt und verkaufe es direkt über die Kasse. Der Verkauf wird im Kundenprofil gespeichert.' },
                    { title: 'Bestand aktualisiert sich', text: 'Nach jedem Verkauf wird der Lagerbestand automatisch reduziert. Die Verkaufshistorie zeigt dir, welche Produkte am besten laufen.' },
                ]}
            />

            <FeatureCards
                theme="emerald"
                title="Was du bekommst"
                description="Einfacher Produktverkauf für Kosmetikstudios – klar und übersichtlich."
                items={[
                    { icon: Package, title: 'Unbegrenzte Produkte', text: 'So viele Artikel wie du willst – ohne Limits.', points: ['Keine Limits', 'Kategorien', 'Flexible Preise'] },
                    { icon: TrendingUp, title: 'Lagerverwaltung', text: 'Bestand auf einen Blick und Warnung bei niedrigen Mengen.', points: ['Bestandsübersicht', 'Nachbestellen', 'Verkaufshistorie'] },
                    { icon: Camera, title: 'Bilder & Texte', text: 'Produkte mit Fotos und Beschreibungen präsentieren.', points: ['Produktbilder', 'Beschreibungen', 'Varianten'] },
                    { icon: ShoppingBag, title: 'Was du verkaufen kannst', text: 'Pflege, Gutscheine, Pakete und Zubehör.', points: ['Pflegeprodukte', 'Gutscheine', 'Pakete'] },
                    { icon: BarChart3, title: 'Verkaufsübersicht', text: 'Umsatz und Top-Produkte im Blick behalten.', points: ['Umsatz', 'Top-Artikel', 'Nachvollziehbar'] },
                    { icon: CreditCard, title: 'Mit der Kasse', text: 'Verkauf und Zahlung über die Treatflow Kasse abwickeln.', points: ['Ein Checkout', 'Kundenprofil', 'Professionell'] },
                ]}
            />

            <SocialProofBar />

            <FeatureRelated
                items={[
                    { href: '/kassensystem-kosmetikstudio', title: 'Kassensystem', description: 'TSE- & RKSV-konform kassieren' },
                    { href: '/gutscheine-kosmetikstudio', title: 'Gutscheine', description: 'Verkaufen & einlösen an der Kasse' },
                    { href: '/kundenverwaltung', title: 'Kundenverwaltung', description: 'Kaufhistorie im Kundenprofil' },
                ]}
            />

            <FeaturePageCta
                theme="emerald"
                title="Bereit für deinen Studio-Shop?"
                description="14 Tage kostenlos testen – Produkte verkaufen und Lager im Blick behalten."
                secondaryLabel="Zur Kasse"
                secondaryHref="/kassensystem-kosmetikstudio"
            />

            <Footer />
        </div>
    );
}
