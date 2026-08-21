import type { Metadata } from "next";
import {
  BASE_URL,
  type Market,
  hreflangTags,
  marketPathPrefix,
  ogLocaleTags,
  siteLanguages,
} from "./config";
import { EN_SLUGS, type MarketPageSlug } from "./market-routes";

/** Logische Seiten-IDs fuer hreflang-Zuordnung ueber Maerkte hinweg. */
export type SeoPageKey =
  | "home"
  | "pricing"
  | "contact"
  | "early-access"
  | "appointment-calendar"
  | "online-booking"
  | "client-records"
  | "consent-forms"
  | "treatment-documentation"
  | "forms"
  | "point-of-sale"
  | "vouchers"
  | "messaging"
  | "integrations"
  | "features"
  | "shop"
  | "studio-website"
  | "beauty-salon-software"
  | "aesthetic-clinic-software"
  | "laser-hair-removal-software"
  | "permanent-makeup-software"
  | "tattoo-studio-software"
  | "nail-salon-software"
  | "lash-studio-software"
  | "spa-wellness-software"
  | "massage-software"
  | "about"
  | "privacy"
  | "terms";

/** DE-Root-Slugs (bestehende SEO-URLs). */
const DE_SLUGS: Partial<Record<SeoPageKey, string>> = {
  home: "",
  pricing: "preise",
  contact: "kontakt",
  about: "ueber-uns",
  privacy: "datenschutz",
  "appointment-calendar": "terminkalender",
  "online-booking": "online-buchungen",
  "client-records": "kundenverwaltung",
  forms: "formulare",
  "consent-forms": "formulare",
  "treatment-documentation": "behandlungsdokumentation",
  "point-of-sale": "kassensystem-kosmetikstudio",
  vouchers: "gutscheine-kosmetikstudio",
  messaging: "nachrichtenautomatisierung",
  integrations: "integrationen",
  features: "funktionen",
  shop: "shop",
  "studio-website": "website-fuer-kosmetikstudios",
  "beauty-salon-software": "kosmetikstudio-software",
  "aesthetic-clinic-software": "aesthetische-medizin-software",
  "laser-hair-removal-software": "laser-haarentfernung-software",
  "permanent-makeup-software": "permanent-makeup-software",
  "tattoo-studio-software": "tattoo-studio-software",
  "nail-salon-software": "nagelstudio-software",
  "lash-studio-software": "lash-studio-software",
  "spa-wellness-software": "spa-wellness-software",
  "massage-software": "massage-software",
};

type PageSlugMap = Partial<Record<Market, string>>;

function buildSlugMap(pageKey: SeoPageKey): PageSlugMap {
  const map: PageSlugMap = {};
  const deSlug = DE_SLUGS[pageKey];
  if (deSlug !== undefined) map.de = deSlug;

  const enKey = pageKey === "consent-forms" ? "forms" : pageKey;
  const enSlug = EN_SLUGS[enKey as MarketPageSlug];
  if (enSlug === undefined && pageKey !== "home") {
    // page without EN slug (e.g. missing) – skip non-DE
    return map;
  }

  // Nur aktive Site-Sprachen (DE + EN) – keine Laender-Varianten mehr
  for (const market of siteLanguages) {
    if (market === "de") continue;
    if (pageKey === "early-access" || pageKey === "terms") {
      map[market] = EN_SLUGS[pageKey];
      continue;
    }
    if (enSlug !== undefined) {
      map[market] = enSlug;
    }
  }
  return map;
}

