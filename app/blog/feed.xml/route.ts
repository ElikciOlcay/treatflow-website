import { NextResponse } from 'next/server'

export async function GET() {
    const baseUrl = 'https://treatflow.io'

    const blogPosts = [
        {
            slug: 'kundenbindung-kosmetikstudio-5-strategien',
            title: '5 bewährte Strategien für mehr Kundenbindung im Kosmetikstudio',
            description: 'Entdecke die wirksamsten Methoden, um Kundinnen langfristig zu binden und die Wiederkehrrate zu erhöhen. Von personalisierten Behandlungen bis zur digitalen Nachbetreuung.',
            publishDate: '2024-12-15T10:00:00.000Z',
            category: 'Kundenbindung'
        },
        {
            slug: 'hautanalyse-beratung-kosmetikstudio',
            title: 'Professionelle Hautanalyse: Der Schlüssel zu erfolgreichen Behandlungen',
            description: 'Eine gründliche Hautanalyse ist die Basis jeder erfolgreichen Kosmetikbehandlung. 7-Schritte Prozess für professionelle Beratung und Kundenbindung.',
            publishDate: '2024-12-12T09:00:00.000Z',
            category: 'Fachkompetenz'
        },
        {
            slug: 'online-buchungssystem-vorteile',
            title: 'Warum jedes Kosmetikstudio 2024 ein Online-Buchungssystem braucht',
            description: 'Online-Buchungen sind kein Luxus mehr, sondern Notwendigkeit. Erfahre, wie du 30% mehr Termine generierst und deine Kundinnen begeisterst.',
            publishDate: '2024-12-10T09:00:00.000Z',
            category: 'Digitalisierung'
        },
        {
            slug: 'kosmetikstudio-eroeffnen-guide',
            title: 'Kosmetikstudio eröffnen: Der ultimative Guide für 2024',
            description: 'Von der ersten Idee bis zur Eröffnung: Alle Schritte, Kosten und Tipps für dein erfolgreiches Kosmetikstudio. Praxiserprobt und rechtssicher.',
            publishDate: '2024-12-08T10:00:00.000Z',
            category: 'Business'
        },
        {
            slug: 'behandlungsdokumentation-nisv-konform',
            title: 'NiSV-konforme Behandlungsdokumentation: Was du wissen musst',
            description: 'Seit der NiSV-Verordnung ist professionelle Dokumentation Pflicht. So dokumentierst du rechtssicher und effizient - ohne Mehraufwand.',
            publishDate: '2024-12-05T11:00:00.000Z',
            category: 'Recht & Compliance'
        },
        {
            slug: 'mitarbeiterfuehrung-beauty-business',
            title: 'Mitarbeiterführung im Beauty-Business: So baust du ein Traumteam auf',
            description: 'Erfolgreiche Kosmetikstudios brauchen mehr als gute Behandlungen - sie brauchen motivierte Mitarbeiter. Führungsstrategien für mehr Erfolg.',
            publishDate: '2024-12-03T08:00:00.000Z',
            category: 'Business'
        },
        {
            slug: 'zusatzumsatz-kosmetikstudio-produkte',
            title: 'Zusatzumsatz generieren: Der ultimative Guide für Produktverkäufe',
            description: 'Bis zu 40% mehr Umsatz durch cleveren Produktverkauf. Welche Produkte funktionieren und wie du sie erfolgreich verkaufst.',
            publishDate: '2024-11-28T10:00:00.000Z',
            category: 'Business'
        },
        {
            slug: 'hygiene-sicherheit-kosmetikstudio',
            title: 'Hygiene und Sicherheit im Kosmetikstudio: Rechtssicher und professionell',
            description: 'Hygieneverordnungen, Desinfektionsvorschriften und Sicherheitsstandards - alles was du für einen rechtssicheren Studiobetrieb wissen musst.',
            publishDate: '2024-11-28T09:00:00.000Z',
            category: 'Recht & Compliance'
        },
        {
            slug: 'saisonales-marketing-beauty-studios',
            title: 'Saisonales Marketing für Beauty-Studios: Das ganze Jahr über erfolgreich',
            description: 'Nutze die Kraft der Jahreszeiten für dein Marketing! Von Frühjahrskuren bis Winterpflege - so planst du saisonale Kampagnen.',
            publishDate: '2024-11-25T10:00:00.000Z',
            category: 'Marketing'
        },
        {
            slug: 'social-media-marketing-kosmetikstudio',
            title: 'Social Media Marketing für Kosmetikstudios: Instagram & TikTok Strategien',
            description: 'Gewinne neue Kundinnen über Social Media. Bewährte Content-Strategien, die wirklich funktionieren - auch mit wenig Zeit.',
            publishDate: '2024-11-20T09:00:00.000Z',
            category: 'Marketing'
        },
        {
            slug: 'preisgestaltung-kosmetikbehandlungen',
            title: 'Preisgestaltung im Kosmetikstudio: Was deine Behandlungen wirklich wert sind',
            description: 'Viele Studios verkaufen sich unter Wert. So kalkulierst du deine Preise richtig und kommunizierst den Wert deiner Arbeit.',
            publishDate: '2024-11-15T10:00:00.000Z',
            category: 'Business'
        }
    ]

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
    ${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
    </item>`).join('')}
  </channel>
</rss>`

    return new NextResponse(rssXml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
        }
    })
}
