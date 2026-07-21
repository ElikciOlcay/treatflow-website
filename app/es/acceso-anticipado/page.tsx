import type { Metadata } from "next";
import EarlyAccessPage from "@/app/components/EarlyAccessPage";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  pageKey: "early-access",
  locale: "es",
  title: "Solicitar acceso anticipado",
  description:
    "El registro directo de Treatflow está disponible en Alemania, Austria y Suiza. Solicita acceso anticipado para tu país.",
  keywords: ["acceso anticipado treatflow", "software belleza waitlist"],
});

export default function EsEarlyAccessPage() {
  return (
    <EarlyAccessPage
      locale="es"
      leadSource="Early Access ES"
      title="Solicita acceso anticipado a Treatflow"
      subtitle="Estamos expandiendo Treatflow al mercado hispanohablante. Cuéntanos sobre tu salón y te contactaremos personalmente."
      note="El registro directo está abierto actualmente en Alemania, Austria y Suiza."
      copy={{
        nameLabel: "Tu nombre",
        studioLabel: "Nombre del salón / clínica",
        cityLabel: "Ciudad",
        countryLabel: "País",
        emailLabel: "Email",
        phoneLabel: "Teléfono (opcional)",
        messageLabel: "¿Cómo podemos ayudarte? (opcional)",
        submitLabel: "Solicitar acceso anticipado",
        successTitle: "Solicitud recibida",
        successText: "¡Gracias! Revisaremos tu solicitud y te contactaremos pronto.",
        errorText: "Algo salió mal. Inténtalo de nuevo o escribe a hello@treatflow.io.",
        requiredHint: "Los campos con * son obligatorios",
      }}
    />
  );
}
