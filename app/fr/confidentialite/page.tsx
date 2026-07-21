import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "privacy",
  locale: "fr",
  title: "Politique de confidentialité",
  description: "Informations de confidentialité Treatflow.",
});

export default function FrPrivacyPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-gray">
      <h1>Politique de confidentialité</h1>
      <p>
        Treatflow traite les données personnelles conformément au RGPD. La version complète est
        disponible sur <a href="/datenschutz">/datenschutz</a> et{" "}
        <a href="/en/privacy">/en/privacy</a>.
      </p>
      <p>
        Contact : <a href="mailto:hello@treatflow.io">hello@treatflow.io</a>
      </p>
    </main>
  );
}
