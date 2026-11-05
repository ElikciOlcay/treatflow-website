import FeaturePage from "./FeaturePage";
import { getOnlineBookingContent } from "@/app/site/content/online-booking";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „online-booking“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…). */
export default function OnlineBookingPage({ market }: { market: SiteMarket }) {
  return <FeaturePage content={getOnlineBookingContent(market)} market={market} pageKey="online-booking" theme="orange" />;
}
