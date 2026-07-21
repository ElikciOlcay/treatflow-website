import type { Metadata } from "next";
import EarlyAccessPage from "@/app/components/EarlyAccessPage";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  pageKey: "early-access",
  locale: "fr",
  title: "Demander un accès anticipé",
  description:
    "L'inscription directe à Treatflow est disponible en Allemagne, Autriche et Suisse. Demandez un accès anticipé pour votre pays.",
  keywords: ["accès anticipé treatflow", "logiciel beauté waitlist"],
});

export default function FrEarlyAccessPage() {
  return (
    <EarlyAccessPage
      locale="fr"
      leadSource="Early Access FR"
      defaultCountry="France"
      title="Demandez un accès anticipé à Treatflow"
      subtitle="Nous développons Treatflow sur le marché francophone. Parlez-nous de votre institut et nous vous recontacterons personnellement."
      note="L'inscription directe est actuellement ouverte en Allemagne, Autriche et Suisse."
      copy={{
        nameLabel: "Votre nom",
        studioLabel: "Nom de l'institut / clinique",
        cityLabel: "Ville",
        countryLabel: "Pays",
        emailLabel: "Email",
        phoneLabel: "Téléphone (optionnel)",
        messageLabel: "Comment pouvons-nous vous aider ? (optionnel)",
        submitLabel: "Demander un accès anticipé",
        successTitle: "Demande reçue",
        successText:
          "Merci ! Nous examinerons votre demande et vous répondrons rapidement.",
        errorText:
          "Une erreur s'est produite. Réessayez ou écrivez à hello@treatflow.io.",
        requiredHint: "Les champs marqués d'un * sont obligatoires",
      }}
    />
  );
}
