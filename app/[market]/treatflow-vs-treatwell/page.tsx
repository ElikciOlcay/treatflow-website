import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import EnComparisonPage from "@/app/components/EnComparisonPage";
import { vsTreatwellEn } from "@/app/i18n/markets/comparisons-en";
import { vsTreatwellTr } from "@/app/i18n/markets/comparisons-tr";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = market === "tr" ? vsTreatwellTr : vsTreatwellEn;
  return buildPageMetadata({
    pageKey: "treatflow-vs-treatwell",
    locale: market,
    title: content.title,
    description: content.description,
    keywords:
      market === "tr"
        ? ["Treatflow vs Treatwell", "Treatwell alternatif", "komisyonsuz salon yazılımı"]
        : ["Treatflow vs Treatwell", "Treatwell alternative", "beauty salon software no commission"],
  });
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const content = market === "tr" ? vsTreatwellTr : vsTreatwellEn;
  return <EnComparisonPage content={content} market={market} />;
}
