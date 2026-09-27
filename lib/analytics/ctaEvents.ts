import { getStoredAttribution } from "./adsAttribution";

/**
 * Klick auf Demo oder Testzugang.
 * Ein Demo-Klick ist keine gebuchte Demo. HubSpot Meetings liefert auf der
 * Website kein verifiziertes Buchungssignal (kein Redirect, kein Webhook),
 * deshalb gibt es hier bewusst kein Buchungs- oder Conversion-Event.
 */
export type CtaLocation = "header" | "hero" | "onboarding" | "pricing" | "footer" | "sticky";
export type CtaKind = "demo" | "trial";

export type CtaClickInput = {
  kind: CtaKind;
  location: CtaLocation;
  plan?: string;
};

export function trackCtaClick({ kind, location, plan }: CtaClickInput) {
  if (typeof window === "undefined") return;

  const eventName = kind === "demo" ? "demo_cta_clicked" : "trial_cta_clicked";
  const attribution = getStoredAttribution();
  const payload: Record<string, string> = {
    cta_location: location,
    page_path: window.location.pathname,
    funnel_variant: "demo_first",
  };
  if (plan) payload.plan = plan;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...attribution,
      ...payload,
    });
  }

  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: eventName,
    ...attribution,
    ...payload,
  });
}
