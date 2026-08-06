import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionaryForMarket } from "@/app/i18n/dictionaries";
import { buildHreflangAlternates } from "@/app/i18n/seo";
import {
  BASE_URL,
  htmlLangTags,
  isPrefixedMarket,
  marketPathPrefix,
  ogLocaleTags,
  prefixedMarkets,
  type PrefixedMarket,
} from "@/app/i18n/config";
import NavigationEn from "@/app/components/NavigationEn";
import FooterEn from "@/app/components/FooterEn";
import HtmlLang from "@/app/components/HtmlLang";

export function generateStaticParams() {
  return prefixedMarkets.map((market) => ({ market }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}): Promise<Metadata> {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const prefix = marketPathPrefix[market];
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: "Treatflow: All-in-One Software for Beauty Salons & Aesthetic Clinics",
      template: "%s | Treatflow",
    },
    description:
      "Manage appointments, online booking, client records, consent forms and treatment documentation - all in one app. GDPR-compliant.",
    alternates: {
      canonical: `${BASE_URL}${prefix}`,
      ...buildHreflangAlternates("home"),
    },
    openGraph: {
      type: "website",
      locale: ogLocaleTags[market],
      url: `${BASE_URL}${prefix}`,
      siteName: "Treatflow",
    },
  };
}

export default async function MarketLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const dict = await getDictionaryForMarket(market);

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang={htmlLangTags[market]} />
      <NavigationEn dict={dict} locale={market} />
      {children}
      <FooterEn dict={dict} locale={market} />
    </div>
  );
}
