import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import FormsPage from '@/app/site/pages/FormsPage';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import { getFormsContent } from '@/app/site/content/forms';

const { meta } = getFormsContent('de');

export const metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/formulare',
        ...buildHreflangAlternates('forms'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/formulare',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
};

/** Deutsche Seite. Sektionen: app/site/pages/FormsPage.tsx, Texte: app/site/content/forms/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <FormsPage market="de" />
            <Footer />
        </div>
    );
}
