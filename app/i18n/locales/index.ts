import "server-only";
import type { BundleLang, PrefixedMarket } from "../config";
import { localizeEnPath } from "../market-routes";
import type { LocaleSiteContent } from "./types";
import { content as nl } from "./nl";
import { content as it } from "./it";
import { content as pl } from "./pl";
import { content as es } from "./es";
import { content as fr } from "./fr";

const bundles: Record<BundleLang, LocaleSiteContent> = { nl, it, pl, es, fr };

/**
 * Ersetzt alle /en/... Pfade durch die lokalisierte URL des Markts
 * (/nl/prijzen statt /en/pricing). Funktionen und Icons bleiben erhalten.
 */
export function localizePaths<T>(value: T, market: PrefixedMarket): T {
  if (typeof value === "string") {
    if (value === "/en" || value.startsWith("/en/") || value.startsWith("/en#")) {
      return localizeEnPath(market, value) as T;
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => localizePaths(item, market)) as T;
  }
  // React-Komponenten (z. B. lucide Icons) unveraendert lassen
  if (
    value &&
    typeof value === "object" &&
    !("$$typeof" in value) &&
    Object.getPrototypeOf(value) === Object.prototype
  ) {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      out[key] = localizePaths(child, market);
    }
    return out as T;
  }
  return value;
}

const cache = new Map<BundleLang, LocaleSiteContent>();

/** Inhalte einer Bundle-Sprache mit lokalisierten Links. */
export function getLocaleContent(lang: BundleLang): LocaleSiteContent {
  const cached = cache.get(lang);
  if (cached) return cached;
  const localized = localizePaths(bundles[lang], lang);
  cache.set(lang, localized);
  return localized;
}
