import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ShiftPlannerPage from '@/app/site/pages/ShiftPlannerPage';
import { buildHreflangAlternates, withDeOpenGraph } from '@/app/i18n/seo';
import { getShiftPlannerContent } from '@/app/site/content/shift-planner';

const { meta } = getShiftPlannerContent('de');

export const metadata: Metadata = withDeOpenGraph('shift-planner', {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
        canonical: 'https://www.treatflow.io/schichtplaner',
        ...buildHreflangAlternates('shift-planner'),
    },
    openGraph: meta.openGraph && {
        title: meta.openGraph.title,
        description: meta.openGraph.description,
        url: 'https://www.treatflow.io/schichtplaner',
        images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
    },
});

/** Deutsche Seite. Sektionen: app/site/pages/ShiftPlannerPage.tsx, Texte: app/site/content/shift-planner/de.ts */
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <ShiftPlannerPage market="de" />
            <Footer />
        </div>
    );
}
