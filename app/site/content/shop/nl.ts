import type { ShopContent } from "./types";

export const shopNl: ShopContent = {
  meta: {
    title: "Productverkoop & voorraad voor schoonheidssalons",
    description:
      "Geïntegreerde productverkoop voor schoonheidssalons. Verkoop verzorgingsproducten direct aan je klanten, met eenvoudig voorraadbeheer.",
    keywords: [
      "productverkoop schoonheidssalon",
      "voorraadbeheer salon",
      "verzorgingsproducten verkopen",
      "verkoopsysteem salon",
      "extra omzet schoonheidssalon",
    ],
  },
  breadcrumb: "Shop",
  hero: {
    eyebrow: "Productverkoop & voorraad",
    eyebrowIcon: "package",
    title: { before: "Producten verkopen, ", highlight: "voorraad", after: " in beeld" },
    description: "Verzorgingsproducten verkopen in je salon – met voorraad en verkoopgeschiedenis.",
    chips: ["Voorraad in beeld", "Verkoopgeschiedenis", "Onbeperkt producten"],
    secondaryCta: { label: "Klantdossiers", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Treatflow productverkoop en voorraadbeheer",
    },
  },
  understand: {
    title: "Verzorgingsproducten direct in je salon verkopen",
    description:
      "Adviseer je klant na de behandeling het juiste product – en leg de verkoop meteen vast. Voorraad en verkoopgeschiedenis worden automatisch bijgewerkt.",
    items: [
      {
        icon: "package",
        title: "Producten aanmaken en verkopen",
        text: "Leg serums, crèmes en accessoires vast als artikelen. Verkoop ze direct na de behandeling of aan de balie.",
      },
      {
        icon: "trending-up",
        title: "Voorraad altijd in beeld",
        text: "Je ziet altijd hoeveel er van een product over is. Is de voorraad laag, dan weet je dat je moet bijbestellen.",
      },
      {
        icon: "bar-chart",
        title: "Verkoopgeschiedenis per klant",
        text: "In het klantprofiel zie je wie welk product heeft gekocht – ideaal voor advies en nabestellingen.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen van product naar verkoop.",
    steps: [
      {
        title: "Producten aanmaken",
        text: "Voer je artikelen in met naam, prijs, afbeelding en beginvoorraad. Je kunt zoveel producten aanmaken als je wilt.",
      },
      {
        title: "Verkopen in de salon",
        text: "Adviseer de klant na de behandeling het juiste product en leg de verkoop vast in Treatflow. De verkoop wordt opgeslagen in het klantprofiel.",
      },
      {
        title: "Voorraad werkt zichzelf bij",
        text: "Na elke verkoop wordt de voorraad automatisch verlaagd. De verkoopgeschiedenis laat zien welke producten het best lopen.",
      },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Eenvoudige productverkoop voor schoonheidssalons – helder en overzichtelijk.",
    items: [
      { icon: "package", title: "Onbeperkt producten", text: "Zoveel artikelen als je wilt – zonder limieten.", points: ["Geen limieten", "Categorieën", "Flexibele prijzen"] },
      { icon: "trending-up", title: "Voorraadbeheer", text: "Voorraad in één oogopslag en een melding bij lage aantallen.", points: ["Voorraadoverzicht", "Bijbestellen", "Verkoopgeschiedenis"] },
      { icon: "camera", title: "Foto's & teksten", text: "Producten presenteren met foto's en beschrijvingen.", points: ["Productfoto's", "Beschrijvingen", "Varianten"] },
      { icon: "shopping-bag", title: "Wat je kunt verkopen", text: "Verzorging, pakketten en accessoires.", points: ["Verzorgingsproducten", "Pakketten", "Accessoires"] },
      { icon: "bar-chart", title: "Verkoopoverzicht", text: "Omzet en topproducten in de gaten houden.", points: ["Omzet", "Topartikelen", "Navolgbaar"] },
      { icon: "users", title: "Gekoppeld aan het klantprofiel", text: "Elke verkoop wordt in het profiel van de klant opgeslagen.", points: ["Aankoopgeschiedenis", "Advies", "Nabestellingen"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Aankoopgeschiedenis in het klantprofiel" },
      { href: { page: "treatment-documentation" }, title: "Documentatie", description: "Behandelingen en nazorg vastleggen" },
      { href: { page: "online-booking" }, title: "Online boeken", description: "Klanten boeken 24/7 – zonder commissie" },
    ],
  },
  cta: {
    title: "Klaar voor je salonshop?",
    description: "Probeer het 14 dagen gratis – verkoop producten en houd je voorraad in beeld.",
  },
};
