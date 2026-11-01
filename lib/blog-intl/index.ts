import { BASE_URL, contentLanguages, hreflangTags } from "@/app/i18n/config";
import type { BlogArticle, BlogLang, BlogTopicId } from "./types";
import { blogTopicOrder, blogTopics } from "./topics";
import { posts as en } from "./posts/en";
import { posts as tr } from "./posts/tr";
import { posts as nl } from "./posts/nl";
import { posts as it } from "./posts/it";
import { posts as pl } from "./posts/pl";
import { posts as es } from "./posts/es";
import { posts as fr } from "./posts/fr";
import { posts as de } from "./posts/de";

export type { BlogArticle, BlogLang, BlogTopicId } from "./types";
export { blogTopics } from "./topics";

const byLang: Record<BlogLang, BlogArticle[]> = { de, en, tr, nl, it, pl, es, fr };

function sortByTopic(list: BlogArticle[]): BlogArticle[] {
  return [...list].sort(
    (a, b) =>
      b.publishedAt.localeCompare(a.publishedAt) ||
      blogTopicOrder.indexOf(a.topic) - blogTopicOrder.indexOf(b.topic)
  );
}

export function getBlogPosts(lang: BlogLang): BlogArticle[] {
  return sortByTopic(byLang[lang] ?? []);
}

export function getBlogPost(lang: BlogLang, slug: string): BlogArticle | undefined {
  return byLang[lang]?.find((post) => post.slug === slug);
}

/** Pfad-Basis des Blogs: /blog (DE) bzw. /{lang}/blog. */
export function blogBasePath(lang: BlogLang): string {
  return lang === "de" ? "/blog" : `/${lang}/blog`;
}

export function blogIndexUrl(lang: BlogLang): string {
  return `${BASE_URL}${blogBasePath(lang)}`;
}

export function blogPostUrl(lang: BlogLang, slug: string): string {
  return `${BASE_URL}${blogBasePath(lang)}/${slug}`;
}

/** hreflang aller Sprachfassungen eines Themas inkl. deutscher Fassung unter /blog. */
export function blogTopicAlternates(topic: BlogTopicId): Record<string, string> {
  const languages: Record<string, string> = {};
  const dePost = byLang.de.find((item) => item.topic === topic);
  const deSlug = dePost?.slug ?? blogTopics[topic].deSlug;
  if (deSlug) languages.de = blogPostUrl("de", deSlug);
  for (const lang of contentLanguages) {
    const post = byLang[lang]?.find((item) => item.topic === topic);
    if (post) languages[hreflangTags[lang]] = blogPostUrl(lang, post.slug);
  }
  languages["x-default"] = languages.en ?? languages.de;
  return languages;
}

/** hreflang der Blog-Uebersichten. */
export function blogIndexAlternates(): Record<string, string> {
  const languages: Record<string, string> = { de: `${BASE_URL}/blog` };
  for (const lang of contentLanguages) {
    if (byLang[lang]?.length) languages[hreflangTags[lang]] = blogIndexUrl(lang);
  }
  languages["x-default"] = languages.en ?? languages.de;
  return languages;
}

/** Thema einer deutschen Blog-URL (fuer hreflang auf /blog/<slug>). */
export function topicForDeSlug(deSlug: string): BlogTopicId | undefined {
  const dePost = byLang.de.find((item) => item.slug === deSlug);
  if (dePost) return dePost.topic;
  return (Object.keys(blogTopics) as BlogTopicId[]).find(
    (topic) => blogTopics[topic].deSlug === deSlug
  );
}

/** Alle Artikel unter /{lang}/blog (ohne DE, das laeuft ueber lib/blogPosts.ts). */
export function allBlogPosts(): BlogArticle[] {
  return contentLanguages.flatMap((lang) => byLang[lang] ?? []);
}
