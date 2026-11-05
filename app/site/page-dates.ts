import type { Market } from "@/app/i18n/config";
import { siteLanguages } from "@/app/i18n/config";
import type { SeoPageKey } from "@/app/i18n/seo";
import { getAppointmentCalendarContent } from "@/app/site/content/appointment-calendar";
import { getClientRecordsContent } from "@/app/site/content/client-records";
import { getClientWorkflowsContent } from "@/app/site/content/client-workflows";
import { getFormsContent } from "@/app/site/content/forms";
import { getMessagingContent } from "@/app/site/content/messaging";
import { getOnlineBookingContent } from "@/app/site/content/online-booking";
import { getPricingPageContent } from "@/app/site/content/pricing";
import type { SiteMarket } from "@/app/site/content/shared";
import { getTreatflowPayContent } from "@/app/site/content/treatflow-pay";
import { getTreatmentDocumentationContent } from "@/app/site/content/treatment-documentation";

/**
 * Letzte inhaltliche Änderung je Seite und Sprache (für sitemap.xml `lastModified`).
 * Seiten mit sichtbarem „Aktualisiert am“ nutzen dieses Datum (`dates.modified` im Inhalt),
 * die übrigen Phase-1-Seiten das Datum der letzten Überarbeitung aller Sprachen.
 */
const PHASE1_UPDATED = "2026-11-05";

const DATED: Partial<Record<SeoPageKey, (market: SiteMarket) => string | undefined>> = {
  pricing: (m) => getPricingPageContent(m).dates.modified,
  "appointment-calendar": (m) => getAppointmentCalendarContent(m).dates.modified,
  "online-booking": (m) => getOnlineBookingContent(m).dates.modified,
  "client-records": (m) => getClientRecordsContent(m).dates.modified,
  forms: (m) => getFormsContent(m).dates.modified,
  "treatment-documentation": (m) => getTreatmentDocumentationContent(m).dates.modified,
  messaging: (m) => getMessagingContent(m).dates.modified,
  "customer-workflows": (m) => getClientWorkflowsContent(m).dates.modified,
  "treatflow-pay": (m) => getTreatflowPayContent(m)?.dates.modified,
};

const UNDATED_PHASE1: readonly SeoPageKey[] = ["home", "features", "integrations", "shop", "studio-website", "try-features"];

function isSiteMarket(market: Market): market is SiteMarket {
  return (siteLanguages as readonly string[]).includes(market);
}

/** `Date` der letzten Änderung oder `undefined` (dann entscheidet der Aufrufer). */
export function pageLastModified(pageKey: SeoPageKey, market: Market): Date | undefined {
  if (!isSiteMarket(market)) return undefined;
  const dated = DATED[pageKey]?.(market);
  if (dated) return new Date(dated);
  if (UNDATED_PHASE1.includes(pageKey)) return new Date(PHASE1_UPDATED);
  return undefined;
}
