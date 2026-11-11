import type { IntegrationsContent } from "./types";

export const integrationsNl: IntegrationsContent = {
  meta: {
    title: "Koppelingen en integraties voor je salonsoftware",
    description:
      "Koppel Treatflow aan Google Agenda, Zapier en AI-assistenten zoals Claude of ChatGPT, en ontvang online betalingen met Treatflow Pay – agenda synchroniseren, automatiseren en betalen in één platform.",
    keywords: [
      "Treatflow integraties",
      "salonsoftware koppelingen",
      "Google Agenda synchronisatie salon",
      "Zapier schoonheidssalon",
      "salonsoftware ChatGPT",
      "Claude MCP salonsoftware",
      "online betalen schoonheidssalon",
      "agenda synchroniseren",
    ],
  },
  schema: { id: "integrationen" },
  breadcrumb: "Integraties",
  hero: {
    eyebrow: "Integraties",
    eyebrowIcon: "plug",
    title: { before: "Apps koppelen, ", highlight: "gegevens", after: " altijd up-to-date" },
    description:
      "Google Agenda, Zapier, AI-assistenten en Treatflow Pay – één keer koppelen, overal actueel.",
    chips: ["Google Agenda", "Zapier", "AI-assistenten (MCP)", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Bekijk de online agenda", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Agenda", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automatisering", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude & ChatGPT", category: "AI-assistenten", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "Treatflow Pay", category: "Online betalen", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
    ],
  },
  understand: {
    title: "Wat heb je aan koppelingen?",
    description: "Minder dubbel werk – je gegevens gaan vanzelf heen en weer tussen je tools.",
    items: [
      {
        icon: "refresh",
        title: "Minder dubbel werk",
        text: "Klanten en afspraken voer je één keer in – je agenda en gekoppelde tools blijven up-to-date.",
      },
      {
        icon: "workflow",
        title: "Automatische processen",
        text: "Agenda-afspraken en Zapier-workflows lopen ongemerkt op de achtergrond.",
      },
      {
        icon: "shield-check",
        title: "AVG-conform",
        text: "Veilige koppelingen en gegevensverwerking volgens de Europese regels. Medische gegevens verlaten Treatflow nooit.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen gekoppeld – geen technische kennis nodig.",
    steps: [
      { title: "Kies een app", text: "Kies de koppeling die je wilt onder Studio-instellingen > Apps." },
      { title: "Koppel je account", text: "Log één keer in bij de aanbieder – bijvoorbeeld Google, Zapier, Claude of ChatGPT." },
      { title: "Automatisch gesynchroniseerd", text: "Afspraken, klanten en workflows werken vanaf nu naadloos samen." },
    ],
  },
  cards: {
    title: "Deze koppelingen zijn er",
    description: "Van agenda synchroniseren en automatiseren tot AI-assistenten en online betalen.",
    items: [
      {
        icon: "calendar",
        title: "Google Agenda",
        text: "Tweerichtingssynchronisatie: Treatflow en Google blijven realtime gelijk.",
        points: ["Sync in twee richtingen", "Geen dubbele boekingen", "Privé en salon gescheiden"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Aanbetalingen of volledige betalingen bij online boekingen – veilig verwerkt via Stripe.",
        points: ["Aanbetalingen", "Volledig vooraf betalen", "2,69% – zonder verrassingen"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Verbind meer dan 7.000 apps – met workflows bij nieuwe afspraken en ingevulde formulieren.",
        points: ["7.000+ apps", "Webhooks", "Zonder code"],
      },
      {
        icon: "bot",
        title: "AI-assistenten (MCP)",
        text: "Koppel Claude, ChatGPT en andere assistenten en stel vragen over afspraken, klanten of omzet.",
        points: ["Standaard alleen lezen", "Medische gegevens blijven in Treatflow", "Toegang altijd intrekbaar"],
      },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over integraties",
    items: [
      {
        question: "Welke apps kan ik aan Treatflow koppelen?",
        answer:
          "Treatflow koppelt rechtstreeks met Google Agenda (afspraken synchroniseren), Treatflow Pay (online betalen) en AI-assistenten zoals Claude of ChatGPT via het Model Context Protocol (MCP). Via Zapier verbind je daarnaast meer dan 7.000 andere apps, zoals Google Sheets, Mailchimp of je CRM.",
      },
      {
        question: "Hoe synchroniseer ik mijn afspraken met Google Agenda?",
        answer:
          "Je koppelt je Google-account één keer onder Studio-instellingen > Apps. Daarna worden afspraken automatisch in twee richtingen gesynchroniseerd: boekingen in Treatflow verschijnen in je Google Agenda en andersom – zo voorkom je dubbele boekingen.",
      },
      {
        question: "Kan ik Treatflow gebruiken met ChatGPT of Claude?",
        answer:
          "Ja. Voeg Treatflow toe als connector in je AI-assistent en log in met je Treatflow-account. Daarna kun je vragen stellen over afspraken, vrije tijden, klanten of omzet. De toegang is standaard alleen-lezen; als je het toestaat, kan de assistent ook afspraken aanmaken en verplaatsen en klanten en producten aanmaken of wijzigen, waarbij elke wijziging wordt vastgelegd. Annuleren en verwijderen kan niet, en behandelverslagen, formulieren en foto's worden nooit gedeeld.",
      },
      {
        question: "Waarvoor gebruik ik de Zapier-koppeling?",
        answer:
          "Met Zapier automatiseer je je eigen workflows zonder te programmeren. Bij een nieuwe afspraak of een ingevuld formulier kan Treatflow bijvoorbeeld automatisch een rij in Google Sheets toevoegen, een contact in je CRM aanmaken of een e-mail versturen.",
      },
      {
        question: "Kunnen klanten online betalen bij het boeken?",
        answer:
          "Ja. Met Treatflow Pay betalen klanten bij een online boeking een aanbetaling of het hele bedrag – veilig verwerkt via Stripe. Je bepaalt per behandeling of er vooraf betaald moet worden.",
        feature: "pay",
      },
      {
        question: "Zitten de koppelingen in elk pakket?",
        answer:
          "De koppelingen zitten in het Booking-pakket. Na je aanmelding vind en activeer je ze in het dashboard onder Studio-instellingen > Apps.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Online agenda", description: "Alle afspraken centraal en gesynchroniseerd" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Aanbetaling of volledige betaling", feature: "pay" },
      { href: { page: "online-booking" }, title: "Online boeken", description: "24/7 boeken met betaling" },
      { href: { page: "messaging" }, title: "Herinneringen", description: "Automatische bevestigingen en herinneringen" },
    ],
  },
  cta: {
    title: "Al je tools gekoppeld aan je salon",
    description: "Probeer het 14 dagen gratis – koppel Google Agenda, Zapier en je AI-assistent in een paar minuten.",
    secondary: { label: "Alle functies", href: { page: "features" } },
  },
};
