import { BASE_URL } from "@/app/i18n/config";
import { stripTitleBrand } from "@/app/i18n/seo";
import { sitePagePath } from "@/app/i18n/site-pages";
import { TREATFLOW_AUTHORS } from "@/lib/content-attribution";
import { getFeatureCommon } from "@/app/site/content/feature-common";
import { getHomeContent } from "@/app/site/content/home";
import type { SiteMarket } from "@/app/site/content/shared";

/**
 * Gemeinsames JSON-LD der Website (alle Sprachen).
 *
 * Entitäten mit festen @ids, damit Suchmaschinen und KI-Assistenten sie seitenübergreifend
 * zusammenführen können:
 * - Organization: eine für die ganze Website (`/#organization`), ausgegeben im Footer (SiteSchema).
 * - WebSite: eine je Sprache (`/#website`, `/en#website`, …), ebenfalls im Footer.
 * - SoftwareApplication „Treatflow“: eine je Sprache (`/#software`, `/en#software`, …) mit Preisen
 *   in der Währung des Markts (Angebote aus `home/<lang>.ts` → `schema.software.offers`).
 * - WebPage / BreadcrumbList / FAQPage: je Seite (`PageSchemas`).
 *
 * Alles als rohes `<script type="application/ld+json">` (nicht next/script), damit das JSON-LD
 * im ausgelieferten HTML steht und nicht nur im RSC-Payload (Crawler ohne JavaScript).
 */

export const ORGANIZATION_ID = `${BASE_URL}/#organization`;

/** Absolute URL der Startseite in der Sprache (DE ohne Slash am Ende, wie bisher). */
export function homeUrl(market: SiteMarket): string {
  const path = sitePagePath(market, "home") ?? "/";
  return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

export function websiteId(market: SiteMarket): string {
  return market === "de" ? `${BASE_URL}/#website` : `${homeUrl(market)}#website`;
}

export function softwareId(market: SiteMarket): string {
  return market === "de" ? `${BASE_URL}/#software` : `${homeUrl(market)}#software`;
}

/** `inLanguage` der Sprache (de-DE, en, tr-TR, nl-NL …). */
export function schemaLanguage(market: SiteMarket): string {
  return getFeatureCommon(market).schemaLanguage;
}

type Offer = Record<string, unknown>;

/** Preisangebote (Basic/Booking) des Markts aus dem Startseiten-Schema – Währung je Markt. */
export function marketOffers(market: SiteMarket): Offer[] {
  const offers = getHomeContent(market).schema.software.offers;
  return Array.isArray(offers) ? (offers as Offer[]) : [];
}

export const TREATFLOW_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.6",
  ratingCount: "19",
  reviewCount: "19",
  bestRating: "5",
  worstRating: "1",
} as const;

/** SoftwareApplication „Treatflow“ der Sprache, optional mit seitenbezogener Beschreibung/Funktionsliste. */
export function softwareApplicationSchema(
  market: SiteMarket,
  options: {
    description?: string;
    featureList?: string[];
    offers?: Offer[];
    /** Nur auf Seiten, die die Google-Bewertung (4,6/5) sichtbar zeigen. */
    rating?: boolean;
  } = {}
) {
  const home = getHomeContent(market).schema.software;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": softwareId(market),
    name: "Treatflow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: schemaLanguage(market),
    url: homeUrl(market),
    description: options.description ?? (home.description as string),
    ...(options.featureList?.length ? { featureList: options.featureList } : {}),
    offers: options.offers ?? marketOffers(market),
    publisher: { "@id": ORGANIZATION_ID },
    ...(options.rating ? { aggregateRating: TREATFLOW_RATING } : {}),
  };
}

export type SchemaCrumb = { label: string; href?: string };

/** BreadcrumbList: Startseite → … → aktuelle Seite (letzter Eintrag mit eigener URL). */
export function breadcrumbSchema(market: SiteMarket, crumbs: SchemaCrumb[], pageUrl: string) {
  const common = getFeatureCommon(market);
  const items = [{ label: common.breadcrumbHome, href: sitePagePath(market, "home") ?? "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const url = item.href ? `${BASE_URL}${item.href}` : isLast ? pageUrl : undefined;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(url ? { item: url } : {}),
      };
    }),
  };
}

