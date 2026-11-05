import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ClientRecordsPage from '@/app/site/pages/ClientRecordsPage';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import { getClientRecordsContent } from '@/app/site/content/client-records';

const { meta } = getClientRecordsContent('de');

export const metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/kundenverwaltung',
        ...buildHreflangAlternates('client-records'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/kundenverwaltung',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
};

/** Deutsche Seite. Sektionen: app/site/pages/ClientRecordsPage.tsx, Texte: app/site/content/client-records/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <ClientRecordsPage market="de" />
            <Footer />
        </div>
    );
}
