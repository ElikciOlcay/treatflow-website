import { notFound } from "next/navigation";
import EarlyAccessPage from "@/app/components/EarlyAccessPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import {
  isPrefixedMarket,
  marketLabels,
  marketLanguage,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { getEarlyAccessCopy } from "@/app/i18n/markets/static-pages-nl-fi";

const enCopy = {
  metaTitle: "Request early access",
  metaDescription:
    "Treatflow self-serve signup is currently available in Germany, Austria and Switzerland. Request early access for your country.",
  title: "Request early access to Treatflow",
  note: "Self-serve registration is currently open for Germany, Austria and Switzerland only.",
  copy: {
    nameLabel: "Your name",
    studioLabel: "Studio / clinic name",
    cityLabel: "City",
    countryLabel: "Country",
    emailLabel: "Email",
    phoneLabel: "Phone (optional)",
    messageLabel: "How can we help? (optional)",
    submitLabel: "Request early access",
    successTitle: "Request received",
    successText: "Thanks! We will review your request and get back to you shortly.",
    errorText: "Something went wrong. Please try again or email hello@treatflow.io.",
    requiredHint: "Fields marked with * are required",
  },
};

function resolveEarlyAccess(market: PrefixedMarket) {
  const lang = marketLanguage[market];
  if (lang === "nl" || lang === "fi") {
    return getEarlyAccessCopy(lang, marketLabels[market]);
  }
  return {
    ...enCopy,
    metaDescription: `Treatflow early access for ${marketLabels[market]}. Self-serve signup is currently available in Germany, Austria and Switzerland.`,
    subtitle: `We are expanding into ${marketLabels[market]}. Tell us about your studio and we will follow up personally.`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = resolveEarlyAccess(market);
  return buildPageMetadata({
    pageKey: "early-access",
    locale: market,
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function MarketEarlyAccess({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const content = resolveEarlyAccess(market);
  return (
    <EarlyAccessPage
      locale={market}
      leadSource={`Early Access ${market.toUpperCase()}`}
      title={content.title}
      subtitle={content.subtitle}
      note={content.note}
      copy={content.copy}
    />
  );
}
