/**
 * Gemeinsame UI-Texte (Chrome) fuer die internationalen Seiten unter /{lang}.
 * fi ist keine Live-Sprache mehr und faellt auf en zurueck.
 */
export type ChromeLang = "en" | "tr" | "nl" | "it" | "pl" | "es" | "fr";

export const chromeLangs: readonly ChromeLang[] = ["en", "tr", "nl", "it", "pl", "es", "fr"];

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
  /** Navigation/Footer: Blog-Link */
  blog: string;
  /** Aria-Label des Sprachumschalters */
  languageAria: string;
  /** Aria-Label fuer CTA-Sektionen */
  ctaSectionAria: string;
  /** Default-Abschluss-CTA auf Feature-/SEO-Seiten */
  bottomTitle: string;
  bottomText: string;
  /** JSON-LD: Name der Feature-Liste */
  featuresListName: string;
  /** JSON-LD: serviceType */
  serviceType: string;
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
  blog: "Blog",
  languageAria: "Language",
  ctaSectionAria: "Call to action",
  bottomTitle: "Ready to get started?",
  bottomText: "Start your free trial – no credit card required, cancel anytime.",
  featuresListName: "Treatflow features",
  serviceType: "Beauty and aesthetic studio management software",
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
  startTrial: "14 gün ücretsiz deneyin",
  seePricing: "Fiyatları gör",
  stickyCta: "Ücretsiz deneyin",
  stickyNote: "14 gün ücretsiz · Kredi kartı gerekmez",
  comparisonCtaNote: "14 gün ücretsiz deneme. Kredi kartı gerekmez. Randevu komisyonu yok.",
  problemTitle: "Treatflow hangi sorunu çözer?",
  trustItems: ["AB sunucuları", "14 gün ücretsiz deneme", "Randevu komisyonu yok"],
  trustBadges: [
    "KVKK kapsamında",
    "AB sunucuları",
    "SSL şifreleme",
    "14 gün ücretsiz deneme",
  ],
  blog: "Blog",
  languageAria: "Dil",
  ctaSectionAria: "Hemen başlayın",
  bottomTitle: "Başlamaya hazır mısınız?",
  bottomText: "Ücretsiz denemenizi başlatın – kredi kartı gerekmez, istediğiniz zaman iptal edin.",
  featuresListName: "Treatflow özellikleri",
  serviceType: "Güzellik salonu yönetim yazılımı",
};

const nl: UiChrome = {
  relatedTitle: "Gerelateerde pagina's",
  learnMore: "Meer informatie",
  stepLabel: (n) => `Stap ${n}`,
  cookieSettings: "Cookie-instellingen",
  trySampleForms: "Voorbeeldformulieren proberen",
  softwareComparison: "Salonsoftware vergelijken",
  vsFresha: "Treatflow vs Fresha",
  vsTreatwell: "Treatflow vs Treatwell",
  faqTitle: "Veelgestelde vragen",
  faqBadge: "FAQ",
  menuAria: "Menu",
  homeSrOnly: "Home",
  comparisonEyebrow: "Vergelijking",
  comparisonFeature: "Functie",
  startTrial: "Probeer 14 dagen gratis",
  seePricing: "Bekijk de prijzen",
  stickyCta: "Gratis proberen",
  stickyNote: "14 dagen gratis · Geen creditcard nodig",
  comparisonCtaNote: "14 dagen gratis proberen. Geen creditcard. Geen commissie op boekingen.",
  problemTitle: "Welk probleem lost Treatflow op?",
  trustItems: ["Hosting in de EU", "14 dagen gratis proberen", "Geen commissie op boekingen"],
  trustBadges: ["Ontworpen voor de AVG", "Servers in de EU", "SSL-versleuteld", "14 dagen gratis proberen"],
  blog: "Blog",
  languageAria: "Taal",
  ctaSectionAria: "Aan de slag",
  bottomTitle: "Klaar om te beginnen?",
  bottomText: "Start je gratis proefperiode – geen creditcard nodig, altijd opzegbaar.",
  featuresListName: "Functies van Treatflow",
  serviceType: "Software voor schoonheidssalons en esthetische klinieken",
};

