import type { FeaturePageContent } from "../feature-common/types";
import type { Href } from "../shared";

/** Formulare / Forms – Funktionsseiten-Layout plus Hinweis „Beispiele testen“. */
export type FormsContent = FeaturePageContent & {
  /** Box zwischen Understand und HowItWorks; entfällt, wenn `href` in der Sprache fehlt. */
  tryBanner: { title: string; text: string; button: string; href: Href };
};
