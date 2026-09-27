import {
  APP_REGISTER_BY_MARKET,
  DEMO_BOOKING_URL,
} from "@/app/i18n/market-access";

export { DEMO_BOOKING_URL };

export type DemoFirstLang = "de" | "en" | "tr" | "nl" | "fi";

export type DemoFirstCopy = {
  demo: string;
  demoNote: string;
  trialPrompt: string;
  trialDetail: string;
  trialNoCard: string;
  selfServeLead: string;
  selfServeLink: string;
  heroAddon: string;
  closingTitle: string;
  closingText: string;
  stepsTitle: string;
  stepsIntro: string;
  steps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
};

const de: DemoFirstCopy = {
  demo: "Persönliche Demo buchen",
  demoNote: "Kostenlos und unverbindlich",
  trialPrompt: "Lieber selbst testen?",
  trialDetail: "14 Tage kostenlos ausprobieren",
  trialNoCard: "Ohne Kreditkarte",
  selfServeLead: "Du möchtest dich zuerst selbst umsehen?",
  selfServeLink: "Starte deinen kostenlosen Test.",
  heroAddon:
    "Wir zeigen dir persönlich, wie Treatflow zu deinem Studio passt – und beantworten deine Fragen zu Terminen, Dokumentation und Kasse.",
  closingTitle: "Passt Treatflow zu deinem Studio? Finden wir es gemeinsam heraus.",
  closingText:
    "Lerne Treatflow in einer persönlichen Demo kennen und stelle deine Fragen zu deinem Studioalltag.",
  stepsTitle: "So startest du mit Treatflow",
  stepsIntro: "Klarer Ablauf, ohne Demo-Pflicht für deinen Account.",
  steps: [
    {
      title: "Dein Studio kennenlernen",
      desc: "Buche eine persönliche Demo und erzähle uns, was du im Studioalltag vereinfachen möchtest.",
    },
    {
      title: "Treatflow in Aktion sehen",
      desc: "Wir zeigen dir die passenden Funktionen und klären deine Fragen.",
    },
    {
      title: "Mit Unterstützung starten",
      desc: "Teste Treatflow und besprich mit uns die nächsten Schritte für deinen Start.",
    },
  ],
  faqs: [
    {
      question: "Muss ich vor dem Test eine Demo buchen?",
      answer:
        "Nein. Du kannst Treatflow auch direkt 14 Tage kostenlos testen. In einer persönlichen Demo zeigen wir dir vorab die Funktionen, die für dein Studio interessant sind.",
    },
    {
      question: "Was erwartet mich in der Demo?",
      answer:
        "Wir sprechen über deinen Studioalltag, zeigen dir passende Funktionen und beantworten deine Fragen zum Einstieg.",
    },
  ],
};

const en: DemoFirstCopy = {
  demo: "Book a personal demo",
  demoNote: "Free and without obligation",
  trialPrompt: "Prefer to try it yourself?",
  trialDetail: "Try it free for 14 days",
  trialNoCard: "No credit card",
  selfServeLead: "Want to look around on your own first?",
  selfServeLink: "Start your free trial.",
  heroAddon:
    "We'll show you personally how Treatflow fits your studio – and answer your questions about appointments, documentation and checkout.",
  closingTitle: "Does Treatflow fit your studio? Let's find out together.",
  closingText:
    "Get to know Treatflow in a personal demo and ask your questions about day-to-day studio work.",
  stepsTitle: "How to start with Treatflow",
  stepsIntro: "A clear path. A demo is not required to create an account.",
  steps: [
    {
      title: "Get to know your studio",
      desc: "Book a personal demo and tell us what you want to simplify in day-to-day studio work.",
    },
    {
      title: "See Treatflow in action",
      desc: "We show you the features that fit and answer your questions.",
    },
    {
      title: "Start with support",
      desc: "Try Treatflow and talk through the next steps for your start.",
    },
  ],
  faqs: [
    {
      question: "Do I have to book a demo before the trial?",
      answer:
        "No. You can try Treatflow free for 14 days right away. In a personal demo we show you the features that matter for your studio first.",
    },
    {
      question: "What happens in the demo?",
      answer:
        "We talk about your studio day-to-day, show you the relevant features and answer your questions about getting started.",
    },
  ],
};

const tr: DemoFirstCopy = {
  ...en,
  demo: "Kişisel demo ayırt",
  demoNote: "Ücretsiz ve bağlayıcı değil",
  trialPrompt: "Önce kendin denemek ister misin?",
  trialDetail: "30 gün ücretsiz dene",
  trialNoCard: "Kredi kartı gerekmez",
  selfServeLead: "Önce kendin bakmak mı istiyorsun?",
  selfServeLink: "Ücretsiz denemeni başlat.",
  heroAddon:
    "Treatflow'un stüdyona nasıl uyduğunu kişisel olarak gösterir, randevu, dokümantasyon ve kasa sorularını yanıtlarız.",
  closingTitle: "Treatflow stüdyona uyar mı? Birlikte bakalım.",
  closingText:
    "Treatflow'u kişisel bir demoda tanı ve stüdyo gününle ilgili sorularını sor.",
  stepsTitle: "Treatflow'a böyle başlarsın",
  stepsIntro: "Net bir yol. Hesap için demo zorunlu değil.",
  steps: [
    {
      title: "Stüdyonu tanıyalım",
      desc: "Kişisel bir demo ayırt ve stüdyo gününde neyi sadeleştirmek istediğini anlat.",
    },
    {
      title: "Treatflow'u çalışırken gör",
      desc: "Sana uyan işlevleri gösterir ve sorularını yanıtlarız.",
    },
    {
      title: "Destekle başla",
      desc: "Treatflow'u dene ve başlangıç için sonraki adımları birlikte konuşalım.",
    },
  ],
  faqs: [
    {
      question: "Denemeden önce demo ayırtmak zorunda mıyım?",
      answer:
        "Hayır. Treatflow'u doğrudan 30 gün ücretsiz deneyebilirsin. Kişisel demoda stüdyon için önemli işlevleri önceden gösteririz.",
    },
    {
      question: "Demoda beni ne bekliyor?",
      answer:
        "Stüdyo gününü konuşur, uygun işlevleri gösterir ve başlangıç sorularını yanıtlarız.",
    },
  ],
};

