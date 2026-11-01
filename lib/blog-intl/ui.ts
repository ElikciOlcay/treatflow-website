import type { BlogLang } from "./types";

export type BlogUi = {
  indexTitle: string;
  indexMetaTitle: string;
  indexDescription: string;
  indexEyebrow: string;
  indexSubtitle: string;
  readMore: string;
  minRead: (n: number) => string;
  updated: string;
  author: string;
  authorRole: string;
  answerLabel: string;
  takeawaysLabel: string;
  tocLabel: string;
  faqTitle: string;
  relatedTitle: string;
  sourcesTitle: string;
  moreArticles: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  home: string;
  rss: string;
  dateLocale: string;
};

export const blogUi: Record<BlogLang, BlogUi> = {
  de: {
    indexTitle: "Kosmetikstudio Blog: Tipps für Beauty-Profis",
    indexMetaTitle: "Kosmetikstudio Blog: Tipps für Beauty-Profis",
    indexDescription:
      "Expertentipps für Kosmetikstudios: Kundenbindung, Praxisführung, Digitalisierung und Business-Strategien.",
    indexEyebrow: "Blog",
    indexSubtitle: "Praktische Tipps und bewährte Strategien für dein Beauty-Business.",
    readMore: "Artikel lesen",
    minRead: (n) => `${n} Min. Lesezeit`,
    updated: "Aktualisiert",
    author: "Olcay Elikci",
    authorRole: "Gründer von Treatflow",
    answerLabel: "Kurz gesagt",
    takeawaysLabel: "Das Wichtigste",
    tocLabel: "Inhalt",
    faqTitle: "Häufige Fragen",
    relatedTitle: "Passende Treatflow-Funktionen",
    sourcesTitle: "Quellen",
    moreArticles: "Weitere Artikel",
    ctaTitle: "Dein Studio an einem Ort organisieren",
    ctaText: "Termine, Kundenkartei, Formulare und Erinnerungen in einer App. 14 Tage kostenlos, ohne Kreditkarte.",
    ctaButton: "Kostenlos testen",
    home: "Startseite",
    rss: "RSS-Feed",
    dateLocale: "de-DE",
  },
  en: {
    indexTitle: "Treatflow Blog: guides for beauty salons and clinics",
    indexMetaTitle: "Blog for Beauty Salons & Aesthetic Clinics",
    indexDescription:
      "Practical guides for beauty salons, aesthetic clinics and studios: fewer no-shows, online booking, digital consultation forms, GDPR and client retention.",
    indexEyebrow: "Blog",
    indexSubtitle:
      "Practical, no-fluff guides for salon and clinic owners – from fewer no-shows to GDPR-ready client records.",
    readMore: "Read article",
    minRead: (n) => `${n} min read`,
    updated: "Updated",
    author: "Olcay Elikci",
    authorRole: "Co-founder of Treatflow",
    answerLabel: "Short answer",
    takeawaysLabel: "Key takeaways",
    tocLabel: "Contents",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Related Treatflow features",
    sourcesTitle: "Sources",
    moreArticles: "More articles",
    ctaTitle: "Run your studio from one place",
    ctaText: "Booking, client records, forms and reminders in one app. 14-day free trial, no credit card.",
    ctaButton: "Start free trial",
    home: "Home",
    rss: "RSS feed",
    dateLocale: "en-GB",
  },
  tr: {
    indexTitle: "Treatflow Blog: güzellik salonları ve klinikler için rehberler",
    indexMetaTitle: "Güzellik Salonları ve Estetik Klinikleri için Blog",
    indexDescription:
      "Güzellik salonları ve estetik klinikleri için pratik rehberler: daha az gelmeyen müşteri, online randevu, dijital onam formları, KVKK ve müşteri sadakati.",
    indexEyebrow: "Blog",
    indexSubtitle:
      "Salon ve klinik sahipleri için pratik rehberler – gelmeyen müşteriyi azaltmaktan KVKK uyumlu müşteri kayıtlarına.",
    readMore: "Yazıyı oku",
    minRead: (n) => `${n} dk okuma`,
    updated: "Güncellendi",
    author: "Olcay Elikci",
    authorRole: "Treatflow kurucu ortağı",
    answerLabel: "Kısa cevap",
    takeawaysLabel: "Öne çıkanlar",
    tocLabel: "İçindekiler",
    faqTitle: "Sıkça sorulan sorular",
    relatedTitle: "İlgili Treatflow özellikleri",
    sourcesTitle: "Kaynaklar",
    moreArticles: "Diğer yazılar",
    ctaTitle: "Salonunuzu tek yerden yönetin",
    ctaText: "Randevu, müşteri takibi, onam formları ve hatırlatmalar tek uygulamada. 30 gün ücretsiz, kredi kartı gerekmez.",
    ctaButton: "Ücretsiz deneyin",
    home: "Ana sayfa",
    rss: "RSS",
    dateLocale: "tr-TR",
  },
  nl: {
    indexTitle: "Treatflow Blog: gidsen voor schoonheidssalons en klinieken",
    indexMetaTitle: "Blog voor schoonheidssalons en klinieken",
    indexDescription:
      "Praktische gidsen voor schoonheidssalons, esthetische klinieken en studio's: minder no-shows, online boeken, digitale intakeformulieren, AVG en klantenbinding.",
    indexEyebrow: "Blog",
    indexSubtitle:
      "Praktische gidsen voor salon- en kliniekeigenaren – van minder no-shows tot AVG-proof klantendossiers.",
    readMore: "Lees artikel",
    minRead: (n) => `${n} min lezen`,
    updated: "Bijgewerkt",
    author: "Olcay Elikci",
    authorRole: "Medeoprichter van Treatflow",
    answerLabel: "Kort antwoord",
    takeawaysLabel: "Belangrijkste punten",
    tocLabel: "Inhoud",
    faqTitle: "Veelgestelde vragen",
    relatedTitle: "Bijbehorende Treatflow-functies",
    sourcesTitle: "Bronnen",
    moreArticles: "Meer artikelen",
    ctaTitle: "Je salon vanuit één plek beheren",
    ctaText: "Afspraken, klantendossiers, formulieren en herinneringen in één app. 14 dagen gratis, geen creditcard.",
    ctaButton: "Gratis proberen",
    home: "Home",
    rss: "RSS-feed",
    dateLocale: "nl-NL",
  },
  it: {
    indexTitle: "Blog Treatflow: guide per centri estetici e studi medici",
    indexMetaTitle: "Blog per centri estetici e medicina estetica",
    indexDescription:
      "Guide pratiche per centri estetici, studi di medicina estetica e saloni: meno appuntamenti mancati, prenotazioni online, schede cliente digitali, GDPR e fidelizzazione.",
    indexEyebrow: "Blog",
    indexSubtitle:
      "Guide pratiche per titolari di centri estetici e studi – dagli appuntamenti mancati alle schede clienti conformi al GDPR.",
    readMore: "Leggi l'articolo",
    minRead: (n) => `${n} min di lettura`,
    updated: "Aggiornato",
    author: "Olcay Elikci",
    authorRole: "Co-fondatore di Treatflow",
    answerLabel: "Risposta breve",
    takeawaysLabel: "In sintesi",
    tocLabel: "Indice",
    faqTitle: "Domande frequenti",
    relatedTitle: "Funzioni Treatflow correlate",
    sourcesTitle: "Fonti",
    moreArticles: "Altri articoli",
    ctaTitle: "Gestisci il tuo centro da un unico posto",
    ctaText: "Agenda, schede clienti, moduli e promemoria in un'unica app. 14 giorni gratis, senza carta di credito.",
    ctaButton: "Prova gratis",
    home: "Home",
    rss: "Feed RSS",
    dateLocale: "it-IT",
  },
  pl: {
    indexTitle: "Blog Treatflow: poradniki dla salonów kosmetycznych i gabinetów",
    indexMetaTitle: "Blog dla salonów kosmetycznych i gabinetów",
    indexDescription:
      "Praktyczne poradniki dla salonów kosmetycznych, gabinetów medycyny estetycznej i studiów: mniej nieobecności, rezerwacje online, wywiad cyfrowy, RODO i lojalność klientek.",
    indexEyebrow: "Blog",
    indexSubtitle:
      "Praktyczne poradniki dla właścicielek salonów i gabinetów – od mniejszej liczby nieobecności po kartotekę zgodną z RODO.",
    readMore: "Czytaj artykuł",
    minRead: (n) => `${n} min czytania`,
    updated: "Aktualizacja",
    author: "Olcay Elikci",
    authorRole: "Współzałożyciel Treatflow",
    answerLabel: "Krótka odpowiedź",
    takeawaysLabel: "Najważniejsze wnioski",
    tocLabel: "Spis treści",
    faqTitle: "Najczęściej zadawane pytania",
    relatedTitle: "Powiązane funkcje Treatflow",
    sourcesTitle: "Źródła",
    moreArticles: "Więcej artykułów",
    ctaTitle: "Prowadź salon z jednego miejsca",
    ctaText: "Kalendarz, kartoteka klientów, formularze i przypomnienia w jednej aplikacji. 14 dni za darmo, bez karty.",
    ctaButton: "Wypróbuj za darmo",
    home: "Strona główna",
    rss: "Kanał RSS",
    dateLocale: "pl-PL",
  },
  es: {
    indexTitle: "Blog de Treatflow: guías para centros de estética y clínicas",
    indexMetaTitle: "Blog para centros de estética y clínicas",
    indexDescription:
      "Guías prácticas para centros de estética, clínicas de medicina estética y salones: menos citas perdidas, reservas online, fichas digitales, RGPD y fidelización.",
    indexEyebrow: "Blog",
    indexSubtitle:
      "Guías prácticas para dueños de centros y clínicas – desde menos citas perdidas hasta fichas de clientes conformes al RGPD.",
    readMore: "Leer artículo",
    minRead: (n) => `${n} min de lectura`,
    updated: "Actualizado",
    author: "Olcay Elikci",
    authorRole: "Cofundador de Treatflow",
    answerLabel: "Respuesta corta",
    takeawaysLabel: "Puntos clave",
    tocLabel: "Contenido",
    faqTitle: "Preguntas frecuentes",
    relatedTitle: "Funciones de Treatflow relacionadas",
    sourcesTitle: "Fuentes",
    moreArticles: "Más artículos",
    ctaTitle: "Gestiona tu centro desde un solo lugar",
    ctaText: "Agenda, fichas de clientes, formularios y recordatorios en una sola app. 14 días gratis, sin tarjeta.",
    ctaButton: "Probar gratis",
    home: "Inicio",
    rss: "Feed RSS",
    dateLocale: "es-ES",
  },
  fr: {
    indexTitle: "Blog Treatflow : guides pour instituts de beauté et cliniques",
    indexMetaTitle: "Blog pour instituts de beauté et cliniques",
    indexDescription:
      "Guides pratiques pour instituts de beauté, cliniques esthétiques et salons : moins de rendez-vous non honorés, réservation en ligne, fiches clientes, RGPD et fidélisation.",
    indexEyebrow: "Blog",
    indexSubtitle:
      "Des guides concrets pour les gérant·es d'instituts et de cliniques – des rendez-vous non honorés aux fiches clientes conformes au RGPD.",
    readMore: "Lire l'article",
    minRead: (n) => `${n} min de lecture`,
    updated: "Mis à jour",
    author: "Olcay Elikci",
    authorRole: "Cofondateur de Treatflow",
    answerLabel: "En bref",
    takeawaysLabel: "À retenir",
    tocLabel: "Sommaire",
    faqTitle: "Questions fréquentes",
    relatedTitle: "Fonctionnalités Treatflow associées",
    sourcesTitle: "Sources",
    moreArticles: "Autres articles",
    ctaTitle: "Gérez votre institut depuis un seul endroit",
    ctaText: "Agenda, fiches clientes, formulaires et rappels dans une seule application. 14 jours gratuits, sans carte bancaire.",
    ctaButton: "Essai gratuit",
    home: "Accueil",
    rss: "Flux RSS",
    dateLocale: "fr-FR",
  },
};
