import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import OnlineBookingPage from "@/app/site/pages/OnlineBookingPage";
import { getOnlineBookingContent } from "@/app/site/content/online-booking";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getOnlineBookingContent(market);
  return buildPageMetadata({
    pageKey: "online-booking",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/** Gleiche Seite wie DE, Inhalte aus app/site/content/online-booking/<lang>.ts */
export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <OnlineBookingPage market={market} />;
}
