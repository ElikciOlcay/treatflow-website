import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import OnlineBookingPage from '@/app/site/pages/OnlineBookingPage';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import { getOnlineBookingContent } from '@/app/site/content/online-booking';

const { meta } = getOnlineBookingContent('de');

export const metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/online-buchungen',
        ...buildHreflangAlternates('online-booking'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/online-buchungen',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
};

/** Deutsche Seite. Sektionen: app/site/pages/OnlineBookingPage.tsx, Texte: app/site/content/online-booking/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <OnlineBookingPage market="de" />
            <Footer />
        </div>
    );
}
