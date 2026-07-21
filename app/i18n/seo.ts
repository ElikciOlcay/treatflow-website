import type { Metadata } from "next";
import {
  BASE_URL,
  type Locale,
  hreflangTags,
  localePathPrefix,
} from "./config";

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
  | "beauty-salon-software"
  | "aesthetic-clinic-software"
  | "laser-hair-removal-software"
  | "about"
  | "privacy"
  | "terms"
  | "forms";

type PageSlugMap = Partial<Record<Locale, string>>;

/**
 * Slug je Locale fuer eine logische Seite.
 * Pfade ohne fuehrenden Slash, leerer String = Homepage.
 */
export const seoPageSlugs: Record<SeoPageKey, PageSlugMap> = {
  home: { de: "", en: "", es: "", it: "", fr: "" },
  pricing: {
    de: "preise",
    en: "pricing",
    es: "precios",
    it: "prezzi",
    fr: "tarifs",
  },
  contact: {
    de: "kontakt",
    en: "contact",
    es: "contacto",
    it: "contatto",
    fr: "contact",
  },
  "early-access": {
    en: "early-access",
    es: "acceso-anticipado",
    it: "accesso-anticipato",
    fr: "acces-anticipe",
  },
  about: {
    de: "ueber-uns",
    en: "about",
    es: "sobre-nosotros",
    it: "chi-siamo",
    fr: "a-propos",
  },
  privacy: {
    en: "privacy",
    es: "privacidad",
    it: "privacy",
    fr: "confidentialite",
  },
  terms: {
    en: "terms",
    es: "terminos",
    it: "termini",
    fr: "conditions",
  },
  "appointment-calendar": {
    de: "terminkalender",
    en: "appointment-calendar",
    es: "calendario-citas",
    it: "calendario-appuntamenti",
    fr: "calendrier-rendez-vous",
  },
  "online-booking": {
    de: "online-buchungen",
    en: "online-booking",
    es: "reservas-online",
    it: "prenotazioni-online",
    fr: "reservation-en-ligne",
  },
  "client-records": {
    de: "kundenverwaltung",
    en: "client-records",
    es: "fichas-clientes",
    it: "schede-clienti",
    fr: "fiches-clients",
  },
  forms: {
    de: "formulare",
    en: "forms",
    es: "formularios",
    it: "moduli",
    fr: "formulaires",
  },
  "consent-forms": {
    de: "formulare",
    en: "forms",
    es: "formularios-consentimiento",
    it: "moduli-consenso",
    fr: "formulaires-consentement",
  },
  "treatment-documentation": {
    de: "behandlungsdokumentation",
    en: "treatment-documentation",
    es: "documentacion-tratamientos",
    it: "documentazione-trattamenti",
    fr: "documentation-soins",
  },
  "beauty-salon-software": {
    de: "kosmetikstudio-software",
    en: "beauty-salon-software",
    es: "software-salon-belleza",
    it: "software-centro-estetico",
    fr: "logiciel-institut-beaute",
  },
  "aesthetic-clinic-software": {
    de: "aesthetische-medizin-software",
    en: "aesthetic-clinic-software",
    es: "software-clinica-estetica",
    it: "software-clinica-estetica",
    fr: "logiciel-clinique-esthetique",
  },
  "laser-hair-removal-software": {
    de: "laser-haarentfernung-software",
    en: "laser-hair-removal-software",
    es: "software-depilacion-laser",
    it: "software-epilazione-laser",
    fr: "logiciel-epilation-laser",
  },
};

function slugToUrl(locale: Locale, slug: string | undefined | null): string | null {
  if (slug === undefined || slug === null) return null;
  const prefix = localePathPrefix[locale];
  if (!prefix && slug === "") return BASE_URL;
  if (!prefix) return `${BASE_URL}/${slug}`;
  if (slug === "") return `${BASE_URL}${prefix}`;
  return `${BASE_URL}${prefix}/${slug}`;
}

/** Baut hreflang-Alternates fuer eine logische Seite (nur live Locales). */
export function buildHreflangAlternates(
  pageKey: SeoPageKey,
  options?: { xDefault?: "en" | "de" }
): Metadata["alternates"] {
  const slugs = seoPageSlugs[pageKey];
  const languages: Record<string, string> = {};

  (Object.keys(hreflangTags) as Locale[]).forEach((locale) => {
    const slug = slugs[locale];
    if (slug === undefined) return;
    const url = slugToUrl(locale, slug);
    if (url) languages[hreflangTags[locale]] = url;
  });

  const xDefaultLocale = options?.xDefault ?? "en";
  const xDefaultSlug = slugs[xDefaultLocale];
  if (xDefaultSlug !== undefined) {
    const xUrl = slugToUrl(xDefaultLocale, xDefaultSlug);
    if (xUrl) languages["x-default"] = xUrl;
  }

  return { languages };
}

export function buildPageMetadata(params: {
  pageKey: SeoPageKey;
  locale: Locale;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const slugs = seoPageSlugs[params.pageKey];
  const slug = slugs[params.locale];
  const canonical =
    slug === undefined ? undefined : slugToUrl(params.locale, slug) ?? undefined;

  const ogLocaleMap: Record<Locale, string> = {
    de: "de_DE",
    en: "en_US",
    es: "es_ES",
    it: "it_IT",
    fr: "fr_FR",
  };

  const ogImage = params.ogImage ?? `${BASE_URL}/images/og-image.jpg`;

  return {
    title: params.title,
    description: params.description,
    ...(params.keywords?.length ? { keywords: params.keywords } : {}),
    alternates: {
      canonical: canonical ?? undefined,
      ...buildHreflangAlternates(params.pageKey),
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url: canonical ?? undefined,
      siteName: "Treatflow",
      type: "website",
      locale: ogLocaleMap[params.locale],
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
      title: params.title,
      description: params.description,
      images: [ogImage],
    },
  };
}

export function getPagePath(locale: Locale, pageKey: SeoPageKey): string {
  const slug = seoPageSlugs[pageKey][locale];
  if (slug === undefined || slug === null) return localePathPrefix[locale] || "/";
  const prefix = localePathPrefix[locale];
  if (!prefix) return slug ? `/${slug}` : "/";
  return slug ? `${prefix}/${slug}` : prefix;
}
