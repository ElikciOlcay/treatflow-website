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

const enOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/en#organization`,
      name: "Treatflow",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logos/treatflow-logo.svg`,
      },
      description:
        "Software for beauty salons, aesthetic clinics and treatment-focused businesses. Online booking, client records, digital forms and treatment documentation. Hosted in the EU.",
      sameAs: ["https://www.instagram.com/treatflow.io/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@treatflow.io",
        availableLanguage: ["English", "German"],
        areaServed: "EU",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/en#website`,
      url: `${BASE_URL}/en`,
      name: "Treatflow",
      description:
        "All-in-one software for beauty salons and aesthetic clinics: booking, records, forms and treatment documentation.",
      publisher: { "@id": `${BASE_URL}/en#organization` },
      inLanguage: "en",
    },
  ],
};

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
      "Treatflow is software for beauty salons and aesthetic clinics: online booking, client records, digital forms, treatment documentation and automated follow-ups. Hosted in the EU. 14-day free trial.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enOrganizationSchema) }}
      />
      <HtmlLang lang={htmlLangTags[market]} />
      <NavigationEn dict={dict} locale={market} />
      {children}
      <FooterEn dict={dict} locale={market} />
    </div>
  );
}
