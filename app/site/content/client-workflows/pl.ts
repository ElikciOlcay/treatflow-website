import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsPl: ClientWorkflowsContent = {
  meta: {
    title: "Automatyzacje dla klientów salonu kosmetycznego",
    description:
      "Wieloetapowe automatyzacje w Treatflow: opieka pozabiegowa, odzyskiwanie klientów i follow-upy z czasem oczekiwania, warunkami i wysyłką e-mail – bez ręcznego przypominania się.",
    keywords: [
      "automatyzacja salonu kosmetycznego",
      "automatyzacja marketingu salon",
      "opieka pozabiegowa automatycznie",
      "odzyskiwanie klientów salon",
      "follow-up po zabiegu",
      "Treatflow automatyzacje",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Automatyzacje dla klientów salonu kosmetycznego",
      description:
        "Wieloetapowe automatyzacje: opieka pozabiegowa, odzyskiwanie klientów i follow-upy z czasem oczekiwania, warunkami i wysyłką e-mail.",
    },
  },
  breadcrumb: "Automatyzacje dla klientów",
  hero: {
    eyebrow: "Automatyzacje dla klientów",
    eyebrowIcon: "workflow",
    title: { before: "Wieloetapowe ", highlight: "automatyzacje" },
    description:
      "Twórz sekwencje opieki pozabiegowej, odzyskiwania klientów i follow-upów – z czasem oczekiwania, warunkami i automatycznymi e-mailami.",
    chips: ["Edytor wizualny", "Automatyczne e-maile", "Zatrzymuje się po nowej rezerwacji"],
    secondaryCta: { label: "Przejdź do przypomnień", href: { page: "messaging" } },
    capsules: [
      {
        question: "Jak zautomatyzować opiekę pozabiegową i follow-upy w salonie kosmetycznym?",
        answer:
          "Dzięki automatyzacjom dla klientów w Treatflow tworzysz wieloetapowe sekwencje: na przykład 2 dni po zabiegu zapytaj, jak się czuje klientka, sprawdź, czy zarezerwowała kolejną wizytę, i tylko jeśli nie – wyślij zaproszenie na następny termin. Pozostajesz w kontakcie bez ręcznego przypominania się.",
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
      "Zamiast pojedynczych przypomnień tworzysz sekwencje – stworzone do opieki pozabiegowej, odzyskiwania klientów i wieloetapowych follow-upów.",
    items: [
      {
        icon: "heart",
        title: "Opieka pozabiegowa bez dodatkowej pracy",
        text: "Automatycznie zapytaj, jak się ma skóra – a jeśli klientka jest zainteresowana, zaproponuj kolejną wizytę.",
      },
      {
        icon: "bell",
        title: "Odzyskuj nieaktywnych klientów",
        text: "Po 60–90 dniach bez wizyty wysyłane jest zaproszenie z powrotem do salonu – osobiste i we właściwym momencie.",
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
      { title: "Wybierz wyzwalacz", text: "Rozpocznij np. po zakończeniu wizyty albo gdy ktoś dawno nie odwiedzał salonu." },
      { title: "Połącz kroki", text: "Ułóż czas oczekiwania, wiadomości i warunki w edytorze wizualnym." },
      { title: "Aktywuj", text: "Treatflow realizuje sekwencję i wysyła wiadomości e-mailem." },
    ],
  },
  cards: {
    title: "Co otrzymujesz",
    description: "Wszystko do wieloetapowej komunikacji z klientami – przejrzyście i pod kontrolą.",
    items: [
      { icon: "workflow", title: "Edytor wizualny", text: "Wyzwalacz, czas oczekiwania, wiadomość i warunek metodą przeciągnij i upuść.", points: ["Przejrzysty widok", "Wiele etapów", "Szybkie zmiany"] },
      { icon: "message-circle", title: "Wiadomości e-mail", text: "Każdy krok trafia prosto do skrzynki odbiorczej klienta.", points: ["E-mail", "Twój własny tekst", "Wysyłka automatyczna"] },
      { icon: "clock", title: "Czas oczekiwania", text: "Dni lub godziny między krokami – dokładnie tak, jak pracuje Twój salon.", points: ["Opieka we właściwym czasie", "Odzyskiwanie klientów", "Nic nie trzeba pamiętać"] },
      { icon: "git-branch", title: "Warunki", text: "Sprawdzaj np. nowe rezerwacje i zatrzymuj sekwencję na czas.", points: ["Bez podwójnych e-maili", "Inteligentne rozgałęzienia", "Trafniejsze wiadomości"] },
      { icon: "heart", title: "Sekwencje pozabiegowe", text: "Najpierw pytanie o samopoczucie, potem ewentualnie kolejna wizyta – tylko wtedy, gdy ma to sens.", points: ["Większa lojalność", "Mniej nieodwołanych wizyt", "Więcej kolejnych wizyt"] },
      { icon: "zap", title: "Odzyskiwanie klientów", text: "Automatycznie zapraszaj klientów ponownie po dłuższej przerwie.", points: ["60–90 dni", "Osobiście", "Bez chaosu w listach"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o automatyzacje dla klientów",
    items: [
      {
        question: "Czym są automatyzacje dla klientów w Treatflow?",
        answer:
          "Automatyzacje dla klientów to wieloetapowe sekwencje: budujesz je z wyzwalacza, czasu oczekiwania, wiadomości i warunków. Dzięki temu opieka pozabiegowa, odzyskiwanie klientów i follow-upy działają automatycznie – bez ręcznego pisania każdej wiadomości.",
      },
      {
        question: "Czym automatyzacje różnią się od zwykłych przypomnień?",
        answer:
          "Zwykłe wiadomości (np. przypomnienia o wizycie) to jeden wyzwalacz i jedna wiadomość. Automatyzacje służą do sekwencji z wieloma krokami i rozgałęzieniami – na przykład: zapytać po zabiegu, odczekać, sprawdzić, czy jest nowa rezerwacja, i dopiero wtedy wysłać drugą wiadomość.",
      },
      {
        question: "Jakim kanałem wysyłane są wiadomości z automatyzacji?",
        answer:
          "Kroki automatyzacji są wysyłane e-mailem. Przypomnienia o wizytach pozostają dostępne w zwykłych wiadomościach.",
      },
      {
        question: "Czy automatyzacja może się zatrzymać, gdy klient zarezerwuje ponownie?",
        answer:
          "Tak. Możesz ustawić warunki, np. sprawdzić, czy od ostatniej wizyty pojawiła się nowa rezerwacja. Jeśli tak, sekwencja się zatrzymuje – pozostajesz w kontakcie bez wysyłania podwójnych wiadomości.",
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
    description: "Wypróbuj za darmo przez 14 dni – opieka pozabiegowa i odzyskiwanie klientów bez ręcznego przypominania się.",
    secondary: { label: "Przejdź do przypomnień", href: { page: "messaging" } },
  },
};
