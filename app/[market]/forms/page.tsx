import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import FormsPage from "@/app/site/pages/FormsPage";
import { getFormsContent } from "@/app/site/content/forms";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getFormsContent(market);
  return buildPageMetadata({
    pageKey: "forms",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/** Gleiche Seite wie DE, Inhalte aus app/site/content/forms/<lang>.ts */
export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <FormsPage market={market} />;
}
