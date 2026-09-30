import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/app/components/Breadcrumbs";
import FaqSectionEn, { type FaqEntry } from "@/app/components/FaqSectionEn";
import TrSeoCta from "@/app/components/tr-seo/TrSeoCta";
import TrSeoPageView from "@/app/components/tr-seo/TrSeoPageView";
import { generateArticleSchema, generateWebPageSchemaIntl } from "@/lib/schema";
import { BASE_URL } from "@/app/i18n/config";
import { getPrimaryCtaPath } from "@/app/i18n/market-access";
import { TR_PATHS } from "@/app/i18n/tr-seo/paths";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | { type: "note"; text: string };

export type TrGuideContent = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  datePublished: string;
  dateModified: string;
  lede: string;
  blocks: GuideBlock[];
  faqs: FaqEntry[];
  related: { href: string; label: string }[];
};

const CTA_CLASS =
  "inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors";

export default function TrGuideArticle({ content }: { content: TrGuideContent }) {
  const pageUrl = `${BASE_URL}${content.path}`;
  const crumbs = [{ label: "Rehber", href: TR_PATHS.guidesHub }, { label: content.h1 }];
  const schemas = [
    generateBreadcrumbSchema(crumbs, TR_PATHS.home, "Ana sayfa"),
    generateWebPageSchemaIntl({
      name: content.title,
      description: content.description,
      url: pageUrl,
      inLanguage: "tr-TR",
      dateModified: content.dateModified,
      datePublished: content.datePublished,
    }),
    generateArticleSchema({
      headline: content.h1,
      description: content.description,
      url: pageUrl,
      datePublished: content.datePublished,
      dateModified: content.dateModified,
      inLanguage: "tr-TR",
    }),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={`${schema["@type"]}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TrSeoPageView landingPage={content.path} keywordCluster="rehber" />
      <div className="pt-16">
        <Breadcrumbs items={crumbs} homeHref={TR_PATHS.home} homeLabel="Ana sayfa" />
      </div>
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-indigo-600 font-medium mb-3">Treatflow rehber</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{content.h1}</h1>
          <p className="text-sm text-gray-500 mb-8">
            Güncelleme: {content.dateModified} · Yazar: Olcay Elikci
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{content.lede}</p>
          {content.blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "p") {
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {block.text}
                </p>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "ol") {
              return (
                <ol key={index} className="list-decimal pl-5 space-y-2 text-gray-600 mb-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              );
            }
            if (block.type === "note") {
              return (
                <p
                  key={index}
                  className="text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6"
                >
                  {block.text}
                </p>
              );
            }
            return (
              <div key={index} className="overflow-x-auto mb-8">
                {block.caption ? (
                  <p className="text-sm text-gray-500 mb-2">{block.caption}</p>
                ) : null}
                <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      {block.headers.map((h) => (
                        <th key={h} className="text-left font-semibold px-3 py-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-3 py-2 text-gray-700 align-top border-t border-gray-100">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
          <div className="mt-12 p-6 bg-indigo-50 rounded-2xl">
            <p className="font-semibold text-gray-900 mb-2">Treatflow'u 30 gün deneyin</p>
            <p className="text-sm text-gray-600 mb-4">
              Kredi kartı gerekmez. Randevu komisyonu yok. AB sunucuları, KVKK kapsamında.
            </p>
            <TrSeoCta
              href={getPrimaryCtaPath("tr")}
              label="Ücretsiz Deneyin"
              className={CTA_CLASS}
              landingPage={content.path}
              keywordCluster="rehber"
            />
          </div>
        </div>
      </article>
      <FaqSectionEn title="Bu yazıdaki sorular" badge="SSS" faqs={content.faqs} />
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Devamı</h2>
          <ul className="space-y-2">
            {content.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-indigo-600 hover:text-indigo-700 font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
