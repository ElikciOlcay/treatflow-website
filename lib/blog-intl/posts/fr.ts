import type { BlogArticle } from "../types";

/**
 * Blog FR (/fr/blog). Articles originaux pour la France, la Belgique,
 * la Suisse et le Luxembourg. Pas de sujets DACH (caisse, TSE, NiSV, Treatflow Pay).
 */
export const posts: BlogArticle[] = [
  {
    topic: "choose-salon-software",
    lang: "fr",
    slug: "choisir-logiciel-institut-de-beaute",
    title: "Logiciel institut de beauté : comment bien le choisir en 2026 ?",
    metaTitle: "Choisir son logiciel d'institut de beauté en 2026",
    description:
      "Agenda, réservation en ligne, fiche cliente, formulaires, RGPD : les critères concrets pour choisir un logiciel d'institut de beauté sans commission cachée.",
    excerpt:
      "Agenda, prise de rendez-vous, fiches clientes, consentements : la grille de critères pour choisir un logiciel adapté à votre institut, sans vous tromper.",
    category: "Logiciel & outils",
    keywords: [
      "logiciel institut de beauté",
      "logiciel esthétique",
      "logiciel de gestion institut",
      "comparatif logiciel institut de beauté",
      "logiciel prise de rendez-vous institut",
      "logiciel clinique esthétique",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Un bon logiciel d'institut de beauté réunit dans un seul outil l'agenda, la réservation en ligne, la fiche cliente avec historique, les questionnaires et consentements signés numériquement et les rappels automatiques. Choisissez-le d'abord sur vos processus réels (soins techniques, laser, cabines, équipe), puis sur le modèle de prix : un abonnement fixe sans commission reste plus prévisible qu'une place de marché.",
    takeaways: [
      "Partez de vos processus : une onglerie n'a pas les mêmes besoins qu'un centre laser ou une clinique esthétique.",
      "L'agenda, la réservation en ligne et la fiche cliente doivent former un seul système, sans double saisie.",
      "Questionnaire de santé, consentement éclairé et suivi des soins sont indispensables dès que vous pratiquez des soins techniques.",
      "Comparez le coût total : abonnement, commissions sur les réservations, SMS, options payantes.",
      "Testez avec de vrais rendez-vous pendant la période d'essai avant de migrer votre fichier clientes.",
    ],
    intro: [
      "Agenda papier, fichier Excel, messagerie WhatsApp, questionnaires imprimés rangés dans un classeur : beaucoup d'instituts fonctionnent encore avec une demi-douzaine d'outils qui ne se parlent pas. Tant que l'activité est petite, cela tient. Dès qu'une deuxième esthéticienne arrive, qu'une cabine laser s'ajoute ou que les rendez-vous se prennent aussi la nuit, les oublis et les doublons coûtent cher.",
      "Le marché des logiciels pour instituts, ongleries, bars à cils et cliniques esthétiques est vaste, et les offres se ressemblent sur le papier. Ce guide vous donne une méthode simple pour comparer, les fonctions qui comptent vraiment selon votre métier et les pièges à éviter, notamment sur les commissions et la protection des données.",
    ],
    sections: [
      {
        heading: "De quoi un institut de beauté a-t-il vraiment besoin dans un logiciel ?",
        paragraphs: [
          "Avant de regarder les démonstrations, notez ce qui vous fait perdre du temps aujourd'hui. Pour la plupart des instituts, ce sont les mêmes points : les appels pour prendre ou déplacer un rendez-vous, les rendez-vous non honorés, la recherche d'informations sur une cliente et la paperasse avant un soin technique.",
          "Un logiciel moderne doit couvrir ces besoins de base dans un seul outil. Si vous devez encore ressaisir une information d'un endroit à un autre, le gain de temps disparaît.",
        ],
        bullets: [
          "**Agenda** par collaboratrice et par cabine ou appareil, avec durées de soin et temps de préparation.",
          "**Réservation en ligne** 24 h/24 via votre propre lien, sur votre site, Instagram ou Google.",
          "**Fiche cliente** avec historique des rendez-vous, notes, photos avant/après et allergies.",
          "**Questionnaires et consentements** envoyés avant le rendez-vous et signés sur smartphone.",
          "**Rappels automatiques** par e-mail, SMS ou WhatsApp.",
          "**Suivi des soins** : paramètres, produits utilisés, réactions, photos.",
        ],
      },
      {
        heading: "Quelles fonctions selon votre métier : institut, laser, ongles, cils, médecine esthétique ?",
        paragraphs: [
          "Tous les métiers de la beauté ne pèsent pas les mêmes fonctions. Un bar à cils vit de rendez-vous courts et répétés ; un centre d'épilation laser a besoin d'un suivi séance par séance ; une clinique de médecine esthétique doit documenter chaque acte avec rigueur. Le tableau ci-dessous vous aide à prioriser.",
        ],
        table: {
          headers: ["Activité", "Fonctions prioritaires", "Point de vigilance"],
          rows: [
            ["Institut de beauté", "Agenda multi-cabines, réservation en ligne, fiche cliente", "Gestion des forfaits et des soins combinés"],
            ["Centre d'épilation laser", "Suivi par séance (paramètres, phototype, zone), photos", "Questionnaire de santé à jour avant chaque série"],
            ["Clinique de médecine esthétique", "Consentement éclairé signé, documentation détaillée des actes", "Exigences d'hébergement des données de santé"],
            ["Onglerie", "Réservation rapide, rappels, rebooking", "Créneaux courts et enchaînés"],
            ["Bar à cils", "Rendez-vous de remplissage récurrents, historique des courbures et longueurs", "Allergies aux colles à tracer"],
            ["Maquillage permanent", "Photos avant/après, consentement, suivi des retouches", "Pigments et numéros de lot à consigner"],
          ],
        },
      },
      {
        heading: "Abonnement ou commission : quel modèle de prix choisir ?",
        paragraphs: [
          "C'est souvent là que se joue la vraie différence. Il existe deux grands modèles. Les places de marché attirent de nouvelles clientes mais prélèvent une commission sur certaines réservations, et la relation client passe en partie par leur plateforme. Les logiciels indépendants facturent un abonnement fixe : vous payez la même somme chaque mois, quel que soit le nombre de rendez-vous, et vos clientes réservent sur votre propre lien.",
          "Pour un institut qui a déjà une clientèle fidèle, l'abonnement fixe est généralement plus prévisible. Faites le calcul sur une année complète, en incluant les SMS, les modules optionnels et les éventuels frais de mise en place.",
        ],
        table: {
          headers: ["Critère", "Place de marché", "Logiciel indépendant"],
          rows: [
            ["Coût", "Commission sur certaines réservations, parfois options payantes", "Abonnement mensuel fixe"],
            ["Données clientes", "Partagées avec la plateforme", "Restent chez vous"],
            ["Visibilité", "Annuaire de la plateforme, à côté des concurrents", "Votre lien, votre site, vos réseaux"],
            ["Image de marque", "Interface de la plateforme", "Votre nom et votre identité"],
          ],
        },
        callout:
          "Chez Treatflow, il n'y a pas de commission sur les réservations : la formule Basic est à 39 € par mois (35 € en annuel) et la formule Booking, avec agenda et réservation en ligne, à 59 € par mois (53 € en annuel).",
      },
      {
        heading: "Pourquoi la fiche cliente et les formulaires numériques sont-ils décisifs ?",
        paragraphs: [
          "Pour les soins techniques (laser, peeling, microneedling, maquillage permanent, injections en clinique), la traçabilité n'est pas un bonus. Vous devez pouvoir retrouver ce que la cliente a déclaré sur sa santé, ce qu'elle a accepté et ce qui a été fait à chaque séance.",
          "Un bon logiciel envoie le questionnaire de santé et le consentement éclairé avant le rendez-vous. La cliente les remplit tranquillement chez elle, signe sur son téléphone, et tout arrive directement dans sa fiche. Le jour du soin, vous ne perdez plus dix minutes à l'accueil avec une feuille et un stylo, et vous ne devez plus déchiffrer une écriture illisible.",
          "Vérifiez aussi la documentation des soins : pouvez-vous noter les paramètres, ajouter des photos avant/après, dicter vos notes à voix haute entre deux clientes ? Dans Treatflow, par exemple, les notes peuvent être dictées puis transformées en texte directement dans la séance.",
        ],
      },
      {
        heading: "Quelles questions poser sur le RGPD et l'hébergement des données ?",
        paragraphs: [
          "Un questionnaire de santé contient des données sensibles au sens du RGPD. Votre logiciel est votre sous-traitant : vous restez responsable du traitement. Posez donc des questions précises avant de signer.",
        ],
        bullets: [
          "Où sont hébergées les données ? Un hébergement dans l'Union européenne simplifie beaucoup votre conformité.",
          "Un contrat de sous-traitance (article 28 du RGPD) est-il proposé ?",
          "Les connexions sont-elles chiffrées et les sauvegardes quotidiennes ?",
          "Pouvez-vous exporter vos données si vous changez d'outil ?",
          "Pour une clinique de médecine esthétique en France : l'éditeur répond-il aux exigences d'hébergement des données de santé (HDS) qui s'appliquent à votre activité ?",
        ],
      },
      {
        heading: "Comment comparer les logiciels en pratique ?",
        paragraphs: [
          "Plutôt que de multiplier les démonstrations, appliquez une méthode courte et rigoureuse sur deux ou trois outils au maximum.",
        ],
        steps: [
          "Listez vos cinq tâches les plus chronophages et vos indispensables (cabines, appareils, consentements, langues).",
          "Présélectionnez deux ou trois logiciels qui couvrent votre métier, pas seulement la coiffure.",
          "Calculez le coût annuel réel : abonnement, commissions, SMS, options.",
          "Ouvrez un essai gratuit et paramétrez vos vraies prestations, durées et horaires.",
          "Faites une réservation test comme une cliente, sur smartphone, du début à la fin.",
          "Envoyez-vous un questionnaire de santé et signez-le pour juger l'expérience cliente.",
          "Vérifiez l'import de votre fichier clientes et la possibilité d'exporter vos données.",
          "Impliquez votre équipe : c'est elle qui utilisera l'agenda tous les jours.",
        ],
      },
      {
        heading: "Quelles erreurs éviter lors du choix ?",
        paragraphs: [
          "La première erreur est de choisir l'outil le plus complet sur le papier. Un logiciel surdimensionné, que personne n'utilise vraiment, coûte plus cher qu'il ne rapporte. La deuxième est de se focaliser sur le prix affiché sans voir les commissions ou les modules facturés à part.",
          "Autre piège fréquent : migrer en pleine saison. Planifiez le changement sur une période plus calme, importez vos clientes, et faites tourner l'ancien et le nouvel agenda en parallèle une semaine si nécessaire. Enfin, ne négligez pas le support : en cas de souci un samedi matin, vous devez savoir à qui vous adresser.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte un logiciel pour institut de beauté ?",
        a: "Les tarifs varient selon le modèle. Les logiciels par abonnement se situent souvent entre quelques dizaines et une centaine d'euros par mois. Treatflow démarre à 39 € par mois, sans commission sur les réservations, avec un essai gratuit de 14 jours sans carte bancaire.",
      },
      {
        q: "Un logiciel gratuit suffit-il pour un institut ?",
        a: "Il peut dépanner au démarrage, mais vérifiez comment l'éditeur se rémunère : commissions, frais de paiement, options payantes ou utilisation des données. Pour les soins techniques, les formulaires et la documentation font souvent défaut dans les offres gratuites.",
      },
      {
        q: "Peut-on importer son fichier clientes existant ?",
        a: "La plupart des logiciels sérieux proposent un import depuis un fichier Excel ou CSV. Demandez-le avant de vous engager et vérifiez que vous pourrez aussi exporter vos données plus tard.",
      },
      {
        q: "Le logiciel fonctionne-t-il en Belgique, en Suisse et au Luxembourg ?",
        a: "Un logiciel en ligne fonctionne partout où vous avez Internet. Vérifiez simplement que l'interface et les formulaires existent en français et que la protection des données correspond à votre cadre local (RGPD, ou nLPD en Suisse).",
      },
      {
        q: "Combien de temps faut-il pour passer à un nouveau logiciel ?",
        a: "Pour un institut de taille moyenne, comptez quelques heures de paramétrage (prestations, horaires, équipe) et une à deux semaines pour que tout le monde soit à l'aise. Les formulaires prêts à l'emploi accélèrent beaucoup la mise en route.",
      },
    ],
    related: [
      { pageKey: "beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { pageKey: "features", label: "Toutes les fonctionnalités" },
      { pageKey: "pricing", label: "Tarifs de Treatflow" },
      { pageKey: "software-comparison", label: "Comparatif des logiciels" },
    ],
    sources: [
      { label: "CNIL – Commission nationale de l'informatique et des libertés", url: "https://www.cnil.fr" },
      { label: "Règlement (UE) 2016/679 (RGPD) sur EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    ],
  },
  {
    topic: "reduce-no-shows",
    lang: "fr",
    slug: "reduire-rendez-vous-non-honores-institut",
    title: "Rendez-vous non honorés : 8 leviers pour les réduire dans votre institut",
    metaTitle: "Réduire les rendez-vous non honorés en institut",
    description:
      "Rappels SMS, conditions d'annulation, acompte, liste d'attente : 8 méthodes concrètes pour réduire les rendez-vous non honorés dans votre institut de beauté.",
    excerpt:
      "Les « lapins » coûtent cher à un institut. Rappels automatiques, règles d'annulation claires, acompte : voici comment les réduire durablement.",
    category: "Gestion d'institut",
    keywords: [
      "rendez-vous non honorés",
      "réduire les no-shows",
      "rappel SMS rendez-vous",
      "lapin institut de beauté",
      "conditions d'annulation institut",
      "acompte rendez-vous esthétique",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Pour réduire les rendez-vous non honorés, combinez des rappels automatiques (e-mail, SMS ou WhatsApp) envoyés 24 à 48 h avant, des conditions d'annulation écrites et acceptées lors de la réservation, et une possibilité simple d'annuler ou de déplacer en ligne. Pour les soins longs ou coûteux, un acompte et une liste d'attente limitent encore la perte.",
    takeaways: [
      "La plupart des oublis sont involontaires : un rappel automatique bien placé en évite une grande partie.",
      "Permettre d'annuler en ligne facilement vaut mieux qu'un créneau vide sans prévenir.",
      "Des conditions d'annulation claires, acceptées à la réservation, rendent les règles opposables.",
      "Acompte ou arrhes : le choix du terme a des conséquences juridiques en France.",
      "Mesurez votre taux de rendez-vous non honorés chaque mois pour suivre vos progrès.",
    ],
    intro: [
      "Une cliente qui ne vient pas, c'est une cabine vide, une esthéticienne payée à attendre et souvent une autre cliente à qui vous aviez refusé ce créneau. Pour un soin d'une heure ou une séance laser, la perte se chiffre vite en dizaines d'euros, et elle se répète chaque semaine.",
      "Bonne nouvelle : les rendez-vous non honorés ne sont pas une fatalité. Dans la grande majorité des cas, il s'agit d'un oubli ou d'un empêchement que la cliente n'a pas osé ou pas pu signaler. Avec quelques règles claires et les bons automatismes, vous pouvez réduire nettement ces « lapins » sans dégrader la relation.",
    ],
    sections: [
      {
        heading: "Pourquoi les clientes ne viennent-elles pas à leur rendez-vous ?",
        paragraphs: [
          "Avant d'agir, il faut comprendre les causes. Elles sont rarement malveillantes. Les plus fréquentes sont l'oubli pur et simple (surtout pour un rendez-vous pris plusieurs semaines à l'avance), un imprévu de dernière minute, la difficulté à joindre l'institut pour annuler, ou l'absence de conséquence perçue.",
          "Chaque cause appelle une réponse différente : le rappel contre l'oubli, l'annulation en ligne contre la difficulté à prévenir, des règles écrites contre le sentiment d'impunité.",
        ],
      },
      {
        heading: "Quels sont les 8 leviers les plus efficaces ?",
        paragraphs: [
          "Vous n'êtes pas obligée de tout mettre en place d'un coup. Commencez par les trois premiers leviers, qui ne coûtent presque rien et produisent le plus d'effet.",
        ],
        steps: [
          "**Rappels automatiques** : un e-mail à la confirmation, puis un SMS ou un message WhatsApp 24 à 48 h avant le rendez-vous.",
          "**Annulation et report en ligne** : un lien dans le rappel permet à la cliente de libérer son créneau en deux clics.",
          "**Conditions d'annulation écrites** : délai (par exemple 24 ou 48 h), conséquences, affichées et acceptées lors de la réservation.",
          "**Confirmation active pour les soins longs** : demandez une confirmation pour les rendez-vous de plus d'une heure ou les séances laser.",
          "**Acompte pour les prestations à risque** : nouvelles clientes, soins longs, créneaux du samedi.",
          "**Liste d'attente** : remplissez immédiatement un créneau libéré avec une cliente intéressée.",
          "**Rebooking en fin de soin** : un rendez-vous fixé en cabine est moins souvent oublié qu'un rendez-vous pris des semaines plus tard au hasard.",
          "**Suivi des récidives** : notez les absences dans la fiche cliente et adaptez les règles pour les clientes concernées.",
        ],
      },
      {
        heading: "Quand envoyer les rappels et par quel canal ?",
        paragraphs: [
          "Le bon timing dépend du type de soin. Pour un rendez-vous classique, un rappel 24 h avant suffit souvent. Pour une séance laser ou un maquillage permanent, un premier rappel 48 h avant laisse le temps de reprogrammer, et un message le matin même peut être utile.",
          "Le canal compte aussi : l'e-mail est idéal pour la confirmation et les consignes de préparation, le SMS ou WhatsApp pour le rappel de dernière minute, parce qu'il est lu rapidement. Les rappels de rendez-vous sont des messages liés au service demandé : ils ne relèvent pas de la prospection commerciale, à condition de ne pas y glisser de publicité.",
        ],
        table: {
          headers: ["Moment", "Canal conseillé", "Contenu"],
          rows: [
            ["À la réservation", "E-mail", "Récapitulatif, adresse, conditions d'annulation, lien de gestion"],
            ["48 h avant (soins techniques)", "E-mail ou SMS", "Rappel, consignes de préparation, questionnaire à remplir"],
            ["24 h avant", "SMS ou WhatsApp", "Rappel court avec lien pour annuler ou déplacer"],
            ["Après une absence", "E-mail", "Message bienveillant et proposition d'un nouveau créneau"],
          ],
        },
        callout:
          "Avec Treatflow, les rappels par e-mail, SMS ou WhatsApp partent automatiquement depuis l'agenda, avec le lien pour annuler ou reprogrammer. Le questionnaire de santé peut être envoyé dans le même élan.",
      },
      {
        heading: "Acompte ou arrhes : que dit le droit français ?",
        paragraphs: [
          "Demander un paiement à l'avance est le moyen le plus dissuasif, mais en France le mot employé a son importance. Des **arrhes** permettent à chacune des parties de se désengager : la cliente perd les arrhes, et si c'est l'institut qui annule, il doit en principe rembourser le double. Un **acompte** engage davantage : il constitue un premier paiement d'un contrat ferme. En l'absence de précision, une somme versée d'avance est en principe considérée comme des arrhes.",
          "Dans la pratique, beaucoup d'instituts appliquent une règle simple et compréhensible : somme versée à la réservation, déduite du prix du soin, conservée en cas d'annulation tardive ou d'absence. Rédigez vos conditions clairement, faites-les accepter lors de la réservation, et restez cohérente dans leur application. En cas de doute, faites relire vos conditions générales par un professionnel du droit.",
        ],
        callout:
          "En Belgique, en Suisse et au Luxembourg, les règles diffèrent. Le principe reste le même partout : des conditions claires, communiquées avant la réservation et acceptées par la cliente.",
      },
      {
        heading: "Comment rédiger des conditions d'annulation bien acceptées ?",
        paragraphs: [
          "Une règle trop sévère fait fuir, une règle floue ne sert à rien. Visez un texte court, au ton bienveillant, qui explique pourquoi la règle existe : un créneau libéré tard ne peut plus être proposé à une autre cliente.",
        ],
        bullets: [
          "Indiquez un délai précis (par exemple « au plus tard 24 h avant »).",
          "Précisez ce qui se passe en cas d'annulation tardive ou d'absence.",
          "Expliquez comment annuler : lien en ligne, téléphone, message.",
          "Prévoyez une tolérance pour les cas de force majeure.",
          "Affichez les conditions sur la page de réservation et dans l'e-mail de confirmation.",
        ],
      },
      {
        heading: "Comment mesurer vos progrès ?",
        paragraphs: [
          "Ce qui n'est pas mesuré ne s'améliore pas. Calculez chaque mois votre taux de rendez-vous non honorés : nombre d'absences sans prévenir divisé par le nombre total de rendez-vous. Suivez aussi les annulations tardives à part : elles sont moins graves qu'une absence, mais restent une perte si le créneau ne peut pas être remis en vente.",
          "Notez les absences dans la fiche cliente. Une cliente qui ne vient pas une fois a sans doute eu un imprévu ; une cliente qui ne vient pas trois fois justifie un acompte systématique. Cette distinction préserve la relation avec la grande majorité de vos clientes fidèles.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on facturer un rendez-vous non honoré à une cliente ?",
        a: "Seulement si la règle a été communiquée et acceptée avant la réservation, par exemple dans vos conditions générales ou sur la page de réservation. Le plus simple est de demander une somme à la réservation et de la conserver en cas d'absence, selon les règles annoncées.",
      },
      {
        q: "Combien de temps avant le rendez-vous faut-il envoyer un rappel ?",
        a: "24 h avant est le standard pour la plupart des soins. Pour les soins longs ou techniques, un rappel 48 h avant permet de libérer le créneau à temps, éventuellement complété par un message le matin même.",
      },
      {
        q: "Le rappel SMS nécessite-t-il le consentement de la cliente ?",
        a: "Un rappel de rendez-vous est lié au service que la cliente a demandé et ne constitue pas de la prospection commerciale. Il ne doit pas contenir de publicité. Pour les messages promotionnels, les règles sur le consentement s'appliquent.",
      },
      {
        q: "Faut-il demander un acompte à toutes les clientes ?",
        a: "Pas forcément. Beaucoup d'instituts le réservent aux nouvelles clientes, aux soins longs ou coûteux et aux clientes déjà absentes par le passé. Cela protège votre agenda sans pénaliser les fidèles.",
      },
      {
        q: "Une liste d'attente sert-elle vraiment ?",
        a: "Oui, surtout pour les créneaux recherchés (soir, samedi). Un créneau libéré la veille peut être reproposé rapidement à une cliente qui attendait, au lieu de rester vide.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Rappels automatiques par e-mail, SMS et WhatsApp" },
      { pageKey: "online-booking", label: "Réservation en ligne" },
      { pageKey: "appointment-calendar", label: "Agenda de rendez-vous" },
    ],
  },
  {
    topic: "online-booking-salon",
    lang: "fr",
    slug: "prise-de-rendez-vous-en-ligne-institut",
    title: "Prise de rendez-vous en ligne : le guide pour votre institut de beauté",
    metaTitle: "Prise de rendez-vous en ligne pour institut de beauté",
    description:
      "Avantages, mise en place, règles de réservation et erreurs à éviter : le guide pratique de la prise de rendez-vous en ligne pour instituts et cliniques.",
    excerpt:
      "Vos clientes veulent réserver le soir, sans téléphoner. Voici comment mettre en place la réservation en ligne sans perdre la maîtrise de votre agenda.",
    category: "Rendez-vous en ligne",
    keywords: [
      "prise de rendez-vous en ligne",
      "réservation en ligne institut de beauté",
      "agenda en ligne esthéticienne",
      "logiciel réservation en ligne",
      "lien de réservation Instagram",
      "réservation en ligne sans commission",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "La prise de rendez-vous en ligne permet à vos clientes de réserver 24 h/24 sur votre propre lien, depuis votre site, Instagram ou Google, sans appeler l'institut. Bien paramétrée (prestations, durées, temps tampons, cabines, délais minimum), elle réduit les appels, remplit les créneaux du soir et du week-end et diminue les oublis grâce aux confirmations et rappels automatiques.",
    takeaways: [
      "Une grande partie des clientes cherche à réserver en dehors des horaires d'ouverture.",
      "Le paramétrage (durées, pauses, cabines, appareils) décide de la qualité de votre agenda en ligne.",
      "Un lien de réservation propre vous évite les commissions des places de marché.",
      "Placez le lien partout : site, bio Instagram, fiche Google, signature e-mail.",
      "Combinez réservation, questionnaire de santé et rappels dans un même parcours.",
    ],
    intro: [
      "Il est 22 h, votre cliente vient de penser à son épilation ou à son remplissage de cils. Si elle doit attendre le lendemain pour appeler, il y a de fortes chances qu'elle oublie, ou qu'elle réserve ailleurs. La prise de rendez-vous en ligne répond exactement à ce moment-là.",
      "Pour l'institut, l'enjeu est double : capter ces réservations sans être pendue au téléphone, et garder la maîtrise de son planning. Ce guide vous explique comment choisir, paramétrer et diffuser votre système de réservation en ligne, que vous soyez seule en cabine ou à la tête d'une clinique esthétique.",
    ],
    sections: [
      {
        heading: "Quels sont les avantages de la réservation en ligne pour un institut ?",
        paragraphs: [
          "Le premier avantage est évident : moins d'appels. Chaque appel interrompt un soin ou oblige à rappeler plus tard. Le deuxième est la disponibilité permanente : votre agenda prend des rendez-vous la nuit, le dimanche et pendant vos congés.",
        ],
        bullets: [
          "**Moins d'interruptions** en cabine et à l'accueil.",
          "**Plus de réservations** en dehors des horaires d'ouverture.",
          "**Moins d'erreurs** : la cliente choisit elle-même la prestation et le créneau, la confirmation part automatiquement.",
          "**Moins d'oublis** grâce aux rappels intégrés.",
          "**Une image moderne**, attendue notamment par une clientèle jeune.",
          "**Des données propres** : coordonnées saisies par la cliente, historique automatiquement rattaché à sa fiche.",
        ],
      },
      {
        heading: "Place de marché ou lien de réservation propre : quelle différence ?",
        paragraphs: [
          "Les places de marché affichent votre institut dans un annuaire, aux côtés de vos concurrents. Elles peuvent apporter de nouvelles clientes, mais prélèvent souvent une commission et gardent une partie de la relation client. Avec un lien de réservation propre, vos clientes réservent directement chez vous, à votre nom, et vous payez un abonnement fixe.",
          "Pour la plupart des instituts installés, la clientèle vient surtout du bouche-à-oreille, d'Instagram et de Google. Dans ce cas, un lien propre est souvent plus rentable. Treatflow fonctionne sur ce modèle : chaque institut dispose de son lien de réservation personnel, sans commission sur les rendez-vous.",
        ],
      },
      {
        heading: "Comment mettre en place la réservation en ligne étape par étape ?",
        paragraphs: [
          "Prévoyez une demi-journée pour un paramétrage soigné. C'est cet investissement initial qui évite ensuite les mauvaises surprises dans l'agenda.",
        ],
        steps: [
          "Listez vos prestations avec un nom clair, une durée réaliste et un prix, regroupées par catégorie (visage, corps, épilation, ongles, cils).",
          "Ajoutez des temps tampons pour la préparation de la cabine et la désinfection.",
          "Rattachez chaque prestation aux bonnes collaboratrices et, si besoin, à une cabine ou un appareil précis (laser, appareil de radiofréquence).",
          "Définissez vos règles : délai minimum avant réservation, horizon de réservation, délai d'annulation.",
          "Décidez quelles prestations sont réservables en ligne : un premier rendez-vous laser peut nécessiter une consultation préalable.",
          "Rédigez vos conditions d'annulation et affichez-les dans le parcours de réservation.",
          "Activez les confirmations et les rappels automatiques.",
          "Testez vous-même une réservation sur smartphone, puis diffusez votre lien.",
        ],
      },
      {
        heading: "Quelles règles de réservation protègent votre agenda ?",
        paragraphs: [
          "La crainte principale des esthéticiennes est de perdre le contrôle de leur planning. Avec les bonnes règles, c'est l'inverse : l'agenda en ligne applique vos consignes mieux qu'une réservation au téléphone prise à la hâte.",
        ],
        table: {
          headers: ["Règle", "Exemple", "Pourquoi"],
          rows: [
            ["Délai minimum", "Pas de réservation moins de 3 h à l'avance", "Éviter les surprises en pleine journée"],
            ["Horizon de réservation", "Jusqu'à 8 semaines à l'avance", "Garder de la souplesse sur le planning"],
            ["Temps tampon", "10 min après chaque soin visage", "Préparer et désinfecter la cabine"],
            ["Ressource liée", "Laser réservé à une seule cabine", "Éviter deux séances sur le même appareil"],
            ["Prestations masquées", "Consultation obligatoire avant un premier soin", "Vérifier les contre-indications"],
          ],
        },
      },
      {
        heading: "Où placer votre lien de réservation ?",
        paragraphs: [
          "Un lien que personne ne voit ne sert à rien. Placez-le là où vos clientes vous cherchent déjà.",
        ],
        bullets: [
          "Bouton « Prendre rendez-vous » bien visible sur votre site, en haut de chaque page.",
          "Bio Instagram et stories avec sticker lien.",
          "Fiche d'établissement Google, dans le champ prévu pour la prise de rendez-vous.",
          "Page Facebook et messageries (réponse automatique avec le lien).",
          "Signature d'e-mail, cartes de visite et QR code à l'accueil.",
        ],
        callout:
          "Si vous n'avez pas encore de site, Treatflow propose en option un site web d'institut relié directement à votre agenda.",
      },
      {
        heading: "Comment relier réservation, questionnaire de santé et rappels ?",
        paragraphs: [
          "Le vrai gain apparaît quand la réservation déclenche tout le reste. La cliente réserve une séance d'épilation laser ; elle reçoit immédiatement sa confirmation, puis, quelques jours avant, le questionnaire de santé à remplir et à signer sur son téléphone, et enfin un rappel la veille. Le jour J, tout est dans sa fiche.",
          "Ce parcours évite la paperasse à l'accueil, améliore la qualité des informations recueillies et vous permet de repérer une contre-indication avant le soin, plutôt qu'au moment où la cliente est déjà installée en cabine.",
        ],
      },
      {
        heading: "Réservation en ligne : faut-il un fonctionnement différent pour une clinique ou un centre laser ?",
        paragraphs: [
          "Oui, sur quelques points. Dans une clinique de médecine esthétique, certains actes nécessitent une consultation préalable avec le médecin : rendez-vous en ligne pour la consultation, puis planification de l'acte après l'examen. Dans un centre d'épilation laser, la première séance est souvent précédée d'un test ou d'un échange sur le phototype et les contre-indications.",
          "La solution consiste à ouvrir en ligne les prestations d'entrée (consultation, bilan, test) et les séances de suivi, tout en réservant les actes plus lourds à une planification par l'équipe. Pensez aussi aux ressources partagées : un appareil laser ou une cabine équipée ne peut accueillir qu'une cliente à la fois, quel que soit le nombre de praticiennes disponibles. Un agenda capable de gérer les colonnes par collaboratrice et par cabine évite ces conflits.",
        ],
      },
      {
        heading: "Quelles erreurs éviter avec la réservation en ligne ?",
        paragraphs: [
          "Les erreurs les plus fréquentes viennent d'un paramétrage trop rapide : durées sous-estimées, absence de temps tampon, prestations aux noms incompréhensibles pour une cliente (« Soin H2 45 »). Autre erreur : ouvrir en ligne seulement quelques créneaux peu attractifs, ce qui décourage les clientes de revenir sur le lien.",
          "Enfin, n'oubliez pas de garder une seule source de vérité. Si vous continuez à noter certains rendez-vous dans un carnet papier, les doubles réservations arriveront tôt ou tard. Tous les rendez-vous, pris en ligne, au téléphone ou en cabine, doivent aller dans le même agenda.",
        ],
      },
    ],
    faq: [
      {
        q: "La réservation en ligne convient-elle aux clientes plus âgées ?",
        a: "Oui, la plupart réservent sans difficulté sur smartphone. Gardez néanmoins le téléphone comme alternative : les deux canaux alimentent le même agenda.",
      },
      {
        q: "Peut-on valider manuellement les réservations en ligne ?",
        a: "Selon le logiciel, vous pouvez rendre certaines prestations non réservables en ligne ou exiger une consultation préalable. Pour la plupart des soins courants, la confirmation automatique est plus simple pour tout le monde.",
      },
      {
        q: "Combien coûte un système de réservation en ligne ?",
        a: "Les places de marché prélèvent souvent une commission, les logiciels indépendants facturent un abonnement. Chez Treatflow, la formule Booking avec agenda et réservation en ligne coûte 59 € par mois (53 € en annuel), sans commission sur les réservations.",
      },
      {
        q: "Comment éviter les doubles réservations ?",
        a: "En centralisant tous les rendez-vous dans un seul agenda, y compris ceux pris par téléphone, et en rattachant les prestations aux ressources nécessaires (collaboratrice, cabine, appareil).",
      },
      {
        q: "Peut-on ajouter le lien de réservation sur Google ?",
        a: "Oui, la fiche d'établissement Google permet d'ajouter un lien de prise de rendez-vous. C'est souvent l'un des endroits où les nouvelles clientes vous découvrent.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Réservation en ligne sans commission" },
      { pageKey: "appointment-calendar", label: "Agenda multi-cabines" },
      { pageKey: "studio-website", label: "Site web pour institut" },
    ],
  },
  {
    topic: "digital-consultation-forms",
    lang: "fr",
    slug: "fiche-cliente-digitale-esthetique",
    title: "Fiche cliente et questionnaire de santé : passer au numérique en esthétique",
    metaTitle: "Fiche cliente digitale et questionnaire de santé",
    description:
      "Que doit contenir une fiche cliente en esthétique ? Questionnaire de santé, consentement éclairé, signature électronique : le guide pour passer au numérique.",
    excerpt:
      "Questionnaire de santé, contre-indications, consentement éclairé, suivi des séances : comment construire une fiche cliente numérique complète et conforme.",
    category: "Documentation & formulaires",
    keywords: [
      "fiche cliente esthétique",
      "questionnaire de santé esthétique",
      "fiche cliente digitale",
      "consentement éclairé esthétique",
      "fiche diagnostic institut de beauté",
      "questionnaire épilation laser",
      "signature électronique consentement",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Une fiche cliente en esthétique regroupe les coordonnées, le questionnaire de santé (allergies, traitements, grossesse, contre-indications), le consentement éclairé signé et l'historique des soins avec paramètres et photos. En version numérique, la cliente remplit et signe avant le rendez-vous sur son smartphone, et tout arrive directement dans sa fiche, consultable en cabine.",
    takeaways: [
      "Le questionnaire de santé sert à repérer les contre-indications avant le soin, pas après.",
      "Le consentement éclairé doit être spécifique au soin : risques, suites, alternatives.",
      "Le numérique supprime les feuilles illisibles et les classeurs à archiver.",
      "Mettez à jour le questionnaire régulièrement, et avant chaque nouvelle série de séances.",
      "Ces informations sont des données de santé : accès limité et hébergement sécurisé obligatoires.",
    ],
    intro: [
      "La fiche cliente est le cœur de votre pratique. Pour un soin du visage, elle rappelle le type de peau et les produits qui ont bien fonctionné. Pour une séance laser, un peeling ou un maquillage permanent, elle devient un véritable outil de sécurité : c'est elle qui vous signale une allergie, une prise de médicament photosensibilisant ou une grossesse.",
      "Sur papier, ces fiches finissent souvent incomplètes, illisibles ou introuvables au moment où vous en avez besoin. Passer au numérique ne consiste pas seulement à scanner l'existant : c'est repenser le parcours pour que la cliente remplisse ses informations au bon moment, et que vous les ayez sous les yeux en cabine.",
    ],
    sections: [
      {
        heading: "Que doit contenir une fiche cliente en esthétique ?",
        paragraphs: [
          "Une fiche complète se compose de plusieurs blocs. Certains sont remplis une fois, d'autres évoluent à chaque visite.",
        ],
        table: {
          headers: ["Bloc", "Contenu", "Mise à jour"],
          rows: [
            ["Identité et contact", "Nom, date de naissance, téléphone, e-mail, préférences de contact", "Ponctuelle"],
            ["Questionnaire de santé", "Allergies, traitements, pathologies, grossesse, antécédents", "Avant une nouvelle série et au moins une fois par an"],
            ["Diagnostic", "Type de peau, phototype, zones, attentes", "Au premier soin puis si besoin"],
            ["Consentement éclairé", "Soin concerné, risques, suites, signature", "Pour chaque type de soin technique"],
            ["Suivi des soins", "Date, prestation, paramètres, produits, réactions, photos", "À chaque séance"],
            ["Notes et préférences", "Préférences, remarques utiles pour l'accueil", "Au fil de l'eau"],
          ],
        },
      },
      {
        heading: "Quelles questions mettre dans un questionnaire de santé ?",
        paragraphs: [
          "Le questionnaire doit être adapté au soin. Une manucure ne demande pas les mêmes informations qu'une épilation laser. Évitez le formulaire universel de trois pages que personne ne lit : posez les questions utiles pour le soin réservé, de façon claire et sans jargon.",
        ],
        bullets: [
          "Allergies connues (produits cosmétiques, latex, colles, pigments, anesthésiants locaux).",
          "Traitements en cours, notamment médicaments photosensibilisants, anticoagulants, rétinoïdes.",
          "Grossesse ou allaitement.",
          "Maladies de peau, cicatrisation difficile, tendance aux chéloïdes, herpès.",
          "Exposition récente au soleil ou autobronzant (important avant un laser).",
          "Soins esthétiques récents (peeling, injections, laser) sur la zone concernée.",
          "Port d'un dispositif médical implanté, si pertinent pour l'appareil utilisé.",
        ],
        callout:
          "Ne collectez que ce qui est nécessaire au soin. C'est une exigence du RGPD (principe de minimisation), et cela rend aussi le questionnaire plus agréable à remplir.",
      },
      {
        heading: "Qu'est-ce qu'un consentement éclairé et quand est-il nécessaire ?",
        paragraphs: [
          "Le consentement éclairé est le document par lequel la cliente confirme avoir reçu une information claire sur le soin : déroulement, effets attendus, risques, suites possibles, précautions à respecter et alternatives. En médecine esthétique, l'information du patient est une obligation du médecin ; en institut, un consentement écrit pour les soins techniques est une bonne pratique qui protège autant la cliente que vous.",
          "Un consentement générique ne suffit pas : il doit correspondre au soin réalisé. Prévoyez un modèle par famille de soins (laser et lumière pulsée, peeling, microneedling, maquillage permanent, extensions de cils) et faites-le signer avant la première séance.",
        ],
      },
      {
        heading: "Comment passer du papier au numérique ?",
        paragraphs: [
          "La transition se fait sans rupture si vous procédez par étapes. Inutile de numériser tout l'historique dès le premier jour.",
        ],
        steps: [
          "Faites l'inventaire de vos formulaires actuels et éliminez les questions inutiles.",
          "Créez un modèle numérique par soin ou famille de soins, ou partez de modèles prêts à l'emploi.",
          "Rattachez chaque formulaire aux prestations concernées pour qu'il soit envoyé automatiquement.",
          "Envoyez le formulaire avec la confirmation de rendez-vous ou quelques jours avant.",
          "Vérifiez les réponses avant le soin et notez vos observations dans la fiche.",
          "Pour les clientes existantes, faites remplir la version numérique à leur prochaine visite.",
          "Archivez les anciennes fiches papier de façon sécurisée, le temps de leur durée de conservation.",
        ],
      },
      {
        heading: "La signature électronique d'un consentement est-elle valable ?",
        paragraphs: [
          "En droit européen, la signature électronique est reconnue (règlement eIDAS) et ne peut pas être rejetée au seul motif qu'elle est électronique. Pour un consentement esthétique, ce qui compte en pratique, c'est de pouvoir montrer qui a signé, quand, et quelle version du document a été acceptée.",
          "Un bon outil horodate la signature, conserve la version exacte du formulaire et la rattache à la fiche de la cliente. Dans Treatflow, les questionnaires et consentements sont envoyés avant le rendez-vous, signés sur smartphone et enregistrés directement dans la fiche cliente.",
        ],
      },
      {
        heading: "Comment documenter le suivi des soins efficacement ?",
        paragraphs: [
          "Le questionnaire décrit la cliente ; la documentation décrit ce que vous avez fait. Pour une séance d'épilation laser, notez la zone, le phototype, les paramètres utilisés, la réaction de la peau et la date de la prochaine séance. Pour un maquillage permanent, la référence du pigment et le numéro de lot. Pour des extensions de cils, la courbure, l'épaisseur, la longueur et la colle.",
          "Les photos avant/après sont précieuses pour mesurer les résultats et en cas de réclamation. Demandez un accord spécifique si vous souhaitez les utiliser à des fins de communication : le consentement au soin ne vaut pas autorisation de publier.",
          "Le temps manque souvent entre deux clientes. La dictée vocale aide : vous énoncez vos notes, elles sont transcrites en texte et rattachées à la séance. C'est ce que propose la documentation des soins de Treatflow.",
        ],
      },
      {
        heading: "Quels bénéfices concrets attendre du passage au numérique ?",
        paragraphs: [
          "Le premier bénéfice se voit dès la première semaine : l'accueil devient plus fluide. La cliente arrive avec un questionnaire déjà rempli, vous l'avez lu, et la conversation porte sur le soin plutôt que sur la paperasse. Le deuxième est la qualité de l'information : des champs obligatoires, des questions conditionnelles (une question sur la grossesse qui n'apparaît que si elle est pertinente) et plus de cases oubliées.",
        ],
        bullets: [
          "**Gain de temps** à l'accueil et en fin de journée, sans classement ni archivage papier.",
          "**Sécurité accrue** : les contre-indications sont repérées avant le soin.",
          "**Traçabilité** : chaque réponse et chaque signature sont datées et retrouvables en quelques secondes.",
          "**Travail d'équipe facilité** : toutes les collaboratrices voient la même fiche à jour.",
          "**Image professionnelle**, particulièrement appréciée en médecine esthétique et pour les soins laser.",
        ],
      },
      {
        heading: "Quelles règles de protection des données respecter ?",
        paragraphs: [
          "Les informations de santé appartiennent aux catégories particulières de données du RGPD. Elles demandent une base légale solide (en institut, le plus souvent le consentement explicite de la cliente), un accès limité aux personnes qui en ont besoin et un hébergement sécurisé. Informez vos clientes de l'usage de leurs données et de la durée de conservation.",
          "Pour les cliniques et cabinets de médecine esthétique en France, des règles spécifiques s'ajoutent, notamment sur l'hébergement des données de santé. Vérifiez auprès de votre éditeur ce qu'il couvre pour votre type d'activité.",
        ],
      },
    ],
    faq: [
      {
        q: "Le questionnaire de santé est-il obligatoire en institut de beauté ?",
        a: "Pour les soins techniques, il est fortement recommandé et souvent exigé par les assureurs et les fabricants d'appareils. Il vous permet de repérer les contre-indications et de prouver que vous avez fait preuve de prudence.",
      },
      {
        q: "À quelle fréquence faut-il mettre à jour le questionnaire de santé ?",
        a: "Au minimum une fois par an, avant chaque nouvelle série de séances (laser, peeling) et dès que la cliente signale un changement : grossesse, nouveau traitement, intervention récente.",
      },
      {
        q: "Combien de temps conserver une fiche cliente ?",
        a: "Le RGPD impose une durée limitée et justifiée. Pour une cliente active, la fiche est conservée pendant la relation commerciale ; au-delà, fixez une durée adaptée à vos obligations, notamment en cas de réclamation. En médecine esthétique, les règles du dossier médical s'appliquent.",
      },
      {
        q: "La cliente peut-elle remplir le questionnaire sur place ?",
        a: "Oui, sur une tablette à l'accueil par exemple. Mais l'envoi avant le rendez-vous est plus confortable pour elle et vous laisse le temps de vérifier les réponses avant le soin.",
      },
      {
        q: "Peut-on utiliser des modèles de formulaires prêts à l'emploi ?",
        a: "Oui, c'est un bon point de départ. Adaptez-les toujours à vos soins, à vos appareils et à vos pratiques. Treatflow propose des modèles de formulaires que vous pouvez personnaliser.",
      },
    ],
    related: [
      { pageKey: "forms", label: "Questionnaires et consentements numériques" },
      { pageKey: "treatment-documentation", label: "Documentation des soins" },
      { pageKey: "client-records", label: "Fiches clientes" },
    ],
    sources: [
      { label: "CNIL – Commission nationale de l'informatique et des libertés", url: "https://www.cnil.fr" },
      { label: "Règlement (UE) n° 910/2014 (eIDAS) sur EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2014/910/oj" },
    ],
  },
  {
    topic: "client-retention",
    lang: "fr",
    slug: "fideliser-clientes-institut-de-beaute",
    title: "Fidéliser ses clientes en institut de beauté : 7 stratégies concrètes",
    metaTitle: "Fidéliser ses clientes en institut : 7 stratégies",
    description:
      "Rebooking, suivi après soin, relances au bon moment, bons cadeaux, fiche cliente : 7 stratégies concrètes pour fidéliser les clientes de votre institut.",
    excerpt:
      "Une cliente fidèle rapporte plus qu'une nouvelle cliente et coûte moins cher à attirer. Voici 7 stratégies simples pour qu'elles reviennent.",
    category: "Fidélisation",
    keywords: [
      "fidéliser clientes institut de beauté",
      "fidélisation clientèle esthétique",
      "programme de fidélité institut",
      "relance clientes institut",
      "carte cadeau institut de beauté",
      "marketing institut de beauté",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Pour fidéliser vos clientes, proposez le prochain rendez-vous dès la fin du soin, suivez-les après les soins techniques, relancez-les au bon moment selon le rythme de chaque prestation et personnalisez l'accueil grâce à une fiche cliente à jour. Les bons cadeaux et une communication régulière mais mesurée complètent le dispositif.",
    takeaways: [
      "Le rebooking en cabine est le levier de fidélisation le plus simple et le plus efficace.",
      "Chaque soin a son rythme naturel : relancez au bon moment, pas au hasard.",
      "Une fiche cliente détaillée permet un accueil personnalisé dès la deuxième visite.",
      "Le suivi après un soin technique rassure et montre votre professionnalisme.",
      "Les messages promotionnels exigent le respect des règles de consentement.",
    ],
    intro: [
      "Attirer une nouvelle cliente demande du temps, de la visibilité et souvent un budget publicitaire. La faire revenir demande surtout de l'attention. Dans un institut, la rentabilité se construit sur les clientes qui reviennent toutes les trois, quatre ou six semaines, pour leurs ongles, leurs cils, leur épilation ou leurs soins du visage.",
      "La fidélité ne repose pas sur une carte à tampons. Elle naît d'une expérience constante, d'un suivi sérieux et du sentiment d'être reconnue. Voici sept stratégies concrètes, faciles à mettre en place, qui transforment une première visite en relation durable.",
    ],
    sections: [
      {
        heading: "Pourquoi la fidélisation est-elle si importante pour un institut ?",
        paragraphs: [
          "Une cliente fidèle connaît vos prestations, vous fait confiance pour de nouveaux soins et vous recommande à son entourage. Elle remplit votre agenda de façon régulière, ce qui rend votre activité plus prévisible. À l'inverse, un institut qui dépend uniquement de nouvelles clientes doit sans cesse investir pour se faire connaître.",
          "La bonne nouvelle : la plupart des leviers de fidélisation ne coûtent presque rien. Ils demandent surtout de l'organisation, et un outil qui vous rappelle quoi faire et quand.",
        ],
      },
      {
        heading: "Quelles sont les 7 stratégies de fidélisation les plus efficaces ?",
        paragraphs: [
          "Ces stratégies se complètent. Commencez par les deux premières, puis ajoutez les autres au fil des mois.",
        ],
        steps: [
          "**Proposer le prochain rendez-vous en fin de soin** : « On se revoit dans trois semaines pour le remplissage ? » Le créneau est fixé avant que la cliente ne parte.",
          "**Relancer selon le rythme du soin** : une cliente qui n'a pas réservé son remplissage de cils après quatre semaines reçoit un message personnalisé.",
          "**Assurer le suivi après un soin technique** : un message le lendemain d'un peeling ou d'un maquillage permanent, avec les consignes et une invitation à vous écrire en cas de question.",
          "**Personnaliser l'accueil** : se souvenir de ses préférences, de sa sensibilité, de la couleur choisie la dernière fois grâce à la fiche cliente.",
          "**Créer des parcours de soins** : un programme de séances (laser, soins anti-âge) donne un objectif et un rythme.",
          "**Proposer des bons cadeaux** : ils font venir de nouvelles clientes par vos fidèles et réactivent les fêtes et anniversaires.",
          "**Recueillir les avis** : demander un avis Google après une belle séance valorise la cliente et renforce votre visibilité.",
        ],
      },
      {
        heading: "Quel est le bon rythme de relance selon la prestation ?",
        paragraphs: [
          "Relancer trop tôt agace, relancer trop tard laisse partir la cliente chez une concurrente. Le tableau ci-dessous donne des repères indicatifs ; adaptez-les à vos pratiques et aux recommandations de vos fournisseurs.",
        ],
        table: {
          headers: ["Prestation", "Rythme indicatif", "Moment de la relance"],
          rows: [
            ["Remplissage de cils", "2 à 4 semaines", "Si rien n'est réservé après 3 à 4 semaines"],
            ["Ongles en gel ou semi-permanent", "3 à 4 semaines", "Si rien n'est réservé après 4 semaines"],
            ["Épilation à la cire", "4 à 6 semaines", "Après 5 à 6 semaines"],
            ["Soin du visage", "4 à 6 semaines", "Après 6 semaines"],
            ["Séances laser", "Selon le protocole et la zone", "À la date prévue de la séance suivante"],
            ["Retouche maquillage permanent", "Selon le protocole", "Quelques semaines après la première séance"],
          ],
        },
      },
      {
        heading: "Comment la fiche cliente aide-t-elle à fidéliser ?",
        paragraphs: [
          "La fiche cliente est votre mémoire. Elle vous permet d'accueillir chaque cliente comme si vous l'aviez vue la veille, même si une collègue s'est occupée d'elle la dernière fois. Allergies, préférences, produits utilisés, photos avant/après, remarques personnelles : tout ce qui rend l'expérience fluide et attentive.",
          "Elle sert aussi à repérer les clientes qui ne sont pas revenues depuis longtemps. Dans Treatflow, l'historique de chaque cliente est centralisé avec ses rendez-vous, ses formulaires et la documentation de ses soins, ce qui facilite ce suivi.",
        ],
      },
      {
        heading: "Quels messages envoyer, et dans quelles limites ?",
        paragraphs: [
          "Distinguez deux types de messages. Les messages liés au service (confirmation, rappel, consignes après soin) font partie de la prestation. Les messages promotionnels (offre du mois, nouveau soin, relance commerciale) relèvent de la prospection et sont encadrés.",
          "En France, la prospection par e-mail ou SMS auprès de particuliers nécessite en principe leur consentement préalable. Une exception existe pour vos clientes existantes, si le message concerne des produits ou services analogues à ceux déjà achetés et si elles ont pu s'y opposer dès la collecte de leurs coordonnées. Chaque message doit offrir un moyen simple de se désinscrire.",
        ],
        bullets: [
          "Prévoyez une case de consentement distincte pour les messages promotionnels lors de la réservation.",
          "Limitez la fréquence : un ou deux messages promotionnels par mois suffisent largement.",
          "Personnalisez : prénom, dernier soin, conseil utile plutôt qu'une promotion générique.",
          "Respectez immédiatement les demandes de désinscription.",
        ],
      },
      {
        heading: "Les bons cadeaux sont-ils un vrai levier de fidélisation ?",
        paragraphs: [
          "Oui, à double titre. Une cliente fidèle qui offre un bon cadeau vous amène une nouvelle cliente déjà mise en confiance par une recommandation. Et la personne qui reçoit le bon découvre votre institut dans les meilleures conditions.",
          "Pour en tirer le meilleur parti, rendez les bons faciles à acheter (en ligne et en institut), mettez-les en avant avant les fêtes, la fête des mères et la Saint-Valentin, et accueillez particulièrement bien les bénéficiaires : c'est souvent leur première visite.",
        ],
      },
      {
        heading: "Quelle expérience en institut donne envie de revenir ?",
        paragraphs: [
          "Les outils ne remplacent pas l'expérience vécue en cabine. Une cliente revient parce qu'elle s'est sentie écoutée, que le résultat correspond à ce qui avait été convenu et que tout s'est passé sans accroc : accueil à l'heure, cabine prête, explications claires, conseils pour la maison.",
          "Soignez aussi les petits moments qui encadrent le soin. Une confirmation claire avec l'adresse et les consignes, un rappel la veille, un mot de suivi après un soin technique : ce sont ces détails, répétés à chaque visite, qui construisent la confiance. Et quand un incident survient (retard, réaction cutanée, résultat décevant), une réponse rapide et honnête fidélise souvent davantage qu'un rendez-vous parfait.",
        ],
      },
      {
        heading: "Comment mesurer la fidélité de vos clientes ?",
        paragraphs: [
          "Quelques indicateurs simples suffisent pour savoir si vos efforts paient. Suivez-les une fois par mois.",
        ],
        bullets: [
          "**Taux de rebooking** : part des clientes qui repartent avec un prochain rendez-vous.",
          "**Taux de retour** : part des nouvelles clientes revenues dans les trois mois.",
          "**Clientes inactives** : nombre de clientes sans visite depuis plus de trois ou six mois.",
          "**Fréquence moyenne** de visite par cliente active.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un programme de fidélité à points ?",
        a: "Pas forcément. Le rebooking, le suivi et un accueil personnalisé fidélisent souvent mieux qu'une carte à points. Si vous en créez un, gardez-le simple et facile à comprendre.",
      },
      {
        q: "Comment relancer une cliente qui ne vient plus ?",
        a: "Avec un message personnel et sans pression : rappelez son dernier soin, proposez un créneau ou un conseil adapté. Respectez son éventuel refus de recevoir des messages promotionnels.",
      },
      {
        q: "Peut-on envoyer des SMS promotionnels à toutes ses clientes ?",
        a: "Seulement dans le respect des règles de prospection : consentement préalable ou, pour vos clientes existantes, des services analogues avec possibilité de s'y opposer. Chaque message doit permettre de se désinscrire.",
      },
      {
        q: "Combien de temps après un soin envoyer un message de suivi ?",
        a: "Le lendemain ou le surlendemain pour un soin technique (peeling, laser, maquillage permanent). Pour un soin de confort, un remerciement le jour même ou une demande d'avis suffit.",
      },
      {
        q: "Les avis Google aident-ils à fidéliser ?",
        a: "Ils servent surtout à attirer de nouvelles clientes, mais demander l'avis d'une cliente montre que son opinion compte. Ne proposez jamais de contrepartie en échange d'un avis.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Messages et rappels automatiques" },
      { pageKey: "client-records", label: "Fiches clientes" },
      { pageKey: "vouchers", label: "Bons cadeaux" },
    ],
    sources: [
      { label: "CNIL – Commission nationale de l'informatique et des libertés", url: "https://www.cnil.fr" },
    ],
  },
  {
    topic: "gdpr-beauty-salon",
    lang: "fr",
    slug: "rgpd-institut-de-beaute",
    title: "RGPD en institut de beauté : le guide pratique de mise en conformité",
    metaTitle: "RGPD en institut de beauté : guide pratique",
    description:
      "Données de santé, questionnaire, photos, SMS, durées de conservation, registre : ce que le RGPD impose concrètement aux instituts et cliniques esthétiques.",
    excerpt:
      "Questionnaires de santé, photos avant/après, rappels SMS : les obligations RGPD expliquées simplement, avec une checklist pour votre institut.",
    category: "RGPD & protection des données",
    keywords: [
      "RGPD institut de beauté",
      "RGPD esthéticienne",
      "données de santé institut",
      "CNIL institut de beauté",
      "registre des traitements institut",
      "RGPD clinique esthétique",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 9,
    answer:
      "Un institut de beauté doit respecter le RGPD dès qu'il collecte des données de clientes. Concrètement : informer les clientes, ne collecter que l'utile, obtenir un consentement explicite pour les données de santé du questionnaire et pour les photos publiées, limiter les durées de conservation, tenir un registre des traitements et choisir des prestataires qui hébergent les données de façon sécurisée, idéalement dans l'UE.",
    takeaways: [
      "Le questionnaire de santé contient des données sensibles : base légale, sécurité et accès limité sont indispensables.",
      "Le logiciel est votre sous-traitant : exigez un contrat conforme à l'article 28 du RGPD.",
      "Fixez une durée de conservation pour chaque type de donnée et supprimez ce qui n'est plus nécessaire.",
      "Publier une photo avant/après exige un accord distinct du consentement au soin.",
      "La CNIL est l'autorité de contrôle en France ; en Belgique c'est l'APD, au Luxembourg la CNPD.",
    ],
    intro: [
      "Coordonnées, historique des rendez-vous, allergies, traitements, photos du visage ou du corps : un institut de beauté manipule chaque jour des informations personnelles, dont certaines très sensibles. Le RGPD s'applique à vous, quelle que soit la taille de votre structure, que vous travailliez seule ou avec une équipe.",
      "Le sujet fait souvent peur, mais l'essentiel tient en quelques principes de bon sens. Ce guide traduit le RGPD en actions concrètes pour un institut, une onglerie, un bar à cils, un centre laser ou une clinique esthétique. Il ne remplace pas un conseil juridique, mais il vous donne une base solide.",
    ],
    sections: [
      {
        heading: "Quelles données un institut de beauté collecte-t-il ?",
        paragraphs: [
          "Faites d'abord l'inventaire. Vous collectez probablement plus de données que vous ne le pensez, sur plusieurs supports : agenda, téléphone, messagerie, fiches papier, logiciel.",
        ],
        table: {
          headers: ["Type de donnée", "Exemples", "Sensibilité"],
          rows: [
            ["Identification et contact", "Nom, téléphone, e-mail, date de naissance", "Standard"],
            ["Rendez-vous et achats", "Historique des soins, prestations, bons cadeaux", "Standard"],
            ["Données de santé", "Allergies, traitements, grossesse, pathologies cutanées", "Catégorie particulière (art. 9)"],
            ["Photos", "Avant/après, suivi de cicatrisation", "Élevée, parfois donnée de santé"],
            ["Préférences marketing", "Consentement aux SMS ou e-mails promotionnels", "Standard"],
          ],
        },
      },
      {
        heading: "Les informations du questionnaire de santé sont-elles des données sensibles ?",
        paragraphs: [
          "Oui. Les informations sur l'état de santé, comme une allergie, un traitement ou une grossesse, font partie des catégories particulières de données visées par l'article 9 du RGPD. Leur traitement est en principe interdit, sauf exceptions. En institut, l'exception la plus courante est le **consentement explicite** de la cliente, recueilli pour une finalité précise : la sécurité du soin.",
          "Concrètement, la cliente doit comprendre pourquoi vous lui posez ces questions et accepter clairement. Ces données ne doivent être accessibles qu'aux personnes qui réalisent le soin, et jamais utilisées à d'autres fins, par exemple marketing.",
        ],
        callout:
          "Clinique ou cabinet de médecine esthétique en France : les données de patients relèvent du secret médical, et leur hébergement par un prestataire est soumis à la certification HDS (hébergement de données de santé). Vérifiez la situation de votre logiciel pour votre activité.",
      },
      {
        heading: "Quelles sont les obligations concrètes du RGPD pour un institut ?",
        paragraphs: [
          "Voici la checklist à parcourir. La plupart des points se règlent en une après-midi et se revoient une fois par an.",
        ],
        steps: [
          "**Tenir un registre des traitements** : liste des traitements (gestion des rendez-vous, fiches clientes, prospection), finalités, données, durées, destinataires. La CNIL propose un modèle simplifié.",
          "**Informer les clientes** : une mention d'information claire sur le formulaire de réservation et une politique de confidentialité sur votre site.",
          "**Minimiser les données** : ne demander que ce qui sert réellement au soin.",
          "**Recueillir les bons consentements** : données de santé, utilisation des photos, messages promotionnels, chacun séparément.",
          "**Fixer des durées de conservation** et supprimer ou anonymiser ensuite.",
          "**Sécuriser l'accès** : mots de passe personnels, comptes séparés par collaboratrice, verrouillage des écrans, pas de fiches papier qui traînent à l'accueil.",
          "**Encadrer les prestataires** : contrat de sous-traitance avec votre logiciel, votre outil d'envoi de SMS, votre hébergeur.",
          "**Prévoir la gestion des demandes** : accès, rectification, effacement, opposition, dans un délai d'un mois.",
          "**Savoir réagir à une violation** : notifier la CNIL dans les 72 heures si la violation présente un risque pour les personnes.",
        ],
      },
      {
        heading: "Combien de temps conserver les données des clientes ?",
        paragraphs: [
          "Le RGPD ne fixe pas de durée universelle : c'est à vous de la définir et de la justifier selon la finalité. Quelques repères couramment admis peuvent vous guider ; documentez vos choix dans votre registre.",
        ],
        table: {
          headers: ["Donnée", "Repère de conservation", "Remarque"],
          rows: [
            ["Fiche cliente active", "Pendant la relation commerciale", "Mettre à jour régulièrement"],
            ["Prospection commerciale", "3 ans après le dernier contact de la cliente", "Repère recommandé par la CNIL"],
            ["Questionnaire de santé et consentements", "Durée justifiée par la sécurité et les réclamations possibles", "À définir avec votre assureur ou conseil"],
            ["Pièces comptables", "Selon les obligations comptables et fiscales", "Factures et justificatifs"],
            ["Dossier médical (médecine esthétique)", "Règles propres au dossier médical", "Se référer au cadre applicable aux médecins"],
          ],
        },
      },
      {
        heading: "Peut-on publier des photos avant/après sur Instagram ?",
        paragraphs: [
          "Seulement avec l'accord explicite et préalable de la cliente, distinct du consentement au soin. Une photo de visage ou de corps permet d'identifier une personne et peut révéler des informations sur sa santé (acné, cicatrices, pathologie cutanée).",
          "Rédigez une autorisation claire : quelles photos, sur quels supports (site, Instagram, publicité), pour quelle durée, et la possibilité de retirer son accord à tout moment. Les photos réalisées pour le suivi du soin restent dans la fiche et ne servent qu'à ce suivi. Sur les réseaux, recadrez autant que possible pour éviter d'identifier la cliente.",
        ],
      },
      {
        heading: "Rappels SMS, e-mails, WhatsApp : qu'est-ce qui est autorisé ?",
        paragraphs: [
          "Les confirmations et rappels de rendez-vous font partie du service demandé par la cliente : ils sont légitimes sans consentement marketing, à condition de ne pas contenir de publicité. Les messages promotionnels, eux, relèvent de la prospection commerciale.",
          "En France, la prospection électronique auprès des particuliers requiert en principe leur consentement préalable. Pour vos clientes existantes, vous pouvez leur proposer des services analogues à ceux déjà achetés, si elles ont été informées et ont pu s'y opposer simplement. Pour WhatsApp, veillez aussi à ne pas utiliser un téléphone personnel dont les contacts sont synchronisés sans contrôle.",
        ],
      },
      {
        heading: "Comment choisir un logiciel conforme au RGPD ?",
        paragraphs: [
          "Votre logiciel héberge l'essentiel de vos données clientes ; il doit vous faciliter la conformité, pas la compliquer.",
        ],
        bullets: [
          "Hébergement dans l'Union européenne et connexions chiffrées (SSL).",
          "Contrat de sous-traitance conforme à l'article 28 du RGPD.",
          "Sauvegardes régulières et possibilité d'exporter vos données.",
          "Droits d'accès par collaboratrice.",
          "Formulaires numériques avec consentements distincts et signature horodatée.",
        ],
        callout:
          "Treatflow héberge les données sur des serveurs dans l'Union européenne (Francfort), avec connexion SSL et sauvegardes quotidiennes. L'institut reste propriétaire de ses données clientes.",
      },
      {
        heading: "Et en Belgique, en Suisse et au Luxembourg ?",
        paragraphs: [
          "En Belgique et au Luxembourg, le RGPD s'applique de la même façon ; les autorités de contrôle sont respectivement l'Autorité de protection des données (APD) et la Commission nationale pour la protection des données (CNPD). En Suisse, c'est la loi fédérale sur la protection des données révisée (nLPD), en vigueur depuis septembre 2023, qui s'applique, sous le contrôle du Préposé fédéral à la protection des données et à la transparence (PFPDT). Ses principes sont proches du RGPD : transparence, proportionnalité, sécurité.",
        ],
      },
    ],
    faq: [
      {
        q: "Un institut doit-il désigner un délégué à la protection des données (DPO) ?",
        a: "En général non. La désignation est obligatoire notamment lorsque le traitement à grande échelle de données sensibles est une activité de base, ce qui n'est pas le cas d'un institut classique. Une personne référente en interne reste utile.",
      },
      {
        q: "Un registre des traitements est-il obligatoire pour un petit institut ?",
        a: "Dans la pratique, oui : l'exemption prévue pour les structures de moins de 250 personnes ne s'applique pas lorsque vous traitez des données de santé ou de manière régulière. La CNIL met à disposition un modèle simplifié.",
      },
      {
        q: "Une cliente peut-elle demander la suppression de sa fiche ?",
        a: "Oui, elle dispose d'un droit à l'effacement. Vous devez y répondre dans un délai d'un mois, sauf si une obligation légale vous impose de conserver certaines informations, comme les factures.",
      },
      {
        q: "Peut-on garder les fiches papier ?",
        a: "Oui, le RGPD s'applique aussi au papier. Elles doivent être rangées dans un meuble fermé, accessibles uniquement aux personnes autorisées et détruites à la fin de la durée de conservation.",
      },
      {
        q: "Que risque un institut qui ne respecte pas le RGPD ?",
        a: "La CNIL peut prononcer des mises en demeure et des sanctions financières, proportionnées à la gravité et à la taille de la structure. Le risque le plus concret reste souvent la perte de confiance des clientes après un incident.",
      },
      {
        q: "WhatsApp est-il conforme au RGPD pour échanger avec les clientes ?",
        a: "Pour des messages simples (rappel, confirmation), c'est courant. Évitez d'y échanger des données de santé ou des photos sensibles, et préférez un téléphone professionnel. Un logiciel qui envoie les rappels automatiquement limite ces échanges manuels.",
      },
    ],
    related: [
      { pageKey: "client-records", label: "Fiches clientes sécurisées" },
      { pageKey: "forms", label: "Formulaires et consentements" },
      { pageKey: "treatment-documentation", label: "Documentation des soins" },
    ],
    sources: [
      { label: "CNIL – Commission nationale de l'informatique et des libertés", url: "https://www.cnil.fr" },
      { label: "Règlement (UE) 2016/679 (RGPD) sur EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Autorité de protection des données (Belgique)", url: "https://www.autoriteprotectiondonnees.be" },
      { label: "CNPD (Luxembourg)", url: "https://cnpd.public.lu" },
      { label: "PFPDT (Suisse)", url: "https://www.edoeb.admin.ch" },
    ],
  },
];
