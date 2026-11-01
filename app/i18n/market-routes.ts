import { marketPathPrefix, type Market, type PrefixedMarket } from "./config";

/**
 * Alle Non-DE-Maerkte nutzen dieselben EN-Slugs unter /{market}/...
 * (DE behält lokalisierte Root-URLs).
 */
export const EN_SLUGS = {
  home: "",
  pricing: "pricing",
  contact: "contact",
  "early-access": "early-access",
  about: "about",
  privacy: "privacy",
  terms: "terms",
  "appointment-calendar": "appointment-calendar",
  "online-booking": "online-booking",
  "client-records": "client-records",
  forms: "forms",
  "try-forms": "try-forms",
  "treatment-documentation": "treatment-documentation",
  "point-of-sale": "point-of-sale",
  vouchers: "vouchers",
  messaging: "messaging",
  integrations: "integrations",
  features: "features",
  shop: "shop",
  "studio-website": "studio-website",
  "beauty-salon-software": "beauty-salon-software",
  "aesthetic-clinic-software": "aesthetic-clinic-software",
  "laser-hair-removal-software": "laser-hair-removal-software",
  "permanent-makeup-software": "permanent-makeup-software",
  "tattoo-studio-software": "tattoo-studio-software",
  "nail-salon-software": "nail-salon-software",
  "lash-studio-software": "lash-studio-software",
  "spa-wellness-software": "spa-wellness-software",
  "massage-software": "massage-software",
  news: "news",
  "treatflow-vs-fresha": "treatflow-vs-fresha",
  "treatflow-vs-treatwell": "treatflow-vs-treatwell",
  "software-comparison": "software-comparison",
} as const;

/**
 * Phase 2 (not published as 200 pages):
 * - Guides: do not add an empty `/en/guides` hub. Publish articles only with real content.
 * - Compare: further competitors (Phorest, Vagaro, Booksy, Pabau) only after verified data.
 * - Keyword variants live as 301 aliases in `next.config.ts`, not as duplicate pages.
 * - POS, payments and gift vouchers stay DACH-only. Do not add `/en/point-of-sale`,
 *   `/tr/point-of-sale` or `/tr/vouchers` product pages.
 */
export type MarketPageSlug = keyof typeof EN_SLUGS;

/**
 * Lokalisierte TR-Slugs fuer Money Pages.
 * EN bleibt unter den EN-Slugs. Alte /tr/{en-slug} URLs 301en in next.config.ts.
 * TR-Seiten liegen als eigene Ordner unter app/tr/ (kein Middleware-Rewrite).
 */
export const TR_SLUG_OVERRIDES: Partial<Record<MarketPageSlug, string>> = {
  pricing: "fiyatlar",
  "beauty-salon-software": "guzellik-salonu-programi",
  "laser-hair-removal-software": "lazer-epilasyon-programi",
  "client-records": "musteri-takip-programi",
  "online-booking": "online-randevu-sistemi",
};

/**
 * Lokalisierte Slugs fuer NL/IT/PL/ES/FR.
 * Die Seiten liegen unter app/[market]/<en-slug>; die Middleware rewritet
 * /{lang}/<lokal> → /{lang}/<en-slug> und 301t /{lang}/<en-slug> → lokal.
 * ES/IT/FR nutzen die alten Slugs von 2026 (Git-Historie), damit bestehende
 * Signale wieder greifen.
 */
export const LOCALIZED_SLUGS: Record<
  "nl" | "it" | "pl" | "es" | "fr",
  Partial<Record<MarketPageSlug, string>>
