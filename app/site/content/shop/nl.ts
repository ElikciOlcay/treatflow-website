import type { ShopContent } from "./types";

export const shopNl: ShopContent = {
  meta: {
    title: "Productverkoop & voorraadbeheer voor schoonheidssalons",
    description:
      "Productverkoop voor schoonheidssalons, direct in je salonsoftware. Verkoop verzorgingsproducten aan je klanten en houd je voorraad eenvoudig bij.",
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
    description: "Verzorgingsproducten verkopen in je salon – met voorraadbeheer en verkoophistorie.",
    chips: ["Voorraad in beeld", "Verkoophistorie", "Onbeperkt aantal producten"],
    secondaryCta: { label: "Klantdossiers", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Treatflow productverkoop en voorraadbeheer",
    },
  },
  understand: {
    title: "Verzorgingsproducten direct in je salon verkopen",
    description:
      "Adviseer je klant na de behandeling het juiste product – en leg de verkoop meteen vast. Voorraad en verkoophistorie worden automatisch bijgewerkt.",
    items: [
      {
        icon: "package",
        title: "Producten aanmaken en verkopen",
        text: "Zet serums, crèmes en accessoires in je assortiment. Verkoop ze direct na de behandeling of aan de balie.",
      },
      {
        icon: "trending-up",
        title: "Voorraad altijd in beeld",
        text: "Je ziet altijd hoeveel je nog van een product hebt. Raakt de voorraad op, dan weet je dat je moet bijbestellen.",
      },
      {
        icon: "bar-chart",
        title: "Aankoophistorie per klant",
        text: "In het klantdossier zie je wie welk product heeft gekocht – handig voor advies en nabestellingen.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen van product naar verkoop.",
    steps: [
      {
        title: "Producten aanmaken",
        text: "Voer je producten in met naam, prijs, afbeelding en beginvoorraad. Je kunt zoveel producten aanmaken als je wilt.",
      },
      {
        title: "Verkopen in de salon",
        text: "Adviseer de klant na de behandeling het juiste product en leg de verkoop vast in Treatflow. De verkoop komt automatisch in het klantdossier.",
      },
      {
        title: "Voorraad werkt zichzelf bij",
        text: "Na elke verkoop wordt de voorraad automatisch bijgewerkt. In de verkoophistorie zie je welke producten het best lopen.",
      },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Eenvoudige productverkoop voor schoonheidssalons – helder en overzichtelijk.",
    items: [
      { icon: "package", title: "Onbeperkt aantal producten", text: "Zoveel producten als je wilt – zonder limiet.", points: ["Geen limieten", "Categorieën", "Flexibele prijzen"] },
      { icon: "trending-up", title: "Voorraadbeheer", text: "Voorraad in één oogopslag, met een melding als iets bijna op is.", points: ["Voorraadoverzicht", "Bijbestellen", "Verkoophistorie"] },
      { icon: "camera", title: "Foto's & teksten", text: "Producten presenteren met foto's en beschrijvingen.", points: ["Productfoto's", "Beschrijvingen", "Varianten"] },
      { icon: "shopping-bag", title: "Wat je kunt verkopen", text: "Verzorging, pakketten en accessoires.", points: ["Verzorgingsproducten", "Pakketten", "Accessoires"] },
      { icon: "bar-chart", title: "Verkoopoverzicht", text: "Houd omzet en bestsellers in de gaten.", points: ["Omzet", "Bestsellers", "Overzichtelijk"] },
      { icon: "users", title: "Gekoppeld aan het klantdossier", text: "Elke verkoop wordt in het dossier van de klant opgeslagen.", points: ["Aankoopgeschiedenis", "Advies", "Nabestellingen"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Aankoophistorie in het klantdossier" },
      { href: { page: "treatment-documentation" }, title: "Behandelverslagen", description: "Behandelingen en nazorg vastleggen" },
      { href: { page: "online-booking" }, title: "Online boeken", description: "Klanten boeken 24/7 – zonder commissie" },
    ],
  },
  cta: {
    title: "Klaar om producten te verkopen in je salon?",
    description: "Probeer het 14 dagen gratis – verkoop producten en houd je voorraad bij.",
  },
};
