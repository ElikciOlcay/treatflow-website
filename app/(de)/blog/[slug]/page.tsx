import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import BlogArticleView from "@/app/components/blog-intl/BlogArticleView";
import { BASE_URL } from "@/app/i18n/config";
import { blogPostUrl, blogTopicAlternates, blogTopics, getBlogPost, getBlogPosts } from "@/lib/blog-intl";
import { blogUi } from "@/lib/blog-intl/ui";

/**
 * Deutsche Artikel aus lib/blog-intl/posts/de.ts. Aeltere Artikel mit eigenem
 * Ordner unter app/blog/<slug>/ haben Vorrang (statische Route).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogPosts("de").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("de", slug);
  if (!post) return {};
  const url = blogPostUrl("de", slug);
  const image = `${BASE_URL}${blogTopics[post.topic].image}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: blogUi.de.author }],
    alternates: { canonical: url, languages: blogTopicAlternates(post.topic) },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Treatflow Blog",
      type: "article",
      locale: "de_DE",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}

export default async function GermanBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost("de", slug);
  if (!post) notFound();
  const more = getBlogPosts("de").filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BlogArticleView post={post} market="de" more={more} />
      <Footer />
    </div>
  );
}
