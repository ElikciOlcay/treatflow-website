import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import { featureAvailable } from "@/app/i18n/feature-availability";
import TreatflowPayPage from "@/app/site/pages/TreatflowPayPage";
import { getTreatflowPayContent } from "@/app/site/content/treatflow-pay";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = getTreatflowPayContent(market);
  if (!content) return {};
  return buildPageMetadata({
    pageKey: "treatflow-pay",
    locale: market,
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
  });
}

/** Gleiche Seite wie DE, Inhalte aus app/site/content/treatflow-pay/<lang>.ts. Nicht in TR (feature "pay"). */
export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw) || !featureAvailable("pay", raw)) notFound();
  const market = raw as PrefixedMarket;
  return <TreatflowPayPage market={market} />;
}
