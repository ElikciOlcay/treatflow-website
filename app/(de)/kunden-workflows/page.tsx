import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ClientWorkflowsPage from '@/app/site/pages/ClientWorkflowsPage';
import { buildHreflangAlternates, withDeOpenGraph } from '@/app/i18n/seo';
import { getClientWorkflowsContent } from '@/app/site/content/client-workflows';

const { meta } = getClientWorkflowsContent('de');

export const metadata: Metadata = withDeOpenGraph('customer-workflows', {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/kunden-workflows',
        ...buildHreflangAlternates('customer-workflows'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/kunden-workflows',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
});

/** Deutsche Seite. Sektionen: app/site/pages/ClientWorkflowsPage.tsx, Texte: app/site/content/client-workflows/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <ClientWorkflowsPage market="de" />
            <Footer />
        </div>
    );
}
