import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleView from "@/app/components/blog-intl/BlogArticleView";
import { BASE_URL, isPrefixedMarket, ogLocaleTags, type PrefixedMarket } from "@/app/i18n/config";
import { allBlogPosts, blogPostUrl, blogTopicAlternates, blogTopics, getBlogPost, getBlogPosts } from "@/lib/blog-intl";
import { blogUi } from "@/lib/blog-intl/ui";

export function generateStaticParams() {
  return allBlogPosts().map((post) => ({ market: post.lang, slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string; slug: string }>;
}): Promise<Metadata> {
  const { market, slug } = await params;
  if (!isPrefixedMarket(market)) return {};
  const post = getBlogPost(market, slug);
  if (!post) return {};
  const url = blogPostUrl(market, slug);
  const image = `${BASE_URL}${blogTopics[post.topic].image}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: blogUi[market].author }],
    alternates: { canonical: url, languages: blogTopicAlternates(post.topic) },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Treatflow",
      type: "article",
      locale: ogLocaleTags[market],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ market: string; slug: string }>;
}) {
  const { market: raw, slug } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const post = getBlogPost(market, slug);
  if (!post) notFound();
  const more = getBlogPosts(market).filter((item) => item.slug !== slug).slice(0, 3);
  return <BlogArticleView post={post} market={market} more={more} />;
}
