export type ExtraFeatureKey =
  | "point-of-sale"
  | "vouchers"
  | "messaging"
  | "integrations"
  | "features"
  | "shop"
  | "studio-website";

export type FeatureLocale = "en" | "es" | "it" | "fr";

export const extraFeatureSlugs: Record<
  ExtraFeatureKey,
  Record<FeatureLocale, string>
> = {
  "point-of-sale": {
    en: "point-of-sale",
    es: "caja-registradora",
    it: "cassa",
    fr: "caisse",
  },
  vouchers: {
    en: "vouchers",
    es: "vales",
    it: "buoni-regalo",
    fr: "bons-cadeaux",
  },
  messaging: {
    en: "messaging",
    es: "mensajeria",
    it: "messaggistica",
    fr: "messagerie",
  },
  integrations: {
    en: "integrations",
    es: "integraciones",
    it: "integrazioni",
    fr: "integrations",
  },
  features: {
    en: "features",
    es: "funciones",
    it: "funzioni",
    fr: "fonctionnalites",
  },
  shop: {
    en: "shop",
    es: "tienda",
    it: "negozio",
    fr: "boutique",
  },
  "studio-website": {
    en: "studio-website",
    es: "web-para-salones",
    it: "sito-web-centro",
    fr: "site-web-institut",
  },
};

export function listExtraFeatureKeys(): ExtraFeatureKey[] {
  return Object.keys(extraFeatureSlugs) as ExtraFeatureKey[];
}
