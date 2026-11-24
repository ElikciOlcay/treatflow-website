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
  // ---------------------------------------------------------------------------
  // 7. Calculer ses prix
  // ---------------------------------------------------------------------------
  {
    topic: "pricing-beauty-treatments",
    lang: "fr",
    slug: "calculer-prix-soins-institut-de-beaute",
    title: "Comment calculer le prix de vos soins en institut de beauté : la méthode pas à pas",
    metaTitle: "Calculer le prix de ses soins en institut de beauté",
    description:
      "Comment calculer le prix de vos soins esthétiques : taux horaire minimum, temps, produits et marge par prestation, concurrence et carte de soins claire.",
    excerpt:
      "Copier les tarifs de l'institut voisin n'est pas une stratégie. Voici le calcul de votre taux horaire, quatre exemples chiffrés et les clés d'une carte de soins qui inspire confiance.",
    category: "Gestion d'institut",
    keywords: [
      "calculer prix soin esthétique",
      "tarifs institut de beauté",
      "carte des soins institut",
      "taux horaire esthéticienne",
      "prix d'un soin visage",
      "stratégie de prix institut",
      "prix extension de cils",
    ],
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    readMinutes: 8,
    answer:
      "Le bon prix d'un soin se calcule à partir de vos coûts, puis se confronte au marché en dernier. Calculez d'abord votre taux horaire minimum : charges fixes mensuelles plus la rémunération dont vous avez besoin, divisées par les heures réellement facturables. Multipliez ce taux par le temps total que le soin immobilise (préparation et nettoyage compris), ajoutez les consommables et une marge de 10 à 20 %.",
    takeaways: [
      "Taux horaire minimum = (charges fixes + votre rémunération) ÷ heures facturables, bien moins nombreuses que vos heures d'ouverture.",
      "Facturez tout le temps où la cabine et la praticienne sont occupées, pas seulement les minutes sur la table de soin.",
      "Ajoutez les consommables de chaque prestation et une marge pour les réserves, les réparations et le développement.",
      "Les prix de la concurrence indiquent ce que le marché accepte, pas ce que vous devez gagner.",
      "Une carte claire, par niveaux et visible en ligne, rassure et facilite la montée en gamme.",
    ],
    intro: [
      "Beaucoup de gérantes fixent leurs tarifs une seule fois, à l'ouverture, en regardant ce que pratiquent les instituts du quartier. Quelques années plus tard, le loyer, les produits, l'énergie et les salaires ont augmenté, mais la carte n'a presque pas bougé. Le planning est plein, le compte en banque beaucoup moins. Être débordée et être rentable, ce n'est pas la même chose.",
      "Ce guide vous montre comment calculer des prix qui couvrent vos coûts et vous rémunèrent correctement. Il s'applique aux instituts de beauté, cabinets de médecine esthétique, ongleries, bars à cils, studios de maquillage permanent, centres d'épilation laser, spas et cabinets de massage. Les montants des exemples sont indicatifs : remplacez-les par vos chiffres et vous obtiendrez un prix plancher solide pour chaque prestation.",
    ],
    sections: [
      {
        heading: "Pourquoi tant d'instituts vendent-ils leurs soins trop bas ?",
        paragraphs: [
          "La raison la plus fréquente : les prix sont copiés, pas calculés. Vous ne connaissez ni le loyer, ni la masse salariale, ni les crédits de l'institut que vous prenez pour modèle. Vous héritez donc de ses hypothèses, et peut-être de ses pertes.",
          "La deuxième raison est la peur : peur de perdre les fidèles, de paraître chère, d'avoir des trous dans le planning. En pratique, une cliente qui revient pour le résultat et l'expérience part rarement à cause d'un prix raisonnable et bien expliqué. Celle qui ne cherche que le moins cher partira de toute façon vers la prochaine promotion.",
          "La troisième raison est le temps invisible. Un soin visage de 60 minutes, avec le questionnaire, la préparation de la cabine, le nettoyage, la désinfection et la mise à jour de la fiche cliente, vous occupe facilement 75 minutes. Si ce temps n'est pas dans le prix, vous le travaillez gratuitement.",
        ],
      },
      {
        heading: "Comment calculer votre taux horaire minimum ?",
        paragraphs: [
          "Votre taux horaire minimum est ce que chaque heure facturable doit rapporter pour couvrir toutes vos charges et vous verser une rémunération juste. Recalculez-le au moins une fois par an et dès qu'un poste important change, par exemple un nouveau bail ou un nouvel appareil.",
        ],
        steps: [
          "Additionnez vos charges fixes mensuelles : loyer, énergie, assurances, logiciel, marketing, expert-comptable, formation, crédit-bail des appareils et tout ce que vous payez, que les clientes viennent ou non.",
          "Fixez la rémunération dont vous avez besoin en tant que gérante, impôts et cotisations sociales compris. Si vous avez des salariées, ajoutez leur coût employeur complet.",
          "Calculez vos heures facturables : jours travaillés par mois × heures par jour, moins le temps d'administration, les pauses, le nettoyage entre deux clientes, les arrêts maladie et les creux du planning. Retirer 20 à 30 % est réaliste pour la plupart des instituts.",
          "Divisez charges fixes plus rémunération par les heures facturables : c'est votre taux horaire d'équilibre.",
          "Ajoutez une marge d'environ 10 à 20 % pour les réserves, les pannes, les mois calmes et les investissements.",
        ],
        table: {
          headers: ["Poste (exemple)", "Par mois"],
          rows: [
            ["Loyer", "900 €"],
            ["Énergie et eau", "150 €"],
            ["Assurances", "80 €"],
            ["Logiciel de gestion", "59 €"],
            ["Marketing", "200 €"],
            ["Expert-comptable", "120 €"],
            ["Formation", "100 €"],
            ["Crédit-bail appareils", "350 €"],
            ["Divers", "141 €"],
            ["**Total charges fixes**", "**2 100 €**"],
            ["Rémunération de la gérante, impôts et cotisations compris", "3 500 €"],
            ["Heures facturables (20 jours × 8 h moins 25 %)", "120 h"],
            ["Équilibre : 5 600 € ÷ 120 h", "46,67 €/h"],
            ["Taux cible avec 15 % de marge", "≈ 54 €/h"],
          ],
        },
        callout:
          "L'erreur la plus courante porte sur les heures facturables. Si vous calculez sur 160 heures alors que vous soignez réellement des clientes 110 heures, chaque prix de votre carte est trop bas d'environ un tiers.",
      },
      {
        heading: "Comment passer du taux horaire au prix d'un soin ?",
        paragraphs: [
          "Pour chaque prestation, prenez le temps total pendant lequel la cabine et la praticienne sont occupées, multipliez-le par votre taux cible et ajoutez les consommables utilisés : masques, ampoules, gel, cils, colle, aiguilles, matériel à usage unique. Si le crédit-bail de l'appareil figure déjà dans vos charges fixes, ne le comptez pas une seconde fois.",
          "Le résultat est votre prix plancher. Vous pouvez demander davantage, pour votre expérience, la demande ou une gamme de produits haut de gamme, mais vous ne devriez pas descendre en dessous de façon régulière.",
        ],
        table: {
          headers: ["Soin", "Temps immobilisé", "Temps × 54 €", "Consommables", "Prix plancher"],
          rows: [
            ["Soin visage classique", "75 min", "67,50 €", "8 €", "≈ 76 €"],
            ["Pose de vernis semi-permanent", "70 min", "63,00 €", "5 €", "≈ 68 €"],
            ["Extension de cils, pose complète", "130 min", "117,00 €", "12 €", "≈ 129 €"],
            ["Épilation laser des aisselles", "25 min", "22,50 €", "4 €", "≈ 27 €"],
          ],
        },
        bullets: [
          "Les soins courts sur appareil, comme le laser, se vendent souvent bien au-dessus de leur plancher horaire, en raison de l'investissement, de la formation et de la demande. C'est normal, tant que le plancher est couvert.",
          "Les soins longs avec peu de produits, comme les massages, sont ceux qui sont le plus souvent sous-évalués. Vérifiez-les en premier.",
        ],
      },
      {
        heading: "Quelle place accorder aux prix de la concurrence ?",
        paragraphs: [
          "Observez cinq à dix établissements auxquels votre cliente idéale vous comparerait réellement, pas tous les instituts de la ville. Notez les prix de vos trois ou quatre soins phares et le positionnement de chacun : entrée de gamme, milieu de gamme ou haut de gamme.",
          "Comparez ensuite avec votre prix plancher. Si le marché est nettement au-dessus, vous avez de la marge pour tarifer selon la valeur perçue. S'il est en dessous, la guerre des prix est une course perdue d'avance : mettez plutôt en avant ce qui vous distingue, comme la spécialisation, les résultats, une documentation rigoureuse, le confort ou la disponibilité, et fixez vos prix en conséquence.",
        ],
        bullets: [
          "Un positionnement d'entrée de gamme demande du volume et des process très rodés.",
          "Le milieu de gamme demande une expérience régulière et un bon taux de reprise de rendez-vous.",
          "Le haut de gamme demande une expertise visible, une consultation soignée et un parcours client irréprochable, de la réservation aux conseils post-soin.",
        ],
      },
      {
        heading: "Comment construire une carte de soins claire pour vos clientes ?",
        paragraphs: [
          "Une bonne carte aide à choisir vite et rend l'option la plus valorisante naturelle. Gardez-la courte, indiquez la durée à côté du prix et décrivez le résultat, pas seulement les étapes.",
        ],
        bullets: [
          "Proposez deux ou trois niveaux pour vos soins principaux, par exemple un soin visage de 45, 75 et 90 minutes. Quand les différences sont claires, beaucoup de clientes choisissent celui du milieu.",
          "Tarifez à part les options (contour des yeux, masque supplémentaire, paraffine, nail art) pour permettre une montée en gamme sans remise sur le soin principal.",
          "Regroupez les cures, comme les séances de laser ou les programmes visage, en forfaits avec un nombre de séances défini et un avantage modéré.",
          "Décidez si le bilan initial est offert, payant ou déduit du premier soin, et annoncez-le clairement.",
          "Affichez des prix TTC ; si vous êtes en franchise en base de TVA, voyez avec votre expert-comptable la mention à faire figurer. Réservez les prix « à partir de » aux soins dont le montant dépend vraiment de la zone ou de la longueur.",
          "Utilisez partout les mêmes prix : site, page de réservation en ligne, Instagram et institut.",
        ],
        callout:
          "Dans la réservation en ligne, chaque prestation a sa durée et son prix : la cliente voit ce qu'elle réserve avant de confirmer. Avec Treatflow, la page de réservation est sur votre propre lien et aucune commission n'est prélevée sur les rendez-vous, seulement un abonnement fixe de 39 ou 59 € par mois, avec 14 jours d'essai gratuit sans carte bancaire.",
      },
      {
        heading: "Quand et comment augmenter vos prix ?",
        paragraphs: [
          "Refaites votre calcul au moins une fois par an et après chaque hausse importante de vos charges. De petites hausses régulières passent beaucoup mieux qu'un gros saut après plusieurs années.",
        ],
        steps: [
          "Recalculez votre taux horaire avec vos charges actuelles et comparez chaque soin à son prix plancher.",
          "Annoncez les nouveaux tarifs quatre à six semaines à l'avance, par e-mail, par message et en institut.",
          "Donnez une raison courte et honnête, comme la hausse des produits, de l'énergie ou de la formation, sans vous excuser.",
          "Maintenez l'ancien prix pour les rendez-vous déjà pris afin que personne ne se sente piégée.",
          "Préparez votre équipe pour que chacune réponde aux questions avec le même calme.",
        ],
      },
      {
        heading: "Quelles erreurs de prix coûtent le plus cher à un institut ?",
        paragraphs: [
          "La plupart des problèmes de prix viennent de quelques habitudes qui s'installent avec le temps. Une fois par an, passez votre carte au crible de cette liste.",
        ],
        bullets: [
          "Des offres de bienvenue qui ne s'arrêtent jamais et habituent les clientes à attendre les remises.",
          "Des réductions personnelles accordées sur le moment, jamais notées, qui deviennent la norme.",
          "Oublier la préparation, le nettoyage et la documentation dans la durée des soins.",
          "N'avoir aucune règle pour les annulations tardives et les rendez-vous non honorés, si bien que chaque créneau vide est à votre charge.",
          "Ne rien augmenter pendant des années, puis augmenter fortement d'un coup.",
          "Ne jamais vérifier quelles prestations rapportent vraiment et lesquelles remplissent seulement le planning.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment calculer le prix d'un soin esthétique ?",
        a: "Calculez d'abord votre taux horaire : charges fixes mensuelles plus votre rémunération, divisées par vos heures facturables réelles, plus 10 à 20 % de marge. Multipliez-le par le temps total du soin, préparation et nettoyage compris, puis ajoutez les consommables. Vous obtenez votre prix plancher.",
      },
      {
        q: "Quel prix pour un soin du visage en institut ?",
        a: "Il n'existe pas de prix unique : loyers, salaires et positionnement varient d'une ville à l'autre. Avec un taux d'exemple de 54 € de l'heure et 75 minutes de temps immobilisé, un soin visage classique devrait coûter au moins 76 € environ. Faites le calcul avec vos chiffres, puis comparez avec les instituts entre lesquels vos clientes hésitent.",
      },
      {
        q: "Puis-je simplement m'aligner sur les prix de la concurrence ?",
        a: "Utilisez les prix des concurrents comme contrôle du marché, pas comme point de départ. Vous ne connaissez ni leurs charges ni leur rentabilité. Si votre plancher dépasse le marché local, travaillez votre positionnement plutôt que de vendre à perte.",
      },
      {
        q: "Faut-il afficher ses prix en ligne ?",
        a: "Dans la plupart des cas, oui. Des prix visibles réduisent les messages « c'est combien ? », filtrent les clientes qui ne vous correspondent pas et facilitent la réservation en ligne. Quand le prix dépend de la zone ou de la longueur, indiquez un « à partir de » clair et expliquez ce qui détermine le montant final.",
      },
      {
        q: "À quelle fréquence augmenter les prix d'un institut ?",
        a: "Revoyez vos prix au moins une fois par an et après toute hausse importante des charges. Un ajustement annuel modéré, annoncé quelques semaines à l'avance, est généralement bien mieux accepté qu'une forte hausse après des années sans changement.",
      },
    ],
    related: [
      { pageKey: "pricing", label: "Tarifs de Treatflow" },
      { pageKey: "client-records", label: "Fiches clientes" },
      { pageKey: "features", label: "Toutes les fonctionnalités" },
    ],
  },
  // ---------------------------------------------------------------------------
  // 8. Politique d'annulation institut de beauté
  // ---------------------------------------------------------------------------
  {
    topic: "cancellation-policy-salon",
    lang: "fr",
    slug: "politique-annulation-institut-de-beaute",
    title: "Politique d'annulation en institut de beauté : délais, frais, arrhes ou acompte et modèle",
    metaTitle: "Politique d'annulation institut de beauté : modèle",
    description:
      "Rédiger la politique d'annulation de votre institut : délais, frais en cas d'annulation tardive ou de rendez-vous non honoré, arrhes ou acompte, et un modèle.",
    excerpt:
      "Une politique d'annulation ne protège votre chiffre d'affaires que si la cliente la voit avant de réserver et que vous l'appliquez toujours de la même façon. Délais, montants, arrhes ou acompte, modèle et formulations.",
    category: "Gestion",
    keywords: [
      "politique d'annulation institut de beauté",
      "rendez-vous non honoré institut",
      "frais d'annulation esthéticienne",
      "arrhes ou acompte institut de beauté",
      "acompte réservation esthétique",
      "conditions générales institut de beauté",
      "no show institut de beauté",
    ],
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readMinutes: 8,
    answer:
      "Une bonne politique d'annulation en institut de beauté indique jusqu'à quand la cliente peut annuler gratuitement (souvent 24 ou 48 heures avant), des frais modérés en cas d'annulation tardive (souvent 50 % du prix du soin) et un montant plus élevé en cas de rendez-vous non honoré (jusqu'au prix total ou la perte des arrhes). Elle ne fonctionne que si la cliente la connaît avant de réserver, la reçoit par écrit et que vous l'appliquez avec constance, en laissant de la place aux vraies urgences.",
    takeaways: [
      "La cliente doit voir et accepter la politique avant de réserver, pas la découvrir après coup.",
      "Adaptez délai et montant au soin : un rehaussement de cils de 45 minutes n'est pas une pose complète de trois heures.",
      "Arrhes et acompte n'ont pas les mêmes effets : précisez toujours par écrit lequel vous demandez.",
      "Les frais doivent compenser une perte réelle, pas sanctionner ; un montant modéré est bien plus défendable.",
      "Rappels, report facile et liste d'attente évitent plus de pertes que n'importe quels frais d'annulation.",
    ],
    intro: [
      "Une cliente qui annule deux heures avant un soin du visage de 90 minutes laisse dans votre planning un trou que vous ne comblerez presque jamais. L'esthéticienne est payée quand même, les produits sont parfois déjà préparés. Trois ou quatre fois par mois, et la perte atteint vite plusieurs centaines d'euros. Pourtant, beaucoup de gérantes n'osent rien facturer, de peur de perdre leurs fidèles ou de paraître commerçantes.",
      "Vous n'avez pas à choisir entre bienveillance et rentabilité. Une politique d'annulation claire et juste protège votre planning et simplifie aussi la vie des clientes, qui connaissent les règles dès le départ. Ce guide vous explique quoi écrire, quels délais et montants sont raisonnables, comment utiliser arrhes ou acompte et comment appliquer la règle sans abîmer la relation. Il s'agit de conseils pratiques, pas d'un avis juridique.",
    ],
    sections: [
      {
        heading: "Un institut de beauté peut-il facturer un rendez-vous non honoré ?",
        paragraphs: [
          "En principe, oui. Lorsqu'une cliente réserve un créneau précis, un contrat se forme et vous bloquez un temps que vous ne pouvez pas vendre à quelqu'un d'autre. Si elle ne vient pas ou annule trop tard pour que vous puissiez réattribuer le créneau, demander une compensation est légitime.",
          "Deux conditions comptent. D'abord, la cliente doit connaître vos conditions avant de réserver : des frais annoncés après coup sont très difficiles à défendre. Ensuite, le montant doit être proportionné. Le Code de la consommation interdit les clauses abusives, c'est-à-dire celles qui créent un déséquilibre significatif au détriment du consommateur, comme une indemnité manifestement disproportionnée. Des frais liés à votre perte réelle, temps bloqué et produits préparés, tiennent bien mieux qu'une somme forfaitaire élevée.",
        ],
        callout:
          "Si vous souhaitez appliquer des frais élevés ou conserver des sommes importantes, faites relire une fois vos conditions générales par un juriste ou votre organisation professionnelle.",
      },
      {
        heading: "Arrhes ou acompte : que demander en institut ?",
        paragraphs: [
          "C'est la question la plus fréquente, et la différence est importante. Selon le Code de la consommation, **sauf stipulation contraire, les sommes versées d'avance sont des arrhes**. Avec des arrhes, la cliente peut renoncer au rendez-vous en les perdant, et si c'est l'institut qui annule, il doit rembourser le double. Un **acompte** engage fermement les deux parties : en principe, la cliente reste redevable du prix et ne peut pas se dégager simplement en abandonnant la somme versée.",
          "Pour un institut, les arrhes sont souvent la solution la plus simple et la plus lisible pour les clientes. Si vous voulez parler d'acompte, écrivez-le explicitement dans vos conditions et dans la confirmation de réservation.",
        ],
        table: {
          headers: ["", "Arrhes", "Acompte"],
          rows: [
            ["La cliente ne vient pas", "Elle perd les arrhes", "Elle reste en principe redevable du prix"],
            ["L'institut annule", "Il rembourse le double des arrhes", "Il rembourse et peut devoir indemniser"],
            ["Le rendez-vous a lieu", "Déduites du prix", "Déduit du prix"],
            ["Par défaut si rien n'est précisé", "Oui", "Non, doit être écrit"],
          ],
        },
      },
      {
        heading: "Que doit contenir la politique d'annulation d'un institut de beauté ?",
        paragraphs: [
          "Une règle comprise en dix secondes fonctionne beaucoup mieux qu'une page de jargon juridique. Prévoyez, en termes simples :",
        ],
        bullets: [
          "Le délai d'annulation ou de report gratuit, par exemple jusqu'à 24 heures avant.",
          "Les frais en cas d'annulation tardive, par exemple 50 % du prix du soin.",
          "Ce qui s'applique en cas de rendez-vous non honoré sans prévenir, par exemple le prix total ou la perte des arrhes.",
          "La règle en cas de retard, par exemple au-delà de 15 minutes, le soin peut être écourté.",
          "Comment annuler : lien dans l'e-mail de confirmation, téléphone ou message.",
          "Comment vous traitez les urgences, comme une maladie ou un accident.",
          "Le ton : parlez de « conditions de réservation » plutôt que de « pénalités ». La même règle est alors perçue tout autrement.",
        ],
      },
      {
        heading: "Quel délai et quels frais sont justes selon le soin ?",
        paragraphs: [
          "Il n'existe pas de chiffre universel. Tout dépend du temps bloqué dans le planning, du prix du soin et de vos chances de remplir le créneau au dernier moment. Beaucoup d'instituts appliquent un modèle par paliers :",
        ],
        table: {
          headers: ["Type de soin", "Annulation gratuite", "Annulation tardive", "Rendez-vous non honoré"],
          rows: [
            ["Courts, moins de 30 min (sourcils, teinture, épilation rapide)", "12–24 h", "Souvent aucun frais ou petit forfait", "50 %"],
            ["Standards, 45–90 min (soin visage, manucure, massage)", "24 h", "50 %", "100 %"],
            ["Longs ou coûteux (extensions de cils, maquillage permanent, cure laser, mariée)", "48 h", "50–100 %", "Perte des arrhes"],
            ["Groupes et événements", "72 h ou plus", "Selon accord", "Perte des arrhes"],
          ],
        },
        callout:
          "Si le créneau est finalement repris après une annulation tardive, renoncez aux frais ou réduisez-les. C'est juste, cela crée de la confiance et, concrètement, vous n'avez rien perdu.",
      },
      {
        heading: "Modèle de politique d'annulation pour votre institut",
        paragraphs: [
          "Voici un texte à adapter. Changez les chiffres et gardez un ton chaleureux mais clair :",
          "**« Nous réservons le temps de votre rendez-vous rien que pour vous. Vous pouvez annuler ou déplacer votre rendez-vous gratuitement jusqu'à 24 heures avant. En cas d'annulation moins de 24 heures avant, nous facturons 50 % du prix du soin ; en cas d'absence sans prévenir, le prix total. Pour les soins de plus de deux heures, des arrhes sont demandées à la réservation : elles sont déduites du prix et conservées en cas d'annulation moins de 48 heures avant. Au-delà de 15 minutes de retard, le soin pourra être écourté. En cas de véritable urgence, appelez-nous : nous trouverons ensemble une solution. »**",
          "Reprenez cette phrase dans vos conditions générales et faites-la apparaître avant la réservation.",
        ],
      },
      {
        heading: "Comment s'assurer que les clientes voient vraiment vos conditions ?",
        paragraphs: [
          "La plupart des litiges ne portent pas sur le montant mais sur le « je ne savais pas ». Intégrez votre politique à chaque étape de la réservation :",
        ],
        steps: [
          "Publiez-la sur votre site, près des tarifs ou de la réservation, et faites un lien depuis votre page de réservation en ligne.",
          "Mentionnez-la dans la description des soins longs ou coûteux, où les règles sont plus strictes.",
          "Répétez la phrase clé dans la confirmation, avec la date, l'heure et la façon d'annuler.",
          "Reprenez-la dans le rappel par e-mail 24 à 48 heures avant, quand l'annulation gratuite est encore possible.",
          "Pour les réservations par téléphone ou à l'accueil, dites-la en une phrase et notez dans la fiche cliente que c'est fait.",
          "Affichez une version courte à l'accueil pour qu'elle ne soit jamais une surprise.",
        ],
      },
      {
        heading: "Comment appliquer la règle sans perdre de clientes ?",
        paragraphs: [
          "C'est la constance qui rend une règle juste. Si une cliente paie et la suivante non, les deux le remarquent. En même temps, être stricte avec une fidèle de dix ans pour sa toute première absence est rarement une bonne idée. Fixez votre façon de faire à l'avance, pour qu'elle ne dépende ni de l'humeur ni de la personne à l'accueil.",
        ],
        steps: [
          "Notez chaque annulation tardive et chaque absence dans la fiche cliente, avec la date et le motif.",
          "Première fois pour une bonne cliente : pas de frais, mais un rappel aimable de la règle.",
          "Deuxième fois : appliquez les frais prévus, avec un message court et cordial.",
          "Absences répétées : demandez des arrhes pour les prochains rendez-vous.",
          "Vraies urgences, comme une maladie soudaine ou un accident : proposez un report plutôt que des frais.",
        ],
        callout:
          "Une formulation qui fonctionne : « Vous nous avez manqué aujourd'hui, nous espérons que tout va bien. Comme indiqué dans nos conditions de réservation, nous facturons 50 % pour les annulations de dernière minute. Souhaitez-vous reprendre rendez-vous tout de suite ? Nous avons une place jeudi. » Calme, factuel et tourné vers la prochaine visite.",
      },
      {
        heading: "Comment un logiciel pour institut de beauté aide-t-il à limiter les annulations ?",
        paragraphs: [
          "Les meilleurs frais d'annulation sont ceux que vous n'avez jamais à facturer. Un logiciel de gestion aide à prévenir les annulations et à mieux gérer celles qui restent. Avec Treatflow, vos clientes réservent depuis votre propre lien sans commission, un rappel par e-mail part automatiquement avant chaque rendez-vous et les créneaux libérés peuvent être proposés aux clientes en liste d'attente. Les notes dans la fiche cliente montrent à toute l'équipe qui a déjà annulé tardivement, pour que la règle soit appliquée de la même manière par toutes. Les données sont hébergées sur des serveurs dans l'UE à Francfort, conformément au RGPD.",
          "Vous pouvez l'essayer gratuitement pendant 14 jours, sans carte bancaire, et vérifier si vos annulations tardives et rendez-vous non honorés diminuent.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien facturer pour un rendez-vous non honoré en institut ?",
        a: "Beaucoup d'instituts facturent 50 % du prix pour une annulation tardive et jusqu'à 100 % pour une absence sans prévenir. Pour les soins courts, un petit forfait est souvent plus juste. Le montant doit refléter votre perte réelle et ne pas être disproportionné.",
      },
      {
        q: "Arrhes ou acompte : que choisir ?",
        a: "Sans précision, les sommes versées d'avance sont des arrhes : la cliente qui annule les perd, l'institut qui annule rembourse le double. L'acompte engage fermement les deux parties. Pour un institut, les arrhes sont souvent plus simples ; dans tous les cas, écrivez clairement lequel vous demandez.",
      },
      {
        q: "Faut-il prévoir 24 ou 48 heures de délai ?",
        a: "24 heures conviennent à la plupart des soins. Prévoyez 48 heures pour les rendez-vous longs ou coûteux, comme une pose complète de cils, un maquillage permanent ou une mise en beauté de mariée, difficiles à remplacer au dernier moment.",
      },
      {
        q: "Puis-je facturer si la cliente ne connaissait pas mes conditions ?",
        a: "C'est délicat. Sans preuve que la cliente a vu vos conditions avant de réserver, votre position est faible. Affichez la politique lors de la réservation, dans la confirmation et dans le rappel.",
      },
      {
        q: "Ai-je le droit de noter les absences dans la fiche cliente ?",
        a: "Oui, une note courte et factuelle sur les rendez-vous non honorés fait partie de la gestion des réservations. Selon le RGPD, ne conservez que l'essentiel et mentionnez-le dans votre politique de confidentialité ; la CNIL propose des guides pour les petites entreprises.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Réservation en ligne avec votre propre lien" },
      { pageKey: "messaging", label: "Rappels automatiques par e-mail" },
      { pageKey: "appointment-calendar", label: "Calendrier des rendez-vous" },
    ],
    sources: [
      {
        label: "EUR-Lex : directive 93/13/CEE concernant les clauses abusives dans les contrats conclus avec les consommateurs",
        url: "https://eur-lex.europa.eu/eli/dir/1993/13/oj",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // 9. Avis Google institut de beauté
  // ---------------------------------------------------------------------------
  {
    topic: "google-reviews-salon",
    lang: "fr",
    slug: "avis-google-institut-de-beaute",
    title: "Avis Google pour institut de beauté : comment obtenir plus d'avis (et de meilleurs)",
    metaTitle: "Avis Google institut de beauté : en obtenir plus",
    description:
      "Comment avoir plus d'avis Google pour votre institut : quand et comment demander, lien direct, modèle d'e-mail, règles à respecter et réponse aux avis négatifs.",
    excerpt:
      "Les avis Google décident souvent si une nouvelle cliente réserve chez vous ou chez l'institut d'à côté. Voici comment les demander au bon moment, ce qui est interdit et comment répondre aux critiques.",
    category: "Marketing",
    keywords: [
      "avis google institut de beauté",
      "comment avoir plus d'avis google",
      "demander un avis google client",
      "lien avis google",
      "répondre à un avis négatif exemple",
      "faux avis google interdiction",
      "logiciel institut de beauté",
    ],
    publishedAt: "2026-11-17",
    updatedAt: "2026-11-17",
    readMinutes: 8,
    answer:
      "Pour obtenir plus d'avis Google, demandez-les systématiquement à toutes vos clientes, juste après le soin en personne puis par un court e-mail de suivi le jour même ou le lendemain, avec un lien direct vers le formulaire d'avis de votre fiche Google. Ne proposez jamais de remise ou de cadeau en échange, n'achetez pas de faux avis et répondez à chaque avis, surtout aux négatifs, de façon calme et professionnelle.",
    takeaways: [
      "La note moyenne compte, mais aussi le nombre d'avis, leur fraîcheur, leur contenu et vos réponses.",
      "Le meilleur moment pour demander un avis, c'est juste après le soin, quand la cliente se regarde dans le miroir.",
      "Un lien direct vers le formulaire d'avis supprime presque toute friction : imprimez-le en QR code et ajoutez-le à vos e-mails.",
      "Faux avis, avis achetés, cadeaux en échange d'un avis et sollicitation des seules clientes satisfaites sont interdits.",
      "Un avis négatif bien traité rassure souvent plus qu'une page remplie de cinq étoiles.",
    ],
    intro: [
      "Quand une femme cherche « épilation laser près de chez moi » ou « extension de cils » sur son téléphone, elle ne visite pas dix sites. Elle regarde la carte Google, compare les étoiles, lit trois ou quatre avis récents et réserve. Votre fiche Google est devenue votre vitrine la plus consultée, souvent avant même votre site ou votre compte Instagram.",
      "Pourtant, beaucoup d'instituts de beauté, d'ongleries ou de centres de médecine esthétique n'ont qu'une poignée d'avis, parfois vieux de plusieurs années, alors que leurs clientes sont ravies. La raison est presque toujours la même : on ne leur demande pas, ou pas au bon moment. Ce guide vous montre comment mettre en place une routine simple et conforme aux règles, avec des phrases et un modèle d'e-mail prêts à l'emploi. Il s'agit de conseils pratiques, pas d'un avis juridique.",
    ],
    sections: [
      {
        heading: "Pourquoi les avis Google sont-ils si importants pour un institut de beauté ?",
        paragraphs: [
          "D'abord pour la **visibilité locale**. Dans les résultats de recherche locale et sur Google Maps, Google tient compte de la pertinence, de la distance et de la notoriété d'un établissement. Les avis font partie de ce qui forme cette notoriété : un institut avec des avis nombreux, récents et détaillés a plus de chances d'apparaître dans le bloc de résultats sur la carte.",
          "Ensuite pour la **confiance**. Un soin esthétique touche au visage, au corps, parfois à la santé. Avant de confier ses sourcils à une dermopigmentiste ou sa peau à un laser, une nouvelle cliente veut savoir si d'autres ont été satisfaites, si l'hygiène est irréprochable et si l'accueil est chaleureux. Les avis répondent à ces questions mieux que n'importe quel texte publicitaire, parce qu'ils viennent d'autres clientes.",
          "Enfin, les avis sont une source d'informations gratuite pour vous : ce que les clientes mettent en avant spontanément, comme la douceur d'une esthéticienne ou la ponctualité, vous dit ce qui fait votre différence.",
        ],
      },
      {
        heading: "Qu'est-ce qui compte vraiment dans les avis Google ?",
        paragraphs: [
          "Une note de 5,0 sur quatre avis impressionne moins qu'une note de 4,8 sur 150 avis. Les futures clientes, comme Google, regardent l'ensemble du tableau :",
        ],
        bullets: [
          "**La note moyenne** : au-dessus de 4,5, vous rassurez ; une note parfaite avec très peu d'avis peut même paraître suspecte.",
          "**Le nombre d'avis** : il montre que beaucoup de clientes sont passées chez vous et donne du poids à la moyenne.",
          "**La fraîcheur** : des avis du mois dernier prouvent que l'institut est actif et que la qualité est toujours là.",
          "**Le contenu** : un avis qui cite le soin (« rehaussement de cils », « soin visage hydratant », « pose gel ») aide les lectrices et donne des indices à Google sur vos prestations.",
          "**Vos réponses** : un établissement qui remercie et répond aux critiques montre qu'il écoute ses clientes.",
        ],
        callout:
          "Visez la régularité plutôt que les coups d'éclat : quelques nouveaux avis chaque mois valent mieux que trente avis en une semaine, puis plus rien pendant un an.",
      },
      {
        heading: "Quand et comment demander un avis Google à une cliente ?",
        paragraphs: [
          "Le bon moment, c'est quand la satisfaction est la plus forte : à la fin du soin, devant le miroir, quand la cliente découvre ses ongles ou ses cils. À ce moment-là, une demande orale paraît naturelle. Mais la plupart des clientes n'écrivent pas l'avis sur-le-champ. Un rappel écrit le jour même ou le lendemain fait souvent toute la différence.",
          "La clé, c'est de réduire l'effort au minimum. Personne ne veut chercher votre institut dans Google Maps, faire défiler la fiche et trouver le bouton. Il faut un **lien direct** qui ouvre immédiatement le formulaire d'avis.",
        ],
        steps: [
          "Ouvrez votre Profil d'entreprise Google (votre fiche d'établissement) et utilisez la fonction pour demander des avis : Google vous fournit un lien court à partager, et l'interface propose généralement aussi un QR code.",
          "Testez le lien sur votre propre téléphone, connecté et déconnecté de votre compte Google.",
          "Imprimez le QR code sur un petit chevalet à l'accueil ou en cabine, avec une phrase comme « Votre avis nous aide beaucoup ».",
          "Formez toute l'équipe à poser la question à la fin du soin, avec une phrase simple et naturelle.",
          "Envoyez un court e-mail de suivi le jour même ou le lendemain, avec le lien direct.",
          "Ajoutez le lien dans votre signature d'e-mail et sur votre site, sur la page de contact ou de réservation.",
        ],
      },
      {
        heading: "Que dire à la cliente ? Phrases et modèle d'e-mail prêts à l'emploi",
        paragraphs: [
          "Évitez la formule récitée. Une phrase sincère et courte suffit, adaptée à votre style :",
        ],
        bullets: [
          "« Je suis contente que le résultat vous plaise ! Si vous avez deux minutes, un avis sur Google nous aiderait énormément. »",
          "« Nous sommes un petit institut, et ce sont surtout les avis qui nous font connaître. Le QR code est juste ici, à l'accueil. »",
          "« Vous recevrez demain un petit e-mail avec vos conseils après-soin et le lien pour laisser un avis, si vous le souhaitez. »",
        ],
        steps: [
          "Objet : « Merci pour votre visite, [Prénom] ! »",
          "« Bonjour [Prénom], merci d'être venue aujourd'hui pour votre [soin] chez [Nom de l'institut]. Pour profiter au mieux du résultat, voici nos conseils pour les prochains jours : [2 ou 3 conseils après-soin]. »",
          "« Votre expérience nous intéresse vraiment. Si vous avez un instant, vous pouvez la partager sur Google, que vous ayez tout aimé ou que quelque chose puisse être amélioré : [lien direct vers les avis]. »",
          "« Une question ou une gêne après le soin ? Répondez simplement à cet e-mail, nous vous recontacterons rapidement. À bientôt, [Prénom de l'esthéticienne] »",
          "En pied de message : vos coordonnées et un lien de désinscription bien visible.",
        ],
        callout:
          "Associer la demande d'avis à des conseils après-soin rend l'e-mail utile pour la cliente, et pas seulement pour vous. Le message paraît moins commercial et il est davantage lu.",
      },
      {
        heading: "Qu'est-ce qui est autorisé et interdit pour obtenir des avis ?",
        paragraphs: [
          "Les règles viennent de deux côtés. D'une part, la **directive Omnibus (UE) 2019/2161**, transposée en France dans le Code de la consommation, range parmi les pratiques commerciales trompeuses le fait de publier ou de faire publier de faux avis, ou de déformer des avis de consommateurs. La DGCCRF contrôle ces pratiques et peut sanctionner. Si vous affichez des avis sur votre propre site, vous devez aussi indiquer si et comment vous vérifiez qu'ils proviennent de vraies clientes. D'autre part, le règlement de Google interdit notamment les contenus faux, les conflits d'intérêts et les incitations. Google peut supprimer des avis, voire restreindre une fiche.",
        ],
        table: {
          headers: ["Autorisé", "Interdit"],
          rows: [
            ["Demander un avis à toutes vos clientes, oralement ou par e-mail", "Acheter des avis ou passer par une agence qui en « fournit »"],
            ["Partager un lien direct ou un QR code vers le formulaire d'avis", "Offrir une remise, un soin ou un cadeau en échange d'un avis"],
            ["Rappeler une fois la demande, sans insister", "Ne solliciter que les clientes satisfaites et éviter les autres"],
            ["Répondre publiquement à tous les avis, positifs et négatifs", "Faire écrire des avis par vos salariées, votre famille ou vos amis"],
            ["Signaler à Google un avis qui enfreint ses règles", "Rédiger des avis sur un concurrent ou les faire rédiger"],
            ["Citer des avis réels sur votre site en précisant leur origine", "Supprimer ou modifier des avis négatifs sur votre site pour embellir la note"],
          ],
        },
        callout:
          "Un jeu-concours du type « laissez un avis et gagnez un soin » est aussi une incitation. Même bien intentionné, il expose votre fiche à une suppression d'avis par Google.",
      },
      {
        heading: "Comment répondre à un avis négatif ? Exemple de réponse",
        paragraphs: [
          "Un avis négatif fait mal, surtout quand on s'est investie. Mais votre réponse ne s'adresse pas seulement à la cliente mécontente : elle est lue par toutes les futures clientes. Elles regardent surtout comment vous réagissez. Attendez quelques heures pour répondre à froid, puis suivez cette structure :",
        ],
        steps: [
          "Remerciez pour le retour, sans ironie.",
          "Reconnaissez la déception, sans vous justifier longuement ni accuser la cliente.",
          "Restez discrète : ne citez aucun détail du dossier, du soin ou de la santé de la cliente. En médecine esthétique, ne confirmez même pas publiquement qu'il s'agit d'une patiente.",
          "Proposez de poursuivre l'échange en privé, par téléphone ou par e-mail.",
          "Si c'est pertinent, indiquez ce que vous avez changé.",
        ],
        bullets: [
          "Exemple : « Bonjour Julie, merci d'avoir pris le temps de partager votre avis. Nous sommes sincèrement désolées que votre visite n'ait pas été à la hauteur de vos attentes, notamment pour l'attente à votre arrivée. Ce n'est pas l'expérience que nous souhaitons offrir. Nous aimerions en parler avec vous : pouvez-vous nous appeler au [numéro] ou écrire à [e-mail] ? Nous trouverons ensemble une solution. L'équipe de [Nom de l'institut] »",
          "Pour les avis positifs, une réponse courte et personnalisée suffit : remerciez, citez le soin si la cliente l'a mentionné elle-même et dites que vous serez ravies de la revoir.",
        ],
      },
      {
        heading: "Peut-on faire supprimer un avis Google injuste ?",
        paragraphs: [
          "Vous ne pouvez pas supprimer vous-même un avis, et Google ne retire pas un avis simplement parce qu'il est négatif. En revanche, vous pouvez signaler un avis qui enfreint le règlement de Google : propos injurieux ou discriminatoires, faux avis, avis d'un concurrent, contenu sans rapport avec votre établissement, données personnelles, conflit d'intérêts.",
        ],
        steps: [
          "Depuis votre Profil d'entreprise Google ou Google Maps, ouvrez l'avis et choisissez de le signaler, en indiquant le motif le plus précis possible.",
          "Faites une capture d'écran de l'avis et notez la date.",
          "Vérifiez dans vos rendez-vous et vos fiches clientes si la personne est bien venue chez vous.",
          "Si l'avis reste en ligne, utilisez l'outil de gestion des avis de Google pour suivre votre signalement et, si possible, demander un nouvel examen.",
          "En attendant, répondez publiquement de façon factuelle et courtoise, par exemple : « Nous ne retrouvons aucune visite à ce nom ; contactez-nous pour que nous puissions comprendre. »",
        ],
        callout:
          "Pour un avis manifestement diffamatoire ou une série d'avis malveillants, rapprochez-vous de votre organisation professionnelle ou d'un avocat.",
      },
      {
        heading: "Comment automatiser les demandes d'avis tout en respectant le RGPD ?",
        paragraphs: [
          "Envoyer un e-mail de suivi à vos clientes existantes est courant, mais le RGPD et les règles sur la prospection électronique s'appliquent. Selon la CNIL, vous pouvez écrire par e-mail à vos clientes pour des services analogues à ceux qu'elles ont achetés, à condition qu'elles aient été informées lors de la collecte de leur adresse et qu'elles puissent s'y opposer simplement. Un e-mail de suivi lié au soin reçu, avec conseils après-soin et demande d'avis, s'inscrit dans cette logique.",
          "La meilleure méthode est celle que vous appliquez à chaque cliente, même les jours de rush. C'est là qu'un logiciel de gestion fait gagner du temps. Avec Treatflow, un e-mail de suivi part automatiquement après le soin, avec vos conseils après-soin et une demande de retour dans laquelle vous ajoutez le lien vers vos avis Google. Les parcours clients automatisés permettent d'enchaîner plusieurs e-mails avec des délais et des conditions, par exemple ne plus relancer une cliente qui a déjà repris rendez-vous.",
          "Vos clientes réservent sans commission via votre propre lien de réservation, reçoivent leurs rappels par e-mail et, si vous le souhaitez, trouvent un site d'institut sur mesure, adapté au mobile et pensé pour la réservation, où vous pouvez aussi placer votre lien d'avis. Les notes dans la fiche cliente indiquent à toute l'équipe qui ne souhaite pas recevoir d'e-mails. Les automatisations, les rappels et la réservation en ligne font partie de la formule Booking (59 €/mois HT) ; la formule Basic est à 39 €/mois HT. Vous pouvez tester gratuitement pendant 14 jours, sans carte bancaire.",
        ],
        bullets: [
          "Mentionnez les e-mails de suivi dans votre politique de confidentialité et lors de la prise de rendez-vous.",
          "Ajoutez à chaque e-mail un lien de désinscription simple, et respectez-le immédiatement.",
          "Envoyez une seule demande par visite, éventuellement un rappel unique, jamais une série de relances.",
          "N'utilisez pas les adresses de clientes qui se sont opposées aux e-mails, et notez ce refus dans la fiche cliente.",
          "Ne mentionnez pas d'informations de santé sensibles dans l'objet de l'e-mail.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment avoir plus d'avis Google pour mon institut ?",
        a: "Demandez un avis à chaque cliente à la fin du soin, envoyez un e-mail de suivi le jour même ou le lendemain avec un lien direct vers le formulaire d'avis et affichez un QR code à l'accueil. La régularité compte plus que les grandes campagnes ponctuelles.",
      },
      {
        q: "Où trouver le lien direct vers mes avis Google ?",
        a: "Dans votre Profil d'entreprise Google, la fonction pour demander des avis vous donne un lien court à copier, et généralement un QR code. Testez-le sur votre téléphone avant de l'imprimer ou de l'ajouter à vos e-mails.",
      },
      {
        q: "Puis-je offrir une remise en échange d'un avis Google ?",
        a: "Non. Google interdit les incitations, même pour des avis honnêtes, et récompenser uniquement les avis positifs peut aussi être une pratique commerciale trompeuse. Remerciez plutôt vos clientes par un service soigné, sans contrepartie liée à l'avis.",
      },
      {
        q: "Mes salariées peuvent-elles laisser un avis sur l'institut ?",
        a: "Non. Les avis de salariées, de proches ou de la gérante sont des conflits d'intérêts selon le règlement de Google et peuvent être considérés comme de faux avis au sens du droit de la consommation.",
      },
      {
        q: "Faut-il répondre à tous les avis Google ?",
        a: "Idéalement, oui. Une réponse courte et personnalisée aux avis positifs montre votre reconnaissance ; une réponse calme aux avis négatifs rassure les futures clientes. Ne mentionnez jamais de détails sur le soin ou la santé d'une cliente.",
      },
      {
        q: "Combien de temps après le soin envoyer la demande d'avis ?",
        a: "Le jour même ou le lendemain, quand l'expérience est encore fraîche. Pour les soins dont le résultat se voit plus tard, comme le laser ou le maquillage permanent, un message quelques jours après peut être plus pertinent.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "E-mails automatiques après le soin" },
      { pageKey: "online-booking", label: "Réservation en ligne sans commission" },
      { pageKey: "studio-website", label: "Site web pour votre institut" },
    ],
    sources: [
      {
        label: "EUR-Lex : Directive (UE) 2019/2161 (directive Omnibus)",
        url: "https://eur-lex.europa.eu/eli/dir/2019/2161/oj",
      },
    ],
  },
  {
    topic: "win-back-clients",
    lang: "fr",
    slug: "relancer-clientes-inactives-institut-de-beaute",
    title: "Relancer les clientes inactives de votre institut de beauté : segments, timing et modèles de messages",
    metaTitle: "Relancer les clientes inactives de votre institut",
    description:
      "Relancer les clientes inactives de votre institut : quand une cliente est perdue, quand la recontacter, modèles d'e-mail et d'appel, offres sans remise et RGPD.",
    excerpt:
      "Chaque fichier clients contient des personnes qui se sont simplement éloignées. Avec des segments clairs, un message personnel au bon moment et un lien de réservation simple, beaucoup reviennent, sans grosses remises.",
    category: "Fidélisation",
    keywords: [
      "relancer clientes inactives institut de beauté",
      "récupérer clientes perdues",
      "relance client institut de beauté",
      "e-mail de relance client modèle",
      "fidéliser clientes institut de beauté",
      "logiciel institut de beauté",
    ],
    publishedAt: "2026-11-24",
    updatedAt: "2026-11-24",
    readMinutes: 8,
    answer:
      "Pour relancer les clientes inactives, définissez d'abord quand une cliente est vraiment inactive selon le rythme habituel de chaque soin, puis répartissez-les en quelques groupes selon leur durée d'absence et leur valeur passée. Envoyez à chaque groupe un message court et personnel avec un lien direct vers la réservation, relancez une seule fois et proposez une valeur ajoutée plutôt qu'une forte remise. N'écrivez qu'aux clientes que vous pouvez contacter selon le RGPD et le Code des postes et des communications électroniques, et arrêtez dès qu'elles réservent ou se désinscrivent.",
    takeaways: [
      "« Inactive » dépend du soin : une cliente extensions de cils qui saute deux remplissages est partie bien avant une cliente qui vient une fois par an.",
      "Segmentez selon la durée d'absence et la valeur : une ancienne habituée mérite un appel, pas un e-mail groupé.",
      "Des messages courts et personnels avec un seul lien de réservation fonctionnent mieux que de longues newsletters et des remises élevées.",
      "Deux ou trois prises de contact par campagne suffisent ; ensuite, laissez respirer.",
      "Des parcours automatisés qui s'arrêtent dès que la cliente réserve transforment la relance en routine.",
    ],
    intro: [
      "Triez votre fichier clients par date de dernière visite. La plupart des instituts y trouvent des dizaines, parfois des centaines de personnes qui venaient régulièrement puis ont disparu sans un mot. Rarement à cause d'une mauvaise expérience : un quotidien plus chargé, une habitude qui se perd, une amie qui recommande un institut plus proche du bureau, ou tout simplement personne pour leur rappeler.",
      "Ces clientes connaissent déjà votre institut, vos tarifs et votre travail : les faire revenir est généralement plus simple que de convaincre une inconnue de réserver pour la première fois. Ce guide vous explique comment définir l'inactivité selon vos soins, segmenter vos clientes, écrire des messages qui ne ressemblent pas à du spam, choisir des offres qui ne cassent pas vos prix, respecter le RGPD et automatiser l'ensemble. Il s'agit de conseils pratiques, pas d'un avis juridique.",
    ],
    sections: [
      {
        heading: "À partir de quand une cliente est-elle inactive ?",
        paragraphs: [
          "Il n'existe pas de durée universelle. Une cliente est inactive lorsqu'elle a clairement décroché de son rythme habituel. Pour un remplissage de cils toutes les deux à trois semaines, huit semaines sans nouvelles sont un signal d'alerte. Pour un soin du visage toutes les quatre à six semaines, trois mois, c'est beaucoup. En épilation laser, le vrai signal est une série de séances arrêtée en cours de route, alors que douze mois sont tout à fait normaux pour un bilan de peau annuel.",
          "Notez l'intervalle habituel de vos principaux soins, puis considérez une cliente comme inactive au bout d'environ deux à trois fois cet intervalle. Vous obtenez ainsi des groupes qui ont du sens :",
        ],
        table: {
          headers: ["Groupe", "Définition type", "Meilleure approche"],
          rows: [
            ["En retard", "A manqué un ou deux rendez-vous habituels", "Rappel aimable avec lien de réservation"],
            ["Endormie", "Environ 3 à 6 mois sans visite", "Message personnel avec une petite attention"],
            ["Perdue", "Plus de 12 mois d'absence", "Message court, sans pression, puis lâcher prise"],
            ["Ancienne VIP", "Venait souvent ou dépensait beaucoup, plus de nouvelles", "Appel personnel de la gérante ou de son esthéticienne"],
            ["Cure interrompue", "A arrêté en cours de laser, de peelings ou de maquillage permanent", "Expliquer l'intérêt de terminer et proposer un créneau pratique"],
          ],
        },
      },
      {
        heading: "Pourquoi les clientes ne reviennent-elles plus, et pourquoi les relancer ?",
        paragraphs: [
          "Connaître la raison aide à choisir le bon message. Les causes les plus fréquentes sont ordinaires : un déménagement, un nouveau travail, un bébé, un budget plus serré, l'esthéticienne préférée qui a quitté l'institut, ou simplement l'oubli de reprendre rendez-vous après le dernier soin. Parfois, il y a eu une petite déception que la cliente n'a jamais exprimée.",
          "Relancer vaut la peine, car ces personnes vous font déjà confiance. Elles n'ont pas besoin de vous découvrir sur Google ni de comparer les avis : vous avez leur historique, leurs préférences et leurs coordonnées. Un message bien placé peut remplir les créneaux libres de la semaine prochaine, alors que la publicité pour attirer de nouvelles clientes prend généralement plus de temps et coûte plus cher. Et même si la cliente ne revient pas, sa réponse vous apprend souvent quelque chose d'utile sur votre service.",
        ],
        callout:
          "Posez aux clientes qui ne viennent plus une question simple : « Y a-t-il quelque chose que nous aurions pu faire mieux ? » Les réponses valent souvent plus que les réservations.",
      },
      {
        heading: "Comment repérer les clientes inactives dans vos fiches clients ?",
        paragraphs: [
          "La relance ne fonctionne que si vos données sont fiables. Si les rendez-vous sont éparpillés entre un agenda papier, le téléphone et des messages, vous ne saurez pas qui manque. Une fiche cliente numérique avec tout l'historique des visites vous donne la liste en quelques minutes.",
        ],
        steps: [
          "Filtrez vos clientes par date du dernier rendez-vous, par exemple plus de 90 jours, et notez les soins qu'elles réservaient habituellement.",
          "Retirez celles qui ont demandé à ne plus être contactées, celles sans e-mail valide et celles qui ont une réclamation non réglée.",
          "Répartissez les autres dans les groupes du tableau et marquez à part les anciennes habituées et les cures interrompues.",
          "Relisez les notes de la fiche : une cliente qui a déménagé ou était mécontente a besoin d'un autre message qu'une cliente qui a simplement oublié.",
          "Enregistrez le filtre pour refaire la même relance chaque mois ou chaque trimestre.",
        ],
      },
      {
        heading: "Que dire pour faire revenir une cliente ? Modèles d'e-mail et d'appel",
        paragraphs: [
          "Un bon message de relance est court, chaleureux et concret. Utilisez le prénom de la cliente, mentionnez le soin qu'elle réservait et mettez un seul lien direct vers votre page de réservation. Évitez les reproches (« Cela fait une éternité ! ») et veillez à ce que le message ne sonne pas automatique, même s'il l'est.",
          "**E-mail pour les clientes en retard ou endormies**",
          "Objet : « [Prénom], envie de votre prochain [soin] ? » Texte : « Bonjour [prénom], votre dernier [soin] chez nous remonte à quelque temps et nous voulions prendre de vos nouvelles. Si vous avez envie de revenir, tous nos créneaux libres sont ici : [lien de réservation]. Et si quelque chose ne vous a pas convenu la dernière fois, répondez simplement à cet e-mail : nous tenons vraiment à le savoir. À bientôt, [prénom] de [nom de l'institut] »",
          "**Relance environ une semaine plus tard, sans réponse**",
          "« Bonjour [prénom], juste un petit mot : il nous reste quelques créneaux [jours] pour votre [soin]. Réservez ici en une minute : [lien de réservation]. Si ce n'est pas le bon moment, aucun souci. »",
          "**Script d'appel pour les anciennes VIP**",
          "« Bonjour [prénom], c'est [prénom] de [nom de l'institut]. Nous ne vous avons pas vue depuis un moment et je voulais simplement prendre de vos nouvelles. Tout va bien ? Pouvons-nous faire quelque chose pour vous ? » Écoutez d'abord ; ne proposez un créneau que si la conversation s'y prête.",
        ],
      },
      {
        heading: "Quelles offres fonctionnent sans casser vos prix ?",
        paragraphs: [
          "Une remise de 30 % est tentante, mais elle habitue les clientes à attendre la prochaine promotion et attire des personnes qui repartent dès qu'elle se termine. Une valeur ajoutée protège vos tarifs tout en donnant une raison de réserver maintenant :",
        ],
        bullets: [
          "Un diagnostic de peau ou un court conseil offert avant le soin, pour mettre à jour son programme.",
          "Un petit surclassement : massage plus long, masque supplémentaire ou option ajoutée au soin.",
          "Un échantillon ou un format voyage de vos produits de soin à domicile.",
          "Une priorité, pendant une durée limitée, sur les créneaux les plus demandés comme le soir ou le samedi.",
          "Pour les cures interrompues : expliquer clairement ce que l'on gagne à les terminer et proposer un créneau pratique.",
          "Si vous faites une remise, gardez-la petite, personnelle, à usage unique et limitée dans le temps, par exemple sous forme de code promo pour la réservation en ligne.",
        ],
      },
      {
        heading: "Quand et combien de fois recontacter les clientes inactives ?",
        paragraphs: [
          "Le moment compte autant que les mots. Contactez les clientes en retard peu après qu'elles ont décroché de leur rythme, quand l'habitude est encore fraîche. Pour les clientes endormies et perdues, une relance fixe chaque mois ou chaque trimestre fonctionne bien. Évitez vos semaines les plus chargées : la relance sert surtout à remplir les périodes creuses.",
          "Gardez la campagne courte : un message, une relance environ une semaine plus tard et, pour les anciennes habituées, un appel. Ensuite, arrêtez. Des rappels à répétition paraissent insistants et font grimper les désinscriptions. Mesurez ensuite les résultats pour améliorer la prochaine relance :",
        ],
        bullets: [
          "Combien de clientes de chaque groupe avez-vous contactées ?",
          "Combien ont réservé dans les 30 jours, et pour quels soins ?",
          "Combien ont répondu, se sont désinscrites ou ont expliqué pourquoi elles ne venaient plus ?",
          "Quel objet, quelle offre ou quel canal a le mieux fonctionné ?",
        ],
      },
      {
        heading: "Que disent le RGPD et la CNIL sur les e-mails de relance ?",
        paragraphs: [
          "Un e-mail de relance relève généralement de la prospection commerciale : le RGPD s'applique, ainsi que l'article L34-5 du Code des postes et des communications électroniques. En France, vous pouvez en principe écrire à vos clientes existantes pour des soins analogues à ceux qu'elles ont déjà réservés sans consentement séparé, si leur adresse a été collectée lors d'une prestation, qu'elles ont été informées et ont pu s'y opposer, et que chaque message permet de se désinscrire facilement. Dans les autres cas, il faut un consentement préalable. La CNIL publie des fiches pratiques sur la prospection.",
        ],
        bullets: [
          "N'écrivez qu'aux clientes qui ne se sont pas opposées ou désinscrites, et appliquez chaque désinscription immédiatement.",
          "Ajoutez dans chaque e-mail un lien de désinscription visible et les coordonnées de votre institut.",
          "Indiquez dans votre politique de confidentialité que vous pouvez contacter vos clientes au sujet de soins analogues.",
          "Ne mentionnez jamais de données de santé ni de détails sensibles des soins dans un e-mail commercial.",
          "Supprimez ou anonymisez les fiches que vous n'avez plus de raison de conserver, selon vos durées de conservation.",
        ],
      },
      {
        heading: "Comment un logiciel d'institut de beauté automatise-t-il les relances ?",
        paragraphs: [
          "Le plus difficile n'est pas le texte, mais la régularité. Pendant une semaine chargée, personne ne pense à envoyer la relance. Avec les parcours clients de Treatflow, vous créez une séquence d'e-mails en plusieurs étapes qui démarre quand une cliente n'est pas venue depuis un moment, par exemple 60 à 90 jours, attend, vérifie si elle a repris rendez-vous et n'envoie une relance que si ce n'est pas le cas. Si elle réserve, la séquence s'arrête : personne ne reçoit de rappel après avoir déjà réservé.",
          "La fiche cliente affiche tout l'historique des soins, les notes et la dernière visite, pour personnaliser vos appels aux anciennes habituées. Votre lien de réservation en ligne sans commission mène la cliente directement aux créneaux libres, et les rappels par e-mail aident à ce que la cliente qui revient vienne vraiment. Parcours clients, rappels, codes promo et réservation en ligne sont inclus dans la formule Booking à 59 € par mois (Basic 39 €, HT). Vous pouvez essayer Treatflow gratuitement pendant 14 jours, sans carte bancaire.",
        ],
      },
    ],
    faq: [
      {
        q: "Au bout de combien de temps relancer une cliente qui ne vient plus ?",
        a: "Cela dépend du soin. Une règle pratique : deux à trois fois l'intervalle habituel, soit environ six à huit semaines pour un remplissage de cils et environ trois mois pour un soin du visage régulier. Beaucoup d'instituts envoient une relance générale après 60 à 90 jours sans visite.",
      },
      {
        q: "Faut-il faire une remise pour faire revenir les clientes ?",
        a: "Pas en premier. Une valeur ajoutée comme un conseil offert, un surclassement ou un échantillon protège mieux vos prix. Si vous faites une remise, gardez-la petite, personnelle, à usage unique et limitée dans le temps.",
      },
      {
        q: "Combien de fois peut-on relancer une cliente inactive ?",
        a: "Deux à trois fois par campagne suffisent : un e-mail, une relance environ une semaine plus tard et, pour les anciennes habituées, un appel personnel. Sans réponse, attendez quelques mois avant de réessayer.",
      },
      {
        q: "Faut-il un consentement pour envoyer des e-mails de relance ?",
        a: "Pour une cliente existante et des soins analogues, le consentement séparé n'est en principe pas nécessaire en France, à condition qu'elle ait été informée, ait pu s'opposer et puisse se désinscrire dans chaque e-mail. Pour de nouveaux contacts ou d'autres produits, il faut un consentement préalable.",
      },
      {
        q: "Que faire si une cliente explique qu'elle est partie parce qu'elle était mécontente ?",
        a: "Remerciez-la pour sa franchise, excusez-vous pour son expérience et demandez-lui ce qui pourrait arranger les choses. Notez le retour dans sa fiche et partagez-le avec l'équipe. Même si elle ne revient pas, sa réponse vous aide à garder d'autres clientes.",
      },
    ],
    related: [
      { pageKey: "customer-workflows", label: "Parcours clients automatisés pour les relances" },
      { pageKey: "client-records", label: "Fiches clients avec historique complet" },
      { pageKey: "messaging", label: "Rappels de rendez-vous par e-mail" },
    ],
    sources: [
      { label: "CNIL – Commission nationale de l'informatique et des libertés", url: "https://www.cnil.fr" },
      {
        label: "EUR-Lex : Directive 2002/58/CE (directive vie privée et communications électroniques)",
        url: "https://eur-lex.europa.eu/eli/dir/2002/58/oj",
      },
    ],
  },
  {
    topic: "open-beauty-salon",
    lang: "fr",
    slug: "ouvrir-un-institut-de-beaute",
    title: "Ouvrir un institut de beauté : budget, démarches, local et plan de lancement",
    metaTitle: "Ouvrir un institut de beauté : le guide complet",
    description:
      "Ouvrir un institut de beauté : concept, budget de départ, CAP esthétique, statut et démarches, local, carte des soins, RGPD et plan de lancement pas à pas.",
    excerpt:
      "Concept, budget, qualification, statut, local, tarifs, RGPD et logiciel : tout ce qu'il faut préparer avant d'ouvrir votre institut de beauté, avec un calendrier de lancement semaine par semaine.",
    category: "Gestion d'institut",
    keywords: [
      "ouvrir un institut de beauté",
      "ouvrir un salon d'esthétique",
      "combien coûte l'ouverture d'un institut de beauté",
      "business plan institut de beauté",
      "créer son institut de beauté",
      "diplôme pour ouvrir un institut de beauté",
      "logiciel institut de beauté",
    ],
    publishedAt: "2026-11-24",
    updatedAt: "2026-11-24",
    readMinutes: 9,
    answer:
      "Pour ouvrir un institut de beauté, commencez par un concept précis (clientèle, spécialité, positionnement de prix), chiffrez votre budget de départ et vos charges mensuelles, puis vérifiez la qualification exigée : en France, l'activité d'esthétique suppose en principe un CAP esthétique ou équivalent, ou le contrôle de l'activité par une personne qualifiée. Ensuite viennent le choix du statut, l'immatriculation via le guichet unique, l'assurance responsabilité civile professionnelle, un local conforme aux règles des établissements recevant du public, et une organisation prête (carte des soins, agenda, réservation en ligne, formulaires) avant le jour J.",
    takeaways: [
      "Un concept clair (qui, quels soins, à quel prix) guide toutes les autres décisions, du local au logiciel.",
      "Distinguez les dépenses ponctuelles des charges mensuelles et gardez une réserve de trésorerie pour les premiers mois.",
      "En France, l'esthétique est une activité réglementée : qualification, immatriculation et assurance sont à vérifier avec la CMA et un expert-comptable.",
      "Calculez vos prix à partir du temps, du coût des produits et de vos charges fixes, pas seulement à partir des tarifs du concurrent.",
      "Agenda, réservation en ligne, formulaires et rappels doivent fonctionner avant l'ouverture, pas pendant la première semaine chargée.",
    ],
    intro: [
      "Ouvrir son propre institut de beauté est souvent l'aboutissement de plusieurs années comme esthéticienne salariée : l'envie de choisir ses soins, ses marques, son ambiance et ses horaires. Mais entre l'idée et le premier rendez-vous, il y a beaucoup de décisions : quel concept, quel budget, quel statut, quel local, quels tarifs, et comment remplir l'agenda dès les premières semaines.",
      "Ce guide vous accompagne étape par étape, pour la France en priorité, avec quelques repères pour la Belgique et la Suisse. Il ne remplace pas l'avis d'un expert-comptable, de la chambre de métiers et de l'artisanat (CMA) ou de votre mairie : les règles évoluent et dépendent de votre situation. Considérez-le comme une liste de contrôle pour poser les bonnes questions aux bons interlocuteurs.",
    ],
    sections: [
      {
        heading: "Que faut-il décider avant d'ouvrir un institut de beauté ?",
        paragraphs: [
          "Avant de visiter des locaux ou de commander une table de soin, définissez votre concept. Il conditionne la surface nécessaire, le matériel, le budget et la communication. Un institut « tout soin » de quartier ne se conçoit pas comme un studio spécialisé en extensions de cils ou un centre d'épilation laser.",
          "Écrivez noir sur blanc les réponses aux questions suivantes. Elles formeront aussi la base de votre **business plan d'institut de beauté**, que votre banque vous demandera de toute façon.",
        ],
        bullets: [
          "**Clientèle cible** : actives pressées, clientèle haut de gamme, étudiantes, hommes, futures mariées ?",
          "**Spécialité** : soins du visage, épilation, onglerie, cils et sourcils, maquillage permanent, massages, appareils (laser, radiofréquence…) ?",
          "**Positionnement de prix** : accessible, milieu de gamme ou premium, avec l'expérience et les produits qui vont avec.",
          "**Seule ou en équipe** : combien de cabines, et quand recruter la première collaboratrice ?",
          "**Forme d'exploitation** : location d'une cabine dans un institut ou un salon de coiffure, local en propre, esthétique à domicile ou activité mixte.",
          "**Concurrence** : quels instituts existent déjà dans la zone, et qu'apporterez-vous de différent ?",
        ],
        callout:
          "Commencer en louant une cabine ou à domicile permet de tester votre clientèle avec peu d'investissement, avant de signer un bail commercial.",
      },
      {
        heading: "Combien coûte l'ouverture d'un institut de beauté ?",
        paragraphs: [
          "Il n'existe pas de montant type : le budget varie énormément selon la ville, la surface, l'état du local, la part de matériel neuf ou d'occasion et le nombre de cabines. Plutôt que de vous fier à une moyenne, demandez des devis et classez chaque poste en dépense ponctuelle ou en charge mensuelle.",
        ],
        table: {
          headers: ["Poste", "Type", "Points d'attention"],
          rows: [
            ["Dépôt de garantie, droit d'entrée ou pas-de-porte", "Ponctuel", "Lisez le bail et les conditions de cession avant de signer"],
            ["Loyer et charges du local", "Mensuel", "Vérifiez les charges refacturées et l'indexation du loyer"],
            ["Travaux, plomberie, électricité, ventilation", "Ponctuel", "Faites chiffrer l'accessibilité et les points d'eau dans chaque cabine"],
            ["Mobilier et décoration (accueil, cabines)", "Ponctuel", "Le confort et l'image comptent, mais restez dans le budget"],
            ["Matériel et appareils", "Ponctuel ou leasing", "Comparez achat, occasion et location ; vérifiez la formation incluse"],
            ["Stock initial de produits (cabine et revente)", "Ponctuel puis mensuel", "Commencez avec une gamme courte"],
            ["Assurances (RC professionnelle, local)", "Mensuel ou annuel", "Comparez plusieurs devis"],
            ["Formalités, honoraires d'expert-comptable", "Ponctuel puis mensuel", "Demandez un devis détaillé"],
            ["Site web, logiciel de gestion et de réservation", "Mensuel", "Préférez un abonnement sans commission par rendez-vous"],
            ["Communication de lancement", "Ponctuel", "Enseigne, photos, réseaux sociaux, soirée d'ouverture"],
            ["Réserve de trésorerie", "Ponctuel", "Prévoyez de quoi couvrir plusieurs mois de charges"],
          ],
        },
      },
      {
        heading: "Combien de soins faut-il pour être rentable ? Un exemple de calcul",
        paragraphs: [
          "Le calcul du point mort est simple et très parlant. Additionnez vos charges fixes mensuelles (loyer, assurances, logiciel, expert-comptable, remboursement de prêt, votre propre rémunération), puis divisez par la marge moyenne d'un soin, c'est-à-dire son prix HT moins le coût des produits utilisés.",
          "**Exemple purement illustratif, pas une donnée de marché** : avec 4 000 € de charges fixes par mois et une marge moyenne de 40 € par soin, il vous faut 100 soins par mois pour couvrir vos frais, soit environ 25 par semaine. Comparez ce chiffre à votre capacité réelle (heures d'ouverture, nombre de cabines, temps de préparation) : si l'objectif paraît irréaliste, revoyez vos prix, votre local ou votre organisation avant d'ouvrir.",
        ],
      },
      {
        heading: "Quel diplôme, quel statut et quelles démarches pour ouvrir un institut en France ?",
        paragraphs: [
          "En France, l'esthétique est une activité artisanale réglementée. Pour l'exercer, il faut en principe être titulaire d'un **CAP esthétique, cosmétique et parfumerie** ou d'un diplôme ou d'une expérience reconnus comme équivalents, ou que l'activité soit placée sous le contrôle effectif et permanent d'une personne qualifiée. Si vous n'êtes pas vous-même diplômée, renseignez-vous auprès de la CMA sur les conditions exactes avant d'investir.",
          "Les formalités de création d'entreprise se font en ligne sur le **guichet unique** géré par l'INPI (formalites.entreprises.gouv.fr). Le choix du statut (micro-entreprise, entreprise individuelle, EURL, SASU, SARL, SAS…) a des conséquences sur vos cotisations, votre fiscalité, votre protection sociale et la séparation de votre patrimoine : faites-vous conseiller par un expert-comptable ou la CMA, plutôt que de choisir uniquement au plus simple.",
          "Certains soins ont des exigences supplémentaires. Le tatouage et le maquillage permanent, par exemple, sont soumis à une déclaration auprès de l'agence régionale de santé et à une formation aux règles d'hygiène. Les règles concernant l'épilation laser et à lumière pulsée et l'usage de certains appareils ont évolué ces dernières années : vérifiez la réglementation en vigueur et les formations exigées avant d'acheter un appareil.",
        ],
        steps: [
          "Vérifiez votre qualification (ou celle de la personne qui contrôlera l'activité) auprès de la CMA.",
          "Faites valider votre business plan et le choix du statut avec un expert-comptable.",
          "Ouvrez un compte bancaire professionnel et, si besoin, sollicitez votre prêt ; demandez aussi à votre banque une solution pour accepter les paiements par carte.",
          "Immatriculez votre entreprise via le guichet unique de l'INPI.",
          "Souscrivez une assurance responsabilité civile professionnelle et une assurance pour le local et le matériel.",
          "Renseignez-vous auprès de la mairie sur l'enseigne, les travaux et l'accessibilité du local.",
        ],
        callout:
          "En Belgique et en Suisse, les conditions d'accès à la profession et les démarches sont différentes : adressez-vous au guichet d'entreprises (Belgique) ou à l'administration cantonale et à votre commune (Suisse).",
      },
      {
        heading: "Comment choisir le local de son institut ?",
        paragraphs: [
          "Un emplacement de passage, en centre-ville ou dans une galerie commerciale, attire des clientes spontanées mais coûte plus cher. Un institut « de destination », un peu à l'écart, peut fonctionner très bien si vos clientes réservent à l'avance et trouvent facilement à se garer. Dans tous les cas, votre institut est un **établissement recevant du public (ERP)** : les règles d'accessibilité et de sécurité s'appliquent, et la mairie peut vous indiquer les démarches en cas de travaux.",
        ],
        bullets: [
          "Visibilité depuis la rue, possibilité de poser une enseigne et stationnement ou transports à proximité.",
          "Arrivées d'eau et évacuations pour les cabines, ventilation (indispensable en onglerie), isolation phonique.",
          "Agencement : accueil, au moins une cabine fermée, espace de stockage, sanitaires, zone pour le linge.",
          "Accessibilité pour les personnes à mobilité réduite et conformité du local aux règles ERP.",
          "Bail : destination autorisée (activité d'esthétique), durée, répartition des travaux et des charges, conditions de cession.",
        ],
      },
      {
        heading: "Comment construire sa carte des soins et fixer ses prix ?",
        paragraphs: [
          "Au lancement, une carte courte vaut mieux qu'une longue liste. Choisissez les soins que vous maîtrisez parfaitement et qui correspondent à votre clientèle cible, puis ajoutez des prestations au fil des demandes. Une carte resserrée limite aussi le stock de produits et simplifie la réservation en ligne.",
          "Pour chaque soin, calculez le prix à partir de trois éléments : le **temps** réellement bloqué (installation et nettoyage compris), le **coût des produits** consommés et une part de vos **charges fixes** par heure de travail. Ajoutez ensuite votre marge. Les jeunes instituts ont tendance à sous-évaluer leurs prix pour attirer du monde : il est bien plus difficile d'augmenter ses tarifs plus tard que de démarrer au juste prix avec une offre de bienvenue limitée dans le temps.",
        ],
      },
      {
        heading: "Fiches clientes, questionnaires et photos : que dit le RGPD ?",
        paragraphs: [
          "Dès la première cliente, vous traitez des données personnelles : coordonnées, historique des soins, et souvent des informations de santé (allergies, grossesse, traitements, contre-indications) recueillies dans un questionnaire. Le **RGPD** s'applique, et la **CNIL** publie des recommandations pratiques pour les petites entreprises. Les données de santé sont des données sensibles : ne collectez que ce qui est utile pour réaliser le soin en sécurité.",
          "Prévoyez dès l'ouverture un questionnaire de consultation, un consentement avant les soins à risque, une autorisation distincte pour les photos avant/après (surtout si vous voulez les publier) et une politique de confidentialité. Conservez ces documents de manière sécurisée, et non dans un classeur à l'accueil ou sur votre téléphone personnel. Ces indications sont générales et ne constituent pas un avis juridique.",
        ],
      },
      {
        heading: "Quel logiciel mettre en place avant le jour de l'ouverture ?",
        paragraphs: [
          "Un **logiciel d'institut de beauté** est plus facile à installer quand l'agenda est encore vide. Si vous le configurez pendant les semaines précédant l'ouverture, vous pouvez prendre des réservations dès votre communication de lancement et accueillir les premières clientes avec un dossier déjà rempli.",
          "Avec Treatflow, vous créez vos prestations avec durée et prix, votre agenda avec colonnes par collaboratrice et par cabine, et un lien de réservation en ligne sans commission à placer sur Instagram et votre fiche Google. Les clientes remplissent leur questionnaire et signent leur consentement à l'avance via un lien, reçoivent des rappels par e-mail, et vous documentez chaque soin dans la fiche cliente, y compris par dictée vocale et avec photos avant/après. Si vous reprenez une clientèle existante, vous pouvez importer un fichier CSV. La formule Booking (agenda, réservation en ligne, rappels par e-mail, parcours clients) coûte 59 € par mois, la formule Basic sans agenda 39 € par mois, HT. Vous pouvez tester Treatflow gratuitement pendant 14 jours, sans carte bancaire.",
        ],
        bullets: [
          "Prestations créées avec durée, temps de préparation et prix.",
          "Horaires d'ouverture, cabines et planning de l'équipe renseignés.",
          "Lien de réservation testé sur mobile et ajouté à Instagram et Google.",
          "Questionnaire et consentements numériques prêts à l'envoi.",
          "Rappels par e-mail activés et politique d'annulation rédigée.",
          "Contacts existants importés, en respectant le RGPD.",
        ],
      },
      {
        heading: "Quel plan de lancement pour trouver ses premières clientes ?",
        paragraphs: [
          "Les premières clientes viennent rarement par hasard. Planifiez votre lancement comme un projet, avec des étapes datées.",
        ],
        steps: [
          "**12 semaines avant** : bail signé, statut choisi, immatriculation lancée, devis de travaux et commandes de matériel.",
          "**8 semaines avant** : assurances souscrites, carte des soins et tarifs finalisés, nom et identité visuelle, comptes Instagram et fiche d'établissement Google créés.",
          "**4 semaines avant** : logiciel configuré, réservation en ligne ouverte pour les premières dates, photos du local, annonce de l'ouverture à votre entourage et dans le quartier.",
          "**1 semaine avant** : rendez-vous tests avec des proches (soft opening), derniers réglages, stock vérifié, invitations à la soirée d'ouverture.",
          "**Premier mois** : demandez un avis Google après chaque soin réussi, proposez le prochain rendez-vous avant le départ de la cliente, lancez une offre de parrainage simple et analysez quelles prestations se réservent le mieux.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on ouvrir un institut de beauté sans diplôme ?",
        a: "En France, l'activité d'esthétique exige en principe un CAP esthétique ou une qualification reconnue comme équivalente. Sans diplôme, il est en général possible d'ouvrir à condition que l'activité soit placée sous le contrôle effectif et permanent d'une personne qualifiée. Vérifiez votre situation auprès de la chambre de métiers et de l'artisanat.",
      },
      {
        q: "Quel statut choisir pour ouvrir un institut de beauté ?",
        a: "Cela dépend de votre chiffre d'affaires prévu, de vos investissements, de votre situation personnelle et de vos projets d'embauche. La micro-entreprise est simple pour démarrer petit ; une EURL, une SASU ou une société à plusieurs associés peut être plus adaptée pour un local avec travaux et salariés. Demandez une simulation à un expert-comptable.",
      },
      {
        q: "Combien faut-il de budget pour ouvrir un institut de beauté ?",
        a: "Il n'y a pas de montant standard : tout dépend de la ville, du local, des travaux et du matériel. Listez chaque poste, demandez des devis, séparez dépenses ponctuelles et charges mensuelles, et prévoyez une réserve de trésorerie pour les premiers mois.",
      },
      {
        q: "Faut-il un business plan pour ouvrir un institut ?",
        a: "Oui, c'est fortement recommandé, et indispensable si vous demandez un prêt. Il décrit votre concept, votre clientèle, votre carte des soins, vos prix, votre budget de départ et vos prévisions sur au moins les premières années.",
      },
      {
        q: "Quand installer le logiciel de réservation ?",
        a: "Idéalement quatre à six semaines avant l'ouverture. Vous pouvez ainsi tester vos prestations et votre lien de réservation, préparer vos formulaires et ouvrir les premiers créneaux en même temps que votre annonce de lancement.",
      },
    ],
    related: [
      { pageKey: "beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { pageKey: "features", label: "Toutes les fonctionnalités de Treatflow" },
      { pageKey: "pricing", label: "Tarifs de Treatflow" },
    ],
    sources: [
      { label: "Guichet unique des formalités d'entreprises (INPI)", url: "https://formalites.entreprises.gouv.fr" },
      { label: "CNIL – Commission nationale de l'informatique et des libertés", url: "https://www.cnil.fr" },
      { label: "EUR-Lex : Règlement (UE) 2016/679 (RGPD)", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    ],
  },
];
