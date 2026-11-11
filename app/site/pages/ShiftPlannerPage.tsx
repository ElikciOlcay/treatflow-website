import FeaturePage from "./FeaturePage";
import { getShiftPlannerContent } from "@/app/site/content/shift-planner";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „shift-planner“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…). */
export default function ShiftPlannerPage({ market }: { market: SiteMarket }) {
  return <FeaturePage content={getShiftPlannerContent(market)} market={market} pageKey="shift-planner" theme="teal" />;
}
