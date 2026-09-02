import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import EnComparisonPage from "@/app/components/EnComparisonPage";
import { vsTreatwellEn } from "@/app/i18n/markets/comparisons-en";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  return buildPageMetadata({
    pageKey: "treatflow-vs-treatwell",
    locale: raw as PrefixedMarket,
    title: vsTreatwellEn.title,
    description: vsTreatwellEn.description,
    keywords: ["Treatflow vs Treatwell", "Treatwell alternative", "beauty salon software no commission"],
  });
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  return <EnComparisonPage content={vsTreatwellEn} />;
}
