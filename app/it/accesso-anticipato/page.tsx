import type { Metadata } from "next";
import EarlyAccessPage from "@/app/components/EarlyAccessPage";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  pageKey: "early-access",
  locale: "it",
  title: "Richiedi accesso anticipato",
  description:
    "La registrazione diretta di Treatflow è disponibile in Germania, Austria e Svizzera. Richiedi l'accesso anticipato per l'Italia.",
  keywords: ["accesso anticipato treatflow", "software estetista waitlist"],
});

export default function ItEarlyAccessPage() {
  return (
    <EarlyAccessPage
      locale="it"
      leadSource="Early Access IT"
      defaultCountry="Italia"
      title="Richiedi l'accesso anticipato a Treatflow"
      subtitle="Stiamo aprendo Treatflow in Italia. Raccontaci del tuo centro e ti contatteremo personalmente."
      note="La registrazione diretta è attualmente aperta in Germania, Austria e Svizzera."
      copy={{
        nameLabel: "Il tuo nome",
        studioLabel: "Nome del centro / clinica",
        cityLabel: "Città",
        countryLabel: "Paese",
        emailLabel: "Email",
        phoneLabel: "Telefono (opzionale)",
        messageLabel: "Come possiamo aiutarti? (opzionale)",
        submitLabel: "Richiedi accesso anticipato",
        successTitle: "Richiesta ricevuta",
        successText: "Grazie! Esamineremo la richiesta e ti risponderemo a breve.",
        errorText: "Qualcosa è andato storto. Riprova o scrivi a hello@treatflow.io.",
        requiredHint: "I campi con * sono obbligatori",
      }}
    />
  );
}
