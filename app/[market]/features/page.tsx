import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import FeaturesOverviewPage from "@/app/site/pages/FeaturesOverviewPage";
import { getFeaturesContent } from "@/app/site/content/features";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getFeaturesContent(market);
  return buildPageMetadata({
    pageKey: "features",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/** Gleiche Seite wie DE, Inhalte aus app/site/content/features/<lang>.ts */
export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <FeaturesOverviewPage market={market} />;
}
