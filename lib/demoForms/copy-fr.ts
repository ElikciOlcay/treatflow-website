export const demoCopyFr = {
  gallery: {
    eyebrow: 'Formulaires d\'exemple',
    titleBefore: 'Testez nos formulaires – ',
    titleHighlight: 'sans inscription',
    intro:
      'Ces modèles d\'exemple vous permettent de découvrir le questionnaire de santé, le consentement éclairé et la signature électronique dans Treatflow. Créez vos propres formulaires dans l\'éditeur – ou nous les configurons avec vous.',
    points: [
      'Uniquement des modèles d\'exemple',
      'Créez les vôtres dans l\'éditeur',
      'Nous vous aidons à créer vos formulaires',
      'Rien n\'est enregistré',
    ],
    noticeTitle: 'Modèles d\'exemple pour vous orienter',
    noticeText:
      'Les formulaires ci-dessous montrent comment fonctionne l\'accueil numérique dans Treatflow – questionnaire de santé, consentement éclairé et signature. Les formulaires de votre institut, vous les créez dans l\'éditeur de formulaires, ou nous les configurons avec vous.',
    generatorTitle: 'Créez les vôtres dans l\'éditeur de formulaires',
    generatorText:
      'Partez d\'un modèle ou d\'un formulaire vierge et ajoutez les champs par glisser-déposer – avec questions conditionnelles, croquis et signature.',
    generatorCta: 'Comment fonctionne l\'éditeur',
    supportTitle: 'Nous vous aidons à créer vos formulaires',
    supportText:
      'Besoin de questionnaires de santé, de consentements ou de consignes post-soin pour vos prestations ? Nous les configurons avec vous lors de la prise en main.',
    supportCta: 'Réserver une démonstration',
    cardsHeading: 'Ouvrir un formulaire d\'exemple',
    fillCta: 'Remplir maintenant',
    pagesLabel: (count: number) => (count === 1 ? '1 page' : `${count} pages`),
    difficulty: {
      einfach: 'Rapide à remplir',
      mittel: 'Avec consentement',
      komplex: 'Questionnaire complet',
    } as Record<string, string>,
    bottomLock: 'La démo n\'enregistre rien',
    bottomTitle: 'Envie d\'utiliser des formulaires dans votre institut ?',
    bottomText:
      'Ces exemples sont un point de départ. Adaptez les modèles, envoyez-les par lien, ou nous vous aidons à créer de nouveaux formulaires – 14 jours gratuits.',
    trialCta: 'Essai gratuit de 14 jours',
    moreCta: 'En savoir plus sur les formulaires',
  },
  player: {
    allTemplates: 'Tous les exemples',
    demoBadge: 'Démo – rien n\'est enregistré',
    banner:
      'Ceci est un formulaire d\'exemple. Il montre ce que vos clients voient à l\'accueil. Les réponses restent dans ce navigateur et ne sont pas envoyées à Treatflow.',
    requiredCheckbox: 'Veuillez sélectionner au moins une option.',
    requiredField: 'Veuillez remplir ce champ.',
    requiredSignature: 'Veuillez signer ici.',
    completedNote: 'Démo terminée – rien n\'a été enregistré.',
    completedFallback:
      'C\'est ainsi que le formulaire rempli apparaît ensuite dans la fiche client – avec signature et horodatage.',
    doneTitle: 'Voilà l\'accueil de vos clients',
    doneText:
      'Dans Treatflow, vous adaptez les modèles, les envoyez par lien ou QR code, ou créez de nouveaux formulaires dans l\'éditeur. Nous pouvons aussi les configurer avec vous.',
    trialCta: 'Essai gratuit de 14 jours',
    moreSamples: 'Voir d\'autres exemples',
    signatureSection: 'Signature',
    signHint: 'Signez avec le doigt ou la souris',
    clear: 'Effacer',
    signHere: 'Signez ici',
    back: 'Retour',
    next: 'Continuer',
    submit: 'Envoyer',
    restart: 'Remplir à nouveau',
    drawingSkip:
      'Non disponible dans la démo. Dans Treatflow, vos clients peuvent dessiner directement sur un modèle ici.',
    fileSkip: 'Non disponible dans la démo. Dans Treatflow, vos clients peuvent téléverser des fichiers ici.',
    defaultSignature: 'Signature de la cliente/du client',
    done: 'Terminé',
  },
  meta: {
    galleryTitle: 'Testez des formulaires d\'exemple sans inscription',
    galleryDescription:
      'Ouvrez les modèles d\'exemple Treatflow et remplissez-les – sans compte. Créez vos propres formulaires dans l\'éditeur, ou nous vous aidons à les configurer.',
    playerTitle: (name: string) => `Tester : ${name}`,
    playerDescription: (description: string) =>
      `${description} Formulaire d'exemple – sans inscription, rien n'est enregistré.`,
    notFound: 'Formulaire introuvable',
  },
};
