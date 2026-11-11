import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "Güzellik salonunda vardiya ve izinleri nasıl planlarım?",
    answer:
      "Treatflow vardiya planlayıcısıyla her haftayı çalışan bazında planlarsınız: günde bir veya birden fazla vardiya, sabah, akşam veya tam gün gibi şablonlar ve yıllık izin, hastalık ya da eğitim gibi devamsızlıklar tarih aralığı olarak. “Önceki haftayı kopyala” ile yeni hafta saniyeler içinde hazır olur. Online randevu ardından yalnızca gerçekten birinin çalıştığı saatleri gösterir.",
  },
  {
    question: "Vardiya planlayıcısının ücreti nedir?",
    answer:
      "Vardiya planlayıcısı Booking paketindeki bir uygulamadır (aylık ₺1.990, yıllık ödemede ₺1.792/ay, KDV hariç) ve şu anda ek ücret gerektirmez. Uygulamalar → Vardiya planlayıcı bölümünden açarsınız; 14 günlük deneme süresinde ücretsiz deneyebilirsiniz.",
  },
  {
    question: "Mevcut çalışma saatlerine ne olur?",
    answer:
      "Açtığınız anda Treatflow, randevuya açık saatler kaybolmasın diye önümüzdeki 8 haftayı mevcut çalışma saatlerinden doldurur. Sonrasında planlamaya siz devam edersiniz – Treatflow haftaları otomatik doldurmaz. Vardiya planlayıcısını kapatırsanız normal çalışma saatleri geçerli olur, planınız kayıtlı kalır.",
  },
  {
    question: "Müşteriler birinin neden müsait olmadığını görür mü?",
    answer:
      "Hayır. Yıllık izin, hastalık veya eğitim süresince çalışan online randevuya kapalıdır. Müşteriler yalnızca boş saatleri görür, devamsızlığın nedenini asla görmez.",
  },
  {
    question: "Önceden alınmış randevulara ne olur?",
    answer:
      "Alınmış randevular, vardiyayı değiştirseniz veya izin girseniz de yerinde kalır. Bir randevu vardiya dışında ya da bir devamsızlık içinde kalıyorsa, Treatflow randevuyu açtığınızda sizi uyarır; böylece zamanında taşıyabilirsiniz.",
  },
  {
    question: "Bir güne birden fazla vardiya planlayabilir miyim?",
    answer:
      "Evet. Çalışan başına günde istediğiniz kadar vardiya planlayabilirsiniz, örneğin uzun öğle arasıyla 9–12 ve 15–19. Vardiyalar yalnızca birbiriyle çakışmamalıdır.",
  },
  {
    question: "Vardiyalar çalışma saatleri dışında da geçerli mi?",
    answer:
      "Evet. Vardiya planlayıcısı açıkken planlanan vardiya geçerlidir – normal çalışma saatlerinden önce başlasa veya sonra bitse bile. Böylece çalışma saatlerini değiştirmeden bir çalışanla uzun bir perşembe sunabilirsiniz.",
  },
  {
    question: "Bir vardiyayı yalnızca belirli hizmetlere açabilir miyim?",
    answer:
      "Evet. Her vardiya ve her şablon online randevu için belirli kategorilerle ya da hizmetlerle sınırlandırılabilir, örneğin perşembe öğleden sonra yalnızca lazer. Haftalık planda vardiyanın üzerinde hangi hizmetlerin online alınabildiği görünür.",
  },
  {
    question: "Resmî tatiller dikkate alınıyor mu?",
    answer:
      "Evet. Salonunuzun kapalı olduğu resmî tatiller vardiya planında adıyla birlikte gri bir sütun olarak görünür. Bunları Ayarlar → Çalışma saatleri → Tatiller bölümünden belirlersiniz.",
  },
  {
    question: "Vardiya planını kimler düzenleyebilir?",
    answer:
      "Vardiya planını işletme sahibi ve yönetici rolündeki çalışanlar düzenler. Yalnızca PIN koduyla giriş yapan çalışanların plana erişimi yoktur.",
  },
];

