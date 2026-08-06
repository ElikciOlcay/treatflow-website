import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import HomePageIntl from "@/app/components/HomePageIntl";
import {
  countryHomeMeta,
  getCountryHomePage,
  type CountryHomeMarket,
} from "@/app/i18n/markets/country-homes";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const meta = countryHomeMeta[market as CountryHomeMarket];
  return buildPageMetadata({
    pageKey: "home",
    locale: market,
    title: meta.title,
    description: meta.description,
  });
}

export default async function MarketHome({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <HomePageIntl content={getCountryHomePage(market as CountryHomeMarket)} />;
}
