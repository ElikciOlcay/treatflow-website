import { htmlLangTags } from "@/app/i18n/config";
import { filterByFeature } from "@/app/i18n/feature-availability";
import type { HomeContent } from "@/app/site/content/home/types";
import { richTextToPlain, type SiteMarket } from "@/app/site/content/shared";

/** FAQPage-JSON-LD aus den sichtbaren FAQ-Einträgen. */
function faqSchemaFrom(content: HomeContent, market: SiteMarket) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: htmlLangTags[market],
    mainEntity: filterByFeature(content.faq.items, market).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: richTextToPlain(item.answer) },
    })),
  };
}

/** JSON-LD der Startseite (SoftwareApplication + FAQPage). */
export default function HomeSchemas({ content, market }: { content: HomeContent; market: SiteMarket }) {
  const faq = content.schema.faq ?? faqSchemaFrom(content, market);
  return (
    <>
      {/* Roh-script (nicht next/script): sonst landet JSON-LD nur im RSC-Flight */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(content.schema.software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