const nl: DemoFirstCopy = {
  ...en,
  demo: "Persoonlijke demo boeken",
  demoNote: "Gratis en vrijblijvend",
  trialPrompt: "Liever zelf proberen?",
  trialDetail: "14 dagen gratis uitproberen",
  trialNoCard: "Geen creditcard",
  selfServeLead: "Wil je eerst zelf kijken?",
  selfServeLink: "Start je gratis proefperiode.",
  heroAddon:
    "We laten je persoonlijk zien hoe Treatflow bij je studio past – en beantwoorden je vragen over afspraken, documentatie en kassa.",
  closingTitle: "Past Treatflow bij je studio? Dat zoeken we samen uit.",
  closingText:
    "Leer Treatflow kennen in een persoonlijke demo en stel je vragen over je studio-dag.",
  stepsTitle: "Zo start je met Treatflow",
  stepsIntro: "Een helder pad. Een demo is niet nodig om een account te maken.",
  steps: [
    {
      title: "Je studio leren kennen",
      desc: "Boek een persoonlijke demo en vertel wat je in de studio-dag wilt vereenvoudigen.",
    },
    {
      title: "Treatflow in actie zien",
      desc: "We laten de passende functies zien en beantwoorden je vragen.",
    },
    {
      title: "Met ondersteuning starten",
      desc: "Probeer Treatflow en bespreek met ons de volgende stappen voor je start.",
    },
  ],
  faqs: [
    {
      question: "Moet ik voor de proefperiode een demo boeken?",
      answer:
        "Nee. Je kunt Treatflow ook direct 14 dagen gratis proberen. In een persoonlijke demo laten we vooraf de functies zien die voor je studio relevant zijn.",
    },
    {
      question: "Wat kan ik in de demo verwachten?",
      answer:
        "We bespreken je studio-dag, laten passende functies zien en beantwoorden je vragen over de start.",
    },
  ],
};

const fi: DemoFirstCopy = {
  ...en,
  demo: "Varaa henkilökohtainen demo",
  demoNote: "Maksuton eikä sido",
  trialPrompt: "Haluatko kokeilla itse ensin?",
  trialDetail: "Kokeile 14 päivää maksutta",
  trialNoCard: "Ei luottokorttia",
  selfServeLead: "Haluatko katsoa ensin itse?",
  selfServeLink: "Aloita maksuton kokeilu.",
  heroAddon:
    "Näytämme henkilökohtaisesti, miten Treatflow sopii studioosi – ja vastaamme kysymyksiin ajanvarauksesta, dokumentoinnista ja kassasta.",
  closingTitle: "Sopiiko Treatflow studioosi? Selvitetään se yhdessä.",
  closingText:
    "Tutustu Treatflow'hun henkilökohtaisessa demossa ja kysy studion arjesta.",
  stepsTitle: "Näin aloitat Treatflow'n",
  stepsIntro: "Selkeä polku. Demoa ei tarvita tilin luomiseen.",
  steps: [
    {
      title: "Tutustutaan studioosi",
      desc: "Varaa henkilökohtainen demo ja kerro, mitä haluat yksinkertaistaa studion arjessa.",
    },
    {
      title: "Näe Treatflow käytössä",
      desc: "Näytämme sopivat toiminnot ja vastaamme kysymyksiisi.",
    },
    {
      title: "Aloita tuella",
      desc: "Kokeile Treatflow'ta ja käy kanssamme läpi aloituksen seuraavat askeleet.",
    },
  ],
  faqs: [
    {
      question: "Pitääkö minun varata demo ennen kokeilua?",
      answer:
        "Ei. Voit kokeilla Treatflow'ta suoraan 14 päivää maksutta. Henkilökohtaisessa demossa näytämme etukäteen studiollesi olennaiset toiminnot.",
    },
    {
      question: "Mitä demossa tapahtuu?",
      answer:
        "Puhumme studion arjesta, näytämme sopivat toiminnot ja vastaamme aloittamista koskeviin kysymyksiin.",
    },
  ],
};

const COPY: Record<DemoFirstLang, DemoFirstCopy> = { de, en, tr, nl, fi };

export function demoFirstLangFromMarket(market: string | null | undefined): DemoFirstLang {
  if (market === "de" || market === "tr" || market === "nl" || market === "fi") return market;
  return "en";
}

export function demoFirstLangFromLocale(locale: string | null | undefined): DemoFirstLang {
  const base = (locale ?? "en").slice(0, 2).toLowerCase();
  return demoFirstLangFromMarket(base);
}

export function getDemoFirstCopy(lang: DemoFirstLang = "de"): DemoFirstCopy {
  return COPY[lang];
}

export function registerHrefForLang(lang: DemoFirstLang): string {
  if (lang === "de") return APP_REGISTER_BY_MARKET.de;
  if (lang === "tr") return APP_REGISTER_BY_MARKET.tr;
  if (lang === "nl") return APP_REGISTER_BY_MARKET.nl;
  if (lang === "fi") return APP_REGISTER_BY_MARKET.fi;
  return APP_REGISTER_BY_MARKET.en;
}

export function registerHrefForMarket(market: string): string {
  return registerHrefForLang(demoFirstLangFromMarket(market));
}
