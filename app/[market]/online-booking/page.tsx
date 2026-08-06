import { notFound } from "next/navigation";
import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getCoreFeaturePage } from "@/app/i18n/markets/core-feature-pages";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  return buildPageMetadata({
    pageKey: "online-booking",
    locale: market,
    title: "Online Booking for Beauty Salons",
    description: "24/7 online booking for beauty and aesthetic studios – real availability, deposits and automatic reminders.",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <FeaturePageEn {...getCoreFeaturePage(market, "online-booking")} />;
}
