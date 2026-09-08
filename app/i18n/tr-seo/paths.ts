/**
 * TR SEO: eine kanonische URL je Fokus-Keyword.
 * Prioritaetsklassen statt erfundener Suchvolumen.
 */
export type TrKeywordPriority = "HIGH_COMMERCIAL" | "MEDIUM_COMMERCIAL" | "TEST";

export const TR_PATHS = {
  home: "/tr",
  pricing: "/tr/fiyatlar",
  features: "/tr/features",
  forms: "/tr/forms",
  tryForms: "/tr/try-forms",
  docs: "/tr/treatment-documentation",
  calendar: "/tr/appointment-calendar",
  messaging: "/tr/messaging",
  integrations: "/tr/integrations",
  shop: "/tr/shop",
  website: "/tr/studio-website",
  aesthetic: "/tr/aesthetic-clinic-software",
  pmu: "/tr/permanent-makeup-software",
  tattoo: "/tr/tattoo-studio-software",
  nail: "/tr/nail-salon-software",
  lash: "/tr/lash-studio-software",
  spa: "/tr/spa-wellness-software",
  massage: "/tr/massage-software",
  about: "/tr/about",
  contact: "/tr/contact",
  privacy: "/tr/privacy",
  terms: "/tr/terms",
  vsFresha: "/tr/treatflow-vs-fresha",
  vsTreatwell: "/tr/treatflow-vs-treatwell",
  comparison: "/tr/software-comparison",
  beautyCenter: "/tr/guzellik-merkezi-programi",
  beautySalon: "/tr/guzellik-salonu-programi",
  laser: "/tr/lazer-epilasyon-programi",
  crm: "/tr/musteri-takip-programi",
  booking: "/tr/online-randevu-sistemi",
  guidesHub: "/tr/rehber",
  guideComparison2026:
    "/tr/rehber/turkiyedeki-en-iyi-guzellik-merkezi-programlari-2026",
  guideHowToChoose: "/tr/rehber/guzellik-merkezi-programi-secerken-nelere-dikkat-edilmeli",
  guideLaserChoose: "/tr/rehber/lazer-epilasyon-merkezi-icin-program-nasil-secilir",
  guideCrmHow: "/tr/rehber/guzellik-merkezi-musteri-takibi-nasil-yapilir",
  guideFormsOnam: "/tr/rehber/guzellik-merkezlerinde-dijital-form-ve-onam-sureci",
  guideMustHaveFeatures: "/tr/rehber/guzellik-merkezi-yaziliminda-hangi-ozellikler-olmali",
} as const;

export type TrPathKey = keyof typeof TR_PATHS;

/** Alte EN-Slugs unter /tr → neue TR-Money-Pages (301). */
export const TR_LEGACY_REDIRECTS: { from: string; to: string }[] = [
  { from: "/tr/pricing", to: TR_PATHS.pricing },
  { from: "/tr/beauty-salon-software", to: TR_PATHS.beautySalon },
  { from: "/tr/laser-hair-removal-software", to: TR_PATHS.laser },
  { from: "/tr/client-records", to: TR_PATHS.crm },
  { from: "/tr/online-booking", to: TR_PATHS.booking },
];

export type TrKeywordRow = {
  keyword: string;
  url: string;
  role: "primary" | "secondary";
  priority: TrKeywordPriority;
};

/**
 * Keyword-to-URL-Matrix. Jedes Fokus-Keyword hat genau eine Haupt-URL.
 * "güzellik merkezi müşteri takip programı" sitzt auf der CRM-Seite (spezifischere Intention).
 */
export const TR_KEYWORD_MATRIX: TrKeywordRow[] = [
  {
    keyword: "güzellik merkezi programı",
    url: TR_PATHS.beautyCenter,
    role: "primary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "güzellik merkezi yazılımı",
    url: TR_PATHS.beautyCenter,
    role: "secondary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "güzellik merkezi randevu programı",
    url: TR_PATHS.beautyCenter,
    role: "secondary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "güzellik salonu programı",
    url: TR_PATHS.beautySalon,
    role: "primary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "güzellik salonu yazılımı",
    url: TR_PATHS.beautySalon,
    role: "secondary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "güzellik salonu randevu programı",
    url: TR_PATHS.beautySalon,
    role: "secondary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "lazer epilasyon programı",
    url: TR_PATHS.laser,
    role: "primary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "lazer epilasyon müşteri takip programı",
    url: TR_PATHS.laser,
    role: "secondary",
    priority: "MEDIUM_COMMERCIAL",
  },
  {
    keyword: "seans takibi",
    url: TR_PATHS.laser,
    role: "secondary",
    priority: "MEDIUM_COMMERCIAL",
  },
  {
    keyword: "müşteri takip programı",
    url: TR_PATHS.crm,
    role: "primary",
    priority: "HIGH_COMMERCIAL",
  },
  {
    keyword: "güzellik merkezi müşteri takip programı",
    url: TR_PATHS.crm,
    role: "secondary",
    priority: "MEDIUM_COMMERCIAL",
  },
  {
    keyword: "online randevu sistemi",
    url: TR_PATHS.booking,
    role: "primary",
    priority: "HIGH_COMMERCIAL",
  },
];

export const TR_ADS_NEGATIVE_KEYWORDS = [
  "ücretsiz randevu",
  "hastane randevu",
  "MHRS",
  "doktor randevu",
  "randevu al",
  "güzellik merkezi yakınında",
] as const;

export function assertUniquePrimaryKeywords(rows: TrKeywordRow[] = TR_KEYWORD_MATRIX): void {
  const seen = new Map<string, string>();
  for (const row of rows) {
    const key = row.keyword.trim().toLocaleLowerCase("tr-TR");
    const existing = seen.get(key);
    if (existing && existing !== row.url) {
      throw new Error(`Keyword cannibalization: "${row.keyword}" → ${existing} and ${row.url}`);
    }
    seen.set(key, row.url);
  }
}

assertUniquePrimaryKeywords();
