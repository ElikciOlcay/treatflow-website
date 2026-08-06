import { notFound } from "next/navigation";
import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getMarketExtraFeaturePage } from "@/app/i18n/markets/market-content";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = getMarketExtraFeaturePage(market, "point-of-sale");
  return buildPageMetadata({
    pageKey: "point-of-sale",
    locale: market,
    title: content.title,
    description: content.subtitle,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <FeaturePageEn {...getMarketExtraFeaturePage(market, "point-of-sale")} />;
}
