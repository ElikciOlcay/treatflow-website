import type { MessagingContent } from "./types";

export const messagingTr: MessagingContent = {
  meta: {
    title: "Güzellik Salonları için Otomatik E-posta Hatırlatmaları",
    description:
      "Güzellik salonları için otomatik müşteri mesajları: randevu onayları, e-posta hatırlatmaları, iptal bildirimleri, takip mesajları ve doğum günü tebrikleri – hazır şablonlarla.",
    keywords: [
      "randevu hatırlatma e-postası",
      "güzellik salonu otomatik mesaj",
      "randevuya gelmeme azaltma",
      "otomatik randevu hatırlatma",
      "randevu onay e-postası",
      "işlem sonrası takip e-postası",
      "otomatik doğum günü mesajı",
      "müşteri sadakati güzellik salonu",
    ],
  },
  dates: { modified: "2026-09-07", published: "2024-06-01" },
  schema: {
    id: "nachrichtenautomatisierung",
    webPage: {
      name: "Güzellik Salonları için Otomatik E-posta Hatırlatmaları",
      description:
        "Güzellik salonları için otomatik müşteri mesajları: randevu onayları, e-posta hatırlatmaları, iptal bildirimleri, takip mesajları ve doğum günü tebrikleri.",
    },
  },
  breadcrumb: "Mesajlar",
  hero: {
    eyebrow: "Mesaj otomasyonu",
    eyebrowIcon: "message-circle",
    title: { before: "Otomatik ", highlight: "hatırlatmalar" },
    description:
      "Randevu onayları, hatırlatmalar ve takip mesajları e-postayla – daha az gelmeyen müşteri, daha fazla sadakat.",
    chips: ["E-posta hatırlatmaları", "Daha az boş randevu", "Doğum günü tebrikleri"],
    secondaryCta: { label: "Takvimi görün", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Güzellik salonumda randevuya gelmeyen müşterileri nasıl azaltabilirim?",
        answer:
          "Otomatik randevu hatırlatmaları, randevuya gelmeme oranını düşürmenin en etkili yoludur. Treatflow, sizin belirlediğiniz zamanlarda (örneğin randevudan 24 saat ve 2 saat önce) e-posta hatırlatması gönderir. Hatırlatmalar açık olduğunda çok daha az randevu boşa gider.",
      },
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-studio.png",
      alt: "Güzellik salonunda akıllı telefonundan randevu hatırlatmasını okuyan müşteri",
    },
  },
  understand: {
    title: "Kendiliğinden gönderilen mesajlar",
    description:
      "Randevu onayı, hatırlatma ve bakım sonrası bilgiler – müşterileriniz doğru mesajı doğru zamanda alır, sizin hiçbir şey yapmanıza gerek kalmaz.",
    items: [
      {
        icon: "bell",
        title: "Daha az unutulan randevu",
        text: "Müşterileriniz randevudan 1–7 gün önce e-postayla hatırlatma alır. Böylece çok daha az randevu boşa gider.",
      },
      {
        icon: "message-circle",
        title: "Bakım sonrası ve takip",
        text: "İşlemden sonra müşteriniz otomatik olarak bakım önerileri, bir geri bildirim talebi veya yeni randevu teklifi alır.",
      },
      {
        icon: "heart",
        title: "Kişisel tebrikler",
        text: "Doğum günü kutlamaları ve kişiselleştirilmiş mesajlar otomatik gönderilir – ek çaba olmadan müşteri bağlılığını güçlendirir.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda otomatik mesajlar.",
    steps: [
      { title: "Şablon seçin", text: "Onay, hatırlatma veya takip için hazır bir şablon seçin. Müşteri adı ve randevu tarihi gibi alanlar otomatik doldurulur." },
      { title: "Zamanı belirleyin", text: "Mesajın ne zaman gönderileceğine karar verin – örneğin randevudan 3 gün ve 1 gün önce ya da işlemden hemen sonra." },
      { title: "Gerisi kendiliğinden işler", text: "Treatflow e-postaları doğru zamanda gönderir. Siz müşterilerinizle ilgilenirsiniz." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Otomatik müşteri iletişimi için ihtiyacınız olan her şey – net ve tamamen sizin kontrolünüzde.",
    items: [
      { icon: "clock", title: "Randevu hatırlatmaları", text: "Esnek zamanlama ve kişiselleştirilmiş metinler, e-postayla.", points: ["1–7 gün önce", "Birden fazla hatırlatma", "Daha az iptal"] },
      { icon: "mail", title: "Randevu onayı", text: "Müşteri randevu alır almaz – tarih, işlem ve salon bilgileriyle.", points: ["Otomatik", "Net içerik", "Daha az soru"] },
      { icon: "message-circle", title: "Takip ve bakım sonrası", text: "İşlemden sonra öneriler paylaşın, geri bildirim isteyin veya yeni randevu önerin.", points: ["Ziyaretten sonra otomatik", "Şablonlar", "Daha fazla sadakat"] },
      { icon: "heart", title: "Doğum günü tebrikleri", text: "Müşterinizin doğum gününde kişisel tebrik ve isteğe bağlı bir teklif.", points: ["Otomatik", "İndirim eklenebilir", "Daha güçlü bağ"] },
      { icon: "zap", title: "Şablonlar ve yer tutucular", text: "Ad, randevu, işlem – metinleriniz kendiliğinden dolar.", points: ["Kişiselleştirme", "İşleme özel", "Hızlı kurulum"] },
      { icon: "bell", title: "İptal bildirimleri", text: "Bir randevu iptal edildiğinde hem müşteri hem salon anında bilgilendirilir.", points: ["Anında", "Şeffaf", "Daha az karmaşa"] },
    ],
  },
  faq: {
    title: "Mesaj otomasyonu hakkında sık sorulan sorular",
    items: [
      {
        question: "Güzellik salonumda randevuya gelmeyen müşterileri nasıl azaltabilirim?",
        answer:
          "Otomatik randevu hatırlatmaları, randevuya gelmeme oranını düşürmenin en etkili yoludur. Treatflow, ayarlayabileceğiniz zamanlarda (örneğin randevudan 3 gün ve 1 gün önce) e-posta hatırlatması gönderir. Böylece unutulan randevuların sayısı belirgin şekilde azalır.",
      },
      {
        question: "E-posta hatırlatmaları ne kadar tutar?",
        answer:
          "E-posta hatırlatmaları ve onayları tüm Treatflow paketlerine ek ücret olmadan ve gönderim sınırı olmadan dahildir.",
      },
      {
        question: "Hangi mesajları otomatikleştirmeliyim?",
        answer:
          "En önemli otomatik mesajlar şunlardır: randevu onayları, randevu hatırlatmaları (1–7 gün önce), iptal bildirimleri, işlem sonrası takip mesajları ve doğum günü tebrikleri. Böylece zaman kazanır ve müşteri sadakatini güçlendirirsiniz.",
      },
      {
        question: "Mesaj metinlerini kendim yazabilir miyim?",
        answer:
          "Evet. Hazır bir şablonla başlayabilir veya kendi metninizi yazabilirsiniz. Müşteri adı, randevu tarihi ve işlem gibi alanlar otomatik doldurulur; böylece her mesaj kişisel olur.",
      },
      {
        question: "Bakım sonrası mesajları otomatik gönderebilir miyim?",
        answer:
          "Evet. Treatflow ile işlemlerden sonra otomatik takip e-postaları ayarlayabilirsiniz. Bu e-postalar bakım önerileri, geri bildirim talepleri veya yeni randevu teklifleri içerebilir.",
      },
      {
        question: "Birden fazla mesajı tek bir otomasyonda birleştirebilir miyim?",
        answer:
          "Evet. Müşteri otomasyonlarıyla birden fazla adımı birbirine bağlarsınız – örneğin işlemden iki gün sonra bakım önerileri, altı hafta sonra yeni randevu hatırlatması ve bir süredir gelmeyen müşterilere bir mesaj.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "customer-workflows" }, title: "Müşteri otomasyonları", description: "Çok adımlı bakım sonrası takip ve yeniden kazanım" },
      { href: { page: "online-booking" }, title: "Online randevu", description: "Randevular onayla birlikte gelir" },
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Randevular ve hatırlatmalar bir arada" },
    ],
  },
  cta: {
    title: "Otomatik müşteri iletişimine hazır mısınız?",
    description: "30 gün ücretsiz deneyin – hatırlatmalar, takip mesajları ve doğum günü tebrikleri ek iş olmadan.",
    secondary: { label: "Takvimi görün", href: { page: "appointment-calendar" } },
  },
};
