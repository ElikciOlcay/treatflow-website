import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionaryForMarket } from "@/app/i18n/dictionaries";
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
import { countryHomeMeta } from "@/app/i18n/markets/country-homes";

function organizationSchema(market: PrefixedMarket) {
  if (market === "tr") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${BASE_URL}/tr#organization`,
          name: "Treatflow",
          url: BASE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/images/logos/treatflow-logo.svg`,
          },
          description:
            "Güzellik salonları, medikal estetik klinikleri ve lazer epilasyon merkezleri için salon yönetim yazılımı. Online randevu, müşteri takibi, dijital onam formları ve işlem kayıtları. AB sunucularında barındırılır.",
          sameAs: ["https://www.instagram.com/treatflow.io/"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "hello@treatflow.io",
            availableLanguage: ["Turkish", "English", "German"],
            areaServed: "TR",
          },
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/tr#website`,
          url: `${BASE_URL}/tr`,
          name: "Treatflow",
          description:
            "Güzellik salonları ve estetik klinikleri için salon yönetim yazılımı: randevu, müşteri takibi, onam formları ve işlem kaydı.",
          publisher: { "@id": `${BASE_URL}/tr#organization` },
          inLanguage: "tr",
        },
      ],
    };
  }
  return enOrganizationSchema;
}

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
  const homeMeta = countryHomeMeta[market as keyof typeof countryHomeMeta];
  const defaultTitle =
    homeMeta?.title ??
    "Treatflow: All-in-One Software for Beauty Salons & Aesthetic Clinics";
  const defaultDescription =
    homeMeta?.description ??
    "Treatflow is software for beauty salons and aesthetic clinics: online booking, client records, digital forms, treatment documentation and automated follow-ups. Hosted in the EU. 14-day free trial.";
  return {
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
      language: market === "tr" ? "Turkish" : "English",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(market)) }}
      />
      <HtmlLang lang={htmlLangTags[market]} />
      <NavigationEn dict={dict} locale={market} />
      {children}
      <FooterEn dict={dict} locale={market} />
    </div>
  );
}
