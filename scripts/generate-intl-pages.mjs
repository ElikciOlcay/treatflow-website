#!/usr/bin/env node
/**
 * Generates missing international industry + extra feature page.tsx files.
 * Run: node scripts/generate-intl-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const industrySlugs = {
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

const extraFeatureSlugs = {
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

const locales = ["en", "es", "it", "fr"];

function industryPage(locale, key) {
  return `import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getIndustryPage } from "@/app/i18n/markets/industry-pages-intl";

const content = getIndustryPage("${locale}", "${key}");

export const metadata = buildPageMetadata({
  pageKey: content.pageKey,
  locale: "${locale}",
  title: content.serviceName,
  description: content.serviceDescription,
});

export default function Page() {
  return <InternationalSeoPage content={content} />;
}
`;
}

function featurePage(locale, key) {
  return `import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getExtraFeaturePage } from "@/app/i18n/markets/extra-feature-pages-intl";

const content = getExtraFeaturePage("${locale}", "${key}");

export const metadata = buildPageMetadata({
  pageKey: "${key}",
  locale: "${locale}",
  title: content.title,
  description: content.subtitle,
});

export default function Page() {
  return <FeaturePageEn {...content} />;
}
`;
}

let created = 0;
let updated = 0;

for (const locale of locales) {
  for (const [key, slugs] of Object.entries(industrySlugs)) {
    const slug = slugs[locale];
    const dir = path.join(root, "app", locale, slug);
    const file = path.join(dir, "page.tsx");
    fs.mkdirSync(dir, { recursive: true });
    const next = industryPage(locale, key);
    const exists = fs.existsSync(file);
    fs.writeFileSync(file, next);
    if (exists) updated++;
    else created++;
  }

  for (const [key, slugs] of Object.entries(extraFeatureSlugs)) {
    const slug = slugs[locale];
    const dir = path.join(root, "app", locale, slug);
    const file = path.join(dir, "page.tsx");
    fs.mkdirSync(dir, { recursive: true });
    const next = featurePage(locale, key);
    const exists = fs.existsSync(file);
    fs.writeFileSync(file, next);
    if (exists) updated++;
    else created++;
  }
}

console.log(`Intl pages written. created=${created} overwritten=${updated}`);
