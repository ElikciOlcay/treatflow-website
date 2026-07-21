import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "terms",
  locale: "es",
  title: "Términos del servicio",
  description: "Términos del servicio de Treatflow.",
});

export default function EsTermsPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-gray">
      <h1>Términos del servicio</h1>
      <p>
        Los términos contractuales completos están disponibles en{" "}
        <a href="/agb">/agb</a> y <a href="/en/terms">/en/terms</a>. Para acceso anticipado
        internacional aplican condiciones acordadas individualmente hasta el lanzamiento local.
      </p>
    </main>
  );
}
