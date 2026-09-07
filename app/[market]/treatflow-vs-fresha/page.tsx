import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import EnComparisonPage from "@/app/components/EnComparisonPage";
import { vsFreshaEn } from "@/app/i18n/markets/comparisons-en";
import { vsFreshaTr } from "@/app/i18n/markets/comparisons-tr";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = market === "tr" ? vsFreshaTr : vsFreshaEn;
  return buildPageMetadata({
    pageKey: "treatflow-vs-fresha",
    locale: market,
    title: content.title,
    description: content.description,
    keywords:
      market === "tr"
        ? ["Treatflow vs Fresha", "Fresha alternatif", "komisyonsuz güzellik salonu yazılımı"]
        : ["Treatflow vs Fresha", "Fresha alternative", "beauty salon software without commission"],
  });
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const content = market === "tr" ? vsFreshaTr : vsFreshaEn;
  return <EnComparisonPage content={content} market={market} />;
}
