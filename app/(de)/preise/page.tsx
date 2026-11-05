import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PricingPage from '@/app/site/pages/PricingPage';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import { getPricingPageContent } from '@/app/site/content/pricing';

const { meta } = getPricingPageContent('de');

export const metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/preise',
        ...buildHreflangAlternates("pricing"),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/preise',
    },
};

/** Deutsche Seite. Sektionen: app/site/pages/PricingPage.tsx, Texte: app/site/content/pricing/de.ts (+ home/de.ts `pricing`) */
export default function PreisePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <PricingPage market="de" />
            <Footer />
        </div>
    );
}
