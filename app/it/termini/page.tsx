import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "terms",
  locale: "it",
  title: "Termini di servizio",
  description: "Termini di servizio di Treatflow.",
});

export default function ItTermsPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-gray">
      <h1>Termini di servizio</h1>
      <p>
        I termini completi sono disponibili su <a href="/agb">/agb</a> e{" "}
        <a href="/en/terms">/en/terms</a>. Per l&apos;accesso anticipato internazionale possono
        applicarsi condizioni individuali fino al lancio locale.
      </p>
    </main>
  );
}
