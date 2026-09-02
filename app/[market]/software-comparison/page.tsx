import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import EnComparisonPage from "@/app/components/EnComparisonPage";
import { softwareComparisonEn } from "@/app/i18n/markets/comparisons-en";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  return buildPageMetadata({
    pageKey: "software-comparison",
    locale: raw as PrefixedMarket,
    title: softwareComparisonEn.title,
    description: softwareComparisonEn.description,
    keywords: ["beauty salon software comparison", "salon software Europe", "salon booking software no commission"],
  });
}

export default async function Page({ params }: { params: Promise<{ market: string }> }) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  return <EnComparisonPage content={softwareComparisonEn} />;
}
