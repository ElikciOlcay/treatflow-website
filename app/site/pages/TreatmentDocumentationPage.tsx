import FeaturePage from "./FeaturePage";
import { getTreatmentDocumentationContent } from "@/app/site/content/treatment-documentation";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „treatment-documentation“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…). */
export default function TreatmentDocumentationPage({ market }: { market: SiteMarket }) {
  return (
    <FeaturePage
      content={getTreatmentDocumentationContent(market)}
      market={market}
      pageKey="treatment-documentation"
      theme="purple"
    />
  );
}
