import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ShopPage from '@/app/site/pages/ShopPage';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import { getShopContent } from '@/app/site/content/shop';

const { meta } = getShopContent('de');

export const metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/shop',
        ...buildHreflangAlternates('shop'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/shop',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
};

/** Deutsche Seite. Sektionen: app/site/pages/ShopPage.tsx, Texte: app/site/content/shop/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <ShopPage market="de" />
            <Footer />
        </div>
    );
}
