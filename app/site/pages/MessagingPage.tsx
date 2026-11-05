import FeaturePage from "./FeaturePage";
import { getMessagingContent } from "@/app/site/content/messaging";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „messaging“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…). WhatsApp nur DE. */
export default function MessagingPage({ market }: { market: SiteMarket }) {
  return <FeaturePage content={getMessagingContent(market)} market={market} pageKey="messaging" theme="purple" />;
}
