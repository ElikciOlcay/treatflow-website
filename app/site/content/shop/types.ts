import type { FeaturePageContent } from "../feature-common/types";

/**
 * Shop / Produktverkauf – Hero/Sections-Layout ohne FAQ, KI-Kapseln,
 * Autorzeile und JSON-LD (wie die bisherige deutsche Seite).
 */
export type ShopContent = Omit<FeaturePageContent, "dates" | "schema" | "video" | "faq" | "hero"> & {
  hero: Omit<FeaturePageContent["hero"], "capsules">;
};
