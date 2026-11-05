import FeaturePage from "./FeaturePage";
import { getClientRecordsContent } from "@/app/site/content/client-records";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „client-records“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…). */
export default function ClientRecordsPage({ market }: { market: SiteMarket }) {
  return <FeaturePage content={getClientRecordsContent(market)} market={market} pageKey="client-records" theme="blue" />;
}
