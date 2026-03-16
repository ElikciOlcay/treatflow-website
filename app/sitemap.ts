import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.treatflow.io'

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
            url: `${baseUrl}/online-terminbuchung-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
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
            url: `${baseUrl}/terminsoftware-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kundenkartei-kosmetikstudio`,
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
            url: `${baseUrl}/nisv-dokumentation-kosmetikstudio`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        // Geo-Seiten
        {
            url: `${baseUrl}/studio-software-deutschland`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/studio-software-oesterreich`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
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
    ]

    // Blog-Seiten
    const blogRoutes = [
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/beste-kosmetikstudio-software-2026`,
            lastModified: new Date('2026-03-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        // SEO-optimierte Blog-Artikel mit canonical URLs
        {
            url: `${baseUrl}/blog/ki-kosmetikstudio-hautanalyse`,
            lastModified: new Date('2024-12-22'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/anti-aging-trends-2024`,
            lastModified: new Date('2024-12-20'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/kosmetikstudio-buchhaltung-steuern`,
            lastModified: new Date('2024-12-18'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/email-marketing-kosmetikstudios`,
            lastModified: new Date('2024-12-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/kundenbindung-kosmetikstudio-5-strategien`,
            lastModified: new Date('2024-12-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/hautanalyse-beratung-kosmetikstudio`,
            lastModified: new Date('2024-12-12'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/online-buchungssystem-vorteile`,
            lastModified: new Date('2024-12-10'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/kosmetikstudio-eroeffnen-guide`,
            lastModified: new Date('2024-12-08'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/behandlungsdokumentation-nisv-konform`,
            lastModified: new Date('2024-12-05'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/mitarbeiterfuehrung-beauty-business`,
            lastModified: new Date('2024-12-03'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/zusatzumsatz-kosmetikstudio-produkte`,
            lastModified: new Date('2024-11-28'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/hygiene-sicherheit-kosmetikstudio`,
            lastModified: new Date('2024-11-28'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/saisonales-marketing-beauty-studios`,
            lastModified: new Date('2024-11-25'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/social-media-marketing-kosmetikstudio`,
            lastModified: new Date('2024-11-20'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/preisgestaltung-kosmetikbehandlungen`,
            lastModified: new Date('2024-11-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        { url: `${baseUrl}/blog/terminkalender-kosmetikstudio-effizienz`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/nachrichtenautomatisierung-kosmetikstudio`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/landing/dokumentation-formulare`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/no-shows-reduzieren-kosmetikstudio`, lastModified: new Date('2025-01-08'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/anamnese-formulare-digital-kosmetik`, lastModified: new Date('2025-01-05'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/google-business-profil-kosmetikstudio`, lastModified: new Date('2024-12-28'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/wochenplanung-termine-kosmetikstudio`, lastModified: new Date('2024-12-20'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/dsgvo-datenschutz-kosmetikstudio`, lastModified: new Date('2024-12-14'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/erste-kundinnen-gewinnen-kosmetikstudio`, lastModified: new Date('2024-12-10'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/behandlungsraum-einrichten-kosmetikstudio`, lastModified: new Date('2024-12-05'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/lash-wimpern-kundenbindung`, lastModified: new Date('2024-11-28'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/urlaub-vertretung-kosmetikstudio`, lastModified: new Date('2024-11-22'), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/sms-erinnerungen-termine-kosmetikstudio`, lastModified: new Date('2024-11-18'), changeFrequency: 'monthly' as const, priority: 0.8 }
    ]

    return [...staticRoutes, ...blogRoutes]
}