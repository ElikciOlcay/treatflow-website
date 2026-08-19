export type StaticPageLang = "nl" | "fi";

export type EarlyAccessCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  note: string;
  copy: {
    nameLabel: string;
    studioLabel: string;
    cityLabel: string;
    countryLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitLabel: string;
    successTitle: string;
    successText: string;
    errorText: string;
    requiredHint: string;
  };
};

export type AboutCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  valuesTitle: string;
  values: { title: string; desc: string }[];
  ctaLabel: string;
};

export type ContactCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  body: string;
  cta: string;
};

export type LegalPageCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  paragraphs: string[];
};

const earlyAccess: Record<StaticPageLang, Omit<EarlyAccessCopy, "subtitle" | "metaDescription">> = {
  nl: {
    metaTitle: "Early access aanvragen",
    title: "Vraag early access aan voor Treatflow",
    note: "Directe registratie is momenteel alleen open voor Duitsland, Oostenrijk en Zwitserland.",
    copy: {
      nameLabel: "Jouw naam",
      studioLabel: "Studio- / salonnaam",
      cityLabel: "Plaats",
      countryLabel: "Land",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon (optioneel)",
      messageLabel: "Hoe kunnen we helpen? (optioneel)",
      submitLabel: "Vraag early access aan",
      successTitle: "Aanvraag ontvangen",
      successText: "Bedankt! We bekijken je aanvraag en nemen zo snel mogelijk contact met je op.",
      errorText: "Er ging iets mis. Probeer het opnieuw of mail naar hello@treatflow.io.",
      requiredHint: "Velden met * zijn verplicht",
    },
  },
  fi: {
    metaTitle: "Pyydä early access",
    title: "Pyydä early access Treatflowiin",
    note: "Suora rekisteröityminen on tällä hetkellä avoinna vain Saksalle, Itävallalle ja Sveitsille.",
    copy: {
      nameLabel: "Nimesi",
      studioLabel: "Studion / hoitolan nimi",
      cityLabel: "Kaupunki",
      countryLabel: "Maa",
      emailLabel: "Sähköposti",
      phoneLabel: "Puhelin (valinnainen)",
      messageLabel: "Miten voimme auttaa? (valinnainen)",
      submitLabel: "Pyydä early access",
      successTitle: "Pyyntö vastaanotettu",
      successText: "Kiitos! Käymme pyyntösi läpi ja palaamme asiaan pian.",
      errorText: "Jokin meni pieleen. Yritä uudelleen tai lähetä sähköpostia osoitteeseen hello@treatflow.io.",
      requiredHint: "Tähdellä (*) merkityt kentät ovat pakollisia",
    },
  },
};

const about: Record<StaticPageLang, AboutCopy> = {
  nl: {
    metaTitle: "Over Treatflow",
    metaDescription:
      "Treatflow is de alles-in-één software voor beauty-studio's. Made in Austria, GDPR-conform en gehost in de EU.",
    eyebrow: "Over ons",
    title: "Software die studio's hun tijd teruggeeft",
    subtitle:
      "Treatflow begon met een eenvoudige observatie: beautyprofessionals besteden veel te veel tijd aan administratie in plaats van aan hun klanten. Daar wilden we verandering in brengen – met één overzichtelijke app die afspraken, klanten, formulieren, documentatie en betalingen samenbrengt.",
    valuesTitle: "Waar we voor staan",
    values: [
      {
        title: "Gemaakt voor studio's",
        desc: "We bouwen hand in hand met beautyprofessionals – elke functie lost een echt, dagelijks probleem op.",
      },
      {
        title: "Privacy voorop",
        desc: "GDPR-conform en gehost op EU-servers. Jouw data én die van je klanten blijven beschermd.",
      },
      {
        title: "Persoonlijke support",
        desc: "Echte mensen die de beautybranche kennen – en je helpen met opstarten en het meeste uit Treatflow te halen.",
      },
      {
        title: "Made in Austria",
        desc: "Ontwikkeld en ondersteund in Europa, voor studio's in heel Europa en daarbuiten.",
      },
    ],
    ctaLabel: "Vraag early access aan",
  },
  fi: {
    metaTitle: "Tietoa Treatflowista",
    metaDescription:
      "Treatflow on all-in-one-ohjelmisto kauneushoitoloille. Made in Austria, GDPR-mukainen ja isännöity EU:ssa.",
    eyebrow: "Meistä",
    title: "Ohjelmisto, joka antaa studioille ajan takaisin",
    subtitle:
      "Treatflow sai alkunsa yksinkertaisesta havainnosta: kauneusalan ammattilaiset käyttävät aivan liikaa aikaa hallintoon asiakkaiden sijaan. Halusimme muuttaa sen – yhdellä selkeällä sovelluksella, joka yhdistää ajanvaraukset, asiakkaat, lomakkeet, dokumentoinnin ja maksut.",
    valuesTitle: "Mitä edustamme",
    values: [
      {
        title: "Rakennettu studioille",
        desc: "Rakennamme käsi kädessä kauneusalan ammattilaisten kanssa – jokainen ominaisuus ratkaisee oikean, arjen ongelman.",
      },
      {
        title: "Yksityisyys ensin",
        desc: "GDPR-mukainen ja isännöity EU-palvelimilla. Sinun ja asiakkaidesi tiedot pysyvät suojattuina.",
      },
      {
        title: "Henkilökohtainen tuki",
        desc: "Oikeat ihmiset, jotka tuntevat kauneusalan – ja auttavat sinut alkuun sekä saamaan kaiken irti Treatflowista.",
      },
      {
        title: "Made in Austria",
        desc: "Kehitetty ja tuettu Euroopassa, studioille ympäri Euroopan ja sen ulkopuolella.",
      },
    ],
    ctaLabel: "Pyydä early access",
  },
};

