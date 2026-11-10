import type { BlogArticle } from "../types";

/**
 * Nederlandse blogartikelen (/nl/blog). Doelgroep: schoonheidssalons,
 * huidtherapie- en esthetische klinieken, nagel-, wimper-, PMU- en
 * laserstudio's in Nederland en Vlaanderen.
 */
export const posts: BlogArticle[] = [
  // ---------------------------------------------------------------------------
  // 1. Salonsoftware kiezen
  // ---------------------------------------------------------------------------
  {
    topic: "choose-salon-software",
    lang: "nl",
    slug: "salonsoftware-kiezen",
    title: "Salonsoftware kiezen in 2026: waar let je op als schoonheidssalon?",
    metaTitle: "Salonsoftware kiezen: checklist voor je salon (2026)",
    description:
      "Salonsoftware kiezen voor je schoonheidssalon of kliniek? Deze checklist helpt je agenda, online boeken, klantenkaart, AVG en kosten eerlijk te vergelijken.",
    excerpt:
      "Agenda, online boeken, klantenkaart, intakeformulieren en AVG: zo vergelijk je salonsoftware op wat er in de praktijk echt toe doet.",
    category: "Software & digitalisering",
    keywords: [
      "salonsoftware",
      "salonsoftware vergelijken",
      "software schoonheidssalon",
      "salonsoftware nederland",
      "afsprakensysteem salon",
      "beste salonsoftware",
      "software huidtherapeut",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Goede salonsoftware combineert een overzichtelijke agenda, online boeken via je eigen link, een digitale klantenkaart met behandelgeschiedenis en digitale intake- en toestemmingsformulieren in één systeem. Let daarnaast op AVG-proof hosting binnen de EU, transparante vaste kosten zonder commissie per boeking en een gratis proefperiode waarin je je eigen werkdag echt kunt testen.",
    takeaways: [
      "Begin bij je werkdag, niet bij de featurelijst: welke handelingen kosten je nu de meeste tijd?",
      "Een platform met commissie per boeking is iets anders dan salonsoftware met een vast maandbedrag.",
      "Voor behandelingen met gezondheidsvragen heb je digitale intake, toestemming en documentatie nodig, niet alleen een agenda.",
      "Controleer waar de data staat (EU-hosting), of je een verwerkersovereenkomst krijgt en of je je gegevens kunt exporteren.",
      "Test minimaal één volle werkweek met echte afspraken voordat je beslist.",
    ],
    intro: [
      "Een papieren agenda, een Excel-lijst met klanten, intakeformulieren in een ordner en herinneringen via je eigen WhatsApp: veel salons zijn zo begonnen en het werkt, tot het niet meer werkt. Een dubbele boeking, een klant die drie keer belt om te verzetten, een intakeformulier dat net niet te vinden is wanneer je het nodig hebt.",
      "Het aanbod aan salonsoftware is groot en de websites lijken op elkaar. In dit artikel krijg je een praktische manier om pakketten te vergelijken, met een checklist die je naast elke demo of proefperiode kunt leggen.",
    ],
    sections: [
      {
        heading: "Wat moet salonsoftware minimaal kunnen?",
        paragraphs: [
          "De basis is voor bijna elke salon hetzelfde. Zonder deze onderdelen blijf je toch met losse tools en papier werken, en dan verdwijnt de tijdwinst.",
        ],
        bullets: [
          "**Agenda per medewerker of ruimte**: zodat je ziet wie, waar en wanneer vrij is, ook als je een laserruimte of behandelstoel deelt.",
          "**Online boeken**: klanten plannen zelf, 24/7, binnen jouw regels (behandelduur, pauzes, buffertijd).",
          "**Digitale klantenkaart**: contactgegevens, behandelgeschiedenis, notities en foto's op één plek.",
          "**Digitale formulieren**: intake, anamnese en toestemming met handtekening, vooraf verstuurd.",
          "**Automatische herinneringen**: per e-mail en sms, zodat je minder no-shows hebt.",
          "**Rapportage op hoofdlijnen**: welke behandelingen lopen goed, hoe vol is je agenda.",
        ],
      },
      {
        heading: "Platform of eigen salonsoftware: wat is het verschil?",
        paragraphs: [
          "Dit is de belangrijkste keuze, en hij wordt vaak over het hoofd gezien. Een **boekingsplatform of marktplaats** brengt je zichtbaarheid, maar verdient vaak aan commissie op nieuwe klanten of aan betaaldiensten. Je klant boekt dan in een omgeving waar ook je concurrenten staan.",
          "**Salonsoftware met een vast maandbedrag** werkt anders: je betaalt voor het systeem, klanten boeken via je eigen boekingslink op je website, Instagram of Google-profiel, en de klantrelatie blijft van jou. Treatflow valt in die tweede categorie: geen marktplaats en geen commissie per boeking.",
        ],
        table: {
          headers: ["", "Marktplaats / platform", "Salonsoftware met vast tarief"],
          rows: [
            ["Kostenmodel", "Vaak commissie of transactiekosten", "Vast bedrag per maand"],
            ["Waar boekt de klant?", "Op het platform, tussen andere salons", "Via jouw eigen boekingslink"],
            ["Klantrelatie", "Gedeeld met het platform", "Volledig bij jou"],
            ["Sterk in", "Nieuwe klanten vinden", "Vaste klanten, dossier, documentatie"],
          ],
        },
        callout:
          "Twijfel je? Reken uit wat je in een gemiddelde maand aan commissie of transactiekosten kwijt zou zijn en zet dat naast een vast maandbedrag.",
      },
      {
        heading: "Welke extra functies zijn belangrijk voor klinieken en laserstudio's?",
        paragraphs: [
          "Werk je met laser, IPL, peelings, microneedling, PMU of injectables (onder verantwoordelijkheid van een arts), dan is een agenda niet genoeg. Je moet kunnen aantonen wat je hebt gedaan, met welke instellingen en met welke toestemming.",
        ],
        bullets: [
          "Behandeldocumentatie per bezoek: parameters, gebruikte producten, huidreactie.",
          "Voor- en na-foto's gekoppeld aan het bezoek, niet los in je telefoon.",
          "Toestemmingsformulieren met digitale handtekening en datum.",
          "Spraakgestuurde notities, zodat je tussen twee klanten niet hoeft te typen.",
          "Rechten per medewerker: niet iedereen hoeft alle gezondheidsgegevens te zien.",
        ],
      },
      {
        heading: "Hoe beoordeel je salonsoftware op AVG en privacy?",
        paragraphs: [
          "Je verwerkt als salon al snel gezondheidsgegevens: allergieën, medicatie, zwangerschap, huidaandoeningen. Onder de AVG zijn dat bijzondere persoonsgegevens. Jij blijft verantwoordelijk, ook als de software van een leverancier is.",
        ],
        steps: [
          "Vraag waar de servers staan. Hosting binnen de EU maakt je verhaal naar klanten en de Autoriteit Persoonsgegevens een stuk eenvoudiger.",
          "Vraag om een verwerkersovereenkomst. Die is verplicht zodra een leverancier persoonsgegevens voor jou verwerkt.",
          "Controleer of de verbinding versleuteld is (SSL) en of er dagelijks back-ups worden gemaakt.",
          "Vraag hoe je je gegevens exporteert als je ooit overstapt. Jij bent eigenaar van je klantdata.",
        ],
      },
      {
        heading: "Wat kost salonsoftware per maand?",
        paragraphs: [
          "Prijzen lopen sterk uiteen: van gratis pakketten die verdienen aan betalingen of extra's, tot uitgebreide systemen met prijs per medewerker. Kijk niet alleen naar het bedrag op de prijspagina, maar naar je **totale kosten**: sms-bundels, extra gebruikers, commissies, opstartkosten en de tijd die je kwijt bent met dubbel werk.",
          "Ter referentie: Treatflow kost 39 euro per maand voor het Basic-pakket (klantenkaart, formulieren, documentatie) en 59 euro per maand voor Booking (met agenda, online boeken en automatische sms- en e-mailherinneringen). Bij jaarlijkse betaling is dat 35 respectievelijk 53 euro per maand, met een gratis proefperiode van 14 dagen zonder creditcard.",
        ],
      },
      {
        heading: "Hoe test je salonsoftware in de proefperiode?",
        paragraphs: [
          "Een demo laat het mooiste scenario zien. Een proefperiode laat zien hoe het voelt op een drukke dinsdag. Gebruik die tijd gestructureerd.",
        ],
        steps: [
          "Zet je vijf meest geboekte behandelingen erin, met de echte duur en prijs inclusief btw.",
          "Laat een vriendin of vaste klant online boeken via je link, op haar eigen telefoon.",
          "Stuur een intakeformulier vooraf en kijk hoe het eruitziet aan de kant van de klant.",
          "Leg een behandeling vast met notities en een foto, en zoek die een dag later weer op.",
          "Verzet een afspraak en controleer of de herinnering netjes meeverhuist.",
          "Vraag iets aan de support en let op snelheid en kwaliteit van het antwoord.",
        ],
      },
      {
        heading: "Hoe stap je over zonder je klanten kwijt te raken?",
        paragraphs: [
          "De grootste zorg bij een overstap is niet de software zelf, maar de overgangsperiode. Klanten hebben nog afspraken in het oude systeem, je team moet wennen en je wilt geen dag zonder overzicht. Met een korte planning gaat het meestal soepeler dan verwacht.",
          "Kies een rustige periode, bijvoorbeeld na de feestdagen of in de zomer, en geef jezelf twee tot drie weken waarin beide systemen naast elkaar bestaan. Nieuwe afspraken zet je meteen in het nieuwe systeem; bestaande afspraken laat je in het oude systeem aflopen of zet je in één keer over.",
        ],
        steps: [
          "Exporteer je klantenbestand uit je huidige systeem of Excel-lijst en importeer het in de nieuwe software.",
          "Zet je behandelingen, prijzen, medewerkers en openingstijden klaar voordat je de boekingslink deelt.",
          "Bouw je intake- en toestemmingsformulieren na, of start vanuit sjablonen en pas ze aan.",
          "Vervang de oude boekingslink overal: website, Instagram, Google-bedrijfsprofiel en e-mailhandtekening.",
          "Laat je team een paar oefenafspraken maken voordat de eerste echte klant boekt.",
          "Stuur vaste klanten een kort bericht dat je voortaan op een nieuwe manier online afspraken plant.",
        ],
        callout:
          "Bewaar je oude gegevens tot je zeker weet dat alles goed is overgezet, en ruim ze daarna op volgens je eigen bewaartermijnen.",
      },
      {
        heading: "Checklist: welke vragen stel je elke leverancier?",
        paragraphs: ["Leg deze vragen naast elk pakket dat je overweegt."],
        bullets: [
          "Betaal ik commissie of transactiekosten per boeking?",
          "Boeken klanten via mijn eigen link of via een platform?",
          "Kan ik intake- en toestemmingsformulieren vooraf laten invullen en ondertekenen?",
          "Waar staan de gegevens en krijg ik een verwerkersovereenkomst?",
          "Werkt het goed op telefoon en tablet in de behandelruimte?",
          "Kan ik maandelijks opzeggen en mijn data exporteren?",
          "Is de software beschikbaar in een taal die mijn team prettig vindt?",
        ],
      },
    ],
    faq: [
      {
        q: "Wat is het verschil tussen salonsoftware en een boekingsplatform?",
        a: "Een boekingsplatform is een marktplaats waar klanten tussen veel salons kiezen; vaak betaal je commissie of transactiekosten. Salonsoftware is je eigen systeem met agenda, klantenkaart en online boeken via je eigen link, meestal tegen een vast maandbedrag.",
      },
      {
        q: "Heb ik als kleine salon met één behandelstoel salonsoftware nodig?",
        a: "Juist als je alleen werkt, scheelt het veel: klanten boeken zelf terwijl jij behandelt, herinneringen gaan automatisch en je intakeformulieren staan klaar. Je bent minder tijd kwijt aan telefoon en WhatsApp.",
      },
      {
        q: "Kan ik mijn bestaande klantenbestand overzetten?",
        a: "Bij de meeste pakketten kun je klanten importeren, bijvoorbeeld vanuit een Excel- of CSV-bestand. Vraag vooraf welke velden worden meegenomen en of behandelgeschiedenis ook mee kan.",
      },
      {
        q: "Is salonsoftware AVG-proof?",
        a: "Software kan je helpen, maar de AVG-plicht ligt bij jou als salon. Kies een leverancier met EU-hosting, versleuteling en een verwerkersovereenkomst, en richt toegangsrechten en bewaartermijnen zelf goed in.",
      },
      {
        q: "Hoe lang moet ik salonsoftware testen?",
        a: "Minimaal een volle werkweek met echte afspraken. Treatflow biedt 14 dagen gratis, zonder creditcard, zodat je ook herinneringen en online boekingen in de praktijk kunt zien.",
      },
    ],
    related: [
      { pageKey: "beauty-salon-software", label: "Software voor schoonheidssalons" },
      { pageKey: "features", label: "Alle functies van Treatflow" },
      { pageKey: "pricing", label: "Prijzen en pakketten" },
      { pageKey: "software-comparison", label: "Salonsoftware vergelijken" },
    ],
    sources: [
      { label: "Autoriteit Persoonsgegevens", url: "https://autoriteitpersoonsgegevens.nl" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. No-shows verminderen
  // ---------------------------------------------------------------------------
  {
    topic: "reduce-no-shows",
    lang: "nl",
    slug: "no-shows-verminderen-salon",
    title: "No-shows verminderen in je salon: 9 maatregelen die echt werken",
    metaTitle: "No-shows verminderen in je salon: 9 tips die werken",
    description:
      "Last van no-shows in je schoonheidssalon? Zo verminder je gemiste afspraken met herinneringen, een helder annuleringsbeleid, online verzetten en een wachtlijst.",
    excerpt:
      "Een lege stoel kost omzet die je niet terugkrijgt. Met deze negen maatregelen verminder je no-shows zonder je klanten af te schrikken.",
    category: "Agenda & planning",
    keywords: [
      "no-shows verminderen",
      "no show salon",
      "afspraakherinnering sms",
      "annuleringsbeleid schoonheidssalon",
      "no-show kosten salon",
      "klant komt niet opdagen",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "No-shows verminder je vooral met automatische herinneringen per e-mail en sms een dag tot twee dagen vooraf, een duidelijk annuleringsbeleid dat de klant bij het boeken bevestigt en de mogelijkheid om zelf online te verzetten. Vul vrijgekomen plekken daarna snel op via een wachtlijst of last-minutebericht.",
    takeaways: [
      "De meeste no-shows zijn vergeetachtigheid, geen onwil: een goede herinnering lost veel op.",
      "Maak verzetten makkelijker dan wegblijven, bijvoorbeeld met een link in de herinnering.",
      "Een annuleringsbeleid werkt pas als de klant het vóór de afspraak heeft gezien en geaccepteerd.",
      "Registreer no-shows op de klantenkaart, zodat je patronen herkent en gericht kunt handelen.",
    ],
    intro: [
      "Een klant die niet komt opdagen, voelt persoonlijk, maar is vooral een rekensom. Een gemiste behandeling van een uur is omzet die je niet meer inhaalt, plus de voorbereiding die je al had gedaan. In een salon met lange behandelingen, zoals wimperextensions, PMU of laser, tikt dat snel aan.",
      "Het goede nieuws: no-shows zijn voor een groot deel te voorkomen. Niet door strenger te worden, maar door het je klant makkelijk te maken om op tijd te komen of op tijd af te zeggen.",
    ],
    sections: [
      {
        heading: "Waarom komen klanten niet opdagen?",
        paragraphs: [
          "Als je met klanten praat die een afspraak hebben gemist, hoor je meestal dezelfde redenen. Wie de oorzaak kent, kiest de juiste maatregel.",
        ],
        bullets: [
          "**Vergeten**: de afspraak is weken geleden gemaakt en staat niet in hun agenda.",
          "**Drempel om af te zeggen**: bellen voelt ongemakkelijk, dus ze laten het maar zitten.",
          "**Onduidelijkheid**: verkeerde dag of tijd in gedachten, of geen bevestiging ontvangen.",
          "**Lage betrokkenheid**: nieuwe klanten die nog geen band met je salon hebben.",
          "**Overmacht**: ziekte, kinderen, werk. Dat voorkom je niet, maar je kunt het wel eerder horen.",
        ],
      },
      {
        heading: "Welke 9 maatregelen verminderen no-shows?",
        paragraphs: [
          "Je hoeft niet alles tegelijk in te voeren. Begin met de eerste drie; die hebben in de praktijk het meeste effect.",
        ],
        steps: [
          "**Stuur direct een bevestiging** na het boeken, met datum, tijd, adres en behandeling.",
          "**Stuur een automatische herinnering** 24 tot 48 uur vooraf per e-mail en sms. Bij lange behandelingen kan een tweede herinnering een week eerder helpen.",
          "**Zet een verzet- of annuleerlink in de herinnering**, zodat afzeggen één klik is in plaats van een telefoontje.",
          "**Formuleer een kort annuleringsbeleid**, bijvoorbeeld: kosteloos annuleren tot 24 uur vooraf. Laat klanten dit bij het boeken zien.",
          "**Laat nieuwe klanten hun gegevens volledig invullen**: een geldig telefoonnummer en e-mailadres zijn de basis van elke herinnering.",
          "**Stuur het intakeformulier vooraf**: wie dat invult, is al bezig met de afspraak en komt vaker.",
          "**Werk met een wachtlijst** voor populaire tijden, zodat je een vrijgekomen plek snel opvult.",
          "**Noteer no-shows op de klantenkaart**, zodat je herhaling ziet.",
          "**Overweeg een aanbetaling** voor lange of dure behandelingen of voor klanten die vaker niet kwamen.",
        ],
      },
      {
        heading: "Wanneer stuur je de herinnering het best?",
        paragraphs: [
          "Te vroeg en de klant vergeet het alsnog; te laat en je kunt de plek niet meer opvullen. Een vuistregel die bij veel salons werkt:",
        ],
        table: {
          headers: ["Moment", "Kanaal", "Doel"],
          rows: [
            ["Direct na boeken", "E-mail", "Bevestiging met alle details"],
            ["2 dagen vooraf", "E-mail of sms", "Herinnering met verzetlink, tijd om op te vullen"],
            ["Ochtend van de afspraak", "Sms (optioneel)", "Laatste geheugensteun bij vroege of lange afspraken"],
          ],
        },
        callout:
          "In Treatflow stel je herinneringen per e-mail en sms één keer in; daarna gaan ze automatisch voor elke afspraak de deur uit, ook als je een afspraak verzet.",
      },
      {
        heading: "Hoe maak je een annuleringsbeleid dat klanten accepteren?",
        paragraphs: [
          "Een annuleringsbeleid is geen straf, maar een afspraak. Klanten accepteren het beter als het kort, redelijk en vooraf duidelijk is.",
          "Zet het op je website, bij je online boekingspagina en in je bevestiging. Houd het vriendelijk: leg uit dat je tijd voor de klant vrijhoudt en dat je bij tijdig afzeggen iemand anders kunt helpen.",
        ],
        bullets: [
          "Noem een duidelijke termijn (bijvoorbeeld 24 of 48 uur).",
          "Zeg wat er gebeurt bij te laat annuleren of niet verschijnen.",
          "Maak een uitzondering mogelijk bij echte overmacht; dat voelt eerlijk.",
          "Houd je eraan. Een beleid dat je nooit toepast, werkt niet.",
        ],
      },
      {
        heading: "Is een aanbetaling via iDEAL een goed idee?",
        paragraphs: [
          "In Nederland zijn klanten gewend om snel met iDEAL te betalen, dus een aanbetaling voelt voor veel mensen niet vreemd. Het werkt vooral bij behandelingen van een uur of langer, bij nieuwe klanten voor dure trajecten (zoals een laserpakket of PMU) en bij klanten die eerder niet kwamen opdagen.",
          "Gebruik het gericht. Een aanbetaling voor elke korte behandeling kan nieuwe klanten afschrikken. Communiceer duidelijk of de aanbetaling wordt verrekend met de behandeling en wanneer je hem terugbetaalt.",
        ],
      },
      {
        heading: "Wat doe je met een klant die vaker niet komt?",
        paragraphs: [
          "Eén keer vergeten kan iedereen. Bij herhaling is een persoonlijk gesprek of bericht vaak effectiever dan een boete. Vraag vriendelijk wat er speelt en of een ander tijdstip beter past.",
          "Helpt dat niet, dan kun je voor deze klant online boeken beperken of alleen nog afspraken met aanbetaling aanbieden. Omdat je no-shows op de klantenkaart noteert, kun je dat onderbouwd doen.",
        ],
      },
      {
        heading: "Hoe vul je een vrijgekomen plek snel op?",
        paragraphs: [
          "Een tijdige afzegging is pas winst als je de plek ook weer vult. Hoe sneller je weet dat er ruimte is, hoe groter de kans dat dat lukt. Daarom loont het om afzeggen makkelijk te maken: elke annulering die twee dagen vooraf binnenkomt, is een kans in plaats van een verlies.",
          "Houd een wachtlijst bij van klanten die graag eerder willen of flexibel zijn, bijvoorbeeld zzp'ers, studenten of klanten die dichtbij wonen. Noteer per klant welke dagen en behandelingen passen. Valt er iets vrij, dan stuur je eerst een bericht aan die groep.",
        ],
        bullets: [
          "Zet vrijgekomen plekken direct weer open in je online agenda, zodat ze zelf geboekt kunnen worden.",
          "Plaats een korte last-minute melding in je Instagram-story met je boekingslink.",
          "Bel of app eerst klanten die al lang wachten op een plek bij een populaire behandelaar.",
          "Bied een kortere behandeling aan als de vrijgekomen tijd niet genoeg is voor de oorspronkelijke afspraak.",
          "Gebruik een onvulbaar gat voor administratie, voorraad of het voorbereiden van je volgende behandeling.",
        ],
      },
      {
        heading: "Hoe communiceer je je nieuwe beleid aan vaste klanten?",
        paragraphs: [
          "Voer je herinneringen, een annuleringstermijn of aanbetalingen in, vertel het dan vooraf aan je vaste klanten. Een kort, vriendelijk bericht werkt beter dan een plotselinge regel. Leg uit waarom: zo houd je tijd vrij voor iedereen en kun je klanten die op een plek wachten eerder helpen. De meeste vaste klanten begrijpen dat goed, en de klanten die het vaakst vergaten, zijn vaak blij met de herinnering.",
        ],
      },
      {
        heading: "Hoe meet je of je maatregelen werken?",
        paragraphs: [
          "Houd per maand bij hoeveel afspraken er zijn gemist en hoeveel er op tijd zijn verzet. Een stijging van het aantal verzette afspraken is goed nieuws: dat zijn klanten die vroeger simpelweg niet kwamen. Vergelijk de cijfers vóór en na het invoeren van automatische herinneringen.",
        ],
      },
    ],
    faq: [
      {
        q: "Mag ik no-showkosten in rekening brengen?",
        a: "Ja, als je dat vooraf duidelijk hebt afgesproken, bijvoorbeeld in je algemene voorwaarden of annuleringsbeleid dat de klant bij het boeken heeft gezien. Houd het bedrag redelijk in verhouding tot de gemiste behandeling.",
      },
      {
        q: "Werkt een sms beter dan een e-mail als herinnering?",
        a: "Een sms wordt meestal sneller gelezen, een e-mail is geschikt voor meer details. Veel salons combineren beide: een bevestiging per e-mail en een korte herinnering per sms.",
      },
      {
        q: "Mag ik herinneringen via mijn eigen WhatsApp sturen?",
        a: "Dat kan, maar het kost tijd en klantgegevens staan dan op je privételefoon. Een systeem dat herinneringen automatisch verstuurt, is betrouwbaarder en beter te verantwoorden onder de AVG.",
      },
      {
        q: "Hoeveel van tevoren moet een klant kunnen annuleren?",
        a: "Gangbaar is 24 uur. Voor lange behandelingen zoals PMU of een volledige set wimperextensions kiezen salons vaak 48 uur, omdat je die plek anders moeilijk opvult.",
      },
      {
        q: "Helpt online boeken tegen no-shows?",
        a: "Online boeken op zich niet, maar online verzetten wel. Als klanten zelf een nieuw moment kunnen kiezen via de link in hun herinnering, zeggen ze sneller tijdig af in plaats van weg te blijven.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Automatische herinneringen" },
      { pageKey: "online-booking", label: "Online boeken voor je salon" },
      { pageKey: "appointment-calendar", label: "Afsprakenkalender" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Online afspraken systeem
  // ---------------------------------------------------------------------------
  {
    topic: "online-booking-salon",
    lang: "nl",
    slug: "online-afspraken-systeem-salon",
    title: "Online afspraken laten maken: zo richt je online boeken in voor je salon",
    metaTitle: "Online afspraken systeem voor je salon: de gids",
    description:
      "Online afspraken laten maken in je salon? Zo richt je een online boekingssysteem in, stel je slimme regels in en krijg je meer boekingen zonder commissie.",
    excerpt:
      "Klanten willen 's avonds op de bank boeken, niet tijdens kantooruren bellen. Zo richt je online afspraken in zonder controle over je agenda te verliezen.",
    category: "Agenda & planning",
    keywords: [
      "online afspraken systeem",
      "online afspraken plannen salon",
      "online boeken schoonheidssalon",
      "boekingssysteem salon",
      "afspraken app salon",
      "online reserveringssysteem",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Met een online afspraken systeem plannen klanten zelf een behandeling via je eigen boekingslink, op elk moment van de dag. Je bepaalt vooraf welke behandelingen online boekbaar zijn, hoe lang ze duren, wie ze uitvoert en hoeveel buffertijd je nodig hebt, zodat je agenda vol raakt zonder dat je de controle verliest.",
    takeaways: [
      "Een groot deel van de boekingen gebeurt buiten openingstijden; zonder online boeken mis je die.",
      "Je eigen boekingslink op website, Instagram en Google-profiel houdt klanten bij jou in plaats van op een platform.",
      "Goede regels (duur, buffer, wie wat doet) zijn belangrijker dan het aantal functies.",
      "Combineer online boeken met automatische bevestiging, herinneringen en een intakeformulier vooraf.",
    ],
    intro: [
      "Je staat met handschoenen aan, je telefoon trilt, en je weet: dat is weer iemand die een afspraak wil. Terugbellen lukt pas na de behandeling, en dan heeft de klant misschien al ergens anders geboekt.",
      "Online boeken lost dat op. Maar alleen als je het goed inricht. In deze gids lees je hoe je dat stap voor stap doet, welke instellingen het verschil maken en hoe je klanten zover krijgt dat ze de link ook echt gebruiken.",
    ],
    sections: [
      {
        heading: "Wat zijn de voordelen van online afspraken voor je salon?",
        paragraphs: [
          "Het grootste voordeel is simpel: klanten boeken wanneer het hen uitkomt, niet wanneer jij tijd hebt om te bellen. Daarnaast:",
        ],
        bullets: [
          "**Minder telefoon en WhatsApp** tijdens behandelingen, dus meer rust en focus.",
          "**Minder fouten**: geen verkeerd overgenomen tijden of dubbele boekingen.",
          "**Een vollere agenda**, omdat ook avond- en weekendboekers terechtkunnen.",
          "**Betere gegevens**: de klant vult zelf naam, telefoonnummer en e-mailadres in.",
          "**Een professionele uitstraling**, vooral voor jongere klanten die niet graag bellen.",
        ],
      },
      {
        heading: "Eigen boekingslink of boeken via een platform?",
        paragraphs: [
          "Je kunt online boeken op twee manieren aanbieden. Via een **marktplaats** sta je tussen andere salons en betaal je vaak per nieuwe boeking. Via een **eigen boekingslink** boekt de klant direct bij jou, op een pagina met jouw naam, behandelingen en prijzen.",
          "Met Treatflow krijg je zo'n persoonlijke boekingslink zonder commissie per boeking. Die zet je in je Instagram-bio, op je Google-bedrijfsprofiel, in je WhatsApp-status en op je website. Heb je nog geen website, dan kun je optioneel een eenvoudige salonwebsite gebruiken.",
        ],
      },
      {
        heading: "Hoe richt je online boeken stap voor stap in?",
        paragraphs: ["Neem een rustige middag en loop deze stappen door."],
        steps: [
          "**Kies welke behandelingen online boekbaar zijn.** Begin met je standaardbehandelingen; complexe trajecten of eerste consulten kun je eerst alleen op aanvraag aanbieden.",
          "**Stel per behandeling de echte duur in**, inclusief voorbereiding en opruimen, en een buffertijd waar nodig.",
          "**Koppel behandelingen aan medewerkers of ruimtes**, zodat een laserbehandeling alleen geboekt kan worden als de laserruimte vrij is.",
          "**Zet je openingstijden en pauzes** goed in de agenda, en blokkeer vakanties tijdig.",
          "**Bepaal hoe ver vooruit en hoe kort van tevoren** klanten mogen boeken, bijvoorbeeld maximaal acht weken vooruit en minimaal vier uur van tevoren.",
          "**Schrijf heldere omschrijvingen** met prijs inclusief btw, wat de klant kan verwachten en eventuele voorbereiding.",
          "**Zet bevestiging en herinneringen aan**, en voeg je annuleringsbeleid toe.",
          "**Koppel een intakeformulier** aan behandelingen waarvoor je gezondheidsinformatie nodig hebt.",
          "**Test het zelf** op je telefoon, als klant.",
        ],
      },
      {
        heading: "Welke instellingen voorkomen chaos in je agenda?",
        paragraphs: [
          "De angst van veel salons: straks boekt iedereen wanneer hij wil en is je dag versnipperd. Dat voorkom je met een paar slimme regels.",
        ],
        table: {
          headers: ["Instelling", "Waarom", "Voorbeeld"],
          rows: [
            ["Buffertijd", "Tijd om op te ruimen en te ventileren", "10 minuten na een peeling"],
            ["Minimale boektijd", "Geen verrassingen op het laatste moment", "Minimaal 4 uur vooraf"],
            ["Maximale boekhorizon", "Flexibel blijven met je planning", "Tot 8 weken vooruit"],
            ["Ruimte of apparaat", "Dubbele bezetting voorkomen", "Laserruimte gekoppeld aan laserbehandelingen"],
            ["Alleen op aanvraag", "Consult nodig vóór de behandeling", "Eerste PMU-behandeling"],
          ],
        },
      },
      {
        heading: "Hoe krijg je klanten zover dat ze online boeken?",
        paragraphs: [
          "Een boekingslink die niemand vindt, levert niets op. Maak hem overal zichtbaar en noem hem actief.",
        ],
        bullets: [
          "Zet de link in je Instagram- en Facebook-bio en in je Google-bedrijfsprofiel.",
          "Zet een knop 'Afspraak maken' bovenaan je website.",
          "Stuur bij een WhatsApp-vraag de link terug: 'Je kunt hier direct een moment kiezen.'",
          "Zet een QR-code bij de balie en op je visitekaartjes.",
          "Vraag vaste klanten aan het eind van de behandeling of ze de volgende afspraak online willen plannen.",
        ],
      },
      {
        heading: "Welke fouten maken salons vaak bij online boeken?",
        paragraphs: [
          "De meeste problemen met online boeken komen niet door het systeem, maar door de instellingen. Herken je een van deze punten, dan is het vaak in een kwartier opgelost.",
        ],
        bullets: [
          "**Te veel keuze**: dertig varianten van dezelfde behandeling maken het lastig. Groepeer en houd namen herkenbaar.",
          "**Onrealistische duur**: een behandeling van 45 minuten waar je in de praktijk een uur voor nodig hebt, zorgt voor uitloop en stress.",
          "**Geen prijs of een prijs exclusief btw**: consumenten verwachten prijzen inclusief btw en willen vooraf weten wat ze betalen.",
          "**Vergeten vakanties**: blokkeer vrije dagen ruim vooruit, anders boeken klanten op dagen dat je er niet bent.",
          "**Geen foto of uitleg**: een korte omschrijving en eventueel een foto helpen nieuwe klanten de juiste behandeling te kiezen.",
          "**De link verstoppen**: als klanten drie keer moeten klikken voordat ze de boekingsknop vinden, bellen ze alsnog.",
        ],
      },
      {
        heading: "Welke behandelingen maak je beter niet direct online boekbaar?",
        paragraphs: [
          "Niet alles hoeft in één keer online. Behandelingen waarvoor je eerst de huid wilt zien, een patchtest moet doen of een uitgebreid gesprek nodig hebt, kun je beter als consult aanbieden. Denk aan een eerste laserbehandeling, PMU-wenkbrauwen, een chemische peeling of een behandeltraject bij acne. Laat de klant eerst een consult boeken; na dat gesprek plan je de vervolgafspraken samen. Zo combineer je het gemak van online boeken met de zorgvuldigheid die deze behandelingen vragen.",
        ],
      },
      {
        heading: "Hoe combineer je online boeken met intake en herinneringen?",
        paragraphs: [
          "Online boeken wordt pas echt efficiënt als de stappen erna ook automatisch gaan. In Treatflow ontvangt de klant na het boeken een bevestiging, krijgt hij of zij vooraf het juiste intake- of toestemmingsformulier om digitaal in te vullen en te ondertekenen, en volgt er automatisch een herinnering per e-mail of sms. Als de klant binnenkomt, staat alles al op de klantenkaart.",
        ],
        callout:
          "Tip: koppel het intakeformulier alleen aan behandelingen waar je het echt nodig hebt. Een te lang formulier voor een simpele manicure werkt averechts.",
      },
    ],
    faq: [
      {
        q: "Wat kost een online afspraken systeem voor een salon?",
        a: "Dat verschilt per aanbieder. Sommige platforms rekenen commissie per boeking, andere werken met een vast maandbedrag. Bij Treatflow zit online boeken in het Booking-pakket van 59 euro per maand (53 euro bij jaarlijkse betaling), zonder commissie.",
      },
      {
        q: "Kunnen klanten zelf hun afspraak verzetten of annuleren?",
        a: "Bij de meeste systemen wel, binnen de regels die jij instelt. Zo voorkom je dat klanten op het laatste moment afzeggen, en krijg je toch minder telefoontjes.",
      },
      {
        q: "Werkt online boeken ook als ik alleen werk?",
        a: "Ja, juist dan. Je kunt niet behandelen en tegelijk de telefoon opnemen. Met online boeken plannen klanten zelf terwijl jij werkt.",
      },
      {
        q: "Kan ik voorkomen dat nieuwe klanten meteen een dure behandeling boeken?",
        a: "Ja. Maak die behandeling alleen op aanvraag boekbaar of bied eerst een consult aan. Zo spreek je de klant eerst, voordat je tijd vastlegt.",
      },
      {
        q: "Hoe zet ik mijn boekingslink op Google?",
        a: "In je Google-bedrijfsprofiel kun je een link voor afspraken toevoegen. Plak daar je persoonlijke boekingslink, zodat mensen die je salon via Google Maps vinden direct kunnen boeken.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Online boeken zonder commissie" },
      { pageKey: "appointment-calendar", label: "Afsprakenkalender per medewerker" },
      { pageKey: "studio-website", label: "Salonwebsite met boekingsknop" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Digitaal intakeformulier
  // ---------------------------------------------------------------------------
  {
    topic: "digital-consultation-forms",
    lang: "nl",
    slug: "digitaal-intakeformulier-schoonheidssalon",
    title: "Digitaal intakeformulier voor je schoonheidssalon: wat moet erin?",
    metaTitle: "Digitaal intakeformulier schoonheidssalon: gids",
    description:
      "Wat hoort in een intakeformulier voor je salon of kliniek? Lees welke vragen je stelt, hoe digitale toestemming werkt en hoe je het AVG-proof bewaart.",
    excerpt:
      "Een goed intakeformulier beschermt je klant én jezelf. Zo bouw je een digitale intake met toestemming en handtekening die klanten vooraf invullen.",
    category: "Formulieren & documentatie",
    keywords: [
      "intakeformulier schoonheidssalon",
      "digitaal intakeformulier",
      "anamneseformulier",
      "toestemmingsformulier behandeling",
      "intakeformulier huidtherapie",
      "intakeformulier laserontharing",
      "toestemmingsverklaring schoonheidsspecialiste",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Een intakeformulier voor je salon bevat contactgegevens, relevante gezondheidsvragen (zoals allergieën, medicatie, zwangerschap en huidaandoeningen), eerdere behandelingen en een toestemmingsverklaring met handtekening. Laat het digitaal vooraf invullen, zodat je contra-indicaties ziet vóór de behandeling en alles veilig op de klantenkaart staat.",
    takeaways: [
      "Vraag alleen wat je echt nodig hebt voor een veilige behandeling; dat is ook wat de AVG verlangt.",
      "Maak per behandeltype een eigen formulier: laser vraagt andere vragen dan een manicure.",
      "Laat de intake vooraf invullen, zodat je tijdens de afspraak behandelt in plaats van formulieren doorneemt.",
      "Leg toestemming vast met datum en handtekening, en vernieuw de intake bij wijzigingen in gezondheid.",
    ],
    intro: [
      "Een klant ligt op je behandeltafel en vertelt halverwege dat ze sinds kort een retinolcrème gebruikt. Of dat ze zwanger is. Of dat ze vorige week in de zon heeft gelegen voor haar laserbehandeling. Dat wil je weten vóórdat je begint.",
      "Een goed intakeformulier, ook wel anamneseformulier genoemd, voorkomt dat. Het is een veiligheidsinstrument voor je klant en een bewijsstuk voor jou. In dit artikel lees je wat erin hoort, hoe je het digitaal organiseert en waar je op let onder de AVG.",
    ],
    sections: [
      {
        heading: "Waarom heb je een intakeformulier nodig?",
        paragraphs: [
          "Veel behandelingen hebben contra-indicaties: situaties waarin je een behandeling beter niet of aangepast uitvoert. Zonder intake ben je afhankelijk van wat de klant zich op dat moment herinnert.",
        ],
        bullets: [
          "**Veiligheid**: je ziet allergieën, medicatie en huidaandoeningen op tijd.",
          "**Kwaliteit**: je kunt de behandeling en producten afstemmen op de klant.",
          "**Bewijs**: bij een klacht of reactie kun je laten zien wat de klant heeft verklaard en waarvoor toestemming is gegeven.",
          "**Professionaliteit**: klanten merken dat je zorgvuldig werkt.",
        ],
      },
      {
        heading: "Welke vragen horen in een intakeformulier?",
        paragraphs: [
          "Het basisformulier is voor de meeste salons vergelijkbaar. Vul het per behandeling aan met specifieke vragen.",
        ],
        table: {
          headers: ["Onderdeel", "Voorbeeldvragen"],
          rows: [
            ["Persoonsgegevens", "Naam, geboortedatum, telefoon, e-mail"],
            ["Algemene gezondheid", "Chronische aandoeningen, diabetes, hart- of vaatproblemen, epilepsie"],
            ["Medicatie", "Bloedverdunners, antibiotica, isotretinoïne, middelen die lichtgevoelig maken"],
            ["Allergieën", "Producten, latex, pleisters, lijm, pigmenten"],
            ["Huid", "Eczeem, acne, littekenvorming, recente zon of zonnebank, pigmentvlekken"],
            ["Zwangerschap", "Zwanger of borstvoeding"],
            ["Eerdere behandelingen", "Peelings, fillers, laser, PMU, reacties daarop"],
            ["Toestemming", "Verklaring dat gegevens juist zijn en toestemming voor behandeling en eventueel foto's"],
          ],
        },
      },
      {
        heading: "Welke extra vragen stel je per behandeling?",
        paragraphs: [
          "Een laserstudio heeft andere informatie nodig dan een nagelstudio. Werk daarom met een basisdeel plus een behandelspecifiek deel.",
        ],
        bullets: [
          "**Laser en IPL**: huidtype, recente zonblootstelling, zelfbruiner, lichtgevoelig makende medicatie, tatoeages in het behandelgebied.",
          "**Wimperextensions en lash lift**: oogaandoeningen, contactlenzen, eerdere reacties op lijm.",
          "**PMU**: bloedverdunners, neiging tot keloïd, eerdere PMU, koortslip (bij lippen).",
          "**Peelings en microneedling**: gebruik van retinoïden, recente ingrepen, actieve ontstekingen.",
          "**Nagels**: schimmelinfecties, allergie voor gel of acryl.",
          "**Massage**: blessures, zwangerschap, spataderen, recente operaties.",
        ],
        callout:
          "Werk je onder medische verantwoordelijkheid, bijvoorbeeld in een esthetische kliniek met een arts, stem de intake dan af op wat de behandelaar en de beroepsregels voorschrijven.",
      },
      {
        heading: "Hoe werkt een digitale toestemming met handtekening?",
        paragraphs: [
          "Bij een digitaal formulier ondertekent de klant op haar telefoon of op een tablet in de salon. De handtekening, datum en ingevulde antwoorden worden samen opgeslagen. Zo weet je precies welke versie de klant heeft ondertekend.",
          "Leg in de toestemmingstekst duidelijk uit welke behandeling het betreft, welke risico's en mogelijke bijwerkingen er zijn, en wat de klant vóór en na de behandeling moet doen. Vraag foto-toestemming apart, en maak onderscheid tussen foto's voor het dossier en foto's voor social media.",
        ],
      },
      {
        heading: "Waarom de intake vooraf laten invullen?",
        paragraphs: [
          "Wie het formulier pas in de salon invult, gebruikt een deel van de behandeltijd en heeft vaak niet alle informatie paraat (welke medicatie precies?). Thuis vooraf invullen werkt beter.",
        ],
        steps: [
          "De klant boekt online of telefonisch.",
          "Het systeem stuurt automatisch het juiste formulier voor die behandeling.",
          "De klant vult het in en ondertekent op haar eigen telefoon.",
          "Jij ziet vóór de afspraak of er contra-indicaties zijn en kunt zo nodig contact opnemen.",
          "Bij binnenkomst bevestig je kort of er iets is veranderd, en je kunt beginnen.",
        ],
        callout:
          "In Treatflow verstuur je intake- en toestemmingsformulieren vooraf; de antwoorden en de handtekening komen direct op de klantenkaart, naast de behandeldocumentatie en foto's.",
      },
      {
        heading: "Hoe maak je een intakeformulier dat klanten echt invullen?",
        paragraphs: [
          "Een formulier van vijf pagina's met medische termen schrikt af. Klanten haken af of vullen het slordig in. Een goed formulier is kort waar het kan en precies waar het moet.",
        ],
        bullets: [
          "Gebruik ja/nee-vragen met een toelichtingsveld dat alleen verschijnt bij 'ja'.",
          "Schrijf in gewone taal: 'Gebruik je medicijnen die je huid gevoeliger maken voor zon?' in plaats van alleen een vakterm.",
          "Groepeer vragen per onderwerp, zodat het formulier overzichtelijk blijft.",
          "Maak alleen de vragen verplicht die je echt nodig hebt voor een veilige behandeling.",
          "Leg in één zin uit waarom je de vragen stelt; dat verhoogt het vertrouwen.",
          "Zorg dat het formulier goed werkt op een telefoon, want daar vullen de meeste klanten het in.",
        ],
      },
      {
        heading: "Hoe koppel je de intake aan je behandeldocumentatie?",
        paragraphs: [
          "De intake is het begin van het dossier, niet een los document. Wat de klant invult, bepaalt mede hoe je behandelt, en wat je tijdens de behandeling vastlegt, wil je later naast die intake terugzien. Noteer per bezoek de gebruikte producten of instellingen, de reactie van de huid en eventuele afwijkingen, en voeg foto's toe als dat bij het traject hoort. Zo zie je bij een volgende afspraak in één oogopslag wat er eerder is gebeurd, en heb je bij een vraag of klacht een volledig beeld. In Treatflow kun je die notities ook inspreken in plaats van typen, handig tussen twee klanten door.",
        ],
      },
      {
        heading: "Hoe vaak moet een klant de intake opnieuw invullen?",
        paragraphs: [
          "Gezondheid verandert. Een intake van twee jaar geleden zegt weinig over medicatie van vandaag. Veel salons kiezen voor een volledige intake bij het eerste bezoek en een korte controle bij elk volgend bezoek ('Is er sinds je vorige afspraak iets veranderd?'). Een nieuwe volledige intake vraag je bij een nieuw type behandeling of na een bepaalde periode, bijvoorbeeld jaarlijks.",
        ],
      },
      {
        heading: "Hoe bewaar je intakeformulieren AVG-proof?",
        paragraphs: [
          "Gezondheidsgegevens zijn onder de AVG bijzondere persoonsgegevens. Dat betekent: extra zorgvuldig omgaan met toegang, beveiliging en bewaartermijnen.",
        ],
        bullets: [
          "Bewaar formulieren niet als foto in je telefoon of in een gedeelde map.",
          "Gebruik een systeem met versleuteling, EU-hosting en een verwerkersovereenkomst.",
          "Geef alleen behandelaars toegang die de gegevens nodig hebben.",
          "Stel een bewaartermijn vast en verwijder gegevens van klanten die al lang niet meer komen.",
          "Vertel klanten in je privacyverklaring waarom je deze gegevens vraagt en hoe lang je ze bewaart.",
        ],
      },
    ],
    faq: [
      {
        q: "Is een intakeformulier verplicht voor een schoonheidssalon?",
        a: "Er is geen algemene wettelijke plicht voor elke cosmetische behandeling, maar voor behandelingen met risico's is het gangbare praktijk en vaak een eis van je verzekeraar of beroepsvereniging. Het beschermt je klant en jezelf.",
      },
      {
        q: "Mag ik gezondheidsvragen stellen onder de AVG?",
        a: "Ja, als je ze nodig hebt voor een veilige behandeling. Vraag niet meer dan nodig, leg uit waarom je het vraagt, beveilig de gegevens goed en bewaar ze niet langer dan nodig.",
      },
      {
        q: "Is een digitale handtekening net zo geldig als een handtekening op papier?",
        a: "Voor een toestemmingsverklaring in de salon is een digitale handtekening in de praktijk een goed bewijsmiddel, zeker als datum, tijd en de ondertekende versie van het formulier worden opgeslagen.",
      },
      {
        q: "Wat doe ik als een klant een contra-indicatie invult?",
        a: "Neem vóór de afspraak contact op. Soms kun je de behandeling aanpassen, soms is uitstel of overleg met een arts nodig. Noteer je beslissing op de klantenkaart.",
      },
      {
        q: "Kan ik mijn bestaande papieren formulier digitaal maken?",
        a: "Ja. Je kunt de vragen overnemen in een digitaal formulier. Bij Treatflow kun je ook starten vanuit kant-en-klare sjablonen en die aanpassen aan je eigen behandelingen.",
      },
    ],
    related: [
      { pageKey: "forms", label: "Digitale intake- en toestemmingsformulieren" },
      { pageKey: "treatment-documentation", label: "Behandeldocumentatie" },
      { pageKey: "client-records", label: "Digitale klantenkaart" },
    ],
    sources: [
      {
        label: "Algemene verordening gegevensbescherming (EUR-Lex)",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Klantenbinding
  // ---------------------------------------------------------------------------
  {
    topic: "client-retention",
    lang: "nl",
    slug: "klantenbinding-schoonheidssalon",
    title: "Klantenbinding in je schoonheidssalon: 7 strategieën voor vaste klanten",
    metaTitle: "Klantenbinding schoonheidssalon: 7 strategieën",
    description:
      "Meer vaste klanten in je salon? Met deze 7 strategieën voor klantenbinding laat je klanten vaker terugkomen: van herboeken en nazorg tot cadeaubonnen.",
    excerpt:
      "Een nieuwe klant werven kost meer moeite dan een bestaande klant behouden. Zo zorg je dat klanten na hun eerste bezoek terugkomen.",
    category: "Marketing & klanten",
    keywords: [
      "klantenbinding schoonheidssalon",
      "vaste klanten salon",
      "klanten behouden salon",
      "klantloyaliteit beauty",
      "salon marketing",
      "klanten terug laten komen",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Klantenbinding in je salon draait om drie dingen: een ervaring die persoonlijk voelt, een vervolgafspraak die je direct na de behandeling plant, en goed getimed contact daarna, zoals nazorgtips en een herinnering wanneer de volgende behandeling eraan komt. Een goed bijgehouden klantenkaart maakt dat mogelijk zonder dat je alles hoeft te onthouden.",
    takeaways: [
      "Plan de volgende afspraak vóórdat de klant de deur uitgaat; dat is de eenvoudigste vorm van binding.",
      "Persoonlijke details op de klantenkaart maken het verschil tussen 'een salon' en 'mijn salon'.",
      "Nazorg na de behandeling laat zien dat je om het resultaat geeft, niet alleen om de afspraak.",
      "Stuur klanten die lang niet zijn geweest een persoonlijk bericht, geen standaardkorting.",
      "Vraag toestemming voor marketingberichten; een nieuwsbrief zonder opt-in mag niet zomaar.",
    ],
    intro: [
      "De meeste salons hebben een kern van trouwe klanten die al jaren komen, en een grote groep die één of twee keer is geweest en daarna is verdwenen. Niet omdat ze ontevreden waren, maar omdat het leven doorgaat en niemand ze eraan herinnerde.",
      "Klantenbinding is geen kwestie van stempelkaarten en kortingen, maar van aandacht op het juiste moment. In dit artikel lees je zeven strategieën die je direct kunt toepassen.",
    ],
    sections: [
      {
        heading: "Waarom is klantenbinding belangrijker dan nieuwe klanten werven?",
        paragraphs: [
          "Een vaste klant kent je werkwijze, vertrouwt je, boekt vaker en raadt je aan bij vriendinnen. Een nieuwe klant moet je eerst vinden, overtuigen en leren kennen. Bovendien heb je bij vaste klanten al een intake, behandelgeschiedenis en voorkeuren: elke volgende afspraak gaat soepeler.",
          "Ook voor je planning is het prettig: met een stabiele groep vaste klanten weet je beter wat je kunt verwachten.",
        ],
      },
      {
        heading: "Welke 7 strategieën zorgen voor vaste klanten?",
        paragraphs: ["Kies er twee of drie om mee te beginnen en bouw daarna verder."],
        steps: [
          "**Herboek direct na de behandeling.** Stel aan het eind voor: 'Zullen we over vier weken alvast een moment vastleggen?' Bij wimpers, nagels en laser is het ideale interval bekend; gebruik dat.",
          "**Maak het persoonlijk.** Noteer op de klantenkaart wat ertoe doet: voorkeur voor een bepaalde behandelaar, gevoelige huid, haar favoriete product, dat ze binnenkort gaat trouwen.",
          "**Stuur nazorg.** Een kort bericht een dag na een peeling of laserbehandeling met nazorgtips voelt zorgzaam en vermindert vragen.",
          "**Herinner op het juiste moment.** Is de volgende behandeling volgens het schema aan de beurt, stuur dan een vriendelijke herinnering met je boekingslink.",
          "**Werk met behandeltrajecten.** Bij laserontharing of huidverbetering werk je toch al in reeksen; plan ze vooruit en laat de klant de voortgang zien met voor- en na-foto's.",
          "**Bied cadeaubonnen aan.** Een cadeaubon brengt vaak een nieuwe klant binnen die door een vaste klant is aanbevolen.",
          "**Vraag om feedback en reviews.** Een tevreden klant die een Google-review schrijft, bindt zich daarmee ook zelf aan je salon.",
        ],
      },
      {
        heading: "Hoe helpt een digitale klantenkaart bij klantenbinding?",
        paragraphs: [
          "Je kunt niet van honderden klanten onthouden wanneer ze voor het laatst kwamen, welke kleur ze vorige keer hadden of welke instelling je bij de laser gebruikte. Een digitale klantenkaart onthoudt het voor je.",
          "In Treatflow zie je per klant de behandelgeschiedenis, notities, foto's en ingevulde formulieren. Zo kun je bij elk bezoek verder waar je gebleven was, en zie je ook welke klanten al een tijd niet meer zijn geweest.",
        ],
      },
      {
        heading: "Hoe maak je van het eerste bezoek een tweede bezoek?",
        paragraphs: [
          "Het moment waarop je de meeste klanten verliest, is na het eerste bezoek. Een nieuwe klant heeft nog geen gewoonte en geen band met je salon. Juist daar loont extra aandacht.",
        ],
        steps: [
          "Neem bij het eerste bezoek iets meer tijd voor het gesprek: wat wil de klant bereiken en wat vond ze eerder minder fijn?",
          "Leg uit wat ze na de behandeling kan verwachten en wanneer een volgende behandeling zinvol is.",
          "Stel een vervolgafspraak voor, maar dring niet aan; geef anders je boekingslink mee.",
          "Stuur binnen een paar dagen een kort bericht met nazorgtips en de vraag hoe het resultaat bevalt.",
          "Noteer op de klantenkaart wat je hebt besproken, zodat je bij het tweede bezoek daarop kunt terugkomen.",
        ],
      },
      {
        heading: "Welke rol speelt je team bij klantenbinding?",
        paragraphs: [
          "Klanten binden zich vaak aan een persoon, niet aan een merk. Dat is mooi, maar ook kwetsbaar: als een medewerker vertrekt of ziek is, wil je niet dat de klant ook verdwijnt. Zorg daarom dat kennis over de klant niet alleen in iemands hoofd zit, maar op de klantenkaart. Spreek in je team af welke informatie je altijd noteert, en laat collega's bij een vervanging even de notities lezen voordat de klant binnenkomt. Zo voelt de klant zich ook bij een andere behandelaar herkend.",
        ],
      },
      {
        heading: "Hoe haal je klanten terug die lang niet zijn geweest?",
        paragraphs: [
          "Kijk regelmatig naar klanten die langer dan hun normale interval niet zijn geweest. Een klant die elke vier weken kwam en nu drie maanden wegblijft, verdient een persoonlijk bericht.",
        ],
        bullets: [
          "Schrijf persoonlijk, met de naam van de klant en de behandeling die ze meestal doet.",
          "Vraag oprecht hoe het gaat, in plaats van meteen een aanbieding te sturen.",
          "Voeg je boekingslink toe, zodat terugkomen één klik is.",
          "Heeft ze aangegeven niet tevreden te zijn, bel dan in plaats van te mailen.",
        ],
      },
      {
        heading: "Welke regels gelden voor marketingberichten in Nederland?",
        paragraphs: [
          "Een afspraakherinnering of nazorgbericht hoort bij de dienstverlening. Een nieuwsbrief of aanbieding is marketing. Voor marketing per e-mail of sms heb je in Nederland in principe vooraf toestemming nodig (opt-in). Voor bestaande klanten geldt een uitzondering voor vergelijkbare eigen diensten, zolang je ze bij het verzamelen van hun gegevens én in elk bericht de mogelijkheid geeft om zich af te melden.",
          "Leg vast wie toestemming heeft gegeven en wanneer. Zo blijf je binnen de regels van de AVG en de Telecommunicatiewet.",
        ],
        callout:
          "Houd herinneringen en marketing gescheiden. Klanten die geen nieuwsbrief willen, willen meestal wel een herinnering voor hun afspraak.",
      },
      {
        heading: "Hoe meet je klantenbinding in je salon?",
        paragraphs: [
          "Je hoeft geen ingewikkelde rapporten te maken. Een paar eenvoudige cijfers zeggen veel:",
        ],
        table: {
          headers: ["Kengetal", "Wat het zegt"],
          rows: [
            ["Herboekpercentage", "Hoeveel klanten direct een vervolgafspraak plannen"],
            ["Terugkeer na eerste bezoek", "Of nieuwe klanten een tweede keer komen"],
            ["Gemiddeld interval", "Hoe vaak vaste klanten komen"],
            ["Klanten die wegblijven", "Wie je persoonlijk kunt benaderen"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "Werkt een stempelkaart nog voor klantenbinding?",
        a: "Het kan, maar het is vooral een korting achteraf. Persoonlijke aandacht, herboeken en goede nazorg hebben meestal meer effect. Wil je een spaarsysteem, koppel het dan aan je klantenkaart in plaats van aan een papieren kaartje.",
      },
      {
        q: "Hoe vaak mag ik klanten berichten sturen?",
        a: "Service-berichten zoals bevestigingen, herinneringen en nazorg zijn altijd prima. Voor marketing geldt: liever weinig en relevant dan elke week een aanbieding. Een of twee keer per maand is voor de meeste salons ruim voldoende.",
      },
      {
        q: "Moet ik vaste klanten korting geven?",
        a: "Niet per se. Veel vaste klanten waarderen voorrang bij populaire tijden of een persoonlijke attentie meer dan een korting. Kortingen kunnen bovendien je prijsniveau onder druk zetten.",
      },
      {
        q: "Hoe krijg ik meer Google-reviews?",
        a: "Vraag het persoonlijk aan het eind van een geslaagde behandeling en stuur daarna een bericht met een directe link naar je Google-bedrijfsprofiel. Hoe makkelijker, hoe groter de kans dat klanten het doen.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Automatische berichten en herinneringen" },
      { pageKey: "client-records", label: "Digitale klantenkaart" },
    ],
    sources: [
      { label: "Autoriteit Consument & Markt (ACM)", url: "https://www.acm.nl" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. AVG
  // ---------------------------------------------------------------------------
  {
    topic: "gdpr-beauty-salon",
    lang: "nl",
    slug: "avg-schoonheidssalon",
    title: "AVG voor je schoonheidssalon: privacy en klantgegevens goed geregeld",
    metaTitle: "AVG voor je schoonheidssalon: praktische checklist",
    description:
      "Wat betekent de AVG voor je schoonheidssalon of kliniek? Lees hoe je gezondheidsgegevens, foto's en klantdossiers veilig bewaart, met een praktische checklist.",
    excerpt:
      "Allergieën, medicatie, voor- en na-foto's: als salon verwerk je gevoelige gegevens. Zo regel je de AVG praktisch en zonder juridisch jargon.",
    category: "Privacy & wetgeving",
    keywords: [
      "avg schoonheidssalon",
      "avg salon",
      "privacyverklaring schoonheidssalon",
      "gezondheidsgegevens avg",
      "verwerkersovereenkomst salon",
      "bewaartermijn klantgegevens",
      "avg checklist ondernemer",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 9,
    answer:
      "Onder de AVG moet je als salon kunnen uitleggen welke klantgegevens je verwerkt, waarom en hoe lang. Gezondheidsgegevens uit intakeformulieren zijn bijzondere persoonsgegevens: bewaar ze beveiligd, beperk de toegang, sluit met je softwareleverancier een verwerkersovereenkomst en informeer klanten via een duidelijke privacyverklaring.",
    takeaways: [
      "Ook een kleine salon valt onder de AVG; in Nederland houdt de Autoriteit Persoonsgegevens toezicht, in België de Gegevensbeschermingsautoriteit.",
      "Gezondheidsgegevens en foto's verdienen extra bescherming en horen niet op je privételefoon.",
      "Met elke leverancier die klantgegevens voor je verwerkt, heb je een verwerkersovereenkomst nodig.",
      "Leg bewaartermijnen vast en ruim gegevens op die je niet meer nodig hebt.",
      "Een datalek met risico voor klanten meld je binnen 72 uur bij de toezichthouder.",
    ],
    intro: [
      "De AVG klinkt als iets voor grote bedrijven met een juridische afdeling. Maar als je als salon een intakeformulier gebruikt, foto's maakt voor een behandeltraject of klanten herinneringen stuurt, verwerk je persoonsgegevens, en vaak ook gevoelige.",
      "Het goede nieuws: de AVG is voor een salon goed te regelen met een paar duidelijke afspraken en het juiste systeem. In dit artikel lees je wat je moet weten en krijg je een checklist om je eigen salon langs te lopen. Dit artikel is een praktische gids en geen juridisch advies.",
    ],
    sections: [
      {
        heading: "Welke klantgegevens verwerkt een schoonheidssalon?",
        paragraphs: ["Het is vaak meer dan je denkt. Maak eerst een overzicht:"],
        bullets: [
          "**Contactgegevens**: naam, telefoonnummer, e-mailadres, soms adres en geboortedatum.",
          "**Afspraakgegevens**: welke behandeling, wanneer, bij wie, no-shows.",
          "**Gezondheidsgegevens**: allergieën, medicatie, zwangerschap, huidaandoeningen uit de intake.",
          "**Foto's**: voor- en na-foto's van gezicht of lichaam.",
          "**Behandeldocumentatie**: instellingen, producten, reacties, notities.",
          "**Betaalgegevens**: facturen, eventueel aanbetalingen.",
        ],
      },
      {
        heading: "Waarom zijn gezondheidsgegevens extra gevoelig?",
        paragraphs: [
          "De AVG noemt gezondheidsgegevens **bijzondere persoonsgegevens**. Die mag je alleen verwerken als daar een geldige uitzondering voor is, zoals uitdrukkelijke toestemming van de klant. Voor een salon is dat meestal de route: de klant geeft in het intakeformulier aan dat je deze informatie mag gebruiken voor een veilige behandeling.",
          "Foto's van gezicht of lichaam zijn ook gevoelig, zeker als er een huidaandoening of medische situatie op te zien is. Vraag aparte toestemming voor foto's in het dossier en voor gebruik op social media of je website.",
        ],
        callout:
          "Werk je als arts of BIG-geregistreerde zorgverlener in een esthetische kliniek, dan gelden daarnaast de regels van de WGBO voor het medisch dossier, waaronder een langere bewaartermijn.",
      },
      {
        heading: "Wat moet er in je privacyverklaring staan?",
        paragraphs: [
          "Klanten hebben het recht te weten wat je met hun gegevens doet. Zet een privacyverklaring op je website en verwijs ernaar in je boekingspagina en intakeformulier.",
        ],
        bullets: [
          "Wie je bent: bedrijfsnaam, adres, KvK-nummer en contactgegevens.",
          "Welke gegevens je verwerkt en waarvoor (afspraken, veilige behandeling, herinneringen).",
          "Op welke grondslag (overeenkomst, toestemming, wettelijke plicht).",
          "Met wie je gegevens deelt, zoals je softwareleverancier of boekhouder.",
          "Hoe lang je gegevens bewaart.",
          "Welke rechten de klant heeft: inzage, correctie, verwijdering, bezwaar.",
          "Dat de klant een klacht kan indienen bij de Autoriteit Persoonsgegevens (of in België de Gegevensbeschermingsautoriteit).",
        ],
      },
      {
        heading: "Heb je een verwerkersovereenkomst nodig met je salonsoftware?",
        paragraphs: [
          "Ja. Zodra een leverancier namens jou persoonsgegevens verwerkt, zoals een systeem voor afspraken, klantenkaart of formulieren, ben jij de verwerkingsverantwoordelijke en de leverancier de verwerker. De AVG verplicht je om daar een verwerkersovereenkomst voor te sluiten.",
          "Let daarnaast op waar de gegevens staan. Bij Treatflow staan de gegevens op servers in de EU (Frankfurt), met SSL-versleuteling en dagelijkse back-ups, en blijft de salon eigenaar van de klantgegevens.",
        ],
      },
      {
        heading: "Hoe lang mag je klantgegevens bewaren?",
        paragraphs: [
          "De AVG noemt geen vaste termijn voor salons: je bewaart gegevens niet langer dan nodig voor het doel. Bepaal zelf een redelijke termijn, leg die vast en pas hem toe. Voor je administratie geldt een aparte fiscale bewaarplicht voor facturen en boekhouding.",
        ],
        table: {
          headers: ["Gegevens", "Vuistregel", "Toelichting"],
          rows: [
            ["Intake en behandeldossier", "Zolang de klant actief is, plus een vastgestelde periode", "Leg je keuze en motivatie vast"],
            ["Foto's", "Zo lang als nodig voor het traject", "Social media alleen met aparte toestemming"],
            ["Marketingtoestemming", "Tot de klant zich afmeldt", "Afmelding direct verwerken"],
            ["Facturen en administratie", "Fiscale bewaarplicht (in Nederland in principe 7 jaar)", "Los van het behandeldossier"],
          ],
        },
      },
      {
        heading: "Wat doe je bij een datalek?",
        paragraphs: [
          "Een gestolen telefoon met klantfoto's, een e-mail met intakeformulieren naar de verkeerde persoon, een gehackt account: dat is een datalek. Bij een risico voor klanten meld je het binnen 72 uur bij de toezichthouder en bij een hoog risico informeer je ook de betrokken klanten.",
        ],
        steps: [
          "Beperk de schade: wijzig wachtwoorden, wis het apparaat op afstand, vraag de ontvanger de e-mail te verwijderen.",
          "Zoek uit welke gegevens en hoeveel klanten het betreft.",
          "Beoordeel het risico en meld het zo nodig bij de Autoriteit Persoonsgegevens.",
          "Noteer elk datalek intern, ook als je het niet hoeft te melden.",
          "Neem maatregelen zodat het niet opnieuw gebeurt.",
        ],
      },
      {
        heading: "Hoe regel je toegang en beveiliging in de salon?",
        paragraphs: [
          "De meeste privacyproblemen in een salon ontstaan niet door hackers, maar door gewone gewoontes: een tablet zonder code aan de balie, een gedeeld wachtwoord voor het hele team, intakeformulieren die per e-mail heen en weer gaan. Met een paar afspraken los je het grootste deel op.",
        ],
        bullets: [
          "Geef elke medewerker een eigen account, zodat je weet wie wat heeft bekeken of aangepast.",
          "Beperk de toegang tot gezondheidsgegevens en foto's tot de behandelaars die ze nodig hebben.",
          "Beveilig telefoons en tablets met een code en schakel automatische vergrendeling in.",
          "Gebruik sterke, unieke wachtwoorden en waar mogelijk tweestapsverificatie.",
          "Stuur geen intakeformulieren of foto's als bijlage per e-mail of WhatsApp; laat klanten ze in een beveiligd systeem invullen.",
          "Sluit een account direct af als een medewerker vertrekt.",
        ],
      },
      {
        heading: "Welke rechten hebben je klanten onder de AVG?",
        paragraphs: [
          "Klanten mogen vragen welke gegevens je over hen hebt (inzage), onjuiste gegevens laten verbeteren, gegevens laten verwijderen als je ze niet meer nodig hebt en bezwaar maken tegen bijvoorbeeld marketing. Ze kunnen ook gegeven toestemming intrekken, bijvoorbeeld voor foto's op social media. Je hebt in principe een maand om op zo'n verzoek te reageren. Met een digitaal klantdossier is dat eenvoudig: je ziet in één overzicht wat je van een klant hebt en kunt het exporteren of verwijderen.",
        ],
      },
      {
        heading: "AVG-checklist: is je salon in orde?",
        paragraphs: ["Loop deze punten één keer per jaar na."],
        bullets: [
          "Ik heb een overzicht van welke gegevens ik verwerk en waarom.",
          "Ik heb een privacyverklaring op mijn website.",
          "Mijn intakeformulier vraagt alleen wat nodig is en bevat een toestemmingsverklaring.",
          "Foto-toestemming vraag ik apart, en social media nog eens apart.",
          "Klantgegevens staan niet op privételefoons, in WhatsApp-chats of in gedeelde mappen.",
          "Ik heb verwerkersovereenkomsten met mijn softwareleveranciers.",
          "Elke medewerker heeft een eigen login en alleen toegang tot wat nodig is.",
          "Ik heb bewaartermijnen vastgesteld en ruim oude gegevens op.",
          "Ik weet wat ik moet doen bij een datalek.",
        ],
      },
    ],
    faq: [
      {
        q: "Geldt de AVG ook voor een eenmanszaak?",
        a: "Ja. De AVG geldt voor elke onderneming die persoonsgegevens verwerkt, ongeacht de grootte. Een zzp'er met een kleine salon moet dus ook een privacyverklaring hebben en gegevens veilig bewaren.",
      },
      {
        q: "Moet ik een verwerkingsregister bijhouden?",
        a: "Kleine organisaties zijn soms vrijgesteld, maar niet als ze structureel bijzondere persoonsgegevens verwerken, zoals gezondheidsgegevens uit intakeformulieren. Een eenvoudig register is voor een salon dus verstandig en vaak verplicht.",
      },
      {
        q: "Mag ik voor- en na-foto's op Instagram zetten?",
        a: "Alleen met uitdrukkelijke, aparte toestemming van de klant voor dat doel. Die toestemming moet de klant ook weer kunnen intrekken. Toestemming voor foto's in het dossier is niet automatisch toestemming voor social media.",
      },
      {
        q: "Mag ik klantgegevens in WhatsApp bewaren?",
        a: "Liever niet. Gesprekken en foto's staan dan op je privételefoon, worden soms automatisch geback-upt naar de cloud en zijn moeilijk op te ruimen. Een salonsysteem met EU-hosting en toegangsrechten is veiliger.",
      },
      {
        q: "Wat als een klant vraagt om haar gegevens te verwijderen?",
        a: "Verwijder ze binnen een maand, tenzij je ze moet bewaren vanwege een wettelijke plicht, zoals facturen voor de belastingdienst. Laat de klant weten wat je hebt verwijderd en wat je om welke reden bewaart.",
      },
      {
        q: "Welke toezichthouder geldt in België?",
        a: "In België houdt de Gegevensbeschermingsautoriteit (GBA) toezicht op de AVG, die daar ook GDPR wordt genoemd. De regels uit de verordening zelf zijn in Nederland en België gelijk.",
      },
    ],
    related: [
      { pageKey: "client-records", label: "Veilige digitale klantenkaart" },
      { pageKey: "forms", label: "Intake- en toestemmingsformulieren" },
      { pageKey: "treatment-documentation", label: "Behandeldocumentatie met foto's" },
    ],
    sources: [
      { label: "Autoriteit Persoonsgegevens", url: "https://autoriteitpersoonsgegevens.nl" },
      { label: "Gegevensbeschermingsautoriteit (België)", url: "https://www.gegevensbeschermingsautoriteit.be" },
      {
        label: "Algemene verordening gegevensbescherming (EUR-Lex)",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // 7. Prijzen berekenen
  // ---------------------------------------------------------------------------
  {
    topic: "pricing-beauty-treatments",
    lang: "nl",
    slug: "prijzen-berekenen-schoonheidssalon",
    title: "Prijzen berekenen voor je schoonheidssalon: zo kom je tot een eerlijke behandelprijs",
    metaTitle: "Prijzen berekenen voor je schoonheidssalon",
    description:
      "Zo bereken je de prijzen in je schoonheidssalon: minimaal uurtarief, tijd, materiaal en marge per behandeling, een blik op de markt en een heldere prijslijst.",
    excerpt:
      "De prijzen van de salon om de hoek overnemen is geen strategie. Met deze berekening weet je wat elke behandeling minimaal moet kosten, inclusief rekenvoorbeelden.",
    category: "Ondernemen",
    keywords: [
      "prijzen berekenen schoonheidssalon",
      "uurtarief schoonheidsspecialiste berekenen",
      "prijslijst schoonheidssalon",
      "wat kost een gezichtsbehandeling",
      "tarieven salon bepalen",
      "prijsstrategie salon",
      "prijs wimperextensions berekenen",
    ],
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    readMinutes: 8,
    answer:
      "Een goede behandelprijs reken je van onderen naar boven uit en toets je pas daarna aan de markt. Bereken eerst je minimale uurtarief: je vaste lasten per maand plus het inkomen dat je nodig hebt, gedeeld door het aantal uren dat je echt aan klanten besteedt. Vermenigvuldig dat tarief met de totale tijd die een behandeling in beslag neemt (inclusief voorbereiden en schoonmaken), tel materiaalkosten en een marge van 10 tot 20 % op, en vergelijk dan pas met de concurrentie.",
    takeaways: [
      "Minimaal uurtarief = (vaste lasten + je eigen inkomen) ÷ declarabele uren, en dat zijn er veel minder dan je openingsuren.",
      "Reken de volledige tijd dat een behandeling je ruimte en jou bezet houdt, niet alleen de tijd op de behandelstoel.",
      "Tel per behandeling de verbruiksmaterialen op en reken een marge voor reserves, reparaties en groei.",
      "Prijzen van concurrenten laten zien wat de markt accepteert, niet wat jij moet verdienen.",
      "Een overzichtelijke prijslijst met niveaus en zichtbare online prijzen wekt vertrouwen.",
    ],
    intro: [
      "Veel saloneigenaren bepalen hun prijzen één keer, bij de opening, door te kijken wat andere salons in de buurt vragen. Een paar jaar later zijn huur, producten, energie en lonen gestegen, maar de prijslijst is nauwelijks veranderd. De agenda zit vol, de rekening niet. Druk zijn en winstgevend zijn is niet hetzelfde.",
      "In dit artikel lees je hoe je prijzen berekent die je kosten dekken en jou een fatsoenlijk inkomen geven. Dat werkt voor schoonheidssalons, huidklinieken, nagel-, wimper- en PMU-studio's, laserstudio's, spa's en massagepraktijken. De bedragen in de voorbeelden zijn illustratief: vul je eigen cijfers in en je hebt voor elke behandeling een stevige ondergrens.",
    ],
    sections: [
      {
        heading: "Waarom rekenen zoveel salons te weinig?",
        paragraphs: [
          "De belangrijkste reden: prijzen worden gekopieerd in plaats van berekend. Je weet niet wat de salon die je volgt aan huur, personeel of financiering betaalt. Je neemt dus andermans aannames over, en misschien ook andermans verlies.",
          "De tweede reden is angst: angst om vaste klanten kwijt te raken, om duur over te komen, om lege plekken in de agenda. In de praktijk vertrekken klanten die voor het resultaat en de ervaring komen zelden om een redelijke, goed uitgelegde prijs. Wie alleen op de laagste prijs let, gaat sowieso naar de volgende aanbieding.",
          "De derde reden is onzichtbare tijd. Een gezichtsbehandeling van 60 minuten kost je met intake, ruimte klaarzetten, schoonmaken, desinfecteren en het bijwerken van de klantenkaart al snel 75 minuten. Zit die tijd niet in de prijs, dan werk je die gratis.",
        ],
      },
      {
        heading: "Hoe bereken je je minimale uurtarief?",
        paragraphs: [
          "Je minimale uurtarief is het bedrag dat elk declarabel uur moet opleveren om alle kosten te dekken en jezelf een eerlijk inkomen te betalen. Reken het minstens één keer per jaar door, en altijd wanneer een grote kostenpost verandert, zoals een nieuw huurcontract of een nieuw apparaat.",
        ],
        steps: [
          "Tel je vaste lasten per maand op: huur, energie, verzekeringen, software, marketing, boekhouder, opleidingen, financiering van apparatuur en alles wat je betaalt, of er nu klanten komen of niet.",
          "Bepaal welk inkomen je als eigenaar nodig hebt, inclusief inkomstenbelasting en premies. Heb je personeel, tel dan ook hun volledige loonkosten mee.",
          "Bereken je declarabele uren: werkdagen per maand × uren per dag, min tijd voor administratie, pauzes, schoonmaken tussen klanten, ziekte en gaten in de agenda. Voor de meeste salons is 20 tot 30 % aftrekken realistisch.",
          "Deel vaste lasten plus inkomen door je declarabele uren. Dat is je break-even-uurtarief.",
          "Tel daar een marge van ongeveer 10 tot 20 % bij op voor reserves, reparaties, rustige maanden en investeringen.",
        ],
        table: {
          headers: ["Kostenpost (voorbeeld)", "Per maand"],
          rows: [
            ["Huur", "€ 900"],
            ["Energie en water", "€ 150"],
            ["Verzekeringen", "€ 80"],
            ["Salonsoftware", "€ 59"],
            ["Marketing", "€ 200"],
            ["Boekhouder", "€ 120"],
            ["Opleidingen", "€ 100"],
            ["Financiering apparatuur", "€ 350"],
            ["Overig", "€ 141"],
            ["**Totaal vaste lasten**", "**€ 2.100**"],
            ["Inkomen eigenaar incl. belasting en premies", "€ 3.500"],
            ["Declarabele uren (20 dagen × 8 uur min 25 %)", "120 uur"],
            ["Break-even: € 5.600 ÷ 120 uur", "€ 46,67 per uur"],
            ["Doeltarief met 15 % marge", "≈ € 54 per uur"],
          ],
        },
        callout:
          "Declarabele uren zijn de grootste valkuil. Reken je met 160 uur terwijl je in werkelijkheid 110 uur behandelt, dan is elke prijs op je lijst ongeveer een derde te laag.",
      },
      {
        heading: "Hoe maak je van je uurtarief een behandelprijs?",
        paragraphs: [
          "Neem per behandeling de totale tijd dat ruimte en behandelaar bezet zijn, vermenigvuldig die met je doeltarief en tel de verbruiksmaterialen op: maskers, ampullen, gel, wimpers, lijm, naalden of wegwerpmateriaal. Zit de financiering van een apparaat al in je vaste lasten, reken die dan niet nog een keer mee.",
          "De uitkomst is je ondergrens. Je mag meer vragen, bijvoorbeeld vanwege ervaring, vraag of een luxe productlijn, maar je zou niet structureel minder moeten vragen.",
        ],
        table: {
          headers: ["Behandeling", "Bezette tijd", "Tijd × € 54", "Materiaal", "Ondergrens"],
          rows: [
            ["Klassieke gezichtsbehandeling", "75 min", "€ 67,50", "€ 8", "≈ € 76"],
            ["Gellak manicure", "70 min", "€ 63,00", "€ 5", "≈ € 68"],
            ["Wimperextensions, nieuwe set", "130 min", "€ 117,00", "€ 12", "≈ € 129"],
            ["Laserontharing oksels", "25 min", "€ 22,50", "€ 4", "≈ € 27"],
          ],
        },
        bullets: [
          "Korte apparaatbehandelingen liggen in de praktijk vaak ver boven hun ondergrens, vanwege de investering, opleiding en vraag. Prima, zolang de ondergrens gedekt is.",
          "Lange behandelingen met weinig materiaal, zoals massages, zijn het vaakst te goedkoop. Controleer die als eerste.",
        ],
      },
      {
        heading: "Hoeveel gewicht geef je aan de prijzen van concurrenten?",
        paragraphs: [
          "Kijk naar vijf tot tien zaken waarmee jouw ideale klant je echt zou vergelijken, niet naar elke salon in de stad. Noteer de prijzen van je drie of vier belangrijkste behandelingen en hoe elke salon zich positioneert: budget, middensegment of premium.",
          "Leg dat naast je ondergrens. Zit de markt duidelijk boven je ondergrens, dan heb je ruimte om op waarde te prijzen. Zit de markt eronder, dan is concurreren op prijs een race die je verliest. Maak in plaats daarvan scherp wat je onderscheidt, zoals specialisatie, resultaat, zorgvuldige documentatie, comfort of beschikbaarheid, en prijs daarnaar.",
        ],
        bullets: [
          "Een budgetpositie vraagt om volume en heel efficiënte processen.",
          "Het middensegment vraagt om een constante ervaring en veel herhaalafspraken.",
          "Premium vraagt om zichtbare expertise, een zorgvuldig intakegesprek en een uitstekende klantreis van boeking tot nazorg.",
        ],
      },
      {
        heading: "Hoe maak je een prijslijst die klanten begrijpen?",
        paragraphs: [
          "Een goede prijslijst helpt klanten snel te kiezen en laat de waardevollere optie vanzelfsprekend voelen. Houd hem kort, zet de duur naast de prijs en beschrijf het resultaat, niet alleen de stappen.",
        ],
        bullets: [
          "Bied voor je kernbehandelingen twee of drie niveaus, bijvoorbeeld een gezichtsbehandeling van 45, 75 en 90 minuten. Als de verschillen duidelijk zijn, kiezen veel klanten de middelste.",
          "Prijs extra's apart (oogbehandeling, extra masker, paraffine, nail art), zodat klanten kunnen upgraden zonder dat je korting geeft op de hoofdbehandeling.",
          "Bundel kuren, zoals laserseries of huidprogramma's, in pakketten met een vast aantal sessies en een bescheiden voordeel.",
          "Bepaal of een intake gratis is, betaald of verrekend wordt met de eerste behandeling, en communiceer dat open.",
          "Toon eindprijzen inclusief btw als je btw-plichtig bent, en gebruik vanaf-prijzen alleen als de prijs echt afhangt van zone of lengte. Valt je salon onder de kleineondernemersregeling (KOR), stem je prijsopbouw dan af met je boekhouder.",
          "Gebruik overal dezelfde prijzen: op je website, in de online agenda en in de salon.",
        ],
        callout:
          "Bij online boeken heeft elke behandeling een eigen duur en prijs, zodat klanten zien wat ze boeken voordat ze bevestigen. Met Treatflow staat je boekingspagina onder je eigen link en betaal je geen commissie per boeking: een vast bedrag van € 39 of € 59 per maand. Je kunt het 14 dagen gratis proberen, zonder creditcard.",
      },
      {
        heading: "Wanneer en hoe verhoog je je prijzen?",
        paragraphs: [
          "Reken je tarieven minstens één keer per jaar opnieuw door en altijd na een grote kostenstijging. Kleine, regelmatige aanpassingen worden veel makkelijker geaccepteerd dan één grote sprong na een paar jaar.",
        ],
        steps: [
          "Bereken je uurtarief opnieuw met de actuele kosten en vergelijk elke behandeling met haar ondergrens.",
          "Kondig nieuwe prijzen vier tot zes weken van tevoren aan, per e-mail, bericht en in de salon.",
          "Geef een korte, eerlijke reden, zoals hogere kosten voor producten, energie of opleiding, zonder je te verontschuldigen.",
          "Laat bestaande afspraken tegen de oude prijs doorgaan, zodat niemand zich overvallen voelt.",
          "Bereid je team voor, zodat iedereen vragen op dezelfde rustige manier beantwoordt.",
        ],
      },
      {
        heading: "Welke prijsfouten kosten salons het meeste geld?",
        paragraphs: [
          "De meeste prijsproblemen ontstaan uit een paar gewoontes die er langzaam insluipen. Loop je prijslijst één keer per jaar langs deze lijst.",
        ],
        bullets: [
          "Kennismakingsacties die nooit stoppen en klanten leren wachten op korting.",
          "Spontane persoonlijke kortingen die nergens worden vastgelegd en ongemerkt de nieuwe standaard worden.",
          "Voorbereiding, schoonmaken en administratie niet meenemen in de duur van behandelingen.",
          "Geen afspraken over late annuleringen en no-shows, waardoor jij elke lege plek volledig betaalt.",
          "Jarenlang niets verhogen en dan in één keer flink.",
          "Nooit controleren welke behandelingen echt geld opleveren en welke alleen de agenda vullen.",
        ],
      },
    ],
    faq: [
      {
        q: "Hoe bereken ik de prijs van een schoonheidsbehandeling?",
        a: "Bereken eerst je uurtarief: vaste lasten per maand plus je inkomen, gedeeld door je realistische declarabele uren, plus 10 tot 20 % marge. Vermenigvuldig dat met de totale tijd van de behandeling inclusief voorbereiding en schoonmaken en tel de materiaalkosten op. Dat is je ondergrens.",
      },
      {
        q: "Wat kost een gezichtsbehandeling gemiddeld?",
        a: "Een vaste prijs bestaat niet, want huur, lonen en positionering verschillen per plaats. Met een voorbeeldtarief van € 54 per uur en 75 minuten bezette tijd moet een klassieke gezichtsbehandeling minstens zo'n € 76 kosten. Maak de berekening met je eigen cijfers en vergelijk daarna met salons waar jouw klanten echt tussen kiezen.",
      },
      {
        q: "Kan ik niet gewoon dezelfde prijzen vragen als mijn concurrenten?",
        a: "Gebruik prijzen van concurrenten als markttoets, niet als vertrekpunt. Je kent hun kosten niet en weet niet of ze winst maken. Ligt jouw ondergrens boven de lokale markt, werk dan aan je positionering in plaats van onder de kostprijs te gaan zitten.",
      },
      {
        q: "Moet ik mijn prijzen online zetten?",
        a: "In de meeste gevallen wel. Zichtbare prijzen besparen je vragen per bericht, filteren klanten die niet bij je passen en maken online boeken makkelijker. Hangt de prijs af van zone of lengte, toon dan een duidelijke vanaf-prijs en leg uit wat het eindbedrag bepaalt.",
      },
      {
        q: "Hoe vaak moet een salon de prijzen verhogen?",
        a: "Controleer je prijzen minstens één keer per jaar en na grote kostenwijzigingen. Een gematigde jaarlijkse aanpassing, een paar weken vooraf aangekondigd, wordt meestal veel beter ontvangen dan een flinke verhoging na jaren stilstand.",
      },
    ],
    related: [
      { pageKey: "pricing", label: "Prijzen en pakketten" },
      { pageKey: "client-records", label: "Digitale klantenkaart" },
      { pageKey: "features", label: "Alle functies van Treatflow" },
    ],
  },
  // ---------------------------------------------------------------------------
  // 8. Annuleringsbeleid salon
  // ---------------------------------------------------------------------------
  {
    topic: "cancellation-policy-salon",
    lang: "nl",
    slug: "annuleringsbeleid-salon-no-show-kosten",
    title: "Annuleringsbeleid voor je salon: termijnen, no-show kosten en een voorbeeldtekst",
    metaTitle: "Annuleringsbeleid salon: no-show kosten en voorbeeld",
    description:
      "Annuleringsbeleid voor je schoonheidssalon: redelijke termijnen, kosten bij late annulering en no-show, aanbetaling, voorbeeldtekst en tips voor de praktijk.",
    excerpt:
      "Een annuleringsbeleid beschermt je omzet alleen als klanten het vóór het boeken zien en jij het consequent toepast. Termijnen, bedragen, een voorbeeldtekst en zinnen voor lastige gesprekken.",
    category: "Ondernemen",
    keywords: [
      "annuleringsbeleid salon",
      "no-show kosten salon",
      "annuleringskosten schoonheidssalon",
      "annuleringsvoorwaarden salon voorbeeld",
      "aanbetaling salon",
      "algemene voorwaarden schoonheidssalon",
      "afspraak niet nagekomen kosten",
    ],
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readMinutes: 8,
    answer:
      "Een goed annuleringsbeleid voor je salon noemt een termijn waarbinnen klanten gratis kunnen annuleren (meestal 24 of 48 uur), een redelijk bedrag bij late annulering (vaak 50 % van de behandelprijs) en een hoger bedrag bij een no-show (tot de volledige prijs). Het werkt alleen als de klant de voorwaarden vóór het boeken kent, ze schriftelijk bevestigd krijgt en jij ze consequent toepast, met ruimte voor echte noodgevallen.",
    takeaways: [
      "Klanten moeten het beleid zien vóórdat ze boeken, niet pas op de factuur.",
      "Stem termijn en bedrag af op de behandeling: een wenkbrauwbehandeling van 20 minuten vraagt andere regels dan een wimperset van drie uur.",
      "No-show kosten moeten je werkelijke schade dekken en geen boete zijn; een redelijk bedrag houdt veel beter stand.",
      "Noteer elke late annulering en no-show in de klantkaart, zodat je hele team hetzelfde reageert.",
      "Herinneringen, makkelijk verzetten en een wachtlijst voorkomen meer omzetverlies dan annuleringskosten ooit terugbrengen.",
    ],
    intro: [
      "Een klant die twee uur van tevoren een gezichtsbehandeling van 90 minuten afzegt, laat een gat in je agenda achter dat je bijna nooit meer opvult. Je medewerker betaal je toch, de producten staan misschien al klaar. Een paar keer per maand en het loopt al snel op tot honderden euro's. Toch durven veel salonhouders geen kosten te rekenen, uit angst vaste klanten kwijt te raken.",
      "Je hoeft niet te kiezen tussen vriendelijk zijn en je omzet beschermen. Een helder, eerlijk annuleringsbeleid maakt het juist duidelijker voor klanten, omdat ze de regels vooraf kennen. In dit artikel lees je wat er in je beleid hoort, welke termijnen en bedragen redelijk zijn, hoe een aanbetaling past en hoe je het naleeft zonder de relatie te beschadigen. Het is praktische informatie, geen juridisch advies.",
    ],
    sections: [
      {
        heading: "Mag je als salon annuleringskosten of no-show kosten rekenen?",
        paragraphs: [
          "Ja, in principe wel. Wie een vaste afspraak maakt, sluit een overeenkomst met jou, en jij houdt tijd vrij die je niet aan een ander kunt verkopen. Komt de klant niet of zegt ze zo laat af dat je de plek niet meer kunt vullen, dan is een vergoeding in de regel gerechtvaardigd.",
          "Twee voorwaarden zijn daarbij belangrijk. De klant moet je voorwaarden vóór het boeken hebben kunnen lezen; algemene voorwaarden moet je volgens het Burgerlijk Wetboek tijdig ter beschikking stellen. En het bedrag moet redelijk zijn. Een beding dat onredelijk bezwarend is voor de consument kan worden vernietigd. Een vergoeding die past bij je werkelijke verlies, zoals de geblokkeerde tijd en klaargezette materialen, is daarom veel sterker dan een vast hoog boetebedrag.",
        ],
        callout:
          "Ben je aangesloten bij een brancheorganisatie, kijk dan of die standaard algemene voorwaarden voor salons aanbiedt. Wil je hoge bedragen rekenen of grote aanbetalingen inhouden, laat je tekst dan één keer juridisch nakijken.",
      },
      {
        heading: "Wat hoort er in een annuleringsbeleid voor een salon?",
        paragraphs: [
          "Een beleid dat klanten in tien seconden snappen, werkt veel beter dan een pagina juridische tekst. Neem deze punten op, in gewone taal:",
        ],
        table: {
          headers: ["Onderdeel", "Wat je vastlegt", "Voorbeeld"],
          rows: [
            ["Gratis annuleren", "Hoe lang van tevoren kosteloos annuleren of verzetten kan", "Tot 24 uur voor de afspraak"],
            ["Late annulering", "Wat er binnen die termijn geldt", "50 % van de behandelprijs"],
            ["No-show", "Wat er geldt als de klant niet komt en niet afzegt", "100 % van de behandelprijs"],
            ["Te laat komen", "Wanneer de behandeling korter wordt of vervalt", "Na 15 minuten wordt de behandeling ingekort"],
            ["Hoe annuleren", "Via welk kanaal", "Via de link in je bevestigingsmail of telefonisch"],
            ["Uitzonderingen", "Hoe je met noodgevallen omgaat", "Bij ziekte of een noodgeval zoeken we samen een oplossing"],
            ["Aanbetaling", "Wanneer die wordt verrekend of ingehouden", "Verrekend met de behandeling, ingehouden bij no-show"],
          ],
        },
        bullets: [
          "Spreek van 'annuleringsvoorwaarden' of 'afspraakregels', niet van een 'boete'. De toon bepaalt hoe dezelfde regel overkomt.",
          "Leg in één zin uit waarom: de tijd is speciaal voor de klant vrijgehouden.",
          "Gebruik overal dezelfde tekst: website, boekingspagina, bevestiging, herinnering en salon.",
        ],
      },
      {
        heading: "Welke termijn en welke kosten zijn redelijk per behandeling?",
        paragraphs: [
          "Er is geen vast getal dat altijd klopt. De juiste regel hangt af van hoe lang een behandeling je agenda blokkeert, hoe duur ze is en hoe groot de kans is dat je de plek op korte termijn nog vult. Veel salons werken met een getrapt model:",
        ],
        table: {
          headers: ["Type behandeling", "Gratis annuleren", "Late annulering", "No-show"],
          rows: [
            ["Kort, onder 30 min (wenkbrauwen, verven, kort harsen)", "12–24 uur", "Vaak gratis of klein vast bedrag", "50 %"],
            ["Standaard, 45–90 min (gezichtsbehandeling, manicure, massage)", "24 uur", "50 %", "100 %"],
            ["Lang of duur (wimperset, PMU, laserkuur, bruidsmake-up)", "48 uur", "50–100 %", "100 % of aanbetaling vervalt"],
            ["Groeps- of eventboekingen", "72 uur of meer", "In overleg", "Aanbetaling vervalt"],
          ],
        },
        callout:
          "Kun je de plek na een late annulering alsnog vullen? Laat de kosten dan vallen of verlaag ze. Dat is eerlijk, levert goodwill op en je hebt dan ook geen schade geleden.",
      },
      {
        heading: "Aanbetaling vragen of achteraf kosten in rekening brengen?",
        paragraphs: [
          "No-show kosten die je achteraf factureert, zijn alleen zoveel waard als je ze ook echt ontvangt. De meeste klanten betalen zonder discussie, maar sommigen reageren gewoon niet, en achter kleine bedragen aan gaan kost tijd en sfeer. Een aanbetaling bij het boeken lost dat op en filtert impulsboekingen eruit.",
          "Tegelijk maakt een aanbetaling boeken iets drempeliger, en trouwe vaste klanten kunnen het als wantrouwen ervaren. Een goede middenweg is een aanbetaling alleen te vragen waar het risico het grootst is:",
        ],
        bullets: [
          "Nieuwe klanten die voor het eerst een lange of dure behandeling boeken.",
          "Klanten die al vaker niet kwamen of laat afzegden.",
          "Behandelingen waarvoor je vooraf materiaal bestelt of klaarzet, zoals PMU-pigmenten of een speciale wimperset.",
          "Drukke momenten, zoals vrijdagavond of de weken voor de feestdagen.",
        ],
      },
      {
        heading: "Hoe ziet een goede voorbeeldtekst voor annuleringsvoorwaarden eruit?",
        paragraphs: [
          "Deze tekst kun je aanpassen aan je eigen salon. Vervang de getallen en houd de toon vriendelijk maar duidelijk:",
          "**“We houden je afspraak speciaal voor jou vrij. Je kunt tot 24 uur van tevoren kosteloos annuleren of verzetten. Bij annulering binnen 24 uur rekenen we 50 % van de behandelprijs; kom je zonder bericht niet, dan rekenen we de volledige prijs. Ben je meer dan 15 minuten te laat, dan moeten we de behandeling mogelijk inkorten. Is er echt een noodgeval? Bel ons, dan zoeken we samen een eerlijke oplossing.”**",
          "Voor lange behandelingen voeg je één zin toe, bijvoorbeeld: “Voor afspraken van twee uur of langer geldt een gratis annuleringstermijn van 48 uur.” Vraag je een aanbetaling, vermeld dan dat die wordt verrekend met de behandeling en wanneer je hem inhoudt.",
        ],
      },
      {
        heading: "Hoe zorg je dat klanten je annuleringsbeleid echt zien?",
        paragraphs: [
          "De meeste discussies gaan niet over de hoogte van het bedrag, maar over 'dat wist ik niet'. Verwerk je beleid daarom in elke stap van het boeken:",
        ],
        steps: [
          "Zet het op je website bij de prijzen of het boeken, en link er vanaf je online boekingspagina naar.",
          "Noem het in de omschrijving van lange of dure behandelingen, waar strengere regels gelden.",
          "Herhaal de kernzin in de bevestiging, samen met datum, tijd en hoe je annuleert.",
          "Zet het nog één keer in de herinneringsmail 24 tot 48 uur van tevoren, als gratis annuleren nog kan.",
          "Bij boekingen per telefoon of aan de balie: noem het in één zin en noteer in de klantkaart dat je dat gedaan hebt.",
          "Hang een korte versie op bij de balie, zodat het nooit als verrassing komt.",
        ],
      },
      {
        heading: "Hoe pas je het beleid toe zonder klanten kwijt te raken?",
        paragraphs: [
          "Consequent zijn maakt een beleid eerlijk. Als de ene klant wel betaalt en de volgende niet, merken beiden dat. Tegelijk is het zelden slim om een vaste klant van tien jaar bij de eerste gemiste afspraak streng aan te spreken. Bepaal je aanpak vooraf, zodat het niet afhangt van humeur of van wie er achter de balie staat.",
        ],
        steps: [
          "Noteer elke late annulering en no-show in de klantkaart, met datum en reden.",
          "Eerste keer bij een goede klant: laat de kosten vallen, maar wijs vriendelijk op het beleid.",
          "Tweede keer: reken het bedrag zoals afgesproken, met een kort en vriendelijk bericht.",
          "Herhaaldelijk: vraag voortaan een aanbetaling of vooruitbetaling.",
          "Echte noodgevallen, zoals plotselinge ziekte of een ongeluk: bied verzetten aan in plaats van kosten.",
        ],
        callout:
          "Een zin die werkt: “We hebben je vandaag gemist en hopen dat alles goed is. Zoals in onze afspraakregels staat, rekenen we 50 % bij annuleringen op het laatste moment. Zullen we meteen een nieuwe afspraak inplannen? Donderdag hebben we nog plek.” Rustig, feitelijk en gericht op de volgende afspraak.",
      },
      {
        heading: "Hoe helpt salonsoftware bij annuleringen en no-shows?",
        paragraphs: [
          "De beste annuleringskosten zijn de kosten die je nooit hoeft te rekenen. Software helpt om annuleringen te voorkomen en de rest makkelijker af te handelen. Met Treatflow boeken klanten via je eigen boekingslink zonder commissie, gaan er automatisch herinneringen per e-mail uit vóór elke afspraak en kun je vrijgekomen plekken aanbieden aan klanten op de wachtlijst. Notities in de klantkaart laten het hele team zien wie eerder laat afzegde, zodat iedereen het beleid op dezelfde manier toepast. Alle gegevens staan op EU-servers in Frankfurt, in lijn met de AVG.",
          "Je kunt dit 14 dagen gratis proberen, zonder creditcard, en zelf zien of je aantal no-shows en late annuleringen daalt.",
        ],
      },
    ],
    faq: [
      {
        q: "Hoeveel no-show kosten mag een schoonheidssalon rekenen?",
        a: "Veel salons rekenen 50 % van de behandelprijs bij annulering binnen de termijn en tot 100 % bij een no-show. Voor korte behandelingen is een klein vast bedrag vaak eerlijker. Het bedrag moet passen bij je werkelijke verlies en mag geen onredelijk hoge boete zijn.",
      },
      {
        q: "Is 24 of 48 uur annuleringstermijn beter?",
        a: "24 uur werkt voor de meeste standaardbehandelingen. Kies 48 uur voor lange of dure afspraken, zoals een volledige wimperset, PMU of bruidsmake-up, waarbij je de plek op korte termijn moeilijk opnieuw vult.",
      },
      {
        q: "Mag ik kosten rekenen als de klant mijn voorwaarden niet kende?",
        a: "Dat is lastig. Zonder bewijs dat de klant je voorwaarden vóór het boeken kon zien, sta je zwak. Toon het beleid bij het boeken, in de bevestiging en in de herinnering, en leg vast dat je het hebt gecommuniceerd.",
      },
      {
        q: "Reken ik kosten als een klant ziek is?",
        a: "Juridisch hoeft ziekte de afspraak niet altijd op te heffen, maar in de praktijk bieden de meeste salons dan een nieuwe afspraak aan. Coulance bij echte noodgevallen kost weinig en houdt trouwe klanten vast. Bewaar de kosten voor herhaalde of onverklaarde no-shows.",
      },
      {
        q: "Mag ik in de klantkaart noteren dat iemand niet kwam?",
        a: "Ja, een korte zakelijke notitie over gemiste afspraken hoort bij je afsprakenadministratie. Houd het feitelijk, bewaar het niet langer dan nodig en vermeld in je privacyverklaring dat je afspraakgegevens bijhoudt, zoals de AVG vraagt.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Online boeken via je eigen link" },
      { pageKey: "messaging", label: "Automatische herinneringen per e-mail" },
      { pageKey: "appointment-calendar", label: "Afsprakenkalender" },
    ],
    sources: [
      {
        label: "EUR-Lex: Richtlijn 93/13/EEG betreffende oneerlijke bedingen in consumentenovereenkomsten",
        url: "https://eur-lex.europa.eu/eli/dir/1993/13/oj",
      },
    ],
  },
];
