import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import PricingPage from "@/app/site/pages/PricingPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getPricingPageContent } from "@/app/site/content/pricing";

const { meta } = getPricingPageContent("tr");

export const metadata: Metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "tr",
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
});

/** Gleiche Seite wie DE/[market], Inhalte aus app/site/content/pricing/tr.ts (+ home/tr.ts `pricing`) */
export default function Page() {
  return (
    <TrSeoShell>
      <PricingPage market="tr" />
    </TrSeoShell>
  );
}
