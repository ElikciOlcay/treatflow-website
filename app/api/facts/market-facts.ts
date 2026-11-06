import { BASE_URL, prefixedMarkets, siteLanguages, type PrefixedMarket } from "@/app/i18n/config";
import { featureAvailable, gatedFeatures, filterByFeature, type Feature } from "@/app/i18n/feature-availability";
import { APP_BASE_URL, APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { resolveHref, sitePagePath, type SitePageKey } from "@/app/i18n/site-pages";
import { getAppointmentCalendarContent } from "@/app/site/content/appointment-calendar";
import { getClientRecordsContent } from "@/app/site/content/client-records";
import { getClientWorkflowsContent } from "@/app/site/content/client-workflows";
import { getFormsContent } from "@/app/site/content/forms";
import { getHomeContent } from "@/app/site/content/home";
import { getIntegrationsContent } from "@/app/site/content/integrations";
import { getMessagingContent } from "@/app/site/content/messaging";
import { getNavigationContent } from "@/app/site/content/navigation";
import { getOnlineBookingContent } from "@/app/site/content/online-booking";
import { getShopContent } from "@/app/site/content/shop";
import { gatedTexts, richTextToPlain, type SiteMarket } from "@/app/site/content/shared";
import { getStudioWebsiteContent } from "@/app/site/content/studio-website";
import { getTreatflowPayContent } from "@/app/site/content/treatflow-pay";
import { getTreatmentDocumentationContent } from "@/app/site/content/treatment-documentation";
import { getTryFeaturesContent } from "@/app/site/content/try-features";
import { siteSchema } from "@/app/components/SiteSchema";

/**
 * Fakten je Website-Sprache für /api/facts?lang=xx (en, tr, nl, it, pl, es, fr).
 * Alles aus den Website-Inhalten (app/site/content/**) und den Verfügbarkeitsregeln
 * (feature-availability.ts) abgeleitet, damit Seiten und Fakten nicht auseinanderlaufen:
 * nur Funktionen, die es im Markt gibt, Preise in der Währung des Markts, lokalisierte URLs.
 */

export const FACTS_UPDATED_AT = "2026-11-05";

const abs = (path: string | null) => (path === null ? null : `${BASE_URL}${path === "/" ? "" : path}`);

/** Meta-Beschreibung der Funktionsseite (Kurzbeschreibung für KI-Antworten). */
const PAGE_SUMMARY: Partial<Record<SitePageKey, (m: SiteMarket) => string | undefined>> = {
  "appointment-calendar": (m) => getAppointmentCalendarContent(m).meta.description,
  "online-booking": (m) => getOnlineBookingContent(m).meta.description,
  "client-records": (m) => getClientRecordsContent(m).meta.description,
  forms: (m) => getFormsContent(m).meta.description,
  "treatment-documentation": (m) => getTreatmentDocumentationContent(m).meta.description,
  messaging: (m) => getMessagingContent(m).meta.description,
  "customer-workflows": (m) => getClientWorkflowsContent(m).meta.description,
  integrations: (m) => getIntegrationsContent(m).meta.description,
  shop: (m) => getShopContent(m).meta.description,
  "treatflow-pay": (m) => getTreatflowPayContent(m)?.meta.description,
  "studio-website": (m) => getStudioWebsiteContent(m).meta.description,
  "try-features": (m) => getTryFeaturesContent(m).meta.description,
};

/** Funktionen, die es nicht überall gibt (Englisch, damit Assistenten sie eindeutig zuordnen). */
const GATED_FEATURE_NOTES: Record<Feature, string> = {
  pos: "Point of sale / fiscal cash register (TSE, RKSV) – Germany, Austria and Switzerland only",
  sumup: "SumUp card terminal – Germany, Austria and Switzerland only",
  whatsapp: "WhatsApp messages and reminders – Germany, Austria and Switzerland only (other markets: email)",
  accounting: "Accounting integrations (Lexware, AbaNinja) – Germany, Austria and Switzerland only",
  vouchers: "Gift vouchers – Germany, Austria and Switzerland only",
  nisv: "NiSV documentation (German laser/IPL regulation) – Germany, Austria and Switzerland only",
  pay: "Treatflow Pay (online deposits/payments via Stripe) – not available in Turkey",
};

/** Zusätze aus den bisherigen EN/TR-Fakten, die (noch) nur dort übersetzt vorliegen. */
const COMPARED_ALTERNATIVES: Partial<Record<PrefixedMarket, { competitor: string; competitorType: string; keyDifference: string; page: SitePageKey }[]>> = {
  en: [
    {
      competitor: "Treatwell",
      competitorType: "Booking marketplace",
      keyDifference:
        "Treatwell takes a commission per booking. Treatflow is independent software with a fixed monthly fee. Studios keep their clients.",
      page: "treatflow-vs-treatwell",
    },
    {
      competitor: "Fresha",
      competitorType: "Free booking tool funded by payments",
      keyDifference:
        "Fresha is free at the base layer and monetises payments. Treatflow has transparent SaaS pricing, consent forms and treatment documentation.",
      page: "treatflow-vs-fresha",
    },
  ],
  tr: [
    {
      competitor: "Treatwell",
      competitorType: "Randevu pazaryeri",
      keyDifference:
        "Treatwell pazaryeri modelinde çalışır. Treatflow bağımsız salon yazılımıdır; sabit aylık ücret ödersiniz ve müşteri verileriniz sizin kontrolünüzde kalır.",
      page: "treatflow-vs-treatwell",
    },
    {
      competitor: "Fresha",
      competitorType: "Ücretsiz randevu aracı",
      keyDifference:
        "Fresha tabanda ücretsizdir ve ödemelerden gelir elde eder. Treatflow şeffaf abonelik, dijital onam ve işlem kaydı sunar; randevu komisyonu yoktur.",
      page: "treatflow-vs-fresha",
    },
  ],
};

function priceNumber(value: unknown): number | null {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export function buildMarketFacts(market: PrefixedMarket) {
  const home = getHomeContent(market);
  const nav = getNavigationContent(market);
  const software = home.schema.software as { description?: string; offers?: { name: string; price: string; priceCurrency: string }[] };
  const offers = software.offers ?? [];
  const currency = offers[0]?.priceCurrency ?? "EUR";
  const pricing = home.pricing;
  const org = siteSchema(market)["@graph"][0] as { description: string };
  const homeUrl = abs(sitePagePath(market, "home"));
  const signupUrl = APP_REGISTER_BY_MARKET[market];

  const plan = (p: typeof pricing.booking | typeof pricing.basic, key: "Basic" | "Booking") => ({
    name: p.name,
    monthlyPrice: priceNumber(offers.find((o) => o.name === key)?.price),
    monthlyPriceLabel: p.monthlyPrice,
    yearlyPriceLabel: p.yearlyPrice,
    yearlyHint: p.yearlyHint,
    description: p.description,
    features: gatedTexts(p.included, market),
  });

  const features = nav.featureGroups.flatMap((group) =>
    filterByFeature(group.items, market).flatMap((item) => {
      const path = resolveHref(market, item.href);
      if (!path) return [];
      const key = typeof item.href === "string" ? undefined : item.href.page;
      const summary = key ? PAGE_SUMMARY[key]?.(market) : undefined;
      return [{ group: group.title, name: item.label, shortDescription: item.desc, ...(summary ? { summary } : {}), url: abs(path) }];
    })
  );
  const extraPages: SitePageKey[] = ["studio-website", "try-features"];
  const extras = extraPages.flatMap((key) => {
    const path = sitePagePath(market, key);
    const summary = PAGE_SUMMARY[key]?.(market);
    return path && summary ? [{ page: key, summary, url: abs(path) }] : [];
  });

  const industries = filterByFeature(nav.industries, market).flatMap((item) => {
    const path = resolveHref(market, item.href);
    return path ? [{ name: item.label, url: abs(path) }] : [];
  });

  const topQuestions = filterByFeature(home.faq.items, market).map((item) => ({
    question: item.question,
    answer: richTextToPlain(item.answer),
  }));

  const notAvailable = gatedFeatures.filter((f) => !featureAvailable(f, market)).map((f) => GATED_FEATURE_NOTES[f]);

  const compared = (COMPARED_ALTERNATIVES[market] ?? []).flatMap(({ page, ...rest }) => {
    const path = sitePagePath(market, page);
    return path ? [{ ...rest, comparisonUrl: abs(path) }] : [];
  });

  return {
    $schema: "https://www.treatflow.io/schemas/facts-v1.json",
    version: "2.0",
    language: market,
    updatedAt: FACTS_UPDATED_AT,
    product: {
      name: "Treatflow",
      category: "BusinessApplication (SaaS, web app)",
      summary: software.description ?? org.description,
      tagline: org.description,
      website: homeUrl,
      appUrl: APP_BASE_URL,
      platforms: ["Web (browser)"],
    },
    company: {
      name: "Treatflow",
      legalName: "Treatflow GmbH",
      founders: ["Olcay Elikci", "Gökce Elikci"],
      foundedYear: 2023,
      headquarters: { city: "Bischofshofen", country: "Austria", countryCode: "AT" },
      socialProfiles: { instagram: "https://www.instagram.com/treatflow.io/" },
    },
    availability: {
      selfServeRegistrationCountries: "all",
      signupUrl,
      freeTrial: { days: 14, creditCardRequired: false, cancelableAnytime: true, note: pricing.trial.text },
      registerUrls: Object.fromEntries(siteLanguages.map((lang) => [lang, APP_REGISTER_BY_MARKET[lang]])),
      locales: Object.fromEntries(siteLanguages.map((lang) => [lang, abs(sitePagePath(lang, "home"))])),
    },
    pricing: {
      currency,
      vatNote: pricing.vatNote,
      url: abs(sitePagePath(market, "pricing")),
      freeTrialDays: 14,
      plans: [plan(pricing.basic, "Basic"), plan(pricing.booking, "Booking")],
      commissionPerBooking: false,
    },
    features,
    otherPages: extras,
    notAvailableInThisMarket: notAvailable,
    industries,
    languages: {
      website: [...siteLanguages],
      // App-Oberfläche (Dashboard, Registrierung, Mails) in allen Website-Sprachen; Buchungsseite zusätzlich ru.
      app: ["de", "en", "nl", "it", "pl", "tr", "es", "fr"],
      bookingPage: ["de", "en", "nl", "it", "pl", "tr", "es", "fr", "ru"],
      signupHandoff: ["de", "en", "tr", "nl", "it", "pl", "es", "fr"],
    },
    dataProtection: {
      gdpr: true,
      hosting: "EU servers (Frankfurt, Germany)",
      sslEncrypted: true,
      dailyBackups: true,
      dataOwnership: "The studio owns its client data.",
      privacyPolicy: abs(sitePagePath(market, "privacy")),
    },
    contact: {
      email: "hello@treatflow.io",
      contactPage: abs(sitePagePath(market, "contact")),
    },
    metrics: {
      customers: "500+",
      customersDescription: "Studios, primarily in German-speaking Europe",
      ratingValue: 4.6,
      ratingMax: 5,
      ratingCount: 19,
      ratingPlatform: "Google",
    },
    ...(compared.length ? { comparedAlternatives: compared } : {}),
    topQuestions,
    keyResources: {
      home: homeUrl,
      features: abs(sitePagePath(market, "features")),
      pricing: abs(sitePagePath(market, "pricing")),
      llmsTxt: `${BASE_URL}/llms-${market}.txt`,
      sitemap: `${BASE_URL}/sitemap.xml`,
      factsByLanguage: factsUrls(),
    },
  };
}

export function factsUrls(): Record<string, string> {
  return {
    de: `${BASE_URL}/api/facts`,
    ...Object.fromEntries(prefixedMarkets.map((lang) => [lang, `${BASE_URL}/api/facts?lang=${lang}`])),
  };
}
