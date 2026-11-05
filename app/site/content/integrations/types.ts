import type { FeaturePageContent } from "../feature-common/types";
import type { Feature, SiteIconName } from "../shared";

/** Kachel im Hero-Raster (App-Logo-Ersatz). */
export type IntegrationTile = {
  name: string;
  category: string;
  /** Tailwind-Verlauf, z. B. "from-blue-500 to-indigo-600" */
  gradient: string;
  icon: SiteIconName;
  feature?: Feature;
};

/**
 * Integrationen – Funktionsseiten-Layout mit App-Raster statt Hero-Bild,
 * ohne Datum/WebPage-Schema (wie die bisherige DE-Seite).
 * DACH-only: Lexware/AbaNinja (`accounting`), SumUp (`sumup`), Kasse (`pos`), Gutscheine (`vouchers`).
 * Andere Sprachen: Google Kalender, Zapier, KI-Assistenten (MCP), Treatflow Pay (`pay`, nicht tr).
 */
export type IntegrationsContent = Omit<FeaturePageContent, "meta" | "dates" | "schema" | "hero" | "video"> & {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    /** Nur DE (ohne Bild). */
    openGraph?: { title: string; description: string };
  };
  schema: { id: string };
  hero: Omit<FeaturePageContent["hero"], "image" | "capsules"> & {
    capsules?: FeaturePageContent["hero"]["capsules"];
    tiles: IntegrationTile[];
  };
};
