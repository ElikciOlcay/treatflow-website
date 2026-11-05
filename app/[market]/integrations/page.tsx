import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import IntegrationsPage from "@/app/site/pages/IntegrationsPage";
import { getIntegrationsContent } from "@/app/site/content/integrations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getIntegrationsContent(market);
  return buildPageMetadata({
    pageKey: "integrations",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/** Gleiche Seite wie DE (ohne Lexware/AbaNinja/SumUp/Kasse/Gutscheine), Inhalte aus app/site/content/integrations/<lang>.ts */
export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <IntegrationsPage market={market} />;
}
