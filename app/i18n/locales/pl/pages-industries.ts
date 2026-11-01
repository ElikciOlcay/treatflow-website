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
import type { IndustryPageKey } from "@/app/i18n/industry-slugs";

/* -------------------------------------------------------------------------- */
/* Wspólne elementy (PL)                                                      */
/* -------------------------------------------------------------------------- */

const shell = {
  marketLabel: "Polska",
  areaServed: ["PL"],
  ctaPrimaryLabel: "Wypróbuj za darmo",
  ctaBottomTitle: "Cały salon w jednym miejscu – zaczynamy?",
  ctaBottomText:
    "Wypróbuj Treatflow za darmo przez 14 dni – bez karty kredytowej, z możliwością rezygnacji w każdej chwili.",
  trustTrialLabel: "14 dni za darmo",
  internalLinksTitle: "Powiązane strony",
  problemsTitle: "Jakie problemy rozwiązuje Treatflow?",
  featuresTitle: "Najważniejsze funkcje",
  benefitsTitle: "Korzyści",
  whoTitle: "Dla kogo?",
  summaryTitle: "Podsumowanie",
};

const industryLabels: Record<IndustryPageKey, string> = {
  "beauty-salon-software": "Program do salonu kosmetycznego",
  "aesthetic-clinic-software": "Program dla gabinetu medycyny estetycznej",
  "laser-hair-removal-software": "Program do depilacji laserowej",
  "permanent-makeup-software": "Program do makijażu permanentnego",
  "tattoo-studio-software": "Program dla studia tatuażu",
  "nail-salon-software": "Program dla salonu paznokci",
  "lash-studio-software": "Program do stylizacji rzęs",
  "spa-wellness-software": "Program dla spa i wellness",
  "massage-software": "Program dla gabinetu masażu",
};

const featureLinks = {
  "online-booking": { href: "/en/online-booking", label: "Rezerwacje online" },
  "client-records": { href: "/en/client-records", label: "Kartoteka klientów" },
  forms: { href: "/en/forms", label: "Formularze zgód" },
  "treatment-documentation": { href: "/en/treatment-documentation", label: "Dokumentacja zabiegów" },
  pricing: { href: "/en/pricing", label: "Cennik" },
} as const;

type FeatureLinkKey = keyof typeof featureLinks;

const FAQ_START = {
  question: "Jak zacząć?",
  answer:
    "Zarejestruj się na app.treatflow.io i rozpocznij 14-dniowy bezpłatny okres próbny. Karta kredytowa nie jest potrzebna.",
};

const FAQ_HOSTING = {
  question: "Gdzie przechowywane są dane?",
  answer:
    "Treatflow przechowuje dane na serwerach w UE (Frankfurt) i został zaprojektowany z myślą o zgodności z RODO.",
};

const HIGHLIGHTS_CORE = [
  "Rezerwacje online bez prowizji od wizyty",
  "Cyfrowa kartoteka klientów z historią zabiegów",
  "Formularze zgód i wywiady wypełniane przed wizytą",
  "Notatki z zabiegów i dokumentacja zdjęciowa",
  "Hosting w UE, zaprojektowany z myślą o RODO",
];

