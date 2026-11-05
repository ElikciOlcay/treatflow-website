import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import TryFeaturesPage, { TryFeaturesSchema } from "@/app/site/pages/TryFeaturesPage";
import { getTryFeaturesContent } from "@/app/site/content/try-features";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getTryFeaturesContent(market);
  return buildPageMetadata({
    pageKey: "try-features",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/**
 * Gleiche Seite wie DE (/funktionen-live-testen), Inhalte aus app/site/content/try-features/<lang>.ts.
 * NL/IT/PL/ES/FR über lokalisierte Slugs (Middleware-Rewrite), TR liegt unter app/tr/canli-demo
 * (/tr/try-features → 301 in next.config.ts).
 */
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
      <TryFeaturesSchema market={market} />
      <TryFeaturesPage market={market} />
    </>
  );
}
