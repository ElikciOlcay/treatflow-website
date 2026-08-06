import {
  CalendarDays,
  Clock,
  Users,
  RefreshCw,
  Smartphone,
  Bell,
  ClipboardCheck,
  PenLine,
  Send,
  ShieldCheck,
  FileSignature,
  FileText,
  Camera,
  FolderOpen,
  Search,
  Link2,
  Globe,
  CreditCard,
  type LucideIcon,
} from "lucide-react";
import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import { marketLanguage, type PrefixedMarket } from "@/app/i18n/config";

type CoreKey =
  | "appointment-calendar"
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation";

type CoreLang = "en" | "nl" | "fi";

type PageContent = Omit<FeaturePageProps, "earlyAccessHref">;

const pages: Record<CoreKey, Record<CoreLang, PageContent>> = {
  "appointment-calendar": {
    en: {
      eyebrow: "Appointment calendar",
      title: "All your appointments, clearly organised",
      subtitle:
        "Manage your whole studio schedule in one place - with daily, weekly and monthly views your team understands at a glance.",
      bullets: [
        "Daily, weekly and monthly views",
        "Schedule multiple team members and rooms",
        "Drag & drop to reschedule in seconds",
        "Syncs automatically with online bookings",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow appointment calendar with weekly planning view",
      },
      features: [
        { icon: CalendarDays, title: "Clear views", desc: "Switch between day, week and month - always the right overview for the moment." },
        { icon: Users, title: "Team scheduling", desc: "Manage appointments for several team members, rooms and resources at once." },
        { icon: RefreshCw, title: "Always in sync", desc: "Online bookings drop straight into the calendar - no double bookings." },
        { icon: Clock, title: "Fast rescheduling", desc: "Move or extend appointments with simple drag & drop." },
        { icon: Smartphone, title: "Works on any device", desc: "Manage your calendar from desktop, tablet or phone." },
        { icon: Bell, title: "Automatic reminders", desc: "Reduce no-shows with automatic SMS and email reminders." },
      ],
      closingTitle: "Less admin, more time for your clients",
      closingText:
        "A well-organised calendar is the heart of every studio. Treatflow keeps your schedule tidy so you and your team can focus on what matters - great treatments and happy clients.",
    },
    nl: {
      eyebrow: "Afspraakagenda",
      title: "Al je afspraken, overzichtelijk georganiseerd",
      subtitle:
        "Beheer het hele studioschema op één plek – met dag-, week- en maandweergaven die je team in één oogopslag begrijpt.",
      bullets: [
        "Dag-, week- en maandweergaven",
        "Plan meerdere teamleden en ruimtes",
        "Sleep & drop om in seconden te verzetten",
        "Synchroniseert automatisch met online boekingen",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow-afspraakagenda met weekplanning",
      },
      features: [
        { icon: CalendarDays, title: "Duidelijke weergaven", desc: "Schakel tussen dag, week en maand – altijd het juiste overzicht voor het moment." },
        { icon: Users, title: "Teamplanning", desc: "Beheer afspraken voor meerdere teamleden, ruimtes en middelen tegelijk." },
        { icon: RefreshCw, title: "Altijd synchroon", desc: "Online boekingen komen direct in de agenda – geen dubbele boekingen." },
        { icon: Clock, title: "Snel verzetten", desc: "Verplaats of verleng afspraken met eenvoudig slepen & droppen." },
        { icon: Smartphone, title: "Op elk apparaat", desc: "Beheer je agenda vanaf desktop, tablet of telefoon." },
        { icon: Bell, title: "Automatische herinneringen", desc: "Verminder no-shows met automatische sms- en e-mailherinneringen." },
      ],
      closingTitle: "Minder administratie, meer tijd voor je klanten",
      closingText:
        "Een goed georganiseerde agenda is het hart van elk studio. Treatflow houdt je planning overzichtelijk zodat jij en je team kunnen focussen op wat telt – topbehandelingen en tevreden klanten.",
    },
    fi: {
      eyebrow: "Ajanvarauskalenteri",
      title: "Kaikki aikasi selkeästi järjestyksessä",
      subtitle:
        "Hallitse koko studion aikataulua yhdessä paikassa – päivä-, viikko- ja kuukausinäkymillä, jotka tiimisi ymmärtää yhdellä silmäyksellä.",
      bullets: [
        "Päivä-, viikko- ja kuukausinäkymät",
        "Aikatauluta useita tiimin jäseniä ja huoneita",
        "Vedä ja pudota – siirrä aikoja sekunneissa",
        "Synkronoituu automaattisesti verkkoajanvarausten kanssa",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow-ajanvarauskalenteri viikkosuunnittelunäkymällä",
      },
      features: [
        { icon: CalendarDays, title: "Selkeät näkymät", desc: "Vaihda päivän, viikon ja kuukauden välillä – aina oikea yleiskuva tilanteeseen." },
        { icon: Users, title: "Tiimin aikataulutus", desc: "Hallitse aikoja useille tiimin jäsenille, huoneille ja resursseille kerralla." },
        { icon: RefreshCw, title: "Aina synkassa", desc: "Verkkoajanvaraukset tulevat suoraan kalenteriin – ei päällekkäisiä varauksia." },
        { icon: Clock, title: "Nopea siirto", desc: "Siirrä tai pidennä aikoja yksinkertaisella vedä ja pudota -toiminnolla." },
        { icon: Smartphone, title: "Toimii kaikilla laitteilla", desc: "Hallitse kalenteria tietokoneella, tabletilla tai puhelimella." },
        { icon: Bell, title: "Automaattiset muistutukset", desc: "Vähennä no-show’ta automaattisilla SMS- ja sähköpostimuistutuksilla." },
      ],
      closingTitle: "Vähemmän hallintoa, enemmän aikaa asiakkaille",
      closingText:
        "Hyvin järjestetty kalenteri on jokaisen studion sydän. Treatflow pitää aikataulusi siistinä, jotta sinä ja tiimisi voitte keskittyä olennaiseen – laadukkaisiin hoitoihin ja tyytyväisiin asiakkaisiin.",
    },
  },

  "online-booking": {
    en: {
      eyebrow: "Online booking",
      title: "Clients book themselves - 24/7",
      subtitle:
        "A branded booking page that fills your calendar even outside opening hours - without phone tag or double bookings.",
      bullets: [
        "Bookable around the clock",
        "Only shows real availability",
        "Optional deposits to reduce no-shows",
        "Confirmations and reminders included",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Client booking a beauty appointment on a smartphone",
      },
      features: [
        { icon: Globe, title: "Your booking page", desc: "Share a clean booking link on your website, Instagram and Google profile." },
        { icon: Clock, title: "Real-time availability", desc: "Clients only see slots that are actually free - no double bookings." },
        { icon: CreditCard, title: "Deposit options", desc: "Ask for deposits on high-demand services to protect your chair time." },
        { icon: Bell, title: "Auto confirmations", desc: "Instant confirmation plus reminders that cut no-shows." },
        { icon: Smartphone, title: "Mobile-first", desc: "Designed for phones - where most beauty clients book." },
        { icon: Link2, title: "Synced calendar", desc: "Every booking lands straight in your studio calendar." },
      ],
      closingTitle: "Fill more chairs with less phone time",
      closingText:
        "Online booking turns idle hours into revenue. Treatflow keeps bookings, reminders and your calendar in one flow.",
    },
    nl: {
      eyebrow: "Online boeken",
      title: "Klanten boeken zelf – 24/7",
      subtitle:
        "Een boekingspagina in jouw huisstijl die je agenda vult, ook buiten openingstijden – zonder telefoongedoe of dubbele boekingen.",
      bullets: [
        "Rond de klok te boeken",
        "Toont alleen echte beschikbaarheid",
        "Optionele aanbetalingen tegen no-shows",
        "Bevestigingen en herinneringen inbegrepen",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Klant boekt een beauty-afspraak op een smartphone",
      },
      features: [
        { icon: Globe, title: "Jouw boekingspagina", desc: "Deel een nette boekingslink op je website, Instagram en Google-profiel." },
        { icon: Clock, title: "Realtime beschikbaarheid", desc: "Klanten zien alleen echt vrije slots – geen dubbele boekingen." },
        { icon: CreditCard, title: "Aanbetalingsopties", desc: "Vraag aanbetalingen bij populaire behandelingen om je stoeltijd te beschermen." },
        { icon: Bell, title: "Automatische bevestigingen", desc: "Directe bevestiging plus herinneringen die no-shows verminderen." },
        { icon: Smartphone, title: "Mobile-first", desc: "Ontworpen voor telefoons – waar de meeste beautyklanten boeken." },
        { icon: Link2, title: "Gesynchroniseerde agenda", desc: "Elke boeking landt direct in je studio-agenda." },
      ],
      closingTitle: "Vul meer stoelen met minder telefoontijd",
      closingText:
        "Online boeken maakt van stille uren omzet. Treatflow houdt boekingen, herinneringen en je agenda in één flow.",
    },
    fi: {
      eyebrow: "Verkkoajanvaraus",
      title: "Asiakkaat varaavat itse – 24/7",
      subtitle:
        "Brändätty varaussivu täyttää kalenterisi myös aukioloaikojen ulkopuolella – ilman puhelinrumbaa tai päällekkäisiä varauksia.",
      bullets: [
        "Varattavissa ympäri vuorokauden",
        "Näyttää vain todellisen saatavuuden",
        "Valinnaiset ennakkomaksut vähentävät no-show’ta",
        "Vahvistukset ja muistutukset mukana",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Asiakas varaa kauneushoidon älypuhelimella",
      },
      features: [
        { icon: Globe, title: "Oma varaussivu", desc: "Jaa selkeä varauslinkki verkkosivulla, Instagramissa ja Google-profiilissa." },
        { icon: Clock, title: "Reaaliaikainen saatavuus", desc: "Asiakkaat näkevät vain vapaat ajat – ei päällekkäisiä varauksia." },
        { icon: CreditCard, title: "Ennakkomaksut", desc: "Pyydä ennakkomaksua kysytyistä palveluista ja suojaa tuolisi aika." },
        { icon: Bell, title: "Automaattiset vahvistukset", desc: "Heti vahvistus sekä muistutukset, jotka vähentävät no-show’ta." },
        { icon: Smartphone, title: "Mobile-first", desc: "Suunniteltu puhelimelle – missä useimmat kauneusasiakkaat varaavat." },
        { icon: Link2, title: "Synkronoitu kalenteri", desc: "Jokainen varaus tulee suoraan studion kalenteriin." },
      ],
      closingTitle: "Täytä enemmän tuoleja vähemmällä puhelinajalla",
      closingText:
        "Verkkoajanvaraus muuttaa hiljaiset tunnit liikevaihdoksi. Treatflow pitää varaukset, muistutukset ja kalenterin yhdessä virrassa.",
    },
  },

  "client-records": {
    en: {
      eyebrow: "Client records",
      title: "Every client history in one place",
      subtitle:
        "Notes, forms, photos and treatment history - ready before each appointment, without paper folders.",
      bullets: [
        "Complete client profiles",
        "Treatment and photo history",
        "Forms linked to the record",
        "Fast search across your studio",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Digital client record overview in Treatflow",
      },
      features: [
        { icon: Users, title: "Client profiles", desc: "Contact details, preferences and notes in one structured record." },
        { icon: FileText, title: "Treatment history", desc: "See what was done, when, and with which products or settings." },
        { icon: Camera, title: "Photo documentation", desc: "Before/after photos attached to the right treatment." },
        { icon: ClipboardCheck, title: "Linked forms", desc: "Intake and consent forms live with the client file." },
        { icon: Search, title: "Quick search", desc: "Find clients and past treatments in seconds." },
        { icon: FolderOpen, title: "Paperless archive", desc: "Replace binders with a searchable digital archive." },
      ],
      closingTitle: "Know your client before they sit down",
      closingText:
        "Better records mean safer treatments and a more personal experience - without digging through paper.",
    },
    nl: {
      eyebrow: "Klantendossiers",
      title: "Elke klantgeschiedenis op één plek",
      subtitle:
        "Notities, formulieren, foto’s en behandelhistorie – klaar vóór elke afspraak, zonder papieren mappen.",
      bullets: [
        "Volledige klantprofielen",
        "Behandel- en fotohistorie",
        "Formulieren gekoppeld aan het dossier",
        "Snel zoeken in je hele studio",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Digitaal klantendossier-overzicht in Treatflow",
      },
      features: [
        { icon: Users, title: "Klantprofielen", desc: "Contactgegevens, voorkeuren en notities in één gestructureerd dossier." },
        { icon: FileText, title: "Behandelhistorie", desc: "Zie wat er is gedaan, wanneer, en met welke producten of instellingen." },
        { icon: Camera, title: "Fotodocumentatie", desc: "Voor/na-foto’s gekoppeld aan de juiste behandeling." },
        { icon: ClipboardCheck, title: "Gekoppelde formulieren", desc: "Anamnese- en toestemmingsformulieren horen bij het klantbestand." },
        { icon: Search, title: "Snel zoeken", desc: "Vind klanten en eerdere behandelingen in seconden." },
        { icon: FolderOpen, title: "Papierloos archief", desc: "Vervang ordners door een doorzoekbaar digitaal archief." },
      ],
      closingTitle: "Ken je klant vóór ze plaatsneemt",
      closingText:
        "Betere dossiers betekenen veiligere behandelingen en een persoonlijkere ervaring – zonder door papier te graven.",
    },
    fi: {
      eyebrow: "Asiakaskortistot",
      title: "Jokainen asiakashistoria yhdessä paikassa",
      subtitle:
        "Merkinnät, lomakkeet, valokuvat ja hoitohistoria – valmiina ennen jokaista aikaa, ilman paperikansioita.",
      bullets: [
        "Täydelliset asiakasprofiilit",
        "Hoito- ja valokuvahistoria",
        "Lomakkeet linkitettynä kortistoon",
        "Nopea haku koko studiossa",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Digitaalinen asiakaskortistonäkymä Treatflow’ssa",
      },
      features: [
        { icon: Users, title: "Asiakasprofiilit", desc: "Yhteystiedot, mieltymykset ja muistiinpanot yhdessä jäsennellyssä kortissa." },
        { icon: FileText, title: "Hoitohistoria", desc: "Näe mitä tehtiin, milloin ja millä tuotteilla tai asetuksilla." },
        { icon: Camera, title: "Valokuvadokumentointi", desc: "Ennen/jälkeen-kuvat liitettynä oikeaan hoitoon." },
        { icon: ClipboardCheck, title: "Linkitetyt lomakkeet", desc: "Anamneesi- ja suostumuslomakkeet elävät asiakaskortin kanssa." },
        { icon: Search, title: "Pikahaku", desc: "Löydä asiakkaat ja aiemmat hoidot sekunneissa." },
        { icon: FolderOpen, title: "Paperiton arkisto", desc: "Korvaa mapit haettavalla digitaalisella arkistolla." },
      ],
      closingTitle: "Tunne asiakkaasi ennen kuin hän istuutuu",
      closingText:
        "Parempi dokumentointi tarkoittaa turvallisempia hoitoja ja henkilökohtaisempaa kokemusta – ilman paperin kaivelua.",
    },
  },

  forms: {
    en: {
      eyebrow: "Forms",
      title: "Intake & consent, fully digital",
      subtitle:
        "Send intake and consent forms ahead of the appointment. Clients fill them in on their phone - you start on time, with everything ready.",
      bullets: [
        "Clients complete forms before they arrive",
        "Digital signatures on any device",
        "Reusable templates for every treatment",
        "Stored securely with the client record",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digital consent form signed on a tablet",
      },
      features: [
        { icon: Send, title: "Send in advance", desc: "Share forms by link before the visit - less waiting at reception." },
        { icon: Smartphone, title: "Mobile friendly", desc: "Clients complete forms on their phone in minutes." },
        { icon: FileSignature, title: "Digital signatures", desc: "Capture consent securely without printing." },
        { icon: PenLine, title: "Templates", desc: "Reuse intake templates for laser, injectables, beauty and more." },
        { icon: ShieldCheck, title: "Secure storage", desc: "Forms stay with the client record on EU-hosted infrastructure." },
        { icon: ClipboardCheck, title: "Ready to treat", desc: "Your team sees completed forms before the appointment starts." },
      ],
      closingTitle: "Start treatments with paperwork already done",
      closingText:
        "Digital intake protects your studio and saves time at the front desk - every single day.",
    },
    nl: {
      eyebrow: "Formulieren",
      title: "Anamnese & toestemming, volledig digitaal",
      subtitle:
        "Stuur anamnese- en toestemmingsformulieren vóór de afspraak. Klanten vullen ze in op hun telefoon – jij start op tijd, met alles klaar.",
      bullets: [
        "Klanten vullen formulieren in vóór aankomst",
        "Digitale handtekeningen op elk apparaat",
        "Herbruikbare sjablonen voor elke behandeling",
        "Veilig opgeslagen bij het klantendossier",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digitaal toestemmingsformulier ondertekend op een tablet",
      },
      features: [
        { icon: Send, title: "Vooraf versturen", desc: "Deel formulieren via link vóór het bezoek – minder wachten bij de balie." },
        { icon: Smartphone, title: "Mobielvriendelijk", desc: "Klanten vullen formulieren in minuten in op hun telefoon." },
        { icon: FileSignature, title: "Digitale handtekeningen", desc: "Leg toestemming veilig vast zonder te printen." },
        { icon: PenLine, title: "Sjablonen", desc: "Hergebruik anamnese-sjablonen voor laser, injectables, beauty en meer." },
        { icon: ShieldCheck, title: "Veilige opslag", desc: "Formulieren blijven bij het dossier op EU-gehoste infrastructuur." },
        { icon: ClipboardCheck, title: "Klaar om te behandelen", desc: "Je team ziet ingevulde formulieren vóór de afspraak begint." },
      ],
      closingTitle: "Start behandelingen met papierenwerk al klaar",
      closingText:
        "Digitale intake beschermt je studio en bespaart tijd aan de balie – elke dag opnieuw.",
    },
    fi: {
      eyebrow: "Lomakkeet",
      title: "Anamneesi & suostumus, täysin digitaalisesti",
      subtitle:
        "Lähetä anamneesi- ja suostumuslomakkeet ennen aikaa. Asiakkaat täyttävät ne puhelimellaan – aloitat ajoissa, kaikki valmiina.",
      bullets: [
        "Asiakkaat täyttävät lomakkeet ennen saapumista",
        "Digitaaliset allekirjoitukset millä tahansa laitteella",
        "Uudelleenkäytettävät mallipohjat jokaiseen hoitoon",
        "Tallennettu turvallisesti asiakaskorttiin",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digitaalinen suostumuslomake allekirjoitettuna tabletilla",
      },
      features: [
        { icon: Send, title: "Lähetä etukäteen", desc: "Jaa lomakkeet linkillä ennen käyntiä – vähemmän odottelua vastaanotossa." },
        { icon: Smartphone, title: "Mobiiliystävällinen", desc: "Asiakkaat täyttävät lomakkeet puhelimellaan minuuteissa." },
        { icon: FileSignature, title: "Digitaaliset allekirjoitukset", desc: "Kerää suostumus turvallisesti ilman tulostusta." },
        { icon: PenLine, title: "Mallipohjat", desc: "Käytä anamneesipohjia uudelleen laserille, injektioille, kauneudelle ja muulle." },
        { icon: ShieldCheck, title: "Turvallinen tallennus", desc: "Lomakkeet pysyvät asiakaskortin kanssa EU-palvelimilla." },
        { icon: ClipboardCheck, title: "Valmis hoitoon", desc: "Tiimisi näkee täytetyt lomakkeet ennen ajan alkua." },
      ],
      closingTitle: "Aloita hoidot paperityöt jo tehtyinä",
      closingText:
        "Digitaalinen intake suojaa studiota ja säästää aikaa vastaanotossa – joka ikinen päivä.",
    },
  },

  "treatment-documentation": {
    en: {
      eyebrow: "Treatment documentation",
      title: "Document every treatment clearly",
      subtitle:
        "Notes, parameters and photos in a structured treatment record - built for beauty and aesthetic studios.",
      bullets: [
        "Structured treatment notes",
        "Before/after photo sets",
        "Linked to the client history",
        "Useful for follow-ups and compliance",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Treatment documentation with photo comparison",
      },
      features: [
        { icon: FileText, title: "Treatment notes", desc: "Capture what you did, products used and client reaction." },
        { icon: Camera, title: "Photo proof", desc: "Attach before/after images to the exact treatment." },
        { icon: ClipboardCheck, title: "Follow-up ready", desc: "See the last treatment instantly at the next visit." },
        { icon: ShieldCheck, title: "Compliance support", desc: "Keep a clear trail for consent-linked treatments." },
        { icon: FolderOpen, title: "Organised history", desc: "No more scattered notes across apps and paper." },
        { icon: Users, title: "Team visibility", desc: "Colleagues see the same documentation when they take over a client." },
      ],
      closingTitle: "Documentation that protects and impresses",
      closingText:
        "Clear treatment records improve safety, continuity and client trust - without slowing your day down.",
    },
    nl: {
      eyebrow: "Behandeldocumentatie",
      title: "Documenteer elke behandeling duidelijk",
      subtitle:
        "Notities, parameters en foto’s in een gestructureerd behandeldossier – gemaakt voor beauty- en esthetische studio’s.",
      bullets: [
        "Gestructureerde behandelnotities",
        "Voor/na-fotosets",
        "Gekoppeld aan de klantgeschiedenis",
        "Handig voor follow-ups en compliance",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Behandeldocumentatie met fotovergelijking",
      },
      features: [
        { icon: FileText, title: "Behandelnotities", desc: "Leg vast wat je deed, gebruikte producten en de reactie van de klant." },
        { icon: Camera, title: "Fotobewijs", desc: "Koppel voor/na-beelden aan exact die behandeling." },
        { icon: ClipboardCheck, title: "Klaar voor follow-up", desc: "Zie de vorige behandeling direct bij het volgende bezoek." },
        { icon: ShieldCheck, title: "Compliance-ondersteuning", desc: "Houd een duidelijk spoor bij toestemmingsgekoppelde behandelingen." },
        { icon: FolderOpen, title: "Georganiseerde historie", desc: "Geen verspreide notities meer over apps en papier." },
        { icon: Users, title: "Teamzichtbaarheid", desc: "Collega’s zien dezelfde documentatie wanneer ze een klant overnemen." },
      ],
      closingTitle: "Documentatie die beschermt en indruk maakt",
      closingText:
        "Duidelijke behandeldossiers verbeteren veiligheid, continuïteit en klantvertrouwen – zonder je dag te vertragen.",
    },
    fi: {
      eyebrow: "Hoitodokumentointi",
      title: "Dokumentoi jokainen hoito selkeästi",
      subtitle:
        "Merkinnät, parametrit ja valokuvat jäsennellyssä hoitokortissa – suunniteltu kauneus- ja estetiikkastudioille.",
      bullets: [
        "Jäsennellyt hoitomerkinnät",
        "Ennen/jälkeen-kuvasetit",
        "Linkitetty asiakashistoriaan",
        "Hyödyllinen seurannassa ja vaatimustenmukaisuudessa",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Hoitodokumentointi valokuvavertailulla",
      },
      features: [
        { icon: FileText, title: "Hoitomerkinnät", desc: "Kirjaa mitä teit, käytetyt tuotteet ja asiakkaan reaktio." },
        { icon: Camera, title: "Valokuvatodiste", desc: "Liitä ennen/jälkeen-kuvat juuri kyseiseen hoitoon." },
        { icon: ClipboardCheck, title: "Seuranta valmiina", desc: "Näe edellinen hoito heti seuraavalla käynnillä." },
        { icon: ShieldCheck, title: "Vaatimustenmukaisuus", desc: "Pidä selkeä jälki suostumukseen sidotuista hoidoista." },
        { icon: FolderOpen, title: "Järjestetty historia", desc: "Ei enää hajallaan olevia muistiinpanoja sovelluksissa ja paperilla." },
        { icon: Users, title: "Tiimin näkyvyys", desc: "Kollegat näkevät saman dokumentoinnin, kun he ottavat asiakkaan vastaan." },
      ],
      closingTitle: "Dokumentointi, joka suojaa ja vakuuttaa",
      closingText:
        "Selkeät hoitokortit parantavat turvallisuutta, jatkuvuutta ja asiakkaan luottamusta – hidastamatta päivääsi.",
    },
  },
};

function resolveCoreLang(market: PrefixedMarket): CoreLang {
  const lang = marketLanguage[market];
  if (lang === "nl" || lang === "fi") return lang;
  return "en";
}

export function getCoreFeaturePage(
  market: PrefixedMarket,
  key: CoreKey
): FeaturePageProps {
  return {
    ...pages[key][resolveCoreLang(market)],
    earlyAccessHref: `/${market}/early-access`,
  };
}

export type { CoreKey, LucideIcon };