export const shiftPlannerTr: ShiftPlannerContent = {
  meta: {
    title: "Güzellik salonu için vardiya planlama: personel ve izin",
    description:
      "Güzellik salonları için vardiya planlayıcı: vardiyaları haftalık planlayın, izin ve hastalık girin – online randevu yalnızca birinin çalıştığı saatleri gösterir.",
    keywords: [
      "vardiya planlama programı",
      "güzellik salonu vardiya planı",
      "personel vardiya programı",
      "salon personel planlama",
      "izin takip programı",
      "çalışan vardiya çizelgesi",
      "online randevu vardiya",
    ],
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "shift-planner",
    webPage: {
      name: "Güzellik salonu için vardiya planlama: personel ve izin",
      description:
        "Güzellik salonları için çalışan bazında haftalık plan, vardiya şablonları, izin ve hastalık takibi – online randevu vardiya planına uyar.",
    },
    software: {
      name: "Treatflow vardiya planlayıcı",
      description:
        "Çalışan bazında haftalık plan, vardiya şablonları ve devamsızlıklar. Online randevu yalnızca planlanan vardiyalar içindeki saatleri sunar.",
      featureList: [
        "Çalışan başına günde birden fazla vardiyalı haftalık plan",
        "Sabah, akşam ve tam gün gibi vardiya şablonları",
        "Önceki haftayı kopyalama veya çalışma saatlerinden doldurma",
        "Yıllık izin, hastalık ve eğitim tarih aralığı olarak",
        "Yalnızca planlı vardiyalarda online randevu",
        "Vardiyayı yalnızca belirli hizmetlere açma",
        "Randevu takviminde vardiyalar ve devamsızlıklar",
      ],
      price: "1990",
      currency: "TRY",
      rating: true,
    },
  },
  breadcrumb: "Vardiya planlayıcı",
  hero: {
    eyebrow: "Vardiya planlayıcı ve personel planı",
    eyebrowIcon: "calendar-clock",
    title: { before: "Güzellik salonu için vardiya planlama: ", highlight: "randevu yalnızca çalışan varken alınır" },
    description:
      "Ekibinizin haftasını vardiyalar, şablonlar ve izinlerle planlayın. Online randevu otomatik olarak vardiya planına uyar – vardiyasız günler ve devamsızlıklar randevuya kapalıdır.",
    chips: ["Haftalık vardiyalar", "İzin ve hastalık", "Plana göre online randevu"],
    secondaryCta: { label: "Randevu takvimi", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Güzellik salonunda vardiya ve izinleri nasıl planlarım?",
        answer:
          "Treatflow vardiya planlayıcısıyla her haftayı çalışan bazında planlarsınız: günde bir veya birden fazla vardiya, sabah, akşam veya tam gün gibi şablonlar ve yıllık izin ya da hastalık gibi devamsızlıklar tarih aralığı olarak. Online randevu ardından yalnızca gerçekten birinin çalıştığı saatleri gösterir.",
      },
      {
        question: "Bir çalışan izindeyken online randevuya ne olur?",
        answer:
          "Yıllık izin, hastalık veya eğitim süresince çalışan online randevuya kapalıdır. Müşteriler nedeni görmez, yalnızca diğer çalışanların boş saatlerini görür. Alınmış randevular yerinde kalır.",
      },
    ],
    image: {
      src: "/images/mockups/tr/schichtplan.png",
      alt: "Treatflow vardiya planlayıcı – çalışan bazında vardiyalar ve devamsızlıklarla haftalık plan",
    },
  },
  understand: {
    title: "Online randevuyu yöneten bir vardiya planı",
    description:
      "Sabit çalışma saatleri yerine haftadan haftaya planlarsınız – müşteriler de yalnızca salonda gerçekten biri varken randevu alır.",
    items: [
      {
        icon: "calendar-days",
        title: "Haftadan haftaya planlayın",
        text: "Her çalışan günde bir veya birden fazla vardiya alır, öğle aralı bölünmüş vardiyalar dahil. Haftanın toplam saatleri “Toplam” sütununda görünür.",
      },
      {
        icon: "plane",
        title: "İzin, hastalık, eğitim",
        text: "Devamsızlıkları tarih aralığı olarak girersiniz. Bu sürede çalışan online randevuya kapalıdır – müşteriler nedenini görmez.",
      },
      {
        icon: "globe",
        title: "Plana göre online randevu",
        text: "Randevu sayfanız yalnızca planlanan vardiyalar içindeki saatleri gösterir. Vardiyasız günler randevuya kapalıdır; bekleme listesi ve randevu değişiklikleri de plana uyar.",
      },
    ],
  },
  howItWorks: {
    description: "Haftalık plandan uygun online randevuya üç adımda.",
    steps: [
      {
        title: "Vardiya planlayıcısını açın",
        text: "Vardiya planlayıcısını Uygulamalar bölümünden açarsınız. Randevuya açık saatler kaybolmasın diye Treatflow önümüzdeki 8 haftayı mevcut çalışma saatlerinden doldurur.",
      },
      {
        title: "Haftayı düzenleyin",
        text: "Vardiyaları şablonla ekleyin, önceki haftayı kopyalayın veya tek tek günleri değiştirin. İzin ve hastalığı tarih aralığı olarak girin.",
      },
      {
        title: "Müşteriler plana göre randevu alır",
        text: "Online randevu yalnızca vardiyalar içindeki saatleri sunar. Randevu takviminde vardiyaları ve devamsızlıkları doğrudan günlük görünümde görürsünüz.",
      },
    ],
  },
  cards: {
    description: "Salonunuzda personel planlaması için ihtiyacınız olan her şey – takvim ve online randevuyla bağlantılı.",
    items: [
      {
        icon: "users",
        title: "Çalışan başına haftalık plan",
        text: "Çalışanlar alt alta, günler yan yana – günde istediğiniz kadar vardiyayla.",
        points: ["Bölünmüş vardiyalar", "Haftalık saatler", "Önceki haftayı kopyala"],
      },
      {
        icon: "layers",
        title: "Vardiya şablonları",
        text: "Sabah, akşam veya tam gün gibi şablonlar oluşturun ve tek tıkla ekleyin. Ya da haftayı standart çalışma saatlerinden doldurun.",
        points: ["Kendi şablonlarınız", "Gün başına hızlı seçim", "Çalışma saatlerinden doldur"],
      },
      {
        icon: "plane",
        title: "Devamsızlıklar",
        text: "Yıllık izin, hastalık, eğitim veya diğer devamsızlıklar tarih aralığı olarak – isteğe bağlı notla.",
        points: ["İzin ve hastalık", "Eğitimler", "Neden içeride kalır"],
      },
      {
        icon: "globe",
        title: "Vardiya planına göre online randevu",
        text: "Randevular yalnızca planlanan vardiyalar içinde alınır – bekleme listesinde ve müşteri kendi randevusunu değiştirdiğinde de.",
        points: ["Vardiyasız günler kapalı", "Bekleme listesi ve değişiklik", "Alınmış randevular kalır"],
      },
      {
        icon: "list-ordered",
        title: "Belirli hizmetler için vardiyalar",
        text: "Bir vardiyayı online randevu için yalnızca belirli kategorilere veya hizmetlere açın – örneğin perşembe öğleden sonra yalnızca lazer.",
        points: ["Vardiya başına ayarlanır", "Kategori veya hizmet", "Şablonlarda da"],
      },
      {
        icon: "calendar",
        title: "Takvimde görünür",
        text: "Günlük görünümde vardiya dışındaki saatler taralı görünür; vardiyalar ve devamsızlıklar her ismin altında yer alır.",
        points: ["Vardiya dışı taralı", "Randevuda uyarı", "Planda resmî tatiller"],
      },
    ],
  },
  faq: {
    title: "Vardiya planlayıcı hakkında sık sorulan sorular",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Ekip ve odalar tek takvimde" },
      { href: { page: "online-booking" }, title: "Online randevu", description: "Size özel bağlantıyla 7/24 randevu" },
      { href: { page: "messaging" }, title: "Hatırlatmalar", description: "Otomatik e-posta hatırlatmaları" },
    ],
  },
  cta: {
    title: "Ekibinizi planlayın – online randevu plana uysun",
    description: "14 gün ücretsiz deneyin – kredi kartı gerekmez. Vardiya planı, randevu takvimi ve online randevu tek uygulamada.",
    secondary: { label: "Randevu takvimi", href: { page: "appointment-calendar" } },
  },
};
