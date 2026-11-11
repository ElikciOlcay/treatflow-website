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
import type { LocaleSiteContent } from "../types";
import { industries } from "./pages-industries";

/** Wspólne teksty CTA i elementy strony dla podstron funkcji (PL). */
const featureChrome = {
  primaryCta: "Wypróbuj 14 dni za darmo",
  bottomTitle: "Chcesz zacząć?",
  bottomText:
    "Rozpocznij bezpłatny okres próbny – bez karty kredytowej, możesz zrezygnować w każdej chwili.",
  relatedTitle: "Powiązane strony",
  trustItems: ["Hosting w UE", "14 dni za darmo", "Bez prowizji od rezerwacji"],
  faqTitle: "Najczęstsze pytania",
  faqBadge: "FAQ",
};

export const pages: Pick<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  coreFeatures: {
    "appointment-calendar": {
      ...featureChrome,
      eyebrow: "Kalendarz wizyt",
      title: "Wszystkie wizyty w przejrzystym kalendarzu",
      subtitle:
        "Zarządzaj grafikiem całego salonu w jednym miejscu – w widoku dnia, tygodnia i miesiąca, który cały zespół rozumie od pierwszego spojrzenia.",
      bullets: [
        "Widok dnia, tygodnia i miesiąca",
        "Grafik dla wielu pracowników i gabinetów",
        "Przesuwanie wizyt metodą przeciągnij i upuść",
        "Automatyczna synchronizacja z rezerwacjami online",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Kalendarz wizyt Treatflow w widoku tygodniowym",
      },
      features: [
        { icon: CalendarDays, title: "Przejrzyste widoki", desc: "Przełączaj się między dniem, tygodniem i miesiącem – zawsze z odpowiednim podglądem." },
        { icon: Users, title: "Grafik zespołu", desc: "Planuj wizyty dla kilku pracowników, gabinetów i zasobów jednocześnie." },
        { icon: RefreshCw, title: "Zawsze aktualny", desc: "Rezerwacje online trafiają prosto do kalendarza – bez podwójnych rezerwacji." },
        { icon: Clock, title: "Szybkie zmiany terminów", desc: "Przesuwaj i wydłużaj wizyty jednym ruchem myszy." },
        { icon: Smartphone, title: "Na każdym urządzeniu", desc: "Obsługuj kalendarz na komputerze, tablecie lub telefonie." },
        { icon: Bell, title: "Automatyczne przypomnienia", desc: "Mniej nieodwołanych wizyt dzięki przypomnieniom przez WhatsApp i e-mail." },
      ],
      closingTitle: "Mniej administracji, więcej czasu dla klientów",
      closingText:
        "Dobrze zorganizowany kalendarz to serce każdego salonu. Treatflow utrzymuje porządek w grafiku, dzięki czemu Ty i Twój zespół możecie skupić się na tym, co najważniejsze – świetnych zabiegach i zadowolonych klientach.",
      faqs: [
        {
          question: "Jak działa kalendarz wizyt w Treatflow?",
          answer:
            "Masz do dyspozycji widok dnia, tygodnia i miesiąca z kolumnami dla pracowników lub gabinetów. Rezerwacje online trafiają do tego samego kalendarza, więc unikasz podwójnych rezerwacji. Terminy zmieniasz metodą przeciągnij i upuść.",
        },
        {
          question: "Czy kalendarz synchronizuje się z rezerwacjami online?",
          answer:
            "Tak. Gdy klient rezerwuje termin na Twojej stronie rezerwacji Treatflow, wizyta od razu pojawia się w kalendarzu salonu. Przypomnienia mogą być wysyłane przez WhatsApp i e-mail.",
        },
      ],
      relatedLinks: [
        { href: "/en/online-booking", label: "Rezerwacje online" },
        { href: "/en/messaging", label: "Przypomnienia" },
        { href: "/en/client-records", label: "Kartoteka klientów" },
        { href: "/en/beauty-salon-software", label: "Program do salonu kosmetycznego" },
      ],
    },
    "online-booking": {
      ...featureChrome,
      eyebrow: "Rezerwacje online",
      title: "Klienci rezerwują sami – 24/7",
      subtitle:
        "Własna strona rezerwacji w barwach Twojego salonu, która zapełnia kalendarz także poza godzinami otwarcia – bez wydzwaniania i podwójnych rezerwacji.",
      bullets: [
        "Rezerwacje przez całą dobę",
        "Widoczne tylko faktycznie wolne terminy",
        "Opcjonalne zaliczki ograniczające nieobecności",
        "Potwierdzenia i przypomnienia w pakiecie",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Klientka rezerwuje wizytę w salonie kosmetycznym na smartfonie",
      },
      features: [
        { icon: Globe, title: "Twoja strona rezerwacji", desc: "Udostępnij link do rezerwacji na stronie www, na Instagramie i w profilu Google." },
        { icon: Clock, title: "Dostępność w czasie rzeczywistym", desc: "Klienci widzą tylko naprawdę wolne terminy – bez podwójnych rezerwacji." },
        { icon: CreditCard, title: "Zaliczki", desc: "Pobieraj zaliczki za najbardziej oblegane usługi i chroń swój czas." },
        { icon: Bell, title: "Automatyczne potwierdzenia", desc: "Natychmiastowe potwierdzenie i przypomnienia, które ograniczają nieobecności." },
        { icon: Smartphone, title: "Przede wszystkim mobilnie", desc: "Zaprojektowane z myślą o telefonie – tam, gdzie rezerwuje większość klientów." },
        { icon: Link2, title: "Zsynchronizowany kalendarz", desc: "Każda rezerwacja trafia prosto do kalendarza salonu." },
      ],
      closingTitle: "Więcej zajętych terminów, mniej czasu przy telefonie",
      closingText:
        "System rezerwacji online zamienia wolne godziny w przychód. Treatflow łączy rezerwacje, przypomnienia i kalendarz w jeden spójny proces.",
      faqs: [
        {
          question: "Czy Treatflow pobiera prowizję od rezerwacji online?",
          answer:
            "Nie. Treatflow to program dla salonu, a nie platforma rezerwacyjna typu marketplace. Udostępniasz własny link do rezerwacji i płacisz stały miesięczny abonament. Nie ma żadnej prowizji od rezerwacji.",
        },
        {
          question: "Czy klienci mogą rezerwować 24/7 bez marketplace’u?",
          answer:
            "Tak. Otrzymujesz własną stronę rezerwacji, która pokazuje wyłącznie faktycznie wolne terminy. Potwierdzenia i przypomnienia są w pakiecie. Opcjonalne zaliczki pomagają ograniczyć nieobecności.",
        },
      ],
      aiCapsules: [
        {
          question: "Czy Treatflow obsługuje rezerwacje online?",
          answer:
            "Tak. Treatflow daje salonom kosmetycznym i gabinetom medycyny estetycznej własną stronę rezerwacji. Klienci rezerwują na podstawie aktualnej dostępności. Nie ma prowizji marketplace’u.",
        },
      ],
      problem: {
        problem:
          "Ciągłe telefony i prowizje platform rezerwacyjnych zajmują cały dzień, a w kalendarzu i tak zostają luki.",
        solution:
          "Treatflow daje Ci własny link do rezerwacji, który pokazuje tylko faktycznie wolne terminy. Rezerwacje trafiają do kalendarza salonu, a przypomnienia wysyłają się automatycznie.",
      },
      relatedLinks: [
        { href: "/en/appointment-calendar", label: "Kalendarz wizyt" },
        { href: "/en/messaging", label: "Przypomnienia" },
        { href: "/en/client-records", label: "Kartoteka klientów" },
        { href: "/en/beauty-salon-software", label: "Program do salonu kosmetycznego" },
      ],
    },
    "client-records": {
      ...featureChrome,
      eyebrow: "Kartoteka klientów",
      title: "Cała historia klienta w jednym miejscu",
      subtitle:
        "Notatki, formularze, zdjęcia i historia zabiegów – gotowe przed każdą wizytą, bez papierowych segregatorów.",
      bullets: [
        "Kompletne profile klientów",
        "Historia zabiegów i zdjęć",
        "Formularze powiązane z kartą klienta",
        "Szybkie wyszukiwanie w całym salonie",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Cyfrowa kartoteka klientów w Treatflow",
      },
      features: [
        { icon: Users, title: "Profile klientów", desc: "Dane kontaktowe, preferencje i notatki w jednej uporządkowanej karcie." },
        { icon: FileText, title: "Historia zabiegów", desc: "Zobacz, co zostało wykonane, kiedy i z jakimi produktami lub ustawieniami." },
        { icon: Camera, title: "Dokumentacja zdjęciowa", desc: "Zdjęcia przed i po przypisane do właściwego zabiegu." },
        { icon: ClipboardCheck, title: "Powiązane formularze", desc: "Wywiady i zgody są przechowywane razem z kartą klienta." },
        { icon: Search, title: "Szybkie wyszukiwanie", desc: "Znajdź klienta i jego wcześniejsze zabiegi w kilka sekund." },
        { icon: FolderOpen, title: "Archiwum bez papieru", desc: "Zamień segregatory na przeszukiwalne archiwum cyfrowe." },
      ],
      closingTitle: "Znasz klienta, zanim usiądzie na fotelu",
      closingText:
        "Lepsza dokumentacja to bezpieczniejsze zabiegi i bardziej osobiste podejście – bez przekopywania się przez papiery.",
      faqs: [
        {
          question: "Czy cyfrowa kartoteka klientów w Treatflow jest zgodna z RODO?",
          answer:
            "Tak. Dane są przechowywane na serwerach w UE (Frankfurt), z szyfrowaniem SSL i codzienną kopią zapasową. Formularze, zdjęcia i historia zabiegów znajdują się w tej samej karcie klienta. Salon pozostaje właścicielem danych swoich klientów.",
        },
        {
          question: "Co zawiera karta klienta w Treatflow?",
          answer:
            "Dane kontaktowe, notatki, formularze wywiadu i zgody, historię zabiegów oraz zdjęcia przed i po – z wyszukiwaniem w całym salonie, aby zespół był przygotowany przed każdą wizytą.",
        },
      ],
      aiCapsules: [
        {
          question: "Czy w Treatflow mogę prowadzić historię klientów?",
          answer:
            "Tak. Treatflow przechowuje dane kontaktowe, notatki, formularze, historię zabiegów i zdjęcia w jednej karcie klienta, dzięki czemu zespół otwiera ten sam profil przed każdą wizytą.",
        },
      ],
      problem: {
        problem:
          "Notatki, zdjęcia i formularze klientów są rozrzucone po segregatorach, czatach i różnych urządzeniach.",
        solution:
          "Treatflow trzyma całą historię w jednej karcie: formularze, notatki, zdjęcia i wcześniejsze zabiegi są zawsze razem.",
      },
      relatedLinks: [
        { href: "/en/forms", label: "Formularze wywiadu i zgody" },
        { href: "/en/treatment-documentation", label: "Dokumentacja zabiegów" },
        { href: "/en/online-booking", label: "Rezerwacje online" },
        { href: "/en/aesthetic-clinic-software", label: "Program dla gabinetu medycyny estetycznej" },
      ],
    },
    forms: {
      ...featureChrome,
      eyebrow: "Formularze wywiadu i zgody",
      title: "Cyfrowe formularze wywiadu i zgody na zabieg",
      subtitle:
        "Wysyłaj wywiady i zgody jeszcze przed wizytą. Przetestuj przykładowe szablony bez rejestracji, a potem twórz własne w edytorze formularzy – albo przygotujemy je razem z Tobą.",
      bullets: [
        "Klienci wypełniają formularze przed przyjściem",
        "Podpis elektroniczny na każdym urządzeniu",
        "Szablony, edytor formularzy lub konfiguracja razem z nami",
        "Bezpieczne przechowywanie w karcie klienta",
      ],
      secondaryCta: { label: "Wypróbuj przykładowe formularze", href: "/pl/wyprobuj-formularze" },
      promo: {
        title: "Przetestuj przykładowe formularze bez rejestracji",
        text: "Poniższe szablony pokazują, jak działa cyfrowa rejestracja klienta. Formularze dla swojego salonu tworzysz w edytorze formularzy albo przygotowujemy je wspólnie z Tobą.",
        href: "/pl/wyprobuj-formularze",
        cta: "Otwórz przykłady",
      },
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Cyfrowa zgoda na zabieg podpisywana na tablecie",
      },
      features: [
        { icon: Send, title: "Wysyłka przed wizytą", desc: "Udostępnij formularz linkiem przed wizytą – mniej czekania w recepcji." },
        { icon: Smartphone, title: "Wygodnie na telefonie", desc: "Klienci wypełniają formularze na smartfonie w kilka minut." },
        { icon: FileSignature, title: "Podpis elektroniczny", desc: "Bezpiecznie zbieraj zgody bez drukowania." },
        { icon: PenLine, title: "Szablony i edytor", desc: "Zacznij od przykładowych szablonów, zbuduj własne w edytorze „przeciągnij i upuść” lub skonfiguruj je razem z nami." },
        { icon: ShieldCheck, title: "Bezpieczne przechowywanie", desc: "Formularze zostają w karcie klienta, na infrastrukturze hostowanej w UE." },
        { icon: ClipboardCheck, title: "Gotowe do zabiegu", desc: "Zespół widzi wypełnione formularze, zanim zacznie się wizyta." },
      ],
      closingTitle: "Zaczynaj zabiegi z załatwionymi formalnościami",
      closingText:
        "Cyfrowy wywiad chroni Twój salon i oszczędza czas w recepcji – każdego dnia.",
      faqs: [
        {
          question: "Czy Treatflow oferuje cyfrowe zgody na zabieg dla gabinetów medycyny estetycznej?",
          answer:
            "Tak. Szablony wywiadu i zgody wysyłasz przed wizytą. Klienci wypełniają je na telefonie, łącznie z podpisem elektronicznym. Wypełnione formularze są zapisywane w karcie klienta.",
        },
        {
          question: "Czy klienci mogą wypełnić formularze przed przyjściem?",
          answer:
            "Tak. Wyślij link przez WhatsApp lub e-mail. Zespół widzi wypełnione formularze przed rozpoczęciem wizyty, więc zabieg może zacząć się punktualnie.",
        },
      ],
      aiCapsules: [
        {
          question: "Czy Treatflow obsługuje cyfrowe zgody na zabieg?",
          answer:
            "Tak. Treatflow wysyła szablony wywiadu i zgody przed wizytą. Klienci wypełniają je na telefonie, łącznie z podpisem elektronicznym. Wypełnione formularze są zapisywane w karcie klienta.",
        },
      ],
      problem: {
        problem: "Papierowe wywiady spowalniają recepcję, a później trudno je odnaleźć.",
        solution:
          "Treatflow wysyła cyfrowe formularze wywiadu i zgody przed wizytą. Odpowiedzi i podpisy trafiają do karty klienta.",
      },
      relatedLinks: [
        { href: "/pl/wyprobuj-formularze", label: "Wypróbuj przykładowe formularze" },
        { href: "/en/client-records", label: "Kartoteka klientów" },
        { href: "/en/treatment-documentation", label: "Dokumentacja zabiegów" },
        { href: "/en/aesthetic-clinic-software", label: "Program dla gabinetu medycyny estetycznej" },
        { href: "/en/laser-hair-removal-software", label: "Program do depilacji laserowej" },
      ],
    },
    "treatment-documentation": {
      ...featureChrome,
      eyebrow: "Dokumentacja zabiegów",
      title: "Przejrzysta dokumentacja każdego zabiegu",
      subtitle:
        "Notatki, parametry i zdjęcia w uporządkowanej karcie zabiegu – także z dyktowaniem głosowym, stworzone dla salonów kosmetycznych i gabinetów medycyny estetycznej.",
      bullets: [
        "Uporządkowane notatki z zabiegów",
        "Dyktowanie głosowe, opcjonalnie dopracowane przez AI",
        "Zestawy zdjęć przed i po",
        "Powiązanie z historią klienta",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Dokumentacja zabiegu z porównaniem zdjęć przed i po",
      },
      features: [
        { icon: FileText, title: "Notatki z zabiegów", desc: "Zapisz, co zostało wykonane, jakich produktów użyto i jak zareagowała skóra." },
        { icon: Mic, title: "Dyktowanie głosowe", desc: "Mów zamiast pisać. Treatflow zamienia mowę na tekst i może go dopracować z pomocą AI." },
        { icon: Camera, title: "Zdjęcia jako dowód", desc: "Dołączaj zdjęcia przed i po do konkretnego zabiegu." },
        { icon: ClipboardCheck, title: "Gotowe na kolejną wizytę", desc: "Przy następnej wizycie od razu widzisz ostatni zabieg." },
        { icon: ShieldCheck, title: "Wsparcie zgodności", desc: "Zachowaj jasny ślad dokumentacji przy zabiegach wymagających zgody." },
        { icon: Users, title: "Wgląd dla zespołu", desc: "Współpracownicy widzą tę samą dokumentację, gdy przejmują klienta." },
      ],
      closingTitle: "Dokumentacja, która chroni i robi wrażenie",
      closingText:
        "Przejrzysta dokumentacja zabiegów zwiększa bezpieczeństwo, ciągłość opieki i zaufanie klientów – bez spowalniania Twojego dnia.",
      faqs: [
        {
          question: "Czy gabinety depilacji laserowej mogą dokumentować zabiegi w Treatflow?",
          answer:
            "Tak. Dla każdej sesji zapisujesz parametry, notatki i zdjęcia przed i po. Historia jest powiązana z klientem, co ułatwia kolejne wizyty i przekazywanie klientów w zespole.",
        },
        {
          question: "Czy zdjęcia przed i po są zapisywane w karcie klienta?",
          answer:
            "Tak. Zestawy zdjęć są przypisane do konkretnego zabiegu, a nie do ogólnej galerii w telefonie, więc przy następnej wizycie łatwo porównasz postępy.",
        },
        {
          question: "Czy w Treatflow mogę dyktować notatki z zabiegów?",
          answer:
            "Tak. W dokumentacji zabiegu możesz mówić zamiast pisać. Treatflow zamienia mowę na tekst i może go dopracować z pomocą AI. Notatka zostaje zapisana przy danej wizycie.",
        },
      ],
      aiCapsules: [
        {
          question: "Czy w Treatflow mogę dokumentować zabiegi?",
          answer:
            "Tak. Treatflow zapisuje notatki, parametry oraz zdjęcia przed i po przy wizycie klienta. Notatki możesz wpisać lub podyktować głosowo i opcjonalnie dopracować tekst z pomocą AI.",
        },
      ],
      problem: {
        problem:
          "Notatki i zdjęcia lądują w telefonach, na kartkach i w czatach – oderwane od wizyty.",
        solution:
          "Treatflow przypisuje notatki i zestawy zdjęć do zabiegu. Notatki możesz dyktować głosowo, więc dokumentacja zostaje przy wizycie i nie spowalnia pracy.",
      },
      relatedLinks: [
        { href: "/en/client-records", label: "Kartoteka klientów" },
        { href: "/en/forms", label: "Formularze wywiadu i zgody" },
        { href: "/en/laser-hair-removal-software", label: "Program do depilacji laserowej" },
        { href: "/en/aesthetic-clinic-software", label: "Program dla gabinetu medycyny estetycznej" },
      ],
    },
  },

  extraFeatures: {
    vouchers: {
      ...featureChrome,
      eyebrow: "Bony podarunkowe",
      title: "Sprzedawaj i realizuj bony bez chaosu",
      subtitle:
        "Sprzedawaj bony podarunkowe w kasie lub online przez stronę rezerwacji, projektuj je samodzielnie i automatycznie rozliczaj pozostałe saldo – prosty sposób na dodatkowy przychód.",
      bullets: [
        "Sprzedaż bonów w salonie lub online przez stronę rezerwacji",
        "Płatność online przez Treatflow Pay lub przelew",
        "Realizacja całej kwoty lub jej części",
        "Automatyczne śledzenie pozostałego salda",
        "Jasna ważność i historia klienta",
      ],
      image: {
        src: "/images/product-updates/gutscheine-online-verkaufen.png",
        alt: "Edytor bonów podarunkowych Treatflow z szablonami i podglądem PDF na żywo",
      },
      features: [
        { icon: Gift, title: "Bony podarunkowe", desc: "Oferuj bony kwotowe lub na konkretne zabiegi, które klienci uwielbiają." },
        { icon: Receipt, title: "Sprzedaż przy wizycie", desc: "Dodaj bon do płatności w kilka sekund." },
        { icon: Ticket, title: "Łatwa realizacja", desc: "Wpisz kod lub wybierz bon, gdy klient wróci do salonu." },
        { icon: RefreshCw, title: "Pozostałe saldo", desc: "Częściowa realizacja automatycznie aktualizuje saldo." },
        { icon: Calendar, title: "Kontrola ważności", desc: "Ustal daty ważności, aby oferty były jasne i łatwe w zarządzaniu." },
        { icon: BarChart3, title: "Przegląd sprzedaży", desc: "Sprawdź, ile bonów sprzedano, zrealizowano i ile jest jeszcze otwartych." },
        { icon: Globe, title: "Sprzedaż online", desc: "Link „Kup bon” na stronie rezerwacji: stałe lub dowolne kwoty, PDF e-mailem, pocztą lub odbiór w salonie, z osobistą wiadomością." },
        { icon: CreditCard, title: "Płatność online", desc: "Z Treatflow Pay (karta, Apple Pay, Google Pay) bon jest wystawiany od razu. Przy przelewie kasa wysyła fakturę, a bon powstaje po potwierdzeniu wpłaty." },
        { icon: Palette, title: "Edytor bonów", desc: "10 szablonów z Twoimi kolorami, logo, zdjęciem i tekstami – podgląd odpowiada plikowi PDF (A5 poziomo)." },
      ],
      closingTitle: "Bony, które naprawdę przyprowadzają klientów z powrotem",
      closingText:
        "Bony podarunkowe zapełniają spokojniejsze dni i przyciągają nowych klientów. Treatflow upraszcza sprzedaż i realizację, więc nic nie ginie w arkuszach kalkulacyjnych.",
      faqs: [
        {
          question: "Czy mogę sprzedawać bony podarunkowe online?",
          answer:
            "Tak. Po włączeniu aplikacji Bony (Ustawienia → Aplikacje) na publicznej stronie rezerwacji pojawia się link „Kup bon”. Klienci wybierają stałą lub dowolną kwotę w ustalonych przez Ciebie granicach, PDF e-mailem, wysyłkę pocztą (z ustaloną przez Ciebie opłatą) lub odbiór w salonie i mogą dodać odbiorcę, nadawcę oraz osobistą wiadomość. Aplikacja jest dostępna tylko razem z kasą Treatflow, bo tam bony są realizowane.",
        },
        {
          question: "Jak klienci płacą za bony online?",
          answer:
            "Sam wybierasz metody płatności: z Treatflow Pay klienci płacą kartą, Apple Pay lub Google Pay, a bon jest wystawiany od razu i wysyłany jako PDF e-mailem. Przy przelewie kasa automatycznie tworzy i wysyła fakturę; bon zostaje wystawiony po potwierdzeniu wpłaty w kasie.",
        },
        {
          question: "Jak opodatkowane są bony sprzedane online?",
          answer:
            "Bony sprzedane online są bonami różnego przeznaczenia: VAT jest należny dopiero przy realizacji w kasie Treatflow, a nie przy zakupie. W kasie zarządzasz zamówieniami online i widzisz dla każdego bonu jego pochodzenie (online lub kasa), pozostałe saldo i historię realizacji.",
        },
      ],
    },
    messaging: {
      ...featureChrome,
      eyebrow: "Wiadomości i przypomnienia",
      title: "Mniej nieodwołanych wizyt dzięki automatyzacji WhatsApp i e-mail",
      subtitle:
        "Wysyłaj automatycznie potwierdzenia rezerwacji, przypomnienia o wizytach i wiadomości po zabiegu – przez WhatsApp i e-mail, bez ręcznego pisania do klientów.",
      bullets: [
        "Automatyczne potwierdzenia rezerwacji",
        "Przypomnienia przez WhatsApp i e-mail przed wizytą",
        "Wiadomości po zabiegu",
        "Życzenia urodzinowe i wiadomości reaktywacyjne",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Klientka otrzymuje przypomnienie o wizycie w salonie kosmetycznym przez WhatsApp",
      },
      features: [
        { icon: Bell, title: "Przypomnienia o wizytach", desc: "Ogranicz nieobecności dzięki przypomnieniom przez WhatsApp i e-mail wysyłanym o właściwej porze." },
        { icon: Mail, title: "Potwierdzenia", desc: "Klienci od razu po rezerwacji otrzymują jasne szczegóły wizyty." },
        { icon: MessageCircle, title: "Wiadomości po zabiegu", desc: "Automatycznie wysyłaj zalecenia pozabiegowe lub zaproszenie do kolejnej rezerwacji." },
        { icon: Sparkles, title: "Życzenia urodzinowe", desc: "Bądź w pamięci klientów dzięki osobistym, automatycznym życzeniom." },
        { icon: Clock, title: "Własne ustawienia czasu", desc: "Zdecyduj, kiedy wysyłane są przypomnienia i wiadomości." },
        { icon: Smartphone, title: "WhatsApp i e-mail", desc: "Wybierz kanał odpowiedni do pilności i ilości szczegółów." },
      ],
      closingTitle: "Kontakt z klientami bez zbędnej pracy",
      closingText:
        "Automatyczne wiadomości informują klientów i budują ich lojalność, a Twój zespół skupia się na zabiegach – zamiast w kółko pisać te same wiadomości.",
      faqs: [
        {
          question: "Czy Treatflow wysyła przypomnienia o wizytach?",
          answer:
            "Tak. Treatflow może automatycznie wysyłać przypomnienia przez WhatsApp i e-mail przed wizytą. Potwierdzenie wychodzi w momencie rezerwacji.",
        },
        {
          question: "Czy Treatflow automatyzuje wiadomości do klientów?",
          answer:
            "Tak. Oprócz przypomnień możesz wysyłać wiadomości po zabiegu i wiadomości reaktywacyjne. Czas wysyłki ustawiasz samodzielnie.",
        },
      ],
      aiCapsules: [
        {
          question: "Czy Treatflow wysyła przypomnienia o wizytach?",
          answer:
            "Tak. Treatflow wysyła potwierdzenia rezerwacji oraz automatyczne przypomnienia przez WhatsApp lub e-mail, dzięki czemu klienci rzadziej zapominają o wizycie.",
        },
      ],
      problem: {
        problem:
          "Nieodwołane wizyty i zapomniane wiadomości po zabiegu zostawiają luki, które zespół musi łatać telefonami.",
        solution:
          "Treatflow automatycznie wysyła potwierdzenia, przypomnienia i wiadomości po zabiegu – powiązane z wizytą w kalendarzu.",
      },
      relatedLinks: [
        { href: "/en/online-booking", label: "Rezerwacje online" },
        { href: "/en/appointment-calendar", label: "Kalendarz wizyt" },
        { href: "/en/beauty-salon-software", label: "Program do salonu kosmetycznego" },
        { href: "/en/laser-hair-removal-software", label: "Program do depilacji laserowej" },
      ],
    },
    integrations: {
      ...featureChrome,
      eyebrow: "Integracje",
      title: "Połącz Treatflow z narzędziami, których już używasz",
      subtitle:
        "Synchronizuj kalendarze, księgowość i automatyzacje, aby dane wprowadzać raz – zamiast przepisywać je do trzech różnych systemów.",
      bullets: [
        "Dwukierunkowa synchronizacja z Kalendarzem Google",
        "Połączenia z księgowością i fakturami",
        "Zapier z dostępem do ponad 7000 aplikacji",
        "Mniej podwójnego wpisywania, mniej błędów",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Integracje Treatflow łączące program do salonu z zewnętrznymi narzędziami",
      },
      features: [
        { icon: CalendarDays, title: "Kalendarz Google", desc: "Synchronizuj w czasie rzeczywistym kalendarz prywatny i kalendarz salonu." },
        { icon: Receipt, title: "Księgowość", desc: "Wystawiaj faktury i synchronizuj klientów bez przepisywania danych." },
        { icon: Zap, title: "Zapier", desc: "Uruchamiaj automatyzacje w arkuszach, CRM, e-mailu i wielu innych narzędziach." },
        { icon: Gift, title: "Bony podarunkowe", desc: "Sprzedawaj bony online przez stronę rezerwacji – płatne przez Treatflow Pay lub przelew, realizowane w kasie Treatflow." },
        { icon: RefreshCw, title: "Mniej podwójnej pracy", desc: "Wprowadzasz dane raz w Treatflow – reszta dzieje się sama." },
        { icon: Workflow, title: "Własne automatyzacje", desc: "Reaguj na nowe rezerwacje lub formularze bez pisania kodu." },
        { icon: Plug, title: "Rosnący ekosystem", desc: "Połącz narzędzia, na których Twój salon już polega." },
      ],
      closingTitle: "Jedno źródło prawdy dla Twojego salonu",
      closingText:
        "Integracje sprawiają, że Treatflow jest centrum Twojej pracy, a ulubione narzędzia automatycznie pozostają na bieżąco.",
      faqs: [
        {
          question: "Czy mogę sprzedawać bony podarunkowe online?",
          answer:
            "Tak. Włącz aplikację Bony w Ustawienia → Aplikacje, a na stronie rezerwacji pojawi się link „Kup bon”. Klienci płacą przez Treatflow Pay lub przelewem i otrzymują bon jako PDF e-mailem, pocztą lub do odbioru w salonie. Aplikacja wymaga kasy Treatflow, w której bony są realizowane.",
        },
        {
          question: "Czy Treatflow integruje się z Kalendarzem Google?",
          answer:
            "Tak. Treatflow może synchronizować się z Kalendarzem Google, dzięki czemu terminy prywatne i salonowe są zawsze zgodne.",
        },
        {
          question: "Czy Treatflow współpracuje z Zapierem?",
          answer:
            "Tak. W pakiecie Booking możesz połączyć Treatflow z innymi narzędziami przez Zapier, na przykład z arkuszami kalkulacyjnymi lub automatyzacjami e-mail.",
        },
      ],
      aiCapsules: [
        {
          question: "Czy Treatflow integruje się z Kalendarzem Google?",
          answer:
            "Tak. Treatflow może synchronizować się z Kalendarzem Google, dzięki czemu terminy prywatne i salonowe są zawsze zgodne.",
        },
      ],
      relatedLinks: [
        { href: "/en/online-booking", label: "Rezerwacje online" },
        { href: "/en/appointment-calendar", label: "Kalendarz wizyt" },
        { href: "/en/features", label: "Wszystkie funkcje" },
      ],
    },
    shop: {
      ...featureChrome,
      eyebrow: "Sprzedaż produktów i magazyn",
      title: "Sprzedawaj kosmetyki i panuj nad stanem magazynu",
      subtitle:
        "Dodawaj dowolną liczbę produktów, sprzedawaj je w salonie i sprawdzaj, kto co kupił – z prostą obsługą magazynu, aby bestsellerom nigdy niezauważenie nie kończył się zapas.",
      bullets: [
        "Nieograniczona liczba produktów i kategorii",
        "Sprzedaż bezpośrednio w salonie",
        "Proste stany magazynowe i alerty",
        "Historia zakupów każdego klienta",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Sprzedaż produktów i stan magazynu w Treatflow dla salonów kosmetycznych",
      },
      features: [
        { icon: Package, title: "Katalog produktów", desc: "Dodaj tyle produktów, ile potrzebujesz, z cenami i kategoriami." },
        { icon: ShoppingBag, title: "Sprzedaż w salonie", desc: "Sprzedawaj po zabiegu bez osobnego systemu sklepowego." },
        { icon: BarChart3, title: "Przegląd magazynu", desc: "Sprawdzaj stany i zamawiaj, zanim czegoś zabraknie." },
        { icon: Camera, title: "Zdjęcia produktów", desc: "Wyraźne zdjęcia produktów ułatwiają pracę zespołowi w recepcji." },
        { icon: TrendingUp, title: "Dodatkowy przychód", desc: "Każda wizyta to okazja do sprzedaży kosmetyków." },
        { icon: Users, title: "Historia zakupów", desc: "Wiesz, który klient kupił jaki produkt i kiedy." },
      ],
      closingTitle: "Sprzedaż, która pasuje do rytmu wizyt",
      closingText:
        "Treatflow łączy sprzedaż produktów z wizytami i kartoteką klientów – dzięki temu sprzedaż staje się naturalną częścią wizyty, a nie kolejnym obowiązkiem administracyjnym.",
    },
    "studio-website": {
      ...featureChrome,
      eyebrow: "Strona internetowa salonu",
      title: "Indywidualna strona www, która zamienia odwiedzających w rezerwacje",
      subtitle:
        "Profesjonalna strona dla Twojego salonu – mobilna, przygotowana pod SEO i połączona z systemem rezerwacji online Treatflow, aby nowi klienci mogli zarezerwować wizytę w kilku kliknięciach.",
      bullets: [
        "Indywidualny projekt dla Twojej marki",
        "Zoptymalizowana pod smartfony",
        "Zintegrowane rezerwacje online",
        "Stworzona dla branży beauty i medycyny estetycznej",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Indywidualna strona internetowa salonu kosmetycznego od Treatflow",
      },
      features: [
        { icon: Sparkles, title: "Indywidualny design", desc: "Wygląd dopasowany do Twojego salonu – a nie kolejny szablon z masowej produkcji." },
        { icon: Smartphone, title: "Przede wszystkim mobilnie", desc: "Większość odwiedzających przychodzi z telefonu. Tam Twoja strona wygląda świetnie." },
        { icon: Globe, title: "Podstawy SEO", desc: "Przejrzysta struktura i treści, dzięki którym klienci znajdą Cię w internecie." },
        { icon: Link2, title: "Integracja rezerwacji", desc: "Połącz link do rezerwacji Treatflow i godziny otwarcia." },
        { icon: Camera, title: "Pokaż swoją pracę", desc: "Przekonująco zaprezentuj zabiegi, zespół i atmosferę salonu." },
        { icon: LayoutDashboard, title: "Stworzona dla salonów", desc: "Zaprojektowana z myślą o salonach kosmetycznych, laserze, paznokciach, rzęsach i medycynie estetycznej." },
      ],
      closingTitle: "Strona www jako kanał rezerwacji – a nie wizytówka",
      closingText:
        "Projektujemy strony, które wyglądają premium i przynoszą rezerwacje. W połączeniu z rezerwacjami Treatflow każda wizyta na stronie może zamienić się w wizytę w salonie.",
    },
  },

  industries,
};
