import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "privacy",
  locale: "it",
  title: "Privacy Policy",
  description: "Informativa sulla privacy di Treatflow.",
});

export default function ItPrivacyPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-gray">
      <h1>Privacy Policy</h1>
      <p>
        Treatflow tratta i dati personali in conformità al GDPR. La versione completa è disponibile
        su <a href="/datenschutz">/datenschutz</a> e <a href="/en/privacy">/en/privacy</a>.
      </p>
      <p>
        Contatto: <a href="mailto:hello@treatflow.io">hello@treatflow.io</a>
      </p>
    </main>
  );
}
