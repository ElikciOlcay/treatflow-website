import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import EnComparisonPage from "@/app/components/EnComparisonPage";
import { softwareComparisonEn } from "@/app/i18n/markets/comparisons-en";
import { softwareComparisonTr } from "@/app/i18n/markets/comparisons-tr";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = market === "tr" ? softwareComparisonTr : softwareComparisonEn;
  return buildPageMetadata({
    pageKey: "software-comparison",
    locale: market,
    title: content.title,
    description: content.description,
    keywords:
      market === "tr"
        ? ["güzellik salonu yazılımı karşılaştırma", "salon yazılımı", "komisyonsuz randevu yazılımı"]
        : ["beauty salon software comparison", "salon software Europe", "salon booking software no commission"],
  });
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const content = market === "tr" ? softwareComparisonTr : softwareComparisonEn;
  return <EnComparisonPage content={content} market={market} />;
}
