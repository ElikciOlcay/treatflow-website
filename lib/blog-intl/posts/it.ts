import type { BlogArticle } from "../types";

/**
 * Blog italiano (/it/blog). Testi originali per centri estetici, studi di
 * medicina estetica, centri laser, onicotecniche, lash artist e PMU in Italia
 * e Ticino. Link interni tramite `related` (pageKey), nessun URL hardcoded.
 */
export const posts: BlogArticle[] = [
  // ---------------------------------------------------------------------------
  // 1. Scegliere il gestionale
  // ---------------------------------------------------------------------------
  {
    topic: "choose-salon-software",
    lang: "it",
    slug: "come-scegliere-gestionale-centro-estetico",
    title: "Come scegliere il gestionale per il tuo centro estetico nel 2026",
    metaTitle: "Gestionale centro estetico: come sceglierlo nel 2026",
    description:
      "Agenda, prenotazioni online, schede clienti, consensi digitali e GDPR: i criteri concreti per scegliere il gestionale giusto per il tuo centro estetico.",
    excerpt:
      "Non tutti i gestionali sono uguali. Ecco i criteri che contano davvero, le domande da fare in prova gratuita e gli errori da evitare.",
    category: "Gestione del centro",
    keywords: [
      "gestionale centro estetico",
      "software centro estetico",
      "programma gestione centro estetico",
      "software prenotazioni centro estetico",
      "gestionale estetista",
      "software medicina estetica",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Il gestionale giusto per un centro estetico unisce agenda, prenotazioni online senza commissioni, scheda cliente con storico e foto, moduli di consenso firmabili in digitale e promemoria automatici, con dati ospitati nell'UE e conformi al GDPR. Scegli in base ai tuoi trattamenti e al tuo team, non alla lista di funzioni più lunga, e provalo per almeno due settimane con appuntamenti reali.",
    takeaways: [
      "Parti dai tuoi processi: chi prenota, chi tratta, cosa devi documentare.",
      "Agenda, prenotazione online, scheda cliente e consensi digitali devono stare nello stesso sistema.",
      "Preferisci un canone fisso trasparente alle commissioni sulle prenotazioni.",
      "Verifica dove sono ospitati i dati e chi è responsabile del trattamento ai sensi del GDPR.",
      "Usa la prova gratuita con clienti veri, non solo con dati di esempio.",
    ],
    intro: [
      "Agenda cartacea, foglio Excel, gruppo WhatsApp per gli spostamenti e un raccoglitore pieno di schede clienti: è la realtà di moltissimi centri estetici italiani. Funziona finché il centro è piccolo. Poi arriva la seconda collaboratrice, la cabina in più, il laser nuovo, e all'improvviso ogni giornata inizia con dieci minuti di caccia all'informazione.",
      "Un buon gestionale non serve a essere moderni, serve a recuperare tempo e a lavorare in modo più sicuro. In questa guida trovi i criteri che contano davvero, una checklist per la prova gratuita e gli errori più comuni che vediamo quando un centro cambia software.",
    ],
    sections: [
      {
        heading: "Di cosa ha davvero bisogno un centro estetico da un gestionale?",
        paragraphs: [
          "Prima di guardare le offerte, scrivi su un foglio come si svolge oggi una giornata tipo. Chi risponde al telefono? Chi sposta gli appuntamenti? Dove annoti che una cliente ha la pelle sensibile o prende anticoagulanti? Quanti moduli fai firmare su carta? Le risposte a queste domande sono la tua lista dei requisiti.",
          "Per la maggior parte dei centri le funzioni indispensabili sono sempre le stesse. Tutto il resto è un plus, utile ma non decisivo.",
        ],
        bullets: [
          "**Agenda** con colonne per operatrice e per cabina o macchinario.",
          "**Prenotazione online** con un link personale che puoi mettere su Instagram, Google e sito.",
          "**Scheda cliente** con storico trattamenti, note, foto prima/dopo e allergie.",
          "**Moduli digitali**: anamnesi e consenso informato inviati prima dell'appuntamento e firmati online.",
          "**Promemoria automatici** via email, SMS o WhatsApp.",
          "**Documentazione dei trattamenti** con parametri, foto e note, anche a voce.",
        ],
      },
      {
        heading: "Quali criteri usare per confrontare i gestionali?",
        paragraphs: [
          "Una volta chiaro cosa ti serve, confronta i software sugli stessi criteri. La tabella qui sotto riassume quelli che pesano di più nel lavoro quotidiano di un centro estetico o di uno studio di medicina estetica.",
        ],
        table: {
          headers: ["Criterio", "Cosa verificare", "Perché conta"],
          rows: [
            ["Facilità d'uso", "Quanti clic servono per spostare un appuntamento?", "Se il team non lo usa, il software non serve."],
            ["Modello di prezzo", "Canone fisso o commissione per prenotazione?", "Le commissioni crescono con il tuo successo."],
            ["Proprietà dei clienti", "Il software è anche un marketplace?", "Su un portale la cliente vede anche la concorrenza."],
            ["Documentazione", "Foto, parametri, consensi sulla scheda?", "Fondamentale per laser, peeling, PMU, medicina estetica."],
            ["Privacy", "Server nell'UE? Accordo sul trattamento dei dati?", "Tratti dati sanitari: il GDPR è severo."],
            ["Supporto", "Email, chat, tempi di risposta?", "Quando l'agenda si blocca il sabato, conta."],
          ],
        },
      },
      {
        heading: "Commissione o canone fisso: cosa conviene a un centro estetico?",
        paragraphs: [
          "Molte piattaforme sembrano gratuite o molto economiche perché guadagnano su altro: commissioni sulle nuove clienti portate dal portale, costi sui pagamenti, extra a pagamento. Per un centro che riempie l'agenda soprattutto con clienti abituali e passaparola, questo modello diventa presto costoso.",
          "Un canone fisso è più prevedibile: sai quanto paghi ogni mese, indipendentemente da quante prenotazioni ricevi. Inoltre le clienti prenotano tramite il **tuo** link e non su un portale dove compaiono anche altri centri della zona. Treatflow, per esempio, funziona così: nessuna commissione sulle prenotazioni, piani a partire da 39 € al mese e nessun marketplace.",
        ],
        callout:
          "Fai un conto semplice: quante prenotazioni ricevi al mese? Moltiplica per la commissione media del portale che stai valutando e confronta il risultato con un canone fisso.",
      },
      {
        heading: "Perché la scheda cliente e i consensi devono stare nello stesso software?",
        paragraphs: [
          "Nei centri che offrono epilazione laser, peeling chimici, trucco permanente o trattamenti di medicina estetica, la documentazione non è burocrazia: è la tua tutela. Anamnesi, consenso informato, parametri usati e foto devono essere collegati alla cliente e alla seduta, recuperabili in pochi secondi.",
          "Se l'agenda è in un'app, i moduli su carta e le foto nel telefono personale dell'operatrice, prima o poi qualcosa si perde. E le foto sul telefono privato sono anche un problema di privacy. Un gestionale che unisce agenda, scheda cliente, moduli e documentazione elimina questi passaggi.",
        ],
      },
      {
        heading: "Cosa controllare su privacy e GDPR prima di firmare?",
        paragraphs: [
          "In Italia il riferimento è il GDPR insieme al Codice privacy, con il Garante per la protezione dei dati personali come autorità di controllo. Le informazioni sulla salute (allergie, farmaci, gravidanza, patologie) rientrano nelle categorie particolari di dati e richiedono più attenzione.",
          "Il fornitore del software tratta questi dati per conto tuo, quindi è un responsabile del trattamento: deve offrirti un accordo (DPA) che regoli sicurezza, server e subfornitori. Chiedi sempre dove si trovano i server: un fornitore serio te lo dice chiaramente, insieme alle misure di sicurezza come connessione SSL e backup giornalieri.",
        ],
        bullets: [
          "Server nell'Unione europea.",
          "Accordo sul trattamento dei dati disponibile.",
          "Ruoli e permessi diversi per titolare e collaboratrici.",
          "Esportazione dei dati se un giorno vuoi cambiare software.",
        ],
      },
      {
        heading: "Quali funzioni contano di più in base al tipo di centro?",
        paragraphs: [
          "Un centro estetico tradizionale, uno studio di onicotecnica e uno studio di medicina estetica hanno priorità diverse. Prima di innamorarti di un software, guarda cosa conta nel tuo settore specifico.",
          "Se lavori con più sedi o con collaboratrici a partita IVA che affittano la cabina, verifica anche come il gestionale gestisce agende separate, permessi e visibilità delle schede clienti. Sono dettagli che in demo sembrano secondari e nella pratica diventano decisivi.",
        ],
        table: {
          headers: ["Tipo di attività", "Priorità nel gestionale"],
          rows: [
            ["Centro estetico con più cabine", "Agenda per operatrice e cabina, pacchetti, buoni regalo, promemoria"],
            ["Centro di epilazione laser", "Parametri per seduta, foto, consenso specifico, pianificazione delle sedute"],
            ["Studio di medicina estetica", "Anamnesi completa, consenso informato, documentazione dettagliata, permessi per ruolo"],
            ["Trucco permanente e tatuaggi", "Anamnesi, consenso, pigmenti usati, foto prima/dopo, ritocchi"],
            ["Onicotecnica e lash artist", "Prenotazione online veloce, refill ricorrenti, promemoria via WhatsApp"],
          ],
        },
      },
      {
        heading: "Come sfruttare al meglio la prova gratuita?",
        paragraphs: [
          "La prova gratuita è l'unico modo serio per capire se un gestionale fa per te. Non limitarti a cliccare tra i menu: usalo con il tuo listino e con appuntamenti veri.",
        ],
        steps: [
          "Inserisci i tuoi servizi reali con durate e prezzi.",
          "Crea gli account per le collaboratrici e configura le cabine o i macchinari.",
          "Condividi il link di prenotazione con 5–10 clienti fidate.",
          "Invia un modulo di anamnesi digitale a una cliente prima del trattamento.",
          "Documenta una seduta completa con foto e note.",
          "Dopo una settimana chiedi al team cosa è stato più semplice e cosa più faticoso.",
        ],
        callout:
          "Treatflow offre 14 giorni di prova gratuita, senza carta di credito e senza vincoli: puoi disdire quando vuoi.",
      },
      {
        heading: "Quali errori evitare quando cambi gestionale?",
        paragraphs: [
          "Il primo errore è scegliere solo in base al prezzo. Il secondo è scegliere il software con più funzioni, metà delle quali non userai mai, rendendo tutto più complicato. Il terzo è non coinvolgere il team: chi lavora in cabina deve trovarsi bene con l'agenda e la scheda cliente.",
          "Un ultimo consiglio pratico: se hai la partita IVA e lavori con un commercialista, chiedi in anticipo come il nuovo gestionale si inserisce nel tuo flusso di fatturazione elettronica. Meglio chiarirlo prima che a fine mese.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto costa un gestionale per centro estetico?",
        a: "Dipende dal modello. Alcuni software hanno un canone mensile fisso, altri sono gratuiti ma applicano commissioni o costi extra. Treatflow parte da 39 € al mese (35 € con pagamento annuale), senza commissioni sulle prenotazioni.",
      },
      {
        q: "Un gestionale va bene anche per uno studio di medicina estetica?",
        a: "Sì, se gestisce bene anamnesi, consenso informato, documentazione dei trattamenti e foto. Questi elementi sono più importanti dell'agenda stessa quando si tratta di trattamenti medici o laser.",
      },
      {
        q: "Posso usare il gestionale anche da tablet o smartphone?",
        a: "I gestionali moderni funzionano nel browser, quindi anche su tablet e smartphone. Verifica in prova che la scheda cliente e la firma dei moduli funzionino bene sul tablet che usi in cabina.",
      },
      {
        q: "Cosa succede ai miei dati se cambio software?",
        a: "I dati delle clienti appartengono al tuo centro. Prima di firmare chiedi come puoi esportarli e in quale formato.",
      },
      {
        q: "Serve un gestionale anche se lavoro da sola?",
        a: "Spesso è proprio chi lavora da sola a guadagnarci di più: prenotazioni online e promemoria automatici ti evitano telefonate e messaggi mentre sei in cabina.",
      },
    ],
    related: [
      { pageKey: "beauty-salon-software", label: "Software per centro estetico" },
      { pageKey: "features", label: "Tutte le funzioni" },
      { pageKey: "pricing", label: "Prezzi" },
      { pageKey: "software-comparison", label: "Confronto software" },
    ],
    sources: [
      { label: "Garante per la protezione dei dati personali", url: "https://www.garanteprivacy.it" },
      { label: "Regolamento (UE) 2016/679 (GDPR) – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Appuntamenti mancati
  // ---------------------------------------------------------------------------
  {
    topic: "reduce-no-shows",
    lang: "it",
    slug: "ridurre-appuntamenti-mancati-centro-estetico",
    title: "Appuntamenti mancati nel centro estetico: come ridurli davvero",
    metaTitle: "Ridurre gli appuntamenti mancati nel centro estetico",
    description:
      "Clienti che non si presentano? Promemoria via SMS e WhatsApp, conferme, regole di disdetta e lista d'attesa: il metodo pratico per ridurre i no-show.",
    excerpt:
      "Ogni cabina vuota è fatturato perso. Ecco come promemoria, regole chiare e qualche accorgimento nell'agenda riducono i no-show senza irritare le clienti.",
    category: "Agenda e prenotazioni",
    keywords: [
      "appuntamenti mancati centro estetico",
      "no show centro estetico",
      "promemoria appuntamenti sms",
      "promemoria whatsapp clienti",
      "politica di cancellazione centro estetico",
      "disdette appuntamenti",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Per ridurre gli appuntamenti mancati in un centro estetico servono tre cose: un promemoria automatico 24–48 ore prima (SMS, WhatsApp o email), un modo semplice per disdire o spostare e una regola di cancellazione chiara comunicata già al momento della prenotazione. Per i trattamenti lunghi o costosi aiuta anche chiedere un acconto.",
    takeaways: [
      "La maggior parte dei no-show nasce da dimenticanza, non da maleducazione.",
      "Un promemoria automatico 24–48 ore prima è la misura più efficace e meno faticosa.",
      "Rendere facile la disdetta trasforma un no-show in un posto da riassegnare.",
      "Regole di cancellazione e acconti vanno comunicati prima, non dopo.",
      "Misura il tasso di no-show ogni mese per capire cosa funziona.",
    ],
    intro: [
      "Sono le 15:00, la cabina è pronta, il lettino preparato, la cera alla temperatura giusta. La cliente non arriva. Non risponde al telefono. Un'ora di lavoro persa, e magari due clienti a cui avevi detto che quel giorno era tutto pieno.",
      "Gli appuntamenti mancati sono uno dei costi nascosti più fastidiosi per un centro estetico, uno studio di unghie o una lash artist. La buona notizia è che si possono ridurre molto con poche misure concrete. Vediamo quali.",
    ],
    sections: [
      {
        heading: "Perché le clienti non si presentano all'appuntamento?",
        paragraphs: [
          "Nella grande maggioranza dei casi non c'è cattiva volontà. La cliente ha prenotato tre settimane fa, la giornata è cambiata, l'appuntamento è sparito dalla memoria. Oppure voleva disdire ma non ha avuto voglia di telefonare durante l'orario di apertura.",
          "Capire questo cambia l'approccio: invece di punire, conviene **ricordare** e **semplificare**. Le regole severe servono solo per i casi recidivi.",
        ],
        bullets: [
          "Dimenticanza: l'appuntamento era lontano nel tempo.",
          "Imprevisto: lavoro, figli, malattia.",
          "Disdetta scomoda: bisogna telefonare e il centro non risponde perché sta lavorando.",
          "Prenotazione poco vincolante: nessuna conferma, nessuna regola comunicata.",
        ],
      },
      {
        heading: "Quanto costa davvero un appuntamento mancato?",
        paragraphs: [
          "Fai il calcolo con i tuoi numeri. Prendi il prezzo medio di un trattamento e moltiplicalo per gli appuntamenti mancati in un mese. Se, a titolo di esempio, un trattamento vale in media 60 € e ogni settimana salta un appuntamento, a fine anno hai perso l'equivalente di circa cinquanta trattamenti.",
          "E il conto non finisce qui. C'è il tempo della cabina preparata per niente, il prodotto eventualmente già miscelato, la cliente che avresti potuto inserire in quello slot e che magari è andata altrove. Per uno studio di trucco permanente o un centro laser, dove le sedute sono lunghe e di valore alto, un solo no-show può pesare quanto una mezza giornata di lavoro.",
        ],
        callout:
          "Scrivi il tuo numero su un post-it: quanto ti è costato il mese scorso? È il punto di partenza per decidere quanto investire in promemoria e organizzazione.",
      },
      {
        heading: "Quando e come inviare i promemoria degli appuntamenti?",
        paragraphs: [
          "Il promemoria automatico è la misura con il miglior rapporto tra sforzo e risultato. Una volta impostato, lavora da solo. Il momento ideale per la maggior parte dei trattamenti è 24 ore prima; per trattamenti lunghi (trucco permanente, extension ciglia complete, laser su zone ampie) può avere senso un primo avviso 48 ore prima.",
          "Il canale conta: in Italia WhatsApp e SMS vengono letti molto più rapidamente dell'email. L'ideale è combinare: conferma via email subito dopo la prenotazione, promemoria via SMS o WhatsApp il giorno prima.",
        ],
        table: {
          headers: ["Momento", "Canale", "Contenuto"],
          rows: [
            ["Subito dopo la prenotazione", "Email", "Conferma con data, ora, indirizzo, regola di disdetta"],
            ["48 ore prima (trattamenti lunghi)", "Email o WhatsApp", "Promemoria + eventuali istruzioni di preparazione"],
            ["24 ore prima", "SMS o WhatsApp", "Promemoria breve con link per spostare o disdire"],
          ],
        },
        callout:
          "Con Treatflow i promemoria via email, SMS e WhatsApp partono in automatico dall'agenda, senza che tu debba scrivere un solo messaggio.",
      },
      {
        heading: "Cosa scrivere nel promemoria per farlo funzionare?",
        paragraphs: [
          "Un buon promemoria è breve, personale e contiene tutto ciò che serve per agire. Evita testi lunghi o troppo formali: la cliente deve capire in due secondi di cosa si tratta e cosa può fare.",
          "Un esempio che funziona bene: «Ciao Martina, ti ricordiamo il tuo appuntamento per la laminazione ciglia domani alle 16:30 da Studio Bellezza. Se non puoi venire, puoi spostarlo qui: [link]. A domani!»",
        ],
        bullets: [
          "Nome della cliente e nome del centro.",
          "Trattamento, giorno e orario.",
          "Link per spostare o disdire.",
          "Eventuali istruzioni: arrivare struccata, non esporsi al sole prima del laser, portare il modulo compilato.",
          "Tono coerente con il tuo centro: cordiale, mai minaccioso.",
        ],
        callout:
          "Le istruzioni di preparazione nel promemoria riducono anche un altro problema: la cliente che si presenta ma non può essere trattata, per esempio perché è abbronzata prima di una seduta laser.",
      },
      {
        heading: "Come rendere facile la disdetta senza perdere la cliente?",
        paragraphs: [
          "Sembra controintuitivo, ma più è facile disdire, meno appuntamenti vanno persi. Una cliente che può spostare l'appuntamento con un clic lo fa il giorno prima; una cliente che deve telefonare spesso rimanda e alla fine non si presenta.",
          "Con le prenotazioni online la cliente può cambiare data in autonomia, e il posto liberato torna subito disponibile per qualcun altro. Se hai una lista d'attesa, puoi contattare chi aspettava proprio quello slot.",
        ],
      },
      {
        heading: "Serve una politica di cancellazione? Come scriverla?",
        paragraphs: [
          "Una regola chiara protegge il tuo tempo e, se comunicata bene, viene accettata senza problemi dalla maggior parte delle clienti. La chiave è la trasparenza: la regola deve essere visibile **prima** della prenotazione, nella conferma e nel promemoria.",
          "Formula la regola in modo semplice e cortese. Per esempio: «Puoi spostare o disdire gratuitamente fino a 24 ore prima. In caso di mancata presentazione senza avviso potremmo chiedere un acconto per le prenotazioni future.»",
        ],
        steps: [
          "Decidi il termine di disdetta gratuita (di solito 24 o 48 ore).",
          "Stabilisci cosa succede in caso di no-show (avviso, acconto futuro, addebito).",
          "Pubblica la regola nella pagina di prenotazione online.",
          "Ripetila nella conferma e nel promemoria.",
          "Applicala con coerenza, ma con buon senso per le clienti storiche.",
        ],
      },
      {
        heading: "Acconto o caparra: quando ha senso chiederlo?",
        paragraphs: [
          "Per trattamenti lunghi o costosi (trucco permanente, pacchetti laser, sedute di medicina estetica, prime applicazioni di extension) chiedere un acconto al momento della prenotazione è sempre più comune. Riduce drasticamente i no-show perché la cliente ha già un impegno concreto.",
          "Non serve applicarlo a tutto: per una manicure o una ceretta veloce rischi solo di scoraggiare le prenotazioni. Valuta l'acconto per i servizi sopra una certa durata o prezzo e per le clienti che hanno già mancato un appuntamento. Se hai dubbi su come inquadrare acconto e caparra dal punto di vista contrattuale e fiscale, confrontati con il tuo commercialista.",
        ],
      },
      {
        heading: "Come organizzare l'agenda per limitare i danni dei no-show?",
        paragraphs: [
          "Anche con tutte le precauzioni qualche appuntamento salterà. Un'agenda ben organizzata riduce l'impatto.",
        ],
        bullets: [
          "Tieni una **lista d'attesa** per gli orari più richiesti (sabato, tardo pomeriggio).",
          "Annota i no-show sulla scheda cliente: così sai a chi chiedere un acconto la prossima volta.",
          "Evita prenotazioni troppo lontane per servizi brevi: più l'appuntamento è lontano, più è facile dimenticarlo.",
          "Fissa il prossimo appuntamento a fine trattamento, quando la cliente è ancora in cabina.",
        ],
      },
      {
        heading: "Come misurare se le misure funzionano?",
        paragraphs: [
          "Conta ogni mese gli appuntamenti mancati senza preavviso e dividili per il totale degli appuntamenti. Annota quando introduci una novità (promemoria, regola, acconto) e confronta i mesi prima e dopo. Senza numeri è difficile capire cosa funziona davvero nel tuo centro.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto prima va inviato il promemoria dell'appuntamento?",
        a: "Per la maggior parte dei trattamenti 24 ore prima è il momento giusto. Per trattamenti lunghi o che richiedono preparazione, un primo avviso 48 ore prima è utile.",
      },
      {
        q: "Meglio SMS, WhatsApp o email per i promemoria?",
        a: "SMS e WhatsApp vengono letti più rapidamente, l'email è ideale per la conferma dettagliata. Molti centri combinano i canali. Treatflow supporta tutti e tre.",
      },
      {
        q: "Posso far pagare un appuntamento mancato?",
        a: "Puoi prevedere una regola di cancellazione, ma deve essere comunicata e accettata prima della prenotazione. Per gli aspetti contrattuali e fiscali confrontati con il tuo consulente.",
      },
      {
        q: "Serve il consenso della cliente per inviare i promemoria?",
        a: "I promemoria di servizio legati a un appuntamento prenotato sono diversi dal marketing. Indica comunque nell'informativa privacy che usi i contatti per conferme e promemoria. Per messaggi promozionali serve un consenso specifico.",
      },
      {
        q: "Cosa faccio con una cliente che manca spesso gli appuntamenti?",
        a: "Annotalo sulla scheda cliente e, per le prenotazioni successive, chiedi un acconto. Una conversazione cortese ma chiara spesso basta.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Promemoria automatici" },
      { pageKey: "online-booking", label: "Prenotazioni online" },
      { pageKey: "appointment-calendar", label: "Calendario appuntamenti" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Prenotazioni online
  // ---------------------------------------------------------------------------
  {
    topic: "online-booking-salon",
    lang: "it",
    slug: "prenotazioni-online-centro-estetico",
    title: "Prenotazioni online per centri estetici: vantaggi e come iniziare",
    metaTitle: "Prenotazioni online per il centro estetico: guida",
    description:
      "Perché le prenotazioni online fanno risparmiare tempo al centro estetico, come configurarle bene e dove mettere il link: guida pratica per iniziare subito.",
    excerpt:
      "Meno telefonate, più appuntamenti anche di sera. Ecco come impostare le prenotazioni online nel tuo centro senza perdere il controllo dell'agenda.",
    category: "Agenda e prenotazioni",
    keywords: [
      "prenotazioni online centro estetico",
      "software prenotazioni",
      "agenda online estetista",
      "prenotazione appuntamenti online",
      "link prenotazione instagram",
      "sistema di prenotazione online",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Le prenotazioni online permettono alle clienti di scegliere trattamento, operatrice e orario in qualsiasi momento, anche quando il centro è chiuso, e riducono telefonate e messaggi durante il lavoro in cabina. Per funzionare bene servono servizi con durate realistiche, regole chiare su anticipo e disdetta e un link personale ben visibile su Instagram, Google e sito.",
    takeaways: [
      "Molte clienti vogliono prenotare la sera o nel weekend, quando il centro è chiuso.",
      "Durate, pause e tempi di preparazione vanno impostati con precisione.",
      "Il tuo link di prenotazione deve stare su Instagram, Google Business Profile e sito.",
      "Un link proprio ti evita commissioni e la vetrina accanto alla concorrenza.",
      "Non tutti i servizi devono essere prenotabili online: decidi tu.",
    ],
    intro: [
      "Mentre stai facendo una pulizia del viso il telefono vibra tre volte. Un messaggio su Instagram, un WhatsApp, una chiamata persa. Tutte vogliono la stessa cosa: un appuntamento. Rispondi alle 20:00, a fine giornata, e una delle tre ha già prenotato altrove.",
      "Le prenotazioni online risolvono questo problema in modo semplice. In questa guida vediamo cosa portano davvero a un centro estetico, come configurarle bene e come convincere anche le clienti più affezionate al telefono.",
    ],
    sections: [
      {
        heading: "Quali sono i vantaggi delle prenotazioni online per un centro estetico?",
        paragraphs: [
          "Il vantaggio più evidente è il tempo. Ogni prenotazione che arriva online è una telefonata in meno, un messaggio in meno, una trattativa in meno sugli orari. Ma ci sono anche vantaggi meno ovvi.",
        ],
        bullets: [
          "**Prenotazioni 24/7**: molte clienti decidono la sera sul divano o la domenica.",
          "**Meno errori**: niente orari scritti male o doppie prenotazioni.",
          "**Meno interruzioni** durante i trattamenti.",
          "**Dati puliti**: nome, telefono ed email arrivano già nella scheda cliente.",
          "**Promemoria automatici** collegati alla prenotazione, quindi meno no-show.",
          "**Immagine professionale**, soprattutto per le clienti più giovani.",
        ],
      },
      {
        heading: "Link proprio o portale di prenotazione: che differenza c'è?",
        paragraphs: [
          "Ci sono due modi per offrire la prenotazione online. Il primo è un portale o marketplace dove compare il tuo centro insieme a molti altri: può portare visibilità, ma di solito chiede commissioni sulle nuove clienti e la cliente vede anche le offerte della concorrenza.",
          "Il secondo è un link di prenotazione personale, collegato al tuo gestionale. Le clienti prenotano direttamente da te, i dati restano tuoi e non paghi commissioni. Treatflow segue questo secondo modello: ogni centro ha il suo link di prenotazione, senza marketplace e senza commissioni.",
        ],
        table: {
          headers: ["", "Marketplace", "Link personale"],
          rows: [
            ["Visibilità nuove clienti", "Sì, tramite il portale", "Tramite i tuoi canali"],
            ["Commissioni", "Spesso sì", "No"],
            ["Concorrenza visibile", "Sì", "No"],
            ["Relazione con la cliente", "Mediata dal portale", "Diretta"],
          ],
        },
      },
      {
        heading: "Come configurare le prenotazioni online passo dopo passo?",
        paragraphs: [
          "La qualità della configurazione decide se le prenotazioni online ti aiutano o ti creano problemi. Prenditi un pomeriggio e segui questi passaggi.",
        ],
        steps: [
          "Elenca i servizi prenotabili con nomi chiari che le clienti capiscono (non sigle interne).",
          "Imposta durate realistiche, includendo preparazione e pulizia della cabina.",
          "Assegna ogni servizio alle operatrici e alle cabine o ai macchinari giusti.",
          "Definisci l'anticipo minimo (es. 12 ore) e fino a quando si può prenotare in avanti.",
          "Scrivi la regola di disdetta e mostrala nella pagina di prenotazione.",
          "Attiva conferma e promemoria automatici.",
          "Fai una prenotazione di prova come se fossi una cliente.",
        ],
        callout:
          "Per trattamenti che richiedono una consulenza (medicina estetica, primo trattamento laser, trucco permanente) puoi rendere prenotabile online solo la consulenza e fissare il trattamento dopo.",
      },
      {
        heading: "Dove mettere il link di prenotazione per farlo usare?",
        paragraphs: [
          "Un link che nessuno trova non serve a niente. Mettilo ovunque le tue clienti ti cercano.",
        ],
        bullets: [
          "Bio di Instagram e pulsante di azione del profilo.",
          "Google Business Profile, con il link per prenotare.",
          "Sito web del centro (pulsante ben visibile in alto).",
          "Risposta automatica di WhatsApp Business.",
          "Firma email e biglietti da visita con QR code.",
        ],
      },
      {
        heading: "Come gestire più operatrici, cabine e macchinari?",
        paragraphs: [
          "Nei centri con più persone la prenotazione online deve sapere non solo chi è libera, ma anche quale cabina o quale macchinario è disponibile. Se hai un solo laser e due operatrici che lo usano, il sistema deve impedire che vengano prenotate due sedute laser alla stessa ora.",
          "Per questo conviene un'agenda con colonne per operatrice e per risorsa. La cliente sceglie il trattamento e, se vuole, l'operatrice preferita; il sistema propone solo gli orari in cui persona e cabina sono entrambe libere.",
        ],
      },
      {
        heading: "Quali errori evitare con le prenotazioni online?",
        paragraphs: [
          "La maggior parte dei problemi con le prenotazioni online non dipende dal software ma dalla configurazione. Questi sono gli errori che vediamo più spesso.",
        ],
        bullets: [
          "**Durate troppo corte**: senza tempo per preparazione e pulizia l'agenda va in ritardo tutto il giorno.",
          "**Troppi servizi**: 60 voci quasi uguali confondono la cliente. Raggruppa e semplifica.",
          "**Nessuna regola di disdetta** visibile al momento della prenotazione.",
          "**Link nascosto**: se è solo in fondo al sito, nessuno lo usa.",
          "**Agenda doppia**: tenere anche quella di carta porta a errori e doppie prenotazioni.",
          "**Nessun promemoria**: la prenotazione online da sola non riduce i no-show.",
        ],
      },
      {
        heading: "Come abituare le clienti abituali a prenotare online?",
        paragraphs: [
          "Le clienti storiche sono abituate a scriverti su WhatsApp, e va bene così. Non serve obbligarle. Basta rendere la prenotazione online la via più comoda.",
          "Quando una cliente ti scrive per un appuntamento, rispondi con un messaggio gentile e il link: «Così puoi vedere subito tutti gli orari liberi.» Dopo due o tre volte la maggior parte prenota da sola. Per chi proprio preferisce il telefono, continua a inserire tu l'appuntamento nella stessa agenda.",
        ],
      },
      {
        heading: "Le prenotazioni online sono sicure dal punto di vista della privacy?",
        paragraphs: [
          "Durante la prenotazione raccogli dati personali, quindi valgono le regole del GDPR. In pratica: mostra un link all'informativa privacy nella pagina di prenotazione, chiedi solo i dati necessari e, se vuoi inviare anche newsletter o promozioni, aggiungi una casella di consenso separata e non preselezionata.",
          "Verifica anche dove finiscono i dati: meglio un sistema in cui le prenotazioni arrivano direttamente nella scheda cliente, su server nell'UE e con connessione cifrata. Il centro resta titolare dei dati delle proprie clienti.",
        ],
      },
      {
        heading: "Non perderò il controllo dell'agenda?",
        paragraphs: [
          "È la paura più comune, ed è comprensibile. In realtà con un buon sistema decidi tu tutto: quali servizi sono prenotabili, in quali giorni, con quali operatrici, con quanto anticipo. Puoi bloccare fasce orarie per le urgenze, le clienti VIP o le pause.",
          "In Treatflow le prenotazioni online finiscono direttamente nel calendario appuntamenti, con colonne per operatrice e cabina, insieme a quelle inserite a mano. Una sola agenda, nessuna doppia prenotazione.",
        ],
      },
      {
        heading: "Come capire se le prenotazioni online stanno funzionando?",
        paragraphs: [
          "Dopo uno o due mesi guarda tre indicatori: quale quota degli appuntamenti arriva online, in quali orari le clienti prenotano (spesso sorprende quante lo fanno la sera tardi) e quante telefonate o messaggi per appuntamenti ricevi ancora. Se la quota online resta bassa, il problema è quasi sempre la visibilità del link o un elenco di servizi troppo complicato.",
          "Chiedi anche un parere alle clienti: era facile trovare il trattamento giusto? L'orario proposto era chiaro? Piccoli aggiustamenti ai nomi dei servizi o alle durate fanno spesso una grande differenza.",
        ],
      },
      {
        heading: "Cosa chiedere alla cliente durante la prenotazione?",
        paragraphs: [
          "Chiedi il minimo indispensabile: nome, telefono, email. Ogni campo in più riduce le prenotazioni completate. Le informazioni sanitarie non vanno raccolte nel modulo di prenotazione, ma in un modulo di anamnesi separato inviato prima dell'appuntamento, con le giuste garanzie di privacy.",
        ],
      },
    ],
    faq: [
      {
        q: "Le prenotazioni online funzionano anche per i centri piccoli?",
        a: "Sì, anzi: chi lavora da sola o con una collaboratrice ha più bisogno di non essere interrotta in cabina.",
      },
      {
        q: "Posso approvare le prenotazioni prima che siano confermate?",
        a: "Dipende dal software e dalle impostazioni. Per molti centri funziona meglio la conferma immediata, con regole chiare su servizi e orari prenotabili.",
      },
      {
        q: "Le clienti più grandi useranno davvero la prenotazione online?",
        a: "Molte sì, più di quanto ci si aspetti. Chi preferisce il telefono può continuare a chiamare: l'appuntamento finisce nella stessa agenda.",
      },
      {
        q: "Devo pagare una commissione per ogni prenotazione online?",
        a: "Con i marketplace spesso sì. Con un link personale collegato al gestionale no. Treatflow non applica commissioni sulle prenotazioni.",
      },
      {
        q: "Serve un sito web per avere le prenotazioni online?",
        a: "No. Il link di prenotazione funziona anche da solo, su Instagram o Google. Se vuoi, puoi aggiungere un sito del centro collegato all'agenda.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Prenotazioni online" },
      { pageKey: "appointment-calendar", label: "Calendario appuntamenti" },
      { pageKey: "studio-website", label: "Sito web per il centro" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Scheda cliente / anamnesi digitale
  // ---------------------------------------------------------------------------
  {
    topic: "digital-consultation-forms",
    lang: "it",
    slug: "scheda-cliente-digitale-centro-estetico",
    title: "Scheda cliente e anamnesi digitale nel centro estetico: guida completa",
    metaTitle: "Scheda cliente e anamnesi digitale: guida pratica",
    description:
      "Cosa inserire nella scheda cliente e nel modulo di anamnesi, come raccogliere il consenso informato con firma digitale e gestire i dati in modo conforme.",
    excerpt:
      "Dalla scheda di carta al modulo digitale firmato prima dell'appuntamento: cosa chiedere, come strutturarlo e come conservarlo in sicurezza.",
    category: "Documentazione",
    keywords: [
      "scheda cliente centro estetico",
      "scheda anamnesi estetica",
      "consenso informato estetica",
      "modulo consenso informato laser",
      "scheda cliente digitale",
      "firma digitale consenso",
      "anamnesi trucco permanente",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Una scheda cliente digitale raccoglie dati anagrafici, anamnesi (allergie, farmaci, patologie, gravidanza), consenso informato e storico dei trattamenti in un unico posto. Il modo più efficiente è inviare il modulo alla cliente prima dell'appuntamento, farlo firmare online e salvarlo automaticamente sulla sua scheda, aggiornandolo a ogni cambiamento rilevante.",
    takeaways: [
      "Anamnesi e consenso informato tutelano sia la cliente sia il centro.",
      "Inviare il modulo prima dell'appuntamento fa risparmiare tempo in cabina.",
      "Chiedi solo i dati sanitari necessari per il trattamento specifico.",
      "Il consenso informato va spiegato, non solo firmato.",
      "Aggiorna l'anamnesi periodicamente e prima di trattamenti nuovi.",
    ],
    intro: [
      "La cliente arriva cinque minuti prima, le dai una cartellina e una penna, compila in sala d'attesa con la grafia di fretta, salta metà delle domande. Il foglio finisce in un raccoglitore. Sei mesi dopo, prima di un trattamento laser, nessuno ricorda se aveva segnalato un farmaco fotosensibilizzante.",
      "La scheda cliente e il modulo di anamnesi sono tra i documenti più importanti di un centro estetico, di uno studio di trucco permanente o di medicina estetica. Vediamo come strutturarli bene e perché passare al digitale cambia davvero il lavoro quotidiano.",
    ],
    sections: [
      {
        heading: "Cosa deve contenere una scheda cliente per centro estetico?",
        paragraphs: [
          "La scheda cliente è il quadro completo della persona che tratti. Non è solo un elenco di contatti: è la memoria del centro, utile anche quando la cliente viene seguita da una collega diversa.",
        ],
        bullets: [
          "Dati anagrafici e di contatto.",
          "Fototipo e tipo di pelle, se rilevanti per i tuoi trattamenti.",
          "Anamnesi: allergie, farmaci, patologie, gravidanza o allattamento.",
          "Consensi firmati (trattamento, privacy, eventuali foto e marketing).",
          "Storico dei trattamenti con data, operatrice, prodotti e parametri.",
          "Foto prima/dopo collegate alla seduta.",
          "Note e preferenze (orari, profumi, sensibilità).",
        ],
      },
      {
        heading: "Quali domande inserire nel modulo di anamnesi?",
        paragraphs: [
          "Le domande dipendono dai trattamenti. Una regola importante: chiedi solo ciò che ti serve davvero per lavorare in sicurezza. Il GDPR richiede la minimizzazione dei dati, e le informazioni sulla salute sono dati particolarmente delicati.",
        ],
        table: {
          headers: ["Trattamento", "Domande tipiche"],
          rows: [
            ["Viso e corpo", "Allergie a cosmetici, pelle sensibile, rosacea, uso di retinoidi"],
            ["Epilazione laser e luce pulsata", "Farmaci fotosensibilizzanti, esposizione al sole, abbronzatura, gravidanza, tatuaggi nella zona"],
            ["Trucco permanente e tatuaggi", "Anticoagulanti, diabete, tendenza a cheloidi, herpes labiale, allergie ai pigmenti"],
            ["Extension ciglia", "Allergie a colle o cianoacrilati, lenti a contatto, interventi agli occhi"],
            ["Unghie", "Allergie ad acrilati, micosi, problemi circolatori"],
            ["Medicina estetica", "Anamnesi medica completa secondo le indicazioni del medico responsabile"],
          ],
        },
      },
      {
        heading: "Come si raccoglie un consenso informato valido?",
        paragraphs: [
          "Il consenso informato non è un foglio da far firmare velocemente. La cliente deve capire cosa farai, quali risultati sono realistici, quali effetti collaterali o rischi esistono e quali sono le alternative. Per gli atti medici, come i trattamenti di medicina estetica, il riferimento in Italia è la Legge 219/2017, e la responsabilità del consenso è del medico.",
          "Per i trattamenti estetici non medici il consenso scritto è comunque una buona prassi, soprattutto per laser, peeling, trucco permanente e tutto ciò che comporta un rischio di reazione. Per le clienti minorenni serve il consenso di chi esercita la responsabilità genitoriale.",
        ],
        steps: [
          "Spiega il trattamento a voce, con parole semplici.",
          "Consegna o invia il testo del consenso con rischi e controindicazioni.",
          "Lascia spazio alle domande e annota eventuali chiarimenti.",
          "Fai firmare con data e, se possibile, firma digitale.",
          "Salva il consenso sulla scheda cliente, collegato al trattamento.",
        ],
        callout:
          "Questa guida non sostituisce una consulenza legale. Per i testi dei consensi, soprattutto in ambito medico, fatti supportare dalla tua associazione di categoria o da un professionista.",
      },
      {
        heading: "Perché inviare l'anamnesi prima dell'appuntamento?",
        paragraphs: [
          "Quando la cliente compila il modulo a casa, con calma, le risposte sono più complete e precise. E tu guadagni tempo: arrivi in cabina sapendo già se ci sono controindicazioni, invece di scoprirle mentre la cliente è sul lettino.",
          "Con Treatflow i moduli di anamnesi e consenso vengono inviati automaticamente prima dell'appuntamento. La cliente li compila e li firma dallo smartphone, e risposte e firma finiscono direttamente sulla sua scheda.",
        ],
        bullets: [
          "Meno tempo perso in sala d'attesa.",
          "Controindicazioni note prima del trattamento.",
          "Nessun foglio da archiviare o scannerizzare.",
          "Grafia leggibile, sempre.",
        ],
      },
      {
        heading: "Cosa cambia passando dalla scheda di carta a quella digitale?",
        paragraphs: [
          "Molti centri temono che il digitale sia più complicato. Nella pratica succede il contrario: meno fogli, meno ricerche, meno errori. Ecco un confronto diretto.",
        ],
        table: {
          headers: ["", "Scheda su carta", "Scheda digitale"],
          rows: [
            ["Compilazione", "In sala d'attesa, di fretta", "A casa, prima dell'appuntamento"],
            ["Leggibilità", "Dipende dalla grafia", "Sempre leggibile"],
            ["Ricerca", "Raccoglitori e archivi", "Pochi secondi dalla scheda"],
            ["Collegamento ai trattamenti", "Fogli separati", "Storico, foto e consensi insieme"],
            ["Sicurezza", "Armadio, rischio smarrimento", "Accesso protetto, backup"],
          ],
        },
      },
      {
        heading: "Come introdurre i moduli digitali senza stress?",
        paragraphs: [
          "Non serve digitalizzare tutto in un giorno. Un passaggio graduale funziona meglio, per te e per le clienti.",
        ],
        steps: [
          "Parti dal modulo che usi di più, di solito l'anamnesi generale.",
          "Trasformalo in modulo digitale e invialo alle nuove clienti prima del primo appuntamento.",
          "Aggiungi i moduli specifici (laser, trucco permanente, peeling) uno alla volta.",
          "Per le clienti abituali, chiedi la compilazione digitale al prossimo aggiornamento dell'anamnesi.",
          "Tieni un tablet in centro per chi non ha compilato da casa.",
        ],
      },
      {
        heading: "Come documentare i trattamenti nella scheda cliente?",
        paragraphs: [
          "Il modulo iniziale è solo l'inizio. Ogni seduta andrebbe documentata: data, operatrice, prodotti o pigmenti usati, parametri del macchinario, reazione della pelle, foto. Per l'epilazione laser, ad esempio, annotare fluenza, spot e reazione a ogni seduta permette di adattare il trattamento successivo.",
          "La documentazione dettagliata richiede tempo, ed è proprio qui che molti centri rinunciano. Dettare le note a voce aiuta molto: in Treatflow puoi parlare invece di scrivere, il testo viene trascritto e può essere migliorato con l'IA. La nota resta sulla seduta.",
        ],
      },
      {
        heading: "Quali errori evitare nella scheda cliente?",
        paragraphs: [
          "Anche una scheda digitale perde valore se compilata male. Questi sono gli errori più comuni che rendono la documentazione poco utile proprio quando serve.",
        ],
        bullets: [
          "**Note vaghe** come «tutto ok»: meglio descrivere reazione della pelle, prodotti e parametri.",
          "**Foto senza data o senza seduta**: impossibile confrontare il prima e il dopo.",
          "**Consenso generico** non legato al trattamento effettivamente eseguito.",
          "**Anamnesi mai aggiornata** dopo il primo appuntamento.",
          "**Informazioni sparse** tra agenda, chat e quaderno: tutto deve finire sulla scheda.",
        ],
      },
      {
        heading: "Ogni quanto aggiornare l'anamnesi?",
        paragraphs: [
          "La salute cambia: un nuovo farmaco, una gravidanza, un intervento. Chiedi un aggiornamento almeno una volta all'anno per le clienti abituali e sempre prima di un trattamento nuovo o più invasivo. Una domanda veloce all'inizio di ogni seduta («È cambiato qualcosa dall'ultima volta?») è un'abitudine semplice ed efficace.",
        ],
      },
      {
        heading: "Come conservare le schede nel rispetto della privacy?",
        paragraphs: [
          "Le schede cartacee in un armadio aperto alla reception non sono una buona idea. In digitale servono accesso protetto, permessi per ruolo e server affidabili. Le foto non devono restare sul telefono personale delle operatrici. Definisci anche per quanto tempo conservi le schede delle clienti che non tornano più e scrivilo nell'informativa privacy.",
        ],
      },
    ],
    faq: [
      {
        q: "La firma digitale sul consenso ha valore?",
        a: "Una firma elettronica raccolta in modo tracciabile, con data e collegata al documento, è molto più solida di un foglio firmato di fretta. Per atti medici con requisiti particolari confrontati con il tuo consulente legale.",
      },
      {
        q: "Posso usare lo stesso modulo per tutti i trattamenti?",
        a: "Meglio avere una base comune e moduli specifici per i trattamenti più delicati (laser, trucco permanente, peeling, medicina estetica).",
      },
      {
        q: "Devo chiedere il consenso per fare foto prima e dopo?",
        a: "Sì, le foto del viso o del corpo sono dati personali. Chiedi un consenso esplicito, separando l'uso per documentazione interna da un eventuale uso sui social.",
      },
      {
        q: "Cosa faccio se la cliente non compila il modulo prima?",
        a: "Falle compilare il modulo su tablet in centro prima del trattamento. Senza anamnesi aggiornata è meglio non procedere con trattamenti a rischio.",
      },
      {
        q: "Esistono modelli pronti di anamnesi e consenso?",
        a: "Sì, molti gestionali offrono modelli. Treatflow ha un negozio di modelli di moduli da adattare al tuo centro. Verifica sempre che i testi siano adatti ai tuoi trattamenti.",
      },
    ],
    related: [
      { pageKey: "forms", label: "Moduli digitali e consensi" },
      { pageKey: "treatment-documentation", label: "Documentazione trattamenti" },
      { pageKey: "client-records", label: "Schede clienti" },
    ],
    sources: [
      {
        label: "Legge 22 dicembre 2017, n. 219 (consenso informato) – Normattiva",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-12-22;219",
      },
      { label: "Garante per la protezione dei dati personali", url: "https://www.garanteprivacy.it" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Fidelizzazione
  // ---------------------------------------------------------------------------
  {
    topic: "client-retention",
    lang: "it",
    slug: "fidelizzare-clienti-centro-estetico",
    title: "Fidelizzare le clienti del centro estetico: 7 strategie che funzionano",
    metaTitle: "Fidelizzare le clienti del centro estetico: 7 strategie",
    description:
      "Come far tornare le clienti nel tuo centro estetico: prossimo appuntamento, follow-up, schede curate, buoni regalo e messaggi giusti al momento giusto.",
    excerpt:
      "Trovare una nuova cliente costa molto più che tenere quella che hai già. Sette strategie concrete per farla tornare, senza sconti a pioggia.",
    category: "Marketing e clienti",
    keywords: [
      "fidelizzare clienti centro estetico",
      "fidelizzazione clienti estetista",
      "marketing centro estetico",
      "buoni regalo centro estetico",
      "clienti abituali centro estetico",
      "richiamare clienti inattive",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Per fidelizzare le clienti di un centro estetico funzionano soprattutto la prenotazione del prossimo appuntamento a fine trattamento, un follow-up personale dopo i trattamenti importanti, una scheda cliente che ti permette di ricordare preferenze e storico, e messaggi mirati alle clienti che non tornano da tempo. Gli sconti generici servono meno di un'esperienza curata e costante.",
    takeaways: [
      "Il momento migliore per fissare il prossimo appuntamento è in cabina, a fine trattamento.",
      "Un messaggio dopo il trattamento vale più di una promozione.",
      "Ricordare preferenze e dettagli fa sentire la cliente seguita.",
      "Le clienti inattive vanno riconosciute e contattate per tempo.",
      "Per i messaggi promozionali serve il consenso della cliente.",
    ],
    intro: [
      "Instagram, passaparola, una promo per l'apertura: le nuove clienti arrivano. Ma quante tornano dopo il primo trattamento? Per molti centri estetici la vera crescita non viene da più clienti nuove, ma da clienti che tornano con regolarità.",
      "Fidelizzare non significa riempire le clienti di sconti. Significa offrire un'esperienza che vogliono ripetere e rendere facile tornare. Ecco sette strategie pratiche, valide per centri estetici, onicotecniche, lash artist, centri laser e studi di trucco permanente.",
    ],
    sections: [
      {
        heading: "1. Perché fissare il prossimo appuntamento a fine trattamento?",
        paragraphs: [
          "È la strategia più semplice e la più sottovalutata. Alla fine di una manicure, di un refill ciglia o di una seduta laser, la cliente è soddisfatta e sa già che dovrà tornare. Chiederle «Fissiamo già il prossimo?» è naturale, non invadente.",
          "Per i trattamenti con cadenza fissa (refill ciglia ogni 3 settimane, unghie ogni 3–4 settimane, sedute laser secondo protocollo) proponi direttamente la data giusta. Il promemoria automatico farà il resto.",
        ],
      },
      {
        heading: "2. Come fare un follow-up dopo il trattamento?",
        paragraphs: [
          "Un breve messaggio uno o due giorni dopo un trattamento importante (primo laser, peeling, trucco permanente, extension complete) dimostra attenzione e ti permette di intercettare subito eventuali problemi. Basta poco: «Ciao Giulia, come va la pelle dopo il peeling di martedì? Se hai domande scrivimi pure.»",
        ],
        callout:
          "Un follow-up non è marketing: è parte del servizio. Tienilo personale e senza offerte.",
      },
      {
        heading: "3. Perché la scheda cliente è uno strumento di fidelizzazione?",
        paragraphs: [
          "Ricordare che una cliente preferisce il tè al caffè, che ha la pelle reattiva in inverno o che l'ultima volta ha scelto quel colore di smalto la fa sentire riconosciuta. Nessuno può ricordare tutto per decine o centinaia di clienti: la scheda cliente lo fa per te.",
          "In Treatflow storico, foto, note e preferenze stanno sulla scheda della cliente, visibili a tutto il team. Anche quando la cliente viene seguita da una collega diversa, l'esperienza resta coerente.",
        ],
      },
      {
        heading: "Perché la prima visita decide se la cliente tornerà?",
        paragraphs: [
          "La fidelizzazione inizia prima del trattamento. Una prenotazione semplice, un promemoria chiaro, un modulo da compilare comodamente a casa, un'accoglienza puntuale: sono tutti segnali che la cliente registra, anche senza accorgersene.",
          "Durante la prima visita prenditi qualche minuto in più per la consulenza. Chiedi cosa si aspetta, spiega cosa è realistico ottenere e in quanti appuntamenti. Una cliente che ha capito il percorso è molto più propensa a seguirlo fino in fondo.",
        ],
      },
      {
        heading: "4. Come riconoscere e richiamare le clienti inattive?",
        paragraphs: [
          "Una cliente che veniva ogni mese e non si vede da tre mesi è un segnale. Forse si è trasferita, forse ha provato un altro centro, forse si è solo dimenticata. Più aspetti, più è difficile riportarla.",
        ],
        steps: [
          "Definisci quando una cliente è inattiva (es. il doppio del suo intervallo abituale).",
          "Controlla una volta al mese l'elenco delle clienti che non tornano da tempo.",
          "Scrivi un messaggio personale, non una promo generica.",
          "Se la cliente ha dato il consenso al marketing, puoi aggiungere un piccolo incentivo.",
          "Annota la risposta sulla scheda cliente.",
        ],
      },
      {
        heading: "5. Buoni regalo e pacchetti: come usarli per la fidelizzazione?",
        paragraphs: [
          "I buoni regalo portano nuove clienti attraverso le clienti esistenti: chi regala un trattamento sta di fatto consigliando il tuo centro. Natale, festa della mamma, San Valentino e compleanni sono momenti naturali per proporli.",
          "I pacchetti di sedute (laser, trattamenti corpo, pulizie del viso) creano continuità, perché la cliente ha già pianificato il suo percorso. Mantieni le condizioni chiare: numero di sedute, validità, cosa succede in caso di disdetta.",
        ],
      },
      {
        heading: "6. Quali messaggi inviare e quando, senza essere invadenti?",
        paragraphs: [
          "La comunicazione automatica funziona se è utile. Conferme, promemoria e istruzioni pre-trattamento sono sempre gradite. Le promozioni vanno dosate.",
        ],
        table: {
          headers: ["Messaggio", "Quando", "Consenso marketing?"],
          rows: [
            ["Conferma e promemoria", "Alla prenotazione e il giorno prima", "No, è comunicazione di servizio"],
            ["Follow-up personale", "1–2 giorni dopo il trattamento", "No, se è legato al servizio"],
            ["Auguri di compleanno con offerta", "Il giorno del compleanno", "Sì"],
            ["Novità e promozioni", "Al massimo 1–2 volte al mese", "Sì"],
          ],
        },
      },
      {
        heading: "Come trasformare le clienti fedeli in passaparola?",
        paragraphs: [
          "Le clienti soddisfatte sono il miglior canale di acquisizione che esista, ma spesso non pensano a consigliarti finché non glielo chiedi. Non serve essere insistenti: basta creare le occasioni giuste.",
        ],
        bullets: [
          "Chiedi una recensione su Google subito dopo un trattamento riuscito, con un link diretto.",
          "Proponi un buono regalo da dare a un'amica, invece di uno sconto generico.",
          "Condividi sui social i risultati, solo con il consenso esplicito della cliente.",
          "Ringrazia personalmente chi ti porta una nuova cliente.",
        ],
      },
      {
        heading: "Come coinvolgere il team nella fidelizzazione?",
        paragraphs: [
          "La fidelizzazione non è un compito della titolare: è il risultato di ogni contatto tra la cliente e il centro. Se una collaboratrice dimentica di proporre il prossimo appuntamento o non legge le note sulla scheda, l'esperienza si interrompe.",
          "Bastano poche regole condivise: proporre sempre il prossimo appuntamento, leggere la scheda prima del trattamento, annotare preferenze e reazioni dopo. Una breve riunione al mese per guardare insieme il tasso di riprenotazione aiuta a mantenere l'attenzione alta, senza trasformarlo in una gara.",
        ],
      },
      {
        heading: "7. Come misurare se le clienti tornano davvero?",
        paragraphs: [
          "Due numeri bastano per iniziare. Il **tasso di ritorno**: quante nuove clienti tornano almeno una seconda volta entro tre mesi. E il **tasso di riprenotazione**: quante clienti escono dal centro con il prossimo appuntamento già fissato. Controllali ogni mese: ti dicono più di qualsiasi like su Instagram.",
        ],
      },
      {
        heading: "Quali errori allontanano le clienti senza che te ne accorga?",
        paragraphs: [
          "Spesso una cliente non torna per motivi piccoli, che nessuno le chiede. Ritardi frequenti, un'operatrice diversa ogni volta senza che le note vengano lette, promozioni continue che fanno sembrare il prezzo pieno ingiustificato, difficoltà a trovare un appuntamento libero. Nessuno di questi è grave da solo, ma insieme pesano.",
          "Un modo semplice per scoprirli è chiedere un feedback breve dopo i primi due o tre appuntamenti, a voce o con un messaggio. Le risposte ti diranno dove migliorare prima che la cliente se ne vada in silenzio.",
        ],
      },
      {
        heading: "Cosa dice il GDPR sui messaggi promozionali alle clienti?",
        paragraphs: [
          "In Italia, per l'invio di email, SMS o WhatsApp promozionali serve di norma il consenso specifico della cliente, separato dal consenso per il trattamento. Il Codice privacy prevede un'eccezione limitata per l'email a clienti esistenti su servizi analoghi, sempre con possibilità di opporsi facilmente. Nel dubbio, raccogli il consenso al marketing in modo esplicito e annotalo sulla scheda cliente.",
        ],
      },
    ],
    faq: [
      {
        q: "Gli sconti fedeltà funzionano per un centro estetico?",
        a: "Possono aiutare, ma da soli raramente creano fedeltà. Funzionano meglio un'esperienza costante, un follow-up personale e la prenotazione del prossimo appuntamento.",
      },
      {
        q: "Ogni quanto posso scrivere alle clienti?",
        a: "Conferme e promemoria sempre. Messaggi promozionali al massimo una o due volte al mese, e solo alle clienti che hanno dato il consenso.",
      },
      {
        q: "Come gestisco i buoni regalo in modo ordinato?",
        a: "Con un sistema che registra codice, valore, data di scadenza e utilizzo. Treatflow include la gestione dei buoni regalo.",
      },
      {
        q: "Posso usare WhatsApp per il marketing?",
        a: "Solo con il consenso della cliente. Per conferme e promemoria legati all'appuntamento WhatsApp è un canale molto efficace.",
      },
      {
        q: "Quando una cliente si può considerare persa?",
        a: "Non c'è una regola fissa. Un buon indicatore è quando supera di molto il suo intervallo abituale tra un trattamento e l'altro.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Messaggi e promemoria automatici" },
      { pageKey: "client-records", label: "Schede clienti" },
    ],
    sources: [
      { label: "Garante per la protezione dei dati personali", url: "https://www.garanteprivacy.it" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. GDPR
  // ---------------------------------------------------------------------------
  {
    topic: "gdpr-beauty-salon",
    lang: "it",
    slug: "gdpr-centro-estetico",
    title: "GDPR per centri estetici: cosa devi fare davvero (con checklist)",
    metaTitle: "GDPR per centri estetici: guida pratica e checklist",
    description:
      "Informativa, consensi, dati sanitari, foto, registro dei trattamenti e software: cosa prevede il GDPR per centri estetici e studi di medicina estetica.",
    excerpt:
      "Anamnesi, foto prima/dopo, numeri WhatsApp: un centro estetico tratta molti dati delicati. Ecco cosa prevede il GDPR e una checklist pratica.",
    category: "Privacy e normative",
    keywords: [
      "gdpr centro estetico",
      "privacy centro estetico",
      "informativa privacy estetista",
      "consenso privacy centro estetico",
      "dati sanitari gdpr",
      "registro dei trattamenti",
      "garante privacy estetica",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 9,
    answer:
      "Un centro estetico deve informare le clienti su come usa i loro dati (informativa), trattare i dati sanitari dell'anamnesi solo se necessari e con adeguate garanzie, raccogliere consensi separati per foto e marketing, tenere un registro dei trattamenti e usare fornitori software affidabili con server nell'UE e un accordo sul trattamento dei dati. In Italia l'autorità di riferimento è il Garante per la protezione dei dati personali.",
    takeaways: [
      "Allergie, farmaci e patologie sono dati sanitari: categorie particolari secondo l'art. 9 GDPR.",
      "Informativa chiara e consensi separati per foto e marketing sono la base.",
      "Il registro dei trattamenti serve anche ai centri piccoli che trattano dati sanitari.",
      "Il fornitore del software è responsabile del trattamento: serve un accordo (DPA).",
      "Le foto delle clienti non devono restare sui telefoni personali.",
    ],
    intro: [
      "Quando pensi alla privacy, forse ti viene in mente l'informativa da far firmare alla prima visita. Ma un centro estetico tratta molti più dati di quanto sembri: numeri di telefono, date di nascita, allergie, farmaci, gravidanze, foto del viso e del corpo. Molti di questi dati sono delicati e il GDPR li tutela in modo particolare.",
      "Questa guida ti aiuta a orientarti con un approccio pratico, pensato per centri estetici, centri di epilazione laser, studi di trucco permanente, onicotecniche, lash artist e studi di medicina estetica. Non sostituisce una consulenza legale, ma ti dà una base solida e una checklist da usare subito.",
    ],
    sections: [
      {
        heading: "Quali dati tratta un centro estetico?",
        paragraphs: [
          "Il primo passo è sapere cosa raccogli. Fai un elenco onesto, includendo anche ciò che finisce su WhatsApp o sul telefono del centro.",
        ],
        table: {
          headers: ["Tipo di dato", "Esempi", "Livello di attenzione"],
          rows: [
            ["Dati comuni", "Nome, telefono, email, data di nascita", "Normale"],
            ["Dati sanitari", "Allergie, farmaci, patologie, gravidanza, fototipo legato a controindicazioni", "Alto (art. 9 GDPR)"],
            ["Immagini", "Foto prima/dopo del viso o del corpo", "Alto"],
            ["Dati di marketing", "Consenso newsletter, preferenze", "Medio"],
            ["Dati amministrativi", "Fatture, pagamenti, codice fiscale", "Normale, con obblighi fiscali di conservazione"],
          ],
        },
      },
      {
        heading: "Cosa deve contenere l'informativa privacy di un centro estetico?",
        paragraphs: [
          "L'informativa (art. 13 GDPR) spiega alla cliente in modo semplice chi tratta i suoi dati, perché, per quanto tempo e quali diritti ha. Deve essere consegnata o resa disponibile al momento della raccolta dei dati, per esempio con il primo modulo o nella pagina di prenotazione online.",
        ],
        bullets: [
          "Chi è il titolare del trattamento (il tuo centro, con i contatti).",
          "Quali dati raccogli e per quali finalità (appuntamenti, trattamenti, marketing).",
          "La base giuridica di ogni finalità.",
          "Per quanto tempo conservi i dati.",
          "A chi li comunichi (es. fornitore del gestionale, commercialista).",
          "I diritti della cliente: accesso, rettifica, cancellazione, opposizione, reclamo al Garante.",
        ],
      },
      {
        heading: "Serve il consenso per l'anamnesi e i dati sanitari?",
        paragraphs: [
          "I dati sanitari sono categorie particolari di dati: il loro trattamento è vietato salvo specifiche eccezioni. Per un centro estetico non medico, la via più lineare è di solito il consenso esplicito della cliente, raccolto per iscritto insieme al modulo di anamnesi e limitato ai dati davvero necessari per il trattamento. Negli studi medici le basi giuridiche possono essere diverse: lì è bene farsi seguire da un consulente.",
          "Qualunque sia la base giuridica, vale il principio di minimizzazione: chiedi solo ciò che serve. Per una manicure non serve un'anamnesi medica completa; per un trattamento laser o un trucco permanente sì.",
        ],
        callout:
          "Tieni separati i consensi: uno per il trattamento dei dati sanitari, uno per le foto, uno per il marketing. Un unico «acconsento a tutto» non è una buona pratica.",
      },
      {
        heading: "Come gestire foto prima e dopo nel rispetto del GDPR?",
        paragraphs: [
          "Le foto sono fondamentali per documentare laser, trattamenti viso, trucco permanente e medicina estetica. Ma sono anche dati personali, spesso molto sensibili. Due regole pratiche: chiedi un consenso specifico e distingui tra uso interno (documentazione) e uso pubblico (Instagram, sito). Una cliente può accettare il primo e rifiutare il secondo.",
          "Il problema più comune è il telefono personale dell'operatrice pieno di foto delle clienti, magari sincronizzate su un cloud privato. Meglio scattare con un dispositivo del centro e salvare le foto direttamente sulla scheda cliente. In Treatflow le foto prima/dopo restano sulla scheda e sulla seduta, sui server UE del gestionale.",
        ],
      },
      {
        heading: "Il registro dei trattamenti è obbligatorio anche per un piccolo centro?",
        paragraphs: [
          "L'art. 30 GDPR prevede un'esenzione per le organizzazioni con meno di 250 dipendenti, ma non quando trattano categorie particolari di dati in modo non occasionale. Un centro che raccoglie regolarmente anamnesi rientra quasi sempre in questo caso. Il Garante mette a disposizione indicazioni e un modello di registro sul proprio sito.",
          "Il registro non deve essere complicato: per ogni trattamento indica finalità, categorie di dati e interessati, destinatari, tempi di conservazione e misure di sicurezza.",
        ],
      },
      {
        heading: "Cosa verificare nel gestionale e negli altri fornitori?",
        paragraphs: [
          "Il fornitore del tuo gestionale tratta i dati delle clienti per conto tuo: è un responsabile del trattamento (art. 28 GDPR). Lo stesso vale per servizi di invio SMS, email o per chi gestisce il tuo sito.",
        ],
        bullets: [
          "Accordo sul trattamento dei dati (DPA) firmato o accettato.",
          "Server nell'Unione europea, o garanzie adeguate per trasferimenti extra UE.",
          "Connessione cifrata (SSL) e backup regolari.",
          "Accessi personali per ogni collaboratrice, niente password condivise.",
          "Possibilità di esportare e cancellare i dati.",
        ],
        callout:
          "Treatflow è sviluppato in Austria e ospita i dati su server UE a Francoforte, con SSL e backup giornalieri. Il centro resta titolare dei dati delle proprie clienti.",
      },
      {
        heading: "Per quanto tempo conservare schede e consensi?",
        paragraphs: [
          "Il GDPR non fissa una durata unica: i dati vanno conservati per il tempo necessario alle finalità. Per la documentazione dei trattamenti molti centri scelgono un periodo che copra eventuali contestazioni; i documenti fiscali seguono invece gli obblighi di legge, in genere dieci anni. Decidi i tuoi tempi, scrivili nell'informativa e nel registro e applicali davvero, cancellando o anonimizzando i dati delle clienti che non tornano più.",
        ],
      },
      {
        heading: "Cosa fare in caso di violazione dei dati?",
        paragraphs: [
          "Un telefono rubato con le foto delle clienti, un'email inviata al destinatario sbagliato, un accesso non autorizzato: sono violazioni dei dati (data breach). Se c'è un rischio per le persone, la violazione va notificata al Garante entro 72 ore da quando ne vieni a conoscenza, e nei casi più gravi vanno informate anche le clienti. Annota comunque ogni incidente in un registro interno.",
        ],
      },
      {
        heading: "E se il centro è in Ticino?",
        paragraphs: [
          "In Svizzera si applica la nuova legge federale sulla protezione dei dati (nLPD), in vigore da settembre 2023, con l'Incaricato federale della protezione dei dati e della trasparenza (IFPDT) come autorità. I principi sono molto simili al GDPR: trasparenza, minimizzazione, sicurezza e particolare tutela dei dati sulla salute. Se hai clienti dall'Italia, tieni presente anche il GDPR.",
        ],
      },
      {
        heading: "Checklist GDPR per il tuo centro estetico",
        paragraphs: ["Usa questa lista come punto di partenza e rivedila una volta all'anno."],
        steps: [
          "Elenca quali dati raccogli e dove li conservi.",
          "Prepara un'informativa chiara e rendila disponibile alla prima raccolta dei dati.",
          "Raccogli consensi separati per dati sanitari, foto e marketing.",
          "Compila e aggiorna il registro dei trattamenti.",
          "Verifica DPA e server dei tuoi fornitori software.",
          "Elimina le foto delle clienti dai telefoni personali.",
          "Dai a ogni collaboratrice un accesso personale e forma il team.",
          "Definisci i tempi di conservazione e applicali.",
          "Prepara una procedura per le violazioni dei dati.",
        ],
      },
    ],
    faq: [
      {
        q: "Un centro estetico deve nominare un DPO?",
        a: "Di solito no. Il DPO è obbligatorio quando il trattamento su larga scala di dati particolari è un'attività principale. Un singolo centro raramente rientra in questo caso, ma per strutture grandi o medicali conviene verificarlo con un consulente.",
      },
      {
        q: "Posso tenere le schede clienti su carta?",
        a: "Sì, il GDPR non impone il digitale. Le schede su carta devono però essere protette, per esempio in un armadio chiuso a chiave, accessibile solo al personale autorizzato.",
      },
      {
        q: "Posso usare WhatsApp per comunicare con le clienti?",
        a: "Molti centri lo fanno per appuntamenti e promemoria. Evita di scambiare dati sanitari o foto via chat personale e indica il canale nell'informativa. Per il marketing serve il consenso.",
      },
      {
        q: "Una cliente può chiedere di cancellare la sua scheda?",
        a: "Sì, può esercitare il diritto alla cancellazione. Restano possibili eccezioni, per esempio per i documenti che devi conservare per obblighi fiscali o per tutelarti in caso di contestazioni.",
      },
      {
        q: "Cosa rischia un centro che non rispetta il GDPR?",
        a: "Il Garante può disporre provvedimenti correttivi e sanzioni. Più spesso il danno concreto è reputazionale: una cliente che scopre le sue foto sul telefono di un'ex collaboratrice non torna.",
      },
      {
        q: "Il gestionale mi rende automaticamente conforme al GDPR?",
        a: "No. Un buon software aiuta molto (server UE, accessi, moduli con consensi), ma la responsabilità di informativa, consensi e organizzazione resta del centro.",
      },
    ],
    related: [
      { pageKey: "client-records", label: "Schede clienti sicure" },
      { pageKey: "forms", label: "Moduli e consensi digitali" },
      { pageKey: "treatment-documentation", label: "Documentazione trattamenti" },
    ],
    sources: [
      { label: "Garante per la protezione dei dati personali", url: "https://www.garanteprivacy.it" },
      { label: "Regolamento (UE) 2016/679 (GDPR) – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      {
        label: "Codice in materia di protezione dei dati personali (D.Lgs. 196/2003) – Normattiva",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196",
      },
      { label: "IFPDT – Incaricato federale della protezione dei dati (Svizzera)", url: "https://www.edoeb.admin.ch" },
    ],
  },
  // ---------------------------------------------------------------------------
  // 7. Calcolare i prezzi dei trattamenti
  // ---------------------------------------------------------------------------
  {
    topic: "pricing-beauty-treatments",
    lang: "it",
    slug: "come-calcolare-prezzi-centro-estetico",
    title: "Come calcolare i prezzi dei trattamenti nel centro estetico: il metodo passo dopo passo",
    metaTitle: "Come calcolare i prezzi nel centro estetico",
    description:
      "Come calcolare i prezzi dei trattamenti estetici: costo orario minimo, tempo, prodotti e margine per servizio, confronto con la concorrenza e listino chiaro.",
    excerpt:
      "Copiare il listino del centro vicino non è una strategia. Ecco come calcolare il tuo costo orario, quattro esempi di prezzo e i consigli per un listino che ispira fiducia.",
    category: "Gestione del centro",
    keywords: [
      "come calcolare i prezzi centro estetico",
      "listino prezzi centro estetico",
      "prezzi trattamenti estetici",
      "costo orario estetista",
      "quanto costa una pulizia del viso",
      "strategia prezzi centro estetico",
      "prezzo extension ciglia",
    ],
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    readMinutes: 8,
    answer:
      "Il prezzo giusto di un trattamento si costruisce partendo dai costi e solo alla fine si confronta con il mercato. Calcola prima il tuo costo orario minimo: costi fissi mensili più il compenso che ti serve, diviso per le ore realmente fatturabili. Moltiplica questa tariffa per il tempo complessivo che il trattamento occupa (preparazione e pulizia comprese), aggiungi i prodotti consumati e un margine del 10–20 %.",
    takeaways: [
      "Costo orario minimo = (costi fissi + il tuo compenso) ÷ ore fatturabili, che sono molte meno delle ore di apertura.",
      "Conta tutto il tempo in cui cabina e operatrice sono occupate, non solo i minuti sul lettino.",
      "Aggiungi i prodotti di consumo per ogni trattamento e un margine per riserve, riparazioni e crescita.",
      "I prezzi della concorrenza ti dicono cosa accetta il mercato, non quanto devi guadagnare tu.",
      "Un listino chiaro, a livelli e visibile online crea fiducia e rende naturale l'upgrade.",
    ],
    intro: [
      "Molte titolari fissano i prezzi una sola volta, all'apertura, guardando cosa chiedono gli altri centri della zona. Qualche anno dopo affitto, prodotti, energia e stipendi sono aumentati, ma il listino è quasi fermo. L'agenda è piena, il conto in banca no. Essere sempre occupate ed essere in utile sono due cose diverse.",
      "In questa guida vedi come calcolare prezzi che coprono i costi e ti pagano il giusto: vale per centri estetici, studi di medicina estetica, centri unghie, ciglia e trucco permanente, centri laser, spa e massaggi. Le cifre degli esempi sono indicative: sostituiscile con i tuoi numeri e avrai una soglia minima solida per ogni servizio del listino.",
    ],
    sections: [
      {
        heading: "Perché così tanti centri estetici fanno prezzi troppo bassi?",
        paragraphs: [
          "Il motivo più comune è che i prezzi vengono copiati, non calcolati. Non conosci l'affitto, il personale o i finanziamenti del centro che stai imitando: stai ereditando le sue ipotesi e, forse, anche le sue perdite.",
          "Il secondo motivo è la paura: di perdere le clienti abituali, di sembrare care, di avere buchi in agenda. Nella pratica, chi torna per il risultato e per l'esperienza raramente se ne va per un prezzo ragionevole e ben spiegato. Chi cerca solo il prezzo più basso passerà comunque alla prossima promozione.",
          "Il terzo motivo è il tempo invisibile. Un trattamento viso da 60 minuti, tra anamnesi, preparazione della cabina, pulizia, sanificazione e aggiornamento della scheda cliente, ti occupa facilmente 75 minuti. Se quel tempo non è nel prezzo, lo stai regalando.",
        ],
      },
      {
        heading: "Come si calcola il costo orario minimo?",
        paragraphs: [
          "Il costo orario minimo è quanto deve rendere ogni ora fatturabile per coprire tutti i costi e pagarti un compenso equo. Ricalcolalo almeno una volta l'anno e ogni volta che cambia una voce importante, come un nuovo contratto d'affitto o un nuovo macchinario.",
        ],
        steps: [
          "Somma i costi fissi mensili: affitto, utenze, assicurazioni, software, marketing, commercialista, formazione, leasing o finanziamento delle apparecchiature e tutto ciò che paghi anche se le clienti non arrivano.",
          "Stabilisci il compenso che ti serve come titolare, comprese imposte e contributi INPS. Se hai dipendenti, aggiungi il loro costo aziendale completo.",
          "Calcola le ore fatturabili: giorni lavorativi al mese × ore al giorno, meno il tempo per amministrazione, pause, pulizia tra una cliente e l'altra, malattia e buchi in agenda. Per la maggior parte dei centri è realistico togliere il 20–30 %.",
          "Dividi costi fissi più compenso per le ore fatturabili: ottieni il costo orario di pareggio.",
          "Aggiungi un margine del 10–20 % circa per riserve, riparazioni, mesi tranquilli e investimenti.",
        ],
        table: {
          headers: ["Voce (esempio)", "Al mese"],
          rows: [
            ["Affitto", "900 €"],
            ["Utenze", "150 €"],
            ["Assicurazioni", "80 €"],
            ["Gestionale", "59 €"],
            ["Marketing", "200 €"],
            ["Commercialista", "120 €"],
            ["Formazione", "100 €"],
            ["Leasing apparecchiature", "350 €"],
            ["Altro", "141 €"],
            ["**Totale costi fissi**", "**2.100 €**"],
            ["Compenso titolare con imposte e contributi", "3.500 €"],
            ["Ore fatturabili (20 giorni × 8 h meno 25 %)", "120 h"],
            ["Pareggio: 5.600 € ÷ 120 h", "46,67 €/h"],
            ["Tariffa obiettivo con margine del 15 %", "≈ 54 €/h"],
          ],
        },
        callout:
          "L'errore più frequente riguarda le ore fatturabili. Se calcoli su 160 ore ma in realtà lavori sulle clienti per 110, ogni prezzo del listino è più basso di circa un terzo.",
      },
      {
        heading: "Come si passa dalla tariffa oraria al prezzo del trattamento?",
        paragraphs: [
          "Per ogni servizio prendi il tempo totale in cui cabina e operatrice sono occupate, moltiplicalo per la tariffa obiettivo e aggiungi i materiali di consumo: maschere, fiale, gel, ciglia, colla, aghi, monouso. Se il leasing del macchinario è già nei costi fissi, non contarlo una seconda volta.",
          "Il risultato è la tua soglia minima. Puoi chiedere di più, per esperienza, domanda o una linea di prodotti premium, ma non dovresti scendere sotto in modo abituale.",
        ],
        table: {
          headers: ["Trattamento", "Tempo occupato", "Tempo × 54 €", "Materiali", "Soglia minima"],
          rows: [
            ["Pulizia del viso classica", "75 min", "67,50 €", "8 €", "≈ 76 €"],
            ["Manicure semipermanente", "70 min", "63,00 €", "5 €", "≈ 68 €"],
            ["Extension ciglia, applicazione completa", "130 min", "117,00 €", "12 €", "≈ 129 €"],
            ["Epilazione laser ascelle", "25 min", "22,50 €", "4 €", "≈ 27 €"],
          ],
        },
        bullets: [
          "I trattamenti brevi con apparecchiature, come il laser, hanno spesso prezzi molto sopra la soglia a tempo per via dell'investimento, della formazione e della domanda. Va bene, purché la soglia sia coperta.",
          "I trattamenti lunghi con pochi materiali, come i massaggi, sono quelli più spesso sottoprezzati: controllali per primi.",
        ],
      },
      {
        heading: "Quanto devono contare i prezzi della concorrenza?",
        paragraphs: [
          "Osserva cinque-dieci centri con cui la tua cliente ideale ti confronterebbe davvero, non tutti quelli della città. Annota i prezzi dei tuoi tre o quattro trattamenti principali e il posizionamento di ciascuno: economico, fascia media o premium.",
          "Poi confrontali con la tua soglia. Se il mercato è ben sopra, hai spazio per un prezzo basato sul valore. Se il mercato è sotto la tua soglia, la guerra dei prezzi è una gara persa: rendi invece evidente ciò che ti distingue, come specializzazione, risultati, documentazione accurata, comfort o disponibilità, e fissa il prezzo di conseguenza.",
        ],
        bullets: [
          "Il posizionamento economico richiede volumi alti e processi molto snelli.",
          "La fascia media richiede un'esperienza costante e un buon tasso di ritorno.",
          "Il premium richiede competenza visibile, una consulenza accurata e un percorso cliente impeccabile dalla prenotazione al post-trattamento.",
        ],
      },
      {
        heading: "Come costruire un listino prezzi che le clienti capiscono?",
        paragraphs: [
          "Un buon listino aiuta a decidere in fretta e rende naturale l'opzione di maggior valore. Tienilo breve, indica la durata accanto al prezzo e descrivi il risultato, non solo i passaggi.",
        ],
        bullets: [
          "Offri due o tre livelli per i trattamenti principali, per esempio un viso da 45, 75 e 90 minuti. Quando le differenze sono chiare, molte clienti scelgono quello centrale.",
          "Prezza a parte gli extra (contorno occhi, maschera aggiuntiva, paraffina, nail art), così la cliente può fare upgrade senza che tu sconti il trattamento base.",
          "Raggruppa i percorsi, come cicli laser o programmi viso, in pacchetti con un numero di sedute definito e un vantaggio contenuto.",
          "Decidi se la consulenza è gratuita, a pagamento o scalata dal primo trattamento, e dillo apertamente.",
          "Mostra prezzi finali IVA inclusa; se sei in regime forfettario, verifica con il commercialista come impostare il listino. Usa i prezzi 'a partire da' solo quando il prezzo dipende davvero dalla zona o dalla lunghezza.",
          "Usa gli stessi prezzi ovunque: sito, pagina di prenotazione online e centro.",
        ],
        callout:
          "Nella prenotazione online ogni servizio ha la sua durata e il suo prezzo, quindi la cliente vede cosa prenota prima di confermare. Con Treatflow la pagina di prenotazione è sul tuo link e non paghi commissioni sulle prenotazioni: un canone fisso di 39 o 59 € al mese, con 14 giorni di prova gratuita senza carta di credito.",
      },
      {
        heading: "Quando e come aumentare i prezzi?",
        paragraphs: [
          "Rivedi il calcolo almeno una volta l'anno e dopo ogni aumento importante dei costi. Ritocchi piccoli e regolari vengono accettati molto più facilmente di un grande salto dopo anni.",
        ],
        steps: [
          "Ricalcola la tariffa oraria con i costi attuali e confronta ogni servizio con la sua soglia minima.",
          "Annuncia i nuovi prezzi con quattro-sei settimane di anticipo, via e-mail, messaggio e in istituto.",
          "Dai una motivazione breve e sincera, come l'aumento dei costi di prodotti, energia o formazione, senza scusarti.",
          "Mantieni il vecchio prezzo per gli appuntamenti già fissati, così nessuna si sente presa in contropiede.",
          "Prepara il team, perché tutte rispondano alle domande con la stessa calma.",
        ],
      },
      {
        heading: "Quali errori di prezzo costano di più a un centro estetico?",
        paragraphs: [
          "La maggior parte dei problemi nasce da poche abitudini che si insinuano col tempo. Una volta l'anno confronta il listino con questo elenco.",
        ],
        bullets: [
          "Promozioni di benvenuto che non finiscono mai e insegnano alle clienti ad aspettare lo sconto.",
          "Sconti personali dati sul momento, non registrati, che diventano la nuova normalità.",
          "Non includere preparazione, pulizia e documentazione nella durata dei trattamenti.",
          "Nessuna regola per disdette tardive e appuntamenti mancati, così ogni buco in agenda lo paghi tu.",
          "Non aumentare per anni e poi fare un aumento forte tutto in una volta.",
          "Non verificare mai quali servizi rendono davvero e quali riempiono solo l'agenda.",
        ],
      },
    ],
    faq: [
      {
        q: "Come si calcola il prezzo di un trattamento estetico?",
        a: "Calcola prima la tua tariffa oraria: costi fissi mensili più il tuo compenso, divisi per le ore fatturabili realistiche, più un margine del 10–20 %. Moltiplica la tariffa per il tempo totale del trattamento, preparazione e pulizia comprese, e aggiungi i materiali. Il risultato è la soglia minima.",
      },
      {
        q: "Quanto deve costare una pulizia del viso?",
        a: "Non esiste un prezzo valido ovunque: affitti, stipendi e posizionamento cambiano da città a città. Con una tariffa di esempio di 54 € l'ora e 75 minuti di tempo occupato, una pulizia del viso classica dovrebbe costare almeno 76 € circa. Fai il calcolo con i tuoi numeri e poi guarda i centri con cui le tue clienti ti confrontano.",
      },
      {
        q: "Posso semplicemente allinearmi ai prezzi della concorrenza?",
        a: "Usa i prezzi dei concorrenti come verifica di mercato, non come punto di partenza. Non conosci i loro costi né sai se sono in utile. Se la tua soglia è sopra il mercato locale, lavora sul posizionamento invece di scendere sotto costo.",
      },
      {
        q: "È meglio pubblicare i prezzi online?",
        a: "Nella maggior parte dei casi sì. Prezzi visibili riducono le richieste in chat, filtrano le clienti poco adatte e semplificano la prenotazione online. Se il prezzo dipende da zona o lunghezza, indica un 'a partire da' chiaro e spiega cosa determina l'importo finale.",
      },
      {
        q: "Ogni quanto aumentare i prezzi del centro estetico?",
        a: "Rivedi i prezzi almeno una volta l'anno e dopo grandi variazioni dei costi. Un adeguamento annuale moderato, comunicato qualche settimana prima, viene di solito accolto molto meglio di un forte aumento dopo anni di prezzi fermi.",
      },
    ],
    related: [
      { pageKey: "pricing", label: "Prezzi" },
      { pageKey: "client-records", label: "Schede clienti" },
      { pageKey: "features", label: "Tutte le funzioni" },
    ],
  },
  // ---------------------------------------------------------------------------
  // 8. Politica di disdetta centro estetico
  // ---------------------------------------------------------------------------
  {
    topic: "cancellation-policy-salon",
    lang: "it",
    slug: "politica-disdetta-appuntamenti-centro-estetico",
    title: "Disdetta appuntamenti nel centro estetico: regole, penale e un testo pronto da usare",
    metaTitle: "Disdetta appuntamenti centro estetico: penale e regole",
    description:
      "Come scrivere la politica di disdetta del tuo centro estetico: preavviso, penale per disdetta tardiva e mancata presentazione, caparra ed esempio di testo.",
    excerpt:
      "Una politica di disdetta protegge il tuo fatturato solo se la cliente la vede prima di prenotare e tu la applichi sempre allo stesso modo. Preavvisi, importi, un testo modello e frasi per le conversazioni difficili.",
    category: "Gestione",
    keywords: [
      "disdetta appuntamento centro estetico",
      "penale disdetta centro estetico",
      "politica di cancellazione centro estetico",
      "caparra centro estetico",
      "regolamento centro estetico",
      "mancata presentazione appuntamento",
      "no show centro estetico",
    ],
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readMinutes: 8,
    answer:
      "Una buona politica di disdetta per il centro estetico indica entro quando la cliente può disdire gratis (di solito 24 o 48 ore prima), una penale moderata per la disdetta tardiva (spesso il 50 % del prezzo) e un importo più alto per la mancata presentazione (fino al prezzo pieno). Funziona solo se la cliente la conosce prima di prenotare, la riceve per iscritto e tu la applichi con coerenza, lasciando spazio alle vere emergenze.",
    takeaways: [
      "La cliente deve vedere e accettare le regole prima di prenotare, non scoprirle dopo.",
      "Adatta preavviso e penale al trattamento: una laminazione ciglia di 30 minuti non è un trattamento viso di due ore.",
      "La penale deve compensare la perdita reale, non punire; un importo moderato è molto più difendibile.",
      "Annota ogni disdetta tardiva e ogni assenza nella scheda cliente, così tutto lo staff reagisce allo stesso modo.",
      "Promemoria, spostamenti facili e lista d'attesa salvano più fatturato di qualsiasi penale.",
    ],
    intro: [
      "Una cliente che disdice due ore prima di un trattamento viso da 90 minuti lascia un buco in agenda che quasi mai riesci a riempire. L'estetista la paghi comunque, i prodotti magari sono già pronti. Succede tre o quattro volte al mese e la perdita arriva facilmente a qualche centinaio di euro. Eppure molte titolari non chiedono nulla, per paura di perdere le clienti affezionate o di sembrare poco gentili.",
      "Non devi scegliere tra cortesia e fatturato. Una politica di disdetta chiara ed equa protegge la tua agenda e rende tutto più semplice anche per la cliente, che conosce le regole in anticipo. In questa guida trovi cosa scrivere, quali preavvisi e importi sono ragionevoli, come usare la caparra e come applicare le regole senza rovinare il rapporto. Sono indicazioni pratiche, non una consulenza legale.",
    ],
    sections: [
      {
        heading: "Un centro estetico può chiedere una penale per disdetta?",
        paragraphs: [
          "In generale sì. Quando la cliente prenota un appuntamento fisso, nasce un accordo e tu blocchi un tempo che non puoi vendere ad altri. Se non si presenta o disdice così tardi che non riesci a riassegnare lo slot, chiedere un indennizzo è legittimo.",
          "Contano però due cose. La prima: la cliente deve conoscere le condizioni prima della prenotazione; una penale comunicata solo dopo è difficile da sostenere. La seconda: l'importo deve essere proporzionato. Il Codice del Consumo considera vessatorie le clausole che impongono al consumatore una penale manifestamente eccessiva, e il Codice civile permette al giudice di ridurre una penale eccessiva. Un importo legato alla perdita reale, cioè tempo bloccato e materiali preparati, è molto più solido di una cifra fissa alta.",
        ],
        callout:
          "Se vuoi applicare penali alte o trattenere caparre consistenti, fai rivedere una volta il testo da un legale o dalla tua associazione di categoria.",
      },
      {
        heading: "Cosa deve contenere la politica di disdetta di un centro estetico?",
        paragraphs: [
          "Una regola che si capisce in dieci secondi funziona molto meglio di una pagina di termini legali. Includi questi punti, in linguaggio semplice:",
        ],
        table: {
          headers: ["Elemento", "Cosa scrivere", "Esempio"],
          rows: [
            ["Disdetta gratuita", "Con quanto anticipo si può disdire o spostare senza costi", "Fino a 24 ore prima"],
            ["Disdetta tardiva", "Cosa si paga entro quel termine", "50 % del prezzo del trattamento"],
            ["Mancata presentazione", "Cosa si paga se la cliente non viene e non avvisa", "100 % del prezzo"],
            ["Ritardo", "Quando il trattamento viene accorciato o annullato", "Oltre 15 minuti il trattamento si accorcia"],
            ["Come disdire", "Il canale da usare", "Dal link nell'email di conferma o per telefono"],
            ["Eccezioni", "Come gestisci le emergenze", "In caso di malattia o imprevisto troviamo una soluzione"],
            ["Caparra", "Se la chiedi, quando viene scalata o trattenuta", "Scalata dal prezzo, trattenuta in caso di assenza"],
          ],
        },
        bullets: [
          "Parla di 'regole di prenotazione' o 'politica di disdetta', non di 'multa'. Il tono cambia completamente la percezione.",
          "Spiega il perché in una frase: quel tempo è riservato solo a lei.",
          "Usa lo stesso testo ovunque: sito, pagina di prenotazione, conferma, promemoria e cartello in cabina o alla reception.",
        ],
      },
      {
        heading: "Quale preavviso e quale penale sono giusti per ogni trattamento?",
        paragraphs: [
          "Non esiste un numero valido per tutti. Dipende da quanto il trattamento occupa l'agenda, da quanto costa e da quanto è probabile riempire lo slot all'ultimo momento. Molti centri usano un modello a fasce:",
        ],
        table: {
          headers: ["Tipo di trattamento", "Disdetta gratuita", "Disdetta tardiva", "Mancata presentazione"],
          rows: [
            ["Brevi, sotto 30 min (sopracciglia, ceretta veloce)", "12–24 ore", "Spesso nulla o piccola cifra fissa", "50 %"],
            ["Standard, 45–90 min (viso, manicure, massaggio)", "24 ore", "50 %", "100 %"],
            ["Lunghi o costosi (extension ciglia, trucco permanente, pacchetti laser, sposa)", "48 ore", "50–100 %", "100 % o caparra trattenuta"],
            ["Gruppi ed eventi", "72 ore o più", "Da concordare", "Caparra trattenuta"],
          ],
        },
        callout:
          "Se dopo una disdetta tardiva riesci a riassegnare lo slot, rinuncia alla penale o riducila. È corretto, crea fiducia e, di fatto, non hai subito alcuna perdita.",
      },
      {
        heading: "Meglio chiedere una caparra o la penale dopo?",
        paragraphs: [
          "Una penale chiesta dopo l'assenza vale solo se riesci a incassarla. Molte clienti pagano senza problemi, altre semplicemente non rispondono, e rincorrere piccole somme costa tempo e serenità. Una caparra al momento della prenotazione risolve il problema e scoraggia le prenotazioni fatte d'impulso.",
          "Attenzione alla differenza tra caparra e acconto: la caparra confirmatoria, se la cliente non si presenta, può essere trattenuta; un semplice acconto in genere va restituito o compensato. Scrivi chiaramente quale delle due chiedi. E ricorda che la caparra aggiunge un passaggio: le clienti storiche potrebbero viverla come sfiducia. Un compromesso sensato è chiederla solo dove il rischio è alto:",
        ],
        bullets: [
          "Nuove clienti che prenotano per la prima volta un trattamento lungo o costoso.",
          "Clienti che hanno già disdetto tardi o saltato più appuntamenti.",
          "Trattamenti per cui ordini o prepari materiale in anticipo, come pigmenti per trucco permanente o set di ciglia particolari.",
          "Fasce molto richieste, come il venerdì sera o le settimane prima delle feste.",
        ],
      },
      {
        heading: "Esempio di testo per la politica di disdetta",
        paragraphs: [
          "Ecco un testo che puoi adattare. Cambia i numeri e mantieni un tono gentile ma chiaro:",
          "**“Il tuo appuntamento è un tempo che riserviamo solo a te. Puoi disdire o spostare gratuitamente fino a 24 ore prima. Per disdette nelle 24 ore precedenti addebitiamo il 50 % del prezzo del trattamento; in caso di mancata presentazione senza avviso, il prezzo intero. Con un ritardo superiore a 15 minuti potremmo dover accorciare il trattamento. Se hai un vero imprevisto, chiamaci: troveremo insieme una soluzione.”**",
          "Per i trattamenti lunghi aggiungi una riga, ad esempio: “Per appuntamenti di due ore o più, la disdetta gratuita è possibile fino a 48 ore prima.” Se chiedi una caparra, specifica che viene scalata dal prezzo finale e quando viene trattenuta.",
        ],
      },
      {
        heading: "Come fai in modo che le clienti vedano davvero le regole?",
        paragraphs: [
          "La maggior parte delle discussioni non riguarda l'importo, ma il “non lo sapevo”. Inserisci la politica in ogni passaggio della prenotazione:",
        ],
        steps: [
          "Pubblicala sul sito, nella pagina prezzi o prenotazioni, e collegala dalla tua pagina di prenotazione online.",
          "Citala nella descrizione dei trattamenti lunghi o costosi, dove valgono regole più severe.",
          "Ripeti la frase chiave nella conferma, insieme a data, ora e modalità di disdetta.",
          "Inseriscila di nuovo nel promemoria email 24–48 ore prima, quando si può ancora disdire gratis.",
          "Per prenotazioni al telefono o in sede, dilla a voce in una frase e annota nella scheda cliente di averlo fatto.",
          "Esponi una versione breve alla reception, così non sarà mai una sorpresa.",
        ],
      },
      {
        heading: "Come applichi le regole senza perdere clienti?",
        paragraphs: [
          "È la coerenza a rendere una regola giusta. Se una cliente paga e quella dopo no, se ne accorgono entrambe. Allo stesso tempo, essere rigide con una cliente fedele da dieci anni alla sua prima assenza raramente conviene. Decidi l'approccio in anticipo, così non dipende dall'umore o da chi è in reception.",
        ],
        steps: [
          "Annota ogni disdetta tardiva e ogni assenza nella scheda cliente, con data e motivo.",
          "Prima volta per una buona cliente: niente penale, ma ricordale con gentilezza la politica.",
          "Seconda volta: applica la penale come previsto, con un messaggio breve e cordiale.",
          "Assenze ripetute: chiedi una caparra per i prossimi appuntamenti.",
          "Vere emergenze, come malattia improvvisa o incidente: proponi di spostare invece di addebitare.",
        ],
        callout:
          "Una frase che funziona: “Oggi ci sei mancata, speriamo che vada tutto bene. Come indicato nelle nostre regole di prenotazione, per le disdette all'ultimo momento addebitiamo il 50 %. Vuoi fissare subito un nuovo appuntamento? Giovedì abbiamo posto.” Calma, concreta e rivolta al prossimo appuntamento.",
      },
      {
        heading: "Come ti aiuta un gestionale per centro estetico con disdette e assenze?",
        paragraphs: [
          "La penale migliore è quella che non devi mai chiedere. Un gestionale aiuta a prevenire le disdette e a gestire meglio quelle che restano. Con Treatflow le clienti prenotano dal tuo link personale senza commissioni, prima di ogni appuntamento parte in automatico un promemoria via email e gli slot che si liberano puoi offrirli alle clienti in lista d'attesa. Le note nella scheda cliente mostrano a tutto lo staff chi ha già disdetto tardi, così la politica viene applicata da tutte allo stesso modo. I dati sono su server UE a Francoforte, in linea con il GDPR e le indicazioni del Garante.",
          "Puoi provarlo gratis per 14 giorni, senza carta di credito, e verificare se disdette tardive e assenze diminuiscono.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto può chiedere un centro estetico per una disdetta tardiva?",
        a: "Molti centri chiedono il 50 % del prezzo per le disdette entro il termine e fino al 100 % per la mancata presentazione. Per i trattamenti brevi spesso è più corretta una piccola cifra fissa. L'importo deve rispecchiare la perdita reale e non essere manifestamente eccessivo.",
      },
      {
        q: "Meglio 24 o 48 ore di preavviso?",
        a: "24 ore vanno bene per la maggior parte dei trattamenti standard. Usa 48 ore per appuntamenti lunghi o costosi, come extension ciglia complete, trucco permanente o trucco sposa, dove è difficile riempire lo slot all'ultimo.",
      },
      {
        q: "Che differenza c'è tra caparra e acconto?",
        a: "La caparra confirmatoria rafforza l'impegno: se la cliente non si presenta, il centro può trattenerla. L'acconto è un semplice anticipo sul prezzo e di norma va restituito o scalato. Scrivi sempre chiaramente quale dei due chiedi e in quali casi viene trattenuto.",
      },
      {
        q: "Posso addebitare la penale se la cliente non conosceva le regole?",
        a: "È difficile. Senza prova che la cliente abbia visto le condizioni prima della prenotazione, la tua posizione è debole. Mostra la politica in fase di prenotazione, nella conferma e nel promemoria.",
      },
      {
        q: "Se la cliente è malata devo comunque addebitare?",
        a: "Dal punto di vista legale non sempre la malattia esclude la penale, ma nella pratica la maggior parte dei centri propone di spostare l'appuntamento. Essere comprensive nelle vere emergenze costa poco e mantiene le clienti fedeli.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Prenotazioni online con il tuo link" },
      { pageKey: "messaging", label: "Promemoria automatici via email" },
      { pageKey: "appointment-calendar", label: "Calendario appuntamenti" },
    ],
    sources: [
      {
        label: "EUR-Lex: Direttiva 93/13/CEE concernente le clausole abusive nei contratti stipulati con i consumatori",
        url: "https://eur-lex.europa.eu/eli/dir/1993/13/oj",
      },
    ],
  },
];
