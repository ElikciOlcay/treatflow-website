import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogPosts'
import { buildHreflangAlternates, type SeoPageKey } from '@/app/i18n/seo'

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
    const enRoutes = [
        internationalEntry('/en', 'home', 0.9),
        internationalEntry('/en/pricing', 'pricing', 0.8),
        internationalEntry('/en/early-access', 'early-access', 0.85),
        internationalEntry('/en/appointment-calendar', 'appointment-calendar', 0.8),
        internationalEntry('/en/online-booking', 'online-booking', 0.8),
        internationalEntry('/en/client-records', 'client-records', 0.8),
        internationalEntry('/en/forms', 'forms', 0.8),
        internationalEntry('/en/treatment-documentation', 'treatment-documentation', 0.8),
        internationalEntry('/en/beauty-salon-software', 'beauty-salon-software', 0.85),
        internationalEntry('/en/aesthetic-clinic-software', 'aesthetic-clinic-software', 0.85),
        internationalEntry('/en/laser-hair-removal-software', 'laser-hair-removal-software', 0.85),
        internationalEntry('/en/about', 'about', 0.6),
        internationalEntry('/en/contact', 'contact', 0.6),
        internationalEntry('/en/privacy', 'privacy', 0.3),
        internationalEntry('/en/terms', 'terms', 0.3),
    ]

    const esRoutes = [
        internationalEntry('/es', 'home', 0.9),
        internationalEntry('/es/precios', 'pricing', 0.8),
        internationalEntry('/es/acceso-anticipado', 'early-access', 0.85),
        internationalEntry('/es/calendario-citas', 'appointment-calendar', 0.8),
        internationalEntry('/es/reservas-online', 'online-booking', 0.8),
        internationalEntry('/es/fichas-clientes', 'client-records', 0.8),
        internationalEntry('/es/formularios', 'forms', 0.8),
        internationalEntry('/es/documentacion-tratamientos', 'treatment-documentation', 0.8),
        internationalEntry('/es/software-salon-belleza', 'beauty-salon-software', 0.85),
        internationalEntry('/es/sobre-nosotros', 'about', 0.6),
        internationalEntry('/es/contacto', 'contact', 0.6),
        internationalEntry('/es/privacidad', 'privacy', 0.3),
        internationalEntry('/es/terminos', 'terms', 0.3),
    ]

    const itRoutes = [
        internationalEntry('/it', 'home', 0.9),
        internationalEntry('/it/prezzi', 'pricing', 0.8),
        internationalEntry('/it/accesso-anticipato', 'early-access', 0.85),
        internationalEntry('/it/calendario-appuntamenti', 'appointment-calendar', 0.8),
        internationalEntry('/it/prenotazioni-online', 'online-booking', 0.8),
        internationalEntry('/it/schede-clienti', 'client-records', 0.8),
        internationalEntry('/it/moduli', 'forms', 0.8),
        internationalEntry('/it/documentazione-trattamenti', 'treatment-documentation', 0.8),
        internationalEntry('/it/software-centro-estetico', 'beauty-salon-software', 0.85),
        internationalEntry('/it/chi-siamo', 'about', 0.6),
        internationalEntry('/it/contatto', 'contact', 0.6),
        internationalEntry('/it/privacy', 'privacy', 0.3),
        internationalEntry('/it/termini', 'terms', 0.3),
    ]

    const frRoutes = [
        internationalEntry('/fr', 'home', 0.9),
        internationalEntry('/fr/tarifs', 'pricing', 0.8),
        internationalEntry('/fr/acces-anticipe', 'early-access', 0.85),
        internationalEntry('/fr/calendrier-rendez-vous', 'appointment-calendar', 0.8),
        internationalEntry('/fr/reservation-en-ligne', 'online-booking', 0.8),
        internationalEntry('/fr/fiches-clients', 'client-records', 0.8),
        internationalEntry('/fr/formulaires', 'forms', 0.8),
        internationalEntry('/fr/documentation-soins', 'treatment-documentation', 0.8),
        internationalEntry('/fr/logiciel-institut-beaute', 'beauty-salon-software', 0.85),
        internationalEntry('/fr/a-propos', 'about', 0.6),
        internationalEntry('/fr/contact', 'contact', 0.6),
        internationalEntry('/fr/confidentialite', 'privacy', 0.3),
        internationalEntry('/fr/conditions', 'terms', 0.3),
    ]

    const blogIndex = {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }

    const neuigkeitenIndex = {
        url: `${baseUrl}/neuigkeiten`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
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
        ...enRoutes,
        ...esRoutes,
        ...itRoutes,
        ...frRoutes,
        blogIndex,
        neuigkeitenIndex,
        ...blogRoutes,
        ...landingRoutes,
        ...aiDiscoveryRoutes,
    ]
}