const it: UiChrome = {
  relatedTitle: "Pagine correlate",
  learnMore: "Scopri di più",
  stepLabel: (n) => `Passo ${n}`,
  cookieSettings: "Impostazioni cookie",
  trySampleForms: "Prova i moduli di esempio",
  softwareComparison: "Confronto software",
  vsFresha: "Treatflow vs Fresha",
  vsTreatwell: "Treatflow vs Treatwell",
  faqTitle: "Domande frequenti",
  faqBadge: "FAQ",
  menuAria: "Menu",
  homeSrOnly: "Home",
  comparisonEyebrow: "Confronto",
  comparisonFeature: "Funzione",
  startTrial: "Prova gratis per 14 giorni",
  seePricing: "Vedi i prezzi",
  stickyCta: "Prova gratis",
  stickyNote: "14 giorni gratis · Nessuna carta di credito",
  comparisonCtaNote:
    "14 giorni di prova gratuita. Nessuna carta di credito. Nessuna commissione sulle prenotazioni.",
  problemTitle: "Il problema che Treatflow risolve",
  trustItems: ["Hosting nell'UE", "14 giorni di prova gratuita", "Nessuna commissione sulle prenotazioni"],
  trustBadges: ["Progettato per il GDPR", "Server nell'UE", "Crittografia SSL", "14 giorni di prova gratuita"],
  blog: "Blog",
  languageAria: "Lingua",
  ctaSectionAria: "Inizia ora",
  bottomTitle: "Pronta per iniziare?",
  bottomText: "Inizia la prova gratuita: nessuna carta di credito, disdici quando vuoi.",
  featuresListName: "Funzioni di Treatflow",
  serviceType: "Gestionale per centri estetici e cliniche di medicina estetica",
};

const pl: UiChrome = {
  relatedTitle: "Powiązane strony",
  learnMore: "Dowiedz się więcej",
  stepLabel: (n) => `Krok ${n}`,
  cookieSettings: "Ustawienia cookies",
  trySampleForms: "Wypróbuj przykładowe formularze",
  softwareComparison: "Porównanie programów",
  vsFresha: "Treatflow vs Fresha",
  vsTreatwell: "Treatflow vs Treatwell",
  faqTitle: "Najczęstsze pytania",
  faqBadge: "FAQ",
  menuAria: "Menu",
  homeSrOnly: "Strona główna",
  comparisonEyebrow: "Porównanie",
  comparisonFeature: "Funkcja",
  startTrial: "Wypróbuj za darmo przez 14 dni",
  seePricing: "Zobacz cennik",
  stickyCta: "Wypróbuj za darmo",
  stickyNote: "14 dni za darmo · Bez karty kredytowej",
  comparisonCtaNote: "14 dni za darmo. Bez karty kredytowej. Bez prowizji od rezerwacji.",
  problemTitle: "Jaki problem rozwiązuje Treatflow?",
  trustItems: ["Serwery w UE", "14 dni za darmo", "Bez prowizji od rezerwacji"],
  trustBadges: ["Zgodność z RODO", "Serwery w UE", "Szyfrowanie SSL", "14 dni za darmo"],
  blog: "Blog",
  languageAria: "Język",
  ctaSectionAria: "Zacznij teraz",
  bottomTitle: "Gotowe, żeby zacząć?",
  bottomText:
    "Rozpocznij darmowy okres próbny – bez karty kredytowej, z możliwością rezygnacji w każdej chwili.",
  featuresListName: "Funkcje Treatflow",
  serviceType: "Program do zarządzania salonem kosmetycznym i gabinetem medycyny estetycznej",
};

