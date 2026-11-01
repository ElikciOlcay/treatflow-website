import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Rss } from "lucide-react";
import {
  BASE_URL,
  isPrefixedMarket,
  ogLocaleTags,
  prefixedMarkets,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { blogIndexAlternates, blogIndexUrl, blogPostUrl, blogTopics, getBlogPosts } from "@/lib/blog-intl";
import { blogUi } from "@/lib/blog-intl/ui";

export function generateStaticParams() {
  return prefixedMarkets
    .filter((market) => getBlogPosts(market).length > 0)
    .map((market) => ({ market }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}): Promise<Metadata> {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const ui = blogUi[raw];
  const url = blogIndexUrl(raw);
  return {
    title: ui.indexMetaTitle,
    description: ui.indexDescription,
    keywords: [],
    alternates: {
      canonical: url,
      languages: blogIndexAlternates(),
      types: { "application/rss+xml": `${url}/feed.xml` },
    },
    openGraph: {
      title: ui.indexTitle,
      description: ui.indexDescription,
      url,
      siteName: "Treatflow",
      type: "website",
      locale: ogLocaleTags[raw],
      images: [{ url: `${BASE_URL}/images/og-blog.jpg`, width: 1200, height: 630, alt: "Treatflow Blog" }],
    },
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const posts = getBlogPosts(market);
  if (posts.length === 0) notFound();
  const ui = blogUi[market];
  const dateFmt = new Intl.DateTimeFormat(ui.dateLocale, { dateStyle: "long" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogIndexUrl(market)}#blog`,
    name: ui.indexTitle,
    description: ui.indexDescription,
    url: blogIndexUrl(market),
    inLanguage: market,
    publisher: { "@id": `${BASE_URL}/${market}#organization` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: blogPostUrl(market, post.slug),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
    })),
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {ui.indexEyebrow}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{ui.indexTitle}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{ui.indexSubtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${market}/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={blogTopics[post.topic].image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-sm font-medium text-indigo-600 mb-2">{post.category}</span>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700">{post.title}</h2>
                  <p className="text-gray-600 mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {ui.minRead(post.readMinutes)}
                    </span>
                    <time dateTime={post.updatedAt}>{dateFmt.format(new Date(post.updatedAt))}</time>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-semibold text-indigo-600">
                    {ui.readMore} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={`/${market}/blog/feed.xml`} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600">
              <Rss className="w-4 h-4" /> {ui.rss}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
