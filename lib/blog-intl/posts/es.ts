import type { BlogArticle } from "../types";

/**
 * Blog en español (/es/blog). Público: centros de estética, clínicas de
 * medicina estética, depilación láser, uñas, pestañas y micropigmentación.
 * España primero, sin excluir Latinoamérica.
 */
export const posts: BlogArticle[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Elegir software
  // ─────────────────────────────────────────────────────────────
  {
    topic: "choose-salon-software",
    lang: "es",
    slug: "como-elegir-software-centro-estetica",
    title: "Cómo elegir software para tu centro de estética: guía y checklist 2026",
    metaTitle: "Cómo elegir software para centros de estética (2026)",
    description:
      "Guía para elegir software para tu centro de estética: funciones clave, RGPD, costes reales y comisiones, con una checklist práctica para comparar programas.",
    excerpt:
      "Agenda, reservas online, fichas de clientas y consentimientos en un solo sitio: qué debe tener un buen programa de gestión y cómo compararlo sin perder semanas.",
    category: "Software y gestión",
    keywords: [
      "software para centros de estética",
      "programa de gestión centro de estética",
      "software estética",
      "agenda online centro de estética",
      "software clínica estética",
      "programa para salón de belleza",
      "comparativa software estética",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "Un buen software para centros de estética reúne en una sola herramienta la agenda por profesional y cabina, las reservas online sin comisiones, la ficha de clienta con historial y fotos, los consentimientos con firma digital y los recordatorios automáticos. Elige uno con servidores en la UE, precio fijo transparente y periodo de prueba gratuito, y pruébalo con tus servicios reales antes de decidir.",
    takeaways: [
      "Prioriza agenda, reservas online, ficha de clienta, consentimientos digitales y recordatorios: el resto es secundario.",
      "Compara el coste total (cuota, SMS, comisiones por reserva, tiempo de gestión), no solo la cuota mensual.",
      "Exige servidores en la UE, contrato de encargado del tratamiento y control de accesos por rol (RGPD).",
      "Un marketplace te trae visibilidad, pero cobra comisión y compite por tus clientas; un software propio te deja el control.",
      "Prueba el programa durante al menos una semana real de trabajo con todo el equipo antes de migrar.",
    ],
    intro: [
      "Agenda en papel, WhatsApp personal para las citas, consentimientos impresos en una carpeta y un Excel para los bonos: así funcionan todavía muchos centros de estética. Mientras el negocio es pequeño, aguanta. Cuando entra la segunda profesional, una cabina de láser o una clínica con medicina estética, ese sistema empieza a costarte horas, citas y tranquilidad.",
      "Esta guía te ayuda a elegir un software para tu centro de estética con criterio: qué funciones importan de verdad, cómo calcular lo que cuesta, qué exige el RGPD y cómo probar un programa sin poner en riesgo tu día a día.",
    ],
    sections: [
      {
        heading: "¿Qué debe hacer un software para centros de estética?",
        paragraphs: [
          "Un programa genérico de citas sirve para una peluquería sencilla. Un centro de estética necesita algo más, porque trabaja con datos sensibles, tratamientos por sesiones y documentación. Estas son las funciones que deberían estar sí o sí:",
        ],
        bullets: [
          "**Agenda por profesional y por cabina**, con duraciones distintas por servicio y tiempos de preparación.",
          "**Reservas online 24/7** con tu propio enlace, que puedas poner en Instagram, Google y tu web.",
          "**Ficha de clienta digital** con historial de citas, notas, alergias, fotos de antes y después.",
          "**Fichas de anamnesis y consentimientos informados** que la clienta rellena y firma antes de llegar.",
          "**Documentación de tratamientos**: parámetros de láser, pigmentos, productos y observaciones por sesión.",
          "**Recordatorios automáticos** por email, SMS o WhatsApp para reducir citas perdidas.",
          "**Bonos y tarjetas regalo**, muy habituales en estética y en depilación láser.",
        ],
      },
      {
        heading: "¿Plataforma con comisión o software propio?",
        paragraphs: [
          "Es la primera decisión, y condiciona todo lo demás. Los marketplaces de belleza te muestran junto a otros centros de tu zona y suelen cobrar por cada clienta nueva o por reserva. El software de gestión, en cambio, cobra una cuota fija y no se queda con nada de tus reservas.",
        ],
        table: {
          headers: ["Criterio", "Marketplace de belleza", "Software propio (cuota fija)"],
          rows: [
            ["Coste", "Comisión por reserva o clienta nueva, más extras", "Cuota mensual fija"],
            ["Relación con la clienta", "La plataforma también es dueña del contacto", "La clienta es tuya"],
            ["Competencia", "Tu ficha aparece junto a otros centros", "Tu enlace solo muestra tu centro"],
            ["Documentación y consentimientos", "Limitada o inexistente", "Normalmente integrada"],
            ["Ideal para", "Captar visibilidad al principio", "Centros que quieren crecer con su propia marca"],
          ],
        },
        callout:
          "Puedes combinar ambos: algunos centros usan un marketplace para captar y un software propio para gestionar y fidelizar. Lo importante es saber cuánto pagas por cada canal.",
      },
      {
        heading: "¿Qué funciones necesitas según tu tipo de centro?",
        paragraphs: [
          "No todos los centros necesitan lo mismo. Antes de pedir demos, apunta qué es imprescindible para ti:",
        ],
        table: {
          headers: ["Tipo de centro", "Funciones imprescindibles"],
          rows: [
            ["Centro de estética", "Agenda por cabina, bonos de sesiones, ficha con alergias y productos"],
            ["Clínica de medicina estética", "Consentimiento informado firmado, historial detallado, fotos, control de accesos"],
            ["Depilación láser", "Fototipo, parámetros por zona y sesión, seguimiento de bonos"],
            ["Salón de uñas", "Reservas rápidas, recordatorios de relleno, servicios encadenados"],
            ["Pestañas", "Recordatorio de relleno, ficha de alergias, fotos del diseño"],
            ["Micropigmentación", "Consentimiento, pigmentos y lote, fotos de antes y después, cita de retoque"],
          ],
        },
      },
      {
        heading: "¿Cómo saber si un programa cumple el RGPD?",
        paragraphs: [
          "En estética tratas datos de salud: alergias, medicación, embarazo, enfermedades de la piel. Según el RGPD son datos de categoría especial y la LOPDGDD los protege con especial cuidado. Por eso el software no puede ser cualquiera. Pregunta por escrito:",
        ],
        bullets: [
          "¿Dónde están los servidores? Lo más sencillo es que estén en la Unión Europea.",
          "¿Firman contigo un contrato de encargado del tratamiento (art. 28 RGPD)?",
          "¿Hay conexión cifrada (SSL) y copias de seguridad diarias?",
          "¿Puedo limitar qué ve cada empleada según su rol?",
          "¿Puedo exportar y borrar los datos de una clienta si me lo pide?",
        ],
        callout:
          "Treatflow, por ejemplo, aloja los datos en servidores de la UE (Frankfurt), con SSL y copias de seguridad diarias. El centro sigue siendo el propietario de los datos de sus clientas.",
      },
      {
        heading: "¿Cuánto cuesta realmente un software de gestión?",
        paragraphs: [
          "La cuota mensual es solo una parte. Para comparar bien, calcula el **coste total**: cuota, módulos extra, envío de SMS, comisiones por reserva o por pago, formación y, sobre todo, el tiempo que te ahorra o te hace perder.",
          "Como referencia, en Treatflow el plan Basic cuesta 39 € al mes (35 € con pago anual) e incluye fichas de clientas, formularios y documentación de tratamientos. El plan Booking cuesta 59 € al mes (53 € con pago anual) y añade agenda, reservas online y automatización de SMS y email. Sin comisión por reserva.",
          "Haz esta cuenta sencilla: si el programa te ahorra una hora de WhatsApp y llamadas al día y evita un par de citas perdidas al mes, normalmente se paga solo. Si te obliga a pagar por cada clienta nueva, el coste crece justo cuando más trabajas.",
        ],
      },
      {
        heading: "¿Cómo probar un software antes de decidir?",
        paragraphs: [
          "Las demos están bien, pero la verdad aparece cuando lo usas con tus servicios, tus horarios y tu equipo. Aprovecha el periodo de prueba así:",
        ],
        steps: [
          "Configura tus servicios reales con duraciones y precios, y las cabinas o equipos que tengas.",
          "Da de alta a todo el equipo y asigna horarios y permisos.",
          "Crea tu ficha de anamnesis y un consentimiento informado, y envíatelos como si fueras clienta.",
          "Haz una reserva online desde el móvil y comprueba el recordatorio que llega.",
          "Documenta un tratamiento completo con fotos y notas.",
          "Pregunta cómo se importan tus clientas actuales y cuánto tarda la migración.",
          "Escribe al soporte con una duda real y mide cuánto tardan y cómo responden.",
        ],
      },
      {
        heading: "Checklist final para comparar programas",
        paragraphs: [
          "Imprime esta lista y puntúa cada opción del 1 al 5. La que gane en lo que tú consideras imprescindible es la buena, aunque no tenga cien funciones más.",
        ],
        bullets: [
          "Agenda por profesional y cabina, cómoda en el móvil",
          "Enlace de reservas propio sin comisión",
          "Ficha de clienta con historial, fotos y notas",
          "Anamnesis y consentimientos digitales con firma",
          "Recordatorios por email, SMS o WhatsApp",
          "Bonos y tarjetas regalo",
          "Servidores en la UE y contrato de encargado",
          "Precio claro, sin permanencia y con prueba gratuita",
          "Soporte que responde rápido y en un idioma que entiendas",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuál es el mejor software para un centro de estética?",
        a: "No hay uno perfecto para todos. El mejor es el que cubre tus imprescindibles (agenda, reservas online, ficha de clienta, consentimientos y recordatorios), cumple el RGPD con servidores en la UE y tiene un precio que puedes predecir. Compara al menos dos o tres opciones con una prueba real.",
      },
      {
        q: "¿Hay software para centros de estética sin comisiones?",
        a: "Sí. Los programas de gestión con cuota fija no cobran por reserva. Treatflow, por ejemplo, funciona con tu propio enlace de reservas, sin comisión, desde 39 € al mes.",
      },
      {
        q: "¿Puedo pasar mis clientas del sistema antiguo al nuevo?",
        a: "Normalmente sí, mediante una importación de un archivo Excel o CSV con nombre, teléfono, email y otros datos básicos. Pregunta antes cómo se hace y si el proveedor te ayuda con la migración.",
      },
      {
        q: "¿Necesito un software distinto para una clínica de medicina estética?",
        a: "Necesitas uno que gestione bien el consentimiento informado, el historial clínico, las fotos y el control de accesos por rol. Muchos programas de estética lo cubren; comprueba en la prueba que la documentación es lo bastante detallada para tu actividad.",
      },
      {
        q: "¿Cuánto dura la puesta en marcha?",
        a: "Para un centro pequeño, configurar servicios, equipo y formularios suele llevar unas horas. Lo que más tiempo cuesta es la migración de datos y acostumbrar al equipo, por eso conviene empezar en una semana tranquila.",
      },
    ],
    related: [
      { pageKey: "beauty-salon-software", label: "Software para salones y centros de estética" },
      { pageKey: "features", label: "Todas las funciones de Treatflow" },
      { pageKey: "pricing", label: "Precios y planes" },
      { pageKey: "software-comparison", label: "Comparativa de software de estética" },
    ],
    sources: [
      { label: "Reglamento General de Protección de Datos (RGPD), EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Agencia Española de Protección de Datos (AEPD)", url: "https://www.aepd.es" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Citas perdidas
  // ─────────────────────────────────────────────────────────────
  {
    topic: "reduce-no-shows",
    lang: "es",
    slug: "reducir-citas-perdidas-centro-estetica",
    title: "Cómo reducir las citas perdidas (no-shows) en tu centro de estética",
    metaTitle: "Cómo reducir las citas perdidas en tu centro de estética",
    description:
      "Recordatorios por WhatsApp, SMS y email, política de cancelación clara y una agenda bien organizada: así reduces las citas perdidas en tu centro de estética.",
    excerpt:
      "Cada hueco vacío es dinero que no vuelve. Recordatorios bien programados, una política de cancelación clara y reservas sencillas reducen los no-shows de forma notable.",
    category: "Agenda y citas",
    keywords: [
      "reducir citas perdidas",
      "no-shows centro de estética",
      "recordatorio de citas WhatsApp",
      "recordatorio cita SMS",
      "política de cancelación centro de estética",
      "clientas que no se presentan",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Las citas perdidas se reducen sobre todo con recordatorios automáticos (uno 24–48 horas antes y otro corto el mismo día), una forma fácil de cancelar o cambiar la cita y una política de cancelación clara que la clienta acepta al reservar. Si además rellenas los huecos libres rápido, el impacto en tu facturación se nota en pocas semanas.",
    takeaways: [
      "La mayoría de no-shows son olvidos, no mala fe: un buen recordatorio resuelve gran parte del problema.",
      "Combina canales: confirmación por email al reservar y recordatorio por SMS o WhatsApp antes de la cita.",
      "Facilita cancelar: una clienta que avisa con tiempo es mejor que una que no aparece.",
      "Una política de cancelación escrita y aceptada al reservar evita discusiones.",
      "Mide tus no-shows cada mes para saber si las medidas funcionan.",
    ],
    intro: [
      "Tienes la cabina preparada, el láser encendido y la hora reservada. La clienta no aparece y no contesta al teléfono. Si te pasa una vez al mes, molesta. Si te pasa varias veces por semana, es un agujero en tu facturación que muchas veces ni siquiera se mide.",
      "La buena noticia: las citas perdidas no son inevitables. Con unos pocos cambios en cómo confirmas, recuerdas y gestionas las citas, la mayoría de centros de estética reducen los no-shows de forma clara. Te contamos cómo hacerlo, paso a paso.",
    ],
    sections: [
      {
        heading: "¿Cuánto te cuesta realmente una cita perdida?",
        paragraphs: [
          "Haz la cuenta con tus propios números. Un ejemplo: si pierdes tres citas por semana con un precio medio de 60 €, son 180 € a la semana. En 48 semanas de trabajo, más de 8.600 € al año. Y eso sin contar el sueldo de la profesional que esperaba, el producto preparado o la clienta que no pudo reservar porque el hueco estaba ocupado.",
          "En tratamientos largos, como una sesión de micropigmentación o un tratamiento de medicina estética, una sola ausencia puede costar más que todo un día de manicuras.",
        ],
        callout:
          "Apunta durante un mes cuántas citas se pierden y cuántas se cancelan con menos de 24 horas. Sin ese dato no sabrás si las medidas funcionan.",
      },
      {
        heading: "¿Por qué no se presentan las clientas?",
        paragraphs: [
          "Si hablas con tus clientas, casi nunca es mala intención. Las causas más habituales son:",
        ],
        bullets: [
          "**Olvido**, sobre todo en citas reservadas con semanas de antelación.",
          "**Cancelar da pereza o vergüenza**: hay que llamar, y en horario de cabina nadie coge el teléfono.",
          "**Imprevistos** de trabajo, niños o salud, sin una forma rápida de avisar.",
          "**Confusión con la hora o el día**, cuando la cita se cerró de palabra o por un mensaje perdido en un chat.",
          "**Poco compromiso**: una cita gratuita o sin ninguna condición se percibe como menos importante.",
        ],
      },
      {
        heading: "¿Qué recordatorios funcionan mejor: WhatsApp, SMS o email?",
        paragraphs: [
          "Cada canal tiene su papel. Lo que mejor funciona es combinarlos y automatizarlos para no depender de que alguien se acuerde de escribir.",
        ],
        table: {
          headers: ["Canal", "Ventaja", "Úsalo para"],
          rows: [
            ["Email", "Gratis, admite detalles y enlaces", "Confirmación al reservar, instrucciones previas, ficha de anamnesis"],
            ["SMS", "Llega siempre, se lee rápido", "Recordatorio 24 horas antes"],
            ["WhatsApp", "El canal que tus clientas ya usan a diario", "Recordatorio y respuesta rápida"],
          ],
        },
        callout:
          "Con Treatflow los recordatorios por email, SMS o WhatsApp salen solos según las reglas que definas, y la clienta recibe en el mismo mensaje cómo cambiar o cancelar su cita.",
      },
      {
        heading: "¿Cuándo enviar los recordatorios de cita?",
        paragraphs: [
          "No hay un horario mágico, pero este esquema funciona en la mayoría de centros:",
        ],
        steps: [
          "Al reservar: confirmación inmediata con fecha, hora, dirección y servicio.",
          "Si el tratamiento lo requiere: la ficha de anamnesis o el consentimiento unos días antes, para rellenar en casa.",
          "24–48 horas antes: recordatorio con opción de cambiar o cancelar.",
          "El mismo día (opcional): un mensaje breve unas horas antes para citas largas o primeras visitas.",
          "Después de la cita: agradecimiento y, si procede, invitación a reservar la siguiente sesión.",
        ],
      },
      {
        heading: "¿Necesitas una política de cancelación?",
        paragraphs: [
          "Sí, y por escrito. Una política clara protege tu tiempo y evita conversaciones incómodas. Debe ser sencilla, razonable y visible **antes** de que la clienta reserve: en tu web, en la página de reservas y en la confirmación.",
          "Lo habitual es pedir aviso con al menos 24 horas. Algunos centros piden una señal para tratamientos largos o para clientas que ya han faltado antes. Si decides cobrar por cancelaciones tardías, explícalo de forma transparente y aplícalo con criterio: una clienta fiel con una urgencia no merece el mismo trato que alguien que falta por tercera vez.",
        ],
        bullets: [
          "Plazo de aviso (por ejemplo, 24 horas).",
          "Cómo cancelar: enlace, teléfono o WhatsApp.",
          "Qué pasa si no se avisa o si la clienta llega muy tarde.",
          "Excepciones (enfermedad, causas de fuerza mayor).",
        ],
      },
      {
        heading: "¿Qué hacer con los huecos que quedan libres?",
        paragraphs: [
          "Una cancelación con tiempo no es un problema si puedes volver a llenar el hueco. Para eso ayuda tener las **reservas online** abiertas: el hueco liberado aparece al instante y cualquier clienta puede cogerlo, también fuera de horario.",
          "Además, ten una lista de clientas que te han dicho que les vendría bien adelantar su cita y publica en tus historias de Instagram los huecos de última hora. Un mensaje del tipo «se ha quedado libre mañana a las 11:00» suele funcionar bien.",
        ],
      },
      {
        heading: "¿Cómo tratar a las clientas que faltan a menudo?",
        paragraphs: [
          "Anota cada ausencia en la ficha de la clienta. Así sabes, sin depender de la memoria, quién falta de forma repetida. A partir de la segunda o tercera vez puedes pedir confirmación activa, una señal o reservar solo por teléfono.",
          "Hazlo con tacto: un mensaje personal del tipo «te echamos de menos en tu cita de ayer, ¿todo bien?» recupera más clientas que un reproche.",
        ],
      },
      {
        heading: "¿Cómo poner todo esto en marcha en una semana?",
        paragraphs: [
          "No hace falta cambiarlo todo de golpe. Este plan de siete días es realista incluso con la agenda llena:",
        ],
        steps: [
          "Día 1: cuenta las citas perdidas y las cancelaciones tardías del último mes.",
          "Día 2: redacta tu política de cancelación en cinco líneas, clara y amable.",
          "Día 3: publícala en tu web, en la página de reservas y en tu perfil de Google.",
          "Día 4: activa la confirmación automática por email y el recordatorio por SMS o WhatsApp.",
          "Día 5: añade en cada recordatorio un enlace para cambiar o cancelar la cita.",
          "Día 6: explica el nuevo sistema al equipo y cómo anotar las ausencias en la ficha.",
          "Día 7: decide cómo vas a rellenar los huecos de última hora (reservas online, lista de clientas, historias de Instagram).",
        ],
        callout:
          "Al cabo de un mes, vuelve a contar. Si las ausencias han bajado, sigue igual. Si no, revisa el momento de los recordatorios o si las clientas encuentran fácilmente cómo cancelar.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto antes debo enviar el recordatorio de la cita?",
        a: "Lo más habitual es entre 24 y 48 horas antes. Así la clienta tiene tiempo de cancelar y tú de volver a ocupar el hueco. Para citas largas o primeras visitas puedes añadir un segundo aviso corto el mismo día.",
      },
      {
        q: "¿Puedo enviar recordatorios por WhatsApp a mis clientas?",
        a: "Sí, los recordatorios de una cita que la clienta ha reservado forman parte del servicio. Informa en tu política de privacidad de que usas ese canal y no mezcles el recordatorio con promociones si no tienes su consentimiento para comunicaciones comerciales.",
      },
      {
        q: "¿Es legal cobrar una penalización por no presentarse?",
        a: "En general puedes fijar condiciones de cancelación si las informas de forma clara antes de la reserva y la clienta las acepta. Deben ser proporcionadas. Si tienes dudas sobre tu caso concreto, consulta con una asesoría o con la normativa de consumo de tu comunidad autónoma o país.",
      },
      {
        q: "¿Las reservas online aumentan los no-shows?",
        a: "No necesariamente. Si cada reserva online recibe confirmación y recordatorio automáticos y la clienta puede cancelar con un clic, el efecto suele ser el contrario: avisa más y falta menos.",
      },
      {
        q: "¿Qué tasa de no-shows es normal?",
        a: "Depende mucho del tipo de servicio, de la antelación de la reserva y de tu clientela. Más que compararte con otros, mide tu propia tasa cada mes y comprueba que baja tras introducir recordatorios.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Recordatorios automáticos por email, SMS y WhatsApp" },
      { pageKey: "online-booking", label: "Reservas online para tu centro" },
      { pageKey: "appointment-calendar", label: "Calendario de citas" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Reservas online
  // ─────────────────────────────────────────────────────────────
  {
    topic: "online-booking-salon",
    lang: "es",
    slug: "reservas-online-centro-estetica",
    title: "Reservas online para tu centro de estética: ventajas y cómo configurarlas",
    metaTitle: "Reservas online para centros de estética: guía práctica",
    description:
      "Por qué tu centro de estética necesita reservas online, qué servicios abrir, cómo configurar tu agenda online paso a paso y dónde poner tu enlace de reservas.",
    excerpt:
      "Tus clientas quieren reservar a las once de la noche desde el sofá. Así montas una agenda online que trabaja por ti sin perder el control de tus cabinas.",
    category: "Agenda y citas",
    keywords: [
      "reservas online centro de estética",
      "agenda online estética",
      "sistema de reservas online",
      "reservar cita online belleza",
      "enlace de reservas Instagram",
      "citas online salón de belleza",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Las reservas online permiten que tus clientas reserven a cualquier hora sin llamar ni escribir por WhatsApp, lo que libera tiempo del equipo, llena huecos fuera del horario de atención y reduce errores de agenda. Lo ideal es usar un enlace de reservas propio, sin comisiones, conectado a tu agenda y con confirmación y recordatorios automáticos.",
    takeaways: [
      "Muchas clientas reservan fuera de tu horario: sin reservas online, esas citas se pierden o se retrasan.",
      "Un enlace de reservas propio no cobra comisión y no te pone al lado de la competencia.",
      "No todos los servicios deben ser reservables online: las primeras sesiones de láser o de medicina estética pueden requerir valoración previa.",
      "Pon tu enlace en Instagram, Google, WhatsApp Business y tu web.",
      "Conecta las reservas con recordatorios automáticos para que no aumenten las ausencias.",
    ],
    intro: [
      "Son las diez de la noche. Tu clienta acaba de ver en Instagram los resultados de un tratamiento facial y quiere reservar. Te escribe por WhatsApp, pero tú estás en casa y contestas a la mañana siguiente. Para entonces, quizá ya ha reservado en otro sitio.",
      "Las reservas online resuelven justo eso: tu agenda está abierta cuando tus clientas tienen tiempo, no solo cuando tú puedes atender el teléfono. En esta guía verás las ventajas reales, cómo configurarlas bien y los errores que conviene evitar.",
    ],
    sections: [
      {
        heading: "¿Qué ventajas tienen las reservas online para un centro de estética?",
        paragraphs: [
          "No se trata solo de modernizarse. Las reservas online cambian la forma de trabajar del equipo:",
        ],
        bullets: [
          "**Reservas 24/7**: también por la noche, en fin de semana y en festivos.",
          "**Menos interrupciones**: nadie tiene que dejar a una clienta en la camilla para coger el teléfono.",
          "**Menos errores**: la clienta elige servicio, profesional y hora; no hay malentendidos de horario.",
          "**Agenda siempre actualizada**: las cancelaciones liberan el hueco al momento.",
          "**Mejor primera impresión**: reservar en un minuto transmite profesionalidad.",
          "**Datos completos**: nombre, teléfono y email llegan directamente a la ficha de la clienta.",
        ],
      },
      {
        heading: "¿Marketplace o enlace de reservas propio?",
        paragraphs: [
          "Hay dos formas de ofrecer reservas online. En un **marketplace** tu centro aparece en un directorio junto a otros, y la plataforma suele cobrar por reserva o por clienta nueva. Con un **enlace de reservas propio**, la clienta reserva directamente contigo, en una página con tu nombre, tus servicios y tus precios.",
          "Con Treatflow tienes tu enlace de reservas personal, conectado a tu agenda, sin comisión por reserva y sin que tu clienta vea otros centros. La relación y los datos siguen siendo tuyos.",
        ],
      },
      {
        heading: "¿Cómo configurar tu agenda online paso a paso?",
        paragraphs: [
          "Una buena configuración evita la mayoría de problemas. Sigue este orden:",
        ],
        steps: [
          "Revisa tu carta de servicios: nombres claros, duración real (incluida la preparación de cabina) y precio o precio desde.",
          "Define qué profesional y qué cabina o equipo hace cada servicio.",
          "Configura horarios, descansos y días festivos de cada persona.",
          "Decide con cuánta antelación mínima se puede reservar y hasta cuándo se puede cancelar online.",
          "Activa la confirmación por email y los recordatorios por SMS o WhatsApp.",
          "Añade tu política de cancelación y, si aplica, la ficha de anamnesis que debe rellenarse antes.",
          "Haz tres reservas de prueba desde el móvil, como si fueras clienta, y corrige lo que no se entienda.",
        ],
      },
      {
        heading: "¿Qué servicios conviene dejar reservar online?",
        paragraphs: [
          "No todo tiene que estar abierto. Una regla útil: abre online los servicios repetitivos y bien definidos, y deja para una consulta previa los que necesitan valoración profesional.",
        ],
        table: {
          headers: ["Servicio", "¿Reserva online?", "Comentario"],
          rows: [
            ["Manicura, pedicura, relleno de uñas", "Sí", "Ideal para reservas rápidas y repetidas"],
            ["Relleno de pestañas, lifting", "Sí", "Con recordatorio automático para el próximo relleno"],
            ["Tratamientos faciales y corporales", "Sí", "Indica bien la duración y la preparación"],
            ["Sesiones de depilación láser (bono en curso)", "Sí", "La primera sesión, mejor tras valoración y prueba"],
            ["Micropigmentación", "Consulta previa", "Abre online la consulta o el retoque"],
            ["Medicina estética", "Consulta o valoración", "El tratamiento se decide tras la valoración médica"],
          ],
        },
      },
      {
        heading: "¿Dónde colocar tu enlace de reservas?",
        paragraphs: [
          "El mejor sistema de reservas no sirve si nadie lo encuentra. Pon tu enlace en todos los sitios donde tus clientas ya te buscan:",
        ],
        bullets: [
          "En la biografía de Instagram y en los destacados de tus historias.",
          "En tu perfil de empresa de Google, con el botón de reservar o el enlace a tu web.",
          "Como respuesta rápida en WhatsApp Business.",
          "En tu web, con un botón visible en todas las páginas.",
          "En la firma de tu email y en un código QR en recepción.",
        ],
        callout:
          "Si todavía no tienes web, Treatflow ofrece de forma opcional una web para tu centro con el botón de reserva ya integrado.",
      },
      {
        heading: "¿Qué errores conviene evitar?",
        paragraphs: [
          "Estos fallos son los que más frustran a las clientas y al equipo:",
        ],
        bullets: [
          "Duraciones irreales que provocan retrasos en cadena.",
          "Demasiados servicios con nombres parecidos: la clienta no sabe cuál elegir.",
          "Agenda online y agenda de recepción separadas, con riesgo de citas dobles.",
          "No enviar confirmación ni recordatorio.",
          "Dejar que se reserve con minutos de antelación sin poder preparar la cabina.",
        ],
      },
      {
        heading: "¿Cómo combinar las reservas online con bonos y tratamientos por sesiones?",
        paragraphs: [
          "En estética y depilación láser muchas clientas compran un bono de varias sesiones. Lo ideal es que la reserva online y el bono estén conectados: la clienta reserva su siguiente sesión, y tú ves en su ficha cuántas le quedan y cuándo fue la última.",
          "Para tratamientos con intervalos fijos, como el láser (varias semanas entre sesiones) o el relleno de pestañas, configura un recordatorio que invite a reservar justo cuando toca. Así la clienta no tiene que acordarse y tú mantienes el ritmo del tratamiento, que también influye en el resultado.",
          "Y si el tratamiento requiere una ficha de anamnesis o un consentimiento, haz que se envíe automáticamente al reservar. Llegará a la cita con todo rellenado y firmado, y tú ganarás minutos de cabina en cada visita.",
        ],
      },
      {
        heading: "¿Cómo saber si tus reservas online funcionan?",
        paragraphs: [
          "Tras uno o dos meses, revisa estos datos: qué porcentaje de citas llega por el enlace, a qué horas se reserva (te sorprenderá cuántas reservas entran de noche), qué servicios se reservan más online y si las ausencias se mantienen bajas. Con esa información puedes ajustar horarios, abrir más servicios o reforzar el enlace en el canal que mejor funciona.",
        ],
      },
      {
        heading: "¿Se pierde el trato personal con las reservas online?",
        paragraphs: [
          "Al contrario. Si el equipo no pasa el día contestando mensajes para cuadrar horas, tiene más tiempo para lo que de verdad importa: la conversación en cabina, el asesoramiento y el seguimiento. Y quien prefiera llamar puede seguir haciéndolo; las reservas online son una opción más, no la única.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un sistema de reservas online para un centro de estética?",
        a: "Depende del modelo. Los marketplaces suelen cobrar comisión por reserva o por clienta nueva. Los programas de gestión cobran una cuota fija. En Treatflow, la agenda con reservas online está incluida en el plan Booking por 59 € al mes (53 € con pago anual), sin comisión por reserva.",
      },
      {
        q: "¿Puedo poner el enlace de reservas en Instagram?",
        a: "Sí. Es uno de los lugares más eficaces. Ponlo en la biografía y recuérdalo en tus historias y publicaciones con un llamado claro, por ejemplo «reserva tu cita en el enlace de la bio».",
      },
      {
        q: "¿Qué pasa si una clienta reserva un servicio que no le conviene?",
        a: "Por eso conviene dejar los tratamientos que requieren valoración como «consulta previa». Además, una ficha de anamnesis enviada antes de la cita te permite detectar contraindicaciones y reorganizar la cita a tiempo.",
      },
      {
        q: "¿Puede la clienta cancelar o cambiar su cita online?",
        a: "Sí, si lo permites. Lo recomendable es dejar cambiar o cancelar online hasta un plazo que tú decides, por ejemplo 24 horas antes. Pasado ese plazo, la clienta debe contactar contigo directamente.",
      },
      {
        q: "¿Las clientas mayores usan las reservas online?",
        a: "Cada vez más, sobre todo si el proceso es sencillo y funciona bien en el móvil. Para quien no quiera, mantener el teléfono o WhatsApp como alternativa es lo más sensato.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Reservas online sin comisiones" },
      { pageKey: "appointment-calendar", label: "Calendario de citas por profesional y cabina" },
      { pageKey: "studio-website", label: "Web para tu centro con botón de reserva" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Ficha de cliente y consentimiento
  // ─────────────────────────────────────────────────────────────
  {
    topic: "digital-consultation-forms",
    lang: "es",
    slug: "ficha-cliente-digital-estetica",
    title: "Ficha de cliente y consentimiento informado digital en estética: guía completa",
    metaTitle: "Ficha de cliente y consentimiento digital en estética",
    description:
      "Qué debe incluir la ficha de cliente en estética, cuándo necesitas consentimiento informado, si vale la firma digital y cómo pasar del papel al formato digital.",
    excerpt:
      "La ficha de anamnesis y el consentimiento informado protegen a tu clienta y a tu centro. Te explicamos qué preguntar según el tratamiento y cómo digitalizarlo sin complicaciones.",
    category: "Fichas y documentación",
    keywords: [
      "ficha de cliente estética",
      "ficha de anamnesis estética",
      "consentimiento informado estética",
      "consentimiento informado depilación láser",
      "consentimiento informado micropigmentación",
      "firma digital consentimiento",
      "ficha técnica cliente estética",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 8,
    answer:
      "La ficha de cliente (o ficha de anamnesis) recoge antes del tratamiento los datos de salud relevantes, como alergias, medicación, embarazo o problemas de piel, y el consentimiento informado documenta que la clienta conoce los riesgos y acepta el tratamiento. En formato digital, la clienta los rellena y firma desde el móvil antes de la cita y quedan guardados en su ficha, ordenados y protegidos.",
    takeaways: [
      "La ficha de anamnesis detecta contraindicaciones; el consentimiento informado documenta que la clienta acepta el tratamiento y sus riesgos.",
      "Adapta las preguntas a cada tratamiento: láser, micropigmentación, pestañas y medicina estética necesitan preguntas distintas.",
      "Los datos de salud son categoría especial según el RGPD: guárdalos con acceso restringido y en servidores seguros.",
      "Enviar los formularios antes de la cita ahorra tiempo en cabina y permite reorganizar si hay contraindicaciones.",
      "Actualiza la ficha periódicamente y siempre que cambie la salud o la medicación de la clienta.",
    ],
    intro: [
      "Una clienta llega a su primera sesión de láser. Rellena a mano una ficha en recepción, con prisa, y se olvida de mencionar que toma un antibiótico fotosensibilizante. Ese olvido puede acabar en una quemadura y en un problema serio para tu centro.",
      "La ficha de cliente y el consentimiento informado no son burocracia: son la base de un tratamiento seguro. En esta guía te contamos qué deben incluir, en qué se diferencian y cómo digitalizarlos para que tus clientas los rellenen con calma, antes de llegar.",
    ],
    sections: [
      {
        heading: "¿Qué es la ficha de cliente o ficha de anamnesis en estética?",
        paragraphs: [
          "Es el cuestionario que recoge la información que necesitas para decidir si un tratamiento es adecuado y cómo hacerlo. Incluye datos de contacto, antecedentes de salud relevantes, hábitos y expectativas. En medicina estética forma parte de la historia clínica; en un centro de estética es tu herramienta para trabajar con seguridad.",
          "Junto a la anamnesis está la **ficha técnica** o documentación del tratamiento: qué hiciste, con qué parámetros o productos y cómo reaccionó la piel. Las dos juntas te dan el historial completo de cada clienta.",
        ],
      },
      {
        heading: "¿Qué preguntas debe incluir según el tratamiento?",
        paragraphs: [
          "Hay preguntas comunes a todos (alergias, medicación, embarazo o lactancia, enfermedades de la piel) y otras específicas. Esta tabla te sirve como punto de partida; revísala con tu formación y, en medicina estética, con el criterio médico.",
        ],
        table: {
          headers: ["Tratamiento", "Preguntas clave"],
          rows: [
            ["Depilación láser / IPL", "Fototipo, exposición solar o autobronceador reciente, medicación fotosensibilizante, tatuajes en la zona, historial de herpes"],
            ["Micropigmentación", "Anticoagulantes, tendencia a queloides, herpes labial, diabetes, tratamientos previos en la zona"],
            ["Pestañas y lifting", "Alergias a adhesivos o cosméticos, cirugía ocular reciente, lentillas, conjuntivitis"],
            ["Tratamientos faciales y peelings", "Retinoides o isotretinoína, sensibilidad, rosácea, procedimientos recientes"],
            ["Medicina estética", "Alergias, medicación, enfermedades autoinmunes, rellenos o toxina previos, expectativas"],
            ["Uñas", "Alergias a acrílicos o geles, hongos, problemas de circulación"],
          ],
        },
      },
      {
        heading: "¿Qué diferencia hay entre la ficha y el consentimiento informado?",
        paragraphs: [
          "La ficha de anamnesis pregunta; el consentimiento informa y documenta la aceptación. En el consentimiento explicas en qué consiste el tratamiento, sus riesgos y efectos habituales, los cuidados posteriores y las alternativas. La clienta confirma que lo ha entendido y lo firma.",
          "En el ámbito sanitario, la Ley 41/2002 de autonomía del paciente exige el consentimiento por escrito en procedimientos invasivos, lo que afecta de lleno a las clínicas de medicina estética. En un centro de estética no sanitario no siempre es una obligación legal expresa, pero un consentimiento firmado es tu mejor prueba de que informaste bien a la clienta, sobre todo en láser y micropigmentación.",
        ],
        callout:
          "Los requisitos concretos pueden variar según tu actividad, tu comunidad autónoma o tu país. Si tienes una clínica o dudas sobre tu caso, revisa tus modelos con una asesoría especializada.",
      },
      {
        heading: "¿Es válida la firma digital en un consentimiento?",
        paragraphs: [
          "Sí. El Reglamento europeo eIDAS establece que no se puede negar efecto jurídico a una firma electrónica solo por ser electrónica. Para un centro de estética, una firma en pantalla vinculada al formulario, con fecha y hora y guardada en la ficha de la clienta, es mucho más fácil de localizar y demostrar que una hoja en un archivador.",
          "Lo importante es que el documento firmado no se pueda modificar después, que quede asociado a la clienta y a la fecha, y que puedas recuperarlo cuando lo necesites.",
        ],
      },
      {
        heading: "¿Cómo funciona la ficha digital paso a paso?",
        paragraphs: [
          "Un flujo típico, como el que usan los centros con Treatflow, es este:",
        ],
        steps: [
          "Creas tus plantillas de anamnesis y consentimiento una sola vez, una por tipo de tratamiento.",
          "La clienta reserva y recibe automáticamente el formulario que corresponde a su servicio.",
          "Lo rellena en casa, desde el móvil, y lo firma en la pantalla.",
          "Las respuestas y la firma se guardan en su ficha de clienta.",
          "Antes de la cita revisas las respuestas y detectas contraindicaciones a tiempo.",
          "Tras el tratamiento documentas parámetros, notas y fotos de antes y después en la misma ficha.",
        ],
        callout:
          "En Treatflow también puedes dictar las notas del tratamiento por voz en lugar de escribirlas, y la nota queda guardada en la visita.",
      },
      {
        heading: "¿Qué errores son los más habituales en las fichas de clientas?",
        paragraphs: [
          "Estos fallos se repiten en muchos centros, en papel y también en digital:",
        ],
        bullets: [
          "Preguntas demasiado genéricas («¿tienes alguna enfermedad?») que no detectan contraindicaciones concretas.",
          "Fichas larguísimas que la clienta rellena sin leer.",
          "Consentimientos copiados de internet que no corresponden a tu técnica ni a tu equipo.",
          "Respuestas que nadie revisa antes de empezar el tratamiento.",
          "Fotos de antes y después guardadas en el móvil personal o en chats.",
          "Fichas antiguas que nunca se actualizan.",
        ],
      },
      {
        heading: "¿Cada cuánto hay que actualizar la ficha de cliente?",
        paragraphs: [
          "Como mínimo, una vez al año para clientas habituales, y siempre que haya cambios: embarazo, nueva medicación, una intervención o un problema de piel. Un buen hábito es preguntar al inicio de cada sesión «¿ha cambiado algo desde la última vez?» y anotarlo.",
          "Para tratamientos por bono, como la depilación láser, revisa especialmente la exposición solar y la medicación antes de cada sesión.",
        ],
      },
      {
        heading: "¿Cuánto tiempo hay que guardar las fichas y consentimientos?",
        paragraphs: [
          "En los centros sanitarios, la Ley 41/2002 obliga a conservar la documentación clínica como mínimo cinco años desde el alta de cada proceso, y algunas comunidades autónomas fijan plazos más largos. En un centro de estética no sanitario, el RGPD exige guardarlos solo el tiempo necesario, que normalmente incluye el plazo en que podrías tener que defenderte de una reclamación.",
          "Define un plazo por escrito, aplícalo a todas las clientas y borra o anonimiza lo que ya no necesites.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Es obligatorio el consentimiento informado en un centro de estética?",
        a: "En clínicas de medicina estética y procedimientos invasivos, sí, por escrito. En centros de estética no sanitarios no siempre existe una obligación expresa, pero para láser, micropigmentación o peelings es muy recomendable: protege a la clienta y documenta que la informaste.",
      },
      {
        q: "¿Puedo usar el mismo consentimiento para todos los tratamientos?",
        a: "No es buena idea. Cada tratamiento tiene riesgos y cuidados distintos. Lo correcto es tener un consentimiento por tipo de tratamiento, con un lenguaje claro y adaptado.",
      },
      {
        q: "¿Qué hago con las fichas en papel que ya tengo?",
        a: "Puedes seguir guardándolas de forma segura hasta que venza su plazo de conservación y empezar con fichas digitales para las nuevas visitas. Si digitalizas fichas antiguas, guarda las copias con el mismo nivel de protección y destruye el papel de forma segura.",
      },
      {
        q: "¿Puede la clienta rellenar la ficha en recepción en una tablet?",
        a: "Sí, es una buena alternativa para quien no la haya rellenado en casa. Aun así, enviarla antes de la cita ahorra tiempo en cabina y da a la clienta tranquilidad para responder bien.",
      },
      {
        q: "¿Quién puede ver la ficha de salud de una clienta?",
        a: "Solo las personas que la necesitan para el tratamiento. Por eso conviene un software con permisos por rol, en lugar de carpetas compartidas o fotos en el móvil personal.",
      },
    ],
    related: [
      { pageKey: "forms", label: "Fichas y consentimientos digitales" },
      { pageKey: "treatment-documentation", label: "Documentación de tratamientos" },
      { pageKey: "client-records", label: "Fichas de clientes" },
    ],
    sources: [
      { label: "Ley 41/2002, básica reguladora de la autonomía del paciente (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188" },
      { label: "Reglamento (UE) 910/2014 eIDAS, EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2014/910/oj" },
      { label: "Agencia Española de Protección de Datos (AEPD)", url: "https://www.aepd.es" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Fidelización
  // ─────────────────────────────────────────────────────────────
  {
    topic: "client-retention",
    lang: "es",
    slug: "fidelizar-clientes-centro-estetica",
    title: "Cómo fidelizar clientas en tu centro de estética: 7 estrategias que funcionan",
    metaTitle: "Cómo fidelizar clientas en tu centro de estética",
    description:
      "Siete estrategias para fidelizar clientas en tu centro de estética: próxima cita reservada, mensajes automáticos, bonos, trato personal y recuperar inactivas.",
    excerpt:
      "Captar clientas nuevas cuesta mucho más que conservar las que ya tienes. Estas siete estrategias convierten una primera visita en una relación de años.",
    category: "Marketing y fidelización",
    keywords: [
      "fidelizar clientes centro de estética",
      "fidelización clientes estética",
      "estrategias de fidelización belleza",
      "bonos de sesiones estética",
      "recuperar clientes inactivos",
      "marketing para centros de estética",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 7,
    answer:
      "Para fidelizar clientas en un centro de estética, lo más eficaz es reservar la próxima cita antes de que se vaya, enviar mensajes automáticos en el momento justo (recordatorio de relleno, cumpleaños, seguimiento) y personalizar cada visita con la información de su ficha. Los bonos de sesiones y las tarjetas regalo refuerzan el vínculo, y una campaña para clientas inactivas recupera a quienes se han alejado.",
    takeaways: [
      "La segunda visita es la más importante: propón la siguiente cita antes de que la clienta salga.",
      "Automatiza los mensajes que dependen del calendario: rellenos, retoques, sesiones de bono y cumpleaños.",
      "Usa la ficha de clienta para recordar preferencias y personalizar el trato.",
      "Los bonos de sesiones y las tarjetas regalo crean compromiso y traen clientas nuevas.",
      "Para enviar promociones necesitas consentimiento o una relación previa, según la LSSI.",
    ],
    intro: [
      "Inviertes en Instagram, en promociones de bienvenida y quizá en algún marketplace para que te conozcan. Llega una clienta nueva, queda encantada… y no vuelve. No porque le haya ido mal, sino porque nadie le propuso la siguiente cita y la vida se cruzó por medio.",
      "Fidelizar no es cuestión de suerte ni de descuentos constantes. Es un sistema: pequeños gestos en el momento adecuado. Aquí tienes siete estrategias que puedes aplicar desde esta semana.",
    ],
    sections: [
      {
        heading: "¿Por qué fidelizar es más rentable que captar clientas nuevas?",
        paragraphs: [
          "Una clienta que ya te conoce no necesita publicidad para reservar, confía en tu criterio para probar nuevos tratamientos y te recomienda a su entorno. Captar a una desconocida, en cambio, exige anuncios, ofertas y tiempo. Por eso, cada punto que mejoras en repetición suele tener más impacto en tu facturación que muchas campañas de captación.",
        ],
      },
      {
        heading: "¿Qué hace que una clienta quiera repetir la experiencia?",
        paragraphs: [
          "Más allá del resultado, las clientas vuelven por cómo se sienten en tu centro. Puntualidad, una cabina limpia y tranquila, una explicación clara de lo que vas a hacer y unos cuidados posteriores por escrito marcan la diferencia. Un mensaje unos días después para preguntar qué tal la piel o las pestañas cuesta segundos y se recuerda durante meses.",
          "Revisa tu proceso completo con ojos de clienta: cómo reserva, qué recibe antes de la cita, cómo la recibes, qué se lleva a casa y qué pasa después. Cada punto flojo es una oportunidad de mejora.",
        ],
      },
      {
        heading: "1. ¿Cómo conseguir que la clienta vuelva tras la primera visita?",
        paragraphs: [
          "Proponiendo la siguiente cita antes de que se vaya. En uñas, pestañas o depilación láser el siguiente paso es evidente: el relleno o la siguiente sesión. Dilo con naturalidad: «para que el resultado se mantenga, lo ideal es vernos en tres semanas, ¿te va bien el jueves 14?».",
          "Si prefiere no reservar en ese momento, anótalo en su ficha y programa un recordatorio para unos días antes de cuando debería volver.",
        ],
      },
      {
        heading: "2. ¿Qué mensajes automáticos merece la pena enviar?",
        paragraphs: [
          "Los que aportan algo a la clienta en el momento oportuno. Con un software como Treatflow se envían solos por email, SMS o WhatsApp:",
        ],
        table: {
          headers: ["Mensaje", "Cuándo", "Objetivo"],
          rows: [
            ["Confirmación y recordatorio", "Al reservar y 24–48 h antes", "Evitar olvidos"],
            ["Cuidados posteriores", "El mismo día del tratamiento", "Mejor resultado y menos dudas"],
            ["Seguimiento", "Pocos días después", "Mostrar interés y detectar problemas"],
            ["Recordatorio de relleno o sesión", "Según el ciclo del tratamiento", "Que reserve a tiempo"],
            ["Felicitación de cumpleaños", "En su cumpleaños", "Detalle personal, con o sin regalo"],
          ],
        },
      },
      {
        heading: "3. ¿Cómo personalizar el trato con la ficha de clienta?",
        paragraphs: [
          "Recordar que prefiere el té sin azúcar, que tiene la piel sensible en invierno o que la última vez eligió un tono nude marca la diferencia. Nadie puede acordarse de todo con decenas de clientas a la semana, pero la ficha digital sí.",
          "Anota preferencias, productos usados, fotos de resultados y comentarios personales relevantes. Antes de cada cita, échale un vistazo de 30 segundos: tu clienta notará que la conoces.",
        ],
      },
      {
        heading: "4. ¿Funcionan los bonos de sesiones y las tarjetas regalo?",
        paragraphs: [
          "Sí, y en España son un clásico. Un bono de varias sesiones de láser, de tratamientos faciales o de masajes asegura que la clienta vuelva y te da previsibilidad. Las tarjetas regalo, además, traen clientas nuevas recomendadas por las actuales, sobre todo en Navidad, San Valentín y el Día de la Madre.",
          "La clave es controlarlos bien: cuántas sesiones quedan, fecha de caducidad y quién lo canjea. Un Excel o un cuaderno acaban dando problemas; un sistema de vales integrado evita discusiones.",
        ],
      },
      {
        heading: "5. ¿Cómo convertir a tus clientas en embajadoras?",
        paragraphs: [
          "Las recomendaciones son la publicidad más creíble. Facilítalas:",
        ],
        bullets: [
          "Pide una reseña en Google justo después de una cita en la que la clienta se ha ido feliz.",
          "Ofrece un detalle a quien traiga a una amiga, y otro a la amiga.",
          "Comparte resultados en redes, siempre con el consentimiento expreso de la clienta para usar sus fotos.",
        ],
      },
      {
        heading: "6. ¿Cómo recuperar a las clientas inactivas?",
        paragraphs: [
          "Revisa cada mes qué clientas llevan más tiempo del habitual sin venir. Para una clienta de uñas pueden ser seis semanas; para un facial, tres meses.",
        ],
        steps: [
          "Filtra en tu software las clientas sin cita desde hace un tiempo definido.",
          "Envía un mensaje personal y breve, sin presión: «hace tiempo que no te vemos, ¿te reservo un hueco?».",
          "Si quieres, añade un pequeño incentivo con fecha límite.",
          "Anota la respuesta en la ficha: si se ha mudado o ya no le interesa, no insistas.",
        ],
      },
      {
        heading: "7. ¿Qué indicadores debes medir?",
        paragraphs: [
          "Lo que no se mide no mejora. Con estos cuatro datos sabrás si tu fidelización funciona:",
        ],
        table: {
          headers: ["Indicador", "Qué te dice"],
          rows: [
            ["Tasa de repetición", "Qué porcentaje de clientas nuevas vuelve a reservar"],
            ["Tiempo entre visitas", "Si las clientas vuelven cuando deberían"],
            ["Clientas inactivas", "A cuántas has perdido el rastro"],
            ["Valor medio por clienta", "Cuánto factura de media cada clienta al año"],
          ],
        },
        callout:
          "Ojo con el RGPD y la LSSI: los recordatorios de citas forman parte del servicio, pero para enviar promociones por email, SMS o WhatsApp necesitas el consentimiento de la clienta o una relación previa con productos similares, y siempre una forma sencilla de darse de baja.",
      },
      {
        heading: "¿Cómo organizar la fidelización sin perder tiempo cada día?",
        paragraphs: [
          "La fidelización falla cuando depende de que alguien se acuerde. Por eso conviene dividirla en tres bloques: lo que se automatiza, lo que se hace en cada cita y lo que se revisa una vez al mes.",
        ],
        bullets: [
          "**Automático**: confirmaciones, recordatorios, cuidados posteriores, recordatorios de relleno y cumpleaños.",
          "**En cada cita**: proponer la siguiente, actualizar la ficha y anotar preferencias.",
          "**Cada mes**: revisar clientas inactivas, bonos a punto de caducar y los cuatro indicadores.",
        ],
        callout:
          "Con este reparto, la parte manual se queda en unos minutos al día y el resto lo hace el sistema. Así la fidelización deja de ser un propósito y se convierte en rutina.",
      },
    ],
    faq: [
      {
        q: "¿Qué es más eficaz para fidelizar: descuentos o atención personalizada?",
        a: "La atención personalizada. Los descuentos atraen, pero si son constantes devalúan tu servicio. Recordar preferencias, hacer seguimiento y proponer la siguiente cita crea un vínculo más duradero.",
      },
      {
        q: "¿Cada cuánto debo escribir a mis clientas?",
        a: "Solo cuando aportes algo: recordatorio, cuidados, seguimiento o una novedad relevante. Para promociones, una o dos veces al mes suele ser suficiente; más puede provocar bajas.",
      },
      {
        q: "¿Puedo enviar felicitaciones de cumpleaños por WhatsApp?",
        a: "Sí, si tienes la fecha de nacimiento con su permiso y la clienta ha aceptado recibir mensajes. Si la felicitación incluye una oferta, se considera comunicación comercial y necesitas su consentimiento.",
      },
      {
        q: "¿Qué hago si una clienta deja de venir tras una mala experiencia?",
        a: "Escríbele de forma personal, reconoce lo ocurrido sin excusas y ofrécele una solución concreta. Muchas clientas vuelven si sienten que las has escuchado. Anota lo aprendido para que no se repita.",
      },
      {
        q: "¿Cómo gestiono los bonos de sesiones sin errores?",
        a: "Con un sistema que registre cuántas sesiones quedan, la caducidad y cada canje, vinculado a la ficha de la clienta. Así cualquier persona del equipo puede consultarlo sin depender de tarjetas de cartón.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "Mensajes automáticos para tus clientas" },
      { pageKey: "client-records", label: "Fichas de clientes con historial" },
      { pageKey: "vouchers", label: "Vales y tarjetas regalo" },
    ],
    sources: [
      { label: "Ley 34/2002, de servicios de la sociedad de la información (LSSI), BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. RGPD
  // ─────────────────────────────────────────────────────────────
  {
    topic: "gdpr-beauty-salon",
    lang: "es",
    slug: "rgpd-centro-estetica",
    title: "RGPD y LOPDGDD en tu centro de estética: guía práctica de protección de datos",
    metaTitle: "RGPD en centros de estética: guía práctica y checklist",
    description:
      "Qué exigen el RGPD y la LOPDGDD a un centro de estética: datos de salud, consentimientos, fotos, WhatsApp, brechas de seguridad y checklist de documentos.",
    excerpt:
      "Alergias, medicación, fotos de antes y después: en estética manejas datos de salud. Esto es lo que debes tener en orden según el RGPD y la LOPDGDD.",
    category: "Protección de datos",
    keywords: [
      "RGPD centro de estética",
      "protección de datos centro de estética",
      "LOPDGDD estética",
      "datos de salud RGPD",
      "AEPD centro de estética",
      "fotos antes y después RGPD",
      "protección de datos clínica estética",
    ],
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-01",
    readMinutes: 9,
    answer:
      "Un centro de estética en España debe cumplir el RGPD y la LOPDGDD, y como trata datos de salud de sus clientas (alergias, medicación, embarazo, fotos de tratamientos) tiene que aplicar medidas reforzadas. Lo básico es informar a la clienta, tener una base legal para cada uso de sus datos, llevar un registro de actividades de tratamiento, firmar contratos con los proveedores que acceden a los datos y proteger la información con acceso restringido y sistemas seguros.",
    takeaways: [
      "Las fichas de anamnesis contienen datos de salud: son categoría especial según el art. 9 del RGPD.",
      "Necesitas cláusula informativa, registro de actividades, contratos de encargado y un procedimiento para atender derechos.",
      "Para usar fotos en redes sociales necesitas un consentimiento específico y aparte.",
      "Las promociones por email, SMS o WhatsApp requieren consentimiento o relación previa (LSSI).",
      "Ante una brecha de seguridad grave tienes 72 horas para notificarla a la AEPD.",
    ],
    intro: [
      "Muchos centros de estética creen que la protección de datos es cosa de grandes empresas o de hospitales. Pero piensa en lo que guardas: nombre, teléfono, alergias, medicación, embarazos, fotos de la cara o del cuerpo. Son datos muy personales, y la ley los protege con especial cuidado.",
      "Esta guía resume, en lenguaje claro, lo que el RGPD y la LOPDGDD esperan de un centro de estética, una clínica de medicina estética o un centro de depilación láser. No sustituye al asesoramiento jurídico, pero te ayuda a saber qué tienes que revisar.",
    ],
    sections: [
      {
        heading: "¿Qué normas de protección de datos se aplican a un centro de estética?",
        paragraphs: [
          "En España se aplican dos normas principales: el **Reglamento General de Protección de Datos (RGPD)**, común a toda la Unión Europea, y la **Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)**, que lo concreta. La autoridad de control es la **Agencia Española de Protección de Datos (AEPD)**.",
          "Si envías comunicaciones comerciales por medios electrónicos, también entra en juego la **LSSI**. Y si tienes una clínica de medicina estética, la Ley 41/2002 de autonomía del paciente regula la historia clínica y el consentimiento informado.",
        ],
        callout:
          "Si tu centro está en Latinoamérica, aplica la ley de protección de datos de tu país. Muchos principios son parecidos (informar, pedir consentimiento, proteger los datos), pero los requisitos concretos cambian.",
      },
      {
        heading: "¿Son datos de salud los que recoges en la ficha de clienta?",
        paragraphs: [
          "Sí, en buena parte. Alergias, medicación, enfermedades de la piel, embarazo o tratamientos previos son **datos relativos a la salud**, una categoría especial del artículo 9 del RGPD. Su tratamiento está prohibido salvo excepciones, como el consentimiento explícito de la clienta o, en el ámbito sanitario, la prestación de asistencia sanitaria.",
          "En la práctica, para un centro de estética lo habitual es pedir el **consentimiento explícito** de la clienta para tratar esos datos con la finalidad del tratamiento estético, y recoger solo lo que realmente necesitas.",
        ],
      },
      {
        heading: "¿Qué documentos necesita tu centro para cumplir el RGPD?",
        paragraphs: [
          "Esta es la lista mínima que deberías tener preparada:",
        ],
        bullets: [
          "**Cláusula informativa** para clientas: quién eres, qué datos tratas, para qué, cuánto tiempo los guardas y cómo ejercer sus derechos.",
          "**Registro de actividades de tratamiento**: clientas, empleadas, proveedores, videovigilancia si la tienes.",
          "**Consentimientos** separados: datos de salud para el tratamiento, uso de fotos en redes, comunicaciones comerciales.",
          "**Contratos de encargado del tratamiento** con tu software, tu gestoría, tu proveedor de email o SMS.",
          "**Compromiso de confidencialidad** firmado por cada persona del equipo.",
          "**Procedimiento para atender derechos** (acceso, rectificación, supresión, oposición, limitación y portabilidad) en el plazo de un mes.",
          "**Procedimiento ante brechas de seguridad** y un registro de incidentes.",
          "**Política de privacidad y de cookies** en tu web.",
        ],
        callout:
          "La AEPD ofrece en su web guías y herramientas gratuitas para pequeñas empresas que tratan datos de bajo riesgo. Con datos de salud, conviene además revisar tu documentación con una asesoría.",
      },
      {
        heading: "¿Necesitas un delegado de protección de datos (DPD)?",
        paragraphs: [
          "Depende de tu actividad. La LOPDGDD obliga, entre otros, a los centros sanitarios legalmente obligados a mantener historias clínicas, con excepción de los profesionales sanitarios que ejercen a título individual. Una clínica de medicina estética con varios profesionales puede estar en este caso.",
          "Un centro de estética no sanitario normalmente no está obligado, aunque puede nombrar uno de forma voluntaria. Si no estás segura, consúltalo: el coste de un DPD externo suele ser asumible y te quita dudas.",
        ],
      },
      {
        heading: "¿Puedes hacer y publicar fotos de antes y después?",
        paragraphs: [
          "Hacer fotos para documentar el tratamiento es razonable y forma parte de la ficha, siempre que la clienta esté informada. **Publicarlas** en Instagram, en tu web o en un anuncio es otra finalidad y necesita un **consentimiento específico, aparte y revocable**.",
        ],
        bullets: [
          "Guarda las fotos en la ficha de la clienta, no en el móvil personal ni en chats.",
          "Pide el consentimiento para redes por separado, nunca escondido en el consentimiento del tratamiento.",
          "Si la clienta lo retira, deja de usar las fotos y retíralas de tus canales.",
          "Evita que se vean rasgos identificables si no son necesarios.",
        ],
      },
      {
        heading: "¿Puedes enviar recordatorios y promociones por WhatsApp o email?",
        paragraphs: [
          "Los **recordatorios de cita** y los mensajes sobre un servicio contratado forman parte de la relación con la clienta. Infórmale del canal que usas en tu cláusula informativa.",
          "Las **promociones** son otra cosa. Según la LSSI, necesitas su consentimiento previo, salvo que ya sea clienta y le ofrezcas productos o servicios similares a los que contrató, y siempre con una forma fácil y gratuita de darse de baja en cada mensaje. Usa una cuenta de empresa, no tu WhatsApp personal, y no compartas contactos en grupos donde todas ven los números de todas.",
        ],
      },
      {
        heading: "¿Qué hacer si sufres una brecha de seguridad?",
        paragraphs: [
          "Un móvil robado con fotos de clientas, un email enviado a la persona equivocada o un acceso indebido al programa son brechas de seguridad. Actúa así:",
        ],
        steps: [
          "Contén el problema: cambia contraseñas, bloquea el dispositivo o retira el acceso.",
          "Valora el riesgo para las clientas afectadas: qué datos, cuántas personas, si incluye datos de salud.",
          "Si hay riesgo para sus derechos, notifícalo a la AEPD en un máximo de 72 horas desde que lo conoces.",
          "Si el riesgo es alto, informa también a las clientas afectadas.",
          "Documenta la brecha y las medidas tomadas, aunque no tengas que notificarla.",
        ],
      },
      {
        heading: "¿Qué debe ofrecer tu software para ayudarte con el RGPD?",
        paragraphs: [
          "El software no te hace cumplir por sí solo, pero puede ponértelo mucho más fácil:",
        ],
        table: {
          headers: ["Requisito", "Qué buscar en el software"],
          rows: [
            ["Seguridad", "Conexión cifrada (SSL), copias de seguridad, acceso con contraseña personal"],
            ["Ubicación de los datos", "Servidores en la Unión Europea"],
            ["Contrato de encargado", "Contrato disponible y claro"],
            ["Acceso restringido", "Permisos por rol para el equipo"],
            ["Consentimientos", "Formularios con firma digital guardados en la ficha"],
            ["Derechos de la clienta", "Exportar, corregir y borrar datos fácilmente"],
          ],
        },
        callout:
          "Treatflow aloja los datos en servidores de la UE (Frankfurt), con SSL y copias de seguridad diarias, y guarda fichas, consentimientos firmados y fotos en la ficha de cada clienta. El centro sigue siendo el responsable y el propietario de los datos.",
      },
    ],
    faq: [
      {
        q: "¿Tengo que registrar mi centro en la AEPD?",
        a: "No. Desde el RGPD ya no existe la inscripción de ficheros en la AEPD. En su lugar debes llevar internamente un registro de actividades de tratamiento y tener tu documentación al día por si te la solicitan.",
      },
      {
        q: "¿Puedo guardar las fichas de clientas en papel?",
        a: "Sí, el RGPD también se aplica al papel. Deben estar en un armario cerrado con llave, con acceso solo para quien las necesita, y destruirse de forma segura cuando venza el plazo de conservación.",
      },
      {
        q: "¿Cuánto tiempo puedo guardar los datos de una clienta?",
        a: "El necesario para la finalidad y para cumplir obligaciones legales. En centros sanitarios, la documentación clínica se conserva al menos cinco años desde el alta según la Ley 41/2002, y algunas comunidades exigen más. Define tus plazos por escrito y aplícalos.",
      },
      {
        q: "¿Qué pasa si una clienta pide que borre sus datos?",
        a: "Debes atender la solicitud en el plazo de un mes. Borra lo que ya no necesites y conserva, bloqueado, solo lo que estés obligada a guardar por ley, explicándoselo a la clienta.",
      },
      {
        q: "¿Puedo usar WhatsApp para enviar la ficha de anamnesis?",
        a: "Es mejor no enviar ni recibir datos de salud por chat. Envía por WhatsApp o email un enlace a un formulario seguro, para que las respuestas se guarden directamente en la ficha de la clienta.",
      },
      {
        q: "¿Qué multas puede imponer la AEPD?",
        a: "El RGPD prevé multas que dependen de la gravedad y del tamaño de la empresa, además de apercibimientos. Para un centro pequeño, más que la cuantía, preocupa el daño a la confianza de las clientas: por eso merece la pena tener lo básico en orden.",
      },
    ],
    related: [
      { pageKey: "client-records", label: "Fichas de clientes seguras" },
      { pageKey: "forms", label: "Consentimientos con firma digital" },
      { pageKey: "treatment-documentation", label: "Documentación de tratamientos" },
    ],
    sources: [
      { label: "Agencia Española de Protección de Datos (AEPD)", url: "https://www.aepd.es" },
      { label: "Reglamento General de Protección de Datos (RGPD), EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Ley Orgánica 3/2018 (LOPDGDD), BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673" },
      { label: "Ley 34/2002 (LSSI), BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758" },
      { label: "Ley 41/2002 de autonomía del paciente, BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188" },
    ],
  },
  // ---------------------------------------------------------------------------
  // 7. Calcular precios de tratamientos
  // ---------------------------------------------------------------------------
  {
    topic: "pricing-beauty-treatments",
    lang: "es",
    slug: "como-calcular-precios-centro-de-estetica",
    title: "Cómo calcular los precios de tu centro de estética: método paso a paso por tratamiento",
    metaTitle: "Cómo calcular los precios de un centro de estética",
    description:
      "Cómo calcular los precios de tus tratamientos: coste por hora mínimo, tiempo, producto y margen por servicio, comparación con la competencia y una tarifa clara.",
    excerpt:
      "Copiar la tarifa del centro de enfrente no es una estrategia. Aquí tienes el cálculo de tu coste por hora, cuatro ejemplos de precio y claves para una tarifa que da confianza.",
    category: "Gestión del centro",
    keywords: [
      "cómo calcular precios centro de estética",
      "precios centro de estética",
      "tarifa de precios estética",
      "coste por hora esteticista",
      "cuánto cobrar por una limpieza facial",
      "estrategia de precios salón de belleza",
      "precio extensiones de pestañas",
    ],
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    readMinutes: 8,
    answer:
      "El precio correcto de un tratamiento se calcula de abajo arriba, desde tus costes, y solo al final se contrasta con el mercado. Primero saca tu coste por hora mínimo: gastos fijos mensuales más el sueldo que necesitas, dividido entre las horas que de verdad facturas. Multiplica esa tarifa por el tiempo total que ocupa el tratamiento (con preparación y limpieza), suma el producto consumido y un margen del 10–20 %.",
    takeaways: [
      "Coste por hora mínimo = (gastos fijos + tu sueldo) ÷ horas facturables, y son muchas menos que tus horas de apertura.",
      "Calcula todo el tiempo que el tratamiento ocupa la cabina y a la profesional, no solo los minutos en camilla.",
      "Suma el material fungible de cada servicio y un margen para reservas, reparaciones y crecimiento.",
      "Los precios de la competencia indican lo que acepta el mercado, no lo que tú necesitas ganar.",
      "Una tarifa clara, por niveles y visible online genera confianza y facilita que suban de categoría.",
    ],
    intro: [
      "Muchas dueñas de centros fijan sus precios una sola vez, al abrir, mirando lo que cobran los salones del barrio. Unos años después, el alquiler, el producto, la luz y los sueldos han subido, pero la tarifa apenas se ha movido. La agenda está llena; la cuenta del banco, no. Estar ocupada y ser rentable no son lo mismo.",
      "En esta guía verás cómo calcular precios que cubren tus costes y te pagan bien. Sirve para centros de estética, clínicas de medicina estética, centros de uñas, pestañas y micropigmentación, centros de depilación láser, spas y centros de masaje. Las cifras de los ejemplos son orientativas: cámbialas por las tuyas y tendrás un precio mínimo sólido para cada servicio.",
    ],
    sections: [
      {
        heading: "¿Por qué tantos centros de estética cobran de menos?",
        paragraphs: [
          "El motivo más habitual es que los precios se copian en lugar de calcularse. No conoces el alquiler, la plantilla ni la financiación del centro que tomas como referencia, así que heredas sus suposiciones y, quizá, también sus pérdidas.",
          "El segundo motivo es el miedo: a perder clientas fijas, a parecer cara, a tener huecos en la agenda. En la práctica, quien vuelve por el resultado y la experiencia rara vez se va por un precio razonable y bien explicado. Quien solo busca lo más barato se irá de todos modos a la siguiente oferta.",
          "El tercer motivo es el tiempo invisible. Un facial de 60 minutos, sumando la ficha previa, preparar la cabina, limpiar, desinfectar y anotar el tratamiento, te ocupa fácilmente 75 minutos. Si ese tiempo no está en el precio, lo estás regalando.",
        ],
      },
      {
        heading: "¿Cómo se calcula el coste por hora mínimo?",
        paragraphs: [
          "Tu coste por hora mínimo es lo que tiene que generar cada hora facturable para cubrir todos los gastos y pagarte un sueldo justo. Recalcúlalo al menos una vez al año y siempre que cambie un gasto importante, como un nuevo alquiler o un equipo nuevo.",
        ],
        steps: [
          "Suma tus gastos fijos mensuales: alquiler, suministros, seguros, software, marketing, gestoría, formación, renting o financiación de equipos y todo lo que pagas vengan o no las clientas.",
          "Decide el sueldo que necesitas como titular, incluyendo IRPF y la cuota de autónomos. Si tienes empleadas, añade su coste empresa completo.",
          "Calcula tus horas facturables: días laborables al mes × horas al día, menos el tiempo de gestión, pausas, limpieza entre clientas, bajas y huecos de agenda. Para la mayoría de centros es realista restar un 20–30 %.",
          "Divide gastos fijos más sueldo entre las horas facturables. Ese es tu precio por hora de equilibrio.",
          "Añade un margen de entre el 10 y el 20 % para reservas, averías, meses flojos e inversiones.",
        ],
        table: {
          headers: ["Concepto (ejemplo)", "Al mes"],
          rows: [
            ["Alquiler", "900 €"],
            ["Luz y agua", "150 €"],
            ["Seguros", "80 €"],
            ["Software de gestión", "59 €"],
            ["Marketing", "200 €"],
            ["Gestoría", "120 €"],
            ["Formación", "100 €"],
            ["Renting de aparatología", "350 €"],
            ["Otros", "141 €"],
            ["**Total gastos fijos**", "**2.100 €**"],
            ["Sueldo de la titular con IRPF y cuota de autónomos", "3.500 €"],
            ["Horas facturables (20 días × 8 h menos 25 %)", "120 h"],
            ["Equilibrio: 5.600 € ÷ 120 h", "46,67 €/h"],
            ["Tarifa objetivo con margen del 15 %", "≈ 54 €/h"],
          ],
        },
        callout:
          "El error más frecuente está en las horas facturables. Si calculas con 160 horas pero en realidad atiendes clientas 110, cada precio de tu tarifa está aproximadamente un tercio por debajo de lo que debería.",
      },
      {
        heading: "¿Cómo pasas del precio por hora al precio del tratamiento?",
        paragraphs: [
          "Para cada servicio, toma el tiempo total que la cabina y la profesional están ocupadas, multiplícalo por tu tarifa objetivo y suma el fungible de cada sesión: mascarillas, ampollas, gel, pestañas, adhesivo, agujas o material desechable. Si el renting del equipo ya está en tus gastos fijos, no lo cuentes otra vez.",
          "El resultado es tu precio mínimo. Puedes cobrar más por experiencia, demanda o una línea de producto premium, pero no deberías cobrar menos de forma habitual.",
        ],
        table: {
          headers: ["Tratamiento", "Tiempo ocupado", "Tiempo × 54 €", "Fungible", "Precio mínimo"],
          rows: [
            ["Limpieza facial clásica", "75 min", "67,50 €", "8 €", "≈ 76 €"],
            ["Manicura semipermanente", "70 min", "63,00 €", "5 €", "≈ 68 €"],
            ["Extensiones de pestañas, puesta completa", "130 min", "117,00 €", "12 €", "≈ 129 €"],
            ["Depilación láser de axilas", "25 min", "22,50 €", "4 €", "≈ 27 €"],
          ],
        },
        bullets: [
          "Los tratamientos cortos con aparatología, como el láser, suelen tener precios muy por encima de su mínimo por tiempo, por la inversión, la formación y la demanda. Está bien, siempre que el mínimo quede cubierto.",
          "Los tratamientos largos con poco producto, como los masajes, son los que más a menudo se cobran por debajo de su valor. Revísalos primero.",
        ],
      },
      {
        heading: "¿Cuánto deben pesar los precios de la competencia?",
        paragraphs: [
          "Fíjate en cinco a diez centros con los que tu clienta ideal te compararía de verdad, no en todos los de tu ciudad. Anota los precios de tus tres o cuatro tratamientos clave y cómo se posiciona cada centro: low cost, gama media o premium.",
          "Después compáralo con tu precio mínimo. Si el mercado está claramente por encima, tienes margen para fijar precios según el valor. Si está por debajo, la guerra de precios es una carrera perdida: refuerza lo que te diferencia, como especialización, resultados, documentación cuidadosa, comodidad o disponibilidad, y pon precio en consecuencia.",
        ],
        bullets: [
          "El posicionamiento low cost exige mucho volumen y procesos muy ágiles.",
          "La gama media exige una experiencia constante y una buena tasa de repetición.",
          "El premium exige experiencia visible, una consulta previa cuidada y un recorrido de clienta impecable desde la reserva hasta el cuidado posterior.",
        ],
      },
      {
        heading: "¿Cómo crear una tarifa de precios que tus clientas entiendan?",
        paragraphs: [
          "Una buena tarifa ayuda a decidir rápido y hace que la opción de más valor parezca natural. Mantenla corta, pon la duración junto al precio y describe el resultado, no solo los pasos.",
        ],
        bullets: [
          "Ofrece dos o tres niveles en los tratamientos principales, por ejemplo un facial de 45, 75 y 90 minutos. Cuando las diferencias se entienden, muchas clientas eligen el del medio.",
          "Pon precio aparte a los extras (contorno de ojos, mascarilla adicional, parafina, nail art) para que puedan mejorar el servicio sin que descuentes el principal.",
          "Agrupa los tratamientos por sesiones, como el láser o los programas faciales, en bonos con un número de sesiones definido y un ahorro moderado.",
          "Decide si la valoración inicial es gratuita, de pago o descontable del primer tratamiento, y dilo con claridad.",
          "Muestra precios finales con IVA incluido y usa los precios 'desde' solo cuando el importe dependa de verdad de la zona o la longitud.",
          "Usa los mismos precios en todas partes: web, página de reservas online, Instagram y centro.",
        ],
        callout:
          "En la reserva online cada servicio tiene su duración y su precio, así que la clienta ve qué reserva antes de confirmar. Con Treatflow, la página de reservas está en tu propio enlace y no pagas comisión por cita: solo una cuota fija de 39 o 59 € al mes, con 14 días de prueba gratis y sin tarjeta.",
      },
      {
        heading: "¿Cuándo y cómo subir los precios?",
        paragraphs: [
          "Revisa tu cálculo al menos una vez al año y después de cada subida importante de costes. Los ajustes pequeños y periódicos se aceptan mucho mejor que un gran salto tras varios años.",
        ],
        steps: [
          "Recalcula tu precio por hora con los costes actuales y compara cada servicio con su mínimo.",
          "Anuncia los nuevos precios con cuatro a seis semanas de antelación por email, mensaje y en el centro.",
          "Da un motivo breve y sincero, como la subida del producto, la energía o la formación, sin pedir perdón.",
          "Mantén el precio antiguo en las citas ya reservadas para que nadie se sienta sorprendida.",
          "Prepara a tu equipo para que todas respondan a las preguntas con la misma calma.",
        ],
      },
      {
        heading: "¿Qué errores de precio le cuestan más dinero a un centro?",
        paragraphs: [
          "Casi todos los problemas de precio nacen de unos pocos hábitos que se cuelan con el tiempo. Revisa tu tarifa con esta lista una vez al año.",
        ],
        bullets: [
          "Ofertas de bienvenida que nunca terminan y enseñan a las clientas a esperar el descuento.",
          "Descuentos personales improvisados, sin registrar, que acaban siendo lo normal.",
          "No incluir preparación, limpieza y documentación en la duración de los servicios.",
          "No tener normas para cancelaciones tardías y citas no presentadas, de modo que cada hueco lo pagas tú.",
          "Pasar años sin subir precios y luego subirlos mucho de golpe.",
          "No comprobar nunca qué servicios dejan dinero y cuáles solo llenan la agenda.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cómo se calcula el precio de un tratamiento estético?",
        a: "Primero calcula tu precio por hora: gastos fijos mensuales más tu sueldo, divididos entre tus horas facturables reales, más un 10–20 % de margen. Multiplícalo por el tiempo total del tratamiento con preparación y limpieza, y suma el fungible. El resultado es tu precio mínimo.",
      },
      {
        q: "¿Cuánto cobrar por una limpieza facial?",
        a: "No hay un precio único, porque el alquiler, los sueldos y el posicionamiento cambian según la ciudad. Con una tarifa de ejemplo de 54 € la hora y 75 minutos de tiempo ocupado, una limpieza facial clásica debería costar al menos unos 76 €. Haz el cálculo con tus cifras y compáralo con los centros entre los que eligen tus clientas.",
      },
      {
        q: "¿Puedo simplemente cobrar lo mismo que la competencia?",
        a: "Usa sus precios como comprobación del mercado, no como punto de partida. No conoces sus costes ni sabes si son rentables. Si tu mínimo está por encima del mercado local, trabaja tu posicionamiento en lugar de bajar por debajo de coste.",
      },
      {
        q: "¿Conviene publicar los precios en la web y en Instagram?",
        a: "En la mayoría de los casos, sí. Los precios visibles reducen los mensajes de '¿cuánto cuesta?', filtran a clientas que no encajan y facilitan la reserva online. Si el precio depende de la zona o la longitud, indica un 'desde' claro y explica qué influye en el importe final.",
      },
      {
        q: "¿Cada cuánto hay que subir los precios de un centro de estética?",
        a: "Revisa los precios al menos una vez al año y tras cambios importantes de costes. Un ajuste anual moderado, avisado con unas semanas de antelación, suele recibirse mucho mejor que una subida fuerte tras años sin tocar la tarifa.",
      },
    ],
    related: [
      { pageKey: "pricing", label: "Precios y planes" },
      { pageKey: "client-records", label: "Fichas de clientes con historial" },
      { pageKey: "features", label: "Todas las funciones" },
    ],
  },
];
