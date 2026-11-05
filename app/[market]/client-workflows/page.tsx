import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import ClientWorkflowsPage from "@/app/site/pages/ClientWorkflowsPage";
import { getClientWorkflowsContent } from "@/app/site/content/client-workflows";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const { meta } = getClientWorkflowsContent(market);
  return buildPageMetadata({
    pageKey: "customer-workflows",
    locale: market,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

/**
 * Gleiche Seite wie DE (/kunden-workflows), Inhalte aus app/site/content/client-workflows/<lang>.ts.
 * TR liegt unter app/tr/musteri-otomasyonlari (/tr/client-workflows → 301 in next.config.ts).
 */
export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <ClientWorkflowsPage market={market} />;
}
