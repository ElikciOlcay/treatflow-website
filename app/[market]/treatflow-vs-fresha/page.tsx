import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import EnComparisonPage from "@/app/components/EnComparisonPage";
import { vsFreshaEn } from "@/app/i18n/markets/comparisons-en";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  return buildPageMetadata({
    pageKey: "treatflow-vs-fresha",
    locale: raw as PrefixedMarket,
    title: vsFreshaEn.title,
    description: vsFreshaEn.description,
    keywords: ["Treatflow vs Fresha", "Fresha alternative", "beauty salon software without commission"],
  });
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  return <EnComparisonPage content={vsFreshaEn} />;
}
