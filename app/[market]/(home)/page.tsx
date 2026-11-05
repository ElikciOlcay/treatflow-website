// In einer Gruppe, damit die Titel-Vorlage des [market]-Layouts („%s | Treatflow“) greift.
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import HomePage from "@/app/components/home/HomePage";
import HomeSchemas from "@/app/components/home/HomeSchemas";
import { getHomeContent } from "@/app/site/content/home";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getHomeContent(market);
  return buildPageMetadata({
    pageKey: "home",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/** Startseite aller Nicht-DE-Sprachen: gleiche Sektionen wie DE, Inhalte aus app/site/content/home/<lang>.ts */
export default async function MarketHome({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const content = getHomeContent(market);
  return (
    <>
      <HomeSchemas content={content} market={market} />
      <HomePage content={content} market={market} />
    </>
  );
}
