import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsPl: ClientWorkflowsContent = {
  meta: {
    title: "Automatyzacje dla klientów salonu kosmetycznego",
    description:
      "Wieloetapowe automatyzacje w Treatflow: opieka pozabiegowa, odzyskiwanie klientów i kontakt po wizycie – z odstępami czasowymi, warunkami i wysyłką e-mail. Bez ręcznego pilnowania, kto i kiedy ma dostać wiadomość.",
    keywords: [
      "automatyzacja salonu kosmetycznego",
      "automatyzacja marketingu salon",
      "opieka pozabiegowa automatycznie",
      "odzyskiwanie klientów salon",
      "wiadomość po zabiegu",
      "przypomnienie o kolejnej wizycie",
      "Treatflow automatyzacje",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Automatyzacje dla klientów salonu kosmetycznego",
      description:
        "Wieloetapowe automatyzacje: opieka pozabiegowa, odzyskiwanie klientów i kontakt po wizycie – z odstępami czasowymi, warunkami i wysyłką e-mail.",
    },
  },
  breadcrumb: "Automatyzacje dla klientów",
  hero: {
    eyebrow: "Automatyzacje dla klientów",
    eyebrowIcon: "workflow",
    title: { before: "Wieloetapowe ", highlight: "automatyzacje" },
    description:
      "Twórz sekwencje do opieki pozabiegowej, odzyskiwania klientów i kontaktu po wizycie – z odstępami czasowymi, warunkami i automatycznymi e-mailami.",
    chips: ["Edytor wizualny", "Automatyczne e-maile", "Zatrzymuje się po nowej rezerwacji"],
    secondaryCta: { label: "Przejdź do przypomnień", href: { page: "messaging" } },
    capsules: [
      {
        question: "Jak zautomatyzować opiekę pozabiegową i kontakt po wizycie w salonie kosmetycznym?",
        answer:
          "W automatyzacjach dla klientów w Treatflow tworzysz wieloetapowe sekwencje: na przykład 2 dni po zabiegu zapytaj, jak się czuje skóra, sprawdź, czy jest już kolejna rezerwacja, i tylko jeśli jej nie ma – wyślij zaproszenie na następny termin. Jesteś w stałym kontakcie z klientami, nie pilnując tego ręcznie.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Edytor automatyzacji Treatflow z wyzwalaczem, czasem oczekiwania i wiadomością",
    },
  },
  understand: {
    title: "Sekwencje, które działają same",
    description:
      "Zamiast pojedynczych przypomnień tworzysz całe sekwencje – do opieki pozabiegowej, odzyskiwania klientów i kontaktu po wizycie w kilku krokach.",
    items: [
      {
        icon: "heart",
        title: "Opieka pozabiegowa bez dodatkowej pracy",
        text: "Automatycznie zapytaj, jak się ma skóra po zabiegu – a w razie zainteresowania zaproponuj kolejną wizytę.",
      },
      {
        icon: "bell",
        title: "Odzyskuj nieaktywnych klientów",
        text: "Po 60–90 dniach bez wizyty klient dostaje zaproszenie z powrotem do salonu – osobiste i we właściwym momencie.",
      },
      {
        icon: "git-branch",
        title: "Inteligentne rozgałęzienia",
        text: "Sprawdź, czy pojawiła się nowa rezerwacja. Jeśli tak, automatyzacja się zatrzymuje – bez podwójnych wiadomości.",
      },
    ],
  },
  howItWorks: {
    description: "Pierwsza automatyzacja w trzech krokach.",
    steps: [
      { title: "Wybierz wyzwalacz", text: "Na przykład zakończenie wizyty albo długa przerwa od ostatniej wizyty w salonie." },
      { title: "Połącz kroki", text: "Ułóż odstępy czasowe, wiadomości i warunki w edytorze wizualnym." },
      { title: "Włącz", text: "Treatflow sam prowadzi sekwencję i wysyła wiadomości e-mailem." },
    ],
  },
  cards: {
    title: "Co otrzymujesz",
    description: "Wszystko do wieloetapowej komunikacji z klientami – przejrzyście i pod kontrolą.",
    items: [
      { icon: "workflow", title: "Edytor wizualny", text: "Wyzwalacz, odstęp czasowy, wiadomość i warunek – układasz metodą „przeciągnij i upuść”.", points: ["Przejrzysty widok", "Wiele etapów", "Szybkie zmiany"] },
      { icon: "message-circle", title: "Wiadomości e-mail", text: "Każdy krok trafia prosto do skrzynki odbiorczej klienta.", points: ["E-mail", "Twój własny tekst", "Wysyłka automatyczna"] },
      { icon: "clock", title: "Odstępy czasowe", text: "Dni lub godziny między krokami – dokładnie tak, jak pracuje Twój salon.", points: ["Opieka we właściwym czasie", "Odzyskiwanie klientów", "Nic nie trzeba pamiętać"] },
      { icon: "git-branch", title: "Warunki", text: "Sprawdzaj np. nowe rezerwacje i zatrzymuj sekwencję na czas.", points: ["Bez podwójnych e-maili", "Inteligentne rozgałęzienia", "Trafniejsze wiadomości"] },
      { icon: "heart", title: "Sekwencje pozabiegowe", text: "Najpierw pytanie o samopoczucie, potem ewentualnie kolejna wizyta – tylko wtedy, gdy ma to sens.", points: ["Większa lojalność", "Mniej nieodwołanych wizyt", "Więcej kolejnych wizyt"] },
      { icon: "zap", title: "Odzyskiwanie klientów", text: "Automatycznie zapraszaj klientów ponownie po dłuższej przerwie.", points: ["Po 60–90 dniach", "Osobiście", "Bez ręcznych list"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o automatyzacje dla klientów",
    items: [
      {
        question: "Czym są automatyzacje dla klientów w Treatflow?",
        answer:
          "Automatyzacje dla klientów to wieloetapowe sekwencje: budujesz je z wyzwalacza, odstępów czasowych, wiadomości i warunków. Dzięki temu opieka pozabiegowa, odzyskiwanie klientów i kontakt po wizycie działają same – bez ręcznego pisania każdej wiadomości.",
      },
      {
        question: "Czym automatyzacje różnią się od zwykłych przypomnień?",
        answer:
          "Zwykła wiadomość (np. przypomnienie o wizycie) to jeden wyzwalacz i jedna wiadomość. Automatyzacje to sekwencje z wieloma krokami i rozgałęzieniami – na przykład: zapytać o samopoczucie po zabiegu, odczekać, sprawdzić, czy jest nowa rezerwacja, i dopiero wtedy wysłać drugą wiadomość.",
      },
      {
        question: "Jakim kanałem wysyłane są wiadomości z automatyzacji?",
        answer:
          "Kroki automatyzacji są wysyłane e-mailem. Przypomnienia o wizytach pozostają dostępne w zwykłych wiadomościach.",
      },
      {
        question: "Czy automatyzacja może się zatrzymać, gdy klient zarezerwuje ponownie?",
        answer:
          "Tak. Możesz ustawić warunki, np. sprawdzić, czy od ostatniej wizyty pojawiła się nowa rezerwacja. Jeśli tak, sekwencja się zatrzymuje – jesteś w kontakcie z klientem bez dublowania wiadomości.",
      },
      {
        question: "Od jakich automatyzacji warto zacząć?",
        answer:
          "Najpopularniejsze to: opieka pozabiegowa 1–2 dni po zabiegu, odzyskiwanie klientów po 60–90 dniach bez wizyty oraz wieloetapowa opieka pozabiegowa z drugą wiadomością tylko wtedy, gdy kolejna wizyta nie została jeszcze zarezerwowana.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Przypomnienia", description: "E-mail przed wizytą" },
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Wizyty i automatyzacje razem" },
      { href: { page: "client-records" }, title: "Kartoteka klientów", description: "Historia i ponowny kontakt" },
    ],
  },
  cta: {
    title: "Czas na wieloetapowe automatyzacje dla klientów?",
    description: "Wypróbuj 14 dni za darmo – opieka pozabiegowa i odzyskiwanie klientów bez ręcznego pilnowania kontaktu.",
    secondary: { label: "Przejdź do przypomnień", href: { page: "messaging" } },
  },
};
