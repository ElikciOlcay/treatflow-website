import {
  Palette,
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileSignature,
  FileText,
  FolderOpen,
  Gift,
  Globe,
  LayoutDashboard,
  Link2,
  Mail,
  MessageCircle,
  Mic,
  Package,
  PenLine,
  Plug,
  Receipt,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { SeoPageKey } from "@/app/i18n/seo";
import type { IndustryPageKey } from "@/app/i18n/industry-slugs";
import type { FeatureContent, LocaleSiteContent } from "../types";

/* -------------------------------------------------------------------------- */
/* Gedeelde teksten                                                           */
/* -------------------------------------------------------------------------- */

const featureShell: Pick<
  FeatureContent,
  | "primaryCta"
  | "bottomTitle"
  | "bottomText"
  | "relatedTitle"
  | "trustItems"
  | "faqTitle"
  | "faqBadge"
  | "breadcrumbHomeHref"
> = {
  primaryCta: "14 dagen gratis proberen",
  bottomTitle: "Klaar om te starten?",
  bottomText: "Start je gratis proefperiode – geen creditcard nodig, altijd opzegbaar.",
  relatedTitle: "Gerelateerde pagina's",
  trustItems: ["Hosting in de EU", "14 dagen gratis proberen", "Geen commissie op boekingen"],
  faqTitle: "Veelgestelde vragen",
  faqBadge: "FAQ",
  breadcrumbHomeHref: "/en",
};

/* -------------------------------------------------------------------------- */
/* Kernfuncties                                                               */
/* -------------------------------------------------------------------------- */

const coreFeatures: LocaleSiteContent["coreFeatures"] = {
  "appointment-calendar": {
    ...featureShell,
    eyebrow: "Afsprakenkalender",
    title: "Al je afspraken overzichtelijk op één plek",
    subtitle:
      "Beheer de volledige planning van je studio op één plek – met dag-, week- en maandweergaven die je team in één oogopslag begrijpt.",
    bullets: [
      "Dag-, week- en maandweergave",
      "Plan meerdere medewerkers en ruimtes",
      "Afspraken verzetten met slepen en neerzetten",
      "Automatisch synchroon met online boekingen",
    ],
    image: {
      src: "/images/lifestyle/terminkalender-wochenplanung.png",
      alt: "Treatflow-afsprakenkalender met weekplanning",
    },
    features: [
      { icon: CalendarDays, title: "Duidelijke weergaven", desc: "Wissel tussen dag, week en maand – altijd het overzicht dat je op dat moment nodig hebt." },
      { icon: Users, title: "Teamplanning", desc: "Beheer afspraken voor meerdere medewerkers, ruimtes en middelen tegelijk." },
      { icon: RefreshCw, title: "Altijd synchroon", desc: "Online boekingen komen direct in de agenda – geen dubbele boekingen." },
      { icon: Clock, title: "Snel verzetten", desc: "Verplaats of verleng afspraken met eenvoudig slepen en neerzetten." },
      { icon: Smartphone, title: "Op elk apparaat", desc: "Beheer je agenda op desktop, tablet of telefoon." },
      { icon: Bell, title: "Automatische herinneringen", desc: "Minder no-shows dankzij automatische herinneringen via WhatsApp en e-mail." },
    ],
    closingTitle: "Minder administratie, meer tijd voor je klanten",
    closingText:
      "Een goed georganiseerde agenda is het hart van elke studio. Treatflow houdt je planning overzichtelijk, zodat jij en je team je kunnen richten op wat telt: mooie behandelingen en tevreden klanten.",
    faqs: [
      {
        question: "Hoe werkt de afsprakenkalender van Treatflow?",
        answer:
          "Je ziet een dag-, week- en maandweergave met kolommen per medewerker of ruimte. Online boekingen komen in dezelfde agenda, zodat je dubbele boekingen voorkomt. Afspraken verzet je met slepen en neerzetten.",
      },
      {
        question: "Is de agenda gekoppeld aan online boeken?",
        answer:
          "Ja. Boekt een klant via je Treatflow-boekingspagina, dan staat de afspraak direct in de studio-agenda. Herinneringen kunnen via WhatsApp en e-mail worden verstuurd.",
      },
    ],
    relatedLinks: [
      { href: "/en/online-booking", label: "Online boeken" },
      { href: "/en/messaging", label: "Herinneringen" },
      { href: "/en/client-records", label: "Klantdossiers" },
      { href: "/en/beauty-salon-software", label: "Software voor schoonheidssalons" },
    ],
  },
  "online-booking": {
    ...featureShell,
    eyebrow: "Online boeken",
    title: "Klanten boeken zelf – 24/7",
    subtitle:
      "Een boekingspagina in je eigen stijl die je agenda vult, ook buiten openingstijden – zonder heen-en-weer bellen of dubbele boekingen.",
    bullets: [
      "Dag en nacht te boeken",
      "Toont alleen echte beschikbaarheid",
      "Optionele aanbetaling tegen no-shows",
      "Bevestigingen en herinneringen inbegrepen",
    ],
    image: {
      src: "/images/lifestyle/online-buchung-smartphone.png",
      alt: "Klant boekt een beauty-afspraak op een smartphone",
    },
    features: [
      { icon: Globe, title: "Je eigen boekingspagina", desc: "Deel een nette boekingslink op je website, Instagram en Google-bedrijfsprofiel." },
      { icon: Clock, title: "Live beschikbaarheid", desc: "Klanten zien alleen tijdsloten die echt vrij zijn – geen dubbele boekingen." },
      { icon: CreditCard, title: "Aanbetaling mogelijk", desc: "Vraag een aanbetaling bij populaire behandelingen en bescherm je behandeltijd." },
      { icon: Bell, title: "Automatische bevestigingen", desc: "Direct een bevestiging, plus herinneringen die no-shows verminderen." },
      { icon: Smartphone, title: "Mobile-first", desc: "Gemaakt voor de telefoon – daar boeken de meeste beautyklanten." },
      { icon: Link2, title: "Gekoppelde agenda", desc: "Elke boeking komt direct in je studio-agenda terecht." },
    ],
    closingTitle: "Meer afspraken, minder tijd aan de telefoon",
    closingText:
      "Online boeken maakt van lege uren omzet. Treatflow houdt boekingen, herinneringen en je agenda in één vloeiende flow.",
    faqs: [
      {
        question: "Rekent Treatflow commissie op online boekingen?",
        answer:
          "Nee. Treatflow is studiosoftware, geen boekingsplatform. Je deelt je eigen boekingslink en betaalt een vast maandabonnement. Er gaat geen commissie per boeking af.",
      },
      {
        question: "Kunnen klanten 24/7 boeken zonder platform?",
        answer:
          "Ja. Je krijgt een boekingspagina in je eigen stijl die alleen echte beschikbaarheid toont. Bevestigingen en herinneringen zijn inbegrepen. Een optionele aanbetaling helpt no-shows te verminderen.",
      },
    ],
    aiCapsules: [
      {
        question: "Kun je met Treatflow online laten boeken?",
        answer:
          "Ja. Treatflow geeft schoonheidssalons en esthetische klinieken een eigen boekingspagina. Klanten boeken op basis van live beschikbaarheid. Er is geen platformcommissie.",
      },
    ],
    problem: {
      problem: "Je dag gaat op aan heen-en-weer bellen en platformcommissies, terwijl er nog steeds gaten in de agenda zitten.",
      solution:
        "Treatflow geeft je een eigen boekingslink die alleen echte beschikbaarheid toont. Boekingen komen in de studio-agenda en herinneringen gaan automatisch de deur uit.",
    },
    relatedLinks: [
      { href: "/en/appointment-calendar", label: "Afsprakenkalender" },
      { href: "/en/messaging", label: "Herinneringen" },
      { href: "/en/client-records", label: "Klantdossiers" },
      { href: "/en/beauty-salon-software", label: "Software voor schoonheidssalons" },
    ],
  },
  "client-records": {
    ...featureShell,
    eyebrow: "Klantdossiers",
    title: "De hele klanthistorie op één plek",
    subtitle:
      "Notities, formulieren, foto's en behandelhistorie – klaar vóór elke afspraak, zonder papieren mappen.",
    bullets: [
      "Volledige klantprofielen",
      "Behandel- en fotohistorie",
      "Formulieren gekoppeld aan het dossier",
      "Snel zoeken in je hele studio",
    ],
    image: {
      src: "/images/lifestyle/kundenverwaltung-kartei.png",
      alt: "Overzicht van een digitaal klantdossier in Treatflow",
    },
    features: [
      { icon: Users, title: "Klantprofielen", desc: "Contactgegevens, voorkeuren en notities in één overzichtelijk dossier." },
      { icon: FileText, title: "Behandelhistorie", desc: "Zie wat er is gedaan, wanneer en met welke producten of instellingen." },
      { icon: Camera, title: "Fotodocumentatie", desc: "Voor- en nafoto's gekoppeld aan de juiste behandeling." },
      { icon: ClipboardCheck, title: "Gekoppelde formulieren", desc: "Intake- en toestemmingsformulieren staan bij het klantdossier." },
      { icon: Search, title: "Snel zoeken", desc: "Vind klanten en eerdere behandelingen in enkele seconden." },
      { icon: FolderOpen, title: "Papierloos archief", desc: "Vervang ordners door een doorzoekbaar digitaal archief." },
    ],
    closingTitle: "Ken je klant voordat ze in de stoel zit",
    closingText:
      "Betere dossiers betekenen veiligere behandelingen en een persoonlijkere ervaring – zonder te zoeken in papier.",
    faqs: [
      {
        question: "Zijn digitale klantdossiers in Treatflow AVG-proof?",
        answer:
          "Ja. De dossiers staan op EU-servers in Frankfurt, met SSL-versleuteling en dagelijkse back-ups. Formulieren, foto's en behandelhistorie zitten in hetzelfde klantdossier. De studio blijft eigenaar van de eigen klantgegevens.",
      },
      {
        question: "Wat staat er in een klantdossier in Treatflow?",
        answer:
          "Contactgegevens, notities, intake- en toestemmingsformulieren, behandelhistorie en voor- en nafoto's – doorzoekbaar voor de hele studio, zodat het team vóór elk bezoek voorbereid is.",
      },
    ],
    aiCapsules: [
      {
        question: "Kan ik de klanthistorie bijhouden in Treatflow?",
        answer:
          "Ja. Treatflow slaat contactgegevens, notities, formulieren, behandelhistorie en foto's op in één klantdossier, zodat het team vóór elk bezoek hetzelfde dossier kan openen.",
      },
    ],
    problem: {
      problem: "Klantnotities, foto's en formulieren staan verspreid over mappen, chats en apparaten.",
      solution:
        "Treatflow houdt de historie in één dossier bij elkaar: formulieren, notities, foto's en eerdere behandelingen.",
    },
    relatedLinks: [
      { href: "/en/forms", label: "Intake- en toestemmingsformulieren" },
      { href: "/en/treatment-documentation", label: "Behandeldocumentatie" },
      { href: "/en/online-booking", label: "Online boeken" },
      { href: "/en/aesthetic-clinic-software", label: "Software voor esthetische klinieken" },
    ],
  },
  forms: {
    ...featureShell,
    eyebrow: "Intake- en toestemmingsformulieren",
    title: "Digitale intake- en toestemmingsformulieren",
    subtitle:
      "Verstuur intake- en toestemmingsformulieren vóór de afspraak. Begin met kant-en-klare sjablonen, maak je eigen formulieren in de formuliereditor – of laat ons ze samen met je inrichten.",
    bullets: [
      "Klanten vullen formulieren in vóór ze binnenkomen",
      "Digitale handtekening op elk apparaat",
      "Sjablonen, formuliereditor of samen met ons ingericht",
      "Veilig opgeslagen bij het klantdossier",
    ],
    image: {
      src: "/images/lifestyle/formulare-digital-ausfuellen.png",
      alt: "Digitaal toestemmingsformulier ondertekend op een tablet",
    },
    features: [
      { icon: Send, title: "Vooraf versturen", desc: "Deel formulieren via een link vóór het bezoek – minder wachten bij de balie." },
      { icon: Smartphone, title: "Mobielvriendelijk", desc: "Klanten vullen formulieren in een paar minuten in op hun telefoon." },
      { icon: FileSignature, title: "Digitale handtekening", desc: "Leg toestemming veilig vast zonder te printen." },
      { icon: PenLine, title: "Sjablonen & editor", desc: "Start met sjablonen, bouw je eigen formulieren in de drag-and-drop-editor, of richt ze samen met ons in." },
      { icon: ShieldCheck, title: "Veilige opslag", desc: "Formulieren blijven bij het klantdossier, gehost in de EU." },
      { icon: ClipboardCheck, title: "Klaar om te behandelen", desc: "Je team ziet ingevulde formulieren al vóór de afspraak begint." },
    ],
    closingTitle: "Begin behandelingen met het papierwerk al gedaan",
    closingText:
      "Digitale intake beschermt je studio en scheelt elke dag tijd aan de balie.",
    faqs: [
      {
        question: "Heeft Treatflow digitale toestemmingsformulieren voor esthetische klinieken?",
        answer:
          "Ja. Je verstuurt intake- en toestemmingssjablonen vóór het bezoek. Klanten vullen ze in op hun telefoon, inclusief digitale handtekening. Ingevulde formulieren worden opgeslagen in het klantdossier.",
      },
      {
        question: "Kunnen klanten formulieren invullen voordat ze komen?",
        answer:
          "Ja. Deel een link via WhatsApp of e-mail. Het team ziet de ingevulde formulieren al vóór de afspraak, zodat behandelingen op tijd kunnen beginnen.",
      },
    ],
    aiCapsules: [
      {
        question: "Ondersteunt Treatflow digitale toestemmingsformulieren?",
        answer:
          "Ja. Treatflow verstuurt intake- en toestemmingssjablonen vóór het bezoek. Klanten vullen ze in op hun telefoon, inclusief digitale handtekening. Ingevulde formulieren worden opgeslagen in het klantdossier.",
      },
    ],
    problem: {
      problem: "Papieren intakeformulieren vertragen de balie en zijn later moeilijk terug te vinden.",
      solution:
        "Treatflow verstuurt digitale intake- en toestemmingsformulieren vóór de afspraak. Antwoorden en handtekeningen staan in het klantdossier.",
    },
    relatedLinks: [
      { href: "/en/client-records", label: "Klantdossiers" },
      { href: "/en/treatment-documentation", label: "Behandeldocumentatie" },
      { href: "/en/aesthetic-clinic-software", label: "Software voor esthetische klinieken" },
      { href: "/en/laser-hair-removal-software", label: "Software voor laserontharing" },
    ],
  },
  "treatment-documentation": {
    ...featureShell,
    eyebrow: "Behandeldocumentatie",
    title: "Documenteer elke behandeling overzichtelijk",
    subtitle:
      "Notities, parameters en foto's in een gestructureerd behandelverslag – inclusief spraakinvoer, gemaakt voor beauty- en esthetische studio's.",
    bullets: [
      "Gestructureerde behandelnotities",
      "Inspreken, desgewenst verfijnd met AI",
      "Voor- en nafotosets",
      "Gekoppeld aan de klanthistorie",
    ],
    image: {
      src: "/images/lifestyle/dokumentation-vorher-nachher.png",
      alt: "Behandeldocumentatie met fotovergelijking",
    },
    features: [
      { icon: FileText, title: "Behandelnotities", desc: "Leg vast wat je hebt gedaan, welke producten je gebruikte en hoe de klant reageerde." },
      { icon: Mic, title: "Spraakinvoer", desc: "Spreek je notities in in plaats van te typen. Treatflow zet spraak om in tekst en kan die met AI verfijnen." },
      { icon: Camera, title: "Fotobewijs", desc: "Koppel voor- en nafoto's aan precies de juiste behandeling." },
      { icon: ClipboardCheck, title: "Klaar voor de volgende keer", desc: "Zie bij het volgende bezoek meteen de laatste behandeling." },
      { icon: ShieldCheck, title: "Ondersteuning bij compliance", desc: "Houd een duidelijk spoor bij voor behandelingen waarvoor toestemming nodig is." },
      { icon: Users, title: "Zichtbaar voor het team", desc: "Collega's zien dezelfde documentatie als ze een klant overnemen." },
    ],
    closingTitle: "Documentatie die beschermt en indruk maakt",
    closingText:
      "Duidelijke behandelverslagen verbeteren veiligheid, continuïteit en het vertrouwen van je klanten – zonder je dag te vertragen.",
    faqs: [
      {
        question: "Kunnen laserstudio's behandelingen documenteren in Treatflow?",
        answer:
          "Ja. Je legt per sessie parameters, notities en voor- en nafoto's vast. De historie is gekoppeld aan de klant, wat helpt bij vervolgafspraken en overdrachten binnen het team.",
      },
      {
        question: "Worden voor- en nafoto's in het klantdossier opgeslagen?",
        answer:
          "Ja. Fotosets worden gekoppeld aan precies die behandeling, niet aan een losse camerarol, zodat je de voortgang bij het volgende bezoek kunt vergelijken.",
      },
      {
        question: "Kan ik behandelnotities inspreken in Treatflow?",
        answer:
          "Ja. In de behandeldocumentatie kun je notities inspreken in plaats van typen. Treatflow zet spraak om in tekst en kan die met AI verfijnen. De notitie wordt bij dat bezoek opgeslagen.",
      },
    ],
    aiCapsules: [
      {
        question: "Kan ik behandelingen documenteren in Treatflow?",
        answer:
          "Ja. Treatflow slaat behandelnotities, parameters en voor- en nafoto's op bij het bezoek van de klant. Je typt notities of spreekt ze in en laat de tekst desgewenst met AI verfijnen.",
      },
    ],
    problem: {
      problem: "Notities en foto's belanden op telefoons, papier en in chats, los van de behandeling.",
      solution:
        "Treatflow koppelt notities en fotosets aan de behandeling. Je kunt notities inspreken, zodat de documentatie bij het bezoek blijft zonder de sessie te vertragen.",
    },
    relatedLinks: [
      { href: "/en/client-records", label: "Klantdossiers" },
      { href: "/en/forms", label: "Intake- en toestemmingsformulieren" },
      { href: "/en/laser-hair-removal-software", label: "Software voor laserontharing" },
      { href: "/en/aesthetic-clinic-software", label: "Software voor esthetische klinieken" },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* Extra functies                                                             */
/* -------------------------------------------------------------------------- */

const extraFeatures: LocaleSiteContent["extraFeatures"] = {
  vouchers: {
    ...featureShell,
    eyebrow: "Cadeaubonnen",
    title: "Cadeaubonnen verkopen en verzilveren zonder gedoe",
    subtitle:
      "Verkoop cadeaubonnen aan de kassa of online via je boekingspagina, ontwerp ze zelf en laat restsaldi automatisch bijwerken – een eenvoudige extra inkomstenbron voor je salon.",
    bullets: [
      "Cadeaubonnen verkopen in de studio of online via je boekingspagina",
      "Online betalen met Treatflow Pay of overboeking",
      "Volledig of gedeeltelijk verzilveren",
      "Restsaldo automatisch bijgehouden",
      "Duidelijke geldigheid en klanthistorie",
    ],
    image: {
      src: "/images/product-updates/gutscheine-online-verkaufen.png",
      alt: "Treatflow-cadeaubonontwerper met sjablonen en live PDF-voorbeeld",
    },
    features: [
      { icon: Gift, title: "Cadeaubonnen", desc: "Bied bonnen aan met een vast bedrag of voor een specifieke behandeling." },
      { icon: Receipt, title: "Snel verkocht", desc: "Voeg in een paar seconden een cadeaubon toe bij de afrekening van een bezoek." },
      { icon: Ticket, title: "Makkelijk verzilveren", desc: "Voer de code in of kies de bon als de klant terugkomt." },
      { icon: RefreshCw, title: "Restsaldo", desc: "Bij gedeeltelijk verzilveren wordt het saldo automatisch bijgewerkt." },
      { icon: Calendar, title: "Geldigheid instellen", desc: "Stel een vervaldatum in, zodat acties overzichtelijk blijven." },
      { icon: BarChart3, title: "Verkoopoverzicht", desc: "Zie hoeveel bonnen er zijn verkocht, verzilverd of nog openstaan." },
      { icon: Globe, title: "Online verkopen", desc: "Een link “Cadeaubon kopen” op je boekingspagina: vaste of vrije bedragen, PDF per e-mail, per post of ophalen in de studio, met persoonlijk bericht." },
      { icon: CreditCard, title: "Online betalen", desc: "Met Treatflow Pay (kaart, Apple Pay, Google Pay) wordt de bon direct uitgegeven. Bij overboeking stuurt de kassa een factuur en volgt de bon zodra jij de betaling bevestigt." },
      { icon: Palette, title: "Bonontwerper", desc: "10 sjablonen met je eigen kleuren, logo, afbeelding en teksten – het voorbeeld is gelijk aan de PDF (A5 liggend)." },
    ],
    closingTitle: "Cadeaubonnen die klanten echt terugbrengen",
    closingText:
      "Cadeaubonnen vullen rustige dagen en brengen nieuwe klanten binnen. Treatflow houdt verkopen en verzilveren eenvoudig, zodat er niets verloren gaat in spreadsheets.",
    faqs: [
      {
        question: "Kan ik cadeaubonnen online verkopen?",
        answer:
          "Ja. Met de app Cadeaubonnen (Instellingen → Apps) verschijnt op je openbare boekingspagina de link “Cadeaubon kopen”. Klanten kiezen een vast of vrij bedrag binnen jouw grenzen, een PDF per e-mail, verzending per post (met een door jou ingestelde verzendkost) of ophalen in de studio, en kunnen ontvanger, afzender en een persoonlijk bericht toevoegen. De app is alleen beschikbaar samen met de Treatflow-kassa, omdat de bonnen daar worden verzilverd.",
      },
      {
        question: "Hoe betalen klanten online cadeaubonnen?",
        answer:
          "Jij kiest de betaalmethoden: met Treatflow Pay betalen klanten met kaart, Apple Pay of Google Pay en wordt de bon direct uitgegeven en als PDF gemaild. Bij overboeking maakt de kassa automatisch een factuur aan en mailt die; de bon wordt uitgegeven zodra jij de betaling in de kassa bevestigt.",
      },
      {
        question: "Hoe worden online verkochte cadeaubonnen belast?",
        answer:
          "Online verkochte cadeaubonnen zijn meervoudige vouchers: de btw is pas verschuldigd bij het verzilveren aan de Treatflow-kassa, niet bij de aankoop. In de kassa beheer je online bestellingen en zie je per bon de herkomst (online of kassa), het restsaldo en de verzilveringshistorie.",
      },
    ],
    relatedLinks: [
      { href: "/en/shop", label: "Shop en voorraad" },
      { href: "/en/online-booking", label: "Online boeken" },
      { href: "/en/features", label: "Alle functies" },
    ],
  },
  messaging: {
    ...featureShell,
    eyebrow: "Berichten & herinneringen",
    title: "Minder no-shows met automatische WhatsApp- en e-mailberichten",
    subtitle:
      "Verstuur boekingsbevestigingen, afspraakherinneringen en opvolgberichten automatisch – via WhatsApp en e-mail, zonder klanten zelf na te hoeven bellen.",
    bullets: [
      "Automatische boekingsbevestigingen",
      "Herinneringen via WhatsApp en e-mail vóór de afspraak",
      "Opvolging na behandelingen",
      "Verjaardags- en reactiveringsberichten",
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-studio.png",
      alt: "Klant ontvangt een afspraakherinnering van een schoonheidssalon via WhatsApp",
    },
    features: [
      { icon: Bell, title: "Afspraakherinneringen", desc: "Minder no-shows met herinneringen via WhatsApp en e-mail op het juiste moment." },
      { icon: Mail, title: "Bevestigingen", desc: "Klanten krijgen direct na het boeken alle details van hun afspraak." },
      { icon: MessageCircle, title: "Opvolging", desc: "Verstuur automatisch nazorgtips of een uitnodiging om opnieuw te boeken." },
      { icon: Sparkles, title: "Verjaardagsberichten", desc: "Blijf in beeld met persoonlijke, automatische felicitaties." },
      { icon: Clock, title: "Zelf het tijdstip kiezen", desc: "Bepaal wanneer herinneringen en opvolgberichten worden verstuurd." },
      { icon: Smartphone, title: "WhatsApp & e-mail", desc: "Gebruik het kanaal dat past bij de urgentie en de hoeveelheid informatie." },
    ],
    closingTitle: "Contact houden zonder extra werk",
    closingText:
      "Automatische berichten houden klanten op de hoogte en trouw, terwijl je team zich op behandelingen richt – in plaats van steeds dezelfde berichten te typen.",
    faqs: [
      {
        question: "Kan Treatflow afspraakherinneringen versturen?",
        answer:
          "Ja. Treatflow verstuurt automatische herinneringen via WhatsApp en e-mail vóór een afspraak. Bevestigingen gaan de deur uit zodra de klant boekt.",
      },
      {
        question: "Kan Treatflow klantberichten automatiseren?",
        answer:
          "Ja. Naast herinneringen kun je opvolgberichten na behandelingen en reactiveringsberichten versturen. Het tijdstip stel je zelf in.",
      },
    ],
    aiCapsules: [
      {
        question: "Verstuurt Treatflow afspraakherinneringen?",
        answer:
          "Ja. Treatflow verstuurt boekingsbevestigingen en automatische herinneringen via WhatsApp of e-mail, zodat klanten hun afspraak minder snel vergeten.",
      },
    ],
    problem: {
      problem: "No-shows en vergeten opvolging zorgen voor gaten die het team telefonisch moet opvullen.",
      solution:
        "Treatflow verstuurt bevestigingen, herinneringen en opvolgberichten automatisch, gekoppeld aan de afspraak in de agenda.",
    },
    relatedLinks: [
      { href: "/en/online-booking", label: "Online boeken" },
      { href: "/en/appointment-calendar", label: "Afsprakenkalender" },
      { href: "/en/beauty-salon-software", label: "Software voor schoonheidssalons" },
      { href: "/en/laser-hair-removal-software", label: "Software voor laserontharing" },
    ],
  },
  integrations: {
    ...featureShell,
    eyebrow: "Integraties",
    title: "Koppel Treatflow aan de tools die je al gebruikt",
    subtitle:
      "Synchroniseer agenda's, boekhouding en automatiseringen, zodat gegevens één keer worden ingevoerd – in plaats van in drie verschillende systemen.",
    bullets: [
      "Tweerichtingssynchronisatie met Google Agenda",
      "Koppelingen voor boekhouding en facturen",
      "Zapier voor meer dan 7.000 apps",
      "Minder dubbel invoeren, minder fouten",
    ],
    image: {
      src: "/images/product-updates/swiss21-abaninja-integration.png",
      alt: "Treatflow-integraties die salonsoftware koppelen aan externe tools",
    },
    features: [
      { icon: CalendarDays, title: "Google Agenda", desc: "Houd je privé- en studio-agenda realtime synchroon." },
      { icon: Receipt, title: "Boekhouding", desc: "Maak facturen en synchroniseer klanten zonder gegevens over te typen." },
      { icon: Zap, title: "Zapier", desc: "Start workflows in Sheets, je CRM, e-mail en meer." },
      { icon: Gift, title: "Cadeaubonnen", desc: "Verkoop cadeaubonnen online via je boekingspagina – betaald met Treatflow Pay of overboeking, verzilverd aan de Treatflow-kassa." },
      { icon: RefreshCw, title: "Minder dubbel werk", desc: "Voer gegevens één keer in Treatflow in – de rest volgt vanzelf." },
      { icon: Workflow, title: "Eigen automatiseringen", desc: "Reageer op nieuwe boekingen of formulieren zonder te programmeren." },
      { icon: Plug, title: "Groeiend ecosysteem", desc: "Koppel de tools waar je salon al op draait." },
    ],
    closingTitle: "Eén betrouwbare bron voor je studio",
    closingText:
      "Met integraties staat Treatflow centraal in je bedrijfsvoering, terwijl je favoriete tools automatisch bijblijven.",
    faqs: [
      {
        question: "Kan ik cadeaubonnen online verkopen?",
        answer:
          "Ja. Activeer de app Cadeaubonnen onder Instellingen → Apps en op je boekingspagina verschijnt de link “Cadeaubon kopen”. Klanten betalen met Treatflow Pay of overboeking en ontvangen de bon als PDF per e-mail, per post of om op te halen. De app vereist de Treatflow-kassa, waar de bonnen worden verzilverd.",
      },
      {
        question: "Werkt Treatflow samen met Google Agenda?",
        answer:
          "Ja. Treatflow kan synchroniseren met Google Agenda, zodat privé- en studioafspraken op elkaar aansluiten.",
      },
      {
        question: "Werkt Treatflow met Zapier?",
        answer:
          "Ja. Met het Booking-abonnement koppel je Treatflow via Zapier aan andere tools, bijvoorbeeld spreadsheets of e-mailworkflows.",
      },
    ],
    aiCapsules: [
      {
        question: "Werkt Treatflow samen met Google Agenda?",
        answer:
          "Ja. Treatflow kan synchroniseren met Google Agenda, zodat privé- en studioafspraken op elkaar aansluiten.",
      },
    ],
    relatedLinks: [
      { href: "/en/online-booking", label: "Online boeken" },
      { href: "/en/appointment-calendar", label: "Afsprakenkalender" },
      { href: "/en/features", label: "Alle functies" },
    ],
  },
  shop: {
    ...featureShell,
    eyebrow: "Productverkoop & voorraad",
    title: "Verkoop producten en houd je voorraad onder controle",
    subtitle:
      "Voeg onbeperkt producten toe, verkoop ze in de studio en zie wie wat heeft gekocht – met eenvoudig voorraadbeheer, zodat je bestsellers nooit ongemerkt op raken.",
    bullets: [
      "Onbeperkt producten en categorieën",
      "Direct verkopen in de studio",
      "Eenvoudige voorraadniveaus en meldingen",
      "Aankoophistorie per klant",
    ],
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Overzicht van productverkoop en voorraad in Treatflow voor schoonheidssalons",
    },
    features: [
      { icon: Package, title: "Productcatalogus", desc: "Voeg zoveel artikelen toe als je nodig hebt, met prijzen en categorieën." },
      { icon: ShoppingBag, title: "Verkoop in de studio", desc: "Verkoop na een behandeling zonder apart winkelsysteem." },
      { icon: BarChart3, title: "Voorraadoverzicht", desc: "Zie je voorraad en bestel bij voordat iets op is." },
      { icon: Camera, title: "Productfoto's", desc: "Duidelijke productafbeeldingen voor je team aan de balie." },
      { icon: TrendingUp, title: "Extra omzet", desc: "Maak van elk bezoek een kans op productverkoop." },
      { icon: Users, title: "Aankoophistorie", desc: "Weet welke klant welk product wanneer heeft gekocht." },
    ],
    closingTitle: "Productverkoop die past in je afsprakenflow",
    closingText:
      "Treatflow houdt productverkoop naast afspraken en klantdossiers – zo wordt verkoop een vanzelfsprekend onderdeel van het bezoek, geen extra administratie.",
    relatedLinks: [
      { href: "/en/vouchers", label: "Cadeaubonnen" },
      { href: "/en/client-records", label: "Klantdossiers" },
      { href: "/en/features", label: "Alle functies" },
    ],
  },
  "studio-website": {
    ...featureShell,
    eyebrow: "Salonwebsite",
    title: "Een website op maat die bezoekers omzet in boekingen",
    subtitle:
      "Een professionele website voor je salon – mobile-first, SEO-klaar en gekoppeld aan online boeken in Treatflow, zodat nieuwe klanten in een paar tikken boeken.",
    bullets: [
      "Ontwerp op maat voor jouw merk",
      "Geoptimaliseerd voor mobiel",
      "Online boeken geïntegreerd",
      "Gemaakt voor beauty- en esthetische bedrijven",
    ],
    image: {
      src: "/images/og-website-service.jpg",
      alt: "Treatflow-website op maat voor een schoonheidssalon",
    },
    features: [
      { icon: Sparkles, title: "Ontwerp op maat", desc: "Een uitstraling die bij je studio past – geen standaard sjabloon." },
      { icon: Smartphone, title: "Mobile-first", desc: "De meeste bezoekers komen via hun telefoon. Daar ziet je site er goed uit." },
      { icon: Globe, title: "SEO-basis", desc: "Een duidelijke structuur en inhoud, zodat klanten je online kunnen vinden." },
      { icon: Link2, title: "Boekingskoppeling", desc: "Koppel je Treatflow-boekingslink en openingstijden." },
      { icon: Camera, title: "Laat je werk zien", desc: "Presenteer behandelingen, team en sfeer op een overtuigende manier." },
      { icon: LayoutDashboard, title: "Gemaakt voor salons", desc: "Gebouwd rond beauty, laser, nagels, wimpers en esthetiek." },
    ],
    closingTitle: "Je website als boekingskanaal – niet als folder",
    closingText:
      "We ontwerpen websites die er premium uitzien en converteren. In combinatie met online boeken via Treatflow kan elk bezoek een afspraak worden.",
    relatedLinks: [
      { href: "/en/online-booking", label: "Online boeken" },
      { href: "/en/features", label: "Alle functies" },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* Branchepagina's                                                            */
/* -------------------------------------------------------------------------- */

const industryLabels: Record<IndustryPageKey, string> = {
  "beauty-salon-software": "Software voor schoonheidssalons",
  "aesthetic-clinic-software": "Software voor esthetische klinieken",
  "laser-hair-removal-software": "Software voor laserontharing",
  "permanent-makeup-software": "Software voor permanente make-up",
  "tattoo-studio-software": "Software voor tattoostudio's",
  "nail-salon-software": "Software voor nagelstudio's",
  "lash-studio-software": "Software voor wimperstudio's",
  "spa-wellness-software": "Software voor spa & wellness",
  "massage-software": "Software voor massagepraktijken",
};

type FeatureLinkKey =
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation"
  | "pricing";

const featureLabels: Record<FeatureLinkKey, string> = {
  "online-booking": "Online boeken",
  "client-records": "Klantdossiers",
  forms: "Toestemmingsformulieren",
  "treatment-documentation": "Behandeldocumentatie",
  pricing: "Prijzen",
};

type IndustryBody = {
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
  featureKeys: FeatureLinkKey[];
  workflow?: InternationalPageContent["workflow"];
  images?: InternationalPageContent["images"];
};

const startFaq = {
  question: "Hoe begin ik?",
  answer:
    "Registreer je op app.treatflow.io en start je gratis proefperiode van 14 dagen. Geen creditcard nodig. Ook beschikbaar in Nederland en België.",
};

const hostingFaq = {
  question: "Waar worden de gegevens opgeslagen?",
  answer:
    "Treatflow slaat gegevens op in de EU (Frankfurt) en is ontworpen om aan de AVG te voldoen.",
};

function industry(key: IndustryPageKey, body: IndustryBody): InternationalPageContent {
  return {
    pageKey: key as SeoPageKey,
    locale: "nl",
    canonicalPath: `/en/${key}`,
    serviceName: body.serviceName,
    serviceDescription: body.serviceDescription,
    areaServed: ["NL", "BE"],
    ctaPrimaryLabel: "Gratis proberen",
    ctaBottomTitle: "Klaar om je studio vanuit één plek te runnen?",
    ctaBottomText: "Start je gratis proefperiode van 14 dagen – geen creditcard nodig. Altijd opzegbaar.",
    trustTrialLabel: "14 dagen gratis proberen",
    trustBadges: ["Ontworpen voor de AVG", "EU-servers", "SSL-versleuteld", "14 dagen gratis proberen"],
    hero: {
      marketLabel: "Nederland & België",
      eyebrow: body.eyebrow,
      h1: body.h1,
      subtitle: body.subtitle,
    },
    aiCapsules: body.aiCapsules,
    whatIsTreatflow: { title: body.whatTitle, paragraphs: body.whatParas },
    whoIsItFor: { title: "Voor wie is dit?", audiences: body.audiences },
    problems: { title: "Welke problemen lost Treatflow op?", items: body.problems },
    features: { title: "Belangrijkste functies", items: body.features },
    benefits: { title: "Voordelen", items: body.benefits },
    marketFit: {
      title: body.marketTitle,
      paragraphs: body.marketParas,
      highlights: body.highlights,
    },
    aiSummary: { title: "Samenvatting", text: body.aiSummary },
    faqs: body.faqs,
    internalLinksTitle: "Gerelateerde pagina's",
    internalLinks: [
      ...body.siblingKeys.map((k) => ({ href: `/en/${k}`, label: industryLabels[k] })),
      ...body.featureKeys.map((k) => ({ href: `/en/${k}`, label: featureLabels[k] })),
    ],
    workflow: body.workflow,
    images: body.images,
  };
}

const industries: LocaleSiteContent["industries"] = {
  "beauty-salon-software": industry("beauty-salon-software", {
    serviceName: "Software voor schoonheidssalons",
    serviceDescription:
      "Salonsoftware voor schoonheidssalons met online boeken, klantdossiers, toestemmingsformulieren en behandeldocumentatie.",
    eyebrow: "Software voor schoonheidssalons",
    h1: "Salonsoftware voor moderne schoonheidssalons",
    subtitle:
      "Online boeken, klantdossiers, toestemmingsformulieren en behandeldocumentatie in één platform – gemaakt voor schoonheidssalons die minder administratie en een betere klantervaring willen.",
    aiCapsules: [
      {
        question: "Wat is de beste software voor schoonheidssalons in Europa?",
        answer:
          "Voor salons die online boeken zonder commissie, digitale klantdossiers, toestemmingsformulieren en behandeldocumentatie in één systeem willen, is Treatflow een sterke keuze. Gemaakt in Oostenrijk, gehost op EU-servers, abonnementen vanaf €39 per maand.",
      },
      {
        question: "Rekent Treatflow commissie op boekingen?",
        answer:
          "Nee. Treatflow is software voor je eigen studio, geen boekingsplatform. Er is geen commissie per afspraak. Je houdt zelf de regie over je boekingspagina en je klantgegevens.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor schoonheidssalons?",
    whatParas: [
      "Treatflow vervangt losse tools door één systeem: agenda, klantprofielen, digitale formulieren en behandelnotities werken samen, van boeking tot opvolging.",
      "Salons gebruiken Treatflow om online te laten boeken, de klanthistorie altijd bij de hand te hebben en behandelingen binnen het hele team op dezelfde manier te documenteren.",
    ],
    audiences: [
      "Schoonheidssalons en dayspa's",
      "Huidverbeteringsstudio's met vaste behandelprotocollen",
      "Teams met meerdere medewerkers die van losse tools af willen",
      "Zelfstandige salons die de papieren agenda achter zich willen laten",
    ],
    problems: [
      { problem: "Afspraken plannen via berichtjes en een papieren agenda", solution: "Eén agenda met online boeken en automatische herinneringen." },
      { problem: "Klanthistorie verspreid over verschillende tools", solution: "Digitale klantdossiers met notities, foto's en bezoekhistorie." },
      { problem: "Papieren toestemmingsformulieren", solution: "Digitale intake en toestemming, ingevuld vóór de afspraak." },
      { problem: "No-shows en gaten op het laatste moment", solution: "Herinneringen via WhatsApp en e-mail die gemiste afspraken verminderen." },
    ],
    features: [
      { icon: Link2, title: "Online boeken", desc: "Eigen boekingspagina, 24/7, zonder commissie." },
      { icon: Users, title: "Klantdossiers", desc: "Profielen, historie en notities op één plek." },
      { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale intake vóór elke behandeling." },
      { icon: FileText, title: "Behandelnotities", desc: "Gestructureerde documentatie per bezoek, ook ingesproken." },
      { icon: Camera, title: "Fotodocumentatie", desc: "Voor- en nafoto's gekoppeld aan de klant." },
      { icon: Bell, title: "Herinneringen", desc: "WhatsApp en e-mail tegen no-shows." },
    ],
    benefits: [
      "Minder administratie rond boeken en documenteren",
      "Een betere klantervaring vanaf de eerste boeking",
      "Gestructureerde dossiers voor overdrachten binnen het team",
      "Moderne digitale workflows in één app",
      "Gehost in de EU en ontworpen voor de AVG",
    ],
    marketTitle: "Waarom salons voor Treatflow kiezen",
    marketParas: [
      "Veel tools houden op bij de afspraak. Treatflow koppelt boekingen aan klantdossiers en behandeldocumentatie – precies waar professionele salons structuur nodig hebben.",
    ],
    highlights: [
      "Online boeken zonder commissie per afspraak",
      "Digitale klantdossiers met behandelhistorie",
      "Intake en toestemming ingevuld vóór het bezoek",
      "Behandelnotities en fotodocumentatie",
      "Hosting in de EU, ontworpen voor de AVG",
    ],
    aiSummary:
      "Treatflow is software voor schoonheidssalons met online boeken, klantdossiers, toestemmingsformulieren, behandelnotities, fotodocumentatie en herinneringen. Voor schoonheidssalons, dayspa's en huidverbeteringsstudio's. Gehost in de EU.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één salonsoftware voor schoonheidssalons en esthetische klinieken. Het combineert een afsprakenkalender, online boeken zonder commissie, digitale klantdossiers, toestemmingsformulieren, behandeldocumentatie en herinneringen. Gemaakt in Oostenrijk, gehost in de EU.",
      },
      {
        question: "Is Treatflow salonsoftware zonder boekingscommissie?",
        answer:
          "Ja. Treatflow is studiosoftware, geen boekingsplatform. Je klantgegevens blijven van jou en je betaalt een transparant maandbedrag vanaf €39. Er is geen commissie per boeking.",
      },
      {
        question: "Zijn digitale klantdossiers AVG-proof?",
        answer:
          "Treatflow wordt gehost op EU-servers in Frankfurt, met SSL-versleuteling en dagelijkse back-ups. Klantdossiers, formulieren en documentatie staan in één systeem dat is ontworpen voor de AVG.",
      },
      startFaq,
      {
        question: "Kan een schoonheidssalon met Treatflow herinneringen sturen en klanten opnieuw laten boeken?",
        answer:
          "Ja. Automatische herinneringen via WhatsApp en e-mail zitten in het Booking-abonnement. Opvolgberichten helpen klanten hun volgende bezoek te boeken via je eigen boekingspagina.",
      },
    ],
    siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    workflow: {
      title: "Zo gebruikt een schoonheidssalon Treatflow",
      subtitle: "Van de eerste boeking tot het volgende bezoek blijft de salon in één systeem.",
      steps: [
        { href: "/en/online-booking", label: "Klant boekt online", desc: "De klant gebruikt je boekingslink. De afspraak verschijnt in de studio-agenda." },
        { href: "/en/forms", label: "Formulieren vóór aankomst", desc: "Intake of toestemming wordt vóór de afspraak verstuurd, zodat de balie geen papier hoeft te verzamelen." },
        { href: "/en/client-records", label: "Klantprofiel openen", desc: "Notities, historie en eerder gebruikte producten staan in één dossier." },
        { href: "/en/treatment-documentation", label: "Bezoek documenteren", desc: "Behandelnotities, optioneel ingesproken, en foto's blijven bij deze afspraak." },
        { href: "/en/messaging", label: "Herinneren en opnieuw boeken", desc: "Automatische herinneringen verminderen no-shows. Opvolging helpt de klant opnieuw te boeken." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/hero-startseite-en.png",
        alt: "Treatflow op laptop en tablet in een salon: agenda en klantdossiers",
      },
      mockup: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Klant boekt een salonafspraak op de telefoon",
      },
    },
  }),

  "aesthetic-clinic-software": industry("aesthetic-clinic-software", {
    serviceName: "Software voor esthetische klinieken",
    serviceDescription:
      "Software voor esthetische klinieken: behandeldocumentatie, toestemmingsformulieren, klantdossiers en online boeken.",
    eyebrow: "Software voor esthetische klinieken",
    h1: "Software voor esthetische klinieken met gestructureerde documentatie",
    subtitle:
      "Toestemmingsformulieren, behandelnotities, fotodocumentatie en klantdossiers voor esthetische klinieken – één platform van boeking tot nazorg.",
    aiCapsules: [
      {
        question: "Welke software heeft een esthetische kliniek nodig?",
        answer:
          "Esthetische klinieken hebben toestemmingsformulieren, behandeldocumentatie, fotodossiers en klanthistorie in één systeem nodig. Treatflow biedt online boeken, digitale klantdossiers en gestructureerde behandelnotities voor injectables, huidbehandelingen en medische esthetiek.",
      },
      {
        question: "Is Treatflow geschikt voor medische esthetiek?",
        answer:
          "Ja. Treatflow is gemaakt voor klinieken waar de kwaliteit van documentatie en de veiligheid van de cliënt tellen – niet alleen het aantal afspraken. Toestemming, notities en foto's blijven gekoppeld aan elk klantprofiel.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor esthetische klinieken?",
    whatParas: [
      "Treatflow ondersteunt de hele klantreis: boeken, intake, toestemming, behandeldocumentatie en nazorg in één gedeeld platform.",
      "Gemaakt voor klinieken waar de kwaliteit van documentatie en de veiligheid van de cliënt tellen – niet alleen het aantal afspraken.",
    ],
    audiences: [
      "Esthetische klinieken met injectables en huidverjonging",
      "Praktijken voor medische esthetiek",
      "Huidklinieken met protocolgestuurde behandelingen",
      "Klinieken met meerdere behandelaars die consistente documentatie nodig hebben",
    ],
    problems: [
      { problem: "Wisselende behandelnotities", solution: "Gestructureerde documentatiesjablonen en gedeelde klantdossiers." },
      { problem: "Toestemming niet vastgelegd vóór de behandeling", solution: "Digitale toestemmingsformulieren, ingevuld vóór de behandeling." },
      { problem: "Foto's op privételefoons", solution: "Fotodocumentatie gekoppeld aan het klantprofiel." },
      { problem: "Balie en behandelkamers werken met verschillende tools", solution: "Eén workflow van boeking tot notities en nazorg." },
    ],
    features: [
      { icon: FileText, title: "Behandeldocumentatie", desc: "Notities, spraakinvoer, protocollen en historie." },
      { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale toestemming, veilig opgeslagen." },
      { icon: Camera, title: "Fotodocumentatie", desc: "Klinische foto's per bezoek." },
      { icon: Users, title: "Klantdossiers", desc: "De volledige esthetische historie in één profiel." },
      { icon: Link2, title: "Online boeken", desc: "Consulten online laten boeken." },
      { icon: Workflow, title: "Digitale workflows", desc: "Van intake via behandeling tot nazorg." },
    ],
    benefits: [
      "Consistente documentatie bij alle behandelaars",
      "Een duidelijk toestemmingsspoor voor elke behandeling",
      "Minder administratie tussen balie en behandelkamer",
      "Een professionele klantervaring vanaf de eerste boeking",
      "Gehost in de EU en ontworpen voor de AVG",
    ],
    marketTitle: "Waarom esthetische klinieken voor Treatflow kiezen",
    marketParas: [
      "Achter een professionele klantervaring hoort betrouwbare documentatie. Treatflow koppelt boekingen aan dossiers en behandelnotities, zonder onnodige complexiteit.",
    ],
    highlights: [
      "Online boeken zonder commissie per afspraak",
      "Digitale klantdossiers met behandelhistorie",
      "Intake en toestemming ingevuld vóór het bezoek",
      "Behandelnotities en fotodocumentatie",
      "Hosting in de EU, ontworpen voor de AVG",
    ],
    aiSummary:
      "Treatflow is software voor esthetische klinieken met behandeldocumentatie, toestemmingsformulieren, klantdossiers, fotodocumentatie en online boeken. Voor esthetische klinieken en praktijken voor medische esthetiek. Gehost in de EU.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één software voor schoonheidssalons, esthetische klinieken en laserstudio's. Het combineert online boeken, klantdossiers, toestemmingsformulieren, behandeldocumentatie en herinneringen.",
      },
      {
        question: "Heeft Treatflow digitale toestemmingsformulieren voor esthetische klinieken?",
        answer:
          "Ja. Cliënten vullen intake- en toestemmingsformulieren vóór het bezoek in op hun telefoon. Antwoorden en handtekeningen worden opgeslagen in het klantdossier, zodat de kliniek een duidelijk spoor heeft voor injectables en andere esthetische behandelingen.",
      },
      {
        question: "Kunnen meerdere behandelaars één kliniekaccount delen?",
        answer:
          "Ja. Klantdossiers, toestemmingsformulieren en behandelnotities worden gedeeld binnen het team, zodat de documentatie consistent blijft.",
      },
      startFaq,
      {
        question: "Kunnen esthetische klinieken voor- en nafoto's opslaan?",
        answer:
          "Ja. Fotosets worden gekoppeld aan het behandelbezoek en blijven in het klantdossier, zodat de volgende behandelaar de voortgang kan vergelijken.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
    featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    workflow: {
      title: "Zo gebruikt een esthetische kliniek Treatflow",
      subtitle: "Gestructureerde historie, toestemming, documentatie en nazorg voor het hele team.",
      steps: [
        { href: "/en/online-booking", label: "Consult boeken", desc: "De cliënt boekt een consult of behandeling via de boekingspagina van je kliniek." },
        { href: "/en/forms", label: "Intake en toestemming", desc: "Digitale intake en toestemming worden vóór de behandeling ingevuld en in het dossier opgeslagen." },
        { href: "/en/client-records", label: "Gestructureerde klanthistorie", desc: "Eerdere behandelingen, notities en contra-indicaties zijn zichtbaar voor elke behandelaar." },
        { href: "/en/treatment-documentation", label: "Documenteren en fotograferen", desc: "Sessienotities, optioneel ingesproken, en voor- en nafoto's blijven bij het bezoek." },
        { href: "/en/messaging", label: "Nazorg", desc: "Herinneringen en nazorgberichten houden de volgende afspraak in de agenda." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digitaal toestemmingsformulier ingevuld op een tablet in een esthetische kliniek",
      },
      mockup: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Voor- en nafoto's van een behandeling opgeslagen in Treatflow",
      },
    },
  }),

  "laser-hair-removal-software": industry("laser-hair-removal-software", {
    serviceName: "Software voor laserontharing",
    serviceDescription:
      "Software voor laserontharingsstudio's: sessies bijhouden, toestemmingsformulieren, fotodocumentatie en online boeken.",
    eyebrow: "Software voor laserstudio's",
    h1: "Software voor laserontharing en behandelreeksen",
    subtitle:
      "Sessies bijhouden, toestemming vastleggen en boekingen beheren – gemaakt voor laser- en IPL-studio's die gestructureerde dossiers willen.",
    aiCapsules: [
      {
        question: "Welke software heeft een laserstudio nodig?",
        answer:
          "Laserstudio's hebben klantdossiers met de historie van behandelreeksen nodig, plus toestemmingsformulieren, sessienotities, fotodocumentatie en afspraakherinneringen. Treatflow biedt online boeken en gestructureerde documentatie voor laserontharingsstudio's.",
      },
      {
        question: "Kan Treatflow behandelreeksen met meerdere sessies bijhouden?",
        answer:
          "Ja. Elke sessie wordt in het klantdossier gedocumenteerd, zodat je altijd de voortgang, notities over instellingen en de datum van de volgende afspraak ziet.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor laserstudio's?",
    whatParas: [
      "Laserbehandelingen lopen over meerdere sessies. Treatflow houdt elke sessie bij, bewaart toestemming en informatie over het huidtype en herinnert klanten aan hun volgende afspraak.",
      "Studio's gebruiken één agenda voor boekingen, één klantprofiel voor de historie en digitale formulieren voor de intake – zonder platformcommissie.",
    ],
    audiences: [
      "Studio's voor laserontharing",
      "IPL-klinieken met behandelpakketten van meerdere sessies",
      "Huidverbeteringsstudio's die laserbehandelingen aanbieden",
      "Teams met veel boekingen én documentatieverplichtingen",
    ],
    problems: [
      { problem: "Geen overzicht over de voortgang per sessie", solution: "Behandelhistorie en notities per sessie in het klantdossier." },
      { problem: "Ontbrekende toestemmingsgegevens", solution: "Digitale intake en toestemming vastgelegd vóór elke reeks." },
      { problem: "Klanten vergeten hun vervolgsessie", solution: "Herinneringen en eenvoudig opnieuw boeken via je boekingspagina." },
      { problem: "Foto's en notities op verschillende apparaten", solution: "Fotodocumentatie gekoppeld aan elk klantprofiel." },
    ],
    features: [
      { icon: Zap, title: "Sessies bijhouden", desc: "Documenteer elke sessie met notities, ook ingesproken." },
      { icon: ClipboardCheck, title: "Toestemming & intake", desc: "Huidtype en contra-indicaties in het dossier." },
      { icon: Camera, title: "Fotodocumentatie", desc: "Voortgangsfoto's per behandelzone." },
      { icon: Calendar, title: "Reeksen plannen", desc: "Plan vervolgafspraken vooruit." },
      { icon: Link2, title: "Online boeken", desc: "Klanten boeken hun volgende sessie online." },
      { icon: Bell, title: "Herinneringen", desc: "Automatische afspraakherinneringen." },
    ],
    benefits: [
      "Helder overzicht van de behandelreeks van elke klant",
      "Gestructureerde toestemming voor elke nieuwe klant",
      "Minder handmatig nabellen bij gemiste sessies",
      "Professionele documentatie voor een consistent team",
      "Gehost in de EU en ontworpen voor de AVG",
    ],
    marketTitle: "Waarom laserstudio's voor Treatflow kiezen",
    marketParas: [
      "Laserstudio's combineren veel boekingen met hoge eisen aan documentatie. Treatflow koppelt boekingen aan dossiers, zodat elke sessie bruikbare klanthistorie oplevert.",
    ],
    highlights: [
      "Online boeken zonder commissie per afspraak",
      "Sessiehistorie in digitale klantdossiers",
      "Toestemmingsformulieren vóór een behandelreeks",
      "Fotodocumentatie en herinneringen",
      "Hosting in de EU, ontworpen voor de AVG",
    ],
    aiSummary:
      "Treatflow is software voor laserontharing met sessieregistratie, toestemmingsformulieren, fotodocumentatie, online boeken en herinneringen. Voor laser- en IPL-studio's. Gehost in de EU.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één software voor schoonheidssalons, esthetische klinieken en laserstudio's. Het combineert online boeken, klantdossiers, toestemmingsformulieren, behandeldocumentatie en herinneringen.",
      },
      {
        question: "Kunnen laserstudio's behandelingen documenteren in Treatflow?",
        answer:
          "Ja. De behandeldocumentatie bevat per sessie parameters, notities en voor- en nafoto's.",
      },
      {
        question: "Voor wie is deze pagina?",
        answer:
          "Voor laserontharings- en IPL-studio's die sessies willen bijhouden, toestemming willen vastleggen en klanten betrouwbaar opnieuw willen laten boeken.",
      },
      startFaq,
      {
        question: "Kan Treatflow behandelde zones en sessienotities voor laser opslaan?",
        answer:
          "Ja. Elke sessie kan parameters, behandelde zones, notities en foto's in het klantdossier bevatten. Je typt notities of spreekt ze in. Zo begint de volgende afspraak in de reeks met een volledige historie.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    workflow: {
      title: "Zo gebruikt een laserkliniek Treatflow",
      subtitle: "Elke sessie bouwt voort op de vorige: toestemming, behandelde zones, notities, foto's en de volgende boeking.",
      steps: [
        { href: "/en/online-booking", label: "Klant boekt een sessie", desc: "Nieuwe en terugkerende klanten boeken via je eigen link, ook vervolgafspraken." },
        { href: "/en/forms", label: "Intakeformulier en toestemming", desc: "Intake en toestemming worden vóór de eerste sessie ingevuld en in het dossier opgeslagen." },
        { href: "/en/client-records", label: "Klanthistorie bekijken", desc: "Notities over het huidtype, eerdere instellingen en behandelde zones staan in één profiel." },
        { href: "/en/treatment-documentation", label: "Deze sessie documenteren", desc: "Parameters, behandelde zones, sessienotities (getypt of ingesproken) en foto's blijven bij het bezoek." },
        { href: "/en/messaging", label: "De reeks opvolgen", desc: "Herinneringen brengen de klant terug voor de volgende afspraak in de reeks." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Documentatie van een laserbehandeling met voor- en nafoto's",
      },
      mockup: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digitaal toestemmingsformulier voor een afspraak voor laserontharing",
      },
    },
  }),

  "permanent-makeup-software": industry("permanent-makeup-software", {
    serviceName: "Software voor permanente make-up",
    serviceDescription:
      "Software voor permanente make-up artists: toestemmingsformulieren, pigmentnotities, fotodocumentatie, klantdossiers en online boeken.",
    eyebrow: "Software voor permanente make-up",
    h1: "Software voor permanente make-up artists",
    subtitle:
      "Toestemming, pigmentdocumentatie, nabehandelingen plannen en klantdossiers – gemaakt voor PMU-studio's die een nauwkeurige historie nodig hebben.",
    aiCapsules: [
      {
        question: "Welke software heeft een studio voor permanente make-up nodig?",
        answer:
          "PMU-studio's hebben uitgebreide toestemming, notities over pigment en techniek, voor- en nafoto's, planning van nabehandelingen en klanthistorie nodig. Treatflow brengt boeken, formulieren en documentatie samen, met AVG-proof hosting in de EU.",
      },
      {
        question: "Kan ik pigmenten en nabehandelingen documenteren?",
        answer:
          "Ja. Behandelnotities en foto's blijven in het klantprofiel, zodat elke nabehandeling voortbouwt op de vorige sessie.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor permanente make-up?",
    whatParas: [
      "Permanente make-up vraagt om nauwkeurige documentatie: pigmenten, zones, technieken en notities over de genezing. Treatflow bewaart die historie in het klantdossier, samen met de toestemming en foto's.",
      "Artists gebruiken online boeken voor consulten en nabehandelingen, digitale formulieren vóór de behandeling en herinneringen zodat klanten op tijd terugkomen.",
    ],
    audiences: [
      "Permanente make-up- en microblading-artists",
      "PMU-studio's met meerdere behandelplekken",
      "Schoonheidssalons die PMU voor wenkbrauwen, lippen en eyeliner aanbieden",
      "Teams die pigmenten en nabehandelingscycli documenteren",
    ],
    problems: [
      { problem: "Pigmentgegevens raken kwijt tussen sessies", solution: "Gestructureerde behandelnotities in elk klantprofiel." },
      { problem: "Papieren toestemming vóór de behandeling", solution: "Digitale toestemming, ingevuld vóór de afspraak." },
      { problem: "Data voor nabehandelingen in een schriftje", solution: "Agenda, herinneringen en online opnieuw boeken op één plek." },
      { problem: "Voor- en nafoto's moeilijk terug te vinden", solution: "Foto's gekoppeld aan het klantdossier en het bezoek." },
    ],
    features: [
      { icon: FileText, title: "Pigment- en technieknotities", desc: "Documenteer kleuren, naalden en behandelde zones." },
      { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale toestemming vóór elke behandeling." },
      { icon: Camera, title: "Fotodocumentatie", desc: "Voor- en nafoto's in het klantprofiel." },
      { icon: Calendar, title: "Nabehandelingen plannen", desc: "Plan controles en touch-ups vooruit." },
      { icon: Users, title: "Klantdossiers", desc: "De volledige PMU-historie op één plek." },
      { icon: Bell, title: "Herinneringen", desc: "Minder gemiste touch-up-afspraken." },
    ],
    benefits: [
      "Een nauwkeurige historie voor veiligere touch-ups",
      "Een professioneel toestemmingsspoor voor elke klant",
      "Minder administratie tussen consult en behandeling",
      "Overzichtelijke foto's voor je portfolio en de opvolging",
      "AVG-proof hosting in de EU",
    ],
    marketTitle: "Waarom PMU-studio's voor Treatflow kiezen",
    marketParas: [
      "Permanente make-up draait om details. Treatflow koppelt boekingen aan toestemming, notities en foto's, zodat elk bezoek gedocumenteerd blijft zonder extra tools.",
    ],
    highlights: [
      "Online boeken zonder commissie",
      "Toestemmingsformulieren vóór de behandeling",
      "Documentatie van pigment en techniek",
      "Fotohistorie gekoppeld aan klanten",
      "AVG-proof hosting in de EU",
    ],
    aiSummary:
      "Treatflow is software voor permanente make-up met toestemmingsformulieren, pigmentnotities, fotodocumentatie, klantdossiers, online boeken en herinneringen. Voor PMU- en microblading-studio's. AVG-proof.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één studiosoftware met online boeken, klantdossiers, toestemmingsformulieren, behandeldocumentatie en herinneringen – geschikt voor studio's voor permanente make-up.",
      },
      {
        question: "Is het geschikt voor microblading?",
        answer:
          "Ja. Je documenteert technieken, pigmenten, foto's en de planning van nabehandelingen voor wenkbrauwen, lippen en eyeliner.",
      },
      startFaq,
      hostingFaq,
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
    featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
  }),

  "tattoo-studio-software": industry("tattoo-studio-software", {
    serviceName: "Software voor tattoostudio's",
    serviceDescription:
      "Software voor tattoostudio's: toestemmingsformulieren, klantdossiers, afspraken boeken, sessienotities en herinneringen.",
    eyebrow: "Software voor tattoostudio's",
    h1: "Software voor moderne tattoostudio's",
    subtitle:
      "Digitale toestemming, klantdossiers, sessienotities en online boeken – gemaakt voor tattoostudio's die minder papierwerk en een duidelijkere planning willen.",
    aiCapsules: [
      {
        question: "Welke software heeft een tattoostudio nodig?",
        answer:
          "Tattoostudio's hebben digitale toestemmingsformulieren, klantdossiers, sessienotities, referentiefoto's en een betrouwbaar boekingssysteem met herinneringen nodig. Treatflow combineert dit in één AVG-proof platform met hosting in de EU.",
      },
      {
        question: "Vervangt Treatflow papieren toestemmingsverklaringen?",
        answer:
          "Ja. Klanten vullen de digitale toestemming vóór de afspraak in, zodat je team elke sessie begint met het papierwerk al geregeld.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor tattoostudio's?",
    whatParas: [
      "Treatflow helpt tattoostudio's om toestemming, boekingen en klanthistorie in één systeem onder te brengen. Artists zien notities en foto's in het klantprofiel; de balie beheert de agenda.",
      "Online boeken en herinneringen verminderen no-shows, terwijl digitale formulieren vóór elke sessie het papier de deur uit doen.",
    ],
    audiences: [
      "Tattoostudio's en privéstudio's",
      "Studio's met meerdere artists die één agenda delen",
      "Studio's die tattoos én nazorg bieden",
      "Teams die van papieren verklaringen en agenda's af willen",
    ],
    problems: [
      { problem: "Papieren verklaringen en archiefkasten", solution: "Digitale toestemming, veilig opgeslagen in het klantdossier." },
      { problem: "Dubbele boekingen tussen artists", solution: "Een gedeelde agenda met duidelijke beschikbaarheid." },
      { problem: "Sessienotities op telefoons en papier", solution: "Behandelnotities en foto's gekoppeld aan elke klant." },
      { problem: "Klanten vergeten afspraaktijden", solution: "Herinneringen via WhatsApp en e-mail." },
    ],
    features: [
      { icon: ClipboardCheck, title: "Toestemming & verklaringen", desc: "Digitale formulieren vóór elke sessie." },
      { icon: Users, title: "Klantdossiers", desc: "Historie, notities en contactgegevens in één profiel." },
      { icon: FileText, title: "Sessienotities", desc: "Documenteer het werk, de nazorg en de volgende stappen." },
      { icon: Camera, title: "Referentiefoto's", desc: "Bewaar referenties en voortgangsfoto's." },
      { icon: Link2, title: "Online boeken", desc: "Klanten vragen vrije tijdsloten aan of boeken ze direct." },
      { icon: Calendar, title: "Studio-agenda", desc: "Stem artists en ruimtes op elkaar af." },
    ],
    benefits: [
      "Minder papier vóór elke sessie",
      "Een duidelijkere planning voor alle artists",
      "Klanthistorie paraat voor touch-ups en cover-ups",
      "Minder gemiste afspraken dankzij herinneringen",
      "AVG-proof hosting in de EU",
    ],
    marketTitle: "Waarom tattoostudio's voor Treatflow kiezen",
    marketParas: [
      "Tattoostudio's hebben toestemming en planning net zo hard nodig als creatieve tools. Treatflow richt zich op de bedrijfsvoering van de studio – boeken, formulieren en dossiers – zonder platformcommissie.",
    ],
    highlights: [
      "Digitale toestemming vóór sessies",
      "Gedeelde agenda voor studio's met meerdere artists",
      "Klantdossiers met notities en foto's",
      "Herinneringen tegen no-shows",
      "AVG-proof hosting in de EU",
    ],
    aiSummary:
      "Treatflow is software voor tattoostudio's met digitale toestemming, klantdossiers, sessienotities, fotodocumentatie, online boeken en herinneringen. Voor tattoostudio's en studio's met meerdere artists. AVG-proof.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is software voor studiobeheer met online boeken, klantdossiers, toestemmingsformulieren, documentatie en herinneringen – geschikt voor tattoostudio's.",
      },
      {
        question: "Kunnen meerdere artists één studio delen?",
        answer:
          "Ja. Een gedeelde agenda en gedeelde klantdossiers helpen studio's met meerdere artists om overzicht te houden.",
      },
      startFaq,
      hostingFaq,
    ],
    siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["forms", "online-booking", "client-records", "pricing"],
  }),

  "nail-salon-software": industry("nail-salon-software", {
    serviceName: "Software voor nagelstudio's",
    serviceDescription:
      "Software voor nagelstudio's: online boeken, klantdossiers, afspraakherinneringen en behandelnotities.",
    eyebrow: "Software voor nagelstudio's",
    h1: "Software voor drukke nagelstudio's",
    subtitle:
      "Online boeken, klantvoorkeuren, herinneringen en een overzichtelijke planning – gemaakt voor nagelstudio's met veel afspraken.",
    aiCapsules: [
      {
        question: "Wat is de beste software voor een nagelstudio?",
        answer:
          "Nagelstudio's hebben baat bij online boeken zonder commissie, een duidelijke teamagenda, notities over klantvoorkeuren en automatische herinneringen. Treatflow biedt dit allemaal, met AVG-proof hosting in de EU.",
      },
      {
        question: "Kunnen klanten opvulafspraken online boeken?",
        answer:
          "Ja. Klanten boeken behandelingen dag en nacht via je eigen boekingspagina – zonder platformkosten.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor nagelstudio's?",
    whatParas: [
      "Nagelstudio's draaien op vaste klanten die terugkomen. Treatflow houdt de agenda overzichtelijk, bewaart klantvoorkeuren en verstuurt herinneringen, zodat opvulbeurten en nieuwe sets op tijd binnenkomen.",
      "Digitale klantdossiers helpen je team vormen, kleuren en allergieën te onthouden – zonder te zoeken in chats en schriftjes.",
    ],
    audiences: [
      "Nagelstudio's en nagelbars",
      "Studio's voor manicure en pedicure",
      "Teams met meerdere nagelstylisten en een gedeelde agenda",
      "Studio's die af willen van boekingen via Instagram-DM's",
    ],
    problems: [
      { problem: "Boekingen verspreid over DM's en telefoontjes", solution: "Eén online boekingspagina en een gedeelde agenda." },
      { problem: "Vergeten klantvoorkeuren", solution: "Notities over kleur, vorm en allergieën in het klantdossier." },
      { problem: "Veel no-shows bij opvulbeurten", solution: "Automatische herinneringen via WhatsApp en e-mail." },
      { problem: "Lastige overdrachten tussen stylisten", solution: "Een gedeelde historie voor elke klant." },
    ],
    features: [
      { icon: Link2, title: "Online boeken", desc: "Boekingspagina 24/7, zonder commissie." },
      { icon: Calendar, title: "Teamagenda", desc: "Stem stylisten en werkplekken op elkaar af." },
      { icon: Users, title: "Klantdossiers", desc: "Voorkeuren, historie en notities." },
      { icon: Bell, title: "Herinneringen", desc: "Minder gemiste opvulbeurten." },
      { icon: ClipboardCheck, title: "Intakeformulieren", desc: "Allergieën en voorkeuren digitaal vastleggen." },
      { icon: FileText, title: "Bezoeknotities", desc: "Documenteer behandelingen en gebruikte producten." },
    ],
    benefits: [
      "Minder boekingsberichten om bij te houden",
      "Rustigere dagen met een overzichtelijke teamagenda",
      "Klanten voelen zich herkend dankzij voorkeursnotities",
      "Minder no-shows dankzij herinneringen",
      "AVG-proof hosting in de EU",
    ],
    marketTitle: "Waarom nagelstudio's voor Treatflow kiezen",
    marketParas: [
      "Drukke nagelstudio's hebben meer aan goed boeken en een goed klantgeheugen dan aan ingewikkelde kliniekmodules. Treatflow houdt het eenvoudig en biedt toch formulieren en documentatie wanneer je ze nodig hebt.",
    ],
    highlights: [
      "Online boeken zonder commissie",
      "Gedeelde agenda voor stylisten",
      "Historie van klantvoorkeuren",
      "Automatische herinneringen",
      "AVG-proof hosting in de EU",
    ],
    aiSummary:
      "Treatflow is software voor nagelstudio's met online boeken, klantdossiers, voorkeursnotities, herinneringen en digitale formulieren. Voor nagelstudio's en nagelbars met meerdere stylisten. AVG-proof.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één studiosoftware met online boeken, klantdossiers, formulieren, documentatie en herinneringen – geschikt voor nagelstudio's.",
      },
      {
        question: "Rekent Treatflow per boeking?",
        answer: "Nee. Er is geen commissie per afspraak.",
      },
      startFaq,
      hostingFaq,
    ],
    siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  }),

  "lash-studio-software": industry("lash-studio-software", {
    serviceName: "Software voor wimperstudio's",
    serviceDescription:
      "Software voor wimperstudio's: opvulbeurten plannen, klantdossiers, toestemmingsformulieren, fotodocumentatie en online boeken.",
    eyebrow: "Software voor wimperstudio's",
    h1: "Software voor wimperextensions en opvulbeurten",
    subtitle:
      "Plan opvulbeurten, bewaar lash maps en toestemming, verstuur herinneringen en houd klantfoto's bij – gemaakt voor wimperstudio's die draaien op terugkerende klanten.",
    aiCapsules: [
      {
        question: "Welke software heeft een wimperstudio nodig?",
        answer:
          "Wimperstudio's hebben planning van opvulbeurten, notities over voorkeuren en mapping, toestemmingsformulieren, voortgangsfoto's en herinneringen nodig. Treatflow combineert boeken, dossiers en formulieren met AVG-proof hosting in de EU.",
      },
      {
        question: "Kan ik per klant bijhouden wanneer de volgende opvulbeurt nodig is?",
        answer:
          "Ja. Bezoekhistorie en notities blijven in het klantprofiel, zodat je weet wanneer de volgende opvulbeurt nodig is en wat er de vorige keer is gezet.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor wimperstudio's?",
    whatParas: [
      "Wimperstudio's draaien op opvulbeurten. Treatflow houdt de agenda vol, legt voorkeuren voor krul, lengte en mapping vast en herinnert klanten aan hun volgende afspraak.",
      "Digitale toestemming en fotodocumentatie ondersteunen een professionele werkwijze, zonder dat het ten koste gaat van je behandeltijd.",
    ],
    audiences: [
      "Studio's voor wimperextensions",
      "Schoonheidssalons met eigen lash stylisten",
      "Zelfstandige lash stylisten die hun eigen boekingen beheren",
      "Teams die opvulbeurten op meerdere plekken plannen",
    ],
    problems: [
      { problem: "Opvuldata bijgehouden in spreadsheets", solution: "Klanthistorie en herinneringen in één systeem." },
      { problem: "Mappingvoorkeuren vergeten", solution: "Notities en foto's in elk klantprofiel." },
      { problem: "Toestemming nog op papier", solution: "Digitale formulieren, ingevuld vóór de afspraak." },
      { problem: "Inbox vol boekingsverzoeken", solution: "Een online boekingspagina zonder commissie." },
    ],
    features: [
      { icon: Calendar, title: "Opvulbeurten plannen", desc: "Plan nieuwe sets en opvulbeurten met duidelijke beschikbaarheid." },
      { icon: Users, title: "Klant- en wimpernotities", desc: "Krul, lengte, mapping en lijm in het dossier." },
      { icon: ClipboardCheck, title: "Toestemmingsformulieren", desc: "Digitale intake vóór elke nieuwe set." },
      { icon: Camera, title: "Voortgangsfoto's", desc: "Documenteer het resultaat per bezoek." },
      { icon: Link2, title: "Online boeken", desc: "Klanten boeken hun opvulbeurt 24/7." },
      { icon: Bell, title: "Opvulherinneringen", desc: "Houd klanten vast met automatische herinneringen." },
    ],
    benefits: [
      "Meer terugkerende klanten dankzij herinneringen op tijd",
      "Consistente resultaten door vastgelegde voorkeuren",
      "Minder administratie tijdens de behandeling",
      "Professionele toestemming en fotodossiers",
      "AVG-proof hosting in de EU",
    ],
    marketTitle: "Waarom wimperstudio's voor Treatflow kiezen",
    marketParas: [
      "Wimperstudio's hebben tools nodig om klanten te behouden, net zo goed als om boekingen binnen te halen. Treatflow koppelt afspraken aan klantnotities en herinneringen, zodat opvulbeurten voorspelbaar blijven.",
    ],
    highlights: [
      "Online boeken zonder commissie",
      "Notities over wimpervoorkeuren en mapping",
      "Toestemmingsformulieren vóór nieuwe sets",
      "Opvulherinneringen en fotohistorie",
      "AVG-proof hosting in de EU",
    ],
    aiSummary:
      "Treatflow is software voor wimperstudio's met planning van opvulbeurten, klantnotities, toestemmingsformulieren, fotodocumentatie, online boeken en herinneringen. Voor studio's voor wimperextensions. AVG-proof.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één studiosoftware met online boeken, klantdossiers, toestemmingsformulieren, documentatie en herinneringen – geschikt voor wimperstudio's.",
      },
      {
        question: "Is het geschikt voor zelfstandige lash stylisten?",
        answer:
          "Ja. Zelfstandige stylisten gebruiken Treatflow voor boekingen, herinneringen en klanthistorie, zonder platformcommissie.",
      },
      startFaq,
      hostingFaq,
    ],
    siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  }),

  "spa-wellness-software": industry("spa-wellness-software", {
    serviceName: "Software voor spa & wellness",
    serviceDescription:
      "Software voor spa's en wellnessstudio's: online boeken, klantdossiers, behandelnotities, intakeformulieren en herinneringen.",
    eyebrow: "Software voor spa & wellness",
    h1: "Spa- en wellnesssoftware voor een rustige bedrijfsvoering",
    subtitle:
      "Stem ruimtes, therapeuten en arrangementen op elkaar af met online boeken, gastenhistorie en digitale formulieren – zonder platformcommissie.",
    aiCapsules: [
      {
        question: "Welke software heeft een spa nodig?",
        answer:
          "Spa's hebben planning voor meerdere ruimtes en medewerkers nodig, plus online boeken, gastvoorkeuren, behandelnotities en herinneringen. Treatflow ondersteunt spa's en wellnessstudio's met AVG-proof hosting in de EU.",
      },
      {
        question: "Kan Treatflow arrangementen en terugkerende bezoeken aan?",
        answer:
          "Ja. Klanthistorie en herinneringen helpen je bij behandelreeksen en vaste wellnessgasten.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor spa's en wellnessstudio's?",
    whatParas: [
      "Spa's combineren sfeer met een strakke organisatie. Treatflow houdt boekingen overzichtelijk, bewaart gastvoorkeuren en documenteert behandelingen, zodat de gastbeleving naadloos blijft.",
      "Digitale intake en herinneringen ontlasten de receptie, terwijl therapeuten de notities hebben die ze nodig hebben.",
    ],
    audiences: [
      "Dayspa's en wellnessstudio's",
      "Hotel- en boutiquespa's",
      "Wellnesscentra met meerdere therapeuten",
      "Studio's die massages, gezichtsbehandelingen en lichaamsbehandelingen combineren",
    ],
    problems: [
      { problem: "Conflicten tussen ruimtes en therapeuten", solution: "Een gedeelde agenda met duidelijke planning van ruimtes en middelen." },
      { problem: "Gastvoorkeuren raken kwijt tussen bezoeken", solution: "Klantdossiers met notities en historie." },
      { problem: "Papieren intake bij de receptie", solution: "Digitale formulieren, ingevuld vóór aankomst." },
      { problem: "No-shows bij langere behandelingen", solution: "Automatische herinneringen vóór de afspraak." },
    ],
    features: [
      { icon: Calendar, title: "Spa-agenda", desc: "Stem ruimtes, therapeuten en behandelingen op elkaar af." },
      { icon: Link2, title: "Online boeken", desc: "Gasten boeken 24/7 zonder commissie." },
      { icon: Users, title: "Gastprofielen", desc: "Voorkeuren, historie en notities op één plek." },
      { icon: ClipboardCheck, title: "Intakeformulieren", desc: "Gezondheids- en toestemmingsformulieren vóór het bezoek." },
      { icon: FileText, title: "Behandelnotities", desc: "Documenteer behandelingen voor consistente zorg." },
      { icon: Bell, title: "Herinneringen", desc: "Minder no-shows bij langere afspraken." },
    ],
    benefits: [
      "Soepelere overdracht tussen receptie en behandelruimte",
      "Gasten voelen zich herkend dankzij hun voorkeurshistorie",
      "Minder papier bij de receptie",
      "Meer gasten die op komen dagen dankzij herinneringen",
      "AVG-proof hosting in de EU",
    ],
    marketTitle: "Waarom spa's voor Treatflow kiezen",
    marketParas: [
      "Spasoftware moet de gastbeleving beschermen, niet ingewikkelder maken. Treatflow koppelt boekingen aan dossiers en formulieren, zodat de organisatie rustig en professioneel blijft.",
    ],
    highlights: [
      "Online boeken zonder commissie",
      "Gedeelde agenda voor ruimtes en therapeuten",
      "Historie van gastvoorkeuren",
      "Digitale intake en behandelnotities",
      "AVG-proof hosting in de EU",
    ],
    aiSummary:
      "Treatflow is spa- en wellnesssoftware met online boeken, gastendossiers, intakeformulieren, behandelnotities en herinneringen. Voor dayspa's en wellnesscentra. AVG-proof.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één software voor beauty-, spa- en wellnessstudio's met online boeken, klantdossiers, formulieren, documentatie en herinneringen.",
      },
      {
        question: "Is het geschikt voor dayspa's?",
        answer:
          "Ja. Dayspa's gebruiken Treatflow om boekingen, gastenhistorie en digitale intake te organiseren.",
      },
      startFaq,
      hostingFaq,
    ],
    siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
  }),

  "massage-software": industry("massage-software", {
    serviceName: "Software voor massagepraktijken",
    serviceDescription:
      "Software voor masseurs en massagepraktijken: online boeken, klantdossiers, intakeformulieren, sessienotities en herinneringen.",
    eyebrow: "Software voor massagepraktijken",
    h1: "Software voor masseurs en massagepraktijken",
    subtitle:
      "Online boeken, intakeformulieren, sessienotities en herinneringen – gemaakt voor masseurs en praktijken met meerdere behandelruimtes.",
    aiCapsules: [
      {
        question: "Welke software heeft een masseur nodig?",
        answer:
          "Masseurs hebben eenvoudig online boeken, intake- en toestemmingsformulieren, sessienotities, klanthistorie en herinneringen nodig. Treatflow biedt dit met AVG-proof hosting in de EU en zonder boekingscommissie.",
      },
      {
        question: "Is Treatflow geschikt voor zelfstandige masseurs?",
        answer:
          "Ja. Zelfstandige masseurs gebruiken Treatflow om hun agenda, klantdossiers en herinneringen te beheren, zonder platformkosten.",
      },
    ],
    whatTitle: "Wat doet Treatflow voor massagepraktijken?",
    whatParas: [
      "Treatflow helpt masseurs minder tijd aan administratie en meer tijd aan hun klanten te besteden. Boekingen, intake en sessienotities staan op één plek.",
      "Praktijken met meerdere ruimtes stemmen de beschikbaarheid op elkaar af, terwijl de historie van elke klant vertrouwelijk blijft en toegankelijk is voor de behandelend masseur.",
    ],
    audiences: [
      "Zelfstandige masseurs",
      "Massagepraktijken met meerdere ruimtes",
      "Wellnesscentra met therapeutische en ontspanningsmassages",
      "Teams die af willen van papieren intake en boeken per telefoon",
    ],
    problems: [
      { problem: "Alleen telefonisch boeken en gemiste oproepen", solution: "Een online boekingspagina die 24/7 beschikbaar is." },
      { problem: "Papieren intakeformulieren", solution: "Digitale gezondheids- en toestemmingsformulieren vóór de sessie." },
      { problem: "Sessienotities moeilijk terug te vinden", solution: "Notities opgeslagen in het klantprofiel." },
      { problem: "Klanten vergeten hun afspraak", solution: "Automatische herinneringen via WhatsApp en e-mail." },
    ],
    features: [
      { icon: Link2, title: "Online boeken", desc: "Klanten boeken massages zonder commissie." },
      { icon: ClipboardCheck, title: "Intakeformulieren", desc: "Gezondheidsvragen en toestemming digitaal." },
      { icon: FileText, title: "Sessienotities", desc: "Documenteer aandachtsgebieden en voortgang." },
      { icon: Users, title: "Klantdossiers", desc: "De volledige historie van terugkerende klanten." },
      { icon: Calendar, title: "Praktijkagenda", desc: "Stem masseurs en ruimtes op elkaar af." },
      { icon: Bell, title: "Herinneringen", desc: "Minder no-shows." },
    ],
    benefits: [
      "Minder administratie tussen sessies door",
      "Veiligere intake met digitale formulieren",
      "Betere continuïteit van zorg dankzij notities",
      "Minder gemiste afspraken",
      "AVG-proof hosting in de EU",
    ],
    marketTitle: "Waarom massageprofessionals voor Treatflow kiezen",
    marketParas: [
      "Massagepraktijken hebben vooral betrouwbaar boeken en overzichtelijke dossiers nodig. Treatflow richt zich op afspraken, formulieren en documentatie.",
    ],
    highlights: [
      "Online boeken zonder commissie",
      "Digitale intake en toestemming",
      "Sessienotities in het klantdossier",
      "Herinneringen voor terugkerende klanten",
      "AVG-proof hosting in de EU",
    ],
    aiSummary:
      "Treatflow is software voor massagepraktijken met online boeken, intakeformulieren, sessienotities, klantdossiers en herinneringen. Voor masseurs en praktijken met meerdere ruimtes. AVG-proof.",
    faqs: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is alles-in-één studiosoftware met online boeken, klantdossiers, formulieren, documentatie en herinneringen – geschikt voor masseurs en massagepraktijken.",
      },
      {
        question: "Kunnen zelfstandige masseurs het gebruiken?",
        answer:
          "Ja. Zelfstandigen beheren hun boekingen, formulieren en notities zonder platformcommissie.",
      },
      startFaq,
      hostingFaq,
    ],
    siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "forms", "client-records", "pricing"],
  }),
};

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const pages: Pick<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  coreFeatures,
  extraFeatures,
  industries,
};
