import type { ShopContent } from "./types";

export const shopEn: ShopContent = {
  meta: {
    title: "Retail & Stock Management for Beauty Salons",
    description:
      "Built-in retail for beauty salons. Sell aftercare products directly to your clients and keep on top of stock with simple stock management.",
    keywords: [
      "product sales beauty salon",
      "salon stock management",
      "sell skincare products salon",
      "salon retail software",
      "extra revenue beauty salon",
    ],
  },
  breadcrumb: "Shop",
  hero: {
    eyebrow: "Retail & stock",
    eyebrowIcon: "package",
    title: { before: "Sell products, keep ", highlight: "stock", after: " under control" },
    description: "Sell aftercare products in your salon – with stock levels and sales history.",
    chips: ["Stock at a glance", "Sales history", "Unlimited products"],
    secondaryCta: { label: "Client records", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/en/shop-hero.png",
      alt: "Treatflow retail sales and stock management",
    },
  },
  understand: {
    title: "Sell aftercare products right in your salon",
    description:
      "Recommend the right product to your client after the treatment – and record the sale straight away. Stock levels and sales history update automatically.",
    items: [
      {
        icon: "package",
        title: "Add and sell products",
        text: "Add serums, creams and accessories as items. Sell them right after the treatment or at reception.",
      },
      {
        icon: "trending-up",
        title: "Stock levels at a glance",
        text: "You always see how much of a product is left. When stock runs low, you know it's time to reorder.",
      },
      {
        icon: "bar-chart",
        title: "Sales history per client",
        text: "The client profile shows who bought which product – ideal for recommendations and repeat purchases.",
      },
    ],
  },
  howItWorks: {
    description: "From product to sale in three steps.",
    steps: [
      {
        title: "Add products",
        text: "Enter your items with name, price, image and opening stock. Add as many products as you like.",
      },
      {
        title: "Sell in the salon",
        text: "Recommend the right product after the treatment and record the sale in Treatflow. The sale is saved to the client profile.",
      },
      {
        title: "Stock updates itself",
        text: "Stock is reduced automatically after every sale. The sales history shows which products sell best.",
      },
    ],
  },
  cards: {
    title: "What you get",
    description: "Simple retail for beauty salons – clear and easy to manage.",
    items: [
      { icon: "package", title: "Unlimited products", text: "As many items as you want – no limits.", points: ["No limits", "Categories", "Flexible prices"] },
      { icon: "trending-up", title: "Stock management", text: "Stock at a glance and a warning when quantities run low.", points: ["Stock overview", "Reordering", "Sales history"] },
      { icon: "camera", title: "Images & descriptions", text: "Present products with photos and descriptions.", points: ["Product images", "Descriptions", "Variants"] },
      { icon: "shopping-bag", title: "What you can sell", text: "Aftercare, packages and accessories.", points: ["Aftercare products", "Packages", "Accessories"] },
      { icon: "bar-chart", title: "Sales overview", text: "Keep an eye on revenue and top products.", points: ["Revenue", "Top items", "Traceable"] },
      { icon: "users", title: "Linked to client profiles", text: "Every sale is saved in the client's profile.", points: ["Purchase history", "Recommendations", "Repeat purchases"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Client records", description: "Purchase history in the client profile" },
      { href: { page: "treatment-documentation" }, title: "Treatment records", description: "Record treatments and aftercare" },
      { href: { page: "online-booking" }, title: "Online booking", description: "Clients book 24/7 – commission-free" },
    ],
  },
  cta: {
    title: "Ready to start selling in your salon?",
    description: "Try it free for 14 days – sell products and keep track of your stock.",
  },
};
