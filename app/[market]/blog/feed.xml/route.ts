import { isPrefixedMarket } from "@/app/i18n/config";
import { blogIndexUrl, blogPostUrl, getBlogPosts } from "@/lib/blog-intl";
import { blogUi } from "@/lib/blog-intl/ui";

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET(_request: Request, { params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  if (!isPrefixedMarket(market)) return new Response("Not found", { status: 404 });
  const posts = getBlogPosts(market);
  const ui = blogUi[market];
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${blogPostUrl(market, post.slug)}</link>
      <guid isPermaLink="true">${blogPostUrl(market, post.slug)}</guid>
      <description>${escape(post.excerpt)}</description>
      <category>${escape(post.category)}</category>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(ui.indexTitle)}</title>
    <link>${blogIndexUrl(market)}</link>
    <description>${escape(ui.indexDescription)}</description>
    <language>${market}</language>
    <atom:link href="${blogIndexUrl(market)}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