> = {
  nl: {
    pricing: "prijzen",
    about: "over-ons",
    terms: "voorwaarden",
    "appointment-calendar": "afsprakenkalender",
    "online-booking": "online-boeken",
    "client-records": "klantenbeheer",
    forms: "formulieren",
    "treatment-documentation": "behandeldocumentatie",
    vouchers: "cadeaubonnen",
    messaging: "berichten",
    integrations: "integraties",
    features: "functies",
    "studio-website": "salonwebsite",
    "beauty-salon-software": "schoonheidssalon-software",
    "aesthetic-clinic-software": "esthetische-kliniek-software",
    "laser-hair-removal-software": "laserontharing-software",
    "permanent-makeup-software": "permanente-make-up-software",
    "tattoo-studio-software": "tattoostudio-software",
    "nail-salon-software": "nagelstudio-software",
    "lash-studio-software": "wimperstudio-software",
    "spa-wellness-software": "spa-wellness-software",
    "massage-software": "massagepraktijk-software",
    news: "nieuws",
    "software-comparison": "salonsoftware-vergelijken",
  },
  it: {
    pricing: "prezzi",
    contact: "contatto",
    about: "chi-siamo",
    terms: "termini",
    "appointment-calendar": "calendario-appuntamenti",
    "online-booking": "prenotazioni-online",
    "client-records": "schede-clienti",
    forms: "moduli",
    "treatment-documentation": "documentazione-trattamenti",
    vouchers: "buoni-regalo",
    messaging: "messaggistica",
    integrations: "integrazioni",
    features: "funzioni",
    shop: "negozio",
    "studio-website": "sito-web-centro",
    "beauty-salon-software": "software-centro-estetico",
    "aesthetic-clinic-software": "software-clinica-estetica",
    "laser-hair-removal-software": "software-epilazione-laser",
    "permanent-makeup-software": "software-trucco-permanente",
    "tattoo-studio-software": "software-studio-tatuaggi",
    "nail-salon-software": "software-centro-unghie",
    "lash-studio-software": "software-extension-ciglia",
    "spa-wellness-software": "software-spa-wellness",
    "massage-software": "software-massaggi",
    news: "novita",
    "software-comparison": "confronto-software",
  },
  pl: {
    pricing: "cennik",
    contact: "kontakt",
    about: "o-nas",
    privacy: "polityka-prywatnosci",
    terms: "regulamin",
    "appointment-calendar": "kalendarz-wizyt",
    "online-booking": "rezerwacje-online",
    "client-records": "kartoteka-klientow",
    forms: "formularze",
    "treatment-documentation": "dokumentacja-zabiegow",
    vouchers: "bony-podarunkowe",
    messaging: "przypomnienia",
    integrations: "integracje",
    features: "funkcje",
    shop: "sklep",
    "studio-website": "strona-salonu",
    "beauty-salon-software": "program-dla-salonu-kosmetycznego",
    "aesthetic-clinic-software": "program-dla-gabinetu-medycyny-estetycznej",
    "laser-hair-removal-software": "program-depilacja-laserowa",
    "permanent-makeup-software": "program-makijaz-permanentny",
    "tattoo-studio-software": "program-dla-studia-tatuazu",
    "nail-salon-software": "program-dla-salonu-paznokci",
    "lash-studio-software": "program-dla-stylizacji-rzes",
    "spa-wellness-software": "program-dla-spa",
    "massage-software": "program-dla-gabinetu-masazu",
    news: "nowosci",
    "software-comparison": "porownanie-programow",
  },
  es: {
    pricing: "precios",
    contact: "contacto",
    about: "sobre-nosotros",
    privacy: "privacidad",
    terms: "terminos",
    "appointment-calendar": "calendario-citas",
    "online-booking": "reservas-online",
    "client-records": "fichas-clientes",
    forms: "formularios",
    "treatment-documentation": "documentacion-tratamientos",
    vouchers: "vales",
    messaging: "mensajeria",
    integrations: "integraciones",
    features: "funciones",
    shop: "tienda",
    "studio-website": "web-para-salones",
    "beauty-salon-software": "software-salon-belleza",
    "aesthetic-clinic-software": "software-clinica-estetica",
    "laser-hair-removal-software": "software-depilacion-laser",
    "permanent-makeup-software": "software-maquillaje-permanente",
    "tattoo-studio-software": "software-estudio-tatuajes",
    "nail-salon-software": "software-salon-unas",
    "lash-studio-software": "software-extension-pestanas",
    "spa-wellness-software": "software-spa-wellness",
    "massage-software": "software-masajes",
    news: "novedades",
    "software-comparison": "comparativa-software",
  },
  fr: {
    pricing: "tarifs",
    about: "a-propos",
    privacy: "confidentialite",
    terms: "conditions",
    "appointment-calendar": "calendrier-rendez-vous",
    "online-booking": "reservation-en-ligne",
    "client-records": "fiches-clients",
    forms: "formulaires",
    "treatment-documentation": "documentation-soins",
    vouchers: "bons-cadeaux",
    messaging: "messagerie",
    features: "fonctionnalites",
    shop: "boutique",
    "studio-website": "site-web-institut",
    "beauty-salon-software": "logiciel-institut-beaute",
    "aesthetic-clinic-software": "logiciel-clinique-esthetique",
    "laser-hair-removal-software": "logiciel-epilation-laser",
    "permanent-makeup-software": "logiciel-maquillage-permanent",
    "tattoo-studio-software": "logiciel-salon-tatouage",
    "nail-salon-software": "logiciel-salon-ongles",
    "lash-studio-software": "logiciel-extension-cils",
    "spa-wellness-software": "logiciel-spa-wellness",
    "massage-software": "logiciel-massage",
    news: "nouveautes",
    "software-comparison": "comparatif-logiciels",
  },
};

