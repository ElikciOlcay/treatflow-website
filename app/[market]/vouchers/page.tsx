import { notFound } from "next/navigation";

/**
 * Gutscheine sind Teil der DACH-Kasse (siehe app/i18n/feature-availability.ts)
 * und werden auf keiner anderen Sprachseite angeboten – wie point-of-sale.
 */
export default function Page() {
  notFound();
}
