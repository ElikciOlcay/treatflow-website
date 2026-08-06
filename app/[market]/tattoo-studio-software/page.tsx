import { notFound } from "next/navigation";
import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getMarketIndustryPage } from "@/app/i18n/markets/market-content";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = getMarketIndustryPage(market, "tattoo-studio-software");
  return buildPageMetadata({
    pageKey: content.pageKey,
    locale: market,
    title: content.serviceName,
    description: content.serviceDescription,
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
  return <InternationalSeoPage content={getMarketIndustryPage(market, "tattoo-studio-software")} />;
}
