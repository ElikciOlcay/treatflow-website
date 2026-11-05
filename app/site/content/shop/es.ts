import type { ShopContent } from "./types";

export const shopEs: ShopContent = {
  meta: {
    title: "Venta de productos e inventario para centros de estética",
    description:
      "Venta de productos integrada para centros de estética. Vende productos de cuidado directamente a tus clientas y controla el stock con una gestión de inventario sencilla.",
    keywords: [
      "venta de productos centro de estética",
      "gestión de inventario salón de belleza",
      "vender productos cosméticos",
      "sistema de ventas salón",
      "ingresos extra centro de estética",
    ],
  },
  breadcrumb: "Tienda",
  hero: {
    eyebrow: "Venta de productos e inventario",
    eyebrowIcon: "package",
    title: { before: "Vende productos y controla tu ", highlight: "stock" },
    description: "Vende productos de cuidado en tu centro – con inventario e historial de ventas.",
    chips: ["Stock bajo control", "Historial de ventas", "Productos ilimitados"],
    secondaryCta: { label: "Fichas de clientes", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Venta de productos y gestión de inventario con Treatflow",
    },
  },
  understand: {
    title: "Vende productos de cuidado directamente en tu centro",
    description:
      "Después del tratamiento, recomienda a tu clienta el producto adecuado y registra la venta al momento. El stock y el historial de ventas se actualizan automáticamente.",
    items: [
      {
        icon: "package",
        title: "Crea y vende productos",
        text: "Añade sérums, cremas y accesorios como artículos. Véndelos justo después del tratamiento o en recepción.",
      },
      {
        icon: "trending-up",
        title: "Stock siempre a la vista",
        text: "Ves en todo momento cuánto queda de cada producto. Cuando el stock baja, sabes que toca reponer.",
      },
      {
        icon: "bar-chart",
        title: "Historial de ventas por clienta",
        text: "En el perfil de la clienta ves quién compró qué producto – ideal para recomendaciones y recompras.",
      },
    ],
  },
  howItWorks: {
    description: "Del producto a la venta en tres pasos.",
    steps: [
      {
        title: "Crea tus productos",
        text: "Introduce tus artículos con nombre, precio, imagen y stock inicial. Puedes crear tantos productos como quieras.",
      },
      {
        title: "Vende en el centro",
        text: "Después del tratamiento, recomienda a la clienta el producto adecuado y registra la venta en Treatflow. La venta se guarda en su perfil.",
      },
      {
        title: "El stock se actualiza solo",
        text: "Después de cada venta, el stock se reduce automáticamente. El historial muestra qué productos se venden mejor.",
      },
    ],
  },
  cards: {
    title: "Lo que obtienes",
    description: "Venta de productos sencilla para centros de estética – clara y ordenada.",
    items: [
      { icon: "package", title: "Productos ilimitados", text: "Todos los artículos que quieras – sin límites.", points: ["Sin límites", "Categorías", "Precios flexibles"] },
      { icon: "trending-up", title: "Gestión de inventario", text: "Stock de un vistazo y aviso cuando las cantidades son bajas.", points: ["Resumen de stock", "Reposición", "Historial de ventas"] },
      { icon: "camera", title: "Imágenes y textos", text: "Presenta los productos con fotos y descripciones.", points: ["Fotos de producto", "Descripciones", "Variantes"] },
      { icon: "shopping-bag", title: "Qué puedes vender", text: "Cuidado, packs y accesorios.", points: ["Productos de cuidado", "Packs", "Accesorios"] },
      { icon: "bar-chart", title: "Resumen de ventas", text: "Controla la facturación y los productos más vendidos.", points: ["Facturación", "Más vendidos", "Trazable"] },
      { icon: "users", title: "Vinculado al perfil de la clienta", text: "Cada venta se guarda en el perfil de la clienta.", points: ["Historial de compras", "Recomendaciones", "Recompras"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Fichas de clientes", description: "Historial de compras en el perfil" },
      { href: { page: "treatment-documentation" }, title: "Documentación", description: "Registra tratamientos y cuidados posteriores" },
      { href: { page: "online-booking" }, title: "Reservas online", description: "Tus clientas reservan 24/7 – sin comisiones" },
    ],
  },
  cta: {
    title: "¿Empiezas a vender productos en tu centro?",
    description: "Pruébalo gratis 14 días – vende productos y mantén el stock bajo control.",
  },
};
