export const demoCopyNl = {
  gallery: {
    eyebrow: 'Voorbeeldformulieren',
    titleBefore: 'Formulieren uitproberen – ',
    titleHighlight: 'zonder account',
    intro:
      'Dit zijn voorbeeldsjablonen, zodat je digitale intake, toestemming en handtekening in Treatflow zelf kunt ervaren. Je eigen formulieren maak je met de formuliergenerator – of we helpen je ze op te zetten.',
    points: [
      'Alleen voorbeeldsjablonen',
      'Eigen formulieren maken met de generator',
      'We helpen je nieuwe formulieren op te zetten',
      'Er wordt niets opgeslagen',
    ],
    noticeTitle: 'Voorbeeldsjablonen ter oriëntatie',
    noticeText:
      'De formulieren hieronder laten zien hoe de digitale check-in in Treatflow werkt – intake, toestemming en handtekening. Formulieren voor je eigen salon maak je met de AI-generator, of we zetten ze samen met je op.',
    generatorTitle: 'Zelf maken met de formuliergenerator',
    generatorText:
      'Beschrijf een behandeling in je eigen woorden. De AI maakt de velden; daarna kun je alles aanpassen.',
    generatorCta: 'Zo werkt de generator',
    supportTitle: 'We helpen je nieuwe formulieren op te zetten',
    supportText:
      'Heb je intake-, toestemmings- of nazorgformulieren nodig voor je behandelingen? Die zetten we samen met je op tijdens de onboarding.',
    supportCta: 'Rondleiding plannen',
    cardsHeading: 'Open een voorbeeldformulier',
    fillCta: 'Nu invullen',
    pagesLabel: (count: number) => (count === 1 ? '1 pagina' : `${count} pagina's`),
    difficulty: {
      einfach: 'Snel ingevuld',
      mittel: 'Met toestemming',
      komplex: 'Volledige intake',
    } as Record<string, string>,
    bottomLock: 'De demo slaat niets op',
    bottomTitle: 'Klaar om formulieren in je salon te gebruiken?',
    bottomText:
      'Deze voorbeelden zijn een startpunt. Pas sjablonen aan, verstuur ze via een link, of laat ons je helpen nieuwe formulieren te maken – 14 dagen gratis.',
    trialCta: 'Probeer 14 dagen gratis',
    moreCta: 'Meer over formulieren',
  },
  player: {
    allTemplates: 'Alle voorbeelden',
    demoBadge: 'Demo – er wordt niets opgeslagen',
    banner:
      'Dit is een voorbeeldformulier. Zo ziet je klant het bij de check-in. Antwoorden blijven in deze browser en worden niet naar Treatflow verstuurd.',
    requiredCheckbox: 'Kies minstens één optie.',
    requiredField: 'Vul dit veld in.',
    requiredSignature: 'Zet hier je handtekening.',
    completedNote: 'Demo afgerond – er is niets opgeslagen.',
    completedFallback:
      'Zo komt het ingevulde formulier later in het klantdossier te staan – met handtekening en tijdstempel.',
    doneTitle: 'Dat was de check-in van je klant',
    doneText:
      'In Treatflow pas je sjablonen aan, verstuur je ze via een link of QR-code, of maak je nieuwe formulieren met de generator. We kunnen ze ook samen met je opzetten.',
    trialCta: 'Probeer 14 dagen gratis',
    moreSamples: 'Meer voorbeelden openen',
    signatureSection: 'Handtekening',
    signHint: 'Teken met je vinger of muis',
    clear: 'Wissen',
    signHere: 'Hier tekenen',
    back: 'Terug',
    next: 'Verder',
    submit: 'Versturen',
    restart: 'Opnieuw invullen',
    drawingSkip:
      'Niet beschikbaar in de demo. In Treatflow kunnen klanten hier direct op een sjabloon tekenen.',
    fileSkip: 'Niet beschikbaar in de demo. In Treatflow kunnen klanten hier bestanden uploaden.',
    defaultSignature: 'Handtekening klant',
    done: 'Klaar',
  },
  meta: {
    galleryTitle: 'Voorbeeldformulieren uitproberen zonder account',
    galleryDescription:
      'Open voorbeeldsjablonen van Treatflow en vul ze in – zonder account. Maak je eigen formulieren met de formuliergenerator, of laat ons je helpen nieuwe formulieren op te zetten.',
    playerTitle: (name: string) => `${name} uitproberen`,
    playerDescription: (description: string) =>
      `${description} Voorbeeldformulier – zonder account, er wordt niets opgeslagen.`,
    notFound: 'Formulier niet gevonden',
  },
};
