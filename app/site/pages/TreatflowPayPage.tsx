import { notFound } from "next/navigation";
import FeaturePage from "./FeaturePage";
import { getTreatflowPayContent } from "@/app/site/content/treatflow-pay";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „treatflow-pay“ (DE: Root-Route, sonst app/[market]/treatflow-pay). Nicht in TR. */
export default function TreatflowPayPage({ market }: { market: SiteMarket }) {
  const content = getTreatflowPayContent(market);
  if (!content) notFound();
  return <FeaturePage content={content} market={market} pageKey="treatflow-pay" theme="indigo" />;
}