type Body = {
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

function build(key: IndustryPageKey, body: Body): InternationalPageContent {
  return {
    pageKey: key as SeoPageKey,
    locale: "pl",
    canonicalPath: `/en/${key}`,
    serviceName: industryLabels[key],
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
    whatIsTreatflow: { title: body.whatTitle, paragraphs: body.whatParas },
    whoIsItFor: { title: shell.whoTitle, audiences: body.audiences },
    problems: { title: shell.problemsTitle, items: body.problems },
    features: { title: shell.featuresTitle, items: body.features },
    benefits: { title: shell.benefitsTitle, items: body.benefits },
    marketFit: {
      title: body.marketTitle,
      paragraphs: body.marketParas,
      highlights: body.highlights,
    },
    aiSummary: { title: shell.summaryTitle, text: body.aiSummary },
    faqs: body.faqs,
    internalLinksTitle: shell.internalLinksTitle,
    internalLinks: [
      ...body.siblingKeys.map((k) => ({ href: `/en/${k}`, label: industryLabels[k] })),
      ...body.featureKeys.map((fk) => ({ ...featureLinks[fk] })),
    ],
    workflow: body.workflow,
    images: body.images,
  };
}

/* -------------------------------------------------------------------------- */
/* Treści                                                                     */
/* -------------------------------------------------------------------------- */

export const industries: Record<IndustryPageKey, InternationalPageContent> = {
  "beauty-salon-software": build("beauty-salon-software", {
    serviceDescription:
      "Program do salonu kosmetycznego z rezerwacjami online, kartoteką klientów, formularzami zgód i dokumentacją zabiegów.",
    eyebrow: "Program do salonu kosmetycznego",
    h1: "Program do salonu kosmetycznego dla nowoczesnych salonów",
    subtitle:
      "Rezerwacje online, kartoteka klientów, formularze zgód i dokumentacja zabiegów na jednej platformie – dla salonów kosmetycznych, które chcą mniej papierologii i lepszej obsługi klientów.",
    aiCapsules: [
      {
        question: "Jaki program do salonu kosmetycznego wybrać w Europie?",
        answer:
          "Dla salonów w Europie, które potrzebują rezerwacji online bez prowizji, cyfrowej kartoteki klientów, formularzy zgód i dokumentacji zabiegów w jednym systemie, Treatflow jest mocnym wyborem. Stworzony w Austrii, hostowany na serwerach w UE, pakiety od 39 € miesięcznie.",
      },
      {
        question: "Czy Treatflow pobiera prowizję od rezerwacji?",
        answer:
          "Nie. Treatflow to program dla Twojego salonu, a nie marketplace. Nie ma prowizji od wizyty. Masz pełną kontrolę nad swoją stroną rezerwacji i danymi klientów.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla salonów kosmetycznych?",
    whatParas: [
      "Treatflow zastępuje rozproszone narzędzia jednym systemem: kalendarz, profile klientów, cyfrowe formularze i notatki z zabiegów współpracują ze sobą – od rezerwacji po kolejną wizytę.",
      "Salony używają Treatflow, aby oferować rezerwacje online, mieć historię klientów zawsze pod ręką i dokumentować zabiegi w jednolity sposób w całym zespole.",
    ],
    audiences: [
      "Salony kosmetyczne i day spa",
      "Gabinety pielęgnacji skóry z ustalonymi protokołami zabiegów",
      "Zespoły kilku specjalistów, które chcą zastąpić rozproszone narzędzia",
      "Niezależne salony gotowe pożegnać papierowy zeszyt wizyt",
    ],
    problems: [
      { problem: "Umawianie wizyt przez wiadomości i papierowy kalendarz", solution: "Jeden kalendarz z rezerwacjami online i automatycznymi przypomnieniami." },
      { problem: "Historia klientów rozrzucona po różnych narzędziach", solution: "Cyfrowa kartoteka klientów z notatkami, zdjęciami i historią wizyt." },
      { problem: "Papierowe zgody na zabieg", solution: "Cyfrowy wywiad i zgoda wypełniane przed wizytą." },
      { problem: "Nieodwołane wizyty i luki w ostatniej chwili", solution: "Przypomnienia przez WhatsApp i e-mail, które ograniczają nieobecności." },
    ],
    features: [
      { icon: Link2, title: "Rezerwacje online", desc: "Własna strona rezerwacji, 24/7, bez prowizji." },
      { icon: Users, title: "Kartoteka klientów", desc: "Profile, historia i notatki w jednym miejscu." },
      { icon: ClipboardCheck, title: "Formularze zgód", desc: "Cyfrowy wywiad przed każdym zabiegiem." },
      { icon: FileText, title: "Notatki z zabiegów", desc: "Uporządkowana dokumentacja każdej wizyty, także z dyktowaniem głosowym." },
      { icon: Camera, title: "Dokumentacja zdjęciowa", desc: "Zdjęcia przed i po przypisane do klientów." },
      { icon: Bell, title: "Przypomnienia", desc: "WhatsApp i e-mail, aby ograniczyć nieobecności." },
    ],
    benefits: [
      "Mniej pracy administracyjnej przy rezerwacjach i dokumentacji",
      "Lepsze doświadczenie klienta od pierwszej rezerwacji",
      "Uporządkowana dokumentacja przy przekazywaniu klientów w zespole",
      "Nowoczesne, cyfrowe procesy w jednej aplikacji",
      "Hosting w UE, zaprojektowany z myślą o RODO",
    ],
    marketTitle: "Dlaczego salony wybierają Treatflow",
    marketParas: [
      "Ogólne narzędzia często kończą się na kalendarzu. Treatflow łączy rezerwacje z kartoteką klientów i dokumentacją zabiegów – tam, gdzie profesjonalne salony potrzebują porządku.",
    ],
    highlights: HIGHLIGHTS_CORE,
    aiSummary:
      "Treatflow to program do salonu kosmetycznego z rezerwacjami online, kartoteką klientów, formularzami zgód, notatkami z zabiegów, dokumentacją zdjęciową i przypomnieniami. Dla salonów kosmetycznych, day spa i gabinetów pielęgnacji skóry. Hosting w UE.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program do salonu kosmetycznego dla salonów i gabinetów medycyny estetycznej. Łączy kalendarz wizyt, rezerwacje online bez prowizji, cyfrową kartotekę klientów, formularze zgód, dokumentację zabiegów i przypomnienia. Stworzony w Austrii, hostowany w UE.",
      },
      {
        question: "Czy Treatflow to program do salonu kosmetycznego bez prowizji od rezerwacji?",
        answer:
          "Tak. Treatflow to program dla salonu, a nie marketplace. Dane klientów należą do Ciebie, a Ty płacisz przejrzysty miesięczny abonament od 39 €. Nie ma prowizji od rezerwacji.",
      },
      {
        question: "Czy cyfrowa kartoteka klientów jest zgodna z RODO?",
        answer:
          "Treatflow jest hostowany na serwerach w UE (Frankfurt), korzysta z szyfrowania SSL i codziennych kopii zapasowych. Kartoteka klientów, formularze i dokumentacja znajdują się w jednym systemie zaprojektowanym z myślą o RODO.",
      },
      FAQ_START,
      {
        question: "Czy salon kosmetyczny może wysyłać przypomnienia i ponownie umawiać klientów w Treatflow?",
        answer:
          "Tak. Automatyczne przypomnienia przez WhatsApp i e-mail są częścią pakietu Booking. Wiadomości po wizycie pomagają klientom zarezerwować kolejny termin na Twojej własnej stronie rezerwacji.",
      },
    ],
    siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    workflow: {
      title: "Jak salon kosmetyczny pracuje z Treatflow",
      subtitle: "Od pierwszej rezerwacji do kolejnej wizyty – cały salon w jednym systemie.",
      steps: [
        { href: "/en/online-booking", label: "Klient rezerwuje online", desc: "Klient korzysta z Twojego linku do rezerwacji. Wizyta pojawia się w kalendarzu salonu." },
        { href: "/en/forms", label: "Formularze przed wizytą", desc: "Wywiad lub zgodę można wysłać przed wizytą, więc recepcja nie zbiera papierów." },
        { href: "/en/client-records", label: "Otwórz profil klienta", desc: "Notatki, historia i wcześniej używane produkty są w jednej karcie." },
        { href: "/en/treatment-documentation", label: "Udokumentuj wizytę", desc: "Notatki z zabiegu, opcjonalne dyktowanie głosowe i zdjęcia zostają przy tej wizycie." },
        { href: "/en/messaging", label: "Przypomnij i umów ponownie", desc: "Automatyczne przypomnienia ograniczają nieobecności. Wiadomości po wizycie pomagają w kolejnej rezerwacji." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/hero-startseite-en.png",
        alt: "Treatflow na laptopie i tablecie w gabinecie: kalendarz i kartoteka klientów",
      },
      mockup: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Klientka rezerwuje wizytę w salonie na telefonie",
      },
    },
  }),

  "aesthetic-clinic-software": build("aesthetic-clinic-software", {
    serviceDescription:
      "Program dla gabinetu medycyny estetycznej: dokumentacja zabiegów, formularze zgód, kartoteka pacjentów i rezerwacje online.",
    eyebrow: "Program dla gabinetu medycyny estetycznej",
    h1: "Program dla gabinetu medycyny estetycznej z uporządkowaną dokumentacją",
    subtitle:
      "Formularze zgód, notatki z zabiegów, dokumentacja zdjęciowa i kartoteka pacjentów dla gabinetów medycyny estetycznej – jedna platforma od rezerwacji po wizytę kontrolną.",
    aiCapsules: [
      {
        question: "Jakiego programu potrzebuje gabinet medycyny estetycznej?",
        answer:
          "Gabinet medycyny estetycznej potrzebuje formularzy zgód, dokumentacji zabiegów, zdjęć i historii pacjenta w jednym systemie. Treatflow zapewnia rezerwacje online, cyfrową kartotekę i uporządkowane notatki z zabiegów – dla zabiegów iniekcyjnych, pielęgnacji skóry i medycyny estetycznej.",
      },
      {
        question: "Czy Treatflow sprawdzi się w medycynie estetycznej?",
        answer:
          "Tak. Treatflow powstał dla gabinetów, w których liczy się jakość dokumentacji i bezpieczeństwo pacjenta – a nie tylko liczba wizyt. Zgody, notatki i zdjęcia są powiązane z profilem każdego pacjenta.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla gabinetów medycyny estetycznej?",
    whatParas: [
      "Treatflow obsługuje całą ścieżkę pacjenta: rezerwację, wywiad, zgodę, dokumentację zabiegu i wizytę kontrolną – na jednej wspólnej platformie.",
      "Stworzony dla gabinetów, w których liczy się jakość dokumentacji i bezpieczeństwo pacjenta – a nie tylko liczba wizyt.",
    ],
    audiences: [
      "Gabinety medycyny estetycznej oferujące zabiegi iniekcyjne i odmładzanie skóry",
      "Praktyki medycyny estetycznej",
      "Gabinety kosmetologiczne pracujące według protokołów",
      "Gabinety z kilkoma specjalistami, które potrzebują spójnej dokumentacji",
    ],
    problems: [
      { problem: "Niespójne notatki z zabiegów", solution: "Uporządkowane szablony dokumentacji i wspólna kartoteka pacjentów." },
      { problem: "Brak zgody przed zabiegiem", solution: "Cyfrowe formularze zgód wypełniane przed zabiegiem." },
      { problem: "Zdjęcia na prywatnych telefonach", solution: "Dokumentacja zdjęciowa powiązana z profilem pacjenta." },
      { problem: "Recepcja i gabinety korzystają z różnych narzędzi", solution: "Jeden proces od rezerwacji po notatki i wizytę kontrolną." },
    ],
    features: [
      { icon: FileText, title: "Dokumentacja zabiegów", desc: "Notatki, dyktowanie głosowe, protokoły i historia." },
      { icon: ClipboardCheck, title: "Formularze zgód", desc: "Cyfrowe zgody z bezpiecznym przechowywaniem." },
      { icon: Camera, title: "Dokumentacja zdjęciowa", desc: "Zdjęcia kliniczne z każdej wizyty." },
      { icon: Users, title: "Kartoteka pacjentów", desc: "Pełna historia zabiegów estetycznych w jednym profilu." },
      { icon: Link2, title: "Rezerwacje online", desc: "Konsultacje rezerwowane online." },
      { icon: Workflow, title: "Cyfrowe procesy", desc: "Od wywiadu przez zabieg po wizytę kontrolną." },
    ],
    benefits: [
      "Spójna dokumentacja u wszystkich specjalistów",
      "Jasny ślad zgód przy każdym zabiegu",
      "Mniej administracji między recepcją a gabinetami",
      "Profesjonalna obsługa pacjenta od pierwszej rezerwacji",
      "Hosting w UE, zaprojektowany z myślą o RODO",
    ],
    marketTitle: "Dlaczego gabinety medycyny estetycznej wybierają Treatflow",
    marketParas: [
      "Za profesjonalną obsługą pacjentów musi stać rzetelna dokumentacja. Treatflow łączy rezerwacje z kartoteką i notatkami z zabiegów – bez zbędnej komplikacji.",
    ],
    highlights: HIGHLIGHTS_CORE,
    aiSummary:
      "Treatflow to program dla gabinetu medycyny estetycznej z dokumentacją zabiegów, formularzami zgód, kartoteką pacjentów, dokumentacją zdjęciową i rezerwacjami online. Dla gabinetów i klinik medycyny estetycznej. Hosting w UE.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program dla salonów kosmetycznych, gabinetów medycyny estetycznej i gabinetów depilacji laserowej. Łączy rezerwacje online, kartotekę klientów, formularze zgód, dokumentację zabiegów i przypomnienia.",
      },
      {
        question: "Czy Treatflow oferuje cyfrowe zgody na zabieg dla gabinetów medycyny estetycznej?",
        answer:
          "Tak. Pacjenci mogą wypełnić wywiad i zgodę na telefonie przed wizytą. Odpowiedzi i podpisy są zapisywane w karcie pacjenta, dzięki czemu gabinet ma jasny ślad dokumentacji przy zabiegach iniekcyjnych i innych zabiegach estetycznych.",
      },
      {
        question: "Czy kilku specjalistów może korzystać z jednego konta gabinetu?",
        answer:
          "Tak. Kartoteka pacjentów, formularze zgód i notatki z zabiegów są wspólne dla całego zespołu, więc dokumentacja pozostaje spójna.",
      },
      FAQ_START,
      {
        question: "Czy gabinet medycyny estetycznej może przechowywać zdjęcia przed i po?",
        answer:
          "Tak. Zestawy zdjęć są przypisane do wizyty i zostają w karcie pacjenta, dzięki czemu kolejny specjalista może porównać postępy.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
    featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    workflow: {
      title: "Jak gabinet medycyny estetycznej pracuje z Treatflow",
      subtitle: "Uporządkowana historia, zgody, dokumentacja i wizyty kontrolne dla całego zespołu.",
      steps: [
        { href: "/en/online-booking", label: "Rezerwacja konsultacji", desc: "Pacjent rezerwuje konsultację lub zabieg na stronie rezerwacji Twojego gabinetu." },
        { href: "/en/forms", label: "Wywiad i zgoda", desc: "Cyfrowy wywiad i zgoda są wypełniane przed zabiegiem i zapisywane w karcie." },
        { href: "/en/client-records", label: "Uporządkowana historia pacjenta", desc: "Wcześniejsze zabiegi, notatki i przeciwwskazania widzi każdy specjalista." },
        { href: "/en/treatment-documentation", label: "Dokumentacja i zdjęcia", desc: "Notatki z sesji, opcjonalne dyktowanie głosowe i zdjęcia przed i po zostają przy wizycie." },
        { href: "/en/messaging", label: "Wizyta kontrolna", desc: "Przypomnienia i zalecenia pozabiegowe utrzymują kolejną wizytę w kalendarzu." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Cyfrowa zgoda na zabieg wypełniana na tablecie w gabinecie medycyny estetycznej",
      },
      mockup: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Zdjęcia przed i po zabiegu zapisane w Treatflow",
      },
    },
  }),

  "laser-hair-removal-software": build("laser-hair-removal-software", {
    serviceDescription:
      "Program do depilacji laserowej: śledzenie serii zabiegów, formularze zgód, dokumentacja zdjęciowa i rezerwacje online.",
    eyebrow: "Program do depilacji laserowej",
    h1: "Program do depilacji laserowej dla serii zabiegów",
    subtitle:
      "Śledź kolejne sesje, dokumentuj zgody i zarządzaj rezerwacjami – stworzony dla gabinetów depilacji laserowej i IPL, które potrzebują uporządkowanej dokumentacji.",
    aiCapsules: [
      {
        question: "Jakiego programu potrzebuje gabinet depilacji laserowej?",
        answer:
          "Gabinet depilacji laserowej potrzebuje kartoteki klientów z historią serii zabiegów, formularzy zgód, notatek z sesji, dokumentacji zdjęciowej i przypomnień o wizytach. Treatflow zapewnia rezerwacje online i uporządkowaną dokumentację dla gabinetów depilacji laserowej.",
      },
      {
        question: "Czy Treatflow śledzi pakiety wielu sesji?",
        answer:
          "Tak. Każda sesja jest dokumentowana w karcie klienta, więc zawsze widzisz postępy, notatki o ustawieniach i termin kolejnej wizyty.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla gabinetów depilacji laserowej?",
    whatParas: [
      "Depilacja laserowa to seria kilku sesji. Treatflow śledzi każdą sesję, przechowuje zgody i informacje o fototypie skóry oraz przypomina klientom o kolejnej wizycie.",
      "Gabinety korzystają z jednego kalendarza rezerwacji, jednego profilu klienta z historią i cyfrowych formularzy wywiadu – bez prowizji marketplace’ów.",
    ],
    audiences: [
      "Gabinety depilacji laserowej",
      "Gabinety IPL z pakietami wielu sesji",
      "Gabinety kosmetyczne oferujące zabiegi laserowe",
      "Zespoły z dużą liczbą rezerwacji i wymaganiami dokumentacyjnymi",
    ],
    problems: [
      { problem: "Brak kontroli nad postępami serii", solution: "Historia zabiegów i notatki z każdej sesji w karcie klienta." },
      { problem: "Brakujące informacje w zgodach", solution: "Cyfrowy wywiad i zgoda zapisane przed każdą serią." },
      { problem: "Klienci zapominają o kolejnych sesjach", solution: "Przypomnienia i łatwa ponowna rezerwacja na Twojej stronie." },
      { problem: "Zdjęcia i notatki na różnych urządzeniach", solution: "Dokumentacja zdjęciowa powiązana z profilem klienta." },
    ],
    features: [
      { icon: Zap, title: "Śledzenie sesji", desc: "Dokumentuj każdą sesję notatkami, także z dyktowaniem głosowym." },
      { icon: ClipboardCheck, title: "Zgoda i wywiad", desc: "Fototyp skóry i przeciwwskazania zawsze w karcie." },
      { icon: Camera, title: "Dokumentacja zdjęciowa", desc: "Zdjęcia postępów dla każdej okolicy ciała." },
      { icon: Calendar, title: "Planowanie serii", desc: "Planuj kolejne wizyty w serii." },
      { icon: Link2, title: "Rezerwacje online", desc: "Klienci rezerwują kolejne sesje online." },
      { icon: Bell, title: "Przypomnienia", desc: "Automatyczne przypomnienia o wizytach." },
    ],
    benefits: [
      "Jasny podgląd serii zabiegów każdego klienta",
      "Uporządkowana zgoda od każdego nowego klienta",
      "Mniej ręcznego pilnowania opuszczonych sesji",
      "Profesjonalna dokumentacja spójna w całym zespole",
      "Hosting w UE, zaprojektowany z myślą o RODO",
    ],
    marketTitle: "Dlaczego gabinety depilacji laserowej wybierają Treatflow",
    marketParas: [
      "Gabinety laserowe łączą dużą liczbę rezerwacji z wymaganiami dokumentacyjnymi. Treatflow łączy rezerwacje z kartoteką, więc każda sesja buduje przydatną historię klienta.",
    ],
    highlights: [
      "Rezerwacje online bez prowizji od wizyty",
      "Historia sesji w cyfrowej kartotece klientów",
      "Formularze zgód przed serią zabiegów",
      "Dokumentacja zdjęciowa i przypomnienia",
      "Hosting w UE, zaprojektowany z myślą o RODO",
    ],
    aiSummary:
      "Treatflow to program do depilacji laserowej ze śledzeniem sesji, formularzami zgód, dokumentacją zdjęciową, rezerwacjami online i przypomnieniami. Dla gabinetów laserowych i IPL. Hosting w UE.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program dla salonów kosmetycznych, gabinetów medycyny estetycznej i gabinetów depilacji laserowej. Łączy rezerwacje online, kartotekę klientów, formularze zgód, dokumentację zabiegów i przypomnienia.",
      },
      {
        question: "Czy gabinety depilacji laserowej mogą dokumentować zabiegi w Treatflow?",
        answer:
          "Tak. Dokumentacja zabiegu obejmuje parametry, notatki oraz zdjęcia przed i po dla każdej sesji.",
      },
      {
        question: "Dla kogo jest ta strona?",
        answer:
          "Dla gabinetów depilacji laserowej i IPL, które potrzebują śledzenia sesji, zgód i niezawodnych ponownych rezerwacji.",
      },
      FAQ_START,
      {
        question: "Czy Treatflow zapisuje okolice zabiegowe i notatki z sesji laserowych?",
        answer:
          "Tak. Każda sesja może zawierać parametry, okolice zabiegowe, notatki i zdjęcia w karcie klienta. Notatki możesz wpisywać lub dyktować głosowo. Kolejna wizyta w serii zaczyna się z pełną historią.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    workflow: {
      title: "Jak gabinet depilacji laserowej pracuje z Treatflow",
      subtitle: "Każda sesja opiera się na poprzedniej: zgoda, okolice zabiegowe, notatki, zdjęcia i kolejna rezerwacja.",
      steps: [
        { href: "/en/online-booking", label: "Klient rezerwuje sesję", desc: "Nowi i stali klienci rezerwują przez Twój własny link – także kolejne terminy w serii." },
        { href: "/en/forms", label: "Wywiad i zgoda", desc: "Wywiad i zgoda są wypełniane przed pierwszą sesją i zapisywane w karcie." },
        { href: "/en/client-records", label: "Sprawdź historię klienta", desc: "Notatki o fototypie, wcześniejsze ustawienia i okolice zabiegowe w jednym profilu." },
        { href: "/en/treatment-documentation", label: "Udokumentuj sesję", desc: "Parametry, okolice zabiegowe, notatki (wpisane lub podyktowane) i zdjęcia zostają przy wizycie." },
        { href: "/en/messaging", label: "Prowadź serię dalej", desc: "Przypomnienia sprowadzają klienta na kolejną wizytę w serii." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Dokumentacja depilacji laserowej ze zdjęciami przed i po",
      },
      mockup: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Cyfrowa zgoda przed wizytą na depilację laserową",
      },
    },
  }),

  "permanent-makeup-software": build("permanent-makeup-software", {
    serviceDescription:
      "Program do makijażu permanentnego: formularze zgód, notatki o pigmentach, dokumentacja zdjęciowa, kartoteka klientów i rezerwacje online.",
    eyebrow: "Program do makijażu permanentnego",
    h1: "Program do makijażu permanentnego dla linergistek",
    subtitle:
      "Zgody, dokumentacja pigmentów, planowanie korekt i kartoteka klientów – stworzony dla studiów makijażu permanentnego, które potrzebują precyzyjnej historii.",
    aiCapsules: [
      {
        question: "Jakiego programu potrzebuje studio makijażu permanentnego?",
        answer:
          "Studio makijażu permanentnego potrzebuje szczegółowych zgód, notatek o pigmentach i technikach, zdjęć przed i po, planowania korekt oraz historii klienta. Treatflow łączy rezerwacje, formularze i dokumentację – z hostingiem w UE zgodnym z RODO.",
      },
      {
        question: "Czy mogę dokumentować pigmenty i korekty?",
        answer:
          "Tak. Notatki z zabiegów i zdjęcia zostają w profilu klienta, więc każda korekta opiera się na poprzedniej sesji.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla makijażu permanentnego?",
    whatParas: [
      "Makijaż permanentny wymaga precyzyjnej dokumentacji: pigmentów, okolic, technik i notatek z gojenia. Treatflow przechowuje tę historię w karcie klienta razem ze zgodami i zdjęciami.",
      "Linergistki korzystają z rezerwacji online na konsultacje i korekty, cyfrowych formularzy przed zabiegiem oraz przypomnień, dzięki którym klientki wracają na czas.",
    ],
    audiences: [
      "Linergistki i specjalistki microbladingu",
      "Studia makijażu permanentnego z kilkoma stanowiskami",
      "Salony kosmetyczne oferujące makijaż permanentny brwi, ust i kresek",
      "Zespoły dokumentujące pigmenty i cykle korekt",
    ],
    problems: [
      { problem: "Szczegóły pigmentów giną między sesjami", solution: "Uporządkowane notatki z zabiegów w każdym profilu klienta." },
      { problem: "Papierowe zgody przed zabiegiem", solution: "Cyfrowa zgoda wypełniana przed wizytą." },
      { problem: "Terminy korekt zapisywane w zeszycie", solution: "Kalendarz, przypomnienia i rezerwacje online w jednym miejscu." },
      { problem: "Trudno odnaleźć zdjęcia przed i po", solution: "Zdjęcia powiązane z kartą klienta i wizytą." },
    ],
    features: [
      { icon: FileText, title: "Notatki o pigmentach i technikach", desc: "Dokumentuj kolory, igły i okolice zabiegowe." },
      { icon: ClipboardCheck, title: "Formularze zgód", desc: "Cyfrowa zgoda przed każdym zabiegiem." },
      { icon: Camera, title: "Dokumentacja zdjęciowa", desc: "Zdjęcia przed i po w profilu klienta." },
      { icon: Calendar, title: "Planowanie korekt", desc: "Planuj kontrole gojenia i korekty." },
      { icon: Users, title: "Kartoteka klientów", desc: "Pełna historia makijażu permanentnego w jednym miejscu." },
      { icon: Bell, title: "Przypomnienia", desc: "Mniej opuszczonych wizyt korygujących." },
    ],
    benefits: [
      "Precyzyjna historia dla bezpieczniejszych korekt",
      "Profesjonalny ślad zgód dla każdej klientki",
      "Mniej administracji między konsultacją a zabiegiem",
      "Przejrzysta dokumentacja zdjęciowa do portfolio i kolejnych wizyt",
      "Hosting w UE zgodny z RODO",
    ],
    marketTitle: "Dlaczego studia makijażu permanentnego wybierają Treatflow",
    marketParas: [
      "Makijaż permanentny to praca, w której liczy się każdy szczegół. Treatflow łączy rezerwacje ze zgodami, notatkami i zdjęciami, więc każda wizyta jest udokumentowana bez dodatkowych narzędzi.",
    ],
    highlights: [
      "Rezerwacje online bez prowizji",
      "Formularze zgód przed zabiegiem",
      "Dokumentacja pigmentów i technik",
      "Historia zdjęć powiązana z klientami",
      "Hosting w UE zgodny z RODO",
    ],
    aiSummary:
      "Treatflow to program do makijażu permanentnego z formularzami zgód, notatkami o pigmentach, dokumentacją zdjęciową, kartoteką klientów, rezerwacjami online i przypomnieniami. Dla studiów makijażu permanentnego i microbladingu. Zgodny z RODO.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program dla salonów z rezerwacjami online, kartoteką klientów, formularzami zgód, dokumentacją zabiegów i przypomnieniami – idealny dla studiów makijażu permanentnego.",
      },
      {
        question: "Czy sprawdzi się przy microbladingu?",
        answer:
          "Tak. Możesz dokumentować techniki, pigmenty, zdjęcia i terminy korekt dla brwi, ust i kresek.",
      },
      FAQ_START,
      FAQ_HOSTING,
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
    featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
  }),

  "tattoo-studio-software": build("tattoo-studio-software", {
    serviceDescription:
      "Program dla studia tatuażu: formularze zgód, kartoteka klientów, rezerwacje wizyt, notatki z sesji i przypomnienia.",
    eyebrow: "Program dla studia tatuażu",
    h1: "Program dla studia tatuażu – nowoczesna organizacja pracy",
    subtitle:
      "Cyfrowe zgody, kartoteka klientów, notatki z sesji i rezerwacje online – stworzony dla studiów tatuażu, które chcą mniej papierów i bardziej przejrzysty grafik.",
    aiCapsules: [
      {
        question: "Jakiego programu potrzebuje studio tatuażu?",
        answer:
          "Studio tatuażu potrzebuje cyfrowych zgód i oświadczeń, kartoteki klientów, notatek z sesji, zdjęć referencyjnych oraz niezawodnych rezerwacji z przypomnieniami. Treatflow łączy to wszystko na jednej platformie zgodnej z RODO, z hostingiem w UE.",
      },
      {
        question: "Czy Treatflow zastępuje papierowe oświadczenia?",
        answer:
          "Tak. Klienci mogą wypełnić cyfrową zgodę przed wizytą, więc zespół zaczyna sesję z załatwionymi formalnościami.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla studiów tatuażu?",
    whatParas: [
      "Treatflow pomaga studiom tatuażu przenieść zgody, rezerwacje i historię klientów do jednego systemu. Tatuatorzy widzą notatki i zdjęcia w profilu klienta, a recepcja zarządza kalendarzem.",
      "Rezerwacje online i przypomnienia ograniczają nieobecności, a cyfrowe formularze eliminują stosy papierów przed każdą sesją.",
    ],
    audiences: [
      "Studia tatuażu i prywatne studia",
      "Studia z kilkoma tatuatorami i wspólnym kalendarzem",
      "Studia oferujące tatuaże i wizyty kontrolne po gojeniu",
      "Zespoły, które chcą zastąpić papierowe oświadczenia i zeszyty",
    ],
    problems: [
      { problem: "Papierowe oświadczenia i segregatory", solution: "Cyfrowa zgoda bezpiecznie zapisana w karcie klienta." },
      { problem: "Podwójne rezerwacje u różnych tatuatorów", solution: "Wspólny kalendarz z przejrzystą dostępnością." },
      { problem: "Notatki z sesji w telefonach i na kartkach", solution: "Notatki i zdjęcia powiązane z każdym klientem." },
      { problem: "Klienci zapominają o zaliczce lub terminie", solution: "Przypomnienia przez WhatsApp i e-mail." },
    ],
    features: [
      { icon: ClipboardCheck, title: "Zgody i oświadczenia", desc: "Cyfrowe formularze przed każdą sesją." },
      { icon: Users, title: "Kartoteka klientów", desc: "Historia, notatki i kontakty w jednym profilu." },
      { icon: FileText, title: "Notatki z sesji", desc: "Dokumentuj pracę, pielęgnację i kolejne kroki." },
      { icon: Camera, title: "Zdjęcia referencyjne", desc: "Przechowuj referencje i zdjęcia postępów." },
      { icon: Link2, title: "Rezerwacje online", desc: "Klienci rezerwują wolne terminy lub wysyłają zapytania." },
      { icon: Calendar, title: "Kalendarz studia", desc: "Koordynuj tatuatorów i stanowiska." },
    ],
    benefits: [
      "Mniej papierów przed każdą sesją",
      "Przejrzysty grafik wszystkich tatuatorów",
      "Historia klienta gotowa na poprawki i cover-upy",
      "Mniej opuszczonych wizyt dzięki przypomnieniom",
      "Hosting w UE zgodny z RODO",
    ],
    marketTitle: "Dlaczego studia tatuażu wybierają Treatflow",
    marketParas: [
      "Studia tatuażu potrzebują zgód i grafiku tak samo jak narzędzi kreatywnych. Treatflow skupia się na organizacji studia – rezerwacjach, formularzach i kartotece – bez prowizji marketplace’ów.",
    ],
    highlights: [
      "Cyfrowe zgody przed sesjami",
      "Wspólny kalendarz dla kilku tatuatorów",
      "Kartoteka klientów z notatkami i zdjęciami",
      "Przypomnienia ograniczające nieobecności",
      "Hosting w UE zgodny z RODO",
    ],
    aiSummary:
      "Treatflow to program dla studia tatuażu z cyfrowymi zgodami, kartoteką klientów, notatkami z sesji, dokumentacją zdjęciową, rezerwacjami online i przypomnieniami. Dla studiów tatuażu, także z kilkoma tatuatorami. Zgodny z RODO.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to program do zarządzania studiem z rezerwacjami online, kartoteką klientów, formularzami zgód, dokumentacją i przypomnieniami – idealny dla studiów tatuażu.",
      },
      {
        question: "Czy kilku tatuatorów może pracować w jednym studiu?",
        answer:
          "Tak. Wspólny kalendarz i kartoteka klientów pomagają studiom z kilkoma tatuatorami zachować porządek.",
      },
      FAQ_START,
      FAQ_HOSTING,
    ],
    siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["forms", "online-booking", "client-records", "pricing"],
  }),

  "nail-salon-software": build("nail-salon-software", {
    serviceDescription:
      "Program dla salonu paznokci: rezerwacje online, kartoteka klientek, przypomnienia o wizytach i notatki z zabiegów.",
    eyebrow: "Program dla salonu paznokci",
    h1: "Program dla salonu paznokci i stylizacji paznokci",
    subtitle:
      "Rezerwacje online, preferencje klientek, przypomnienia i przejrzysty grafik – stworzony dla salonów paznokci z dużą liczbą wizyt.",
    aiCapsules: [
      {
        question: "Jaki program wybrać do salonu paznokci?",
        answer:
          "Salon paznokci zyskuje na rezerwacjach online bez prowizji, przejrzystym kalendarzu zespołu, notatkach o preferencjach klientek i automatycznych przypomnieniach. Treatflow zapewnia to wszystko z hostingiem w UE zgodnym z RODO.",
      },
      {
        question: "Czy klientki mogą rezerwować uzupełnienia online?",
        answer:
          "Tak. Klientki rezerwują usługi na Twojej własnej stronie rezerwacji przez całą dobę – bez opłat dla marketplace’ów.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla salonów paznokci?",
    whatParas: [
      "Salony paznokci żyją ze stałych klientek. Treatflow utrzymuje porządek w kalendarzu, przechowuje preferencje klientek i wysyła przypomnienia, aby uzupełnienia i nowe stylizacje odbywały się na czas.",
      "Cyfrowa kartoteka klientek pomaga zespołowi pamiętać o kształtach, kolorach i alergiach – bez szukania w czatach i zeszytach.",
    ],
    audiences: [
      "Salony paznokci i nail bary",
      "Gabinety manicure i pedicure",
      "Zespoły kilku stylistek ze wspólnym kalendarzem",
      "Salony, które chcą przestać umawiać wizyty przez wiadomości na Instagramie",
    ],
    problems: [
      { problem: "Rezerwacje rozproszone po wiadomościach i telefonach", solution: "Jedna strona rezerwacji online i wspólny kalendarz." },
      { problem: "Zapomniane preferencje klientek", solution: "Notatki o kolorze, kształcie i alergiach w karcie klientki." },
      { problem: "Częste nieobecności na uzupełnieniach", solution: "Automatyczne przypomnienia przez WhatsApp i e-mail." },
      { problem: "Trudne przekazywanie klientek między stylistkami", solution: "Wspólna historia każdej klientki." },
    ],
    features: [
      { icon: Link2, title: "Rezerwacje online", desc: "Strona rezerwacji 24/7 bez prowizji." },
      { icon: Calendar, title: "Kalendarz zespołu", desc: "Koordynuj stylistki i stanowiska." },
      { icon: Users, title: "Kartoteka klientek", desc: "Preferencje, historia i notatki." },
      { icon: Bell, title: "Przypomnienia", desc: "Mniej opuszczonych uzupełnień i pustych terminów." },
      { icon: ClipboardCheck, title: "Formularze wywiadu", desc: "Cyfrowo zbieraj informacje o alergiach i preferencjach." },
      { icon: FileText, title: "Notatki z wizyt", desc: "Dokumentuj usługi i użyte produkty." },
    ],
    benefits: [
      "Mniej wiadomości w sprawie rezerwacji",
      "Spokojniejsze dni dzięki przejrzystemu kalendarzowi zespołu",
      "Klientki czują się zapamiętane dzięki notatkom o preferencjach",
      "Mniej nieobecności dzięki przypomnieniom",
      "Hosting w UE zgodny z RODO",
    ],
    marketTitle: "Dlaczego salony paznokci wybierają Treatflow",
    marketParas: [
      "Salony paznokci z dużą liczbą wizyt bardziej niż skomplikowanych modułów medycznych potrzebują rezerwacji i dobrej pamięci o klientkach. Treatflow upraszcza codzienną pracę, a gdy trzeba, oferuje też formularze i dokumentację.",
    ],
    highlights: [
      "Rezerwacje online bez prowizji",
      "Wspólny kalendarz dla stylistek",
      "Historia preferencji klientek",
      "Automatyczne przypomnienia",
      "Hosting w UE zgodny z RODO",
    ],
    aiSummary:
      "Treatflow to program dla salonu paznokci z rezerwacjami online, kartoteką klientek, notatkami o preferencjach, przypomnieniami i cyfrowymi formularzami. Dla salonów paznokci i nail barów z kilkoma stylistkami. Zgodny z RODO.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program dla salonów z rezerwacjami online, kartoteką klientów, formularzami, dokumentacją i przypomnieniami – idealny dla salonów paznokci.",
      },
      {
        question: "Czy Treatflow pobiera opłatę za rezerwację?",
        answer: "Nie. Nie ma żadnej prowizji od wizyty.",
      },
      FAQ_START,
      FAQ_HOSTING,
    ],
    siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  }),

  "lash-studio-software": build("lash-studio-software", {
    serviceDescription:
      "Program do stylizacji rzęs: planowanie uzupełnień, kartoteka klientek, formularze zgód, dokumentacja zdjęciowa i rezerwacje online.",
    eyebrow: "Program do stylizacji rzęs",
    h1: "Program do stylizacji rzęs – przedłużanie i uzupełnienia",
    subtitle:
      "Planuj uzupełnienia, zapisuj mapy rzęs i zgody, wysyłaj przypomnienia i przechowuj zdjęcia klientek – stworzony dla studiów stylizacji rzęs, które żyją ze stałych klientek.",
    aiCapsules: [
      {
        question: "Jakiego programu potrzebuje studio stylizacji rzęs?",
        answer:
          "Studio stylizacji rzęs potrzebuje planowania uzupełnień, notatek o preferencjach i mapowaniu, formularzy zgód, zdjęć postępów i przypomnień. Treatflow łączy rezerwacje, kartotekę i formularze z hostingiem w UE zgodnym z RODO.",
      },
      {
        question: "Czy mogę śledzić odstępy między uzupełnieniami każdej klientki?",
        answer:
          "Tak. Historia wizyt i notatki zostają w profilu klientki, więc wiesz, kiedy wypada kolejne uzupełnienie i co było aplikowane ostatnio.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla stylizacji rzęs?",
    whatParas: [
      "Studia rzęs żyją z uzupełnień. Treatflow pomaga zapełniać kalendarz, dokumentuje skręt, długość i mapowanie oraz przypomina klientkom o kolejnej wizycie.",
      "Cyfrowe zgody i dokumentacja zdjęciowa wspierają profesjonalne standardy, nie zabierając czasu przy stanowisku.",
    ],
    audiences: [
      "Studia przedłużania rzęs",
      "Salony kosmetyczne z własnymi stylistkami rzęs",
      "Stylistki rzęs pracujące samodzielnie i zarządzające własnymi rezerwacjami",
      "Zespoły koordynujące uzupełnienia na kilku stanowiskach",
    ],
    problems: [
      { problem: "Terminy uzupełnień w arkuszach kalkulacyjnych", solution: "Historia klientek i przypomnienia w jednym systemie." },
      { problem: "Zapomniane preferencje mapowania", solution: "Notatki i zdjęcia w każdym profilu klientki." },
      { problem: "Zgody wciąż na papierze", solution: "Cyfrowe formularze wypełniane przed wizytą." },
      { problem: "Skrzynka zalana prośbami o termin", solution: "Strona rezerwacji online bez prowizji." },
    ],
    features: [
      { icon: Calendar, title: "Planowanie uzupełnień", desc: "Planuj nowe aplikacje i uzupełnienia z przejrzystą dostępnością." },
      { icon: Users, title: "Notatki o klientce i rzęsach", desc: "Skręt, długość, mapowanie i klej zawsze w karcie." },
      { icon: ClipboardCheck, title: "Formularze zgód", desc: "Cyfrowy wywiad przed każdą nową aplikacją." },
      { icon: Camera, title: "Zdjęcia postępów", desc: "Dokumentuj efekty każdej wizyty." },
      { icon: Link2, title: "Rezerwacje online", desc: "Klientki rezerwują uzupełnienia 24/7." },
      { icon: Bell, title: "Przypomnienia o uzupełnieniach", desc: "Utrzymuj stałe klientki dzięki automatycznym przypomnieniom." },
    ],
    benefits: [
      "Więcej regularnych uzupełnień dzięki przypomnieniom na czas",
      "Powtarzalne efekty dzięki udokumentowanym preferencjom",
      "Mniej administracji przy stanowisku",
      "Profesjonalna dokumentacja zgód i zdjęć",
      "Hosting w UE zgodny z RODO",
    ],
    marketTitle: "Dlaczego studia stylizacji rzęs wybierają Treatflow",
    marketParas: [
      "Studia rzęs potrzebują narzędzi do utrzymania klientek tak samo jak narzędzi do rezerwacji. Treatflow łączy wizyty z notatkami o klientkach i przypomnieniami, więc uzupełnienia są przewidywalne.",
    ],
    highlights: [
      "Rezerwacje online bez prowizji",
      "Notatki o preferencjach i mapowaniu rzęs",
      "Formularze zgód przed nowymi aplikacjami",
      "Przypomnienia o uzupełnieniach i historia zdjęć",
      "Hosting w UE zgodny z RODO",
    ],
    aiSummary:
      "Treatflow to program do stylizacji rzęs z planowaniem uzupełnień, notatkami o klientkach, formularzami zgód, dokumentacją zdjęciową, rezerwacjami online i przypomnieniami. Dla studiów przedłużania rzęs. Zgodny z RODO.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program dla salonów z rezerwacjami online, kartoteką klientów, formularzami zgód, dokumentacją i przypomnieniami – idealny dla studiów stylizacji rzęs.",
      },
      {
        question: "Czy sprawdzi się u stylistki pracującej samodzielnie?",
        answer:
          "Tak. Stylistki pracujące samodzielnie korzystają z Treatflow do rezerwacji, przypomnień i historii klientek – bez prowizji marketplace’ów.",
      },
      FAQ_START,
      FAQ_HOSTING,
    ],
    siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  }),

  "spa-wellness-software": build("spa-wellness-software", {
    serviceDescription:
      "Program dla spa i wellness: rezerwacje online, kartoteka gości, notatki z zabiegów, formularze zgód i przypomnienia.",
    eyebrow: "Program dla spa i wellness",
    h1: "Program dla spa i wellness – spokojna organizacja pracy",
    subtitle:
      "Koordynuj gabinety, terapeutów i pakiety dzięki rezerwacjom online, historii gości i cyfrowym formularzom – bez prowizji marketplace’ów.",
    aiCapsules: [
      {
        question: "Jakiego programu potrzebuje spa?",
        answer:
          "Spa potrzebuje planowania wielu zasobów, rezerwacji online, preferencji gości, notatek z zabiegów i przypomnień. Treatflow wspiera spa i obiekty wellness z hostingiem w UE zgodnym z RODO.",
      },
      {
        question: "Czy Treatflow obsłuży pakiety i powracających gości?",
        answer:
          "Tak. Historia gości i przypomnienia pomagają zarządzać seriami zabiegów i stałymi gośćmi.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla spa i wellness?",
    whatParas: [
      "Spa łączy atmosferę z organizacją. Treatflow porządkuje rezerwacje, przechowuje preferencje gości i dokumentuje zabiegi, aby doświadczenie gościa było płynne.",
      "Cyfrowy wywiad i przypomnienia odciążają recepcję, a terapeuci mają dostęp do potrzebnych notatek.",
    ],
    audiences: [
      "Day spa i studia wellness",
      "Spa hotelowe i butikowe",
      "Centra wellness z kilkoma terapeutami",
      "Studia łączące masaże, zabiegi na twarz i ciało",
    ],
    problems: [
      { problem: "Konflikty gabinetów i terapeutów", solution: "Wspólny kalendarz z przejrzystym planowaniem zasobów." },
      { problem: "Preferencje gości giną między wizytami", solution: "Kartoteka gości z notatkami i historią." },
      { problem: "Papierowe ankiety w recepcji", solution: "Cyfrowe formularze wypełniane przed przyjazdem." },
      { problem: "Nieobecności na dłuższych zabiegach", solution: "Automatyczne przypomnienia przed wizytą." },
    ],
    features: [
      { icon: Calendar, title: "Kalendarz spa", desc: "Koordynuj gabinety, terapeutów i usługi." },
      { icon: Link2, title: "Rezerwacje online", desc: "Goście rezerwują zabiegi 24/7 bez prowizji." },
      { icon: Users, title: "Profile gości", desc: "Preferencje, historia i notatki w jednym miejscu." },
      { icon: ClipboardCheck, title: "Formularze wywiadu", desc: "Ankiety zdrowotne i zgody przed wizytą." },
      { icon: FileText, title: "Notatki z zabiegów", desc: "Dokumentuj usługi dla spójnej opieki." },
      { icon: Bell, title: "Przypomnienia", desc: "Mniej nieobecności na dłuższych wizytach." },
    ],
    benefits: [
      "Płynniejsza współpraca recepcji i gabinetów",
      "Goście czują się rozpoznawani dzięki historii preferencji",
      "Mniej papierów w recepcji",
      "Więcej zrealizowanych wizyt dzięki przypomnieniom",
      "Hosting w UE zgodny z RODO",
    ],
    marketTitle: "Dlaczego spa wybierają Treatflow",
    marketParas: [
      "Program dla spa powinien chronić doświadczenie gościa, a nie je komplikować. Treatflow łączy rezerwacje z kartoteką i formularzami, aby praca przebiegała spokojnie i profesjonalnie.",
    ],
    highlights: [
      "Rezerwacje online bez prowizji",
      "Wspólny kalendarz gabinetów i terapeutów",
      "Historia preferencji gości",
      "Cyfrowy wywiad i notatki z zabiegów",
      "Hosting w UE zgodny z RODO",
    ],
    aiSummary:
      "Treatflow to program dla spa i wellness z rezerwacjami online, kartoteką gości, formularzami wywiadu, notatkami z zabiegów i przypomnieniami. Dla day spa i centrów wellness. Zgodny z RODO.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program dla salonów kosmetycznych, spa i studiów wellness z rezerwacjami online, kartoteką klientów, formularzami, dokumentacją i przypomnieniami.",
      },
      {
        question: "Czy sprawdzi się w day spa?",
        answer:
          "Tak. Day spa korzystają z Treatflow do koordynowania rezerwacji, historii gości i cyfrowego wywiadu.",
      },
      FAQ_START,
      FAQ_HOSTING,
    ],
    siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
  }),

  "massage-software": build("massage-software", {
    serviceDescription:
      "Program dla gabinetu masażu: rezerwacje online, kartoteka klientów, formularze wywiadu, notatki z sesji i przypomnienia.",
    eyebrow: "Program dla gabinetu masażu",
    h1: "Program dla gabinetu masażu i masażystów",
    subtitle:
      "Rezerwacje online, formularze wywiadu, notatki z sesji i przypomnienia – stworzony dla masażystów i gabinetów z kilkoma salami.",
    aiCapsules: [
      {
        question: "Jakiego programu potrzebuje masażysta?",
        answer:
          "Masażysta potrzebuje prostych rezerwacji online, formularzy wywiadu i zgody, notatek z sesji, historii klienta i przypomnień. Treatflow zapewnia to wszystko z hostingiem w UE zgodnym z RODO i bez prowizji od rezerwacji.",
      },
      {
        question: "Czy Treatflow sprawdzi się u masażysty pracującego samodzielnie?",
        answer:
          "Tak. Masażyści pracujący samodzielnie korzystają z Treatflow do zarządzania kalendarzem, kartoteką klientów i przypomnieniami – bez opłat dla marketplace’ów.",
      },
    ],
    whatTitle: "Czym jest Treatflow dla gabinetów masażu?",
    whatParas: [
      "Treatflow pomaga masażystom poświęcać mniej czasu na administrację, a więcej na klientów. Rezerwacje, wywiad i notatki z sesji są w jednym miejscu.",
      "Gabinety z kilkoma salami koordynują dostępność, a historia każdego klienta pozostaje poufna i dostępna dla prowadzącego terapeuty.",
    ],
    audiences: [
      "Niezależni masażyści",
      "Gabinety masażu z kilkoma salami",
      "Centra wellness oferujące masaże lecznicze i relaksacyjne",
      "Zespoły, które chcą zastąpić papierowy wywiad i rezerwacje telefoniczne",
    ],
    problems: [
      { problem: "Rezerwacje tylko przez telefon i nieodebrane połączenia", solution: "Strona rezerwacji online dostępna 24/7." },
      { problem: "Papierowe formularze wywiadu", solution: "Cyfrowe ankiety zdrowotne i zgody przed sesją." },
      { problem: "Trudno odnaleźć notatki z sesji", solution: "Notatki zapisane w profilu klienta." },
      { problem: "Klienci zapominają o wizytach", solution: "Automatyczne przypomnienia przez WhatsApp i e-mail." },
    ],
    features: [
      { icon: Link2, title: "Rezerwacje online", desc: "Klienci rezerwują masaże bez prowizji." },
      { icon: ClipboardCheck, title: "Formularze wywiadu", desc: "Wywiad zdrowotny i zgoda w formie cyfrowej." },
      { icon: FileText, title: "Notatki z sesji", desc: "Dokumentuj obszary pracy i postępy." },
      { icon: Users, title: "Kartoteka klientów", desc: "Pełna historia stałych klientów." },
      { icon: Calendar, title: "Kalendarz gabinetu", desc: "Koordynuj terapeutów i sale." },
      { icon: Bell, title: "Przypomnienia", desc: "Mniej nieodwołanych wizyt." },
    ],
    benefits: [
      "Mniej administracji między sesjami",
      "Bezpieczniejszy wywiad dzięki cyfrowym formularzom",
      "Lepsza ciągłość terapii dzięki notatkom",
      "Mniej opuszczonych wizyt",
      "Hosting w UE zgodny z RODO",
    ],
    marketTitle: "Dlaczego masażyści wybierają Treatflow",
    marketParas: [
      "Gabinety masażu bardziej niż rozbudowanych systemów potrzebują niezawodnych rezerwacji i przejrzystej dokumentacji. Treatflow skupia się na wizytach, formularzach i notatkach.",
    ],
    highlights: [
      "Rezerwacje online bez prowizji",
      "Cyfrowy wywiad i zgoda",
      "Notatki z sesji w karcie klienta",
      "Przypomnienia dla stałych klientów",
      "Hosting w UE zgodny z RODO",
    ],
    aiSummary:
      "Treatflow to program dla gabinetu masażu z rezerwacjami online, formularzami wywiadu, notatkami z sesji, kartoteką klientów i przypomnieniami. Dla masażystów i gabinetów z kilkoma salami. Zgodny z RODO.",
    faqs: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to kompleksowy program dla salonów i gabinetów z rezerwacjami online, kartoteką klientów, formularzami, dokumentacją i przypomnieniami – idealny dla masażystów i gabinetów masażu.",
      },
      {
        question: "Czy mogą z niego korzystać masażyści pracujący samodzielnie?",
        answer:
          "Tak. Osoby pracujące samodzielnie zarządzają rezerwacjami, formularzami i notatkami bez prowizji marketplace’ów.",
      },
      FAQ_START,
      FAQ_HOSTING,
    ],
    siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "forms", "client-records", "pricing"],
  }),
};
