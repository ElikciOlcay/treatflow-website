import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import type { ExtraFeatureKey } from "@/app/i18n/feature-slugs";
import {
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileText,
  Gift,
  Globe,
  LayoutDashboard,
  Link2,
  Mail,
  MessageCircle,
  Package,
  Plug,
  Receipt,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

type NlFiLang = "nl" | "fi";

type PageContent = Omit<
  FeaturePageProps,
  "earlyAccessHref" | "primaryCta" | "bottomTitle" | "bottomText"
>;

const cta: Record<
  NlFiLang,
  {
    earlyAccessHref: string;
    primaryCta: string;
    bottomTitle: string;
    bottomText: string;
  }
> = {
  nl: {
    earlyAccessHref: "/nl/early-access",
    primaryCta: "Vraag early access aan",
    bottomTitle: "Klaar om te starten?",
    bottomText:
      "Vraag early access aan voor jouw land. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
  },
  fi: {
    earlyAccessHref: "/fi/early-access",
    primaryCta: "Pyydä early access",
    bottomTitle: "Valmis aloittamaan?",
    bottomText:
      "Pyydä early access omalle maallesi. Suora rekisteröinti on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
  },
};

const pages: Record<ExtraFeatureKey, Record<NlFiLang, PageContent>> = {
  "point-of-sale": {
    nl: {
      eyebrow: "Kassa",
      title: "Afrekenen vanuit je agenda",
      subtitle:
        "Neem betalingen voor diensten en producten in één flow – direct vanuit de afspraak, met duidelijke bonnen en een dagafsluiting die je team vertrouwt.",
      bullets: [
        "Reken af vanuit de afspraak in seconden",
        "Diensten, producten en fooien in één checkout",
        "Digitale bonnen bij elke verkoop",
        "Dagelijkse sluitingsoverzicht voor de studio",
      ],
      image: {
        src: "/images/lifestyle/reference/studio-empfang-tablet.png",
        alt: "Receptie van een schoonheidssalon met Treatflow-kassa op een tablet",
      },
      features: [
        {
          icon: Receipt,
          title: "Afrekenen vanuit de agenda",
          desc: "Open de afspraak en neem betaling aan zonder van tool te wisselen.",
        },
        {
          icon: ShoppingBag,
          title: "Diensten & retail",
          desc: "Voeg behandelingen, producten en extras toe aan hetzelfde ticket.",
        },
        {
          icon: CreditCard,
          title: "Flexibele betaling",
          desc: "Registreer contant, pin of gemengde betalingen duidelijk.",
        },
        {
          icon: Ticket,
          title: "Cadeaubonnen bij de kassa",
          desc: "Verkoop en verzilver cadeaubonnen zonder de kassa te verlaten.",
        },
        {
          icon: BarChart3,
          title: "Duidelijke dagafsluiting",
          desc: "Zie wat er is verkocht, door wie en hoe er is betaald.",
        },
        {
          icon: Users,
          title: "Gekoppeld aan de klant",
          desc: "Elke verkoop blijft in de klantgeschiedenis voor follow-up.",
        },
      ],
      closingTitle: "Eén kassa voor een soepelere balie",
      closingText:
        "Treatflow verbindt afspraken, klanten en afrekenen zodat je team minder tijd kwijt is aan switchen tussen tools – en meer tijd heeft voor klanten.",
    },
    fi: {
      eyebrow: "Kassa",
      title: "Kassa, joka elää kalenterissasi",
      subtitle:
        "Ota maksut palveluista ja tuotteista yhdessä virrassa – suoraan ajanvarauksesta, selkeillä kuiteilla ja päivän päätösyhteenvedolla, johon tiimisi voi luottaa.",
      bullets: [
        "Laskuta ajanvarauksesta sekunneissa",
        "Palvelut, tuotteet ja tipit yhdessä kassassa",
        "Digitaaliset kuitit jokaisesta myynnistä",
        "Päivittäinen päätösyhteenveto studiolla",
      ],
      image: {
        src: "/images/lifestyle/reference/studio-empfang-tablet.png",
        alt: "Kauneushoitolan vastaanotto käyttää Treatflow-kassaa tabletilla",
      },
      features: [
        {
          icon: Receipt,
          title: "Kassa kalenterista",
          desc: "Avaa ajanvaraus ja ota maksu ilman työkalun vaihtoa.",
        },
        {
          icon: ShoppingBag,
          title: "Palvelut & retail",
          desc: "Lisää hoidot, tuotteet ja lisät samaan lippuun.",
        },
        {
          icon: CreditCard,
          title: "Joustava maksu",
          desc: "Kirjaa käteinen, kortti tai yhdistelmämaksut selkeästi.",
        },
        {
          icon: Ticket,
          title: "Lahjakortit kassalla",
          desc: "Myy ja lunasta lahjakortteja poistumatta kassasta.",
        },
        {
          icon: BarChart3,
          title: "Selkeä päivän päätös",
          desc: "Näe mitä myytiin, kuka myi ja miten maksettiin.",
        },
        {
          icon: Users,
          title: "Linkitetty asiakkaaseen",
          desc: "Jokainen myynti jää asiakashistoriaan seurantaa varten.",
        },
      ],
      closingTitle: "Yksi kassa sujuvampaan vastaanottoon",
      closingText:
        "Treatflow yhdistää ajanvaraukset, asiakkaat ja kassan, jotta tiimisi käyttää vähemmän aikaa työkalujen välillä – ja enemmän aikaa asiakkaiden kanssa.",
    },
  },

  vouchers: {
    nl: {
      eyebrow: "Cadeaubonnen",
      title: "Verkoop en verzilver cadeaubonnen zonder chaos",
      subtitle:
        "Maak cadeaubonnen, verkoop ze bij de kassa en verzilver restsaldi automatisch – een eenvoudige omzetbooster voor je salon.",
      bullets: [
        "Verkoop cadeaubonnen aan de kassa of online",
        "Verzilver volledige of gedeeltelijke bedragen",
        "Automatische tracking van restsaldo",
        "Duidelijke geldigheid en klantgeschiedenis",
      ],
      image: {
        src: "/images/product-updates/rabattcodes-kalender.png",
        alt: "Treatflow-cadeaubonnen en kortingscodes in de agenda",
      },
      features: [
        {
          icon: Gift,
          title: "Cadeaubonnen",
          desc: "Bied vaste waarde of behandelingsspecifieke bonnen die klanten graag geven.",
        },
        {
          icon: Receipt,
          title: "Verkoop bij de kassa",
          desc: "Voeg in seconden een cadeaubon toe aan het ticket tijdens het afrekenen.",
        },
        {
          icon: Ticket,
          title: "Eenvoudig verzilveren",
          desc: "Pas de code toe of selecteer de bon wanneer de klant terugkomt.",
        },
        {
          icon: RefreshCw,
          title: "Restsaldo",
          desc: "Gedeeltelijke verzilveringen werken het saldo automatisch bij.",
        },
        {
          icon: Calendar,
          title: "Geldigheidscontrole",
          desc: "Stel vervaldatums in zodat aanbiedingen duidelijk en beheersbaar blijven.",
        },
        {
          icon: BarChart3,
          title: "Verkoopoverzicht",
          desc: "Zie hoeveel bonnen zijn verkocht, verzilverd of nog openstaan.",
        },
      ],
      closingTitle: "Cadeaubonnen die klanten echt laten terugkomen",
      closingText:
        "Cadeaubonnen vullen rustige dagen en brengen nieuwe klanten. Treatflow maakt verkopen en verzilveren eenvoudig zodat niets verdwaalt in spreadsheets.",
    },
    fi: {
      eyebrow: "Lahjakortit",
      title: "Myy ja lunasta lahjakortteja ilman kaaosta",
      subtitle:
        "Luo lahjakortteja, myy niitä kassalla ja lunasta jäljellä oleva saldo automaattisesti – yksinkertainen liikevaihdon kasvattaja salonkiisi.",
      bullets: [
        "Myy lahjakortteja kassalla tai verkossa",
        "Lunasta koko summa tai osittain",
        "Automaattinen saldon seuranta",
        "Selkeä voimassaolo ja asiakashistoria",
      ],
      image: {
        src: "/images/product-updates/rabattcodes-kalender.png",
        alt: "Treatflow-lahjakortit ja alennuskoodit kalenterissa",
      },
      features: [
        {
          icon: Gift,
          title: "Lahjakortit",
          desc: "Tarjoa kiinteän arvon tai hoitoon sidottuja lahjakortteja, joista asiakkaat pitävät.",
        },
        {
          icon: Receipt,
          title: "Myynti kassalla",
          desc: "Lisää lahjakortti lippuun sekunneissa maksun yhteydessä.",
        },
        {
          icon: Ticket,
          title: "Helppo lunastus",
          desc: "Käytä koodia tai valitse lahjakortti, kun asiakas palaa.",
        },
        {
          icon: RefreshCw,
          title: "Jäljellä oleva saldo",
          desc: "Osittaiset lunastukset päivittävät saldon automaattisesti.",
        },
        {
          icon: Calendar,
          title: "Voimassaolon hallinta",
          desc: "Aseta viimeiset voimassaolopäivät, jotta tarjoukset pysyvät selkeinä.",
        },
        {
          icon: BarChart3,
          title: "Myyntiyhteenveto",
          desc: "Näe kuinka monta lahjakorttia myytiin, lunastettiin tai on vielä auki.",
        },
      ],
      closingTitle: "Lahjakortit, jotka todella tuovat asiakkaat takaisin",
      closingText:
        "Lahjakortit täyttävät hiljaiset päivät ja tuovat uusia asiakkaita. Treatflow tekee myynnistä ja lunastuksesta yksinkertaista, jotta mikään ei katoa taulukoihin.",
    },
  },

  messaging: {
    nl: {
      eyebrow: "Berichten & herinneringen",
      title: "Minder no-shows met sms- en e-mailautomatisering",
      subtitle:
        "Stuur boekingsbevestigingen, afspraakherinneringen en follow-ups automatisch – zodat je agenda vol blijft zonder handmatig WhatsApp-gedoe.",
      bullets: [
        "Automatische boekingsbevestigingen",
        "Sms- en e-mailherinneringen vóór afspraken",
        "Follow-ups na behandelingen",
        "Verjaardags- en reactivatieberichten",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Klant ontvangt een sms-afspraakherinnering van een schoonheidssalon",
      },
      features: [
        {
          icon: Bell,
          title: "Afspraakherinneringen",
          desc: "Verminder no-shows met timed sms- en e-mailherinneringen.",
        },
        {
          icon: Mail,
          title: "Bevestigingen",
          desc: "Klanten krijgen duidelijke boekingsdetails zodra ze boeken.",
        },
        {
          icon: MessageCircle,
          title: "Follow-ups",
          desc: "Stuur nazorgtips of herboekingsprompts automatisch.",
        },
        {
          icon: Sparkles,
          title: "Verjaardagsberichten",
          desc: "Blijf top of mind met persoonlijke, geautomatiseerde groeten.",
        },
        {
          icon: Clock,
          title: "Configureerbare timing",
          desc: "Kies wanneer herinneringen en follow-ups uitgaan.",
        },
        {
          icon: Smartphone,
          title: "Sms & e-mail",
          desc: "Gebruik het juiste kanaal voor urgentie en detail.",
        },
      ],
      closingTitle: "Blijf in contact zonder extra werk",
      closingText:
        "Berichtautomatisering houdt klanten geïnformeerd en loyaal terwijl je team focust op behandelingen – niet op het opnieuw typen van dezelfde berichten.",
    },
    fi: {
      eyebrow: "Viestintä & muistutukset",
      title: "Vähemmän no-show’ta SMS- ja sähköpostiautomaatiolla",
      subtitle:
        "Lähetä varausvahvistukset, ajanmuistutukset ja seurannat automaattisesti – jotta kalenterisi pysyy täynnä ilman manuaalista WhatsApp-jahtia.",
      bullets: [
        "Automaattiset varausvahvistukset",
        "SMS- ja sähköpostimuistutukset ennen aikoja",
        "Seurannat hoitojen jälkeen",
        "Syntymäpäivä- ja uudelleenaktivointiviestit",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Asiakas vastaanottaa ajanmuistutus-SMS:n kauneushoitolasta",
      },
      features: [
        {
          icon: Bell,
          title: "Ajanmuistutukset",
          desc: "Vähennä no-show’ta ajoitetuilla SMS- ja sähköpostimuistutuksilla.",
        },
        {
          icon: Mail,
          title: "Vahvistukset",
          desc: "Asiakkaat saavat selkeät varaustiedot heti varauksen jälkeen.",
        },
        {
          icon: MessageCircle,
          title: "Seurannat",
          desc: "Lähetä jälkihoitovinkkejä tai uudelleenvarausehdotuksia automaattisesti.",
        },
        {
          icon: Sparkles,
          title: "Syntymäpäiväviestit",
          desc: "Pysy mielessä henkilökohtaisilla, automaattisilla tervehdyksillä.",
        },
        {
          icon: Clock,
          title: "Määritettävä ajoitus",
          desc: "Valitse milloin muistutukset ja seurannat lähtevät.",
        },
        {
          icon: Smartphone,
          title: "SMS & sähköposti",
          desc: "Käytä oikeaa kanavaa kiireellisyyden ja yksityiskohtien mukaan.",
        },
      ],
      closingTitle: "Pysy yhteydessä ilman ylimääräistä työtä",
      closingText:
        "Viestiautomaatio pitää asiakkaat ajan tasalla ja uskollisina, kun tiimisi keskittyy hoitoihin – ei samojen viestien uudelleenkirjoittamiseen.",
    },
  },

  integrations: {
    nl: {
      eyebrow: "Integraties",
      title: "Koppel Treatflow aan de tools die je al gebruikt",
      subtitle:
        "Synchroniseer agenda’s, boekhouding en automatiseringen zodat data één keer stroomt – in plaats van drie systemen in te typen.",
      bullets: [
        "Tweeweg Google Calendar-sync",
        "Boekhoud- en factuurkoppelingen",
        "Zapier voor 7.000+ apps",
        "Minder dubbele invoer, minder fouten",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Treatflow-integraties die salonsoftware koppelen aan externe tools",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Google Calendar",
          desc: "Houd persoonlijke en studio-agenda’s realtime synchroon.",
        },
        {
          icon: Receipt,
          title: "Boekhouding",
          desc: "Maak facturen en sync klanten zonder data opnieuw in te typen.",
        },
        {
          icon: Zap,
          title: "Zapier",
          desc: "Trigger workflows in Sheets, CRM, e-mail en meer.",
        },
        {
          icon: RefreshCw,
          title: "Minder dubbel werk",
          desc: "Voer data één keer in Treatflow in – het stroomt naar de rest.",
        },
        {
          icon: Workflow,
          title: "Eigen automatiseringen",
          desc: "Reageer op nieuwe boekingen of formulieren zonder code te schrijven.",
        },
        {
          icon: Plug,
          title: "Groeiend ecosysteem",
          desc: "Koppel de stack waar je salon al op vertrouwt.",
        },
      ],
      closingTitle: "Eén bron van waarheid voor je studio",
      closingText:
        "Integraties houden Treatflow in het centrum van je operatie terwijl je favoriete tools automatisch meedraaien.",
    },
    fi: {
      eyebrow: "Integraatiot",
      title: "Yhdistä Treatflow työkaluihin, joita jo käytät",
      subtitle:
        "Synkronoi kalenterit, kirjanpito ja automaatiot, jotta data kulkee kerran – sen sijaan että sitä kirjoitettaisiin kolmeen järjestelmään.",
      bullets: [
        "Kaksisuuntainen Google Calendar -synkronointi",
        "Kirjanpito- ja laskutusyhteydet",
        "Zapier yli 7 000 sovellukselle",
        "Vähemmän kaksoissyöttöä, vähemmän virheitä",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Treatflow-integraatiot yhdistävät salonkisovelluksen ulkoisiin työkaluihin",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Google Calendar",
          desc: "Pidä henkilökohtaiset ja studion kalenterit synkassa reaaliajassa.",
        },
        {
          icon: Receipt,
          title: "Kirjanpito",
          desc: "Luo laskuja ja synkronoi asiakkaat ilman uudelleenkirjoitusta.",
        },
        {
          icon: Zap,
          title: "Zapier",
          desc: "Käynnistä työnkulkuja Sheetsissä, CRM:ssä, sähköpostissa ja muualla.",
        },
        {
          icon: RefreshCw,
          title: "Vähemmän tuplatyötä",
          desc: "Syötä data kerran Treatflow’hun – se virtaa muualle.",
        },
        {
          icon: Workflow,
          title: "Omat automaatiot",
          desc: "Reagoi uusiin varauksiin tai lomakkeisiin ilman koodia.",
        },
        {
          icon: Plug,
          title: "Kasvava ekosysteemi",
          desc: "Yhdistä stack, johon salonkisi jo nojaa.",
        },
      ],
      closingTitle: "Yksi totuuden lähde studiollesi",
      closingText:
        "Integraatiot pitävät Treatflow’n toimintasi keskipisteessä, kun suosikkityökalusi pysyvät ajan tasalla – automaattisesti.",
    },
  },

  features: {
    nl: {
      eyebrow: "Alle functies",
      title: "Alles wat je beautystudio nodig heeft, op één plek",
      subtitle:
        "Van agenda en online boeken tot klantendossiers, formulieren, kassa en herinneringen – Treatflow dekt het dagelijkse werk van een moderne salon.",
      bullets: [
        "Agenda, boeken en klantendossiers",
        "Digitale formulieren en behandelnotities",
        "Kassa, cadeaubonnen en productverkoop",
        "Berichten, integraties en meer",
      ],
      image: {
        src: "/images/mockups/dashboard-main.png",
        alt: "Treatflow-dashboard met salonsoftwarefuncties in één oogopslag",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Afspraakagenda",
          desc: "Plan team, ruimtes en behandelingen in duidelijke dag- en weekweergaven.",
        },
        {
          icon: Link2,
          title: "Online boeken",
          desc: "Laat klanten 24/7 boeken met jouw persoonlijke boekingslink.",
        },
        {
          icon: Users,
          title: "Klantendossiers",
          desc: "Historie, notities, foto’s en allergieën in één digitaal bestand.",
        },
        {
          icon: ClipboardCheck,
          title: "Formulieren & toestemming",
          desc: "Digitale anamnese en handtekeningen vóór de afspraak.",
        },
        {
          icon: FileText,
          title: "Documentatie",
          desc: "Registreer behandelingen, producten en voor/na-foto’s.",
        },
        {
          icon: LayoutDashboard,
          title: "Eén werkruimte",
          desc: "Run de studio vanaf één samenhangend platform.",
        },
      ],
      closingTitle: "Gemaakt voor beautystudio’s – geen generieke boekingstools",
      closingText:
        "Treatflow combineert de functies die salons écht elke dag gebruiken, zodat je minder tijd kwijt bent aan switchen tussen apps en meer tijd hebt om te groeien.",
    },
    fi: {
      eyebrow: "Kaikki ominaisuudet",
      title: "Kaikki mitä kauneusliiketoimintasi tarvitsee, yhdessä paikassa",
      subtitle:
        "Kalenterista ja verkkoajanvarauksesta asiakaskortistoihin, lomakkeisiin, kassaan ja muistutuksiin – Treatflow kattaa modernin salongin arjen.",
      bullets: [
        "Kalenteri, ajanvaraus ja asiakaskortistot",
        "Digitaaliset lomakkeet ja hoitomerkinnät",
        "Kassa, lahjakortit ja tuotemyynti",
        "Viestintä, integraatiot ja enemmän",
      ],
      image: {
        src: "/images/mockups/dashboard-main.png",
        alt: "Treatflow-hallintapaneeli salonkisovelluksen ominaisuuksineen",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Ajanvarauskalenteri",
          desc: "Suunnittele henkilökunta, huoneet ja hoidot selkeissä päivä- ja viikkonäkymissä.",
        },
        {
          icon: Link2,
          title: "Verkkoajanvaraus",
          desc: "Anna asiakkaiden varata 24/7 henkilökohtaisella varauslinkilläsi.",
        },
        {
          icon: Users,
          title: "Asiakaskortistot",
          desc: "Historia, merkinnät, valokuvat ja allergiat yhdessä digitaalisessa kortissa.",
        },
        {
          icon: ClipboardCheck,
          title: "Lomakkeet & suostumus",
          desc: "Digitaalinen anamneesi ja allekirjoitukset ennen aikaa.",
        },
        {
          icon: FileText,
          title: "Dokumentointi",
          desc: "Kirjaa hoidot, tuotteet ja ennen/jälkeen-kuvat.",
        },
        {
          icon: LayoutDashboard,
          title: "Yksi työtila",
          desc: "Pyöritä studiota yhdestä johdonmukaisesta alustasta.",
        },
      ],
      closingTitle: "Rakennettu kauneusstudioille – ei geneerisille ajanvarauksille",
      closingText:
        "Treatflow yhdistää ominaisuudet, joita salongit todella käyttävät joka päivä, jotta vaihdat vähemmän sovelluksia ja kasvatat liiketoimintaa enemmän.",
    },
  },

  shop: {
    nl: {
      eyebrow: "Productverkoop & voorraad",
      title: "Verkoop retailproducten en houd voorraad onder controle",
      subtitle:
        "Voeg onbeperkt producten toe, verkoop ze in de studio en volg wie wat kocht – met eenvoudige voorraad zodat bestsellers niet ongemerkt opraken.",
      bullets: [
        "Onbeperkt producten en categorieën",
        "Direct verkopen in de studio",
        "Eenvoudige voorraadniveaus en meldingen",
        "Verkoopgeschiedenis per klant",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Treatflow productverkoop- en voorraadoverzicht voor schoonheidssalons",
      },
      features: [
        {
          icon: Package,
          title: "Productcatalogus",
          desc: "Voeg zoveel SKU’s toe als je nodig hebt, met prijzen en categorieën.",
        },
        {
          icon: ShoppingBag,
          title: "Verkoop in de studio",
          desc: "Verkoop na een behandeling zonder apart shopsysteem.",
        },
        {
          icon: BarChart3,
          title: "Voorraadoverzicht",
          desc: "Zie voorraadniveaus en bestel bij vóórdat je tekort komt.",
        },
        {
          icon: Camera,
          title: "Productfoto’s",
          desc: "Toon duidelijke productafbeeldingen voor je team aan de balie.",
        },
        {
          icon: TrendingUp,
          title: "Extra omzet",
          desc: "Maak van elk bezoek een kans op retailverkoop.",
        },
        {
          icon: Users,
          title: "Aankoopgeschiedenis",
          desc: "Weet welke klant welk product kocht en wanneer.",
        },
      ],
      closingTitle: "Retail die past in de afspraakflow",
      closingText:
        "Treatflow houdt productverkoop naast afspraken en klantendossiers – zodat retail een natuurlijk onderdeel van het bezoek wordt, geen extra admin-klus.",
    },
    fi: {
      eyebrow: "Tuotemyynti & varasto",
      title: "Myy vähittäistuotteita ja pidä varasto hallinnassa",
      subtitle:
        "Lisää rajattomasti tuotteita, myy niitä studiolla ja seuraa kuka osti mitä – yksinkertaisella varastolla, jotta bestsellerit eivät lopu huomaamatta.",
      bullets: [
        "Rajattomasti tuotteita ja kategorioita",
        "Myy suoraan studiolla",
        "Yksinkertaiset varastotasot ja hälytykset",
        "Myyntihistoria asiakaskohtaisesti",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Treatflow-tuotemyynti ja varastonäkymä kauneushoitoloille",
      },
      features: [
        {
          icon: Package,
          title: "Tuotekatalogi",
          desc: "Lisää niin monta SKU:ta kuin tarvitset hinnoilla ja kategorioilla.",
        },
        {
          icon: ShoppingBag,
          title: "Myynti studiolla",
          desc: "Myy hoidon jälkeen ilman erillistä kauppasysteemiä.",
        },
        {
          icon: BarChart3,
          title: "Varastonäkymä",
          desc: "Näe varastotasot ja täydennä ennen kuin loppuu.",
        },
        {
          icon: Camera,
          title: "Tuotekuvat",
          desc: "Näytä selkeät tuotekuvat tiimille vastaanotossa.",
        },
        {
          icon: TrendingUp,
          title: "Lisäliikevaihto",
          desc: "Muuta jokainen käynti vähittäismyynnin mahdollisuudeksi.",
        },
        {
          icon: Users,
          title: "Ostohistoria",
          desc: "Tiedä mikä asiakas osti minkä tuotteen ja milloin.",
        },
      ],
      closingTitle: "Retail, joka sopii ajanvarauksen virtaukseen",
      closingText:
        "Treatflow pitää tuotemyynnin ajanvarausten ja asiakaskortistojen vieressä – jotta retail on luonnollinen osa käyntiä, ei erillinen hallintotehtävä.",
    },
  },

  "studio-website": {
    nl: {
      eyebrow: "Studio-website",
      title: "Een website op maat die bezoekers in boekingen verandert",
      subtitle:
        "Krijg een professionele site voor je salon – mobile-first, SEO-klaar en gekoppeld aan Treatflow online boeken zodat nieuwe klanten in een paar taps boeken.",
      bullets: [
        "Maatwerkdesign voor jouw merk",
        "Mobiel geoptimaliseerd voor moderne klanten",
        "Online boeken geïntegreerd",
        "Gemaakt voor beauty- en esthetische bedrijven",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Op maat gemaakte Treatflow studio-website voor een schoonheidssalon",
      },
      features: [
        {
          icon: Sparkles,
          title: "Maatwerkdesign",
          desc: "Een look die bij je studio past – geen generieke templatefarm.",
        },
        {
          icon: Smartphone,
          title: "Mobile-first",
          desc: "De meeste bezoekers komen via hun telefoon. Jouw site ziet er daar top uit.",
        },
        {
          icon: Globe,
          title: "SEO-fundament",
          desc: "Duidelijke structuur en content zodat klanten je online vinden.",
        },
        {
          icon: Link2,
          title: "Boekingsintegratie",
          desc: "Koppel je Treatflow-boekingslink en openingstijden.",
        },
        {
          icon: Camera,
          title: "Toon je werk",
          desc: "Presenteer behandelingen, team en sfeer overtuigend.",
        },
        {
          icon: LayoutDashboard,
          title: "Gemaakt voor salons",
          desc: "Gebouwd rond beauty, laser, nagels, wimpers en esthetiek.",
        },
      ],
      closingTitle: "Je website als boekingskanaal – geen brochure",
      closingText:
        "Wij ontwerpen sites die premium ogen én converteren. Gecombineerd met Treatflow-boekingen kan elk bezoek een afspraak worden.",
    },
    fi: {
      eyebrow: "Studioverkkosivusto",
      title: "Räätälöity sivusto, joka muuttaa kävijät varauksiksi",
      subtitle:
        "Hanki ammattimainen sivusto salonkiisi – mobile-first, SEO-valmis ja yhdistetty Treatflow’n verkkoajanvaraukseen, jotta uudet asiakkaat varaavat muutamalla napautuksella.",
      bullets: [
        "Räätälöity design brändillesi",
        "Mobiilioptimoitu moderneille asiakkaille",
        "Verkkoajanvaraus integroituna",
        "Rakennettu kauneus- ja estetiikkaliiketoiminnalle",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Räätälöity Treatflow-studioverkkosivusto kauneushoitolalle",
      },
      features: [
        {
          icon: Sparkles,
          title: "Räätälöity design",
          desc: "Ilme, joka sopii studioosi – ei geneerinen mallipohjatehdas.",
        },
        {
          icon: Smartphone,
          title: "Mobile-first",
          desc: "Useimmat kävijät tulevat puhelimella. Sivustosi näyttää siellä hyvältä.",
        },
        {
          icon: Globe,
          title: "SEO-perusta",
          desc: "Selkeä rakenne ja sisältö, jotta asiakkaat löytävät sinut verkosta.",
        },
        {
          icon: Link2,
          title: "Varausintegraatio",
          desc: "Yhdistä Treatflow-varauslinkkisi ja aukioloajat.",
        },
        {
          icon: Camera,
          title: "Esittele työsi",
          desc: "Esitä hoidot, tiimi ja tunnelma vakuuttavasti.",
        },
        {
          icon: LayoutDashboard,
          title: "Tehty salonkeille",
          desc: "Rakennettu kauneuden, laserin, kynsien, ripsiä ja estetiikan ympärille.",
        },
      ],
      closingTitle: "Sivustosi varauskanavana – ei esitteeksi",
      closingText:
        "Suunnittelemme sivustoja, jotka näyttävät premiumilta ja konvertoivat. Yhdessä Treatflow-ajanvarauksen kanssa jokainen käynti voi muuttua ajanvaraukseksi.",
    },
  },
};

export function getExtraFeaturePageNlFi(
  lang: NlFiLang,
  key: ExtraFeatureKey
): FeaturePageProps {
  return {
    ...pages[key][lang],
    ...cta[lang],
  };
}

export type { NlFiLang };
