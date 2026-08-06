import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";
import { getMarketPricingCopy } from "@/app/i18n/markets/market-content";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const copy = getMarketPricingCopy(market);
  return buildPageMetadata({
    pageKey: "pricing",
    locale: market,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function MarketPricing({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <PricingPageIntl copy={getMarketPricingCopy(market)} />;
}
