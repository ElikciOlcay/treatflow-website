import type { Metadata } from "next";
import EarlyAccessPage from "@/app/components/EarlyAccessPage";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  pageKey: "early-access",
  locale: "es",
  title: "Acceso anticipado Treatflow | España y Latinoamérica",
  description:
    "Solicita acceso anticipado a Treatflow para tu salón o clínica en España o Latinoamérica. Te contactamos personalmente. Registro directo disponible primero en DACH.",
  keywords: [
    "acceso anticipado treatflow",
    "software belleza España",
    "software salón Latinoamérica",
    "lista de espera software estética",
  ],
});

export default function EsEarlyAccessPage() {
  return (
    <EarlyAccessPage
      locale="es"
      leadSource="Early Access ES"
      badge="Acceso anticipado · ES & LATAM"
      defaultCountry="España"
      title="Acceso anticipado para tu salón"
      subtitle="Estamos abriendo Treatflow en el mercado hispanohablante. Cuéntanos sobre tu centro en España o Latinoamérica y te escribimos en persona con los siguientes pasos."
      note="El alta directa está abierta en Alemania, Austria y Suiza. En España y LATAM activamos centros paso a paso."
      copy={{
        nameLabel: "Tu nombre",
        studioLabel: "Nombre del salón / clínica",
        cityLabel: "Ciudad",
        countryLabel: "País",
        emailLabel: "Email",
        phoneLabel: "Teléfono (opcional)",
        messageLabel:
          "Cuéntanos un poco: tamaño del equipo, tratamientos principales o herramienta actual (opcional)",
        submitLabel: "Solicitar acceso anticipado",
        successTitle: "Solicitud recibida",
        successText:
          "Gracias. Revisamos cada solicitud y te contactamos en 1–2 días laborables (normalmente desde hello@treatflow.io).",
        errorText: "Algo salió mal. Inténtalo de nuevo o escribe a hello@treatflow.io.",
        requiredHint: "Los campos con * son obligatorios",
      }}
    />
  );
}
