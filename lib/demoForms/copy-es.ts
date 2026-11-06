export const demoCopyEs = {
  gallery: {
    eyebrow: 'Formularios de ejemplo',
    titleBefore: 'Prueba los formularios – ',
    titleHighlight: 'sin registrarte',
    intro:
      'Estas son plantillas de ejemplo para que veas cómo funcionan en Treatflow la ficha de cliente, el consentimiento informado y la firma digital. Tus propios formularios los creas con el generador de formularios, o te ayudamos a configurarlos.',
    points: [
      'Solo plantillas de ejemplo',
      'Crea los tuyos con el generador',
      'Te ayudamos a configurar formularios nuevos',
      'No se guarda nada',
    ],
    noticeTitle: 'Plantillas de ejemplo para orientarte',
    noticeText:
      'Los siguientes formularios muestran cómo funciona el check-in digital en Treatflow: ficha de cliente, consentimiento informado y firma. Los formularios de tu centro los creas con el generador con IA, o los configuramos contigo.',
    generatorTitle: 'Crea tus propios formularios con el generador',
    generatorText:
      'Describe un tratamiento con tus palabras. La IA crea los campos y después puedes ajustarlo todo.',
    generatorCta: 'Cómo funciona el generador',
    supportTitle: 'Te ayudamos a configurar formularios nuevos',
    supportText:
      '¿Necesitas fichas de cliente, consentimientos informados o indicaciones de cuidados posteriores para tus tratamientos? Los configuramos contigo durante la puesta en marcha.',
    supportCta: 'Reserva una demo',
    cardsHeading: 'Abre un formulario de ejemplo',
    fillCta: 'Rellenar ahora',
    pagesLabel: (count: number) => (count === 1 ? '1 página' : `${count} páginas`),
    difficulty: {
      einfach: 'Se rellena en un momento',
      mittel: 'Incluye consentimiento',
      komplex: 'Ficha de cliente completa',
    } as Record<string, string>,
    bottomLock: 'La demo no guarda nada',
    bottomTitle: '¿Quieres usar formularios en tu centro?',
    bottomText:
      'Estos ejemplos son un punto de partida. Adapta las plantillas, envíalas por enlace o te ayudamos a crear formularios nuevos. Pruébalo gratis 14 días.',
    trialCta: 'Prueba gratis 14 días',
    moreCta: 'Más sobre los formularios',
  },
  player: {
    allTemplates: 'Todos los ejemplos',
    demoBadge: 'Demo: no se guarda nada',
    banner:
      'Este es un formulario de ejemplo. Muestra lo que ven tus clientes en el check-in. Las respuestas se quedan en este navegador y no se envían a Treatflow.',
    requiredCheckbox: 'Selecciona al menos una opción.',
    requiredField: 'Rellena este campo.',
    requiredSignature: 'Firma aquí.',
    completedNote: 'Demo terminada: no se ha guardado nada.',
    completedFallback:
      'Así queda después el formulario completado en la ficha del cliente, con firma y fecha y hora.',
    doneTitle: 'Así es el check-in de tus clientes',
    doneText:
      'En Treatflow adaptas las plantillas, las envías por enlace o código QR, o creas formularios nuevos con el generador. También podemos configurarlos contigo.',
    trialCta: 'Prueba gratis 14 días',
    moreSamples: 'Ver más ejemplos',
    signatureSection: 'Firma',
    signHint: 'Firma con el dedo o el ratón',
    clear: 'Borrar',
    signHere: 'Firma aquí',
    back: 'Atrás',
    next: 'Continuar',
    submit: 'Enviar',
    restart: 'Volver a rellenar',
    drawingSkip:
      'No disponible en la demo. En Treatflow, tus clientes pueden dibujar aquí directamente sobre una plantilla.',
    fileSkip: 'No disponible en la demo. En Treatflow, tus clientes pueden subir archivos aquí.',
    defaultSignature: 'Firma del cliente',
    done: 'Listo',
  },
  meta: {
    galleryTitle: 'Prueba formularios de ejemplo sin registrarte',
    galleryDescription:
      'Abre las plantillas de ejemplo de Treatflow y rellénalas sin crear una cuenta. Crea tus propios formularios con el generador o te ayudamos a configurar formularios nuevos.',
    playerTitle: (name: string) => `Prueba: ${name}`,
    playerDescription: (description: string) =>
      `${description} Formulario de ejemplo: sin registro, no se guarda nada.`,
    notFound: 'Formulario no encontrado',
  },
};