const es: UiChrome = {
  relatedTitle: "Páginas relacionadas",
  learnMore: "Más información",
  stepLabel: (n) => `Paso ${n}`,
  cookieSettings: "Configuración de cookies",
  trySampleForms: "Prueba formularios de ejemplo",
  softwareComparison: "Comparativa de software",
  vsFresha: "Treatflow vs Fresha",
  vsTreatwell: "Treatflow vs Treatwell",
  faqTitle: "Preguntas frecuentes",
  faqBadge: "FAQ",
  menuAria: "Menú",
  homeSrOnly: "Inicio",
  comparisonEyebrow: "Comparativa",
  comparisonFeature: "Función",
  startTrial: "Prueba gratis 14 días",
  seePricing: "Ver precios",
  stickyCta: "Prueba gratis",
  stickyNote: "14 días gratis · Sin tarjeta de crédito",
  comparisonCtaNote: "14 días de prueba gratuita. Sin tarjeta de crédito. Sin comisión por reserva.",
  problemTitle: "El problema que resuelve Treatflow",
  trustItems: ["Alojamiento en la UE", "14 días de prueba gratuita", "Sin comisión por reserva"],
  trustBadges: ["Diseñado para el RGPD", "Servidores en la UE", "Cifrado SSL", "14 días de prueba gratuita"],
  blog: "Blog",
  languageAria: "Idioma",
  ctaSectionAria: "Empieza ahora",
  bottomTitle: "¿Lista para empezar?",
  bottomText: "Empieza tu prueba gratuita: sin tarjeta de crédito, cancela cuando quieras.",
  featuresListName: "Funciones de Treatflow",
  serviceType: "Software de gestión para centros de estética y clínicas estéticas",
};

const fr: UiChrome = {
  relatedTitle: "Pages associées",
  learnMore: "En savoir plus",
  stepLabel: (n) => `Étape ${n}`,
  cookieSettings: "Paramètres des cookies",
  trySampleForms: "Essayer des formulaires d'exemple",
  softwareComparison: "Comparatif de logiciels",
  vsFresha: "Treatflow vs Fresha",
  vsTreatwell: "Treatflow vs Treatwell",
  faqTitle: "Questions fréquentes",
  faqBadge: "FAQ",
  menuAria: "Menu",
  homeSrOnly: "Accueil",
  comparisonEyebrow: "Comparatif",
  comparisonFeature: "Fonctionnalité",
  startTrial: "Essayer gratuitement 14 jours",
  seePricing: "Voir les tarifs",
  stickyCta: "Essai gratuit",
  stickyNote: "14 jours gratuits · Sans carte bancaire",
  comparisonCtaNote:
    "14 jours d'essai gratuit. Sans carte bancaire. Aucune commission sur les réservations.",
  problemTitle: "Le problème que Treatflow résout",
  trustItems: ["Hébergement dans l'UE", "14 jours d'essai gratuit", "Aucune commission sur les réservations"],
  trustBadges: ["Conçu pour le RGPD", "Serveurs dans l'UE", "Chiffrement SSL", "14 jours d'essai gratuit"],
  blog: "Blog",
  languageAria: "Langue",
  ctaSectionAria: "Passer à l'action",
  bottomTitle: "Prêt à vous lancer ?",
  bottomText: "Commencez votre essai gratuit : sans carte bancaire, résiliable à tout moment.",
  featuresListName: "Fonctionnalités de Treatflow",
  serviceType: "Logiciel de gestion pour instituts de beauté et cliniques esthétiques",
};

const chromes: Record<ChromeLang, UiChrome> = { en, tr, nl, it, pl, es, fr };

export function chromeLangFromMarket(market: string | undefined | null): ChromeLang {
  if (market && (chromeLangs as readonly string[]).includes(market)) {
    return market as ChromeLang;
  }
  return "en";
}

/** Sprache aus einem Pfad wie /nl/... ableiten (Fallback en). */
export function chromeLangFromPath(path: string | undefined | null): ChromeLang {
  const seg = path?.match(/^\/([a-z]{2})(?:\/|$)/)?.[1];
  return chromeLangFromMarket(seg);
}

export function getUiChrome(market: string | undefined | null): UiChrome {
  return chromes[chromeLangFromMarket(market)];
}

/** JSON-LD areaServed je Site-Sprache. */
const AREA_SERVED: Record<ChromeLang, string[]> = {
  en: ["EU"],
  tr: ["TR"],
  nl: ["NL", "BE"],
  it: ["IT"],
  pl: ["PL"],
  es: ["ES"],
  fr: ["FR", "BE", "LU"],
};

export function areaServedForMarket(market: string | undefined | null): string[] {
  return [...AREA_SERVED[chromeLangFromMarket(market)]];
}
