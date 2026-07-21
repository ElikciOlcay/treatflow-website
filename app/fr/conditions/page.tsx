import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "terms",
  locale: "fr",
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation de Treatflow.",
});

export default function FrTermsPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-gray">
      <h1>Conditions d&apos;utilisation</h1>
      <p>
        Les conditions complètes sont disponibles sur <a href="/agb">/agb</a> et{" "}
        <a href="/en/terms">/en/terms</a>. Pour l&apos;accès anticipé international, des conditions
        individuelles peuvent s&apos;appliquer jusqu&apos;au lancement local.
      </p>
    </main>
  );
}
