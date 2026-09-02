import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";
import {
  categoryLabel,
  formatPublishedDate,
  getProductUpdateBySlug,
  localizeProductUpdate,
  productUpdateSlug,
} from "@/lib/productUpdates";

export const dynamic = "force-dynamic";
export const revalidate = 60;

type PageProps = {
  params: Promise<{ market: string; slug: string }>;
};

function categoryClass(category: string | null) {
  const value = (category || "").toLowerCase();
  if (value.includes("fix")) return "bg-amber-50 text-amber-700";
  if (value.includes("verbesser") || value.includes("improve")) return "bg-sky-50 text-sky-700";
  return "bg-indigo-50 text-indigo-700";
}

function sanitizeUpdateHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { market: raw, slug } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const updateRaw = await getProductUpdateBySlug(slug);
  if (!updateRaw) return { title: "News not found" };
  const update = localizeProductUpdate(updateRaw, "en");
  const url = `https://www.treatflow.io/${raw}/news/${slug}`;
  return {
    title: update.title,
    description: update.summary || update.title,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        de: `https://www.treatflow.io/neuigkeiten/${slug}`,
        "x-default": `https://www.treatflow.io/neuigkeiten/${slug}`,
      },
    },
    openGraph: {
      title: update.title,
      description: update.summary || update.title,
      url,
      locale: "en_US",
      images: [{ url: update.image_url, width: 1200, height: 675, alt: update.title }],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { market: raw, slug } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const updateRaw = await getProductUpdateBySlug(slug);
  if (!updateRaw) notFound();
  const update = localizeProductUpdate(updateRaw, "en");

  const appLink = update.link_url
    ? `https://app.treatflow.io${update.link_url.startsWith("/") ? update.link_url : `/${update.link_url}`}`
    : null;

  return (
    <main className="pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${market}/news`}
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          All news
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryClass(update.category)}`}>
            {categoryLabel(update.category, "en")}
          </span>
          <span className="text-sm text-gray-500">
            {formatPublishedDate(update.published_at, "en-GB")}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{update.title}</h1>
        {update.summary && <p className="text-xl text-gray-600 mb-8">{update.summary}</p>}

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-50 mb-10">
          <Image
            src={update.image_url}
            alt={update.title}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <div
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:text-gray-900"
          dangerouslySetInnerHTML={{ __html: sanitizeUpdateHtml(update.content) }}
        />

        {appLink && (
          <div className="mt-10">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              {update.link_label || "Open in Treatflow"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}
      </article>
    </main>
  );
}
