import type { NavigationContent } from "./types";

/**
 * Navegación en español. Misma estructura que `en.ts`; los enlaces a páginas que
 * aún no existen en un idioma se ocultan automáticamente (ver app/i18n/site-pages.ts).
 */
export const navigationEs: NavigationContent = {
  featuresLabel: "Funciones",
  featureGroups: [
    {
      title: "Citas",
      items: [
        { href: { page: "appointment-calendar" }, label: "Agenda de citas", desc: "Vista por día, semana y mes", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "online-booking" }, label: "Reservas online", desc: "Tu enlace de reservas, 24/7", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Recordatorios", desc: "Recordatorios automáticos por email", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Flujos de clientes", desc: "Seguimientos automáticos paso a paso", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Clientes",
      items: [
        { href: { page: "client-records" }, label: "Fichas de cliente", desc: "Datos e historial de tratamientos", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Formularios", desc: "Anamnesis y consentimientos digitales", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "Documentación", desc: "Tratamientos documentados en digital", icon: "file-text", color: "text-blue-600 bg-blue-100" },
      ],
    },
    {
      title: "Pagos y ventas",
      items: [
        { href: { page: "treatflow-pay" }, label: "Treatflow Pay", desc: "Señal o pago completo al reservar", icon: "wallet", color: "text-violet-600 bg-violet-100", feature: "pay" },
        { href: { page: "shop" }, label: "Tienda", desc: "Venta de productos e inventario", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Integraciones", desc: "Google Calendar, Zapier, asistentes de IA y más", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "Ver todas las funciones" },
  industriesLabel: "Sectores",
  industries: [
    { href: { page: "beauty-salon-software" }, label: "Centros de estética", desc: "La solución todo en uno", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Depilación láser", desc: "Sesiones y consentimientos", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Micropigmentación", desc: "PMU y microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Clínicas estéticas", desc: "Gestión de clínica y pacientes", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Estudios de tatuaje", desc: "Consentimientos y reservas", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Salones de uñas", desc: "Citas y preferencias de cada cliente", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Podología y pedicura", desc: "Fichas de cliente y exploración", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Estudios de pestañas", desc: "Extensiones y retoques planificados", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa y wellness", desc: "Gestión de clientes y reservas", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Centros de masaje", desc: "Reservas y cuestionarios de salud", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Precios" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "Novedades" },
    { href: { page: "home", hash: "testimonials" }, label: "Opiniones" },
    { href: { page: "contact" }, label: "Contacto" },
  ],
  login: "Iniciar sesión",
  cta: "Prueba gratis",
  menuAria: "Abrir menú",
};
