import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import IntegrationsPage from '@/app/site/pages/IntegrationsPage';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import { getIntegrationsContent } from '@/app/site/content/integrations';

const { meta } = getIntegrationsContent('de');

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/integrationen',
        ...buildHreflangAlternates('integrations'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/integrationen',
    },
};

/** Deutsche Seite. Sektionen: app/site/pages/IntegrationsPage.tsx, Texte: app/site/content/integrations/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <IntegrationsPage market="de" />
            <Footer />
        </div>
    );
}
