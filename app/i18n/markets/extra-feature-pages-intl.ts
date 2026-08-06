import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import {
  extraFeatureSlugs,
  listExtraFeatureKeys,
  type ExtraFeatureKey,
  type FeatureLocale,
} from "@/app/i18n/feature-slugs";
import {
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileText,
  Gift,
  Globe,
  LayoutDashboard,
  Link2,
  Mail,
  MessageCircle,
  Package,
  Plug,
  Receipt,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export type { ExtraFeatureKey, FeatureLocale };
export { extraFeatureSlugs, listExtraFeatureKeys };

const cta: Record<
  FeatureLocale,
  {
    earlyAccessHref: string;
    primaryCta: string;
    bottomTitle: string;
    bottomText: string;
  }
> = {
  en: {
    earlyAccessHref: "/en/early-access",
    primaryCta: "Request early access",
    bottomTitle: "Ready to get started?",
    bottomText:
      "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
  },
  es: {
    earlyAccessHref: "/es/acceso-anticipado",
    primaryCta: "Solicitar acceso anticipado",
    bottomTitle: "¿Listo para empezar?",
    bottomText:
      "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
  },
  it: {
    earlyAccessHref: "/it/accesso-anticipato",
    primaryCta: "Richiedi accesso anticipato",
    bottomTitle: "Pronto a iniziare?",
    bottomText:
      "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
  },
  fr: {
    earlyAccessHref: "/fr/acces-anticipe",
    primaryCta: "Demander un accès anticipé",
    bottomTitle: "Prêt à commencer ?",
    bottomText:
      "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
  },
};

type PageContent = Omit<
  FeaturePageProps,
  "earlyAccessHref" | "primaryCta" | "bottomTitle" | "bottomText"
>;

const pages: Record<ExtraFeatureKey, Record<FeatureLocale, PageContent>> = {
  "point-of-sale": {
    en: {
      eyebrow: "Point of sale",
      title: "Checkout that lives in your calendar",
      subtitle:
        "Take payments for services and products in one flow – directly from the appointment, with clear receipts and a day-end summary your team can trust.",
      bullets: [
        "Charge from the appointment in seconds",
        "Services, products and tips in one checkout",
        "Digital receipts for every sale",
        "Daily closing overview for the studio",
      ],
      image: {
        src: "/images/lifestyle/reference/studio-empfang-tablet.png",
        alt: "Beauty salon reception desk using Treatflow checkout on a tablet",
      },
      features: [
        {
          icon: Receipt,
          title: "Checkout from the calendar",
          desc: "Open the appointment and take payment without switching tools.",
        },
        {
          icon: ShoppingBag,
          title: "Services & retail",
          desc: "Add treatments, products and extras to the same ticket.",
        },
        {
          icon: CreditCard,
          title: "Flexible payment",
          desc: "Record cash, card or mixed payments clearly.",
        },
        {
          icon: Ticket,
          title: "Vouchers at checkout",
          desc: "Sell and redeem gift vouchers without leaving the till.",
        },
        {
          icon: BarChart3,
          title: "Day-end clarity",
          desc: "See what was sold, by whom and how it was paid.",
        },
        {
          icon: Users,
          title: "Linked to the client",
          desc: "Every sale stays on the client history for follow-up.",
        },
      ],
      closingTitle: "One till for a smoother front desk",
      closingText:
        "Treatflow connects appointments, clients and checkout so your team spends less time juggling tools – and more time with clients.",
    },
    es: {
      eyebrow: "Caja registradora",
      title: "Cobro integrado en tu agenda",
      subtitle:
        "Cobra servicios y productos en un solo flujo – directamente desde la cita, con recibos claros y un cierre de día que tu equipo entiende.",
      bullets: [
        "Cobra desde la cita en segundos",
        "Servicios, productos y propinas en un solo ticket",
        "Recibos digitales en cada venta",
        "Resumen de cierre diario del salón",
      ],
      image: {
        src: "/images/lifestyle/reference/studio-empfang-tablet.png",
        alt: "Recepción de un salón de belleza usando la caja Treatflow en tablet",
      },
      features: [
        {
          icon: Receipt,
          title: "Cobro desde el calendario",
          desc: "Abre la cita y cobra sin cambiar de herramienta.",
        },
        {
          icon: ShoppingBag,
          title: "Servicios y retail",
          desc: "Añade tratamientos, productos y extras al mismo ticket.",
        },
        {
          icon: CreditCard,
          title: "Pago flexible",
          desc: "Registra efectivo, tarjeta o pagos mixtos con claridad.",
        },
        {
          icon: Ticket,
          title: "Vales en caja",
          desc: "Vende y canjea vales regalo sin salir del cobro.",
        },
        {
          icon: BarChart3,
          title: "Cierre claro",
          desc: "Mira qué se vendió, quién lo hizo y cómo se pagó.",
        },
        {
          icon: Users,
          title: "Vinculado a la clienta",
          desc: "Cada venta queda en el historial para el seguimiento.",
        },
      ],
      closingTitle: "Una caja para una recepción más fluida",
      closingText:
        "Treatflow une citas, clientas y cobro para que el equipo pierda menos tiempo cambiando de herramientas – y tenga más tiempo para atender.",
    },
    it: {
      eyebrow: "Cassa",
      title: "Incasso direttamente dall'agenda",
      subtitle:
        "Incassa servizi e prodotti in un unico flusso – direttamente dall'appuntamento, con scontrini chiari e un riepilogo di fine giornata affidabile.",
      bullets: [
        "Incassa dall'appuntamento in pochi secondi",
        "Servizi, prodotti e mance in un solo scontrino",
        "Ricevute digitali per ogni vendita",
        "Riepilogo di chiusura giornaliera del centro",
      ],
      image: {
        src: "/images/lifestyle/reference/studio-empfang-tablet.png",
        alt: "Reception di un centro estetico che usa la cassa Treatflow su tablet",
      },
      features: [
        {
          icon: Receipt,
          title: "Incasso dal calendario",
          desc: "Apri l'appuntamento e incassa senza cambiare strumento.",
        },
        {
          icon: ShoppingBag,
          title: "Servizi e retail",
          desc: "Aggiungi trattamenti, prodotti ed extra allo stesso scontrino.",
        },
        {
          icon: CreditCard,
          title: "Pagamento flessibile",
          desc: "Registra contanti, carta o pagamenti misti in modo chiaro.",
        },
        {
          icon: Ticket,
          title: "Buoni in cassa",
          desc: "Vendi e riscatta buoni regalo senza uscire dal pagamento.",
        },
        {
          icon: BarChart3,
          title: "Chiusura chiara",
          desc: "Vedi cosa è stato venduto, da chi e come è stato pagato.",
        },
        {
          icon: Users,
          title: "Collegato alla cliente",
          desc: "Ogni vendita resta nello storico per il follow-up.",
        },
      ],
      closingTitle: "Una cassa per una reception più fluida",
      closingText:
        "Treatflow collega appuntamenti, clienti e incasso così il team perde meno tempo a cambiare strumenti – e ne ha di più per le clienti.",
    },
    fr: {
      eyebrow: "Caisse",
      title: "Encaissement intégré à votre agenda",
      subtitle:
        "Encaissez soins et produits en un seul flux – directement depuis le rendez-vous, avec des reçus clairs et un bilan de fin de journée fiable.",
      bullets: [
        "Encaissez depuis le rendez-vous en quelques secondes",
        "Soins, produits et pourboires sur un même ticket",
        "Reçus numériques pour chaque vente",
        "Synthèse de clôture quotidienne de l'institut",
      ],
      image: {
        src: "/images/lifestyle/reference/studio-empfang-tablet.png",
        alt: "Réception d'un institut de beauté utilisant la caisse Treatflow sur tablette",
      },
      features: [
        {
          icon: Receipt,
          title: "Encaissement depuis le calendrier",
          desc: "Ouvrez le rendez-vous et encaissez sans changer d'outil.",
        },
        {
          icon: ShoppingBag,
          title: "Soins & retail",
          desc: "Ajoutez traitements, produits et extras au même ticket.",
        },
        {
          icon: CreditCard,
          title: "Paiement flexible",
          desc: "Enregistrez espèces, carte ou paiements mixtes clairement.",
        },
        {
          icon: Ticket,
          title: "Bons en caisse",
          desc: "Vendez et utilisez des bons cadeaux sans quitter l'encaissement.",
        },
        {
          icon: BarChart3,
          title: "Clôture claire",
          desc: "Voyez ce qui a été vendu, par qui et comment c'était payé.",
        },
        {
          icon: Users,
          title: "Lié à la cliente",
          desc: "Chaque vente reste dans l'historique pour le suivi.",
        },
      ],
      closingTitle: "Une caisse pour une réception plus fluide",
      closingText:
        "Treatflow relie rendez-vous, clientes et encaissement pour que l'équipe perde moins de temps à jongler avec les outils – et en gagne pour les clientes.",
    },
  },

  vouchers: {
    en: {
      eyebrow: "Gift vouchers",
      title: "Sell and redeem vouchers without the chaos",
      subtitle:
        "Create gift vouchers, sell them at checkout and redeem remaining balances automatically – a simple revenue booster for your salon.",
      bullets: [
        "Sell vouchers at the till or online",
        "Redeem full or partial amounts",
        "Automatic remaining balance tracking",
        "Clear validity and client history",
      ],
      image: {
        src: "/images/product-updates/rabattcodes-kalender.png",
        alt: "Treatflow gift vouchers and discount codes in the calendar",
      },
      features: [
        {
          icon: Gift,
          title: "Gift vouchers",
          desc: "Offer fixed-value or treatment-specific vouchers your clients love.",
        },
        {
          icon: Receipt,
          title: "Sell at checkout",
          desc: "Add a voucher to the ticket in seconds during payment.",
        },
        {
          icon: Ticket,
          title: "Easy redemption",
          desc: "Apply the code or select the voucher when the client returns.",
        },
        {
          icon: RefreshCw,
          title: "Remaining balance",
          desc: "Partial redemptions update the balance automatically.",
        },
        {
          icon: Calendar,
          title: "Validity control",
          desc: "Set expiry dates so offers stay clear and manageable.",
        },
        {
          icon: BarChart3,
          title: "Sales overview",
          desc: "See how many vouchers were sold, redeemed or still open.",
        },
      ],
      closingTitle: "Vouchers that actually bring clients back",
      closingText:
        "Gift vouchers fill quiet days and introduce new clients. Treatflow keeps selling and redeeming simple so nothing gets lost in spreadsheets.",
    },
    es: {
      eyebrow: "Vales regalo",
      title: "Vende y canjea vales sin líos",
      subtitle:
        "Crea vales regalo, véndelos en caja y canjea el saldo restante automáticamente – un impulso de ingresos sencillo para tu salón.",
      bullets: [
        "Vende vales en caja u online",
        "Canjea importes totales o parciales",
        "Seguimiento automático del saldo",
        "Validez e historial claros",
      ],
      image: {
        src: "/images/product-updates/rabattcodes-kalender.png",
        alt: "Vales regalo y códigos de descuento Treatflow en el calendario",
      },
      features: [
        {
          icon: Gift,
          title: "Vales regalo",
          desc: "Ofrece vales de importe fijo o vinculados a un tratamiento.",
        },
        {
          icon: Receipt,
          title: "Venta en caja",
          desc: "Añade un vale al ticket en segundos durante el cobro.",
        },
        {
          icon: Ticket,
          title: "Canje fácil",
          desc: "Aplica el código o selecciona el vale cuando vuelva la clienta.",
        },
        {
          icon: RefreshCw,
          title: "Saldo restante",
          desc: "Los canjes parciales actualizan el saldo automáticamente.",
        },
        {
          icon: Calendar,
          title: "Control de validez",
          desc: "Define fechas de caducidad claras y fáciles de gestionar.",
        },
        {
          icon: BarChart3,
          title: "Vista de ventas",
          desc: "Consulta cuántos vales se vendieron, canjearon o siguen abiertos.",
        },
      ],
      closingTitle: "Vales que de verdad hacen volver a las clientas",
      closingText:
        "Los vales llenan días flojos y traen nuevas clientas. Treatflow simplifica la venta y el canje para que nada se pierda en hojas de cálculo.",
    },
    it: {
      eyebrow: "Buoni regalo",
      title: "Vendi e riscatta buoni senza caos",
      subtitle:
        "Crea buoni regalo, vendili in cassa e riscatta il saldo residuo automaticamente – un modo semplice per aumentare i ricavi del centro.",
      bullets: [
        "Vendi buoni in cassa o online",
        "Riscatta importi interi o parziali",
        "Monitoraggio automatico del saldo",
        "Validità e storico chiari",
      ],
      image: {
        src: "/images/product-updates/rabattcodes-kalender.png",
        alt: "Buoni regalo e codici sconto Treatflow nel calendario",
      },
      features: [
        {
          icon: Gift,
          title: "Buoni regalo",
          desc: "Offri buoni a valore fisso o legati a un trattamento.",
        },
        {
          icon: Receipt,
          title: "Vendita in cassa",
          desc: "Aggiungi un buono allo scontrino in pochi secondi.",
        },
        {
          icon: Ticket,
          title: "Riscatto facile",
          desc: "Applica il codice o seleziona il buono al ritorno della cliente.",
        },
        {
          icon: RefreshCw,
          title: "Saldo residuo",
          desc: "I riscatti parziali aggiornano il saldo automaticamente.",
        },
        {
          icon: Calendar,
          title: "Controllo validità",
          desc: "Imposta scadenze chiare e gestibili.",
        },
        {
          icon: BarChart3,
          title: "Panoramica vendite",
          desc: "Vedi quanti buoni sono stati venduti, riscattati o ancora aperti.",
        },
      ],
      closingTitle: "Buoni che fanno davvero tornare le clienti",
      closingText:
        "I buoni riempiono le giornate lente e portano nuove clienti. Treatflow rende vendita e riscatto semplici, senza fogli di calcolo.",
    },
    fr: {
      eyebrow: "Bons cadeaux",
      title: "Vendez et utilisez des bons sans chaos",
      subtitle:
        "Créez des bons cadeaux, vendez-les en caisse et utilisez le solde restant automatiquement – un levier de chiffre d'affaires simple pour votre institut.",
      bullets: [
        "Vendez des bons en caisse ou en ligne",
        "Utilisez des montants totaux ou partiels",
        "Suivi automatique du solde",
        "Validité et historique clairs",
      ],
      image: {
        src: "/images/product-updates/rabattcodes-kalender.png",
        alt: "Bons cadeaux et codes promo Treatflow dans le calendrier",
      },
      features: [
        {
          icon: Gift,
          title: "Bons cadeaux",
          desc: "Proposez des bons à montant fixe ou liés à un soin.",
        },
        {
          icon: Receipt,
          title: "Vente en caisse",
          desc: "Ajoutez un bon au ticket en quelques secondes.",
        },
        {
          icon: Ticket,
          title: "Utilisation simple",
          desc: "Appliquez le code ou sélectionnez le bon au retour de la cliente.",
        },
        {
          icon: RefreshCw,
          title: "Solde restant",
          desc: "Les utilisations partielles mettent à jour le solde automatiquement.",
        },
        {
          icon: Calendar,
          title: "Contrôle de validité",
          desc: "Définissez des dates d'expiration claires et gérables.",
        },
        {
          icon: BarChart3,
          title: "Vue des ventes",
          desc: "Voyez combien de bons ont été vendus, utilisés ou restent ouverts.",
        },
      ],
      closingTitle: "Des bons qui font vraiment revenir les clientes",
      closingText:
        "Les bons cadeaux remplissent les journées calmes et amènent de nouvelles clientes. Treatflow simplifie vente et utilisation – sans tableurs.",
    },
  },

  messaging: {
    en: {
      eyebrow: "Messaging & reminders",
      title: "Fewer no-shows with SMS and email automation",
      subtitle:
        "Send booking confirmations, appointment reminders and follow-ups automatically – so your calendar stays full without manual WhatsApp chasing.",
      bullets: [
        "Automatic booking confirmations",
        "SMS and email reminders before appointments",
        "Follow-ups after treatments",
        "Birthday and reactivation messages",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Client receiving an appointment reminder SMS from a beauty salon",
      },
      features: [
        {
          icon: Bell,
          title: "Appointment reminders",
          desc: "Reduce no-shows with timed SMS and email reminders.",
        },
        {
          icon: Mail,
          title: "Confirmations",
          desc: "Clients get clear booking details the moment they book.",
        },
        {
          icon: MessageCircle,
          title: "Follow-ups",
          desc: "Send aftercare tips or rebooking prompts automatically.",
        },
        {
          icon: Sparkles,
          title: "Birthday messages",
          desc: "Stay top of mind with personal, automated greetings.",
        },
        {
          icon: Clock,
          title: "Configurable timing",
          desc: "Choose when reminders and follow-ups go out.",
        },
        {
          icon: Smartphone,
          title: "SMS & email",
          desc: "Use the right channel for urgency and detail.",
        },
      ],
      closingTitle: "Stay in touch without the busywork",
      closingText:
        "Messaging automation keeps clients informed and loyal while your team focuses on treatments – not typing the same messages again.",
    },
    es: {
      eyebrow: "Mensajería y recordatorios",
      title: "Menos ausencias con SMS y email automáticos",
      subtitle:
        "Envía confirmaciones, recordatorios de cita y seguimientos automáticamente – para que la agenda se llene sin perseguir por WhatsApp.",
      bullets: [
        "Confirmaciones de reserva automáticas",
        "Recordatorios SMS y email antes de la cita",
        "Seguimientos tras el tratamiento",
        "Mensajes de cumpleaños y reactivación",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Clienta recibiendo un SMS de recordatorio de cita de un salón de belleza",
      },
      features: [
        {
          icon: Bell,
          title: "Recordatorios de cita",
          desc: "Reduce ausencias con SMS y emails programados.",
        },
        {
          icon: Mail,
          title: "Confirmaciones",
          desc: "Las clientas reciben los detalles en cuanto reservan.",
        },
        {
          icon: MessageCircle,
          title: "Seguimientos",
          desc: "Envía consejos post-tratamiento o propuestas de nueva cita.",
        },
        {
          icon: Sparkles,
          title: "Cumpleaños",
          desc: "Mantente presente con saludos personales automáticos.",
        },
        {
          icon: Clock,
          title: "Horarios configurables",
          desc: "Elige cuándo salen recordatorios y seguimientos.",
        },
        {
          icon: Smartphone,
          title: "SMS y email",
          desc: "Usa el canal adecuado según urgencia y detalle.",
        },
      ],
      closingTitle: "Mantén el contacto sin trabajo extra",
      closingText:
        "La mensajería automática informa y fideliza a las clientas mientras el equipo se centra en los tratamientos – no en escribir siempre lo mismo.",
    },
    it: {
      eyebrow: "Messaggistica e promemoria",
      title: "Meno assenze con SMS ed email automatici",
      subtitle:
        "Invia conferme di prenotazione, promemoria e follow-up in automatico – così l'agenda resta piena senza inseguire su WhatsApp.",
      bullets: [
        "Conferme di prenotazione automatiche",
        "Promemoria SMS ed email prima dell'appuntamento",
        "Follow-up dopo i trattamenti",
        "Messaggi di compleanno e riattivazione",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Cliente che riceve un SMS di promemoria appuntamento dal centro estetico",
      },
      features: [
        {
          icon: Bell,
          title: "Promemoria appuntamenti",
          desc: "Riduci le assenze con SMS ed email programmati.",
        },
        {
          icon: Mail,
          title: "Conferme",
          desc: "Le clienti ricevono i dettagli appena prenotano.",
        },
        {
          icon: MessageCircle,
          title: "Follow-up",
          desc: "Invia consigli post-trattamento o proposte di riprenotazione.",
        },
        {
          icon: Sparkles,
          title: "Compleanni",
          desc: "Resta presente con auguri personali automatici.",
        },
        {
          icon: Clock,
          title: "Tempi configurabili",
          desc: "Scegli quando partono promemoria e follow-up.",
        },
        {
          icon: Smartphone,
          title: "SMS ed email",
          desc: "Usa il canale giusto per urgenza e dettaglio.",
        },
      ],
      closingTitle: "Resta in contatto senza lavoro ripetitivo",
      closingText:
        "La messaggistica automatica informa e fidelizza le clienti mentre il team si concentra sui trattamenti – non a riscrivere sempre gli stessi messaggi.",
    },
    fr: {
      eyebrow: "Messagerie & rappels",
      title: "Moins d'absences grâce aux SMS et e-mails automatiques",
      subtitle:
        "Envoyez confirmations, rappels de rendez-vous et suivis automatiquement – pour un agenda rempli sans relances WhatsApp manuelles.",
      bullets: [
        "Confirmations de réservation automatiques",
        "Rappels SMS et e-mail avant le rendez-vous",
        "Suivis après les soins",
        "Messages d'anniversaire et de réactivation",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Cliente recevant un SMS de rappel de rendez-vous de l'institut",
      },
      features: [
        {
          icon: Bell,
          title: "Rappels de rendez-vous",
          desc: "Réduisez les absences avec des SMS et e-mails programmés.",
        },
        {
          icon: Mail,
          title: "Confirmations",
          desc: "Les clientes reçoivent les détails dès la réservation.",
        },
        {
          icon: MessageCircle,
          title: "Suivis",
          desc: "Envoyez des conseils post-soin ou des invitations à rebooker.",
        },
        {
          icon: Sparkles,
          title: "Anniversaires",
          desc: "Restez présentes avec des vœux personnels automatiques.",
        },
        {
          icon: Clock,
          title: "Horaires configurables",
          desc: "Choisissez quand partent rappels et suivis.",
        },
        {
          icon: Smartphone,
          title: "SMS & e-mail",
          desc: "Utilisez le bon canal selon l'urgence et le détail.",
        },
      ],
      closingTitle: "Restez en contact sans surcharge",
      closingText:
        "La messagerie automatisée informe et fidélise vos clientes pendant que l'équipe se concentre sur les soins – pas sur les messages répétitifs.",
    },
  },

  integrations: {
    en: {
      eyebrow: "Integrations",
      title: "Connect Treatflow to the tools you already use",
      subtitle:
        "Sync calendars, accounting and automations so data flows once – instead of being typed into three different systems.",
      bullets: [
        "Two-way Google Calendar sync",
        "Accounting and invoice connections",
        "Zapier for 7,000+ apps",
        "Less double entry, fewer errors",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Treatflow integrations connecting salon software with external tools",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Google Calendar",
          desc: "Keep personal and studio calendars in sync in real time.",
        },
        {
          icon: Receipt,
          title: "Accounting",
          desc: "Create invoices and sync clients without retyping data.",
        },
        {
          icon: Zap,
          title: "Zapier",
          desc: "Trigger workflows in Sheets, CRM, email and more.",
        },
        {
          icon: RefreshCw,
          title: "Less double work",
          desc: "Enter data once in Treatflow – it flows to the rest.",
        },
        {
          icon: Workflow,
          title: "Custom automations",
          desc: "React to new bookings or forms without writing code.",
        },
        {
          icon: Plug,
          title: "Growing ecosystem",
          desc: "Connect the stack your salon already relies on.",
        },
      ],
      closingTitle: "One source of truth for your studio",
      closingText:
        "Integrations keep Treatflow at the centre of your operations while your favourite tools stay in the loop – automatically.",
    },
    es: {
      eyebrow: "Integraciones",
      title: "Conecta Treatflow con las herramientas que ya usas",
      subtitle:
        "Sincroniza calendarios, contabilidad y automatizaciones para que los datos fluyan una sola vez – en lugar de teclearlos en tres sistemas.",
      bullets: [
        "Sincronización bidireccional con Google Calendar",
        "Conexiones de contabilidad y facturas",
        "Zapier para más de 7.000 apps",
        "Menos doble entrada, menos errores",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Integraciones Treatflow conectando el software del salón con otras herramientas",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Google Calendar",
          desc: "Mantén calendarios personales y del salón sincronizados.",
        },
        {
          icon: Receipt,
          title: "Contabilidad",
          desc: "Crea facturas y sincroniza clientas sin volver a escribir.",
        },
        {
          icon: Zap,
          title: "Zapier",
          desc: "Activa flujos en Sheets, CRM, email y más.",
        },
        {
          icon: RefreshCw,
          title: "Menos doble trabajo",
          desc: "Introduce los datos una vez en Treatflow – el resto se actualiza.",
        },
        {
          icon: Workflow,
          title: "Automatizaciones",
          desc: "Reacciona a reservas o formularios nuevos sin código.",
        },
        {
          icon: Plug,
          title: "Ecosistema en crecimiento",
          desc: "Conecta el stack que tu salón ya usa a diario.",
        },
      ],
      closingTitle: "Una sola fuente de verdad para el salón",
      closingText:
        "Las integraciones mantienen Treatflow en el centro de tu operativa mientras tus herramientas favoritas se actualizan solas.",
    },
    it: {
      eyebrow: "Integrazioni",
      title: "Collega Treatflow agli strumenti che già usi",
      subtitle:
        "Sincronizza calendari, contabilità e automazioni così i dati circolano una sola volta – invece di essere digitati in tre sistemi.",
      bullets: [
        "Sync bidirezionale con Google Calendar",
        "Collegamenti a contabilità e fatture",
        "Zapier per oltre 7.000 app",
        "Meno doppia immissione, meno errori",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Integrazioni Treatflow che collegano il software del centro ad altri strumenti",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Google Calendar",
          desc: "Tieni sincronizzati calendari personali e del centro.",
        },
        {
          icon: Receipt,
          title: "Contabilità",
          desc: "Crea fatture e sincronizza clienti senza ricopiare dati.",
        },
        {
          icon: Zap,
          title: "Zapier",
          desc: "Attiva workflow in Sheets, CRM, email e altro.",
        },
        {
          icon: RefreshCw,
          title: "Meno doppio lavoro",
          desc: "Inserisci i dati una volta in Treatflow – il resto si aggiorna.",
        },
        {
          icon: Workflow,
          title: "Automazioni",
          desc: "Reagisci a nuove prenotazioni o moduli senza codice.",
        },
        {
          icon: Plug,
          title: "Ecosistema in crescita",
          desc: "Collega lo stack che il tuo centro già utilizza.",
        },
      ],
      closingTitle: "Un'unica fonte di verità per il centro",
      closingText:
        "Le integrazioni tengono Treatflow al centro delle operazioni mentre i tuoi strumenti preferiti restano aggiornati – automaticamente.",
    },
    fr: {
      eyebrow: "Intégrations",
      title: "Connectez Treatflow aux outils que vous utilisez déjà",
      subtitle:
        "Synchronisez calendriers, comptabilité et automatisations pour que les données circulent une seule fois – au lieu d'être saisies dans trois systèmes.",
      bullets: [
        "Sync bidirectionnelle Google Calendar",
        "Connexions comptabilité et factures",
        "Zapier pour plus de 7 000 apps",
        "Moins de double saisie, moins d'erreurs",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Intégrations Treatflow reliant le logiciel de l'institut à d'autres outils",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Google Calendar",
          desc: "Gardez calendriers perso et institut synchronisés en temps réel.",
        },
        {
          icon: Receipt,
          title: "Comptabilité",
          desc: "Créez des factures et synchronisez les clientes sans ressaisie.",
        },
        {
          icon: Zap,
          title: "Zapier",
          desc: "Déclenchez des workflows dans Sheets, CRM, e-mail et plus.",
        },
        {
          icon: RefreshCw,
          title: "Moins de double travail",
          desc: "Saisissez une fois dans Treatflow – le reste se met à jour.",
        },
        {
          icon: Workflow,
          title: "Automatisations",
          desc: "Réagissez aux nouvelles réservations ou formulaires sans code.",
        },
        {
          icon: Plug,
          title: "Écosystème en croissance",
          desc: "Connectez la stack sur laquelle votre institut s'appuie déjà.",
        },
      ],
      closingTitle: "Une seule source de vérité pour l'institut",
      closingText:
        "Les intégrations placent Treatflow au centre de vos opérations pendant que vos outils préférés restent à jour – automatiquement.",
    },
  },

  features: {
    en: {
      eyebrow: "All features",
      title: "Everything your beauty business needs in one place",
      subtitle:
        "From calendar and online booking to client records, forms, checkout and reminders – Treatflow covers the daily work of a modern salon.",
      bullets: [
        "Calendar, booking and client records",
        "Digital forms and treatment notes",
        "Checkout, vouchers and product sales",
        "Messaging, integrations and more",
      ],
      image: {
        src: "/images/mockups/dashboard-main.png",
        alt: "Treatflow dashboard showing salon software features at a glance",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Appointment calendar",
          desc: "Plan staff, rooms and treatments in clear day and week views.",
        },
        {
          icon: Link2,
          title: "Online booking",
          desc: "Let clients book 24/7 with your personal booking link.",
        },
        {
          icon: Users,
          title: "Client records",
          desc: "History, notes, photos and allergies in one digital file.",
        },
        {
          icon: ClipboardCheck,
          title: "Forms & consent",
          desc: "Digital intake and signatures before the appointment.",
        },
        {
          icon: FileText,
          title: "Documentation",
          desc: "Record treatments, products and before/after photos.",
        },
        {
          icon: LayoutDashboard,
          title: "One workspace",
          desc: "Run the studio from a single, coherent platform.",
        },
      ],
      closingTitle: "Built for beauty studios – not generic booking tools",
      closingText:
        "Treatflow combines the features salons actually use every day, so you spend less time switching apps and more time growing the business.",
    },
    es: {
      eyebrow: "Todas las funciones",
      title: "Todo lo que tu negocio de belleza necesita, en un solo lugar",
      subtitle:
        "Del calendario y las reservas online a fichas, formularios, recordatorios – Treatflow cubre el día a día de un salón moderno.",
      bullets: [
        "Calendario, reservas y fichas de clientas",
        "Formularios digitales y notas de tratamiento",
        "Vales y venta de productos",
        "Mensajería, integraciones y más",
      ],
      image: {
        src: "/images/mockups/dashboard-main.png",
        alt: "Panel Treatflow con las funciones del software para salones de un vistazo",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Calendario de citas",
          desc: "Planifica equipo, salas y tratamientos en vistas claras.",
        },
        {
          icon: Link2,
          title: "Reservas online",
          desc: "Que las clientas reserven 24/7 con tu enlace personal.",
        },
        {
          icon: Users,
          title: "Fichas de clientas",
          desc: "Historial, notas, fotos y alergias en un expediente digital.",
        },
        {
          icon: ClipboardCheck,
          title: "Formularios y consentimiento",
          desc: "Anamnesis y firmas digitales antes de la cita.",
        },
        {
          icon: FileText,
          title: "Documentación",
          desc: "Registra tratamientos, productos y fotos antes/después.",
        },
        {
          icon: LayoutDashboard,
          title: "Un solo espacio",
          desc: "Gestiona el salón desde una plataforma coherente.",
        },
      ],
      closingTitle: "Hecho para salones de belleza – no para agendas genéricas",
      closingText:
        "Treatflow reúne las funciones que los salones usan de verdad cada día, para que cambies menos de app y crezcas más el negocio.",
    },
    it: {
      eyebrow: "Tutte le funzioni",
      title: "Tutto ciò di cui il tuo business di bellezza ha bisogno, in un unico posto",
      subtitle:
        "Dal calendario e le prenotazioni online a schede, moduli, promemoria – Treatflow copre il quotidiano di un centro moderno.",
      bullets: [
        "Calendario, prenotazioni e schede clienti",
        "Moduli digitali e note di trattamento",
        "Buoni e vendita prodotti",
        "Messaggistica, integrazioni e altro",
      ],
      image: {
        src: "/images/mockups/dashboard-main.png",
        alt: "Dashboard Treatflow con le funzioni del software per centri estetici",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Calendario appuntamenti",
          desc: "Pianifica team, sale e trattamenti in viste chiare.",
        },
        {
          icon: Link2,
          title: "Prenotazioni online",
          desc: "Lascia prenotare 24/7 con il tuo link personale.",
        },
        {
          icon: Users,
          title: "Schede clienti",
          desc: "Storico, note, foto e allergie in un fascicolo digitale.",
        },
        {
          icon: ClipboardCheck,
          title: "Moduli e consensi",
          desc: "Anamnesi e firme digitali prima dell'appuntamento.",
        },
        {
          icon: FileText,
          title: "Documentazione",
          desc: "Registra trattamenti, prodotti e foto prima/dopo.",
        },
        {
          icon: LayoutDashboard,
          title: "Un solo spazio",
          desc: "Gestisci il centro da una piattaforma coerente.",
        },
      ],
      closingTitle: "Pensato per i centri estetici – non per agenda generiche",
      closingText:
        "Treatflow riunisce le funzioni che i centri usano davvero ogni giorno, così cambi meno app e fai crescere di più il business.",
    },
    fr: {
      eyebrow: "Toutes les fonctionnalités",
      title: "Tout ce dont votre institut a besoin, au même endroit",
      subtitle:
        "Du calendrier et de la réservation en ligne aux fiches, formulaires, rappels – Treatflow couvre le quotidien d'un institut moderne.",
      bullets: [
        "Calendrier, réservation et fiches clientes",
        "Formulaires numériques et notes de soin",
        "Bons cadeaux et vente de produits",
        "Messagerie, intégrations et plus",
      ],
      image: {
        src: "/images/mockups/dashboard-main.png",
        alt: "Tableau de bord Treatflow avec les fonctionnalités du logiciel institut",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Calendrier de rendez-vous",
          desc: "Planifiez équipe, salles et soins dans des vues claires.",
        },
        {
          icon: Link2,
          title: "Réservation en ligne",
          desc: "Laissez réserver 24/7 avec votre lien personnel.",
        },
        {
          icon: Users,
          title: "Fiches clientes",
          desc: "Historique, notes, photos et allergies dans un dossier numérique.",
        },
        {
          icon: ClipboardCheck,
          title: "Formulaires & consentement",
          desc: "Anamnèse et signatures numériques avant le rendez-vous.",
        },
        {
          icon: FileText,
          title: "Documentation",
          desc: "Enregistrez soins, produits et photos avant/après.",
        },
        {
          icon: LayoutDashboard,
          title: "Un seul espace",
          desc: "Pilotez l'institut depuis une plateforme cohérente.",
        },
      ],
      closingTitle: "Conçu pour les instituts – pas pour des agendas génériques",
      closingText:
        "Treatflow réunit les fonctions que les instituts utilisent vraiment chaque jour, pour moins changer d'app et plus faire grandir l'activité.",
    },
  },

  shop: {
    en: {
      eyebrow: "Product sales & inventory",
      title: "Sell retail products and keep stock under control",
      subtitle:
        "Add unlimited products, sell them in the studio and track who bought what – with simple inventory so bestsellers never run dry unnoticed.",
      bullets: [
        "Unlimited products and categories",
        "Sell directly in the studio",
        "Simple stock levels and alerts",
        "Sales history per client",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Treatflow product sales and inventory overview for beauty salons",
      },
      features: [
        {
          icon: Package,
          title: "Product catalogue",
          desc: "Add as many SKUs as you need with prices and categories.",
        },
        {
          icon: ShoppingBag,
          title: "In-studio sales",
          desc: "Sell after a treatment without a separate shop system.",
        },
        {
          icon: BarChart3,
          title: "Inventory overview",
          desc: "See stock levels and restock before you run out.",
        },
        {
          icon: Camera,
          title: "Product photos",
          desc: "Show clear product images for your team at the desk.",
        },
        {
          icon: TrendingUp,
          title: "Extra revenue",
          desc: "Turn every visit into a chance for retail sales.",
        },
        {
          icon: Users,
          title: "Purchase history",
          desc: "Know which client bought which product and when.",
        },
      ],
      closingTitle: "Retail that fits the appointment flow",
      closingText:
        "Treatflow keeps product sales next to appointments and client records – so retail becomes a natural part of the visit, not another admin task.",
    },
    es: {
      eyebrow: "Venta de productos y stock",
      title: "Vende productos y controla el inventario",
      subtitle:
        "Añade productos ilimitados, véndelos en el salón y rastrea quién compró qué – con un stock sencillo para que los bestsellers no se agoten sin aviso.",
      bullets: [
        "Productos y categorías ilimitados",
        "Venta directa en el salón",
        "Niveles de stock y alertas simples",
        "Historial de ventas por clienta",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Vista de venta de productos e inventario Treatflow para salones de belleza",
      },
      features: [
        {
          icon: Package,
          title: "Catálogo de productos",
          desc: "Añade tantos artículos como necesites, con precios y categorías.",
        },
        {
          icon: ShoppingBag,
          title: "Venta en el salón",
          desc: "Vende tras el tratamiento sin un sistema de tienda aparte.",
        },
        {
          icon: BarChart3,
          title: "Vista de inventario",
          desc: "Consulta el stock y reaprovisiona antes de quedarte sin.",
        },
        {
          icon: Camera,
          title: "Fotos de producto",
          desc: "Muestra imágenes claras al equipo en recepción.",
        },
        {
          icon: TrendingUp,
          title: "Ingresos extra",
          desc: "Convierte cada visita en una oportunidad de venta retail.",
        },
        {
          icon: Users,
          title: "Historial de compra",
          desc: "Sabe qué clienta compró qué producto y cuándo.",
        },
      ],
      closingTitle: "Retail que encaja en el flujo de la cita",
      closingText:
        "Treatflow mantiene la venta de productos junto a citas y fichas – para que el retail sea parte natural de la visita, no otra tarea administrativa.",
    },
    it: {
      eyebrow: "Vendita prodotti e magazzino",
      title: "Vendi prodotti e tieni sotto controllo lo stock",
      subtitle:
        "Aggiungi prodotti illimitati, vendili in studio e traccia chi ha comprato cosa – con un magazzino semplice così i bestseller non finiscono senza avviso.",
      bullets: [
        "Prodotti e categorie illimitati",
        "Vendita diretta in studio",
        "Livelli di stock e alert semplici",
        "Storico vendite per cliente",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Panoramica vendita prodotti e magazzino Treatflow per centri estetici",
      },
      features: [
        {
          icon: Package,
          title: "Catalogo prodotti",
          desc: "Aggiungi tutti gli articoli necessari con prezzi e categorie.",
        },
        {
          icon: ShoppingBag,
          title: "Vendita in studio",
          desc: "Vendi dopo il trattamento senza un negozio separato.",
        },
        {
          icon: BarChart3,
          title: "Panoramica magazzino",
          desc: "Vedi le scorte e rifornisci prima di rimanere senza.",
        },
        {
          icon: Camera,
          title: "Foto prodotto",
          desc: "Mostra immagini chiare al team in reception.",
        },
        {
          icon: TrendingUp,
          title: "Ricavi extra",
          desc: "Trasforma ogni visita in un'opportunità di vendita retail.",
        },
        {
          icon: Users,
          title: "Storico acquisti",
          desc: "Sai quale cliente ha comprato quale prodotto e quando.",
        },
      ],
      closingTitle: "Retail che si adatta al flusso dell'appuntamento",
      closingText:
        "Treatflow tiene la vendita prodotti vicino ad appuntamenti e schede – così il retail diventa parte naturale della visita, non un altro compito admin.",
    },
    fr: {
      eyebrow: "Vente de produits & stock",
      title: "Vendez vos produits et gardez le stock sous contrôle",
      subtitle:
        "Ajoutez des produits illimités, vendez-les en institut et suivez qui a acheté quoi – avec un stock simple pour que les best-sellers ne manquent pas sans prévenir.",
      bullets: [
        "Produits et catégories illimités",
        "Vente directe en institut",
        "Niveaux de stock et alertes simples",
        "Historique des ventes par cliente",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Aperçu vente de produits et inventaire Treatflow pour instituts de beauté",
      },
      features: [
        {
          icon: Package,
          title: "Catalogue produits",
          desc: "Ajoutez autant d'articles que nécessaire avec prix et catégories.",
        },
        {
          icon: ShoppingBag,
          title: "Vente en institut",
          desc: "Vendez après le soin sans système boutique séparé.",
        },
        {
          icon: BarChart3,
          title: "Vue stock",
          desc: "Voyez les niveaux et réapprovisionnez avant la rupture.",
        },
        {
          icon: Camera,
          title: "Photos produit",
          desc: "Montrez des images claires à l'équipe à l'accueil.",
        },
        {
          icon: TrendingUp,
          title: "Chiffre d'affaires extra",
          desc: "Transformez chaque visite en opportunité de vente retail.",
        },
        {
          icon: Users,
          title: "Historique d'achat",
          desc: "Sachez quelle cliente a acheté quel produit et quand.",
        },
      ],
      closingTitle: "Du retail qui s'intègre au flux du rendez-vous",
      closingText:
        "Treatflow place la vente de produits à côté des rendez-vous et des fiches – pour que le retail fasse partie naturelle de la visite, pas une tâche admin de plus.",
    },
  },

  "studio-website": {
    en: {
      eyebrow: "Studio website",
      title: "A custom website that turns visitors into bookings",
      subtitle:
        "Get a professional site for your salon – mobile-first, SEO-ready and connected to Treatflow online booking so new clients can book in a few taps.",
      bullets: [
        "Custom design for your brand",
        "Mobile-optimised for modern clients",
        "Online booking integrated",
        "Built for beauty and aesthetics businesses",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Custom Treatflow studio website for a beauty salon",
      },
      features: [
        {
          icon: Sparkles,
          title: "Custom design",
          desc: "A look that matches your studio – not a generic template farm.",
        },
        {
          icon: Smartphone,
          title: "Mobile-first",
          desc: "Most visitors come from their phone. Your site looks great there.",
        },
        {
          icon: Globe,
          title: "SEO foundations",
          desc: "Clear structure and content so clients can find you online.",
        },
        {
          icon: Link2,
          title: "Booking integration",
          desc: "Connect your Treatflow booking link and opening hours.",
        },
        {
          icon: Camera,
          title: "Showcase your work",
          desc: "Present treatments, team and atmosphere convincingly.",
        },
        {
          icon: LayoutDashboard,
          title: "Made for salons",
          desc: "Built around beauty, laser, nails, lashes and aesthetics.",
        },
      ],
      closingTitle: "Your website as a booking channel – not a brochure",
      closingText:
        "We design sites that look premium and convert. Combined with Treatflow booking, every visit can become an appointment.",
    },
    es: {
      eyebrow: "Web para salones",
      title: "Una web a medida que convierte visitas en reservas",
      subtitle:
        "Consigue un sitio profesional para tu salón – pensado para móvil, preparado para SEO y conectado a las reservas Treatflow para que las nuevas clientas reserven en pocos toques.",
      bullets: [
        "Diseño a medida para tu marca",
        "Optimizado para móvil",
        "Reservas online integradas",
        "Pensado para belleza y estética",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Web personalizada Treatflow para un salón de belleza",
      },
      features: [
        {
          icon: Sparkles,
          title: "Diseño a medida",
          desc: "Un look que encaja con tu salón – no una plantilla genérica.",
        },
        {
          icon: Smartphone,
          title: "Mobile-first",
          desc: "La mayoría llega desde el móvil. Tu web se ve perfecta ahí.",
        },
        {
          icon: Globe,
          title: "Base SEO",
          desc: "Estructura y contenido claros para que te encuentren online.",
        },
        {
          icon: Link2,
          title: "Integración de reservas",
          desc: "Conecta tu enlace Treatflow y los horarios de apertura.",
        },
        {
          icon: Camera,
          title: "Muestra tu trabajo",
          desc: "Presenta tratamientos, equipo y ambiente con claridad.",
        },
        {
          icon: LayoutDashboard,
          title: "Hecho para salones",
          desc: "Pensado para belleza, láser, uñas, pestañas y estética.",
        },
      ],
      closingTitle: "Tu web como canal de reservas – no como folleto",
      closingText:
        "Diseñamos sitios premium que convierten. Con Treatflow, cada visita puede convertirse en una cita.",
    },
    it: {
      eyebrow: "Sito web per centri",
      title: "Un sito su misura che trasforma le visite in prenotazioni",
      subtitle:
        "Ottieni un sito professionale per il tuo centro – mobile-first, pronto per la SEO e collegato alle prenotazioni Treatflow così le nuove clienti prenotano in pochi tap.",
      bullets: [
        "Design su misura per il tuo brand",
        "Ottimizzato per mobile",
        "Prenotazioni online integrate",
        "Pensato per bellezza ed estetica",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Sito web personalizzato Treatflow per un centro estetico",
      },
      features: [
        {
          icon: Sparkles,
          title: "Design su misura",
          desc: "Un look all'altezza del tuo centro – non un template generico.",
        },
        {
          icon: Smartphone,
          title: "Mobile-first",
          desc: "La maggior parte arriva dallo smartphone. Il sito brilla lì.",
        },
        {
          icon: Globe,
          title: "Basi SEO",
          desc: "Struttura e contenuti chiari per farti trovare online.",
        },
        {
          icon: Link2,
          title: "Integrazione prenotazioni",
          desc: "Collega il tuo link Treatflow e gli orari di apertura.",
        },
        {
          icon: Camera,
          title: "Mostra il tuo lavoro",
          desc: "Presenta trattamenti, team e atmosfera in modo convincente.",
        },
        {
          icon: LayoutDashboard,
          title: "Pensato per i centri",
          desc: "Per bellezza, laser, unghie, ciglia ed estetica.",
        },
      ],
      closingTitle: "Il tuo sito come canale di prenotazione – non un brochure",
      closingText:
        "Progettiamo siti premium che convertono. Con Treatflow, ogni visita può diventare un appuntamento.",
    },
    fr: {
      eyebrow: "Site web pour instituts",
      title: "Un site sur mesure qui transforme les visiteurs en réservations",
      subtitle:
        "Obtenez un site professionnel pour votre institut – mobile-first, prêt pour le SEO et connecté à la réservation Treatflow pour que les nouvelles clientes réservent en quelques taps.",
      bullets: [
        "Design sur mesure pour votre marque",
        "Optimisé mobile",
        "Réservation en ligne intégrée",
        "Conçu pour beauté et esthétique",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Site web personnalisé Treatflow pour un institut de beauté",
      },
      features: [
        {
          icon: Sparkles,
          title: "Design sur mesure",
          desc: "Un look à la hauteur de votre institut – pas un template générique.",
        },
        {
          icon: Smartphone,
          title: "Mobile-first",
          desc: "La plupart viennent du téléphone. Votre site y brille.",
        },
        {
          icon: Globe,
          title: "Bases SEO",
          desc: "Structure et contenus clairs pour être trouvé en ligne.",
        },
        {
          icon: Link2,
          title: "Intégration réservation",
          desc: "Connectez votre lien Treatflow et vos horaires d'ouverture.",
        },
        {
          icon: Camera,
          title: "Montrez votre travail",
          desc: "Présentez soins, équipe et ambiance de façon convaincante.",
        },
        {
          icon: LayoutDashboard,
          title: "Fait pour les instituts",
          desc: "Pensé pour beauté, laser, ongles, cils et esthétique.",
        },
      ],
      closingTitle: "Votre site comme canal de réservation – pas une brochure",
      closingText:
        "Nous concevons des sites premium qui convertissent. Avec Treatflow, chaque visite peut devenir un rendez-vous.",
    },
  },
};

export function getExtraFeaturePage(
  locale: FeatureLocale,
  key: ExtraFeatureKey
): FeaturePageProps {
  return {
    ...pages[key][locale],
    ...cta[locale],
  };
}