const contact: Record<StaticPageLang, ContactCopy> = {
  nl: {
    metaTitle: "Contact Treatflow",
    metaDescription:
      "Neem contact op met het Treatflow-team. Wij helpen schoonheidssalons en esthetische klinieken met het digitaliseren van afspraken, formulieren en behandeldocumentatie.",
    title: "Contact",
    body: "Mail ons op hello@treatflow.io of vraag early access aan voor jouw markt.",
    cta: "Vraag early access aan",
  },
  fi: {
    metaTitle: "Ota yhteyttä Treatflowiin",
    metaDescription:
      "Ota yhteyttä Treatflow-tiimiin. Autamme kauneushoitoloita ja estetiikkaklinikoita digitalisoimaan ajanvaraukset, lomakkeet ja hoitodokumentoinnin.",
    title: "Yhteystiedot",
    body: "Lähetä sähköpostia osoitteeseen hello@treatflow.io tai pyydä early access markkinallesi.",
    cta: "Pyydä early access",
  },
};

const privacy: Record<StaticPageLang, LegalPageCopy> = {
  nl: {
    metaTitle: "Privacybeleid",
    metaDescription: "Treatflow-privacybeleid. GDPR-conform, gehost in de EU.",
    title: "Privacybeleid",
    paragraphs: [
      "Treatflow wordt gehost op EU-servers en is ontworpen met GDPR-compliance als uitgangspunt.",
      "Voor het volledige Duitstalige privacybeleid, zie /datenschutz. Contact: hello@treatflow.io.",
    ],
  },
  fi: {
    metaTitle: "Tietosuojakäytäntö",
    metaDescription: "Treatflowin tietosuojakäytäntö. GDPR-mukainen, isännöity EU:ssa.",
    title: "Tietosuojakäytäntö",
    paragraphs: [
      "Treatflow on isännöity EU-palvelimilla ja suunniteltu GDPR-vaatimusten mukaisesti.",
      "Täydellinen saksankielinen tietosuojakäytäntö löytyy osoitteesta /datenschutz. Yhteystiedot: hello@treatflow.io.",
    ],
  },
};

const terms: Record<StaticPageLang, LegalPageCopy> = {
  nl: {
    metaTitle: "Algemene voorwaarden",
    metaDescription: "Algemene voorwaarden van Treatflow.",
    title: "Algemene voorwaarden",
    paragraphs: [
      "Door Treatflow te gebruiken ga je akkoord met onze voorwaarden.",
      "Voor contractuele details tijdens early access verstrekken we marktspecifieke voorwaarden bij de onboarding van jouw studio. Contact: hello@treatflow.io.",
    ],
  },
  fi: {
    metaTitle: "Käyttöehdot",
    metaDescription: "Treatflowin käyttöehdot.",
    title: "Käyttöehdot",
    paragraphs: [
      "Käyttämällä Treatflow’ta hyväksyt ehdot.",
      "Early access -vaiheen sopimusyksityiskohdat toimitamme markkinakohtaisesti studion käyttöönoton yhteydessä. Yhteystiedot: hello@treatflow.io.",
    ],
  },
};

export function getEarlyAccessCopy(lang: StaticPageLang, marketLabel: string): EarlyAccessCopy {
  const base = earlyAccess[lang];
  if (lang === "nl") {
    return {
      ...base,
      metaDescription: `Treatflow early access voor ${marketLabel}. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.`,
      subtitle: `We breiden uit naar ${marketLabel}. Vertel ons over jouw studio – we nemen persoonlijk contact met je op.`,
    };
  }
  return {
    ...base,
    metaDescription: `Treatflow early access ${marketLabel}-markkinalle. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.`,
    subtitle: `Laajennamme ${marketLabel}-markkinalle. Kerro studiostasi – otamme sinuun henkilökohtaisesti yhteyttä.`,
  };
}

export function getAboutCopy(lang: StaticPageLang): AboutCopy {
  return about[lang];
}

export function getContactCopy(lang: StaticPageLang): ContactCopy {
  return contact[lang];
}

export function getPrivacyCopy(lang: StaticPageLang): LegalPageCopy {
  return privacy[lang];
}

export function getTermsCopy(lang: StaticPageLang): LegalPageCopy {
  return terms[lang];
}
