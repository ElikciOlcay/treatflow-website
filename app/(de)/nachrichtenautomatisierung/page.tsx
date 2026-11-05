import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import MessagingPage from '@/app/site/pages/MessagingPage';
import { buildHreflangAlternates, withDeOpenGraph } from '@/app/i18n/seo';
import { getMessagingContent } from '@/app/site/content/messaging';

const { meta } = getMessagingContent('de');

export const metadata: Metadata = withDeOpenGraph('messaging', {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/nachrichtenautomatisierung',
        ...buildHreflangAlternates('messaging'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/nachrichtenautomatisierung',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
});

/** Deutsche Seite. Sektionen: app/site/pages/MessagingPage.tsx, Texte: app/site/content/messaging/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <MessagingPage market="de" />
            <Footer />
        </div>
    );
}
