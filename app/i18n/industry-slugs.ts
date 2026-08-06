export type IndustryPageKey =
  | "beauty-salon-software"
  | "aesthetic-clinic-software"
  | "laser-hair-removal-software"
  | "permanent-makeup-software"
  | "tattoo-studio-software"
  | "nail-salon-software"
  | "lash-studio-software"
  | "spa-wellness-software"
  | "massage-software";

export type IndustryLocale = "en" | "es" | "it" | "fr";

export const industrySlugs: Record<
  IndustryPageKey,
  Record<IndustryLocale, string>
> = {
  "beauty-salon-software": {
    en: "beauty-salon-software",
    es: "software-salon-belleza",
    it: "software-centro-estetico",
    fr: "logiciel-institut-beaute",
  },
  "aesthetic-clinic-software": {
    en: "aesthetic-clinic-software",
    es: "software-clinica-estetica",
    it: "software-clinica-estetica",
    fr: "logiciel-clinique-esthetique",
  },
  "laser-hair-removal-software": {
    en: "laser-hair-removal-software",
    es: "software-depilacion-laser",
    it: "software-epilazione-laser",
    fr: "logiciel-epilation-laser",
  },
  "permanent-makeup-software": {
    en: "permanent-makeup-software",
    es: "software-maquillaje-permanente",
    it: "software-trucco-permanente",
    fr: "logiciel-maquillage-permanent",
  },
  "tattoo-studio-software": {
    en: "tattoo-studio-software",
    es: "software-estudio-tatuajes",
    it: "software-studio-tatuaggi",
    fr: "logiciel-salon-tatouage",
  },
  "nail-salon-software": {
    en: "nail-salon-software",
    es: "software-salon-unas",
    it: "software-centro-unghie",
    fr: "logiciel-salon-ongles",
  },
  "lash-studio-software": {
    en: "lash-studio-software",
    es: "software-extension-pestanas",
    it: "software-extension-ciglia",
    fr: "logiciel-extension-cils",
  },
  "spa-wellness-software": {
    en: "spa-wellness-software",
    es: "software-spa-wellness",
    it: "software-spa-wellness",
    fr: "logiciel-spa-wellness",
  },
  "massage-software": {
    en: "massage-software",
    es: "software-masajes",
    it: "software-massaggi",
    fr: "logiciel-massage",
  },
};

export function listIndustryKeys(): IndustryPageKey[] {
  return Object.keys(industrySlugs) as IndustryPageKey[];
}