export const seoPageSlugs: Record<SeoPageKey, PageSlugMap> = {
  home: buildSlugMap("home"),
  pricing: buildSlugMap("pricing"),
  contact: buildSlugMap("contact"),
  "early-access": buildSlugMap("early-access"),
  about: buildSlugMap("about"),
  privacy: buildSlugMap("privacy"),
  terms: buildSlugMap("terms"),
  "appointment-calendar": buildSlugMap("appointment-calendar"),
  "online-booking": buildSlugMap("online-booking"),
  "client-records": buildSlugMap("client-records"),
  forms: buildSlugMap("forms"),
  "consent-forms": buildSlugMap("consent-forms"),
  "treatment-documentation": buildSlugMap("treatment-documentation"),
  "point-of-sale": {
    de: "kassensystem-kosmetikstudio",
    en: "point-of-sale",
  },
  vouchers: buildSlugMap("vouchers"),
  messaging: buildSlugMap("messaging"),
  integrations: buildSlugMap("integrations"),
  features: buildSlugMap("features"),
  shop: buildSlugMap("shop"),
  "studio-website": buildSlugMap("studio-website"),
  "beauty-salon-software": buildSlugMap("beauty-salon-software"),
  "aesthetic-clinic-software": buildSlugMap("aesthetic-clinic-software"),
  "laser-hair-removal-software": buildSlugMap("laser-hair-removal-software"),
  "permanent-makeup-software": buildSlugMap("permanent-makeup-software"),
  "tattoo-studio-software": buildSlugMap("tattoo-studio-software"),
  "nail-salon-software": buildSlugMap("nail-salon-software"),
  "lash-studio-software": buildSlugMap("lash-studio-software"),
  "spa-wellness-software": buildSlugMap("spa-wellness-software"),
  "massage-software": buildSlugMap("massage-software"),
};

function slugToUrl(market: Market, slug: string | undefined | null): string | null {
  if (slug === undefined || slug === null) return null;
  const prefix = marketPathPrefix[market];
  if (!prefix && slug === "") return BASE_URL;
  if (!prefix) return `${BASE_URL}/${slug}`;
  if (slug === "") return `${BASE_URL}${prefix}`;
  return `${BASE_URL}${prefix}/${slug}`;
}

/** Entfernt doppeltes Brand-Suffix; Layout-Template haengt ` | Treatflow` an. */
export function stripTitleBrand(title: string): string {
  return title.replace(/\s*\|\s*Treatflow\s*$/i, "").trim();
}

/** Baut hreflang-Alternates fuer eine logische Seite. */
export function buildHreflangAlternates(
  pageKey: SeoPageKey,
  options?: { xDefault?: Market }
): Metadata["alternates"] {
  const slugs = seoPageSlugs[pageKey];
  const languages: Record<string, string> = {};

  siteLanguages.forEach((market) => {
    const slug = slugs[market];
    if (slug === undefined) return;
    const url = slugToUrl(market, slug);
    if (url) languages[hreflangTags[market]] = url;
  });

  // DACH-first: x-default zeigt auf die deutsche Variante
  const xDefaultMarket = options?.xDefault ?? "de";
  const xDefaultSlug = slugs[xDefaultMarket] ?? slugs.de;
  if (xDefaultSlug !== undefined) {
    const xMarket = slugs[xDefaultMarket] !== undefined ? xDefaultMarket : "de";
    const xUrl = slugToUrl(xMarket, slugs[xMarket]!);
    if (xUrl) languages["x-default"] = xUrl;
  }

  return { languages };
}

export function buildPageMetadata(params: {
  pageKey: SeoPageKey;
  locale: Market;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const slugs = seoPageSlugs[params.pageKey];
  const slug = slugs[params.locale];
  const canonical =
    slug === undefined ? undefined : slugToUrl(params.locale, slug) ?? undefined;

  const title = stripTitleBrand(params.title);
  const ogImage = params.ogImage ?? `${BASE_URL}/images/og-image.png`;

  return {
    title,
    description: params.description,
    // Explizit leeren: Root-Layout darf keine DE-Keywords auf Intl vererben
    keywords: params.keywords?.length ? params.keywords : [],
    alternates: {
      canonical: canonical ?? undefined,
      ...buildHreflangAlternates(params.pageKey),
    },
    openGraph: {
      title,
      description: params.description,
      url: canonical ?? undefined,
      siteName: "Treatflow",
      type: "website",
      locale: ogLocaleTags[params.locale],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Treatflow",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: params.description,
      images: [ogImage],
    },
  };
}

export function getPagePath(market: Market, pageKey: SeoPageKey): string {
  const slug = seoPageSlugs[pageKey][market];
  if (slug === undefined || slug === null) return marketPathPrefix[market] || "/";
  const prefix = marketPathPrefix[market];
  if (!prefix) return slug ? `/${slug}` : "/";
  return slug ? `${prefix}/${slug}` : prefix;
}
