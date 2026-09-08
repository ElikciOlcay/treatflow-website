/**
 * Zentrale Helper fuer Schema.org-/JSON-LD-Markup.
 * Genutzt fuer FAQPage, Service, Article u. a.
 */

export type FaqEntry = {
    question: string;
    answer: string;
};

/**
 * Erzeugt valides Schema.org `FAQPage`-Markup aus einer Liste von Fragen.
 * Im Markup darf der `answer.text` kein HTML enthalten - Plain Text only.
 */
export function generateFaqSchema(faqs: FaqEntry[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Erzeugt Schema.org `Service`-Markup fuer Branchen-/Service-Seiten.
 */
export function generateServiceSchema(params: {
    name: string;
    description: string;
    url: string;
    serviceType?: string;
    areaServed?: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: params.name,
        description: params.description,
        url: params.url,
        ...(params.serviceType ? { serviceType: params.serviceType } : {}),
        provider: {
            '@type': 'Organization',
            name: 'Treatflow',
            url: 'https://www.treatflow.io',
        },
        areaServed: params.areaServed ?? ['DE', 'AT', 'CH'],
    };
}

export function generateSoftwareApplicationSchema(params: {
    name: string;
    description: string;
    url: string;
    inLanguage: string;
    applicationCategory?: string;
    offers?: {
        price: string;
        priceCurrency: string;
        description: string;
    };
    aggregateRating?: {
        ratingValue: string;
        reviewCount: string;
        bestRating?: string;
    };
    featureList?: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: params.name,
        description: params.description,
        url: params.url,
        inLanguage: params.inLanguage,
        applicationCategory: params.applicationCategory ?? 'BusinessApplication',
        operatingSystem: 'Web',
        provider: {
            '@type': 'Organization',
            name: 'Treatflow',
            url: 'https://www.treatflow.io',
        },
        ...(params.offers
            ? {
                  offers: {
                      '@type': 'Offer',
                      price: params.offers.price,
                      priceCurrency: params.offers.priceCurrency,
                      description: params.offers.description,
                  },
              }
            : {}),
        ...(params.aggregateRating
            ? {
                  aggregateRating: {
                      '@type': 'AggregateRating',
                      ratingValue: params.aggregateRating.ratingValue,
                      reviewCount: params.aggregateRating.reviewCount,
                      bestRating: params.aggregateRating.bestRating ?? '5',
                  },
              }
            : {}),
        ...(params.featureList?.length ? { featureList: params.featureList } : {}),
    };
}

export function generateArticleSchema(params: {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
    inLanguage: string;
    image?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: params.headline,
        description: params.description,
        url: params.url,
        datePublished: params.datePublished,
        dateModified: params.dateModified,
        inLanguage: params.inLanguage,
        author: {
            '@type': 'Person',
            name: 'Olcay Elikci',
            jobTitle: 'Founder',
            url: 'https://www.treatflow.io/ueber-uns',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Treatflow',
            url: 'https://www.treatflow.io',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.treatflow.io/images/logos/treatflow-logo.png',
            },
        },
        ...(params.image ? { image: params.image } : {}),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': params.url,
        },
    };
}

export function generateWebPageSchemaIntl(params: {
    name: string;
    description: string;
    url: string;
    inLanguage: string;
    dateModified: string;
    datePublished?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: params.name,
        description: params.description,
        url: params.url,
        inLanguage: params.inLanguage,
        dateModified: params.dateModified,
        ...(params.datePublished ? { datePublished: params.datePublished } : {}),
        isPartOf: {
            '@type': 'WebSite',
            name: 'Treatflow',
            url: 'https://www.treatflow.io',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Treatflow',
            url: 'https://www.treatflow.io',
        },
    };
}
