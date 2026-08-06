import type { Locale } from "./config";
import { localePathPrefix } from "./config";
import {
  industrySlugs,
  type IndustryLocale,
  type IndustryPageKey,
} from "./industry-slugs";
import {
  extraFeatureSlugs,
  type ExtraFeatureKey,
} from "./feature-slugs";

export type IntlLocale = Extract<Locale, "en" | "es" | "it" | "fr">;

export { extraFeatureSlugs, industrySlugs };
export type { ExtraFeatureKey, IndustryPageKey };

/** Core feature slugs already live in most locales */
export const coreFeatureSlugs = {
  "appointment-calendar": {
    en: "appointment-calendar",
    es: "calendario-citas",
    it: "calendario-appuntamenti",
    fr: "calendrier-rendez-vous",
  },
  "online-booking": {
    en: "online-booking",
    es: "reservas-online",
    it: "prenotazioni-online",
    fr: "reservation-en-ligne",
  },
  "client-records": {
    en: "client-records",
    es: "fichas-clientes",
    it: "schede-clienti",
    fr: "fiches-clients",
  },
  forms: {
    en: "forms",
    es: "formularios",
    it: "moduli",
    fr: "formulaires",
  },
  "treatment-documentation": {
    en: "treatment-documentation",
    es: "documentacion-tratamientos",
    it: "documentazione-trattamenti",
    fr: "documentation-soins",
  },
} as const;

export type CoreFeatureKey = keyof typeof coreFeatureSlugs;
export type FeatureNavKey = CoreFeatureKey | ExtraFeatureKey;

export const productSlugs = {
  pricing: { en: "pricing", es: "precios", it: "prezzi", fr: "tarifs" },
  contact: { en: "contact", es: "contacto", it: "contatto", fr: "contact" },
  about: {
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
  terms: { en: "terms", es: "terminos", it: "termini", fr: "conditions" },
  "early-access": {
    en: "early-access",
    es: "acceso-anticipado",
    it: "accesso-anticipato",
    fr: "acces-anticipe",
  },
} as const;

export function intlBase(locale: IntlLocale): string {
  return localePathPrefix[locale] || `/${locale}`;
}

export function intlPath(
  locale: IntlLocale,
  slug: string
): string {
  const base = intlBase(locale);
  if (!slug) return base;
  return `${base}/${slug}`;
}

export function industryPath(
  locale: IndustryLocale,
  key: IndustryPageKey
): string {
  return intlPath(locale, industrySlugs[key][locale]);
}

export function coreFeaturePath(
  locale: IntlLocale,
  key: CoreFeatureKey
): string {
  return intlPath(locale, coreFeatureSlugs[key][locale]);
}

export function extraFeaturePath(
  locale: IntlLocale,
  key: ExtraFeatureKey
): string {
  return intlPath(locale, extraFeatureSlugs[key][locale]);
}

export function productPath(
  locale: IntlLocale,
  key: keyof typeof productSlugs
): string {
  return intlPath(locale, productSlugs[key][locale]);
}
