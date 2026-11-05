import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import TreatflowPayPage from '@/app/site/pages/TreatflowPayPage';
import { buildHreflangAlternates, withDeOpenGraph } from '@/app/i18n/seo';
import { getTreatflowPayContent } from '@/app/site/content/treatflow-pay';

const { meta } = getTreatflowPayContent('de')!;

export const metadata: Metadata = withDeOpenGraph('treatflow-pay', {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/treatflow-pay',
        ...buildHreflangAlternates('treatflow-pay'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/treatflow-pay',
        // Produkt-Update-Bild im 16:9-Format (wie bisher)
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 675, alt: meta.openGraph.image.alt }],
    },
});

/** Deutsche Seite. Sektionen: app/site/pages/TreatflowPayPage.tsx, Texte: app/site/content/treatflow-pay/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <TreatflowPayPage market="de" />
            <Footer />
        </div>
    );
}
