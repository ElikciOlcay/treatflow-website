/**
 * Prueft den mehrsprachigen Blog (lib/blog-intl) vor dem Merge.
 * Aufruf: npx tsx scripts/check-blog.ts  → Exit 1 bei Fehlern.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { contentLanguages } from "../app/i18n/config";
import { seoPageSlugs } from "../app/i18n/seo";
import { blogTopics } from "../lib/blog-intl/topics";
import { getBlogPosts, blogPostUrl } from "../lib/blog-intl";
import type { BlogArticle, BlogLang, BlogTopicId } from "../lib/blog-intl/types";

const root = join(__dirname, "..");
const errors: string[] = [];
const warnings: string[] = [];
const langs: BlogLang[] = ["de", ...contentLanguages];

/** DACH-only-Themen, die im internationalen Blog nicht vorkommen duerfen. */
const FORBIDDEN = /\b(NiSV|TSE|RKSV|Registrierkasse|Treatflow Pay|KassenSichV|DSFinV)\b/;

const topicIds = Object.keys(blogTopics) as BlogTopicId[];

for (const topic of topicIds) {
  const meta = blogTopics[topic];
  if (!existsSync(join(root, "public", meta.image))) errors.push(`[${topic}] Bild fehlt: ${meta.image}`);
  if (meta.deSlug && !existsSync(join(root, "app/(de)/blog", meta.deSlug, "page.tsx"))) {
    errors.push(`[${topic}] deSlug zeigt auf keine Seite: app/(de)/blog/${meta.deSlug}/page.tsx`);
  }
}

for (const lang of langs) {
  const posts = getBlogPosts(lang);
  const slugs = new Set<string>();
  const llmsFile = join(root, "public", lang === "de" ? "llms.txt" : `llms-${lang}.txt`);
  const llms = existsSync(llmsFile) ? readFileSync(llmsFile, "utf8") : "";

  for (const topic of topicIds) {
    const has = posts.some((p) => p.topic === topic);
    if (lang === "de") {
      if (!has && !blogTopics[topic].deSlug) errors.push(`[${topic}] keine deutsche Fassung (posts/de.ts oder deSlug)`);
      if (has && blogTopics[topic].deSlug) errors.push(`[${topic}] deutsche Fassung doppelt (posts/de.ts UND deSlug)`);
    } else if (!has) {
      errors.push(`[${topic}] Artikel fehlt in ${lang}`);
    }
  }

  for (const post of posts) checkPost(post, lang, slugs, llms);
}

function checkPost(post: BlogArticle, lang: BlogLang, slugs: Set<string>, llms: string) {
  const id = `[${lang}/${post.slug}]`;
  if (post.lang !== lang) errors.push(`${id} lang ist "${post.lang}"`);
  if (!blogTopics[post.topic]) errors.push(`${id} unbekanntes Thema ${post.topic}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) errors.push(`${id} Slug nicht ASCII/kebab-case`);
  if (slugs.has(post.slug)) errors.push(`${id} Slug doppelt`);
  slugs.add(post.slug);
  if (lang === "de" && existsSync(join(root, "app/(de)/blog", post.slug))) {
    errors.push(`${id} kollidiert mit bestehendem Ordner app/(de)/blog/${post.slug}`);
  }
  if (post.metaTitle.length > 60) errors.push(`${id} metaTitle ${post.metaTitle.length} > 60 Zeichen`);
  if (post.description.length < 110 || post.description.length > 165) {
    errors.push(`${id} description ${post.description.length} Zeichen (110–165)`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.publishedAt) || !/^\d{4}-\d{2}-\d{2}$/.test(post.updatedAt)) {
    errors.push(`${id} Datum nicht YYYY-MM-DD`);
  }
  if (!post.answer.trim()) errors.push(`${id} answer leer`);
  if (post.takeaways.length < 3 || post.takeaways.length > 6) errors.push(`${id} ${post.takeaways.length} takeaways (3–6)`);
  if (post.sections.length < 4) errors.push(`${id} nur ${post.sections.length} Abschnitte`);
  if (post.faq.length < 4) errors.push(`${id} nur ${post.faq.length} FAQ`);
  if (post.keywords.length < 3) errors.push(`${id} zu wenige keywords`);

  for (const link of post.related) {
    const slugMap = seoPageSlugs[link.pageKey];
    if (!slugMap) errors.push(`${id} unbekannter pageKey ${link.pageKey}`);
    else if (slugMap[lang] === undefined) errors.push(`${id} pageKey ${link.pageKey} gibt es in ${lang} nicht`);
  }
  for (const source of post.sources ?? []) {
    if (!/^https:\/\//.test(source.url)) errors.push(`${id} Quelle ohne https: ${source.url}`);
  }

  const text = JSON.stringify(post);
  const forbidden = text.match(FORBIDDEN);
  if (forbidden) errors.push(`${id} DACH-only-Begriff "${forbidden[0]}"`);

  const words = [post.answer, ...post.intro, ...post.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? []), ...(s.steps ?? [])])]
    .join(" ")
    .split(/\s+/).length;
  if (words < 900) warnings.push(`${id} nur ~${words} Woerter`);

  if (llms && !llms.includes(blogPostUrl(lang, post.slug))) warnings.push(`${id} fehlt in ${lang === "de" ? "llms.txt" : `llms-${lang}.txt`}`);
}

for (const w of warnings) console.warn(`WARN  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);
console.log(`\n${topicIds.length} Themen, ${langs.length} Sprachen: ${errors.length} Fehler, ${warnings.length} Warnungen`);
process.exit(errors.length ? 1 : 0);
