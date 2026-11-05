import type { IntegrationsContent } from "./types";

export const integrationsNl: IntegrationsContent = {
  meta: {
    title: "Integraties en apps voor je schoonheidssalon",
    description:
      "Koppel Treatflow aan Google Agenda, Zapier en AI-assistenten zoals Claude of ChatGPT, en ontvang online betalingen met Treatflow Pay – agendasynchronisatie, automatisering en betalingen in één platform.",
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
    title: { before: "Apps koppelen, ", highlight: "gegevens", after: " altijd gelijk" },
    description:
      "Google Agenda, Zapier, AI-assistenten en Treatflow Pay – één keer koppelen, overal actueel.",
    chips: ["Google Agenda", "Zapier", "AI-assistenten (MCP)", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Bekijk de agenda", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Agenda", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automatisering", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude & ChatGPT", category: "AI-assistenten", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "Treatflow Pay", category: "Online betalen", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
    ],
  },
  understand: {
    title: "In één oogopslag: waarvoor integraties dienen",
    description: "Minder dubbel werk – gegevens stromen tussen je tools.",
    items: [
      {
        icon: "refresh",
        title: "Minder dubbel werk",
        text: "Klanten en afspraken één keer invoeren – je agenda en gekoppelde tools blijven actueel.",
      },
      {
        icon: "workflow",
        title: "Automatische processen",
        text: "Agenda-items en Zapier-workflows lopen ongemerkt op de achtergrond.",
      },
      {
        icon: "shield-check",
        title: "AVG-conform",
        text: "Veilige koppelingen en gegevensverwerking volgens EU-regels. Medische gegevens verlaten Treatflow nooit.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen gekoppeld – zonder technische kennis.",
    steps: [
      { title: "Kies een app", text: "Kies de gewenste integratie onder Studio-instellingen > Apps." },
      { title: "Koppel je account", text: "Log één keer in bij de aanbieder – bijvoorbeeld Google, Zapier, Claude of ChatGPT." },
      { title: "Automatisch gesynchroniseerd", text: "Afspraken, klanten en workflows werken vanaf nu samen." },
    ],
  },
  cards: {
    title: "Deze apps zijn geïntegreerd",
    description: "Van agendasynchronisatie en automatisering tot AI-assistenten en online betalingen.",
    items: [
      {
        icon: "calendar",
        title: "Google Agenda",
        text: "Synchronisatie in twee richtingen: Treatflow en Google blijven realtime op elkaar afgestemd.",
        points: ["Synchronisatie in twee richtingen", "Geen dubbele boekingen", "Privé en salon gescheiden"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Aanbetalingen of volledige betalingen bij online boekingen – veilig verwerkt via Stripe.",
        points: ["Aanbetalingen", "Volledig vooraf betalen", "2,69% – transparant"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Koppel meer dan 7.000 apps – workflows bij nieuwe afspraken en formulieren.",
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
          "Treatflow koppelt rechtstreeks met Google Agenda (afspraken synchroniseren), Treatflow Pay (online betalen) en AI-assistenten zoals Claude of ChatGPT via het Model Context Protocol (MCP). Via Zapier bereik je daarnaast meer dan 7.000 andere apps, zoals Google Sheets, Mailchimp of je CRM.",
      },
      {
        question: "Hoe synchroniseer ik mijn afspraken met Google Agenda?",
        answer:
          "Je koppelt je Google-account één keer onder Studio-instellingen > Apps. Daarna worden afspraken automatisch in beide richtingen gesynchroniseerd: boekingen in Treatflow verschijnen in je Google Agenda en omgekeerd – zo voorkom je dubbele boekingen.",
      },
      {
        question: "Kan ik Treatflow gebruiken met ChatGPT of Claude?",
        answer:
          "Ja. Voeg Treatflow toe als connector in je AI-assistent en log in met je Treatflow-account. Daarna kun je vragen stellen over afspraken, vrije tijden, klanten of omzet. De toegang is standaard alleen-lezen; als je het toestaat, kan de assistent ook afspraken aanmaken en verplaatsen, waarbij elke wijziging wordt vastgelegd. Behandeldocumentatie, formulieren en foto's worden nooit gedeeld.",
      },
      {
        question: "Waarvoor heb ik de Zapier-integratie nodig?",
        answer:
          "Met Zapier automatiseer je je eigen workflows zonder te programmeren. Bij een nieuwe afspraak of een ingevuld formulier kan Treatflow bijvoorbeeld automatisch een rij in Google Sheets toevoegen, een contact in je CRM aanmaken of een e-mail versturen.",
      },
      {
        question: "Kunnen klanten online betalen bij het boeken?",
        answer:
          "Ja. Met Treatflow Pay betalen klanten bij een online boeking een aanbetaling of het volledige bedrag – veilig verwerkt via Stripe. Je bepaalt per behandeling of betaling nodig is.",
        feature: "pay",
      },
      {
        question: "Zitten de integraties in elk pakket?",
        answer:
          "De integraties zitten in het Booking-pakket. Na je registratie vind en activeer je ze in het dashboard onder Studio-instellingen > Apps.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Afsprakenkalender", description: "Alle afspraken centraal en gesynchroniseerd" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Aanbetaling of volledige betaling", feature: "pay" },
      { href: { page: "online-booking" }, title: "Online boeken", description: "24/7 boeken met betaling" },
      { href: { page: "messaging" }, title: "Herinneringen", description: "Automatische bevestigingen en herinneringen" },
    ],
  },
  cta: {
    title: "Gekoppelde tools voor je salon",
    description: "Probeer het 14 dagen gratis – koppel Google Agenda, Zapier en je AI-assistent in een paar minuten.",
    secondary: { label: "Alle functies", href: { page: "features" } },
  },
};