function slugOverrides(
  market: PrefixedMarket | Market
): Partial<Record<MarketPageSlug, string>> | undefined {
  if (market === "tr") return TR_SLUG_OVERRIDES;
  if (market in LOCALIZED_SLUGS) {
    return LOCALIZED_SLUGS[market as keyof typeof LOCALIZED_SLUGS];
  }
  return undefined;
}

export function marketSlug(
  market: PrefixedMarket | Market,
  key: MarketPageSlug
): string {
  return slugOverrides(market)?.[key] ?? EN_SLUGS[key];
}

/**
 * Lokaler Slug → EN-Slug (fuer Middleware-Rewrite). Nur NL/IT/PL/ES/FR.
 * Gibt null zurueck, wenn der Slug kein lokalisierter Slug ist.
 */
export function delocalizeSlug(market: string, localSlug: string): string | null {
  const map = LOCALIZED_SLUGS[market as keyof typeof LOCALIZED_SLUGS];
  if (!map) return null;
  const key = (Object.keys(map) as MarketPageSlug[]).find(
    (k) => map[k] === localSlug && EN_SLUGS[k] !== localSlug
  );
  return key ? EN_SLUGS[key] : null;
}

export function marketBase(market: PrefixedMarket | Market): string {
  if (market === "de") return "";
  return marketPathPrefix[market] || `/${market}`;
}

export function marketPath(
  market: PrefixedMarket | Market,
  slug: string
): string {
  const base = marketBase(market);
  if (!slug) return base || "/";
  return `${base}/${slug}`;
}

export function marketPagePath(
  market: PrefixedMarket | Market,
  key: MarketPageSlug
): string {
  return marketPath(market, marketSlug(market, key));
}

/** EN-Slug → markt-lokalisierter Slug (TR + NL/IT/PL/ES/FR). */
export function localizeEnSlug(
  market: PrefixedMarket | Market,
  enSlug: string
): string {
  const overrides = slugOverrides(market);
  if (!overrides) return enSlug;
  const found = (Object.keys(EN_SLUGS) as MarketPageSlug[]).find(
    (key) => EN_SLUGS[key] === enSlug
  );
  if (!found) return enSlug;
  return overrides[found] ?? enSlug;
}

/** Ganzen Pfad /en/<slug>/<rest> → /{market}/<lokal>/<rest>. */
export function localizeEnPath(market: PrefixedMarket | Market, path: string): string {
  const match = path.match(/^\/en(\/([^/?#]+))?(.*)$/);
  if (!match) return path;
  const base = marketPathPrefix[market] ?? `/${market}`;
  if (!match[2]) return `${base}${match[3] ?? ""}` || "/";
  return `${base}/${localizeEnSlug(market, match[2])}${match[3] ?? ""}`;
}
