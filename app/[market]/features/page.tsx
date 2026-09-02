import { notFound } from "next/navigation";
import FeaturesPageEn from "@/app/components/FeaturesPageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
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
    pageKey: "features",
    locale: market,
    title: "Features for Salons and Clinics",
    description:
      "Appointment calendar, online booking without commission, client records, digital consent forms, treatment documentation with voice dictation, reminders and integrations – in one studio system.",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  return <FeaturesPageEn />;
}