/** WebPage der Seite, verknüpft mit WebSite, Organization, SoftwareApplication und Breadcrumb. */
export function webPageSchema(
  market: SiteMarket,
  page: {
    url: string;
    name: string;
    description: string;
    dateModified?: string;
    datePublished?: string;
    breadcrumb?: boolean;
    /** Default: SoftwareApplication der Sprache. `null` = kein `about`. */
    aboutId?: string | null;
    /** CSS-Selektoren für `speakable` (z. B. Fakten-Box). */
    speakable?: string[];
  }
) {
  const author = TREATFLOW_AUTHORS.olcay;
  const aboutPath = sitePagePath(market, "about");
  const aboutId = page.aboutId === undefined ? softwareId(market) : page.aboutId;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.url}#webpage`,
    name: page.name,
    description: page.description,
    url: page.url,
    ...(page.dateModified ? { dateModified: page.dateModified } : {}),
    ...(page.datePublished ? { datePublished: page.datePublished } : {}),
    inLanguage: schemaLanguage(market),
    isPartOf: { "@id": websiteId(market) },
    ...(aboutId ? { about: { "@id": aboutId } } : {}),
    ...(page.breadcrumb ? { breadcrumb: { "@id": `${page.url}#breadcrumb` } } : {}),
    ...(page.speakable?.length
      ? { speakable: { "@type": "SpeakableSpecification", cssSelector: page.speakable } }
      : {}),
    ...(page.dateModified
      ? {
          author: {
            "@type": "Person",
            name: author.name,
            jobTitle: author.jobTitle,
            url: `${BASE_URL}${aboutPath ?? "/ueber-uns"}`,
            // Beschreibung liegt nur auf Deutsch vor.
            ...(market === "de" ? { description: author.description } : {}),
          },
        }
      : {}),
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export type SchemaFaq = { question: string; answer: string };

/** FAQPage aus den sichtbaren Fragen/Antworten (gleiche Texte wie auf der Seite). */
export function faqPageSchema(market: SiteMarket, pageUrl: string, items: SchemaFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: schemaLanguage(market),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Ein JSON-LD-Block als rohes Script (landet im HTML). */
export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/**
 * Standard-JSON-LD einer Seite: BreadcrumbList, WebPage, SoftwareApplication und (falls vorhanden) FAQPage.
 * Organization/WebSite kommen einmal je Seite aus dem Footer (SiteSchema).
 */
export function PageSchemas({
  market,
  path,
  name,
  description,
  breadcrumbs,
  dateModified,
  datePublished,
  faq,
  software,
  speakable,
}: {
  market: SiteMarket;
  /** Pfad der Seite in der Sprache, z. B. `/en/pricing` */
  path: string;
  name: string;
  description: string;
  /** Breadcrumb-Einträge nach „Home“ (letzter = aktuelle Seite). */
  breadcrumbs: SchemaCrumb[];
  dateModified?: string;
  datePublished?: string;
  faq?: SchemaFaq[];
  /** `false` = kein SoftwareApplication-Block (z. B. Dienstleistungsseite). */
  software?: Parameters<typeof softwareApplicationSchema>[1] | false;
  /** CSS-Selektoren für `speakable` im WebPage-Schema. */
  speakable?: string[];
}) {
  const url = `${BASE_URL}${path === "/" ? "" : path}`;
  return (
    <>
      <JsonLd data={breadcrumbSchema(market, breadcrumbs, url)} />
      <JsonLd
        data={webPageSchema(market, {
          url,
          name: stripTitleBrand(name),
          description,
          dateModified,
          datePublished,
          breadcrumb: true,
          aboutId: software === false ? null : undefined,
          speakable,
        })}
      />
      {software !== false && <JsonLd data={softwareApplicationSchema(market, software ?? {})} />}
      {faq && faq.length > 0 && <JsonLd data={faqPageSchema(market, url, faq)} />}
    </>
  );
}
