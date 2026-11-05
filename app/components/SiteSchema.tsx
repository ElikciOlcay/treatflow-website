import { BASE_URL } from "@/app/i18n/config";
import type { SiteMarket } from "@/app/site/content/shared";
import { JsonLd, ORGANIZATION_ID, homeUrl, schemaLanguage, websiteId } from "@/app/site/schema";

/**
 * Organization + WebSite (JSON-LD), genau einmal je Seite – ausgegeben vom Footer.
 * Die Organization hat in allen Sprachen dieselbe @id (`https://www.treatflow.io/#organization`),
 * nur die Beschreibung ist übersetzt. WebSite gibt es je Sprache (`/#website`, `/en#website`, …).
 */

const LOGO = { "@type": "ImageObject", url: `${BASE_URL}/images/logos/treatflow-logo.svg` } as const;
const SAME_AS = ["https://www.instagram.com/treatflow.io/"];
const SITE_LANGUAGES = ["de", "en", "nl", "it", "pl", "es", "fr", "tr"];

type OrgMeta = {
  org: string;
  site: string;
  /** Name der WebSite (DE wie bisher mit Zusatz). */
  siteName?: string;
  availableLanguage: string[];
  areaServed: string | string[];
};

const ORG_META: Record<SiteMarket, OrgMeta> = {
  de: {
    org: "Software für Kosmetikstudio: Terminkalender, digitale Kundenkartei, Online-Buchungen und Behandlungsdokumentation. Made in Austria.",
    site: "Software für Kosmetikstudio: Terminkalender, Kundenkartei, Online-Buchungen, Behandlungsdokumentation.",
    siteName: "Treatflow - Kosmetikstudio Software",
    availableLanguage: ["German", "English", "Spanish", "Italian", "French"],
    areaServed: ["DE", "AT", "CH", "ES", "IT", "FR", "BE", "EU"],
  },
  en: {
    org: "Software for beauty salons, aesthetic clinics and treatment-focused businesses. Online booking, client records, digital forms and treatment documentation. Hosted in the EU.",
    site: "All-in-one software for beauty salons and aesthetic clinics: booking, records, forms and treatment documentation.",
    availableLanguage: ["English", "German"],
    areaServed: "EU",
  },
  tr: {
    org: "Güzellik salonları, medikal estetik klinikleri ve lazer epilasyon merkezleri için salon yönetim yazılımı. Online randevu, müşteri takibi, dijital onam formları ve işlem kayıtları. AB sunucularında barındırılır.",
    site: "Güzellik salonları ve estetik klinikleri için salon yönetim yazılımı: randevu, müşteri takibi, onam formları ve işlem kaydı.",
    availableLanguage: ["Turkish", "English", "German"],
    areaServed: "TR",
  },
  nl: {
    org: "Salonsoftware voor schoonheidssalons, esthetische klinieken en behandelstudio's: online afspraken, klantendossiers, digitale intakeformulieren en behandeldocumentatie. Gehost in de EU, AVG-proof.",
    site: "Alles-in-één software voor schoonheidssalons en esthetische klinieken.",
    availableLanguage: ["English", "German"],
    areaServed: ["NL", "BE"],
  },
  it: {
    org: "Gestionale per centri estetici, studi di medicina estetica e centri di trattamento: prenotazioni online, schede clienti, moduli di consenso digitali e documentazione dei trattamenti. Server nell'UE, conforme al GDPR.",
    site: "Software tutto-in-uno per centri estetici e studi di medicina estetica.",
    availableLanguage: ["English", "German"],
    areaServed: ["IT"],
  },
  pl: {
    org: "Program do salonów kosmetycznych, gabinetów medycyny estetycznej i studiów zabiegowych: rezerwacje online, kartoteka klientów, cyfrowe formularze zgody i dokumentacja zabiegów. Serwery w UE, zgodność z RODO.",
    site: "Kompleksowy program dla salonów kosmetycznych i gabinetów medycyny estetycznej.",
    availableLanguage: ["English", "German"],
    areaServed: ["PL"],
  },
  es: {
    org: "Software para centros de estética, clínicas de medicina estética y centros de tratamiento: reservas online, fichas de clientes, formularios de consentimiento digitales y documentación de tratamientos. Alojado en la UE, conforme al RGPD.",
    site: "Software todo en uno para centros de estética y clínicas estéticas.",
    availableLanguage: ["English", "German"],
    areaServed: ["ES"],
  },
  fr: {
    org: "Logiciel pour instituts de beauté, cliniques de médecine esthétique et centres de soins : réservation en ligne, fiches clientes, formulaires de consentement numériques et suivi des soins. Hébergé dans l'UE, conforme au RGPD.",
    site: "Logiciel tout-en-un pour instituts de beauté et cliniques esthétiques.",
    availableLanguage: ["English", "German"],
    areaServed: ["FR", "BE", "LU", "CH"],
  },
};

export function siteSchema(market: SiteMarket) {
  const meta = ORG_META[market];
  const organization = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Treatflow",
    url: BASE_URL,
    logo: LOGO,
    description: meta.org,
    ...(market === "de" ? {} : { foundingLocation: { "@type": "Place", name: "Austria" }, knowsLanguage: SITE_LANGUAGES }),
    sameAs: SAME_AS,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@treatflow.io",
      availableLanguage: meta.availableLanguage,
      areaServed: meta.areaServed,
    },
  };
  const website = {
    "@type": "WebSite",
    "@id": websiteId(market),
    url: homeUrl(market),
    name: meta.siteName ?? "Treatflow",
    description: meta.site,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: market === "de" ? "de-DE" : schemaLanguage(market),
  };
  return { "@context": "https://schema.org", "@graph": [organization, website] };
}

/** Organization + WebSite der Sprache (einmal je Seite, im Footer). */
export default function SiteSchema({ market }: { market: SiteMarket }) {
  return <JsonLd data={siteSchema(market)} />;
}
