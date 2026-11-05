import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import FeaturesOverviewPage from '@/app/site/pages/FeaturesOverviewPage';
import { buildHreflangAlternates, withDeOpenGraph } from '@/app/i18n/seo';
import { getFeaturesContent } from '@/app/site/content/features';

const { meta } = getFeaturesContent('de');

export const metadata: Metadata = withDeOpenGraph('features', {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/funktionen',
        ...buildHreflangAlternates("features"),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/funktionen',
    },
});

/** Deutsche Seite. Sektionen: app/site/pages/FeaturesOverviewPage.tsx, Texte: app/site/content/features/de.ts */
export default function FunktionenPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <FeaturesOverviewPage market="de" />
            <Footer />
        </div>
    );
}
