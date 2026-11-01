import {
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Gift,
  Globe,
  Languages,
  Link2,
  ListChecks,
  Lock,
  Mic,
  Plug,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  Users,
  Workflow,
} from "lucide-react";
import { BASE_URL } from "@/app/i18n/config";
import type { LocaleSiteContent } from "../types";

/**
 * Polnische Inhalte – allgemeine Seiten (Home, Preise, Funktionen-Uebersicht,
 * Vergleiche, Ueber uns, Kontakt, Datenschutz, AGB).
 * Interne Links als EN-Pfade; der Remapper setzt die PL-Slugs.
 */

const featureColors = {
  calendar: "bg-indigo-100 text-indigo-600",
  booking: "bg-emerald-100 text-emerald-600",
  consent: "bg-orange-100 text-orange-600",
  records: "bg-blue-100 text-blue-600",
  docs: "bg-teal-100 text-teal-600",
  reminders: "bg-rose-100 text-rose-600",
  workflows: "bg-purple-100 text-purple-600",
} as const;

const cardMeta = {
  calendar: { icon: CalendarDays, color: "text-indigo-600", bg: "bg-indigo-50" },
  booking: { icon: Link2, color: "text-rose-600", bg: "bg-rose-50" },
  records: { icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  forms: { icon: ClipboardCheck, color: "text-orange-600", bg: "bg-orange-50" },
  docs: { icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  messaging: { icon: Bell, color: "text-purple-600", bg: "bg-purple-50" },
  integrations: { icon: Plug, color: "text-sky-600", bg: "bg-sky-50" },
  shop: { icon: ShoppingBag, color: "text-amber-600", bg: "bg-amber-50" },
  vouchers: { icon: Gift, color: "text-violet-600", bg: "bg-violet-50" },
  website: { icon: Globe, color: "text-teal-600", bg: "bg-teal-50" },
} as const;

const heroImageSrc = "/images/lifestyle/hero-startseite-en.png";

/* -------------------------------------------------------------------------- */
/* Home                                                                       */
/* -------------------------------------------------------------------------- */

const homeFaqs = [
  {
    q: "Czym jest Treatflow?",
    a: "Treatflow to kompleksowy program do salonu kosmetycznego i gabinetu medycyny estetycznej. Łączy kalendarz wizyt, rezerwacje online bez prowizji, cyfrową kartotekę klientów, formularze zgód, notatki z zabiegów, dokumentację zdjęciową i przypomnienia w jednej aplikacji. Stworzony w Austrii, hostowany na serwerach w UE.",
  },
  {
    q: "Czy Treatflow pobiera prowizję od rezerwacji?",
    a: "Nie. Treatflow to oprogramowanie dla Twojego salonu, a nie marketplace. Dane klientów należą do Ciebie, płacisz przejrzystą miesięczną opłatę i nie oddajesz prowizji od żadnej rezerwacji.",
  },
  {
    q: "Dla kogo jest Treatflow?",
    a: "Treatflow jest dla salonów kosmetycznych, gabinetów medycyny estetycznej, studiów depilacji laserowej, makijażu permanentnego, stylizacji paznokci i rzęs, a także dla spa i gabinetów masażu, które chcą mniej nieodwołanych wizyt, zgód zgodnych z RODO i uporządkowanej dokumentacji zabiegów.",
  },
  {
    q: "Czy Treatflow ma cyfrowe formularze zgód dla gabinetów medycyny estetycznej?",
    a: "Tak. Klienci wypełniają wywiad i zgodę na telefonie jeszcze przed wizytą. Odpowiedzi zapisują się w karcie klienta, w razie potrzeby z podpisem elektronicznym.",
  },
  {
    q: "Czy studio depilacji laserowej może dokumentować zabiegi w Treatflow?",
    a: "Tak. Dokumentacja zabiegu obejmuje parametry, notatki oraz zdjęcia przed i po. Notatki możesz też dyktować głosowo.",
  },
  {
    q: "Czy cyfrowa kartoteka klientów jest zgodna z RODO?",
    a: "Treatflow działa na serwerach w UE (Frankfurt), korzysta z szyfrowania SSL i codziennych kopii zapasowych. Karty klientów, formularze i dokumentacja są w jednym systemie zaprojektowanym z myślą o RODO.",
  },
  {
    q: "Ile kosztuje Treatflow?",
    a: "Pakiet Basic kosztuje od 39 € miesięcznie i obejmuje kartotekę klientów, formularze i dokumentację. Pakiet Booking od 59 € miesięcznie dodaje kalendarz, rezerwacje online i przypomnienia. 14 dni za darmo, bez karty kredytowej.",
  },
  {
    q: "Jak zacząć?",
    a: "Zarejestruj się na app.treatflow.io i rozpocznij 14-dniowy bezpłatny okres próbny. Karta kredytowa nie jest potrzebna. Możesz zrezygnować w każdej chwili.",
  },
];

const home: LocaleSiteContent["home"] = {
  locale: "pl",
  earlyAccessHref: "",
  pricingHref: "/en/pricing",
  hero: {
    eyebrow: "Dla salonów kosmetycznych i gabinetów medycyny estetycznej",
    titleLead: "Mniej nieodwołanych wizyt,",
    titleHighlight: "więcej stałych klientów",
    titleTail: "i koniec z papierami",
    subtitle:
      "Wizyty, rezerwacje online bez prowizji, kartoteka klientów, formularze zgód i dokumentacja zabiegów – wszystko w jednej przejrzystej aplikacji. Stworzone w Austrii dla salonów na całym świecie.",
    primaryCta: "Wypróbuj za darmo",
    trustItems: [
      "Bez karty kredytowej",
      "Gotowe w 2 minuty",
      "Bezpłatne przeniesienie danych",
      "Osobiste wsparcie",
    ],
    studiosLabel: "500+ salonów",
    ratingValue: "4.6/5",
    image: {
      src: heroImageSrc,
      alt: "Kalendarz wizyt Treatflow otwarty na laptopie w nowoczesnym salonie kosmetycznym",
    },
  },
  aiCapsules: [
    {
      question: "Czym jest Treatflow?",
      answer:
        "Treatflow to kompleksowe oprogramowanie dla salonów kosmetycznych i gabinetów medycyny estetycznej. Kalendarz wizyt, rezerwacje online bez prowizji, kartoteka klientów, cyfrowe formularze zgód, notatki z zabiegów i dokumentacja zdjęciowa. Hosting w UE. 14 dni za darmo.",
    },
    {
      question: "Czy Treatflow pobiera prowizję od rezerwacji?",
      answer:
        "Nie. Treatflow nie jest marketplace’em. Salon płaci stały miesięczny abonament (Basic od 39 €, Booking od 59 €) i zatrzymuje 100% przychodu z rezerwacji.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "Szyfrowanie SSL" },
    { icon: Server, text: "Serwery w UE" },
    { icon: Shield, text: "Codzienne kopie zapasowe" },
    { icon: ShieldCheck, text: "Zgody zgodne z RODO" },
  ],
  features: {
    title: "Najważniejsze funkcje w skrócie",
    subtitle: "Wszystko przejrzyście uporządkowane, żeby Ty i Twój zespół pracowali szybko.",
    ctaNote: "Bez karty kredytowej. Rezygnacja w każdej chwili.",
    items: [
      { icon: CalendarDays, label: "Kalendarz wizyt", desc: "Widok dnia, tygodnia i miesiąca z kolumnami dla pracowników i gabinetów.", color: featureColors.calendar },
      { icon: Users, label: "Rezerwacje online", desc: "Własny link do rezerwacji, 24/7. Bez marketplace’u i bez prowizji.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Formularze zgód", desc: "Cyfrowy wywiad i zgoda, podpisane na telefonie lub w salonie.", color: featureColors.consent },
      { icon: FileText, label: "Kartoteka klientów", desc: "Historia, notatki, zdjęcia i formularze w jednej karcie zgodnej z RODO.", color: featureColors.records },
      { icon: Shield, label: "Dokumentacja zabiegów", desc: "Parametry, notatki i zdjęcia przed/po przy każdej wizycie.", color: featureColors.docs },
      { icon: Bell, label: "Przypomnienia", desc: "Automatyczne przypomnienia przez WhatsApp i e-mail ograniczają nieobecności.", color: featureColors.reminders },
      { icon: Workflow, label: "Cyfrowe procesy", desc: "Od rezerwacji po dokumentację – w jednym systemie.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "A Treatflow potrafi jeszcze więcej",
    subtitle: "Praktyczne dodatki, które ułatwiają dzień w salonie – już w cenie.",
    items: [
      { icon: BarChart3, label: "Statystyki i raporty", desc: "Przychody, wizyty, klienci i najpopularniejsze usługi w jednym miejscu." },
      { icon: Mic, label: "Dyktowanie z AI", desc: "Nagraj notatkę z zabiegu głosem – Treatflow zapisze ją za Ciebie." },
      { icon: Languages, label: "Rezerwacje w wielu językach", desc: "Klienci rezerwują w swoim języku na Twojej stronie rezerwacji." },
      { icon: Ticket, label: "Kody rabatowe", desc: "Promocje i kody dla nowych klientów przy rezerwacji online." },
      { icon: ListChecks, label: "Zadania i notatki zespołu", desc: "Zadania z terminami i potwierdzeniem przeczytania dla zespołu." },
    ],
  },
  faqs: {
    title: "Najczęściej zadawane pytania",
    pricingLinkLabel: "Zobacz cennik",
    items: homeFaqs,
  },
  cta: {
    title: "Czas na spokojniejsze dni i mniej nieodwołanych wizyt?",
    subtitle: "Zacznij z Treatflow już dziś – 14 dni za darmo, bez karty kredytowej.",
    note: "14 dni za darmo · Bez karty kredytowej · Rezygnacja w każdej chwili",
  },
  schemas: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description:
        "Kompleksowy program do salonu kosmetycznego i gabinetu medycyny estetycznej: kalendarz wizyt, rezerwacje online bez prowizji, kartoteka klientów, formularze zgód i dokumentacja zabiegów. Hosting w UE zgodny z RODO. Stworzony w Austrii.",
      url: `${BASE_URL}/pl`,
      inLanguage: "pl",
      author: { "@type": "Organization", name: "Treatflow", url: BASE_URL },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          description: "Kartoteka klientów, formularze i dokumentacja zabiegów",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          description: "Kalendarz, rezerwacje online i automatyczne przypomnienia",
        },
      ],
      featureList: [
        "Kalendarz wizyt z kolumnami dla pracowników i gabinetów",
        "Rezerwacje online bez prowizji",
        "Cyfrowa kartoteka klientów",
        "Formularze zgód i wywiadu",
        "Dokumentacja zabiegów ze zdjęciami",
        "Przypomnienia przez WhatsApp i e-mail",
      ],
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "pl",
      mainEntity: homeFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  },
};

/* -------------------------------------------------------------------------- */
/* Pricing                                                                    */
/* -------------------------------------------------------------------------- */

const pricing: LocaleSiteContent["pricing"] = {
  eyebrow: "Przejrzyste ceny",
  titleBefore: "Proste ceny –",
  titleHighlight: "bez ukrytych opłat",
  subtitle:
    "Wybierz pakiet dopasowany do Twojego salonu. Rozpocznij 14-dniowy bezpłatny okres próbny – bez karty kredytowej.",
  monthly: "Miesięcznie",
  yearly: "Rocznie",
  saveBadge: "Oszczędzasz 10%",
  perMonth: "/miesiąc",
  perYear: "/rok",
  basicYearlyHint: "35 €/miesiąc • Oszczędzasz 47 € rocznie",
  bookingYearlyHint: "53 €/miesiąc • Oszczędzasz 71 € rocznie",
  exclVat: "netto (bez VAT)",
  popular: "Najczęściej wybierany",
  cta: "Wypróbuj za darmo",
  earlyAccessHref: "",
  basic: {
    name: "Basic",
    description:
      "Cyfrowy wywiad, formularze zgód i dokumentacja zabiegów – bez kalendarza wizyt.",
    included: [
      "Kartoteka klientów",
      "Formularze z podpisem elektronicznym",
      "Dokumentacja zabiegów i notatki głosowe",
      "Zdjęcia przed/po",
      "Notatki i zadania zespołu",
      "Sklep i produkty",
      "Raporty",
      "Role pracowników",
      "Wsparcie e-mail",
    ],
    excluded: [
      "Kalendarz wizyt",
      "Rezerwacje online",
      "Automatyzacje i lista oczekujących",
      "Wsparcie priorytetowe",
    ],
  },
  booking: {
    name: "Booking",
    description:
      "Kalendarz wizyt, rezerwacje online i automatyczne przypomnienia dla Twojego salonu.",
    included: [
      "Wszystko z pakietu Basic",
      "Kalendarz wizyt (pracownicy i gabinety)",
      "Rezerwacje online bez prowizji",
      "Lista oczekujących",
      "Przypomnienia przez WhatsApp i e-mail",
      "Automatyczne procesy dla klientów",
      "Kody rabatowe",
      "Wielojęzyczna strona rezerwacji",
      "Integracje (Zapier i inne)",
      "Priorytetowe wsparcie e-mail i czat",
    ],
  },
  trialBox: {
    title: "14 dni za darmo",
    text: "Bez karty kredytowej • Rezygnacja w każdej chwili • Bezpłatne przeniesienie danych",
    points: ["Bez opłat za wdrożenie", "Rezygnacja co miesiąc", "Zgodność z RODO"],
  },
  comparison: {
    title: "Co zawiera każdy pakiet?",
    subtitle: "Porównaj oba pakiety szczegółowo i wybierz najlepszy dla swojego salonu.",
    vatNote: "Wszystkie ceny są cenami netto (bez VAT).",
    featureCol: "Funkcja",
    rows: [
      { feature: "Kartoteka klientów", basic: true, booking: true },
      { feature: "Formularze z podpisem elektronicznym", basic: true, booking: true },
      { feature: "Dokumentacja zabiegów i notatki głosowe", basic: true, booking: true },
      { feature: "Zdjęcia przed/po", basic: true, booking: true },
      { feature: "Notatki i zadania zespołu", basic: true, booking: true },
      { feature: "Sklep i produkty", basic: true, booking: true },
      { feature: "Raporty", basic: true, booking: true },
      { feature: "Role pracowników", basic: true, booking: true },
      { feature: "Wsparcie e-mail", basic: true, booking: true },
      { feature: "Kalendarz wizyt (pracownicy i gabinety)", basic: false, booking: true },
      { feature: "Rezerwacje online bez prowizji", basic: false, booking: true },
      { feature: "Lista oczekujących", basic: false, booking: true },
      { feature: "Przypomnienia przez WhatsApp i e-mail", basic: false, booking: true },
      { feature: "Automatyczne procesy dla klientów", basic: false, booking: true },
      { feature: "Kody rabatowe", basic: false, booking: true },
      { feature: "Wielojęzyczna strona rezerwacji", basic: false, booking: true },
      { feature: "Integracje (Zapier)", basic: false, booking: true },
      { feature: "Wsparcie priorytetowe", basic: false, booking: true },
    ],
  },
  why: {
    title: "Dlaczego Treatflow?",
    subtitle: "Przejrzyste stałe ceny zamiast ukrytych opłat i prowizji.",
    items: [
      { value: "0%", label: "prowizji od rezerwacji" },
      { value: "0 €", label: "za wdrożenie" },
      { value: "14 dni", label: "za darmo" },
      { value: "Zawsze", label: "możesz zrezygnować" },
    ],
  },
  faq: {
    title: "Pytania o cennik",
    subtitle: "Wszystko, co warto wiedzieć o cenach Treatflow.",
    items: [
      {
        question: "Ile kosztuje Treatflow?",
        answer:
          "Treatflow ma dwa pakiety: Basic od 39 € miesięcznie – kartoteka klientów, formularze i dokumentacja. Booking od 59 € miesięcznie – z kalendarzem wizyt, rezerwacjami online i automatycznymi przypomnieniami. Oba możesz testować przez 14 dni.",
      },
      {
        question: "Czy są jakieś ukryte opłaty?",
        answer:
          "Nie. Treatflow ma przejrzyste stałe ceny – bez prowizji od rezerwacji, opłat za wdrożenie i ukrytych dodatków.",
      },
      {
        question: "Czy mogę zrezygnować w każdej chwili?",
        answer:
          "Tak. Przy płatności miesięcznej rezygnujesz z końcem okresu rozliczeniowego. Nie ma minimalnego okresu umowy.",
      },
      {
        question: "Czy pakiet Booking się opłaca?",
        answer:
          "Jeśli potrzebujesz rezerwacji online, automatycznych przypomnień o wizytach i cyfrowego kalendarza – tak. Automatyczne przypomnienia pomagają ograniczyć nieodwołane wizyty, a rezerwacje online zmniejszają liczbę telefonów.",
      },
      {
        question: "Czy mogę korzystać z Treatflow w Polsce?",
        answer:
          "Tak. Rejestracja jest możliwa na całym świecie – rozpocznij 14-dniowy bezpłatny okres próbny na app.treatflow.io, bez karty kredytowej. Ceny podajemy w euro.",
      },
    ],
  },
  meta: {
    title: "Cennik",
    description:
      "Cennik Treatflow: Basic od 39 €/miesiąc, Booking od 59 €/miesiąc. Bez prowizji od rezerwacji, 14 dni za darmo, bez karty kredytowej.",
  },
};

const pricingKeywords = [
  "program do salonu kosmetycznego cena",
  "system rezerwacji online cena",
  "program do salonu kosmetycznego bez prowizji",
  "oprogramowanie dla gabinetu kosmetycznego cennik",
  "program do gabinetu medycyny estetycznej cena",
];

/* -------------------------------------------------------------------------- */
/* Features overview                                                          */
/* -------------------------------------------------------------------------- */

const featuresMeta: LocaleSiteContent["featuresMeta"] = {
  title: "Funkcje dla salonów i gabinetów",
  description:
    "Kalendarz wizyt, rezerwacje online bez prowizji, kartoteka klientów, cyfrowe formularze zgód, dokumentacja zabiegów z dyktowaniem głosowym, przypomnienia i integracje – w jednym systemie dla salonu.",
  keywords: [
    "program do salonu kosmetycznego",
    "system rezerwacji online",
    "kartoteka klientów salon kosmetyczny",
    "elektroniczna karta zabiegowa",
    "formularz zgody na zabieg online",
  ],
};

const featuresOverview: LocaleSiteContent["featuresOverview"] = {
  breadcrumbLabel: "Funkcje",
  homeHref: "/en",
  registerHref: "",
  pricingHref: "/en/pricing",
  eyebrow: "Wszystkie funkcje",
  title: "Program do salonu i gabinetu – od rezerwacji po dokumentację",
  subtitle:
    "Treatflow łączy kalendarz, rezerwacje online, kartotekę klientów, cyfrowe formularze, notatki z zabiegów i kontakt po wizycie w jednym miejscu. Stworzony dla salonów kosmetycznych i gabinetów medycyny estetycznej – a nie jako platforma rezerwacyjna.",
  bullets: [
    "Bez prowizji od rezerwacji",
    "Formularze, zdjęcia i notatki w karcie klienta",
    "Dyktowanie głosowe notatek z zabiegów",
    "14 dni za darmo, bez karty kredytowej",
  ],
  primaryCta: "Wypróbuj za darmo",
  pricingCta: "Zobacz cennik",
  heroImageSrc,
  heroImageAlt:
    "Treatflow na laptopie i tablecie w gabinecie: kalendarz wizyt i kartoteka klientów",
  capsules: [
    {
      question: "Jakie funkcje ma Treatflow?",
      answer:
        "Treatflow obejmuje kalendarz wizyt, rezerwacje online bez prowizji, kartotekę klientów, cyfrowe formularze wywiadu i zgód, dokumentację zabiegów ze zdjęciami i dyktowaniem głosowym, przypomnienia, integracje, sklep i bony podarunkowe.",
    },
    {
      question: "Czy Treatflow to kompleksowe oprogramowanie?",
      answer:
        "Tak. Treatflow to program dla salonów kosmetycznych i gabinetów medycyny estetycznej. Rezerwacje, kartoteka, formularze, dokumentacja i kontakt po wizycie są w jednym systemie. To nie jest marketplace i nie pobiera prowizji od rezerwacji.",
    },
  ],
  workflowTitle: "Jak funkcje współpracują ze sobą",
  workflowSubtitle:
    "Każdy krok prowadzi do następnego – zespół pracuje na jednej ścieżce klienta zamiast w kilku osobnych narzędziach.",
  workflowSteps: [
    {
      href: "/en/online-booking",
      label: "Rezerwacje online",
      desc: "Klienci rezerwują przez Twój własny link. Terminy są zsynchronizowane z kalendarzem salonu.",
    },
    {
      href: "/en/forms",
      label: "Wywiad i zgoda",
      desc: "Formularze wywiadu i zgody klient może wypełnić jeszcze przed przyjściem.",
    },
    {
      href: "/en/client-records",
      label: "Kartoteka klientów",
      desc: "Historia, notatki i formularze w jednym profilu, dostępnym dla całego zespołu.",
    },
    {
      href: "/en/treatment-documentation",
      label: "Dokumentacja",
      desc: "Notatki, dyktowanie głosowe, parametry i zdjęcia przypisane do wizyty.",
    },
    {
      href: "/en/messaging",
      label: "Kontakt po wizycie",
      desc: "Przypomnienia i automatyczne wiadomości ograniczają nieobecności i sprowadzają klientów z powrotem.",
    },
  ],
  cardsTitle: "Funkcje w skrócie",
  cardsSubtitle: "Każda karta prowadzi do szczegółowej strony danej funkcji.",
  cards: [
    {
      href: "/en/appointment-calendar",
      ...cardMeta.calendar,
      title: "Kalendarz wizyt",
      desc: "Widok dnia, tygodnia i miesiąca z kolumnami dla pracowników lub gabinetów. Rezerwacje online trafiają do tego samego kalendarza.",
      highlights: ["Kolumny pracowników i gabinetów", "Przeciągnij i upuść", "Synchronizacja z rezerwacjami online"],
    },
    {
      href: "/en/online-booking",
      ...cardMeta.booking,
      title: "Rezerwacje online",
      desc: "Własna strona rezerwacji z aktualną dostępnością. Bez prowizji marketplace’u. Potwierdzenia wysyłają się automatycznie.",
      highlights: ["Link do rezerwacji 24/7", "Bez prowizji", "Opcjonalne zaliczki"],
    },
    {
      href: "/en/client-records",
      ...cardMeta.records,
      title: "Kartoteka klientów",
      desc: "Historia, notatki, formularze i zdjęcia w jednym profilu, który cały zespół może otworzyć przed wizytą.",
      highlights: ["Wyszukiwanie profili", "Formularze w karcie", "Dostęp dla zespołu"],
    },
    {
      href: "/en/forms",
      ...cardMeta.forms,
      title: "Wywiad i zgody",
      desc: "Wyślij formularz wywiadu i zgody przed wizytą. Klienci wypełniają go na telefonie, razem z podpisem elektronicznym.",
      highlights: ["Wysyłka przed wizytą", "Podpis elektroniczny", "Zapis w karcie klienta"],
    },
    {
      href: "/en/treatment-documentation",
      ...cardMeta.docs,
      title: "Dokumentacja zabiegów",
      desc: "Notatki, parametry i zdjęcia przed/po przypisane do wizyty. Dyktuj notatki głosowo i opcjonalnie dopracuj je z pomocą AI.",
      highlights: ["Notatki i parametry", "Dyktowanie głosowe", "Zdjęcia przed/po"],
    },
    {
      href: "/en/messaging",
      ...cardMeta.messaging,
      title: "Przypomnienia i wiadomości",
      desc: "Automatyczne przypomnienia przez WhatsApp i e-mail przed wizytą oraz wiadomości po zabiegu. Czas wysyłki ustawiasz dowolnie.",
      highlights: ["WhatsApp i e-mail", "Potwierdzenia rezerwacji", "Wiadomości reaktywujące"],
    },
    {
      href: "/en/integrations",
      ...cardMeta.integrations,
      title: "Integracje",
      desc: "Synchronizuj Treatflow z narzędziami, których już używasz, m.in. z Kalendarzem Google i Zapierem.",
      highlights: ["Kalendarz Google", "Zapier", "Mniej podwójnego wpisywania"],
    },
    {
      href: "/en/shop",
      ...cardMeta.shop,
      title: "Sklep i magazyn",
      desc: "Sprzedawaj kosmetyki obok zabiegów i prowadź stany magazynowe w tym samym systemie.",
      highlights: ["Sprzedaż produktów", "Stany magazynowe", "Powiązanie z klientem"],
    },
    {
      href: "/en/vouchers",
      ...cardMeta.vouchers,
      title: "Bony podarunkowe",
      desc: "Sprzedawaj i realizuj vouchery, łącznie z pozostałym saldem – bez osobnego arkusza kalkulacyjnego.",
      highlights: ["Sprzedaż i realizacja", "Pozostałe saldo", "Kontrola ważności"],
    },
    {
      href: "/en/studio-website",
      ...cardMeta.website,
      title: "Strona internetowa salonu",
      desc: "Strona salonu połączona z Twoją stroną rezerwacji w Treatflow – odwiedzający od razu rezerwują, a nie tylko przeglądają.",
      highlights: ["Mobile-first", "Połączona z rezerwacjami", "Stworzona dla salonów"],
    },
  ],
  learnMore: "Dowiedz się więcej",
  stepLabel: (n: number) => `Krok ${n}`,
  showCheckoutSection: false,
  checkoutTitle: "",
  checkoutText: "",
  industriesTitle: "Dla kogo są te funkcje",
  industriesSubtitle: "Ta sama mapa funkcji, dopasowana do sposobu pracy każdego salonu.",
  industries: [
    { href: "/en/beauty-salon-software", label: "Salony kosmetyczne" },
    { href: "/en/aesthetic-clinic-software", label: "Gabinety medycyny estetycznej" },
    { href: "/en/laser-hair-removal-software", label: "Depilacja laserowa" },
    { href: "/en/permanent-makeup-software", label: "Makijaż permanentny" },
    { href: "/en/lash-studio-software", label: "Stylizacja rzęs" },
    { href: "/en/nail-salon-software", label: "Salony paznokci" },
    { href: "/en/massage-software", label: "Masaż i wellness" },
    { href: "/en/spa-wellness-software", label: "Spa" },
  ],
  relatedTitle: "Zobacz także",
  relatedLinks: [
    { href: "/en/pricing", label: "Cennik" },
    { href: "/en/software-comparison", label: "Porównanie programów" },
    { href: "/en/treatflow-vs-fresha", label: "Treatflow vs Fresha" },
    { href: "/en/treatflow-vs-treatwell", label: "Treatflow vs Treatwell" },
  ],
  faqs: [
    {
      question: "Jakie funkcje ma Treatflow?",
      answer:
        "Treatflow obejmuje kalendarz wizyt, rezerwacje online bez prowizji, kartotekę klientów, cyfrowe formularze wywiadu i zgód, dokumentację zabiegów ze zdjęciami i dyktowaniem głosowym, przypomnienia, integracje, sklep, bony podarunkowe i opcjonalną stronę internetową salonu.",
    },
    {
      question: "Czy Treatflow to kompleksowy program, czy tylko narzędzie do rezerwacji?",
      answer:
        "Treatflow to oprogramowanie dla salonu, a nie marketplace. Rezerwacje, kartoteka, formularze, dokumentacja i kontakt po wizycie są w jednym systemie, więc zespół nie musi przełączać się między aplikacjami.",
    },
    {
      question: "Czy dane moich klientów są bezpieczne?",
      answer:
        "Tak. Treatflow działa na serwerach w UE (Frankfurt), z szyfrowaniem SSL i codziennymi kopiami zapasowymi. System zaprojektowano z myślą o RODO.",
    },
    {
      question: "Czy mogę przetestować wszystkie funkcje przed zakupem?",
      answer:
        "Tak. Rozpocznij 14-dniowy bezpłatny okres próbny bez karty kredytowej. Możesz zrezygnować w każdej chwili.",
    },
  ],
  faqTitle: "Najczęściej zadawane pytania",
  faqBadge: "FAQ",
  bottomTitle: "Czas poprowadzić cały salon w jednym miejscu?",
  bottomText: "Rozpocznij bezpłatny okres próbny – bez karty kredytowej, z możliwością rezygnacji w każdej chwili.",
};

/* -------------------------------------------------------------------------- */
/* Comparisons                                                                */
/* -------------------------------------------------------------------------- */

const comparisons: LocaleSiteContent["comparisons"] = {
  "treatflow-vs-fresha": {
    competitor: "Fresha",
    title: "Treatflow vs Fresha",
    description:
      "Treatflow vs Fresha dla salonów kosmetycznych: program z dokumentacją i zgodami kontra darmowe narzędzie do rezerwacji finansowane z płatności. Uczciwe porównanie.",
    intro:
      "Fresha jest popularna jako darmowe narzędzie do rezerwacji. Treatflow to płatny program dla salonu: klienci zostają u Ciebie, płacisz stałą opłatę, a zabiegi i zgody dokumentujesz w jednym miejscu. Bez prowizji marketplace’u.",
    rows: [
      { feature: "Model biznesowy", treatflow: "SaaS, stała cena miesięczna", competitor: "Darmowa podstawa, zarabia na płatnościach", treatflowOk: true, competitorOk: false },
      { feature: "Prowizja od rezerwacji", treatflow: "Brak", competitor: "Bez prowizji marketplace’u, możliwe opłaty za płatności", treatflowOk: true, competitorOk: true },
      { feature: "Własność danych klientów", treatflow: "Kartoteka należy do salonu", competitor: "Zależy od sposobu korzystania z platformy", treatflowOk: true, competitorOk: false },
      { feature: "Formularze zgód i wywiadu", treatflow: "Wbudowane, podpisane, zapisane w karcie", competitor: "Ograniczone / nie skupia się na dokumentacji", treatflowOk: true, competitorOk: false },
      { feature: "Dokumentacja zabiegów", treatflow: "Notatki, parametry, zdjęcia przed/po", competitor: "To nie jest system dokumentacji", treatflowOk: true, competitorOk: false },
      { feature: "Cena", treatflow: "Od 39 €/miesiąc, przejrzyście", competitor: "Darmowy start, koszty rosną z płatnościami", treatflowOk: true, competitorOk: true },
      { feature: "Hosting", treatflow: "Serwery w UE, zgodność z RODO", competitor: "Produkt międzynarodowy", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "Czy Fresha jest naprawdę darmowa?",
        a: "Sama warstwa rezerwacji może być bezpłatna. Fresha zarabia zwykle na płatnościach kartą i dodatkowych produktach. Rzeczywisty koszt zależy więc od obrotu, a nie od opublikowanej stałej opłaty.",
      },
      {
        q: "Czym różni się Treatflow od Freshy?",
        a: "Treatflow to niezależny program dla salonu z kalendarzem, kartoteką, formularzami zgód i dokumentacją zabiegów. Fresha to przede wszystkim darmowe narzędzie do rezerwacji. Treatflow nie pobiera prowizji od rezerwacji.",
      },
      {
        q: "Czy Fresha ma dokumentację zabiegów dla gabinetów medycyny estetycznej?",
        a: "Fresha nie jest zbudowana jako system dokumentacji zabiegów opartej na parametrach i zdjęciach. Treatflow zapisuje parametry, notatki i zdjęcia przy każdej wizycie.",
      },
      {
        q: "Czy mogę przejść z Freshy na Treatflow?",
        a: "Tak. Pomagamy przenieść dane klientów. Treatflow możesz testować przez 14 dni bez karty kredytowej.",
      },
    ],
    ctaTitle: "Wolisz płacić za program, a nie oddawać część każdej wizyty?",
    keywords: [
      "alternatywa dla Fresha",
      "Fresha opinie",
      "Treatflow vs Fresha",
      "program do salonu kosmetycznego zamiast Fresha",
    ],
  },
  "treatflow-vs-treatwell": {
    competitor: "Treatwell",
    title: "Treatflow vs Treatwell",
    description:
      "Treatflow vs Treatwell: zatrzymaj klientów i płać stały abonament albo korzystaj z marketplace’u, który pobiera prowizję. Porównanie dla salonów kosmetycznych.",
    intro:
      "Treatwell to marketplace. Treatflow to Twój własny program. Jeśli zależy Ci na widoczności na platformie, Treatwell może pomóc. Jeśli chcesz mieć własną relację z klientami i uniknąć prowizji, lepiej pasuje Treatflow.",
    rows: [
      { feature: "Model", treatflow: "Program Twojego salonu", competitor: "Marketplace / platforma", treatflowOk: true, competitorOk: false },
      { feature: "Prowizja", treatflow: "0% od rezerwacji", competitor: "Prowizja od rezerwacji z marketplace’u", treatflowOk: true, competitorOk: false },
      { feature: "Dane klientów", treatflow: "Zostają na koncie Twojego salonu", competitor: "Współdzielone z platformą", treatflowOk: true, competitorOk: false },
      { feature: "Rezerwacje online", treatflow: "Twój link, Twoja marka", competitor: "Profil na platformie plus narzędzia", treatflowOk: true, competitorOk: true },
      { feature: "Formularze i dokumentacja", treatflow: "Rdzeń produktu", competitor: "Nie jest głównym zadaniem marketplace’u", treatflowOk: true, competitorOk: false },
      { feature: "Cena", treatflow: "SaaS 39–59 €/miesiąc", competitor: "Oparta na prowizjach", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "Czy Treatflow to alternatywa dla Treatwell bez prowizji?",
        a: "Tak, jeśli szukasz programu, a nie marketplace’u. Udostępniasz własny link do rezerwacji i płacisz miesięczny abonament zamiast prowizji od każdej rezerwacji.",
      },
      {
        q: "Czy Treatwell ma formularze zgód i notatki z zabiegów?",
        a: "Marketplace’y skupiają się na pozyskiwaniu klientów i rezerwacjach. Treatflow jest zbudowany wokół kartoteki, formularzy i dokumentacji – oraz kalendarza.",
      },
      {
        q: "Czy mogę korzystać z obu?",
        a: "Niektóre salony zostawiają marketplace do pozyskiwania klientów, a codzienną pracę prowadzą w Treatflow. Treatflow nie wymaga konta na żadnym marketplace’ie.",
      },
    ],
    ctaTitle: "Rezerwacje przez własny link, bez prowizji dla marketplace’u",
    keywords: [
      "alternatywa dla Treatwell",
      "Treatwell prowizja",
      "Treatflow vs Treatwell",
      "rezerwacje online bez prowizji",
    ],
  },
  "software-comparison": {
    competitor: "Typowe narzędzia",
    title: "Porównanie programów do salonu kosmetycznego",
    description:
      "Porównaj programy do salonu kosmetycznego: marketplace, darmowe narzędzie do rezerwacji czy Treatflow. Bez prowizji, kartoteka zgodna z RODO, zgody i dokumentacja.",
    intro:
      "Wiele salonów łączy kalendarz, widżet rezerwacji, papierowe formularze i foldery ze zdjęciami. Na rynku są też platformy rezerwacyjne i lokalne systemy dla salonów, takie jak Booksy czy Versum – warto sprawdzić, jak każdy z nich rozlicza się z salonem i czy obejmuje dokumentację zabiegów. Treatflow zastępuje cały ten zestaw jedną aplikacją: wizyty, rezerwacje online bez prowizji, kartoteka klientów, formularze i dokumentacja zabiegów.",
    rows: [
      { feature: "Wszystko w jednym", treatflow: "Kalendarz, kartoteka, formularze, dokumentacja", competitor: "Często kilka narzędzi", treatflowOk: true, competitorOk: false },
      { feature: "Prowizja", treatflow: "Brak", competitor: "Marketplace’y pobierają prowizję", treatflowOk: true, competitorOk: false },
      { feature: "RODO / hosting w UE", treatflow: "Serwery w UE", competitor: "Różnie", treatflowOk: true, competitorOk: false },
      { feature: "Formularze zgód", treatflow: "Cyfrowe, w karcie klienta", competitor: "Papier lub dodatek", treatflowOk: true, competitorOk: false },
      { feature: "Okres próbny", treatflow: "14 dni, bez karty", competitor: "Różnie", treatflowOk: true, competitorOk: true },
    ],
    faqs: [
      {
        q: "Jakiego programu naprawdę potrzebuje salon kosmetyczny?",
        a: "Kalendarza zsynchronizowanego z rezerwacjami online, karty klienta, wywiadu i zgody oraz sposobu na dokumentowanie zabiegów. Treatflow jest zbudowany właśnie wokół tego zestawu.",
      },
      {
        q: "Jaki program do salonu kosmetycznego w Europie bez prowizji od rezerwacji?",
        a: "Treatflow to oprogramowanie SaaS z Austrii z hostingiem w UE i bez prowizji marketplace’u. Pakiety od 39 € miesięcznie.",
      },
      {
        q: "Na co zwrócić uwagę, porównując Booksy, Versum i inne systemy?",
        a: "Sprawdź model rozliczeń (abonament czy prowizja), to, kto jest właścicielem danych klientów, gdzie dane są hostowane oraz czy system obejmuje formularze zgód i dokumentację zabiegów. Aktualne ceny i warunki zawsze weryfikuj bezpośrednio u dostawcy.",
      },
    ],
    ctaTitle: "Porównaj Treatflow z narzędziami, których już używasz",
    keywords: [
      "porównanie programów do salonu",
      "najlepszy program do salonu kosmetycznego",
      "alternatywa dla Booksy",
      "alternatywa dla Versum",
      "program do salonu kosmetycznego ranking",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* About / Contact                                                            */
/* -------------------------------------------------------------------------- */

const about: LocaleSiteContent["about"] = {
  metaTitle: "O Treatflow",
  metaDescription:
    "Treatflow to kompleksowe oprogramowanie dla salonów kosmetycznych. Stworzone w Austrii, zgodne z RODO i hostowane w UE.",
  eyebrow: "O nas",
  title: "Oprogramowanie, które oddaje salonom czas",
  subtitle:
    "Treatflow zaczął się od prostej obserwacji: specjaliści branży beauty spędzają zdecydowanie za dużo czasu na administracji zamiast z klientami. Postanowiliśmy to zmienić – jedną przejrzystą aplikacją, która łączy wizyty, klientów, formularze i dokumentację.",
  valuesTitle: "Co jest dla nas ważne",
  values: [
    {
      title: "Stworzone dla salonów",
      desc: "Rozwijamy Treatflow razem ze specjalistami branży beauty – każda funkcja rozwiązuje prawdziwy, codzienny problem.",
    },
    {
      title: "Prywatność na pierwszym miejscu",
      desc: "Zgodność z RODO i hosting na serwerach w UE. Twoje dane i dane Twoich klientów są chronione.",
    },
    {
      title: "Osobiste wsparcie",
      desc: "Prawdziwi ludzie, którzy znają branżę beauty – pomogą Ci wystartować i w pełni wykorzystać Treatflow.",
    },
    {
      title: "Made in Austria",
      desc: "Rozwijane i wspierane w Europie, dla salonów w całej Europie i poza nią.",
    },
  ],
  ctaLabel: "Wypróbuj za darmo",
};

const contact: LocaleSiteContent["contact"] = {
  metaTitle: "Kontakt z Treatflow",
  metaDescription:
    "Skontaktuj się z zespołem Treatflow. Pomagamy salonom kosmetycznym i gabinetom medycyny estetycznej przenieść wizyty, formularze i dokumentację zabiegów do świata cyfrowego.",
  title: "Kontakt",
  body: "Napisz do nas na hello@treatflow.io albo od razu rozpocznij bezpłatny okres próbny.",
  cta: "Wypróbuj za darmo",
};

/* -------------------------------------------------------------------------- */
/* Legal                                                                      */
/* -------------------------------------------------------------------------- */

const privacy: LocaleSiteContent["privacy"] = {
  metaTitle: "Polityka prywatności",
  metaDescription:
    "Polityka prywatności Treatflow: przetwarzanie danych zgodne z RODO, hosting w UE (Frankfurt), Twoje prawa i sposób, w jaki obchodzimy się z danymi salonów i odwiedzających stronę.",
  title: "Polityka prywatności",
  intro:
    "Treatflow to oprogramowanie dla salonów kosmetycznych i gabinetów medycyny estetycznej. Dane osobowe przetwarzamy zgodnie z RODO. Prawnie pełną i wiążącą wersją jest niemiecka polityka prywatności pod adresem /datenschutz. Ta polska strona streszcza kwestie, o które salony i ich klienci pytają najczęściej.",
  sections: [
    {
      heading: "1. Administrator danych",
      html: `<p>Administrator danych dla tej strony internetowej i aplikacji Treatflow:</p>
<p><strong>Treatflow</strong><br/>Olcay Elikci<br/>Bahnhofstrasse 17<br/>5500 Bischofshofen, Austria<br/>E-mail: <a href="mailto:hello@treatflow.io">hello@treatflow.io</a></p>`,
    },
    {
      heading: "2. Gdzie przechowywane są dane",
      html: `<p>Treatflow działa na serwerach w UE (Frankfurt). Połączenia są szyfrowane SSL. Codziennie wykonujemy kopie zapasowe. Hosting został zaprojektowany z myślą o RODO. Nie sprzedajemy danych klientów i nie jesteśmy platformą rezerwacyjną (marketplace).</p>`,
    },
    {
      heading: "3. Jakie dane przetwarzamy",
      html: `<p><strong>Odwiedzający stronę:</strong> adres IP, czas dostępu, przeglądarka, strona odsyłająca – niezbędne do udostępniania i zabezpieczenia strony.</p>
<p><strong>Kontakt i rejestracja okresu próbnego:</strong> imię i nazwisko, adres e-mail oraz podane przez Ciebie dane salonu.</p>
<p><strong>W aplikacji (dane salonu):</strong> kartoteki klientów, wizyty, formularze, podpisy, notatki z zabiegów, zdjęcia i dane rozliczeniowe, które zapisuje salon. Administratorem danych swoich klientów jest z reguły salon; Treatflow działa jako podmiot przetwarzający na podstawie umowy powierzenia przetwarzania danych.</p>`,
    },
    {
      heading: "4. Cele i podstawy prawne",
      html: `<ul>
<li>Udostępnianie strony internetowej i oprogramowania (umowa / prawnie uzasadniony interes)</li>
<li>Konto, rozliczenia i wsparcie (umowa)</li>
<li>Obowiązki prawne (podatki, księgowość)</li>
<li>Opcjonalne pliki cookie analityczne i marketingowe – wyłącznie za zgodą</li>
</ul>`,
    },
    {
      heading: "5. Twoje prawa",
      html: `<p>Zgodnie z obowiązującymi przepisami możesz żądać dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i przeniesienia, a także wnieść sprzeciw wobec przetwarzania. Masz prawo złożyć skargę do organu nadzorczego – w Polsce jest to Prezes Urzędu Ochrony Danych Osobowych (UODO), w Austrii Datenschutzbehörde. Skontaktuj się z nami: hello@treatflow.io.</p>`,
    },
    {
      heading: "6. Pełna wersja niemiecka",
      html: `<p>Informacje o plikach cookie, podmiotach przetwarzających, okresach przechowywania oraz pełny tekst prawny znajdziesz w <a href="/datenschutz">niemieckiej polityce prywatności</a>.</p>`,
    },
  ],
};

const terms: LocaleSiteContent["terms"] = {
  metaTitle: "Regulamin",
  metaDescription:
    "Regulamin Treatflow: oprogramowanie SaaS dla salonów kosmetycznych, przejrzyste ceny, 14 dni za darmo, bez prowizji od rezerwacji. Obowiązują pełne niemieckie OWU (AGB).",
  title: "Regulamin",
  intro:
    "Treatflow to płatny produkt SaaS do prowadzenia salonu. Zakładając konto, akceptujesz niniejsze warunki. Wiążącą umową są niemieckie ogólne warunki handlowe (AGB) pod adresem /agb. Ta polska strona wyjaśnia najważniejsze kwestie handlowe dla salonów spoza krajów niemieckojęzycznych.",
  sections: [
    {
      heading: "1. Usługa",
      html: `<p>Treatflow udostępnia oprogramowanie internetowe do obsługi wizyt, rezerwacji online, kartoteki klientów, formularzy, dokumentacji zabiegów i innych narzędzi dla salonu. Nie jest marketplace’em i nie pobiera prowizji od rezerwacji.</p>`,
    },
    {
      heading: "2. Pakiety, okres próbny i rezygnacja",
      html: `<p>Pakiety kosztują od 39 € miesięcznie (Basic) i od 59 € miesięcznie (Booking), netto (bez VAT). 14-dniowy okres próbny nie wymaga karty kredytowej. Pakiety miesięczne można wypowiedzieć z końcem okresu rozliczeniowego.</p>`,
    },
    {
      heading: "3. Odpowiedzialność salonu",
      html: `<p>Odpowiadasz za wprowadzane dane, prawidłowe korzystanie z formularzy i dokumentacji oraz przestrzeganie przepisów dotyczących branży beauty, ochrony zdrowia i podatków w Twoim kraju. Treatflow nie zastępuje porady prawnej ani medycznej.</p>`,
    },
    {
      heading: "4. Dostępność i wsparcie",
      html: `<p>Dążymy do wysokiej dostępności i zapewniamy wsparcie e-mail (w pakiecie Booking wsparcie priorytetowe). Możemy aktualizować produkt. Krytyczne aktualizacje bezpieczeństwa mogą być wdrażane bez uprzedzenia.</p>`,
    },
    {
      heading: "5. Wiążące warunki w języku niemieckim",
      html: `<p>Pełne warunki umowy zawierają <a href="/agb">niemieckie AGB</a>. Pytania: hello@treatflow.io.</p>`,
    },
  ],
};

export const general: Omit<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  home,
  homeMeta: {
    title: "Program do salonu kosmetycznego i gabinetu",
    description:
      "Treatflow to kompleksowy program do salonu kosmetycznego i gabinetu medycyny estetycznej: rezerwacje online bez prowizji, kartoteka klientów, cyfrowe formularze, dokumentacja zabiegów i przypomnienia. 14 dni za darmo.",
    keywords: [
      "program do salonu kosmetycznego",
      "system rezerwacji online",
      "oprogramowanie dla salonu kosmetycznego",
      "program do gabinetu medycyny estetycznej",
      "kalendarz wizyt online",
    ],
  },
  pricing,
  pricingKeywords,
  featuresMeta,
  featuresOverview,
  comparisons,
  about,
  contact,
  privacy,
  terms,
};
