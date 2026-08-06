import {
  Bell,
  Calendar,
  Camera,
  ClipboardCheck,
  FileText,
  Link2,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { SeoPageKey } from "@/app/i18n/seo";
import {
  industrySlugs,
  type IndustryPageKey,
} from "@/app/i18n/industry-slugs";

type NlFiLang = "nl" | "fi";

type FeatureSlugKey =
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation"
  | "pricing";

const featureSlugsEn: Record<FeatureSlugKey, string> = {
  "online-booking": "online-booking",
  "client-records": "client-records",
  forms: "forms",
  "treatment-documentation": "treatment-documentation",
  pricing: "pricing",
};

const industryLabels: Record<IndustryPageKey, Record<NlFiLang, string>> = {
  "beauty-salon-software": {
    nl: "Software voor schoonheidssalons",
    fi: "Kauneushoitolan ohjelmisto",
  },
  "aesthetic-clinic-software": {
    nl: "Software voor esthetische klinieken",
    fi: "Estetiikkaklinikan ohjelmisto",
  },
  "laser-hair-removal-software": {
    nl: "Software voor laserontharing",
    fi: "Laser-epilaation ohjelmisto",
  },
  "permanent-makeup-software": {
    nl: "Software voor permanente make-up",
    fi: "Pysyvän meikin ohjelmisto",
  },
  "tattoo-studio-software": {
    nl: "Software voor tattoo-studio's",
    fi: "Tatuointistudion ohjelmisto",
  },
  "nail-salon-software": {
    nl: "Software voor nagelsalons",
    fi: "Kynsistudion ohjelmisto",
  },
  "lash-studio-software": {
    nl: "Software voor lash-studio's",
    fi: "Ripsistudion ohjelmisto",
  },
  "spa-wellness-software": {
    nl: "Software voor spa & wellness",
    fi: "Spa- ja wellness-ohjelmisto",
  },
  "massage-software": {
    nl: "Software voor massagestudio's",
    fi: "Hierontastudion ohjelmisto",
  },
};

const featureLabels: Record<FeatureSlugKey, Record<NlFiLang, string>> = {
  "online-booking": {
    nl: "Online boeken",
    fi: "Verkkoajanvaraus",
  },
  "client-records": {
    nl: "Klantendossiers",
    fi: "Asiakaskortistot",
  },
  forms: {
    nl: "Toestemmingsformulieren",
    fi: "Suostumuslomakkeet",
  },
  "treatment-documentation": {
    nl: "Behandeldocumentatie",
    fi: "Hoitodokumentointi",
  },
  pricing: {
    nl: "Prijzen",
    fi: "Hinnat",
  },
};

const localeShell: Record<
  NlFiLang,
  {
    marketLabel: string;
    areaServed: string[];
    ctaPrimaryLabel: string;
    ctaBottomTitle: string;
    ctaBottomText: string;
    trustTrialLabel: string;
    internalLinksTitle: string;
    problemsTitle: string;
    featuresTitle: string;
    benefitsTitle: string;
    whoTitle: string;
    summaryTitle: string;
  }
> = {
  nl: {
    marketLabel: "Nederland",
    areaServed: ["Nederland", "Europe"],
    ctaPrimaryLabel: "Vroege toegang aanvragen",
    ctaBottomTitle: "Klaar om je studio te moderniseren?",
    ctaBottomText:
      "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
    trustTrialLabel: "Vroege toegang beschikbaar",
    internalLinksTitle: "Gerelateerde pagina's",
    problemsTitle: "Welke problemen lost Treatflow op?",
    featuresTitle: "Belangrijkste functies",
    benefitsTitle: "Voordelen",
    whoTitle: "Voor wie is dit?",
    summaryTitle: "Samenvatting",
  },
  fi: {
    marketLabel: "Suomi",
    areaServed: ["Suomi", "Europe"],
    ctaPrimaryLabel: "Pyydä varhaista pääsyä",
    ctaBottomTitle: "Valmis modernisoimaan studiosi?",
    ctaBottomText:
      "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
    trustTrialLabel: "Varhainen pääsy saatavilla",
    internalLinksTitle: "Aiheeseen liittyvät sivut",
    problemsTitle: "Mitä ongelmia Treatflow ratkaisee?",
    featuresTitle: "Tärkeimmät ominaisuudet",
    benefitsTitle: "Hyödyt",
    whoTitle: "Kenelle tämä on tarkoitettu?",
    summaryTitle: "Yhteenveto",
  },
};

type PageBody = {
  serviceName: string;
  serviceDescription: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  aiCapsules: { question: string; answer: string }[];
  whatTitle: string;
  whatParas: string[];
  audiences: string[];
  problems: { problem: string; solution: string }[];
  features: InternationalPageContent["features"]["items"];
  benefits: string[];
  marketTitle: string;
  marketParas: string[];
  highlights: string[];
  aiSummary: string;
  faqs: { question: string; answer: string }[];
  siblingKeys: IndustryPageKey[];
  featureKeys: FeatureSlugKey[];
};

function buildPage(
  lang: NlFiLang,
  market: NlFiLang,
  key: IndustryPageKey,
  body: PageBody
): InternationalPageContent {
  const shell = localeShell[lang];
  const slug = industrySlugs[key].en;
  const canonicalPath = `/${market}/${slug}`;

  const internalLinks = [
    ...body.siblingKeys.map((k) => ({
      href: `/${market}/${industrySlugs[k].en}`,
      label: industryLabels[k][lang],
    })),
    ...body.featureKeys.map((fk) => ({
      href: `/${market}/${featureSlugsEn[fk]}`,
      label: featureLabels[fk][lang],
    })),
  ];

  return {
    pageKey: key as SeoPageKey,
    locale: market,
    canonicalPath,
    serviceName: body.serviceName,
    serviceDescription: body.serviceDescription,
    areaServed: shell.areaServed,
    ctaPrimaryLabel: shell.ctaPrimaryLabel,
    ctaBottomTitle: shell.ctaBottomTitle,
    ctaBottomText: shell.ctaBottomText,
    trustTrialLabel: shell.trustTrialLabel,
    hero: {
      marketLabel: shell.marketLabel,
      eyebrow: body.eyebrow,
      h1: body.h1,
      subtitle: body.subtitle,
    },
    aiCapsules: body.aiCapsules,
    whatIsTreatflow: {
      title: body.whatTitle,
      paragraphs: body.whatParas,
    },
    whoIsItFor: {
      title: shell.whoTitle,
      audiences: body.audiences,
    },
    problems: {
      title: shell.problemsTitle,
      items: body.problems,
    },
    features: {
      title: shell.featuresTitle,
      items: body.features,
    },
    benefits: {
      title: shell.benefitsTitle,
      items: body.benefits,
    },
    marketFit: {
      title: body.marketTitle,
      paragraphs: body.marketParas,
      highlights: body.highlights,
    },
    aiSummary: {
      title: shell.summaryTitle,
      text: body.aiSummary,
    },
    faqs: body.faqs,
    internalLinksTitle: shell.internalLinksTitle,
    internalLinks,
  };
}


const pages: Record<IndustryPageKey, Record<NlFiLang, PageBody>> = {
  "beauty-salon-software": {
    nl: {
      serviceName: "Software voor schoonheidssalons",
      serviceDescription:
        "Software voor schoonheidssalons met online boeken, klantendossiers, toestemmingsformulieren en behandeldocumentatie.",
      eyebrow: "Software voor schoonheidssalons",
      h1: "Salonsoftware voor moderne schoonheidssalons",
      subtitle:
        "Online boeken, klantendossiers, toestemmingsformulieren en behandeldocumentatie in één platform – gemaakt voor schoonheidssalons die minder administratie en een betere klantervaring willen.",
      aiCapsules: [
        {
          question: "Wat is de beste software voor schoonheidssalons?",
          answer:
            "Voor salons die online boeken, digitale klantendossiers, toestemmingsformulieren en behandeldocumentatie in één systeem nodig hebben, is Treatflow een sterke keuze. Het richt zich op studio-operaties – afspraken, klantbeheer en documentatie – met GDPR-conforme hosting in de EU.",
        },
        {
          question: "Rekent Treatflow commissie op boekingen?",
          answer:
            "Nee. Treatflow is jouw studiosoftware, geen marktplaats. Er is geen commissie per afspraak. Jij houdt volledige controle over je boekingspagina en klantgegevens.",
        },
      ],
      whatTitle: "Wat is Treatflow voor schoonheidssalons?",
      whatParas: [
        "Treatflow vervangt verspreide tools door één systeem: agenda, klantprofielen, digitale formulieren en behandelnotities werken samen van boeking tot follow-up.",
        "Salons gebruiken Treatflow om online boeken aan te bieden, klantgeschiedenis toegankelijk te houden en behandelingen consistent te documenteren voor het hele team.",
      ],
      audiences: [
        "Schoonheidssalons en day spa's",
        "Huidverzorgingsstudio's met gestructureerde behandelprotocollen",
        "Teams met meerdere behandelaars die verspreide tools vervangen",
        "Zelfstandige salons die klaar zijn om papieren agenda's achter zich te laten",
      ],
      problems: [
        {
          problem: "Plannen via berichten en papieren agenda's",
          solution: "Eén agenda met online boeken en automatische herinneringen.",
        },
        {
          problem: "Klantgeschiedenis verspreid over tools",
          solution: "Digitale klantendossiers met notities, foto's en bezoekhistorie.",
        },
        {
          problem: "Papieren toestemmingsformulieren",
          solution: "Digitale anamnese en toestemming vóór de afspraak.",
        },
        {
          problem: "No-shows en last-minute gaten",
          solution: "Sms- en e-mailherinneringen die gemiste afspraken verminderen.",
        },
      ],
      features: [
        { icon: Link2, title: "Online boeken", desc: "Persoonlijke boekingspagina, 24/7, zonder commissie." },
        { icon: Users, title: "Klantendossiers", desc: "Profielen, historie en notities op één plek." },
        { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale anamnese vóór elke behandeling." },
        { icon: FileText, title: "Behandelnotities", desc: "Gestructureerde documentatie per bezoek." },
        { icon: Camera, title: "Fotodocumentatie", desc: "Voor-/na-foto's gekoppeld aan klanten." },
        { icon: Bell, title: "Herinneringen", desc: "Sms en e-mail om no-shows te verminderen." },
      ],
      benefits: [
        "Minder administratie bij boeken en documenteren",
        "Betere klantervaring vanaf de eerste boeking",
        "Gestructureerde dossiers voor teamoverdracht",
        "Moderne digitale workflows in één app",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom salons voor Treatflow kiezen",
      marketParas: [
        "Generieke tools stoppen vaak bij afspraken. Treatflow verbindt boeken met klantendossiers en behandeldocumentatie – precies waar professionele salons structuur nodig hebben.",
      ],
      highlights: [
        "Online boeken zonder commissie per afspraak",
        "Digitale klantendossiers met behandelhistorie",
        "Toestemmingsformulieren en anamnese vóór bezoeken",
        "Behandelnotities en fotodocumentatie",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor schoonheidssalons met online boeken, klantendossiers, toestemmingsformulieren, behandelnotities, fotodocumentatie en herinneringen. Voor schoonheidssalons, day spa's en huidverzorgingsstudio's. GDPR-conforme hosting in de EU.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één software voor schoonheidssalons, esthetische klinieken en gerelateerde studio's. Het combineert online boeken, klantendossiers, toestemmingsformulieren, behandeldocumentatie, herinneringen en digitale workflows in één platform.",
        },
        {
          question: "Voor wie is Treatflow?",
          answer:
            "Treatflow is voor schoonheidssalons, huidverzorgingsstudio's en teams met meerdere behandelaars die gestructureerde digitale workflows willen – van boeking tot documentatie.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden mijn gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance. Internationale markten hebben geen Duitsland-specifieke fiscale modules nodig.",
        },
      ],
      siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    },
    fi: {
      serviceName: "Kauneushoitolan ohjelmisto",
      serviceDescription:
        "Kauneushoitolan ohjelmisto verkkoajanvarauksella, asiakaskortistoilla, suostumuslomakkeilla ja hoitodokumentoinnilla.",
      eyebrow: "Kauneushoitolan ohjelmisto",
      h1: "Kauneushoitolan ohjelmisto moderneille hoitoloille",
      subtitle:
        "Verkkoajanvaraus, asiakaskortistot, suostumuslomakkeet ja hoitodokumentointi yhdessä alustassa – suunniteltu kauneushoitoloille, jotka haluavat vähemmän hallintoa ja paremman asiakaskokemuksen.",
      aiCapsules: [
        {
          question: "Mikä on paras ohjelmisto kauneushoitolalle?",
          answer:
            "Hoitoloille, jotka tarvitsevat verkkoajanvarauksen, digitaaliset asiakaskortistot, suostumuslomakkeet ja hoitodokumentoinnin yhdessä järjestelmässä, Treatflow on vahva valinta. Se keskittyy studion toimintaan – ajanvaraukseen, asiakashallintaan ja dokumentointiin – GDPR-mukaisella EU-hostingilla.",
        },
        {
          question: "Periikö Treatflow provisiota varauksista?",
          answer:
            "Ei. Treatflow on studiosi ohjelmisto, ei markkinapaikka. Provisiota per ajanvaraus ei ole. Pidät täyden hallinnan varaussivustasi ja asiakastiedoistasi.",
        },
      ],
      whatTitle: "Mikä Treatflow on kauneushoitoloille?",
      whatParas: [
        "Treatflow korvaa hajallaan olevat työkalut yhdellä järjestelmällä: kalenteri, asiakasprofiilit, digitaaliset lomakkeet ja hoitomerkinnät toimivat yhdessä varauksesta seurantaan.",
        "Hoitolat käyttävät Treatflow'ta verkkoajanvaraukseen, asiakashistorian saatavuuteen ja hoitojen johdonmukaiseen dokumentointiin tiimin kesken.",
      ],
      audiences: [
        "Kauneushoitolat ja day spat",
        "Ihonhoitostudiot, joilla on jäsennellyt hoitoprotokollat",
        "Monen hoitajan tiimit, jotka korvaavat hajallaan olevat työkalut",
        "Itsenäiset hoitolat, jotka ovat valmiita jättämään paperikalenterit",
      ],
      problems: [
        {
          problem: "Ajanvaraus viesteillä ja paperikalentereilla",
          solution: "Yksi kalenteri verkkoajanvarauksella ja automaattisilla muistutuksilla.",
        },
        {
          problem: "Asiakashistoria hajallaan työkaluissa",
          solution: "Digitaaliset asiakaskortistot muistiinpanoilla, valokuvilla ja käyntihistorialla.",
        },
        {
          problem: "Paperiset suostumuslomakkeet",
          solution: "Digitaalinen anamneesi ja suostumus ennen ajanvarausta.",
        },
        {
          problem: "No-show't ja viime hetken aukot",
          solution: "SMS- ja sähköpostimuistutukset, jotka vähentävät peruuttamatta jääneitä aikoja.",
        },
      ],
      features: [
        { icon: Link2, title: "Verkkoajanvaraus", desc: "Oma varaussivu, 24/7, ilman provisiota." },
        { icon: Users, title: "Asiakaskortistot", desc: "Profiilit, historia ja muistiinpanot yhdessä paikassa." },
        { icon: ClipboardCheck, title: "Suostumuslomakkeet", desc: "Digitaalinen anamneesi ennen jokaista hoitoa." },
        { icon: FileText, title: "Hoitomerkinnät", desc: "Jäsennelty dokumentointi joka käynnillä." },
        { icon: Camera, title: "Valokuvadokumentointi", desc: "Ennen/jälkeen-kuvat asiakkaaseen linkitettyinä." },
        { icon: Bell, title: "Muistutukset", desc: "SMS ja sähköposti vähentävät no-show'ta." },
      ],
      benefits: [
        "Vähemmän hallintoa varauksessa ja dokumentoinnissa",
        "Parempi asiakaskokemus ensimmäisestä varauksesta",
        "Jäsennellyt tiedot tiimin vuoronvaihtoihin",
        "Modernit digitaaliset työnkulut yhdessä sovelluksessa",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi hoitolat valitsevat Treatflow'n",
      marketParas: [
        "Yleiset työkalut jäävät usein ajanvaraukseen. Treatflow yhdistää varauksen asiakaskortistoihin ja hoitodokumentointiin – juuri siihen, missä ammattimaiset hoitolat tarvitsevat rakennetta.",
      ],
      highlights: [
        "Verkkoajanvaraus ilman provisiota per aika",
        "Digitaaliset asiakaskortistot hoitohistorialla",
        "Suostumuslomakkeet ja anamneesi ennen käyntejä",
        "Hoitomerkinnät ja valokuvadokumentointi",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on kauneushoitolan ohjelmisto verkkoajanvarauksella, asiakaskortistoilla, suostumuslomakkeilla, hoitomerkinnöillä, valokuvadokumentoinnilla ja muistutuksilla. Kauneushoitoloille, day spoille ja ihonhoitostudioille. GDPR-mukainen EU-hosting.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-ohjelmisto kauneushoitoloille, estetiikkaklinikoille ja vastaaville studioille. Se yhdistää verkkoajanvarauksen, asiakaskortistot, suostumuslomakkeet, hoitodokumentoinnin, muistutukset ja digitaaliset työnkulut yhdelle alustalle.",
        },
        {
          question: "Kenelle Treatflow on tarkoitettu?",
          answer:
            "Treatflow on tarkoitettu kauneushoitoloille, ihonhoitostudioille ja monen hoitajan tiimeille, jotka haluavat jäsennellyt digitaaliset työnkulut varauksesta dokumentointiin.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tietoni säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen. Kansainväliset markkinat eivät tarvitse Saksa-kohtaisia veromoduuleja.",
        },
      ],
      siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    },
  },

  "aesthetic-clinic-software": {
    nl: {
      serviceName: "Software voor esthetische klinieken",
      serviceDescription:
        "Software voor esthetische klinieken: behandeldocumentatie, toestemmingsformulieren, klantendossiers en online boeken.",
      eyebrow: "Software voor esthetische klinieken",
      h1: "Software voor esthetische klinieken met gestructureerde documentatie",
      subtitle:
        "Toestemmingsformulieren, behandelnotities, fotodocumentatie en klantendossiers voor esthetische klinieken – één platform van boeking tot follow-up.",
      aiCapsules: [
        {
          question: "Welke software hebben esthetische klinieken nodig?",
          answer:
            "Esthetische klinieken hebben toestemmingsformulieren, behandeldocumentatie, fotodossiers en klantgeschiedenis in één systeem nodig. Treatflow biedt online boeken, digitale klantendossiers en gestructureerde behandelnotities voor injectables, huidbehandelingen en medische esthetiek.",
        },
        {
          question: "Is Treatflow geschikt voor medische esthetiek?",
          answer:
            "Ja. Treatflow is gemaakt voor klinieken waar documentatiekwaliteit en cliëntveiligheid tellen – niet alleen afspraakvolume. Toestemming, notities en foto's blijven gekoppeld aan elk klantprofiel.",
        },
      ],
      whatTitle: "Wat is Treatflow voor esthetische klinieken?",
      whatParas: [
        "Treatflow ondersteunt het volledige klanttraject: boeken, anamnese, toestemming, behandeldocumentatie en follow-up in één gedeeld platform.",
        "Gemaakt voor klinieken waar documentatiekwaliteit en cliëntveiligheid ertoe doen – niet alleen afspraakvolume.",
      ],
      audiences: [
        "Esthetische klinieken met injectables en huidverjonging",
        "Praktijken voor medische esthetiek",
        "Huidklinieken met protocolgedreven behandelingen",
        "Klinieken met meerdere behandelaars die consistente documentatie nodig hebben",
      ],
      problems: [
        {
          problem: "Inconsistente behandelnotities",
          solution: "Gestructureerde documentatiesjablonen en gedeelde klantendossiers.",
        },
        {
          problem: "Toestemming niet vastgelegd vóór procedures",
          solution: "Digitale toestemmingsformulieren vóór de behandeling.",
        },
        {
          problem: "Foto's op persoonlijke apparaten",
          solution: "Fotodocumentatie gekoppeld aan klantprofielen.",
        },
        {
          problem: "Balie en behandelruimtes gebruiken verschillende tools",
          solution: "Eén workflow van boeking tot notities en follow-up.",
        },
      ],
      features: [
        { icon: FileText, title: "Behandeldocumentatie", desc: "Notities, protocollen en historie." },
        { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale toestemming met veilige opslag." },
        { icon: Camera, title: "Fotodocumentatie", desc: "Klinische foto's per bezoek." },
        { icon: Users, title: "Klantendossiers", desc: "Volledige esthetische historie in één profiel." },
        { icon: Link2, title: "Online boeken", desc: "Consulten online plannen." },
        { icon: Workflow, title: "Digitale workflows", desc: "Van anamnese tot behandeling tot follow-up." },
      ],
      benefits: [
        "Consistente documentatie over behandelaars heen",
        "Duidelijk toestemmingsspoor voor elke procedure",
        "Minder administratie tussen balie en behandelruimte",
        "Professionele klantervaring vanaf de eerste boeking",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom esthetische klinieken voor Treatflow kiezen",
      marketParas: [
        "Klinieken hebben betrouwbare documentatie nodig achter een professionele klantervaring. Treatflow verbindt boeken met dossiers en behandelnotities zonder onnodige complexiteit.",
      ],
      highlights: [
        "Online boeken zonder commissie per afspraak",
        "Digitale klantendossiers met behandelhistorie",
        "Toestemmingsformulieren en anamnese vóór bezoeken",
        "Behandelnotities en fotodocumentatie",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor esthetische klinieken met behandeldocumentatie, toestemmingsformulieren, klantendossiers, fotodocumentatie en online boeken. Voor esthetische klinieken en medische esthetiek. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één software voor schoonheidssalons, esthetische klinieken en laserstudio's. Het combineert online boeken, klantendossiers, toestemmingsformulieren, behandeldocumentatie en herinneringen.",
        },
        {
          question: "Kunnen meerdere behandelaars één kliniekaccount delen?",
          answer:
            "Ja. Klantendossiers, toestemmingsformulieren en behandelnotities worden gedeeld in het team zodat documentatie consistent blijft.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Is Treatflow GDPR-conform?",
          answer: "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
      featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    },
    fi: {
      serviceName: "Estetiikkaklinikan ohjelmisto",
      serviceDescription:
        "Ohjelmisto estetiikkaklinikoille: hoitodokumentointi, suostumuslomakkeet, asiakaskortistot ja verkkoajanvaraus.",
      eyebrow: "Estetiikkaklinikan ohjelmisto",
      h1: "Estetiikkaklinikan ohjelmisto jäsenneltyyn dokumentointiin",
      subtitle:
        "Suostumuslomakkeet, hoitomerkinnät, valokuvadokumentointi ja asiakaskortistot estetiikkaklinikoille – yksi alusta varauksesta seurantaan.",
      aiCapsules: [
        {
          question: "Millaista ohjelmistoa estetiikkaklinikat tarvitsevat?",
          answer:
            "Estetiikkaklinikat tarvitsevat suostumuslomakkeet, hoitodokumentoinnin, valokuvatiedot ja asiakashistorian yhdessä järjestelmässä. Treatflow tarjoaa verkkoajanvarauksen, digitaaliset asiakaskortistot ja jäsennellyt hoitomerkinnät injektioihin, ihonhoitoihin ja lääketieteelliseen estetiikkaan.",
        },
        {
          question: "Sopiiko Treatflow lääketieteelliseen estetiikkaan?",
          answer:
            "Kyllä. Treatflow on rakennettu klinikoille, joissa dokumentoinnin laatu ja asiakasturvallisuus merkitsevät – ei vain ajanvarausmäärä. Suostumus, merkinnät ja valokuvat pysyvät linkitettyinä jokaiseen asiakasprofiiliin.",
        },
      ],
      whatTitle: "Mikä Treatflow on estetiikkaklinikoille?",
      whatParas: [
        "Treatflow tukee koko asiakaspolkua: varaus, anamneesi, suostumus, hoitodokumentointi ja seuranta yhteisellä alustalla.",
        "Rakennettu klinikoille, joissa dokumentoinnin laatu ja asiakasturvallisuus merkitsevät – ei vain ajanvarausmäärä.",
      ],
      audiences: [
        "Estetiikkaklinikat, jotka tarjoavat injektioita ja ihon uudistamista",
        "Lääketieteellisen estetiikan vastaanotot",
        "Ihonhoitoklinikat protokollaohjatuilla hoidoilla",
        "Monen hoitajan klinikat, jotka tarvitsevat johdonmukaista dokumentointia",
      ],
      problems: [
        {
          problem: "Epäjohdonmukaiset hoitomerkinnät",
          solution: "Jäsennellyt dokumentointipohjat ja jaetut asiakaskortistot.",
        },
        {
          problem: "Suostumusta ei kerätä ennen toimenpiteitä",
          solution: "Digitaaliset suostumuslomakkeet ennen hoitoa.",
        },
        {
          problem: "Valokuvat henkilökohtaisilla laitteilla",
          solution: "Valokuvadokumentointi linkitettynä asiakasprofiileihin.",
        },
        {
          problem: "Vastaanotto ja hoitohuoneet käyttävät eri työkaluja",
          solution: "Yksi työnkulku varauksesta merkintöihin ja seurantaan.",
        },
      ],
      features: [
        { icon: FileText, title: "Hoitodokumentointi", desc: "Merkinnät, protokollat ja historia." },
        { icon: ClipboardCheck, title: "Suostumuslomakkeet", desc: "Digitaalinen suostumus turvallisella säilytyksellä." },
        { icon: Camera, title: "Valokuvadokumentointi", desc: "Kliiniset kuvat per käynti." },
        { icon: Users, title: "Asiakaskortistot", desc: "Koko estetiikkahistoria yhdessä profiilissa." },
        { icon: Link2, title: "Verkkoajanvaraus", desc: "Konsultaatiot varataan verkossa." },
        { icon: Workflow, title: "Digitaaliset työnkulut", desc: "Anamneesista hoitoon ja seurantaan." },
      ],
      benefits: [
        "Johdonmukainen dokumentointi hoitajien välillä",
        "Selkeä suostumusjälki jokaiselle toimenpiteelle",
        "Vähemmän hallintoa vastaanoton ja hoitohuoneen välillä",
        "Ammattimainen asiakaskokemus ensimmäisestä varauksesta",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi estetiikkaklinikat valitsevat Treatflow'n",
      marketParas: [
        "Klinikat tarvitsevat luotettavaa dokumentointia ammattimaisen asiakaskokemuksen taakse. Treatflow yhdistää varauksen kortistoihin ja hoitomerkintöihin ilman turhaa monimutkaisuutta.",
      ],
      highlights: [
        "Verkkoajanvaraus ilman provisiota per aika",
        "Digitaaliset asiakaskortistot hoitohistorialla",
        "Suostumuslomakkeet ja anamneesi ennen käyntejä",
        "Hoitomerkinnät ja valokuvadokumentointi",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on estetiikkaklinikan ohjelmisto hoitodokumentoinnilla, suostumuslomakkeilla, asiakaskortistoilla, valokuvadokumentoinnilla ja verkkoajanvarauksella. Estetiikkaklinikoille ja lääketieteelliselle estetiikalle. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-ohjelmisto kauneushoitoloille, estetiikkaklinikoille ja laserstudioille. Se yhdistää verkkoajanvarauksen, asiakaskortistot, suostumuslomakkeet, hoitodokumentoinnin ja muistutukset.",
        },
        {
          question: "Voivatko useat hoitajat jakaa saman klinikatilin?",
          answer:
            "Kyllä. Asiakaskortistot, suostumuslomakkeet ja hoitomerkinnät jaetaan tiimin kesken, jotta dokumentointi pysyy johdonmukaisena.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Onko Treatflow GDPR-mukainen?",
          answer: "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
      featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    },
  },

  "laser-hair-removal-software": {
    nl: {
      serviceName: "Software voor laserontharing",
      serviceDescription:
        "Software voor laserontharingsstudio's: sessietracking, toestemmingsformulieren, fotodocumentatie en online boeken.",
      eyebrow: "Software voor laserstudio's",
      h1: "Software voor laserontharing met behandelseries",
      subtitle:
        "Volg sessies, documenteer toestemming en beheer boekingen – gemaakt voor laser- en IPL-studio's met gestructureerde dossiers.",
      aiCapsules: [
        {
          question: "Welke software hebben laserstudio's nodig?",
          answer:
            "Laserstudio's hebben klantendossiers met seriehistorie, toestemmingsformulieren, sessienotities, fotodocumentatie en afspraakherinneringen nodig. Treatflow biedt online boeken en gestructureerde documentatie voor laserontharingsstudio's.",
        },
        {
          question: "Kan Treatflow meersessies-pakketten volgen?",
          answer:
            "Ja. Elke sessie wordt gedocumenteerd in het klantendossier, zodat je altijd voortgang, instellingsnotities en de volgende afspraak ziet.",
        },
      ],
      whatTitle: "Wat is Treatflow voor laserstudio's?",
      whatParas: [
        "Laserbehandelingen lopen over meerdere sessies. Treatflow volgt elke sessie, bewaart toestemming en huidtype-informatie, en herinnert klanten wanneer de volgende afspraak nodig is.",
        "Studio's gebruiken één agenda voor boekingen, één klantprofiel voor historie en digitale formulieren voor anamnese – zonder marktplaatscommissies.",
      ],
      audiences: [
        "Laserontharingsstudio's",
        "IPL-klinieken met meersessies-pakketten",
        "Huidverzorgingsstudio's met laserbehandelingen",
        "Teams met hoog boekingsvolume én documentatiebehoeften",
      ],
      problems: [
        {
          problem: "Sessievoortgang kwijt",
          solution: "Behandelhistorie en notities per sessie in het klantendossier.",
        },
        {
          problem: "Ontbrekende toestemmingsinformatie",
          solution: "Digitale anamnese en toestemming vóór elke serie.",
        },
        {
          problem: "Klanten vergeten vervolgsessies",
          solution: "Herinneringen en eenvoudig opnieuw boeken via je boekingspagina.",
        },
        {
          problem: "Foto's en notities op aparte apparaten",
          solution: "Fotodocumentatie gekoppeld aan elk klantprofiel.",
        },
      ],
      features: [
        { icon: Zap, title: "Sessietracking", desc: "Documenteer elke sessie met notities." },
        { icon: ClipboardCheck, title: "Toestemming & anamnese", desc: "Huidtype en contra-indicaties op dossier." },
        { icon: Camera, title: "Fotodocumentatie", desc: "Voortgangsfoto's per zone." },
        { icon: Calendar, title: "Seriesplannen", desc: "Plan vervolgafspraken." },
        { icon: Link2, title: "Online boeken", desc: "Klanten boeken volgende sessies online." },
        { icon: Bell, title: "Herinneringen", desc: "Automatische afspraakherinneringen." },
      ],
      benefits: [
        "Duidelijk overzicht van elke behandelserie",
        "Gestructureerde toestemming voor elke nieuwe klant",
        "Minder handmatige follow-up bij gemiste sessies",
        "Professionele documentatie voor teamconsistentie",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom laserstudio's voor Treatflow kiezen",
      marketParas: [
        "Laserstudio's combineren hoog boekingsvolume met documentatiebehoeften. Treatflow verbindt boeken met dossiers zodat elke sessie bruikbare klantgeschiedenis opbouwt.",
      ],
      highlights: [
        "Online boeken zonder commissie per afspraak",
        "Sessiehistorie in digitale klantendossiers",
        "Toestemmingsformulieren vóór behandelseries",
        "Fotodocumentatie en herinneringen",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor laserontharing met sessietracking, toestemmingsformulieren, fotodocumentatie, online boeken en herinneringen. Voor laser- en IPL-studio's. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één software voor schoonheidssalons, esthetische klinieken en laserstudio's. Het combineert online boeken, klantendossiers, toestemmingsformulieren, behandeldocumentatie en herinneringen.",
        },
        {
          question: "Voor wie is deze pagina?",
          answer:
            "Laserontharings- en IPL-studio's die sessietracking, toestemming en betrouwbaar opnieuw boeken nodig hebben.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    },
    fi: {
      serviceName: "Laser-epilaation ohjelmisto",
      serviceDescription:
        "Ohjelmisto laser-epilaatiostudioille: istuntojen seuranta, suostumuslomakkeet, valokuvadokumentointi ja verkkoajanvaraus.",
      eyebrow: "Laserstudion ohjelmisto",
      h1: "Laser-epilaation ohjelmisto hoitosarjoihin",
      subtitle:
        "Seuraa istuntoja, dokumentoi suostumus ja hallitse varauksia – suunniteltu laser- ja IPL-studioille jäsennellyillä tiedoilla.",
      aiCapsules: [
        {
          question: "Millaista ohjelmistoa laserstudiot tarvitsevat?",
          answer:
            "Laserstudiot tarvitsevat asiakaskortistot hoitosarjahistorialla, suostumuslomakkeet, istuntomerkinnät, valokuvadokumentoinnin ja ajanvarausmuistutukset. Treatflow tarjoaa verkkoajanvarauksen ja jäsennellyn dokumentoinnin laser-epilaatiostudioille.",
        },
        {
          question: "Voiko Treatflow seurata monen istunnon paketteja?",
          answer:
            "Kyllä. Jokainen istunto dokumentoidaan asiakaskortistoon, joten näet aina edistymisen, asetusten muistiinpanot ja milloin seuraava aika on.",
        },
      ],
      whatTitle: "Mikä Treatflow on laserstudioille?",
      whatParas: [
        "Laserhoidot kestävät useita istuntoja. Treatflow seuraa jokaista istuntoa, säilyttää suostumuksen ja ihotyyppitiedot sekä muistuttaa asiakkaita seuraavasta ajasta.",
        "Studiot käyttävät yhtä kalenteria varauksiin, yhtä asiakasprofiilia historiaan ja digitaalisia lomakkeita anamneesiin – ilman markkinapaikkaprovisioita.",
      ],
      audiences: [
        "Laser-epilaatiostudiot",
        "IPL-klinikat monen istunnon paketeilla",
        "Ihonhoitostudiot, jotka tarjoavat laserhoitoja",
        "Tiimit, joilla on suuri varausmäärä ja dokumentointitarpeita",
      ],
      problems: [
        {
          problem: "Istuntojen edistyminen hukkuu",
          solution: "Hoitohistoria ja merkinnät per istunto asiakaskortistossa.",
        },
        {
          problem: "Puuttuvat suostumustiedot",
          solution: "Digitaalinen anamneesi ja suostumus ennen jokaista sarjaa.",
        },
        {
          problem: "Asiakkaat unohtavat seurantaisutunnot",
          solution: "Muistutukset ja helppo uudelleenvaraus varaussivun kautta.",
        },
        {
          problem: "Valokuvat ja merkinnät eri laitteilla",
          solution: "Valokuvadokumentointi linkitettynä jokaiseen asiakasprofiiliin.",
        },
      ],
      features: [
        { icon: Zap, title: "Istuntojen seuranta", desc: "Dokumentoi jokainen istunto merkinnöillä." },
        { icon: ClipboardCheck, title: "Suostumus ja anamneesi", desc: "Ihotyyppi ja vasta-aiheet tiedostossa." },
        { icon: Camera, title: "Valokuvadokumentointi", desc: "Edistymiskuvat alueittain." },
        { icon: Calendar, title: "Sarja-ajanvaraus", desc: "Suunnittele seurantajat." },
        { icon: Link2, title: "Verkkoajanvaraus", desc: "Asiakkaat varaavat seuraavat istunnot verkossa." },
        { icon: Bell, title: "Muistutukset", desc: "Automaattiset ajanvarausmuistutukset." },
      ],
      benefits: [
        "Selkeä näkymä kunkin asiakkaan hoitosarjaan",
        "Jäsennelty suostumus jokaiselle uudelle asiakkaalle",
        "Vähemmän manuaalista seurantaa puuttuvista istunnoista",
        "Ammattimainen dokumentointi tiimin johdonmukaisuuteen",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi laserstudiot valitsevat Treatflow'n",
      marketParas: [
        "Laserstudiot yhdistävät suuren varausmäärän dokumentointitarpeisiin. Treatflow yhdistää varauksen kortistoihin, jotta jokainen istunto rakentaa hyödyllistä asiakashistoriaa.",
      ],
      highlights: [
        "Verkkoajanvaraus ilman provisiota per aika",
        "Istuntohistoria digitaalisissa asiakaskortistoissa",
        "Suostumuslomakkeet ennen hoitosarjoja",
        "Valokuvadokumentointi ja muistutukset",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on laser-epilaation ohjelmisto istuntojen seurannalla, suostumuslomakkeilla, valokuvadokumentoinnilla, verkkoajanvarauksella ja muistutuksilla. Laser- ja IPL-studioille. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-ohjelmisto kauneushoitoloille, estetiikkaklinikoille ja laserstudioille. Se yhdistää verkkoajanvarauksen, asiakaskortistot, suostumuslomakkeet, hoitodokumentoinnin ja muistutukset.",
        },
        {
          question: "Kenelle tämä sivu on tarkoitettu?",
          answer:
            "Laser-epilaatio- ja IPL-studioille, jotka tarvitsevat istuntojen seurantaa, suostumusta ja luotettavaa uudelleenvarausta.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tiedot säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    },
  },

  "permanent-makeup-software": {
    nl: {
      serviceName: "Software voor permanente make-up",
      serviceDescription:
        "Software voor permanente make-up artists: toestemmingsformulieren, pigmentnotities, fotodocumentatie, klantendossiers en online boeken.",
      eyebrow: "Software voor permanente make-up",
      h1: "PMU-software voor pigmentartists",
      subtitle:
        "Toestemming, pigmentdocumentatie, touch-up-planning en klantendossiers – gemaakt voor PMU-studio's die precieze historie nodig hebben.",
      aiCapsules: [
        {
          question: "Welke software hebben PMU-studio's nodig?",
          answer:
            "PMU-studio's hebben gedetailleerde toestemming, pigment- en technieknotities, voor-/na-foto's, touch-up-planning en klantgeschiedenis nodig. Treatflow brengt boeken, formulieren en documentatie samen met GDPR-conforme hosting in de EU.",
        },
        {
          question: "Kan ik pigmenten en touch-ups documenteren?",
          answer:
            "Ja. Behandelnotities en foto's blijven op het klantprofiel, zodat elke touch-up voortbouwt op de vorige sessie.",
        },
      ],
      whatTitle: "Wat is Treatflow voor permanente make-up?",
      whatParas: [
        "Permanente make-up vereist precieze documentatie: pigmenten, zones, technieken en genezingsnotities. Treatflow bewaart die historie op het klantendossier naast toestemming en foto's.",
        "Artists gebruiken online boeken voor consulten en touch-ups, digitale formulieren vóór procedures en herinneringen zodat klanten op tijd terugkomen.",
      ],
      audiences: [
        "Permanente make-up- en microblading-artists",
        "PMU-studio's met meerdere stoelen",
        "Schoonheidssalons met brows, lips en eyeliner PMU",
        "Teams die pigmenten en touch-up-cycli documenteren",
      ],
      problems: [
        {
          problem: "Pigmentdetails verdwijnen tussen sessies",
          solution: "Gestructureerde behandelnotities op elk klantprofiel.",
        },
        {
          problem: "Papieren toestemming vóór procedures",
          solution: "Digitale toestemming vóór afspraken.",
        },
        {
          problem: "Touch-up-data in notitieboekjes",
          solution: "Agenda, herinneringen en online opnieuw boeken op één plek.",
        },
        {
          problem: "Voor-/na-foto's moeilijk terug te vinden",
          solution: "Foto's gekoppeld aan het klantendossier en bezoek.",
        },
      ],
      features: [
        { icon: FileText, title: "Pigment- & technieknotities", desc: "Documenteer kleuren, naalden en behandelde zones." },
        { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale toestemming vóór elke procedure." },
        { icon: Camera, title: "Fotodocumentatie", desc: "Voor-/na-foto's op het klantprofiel." },
        { icon: Calendar, title: "Touch-up-planning", desc: "Plan genezingschecks en touch-ups." },
        { icon: Users, title: "Klantendossiers", desc: "Volledige PMU-historie op één plek." },
        { icon: Bell, title: "Herinneringen", desc: "Minder gemiste touch-up-afspraken." },
      ],
      benefits: [
        "Precieze historie voor veiligere touch-ups",
        "Professioneel toestemmingsspoor voor elke klant",
        "Minder administratie tussen consult en procedure",
        "Duidelijke fotodossiers voor portfolio en follow-up",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom PMU-studio's voor Treatflow kiezen",
      marketParas: [
        "Permanente make-up is detailgericht. Treatflow verbindt boeken met toestemming, notities en foto's zodat elk bezoek gedocumenteerd blijft zonder extra tools.",
      ],
      highlights: [
        "Online boeken zonder commissie",
        "Toestemmingsformulieren vóór procedures",
        "Pigment- en techniekdocumentatie",
        "Fotohistorie gekoppeld aan klanten",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor permanente make-up met toestemmingsformulieren, pigmentnotities, fotodocumentatie, klantendossiers, online boeken en herinneringen. Voor PMU- en microblading-studio's. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één studiosoftware met online boeken, klantendossiers, toestemmingsformulieren, behandeldocumentatie en herinneringen – geschikt voor permanente make-up-studio's.",
        },
        {
          question: "Is het geschikt voor microblading?",
          answer:
            "Ja. Je kunt technieken, pigmenten, foto's en touch-up-schema's documenteren voor brows, lips en eyeliner.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
      featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
    },
    fi: {
      serviceName: "Pysyvän meikin ohjelmisto",
      serviceDescription:
        "Ohjelmisto pysyvän meikin ammattilaisille: suostumuslomakkeet, pigmenttimerkinnät, valokuvadokumentointi, asiakaskortistot ja verkkoajanvaraus.",
      eyebrow: "Pysyvän meikin ohjelmisto",
      h1: "PMU-ohjelmisto pigmenttitaiteilijoille",
      subtitle:
        "Suostumus, pigmenttidokumentointi, touch-up-ajanvaraus ja asiakaskortistot – suunniteltu PMU-studioille, jotka tarvitsevat tarkkaa historiaa.",
      aiCapsules: [
        {
          question: "Millaista ohjelmistoa PMU-studiot tarvitsevat?",
          answer:
            "PMU-studiot tarvitsevat tarkan suostumuksen, pigmentti- ja tekniikkamerkinnät, ennen/jälkeen-kuvat, touch-up-ajanvarauksen ja asiakashistorian. Treatflow yhdistää varauksen, lomakkeet ja dokumentoinnin GDPR-mukaisella EU-hostingilla.",
        },
        {
          question: "Voinko dokumentoida pigmentit ja touch-upit?",
          answer:
            "Kyllä. Hoitomerkinnät ja valokuvat säilyvät asiakasprofiilissa, joten jokainen touch-up rakentuu edellisen istunnon päälle.",
        },
      ],
      whatTitle: "Mikä Treatflow on pysyvälle meikille?",
      whatParas: [
        "Pysyvä meikki vaatii tarkkaa dokumentointia: pigmentit, alueet, tekniikat ja paranemismerkinnät. Treatflow säilyttää historian asiakaskortistossa suostumuksen ja valokuvien rinnalla.",
        "Taiteilijat käyttävät verkkoajanvarausta konsultaatioihin ja touch-upeihin, digitaalisia lomakkeita ennen toimenpiteitä sekä muistutuksia, jotta asiakkaat palaavat ajoissa.",
      ],
      audiences: [
        "Pysyvän meikin ja microbladingin ammattilaiset",
        "PMU-studiot, joissa on useita tuoleja",
        "Kauneushoitolat, jotka tarjoavat kulmien, huulten ja eyelinerin PMU:ta",
        "Tiimit, jotka dokumentoivat pigmenttejä ja touch-up-syklejä",
      ],
      problems: [
        {
          problem: "Pigmenttitiedot katoavat istuntojen välillä",
          solution: "Jäsennellyt hoitomerkinnät jokaisessa asiakasprofiilissa.",
        },
        {
          problem: "Paperinen suostumus ennen toimenpiteitä",
          solution: "Digitaalinen suostumus ennen ajanvarausta.",
        },
        {
          problem: "Touch-up-päivät muistikirjoissa",
          solution: "Kalenteri, muistutukset ja verkkoajanvaraus yhdessä paikassa.",
        },
        {
          problem: "Ennen/jälkeen-kuvia on vaikea löytää",
          solution: "Valokuvat linkitettynä asiakaskortistoon ja käyntiin.",
        },
      ],
      features: [
        { icon: FileText, title: "Pigmentti- ja tekniikkamerkinnät", desc: "Dokumentoi värit, neulat ja käsitellyt alueet." },
        { icon: ClipboardCheck, title: "Suostumuslomakkeet", desc: "Digitaalinen suostumus ennen jokaista toimenpidettä." },
        { icon: Camera, title: "Valokuvadokumentointi", desc: "Ennen/jälkeen-kuvat asiakasprofiilissa." },
        { icon: Calendar, title: "Touch-up-ajanvaraus", desc: "Suunnittele paranemistarkistukset ja touch-upit." },
        { icon: Users, title: "Asiakaskortistot", desc: "Koko PMU-historia yhdessä paikassa." },
        { icon: Bell, title: "Muistutukset", desc: "Vähennä peruuttamatta jääneitä touch-upeja." },
      ],
      benefits: [
        "Tarkka historia turvallisempiin touch-upeihin",
        "Ammattimainen suostumusjälki jokaiselle asiakkaalle",
        "Vähemmän hallintoa konsultaation ja toimenpiteen välillä",
        "Selkeät valokuvatiedot portfolioon ja seurantaan",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi PMU-studiot valitsevat Treatflow'n",
      marketParas: [
        "Pysyvä meikki on yksityiskohtavetoista. Treatflow yhdistää varauksen suostumukseen, merkintöihin ja valokuviin, jotta jokainen käynti dokumentoidaan ilman ylimääräisiä työkaluja.",
      ],
      highlights: [
        "Verkkoajanvaraus ilman provisiota",
        "Suostumuslomakkeet ennen toimenpiteitä",
        "Pigmentti- ja tekniikkadokumentointi",
        "Valokuvahistoria linkitettynä asiakkaisiin",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on pysyvän meikin ohjelmisto suostumuslomakkeilla, pigmenttimerkinnöillä, valokuvadokumentoinnilla, asiakaskortistoilla, verkkoajanvarauksella ja muistutuksilla. PMU- ja microblading-studioille. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-studio-ohjelmisto verkkoajanvarauksella, asiakaskortistoilla, suostumuslomakkeilla, hoitodokumentoinnilla ja muistutuksilla – sopii pysyvän meikin studioille.",
        },
        {
          question: "Sopiiko se microbladingiin?",
          answer:
            "Kyllä. Voit dokumentoida tekniikat, pigmentit, valokuvat ja touch-up-aikataulut kulmille, huulille ja eyelinerille.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tiedot säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
      featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
    },
  },

  "tattoo-studio-software": {
    nl: {
      serviceName: "Software voor tattoo-studio's",
      serviceDescription:
        "Software voor tattoo-studio's: toestemmingsformulieren, klantendossiers, afspraakboeking, sessienotities en herinneringen.",
      eyebrow: "Software voor tattoo-studio's",
      h1: "Tattoosoftware voor moderne studio's",
      subtitle:
        "Digitale toestemming, klantendossiers, sessienotities en online boeken – gemaakt voor tattoo-studio's die minder papierwerk en duidelijkere planning willen.",
      aiCapsules: [
        {
          question: "Welke software hebben tattoo-studio's nodig?",
          answer:
            "Tattoo-studio's hebben digitale toestemmings- en vrijwaringsformulieren, klantendossiers, sessienotities, referentiefoto's en betrouwbare afspraakboeking met herinneringen nodig. Treatflow combineert dit in één GDPR-conform platform met hosting in de EU.",
        },
        {
          question: "Vervangt Treatflow papieren vrijwaringsformulieren?",
          answer:
            "Ja. Klanten kunnen digitale toestemming invullen vóór de afspraak, zodat je team sessies start met het papierwerk al afgerond.",
        },
      ],
      whatTitle: "Wat is Treatflow voor tattoo-studio's?",
      whatParas: [
        "Treatflow helpt tattoo-studio's toestemming, boekingen en klantgeschiedenis in één systeem te brengen. Artists zien notities en foto's op het klantprofiel; de balie beheert de agenda.",
        "Online boeken en herinneringen verminderen no-shows, terwijl digitale formulieren de papierchaos vóór elke sessie verminderen.",
      ],
      audiences: [
        "Tattoo-studio's en private studio's",
        "Shops met meerdere artists die één agenda delen",
        "Studio's met tattoos en nazorg-follow-ups",
        "Teams die papieren vrijwaringen en agenda's vervangen",
      ],
      problems: [
        {
          problem: "Papieren vrijwaringen en archiefkasten",
          solution: "Digitale toestemming veilig opgeslagen op het klantendossier.",
        },
        {
          problem: "Dubbele boekingen tussen artists",
          solution: "Gedeelde agenda met duidelijke beschikbaarheid.",
        },
        {
          problem: "Sessienotities op telefoons en papier",
          solution: "Behandelnotities en foto's gekoppeld aan elke klant.",
        },
        {
          problem: "Klanten vergeten aanbetaling of afspraaktijd",
          solution: "Herinneringen via sms en e-mail.",
        },
      ],
      features: [
        { icon: ClipboardCheck, title: "Toestemming & vrijwaring", desc: "Digitale formulieren vóór elke sessie." },
        { icon: Users, title: "Klantendossiers", desc: "Historie, notities en contacten in één profiel." },
        { icon: FileText, title: "Sessienotities", desc: "Documenteer werk, nazorg en vervolgstappen." },
        { icon: Camera, title: "Referentiefoto's", desc: "Bewaar referenties en voortgangsfoto's." },
        { icon: Link2, title: "Online boeken", desc: "Klanten vragen of boeken beschikbare slots." },
        { icon: Calendar, title: "Studio-agenda", desc: "Coördineer artists en ruimtes." },
      ],
      benefits: [
        "Minder papier vóór elke sessie",
        "Duidelijkere planning over artists heen",
        "Klantgeschiedenis klaar voor touch-ups en cover-ups",
        "Minder gemiste afspraken met herinneringen",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom tattoo-studio's voor Treatflow kiezen",
      marketParas: [
        "Tattoo-studio's hebben toestemming en planning net zo hard nodig als creatieve tools. Treatflow richt zich op studio-operaties – boeken, formulieren en dossiers – zonder marktplaatscommissies.",
      ],
      highlights: [
        "Digitale toestemming vóór sessies",
        "Gedeelde agenda voor multi-artist shops",
        "Klantendossiers met notities en foto's",
        "Herinneringen om no-shows te verminderen",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor tattoo-studio's met digitale toestemming, klantendossiers, sessienotities, fotodocumentatie, online boeken en herinneringen. Voor tattoo-studio's en multi-artist shops. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is studiosoftware met online boeken, klantendossiers, toestemmingsformulieren, documentatie en herinneringen – geschikt voor tattoo-studio's.",
        },
        {
          question: "Kunnen meerdere artists één studio delen?",
          answer:
            "Ja. Een gedeelde agenda en klantendossiers helpen multi-artist shops georganiseerd te blijven.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["forms", "online-booking", "client-records", "pricing"],
    },
    fi: {
      serviceName: "Tatuointistudion ohjelmisto",
      serviceDescription:
        "Ohjelmisto tatuointistudioille: suostumuslomakkeet, asiakaskortistot, ajanvaraus, istuntomerkinnät ja muistutukset.",
      eyebrow: "Tatuointistudion ohjelmisto",
      h1: "Tatuointiohjelmisto moderneille studioille",
      subtitle:
        "Digitaalinen suostumus, asiakaskortistot, istuntomerkinnät ja verkkoajanvaraus – suunniteltu tatuointistudioille, jotka haluavat vähemmän paperityötä ja selkeämmän aikataulun.",
      aiCapsules: [
        {
          question: "Millaista ohjelmistoa tatuointistudiot tarvitsevat?",
          answer:
            "Tatuointistudiot tarvitsevat digitaaliset suostumus- ja vapautuslomakkeet, asiakaskortistot, istuntomerkinnät, referenssikuvat sekä luotettavan ajanvarauksen muistutuksilla. Treatflow yhdistää nämä yhdelle GDPR-mukaiselle alustalle EU-hostingilla.",
        },
        {
          question: "Korvaako Treatflow paperiset vapautuslomakkeet?",
          answer:
            "Kyllä. Asiakkaat voivat täyttää digitaalisen suostumuksen ennen aikaa, joten tiimisi aloittaa istunnot paperityön jo valmiina.",
        },
      ],
      whatTitle: "Mikä Treatflow on tatuointistudioille?",
      whatParas: [
        "Treatflow auttaa tatuointistudioita siirtämään suostumuksen, varaukset ja asiakashistorian yhteen järjestelmään. Taiteilijat näkevät merkinnät ja valokuvat asiakasprofiilissa; vastaanotto hallitsee kalenteria.",
        "Verkkoajanvaraus ja muistutukset vähentävät no-show'ta, digitaaliset lomakkeet vähentävät paperikaaosta ennen jokaista istuntoa.",
      ],
      audiences: [
        "Tatuointistudiot ja yksityisstudiot",
        "Monen taiteilijan shopit, jotka jakavat yhden kalenterin",
        "Studiot, jotka tarjoavat tatuointeja ja jälkihoidon seurantaa",
        "Tiimit, jotka korvaavat paperiset vapautukset ja kalenterit",
      ],
      problems: [
        {
          problem: "Paperiset vapautukset ja arkistokaapit",
          solution: "Digitaalinen suostumus turvallisesti asiakaskortistossa.",
        },
        {
          problem: "Päällekkäiset varaukset taiteilijoiden välillä",
          solution: "Jaettu kalenteri selkeällä saatavuudella.",
        },
        {
          problem: "Istuntomerkinnät puhelimissa ja paperilla",
          solution: "Hoitomerkinnät ja valokuvat linkitettynä jokaiseen asiakkaaseen.",
        },
        {
          problem: "Asiakkaat unohtavat ennakkomaksun tai ajan",
          solution: "Muistutukset SMS:llä ja sähköpostilla.",
        },
      ],
      features: [
        { icon: ClipboardCheck, title: "Suostumus ja vapautus", desc: "Digitaaliset lomakkeet ennen jokaista istuntoa." },
        { icon: Users, title: "Asiakaskortistot", desc: "Historia, merkinnät ja yhteystiedot yhdessä profiilissa." },
        { icon: FileText, title: "Istuntomerkinnät", desc: "Dokumentoi työ, jälkihoito ja seuraavat askeleet." },
        { icon: Camera, title: "Referenssikuvat", desc: "Säilytä referenssit ja edistymiskuvat." },
        { icon: Link2, title: "Verkkoajanvaraus", desc: "Asiakkaat pyytävät tai varaavat vapaita aikoja." },
        { icon: Calendar, title: "Studiokalenteri", desc: "Koordinoi taiteilijat ja tilat." },
      ],
      benefits: [
        "Vähemmän paperia ennen jokaista istuntoa",
        "Selkeämmät aikataulut taiteilijoiden välillä",
        "Asiakashistoria valmiina touch-upeihin ja peittoihin",
        "Vähemmän peruuttamatta jääneitä aikoja muistutuksilla",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi tatuointistudiot valitsevat Treatflow'n",
      marketParas: [
        "Tatuointistudiot tarvitsevat suostumusta ja aikataulutusta yhtä paljon kuin luovia työkaluja. Treatflow keskittyy studion toimintaan – varaukseen, lomakkeisiin ja kortistoihin – ilman markkinapaikkaprovisioita.",
      ],
      highlights: [
        "Digitaalinen suostumus ennen istuntoja",
        "Jaettu kalenteri monen taiteilijan shopeille",
        "Asiakaskortistot merkinnöillä ja valokuvilla",
        "Muistutukset no-show'n vähentämiseen",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on tatuointistudion ohjelmisto digitaalisella suostumuksella, asiakaskortistoilla, istuntomerkinnöillä, valokuvadokumentoinnilla, verkkoajanvarauksella ja muistutuksilla. Tatuointistudioille ja monen taiteilijan shopeille. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on studiohallintaohjelmisto verkkoajanvarauksella, asiakaskortistoilla, suostumuslomakkeilla, dokumentoinnilla ja muistutuksilla – sopii tatuointistudioille.",
        },
        {
          question: "Voivatko useat taiteilijat jakaa saman studion?",
          answer:
            "Kyllä. Jaettu kalenteri ja asiakaskortistot auttavat monen taiteilijan shopeja pysymään järjestyksessä.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tiedot säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["forms", "online-booking", "client-records", "pricing"],
    },
  },

  "nail-salon-software": {
    nl: {
      serviceName: "Software voor nagelsalons",
      serviceDescription:
        "Software voor nagelsalons: online boeken, klantendossiers, afspraakherinneringen en behandelnotities.",
      eyebrow: "Software voor nagelsalons",
      h1: "Nagelsoftware voor drukke nail bars",
      subtitle:
        "Online boeken, klantvoorkeuren, herinneringen en duidelijke planning – gemaakt voor nagelsalons met hoog afspraakvolume.",
      aiCapsules: [
        {
          question: "Wat is de beste software voor nagelsalons?",
          answer:
            "Nagelsalons profiteren van online boeken zonder commissie, een duidelijke teamagenda, notities over klantvoorkeuren en automatische herinneringen. Treatflow biedt dit met GDPR-conforme hosting in de EU.",
        },
        {
          question: "Kunnen klanten refill-afspraken online boeken?",
          answer:
            "Ja. Klanten kunnen diensten rond de klok boeken op jouw persoonlijke boekingspagina – zonder marktplaatskosten.",
        },
      ],
      whatTitle: "Wat is Treatflow voor nagelsalons?",
      whatParas: [
        "Nagelsalons draaien op herhaalboekingen. Treatflow houdt de agenda helder, bewaart klantvoorkeuren en stuurt herinneringen zodat refills en nieuwe sets op tijd komen.",
        "Digitale klantendossiers helpen je team vormen, kleuren en allergieën te onthouden – zonder te zoeken in chats en notitieboekjes.",
      ],
      audiences: [
        "Nagelsalons en nail bars",
        "Manicure- en pedicurestudio's",
        "Teams met meerdere nagelstylisten en gedeelde agenda's",
        "Salons die Instagram-DM's voor boekingen vervangen",
      ],
      problems: [
        {
          problem: "Boekingen verspreid over DM's en telefoontjes",
          solution: "Eén online boekingspagina en gedeelde agenda.",
        },
        {
          problem: "Vergeten klantvoorkeuren",
          solution: "Notities over kleur, vorm en allergieën in het klantendossier.",
        },
        {
          problem: "Hoge no-show-rates bij refills",
          solution: "Automatische sms- en e-mailherinneringen.",
        },
        {
          problem: "Moeilijke overdracht tussen stylisten",
          solution: "Gedeelde historie voor elke klant.",
        },
      ],
      features: [
        { icon: Link2, title: "Online boeken", desc: "Boekingspagina 24/7 zonder commissie." },
        { icon: Calendar, title: "Teamagenda", desc: "Coördineer stylisten en stations." },
        { icon: Users, title: "Klantendossiers", desc: "Voorkeuren, historie en notities." },
        { icon: Bell, title: "Herinneringen", desc: "Minder gemiste refills en walk-outs." },
        { icon: ClipboardCheck, title: "Anamneseformulieren", desc: "Allergieën en voorkeuren digitaal vastleggen." },
        { icon: FileText, title: "Bezoeknotities", desc: "Documenteer diensten en gebruikte producten." },
      ],
      benefits: [
        "Minder boekingsberichten te beheren",
        "Vlottere dagen met een duidelijke teamagenda",
        "Klanten voelen zich herkend via voorkeursnotities",
        "Lagere no-show-rates met herinneringen",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom nagelsalons voor Treatflow kiezen",
      marketParas: [
        "Hoog-volume nagelsalons hebben boeken en klantgeheugen nodig, geen complexe kliniekmodules. Treatflow houdt de operatie eenvoudig en biedt formulieren en documentatie wanneer je die nodig hebt.",
      ],
      highlights: [
        "Online boeken zonder commissie",
        "Gedeelde agenda voor stylisten",
        "Historie van klantvoorkeuren",
        "Automatische herinneringen",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor nagelsalons met online boeken, klantendossiers, voorkeursnotities, herinneringen en digitale formulieren. Voor nagelsalons en nail bars met meerdere stylisten. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één studiosoftware met online boeken, klantendossiers, formulieren, documentatie en herinneringen – geschikt voor nagelsalons.",
        },
        {
          question: "Rekent Treatflow per boeking?",
          answer:
            "Nee. Er is geen commissie per afspraak.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    },
    fi: {
      serviceName: "Kynsistudion ohjelmisto",
      serviceDescription:
        "Ohjelmisto kynsistudioille: verkkoajanvaraus, asiakaskortistot, ajanvarausmuistutukset ja hoitomerkinnät.",
      eyebrow: "Kynsistudion ohjelmisto",
      h1: "Kynsiohjelmisto kiireisille nail bareille",
      subtitle:
        "Verkkoajanvaraus, asiakasmieltymykset, muistutukset ja selkeät aikataulut – suunniteltu kynsistudioille, joilla on suuri ajanvarausmäärä.",
      aiCapsules: [
        {
          question: "Mikä on paras ohjelmisto kynsistudioille?",
          answer:
            "Kynsistudiot hyötyvät provisiovapaasta verkkoajanvarauksesta, selkeästä tiimikalenterista, asiakasmieltymysten muistiinpanoista ja automaattisista muistutuksista. Treatflow tarjoaa nämä GDPR-mukaisella EU-hostingilla.",
        },
        {
          question: "Voivatko asiakkaat varata täyttöajat verkossa?",
          answer:
            "Kyllä. Asiakkaat voivat varata palveluita vuorokauden ympäri omalla varaussivullasi – ilman markkinapaikkamaksuja.",
        },
      ],
      whatTitle: "Mikä Treatflow on kynsistudioille?",
      whatParas: [
        "Kynsistudiot elävät toistuvista varauksista. Treatflow pitää kalenterin selkeänä, säilyttää asiakasmieltymykset ja lähettää muistutuksia, jotta täytöt ja uudet setit saapuvat ajoissa.",
        "Digitaaliset asiakaskortistot auttavat tiimiä muistamaan muodot, värit ja allergiat – ilman etsintää chateista ja muistikirjoista.",
      ],
      audiences: [
        "Kynsistudiot ja nail barit",
        "Manikyyri- ja pedikyyristudiot",
        "Monen kynsiteknikon tiimit jaetuilla kalentereilla",
        "Studiot, jotka korvaavat Instagram-DM:t ajanvarauksessa",
      ],
      problems: [
        {
          problem: "Varaukset hajallaan DM:issä ja puheluissa",
          solution: "Yksi verkkoajanvaraussivu ja jaettu kalenteri.",
        },
        {
          problem: "Unohtuneet asiakasmieltymykset",
          solution: "Muistiinpanot väristä, muodosta ja allergioista asiakaskortistossa.",
        },
        {
          problem: "Korkeat no-show-luvut täytöissä",
          solution: "Automaattiset SMS- ja sähköpostimuistutukset.",
        },
        {
          problem: "Vaikeat vuoronvaihdot teknikoiden välillä",
          solution: "Jaettu historia jokaiselle asiakkaalle.",
        },
      ],
      features: [
        { icon: Link2, title: "Verkkoajanvaraus", desc: "24/7-varaussivu ilman provisiota." },
        { icon: Calendar, title: "Tiimikalenteri", desc: "Koordinoi teknikoita ja asemia." },
        { icon: Users, title: "Asiakaskortistot", desc: "Mieltymykset, historia ja muistiinpanot." },
        { icon: Bell, title: "Muistutukset", desc: "Vähennä peruuttamatta jääneitä täyttöjä." },
        { icon: ClipboardCheck, title: "Anamneesilomakkeet", desc: "Kerää allergiat ja mieltymykset digitaalisesti." },
        { icon: FileText, title: "Käyntimerkinnät", desc: "Dokumentoi palvelut ja käytetyt tuotteet." },
      ],
      benefits: [
        "Vähemmän varausviestejä hallittavaksi",
        "Sujuvammat päivät selkeällä tiimikalenterilla",
        "Asiakkaat tuntevat olonsa muistetuiksi mieltymysmerkinnöillä",
        "Pienemmät no-show-luvut muistutuksilla",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi kynsistudiot valitsevat Treatflow'n",
      marketParas: [
        "Suuren volyymin kynsistudiot tarvitsevat varausta ja asiakasmuistia enemmän kuin monimutkaisia klinikkomoduuleja. Treatflow pitää toiminnan yksinkertaisena ja tarjoaa lomakkeet sekä dokumentoinnin tarvittaessa.",
      ],
      highlights: [
        "Provisiovapaa verkkoajanvaraus",
        "Jaettu kalenteri teknikoille",
        "Asiakasmieltymysten historia",
        "Automaattiset muistutukset",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on kynsistudion ohjelmisto verkkoajanvarauksella, asiakaskortistoilla, mieltymysmerkinnöillä, muistutuksilla ja digitaalisilla lomakkeilla. Kynsistudioille ja monen teknikon nail bareille. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-studio-ohjelmisto verkkoajanvarauksella, asiakaskortistoilla, lomakkeilla, dokumentoinnilla ja muistutuksilla – sopii kynsistudioille.",
        },
        {
          question: "Periikö Treatflow per varaus?",
          answer:
            "Ei. Provisiota per ajanvaraus ei ole.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tiedot säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    },
  },

  "lash-studio-software": {
    nl: {
      serviceName: "Software voor lash-studio's",
      serviceDescription:
        "Software voor lash-studio's: refill-planning, klantendossiers, toestemmingsformulieren, fotodocumentatie en online boeken.",
      eyebrow: "Software voor lash-studio's",
      h1: "Lash-software voor extensions en refills",
      subtitle:
        "Plan refills, bewaar lash maps en toestemming, stuur herinneringen en bewaar klantfoto's – gemaakt voor lash-studio's die draaien op retentie.",
      aiCapsules: [
        {
          question: "Welke software hebben lash-studio's nodig?",
          answer:
            "Lash-studio's hebben refill-planning, notities over voorkeuren en mapping, toestemmingsformulieren, voortgangsfoto's en herinneringen nodig. Treatflow combineert boeken, dossiers en formulieren met GDPR-conforme hosting in de EU.",
        },
        {
          question: "Kan ik refill-intervallen per klant volgen?",
          answer:
            "Ja. Bezoekhistorie en notities blijven op het klantprofiel, zodat je weet wanneer de volgende refill nodig is en wat de vorige keer is aangebracht.",
        },
      ],
      whatTitle: "Wat is Treatflow voor lash-studio's?",
      whatParas: [
        "Lash-bedrijven floreren op refills. Treatflow houdt de agenda vol, documenteert curl, lengte en mappingvoorkeuren, en herinnert klanten vóór hun volgende afspraak.",
        "Digitale toestemming en fotodocumentatie ondersteunen professionele standaarden zonder je stoeltijd te vertragen.",
      ],
      audiences: [
        "Lash-extension-studio's",
        "Schoonheidssalons met dedicated lash artists",
        "Solo lash techs die hun eigen boekingen beheren",
        "Teams die refills over meerdere stoelen coördineren",
      ],
      problems: [
        {
          problem: "Refill-data in spreadsheets",
          solution: "Klantgeschiedenis en herinneringen in één systeem.",
        },
        {
          problem: "Mappingvoorkeuren vergeten",
          solution: "Notities en foto's op elk klantprofiel.",
        },
        {
          problem: "Toestemming nog op papier",
          solution: "Digitale formulieren vóór afspraken.",
        },
        {
          problem: "Inbox vol met boekingsverzoeken",
          solution: "Online boekingspagina zonder commissie.",
        },
      ],
      features: [
        { icon: Calendar, title: "Refill-planning", desc: "Plan sets en refills met duidelijke beschikbaarheid." },
        { icon: Users, title: "Klant- & lash-notities", desc: "Curl, lengte, mapping en lijmen op dossier." },
        { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale anamnese vóór elke nieuwe set." },
        { icon: Camera, title: "Voortgangsfoto's", desc: "Documenteer resultaten per bezoek." },
        { icon: Link2, title: "Online boeken", desc: "Klanten boeken refills 24/7." },
        { icon: Bell, title: "Refill-herinneringen", desc: "Houd retentie hoog met automatische herinneringen." },
      ],
      benefits: [
        "Hogere refill-retentie met tijdige herinneringen",
        "Consistente resultaten via gedocumenteerde voorkeuren",
        "Minder administratie naast de stoel",
        "Professionele toestemmings- en fotodossiers",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom lash-studio's voor Treatflow kiezen",
      marketParas: [
        "Lash-studio's hebben retentietools net zo hard nodig als boekingstools. Treatflow verbindt afspraken met klantnotities en herinneringen zodat refills voorspelbaar blijven.",
      ],
      highlights: [
        "Online boeken zonder commissie",
        "Lash-voorkeurs- en mappingnotities",
        "Toestemmingsformulieren vóór nieuwe sets",
        "Refill-herinneringen en fotohistorie",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor lash-studio's met refill-planning, klantnotities, toestemmingsformulieren, fotodocumentatie, online boeken en herinneringen. Voor lash-extension-studio's. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één studiosoftware met online boeken, klantendossiers, toestemmingsformulieren, documentatie en herinneringen – geschikt voor lash-studio's.",
        },
        {
          question: "Is het geschikt voor solo lash techs?",
          answer:
            "Ja. Solo artists gebruiken Treatflow voor boeken, herinneringen en klantgeschiedenis zonder marktplaatscommissies.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    },
    fi: {
      serviceName: "Ripsistudion ohjelmisto",
      serviceDescription:
        "Ohjelmisto ripsistudioille: täyttöajanvaraus, asiakaskortistot, suostumuslomakkeet, valokuvadokumentointi ja verkkoajanvaraus.",
      eyebrow: "Ripsistudion ohjelmisto",
      h1: "Ripsiohjelmisto extensioneihin ja täyttöihin",
      subtitle:
        "Suunnittele täytöt, säilytä lash mapit ja suostumus, lähetä muistutuksia ja pidä asiakaskuvat – suunniteltu ripsistudioille, jotka elävät retentiosta.",
      aiCapsules: [
        {
          question: "Millaista ohjelmistoa ripsistudiot tarvitsevat?",
          answer:
            "Ripsistudiot tarvitsevat täyttöajanvarausta, mieltymys- ja mapping-merkintöjä, suostumuslomakkeita, edistymiskuvia ja muistutuksia. Treatflow yhdistää varauksen, kortistot ja lomakkeet GDPR-mukaisella EU-hostingilla.",
        },
        {
          question: "Voinko seurata täyttövälejä asiakaskohtaisesti?",
          answer:
            "Kyllä. Käyntihistoria ja merkinnät säilyvät asiakasprofiilissa, joten tiedät milloin seuraava täyttö on ja mitä viimeksi laitettiin.",
        },
      ],
      whatTitle: "Mikä Treatflow on ripsistudioille?",
      whatParas: [
        "Ripsiliiketoiminta kukoistaa täytöillä. Treatflow pitää kalenterin täynnä, dokumentoi curl-, pituus- ja mapping-mieltymykset sekä muistuttaa asiakkaita ennen seuraavaa aikaa.",
        "Digitaalinen suostumus ja valokuvadokumentointi tukevat ammattistandardeja hidastamatta tuoliaikaa.",
      ],
      audiences: [
        "Ripsienpidennysstudiot",
        "Kauneushoitolat, joilla on omat ripsiammattilaiset",
        "Yksinyrittäjä-ripsiteknikot, jotka hallitsevat omat varauksensa",
        "Tiimit, jotka koordinoivat täyttöjä useilla tuoleilla",
      ],
      problems: [
        {
          problem: "Täyttöpäivät seurataan taulukoissa",
          solution: "Asiakashistoria ja muistutukset yhdessä järjestelmässä.",
        },
        {
          problem: "Mapping-mieltymykset unohtuvat",
          solution: "Muistiinpanot ja valokuvat jokaisessa asiakasprofiilissa.",
        },
        {
          problem: "Suostumus yhä paperilla",
          solution: "Digitaaliset lomakkeet ennen ajanvarausta.",
        },
        {
          problem: "Inbox täynnä varauspyyntöjä",
          solution: "Verkkoajanvaraussivu ilman provisiota.",
        },
      ],
      features: [
        { icon: Calendar, title: "Täyttöajanvaraus", desc: "Suunnittele setit ja täytöt selkeällä saatavuudella." },
        { icon: Users, title: "Asiakas- ja ripsimerkinnät", desc: "Curl, pituus, mapping ja liimat tiedostossa." },
        { icon: ClipboardCheck, title: "Suostumuslomakkeet", desc: "Digitaalinen anamneesi ennen jokaista uutta settiä." },
        { icon: Camera, title: "Edistymiskuvat", desc: "Dokumentoi tulokset per käynti." },
        { icon: Link2, title: "Verkkoajanvaraus", desc: "Asiakkaat varaavat täytöt 24/7." },
        { icon: Bell, title: "Täyttömuistutukset", desc: "Pidä retentio korkealla automaattisilla muistutuksilla." },
      ],
      benefits: [
        "Parempi täyttöretentio ajankohtaisilla muistutuksilla",
        "Johdonmukaiset tulokset dokumentoiduilla mieltymyksillä",
        "Vähemmän hallintoa tuolin ääressä",
        "Ammattimaiset suostumus- ja valokuvatiedot",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi ripsistudiot valitsevat Treatflow'n",
      marketParas: [
        "Ripsistudiot tarvitsevat retentiotyökaluja yhtä paljon kuin ajanvaraustyökaluja. Treatflow yhdistää ajat asiakasmerkintöihin ja muistutuksiin, jotta täytöt pysyvät ennustettavina.",
      ],
      highlights: [
        "Provisiovapaa verkkoajanvaraus",
        "Ripsimieltymys- ja mapping-merkinnät",
        "Suostumuslomakkeet ennen uusia settejä",
        "Täyttömuistutukset ja valokuvahistoria",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on ripsistudion ohjelmisto täyttöajanvarauksella, asiakasmerkinnöillä, suostumuslomakkeilla, valokuvadokumentoinnilla, verkkoajanvarauksella ja muistutuksilla. Ripsienpidennysstudioille. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-studio-ohjelmisto verkkoajanvarauksella, asiakaskortistoilla, suostumuslomakkeilla, dokumentoinnilla ja muistutuksilla – sopii ripsistudioille.",
        },
        {
          question: "Sopiiko se yksinyrittäjä-ripsiteknikoille?",
          answer:
            "Kyllä. Yksinyrittäjät käyttävät Treatflow'ta varaukseen, muistutuksiin ja asiakashistoriaan ilman markkinapaikkaprovisioita.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tiedot säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    },
  },

  "spa-wellness-software": {
    nl: {
      serviceName: "Software voor spa & wellness",
      serviceDescription:
        "Software voor spa's en wellnessstudio's: online boeken, klantendossiers, behandelnotities, toestemmingsformulieren en herinneringen.",
      eyebrow: "Software voor spa & wellness",
      h1: "Spa- en wellnesssoftware voor rustige operaties",
      subtitle:
        "Coördineer ruimtes, therapeuten en pakketten met online boeken, klantgeschiedenis en digitale formulieren – zonder marktplaatscommissies.",
      aiCapsules: [
        {
          question: "Welke software hebben spa's nodig?",
          answer:
            "Spa's hebben multi-resource-planning, online boeken, klantvoorkeuren, behandelnotities en herinneringen nodig. Treatflow ondersteunt spa- en wellnessstudio's met GDPR-conforme hosting in de EU.",
        },
        {
          question: "Kan Treatflow pakketten en terugkerende bezoeken aan?",
          answer:
            "Ja. Klantgeschiedenis en herinneringen helpen je series en vaste wellnessklanten te beheren.",
        },
      ],
      whatTitle: "Wat is Treatflow voor spa's en wellnessstudio's?",
      whatParas: [
        "Spa's balanceren sfeer met operatie. Treatflow houdt boekingen georganiseerd, bewaart klantvoorkeuren en documenteert behandelingen zodat de gastervaring soepel blijft.",
        "Digitale anamnese en herinneringen verminderen de baliebelasting terwijl therapeuten de notities krijgen die ze nodig hebben.",
      ],
      audiences: [
        "Day spa's en wellnessstudio's",
        "Hotel- en boutique-spa's",
        "Wellnesscentra met meerdere therapeuten",
        "Studio's die massage, facials en lichaamsbehandelingen combineren",
      ],
      problems: [
        {
          problem: "Conflicten tussen ruimtes en therapeuten",
          solution: "Gedeelde agenda met duidelijke resourceplanning.",
        },
        {
          problem: "Gastvoorkeuren verdwijnen tussen bezoeken",
          solution: "Klantendossiers met notities en historie.",
        },
        {
          problem: "Papieren anamnese bij de receptie",
          solution: "Digitale formulieren vóór aankomst.",
        },
        {
          problem: "No-shows bij langere behandelingen",
          solution: "Automatische herinneringen vóór afspraken.",
        },
      ],
      features: [
        { icon: Calendar, title: "Spa-agenda", desc: "Coördineer ruimtes, therapeuten en diensten." },
        { icon: Link2, title: "Online boeken", desc: "Gasten boeken behandelingen 24/7 zonder commissie." },
        { icon: Users, title: "Gastprofielen", desc: "Voorkeuren, historie en notities op één plek." },
        { icon: ClipboardCheck, title: "Anamneseformulieren", desc: "Gezondheids- en toestemmingsformulieren vóór bezoeken." },
        { icon: FileText, title: "Behandelnotities", desc: "Documenteer diensten voor consistente zorg." },
        { icon: Bell, title: "Herinneringen", desc: "Minder no-shows bij langere afspraken." },
      ],
      benefits: [
        "Vlottere overdracht tussen balie en behandelruimte",
        "Gasten voelen zich herkend via voorkeurshistorie",
        "Minder papier bij de receptie",
        "Hogere opkomst met herinneringen",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom spa's voor Treatflow kiezen",
      marketParas: [
        "Spasoftware moet de gastervaring beschermen, niet compliceren. Treatflow verbindt boeken met dossiers en formulieren zodat de operatie rustig en professioneel blijft.",
      ],
      highlights: [
        "Online boeken zonder commissie",
        "Gedeelde agenda voor ruimtes en therapeuten",
        "Historie van gastvoorkeuren",
        "Digitale anamnese en behandelnotities",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor spa en wellness met online boeken, gastdossiers, anamneseformulieren, behandelnotities en herinneringen. Voor day spa's en wellnesscentra. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één software voor beauty-, spa- en wellnessstudio's met online boeken, klantendossiers, formulieren, documentatie en herinneringen.",
        },
        {
          question: "Is het geschikt voor day spa's?",
          answer:
            "Ja. Day spa's gebruiken Treatflow om boekingen, gastgeschiedenis en digitale anamnese te coördineren.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    },
    fi: {
      serviceName: "Spa- ja wellness-ohjelmisto",
      serviceDescription:
        "Ohjelmisto spa- ja wellness-studioille: verkkoajanvaraus, asiakaskortistot, hoitomerkinnät, suostumuslomakkeet ja muistutukset.",
      eyebrow: "Spa- ja wellness-ohjelmisto",
      h1: "Spa- ja wellness-ohjelmisto rauhalliseen operointiin",
      subtitle:
        "Koordinoi tilat, terapeutit ja paketit verkkoajanvarauksella, asiakashistorialla ja digitaalisilla lomakkeilla – ilman markkinapaikkaprovisioita.",
      aiCapsules: [
        {
          question: "Millaista ohjelmistoa spat tarvitsevat?",
          answer:
            "Spat tarvitsevat moniresurssiaikataulutusta, verkkoajanvarausta, asiakasmieltymyksiä, hoitomerkintöjä ja muistutuksia. Treatflow tukee spa- ja wellness-studioita GDPR-mukaisella EU-hostingilla.",
        },
        {
          question: "Voiko Treatflow käsitellä paketteja ja paluukäyntejä?",
          answer:
            "Kyllä. Asiakashistoria ja muistutukset auttavat hallitsemaan sarjahoitoja ja vakioasiakkaita.",
        },
      ],
      whatTitle: "Mikä Treatflow on spa- ja wellness-studioille?",
      whatParas: [
        "Spat tasapainottavat tunnelmaa ja operointia. Treatflow pitää varaukset järjestyksessä, säilyttää asiakasmieltymykset ja dokumentoi hoidot, jotta vieraskokemus pysyy saumattomana.",
        "Digitaalinen anamneesi ja muistutukset vähentävät vastaanoton kuormaa, kun terapeutit saavat tarvitsemansa merkinnät.",
      ],
      audiences: [
        "Day spat ja wellness-studiot",
        "Hotelli- ja boutique-spat",
        "Monen terapeutin wellness-keskukset",
        "Studiot, jotka yhdistävät hieronnan, kasvohoidot ja vartalohoidot",
      ],
      problems: [
        {
          problem: "Tila- ja terapeuttiristiriidat",
          solution: "Jaettu kalenteri selkeällä resurssisuunnittelulla.",
        },
        {
          problem: "Vierasmieltymykset katoavat käyntien välillä",
          solution: "Asiakaskortistot muistiinpanoilla ja historialla.",
        },
        {
          problem: "Paperinen anamneesi vastaanotossa",
          solution: "Digitaaliset lomakkeet ennen saapumista.",
        },
        {
          problem: "No-show't pidemmissä hoidoissa",
          solution: "Automaattiset muistutukset ennen aikoja.",
        },
      ],
      features: [
        { icon: Calendar, title: "Spa-kalenteri", desc: "Koordinoi tilat, terapeutit ja palvelut." },
        { icon: Link2, title: "Verkkoajanvaraus", desc: "Vieraat varaavat hoidot 24/7 ilman provisiota." },
        { icon: Users, title: "Vierasprofiilit", desc: "Mieltymykset, historia ja muistiinpanot yhdessä paikassa." },
        { icon: ClipboardCheck, title: "Anamneesilomakkeet", desc: "Terveys- ja suostumuslomakkeet ennen käyntejä." },
        { icon: FileText, title: "Hoitomerkinnät", desc: "Dokumentoi palvelut johdonmukaiseen hoitoon." },
        { icon: Bell, title: "Muistutukset", desc: "Vähennä no-show'ta pidemmissä ajoissa." },
      ],
      benefits: [
        "Sujuvammat vuoronvaihdot vastaanoton ja hoitohuoneen välillä",
        "Vieraat tuntevat olonsa tunnistetuiksi mieltymyshistorialla",
        "Vähemmän paperia vastaanotossa",
        "Parempi saapumisaste muistutuksilla",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi spat valitsevat Treatflow'n",
      marketParas: [
        "Spa-ohjelmiston tulee suojata vieraskokemusta, ei monimutkaistaa sitä. Treatflow yhdistää varauksen kortistoihin ja lomakkeisiin, jotta operointi pysyy rauhallisena ja ammattimaisena.",
      ],
      highlights: [
        "Provisiovapaa verkkoajanvaraus",
        "Jaettu kalenteri tiloille ja terapeuteille",
        "Vierasmieltymysten historia",
        "Digitaalinen anamneesi ja hoitomerkinnät",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on spa- ja wellness-ohjelmisto verkkoajanvarauksella, vieraskortistoilla, anamneesilomakkeilla, hoitomerkinnöillä ja muistutuksilla. Day spoille ja wellness-keskuksille. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-ohjelmisto kauneus-, spa- ja wellness-studioille verkkoajanvarauksella, asiakaskortistoilla, lomakkeilla, dokumentoinnilla ja muistutuksilla.",
        },
        {
          question: "Sopiiko se day spoille?",
          answer:
            "Kyllä. Day spat käyttävät Treatflow'ta varausten, vierashistorian ja digitaalisen anamneesin koordinointiin.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tiedot säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    },
  },
  "massage-software": {
    nl: {
      serviceName: "Software voor massagestudio's",
      serviceDescription:
        "Software voor massagetherapeuten en -studio's: online boeken, klantendossiers, anamneseformulieren, sessienotities en herinneringen.",
      eyebrow: "Software voor massagestudio's",
      h1: "Massagesoftware voor therapeuten en studio's",
      subtitle:
        "Online boeken, anamneseformulieren, sessienotities en herinneringen – gemaakt voor massagetherapeuten en studio's met meerdere ruimtes.",
      aiCapsules: [
        {
          question: "Welke software hebben massagetherapeuten nodig?",
          answer:
            "Massagetherapeuten hebben eenvoudig online boeken, anamnese- en toestemmingsformulieren, sessienotities, klantgeschiedenis en herinneringen nodig. Treatflow biedt dit met GDPR-conforme hosting in de EU en zonder boekingscommissies.",
        },
        {
          question: "Is Treatflow geschikt voor solo-therapeuten?",
          answer:
            "Ja. Solo-therapeuten gebruiken Treatflow om agenda, klantendossiers en herinneringen te beheren zonder marktplaatskosten.",
        },
      ],
      whatTitle: "Wat is Treatflow voor massagestudio's?",
      whatParas: [
        "Treatflow helpt massagetherapeuten minder tijd aan administratie te besteden en meer aan cliënten. Boeken, anamnese en sessienotities leven op één plek.",
        "Studio's met meerdere ruimtes coördineren beschikbaarheid terwijl de historie van elke cliënt privé en toegankelijk blijft voor de behandelend therapeut.",
      ],
      audiences: [
        "Zelfstandige massagetherapeuten",
        "Massagestudio's met meerdere ruimtes",
        "Wellnesscentra met therapeutische en ontspanningsmassage",
        "Teams die papieren anamnese en telefonisch boeken vervangen",
      ],
      problems: [
        {
          problem: "Alleen telefonisch boeken en gemiste oproepen",
          solution: "Online boekingspagina beschikbaar 24/7.",
        },
        {
          problem: "Papieren anamneseformulieren",
          solution: "Digitale gezondheids- en toestemmingsformulieren vóór sessies.",
        },
        {
          problem: "Sessienotities moeilijk terug te vinden",
          solution: "Notities opgeslagen op het klantprofiel.",
        },
        {
          problem: "Cliënten vergeten afspraken",
          solution: "Automatische sms- en e-mailherinneringen.",
        },
      ],
      features: [
        { icon: Link2, title: "Online boeken", desc: "Cliënten boeken massageafspraken zonder commissie." },
        { icon: ClipboardCheck, title: "Anamneseformulieren", desc: "Gezondheidsgeschiedenis en toestemming digitaal." },
        { icon: FileText, title: "Sessienotities", desc: "Documenteer focusgebieden en voortgang." },
        { icon: Users, title: "Klantendossiers", desc: "Volledige historie voor terugkerende cliënten." },
        { icon: Calendar, title: "Studio-agenda", desc: "Coördineer therapeuten en ruimtes." },
        { icon: Bell, title: "Herinneringen", desc: "Verminder no-shows." },
      ],
      benefits: [
        "Minder administratie tussen sessies",
        "Veiligere anamnese met digitale formulieren",
        "Betere zorgcontinuïteit via notities",
        "Minder gemiste afspraken",
        "GDPR-conforme hosting in de EU",
      ],
      marketTitle: "Waarom massageprofessionals voor Treatflow kiezen",
      marketParas: [
        "Massagepraktijken hebben betrouwbaar boeken en duidelijke dossiers nodig, meer dan complexe kassasystemen. Treatflow richt zich op afspraken, formulieren en documentatie.",
      ],
      highlights: [
        "Online boeken zonder commissie",
        "Digitale anamnese en toestemming",
        "Sessienotities op klantendossiers",
        "Herinneringen voor terugkerende cliënten",
        "GDPR-conforme hosting in de EU",
      ],
      aiSummary:
        "Treatflow is software voor massagestudio's met online boeken, anamneseformulieren, sessienotities, klantendossiers en herinneringen. Voor therapeuten en studio's met meerdere ruimtes. GDPR-conform.",
      faqs: [
        {
          question: "Wat is Treatflow?",
          answer:
            "Treatflow is alles-in-één studiosoftware met online boeken, klantendossiers, formulieren, documentatie en herinneringen – geschikt voor massagetherapeuten en -studio's.",
        },
        {
          question: "Kunnen solo-therapeuten het gebruiken?",
          answer:
            "Ja. Solo-praktijkhouders beheren boeken, formulieren en notities zonder marktplaatscommissies.",
        },
        {
          question: "Hoe kan ik starten?",
          answer:
            "Vraag vroege toegang aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
        },
        {
          question: "Waar worden gegevens gehost?",
          answer:
            "Treatflow host gegevens in de EU en is ontworpen voor GDPR-compliance.",
        },
      ],
      siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "forms", "client-records", "pricing"],
    },
    fi: {
      serviceName: "Hierontastudion ohjelmisto",
      serviceDescription:
        "Ohjelmisto hierojille ja studioille: verkkoajanvaraus, asiakaskortistot, anamneesilomakkeet, istuntomerkinnät ja muistutukset.",
      eyebrow: "Hierontastudion ohjelmisto",
      h1: "Hierontaohjelmisto terapeuteille ja studioille",
      subtitle:
        "Verkkoajanvaraus, anamneesilomakkeet, istuntomerkinnät ja muistutukset – suunniteltu hierojille ja monihuoneisille studioille.",
      aiCapsules: [
        {
          question: "Millaista ohjelmistoa hierojat tarvitsevat?",
          answer:
            "Hierojat tarvitsevat helpon verkkoajanvarauksen, anamneesi- ja suostumuslomakkeet, istuntomerkinnät, asiakashistorian ja muistutukset. Treatflow tarjoaa nämä GDPR-mukaisella EU-hostingilla ilman varausprovisioita.",
        },
        {
          question: "Sopiiko Treatflow yksinyrittäjäterapeuteille?",
          answer:
            "Kyllä. Yksinyrittäjät käyttävät Treatflow'ta kalenterin, asiakaskortistojen ja muistutusten hallintaan ilman markkinapaikkamaksuja.",
        },
      ],
      whatTitle: "Mikä Treatflow on hierontastudioille?",
      whatParas: [
        "Treatflow auttaa hierojia käyttämään vähemmän aikaa hallintoon ja enemmän asiakkaisiin. Varaus, anamneesi ja istuntomerkinnät elävät yhdessä paikassa.",
        "Monihuoneiset studiot koordinoivat saatavuutta pitäen kunkin asiakkaan historian yksityisenä ja hoitavan terapeutin saatavilla.",
      ],
      audiences: [
        "Itsenäiset hierojat",
        "Hierontastudiot, joissa on useita huoneita",
        "Wellness-keskukset, jotka tarjoavat terapeuttista ja rentouttavaa hierontaa",
        "Tiimit, jotka korvaavat paperianamneesin ja puhelinvarauksen",
      ],
      problems: [
        {
          problem: "Vain puhelinvaraus ja vastaamattomat puhelut",
          solution: "Verkkoajanvaraussivu saatavilla 24/7.",
        },
        {
          problem: "Paperiset anamneesilomakkeet",
          solution: "Digitaaliset terveys- ja suostumuslomakkeet ennen istuntoja.",
        },
        {
          problem: "Istuntomerkintöjä on vaikea löytää",
          solution: "Merkinnät tallennetaan asiakasprofiiliin.",
        },
        {
          problem: "Asiakkaat unohtavat ajat",
          solution: "Automaattiset SMS- ja sähköpostimuistutukset.",
        },
      ],
      features: [
        { icon: Link2, title: "Verkkoajanvaraus", desc: "Asiakkaat varaavat hieronta-ajat ilman provisiota." },
        { icon: ClipboardCheck, title: "Anamneesilomakkeet", desc: "Terveyshistoria ja suostumus digitaalisesti." },
        { icon: FileText, title: "Istuntomerkinnät", desc: "Dokumentoi fokusointialueet ja edistyminen." },
        { icon: Users, title: "Asiakaskortistot", desc: "Koko historia palaaville asiakkaille." },
        { icon: Calendar, title: "Studiokalenteri", desc: "Koordinoi terapeutit ja huoneet." },
        { icon: Bell, title: "Muistutukset", desc: "Vähennä no-show'ta." },
      ],
      benefits: [
        "Vähemmän hallintoa istuntojen välillä",
        "Turvallisempi anamneesi digitaalisilla lomakkeilla",
        "Parempi hoidon jatkuvuus merkinnöillä",
        "Vähemmän peruuttamatta jääneitä aikoja",
        "GDPR-mukainen hosting EU:ssa",
      ],
      marketTitle: "Miksi hieronta-ammattilaiset valitsevat Treatflow'n",
      marketParas: [
        "Hierontavastaanotot tarvitsevat luotettavaa varausta ja selkeitä tietoja enemmän kuin monimutkaisia kassajärjestelmiä. Treatflow keskittyy ajanvaraukseen, lomakkeisiin ja dokumentointiin.",
      ],
      highlights: [
        "Provisiovapaa verkkoajanvaraus",
        "Digitaalinen anamneesi ja suostumus",
        "Istuntomerkinnät asiakaskortistoissa",
        "Muistutukset palaaville asiakkaille",
        "GDPR-mukainen hosting EU:ssa",
      ],
      aiSummary:
        "Treatflow on hierontastudion ohjelmisto verkkoajanvarauksella, anamneesilomakkeilla, istuntomerkinnöillä, asiakaskortistoilla ja muistutuksilla. Terapeuteille ja monihuoneisille studioille. GDPR-mukainen.",
      faqs: [
        {
          question: "Mikä on Treatflow?",
          answer:
            "Treatflow on all-in-one-studio-ohjelmisto verkkoajanvarauksella, asiakaskortistoilla, lomakkeilla, dokumentoinnilla ja muistutuksilla – sopii hierojille ja studioille.",
        },
        {
          question: "Voivatko yksinyrittäjät käyttää sitä?",
          answer:
            "Kyllä. Yksinyrittäjät hallitsevat varausta, lomakkeita ja merkintöjä ilman markkinapaikkaprovisioita.",
        },
        {
          question: "Miten aloitan?",
          answer:
            "Pyydä varhaista pääsyä omalle maallesi. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
        },
        {
          question: "Missä tiedot säilytetään?",
          answer:
            "Treatflow säilyttää tiedot EU:ssa ja on suunniteltu GDPR-mukaisuuteen.",
        },
      ],
      siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "forms", "client-records", "pricing"],
    },
  },
};

export function getIndustryPageNlFi(
  lang: "nl" | "fi",
  key: IndustryPageKey,
  market: "nl" | "fi"
): InternationalPageContent {
  return buildPage(lang, market, key, pages[key][lang]);
}
