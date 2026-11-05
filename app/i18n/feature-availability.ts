import type { Market } from "./config";

/**
 * Produktfunktionen, die nicht in jedem Markt angeboten werden.
 * Gleiche Regeln wie in der App (tfv2):
 *
 * - DACH-only (DE, AT, CH → nur die deutsche Website): Kasse/TSE/RKSV (`pos`),
 *   SumUp-Terminal (`sumup`), WhatsApp-Nachrichten (`whatsapp`),
 *   Lexware/AbaNinja (`accounting`), Gutscheine (`vouchers`), NiSV-Doku (`nisv`).
 * - Treatflow Pay (Stripe Connect, `pay`): überall außer Türkei.
 *
 * Alles andere (Online-Buchung, Kalender, Kundenakte, Doku, Formulare,
 * E-Mail-Erinnerungen, Automationen/Workflows, Warteliste, Shop, Studio-Website,
 * Google Kalender, Zapier, KI-Assistenten (MCP), Schichtplaner, Statistiken)
 * gibt es überall und braucht keinen Eintrag.
 */
export const gatedFeatures = [
  "pos",
  "sumup",
  "whatsapp",
  "accounting",
  "vouchers",
  "nisv",
  "pay",
] as const;

export type Feature = (typeof gatedFeatures)[number];

const DACH_ONLY: readonly Feature[] = ["pos", "sumup", "whatsapp", "accounting", "vouchers", "nisv"];

/** Website-Sprache/Markt → ist die Funktion dort verfügbar? */
export function featureAvailable(feature: Feature, market: Market | string): boolean {
  if (DACH_ONLY.includes(feature)) return market === "de";
  if (feature === "pay") return market !== "tr";
  return true;
}

/** Elemente mit optionalem `feature`-Tag auf den Markt filtern. */
export function filterByFeature<T extends { feature?: Feature }>(
  items: readonly T[],
  market: Market | string
): T[] {
  return items.filter((item) => !item.feature || featureAvailable(item.feature, market));
}
