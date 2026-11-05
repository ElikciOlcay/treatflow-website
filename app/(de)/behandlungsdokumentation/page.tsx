import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import TreatmentDocumentationPage from '@/app/site/pages/TreatmentDocumentationPage';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import { getTreatmentDocumentationContent } from '@/app/site/content/treatment-documentation';

const { meta } = getTreatmentDocumentationContent('de');

export const metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/behandlungsdokumentation',
        ...buildHreflangAlternates('treatment-documentation'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/behandlungsdokumentation',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
};

/** Deutsche Seite. Sektionen: app/site/pages/TreatmentDocumentationPage.tsx, Texte: app/site/content/treatment-documentation/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <TreatmentDocumentationPage market="de" />
            <Footer />
        </div>
    );
}
