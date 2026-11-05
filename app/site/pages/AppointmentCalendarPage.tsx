import FeaturePage from "./FeaturePage";
import { getAppointmentCalendarContent } from "@/app/site/content/appointment-calendar";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „appointment-calendar“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…). */
export default function AppointmentCalendarPage({ market }: { market: SiteMarket }) {
  return <FeaturePage content={getAppointmentCalendarContent(market)} market={market} pageKey="appointment-calendar" theme="indigo" />;
}
