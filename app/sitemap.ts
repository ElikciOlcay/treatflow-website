import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogPosts'
import { DEMO_FORMS, DEMO_LOCALES, demoFormAlternates } from '@/lib/demoForms'
import { buildHreflangAlternates, seoPageSlugs, type SeoPageKey } from '@/app/i18n/seo'
import { TR_PATHS } from '@/app/i18n/tr-seo/paths'
import { trGuides } from '@/app/i18n/tr-seo/guides'
import { contentLanguages, marketPathPrefix, prefixedMarkets, type Market, type PrefixedMarket } from '@/app/i18n/config'
import { pageLastModified } from '@/app/site/page-dates'
import {
    allBlogPosts,
    blogIndexAlternates,
    blogIndexUrl,
    blogPostUrl,
    blogTopicAlternates,
    getBlogPosts,
    topicForDeSlug,
} from '@/lib/blog-intl'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.treatflow.io'

    function internationalEntry(path: string, pageKey: SeoPageKey, priority: number, market?: Market) {
        return {
            url: `${baseUrl}${path}`,
            lastModified: (market && pageLastModified(pageKey, market)) || new Date(),
            changeFrequency: 'monthly' as const,
            priority,
            alternates: buildHreflangAlternates(pageKey),
        }
    }

    // Statische Seiten
    const staticRoutes = [
        internationalEntry('', 'home', 1, 'de'),
        internationalEntry('/terminkalender', 'appointment-calendar', 0.8, 'de'),
        internationalEntry('/kundenverwaltung', 'client-records', 0.8, 'de'),
        internationalEntry('/formulare', 'forms', 0.8, 'de'),
        internationalEntry('/funktionen-live-testen', 'try-features', 0.7, 'de'),
        internationalEntry('/formulare-testen', 'try-forms', 0.8),
        ...DEMO_FORMS.flatMap((form) => {
            const { languages } = demoFormAlternates('de', form.slug)
            return DEMO_LOCALES.map((locale) => languages[locale]).map((url) => ({
                url,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
                alternates: { languages },
            }))
        }),
        internationalEntry('/behandlungsdokumentation', 'treatment-documentation', 0.8, 'de'),
        internationalEntry('/online-buchungen', 'online-booking', 0.8, 'de'),
        internationalEntry('/treatflow-pay', 'treatflow-pay', 0.8, 'de'),
        {
            url: `${baseUrl}/kassensystem-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kassensystem-kosmetikstudio-deutschland`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/registrierkasse-kosmetikstudio-oesterreich`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kasse-mit-kundenkartei-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gutscheine-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        internationalEntry('/integrationen', 'integrations', 0.8, 'de'),
        internationalEntry('/shop', 'shop', 0.8, 'de'),
        internationalEntry('/kontakt', 'contact', 0.6, 'de'),
        {
            url: `${baseUrl}/impressum`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/agb`,
            lastModified: new Date('2026-08-19'),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
            alternates: buildHreflangAlternates('terms'),
        },
        {
            url: `${baseUrl}/datenschutz`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
            alternates: buildHreflangAlternates('privacy'),
        },
        internationalEntry('/ueber-uns', 'about', 0.6, 'de'),
        {
            url: `${baseUrl}/nisv-dokumentation`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        internationalEntry('/kosmetikstudio-software-vergleich', 'software-comparison', 0.8, 'de'),
        internationalEntry('/funktionen', 'features', 0.9, 'de'),
        internationalEntry('/kosmetikstudio-software', 'beauty-salon-software', 0.9, 'de'),
        internationalEntry('/laser-haarentfernung-software', 'laser-hair-removal-software', 0.9, 'de'),
        internationalEntry('/permanent-makeup-software', 'permanent-makeup-software', 0.9, 'de'),
        internationalEntry('/aesthetische-medizin-software', 'aesthetic-clinic-software', 0.9, 'de'),
        internationalEntry('/tattoo-studio-software', 'tattoo-studio-software', 0.9, 'de'),
        internationalEntry('/nachrichtenautomatisierung', 'messaging', 0.8, 'de'),
        internationalEntry('/kunden-workflows', 'customer-workflows', 0.8, 'de'),
        // Neue Branchen-Seiten
        {
            url: `${baseUrl}/fusspflege-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        internationalEntry('/nagelstudio-software', 'nail-salon-software', 0.9, 'de'),
        internationalEntry('/lash-studio-software', 'lash-studio-software', 0.9, 'de'),
        internationalEntry('/spa-wellness-software', 'spa-wellness-software', 0.9, 'de'),
        internationalEntry('/massage-software', 'massage-software', 0.9, 'de'),
        // Feature-Seiten
        {
            url: `${baseUrl}/digitale-anamnese-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/behandlungsdokumentation-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // SEO-Cluster Kosmetikstudio
        {
            url: `${baseUrl}/kundenkartei-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/anamnesebogen-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/anamnesebogen-kosmetik-vorlage-pdf`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/nisv-dokumentation-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        // Geo-Seiten
        {
            url: `${baseUrl}/kosmetikstudio-software-deutschland`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kosmetikstudio-software-oesterreich`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kosmetikstudio-software-wien`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/kosmetikstudio-software-berlin`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/laserstudio-software-deutschland`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/permanent-makeup-software-deutschland`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        internationalEntry('/website-fuer-kosmetikstudios', 'studio-website', 0.8, 'de'),
        {
            url: `${baseUrl}/hygieneplan-kosmetikstudio-pdf`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/nisv-checkliste-kosmetikstudio-pdf`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kundenkartei-vorlage-kosmetikstudio-pdf`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/no-show-playbook-kosmetikstudio-pdf`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/preisliste-vorlage-kosmetikstudio-pdf`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/schoenheitssalon-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        internationalEntry('/treatflow-vs-treatwell', 'treatflow-vs-treatwell', 0.9, 'de'),
        internationalEntry('/treatflow-vs-fresha', 'treatflow-vs-fresha', 0.9, 'de'),
        {
            url: `${baseUrl}/shore-alternative`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/treatflow-vs-shore`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        internationalEntry('/preise', 'pricing', 0.9, 'de'),
        {
            url: `${baseUrl}/treatflow-vs-timely`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kosmetikstudio-software-kostenlos`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
    ]

    // Internationale Seiten (kuratiert). Blog ist bewusst NICHT enthalten.
    const featureAndIndustryKeys: { key: SeoPageKey; priority: number }[] = [
        { key: 'appointment-calendar', priority: 0.8 },
        { key: 'online-booking', priority: 0.9 },
        { key: 'client-records', priority: 0.9 },
        { key: 'forms', priority: 0.8 },
        { key: 'try-forms', priority: 0.8 },
        { key: 'try-features', priority: 0.7 },
        { key: 'treatment-documentation', priority: 0.8 },
        { key: 'vouchers', priority: 0.8 },
        { key: 'messaging', priority: 0.8 },
        { key: 'customer-workflows', priority: 0.8 },
        { key: 'treatflow-pay', priority: 0.8 },
        { key: 'integrations', priority: 0.8 },
        { key: 'features', priority: 0.8 },
        { key: 'shop', priority: 0.75 },
        { key: 'studio-website', priority: 0.75 },
        { key: 'beauty-center-software', priority: 0.95 },
        { key: 'beauty-salon-software', priority: 0.9 },
        { key: 'aesthetic-clinic-software', priority: 0.85 },
        { key: 'laser-hair-removal-software', priority: 0.9 },
        { key: 'permanent-makeup-software', priority: 0.85 },
        { key: 'tattoo-studio-software', priority: 0.85 },
        { key: 'nail-salon-software', priority: 0.85 },
        { key: 'lash-studio-software', priority: 0.85 },
        { key: 'spa-wellness-software', priority: 0.85 },
        { key: 'massage-software', priority: 0.85 },
    ]

    const sharedKeys: { key: SeoPageKey; priority: number }[] = [
        { key: 'pricing', priority: 0.9 },
        { key: 'about', priority: 0.6 },
        { key: 'contact', priority: 0.6 },
        { key: 'privacy', priority: 0.3 },
        { key: 'terms', priority: 0.3 },
        { key: 'news', priority: 0.8 },
        { key: 'treatflow-vs-fresha', priority: 0.85 },
        { key: 'treatflow-vs-treatwell', priority: 0.85 },
        { key: 'software-comparison', priority: 0.85 },
    ]

    function localeRoutes(locale: PrefixedMarket) {
        const prefix = marketPathPrefix[locale]
        const home = internationalEntry(prefix, 'home', 0.9, locale)
        const rest = [...sharedKeys, ...featureAndIndustryKeys]
            .map(({ key, priority }) => {
                const slug = seoPageSlugs[key]?.[locale]
                if (slug === undefined) return null
                return internationalEntry(`${prefix}/${slug}`, key, priority, locale)
            })
            .filter(Boolean) as ReturnType<typeof internationalEntry>[]
        return [home, ...rest]
    }

    const marketRoutes = prefixedMarkets.flatMap((market) => localeRoutes(market))

    // Internationaler Blog (/{lang}/blog) mit hreflang je Thema
    const intlBlogRoutes = [
        ...contentLanguages
            .filter((lang) => getBlogPosts(lang).length > 0)
            .map((lang) => ({
                url: blogIndexUrl(lang),
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.8,
                alternates: { languages: blogIndexAlternates() },
            })),
        ...allBlogPosts().map((post) => ({
            url: blogPostUrl(post.lang, post.slug),
            lastModified: new Date(post.updatedAt),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
            alternates: { languages: blogTopicAlternates(post.topic) },
        })),
    ]

    const neuigkeitenIndex = {
        url: `${baseUrl}/neuigkeiten`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: buildHreflangAlternates('news'),
    }

    const blogIndex = {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: { languages: blogIndexAlternates() },
    }

    const blogRoutes = blogPosts.map((post) => {
        const topic = topicForDeSlug(post.slug)
        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: 'monthly' as const,
            priority: post.featured ? 0.9 : 0.8,
            ...(topic ? { alternates: { languages: blogTopicAlternates(topic) } } : {}),
        }
    })

    const landingRoutes = [
        {
            url: `${baseUrl}/landing/dokumentation-formulare`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/landing/heilmasseur-software-oesterreich`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ]

    const aiDiscoveryRoutes = [
        {
            url: `${baseUrl}/llms.txt`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        },
        ...['en', 'tr', 'nl', 'it', 'pl', 'es', 'fr'].map((lang) => ({
            url: `${baseUrl}/llms-${lang}.txt`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        })),
        {
            url: `${baseUrl}/llms-full.txt`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/api/facts`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        },
        ...prefixedMarkets.map((lang) => ({
            url: `${baseUrl}/api/facts?lang=${lang}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        })),
    ]

    const trGuideRoutes = [
        {
            url: `${baseUrl}${TR_PATHS.guidesHub}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        ...trGuides.map((guide) => ({
            url: `${baseUrl}${guide.path}`,
            lastModified: new Date(guide.dateModified),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        })),
    ]

    return [
        ...staticRoutes,
        ...marketRoutes,
        ...trGuideRoutes,
        ...intlBlogRoutes,
        neuigkeitenIndex,
        blogIndex,
        ...blogRoutes,
        ...landingRoutes,
        ...aiDiscoveryRoutes,
    ]
}