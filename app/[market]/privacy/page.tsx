import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import {
  isPrefixedMarket,
  marketLanguage,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { getPrivacyCopy } from "@/app/i18n/markets/static-pages-nl-fi";
import { enPrivacy } from "@/app/i18n/markets/legal-en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const content = lang === "nl" || lang === "fi" ? getPrivacyCopy(lang) : enPrivacy;
  return buildPageMetadata({
    pageKey: "privacy",
    locale: market,
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const content = lang === "nl" || lang === "fi" ? getPrivacyCopy(lang) : null;

  if (content) {
    return (
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-indigo">
          <h1>{content.title}</h1>
          {content.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{enPrivacy.title}</h1>
        <p className="text-lg text-gray-600 mb-10">{enPrivacy.intro}</p>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {enPrivacy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.heading}</h2>
              <div
                className="space-y-3 [&_a]:text-indigo-600 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5"
                dangerouslySetInnerHTML={{ __html: section.html }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
