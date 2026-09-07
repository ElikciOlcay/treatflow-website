import { notFound } from "next/navigation";
import FeaturesPageEn from "@/app/components/FeaturesPageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, marketLanguage, type PrefixedMarket } from "@/app/i18n/config";

const featuresMeta: Record<string, { title: string; description: string }> = {
  tr: {
    title: "Güzellik Salonu Yazılımı Özellikleri",
    description:
      "Randevu takvimi, komisyonsuz online randevu, müşteri takibi, dijital onam, sesli işlem kaydı ve WhatsApp hatırlatmaları – tek salon yazılımında. 30 gün ücretsiz deneyin.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const meta = featuresMeta[lang] ?? {
    title: "Features for Salons and Clinics",
    description:
      "Appointment calendar, online booking without commission, client records, digital consent forms, treatment documentation with voice dictation, reminders and integrations – in one studio system.",
  };
  return buildPageMetadata({
    pageKey: "features",
    locale: market,
    title: meta.title,
    description: meta.description,
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
  return <FeaturesPageEn market={market} />;
}
