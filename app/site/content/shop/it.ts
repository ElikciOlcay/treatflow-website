import type { ShopContent } from "./types";

export const shopIt: ShopContent = {
  meta: {
    title: "Vendita prodotti e magazzino per centri estetici",
    description:
      "Vendita prodotti integrata nel gestionale del centro estetico: vendi i prodotti per la cura a casa direttamente ai tuoi clienti e tieni sotto controllo il magazzino in modo semplice.",
    keywords: [
      "vendita prodotti centro estetico",
      "gestione magazzino estetica",
      "vendere prodotti cosmetici",
      "gestione magazzino centro estetico",
      "rivendita prodotti centro estetico",
    ],
  },
  breadcrumb: "Shop",
  hero: {
    eyebrow: "Vendita prodotti e magazzino",
    eyebrowIcon: "package",
    title: { before: "Vendi prodotti e tieni d'occhio il ", highlight: "magazzino" },
    description: "Vendi i prodotti per la cura a casa nel tuo centro, con giacenze e storico delle vendite sempre aggiornati.",
    chips: ["Magazzino sotto controllo", "Storico vendite", "Prodotti illimitati"],
    secondaryCta: { label: "Schede clienti", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/it/shop-hero.png",
      alt: "Vendita prodotti e gestione del magazzino con Treatflow",
    },
  },
  understand: {
    title: "La rivendita prodotti, direttamente in centro",
    description:
      "Dopo il trattamento consigli al cliente il prodotto giusto e registri subito la vendita. Giacenze e storico delle vendite si aggiornano da soli.",
    items: [
      {
        icon: "package",
        title: "Crea e vendi prodotti",
        text: "Inserisci sieri, creme e accessori come articoli e vendili subito dopo il trattamento o alla reception.",
      },
      {
        icon: "trending-up",
        title: "Giacenze sempre visibili",
        text: "Vedi in ogni momento quanto resta di un prodotto. Quando le scorte sono basse, sai che è ora di riordinare.",
      },
      {
        icon: "bar-chart",
        title: "Storico vendite per cliente",
        text: "Nella scheda cliente vedi chi ha acquistato quale prodotto: ideale per consigli mirati e riacquisti.",
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
        text: "Dopo il trattamento consigli al cliente il prodotto giusto e registri la vendita in Treatflow. La vendita viene salvata nella scheda cliente.",
      },
      {
        title: "Le giacenze si aggiornano da sole",
        text: "Dopo ogni vendita la giacenza si riduce automaticamente. Lo storico mostra quali prodotti vendono di più.",
      },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Vendita prodotti semplice per centri estetici, chiara e ordinata.",
    items: [
      { icon: "package", title: "Prodotti illimitati", text: "Tutti gli articoli che vuoi, senza limiti.", points: ["Nessun limite", "Categorie", "Prezzi flessibili"] },
      { icon: "trending-up", title: "Gestione magazzino", text: "Giacenze in un colpo d'occhio e avviso quando le scorte sono basse.", points: ["Panoramica giacenze", "Riordino", "Storico vendite"] },
      { icon: "camera", title: "Immagini e testi", text: "Presenta i prodotti con foto e descrizioni.", points: ["Foto prodotto", "Descrizioni", "Varianti"] },
      { icon: "shopping-bag", title: "Cosa puoi vendere", text: "Prodotti per la cura, pacchetti e accessori.", points: ["Prodotti per la cura", "Pacchetti", "Accessori"] },
      { icon: "bar-chart", title: "Panoramica vendite", text: "Tieni d'occhio fatturato e prodotti più venduti.", points: ["Fatturato", "Più venduti", "Tracciabile"] },
      { icon: "users", title: "Collegato alla scheda cliente", text: "Ogni vendita viene salvata nella scheda del cliente.", points: ["Storico acquisti", "Consigli", "Riacquisti"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Schede clienti", description: "Storico acquisti nella scheda cliente" },
      { href: { page: "treatment-documentation" }, title: "Documentazione", description: "Registra trattamenti e consigli post-trattamento" },
      { href: { page: "online-booking" }, title: "Prenotazioni online", description: "I clienti prenotano 24/7, senza commissioni" },
    ],
  },
  cta: {
    title: "Vuoi vendere prodotti nel tuo centro?",
    description: "Provalo gratis per 14 giorni: vendi prodotti e tieni d'occhio il magazzino.",
  },
};
