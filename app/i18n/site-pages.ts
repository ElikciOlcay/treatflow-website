import { marketPathPrefix, type Market } from "./config";
import { featureAvailable, type Feature } from "./feature-availability";
import { getPagePath, seoPageSlugs, type SeoPageKey } from "./seo";

/**
 * Logische Seiten der Website, sprachübergreifend.
 *
 * Inhalte (app/site/content/**) verlinken nicht mit festen Pfaden, sondern mit
 * `{ page: "<key>" }`. `sitePagePath(market, key)` liefert den Pfad in der
 * jeweiligen Sprache (DE-Root-Slug bzw. /{lang}/<lokaler-slug>) – oder `null`,
 * wenn es die Seite in dieser Sprache (noch) nicht gibt oder die Funktion dort
 * nicht angeboten wird. Links mit `null` blenden die Komponenten aus.
 *
 * Neue Seite unter app/[market]/… angelegt? Dann hier `seo` setzen (und den Key
 * in `seo.ts`/`market-routes.ts` ergänzen) – danach erscheinen alle Links darauf
 * automatisch in Navigation, Footer und Startseite.
 */
type SitePageDef = {
  /** Root-Slug der deutschen Seite ("" = Startseite). */
  de?: string;
  /** SEO-Key: Pfad + Existenz in den anderen Sprachen kommen aus `seoPageSlugs`. */
  seo?: SeoPageKey;
  /** Sonderfall: Pfad je Sprache selbst bauen (z. B. Blog). */
  path?: (market: Exclude<Market, "de">) => string | null;
  /** Seite gehört zu einer nicht überall angebotenen Funktion. */
  feature?: Feature;
};

const SITE_PAGES = {
  home: { seo: "home" },
  pricing: { seo: "pricing" },
  contact: { seo: "contact" },
  about: { seo: "about" },
  privacy: { seo: "privacy" },
  terms: { seo: "terms" },
  imprint: { de: "impressum" },
  blog: { de: "blog", path: (m) => `${marketPathPrefix[m]}/blog` },
  news: { seo: "news" },
  features: { seo: "features" },
  "try-features": { seo: "try-features" },
  "try-forms": { seo: "try-forms" },
  "appointment-calendar": { seo: "appointment-calendar" },
  "online-booking": { seo: "online-booking" },
  "client-records": { seo: "client-records" },
  forms: { seo: "forms" },
  "treatment-documentation": { seo: "treatment-documentation" },
  messaging: { seo: "messaging" },
  "customer-workflows": { seo: "customer-workflows" },
  integrations: { seo: "integrations" },
  shop: { seo: "shop" },
  "studio-website": { seo: "studio-website" },
  "treatflow-pay": { seo: "treatflow-pay", feature: "pay" },
  "point-of-sale": { seo: "point-of-sale", feature: "pos" },
  vouchers: { seo: "vouchers", feature: "vouchers" },
  "nisv-documentation": { de: "nisv-dokumentation", feature: "nisv" },
  "software-comparison": { seo: "software-comparison" },
  "treatflow-vs-fresha": { seo: "treatflow-vs-fresha" },
  "treatflow-vs-treatwell": { seo: "treatflow-vs-treatwell" },
  "beauty-salon-software": { seo: "beauty-salon-software" },
  "beauty-center-software": { seo: "beauty-center-software" },
  "aesthetic-clinic-software": { seo: "aesthetic-clinic-software" },
  "laser-hair-removal-software": { seo: "laser-hair-removal-software" },
  "permanent-makeup-software": { seo: "permanent-makeup-software" },
  "tattoo-studio-software": { seo: "tattoo-studio-software" },
  "nail-salon-software": { seo: "nail-salon-software" },
  "lash-studio-software": { seo: "lash-studio-software" },
  "spa-wellness-software": { seo: "spa-wellness-software" },
  "massage-software": { seo: "massage-software" },
  "foot-care-software": { de: "fusspflege-software" },
} satisfies Record<string, SitePageDef>;

export type SitePageKey = keyof typeof SITE_PAGES;

/** Verweis auf eine logische Seite (optional mit #anker). */
export type PageRef = {
  page: SitePageKey;
  hash?: string;
  /** Ersatzseite, solange `page` in der Sprache fehlt (z. B. Workflows → Nachrichten). */
  fallback?: SitePageKey;
};

/** Link-Ziel in Inhalten: fester Pfad/URL oder logische Seite. */
export type Href = string | PageRef;

/** Pfad der logischen Seite in der Sprache, `null` = gibt es dort nicht. */
export function sitePagePath(market: Market, key: SitePageKey): string | null {
  const def: SitePageDef = SITE_PAGES[key];
  if (def.feature && !featureAvailable(def.feature, market)) return null;

  if (market === "de") {
    const slug = def.de ?? (def.seo ? seoPageSlugs[def.seo].de : undefined);
    if (slug === undefined) return null;
    return slug ? `/${slug}` : "/";
  }

  if (def.path) return def.path(market);
  if (def.seo && seoPageSlugs[def.seo][market] !== undefined) {
    return getPagePath(market, def.seo);
  }
  return null;
}

/** Link-Ziel auflösen; `null` heißt: Link in dieser Sprache ausblenden. */
export function resolveHref(market: Market, href: Href): string | null {
  if (typeof href === "string") return href;
  const path =
    sitePagePath(market, href.page) ??
    (href.fallback ? sitePagePath(market, href.fallback) : null);
  if (path === null) return null;
  return href.hash ? `${path}#${href.hash}` : path;
}

/** Wie `resolveHref`, aber mit Startseite als Rückfall (für Pflicht-Links). */
export function resolveHrefOrHome(market: Market, href: Href): string {
  return resolveHref(market, href) ?? (sitePagePath(market, "home") as string);
}
