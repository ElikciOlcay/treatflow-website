import { stripTitleBrand } from "@/app/i18n/seo";
import { filterByFeature } from "@/app/i18n/feature-availability";
import type { HomeContent } from "@/app/site/content/home/types";
import { richTextToPlain, type SiteMarket } from "@/app/site/content/shared";
import {
  JsonLd,
  ORGANIZATION_ID,
  faqPageSchema,
  homeUrl,
  schemaLanguage,
  softwareId,
  webPageSchema,
} from "@/app/site/schema";

/** FAQPage-JSON-LD aus den sichtbaren FAQ-Einträgen. */
function faqSchemaFrom(content: HomeContent, market: SiteMarket) {
  return faqPageSchema(
    market,
    homeUrl(market),
    filterByFeature(content.faq.items, market).map((item) => ({
      question: item.question,
      answer: richTextToPlain(item.answer),
    }))
  );
}

/**
 * JSON-LD der Startseite (WebPage + SoftwareApplication + FAQPage).
 * Organization/WebSite kommen aus dem Footer (SiteSchema).
 */
export default function HomeSchemas({ content, market }: { content: HomeContent; market: SiteMarket }) {
  const faq = faqSchemaFrom(content, market);
  // Gleiche @id wie auf allen anderen Seiten der Sprache; Autor/Herausgeber = die eine Organization.
  const software = {
    ...content.schema.software,
    "@id": softwareId(market),
    operatingSystem: "Web",
    inLanguage: schemaLanguage(market),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
  const url = homeUrl(market);
  return (
    <>
      {/* Roh-script (nicht next/script): sonst landet JSON-LD nur im RSC-Flight */}
      <JsonLd
        data={webPageSchema(market, {
          url,
          name: stripTitleBrand(content.meta.title),
          description: content.meta.description,
        })}
      />
      <JsonLd data={software} />
      <JsonLd data={faq} />
    </>
  );
}
