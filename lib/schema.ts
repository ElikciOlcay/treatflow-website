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
