import type { ShopContent } from "./types";

export const shopDe: ShopContent = {
  meta: {
    title: "Produktverkauf & Lager für Kosmetikstudios",
    description:
      "Integriertes Produktverkauf-System für Kosmetikstudios. Verkaufe Pflegeprodukte direkt an deine Kunden mit einfacher Lagerverwaltung.",
    keywords: [
      "Produktverkauf Kosmetikstudio",
      "Lagerverwaltung Beauty",
      "Kosmetik Produkte verkaufen",
      "Studio Verkaufssystem",
      "Zusatzumsatz Kosmetik",
    ],
    openGraph: {
      title: "Produktverkauf & Lagerverwaltung für Kosmetikstudios",
      description: "Integriertes System für Produktverkauf mit einfacher Lagerverwaltung und Nachverfolgung.",
      image: { url: "/images/og-shop.jpg", alt: "Treatflow Produktverkauf System" },
    },
  },
  breadcrumb: "Shop",
  hero: {
    eyebrow: "Produktverkauf & Lager",
    eyebrowIcon: "package",
    title: { before: "Produkte verkaufen, ", highlight: "Lager", after: " im Blick" },
    description: "Pflegeprodukte im Studio verkaufen – mit Lagerbestand und Verkaufshistorie.",
    chips: ["Lager im Blick", "Verkaufshistorie", "Unbegrenzte Produkte"],
    secondaryCta: { label: "Zur Kasse", href: { page: "point-of-sale" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Treatflow Produktverkauf und Lagerverwaltung",
    },
  },
  understand: {
    title: "Pflegeprodukte direkt im Studio verkaufen",
    description:
      "Empfiehl deiner Kundin nach der Behandlung das passende Produkt – und verkaufe es direkt an der Kasse. Lagerbestand und Verkaufshistorie werden automatisch aktualisiert.",
    items: [
      {
        icon: "package",
        title: "Produkte anlegen und verkaufen",
        text: "Lege Seren, Cremes und Zubehör als Artikel an. Nach der Behandlung oder an der Theke direkt verkaufen.",
      },
      {
        icon: "trending-up",
        title: "Lagerbestand im Blick",
        text: "Du siehst jederzeit, wie viel von einem Produkt noch da ist. Bei niedrigem Bestand weisst du, dass du nachbestellen musst.",
      },
      {
        icon: "bar-chart",
        title: "Verkaufshistorie pro Kundin",
        text: "Im Kundenprofil siehst du, wer welches Produkt gekauft hat – ideal für Empfehlungen und Nachbestellungen.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten vom Produkt zum Verkauf.",
    steps: [
      {
        title: "Produkte anlegen",
        text: "Trage deine Artikel mit Name, Preis, Bild und Anfangsbestand ein. Du kannst so viele Produkte anlegen, wie du möchtest.",
      },
      {
        title: "Im Studio verkaufen",
        text: "Empfiehl der Kundin nach der Behandlung das passende Produkt und verkaufe es direkt über die Kasse. Der Verkauf wird im Kundenprofil gespeichert.",
      },
      {
        title: "Bestand aktualisiert sich",
        text: "Nach jedem Verkauf wird der Lagerbestand automatisch reduziert. Die Verkaufshistorie zeigt dir, welche Produkte am besten laufen.",
      },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Einfacher Produktverkauf für Kosmetikstudios – klar und übersichtlich.",
    items: [
      { icon: "package", title: "Unbegrenzte Produkte", text: "So viele Artikel wie du willst – ohne Limits.", points: ["Keine Limits", "Kategorien", "Flexible Preise"] },
      { icon: "trending-up", title: "Lagerverwaltung", text: "Bestand auf einen Blick und Warnung bei niedrigen Mengen.", points: ["Bestandsübersicht", "Nachbestellen", "Verkaufshistorie"] },
      { icon: "camera", title: "Bilder & Texte", text: "Produkte mit Fotos und Beschreibungen präsentieren.", points: ["Produktbilder", "Beschreibungen", "Varianten"] },
      { icon: "shopping-bag", title: "Was du verkaufen kannst", text: "Pflege, Gutscheine, Pakete und Zubehör.", points: ["Pflegeprodukte", "Gutscheine", "Pakete"] },
      { icon: "bar-chart", title: "Verkaufsübersicht", text: "Umsatz und Top-Produkte im Blick behalten.", points: ["Umsatz", "Top-Artikel", "Nachvollziehbar"] },
      {
        icon: "credit-card",
        title: "Mit der Kasse",
        text: "Verkauf und Zahlung über die Treatflow Kasse abwickeln.",
        points: ["Ein Checkout", "Kundenprofil", "Professionell"],
        feature: "pos",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "point-of-sale" }, title: "Kassensystem", description: "TSE- & RKSV-konform kassieren", feature: "pos" },
      { href: { page: "vouchers" }, title: "Gutscheine", description: "Online & an der Kasse verkaufen", feature: "vouchers" },
      { href: { page: "client-records" }, title: "Kundenverwaltung", description: "Kaufhistorie im Kundenprofil" },
    ],
  },
  cta: {
    title: "Bereit für deinen Studio-Shop?",
    description: "14 Tage kostenlos testen – Produkte verkaufen und Lager im Blick behalten.",
    secondary: { label: "Zur Kasse", href: { page: "point-of-sale" } },
  },
};
