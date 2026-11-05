import type { ShopContent } from "./types";

export const shopFr: ShopContent = {
  meta: {
    title: "Vente de produits et stock pour instituts de beauté",
    description:
      "Vente de produits intégrée pour instituts de beauté. Vendez vos produits de soin directement à vos clientes et suivez votre stock en toute simplicité.",
    keywords: [
      "vente de produits institut de beauté",
      "gestion de stock institut",
      "vendre des produits cosmétiques",
      "logiciel de vente institut",
      "revenus complémentaires institut de beauté",
    ],
  },
  breadcrumb: "Boutique",
  hero: {
    eyebrow: "Vente de produits et stock",
    eyebrowIcon: "package",
    title: { before: "Vendez vos produits, gardez le ", highlight: "stock", after: " en vue" },
    description: "Vendez vos produits de soin à l'institut – avec suivi du stock et historique des ventes.",
    chips: ["Stock en vue", "Historique des ventes", "Produits illimités"],
    secondaryCta: { label: "Fiches clients", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Vente de produits et gestion du stock avec Treatflow",
    },
  },
  understand: {
    title: "Vendez vos produits de soin directement à l'institut",
    description:
      "Après le soin, recommandez le bon produit à votre cliente et enregistrez la vente aussitôt. Le stock et l'historique des ventes se mettent à jour automatiquement.",
    items: [
      {
        icon: "package",
        title: "Créer et vendre des produits",
        text: "Ajoutez sérums, crèmes et accessoires comme articles. Vendez-les juste après le soin ou à l'accueil.",
      },
      {
        icon: "trending-up",
        title: "Le stock toujours en vue",
        text: "Vous voyez à tout moment combien il reste d'un produit. Quand le stock baisse, vous savez qu'il faut recommander.",
      },
      {
        icon: "bar-chart",
        title: "Historique des ventes par cliente",
        text: "La fiche cliente montre qui a acheté quel produit – idéal pour vos conseils et les rachats.",
      },
    ],
  },
  howItWorks: {
    description: "Du produit à la vente en trois étapes.",
    steps: [
      {
        title: "Créer les produits",
        text: "Saisissez vos articles avec nom, prix, image et stock initial. Vous pouvez créer autant de produits que vous le souhaitez.",
      },
      {
        title: "Vendre à l'institut",
        text: "Après le soin, recommandez le bon produit à la cliente et enregistrez la vente dans Treatflow. La vente est enregistrée dans sa fiche.",
      },
      {
        title: "Le stock se met à jour tout seul",
        text: "Après chaque vente, le stock diminue automatiquement. L'historique montre quels produits se vendent le mieux.",
      },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Une vente de produits simple pour les instituts de beauté – claire et lisible.",
    items: [
      { icon: "package", title: "Produits illimités", text: "Autant d'articles que vous voulez – sans limite.", points: ["Aucune limite", "Catégories", "Prix flexibles"] },
      { icon: "trending-up", title: "Gestion du stock", text: "Le stock en un coup d'œil et une alerte quand les quantités baissent.", points: ["Vue du stock", "Réassort", "Historique des ventes"] },
      { icon: "camera", title: "Photos et textes", text: "Présentez vos produits avec photos et descriptions.", points: ["Photos produit", "Descriptions", "Variantes"] },
      { icon: "shopping-bag", title: "Ce que vous pouvez vendre", text: "Soins, forfaits et accessoires.", points: ["Produits de soin", "Forfaits", "Accessoires"] },
      { icon: "bar-chart", title: "Vue des ventes", text: "Suivez le chiffre d'affaires et les meilleures ventes.", points: ["Chiffre d'affaires", "Meilleures ventes", "Traçable"] },
      { icon: "users", title: "Lié à la fiche cliente", text: "Chaque vente est enregistrée dans la fiche de la cliente.", points: ["Historique d'achats", "Conseils", "Rachats"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Fiches clients", description: "Historique d'achats dans la fiche cliente" },
      { href: { page: "treatment-documentation" }, title: "Documentation des soins", description: "Consignez les soins et les conseils d'après-soin" },
      { href: { page: "online-booking" }, title: "Réservation en ligne", description: "Vos clientes réservent 24h/24 – sans commission" },
    ],
  },
  cta: {
    title: "Prêt à vendre vos produits à l'institut ?",
    description: "Essayez gratuitement pendant 14 jours – vendez vos produits et gardez votre stock en vue.",
  },
};
