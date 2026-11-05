import type { ShopContent } from "./types";

export const shopIt: ShopContent = {
  meta: {
    title: "Vendita prodotti e magazzino per centri estetici",
    description:
      "Vendita prodotti integrata per centri estetici. Vendi i prodotti per la cura direttamente alle tue clienti e tieni il magazzino sotto controllo in modo semplice.",
    keywords: [
      "vendita prodotti centro estetico",
      "gestione magazzino estetica",
      "vendere prodotti cosmetici",
      "sistema di vendita salone",
      "ricavi extra centro estetico",
    ],
  },
  breadcrumb: "Shop",
  hero: {
    eyebrow: "Vendita prodotti e magazzino",
    eyebrowIcon: "package",
    title: { before: "Vendi prodotti, tieni d'occhio il ", highlight: "magazzino" },
    description: "Vendi prodotti per la cura nel tuo centro – con giacenze e storico delle vendite.",
    chips: ["Magazzino sotto controllo", "Storico vendite", "Prodotti illimitati"],
    secondaryCta: { label: "Schede clienti", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Vendita prodotti e gestione del magazzino con Treatflow",
    },
  },
  understand: {
    title: "Vendi i prodotti per la cura direttamente nel centro",
    description:
      "Dopo il trattamento consiglia alla cliente il prodotto giusto e registra subito la vendita. Giacenze e storico delle vendite si aggiornano automaticamente.",
    items: [
      {
        icon: "package",
        title: "Crea e vendi prodotti",
        text: "Inserisci sieri, creme e accessori come articoli. Vendili subito dopo il trattamento o alla reception.",
      },
      {
        icon: "trending-up",
        title: "Giacenze sempre visibili",
        text: "Vedi in ogni momento quanto resta di un prodotto. Quando le scorte sono basse, sai che è ora di riordinare.",
      },
      {
        icon: "bar-chart",
        title: "Storico vendite per cliente",
        text: "Nel profilo cliente vedi chi ha acquistato quale prodotto – ideale per consigli e riacquisti.",
      },
    ],
  },
  howItWorks: {
    description: "Dal prodotto alla vendita in tre passaggi.",
    steps: [
      {
        title: "Crea i prodotti",
        text: "Inserisci i tuoi articoli con nome, prezzo, immagine e giacenza iniziale. Puoi creare tutti i prodotti che vuoi.",
      },
      {
        title: "Vendi nel centro",
        text: "Dopo il trattamento consiglia alla cliente il prodotto giusto e registra la vendita in Treatflow. La vendita viene salvata nel profilo cliente.",
      },
      {
        title: "Le giacenze si aggiornano da sole",
        text: "Dopo ogni vendita la giacenza si riduce automaticamente. Lo storico mostra quali prodotti vendono di più.",
      },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Vendita prodotti semplice per centri estetici – chiara e ordinata.",
    items: [
      { icon: "package", title: "Prodotti illimitati", text: "Tutti gli articoli che vuoi – senza limiti.", points: ["Nessun limite", "Categorie", "Prezzi flessibili"] },
      { icon: "trending-up", title: "Gestione magazzino", text: "Giacenze a colpo d'occhio e avviso quando le quantità sono basse.", points: ["Panoramica giacenze", "Riordino", "Storico vendite"] },
      { icon: "camera", title: "Immagini e testi", text: "Presenta i prodotti con foto e descrizioni.", points: ["Foto prodotto", "Descrizioni", "Varianti"] },
      { icon: "shopping-bag", title: "Cosa puoi vendere", text: "Prodotti per la cura, pacchetti e accessori.", points: ["Prodotti per la cura", "Pacchetti", "Accessori"] },
      { icon: "bar-chart", title: "Panoramica vendite", text: "Tieni d'occhio fatturato e prodotti più venduti.", points: ["Fatturato", "Più venduti", "Tracciabile"] },
      { icon: "users", title: "Collegato al profilo cliente", text: "Ogni vendita viene salvata nel profilo della cliente.", points: ["Storico acquisti", "Consigli", "Riacquisti"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Schede clienti", description: "Storico acquisti nel profilo cliente" },
      { href: { page: "treatment-documentation" }, title: "Documentazione", description: "Registra trattamenti e consigli post-trattamento" },
      { href: { page: "online-booking" }, title: "Prenotazioni online", description: "Le clienti prenotano 24/7 – senza commissioni" },
    ],
  },
  cta: {
    title: "Vuoi vendere prodotti nel tuo centro?",
    description: "Provalo gratis per 14 giorni – vendi prodotti e tieni d'occhio il magazzino.",
  },
};
