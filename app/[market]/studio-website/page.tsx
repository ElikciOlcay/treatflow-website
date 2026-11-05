import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import StudioWebsitePage, { StudioWebsiteSchemas } from "@/app/site/pages/StudioWebsitePage";
import { getStudioWebsiteContent } from "@/app/site/content/studio-website";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getStudioWebsiteContent(market);
  return buildPageMetadata({
    pageKey: "studio-website",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/** Gleiche Seite wie DE, Inhalte aus app/site/content/studio-website/<lang>.ts */
export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return (
    <>
      <StudioWebsiteSchemas market={market} />
      <StudioWebsitePage market={market} />
    </>
  );
}
