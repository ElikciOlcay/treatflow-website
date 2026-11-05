import type { ShopContent } from "./types";

export const shopEs: ShopContent = {
  meta: {
    title: "Venta de productos e inventario para centros de estética",
    description:
      "Venta de productos integrada para centros de estética: vende cosmética y productos de cuidado directamente a tus clientes y controla el stock de forma sencilla.",
    keywords: [
      "venta de productos centro de estética",
      "control de stock salón de belleza",
      "vender cosmética en el centro de estética",
      "gestión de inventario centro de estética",
      "ingresos extra centro de estética",
    ],
  },
  breadcrumb: "Tienda",
  hero: {
    eyebrow: "Venta de productos e inventario",
    eyebrowIcon: "package",
    title: { before: "Vende productos y controla tu ", highlight: "stock" },
    description: "Vende productos de cuidado en tu centro, con control de stock e historial de ventas.",
    chips: ["Stock bajo control", "Historial de ventas", "Productos ilimitados"],
    secondaryCta: { label: "Fichas de cliente", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/es/shop-hero.png",
      alt: "Venta de productos y gestión de inventario con Treatflow",
    },
  },
  understand: {
    title: "Vende productos de cuidado directamente en tu centro",
    description:
      "Después del tratamiento, recomienda a tu cliente el producto adecuado y registra la venta al momento. El stock y el historial de ventas se actualizan solos.",
    items: [
      {
        icon: "package",
        title: "Crea y vende productos",
        text: "Da de alta sérums, cremas y accesorios y véndelos justo después del tratamiento o en recepción.",
      },
      {
        icon: "trending-up",
        title: "Stock siempre a la vista",
        text: "Sabes en todo momento cuánto queda de cada producto. Cuando el stock baja, toca reponer.",
      },
      {
        icon: "bar-chart",
        title: "Historial de compras por cliente",
        text: "En la ficha de cada cliente ves qué productos ha comprado: ideal para recomendar y para la recompra.",
      },
    ],
  },
  howItWorks: {
    description: "Del producto a la venta en tres pasos.",
    steps: [
      {
        title: "Crea tus productos",
        text: "Introduce tus artículos con nombre, precio, imagen y stock inicial. Puedes crear todos los productos que quieras.",
      },
      {
        title: "Vende en el centro",
        text: "Después del tratamiento, recomienda a tu cliente el producto adecuado y registra la venta en Treatflow. La venta queda guardada en su ficha.",
      },
      {
        title: "El stock se actualiza solo",
        text: "Con cada venta, el stock se descuenta automáticamente, y el historial te muestra qué productos se venden mejor.",
      },
    ],
  },
  cards: {
    title: "Qué incluye",
    description: "Venta de productos para centros de estética, sencilla y ordenada.",
    items: [
      { icon: "package", title: "Productos ilimitados", text: "Todos los artículos que quieras, sin límites.", points: ["Sin límites", "Categorías", "Precios flexibles"] },
      { icon: "trending-up", title: "Control de stock", text: "El stock de un vistazo y aviso cuando quedan pocas unidades.", points: ["Resumen de stock", "Reposición", "Historial de ventas"] },
      { icon: "camera", title: "Imágenes y textos", text: "Presenta los productos con fotos y descripciones.", points: ["Fotos de producto", "Descripciones", "Variantes"] },
      { icon: "shopping-bag", title: "Qué puedes vender", text: "Productos de cuidado, packs y accesorios.", points: ["Productos de cuidado", "Packs", "Accesorios"] },
      { icon: "bar-chart", title: "Resumen de ventas", text: "Controla la facturación y los productos más vendidos.", points: ["Facturación", "Más vendidos", "Trazable"] },
      { icon: "users", title: "Vinculado a la ficha de cliente", text: "Cada venta queda guardada en la ficha del cliente.", points: ["Historial de compras", "Recomendaciones", "Recompras"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Fichas de cliente", description: "Historial de compras en la ficha" },
      { href: { page: "treatment-documentation" }, title: "Documentación", description: "Registra tratamientos y cuidados posteriores" },
      { href: { page: "online-booking" }, title: "Reservas online", description: "Tus clientes reservan 24/7, sin comisiones" },
    ],
  },
  cta: {
    title: "Empieza a vender productos en tu centro",
    description: "Pruébalo gratis 14 días: vende productos y mantén el stock bajo control.",
  },
};
