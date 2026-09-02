const BASE_URL = "https://www.treatflow.io";

const organizationWebSiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Treatflow",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logos/treatflow-logo.svg`,
      },
      description:
        "Software für Kosmetikstudio: Terminkalender, digitale Kundenkartei, Online-Buchungen und Behandlungsdokumentation. Made in Austria.",
      sameAs: ["https://www.instagram.com/treatflow.io/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@treatflow.io",
        availableLanguage: ["German", "English", "Spanish", "Italian", "French"],
        areaServed: ["DE", "AT", "CH", "ES", "IT", "FR", "BE", "EU"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Treatflow - Kosmetikstudio Software",
      description:
        "Software für Kosmetikstudio: Terminkalender, Kundenkartei, Online-Buchungen, Behandlungsdokumentation.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "de-DE",
    },
  ],
};

/** DE-only JSON-LD. Not rendered on /en so Google does not treat EN pages as German duplicates. */
export default function DeSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationWebSiteSchema) }}
    />
  );
}
