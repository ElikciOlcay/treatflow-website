import {
  CalendarDays,
  Clock,
  Users,
  RefreshCw,
  Smartphone,
  Bell,
  ClipboardCheck,
  PenLine,
  Send,
  ShieldCheck,
  FileSignature,
  FileText,
  Camera,
  FolderOpen,
  Search,
  Link2,
  Globe,
  CreditCard,
  Mic,
  type LucideIcon,
} from "lucide-react";
import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import { marketLanguage, marketPathPrefix, type PrefixedMarket } from "@/app/i18n/config";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { getUiChrome } from "./ui-chrome";

type CoreKey =
  | "appointment-calendar"
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation";

type CoreLang = "en" | "nl" | "fi" | "tr";

type PageContent = Omit<FeaturePageProps, "earlyAccessHref">;

const pages: Record<CoreKey, Record<CoreLang, PageContent>> = {
  "appointment-calendar": {
    en: {
      eyebrow: "Appointment calendar",
      title: "All your appointments, clearly organised",
      subtitle:
        "Manage your whole studio schedule in one place - with daily, weekly and monthly views your team understands at a glance.",
      bullets: [
        "Daily, weekly and monthly views",
        "Schedule multiple team members and rooms",
        "Drag & drop to reschedule in seconds",
        "Syncs automatically with online bookings",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow appointment calendar with weekly planning view",
      },
      features: [
        { icon: CalendarDays, title: "Clear views", desc: "Switch between day, week and month - always the right overview for the moment." },
        { icon: Users, title: "Team scheduling", desc: "Manage appointments for several team members, rooms and resources at once." },
        { icon: RefreshCw, title: "Always in sync", desc: "Online bookings drop straight into the calendar - no double bookings." },
        { icon: Clock, title: "Fast rescheduling", desc: "Move or extend appointments with simple drag & drop." },
        { icon: Smartphone, title: "Works on any device", desc: "Manage your calendar from desktop, tablet or phone." },
        { icon: Bell, title: "Automatic reminders", desc: "Reduce no-shows with automatic WhatsApp and email reminders." },
      ],
      closingTitle: "Less admin, more time for your clients",
      closingText:
        "A well-organised calendar is the heart of every studio. Treatflow keeps your schedule tidy so you and your team can focus on what matters - great treatments and happy clients.",
      faqs: [
        {
          question: "How does the Treatflow appointment calendar work?",
          answer:
            "You see day, week and month views with columns for staff or rooms. Online bookings land in the same calendar, so you avoid double bookings. Drag and drop to reschedule.",
        },
        {
          question: "Does the calendar sync with online booking?",
          answer:
            "Yes. When a client books on your Treatflow booking page, the slot appears in the studio calendar immediately. Reminders can go out by WhatsApp and email.",
        },
      ],
      relatedLinks: [
        { href: "/en/online-booking", label: "Online booking" },
        { href: "/en/messaging", label: "Reminders" },
        { href: "/en/client-records", label: "Client records" },
        { href: "/en/beauty-salon-software", label: "Beauty salon software" },
      ],
    },
    nl: {
      eyebrow: "Afspraakagenda",
      title: "Al je afspraken, overzichtelijk georganiseerd",
      subtitle:
        "Beheer het hele studioschema op één plek – met dag-, week- en maandweergaven die je team in één oogopslag begrijpt.",
      bullets: [
        "Dag-, week- en maandweergaven",
        "Plan meerdere teamleden en ruimtes",
        "Sleep & drop om in seconden te verzetten",
        "Synchroniseert automatisch met online boekingen",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow-afspraakagenda met weekplanning",
      },
      features: [
        { icon: CalendarDays, title: "Duidelijke weergaven", desc: "Schakel tussen dag, week en maand – altijd het juiste overzicht voor het moment." },
        { icon: Users, title: "Teamplanning", desc: "Beheer afspraken voor meerdere teamleden, ruimtes en middelen tegelijk." },
        { icon: RefreshCw, title: "Altijd synchroon", desc: "Online boekingen komen direct in de agenda – geen dubbele boekingen." },
        { icon: Clock, title: "Snel verzetten", desc: "Verplaats of verleng afspraken met eenvoudig slepen & droppen." },
        { icon: Smartphone, title: "Op elk apparaat", desc: "Beheer je agenda vanaf desktop, tablet of telefoon." },
        { icon: Bell, title: "Automatische herinneringen", desc: "Verminder no-shows met automatische WhatsApp- en e-mailherinneringen." },
      ],
      closingTitle: "Minder administratie, meer tijd voor je klanten",
      closingText:
        "Een goed georganiseerde agenda is het hart van elk studio. Treatflow houdt je planning overzichtelijk zodat jij en je team kunnen focussen op wat telt – topbehandelingen en tevreden klanten.",
    },
    tr: {
      eyebrow: "Randevu takvimi",
      title: "Tüm randevularınız tek takvimde",
      subtitle:
        "Salonunuzun programını tek yerden yönetin. Gün, hafta ve ay görünümüyle personel müsaitliğini net görün; çift randevu olmaz.",
      bullets: [
        "Gün, hafta ve ay görünümü",
        "Personel ve oda bazlı planlama",
        "Sürükle-bırak ile saniyede taşıyın",
        "Online randevular anında takvime düşer",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow randevu takvimi haftalık planlama görünümü",
      },
      features: [
        { icon: CalendarDays, title: "Net görünümler", desc: "Gün, hafta ve ay arasında geçiş yapın – o an ihtiyacınız olan bakış açısı." },
        { icon: Users, title: "Personel planı", desc: "Birden fazla personel, oda ve cihazı aynı takvimde yönetin." },
        { icon: RefreshCw, title: "Anlık senkron", desc: "Online randevular doğrudan takvime düşer – çakışma olmaz." },
        { icon: Clock, title: "Hızlı erteleme", desc: "Randevuyu sürükle-bırak ile taşıyın veya süreyi uzatın." },
        { icon: Smartphone, title: "Her cihazdan", desc: "Takvimi bilgisayar, tablet veya telefondan yönetin." },
        { icon: Bell, title: "Otomatik hatırlatma", desc: "WhatsApp ve e-posta hatırlatmasıyla gelmeme ve unutulan randevuları azaltın." },
      ],
      closingTitle: "Daha az telefon, müşteriye daha çok zaman",
      closingText:
        "Düzenli bir takvim salonun kalbidir. Treatflow programı net tutar; siz ve ekibiniz işlemlere odaklanırsınız.",
      faqs: [
        {
          question: "Treatflow randevu takvimi nasıl çalışır?",
          answer:
            "Personel veya oda sütunlarıyla gün, hafta ve ay görünümlerini görürsünüz. Online randevular aynı takvime düşer, çakışma olmaz. Ertelemek için sürükle-bırak kullanın.",
        },
        {
          question: "Takvim online randevu ile senkron olur mu?",
          answer:
            "Evet. Müşteri sizin randevu sayfanızdan saat seçtiğinde randevu anında salona düşer. Hatırlatmalar WhatsApp ve e-posta ile gönderilebilir.",
        },
      ],
      relatedLinks: [
        { href: "/tr/online-booking", label: "Online randevu" },
        { href: "/tr/messaging", label: "Hatırlatmalar" },
        { href: "/tr/client-records", label: "Müşteri takibi" },
        { href: "/tr/beauty-salon-software", label: "Güzellik salonu yazılımı" },
      ],
    },
    fi: {
      eyebrow: "Ajanvarauskalenteri",
      title: "Kaikki aikasi selkeästi järjestyksessä",
      subtitle:
        "Hallitse koko studion aikataulua yhdessä paikassa – päivä-, viikko- ja kuukausinäkymillä, jotka tiimisi ymmärtää yhdellä silmäyksellä.",
      bullets: [
        "Päivä-, viikko- ja kuukausinäkymät",
        "Aikatauluta useita tiimin jäseniä ja huoneita",
        "Vedä ja pudota – siirrä aikoja sekunneissa",
        "Synkronoituu automaattisesti verkkoajanvarausten kanssa",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow-ajanvarauskalenteri viikkosuunnittelunäkymällä",
      },
      features: [
        { icon: CalendarDays, title: "Selkeät näkymät", desc: "Vaihda päivän, viikon ja kuukauden välillä – aina oikea yleiskuva tilanteeseen." },
        { icon: Users, title: "Tiimin aikataulutus", desc: "Hallitse aikoja useille tiimin jäsenille, huoneille ja resursseille kerralla." },
        { icon: RefreshCw, title: "Aina synkassa", desc: "Verkkoajanvaraukset tulevat suoraan kalenteriin – ei päällekkäisiä varauksia." },
        { icon: Clock, title: "Nopea siirto", desc: "Siirrä tai pidennä aikoja yksinkertaisella vedä ja pudota -toiminnolla." },
        { icon: Smartphone, title: "Toimii kaikilla laitteilla", desc: "Hallitse kalenteria tietokoneella, tabletilla tai puhelimella." },
        { icon: Bell, title: "Automaattiset muistutukset", desc: "Vähennä no-show’ta automaattisilla WhatsApp- ja sähköpostimuistutuksilla." },
      ],
      closingTitle: "Vähemmän hallintoa, enemmän aikaa asiakkaille",
      closingText:
        "Hyvin järjestetty kalenteri on jokaisen studion sydän. Treatflow pitää aikataulusi siistinä, jotta sinä ja tiimisi voitte keskittyä olennaiseen – laadukkaisiin hoitoihin ja tyytyväisiin asiakkaisiin.",
    },
  },

  "online-booking": {
    en: {
      eyebrow: "Online booking",
      title: "Clients book themselves - 24/7",
      subtitle:
        "A branded booking page that fills your calendar even outside opening hours - without phone tag or double bookings.",
      bullets: [
        "Bookable around the clock",
        "Only shows real availability",
        "Optional deposits to reduce no-shows",
        "Confirmations and reminders included",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Client booking a beauty appointment on a smartphone",
      },
      features: [
        { icon: Globe, title: "Your booking page", desc: "Share a clean booking link on your website, Instagram and Google profile." },
        { icon: Clock, title: "Real-time availability", desc: "Clients only see slots that are actually free - no double bookings." },
        { icon: CreditCard, title: "Deposit options", desc: "Ask for deposits on high-demand services to protect your chair time." },
        { icon: Bell, title: "Auto confirmations", desc: "Instant confirmation plus reminders that cut no-shows." },
        { icon: Smartphone, title: "Mobile-first", desc: "Designed for phones - where most beauty clients book." },
        { icon: Link2, title: "Synced calendar", desc: "Every booking lands straight in your studio calendar." },
      ],
      closingTitle: "Fill more chairs with less phone time",
      closingText:
        "Online booking turns idle hours into revenue. Treatflow keeps bookings, reminders and your calendar in one flow.",
      faqs: [
        {
          question: "Does Treatflow charge a commission on online bookings?",
          answer:
            "No. Treatflow is studio software, not a marketplace. You share your own booking link and pay a monthly plan. There is no commission per booking.",
        },
        {
          question: "Can clients book 24/7 without a marketplace?",
          answer:
            "Yes. You get a branded booking page that only shows real availability. Confirmations and reminders are included. Optional deposits help reduce no-shows.",
        },
      ],
      aiCapsules: [
        {
          question: "Does Treatflow support online booking?",
          answer:
            "Yes. Treatflow gives beauty salons and aesthetic clinics their own booking page. Clients book against live availability. There is no marketplace commission.",
        },
      ],
      problem: {
        problem: "Phone tag and marketplace commissions fill the day, while the calendar still has gaps.",
        solution:
          "Treatflow gives you your own booking link that only shows real availability. Bookings land in the studio calendar. Reminders go out automatically.",
      },
      relatedLinks: [
        { href: "/en/appointment-calendar", label: "Appointment calendar" },
        { href: "/en/messaging", label: "Reminders" },
        { href: "/en/client-records", label: "Client records" },
        { href: "/en/beauty-salon-software", label: "Beauty salon software" },
      ],
    },
    tr: {
      eyebrow: "Online randevu",
      title: "Müşterileriniz 7/24 kendileri randevu alsın",
      subtitle:
        "Instagram, Google işletme ve web sitenize eklediğiniz randevu sayfası takviminizi mesai dışında da doldurur. Telefon kovalamacası ve çakışma yok.",
      bullets: [
        "7/24 online randevu",
        "Sadece gerçek müsait saatler görünür",
        "Gelmemeyi azaltmak için kapora",
        "Onay ve hatırlatma dahil",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Müşteri telefondan güzellik randevusu alıyor",
      },
      features: [
        { icon: Globe, title: "Size özel randevu sayfası", desc: "Linki web sitenize, Instagram bio'ya ve Google işletme profiline ekleyin." },
        { icon: Clock, title: "Canlı müsaitlik", desc: "Müşteri yalnızca gerçekten boş saatleri görür – çakışma olmaz." },
        { icon: CreditCard, title: "Kapora", desc: "Yoğun hizmetlerde kapora alın, koltuk saatinizi koruyun." },
        { icon: Bell, title: "Otomatik onay", desc: "Randevu anında onay gider; hatırlatma gelmemeyi azaltır." },
        { icon: Smartphone, title: "Mobil uyumlu", desc: "Müşterilerin çoğu telefondan randevu alır – sayfa buna göre tasarlandı." },
        { icon: Link2, title: "Takvimle entegre", desc: "Her randevu doğrudan salon takviminize düşer." },
      ],
      closingTitle: "Daha az telefon, daha dolu takvim",
      closingText:
        "Online randevu boş saatleri ciroya çevirir. Treatflow randevuyu, hatırlatmayı ve takvimi tek akışta tutar. Pazaryeri komisyonu yoktur.",
      faqs: [
        {
          question: "Treatflow online randevudan komisyon alır mı?",
          answer:
            "Hayır. Treatflow bir pazaryeri değil, salon yazılımınızdır. Kendi randevu linkinizi paylaşırsınız, aylık abonelik ödersiniz. Randevu başına komisyon yoktur.",
        },
        {
          question: "Müşteriler pazaryeri olmadan 7/24 randevu alabilir mi?",
          answer:
            "Evet. Size özel randevu sayfası yalnızca gerçek müsaitliği gösterir. Onay ve hatırlatma dahildir. İsterseniz kapora ile gelmeme riskini düşürürsünüz.",
        },
      ],
      relatedLinks: [
        { href: "/tr/appointment-calendar", label: "Randevu takvimi" },
        { href: "/tr/messaging", label: "Hatırlatmalar" },
        { href: "/tr/client-records", label: "Müşteri takibi" },
        { href: "/tr/beauty-salon-software", label: "Güzellik salonu yazılımı" },
      ],
    },
    nl: {
      eyebrow: "Online boeken",
      title: "Klanten boeken zelf – 24/7",
      subtitle:
        "Een boekingspagina in jouw huisstijl die je agenda vult, ook buiten openingstijden – zonder telefoongedoe of dubbele boekingen.",
      bullets: [
        "Rond de klok te boeken",
        "Toont alleen echte beschikbaarheid",
        "Optionele aanbetalingen tegen no-shows",
        "Bevestigingen en herinneringen inbegrepen",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Klant boekt een beauty-afspraak op een smartphone",
      },
      features: [
        { icon: Globe, title: "Jouw boekingspagina", desc: "Deel een nette boekingslink op je website, Instagram en Google-profiel." },
        { icon: Clock, title: "Realtime beschikbaarheid", desc: "Klanten zien alleen echt vrije slots – geen dubbele boekingen." },
        { icon: CreditCard, title: "Aanbetalingsopties", desc: "Vraag aanbetalingen bij populaire behandelingen om je stoeltijd te beschermen." },
        { icon: Bell, title: "Automatische bevestigingen", desc: "Directe bevestiging plus herinneringen die no-shows verminderen." },
        { icon: Smartphone, title: "Mobile-first", desc: "Ontworpen voor telefoons – waar de meeste beautyklanten boeken." },
        { icon: Link2, title: "Gesynchroniseerde agenda", desc: "Elke boeking landt direct in je studio-agenda." },
      ],
      closingTitle: "Vul meer stoelen met minder telefoontijd",
      closingText:
        "Online boeken maakt van stille uren omzet. Treatflow houdt boekingen, herinneringen en je agenda in één flow.",
    },
    fi: {
      eyebrow: "Verkkoajanvaraus",
      title: "Asiakkaat varaavat itse – 24/7",
      subtitle:
        "Brändätty varaussivu täyttää kalenterisi myös aukioloaikojen ulkopuolella – ilman puhelinrumbaa tai päällekkäisiä varauksia.",
      bullets: [
        "Varattavissa ympäri vuorokauden",
        "Näyttää vain todellisen saatavuuden",
        "Valinnaiset ennakkomaksut vähentävät no-show’ta",
        "Vahvistukset ja muistutukset mukana",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Asiakas varaa kauneushoidon älypuhelimella",
      },
      features: [
        { icon: Globe, title: "Oma varaussivu", desc: "Jaa selkeä varauslinkki verkkosivulla, Instagramissa ja Google-profiilissa." },
        { icon: Clock, title: "Reaaliaikainen saatavuus", desc: "Asiakkaat näkevät vain vapaat ajat – ei päällekkäisiä varauksia." },
        { icon: CreditCard, title: "Ennakkomaksut", desc: "Pyydä ennakkomaksua kysytyistä palveluista ja suojaa tuolisi aika." },
        { icon: Bell, title: "Automaattiset vahvistukset", desc: "Heti vahvistus sekä muistutukset, jotka vähentävät no-show’ta." },
        { icon: Smartphone, title: "Mobile-first", desc: "Suunniteltu puhelimelle – missä useimmat kauneusasiakkaat varaavat." },
        { icon: Link2, title: "Synkronoitu kalenteri", desc: "Jokainen varaus tulee suoraan studion kalenteriin." },
      ],
      closingTitle: "Täytä enemmän tuoleja vähemmällä puhelinajalla",
      closingText:
        "Verkkoajanvaraus muuttaa hiljaiset tunnit liikevaihdoksi. Treatflow pitää varaukset, muistutukset ja kalenterin yhdessä virrassa.",
    },
  },

  "client-records": {
    en: {
      eyebrow: "Client records",
      title: "Every client history in one place",
      subtitle:
        "Notes, forms, photos and treatment history - ready before each appointment, without paper folders.",
      bullets: [
        "Complete client profiles",
        "Treatment and photo history",
        "Forms linked to the record",
        "Fast search across your studio",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Digital client record overview in Treatflow",
      },
      features: [
        { icon: Users, title: "Client profiles", desc: "Contact details, preferences and notes in one structured record." },
        { icon: FileText, title: "Treatment history", desc: "See what was done, when, and with which products or settings." },
        { icon: Camera, title: "Photo documentation", desc: "Before/after photos attached to the right treatment." },
        { icon: ClipboardCheck, title: "Linked forms", desc: "Intake and consent forms live with the client file." },
        { icon: Search, title: "Quick search", desc: "Find clients and past treatments in seconds." },
        { icon: FolderOpen, title: "Paperless archive", desc: "Replace binders with a searchable digital archive." },
      ],
      closingTitle: "Know your client before they sit down",
      closingText:
        "Better records mean safer treatments and a more personal experience - without digging through paper.",
      faqs: [
        {
          question: "Are digital client records in Treatflow GDPR-ready?",
          answer:
            "Yes. Records live on EU servers in Frankfurt with SSL encryption and daily backups. Forms, photos and treatment history sit on the same client file. The studio remains the owner of its client data.",
        },
        {
          question: "What is stored on a Treatflow client record?",
          answer:
            "Contact details, notes, intake and consent forms, treatment history and before/after photos – searchable across the studio so the team is ready before each visit.",
        },
      ],
      aiCapsules: [
        {
          question: "Can I keep client history in Treatflow?",
          answer:
            "Yes. Treatflow stores contact details, notes, forms, treatment history and photos on one client record so the team can open the same file before each visit.",
        },
      ],
      problem: {
        problem: "Client notes, photos and forms live in different folders, chats and devices.",
        solution:
          "Treatflow keeps the history on one record: forms, notes, photos and previous treatments stay together.",
      },
      relatedLinks: [
        { href: "/en/forms", label: "Consultation and consent forms" },
        { href: "/en/treatment-documentation", label: "Treatment documentation" },
        { href: "/en/online-booking", label: "Online booking" },
        { href: "/en/aesthetic-clinic-software", label: "Aesthetic clinic software" },
      ],
    },
    tr: {
      eyebrow: "Müşteri takibi",
      title: "Her müşteri kaydı tek yerde",
      subtitle:
        "Notlar, onam formları, fotoğraflar ve işlem geçmişi – randevudan önce hazır. Klasör ve WhatsApp karışıklığı yok.",
      bullets: [
        "Eksiksiz müşteri kartı",
        "İşlem ve fotoğraf geçmişi",
        "Onam formları kayda bağlı",
        "Salonda saniyede arama",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Treatflow'da dijital müşteri kaydı",
      },
      features: [
        { icon: Users, title: "Müşteri kartı", desc: "İletişim, tercihler, alerji notları tek kayıtta." },
        { icon: FileText, title: "İşlem geçmişi", desc: "Ne yapıldığını, ne zaman ve hangi ürün veya ayarla yapıldığını görün." },
        { icon: Camera, title: "Öncesi-sonrası fotoğraf", desc: "Fotoğraflar doğru işleme eklenir, galeride kaybolmaz." },
        { icon: ClipboardCheck, title: "Bağlı formlar", desc: "Anamnez ve onam, müşteri kartıyla birlikte durur." },
        { icon: Search, title: "Hızlı arama", desc: "Müşteriyi ve geçmiş seansları saniyeler içinde bulun." },
        { icon: FolderOpen, title: "Dijital arşiv", desc: "Klasörleri aranabilir kayıtlara taşıyın." },
      ],
      closingTitle: "Müşteri koltuğa oturmadan kaydı açın",
      closingText:
        "Düzenli kayıt daha güvenli işlem ve daha kişisel karşılama demektir – kağıt ve sohbet geçmişinde aramadan.",
      faqs: [
        {
          question: "Treatflow müşteri kayıtları KVKK uyumlu mu?",
          answer:
            "Evet. Kayıtlar Frankfurt'taki AB sunucularında SSL şifreleme ve günlük yedekleme ile tutulur. Formlar, fotoğraflar ve işlem geçmişi aynı karttadır. Salon, müşteri datasının sahibidir.",
        },
        {
          question: "Müşteri kaydında neler tutulur?",
          answer:
            "İletişim bilgileri, notlar, anamnez ve onam formları, işlem geçmişi ve öncesi-sonrası fotoğraflar. Ekip her randevudan önce aynı kaydı açar.",
        },
      ],
      relatedLinks: [
        { href: "/tr/forms", label: "Onam formları" },
        { href: "/tr/treatment-documentation", label: "İşlem kayıtları" },
        { href: "/tr/online-booking", label: "Online randevu" },
        { href: "/tr/aesthetic-clinic-software", label: "Estetik klinik yazılımı" },
      ],
    },
    nl: {
      eyebrow: "Klantendossiers",
      title: "Elke klantgeschiedenis op één plek",
      subtitle:
        "Notities, formulieren, foto’s en behandelhistorie – klaar vóór elke afspraak, zonder papieren mappen.",
      bullets: [
        "Volledige klantprofielen",
        "Behandel- en fotohistorie",
        "Formulieren gekoppeld aan het dossier",
        "Snel zoeken in je hele studio",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Digitaal klantendossier-overzicht in Treatflow",
      },
      features: [
        { icon: Users, title: "Klantprofielen", desc: "Contactgegevens, voorkeuren en notities in één gestructureerd dossier." },
        { icon: FileText, title: "Behandelhistorie", desc: "Zie wat er is gedaan, wanneer, en met welke producten of instellingen." },
        { icon: Camera, title: "Fotodocumentatie", desc: "Voor/na-foto’s gekoppeld aan de juiste behandeling." },
        { icon: ClipboardCheck, title: "Gekoppelde formulieren", desc: "Anamnese- en toestemmingsformulieren horen bij het klantbestand." },
        { icon: Search, title: "Snel zoeken", desc: "Vind klanten en eerdere behandelingen in seconden." },
        { icon: FolderOpen, title: "Papierloos archief", desc: "Vervang ordners door een doorzoekbaar digitaal archief." },
      ],
      closingTitle: "Ken je klant vóór ze plaatsneemt",
      closingText:
        "Betere dossiers betekenen veiligere behandelingen en een persoonlijkere ervaring – zonder door papier te graven.",
    },
    fi: {
      eyebrow: "Asiakaskortistot",
      title: "Jokainen asiakashistoria yhdessä paikassa",
      subtitle:
        "Merkinnät, lomakkeet, valokuvat ja hoitohistoria – valmiina ennen jokaista aikaa, ilman paperikansioita.",
      bullets: [
        "Täydelliset asiakasprofiilit",
        "Hoito- ja valokuvahistoria",
        "Lomakkeet linkitettynä kortistoon",
        "Nopea haku koko studiossa",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Digitaalinen asiakaskortistonäkymä Treatflow’ssa",
      },
      features: [
        { icon: Users, title: "Asiakasprofiilit", desc: "Yhteystiedot, mieltymykset ja muistiinpanot yhdessä jäsennellyssä kortissa." },
        { icon: FileText, title: "Hoitohistoria", desc: "Näe mitä tehtiin, milloin ja millä tuotteilla tai asetuksilla." },
        { icon: Camera, title: "Valokuvadokumentointi", desc: "Ennen/jälkeen-kuvat liitettynä oikeaan hoitoon." },
        { icon: ClipboardCheck, title: "Linkitetyt lomakkeet", desc: "Anamneesi- ja suostumuslomakkeet elävät asiakaskortin kanssa." },
        { icon: Search, title: "Pikahaku", desc: "Löydä asiakkaat ja aiemmat hoidot sekunneissa." },
        { icon: FolderOpen, title: "Paperiton arkisto", desc: "Korvaa mapit haettavalla digitaalisella arkistolla." },
      ],
      closingTitle: "Tunne asiakkaasi ennen kuin hän istuutuu",
      closingText:
        "Parempi dokumentointi tarkoittaa turvallisempia hoitoja ja henkilökohtaisempaa kokemusta – ilman paperin kaivelua.",
    },
  },

  forms: {
    en: {
      eyebrow: "Consultation and consent forms",
      title: "Digital consultation and consent forms",
      subtitle:
        "Send intake and consent forms ahead of the appointment. Try sample templates without signing up, then create your own with the form generator – or we help you set them up.",
      bullets: [
        "Clients complete forms before they arrive",
        "Digital signatures on any device",
        "Sample templates, AI form generator, or we set forms up with you",
        "Stored securely with the client record",
      ],
      secondaryCta: { label: "Try sample forms", href: "/en/try-forms" },
      promo: {
        title: "Try sample forms without signing up",
        text: "The templates below show how digital check-in works. You create forms for your studio with the AI generator, or we set them up together with you.",
        href: "/en/try-forms",
        cta: "Open samples",
      },
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digital consent form signed on a tablet",
      },
      features: [
        { icon: Send, title: "Send in advance", desc: "Share forms by link before the visit - less waiting at reception." },
        { icon: Smartphone, title: "Mobile friendly", desc: "Clients complete forms on their phone in minutes." },
        { icon: FileSignature, title: "Digital signatures", desc: "Capture consent securely without printing." },
        { icon: PenLine, title: "Templates & generator", desc: "Start from sample templates, build your own with the AI generator, or we set forms up with you." },
        { icon: ShieldCheck, title: "Secure storage", desc: "Forms stay with the client record on EU-hosted infrastructure." },
        { icon: ClipboardCheck, title: "Ready to treat", desc: "Your team sees completed forms before the appointment starts." },
      ],
      closingTitle: "Start treatments with paperwork already done",
      closingText:
        "Digital intake protects your studio and saves time at the front desk - every single day.",
      faqs: [
        {
          question: "Does Treatflow include digital consent forms for aesthetic clinics?",
          answer:
            "Yes. You send intake and consent templates before the visit. Clients fill them in on their phone, including a digital signature. Completed forms are stored on the client record.",
        },
        {
          question: "Can clients complete forms before they arrive?",
          answer:
            "Yes. Share a link by WhatsApp or email. The team sees completed forms before the appointment starts, so treatments can begin on time.",
        },
      ],
      aiCapsules: [
        {
          question: "Does Treatflow support digital consent forms?",
          answer:
            "Yes. Treatflow sends consultation and consent templates before the visit. Clients complete them on their phone, including a digital signature. Completed forms are stored on the client record.",
        },
      ],
      problem: {
        problem: "Paper intake slows the front desk and is hard to find later.",
        solution:
          "Treatflow sends digital consultation and consent forms before the appointment. Answers and signatures sit on the client record.",
      },
      relatedLinks: [
        { href: "/en/try-forms", label: "Try sample forms" },
        { href: "/en/client-records", label: "Client records" },
        { href: "/en/treatment-documentation", label: "Treatment documentation" },
        { href: "/en/aesthetic-clinic-software", label: "Aesthetic clinic software" },
        { href: "/en/laser-hair-removal-software", label: "Laser hair removal software" },
      ],
    },
    tr: {
      eyebrow: "Onam formları",
      title: "Dijital anamnez ve onam formları",
      subtitle:
        "Randevudan önce anamnez ve onam gönderin. Müşteri telefonda doldurur, dijital imza atar – resepsiyonda evrak kuyruğu biter.",
      bullets: [
        "Müşteri gelmeden formu doldurur",
        "Her cihazda dijital imza",
        "Hazır şablonlar veya birlikte kurulum",
        "KVKK kapsamında müşteri kaydında saklanır",
      ],
      secondaryCta: { label: "Örnek formları deneyin", href: "/tr/try-forms" },
      promo: {
        title: "Kayıt olmadan örnek formları deneyin",
        text: "Aşağıdaki şablonlar dijital ön kaydın nasıl işlediğini gösterir. Salonunuz için yapay zeka ile form üretebilir veya birlikte kurarız.",
        href: "/tr/try-forms",
        cta: "Örnekleri aç",
      },
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Tablette imzalanan dijital onam formu",
      },
      features: [
        { icon: Send, title: "Önceden gönderin", desc: "Randevudan önce link paylaşın – resepsiyonda bekleme azalır." },
        { icon: Smartphone, title: "Mobil uyumlu", desc: "Müşteri formu dakikalar içinde telefonundan doldurur." },
        { icon: FileSignature, title: "Dijital imza", desc: "Yazıcıya basmadan onam ve açık rıza alın." },
        { icon: PenLine, title: "Şablonlar", desc: "Lazer, dolgu, botoks ve cilt bakımı için şablondan başlayın veya birlikte kuralım." },
        { icon: ShieldCheck, title: "Güvenli saklama", desc: "Formlar AB sunucularında müşteri kaydıyla birlikte durur." },
        { icon: ClipboardCheck, title: "İşleme hazır", desc: "Ekip, randevu başlamadan doldurulmuş onamı görür." },
      ],
      closingTitle: "İşleme evrak bitmiş halde başlayın",
      closingText:
        "Dijital onam salonu ve kliniği korur, resepsiyonda her gün zaman kazandırır. KVKK için kayıt elinizin altında kalır.",
      faqs: [
        {
          question: "Treatflow medikal estetik için dijital onam içerir mi?",
          answer:
            "Evet. Randevudan önce anamnez ve onam şablonlarını gönderirsiniz. Müşteri dijital imza dahil telefonda doldurur. Tamamlanan formlar müşteri kaydında saklanır.",
        },
        {
          question: "Müşteri gelmeden formu doldurabilir mi?",
          answer:
            "Evet. WhatsApp veya e-posta ile link gönderin. Ekip randevu başlamadan doldurulmuş formu görür, işlem zamanında başlar.",
        },
      ],
      relatedLinks: [
        { href: "/tr/try-forms", label: "Örnek formları deneyin" },
        { href: "/tr/client-records", label: "Müşteri takibi" },
        { href: "/tr/treatment-documentation", label: "İşlem kayıtları" },
        { href: "/tr/aesthetic-clinic-software", label: "Estetik klinik yazılımı" },
      ],
    },
    nl: {
      eyebrow: "Formulieren",
      title: "Anamnese & toestemming, volledig digitaal",
      subtitle:
        "Stuur anamnese- en toestemmingsformulieren vóór de afspraak. Klanten vullen ze in op hun telefoon – jij start op tijd, met alles klaar.",
      bullets: [
        "Klanten vullen formulieren in vóór aankomst",
        "Digitale handtekeningen op elk apparaat",
        "Herbruikbare sjablonen voor elke behandeling",
        "Veilig opgeslagen bij het klantendossier",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digitaal toestemmingsformulier ondertekend op een tablet",
      },
      features: [
        { icon: Send, title: "Vooraf versturen", desc: "Deel formulieren via link vóór het bezoek – minder wachten bij de balie." },
        { icon: Smartphone, title: "Mobielvriendelijk", desc: "Klanten vullen formulieren in minuten in op hun telefoon." },
        { icon: FileSignature, title: "Digitale handtekeningen", desc: "Leg toestemming veilig vast zonder te printen." },
        { icon: PenLine, title: "Sjablonen", desc: "Hergebruik anamnese-sjablonen voor laser, injectables, beauty en meer." },
        { icon: ShieldCheck, title: "Veilige opslag", desc: "Formulieren blijven bij het dossier op EU-gehoste infrastructuur." },
        { icon: ClipboardCheck, title: "Klaar om te behandelen", desc: "Je team ziet ingevulde formulieren vóór de afspraak begint." },
      ],
      closingTitle: "Start behandelingen met papierenwerk al klaar",
      closingText:
        "Digitale intake beschermt je studio en bespaart tijd aan de balie – elke dag opnieuw.",
    },
    fi: {
      eyebrow: "Lomakkeet",
      title: "Anamneesi & suostumus, täysin digitaalisesti",
      subtitle:
        "Lähetä anamneesi- ja suostumuslomakkeet ennen aikaa. Asiakkaat täyttävät ne puhelimellaan – aloitat ajoissa, kaikki valmiina.",
      bullets: [
        "Asiakkaat täyttävät lomakkeet ennen saapumista",
        "Digitaaliset allekirjoitukset millä tahansa laitteella",
        "Uudelleenkäytettävät mallipohjat jokaiseen hoitoon",
        "Tallennettu turvallisesti asiakaskorttiin",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Digitaalinen suostumuslomake allekirjoitettuna tabletilla",
      },
      features: [
        { icon: Send, title: "Lähetä etukäteen", desc: "Jaa lomakkeet linkillä ennen käyntiä – vähemmän odottelua vastaanotossa." },
        { icon: Smartphone, title: "Mobiiliystävällinen", desc: "Asiakkaat täyttävät lomakkeet puhelimellaan minuuteissa." },
        { icon: FileSignature, title: "Digitaaliset allekirjoitukset", desc: "Kerää suostumus turvallisesti ilman tulostusta." },
        { icon: PenLine, title: "Mallipohjat", desc: "Käytä anamneesipohjia uudelleen laserille, injektioille, kauneudelle ja muulle." },
        { icon: ShieldCheck, title: "Turvallinen tallennus", desc: "Lomakkeet pysyvät asiakaskortin kanssa EU-palvelimilla." },
        { icon: ClipboardCheck, title: "Valmis hoitoon", desc: "Tiimisi näkee täytetyt lomakkeet ennen ajan alkua." },
      ],
      closingTitle: "Aloita hoidot paperityöt jo tehtyinä",
      closingText:
        "Digitaalinen intake suojaa studiota ja säästää aikaa vastaanotossa – joka ikinen päivä.",
    },
  },

  "treatment-documentation": {
    en: {
      eyebrow: "Treatment documentation",
      title: "Document every treatment clearly",
      subtitle:
        "Notes, parameters and photos in a structured treatment record - including voice dictation, built for beauty and aesthetic studios.",
      bullets: [
        "Structured treatment notes",
        "Voice dictation, optionally refined with AI",
        "Before/after photo sets",
        "Linked to the client history",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Treatment documentation with photo comparison",
      },
      features: [
        { icon: FileText, title: "Treatment notes", desc: "Capture what you did, products used and client reaction." },
        { icon: Mic, title: "Voice dictation", desc: "Speak your notes instead of typing. Treatflow turns speech into text and can refine it with AI." },
        { icon: Camera, title: "Photo proof", desc: "Attach before/after images to the exact treatment." },
        { icon: ClipboardCheck, title: "Follow-up ready", desc: "See the last treatment instantly at the next visit." },
        { icon: ShieldCheck, title: "Compliance support", desc: "Keep a clear trail for consent-linked treatments." },
        { icon: Users, title: "Team visibility", desc: "Colleagues see the same documentation when they take over a client." },
      ],
      closingTitle: "Documentation that protects and impresses",
      closingText:
        "Clear treatment records improve safety, continuity and client trust - without slowing your day down.",
      faqs: [
        {
          question: "Can laser hair removal studios document treatments in Treatflow?",
          answer:
            "Yes. You record parameters, notes and before/after photos per session. The history is linked to the client, which helps follow-ups and team handovers. German and Austrian studios can also use NiSV-style protocols.",
        },
        {
          question: "Are before and after photos stored on the client record?",
          answer:
            "Yes. Photo sets are attached to the exact treatment, not a generic camera roll, so you can compare progress at the next visit.",
        },
        {
          question: "Can I dictate treatment notes in Treatflow?",
          answer:
            "Yes. In treatment documentation you can speak notes instead of typing. Treatflow turns speech into text and can refine it with AI. The note is saved with that visit.",
        },
      ],
      aiCapsules: [
        {
          question: "Can I document treatments in Treatflow?",
          answer:
            "Yes. Treatflow stores treatment notes, parameters and before-and-after photos on the client visit. You can type notes or dictate them by voice and optionally refine the text with AI.",
        },
      ],
      problem: {
        problem: "Notes and photos end up on phones, paper and chat threads, disconnected from the visit.",
        solution:
          "Treatflow attaches notes and photo sets to the treatment. You can dictate notes by voice so documentation stays on the visit without slowing the session down.",
      },
      relatedLinks: [
        { href: "/en/client-records", label: "Client records" },
        { href: "/en/forms", label: "Consultation and consent forms" },
        { href: "/en/laser-hair-removal-software", label: "Laser hair removal software" },
        { href: "/en/aesthetic-clinic-software", label: "Aesthetic clinic software" },
      ],
    },
    tr: {
      eyebrow: "İşlem kayıtları",
      title: "Her işlemi net kaydedin",
      subtitle:
        "Notlar, cihaz parametreleri ve öncesi-sonrası fotoğraflar müşteri kaydında – sesli not dahil. Güzellik ve medikal estetik için.",
      bullets: [
        "Düzenli seans notları",
        "Sesli not, isteğe bağlı yapay zeka düzeltmesi",
        "Öncesi-sonrası fotoğraf",
        "Müşteri geçmişine bağlı",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Öncesi-sonrası fotoğraf karşılaştırmalı işlem kaydı",
      },
      features: [
        { icon: FileText, title: "İşlem notları", desc: "Ne yaptığınızı, kullanılan ürünü ve müşteri tepkisini kaydedin." },
        { icon: Mic, title: "Sesli not", desc: "Yazmak yerine konuşun. Treatflow metne çevirir, yapay zeka ile sadeleştirebilir." },
        { icon: Camera, title: "Fotoğraf kanıtı", desc: "Öncesi-sonrası görselleri tam o seansa ekleyin." },
        { icon: ClipboardCheck, title: "Takibe hazır", desc: "Sonraki randevuda son seansı anında açın." },
        { icon: ShieldCheck, title: "Denetim izi", desc: "Onamla bağlı işlemler için net kayıt tutun." },
        { icon: Users, title: "Ekip görünürlüğü", desc: "Başka bir personel müşteriyi aldığında aynı kaydı görür." },
      ],
      closingTitle: "Kayıt hem korur hem güven verir",
      closingText:
        "Net işlem kaydı güvenliği, devamlılığı ve müşteri güvenini artırır – günü yavaşlatmadan.",
      faqs: [
        {
          question: "Lazer epilasyon merkezleri Treatflow'da seans kaydı tutabilir mi?",
          answer:
            "Evet. Seans başına parametre, not ve öncesi-sonrası fotoğraf kaydedilir. Geçmiş müşteri kartına bağlıdır; takip ve ekip devri kolaylaşır.",
        },
        {
          question: "Öncesi-sonrası fotoğraflar müşteri kaydında mı?",
          answer:
            "Evet. Fotoğraflar telefon galerisinde değil, tam o işleme eklenir. Sonraki seansda ilerlemeyi karşılaştırırsınız.",
        },
        {
          question: "İşlem notunu sesle yazabilir miyim?",
          answer:
            "Evet. Yazmak yerine konuşabilirsiniz. Treatflow konuşmayı metne çevirir ve yapay zeka ile sadeleştirebilir. Not o seansla kaydedilir.",
        },
      ],
      relatedLinks: [
        { href: "/tr/client-records", label: "Müşteri takibi" },
        { href: "/tr/forms", label: "Onam formları" },
        { href: "/tr/beauty-salon-software", label: "Güzellik salonu yazılımı" },
        { href: "/tr/aesthetic-clinic-software", label: "Estetik klinik yazılımı" },
      ],
    },
    nl: {
      eyebrow: "Behandeldocumentatie",
      title: "Documenteer elke behandeling duidelijk",
      subtitle:
        "Notities, parameters en foto’s in een gestructureerd behandeldossier – gemaakt voor beauty- en esthetische studio’s.",
      bullets: [
        "Gestructureerde behandelnotities",
        "Voor/na-fotosets",
        "Gekoppeld aan de klantgeschiedenis",
        "Handig voor follow-ups en compliance",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Behandeldocumentatie met fotovergelijking",
      },
      features: [
        { icon: FileText, title: "Behandelnotities", desc: "Leg vast wat je deed, gebruikte producten en de reactie van de klant." },
        { icon: Camera, title: "Fotobewijs", desc: "Koppel voor/na-beelden aan exact die behandeling." },
        { icon: ClipboardCheck, title: "Klaar voor follow-up", desc: "Zie de vorige behandeling direct bij het volgende bezoek." },
        { icon: ShieldCheck, title: "Compliance-ondersteuning", desc: "Houd een duidelijk spoor bij toestemmingsgekoppelde behandelingen." },
        { icon: FolderOpen, title: "Georganiseerde historie", desc: "Geen verspreide notities meer over apps en papier." },
        { icon: Users, title: "Teamzichtbaarheid", desc: "Collega’s zien dezelfde documentatie wanneer ze een klant overnemen." },
      ],
      closingTitle: "Documentatie die beschermt en indruk maakt",
      closingText:
        "Duidelijke behandeldossiers verbeteren veiligheid, continuïteit en klantvertrouwen – zonder je dag te vertragen.",
    },
    fi: {
      eyebrow: "Hoitodokumentointi",
      title: "Dokumentoi jokainen hoito selkeästi",
      subtitle:
        "Merkinnät, parametrit ja valokuvat jäsennellyssä hoitokortissa – suunniteltu kauneus- ja estetiikkastudioille.",
      bullets: [
        "Jäsennellyt hoitomerkinnät",
        "Ennen/jälkeen-kuvasetit",
        "Linkitetty asiakashistoriaan",
        "Hyödyllinen seurannassa ja vaatimustenmukaisuudessa",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Hoitodokumentointi valokuvavertailulla",
      },
      features: [
        { icon: FileText, title: "Hoitomerkinnät", desc: "Kirjaa mitä teit, käytetyt tuotteet ja asiakkaan reaktio." },
        { icon: Camera, title: "Valokuvatodiste", desc: "Liitä ennen/jälkeen-kuvat juuri kyseiseen hoitoon." },
        { icon: ClipboardCheck, title: "Seuranta valmiina", desc: "Näe edellinen hoito heti seuraavalla käynnillä." },
        { icon: ShieldCheck, title: "Vaatimustenmukaisuus", desc: "Pidä selkeä jälki suostumukseen sidotuista hoidoista." },
        { icon: FolderOpen, title: "Järjestetty historia", desc: "Ei enää hajallaan olevia muistiinpanoja sovelluksissa ja paperilla." },
        { icon: Users, title: "Tiimin näkyvyys", desc: "Kollegat näkevät saman dokumentoinnin, kun he ottavat asiakkaan vastaan." },
      ],
      closingTitle: "Dokumentointi, joka suojaa ja vakuuttaa",
      closingText:
        "Selkeät hoitokortit parantavat turvallisuutta, jatkuvuutta ja asiakkaan luottamusta – hidastamatta päivääsi.",
    },
  },
};

