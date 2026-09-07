export type ChromeLang = "en" | "nl" | "fi" | "tr";

export type UiChrome = {
  relatedTitle: string;
  learnMore: string;
  stepLabel: (n: number) => string;
  cookieSettings: string;
  trySampleForms: string;
  softwareComparison: string;
  vsFresha: string;
  vsTreatwell: string;
  faqTitle: string;
  faqBadge: string;
  menuAria: string;
  homeSrOnly: string;
  comparisonEyebrow: string;
  comparisonFeature: string;
  startTrial: string;
  seePricing: string;
  stickyCta: string;
  stickyNote: string;
  comparisonCtaNote: string;
  problemTitle: string;
  trustItems: [string, string, string];
  trustBadges: [string, string, string, string];
};

const en: UiChrome = {
  relatedTitle: "Related pages",
  learnMore: "Learn more",
  stepLabel: (n) => `Step ${n}`,
  cookieSettings: "Cookie settings",
  trySampleForms: "Try sample forms",
  softwareComparison: "Software comparison",
  vsFresha: "Treatflow vs Fresha",
  vsTreatwell: "Treatflow vs Treatwell",
  faqTitle: "Common questions",
  faqBadge: "FAQ",
  menuAria: "Menu",
  homeSrOnly: "Home",
  comparisonEyebrow: "Comparison",
  comparisonFeature: "Feature",
  startTrial: "Start 14-day free trial",
  seePricing: "See pricing",
  stickyCta: "Start free trial",
  stickyNote: "14-day free trial · No credit card",
  comparisonCtaNote: "14-day free trial. No credit card. No booking commission.",
  problemTitle: "The problem Treatflow solves",
  trustItems: ["EU hosting", "14-day free trial", "No commission on bookings"],
  trustBadges: ["Designed for GDPR", "EU-hosted servers", "SSL-encrypted", "14-day free trial"],
};

const tr: UiChrome = {
  relatedTitle: "İlgili sayfalar",
  learnMore: "Daha fazla bilgi",
  stepLabel: (n) => `Adım ${n}`,
  cookieSettings: "Çerez ayarları",
  trySampleForms: "Örnek formları deneyin",
  softwareComparison: "Yazılım karşılaştırması",
  vsFresha: "Treatflow vs Fresha",
  vsTreatwell: "Treatflow vs Treatwell",
  faqTitle: "Sıkça sorulan sorular",
  faqBadge: "SSS",
  menuAria: "Menü",
  homeSrOnly: "Ana sayfa",
  comparisonEyebrow: "Karşılaştırma",
  comparisonFeature: "Özellik",
  startTrial: "30 gün ücretsiz deneyin",
  seePricing: "Fiyatları gör",
  stickyCta: "Ücretsiz deneyin",
  stickyNote: "30 gün ücretsiz · Kredi kartı gerekmez",
  comparisonCtaNote: "30 gün ücretsiz deneme. Kredi kartı gerekmez. Randevu komisyonu yok.",
  problemTitle: "Treatflow hangi sorunu çözer?",
  trustItems: ["AB sunucuları", "30 gün ücretsiz deneme", "Randevu komisyonu yok"],
  trustBadges: [
    "KVKK kapsamında",
    "AB sunucuları",
    "SSL şifreleme",
    "30 gün ücretsiz deneme",
  ],
};

export function chromeLangFromMarket(market: string | undefined | null): ChromeLang {
  if (market === "tr" || market === "nl" || market === "fi") return market;
  return "en";
}

export function getUiChrome(market: string | undefined | null): UiChrome {
  return chromeLangFromMarket(market) === "tr" ? tr : en;
}
