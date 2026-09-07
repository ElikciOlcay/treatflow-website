import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, marketLanguage, type PrefixedMarket } from "@/app/i18n/config";
import { isTrMarket } from "@/app/i18n/markets/market-content";
import {
  categoryLabel,
  formatPublishedDate,
  getPublishedProductUpdates,
  localizeProductUpdate,
  productUpdateSlug,
} from "@/lib/productUpdates";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const newsCopy: Record<string, { eyebrow: string; title: string; subtitle: string; readMore: string; empty: string; metaTitle: string; metaDesc: string }> = {
  en: {
    eyebrow: "Product updates",
    title: "News for your studio",
    subtitle: "New features, improvements and fixes – the same product updates as in the app, in English.",
    readMore: "Read more",
    empty: "No news published yet.",
    metaTitle: "Product news",
    metaDesc: "What is new in Treatflow: features, improvements and fixes for beauty salons and aesthetic clinics.",
  },
};

function categoryClass(category: string | null) {
  const value = (category || "").toLowerCase();
  if (value.includes("fix")) return "bg-amber-50 text-amber-700";
  if (value.includes("verbesser") || value.includes("improve")) return "bg-sky-50 text-sky-700";
  return "bg-indigo-50 text-indigo-700";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw) || isTrMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const copy = newsCopy[lang] ?? newsCopy.en;
  return buildPageMetadata({
    pageKey: "news",
    locale: market,
    title: copy.metaTitle,
    description: copy.metaDesc,
  });
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw) || isTrMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const copy = newsCopy[lang] ?? newsCopy.en;
  const contentLang = lang === "tr" ? "en" : "en";
  const dateFmt = lang === "tr" ? "tr-TR" : "en-GB";
  const updates = (await getPublishedProductUpdates()).map((item) =>
    localizeProductUpdate(item, contentLang)
  );

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold text-indigo-600 mb-3">{copy.eyebrow}</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{copy.title}</h1>
          <p className="text-xl text-gray-600">{copy.subtitle}</p>
        </div>

        {updates.length === 0 ? (
          <p className="text-gray-600">{copy.empty}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update) => {
              const slug = productUpdateSlug(update);
              return (
                <Link
                  key={update.id}
                  href={`/${market}/news/${slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-indigo-200 transition-colors"
                >
                  <div className="relative aspect-[16/9] bg-gray-50">
                    <Image
                      src={update.image_url}
                      alt={update.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryClass(update.category)}`}>
                        {categoryLabel(update.category, contentLang)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatPublishedDate(update.published_at, dateFmt)}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {update.title}
                    </h2>
                    {update.summary && (
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{update.summary}</p>
                    )}
                    <span className="inline-flex items-center text-sm font-medium text-indigo-600">
                      {copy.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
