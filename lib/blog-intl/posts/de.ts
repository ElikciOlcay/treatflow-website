import type { BlogArticle } from "../types";

/**
 * Deutsche Artikel im datengetriebenen Format (gerendert unter /blog/<slug>).
 * Aeltere deutsche Artikel liegen als eigene Seiten unter app/blog/<slug>/.
 * Eintraege hier erscheinen automatisch in Blog-Uebersicht, Sitemap und RSS
 * (siehe lib/blogPosts.ts).
 */
export const posts: BlogArticle[] = [];
