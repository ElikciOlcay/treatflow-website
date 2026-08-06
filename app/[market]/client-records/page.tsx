import { notFound } from "next/navigation";
import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getCoreFeaturePage } from "@/app/i18n/markets/core-feature-pages";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  return buildPageMetadata({
    pageKey: "client-records",
    locale: market,
    title: "Digital Client Records for Beauty Studios",
    description: "Client profiles, treatment history and photos in one digital record – built for beauty and aesthetic studios.",
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
  return <FeaturePageEn {...getCoreFeaturePage(market, "client-records")} />;
}
