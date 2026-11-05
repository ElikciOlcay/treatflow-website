import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import PricingPage from "@/app/site/pages/PricingPage";
import { getPricingPageContent } from "@/app/site/content/pricing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getPricingPageContent(market);
  return buildPageMetadata({
    pageKey: "pricing",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/** Gleiche Seite wie DE, Inhalte aus app/site/content/pricing/<lang>.ts (+ home/<lang>.ts `pricing`) */
export default async function MarketPricing({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <PricingPage market={market} />;
}
