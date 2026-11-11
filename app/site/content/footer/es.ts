import type { FooterContent } from "./types";

/**
 * Pie de página en español. Mismas columnas que `en.ts` (sin funciones exclusivas
 * de DACH). Los enlaces a páginas que aún no existen en un idioma se ocultan
 * automáticamente (ver app/i18n/site-pages.ts).
 */
export const footerEs: FooterContent = {
  tagline: "Tu aliado digital para el día a día del centro. Hecho en Austria.",
  instagramAria: "Treatflow en Instagram",
  columns: [
    {
      sections: [
        {
          title: "Funciones",
          links: [
            { href: { page: "appointment-calendar" }, label: "Agenda de citas" },
            { href: { page: "shift-planner" }, label: "Planificador de turnos" },
            { href: { page: "online-booking" }, label: "Reservas online" },
            { href: { page: "treatflow-pay" }, label: "Treatflow Pay", feature: "pay" },
            { href: { page: "client-records" }, label: "Fichas de cliente" },
            { href: { page: "forms" }, label: "Formularios" },
            { href: { page: "try-forms" }, label: "Formularios de ejemplo" },
            { href: { page: "treatment-documentation" }, label: "Documentación" },
            { href: { page: "messaging" }, label: "Recordatorios" },
            { href: { page: "customer-workflows" }, label: "Flujos de clientes" },
            { href: { page: "integrations" }, label: "Integraciones" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Sectores",
          links: [
            { href: { page: "beauty-salon-software" }, label: "Centros de estética" },
            { href: { page: "laser-hair-removal-software" }, label: "Láser e IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Micropigmentación" },
            { href: { page: "aesthetic-clinic-software" }, label: "Clínicas estéticas" },
            { href: { page: "nail-salon-software" }, label: "Salones de uñas" },
            { href: { page: "foot-care-software" }, label: "Podología y pedicura" },
            { href: { page: "lash-studio-software" }, label: "Estudios de pestañas" },
            { href: { page: "tattoo-studio-software" }, label: "Estudios de tatuaje" },
            { href: { page: "spa-wellness-software" }, label: "Spa y wellness" },
            { href: { page: "massage-software" }, label: "Masajes" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Producto",
          links: [
            { href: { page: "pricing" }, label: "Precios" },
            { href: { page: "software-comparison" }, label: "Comparativa de software" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
            { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
            { href: { page: "shop" }, label: "Tienda" },
            { href: { page: "studio-website" }, label: "Web del centro" },
            { special: "register", label: "Prueba gratis" },
            { special: "login", label: "Iniciar sesión" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Empresa",
          links: [
            { href: { page: "about" }, label: "Sobre nosotros" },
            { href: { page: "blog" }, label: "Blog" },
            { href: { page: "news" }, label: "Novedades" },
            { href: { page: "try-features" }, label: "Prueba las funciones en directo" },
            { href: { page: "contact" }, label: "Contacto" },
          ],
        },
        {
          title: "Legal",
          links: [
            { href: { page: "privacy" }, label: "Política de privacidad" },
            { special: "cookie-settings", label: "Configuración de cookies" },
            { href: { page: "terms" }, label: "Condiciones del servicio" },
            { href: { page: "imprint" }, label: "Aviso legal" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Lo más buscado",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Reservas online para centros de estética" },
    { href: { page: "treatment-documentation" }, label: "Software de documentación de tratamientos" },
    { href: { page: "forms" }, label: "Fichas de anamnesis digitales" },
    { href: { page: "messaging" }, label: "Recordatorios de citas" },
    { href: { page: "appointment-calendar" }, label: "Agenda de citas para centros de estética" },
    { href: { page: "client-records" }, label: "Fichas de cliente para centros de estética" },
    { href: { page: "aesthetic-clinic-software" }, label: "Software para clínicas estéticas" },
    { href: { page: "software-comparison" }, label: "Comparativa de programas para centros de estética" },
  ],
  rights: "Todos los derechos reservados.",
};
