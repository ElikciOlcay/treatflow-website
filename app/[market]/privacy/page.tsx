import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import {
  isPrefixedMarket,
  marketLanguage,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { getPrivacyCopy } from "@/app/i18n/markets/static-pages-nl-fi";

const enPrivacy = {
  metaTitle: "Privacy Policy",
  metaDescription: "Treatflow privacy policy. GDPR-compliant, hosted in the EU.",
  title: "Privacy Policy",
  paragraphs: [
    "Treatflow is hosted on EU servers and designed for GDPR compliance. For the full German privacy policy, see /datenschutz. Contact: hello@treatflow.io.",
  ],
};

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
  const content = lang === "nl" || lang === "fi" ? getPrivacyCopy(lang) : enPrivacy;

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
