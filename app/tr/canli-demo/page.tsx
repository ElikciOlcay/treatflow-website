import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import TryFeaturesPage, { TryFeaturesSchema } from "@/app/site/pages/TryFeaturesPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getTryFeaturesContent } from "@/app/site/content/try-features";

const { meta } = getTryFeaturesContent("tr");

export const metadata: Metadata = buildPageMetadata({
  pageKey: "try-features",
  locale: "tr",
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
});

/** Gleiche Seite wie DE/[market], Inhalte aus app/site/content/try-features/tr.ts */
export default function Page() {
  return (
    <TrSeoShell>
      <TryFeaturesSchema market="tr" />
      <TryFeaturesPage market="tr" />
    </TrSeoShell>
  );
}
