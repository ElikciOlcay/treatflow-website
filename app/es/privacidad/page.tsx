import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "privacy",
  locale: "es",
  title: "Política de privacidad",
  description: "Información de privacidad de Treatflow.",
});

export default function EsPrivacyPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-gray">
      <h1>Política de privacidad</h1>
      <p>
        Treatflow procesa datos personales conforme al RGPD. La versión completa en alemán/inglés
        está disponible en{" "}
        <a href="/datenschutz">/datenschutz</a> y <a href="/en/privacy">/en/privacy</a>.
      </p>
      <p>
        Contacto: <a href="mailto:hello@treatflow.io">hello@treatflow.io</a>
      </p>
    </main>
  );
}
