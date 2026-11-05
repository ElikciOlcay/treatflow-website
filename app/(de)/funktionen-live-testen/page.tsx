import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import TryFeaturesPage, { TryFeaturesSchema } from "@/app/site/pages/TryFeaturesPage";
import { buildHreflangAlternates, withDeOpenGraph } from "@/app/i18n/seo";
import { getTryFeaturesContent } from "@/app/site/content/try-features";

const PAGE_URL = "https://www.treatflow.io/funktionen-live-testen";
const { meta } = getTryFeaturesContent("de");

export const metadata: Metadata = withDeOpenGraph("try-features", {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: PAGE_URL, ...buildHreflangAlternates("try-features") },
  openGraph: {
    title: meta.openGraph.title,
    description: meta.openGraph.description,
    url: PAGE_URL,
  },
});

/** Deutsche Seite. Sektionen: app/site/pages/TryFeaturesPage.tsx, Texte: app/site/content/try-features/de.ts */
export default function FunktionenLiveTestenPage() {
  return (
    <div className="min-h-screen bg-white">
      <TryFeaturesSchema market="de" />
      <Navigation />
      <TryFeaturesPage market="de" />
      <Footer />
    </div>
  );
}
