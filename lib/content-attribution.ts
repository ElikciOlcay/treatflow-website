/**
 * Zentrale Content-Attribution fuer E-E-A-T und AI-Citations.
 * Sichtbar auf der Seite + als WebPage-Schema (dateModified, author).
 */

export const TREATFLOW_PUBLISHER = {
  name: "Treatflow",
  url: "https://www.treatflow.io",
  logo: "https://www.treatflow.io/images/logos/treatflow-logo.png",
} as const;

export const TREATFLOW_AUTHORS = {
  olcay: {
    name: "Olcay Elikci",
    jobTitle: "Founder",
    url: "https://www.treatflow.io/ueber-uns",
    description:
      "Gründer von Treatflow. Entwickelt Software für Kosmetikstudios, ästhetische Praxen und Beauty-Betriebe.",
  },
  goekce: {
    name: "Gökce Elikci",
    jobTitle: "Co-Founder",
    url: "https://www.treatflow.io/ueber-uns",
    description:
      "Mitgründerin von Treatflow und ausgebildete Kosmetikerin. Verantwortet Produktnähe zur Studio-Praxis.",
  },
} as const;

export type TreatflowAuthorKey = keyof typeof TREATFLOW_AUTHORS;

export function formatDeDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return isoDate;
  return new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

export type WebPageSchemaInput = {
  name: string;
  description: string;
  url: string;
  dateModified: string;
  datePublished?: string;
  authorKey?: TreatflowAuthorKey;
};

export function generateWebPageSchema(input: WebPageSchemaInput) {
  const author = TREATFLOW_AUTHORS[input.authorKey ?? "olcay"];
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: input.url,
    dateModified: input.dateModified,
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    inLanguage: "de-DE",
    isPartOf: {
      "@type": "WebSite",
      name: TREATFLOW_PUBLISHER.name,
      url: TREATFLOW_PUBLISHER.url,
    },
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
      url: author.url,
      description: author.description,
    },
    publisher: {
      "@type": "Organization",
      name: TREATFLOW_PUBLISHER.name,
      url: TREATFLOW_PUBLISHER.url,
      logo: {
        "@type": "ImageObject",
        url: TREATFLOW_PUBLISHER.logo,
      },
    },
  };
}
