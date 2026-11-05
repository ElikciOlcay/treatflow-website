import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationNl: TreatmentDocumentationContent = {
  meta: {
    title: "Digitale behandeldocumentatie voor schoonheidssalons",
    description:
      "Digitale behandeldocumentatie voor schoonheidssalons en esthetische klinieken: voor-en-nafoto's, notities, apparaatinstellingen en historie in het klantprofiel. Notities inspreken in plaats van typen.",
    keywords: [
      "behandeldocumentatie software",
      "behandelverslag schoonheidssalon",
      "voor en na foto's software",
      "behandelnotities app",
      "notities inspreken",
      "documentatie esthetische kliniek",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Digitale behandeldocumentatie voor schoonheidssalons",
      description: "Digitale behandeldocumentatie met voor-en-nafoto's, notities en historie.",
    },
  },
  breadcrumb: "Documentatie",
  hero: {
    eyebrow: "Behandeldocumentatie",
    eyebrowIcon: "file-text",
    title: { before: "Behandelingen digitaal ", highlight: "vastleggen" },
    description:
      "Foto's, notities en instellingen op één plek – met AI-ondersteuning. Bij de volgende afspraak weet je meteen wat er is gedaan.",
    chips: ["Voor-en-nafoto's", "AI-dictaat", "Digitale handtekening"],
    secondaryCta: { label: "Digitale formulieren", href: { page: "forms" } },
    capsules: [
      {
        question: "Welke software is geschikt voor het documenteren van beautybehandelingen?",
        answer:
          "Treatflow legt behandelingen digitaal vast met voor-en-nafoto's, instellingen, notities en handtekening. Vooral bij behandelingen met apparatuur zoals laser of IPL is volledige documentatie belangrijk – Treatflow ondersteunt precies die werkwijze.",
      },
      {
        question: "Hoe documenteer ik het verloop van esthetische behandelingen?",
        answer:
          "Elke sessie krijgt een verslag met instellingen, producten, foto's en notities. De historie blijft in het klantdossier. Je kunt notities inspreken; Treatflow maakt er tekst van en kan die desgewenst verfijnen.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Treatflow behandeldocumentatie met foto's en notities",
    },
  },
  understand: {
    title: "Elke behandeling netjes vastleggen",
    description:
      "Na elke sessie heb je een digitaal verslag met foto's, notities en instellingen – alles opgeslagen in het klantprofiel.",
    items: [
      {
        icon: "camera",
        title: "Voor-en-nafoto's",
        text: "Leg de voortgang vast met foto's. Zo laat je je klant zien hoe de behandeling verloopt.",
      },
      {
        icon: "brain",
        title: "Vastleggen met spraak of AI",
        text: "Spreek je notities in. Treatflow maakt er tekst van en kan die desgewenst met AI verfijnen. Minder typen, meer tijd voor de behandeling.",
      },
      {
        icon: "shield",
        title: "Volledig en traceerbaar",
        text: "Elk verslag wordt met datum, instellingen en optionele handtekening in het klantprofiel opgeslagen – zo kun je laten zien wat er is gedaan als er later vragen komen.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen naar een volledig verslag.",
    steps: [
      { title: "Documentatie openen", text: "Open de documentatie direct vanuit de afspraak of het klantprofiel – klant en behandeling zijn al ingevuld." },
      { title: "Foto's en notities toevoegen", text: "Upload foto's, vul de behandelinstellingen in en spreek of typ je notities. Laat de klant indien nodig ondertekenen." },
      { title: "Opgeslagen en oproepbaar", text: "Alles komt automatisch in het klantprofiel. Bij de volgende afspraak zie je meteen wat er de vorige keer is gedaan." },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Alles wat je nodig hebt voor nette behandeldocumentatie – zonder papierwerk.",
    items: [
      { icon: "camera", title: "Voor-en-nafoto's", text: "Foto's direct bij de behandeling opslaan en chronologisch vergelijken.", points: ["Zelfde context", "In het klantprofiel", "AVG-conform"] },
      { icon: "mic", title: "Spraakdictaat", text: "Notities inspreken in plaats van typen – ideaal tijdens of direct na de behandeling.", points: ["Handsfree", "Snel", "Helder geformuleerd"] },
      { icon: "brain", title: "AI-assistent", text: "Desgewenst de ingesproken tekst verfijnen en structureren – jij controleert het verslag voordat je opslaat.", points: ["Tekst verfijnen", "Structuur", "Minder typwerk"] },
      { icon: "file-text", title: "Instellingen & producten", text: "Apparaatwaarden, producten en instellingen netjes vastleggen.", points: ["Laser/IPL", "Producten", "Nazorg"] },
      { icon: "pen-tool", title: "Digitale handtekening", text: "Toestemming of bevestiging digitaal op de tablet vastleggen.", points: ["Op het apparaat", "In het profiel", "Traceerbaar"] },
      { icon: "shield", title: "Veilig archief", text: "Alle documentatie wordt op EU-servers bewaard en is altijd oproepbaar.", points: ["EU-servers", "Versleuteld", "Altijd beschikbaar"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over documentatie",
    items: [
      {
        question: "Welke software is geschikt voor het documenteren van beautybehandelingen?",
        answer:
          "Treatflow legt behandelingen digitaal vast met voor-en-nafoto's, instellingen, notities en handtekening. Vooral bij behandelingen met apparatuur zoals laser of IPL is volledige documentatie belangrijk – Treatflow ondersteunt precies die werkwijze.",
      },
      {
        question: "Hoe documenteer ik het verloop van esthetische behandelingen?",
        answer:
          "Elke sessie krijgt een verslag met instellingen, batchnummers, foto's en notities. De historie in het klantdossier toont het verloop over meerdere afspraken. Je kunt notities inspreken; Treatflow maakt er tekst van en kan die desgewenst met AI verfijnen.",
      },
      {
        question: "Is behandeldocumentatie verplicht in een schoonheidssalon?",
        answer:
          "Dat hangt af van je land en de behandeling. Bij behandelingen met apparatuur zoals laser of IPL wordt volledige documentatie meestal verwacht. Voor alle andere behandelingen is het aan te raden – voor rechtszekerheid, kwaliteit en klanttevredenheid.",
      },
      {
        question: "Wat hoort in professionele behandeldocumentatie?",
        answer:
          "Soort behandeling en datum, producten en instellingen, voor-en-nafoto's, huidbeoordeling, verloopnotities, nazorgadviezen en desgewenst de handtekening van de klant.",
      },
      {
        question: "Hoe maak ik goede voor-en-nafoto's?",
        answer:
          "Onder dezelfde omstandigheden (licht, hoek, afstand). In Treatflow sla je foto's direct op in de documentatie en koppel je ze aan het klantprofiel.",
      },
      {
        question: "Wat leg ik vast bij laser- en IPL-behandelingen?",
        answer:
          "Meestal het adviesgesprek, de toestemming, apparaatinstellingen (bijv. energie, frequentie, pulsduur), het behandelgebied, de huidreactie en nazorgadviezen.",
      },
      {
        question: "Kan ik behandelnotities inspreken in plaats van typen?",
        answer:
          "Ja. In de documentatie spreek je de notities in. Treatflow zet spraak om in tekst en kan die desgewenst met AI verfijnen. Het dossier wordt niet volledig automatisch geschreven.",
      },
      {
        question: "Kan ik behandelzones op foto's of schetsen markeren?",
        answer:
          "Voor-en-nafoto's sla je direct bij de behandeling op en zones markeer je op de foto's; in formulieren zijn er schetsvelden met een gezichts- of lichaamssjabloon. Er is geen aparte bodychart-module.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Formulieren", description: "Digitale intake- en toestemmingsformulieren" },
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Historie in het klantprofiel" },
      { href: { page: "appointment-calendar" }, title: "Afsprakenagenda", description: "Documentatie openen vanuit de afspraak" },
    ],
  },
  cta: {
    title: "Klaar voor overzichtelijke documentatie?",
    description: "Probeer het 14 dagen gratis – geen creditcard nodig. Documentatie, foto's en handtekeningen in één app.",
    secondary: { label: "Digitale formulieren", href: { page: "forms" } },
  },
};
