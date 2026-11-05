import FeaturePage from "./FeaturePage";
import { getClientWorkflowsContent } from "@/app/site/content/client-workflows";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „customer-workflows“ für alle Sprachen (DE: /kunden-workflows, sonst app/[market]/client-workflows, TR: app/tr/musteri-otomasyonlari). */
export default function ClientWorkflowsPage({ market }: { market: SiteMarket }) {
  return <FeaturePage content={getClientWorkflowsContent(market)} market={market} pageKey="customer-workflows" theme="indigo" />;
}