function resolveCoreLang(market: PrefixedMarket): CoreLang {
  const lang = marketLanguage[market];
  if (lang === "nl" || lang === "fi" || lang === "tr") return lang;
  return "en";
}

export function getCoreFeaturePage(
  market: PrefixedMarket,
  key: CoreKey
): FeaturePageProps {
  const lang = resolveCoreLang(market);
  const primaryCta =
    lang === "tr"
      ? "30 gün ücretsiz deneyin"
      : lang === "nl"
        ? "14 dagen gratis proberen"
        : lang === "fi"
          ? "Kokeile 14 päivää ilmaiseksi"
          : "Start 14-day free trial";
  const bottomTitle =
    lang === "tr"
      ? "Başlamaya hazır mısınız?"
      : lang === "nl"
        ? "Klaar om te starten?"
        : lang === "fi"
          ? "Valmis aloittamaan?"
          : "Ready to get started?";
  const bottomText =
    lang === "tr"
      ? "Ücretsiz denemenizi başlatın – kredi kartı gerekmez, istediğiniz zaman iptal edin."
      : lang === "nl"
        ? "Start je gratis proefperiode – geen creditcard, opzeggen wanneer je wilt."
        : lang === "fi"
          ? "Aloita ilmainen kokeilu – ei luottokorttia, peruuta milloin tahansa."
          : "Start your free trial – no credit card required, cancel anytime.";

  const chrome = getUiChrome(lang);
  const homeHref = marketPathPrefix[market] || "/en";

  return {
    ...pages[key][lang],
    earlyAccessHref: APP_REGISTER_BY_MARKET[market],
    primaryCta,
    bottomTitle,
    bottomText,
    relatedTitle: chrome.relatedTitle,
    trustItems: [...chrome.trustItems],
    faqTitle: chrome.faqTitle,
    faqBadge: chrome.faqBadge,
    breadcrumbHomeHref: homeHref,
  };
}

export type { CoreKey, LucideIcon };
