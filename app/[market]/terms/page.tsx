import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import {
  isPrefixedMarket,
  marketLanguage,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { getTermsCopy } from "@/app/i18n/markets/static-pages-nl-fi";

const enTerms = {
  metaTitle: "Terms of Service",
  metaDescription: "Treatflow terms of service.",
  title: "Terms of Service",
  paragraphs: [
    "By using Treatflow you agree to our terms. For contractual details during early access, we will provide market-specific terms when onboarding your studio. Contact: hello@treatflow.io.",
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
  const content = lang === "nl" || lang === "fi" ? getTermsCopy(lang) : enTerms;
  return buildPageMetadata({
    pageKey: "terms",
    locale: market,
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const content = lang === "nl" || lang === "fi" ? getTermsCopy(lang) : enTerms;

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
