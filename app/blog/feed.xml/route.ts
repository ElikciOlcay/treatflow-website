import { NextResponse } from 'next/server'
import { blogPosts } from '@/lib/blogPosts'

export async function GET() {
    const baseUrl = 'https://www.treatflow.io'

    const sorted = [...blogPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Treatflow Blog - Expertentipps für Kosmetikstudios</title>
    <description>Praktische Tipps und bewährte Strategien für mehr Erfolg in deinem Beauty-Business. Von Kundenbindung bis Digitalisierung.</description>
    <link>${baseUrl}/blog</link>
    <language>de-DE</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/logos/treatflow-logo.png</url>
      <title>Treatflow Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${sorted.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.publishedAt}T09:00:00.000Z`).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
    </item>`).join('')}
  </channel>
</rss>`

    return new NextResponse(rssXml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
    })
}
