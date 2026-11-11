const pluralPages = (count: number): string => {
  if (count === 1) return '1 strona';
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} strony`;
  return `${count} stron`;
};

export const demoCopyPl = {
  gallery: {
    eyebrow: 'Przykładowe formularze',
    titleBefore: 'Wypróbuj formularze – ',
    titleHighlight: 'bez rejestracji',
    intro:
      'To przykładowe szablony, dzięki którym poczujesz, jak w Treatflow działają cyfrowy wywiad kosmetyczny, zgoda na zabieg i podpis. Własne formularze stworzysz w edytorze formularzy – albo pomożemy Ci je przygotować.',
    points: [
      'Tylko przykładowe szablony',
      'Własne formularze w edytorze',
      'Pomagamy przygotować nowe formularze',
      'Nic nie jest zapisywane',
    ],
    noticeTitle: 'Przykładowe szablony dla orientacji',
    noticeText:
      'Poniższe formularze pokazują, jak w Treatflow działa cyfrowa rejestracja klienta – wywiad kosmetyczny, zgoda na zabieg i podpis. Formularze dla Twojego salonu stworzysz w edytorze formularzy albo przygotujemy je razem z Tobą.',
    generatorTitle: 'Twórz własne formularze w edytorze',
    generatorText:
      'Zacznij od szablonu lub pustego formularza i przeciągnij potrzebne pola – z pytaniami warunkowymi, szkicami i podpisem.',
    generatorCta: 'Jak działa edytor',
    supportTitle: 'Pomagamy przygotować nowe formularze',
    supportText:
      'Potrzebujesz karty wywiadu, zgody na zabieg lub zaleceń pozabiegowych do swoich zabiegów? Przygotujemy je razem z Tobą podczas wdrożenia.',
    supportCta: 'Umów prezentację',
    cardsHeading: 'Otwórz przykładowy formularz',
    fillCta: 'Wypełnij teraz',
    pagesLabel: (count: number) => pluralPages(count),
    difficulty: {
      einfach: 'Szybkie wypełnienie',
      mittel: 'Ze zgodą na zabieg',
      komplex: 'Pełny wywiad',
    } as Record<string, string>,
    bottomLock: 'Demo niczego nie zapisuje',
    bottomTitle: 'Chcesz korzystać z formularzy w swoim salonie?',
    bottomText:
      'Te przykłady to punkt wyjścia. Dostosuj szablony, wysyłaj je linkiem albo stwórz z nami nowe formularze – 14 dni za darmo.',
    trialCta: 'Wypróbuj 14 dni za darmo',
    moreCta: 'Więcej o formularzach',
  },
  player: {
    allTemplates: 'Wszystkie przykłady',
    demoBadge: 'Demo – nic nie jest zapisywane',
    banner:
      'To przykładowy formularz. Pokazuje, co klienci widzą podczas rejestracji przed wizytą. Odpowiedzi zostają w tej przeglądarce i nie są wysyłane do Treatflow.',
    requiredCheckbox: 'Wybierz co najmniej jedną opcję.',
    requiredField: 'Wypełnij to pole.',
    requiredSignature: 'Złóż tutaj podpis.',
    completedNote: 'Demo zakończone – nic nie zostało zapisane.',
    completedFallback:
      'Tak wypełniony formularz trafia później do karty klienta – z podpisem i znacznikiem czasu.',
    doneTitle: 'Tak wygląda rejestracja klienta w Twoim salonie',
    doneText:
      'W Treatflow dostosujesz szablony, wyślesz je linkiem lub kodem QR albo stworzysz nowe formularze w edytorze. Możemy też przygotować je razem z Tobą.',
    trialCta: 'Wypróbuj 14 dni za darmo',
    moreSamples: 'Otwórz więcej przykładów',
    signatureSection: 'Podpis',
    signHint: 'Podpisz palcem lub myszką',
    clear: 'Wyczyść',
    signHere: 'Podpisz tutaj',
    back: 'Wstecz',
    next: 'Dalej',
    submit: 'Wyślij',
    restart: 'Wypełnij ponownie',
    drawingSkip:
      'Niedostępne w wersji demo. W Treatflow klienci mogą tutaj rysować bezpośrednio na szablonie.',
    fileSkip: 'Niedostępne w wersji demo. W Treatflow klienci mogą tutaj przesyłać pliki.',
    defaultSignature: 'Podpis klientki/klienta',
    done: 'Gotowe',
  },
  meta: {
    galleryTitle: 'Wypróbuj przykładowe formularze bez rejestracji',
    galleryDescription:
      'Otwórz przykładowe szablony Treatflow i wypełnij je – bez zakładania konta. Własne formularze stworzysz w edytorze albo pomożemy Ci przygotować nowe.',
    playerTitle: (name: string) => `Wypróbuj: ${name}`,
    playerDescription: (description: string) =>
      `${description} Przykładowy formularz – bez rejestracji, nic nie jest zapisywane.`,
    notFound: 'Nie znaleziono formularza',
  },
};
