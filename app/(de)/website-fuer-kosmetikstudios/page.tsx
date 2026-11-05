import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import StudioWebsitePage, { StudioWebsiteSchemas } from '@/app/site/pages/StudioWebsitePage';
import { buildHreflangAlternates, withDeOpenGraph } from '@/app/i18n/seo';
import { getStudioWebsiteContent } from '@/app/site/content/studio-website';

const { meta } = getStudioWebsiteContent('de');

export const metadata: Metadata = withDeOpenGraph('studio-website', {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: {
    canonical: 'https://www.treatflow.io/website-fuer-kosmetikstudios',
    ...buildHreflangAlternates('studio-website'),
  },
  openGraph: meta.openGraph && {
    title: meta.openGraph.title,
    description: meta.openGraph.description,
    url: 'https://www.treatflow.io/website-fuer-kosmetikstudios',
    images: [{ url: meta.openGraph.image.url, width: 1200, height: 630, alt: meta.openGraph.image.alt }],
  },
});

/** Deutsche Seite. Sektionen: app/site/pages/StudioWebsitePage.tsx, Texte: app/site/content/studio-website/de.ts */
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <StudioWebsiteSchemas market="de" />
      <Navigation />
      <StudioWebsitePage market="de" />
      <Footer />
    </div>
  );
}
