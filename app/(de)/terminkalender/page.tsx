import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import AppointmentCalendarPage from '@/app/site/pages/AppointmentCalendarPage';
import { buildHreflangAlternates, withDeOpenGraph } from '@/app/i18n/seo';
import { getAppointmentCalendarContent } from '@/app/site/content/appointment-calendar';

const { meta } = getAppointmentCalendarContent('de');

export const metadata: Metadata = withDeOpenGraph('appointment-calendar', {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/terminkalender',
        ...buildHreflangAlternates('appointment-calendar'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/terminkalender',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
});

/** Deutsche Seite. Sektionen: app/site/pages/AppointmentCalendarPage.tsx, Texte: app/site/content/appointment-calendar/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <AppointmentCalendarPage market="de" />
            <Footer />
        </div>
    );
}
