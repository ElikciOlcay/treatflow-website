import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import {
  Bell,
  CalendarDays,
  ClipboardCheck,
  Clock,
  FileText,
  Globe,
  Link2,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Ticket,
  Users,
} from "lucide-react";

type Lang = "es" | "it" | "fr";
type FeatureKey =
  | "appointment-calendar"
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation";

const cta: Record<
  Lang,
  {
    earlyAccessHref: string;
    primaryCta: string;
    bottomTitle: string;
    bottomText: string;
  }
> = {
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

const pages: Record<FeatureKey, Record<Lang, Omit<FeaturePageProps, keyof typeof cta.es>>> = {
  "appointment-calendar": {
    es: {
      eyebrow: "Calendario de citas",
      title: "Todas tus citas, claramente organizadas",
      subtitle:
        "Gestiona la agenda de todo el salón en un solo lugar – con vistas diaria, semanal y mensual que tu equipo entiende de un vistazo.",
      bullets: [
        "Vistas diaria, semanal y mensual",
        "Agenda para varios miembros del equipo y salas",
        "Arrastra y suelta para reprogramar en segundos",
        "Se sincroniza automáticamente con las reservas online",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Calendario Treatflow con vista semanal",
      },
      features: [
        { icon: CalendarDays, title: "Vistas claras", desc: "Cambia entre día, semana y mes según el momento." },
        { icon: Users, title: "Equipo", desc: "Gestiona citas de varios profesionales y salas a la vez." },
        { icon: RefreshCw, title: "Siempre sincronizado", desc: "Las reservas online entran directo al calendario." },
        { icon: Clock, title: "Reprogramación rápida", desc: "Mueve o alarga citas con drag & drop." },
        { icon: Smartphone, title: "En cualquier dispositivo", desc: "Escritorio, tablet o móvil." },
        { icon: Bell, title: "Recordatorios automáticos", desc: "Menos ausencias con SMS y email." },
      ],
      closingTitle: "Menos administración, más tiempo para tus clientas",
      closingText:
        "Un calendario bien organizado es el corazón del salón. Treatflow mantiene tu agenda clara para que el equipo se centre en los tratamientos.",
    },
    it: {
      eyebrow: "Calendario appuntamenti",
      title: "Tutti i tuoi appuntamenti, organizzati con chiarezza",
      subtitle:
        "Gestisci l'agenda di tutto il centro in un unico posto – con viste giornaliera, settimanale e mensile che il team capisce subito.",
      bullets: [
        "Viste giornaliera, settimanale e mensile",
        "Agenda per più collaboratori e sale",
        "Drag & drop per riprogrammare in pochi secondi",
        "Sincronizzazione automatica con le prenotazioni online",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Calendario Treatflow con vista settimanale",
      },
      features: [
        { icon: CalendarDays, title: "Viste chiare", desc: "Passa tra giorno, settimana e mese." },
        { icon: Users, title: "Team", desc: "Gestisci appuntamenti di più collaboratori e sale." },
        { icon: RefreshCw, title: "Sempre sincronizzato", desc: "Le prenotazioni online finiscono subito in agenda." },
        { icon: Clock, title: "Riprogrammazione veloce", desc: "Sposta o allunga con drag & drop." },
        { icon: Smartphone, title: "Su ogni dispositivo", desc: "Desktop, tablet o telefono." },
        { icon: Bell, title: "Promemoria automatici", desc: "Meno assenze con SMS ed email." },
      ],
      closingTitle: "Meno amministrazione, più tempo per le clienti",
      closingText:
        "Un calendario ordinato è il cuore del centro. Treatflow tiene l'agenda chiara così il team si concentra sui trattamenti.",
    },
    fr: {
      eyebrow: "Calendrier de rendez-vous",
      title: "Tous vos rendez-vous, clairement organisés",
      subtitle:
        "Gérez l'agenda de tout l'institut au même endroit – avec des vues journalière, hebdomadaire et mensuelle que votre équipe comprend d'un coup d'œil.",
      bullets: [
        "Vues journalière, hebdomadaire et mensuelle",
        "Agenda pour plusieurs collaborateurs et salles",
        "Glisser-déposer pour reprogrammer en quelques secondes",
        "Synchronisation automatique avec les réservations en ligne",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Calendrier Treatflow en vue hebdomadaire",
      },
      features: [
        { icon: CalendarDays, title: "Vues claires", desc: "Passez du jour à la semaine ou au mois." },
        { icon: Users, title: "Équipe", desc: "Gérez plusieurs collaborateurs et salles à la fois." },
        { icon: RefreshCw, title: "Toujours synchronisé", desc: "Les réservations en ligne arrivent directement." },
        { icon: Clock, title: "Reprogrammation rapide", desc: "Déplacez ou prolongez par glisser-déposer." },
        { icon: Smartphone, title: "Sur tout appareil", desc: "Ordinateur, tablette ou téléphone." },
        { icon: Bell, title: "Rappels automatiques", desc: "Moins d'absences grâce aux SMS et e-mails." },
      ],
      closingTitle: "Moins d'admin, plus de temps pour vos clientes",
      closingText:
        "Un calendrier bien organisé est le cœur de l'institut. Treatflow garde votre agenda clair pour que l'équipe se concentre sur les soins.",
    },
  },
  "online-booking": {
    es: {
      eyebrow: "Reservas online",
      title: "Que tus clientas reserven a cualquier hora",
      subtitle:
        "Tu propia página de reserva permite elegir servicio y hora cuando les convenga – también fuera de tu horario.",
      bullets: [
        "Enlace de reserva personal, 24/7",
        "Sin comisión por reserva",
        "Confirmaciones y recordatorios automáticos",
        "Página de reserva multilingüe",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Clienta reservando una cita de belleza en el móvil",
      },
      features: [
        { icon: Link2, title: "Tu enlace", desc: "Compártelo en Instagram, Google o tu web." },
        { icon: Clock, title: "Disponible 24/7", desc: "Recibe reservas mientras duermes." },
        { icon: Globe, title: "Multilingüe", desc: "La página se adapta al idioma de la clienta." },
        { icon: Ticket, title: "Códigos de descuento", desc: "Promociones y ofertas para nuevas clientas." },
        { icon: Bell, title: "Menos ausencias", desc: "Recordatorios automáticos." },
        { icon: ShieldCheck, title: "Sin comisión", desc: "Te quedas con tus ingresos." },
      ],
      closingTitle: "Convierte tu perfil en reservas",
      closingText:
        "Aunque el salón esté cerrado, las clientas quieren reservar. Con Treatflow capturas esas solicitudes automáticamente.",
    },
    it: {
      eyebrow: "Prenotazioni online",
      title: "Lascia che le clienti prenotino a ogni ora",
      subtitle:
        "La tua pagina di prenotazione permette di scegliere servizio e orario quando preferiscono – anche fuori orario.",
      bullets: [
        "Link di prenotazione personale, 24/7",
        "Nessuna commissione",
        "Conferme e promemoria automatici",
        "Pagina di prenotazione multilingue",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Cliente che prenota un appuntamento estetico sullo smartphone",
      },
      features: [
        { icon: Link2, title: "Il tuo link", desc: "Condividilo su Instagram, Google o sul sito." },
        { icon: Clock, title: "Disponibile 24/7", desc: "Ricevi prenotazioni anche di notte." },
        { icon: Globe, title: "Multilingue", desc: "La pagina si adatta alla lingua della cliente." },
        { icon: Ticket, title: "Codici sconto", desc: "Promozioni e offerte per nuove clienti." },
        { icon: Bell, title: "Meno assenze", desc: "Promemoria automatici." },
        { icon: ShieldCheck, title: "Nessuna commissione", desc: "Tieni i tuoi ricavi." },
      ],
      closingTitle: "Trasforma il profilo in prenotazioni",
      closingText:
        "Anche a centro chiuso le clienti vogliono prenotare. Con Treatflow catturi queste richieste automaticamente.",
    },
    fr: {
      eyebrow: "Réservation en ligne",
      title: "Laissez vos clientes réserver à toute heure",
      subtitle:
        "Votre page de réservation permet de choisir un soin et un créneau quand cela leur convient – même hors horaires.",
      bullets: [
        "Lien de réservation personnel, 24/7",
        "Sans commission",
        "Confirmations et rappels automatiques",
        "Page de réservation multilingue",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Cliente réservant un rendez-vous beauté sur smartphone",
      },
      features: [
        { icon: Link2, title: "Votre lien", desc: "Partagez-le sur Instagram, Google ou votre site." },
        { icon: Clock, title: "Disponible 24/7", desc: "Recevez des réservations même la nuit." },
        { icon: Globe, title: "Multilingue", desc: "La page s'adapte à la langue de la cliente." },
        { icon: Ticket, title: "Codes promo", desc: "Promotions et offres nouvelles clientes." },
        { icon: Bell, title: "Moins d'absences", desc: "Rappels automatiques." },
        { icon: ShieldCheck, title: "Sans commission", desc: "Vous gardez vos revenus." },
      ],
      closingTitle: "Transformez votre profil en réservations",
      closingText:
        "Même institut fermé, les clientes veulent réserver. Avec Treatflow, vous capturez ces demandes automatiquement.",
    },
  },
  "client-records": {
    es: {
      eyebrow: "Fichas de clientes",
      title: "Toda la información de la clienta en un solo lugar",
      subtitle: "Historial, fotos, notas y formularios – listos antes de cada cita.",
      bullets: [
        "Historial completo de tratamientos",
        "Fotos y notas",
        "Formularios vinculados a la ficha",
        "Búsqueda rápida",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Ficha de cliente Treatflow con historial de tratamientos",
      },
      features: [
        { icon: Users, title: "Perfil completo", desc: "Datos de contacto, preferencias e historial." },
        { icon: FileText, title: "Historial", desc: "Cada tratamiento queda documentado." },
        { icon: ClipboardCheck, title: "Formularios", desc: "Anamnesis y consentimientos en la ficha." },
        { icon: Smartphone, title: "Siempre a mano", desc: "Accede desde cualquier dispositivo." },
        { icon: ShieldCheck, title: "Seguro", desc: "Datos protegidos en servidores UE." },
        { icon: Bell, title: "Seguimiento", desc: "Notas y recordatorios para el equipo." },
      ],
      closingTitle: "Mejor preparación, mejor atención",
      closingText: "Con la ficha digital tienes el contexto completo antes de cada cita.",
    },
    it: {
      eyebrow: "Schede clienti",
      title: "Tutte le informazioni della cliente in un unico posto",
      subtitle: "Storico, foto, note e moduli – pronti prima di ogni appuntamento.",
      bullets: [
        "Storico completo dei trattamenti",
        "Foto e note",
        "Moduli collegati alla scheda",
        "Ricerca rapida",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Scheda cliente Treatflow con storico trattamenti",
      },
      features: [
        { icon: Users, title: "Profilo completo", desc: "Contatti, preferenze e storico." },
        { icon: FileText, title: "Storico", desc: "Ogni trattamento resta documentato." },
        { icon: ClipboardCheck, title: "Moduli", desc: "Anamnesi e consensi nella scheda." },
        { icon: Smartphone, title: "Sempre a portata", desc: "Accesso da ogni dispositivo." },
        { icon: ShieldCheck, title: "Sicuro", desc: "Dati protetti su server UE." },
        { icon: Bell, title: "Follow-up", desc: "Note e promemoria per il team." },
      ],
      closingTitle: "Meglio preparati, meglio assisti",
      closingText: "Con la scheda digitale hai tutto il contesto prima di ogni appuntamento.",
    },
    fr: {
      eyebrow: "Fiches clients",
      title: "Toutes les infos cliente au même endroit",
      subtitle: "Historique, photos, notes et formulaires – prêts avant chaque rendez-vous.",
      bullets: [
        "Historique complet des soins",
        "Photos et notes",
        "Formulaires liés à la fiche",
        "Recherche rapide",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Fiche cliente Treatflow avec historique des soins",
      },
      features: [
        { icon: Users, title: "Profil complet", desc: "Coordonnées, préférences et historique." },
        { icon: FileText, title: "Historique", desc: "Chaque soin reste documenté." },
        { icon: ClipboardCheck, title: "Formulaires", desc: "Anamnèse et consentements dans la fiche." },
        { icon: Smartphone, title: "Toujours sous la main", desc: "Accès depuis tout appareil." },
        { icon: ShieldCheck, title: "Sécurisé", desc: "Données protégées sur serveurs UE." },
        { icon: Bell, title: "Suivi", desc: "Notes et rappels pour l'équipe." },
      ],
      closingTitle: "Mieux préparés, mieux accueillir",
      closingText: "Avec la fiche numérique, vous avez tout le contexte avant chaque rendez-vous.",
    },
  },
  forms: {
    es: {
      eyebrow: "Formularios",
      title: "Anamnesis y consentimientos digitales",
      subtitle: "Envía formularios antes de la cita – con firma, sin papel.",
      bullets: [
        "Formularios digitales con firma",
        "Envío por email o SMS",
        "Plantillas listas",
        "Guardados en la ficha",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Formulario digital Treatflow en una tablet",
      },
      features: [
        { icon: ClipboardCheck, title: "Firma digital", desc: "Consentimientos firmados en el dispositivo." },
        { icon: Bell, title: "Antes de la cita", desc: "Envío automático al reservar." },
        { icon: FileText, title: "Plantillas", desc: "Anamnesis y consentimientos listos." },
        { icon: Users, title: "En la ficha", desc: "Todo queda vinculado a la clienta." },
        { icon: Smartphone, title: "Fácil de rellenar", desc: "En móvil o tablet." },
        { icon: ShieldCheck, title: "Trazable", desc: "Documentación clara y segura." },
      ],
      closingTitle: "Menos papel, más claridad",
      closingText: "Los formularios digitales ahorran tiempo y mantienen tu documentación en orden.",
    },
    it: {
      eyebrow: "Moduli",
      title: "Anamnesi e consensi digitali",
      subtitle: "Invia i moduli prima dell'appuntamento – con firma, senza carta.",
      bullets: [
        "Moduli digitali con firma",
        "Invio via email o SMS",
        "Modelli pronti",
        "Salvati nella scheda",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Modulo digitale Treatflow su tablet",
      },
      features: [
        { icon: ClipboardCheck, title: "Firma digitale", desc: "Consensi firmati sul dispositivo." },
        { icon: Bell, title: "Prima dell'appuntamento", desc: "Invio automatico alla prenotazione." },
        { icon: FileText, title: "Modelli", desc: "Anamnesi e consensi pronti." },
        { icon: Users, title: "Nella scheda", desc: "Tutto collegato alla cliente." },
        { icon: Smartphone, title: "Facile da compilare", desc: "Su telefono o tablet." },
        { icon: ShieldCheck, title: "Tracciabile", desc: "Documentazione chiara e sicura." },
      ],
      closingTitle: "Meno carta, più chiarezza",
      closingText: "I moduli digitali fanno risparmiare tempo e tengono in ordine la documentazione.",
    },
    fr: {
      eyebrow: "Formulaires",
      title: "Anamnèse et consentements numériques",
      subtitle: "Envoyez les formulaires avant le rendez-vous – avec signature, sans papier.",
      bullets: [
        "Formulaires numériques avec signature",
        "Envoi par e-mail ou SMS",
        "Modèles prêts",
        "Enregistrés dans la fiche",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Formulaire numérique Treatflow sur tablette",
      },
      features: [
        { icon: ClipboardCheck, title: "Signature numérique", desc: "Consentements signés sur l'appareil." },
        { icon: Bell, title: "Avant le rendez-vous", desc: "Envoi automatique à la réservation." },
        { icon: FileText, title: "Modèles", desc: "Anamnèse et consentements prêts." },
        { icon: Users, title: "Dans la fiche", desc: "Tout est lié à la cliente." },
        { icon: Smartphone, title: "Facile à remplir", desc: "Sur téléphone ou tablette." },
        { icon: ShieldCheck, title: "Traçable", desc: "Documentation claire et sécurisée." },
      ],
      closingTitle: "Moins de papier, plus de clarté",
      closingText: "Les formulaires numériques font gagner du temps et gardent votre documentation en ordre.",
    },
  },
  "treatment-documentation": {
    es: {
      eyebrow: "Documentación",
      title: "Documenta cada tratamiento con claridad",
      subtitle: "Notas, parámetros y fotos – profesionales y fáciles de encontrar.",
      bullets: [
        "Notas de tratamiento estructuradas",
        "Fotos antes/después",
        "Parámetros y productos",
        "Historial completo",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-waehrend-behandlung.png",
        alt: "Documentación de tratamiento Treatflow",
      },
      features: [
        { icon: FileText, title: "Notas claras", desc: "Documenta cada sesión de forma uniforme." },
        { icon: Users, title: "En la ficha", desc: "Todo queda en el historial de la clienta." },
        { icon: ClipboardCheck, title: "Parámetros", desc: "Registra ajustes y productos usados." },
        { icon: Smartphone, title: "Fotos", desc: "Añade imágenes del tratamiento." },
        { icon: ShieldCheck, title: "Profesional", desc: "Listo para seguimiento y calidad." },
        { icon: Bell, title: "Seguimiento", desc: "Prepara la próxima cita con contexto." },
      ],
      closingTitle: "Documentación que ayuda de verdad",
      closingText: "Con Treatflow documentas rápido y mantienes un historial útil para todo el equipo.",
    },
    it: {
      eyebrow: "Documentazione",
      title: "Documenta ogni trattamento con chiarezza",
      subtitle: "Note, parametri e foto – professionali e facili da ritrovare.",
      bullets: [
        "Note di trattamento strutturate",
        "Foto prima/dopo",
        "Parametri e prodotti",
        "Storico completo",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-waehrend-behandlung.png",
        alt: "Documentazione trattamento Treatflow",
      },
      features: [
        { icon: FileText, title: "Note chiare", desc: "Documenta ogni seduta in modo uniforme." },
        { icon: Users, title: "Nella scheda", desc: "Tutto resta nello storico della cliente." },
        { icon: ClipboardCheck, title: "Parametri", desc: "Registra impostazioni e prodotti." },
        { icon: Smartphone, title: "Foto", desc: "Aggiungi immagini del trattamento." },
        { icon: ShieldCheck, title: "Professionale", desc: "Pronto per follow-up e qualità." },
        { icon: Bell, title: "Follow-up", desc: "Prepara il prossimo appuntamento con contesto." },
      ],
      closingTitle: "Documentazione che serve davvero",
      closingText: "Con Treatflow documenti in fretta e tieni uno storico utile per tutto il team.",
    },
    fr: {
      eyebrow: "Documentation",
      title: "Documentez chaque soin clairement",
      subtitle: "Notes, paramètres et photos – professionnels et faciles à retrouver.",
      bullets: [
        "Notes de soin structurées",
        "Photos avant/après",
        "Paramètres et produits",
        "Historique complet",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-waehrend-behandlung.png",
        alt: "Documentation de soin Treatflow",
      },
      features: [
        { icon: FileText, title: "Notes claires", desc: "Documentez chaque séance de façon uniforme." },
        { icon: Users, title: "Dans la fiche", desc: "Tout reste dans l'historique cliente." },
        { icon: ClipboardCheck, title: "Paramètres", desc: "Enregistrez réglages et produits." },
        { icon: Smartphone, title: "Photos", desc: "Ajoutez des images du soin." },
        { icon: ShieldCheck, title: "Professionnel", desc: "Prêt pour le suivi et la qualité." },
        { icon: Bell, title: "Suivi", desc: "Préparez le prochain rendez-vous avec le contexte." },
      ],
      closingTitle: "Une documentation vraiment utile",
      closingText: "Avec Treatflow, vous documentez vite et gardez un historique utile pour toute l'équipe.",
    },
  },
};

export function getIntlFeaturePage(lang: Lang, key: FeatureKey): FeaturePageProps {
  return {
    ...pages[key][lang],
    ...cta[lang],
  };
}
