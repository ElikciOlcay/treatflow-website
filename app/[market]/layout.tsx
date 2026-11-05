import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BASE_URL,
  htmlLangTags,
  isPrefixedMarket,
  marketPathPrefix,
  ogLocaleTags,
  prefixedMarkets,
  type PrefixedMarket,
} from "@/app/i18n/config";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";
import { getHomeContent } from "@/app/site/content/home";

const languageNames: Record<PrefixedMarket, string> = {
  en: "English",
  tr: "Turkish",
  nl: "Dutch",
  it: "Italian",
  pl: "Polish",
  es: "Spanish",
  fr: "French",
};

export const viewport = rootViewport;

export function generateStaticParams() {
  return prefixedMarkets.map((market) => ({ market }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}): Promise<Metadata> {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return rootMetadata;
  const market = raw as PrefixedMarket;
  const prefix = marketPathPrefix[market];
  const homeMeta = getHomeContent(market).meta;
  const defaultTitle =
    homeMeta?.title ??
    "Treatflow: All-in-One Software for Beauty Salons & Aesthetic Clinics";
  const defaultDescription =
    homeMeta?.description ??
    "Treatflow is software for beauty salons and aesthetic clinics: online booking, client records, digital forms, treatment documentation and automated follow-ups. Hosted in the EU. 14-day free trial.";
  // Bisher erbte dieses Layout die Standardwerte vom gemeinsamen Root-Layout.
  return {
    ...rootMetadata,
    metadataBase: new URL(BASE_URL),
    title: {
      default: defaultTitle,
      template: "%s | Treatflow",
    },
    description: defaultDescription,
    alternates: {
      canonical: `${BASE_URL}${prefix}`,
    },
    openGraph: {
      type: "website",
      locale: ogLocaleTags[market],
      url: `${BASE_URL}${prefix}`,
      siteName: "Treatflow",
    },
    other: {
      language: languageNames[market],
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

  return (
    <RootDocument lang={htmlLangTags[market]}>
      <div className="min-h-screen bg-white">
        {/* Organization + WebSite (JSON-LD) kommen aus dem Footer (SiteSchema). */}
        <Navigation market={market} />
        {children}
        <Footer market={market} />
      </div>
    </RootDocument>
  );
}
