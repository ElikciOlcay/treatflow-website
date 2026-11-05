import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BASE_URL,
  htmlLangTags,
  isBundleLang,
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

/** Kurzbeschreibung + Liefergebiet je Bundle-Sprache (Organization/WebSite JSON-LD). */
const bundleOrgMeta: Record<
  "nl" | "it" | "pl" | "es" | "fr",
  { org: string; site: string; areaServed: string[] }
> = {
  nl: {
    org: "Salonsoftware voor schoonheidssalons, esthetische klinieken en behandelstudio's: online afspraken, klantendossiers, digitale intakeformulieren en behandeldocumentatie. Gehost in de EU, AVG-proof.",
    site: "Alles-in-één software voor schoonheidssalons en esthetische klinieken.",
    areaServed: ["NL", "BE"],
  },
  it: {
    org: "Gestionale per centri estetici, studi di medicina estetica e centri di trattamento: prenotazioni online, schede clienti, moduli di consenso digitali e documentazione dei trattamenti. Server nell'UE, conforme al GDPR.",
    site: "Software tutto-in-uno per centri estetici e studi di medicina estetica.",
    areaServed: ["IT"],
  },
  pl: {
    org: "Program do salonów kosmetycznych, gabinetów medycyny estetycznej i studiów zabiegowych: rezerwacje online, kartoteka klientów, cyfrowe formularze zgody i dokumentacja zabiegów. Serwery w UE, zgodność z RODO.",
    site: "Kompleksowy program dla salonów kosmetycznych i gabinetów medycyny estetycznej.",
    areaServed: ["PL"],
  },
  es: {
    org: "Software para centros de estética, clínicas de medicina estética y centros de tratamiento: reservas online, fichas de clientes, formularios de consentimiento digitales y documentación de tratamientos. Alojado en la UE, conforme al RGPD.",
    site: "Software todo en uno para centros de estética y clínicas estéticas.",
    areaServed: ["ES"],
  },
  fr: {
    org: "Logiciel pour instituts de beauté, cliniques de médecine esthétique et centres de soins : réservation en ligne, fiches clientes, formulaires de consentement numériques et suivi des soins. Hébergé dans l'UE, conforme au RGPD.",
    site: "Logiciel tout-en-un pour instituts de beauté et cliniques esthétiques.",
    areaServed: ["FR", "BE", "LU", "CH"],
  },
};

const allSiteLanguages = ["de", "en", "nl", "it", "pl", "es", "fr", "tr"];

function organizationSchema(market: PrefixedMarket) {
  if (isBundleLang(market)) {
    const meta = bundleOrgMeta[market];
    const lang = htmlLangTags[market];
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${BASE_URL}/${market}#organization`,
          name: "Treatflow",
          url: BASE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/images/logos/treatflow-logo.svg`,
          },
          description: meta.org,
          foundingLocation: { "@type": "Place", name: "Austria" },
          knowsLanguage: allSiteLanguages,
          sameAs: ["https://www.instagram.com/treatflow.io/"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "hello@treatflow.io",
            availableLanguage: ["English", "German"],
            areaServed: meta.areaServed,
          },
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/${market}#website`,
          url: `${BASE_URL}/${market}`,
          name: "Treatflow",
          description: meta.site,
          publisher: { "@id": `${BASE_URL}/${market}#organization` },
          inLanguage: lang,
        },
      ],
    };
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(market)) }}
        />
        <Navigation market={market} />
        {children}
        <Footer market={market} />
      </div>
    </RootDocument>
  );
}
