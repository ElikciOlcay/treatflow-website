import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogPosts'
import { buildHreflangAlternates, seoPageSlugs, type SeoPageKey } from '@/app/i18n/seo'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.treatflow.io'

    function internationalEntry(path: string, pageKey: SeoPageKey, priority: number) {
        return {
            url: `${baseUrl}${path}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority,
            alternates: buildHreflangAlternates(pageKey),
        }
    }

    // Statische Seiten
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/terminkalender`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kundenverwaltung`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/formulare`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/behandlungsdokumentation`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/online-buchungen`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kassensystem-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kosmetikstudio-kasse`,
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
        {
            url: `${baseUrl}/integrationen`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/shop`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
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
        },
        {
            url: `${baseUrl}/datenschutz`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/ueber-uns`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/nisv-dokumentation`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kosmetikstudio-software-vergleich`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/funktionen`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kosmetikstudio-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/laser-haarentfernung-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/permanent-makeup-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/aesthetische-medizin-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tattoo-studio-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/nachrichtenautomatisierung`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // Neue Branchen-Seiten
        {
            url: `${baseUrl}/nagelstudio-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/lash-studio-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/spa-wellness-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/massage-software`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        // Feature-Seiten
        {
            url: `${baseUrl}/digitale-anamnese-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/sms-erinnerungen-kosmetikstudio`,
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
        {
            url: `${baseUrl}/website-fuer-kosmetikstudios`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
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
        {
            url: `${baseUrl}/treatflow-vs-treatwell`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/treatflow-vs-fresha`,
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
        {
            url: `${baseUrl}/preise`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
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
        { key: 'online-booking', priority: 0.8 },
        { key: 'client-records', priority: 0.8 },
        { key: 'forms', priority: 0.8 },
        { key: 'treatment-documentation', priority: 0.8 },
        { key: 'vouchers', priority: 0.8 },
        { key: 'messaging', priority: 0.8 },
        { key: 'integrations', priority: 0.8 },
        { key: 'features', priority: 0.8 },
        { key: 'shop', priority: 0.75 },
        { key: 'studio-website', priority: 0.75 },
        { key: 'beauty-salon-software', priority: 0.85 },
        { key: 'aesthetic-clinic-software', priority: 0.85 },
        { key: 'laser-hair-removal-software', priority: 0.85 },
        { key: 'permanent-makeup-software', priority: 0.85 },
        { key: 'tattoo-studio-software', priority: 0.85 },
        { key: 'nail-salon-software', priority: 0.85 },
        { key: 'lash-studio-software', priority: 0.85 },
        { key: 'spa-wellness-software', priority: 0.85 },
        { key: 'massage-software', priority: 0.85 },
    ]

    const sharedKeys: { key: SeoPageKey; priority: number }[] = [
        { key: 'pricing', priority: 0.8 },
        { key: 'early-access', priority: 0.85 },
        { key: 'about', priority: 0.6 },
        { key: 'contact', priority: 0.6 },
        { key: 'privacy', priority: 0.3 },
        { key: 'terms', priority: 0.3 },
    ]

    const localePrefixes = {
        us: '/us',
        nl: '/nl',
        uk: '/uk',
        fi: '/fi',
        ie: '/ie',
        ca: '/ca',
        au: '/au',
        ae: '/ae',
    } as const

    function localeRoutes(locale: keyof typeof localePrefixes) {
        const prefix = localePrefixes[locale]
        const home = internationalEntry(prefix, 'home', 0.9)
        const rest = [...sharedKeys, ...featureAndIndustryKeys]
            .map(({ key, priority }) => {
                const slug = seoPageSlugs[key]?.[locale]
                if (slug === undefined) return null
                return internationalEntry(`${prefix}/${slug}`, key, priority)
            })
            .filter(Boolean) as ReturnType<typeof internationalEntry>[]
        return [home, ...rest]
    }

    const marketRoutes = (Object.keys(localePrefixes) as (keyof typeof localePrefixes)[])
        .flatMap((market) => localeRoutes(market))

    const neuigkeitenIndex = {
        url: `${baseUrl}/neuigkeiten`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }

    const blogIndex = {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: post.featured ? 0.9 : 0.8,
    }))

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
    ]

    return [
        ...staticRoutes,
        ...marketRoutes,
        neuigkeitenIndex,
        blogIndex,
        ...blogRoutes,
        ...landingRoutes,
        ...aiDiscoveryRoutes,
    ]
}