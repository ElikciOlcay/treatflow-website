import type { BlogArticle } from "../types";

const DATE = "2026-11-01";

export const posts: BlogArticle[] = [
  // ---------------------------------------------------------------------------
  // 1) Randevuya gelmeyen müşteri
  // ---------------------------------------------------------------------------
  {
    topic: "reduce-no-shows",
    lang: "tr",
    slug: "randevuya-gelmeyen-musteri-azaltma",
    title: "Randevuya Gelmeyen Müşteriler Nasıl Azaltılır? Salonlar İçin Adım Adım Plan",
    metaTitle: "Randevuya Gelmeyen Müşteri Nasıl Azaltılır?",
    description:
      "Randevuya gelmeyen müşteri boş koltuk ve kayıp ciro demek. WhatsApp hatırlatma, iptal politikası, kapora ve bekleme listesiyle uygulanabilir 30 günlük plan.",
    excerpt:
      "Gelmeyen müşteri çoğu zaman kötü niyetli değil, sadece unutmuş ya da iptal etmeyi zahmetli bulmuştur. Bu rehberde hatırlatma zamanlamasından iptal politikasına kadar işe yarayan adımları topladık.",
    category: "Organizasyon",
    keywords: [
      "randevuya gelmeyen müşteri",
      "randevu hatırlatma mesajı",
      "whatsapp randevu hatırlatma",
      "güzellik salonu iptal politikası",
      "randevu kaporası",
      "no-show nasıl azaltılır",
      "salon randevu iptali",
    ],
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 8,
    answer:
      "Randevuya gelmeyen müşterileri azaltmanın en etkili yolu üç parçalı bir sistemdir: randevu alındığı anda onay, randevudan 24–48 saat önce WhatsApp veya e-posta hatırlatması ve herkesin baştan bildiği net bir iptal politikası. Buna kolay iptal/erteleme imkânı ve boşalan saatleri dolduran bir bekleme listesi eklendiğinde boş koltuk sayısı belirgin şekilde düşer.",
    takeaways: [
      "Müşterilerin çoğu kasıtlı olarak değil, unuttuğu veya iptal etmeyi zor bulduğu için gelmez.",
      "Türkiye'de hatırlatma için en güçlü kanal WhatsApp'tır; e-posta yedek kanal olarak kalmalıdır.",
      "İptal politikası yazılı, kısa ve randevu anında görünür olmalıdır; sonradan söylenen kural tartışma yaratır.",
      "Kapora herkese değil, uzun işlemlere ve tekrar tekrar gelmeyen müşterilere uygulanınca daha az sürtünme yaratır.",
      "Bekleme listesi, son dakika iptallerini kayıp olmaktan çıkarıp yeni randevuya çevirir.",
    ],
    intro: [
      "Cumartesi öğleden sonra, 90 dakikalık bir kalıcı makyaj randevusu. Malzemeler hazır, oda temizlenmiş, uzman bekliyor. Müşteri gelmiyor, telefonu açmıyor. Akşam WhatsApp'tan gelen mesaj tanıdık: “Çok özür dilerim, tamamen unutmuşum.”",
      "Her salon sahibi bu sahneyi bilir. Gelmeyen müşteri sadece o saatin cirosunu götürmez; o saati başka bir müşteriye verebilecekken veremediğiniz için iki kez kaybedersiniz. İyi haber şu: bu sorunun büyük kısmı müşteriden değil, süreçten kaynaklanır ve süreç düzeltilebilir.",
    ],
    sections: [
      {
        heading: "Randevuya gelmeyen bir müşteri salona gerçekte neye mal olur?",
        paragraphs: [
          "Kaybı görmek için kendi rakamlarınızla basit bir hesap yapın: ortalama hizmet bedeliniz × haftalık gelmeyen randevu sayısı × 4. Örneğin ortalama 1.200 TL'lik bir hizmette haftada 3 gelmeyen randevu, ayda yaklaşık 14.400 TL ciro demektir. Bu sadece doğrudan kayıp; personel maaşı, kira ve elektrik o saatte de işlemeye devam eder.",
          "Görünmeyen maliyetler de vardır: o saati almak isteyip “dolu” cevabı alan ve başka salona giden müşteri, moral bozukluğu yaşayan ekip ve lazer gibi seans planlı işlemlerde aksayan tedavi takvimi.",
        ],
        table: {
          headers: ["Kayıp türü", "Nerede görünür?", "Örnek"],
          rows: [
            ["Doğrudan ciro", "Günlük gelir", "Boş kalan 60 dakikalık cilt bakımı"],
            ["Fırsat maliyeti", "Reddedilen talepler", "“O saat dolu” denilen yeni müşteri"],
            ["Tedavi planı", "Seans aralıkları", "Lazer epilasyonda kaçırılan seans, uzayan süreç"],
            ["Ekip motivasyonu", "Personel verimi", "Hazırlık yapıp boş bekleyen uzman"],
          ],
        },
      },
      {
        heading: "Müşteriler neden randevuya gelmez?",
        paragraphs: [
          "Çözümü doğru seçmek için nedeni doğru koymak gerekir. Salonlarda en sık karşılaşılan sebepler şunlardır:",
        ],
        bullets: [
          "**Unutmak:** Özellikle iki hafta veya daha ileri tarihli randevularda en büyük neden budur.",
          "**İptalin zahmetli olması:** Müşteri aramaktan çekinir, “ne diyeceğim” diye ertelerken randevu saati geçer.",
          "**Belirsiz kural:** İptalin bir yaptırımı olmadığını düşünen müşteri son dakikada vazgeçmeyi sorun görmez.",
          "**Yanlış kayıt:** Telefonda ya da DM'de alınan randevu deftere farklı saatle yazılmıştır.",
          "**Fiyat veya süre sürprizi:** İşlemin ne kadar süreceğini veya ne kadar tutacağını bilmeyen müşteri son anda tereddüt eder.",
        ],
      },
      {
        heading: "Hatırlatma mesajı ne zaman ve hangi kanaldan gönderilmeli?",
        paragraphs: [
          "Tek bir hatırlatma çoğu zaman yeterli değildir; doğru zamanda gönderilen iki dokunuş daha iyi çalışır. Türkiye'de müşterilerin büyük kısmı WhatsApp'ı gün içinde defalarca açtığı için hatırlatmanın ana kanalı WhatsApp olmalı, e-posta ise kayıt ve yedek kanal olarak kalmalıdır.",
          "Treatflow'un Booking paketinde randevu onayı ve hatırlatmalar otomatik olarak WhatsApp ve e-posta ile gider; resepsiyonun her akşam tek tek mesaj yazması gerekmez.",
        ],
        table: {
          headers: ["Zaman", "Kanal", "İçerik"],
          rows: [
            ["Randevu alındığı an", "E-posta + WhatsApp", "Onay: tarih, saat, hizmet, adres, iptal kuralı"],
            ["48 saat önce", "WhatsApp", "Hatırlatma + kolay erteleme/iptal bağlantısı"],
            ["24 saat önce veya aynı gün sabah", "WhatsApp", "Kısa hatırlatma, gerekiyorsa hazırlık notu"],
            ["İşlem sonrası", "WhatsApp veya e-posta", "Teşekkür ve bir sonraki seans önerisi"],
          ],
        },
        callout:
          "Uzun ve hazırlık gerektiren işlemlerde (lazer, kalıcı makyaj, medikal estetik) 48 saatlik hatırlatma özellikle önemlidir: müşteri vazgeçecekse bunu boşluğu doldurabileceğiniz bir zamanda söyler.",
      },
      {
        heading: "İyi bir WhatsApp hatırlatma mesajı nasıl yazılır?",
        paragraphs: [
          "Hatırlatma mesajı kısa, samimi ve net olmalıdır. Müşteri mesajı kilit ekranında okuyup tek bakışta neyin, ne zaman ve nerede olduğunu anlamalıdır. Örnek bir metin:",
          "“Merhaba Ayşe Hanım, yarın saat 14:00'te Lazer Epilasyon (bacak) randevunuz var. Seanstan önce bölgeyi tıraş etmeyi ve güneşlenmemeyi unutmayın. Gelemeyecekseniz lütfen en geç bugün saat 18:00'e kadar bağlantıdan erteleyin. Görüşmek üzere!”",
        ],
        bullets: [
          "Müşterinin adını ve hizmeti mutlaka yazın; genel bir “randevunuz var” mesajı daha az dikkat çeker.",
          "Hazırlık notu ekleyin (tıraş, makyajsız gelme, lens takmama gibi). Bu hem işlemi kolaylaştırır hem de mesajı faydalı kılar.",
          "İptal veya erteleme yolunu kolaylaştırın. Kolay iptal, son dakika iptalinden ve hiç haber vermeden gelmemekten iyidir.",
          "Emoji ve büyük harf kullanımını abartmayın; salonunuzun diliyle yazın.",
        ],
      },
      {
        heading: "İptal politikası nasıl belirlenir ve müşteriye nasıl duyurulur?",
        paragraphs: [
          "İptal politikası cezalandırmak için değil, beklentiyi netleştirmek için vardır. Kural ne kadar baştan ve açık söylenirse, uygularken o kadar az tartışma yaşanır.",
        ],
        steps: [
          "İptal penceresini belirleyin: çoğu salon için 24 saat, uzun işlemler için 48 saat makul bir başlangıçtır.",
          "Kural ihlalinin sonucunu yazın: kapora iadesi yapılmaz, bir sonraki randevuda ön ödeme istenir gibi.",
          "Kuralı tek cümleyle özetleyin ve online randevu sayfasına, onay mesajına ve salon içine aynı metinle koyun.",
          "Ekibe istisnaları kimin onaylayacağını söyleyin (hastalık, acil durum). Herkes kendi kafasına göre esnetirse kural işlemez.",
          "Üç ay sonra gözden geçirin: hangi hizmetlerde iptal hâlâ yüksek, kural nerede gereksiz sert?",
        ],
      },
      {
        heading: "Kapora almak doğru mu, kimden alınmalı?",
        paragraphs: [
          "Kapora, gelmeyen müşteri sorununa karşı en güçlü araçtır ama herkese uygulanınca yeni müşteriyi de kaçırabilir. Dengeli bir yaklaşım, kaporayı riske göre uygulamaktır.",
          "Kapora alacaksanız tutarı, iade koşulunu ve ödeme yolunu (örneğin havale/EFT) onay mesajında açıkça yazın. Alınan kaporayı müşteri kartına not edin ki ekipten herkes durumu görsün.",
        ],
        table: {
          headers: ["Durum", "Öneri"],
          rows: [
            ["Kısa ve sık işlemler (manikür, kaş)", "Genellikle kapora gerekmez; hatırlatma yeterli"],
            ["Uzun işlemler (kalıcı makyaj, kirpik ilk set)", "Kapora mantıklı, özellikle hafta sonu saatlerinde"],
            ["Paket ve seans planlı işlemler", "Paket ödemesi zaten bağlayıcı; iptal kuralı pakete yazılmalı"],
            ["İki veya daha fazla kez haber vermeden gelmeyen müşteri", "Sonraki randevular yalnızca ön ödemeyle"],
          ],
        },
      },
      {
        heading: "Online randevu ve bekleme listesi gelmeyen müşteriyi azaltır mı?",
        paragraphs: [
          "Evet, iki yönden. Birincisi, müşteri randevusunu kendisi seçtiğinde ve onay mesajını yazılı olarak aldığında “yanlış saat” hataları ortadan kalkar. İkincisi, müşteri randevusunu aramadan erteleyebildiğinde, gelmemek yerine yeni bir tarih seçer.",
          "Bekleme listesi ise iptallerin kayba dönüşmesini engeller. Dolu bir güne yer arayan müşteriler listeye yazılır; bir iptal olduğunda o saat önce listeye teklif edilir. Böylece 48 saat önceki iptal, ciro kaybı yerine yeni bir randevu olur.",
        ],
      },
      {
        heading: "Sürekli gelmeyen müşteriye nasıl davranılmalı?",
        paragraphs: [
          "Her salonun birkaç “kronik” gelmeyen müşterisi vardır. Bunları duygusal değil, sistematik yönetin:",
        ],
        steps: [
          "Her gelmeme durumunu tarihiyle müşteri kartına not edin. Hafızaya değil kayda güvenin.",
          "İlk seferde nazik bir mesaj gönderin: “Sizi bekledik, umarız her şey yolundadır. Yeni bir tarih ister misiniz?”",
          "İkinci seferde iptal kuralını kibarca hatırlatın ve sonraki randevu için kapora isteyin.",
          "Üçüncü seferde yalnızca ön ödemeli randevu verin veya yoğun saatlerde randevu vermeyin.",
        ],
        callout:
          "Kural herkes için aynı olmalı. Sadık bir müşteriye bir kez esneklik tanımak sorun değil; ama bunun nedenini karta yazın ki ekip tutarlı kalsın.",
      },
      {
        heading: "30 günde gelmeyen müşteri oranını düşürmek için kontrol listesi",
        paragraphs: [
          "Aşağıdaki adımları bir ay içinde uygulayın ve ay sonunda gelmeyen randevu sayısını bir önceki ayla karşılaştırın:",
        ],
        bullets: [
          "1. hafta: Son üç ayın gelmeyen randevularını sayın, hangi hizmet ve saatlerde yoğunlaştığına bakın.",
          "1. hafta: Tek cümlelik iptal politikasını yazın ve ekiple paylaşın.",
          "2. hafta: Otomatik onay ve WhatsApp hatırlatmalarını kurun, mesaj metinlerini salonunuzun diline uyarlayın.",
          "2. hafta: Online randevu linkini Instagram profilinize ve WhatsApp Business profilinize ekleyin.",
          "3. hafta: Uzun işlemler için kapora kuralını devreye alın.",
          "3. hafta: Bekleme listesini aktif kullanmaya başlayın.",
          "4. hafta: Rakamları karşılaştırın, mesaj zamanlamasını ve kuralları gerekiyorsa ayarlayın.",
        ],
      },
    ],
    faq: [
      {
        q: "Randevu hatırlatma mesajı kaç saat önce gönderilmeli?",
        a: "En iyi sonuç genellikle iki hatırlatmayla alınır: 48 saat önce erteleme imkânı veren bir mesaj ve 24 saat önce ya da aynı gün sabah kısa bir hatırlatma. Uzun işlemlerde 48 saatlik mesaj özellikle önemlidir.",
      },
      {
        q: "Randevuya gelmeyen müşteriden ücret alınabilir mi?",
        a: "Önceden açıkça duyurulmuş ve müşterinin kabul ettiği bir iptal politikanız varsa kapora iadesi yapmamak yaygın bir uygulamadır. Kuralı randevu anında yazılı olarak bildirmeniz önemlidir; hukuki ayrıntılar için kendi danışmanınıza sorun.",
      },
      {
        q: "WhatsApp hatırlatmaları SMS'ten daha mı etkili?",
        a: "Türkiye'de müşterilerin büyük kısmı WhatsApp'ı gün içinde sürekli kullandığı için WhatsApp mesajları genellikle daha hızlı görülür ve müşteri doğrudan cevap verebilir. Treatflow'da hatırlatmalar WhatsApp ve e-posta ile gönderilir.",
      },
      {
        q: "Kapora herkesten alınmalı mı?",
        a: "Herkesten kapora almak yeni müşteriyi caydırabilir. Uzun işlemler, yoğun hafta sonu saatleri ve daha önce haber vermeden gelmeyen müşteriler için kapora uygulamak daha dengeli bir yaklaşımdır.",
      },
      {
        q: "Son dakika iptallerinde boşalan saat nasıl doldurulur?",
        a: "Bekleme listesi en pratik yöntemdir. O gün için yer arayan müşteriler listeye yazılır; iptal olduğunda saat önce onlara teklif edilir. Ayrıca kısa işlemler için Instagram hikâyesinde “bugün 15:00'te yer açıldı” paylaşımı da işe yarar.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "WhatsApp ve e-posta hatırlatmaları" },
      { pageKey: "online-booking", label: "Komisyonsuz online randevu sistemi" },
      { pageKey: "appointment-calendar", label: "Randevu takvimi" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2) Salon yazılımı seçimi
  // ---------------------------------------------------------------------------
  {
    topic: "choose-salon-software",
    lang: "tr",
    slug: "salon-yazilimi-nasil-secilir",
    title: "Salon Yazılımı Nasıl Seçilir? İhtiyaç Analizinden 30 Günlük Denemeye Karar Planı",
    metaTitle: "Salon Yazılımı Nasıl Seçilir? Adım Adım Karar Planı",
    description:
      "Salon yazılımı seçerken özellik listesi yetmez. İhtiyaç analizi, puanlama tablosu, 14 günlük deneme planı ve veri taşıma adımlarıyla doğru kararı verin.",
    excerpt:
      "Özellik listeleri birbirine benzer; farkı, yazılımı kendi salonunuzda nasıl test ettiğiniz belirler. Bu rehber seçim sürecini baştan sona bir karar planına dönüştürüyor.",
    category: "Yazılım",
    keywords: [
      "salon yazılımı nasıl seçilir",
      "güzellik salonu programı",
      "salon yönetim yazılımı",
      "güzellik merkezi programı karşılaştırma",
      "randevu programı seçimi",
      "salon programına geçiş",
    ],
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 8,
    answer:
      "Doğru salon yazılımını seçmek için önce kendi iş akışınızı yazın, ardından kriterleri ağırlıklandırdığınız bir puanlama tablosuyla en fazla üç aday belirleyin ve her birini gerçek müşterilerle, gerçek bir haftada test edin. Kararı demo ekranına değil; deneme süresindeki kullanım kolaylığına, toplam maliyete ve verilerinizin kimde kaldığına göre verin.",
    takeaways: [
      "Yazılım aramadan önce salonunuzun günlük akışını kâğıda dökün; ihtiyaç listesi bu akıştan çıkar.",
      "Ağırlıklı bir puanlama tablosu, “en çok özelliği olan” yerine “size en uygun” yazılımı bulmanızı sağlar.",
      "Deneme süresini haftalara bölün: kurulum, ekip, müşteri, değerlendirme.",
      "Toplam maliyete kullanıcı ücreti, SMS kontörü, komisyon ve kurulum bedeli dahil edilmelidir.",
      "Verilerinizi dışa aktarabildiğiniz bir sistem seçin; bağımlılık en pahalı gizli maliyettir.",
    ],
    intro: [
      "Salon yazılımı seçmek, yeni bir lazer cihazı almaya benzer: broşürde hepsi harika görünür, farkı ancak kendi salonunuzda birkaç hafta kullandıktan sonra anlarsınız. Pek çok işletme sahibi bir arkadaşının önerisiyle ya da en ucuz teklifle başlar ve altı ay sonra yeniden arayışa girer.",
      "Bu rehber, “hangi özellikler olmalı” sorusunun bir adım ötesine geçiyor: Seçim sürecini nasıl yöneteceğinizi, adayları nasıl karşılaştıracağınızı ve deneme süresini nasıl gerçek bir teste dönüştüreceğinizi anlatıyor.",
    ],
    sections: [
      {
        heading: "Yazılım aramaya başlamadan önce hangi soruları cevaplamalısınız?",
        paragraphs: [
          "Önce bir müşterinin salonunuzdaki yolculuğunu baştan sona yazın: randevuyu nereden alıyor, ilk seansta ne dolduruyor, işlem sırasında neyi not ediyorsunuz, sonrasında onunla nasıl iletişim kuruyorsunuz? Bu akış, ihtiyaç listenizin kendisidir.",
        ],
        bullets: [
          "Kaç kişi takvimi kullanacak, kaç oda veya cihaz planlanacak?",
          "Randevularınız şu an nereden geliyor: telefon, WhatsApp, Instagram DM, yürüyen müşteri?",
          "Anamnez ve onam formu kullanıyor musunuz, kullanmanız gerekiyor mu?",
          "Öncesi-sonrası fotoğraf ve seans notu tutmak işiniz için kritik mi?",
          "Turistik bir bölgedeyseniz yabancı müşterileriniz var mı, randevu sayfası birden fazla dilde olmalı mı?",
          "Kasa, adisyon ve e-arşiv faturayı aynı sistemden mi yönetmek istiyorsunuz, yoksa ayrı bir çözümünüz mü var?",
        ],
      },
      {
        heading: "İşletme türüne göre öncelikler nasıl değişir?",
        paragraphs: [
          "Her salonun “olmazsa olmaz” listesi farklıdır. Bir kirpik stüdyosu için hızlı randevu ve hatırlatma öndeyken, bir lazer epilasyon merkezi için seans takibi ve cihaz ayarlarının kaydı kritik olur.",
        ],
        table: {
          headers: ["İşletme türü", "Kritik ihtiyaç", "İkincil ihtiyaç"],
          rows: [
            ["Kuaför ve güzellik salonu", "Personel bazlı takvim, hatırlatma", "Müşteri geçmişi, ürün notları"],
            ["Lazer epilasyon merkezi", "Seans takibi, cihaz/oda planı, onam", "Öncesi-sonrası fotoğraf"],
            ["Medikal estetik kliniği", "Anamnez, onam, ayrıntılı işlem kaydı", "Fotoğraf karşılaştırma, ekip notları"],
            ["Kalıcı makyaj stüdyosu", "Onam, renk/pigment kaydı, rötuş planı", "Kapora ve uzun randevu yönetimi"],
            ["Tırnak ve kirpik stüdyosu", "Hızlı online randevu, dolgu hatırlatması", "Müşteri tercihleri (şekil, uzunluk)"],
          ],
        },
      },
      {
        heading: "Adayları karşılaştırmak için puanlama tablosu nasıl kurulur?",
        paragraphs: [
          "Her kritere 1 ile 5 arasında bir ağırlık verin, sonra her yazılımı aynı kriterde 1 ile 5 arasında puanlayın. Ağırlık × puan toplamı en yüksek olan aday kazanır. Bu yöntem, sizin için önemsiz bir özelliğin göz boyamasını engeller.",
        ],
        table: {
          headers: ["Kriter", "Örnek ağırlık", "Neye bakılmalı?"],
          rows: [
            ["Takvim ve günlük kullanım", "5", "Randevu sürükle-bırak, personel/oda sütunları, mobil kullanım"],
            ["Online randevu", "4", "Komisyon var mı, kendi linkiniz mi, iptal/erteleme kolay mı?"],
            ["Hatırlatma kanalları", "4", "WhatsApp ve e-posta desteği, ek kontör ücreti"],
            ["Formlar ve onam", "3–5", "Randevu öncesi gönderim, imza, müşteri kartına bağlanma"],
            ["İşlem kaydı ve fotoğraf", "3–5", "Seansa bağlı not, fotoğraf, cihaz parametreleri"],
            ["Veri ve KVKK", "4", "Sunucu konumu, yedekleme, dışa aktarma imkânı"],
            ["Destek ve dil", "3", "Türkçe arayüz, destek kanalı, eğitim materyali"],
            ["Toplam maliyet", "4", "Aylık ücret + ek kullanıcı + kontör + komisyon"],
          ],
        },
      },
      {
        heading: "Pazaryeri uygulaması mı, bağımsız salon yazılımı mı?",
        paragraphs: [
          "Randevu pazaryerleri size yeni müşteri getirebilir; karşılığında genellikle randevu veya ödeme başına komisyon alır ve müşteri ilişkisi kısmen platformda kalır. Bağımsız salon yazılımında ise sabit bir abonelik ödersiniz, randevu sayfası sizin markanızla çalışır ve müşteri verisi sizin kontrolünüzdedir.",
          "Hangisinin doğru olduğu büyüme aşamanıza bağlıdır. Yeni açılmış ve tanınmayan bir salon için görünürlük önemli olabilir. Düzenli müşteri kitlesi olan bir salon için ise her randevudan kesinti ödemek zamanla ciddi bir maliyete dönüşür.",
        ],
        table: {
          headers: ["Konu", "Pazaryeri", "Bağımsız yazılım"],
          rows: [
            ["Ücret modeli", "Çoğunlukla komisyon veya ödeme kesintisi", "Sabit aylık abonelik"],
            ["Müşteri ilişkisi", "Platform üzerinden", "Doğrudan sizde"],
            ["Marka", "Platformun arayüzü", "Kendi randevu sayfanız"],
            ["Yeni müşteri kazanımı", "Platform trafiği", "Kendi kanallarınız (Instagram, Google, WhatsApp)"],
          ],
        },
      },
      {
        heading: "14 günlük deneme süresi nasıl verimli kullanılır?",
        paragraphs: [
          "Deneme süresini “bir ara bakarım” diye geçirmek en sık yapılan hatadır. Süreyi haftalara bölün ve her hafta için net bir hedef koyun. Treatflow Türkiye'de 14 gün ücretsiz deneme sunar ve kredi kartı istemez; bu süre aşağıdaki planı uygulamak için yeterlidir.",
        ],
        steps: [
          "1. hafta – Kurulum: Hizmetleri süre ve fiyatlarıyla girin, personel ve çalışma saatlerini tanımlayın, bir anamnez formu hazırlayın.",
          "2. hafta – Ekip: Bir personelin takvimini tamamen yeni sistemde yönetin. Ekipten “nerede zorlanıyorum” notları toplayın.",
          "3. hafta – Müşteri: Online randevu linkini sadık müşterilerinizle paylaşın, otomatik hatırlatmaları açın, bir formu gerçek müşteriye gönderin.",
          "4. hafta – Değerlendirme: Puanlama tablonuzu güncelleyin, toplam maliyeti hesaplayın ve ekiple birlikte karar verin.",
        ],
        callout:
          "Demo videosundaki akış ile kendi salonunuzdaki akış aynı değildir. En az bir gerçek müşterinin baştan sona (randevu → form → işlem kaydı → hatırlatma) sistemden geçmesini sağlayın.",
      },
      {
        heading: "Eski sistemden yeni yazılıma veriler nasıl taşınır?",
        paragraphs: [
          "Geçişin en çok korkulan kısmı veri taşımadır, ama doğru planla bir hafta sonu işidir.",
        ],
        steps: [
          "Eski sistemden müşteri listesini Excel/CSV olarak dışa aktarın (ad, telefon, e-posta, doğum tarihi, notlar).",
          "Listeyi temizleyin: mükerrer kayıtları birleştirin, telefon numaralarını aynı formata getirin.",
          "İleri tarihli randevuları ayrı bir listeye alın ve yeni takvime manuel girin.",
          "Kâğıt onam formları için bir karar verin: aktif müşterilere bir sonraki ziyaretten önce dijital form gönderin, eski kâğıtları güvenli şekilde arşivleyin.",
          "İlk iki hafta eski sistemi sadece okuma amaçlı açık tutun, sonra kapatın.",
        ],
      },
      {
        heading: "Ekibi yeni yazılıma nasıl alıştırırsınız?",
        paragraphs: [
          "En iyi yazılım bile ekip kullanmadığında işe yaramaz. Geçişte direnç genellikle “eskisi daha hızlıydı” cümlesiyle başlar; bunun nedeni çoğu zaman alışkanlıktır, yazılım değil.",
        ],
        bullets: [
          "Ekipten bir “sorumlu” seçin; sorular önce ona gelsin, o da sağlayıcının desteğiyle iletişimde olsun.",
          "Eğitimi tek seferde değil, kısa parçalar hâlinde yapın: önce takvim, sonra müşteri kartı, sonra formlar ve işlem kaydı.",
          "Her personelin kendi kullanıcı hesabı olsun; ortak şifre hem güvenlik hem takip açısından sorun yaratır.",
          "İlk iki hafta günün sonunda beş dakikalık bir “bugün ne zorladı?” konuşması yapın.",
          "Kâğıt defteri belirli bir tarihte tamamen kaldırın; iki sistem uzun süre paralel giderse kimse yenisine geçmez.",
        ],
      },
      {
        heading: "Fiyat karşılaştırırken nelere dikkat edilmeli?",
        paragraphs: [
          "Aylık ücret tek başına bir şey söylemez. Gerçek maliyeti görmek için bir yıllık toplamı hesaplayın: aylık abonelik, ek kullanıcı veya personel ücreti, SMS kontörü, randevu veya ödeme komisyonu, kurulum ve eğitim bedeli.",
          "Örneğin Treatflow'da Türkiye lansman fiyatları ilk 100 işletme için Basic pakette aylık 1.490 TL, takvim, online randevu ve WhatsApp hatırlatmalarını içeren Booking pakette aylık 1.990 TL'dir ve randevu başına komisyon yoktur. Kasa, adisyon ve e-arşiv fatura ise Türkiye'de Treatflow'un kapsamında değildir; bunlar sizin için şartsa baştan ayrı bir çözüm planlayın.",
        ],
      },
      {
        heading: "Hangi uyarı işaretleri sizi yanlış seçimden korur?",
        paragraphs: ["Aşağıdakilerden biriyle karşılaşırsanız kararı acele etmeyin:"],
        bullets: [
          "Deneme süresi için kredi kartı isteniyor ve iptal süreci belirsiz.",
          "Verilerinizi dışa aktarma imkânı yok veya ücretli.",
          "Sunucu konumu ve yedekleme hakkında net cevap alamıyorsunuz.",
          "Fiyat sayfası yok, her şey “sizi arayalım” ile başlıyor.",
          "Uzun süreli sözleşme ve erken fesih cezası şart koşuluyor.",
        ],
      },
    ],
    faq: [
      {
        q: "Küçük bir salon için yazılım gerçekten gerekli mi?",
        a: "Tek kişilik bir stüdyoda bile randevu hatırlatma, müşteri geçmişi ve dijital onam formu ciddi zaman kazandırır. Önemli olan, ihtiyacınızdan fazla modül için para ödememektir.",
      },
      {
        q: "Salon programına geçiş ne kadar sürer?",
        a: "Temel kurulum (hizmetler, personel, çalışma saatleri) genellikle bir gün içinde tamamlanır. Müşteri verisinin taşınması ve ekibin alışması ise çoğu salonda iki ila dört hafta sürer.",
      },
      {
        q: "Ücretsiz salon programları yeterli mi?",
        a: "Ücretsiz araçlar genellikle gelirini komisyon, ödeme kesintisi veya ek ücretli özelliklerden elde eder. Bir yıllık toplam maliyeti hesaplayıp abonelikli bir yazılımla karşılaştırın.",
      },
      {
        q: "Salon yazılımında müşteri verileri kime aittir?",
        a: "KVKK açısından veri sorumlusu salonunuzdur. Yazılım sağlayıcısı veri işleyen konumundadır. Sözleşmede verilerinizi dışa aktarabileceğinizi ve aboneliği bitirdiğinizde ne olacağını mutlaka kontrol edin.",
      },
      {
        q: "Deneme süresinde en çok neyi test etmeliyim?",
        a: "Günlük takvim kullanımını, randevudan işlem kaydına kadar tam bir müşteri akışını ve otomatik hatırlatmaların müşteriye nasıl göründüğünü test edin. Ekibinizin en az birkaç gün sistemi tek başına kullanması önemlidir.",
      },
    ],
    related: [
      { pageKey: "beauty-salon-software", label: "Güzellik salonu programı" },
      { pageKey: "features", label: "Tüm özellikler" },
      { pageKey: "pricing", label: "Fiyatlar ve 14 gün ücretsiz deneme" },
      { pageKey: "software-comparison", label: "Salon yazılımı karşılaştırması" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3) Dijital onam ve anamnez formu
  // ---------------------------------------------------------------------------
  {
    topic: "digital-consultation-forms",
    lang: "tr",
    slug: "dijital-onam-formu-guzellik-salonu",
    title: "Dijital Onam ve Anamnez Formu Nasıl Hazırlanır? Hizmete Göre Soru Listesi",
    metaTitle: "Dijital Onam ve Anamnez Formu Nasıl Hazırlanır?",
    description:
      "Lazer, cilt bakımı, kalıcı makyaj ve kirpik için anamnez ve onam formunda hangi sorular olmalı? Hizmete göre soru listesi, yenileme aralığı ve KVKK notları.",
    excerpt:
      "İyi bir form, risk taşıyan bilgiyi işlemden önce yakalar ve müşteriyi yormaz. Hizmete göre hangi soruların sorulacağını, formun ne zaman yenileneceğini ve yanıtların seans günü nasıl kullanılacağını anlattık.",
    category: "Organizasyon",
    keywords: [
      "dijital onam formu",
      "anamnez formu güzellik salonu",
      "lazer epilasyon onam formu",
      "kalıcı makyaj onam formu",
      "müşteri bilgi formu",
      "cilt bakımı anamnez formu",
      "online onam formu",
    ],
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 8,
    answer:
      "İyi bir dijital anamnez ve onam formu; kişisel bilgiler, sağlık geçmişi, hizmete özel risk soruları, işlem hakkında bilgilendirme ve ayrı onay kutularından oluşur. Form randevudan önce link ile gönderilmeli, imzalı yanıt müşteri kartına bağlanmalı ve sağlık durumu değişebileceği için düzenli aralıklarla yenilenmelidir.",
    takeaways: [
      "Anamnez formu bilgi toplar, onam formu müşterinin bilgilendirildiğini ve kabul ettiğini belgeler; ikisi farklı amaçlara hizmet eder.",
      "Her hizmetin kendine özgü risk soruları vardır; tek bir genel form lazer ve kalıcı makyaj için yeterli değildir.",
      "Fotoğraf ve pazarlama izinleri, işlem onamından ayrı kutularda alınmalıdır.",
      "Form yanıtı seans günü uzmanın önünde olmalıdır; aksi hâlde form sadece arşiv olur.",
      "Form metinleri için yazılım taşıyıcıdır; içeriği uzmanınız ve hukuk danışmanınızla birlikte hazırlayın.",
    ],
    intro: [
      "Birçok salonda anamnez formu, resepsiyonda aceleyle doldurulan ve ardından bir klasöre kaldırılan bir kâğıttır. Müşteri bekleme salonunda “ilaç kullanıyor musunuz?” sorusuna hızla “hayır” yazar, uzman ise seans sırasında bu formu hiç görmez.",
      "Dijital form bu tabloyu değiştirir ama sadece formu dijitale taşımak yetmez. Asıl fark, doğru soruları sormak ve yanıtları doğru zamanda doğru kişinin önüne koymaktır. Bu rehberde form içeriğine odaklanıyoruz: hangi hizmette ne sorulmalı ve form nasıl tasarlanmalı.",
    ],
    sections: [
      {
        heading: "Anamnez formu ile onam formu arasındaki fark nedir?",
        paragraphs: [
          "Pratikte ikisi çoğu zaman tek bir dijital formda birleşir, ama içerik olarak farklı işler görürler. Ayrımı bilmek, formu daha anlaşılır yapmanızı sağlar.",
        ],
        table: {
          headers: ["", "Anamnez formu", "Onam formu"],
          rows: [
            ["Amaç", "Müşterinin sağlık ve cilt geçmişini öğrenmek", "Müşterinin işlem ve riskler hakkında bilgilendirildiğini belgelemek"],
            ["İçerik", "Hastalıklar, ilaçlar, alerjiler, önceki işlemler", "İşlemin tanımı, olası yan etkiler, bakım talimatları, kabul beyanı"],
            ["Ne zaman güncellenir?", "Sağlık durumu değiştiğinde ve düzenli aralıklarla", "Yeni işlem türünde veya işlem koşulları değiştiğinde"],
            ["Kimin işine yarar?", "Uzmanın işlem kararına", "İşletmenin ve müşterinin kayıt altında olmasına"],
          ],
        },
      },
      {
        heading: "İyi bir formda hangi bölümler olmalı?",
        paragraphs: [
          "Müşteri formu telefonda dolduracağı için yapı sade olmalıdır. Aşağıdaki sıralama hem müşteri hem uzman için mantıklı bir akış sunar:",
        ],
        steps: [
          "Kişisel bilgiler: ad soyad, doğum tarihi, telefon. Gereksiz veri istemeyin.",
          "Genel sağlık: kronik hastalıklar, düzenli ilaçlar, alerjiler, hamilelik/emzirme.",
          "Hizmete özel sorular: aşağıdaki tabloya bakın.",
          "Bilgilendirme: işlem nasıl yapılır, olası yan etkiler, işlem öncesi ve sonrası bakım.",
          "Beyan ve onay: bilgilerin doğru olduğunu ve bilgilendirmeyi okuduğunu onaylama, dijital imza.",
          "Ayrı izinler: öncesi-sonrası fotoğraf, fotoğrafın sosyal medyada kullanımı, kampanya mesajları – her biri ayrı kutu.",
        ],
      },
      {
        heading: "Hizmete göre anamnez formunda hangi sorular sorulmalı?",
        paragraphs: [
          "Aşağıdaki liste sık kullanılan başlıkları özetler; nihai soru listesini uzmanınız ve gerekiyorsa sorumlu hekimle birlikte belirleyin.",
        ],
        table: {
          headers: ["Hizmet", "Öne çıkan sorular"],
          rows: [
            ["Lazer epilasyon", "Son dönemde güneşlenme veya solaryum, ışığa duyarlılık yapan ilaçlar, hormonal durum, bölgede dövme/ben, önceki lazer seansları"],
            ["Cilt bakımı ve kimyasal peeling", "Akne ilaçları (özellikle oral retinoid kullanımı), cilt hassasiyeti, egzama veya rozasea, son peeling tarihi"],
            ["Kalıcı makyaj", "Uçuk geçmişi (dudak için), kan sulandırıcı kullanımı, keloid eğilimi, önceki kalıcı makyaj, pigment alerjisi"],
            ["İpek kirpik ve kirpik lifting", "Göz enfeksiyonu, lens kullanımı, yapıştırıcı veya kimyasal alerjisi, son göz operasyonu"],
            ["Protez tırnak", "Tırnak mantarı veya enfeksiyonu, jel/akrilik alerjisi, cilt hassasiyeti"],
            ["Medikal estetik uygulamalar", "Önceki dolgu veya botoks, otoimmün hastalık, aktif enfeksiyon, kullanılan ilaçlar, hamilelik"],
          ],
        },
        callout:
          "“Evet” yanıtı veren müşteriye otomatik olarak açıklama alanı gösterin. “Kalp hastalığınız var mı? Evet” bilgisi tek başına uzmanın işine yaramaz; hangi hastalık ve hangi ilaç olduğunu bilmek gerekir.",
      },
      {
        heading: "Form ne zaman gönderilmeli ve ne sıklıkla yenilenmeli?",
        paragraphs: [
          "En iyi zaman, randevu onaylandıktan hemen sonra ya da randevudan birkaç gün öncedir. Müşteri formu evinde, acele etmeden doldurur; siz de yanıtları seanstan önce görüp gerekirse randevuyu ertelersiniz. Treatflow'da formlar randevudan önce otomatik gönderilebilir ve imzalı yanıt doğrudan müşteri kartına bağlanır.",
        ],
        bullets: [
          "İlk ziyaretten önce: tam anamnez ve ilgili işlem onamı.",
          "Yeni bir işlem türüne geçişte: o işleme özel onam.",
          "Düzenli müşterilerde: sağlık bilgisini yılda en az bir kez veya seans paketinin başında güncelleyin.",
          "Her seans öncesi: kısa bir “son ziyaretten beri değişen bir şey var mı?” sorusu, özellikle lazer ve medikal estetikte.",
        ],
      },
      {
        heading: "Form sorularını yazarken hangi hatalardan kaçınmalı?",
        paragraphs: ["Kötü yazılmış bir form, müşteriyi yanlış cevap vermeye iter. En sık hatalar:"],
        bullets: [
          "**Tıbbi jargon:** “Fotosensitizan ilaç” yerine “Güneşe karşı hassasiyet yapan ilaç (bazı antibiyotikler, akne ilaçları) kullanıyor musunuz?” yazın.",
          "**Çift soru:** “Alerjiniz veya kronik hastalığınız var mı?” sorusunu ikiye bölün.",
          "**Fazla uzunluk:** Her hizmete her soruyu sormayın; kirpik müşterisine lazer soruları sormak formu terk ettirir.",
          "**Zorunlu olmayan veri:** Kimlik numarası veya meslek gibi işlemle ilgisi olmayan bilgileri istemeyin.",
          "**Tek onay kutusu:** İşlem onamı, fotoğraf izni ve pazarlama izni aynı kutuda olmamalıdır.",
        ],
      },
      {
        heading: "Form yanıtları seans günü nasıl kullanılır?",
        paragraphs: [
          "Form ancak işlem kararını etkilediğinde değer üretir. Seans günü şu akışı uygulayın:",
        ],
        steps: [
          "Randevudan bir gün önce formun doldurulup doldurulmadığını takvimden kontrol edin; doldurulmadıysa hatırlatın.",
          "Uzman, işlemden önce müşteri kartında riskli yanıtları gözden geçirir.",
          "Müşteriyle kısa bir sözlü teyit yapın: “Formda ilaç kullanmadığınızı yazmışsınız, son haftalarda değişen bir şey oldu mu?”",
          "İşlem sonrası kullanılan ayarları, ürünleri ve gözlemleri işlem kaydına seansa bağlı olarak yazın.",
          "Bir sonraki seansta önceki notları ve fotoğrafları açarak karşılaştırma yapın.",
        ],
      },
      {
        heading: "Onam formunun bilgilendirme bölümünde neler yazmalı?",
        paragraphs: [
          "Onamın değeri, müşterinin gerçekten neyi kabul ettiğini anlamasına bağlıdır. Bilgilendirme bölümü uzun bir hukuk metni değil, müşterinin okuyup anlayacağı sade bir açıklama olmalıdır. Her hizmet için şu dört başlığı kısa paragraflarla doldurun:",
        ],
        bullets: [
          "**İşlem nasıl yapılır?** Kullanılan yöntem, yaklaşık süre ve kaç seans gerekebileceği.",
          "**Olası yan etkiler:** Kızarıklık, hassasiyet, geçici renk değişimi gibi beklenen tepkiler ve bunların genellikle ne kadar sürdüğü.",
          "**İşlem öncesi hazırlık:** Örneğin lazerden önce güneşlenmemek, kirpikten önce göz makyajı yapmamak, kalıcı makyajdan önce kan sulandırıcıyı doktora danışmadan bırakmamak.",
          "**İşlem sonrası bakım:** Su teması, güneş koruması, makyaj, spor ve sauna gibi konularda müşterinin uyması gerekenler.",
        ],
        callout:
          "Bakım talimatlarını formda bıraktığınız gibi işlem sonrası WhatsApp mesajıyla da kısaca tekrar gönderin. Müşteri formu bir hafta önce okumuştur; talimatı işlemden sonra hatırlaması gerekir.",
      },
      {
        heading: "Formunuzu yayına almadan önce kontrol listesi",
        paragraphs: [
          "Yeni bir formu müşterilere göndermeden önce kendinize ve ekibinize şu soruları sorun:",
        ],
        bullets: [
          "Form telefonda beş dakikadan kısa sürede doldurulabiliyor mu?",
          "Her “Evet” yanıtında açıklama alanı açılıyor mu?",
          "İşlem onamı, fotoğraf izni ve pazarlama izni ayrı kutularda mı?",
          "Aydınlatma metnine bağlantı var mı?",
          "Uzman, seans günü riskli yanıtları tek bakışta görebiliyor mu?",
          "Metin uzmanınız ve hukuk danışmanınız tarafından gözden geçirildi mi?",
          "Ekipten biri formu kendisi doldurarak test etti mi?",
        ],
      },
      {
        heading: "Dijital onam formunda KVKK açısından nelere dikkat edilmeli?",
        paragraphs: [
          "Anamnez formu sağlık bilgisi içerir ve sağlık verisi KVKK'da özel nitelikli kişisel veri olarak korunur. Bu nedenle formda kısa bir aydınlatma metni bağlantısı bulunmalı, veriler yalnızca işlem için gereken kişilerin erişebileceği bir sistemde saklanmalıdır.",
          "Formu WhatsApp'tan fotoğraf olarak almak veya kişisel telefonda saklamak bu açıdan risklidir. Müşterinin yanıtlarının doğrudan salonunuzun sistemine düşmesi hem düzen hem güvenlik sağlar. KVKK konusunu ayrıntılı olarak ayrı bir rehberde ele aldık.",
        ],
      },
    ],
    faq: [
      {
        q: "Dijital imza ile alınan onam geçerli mi?",
        a: "Türkiye'de güvenli elektronik imza ile ekranda atılan basit imza farklı hukuki niteliktedir. Ekranda atılan imza ve kayıt, onamın alındığını belgelemeye yardımcı olur; ispat değeri konusunda kendi hukuk danışmanınızdan görüş alın.",
      },
      {
        q: "Anamnez formu ne kadar süre saklanmalı?",
        a: "Saklama süresi işlemin türüne ve ilgili mevzuata göre değişir. Bir saklama ve imha politikası belirleyin, süreleri hukuk danışmanınızla netleştirin ve süresi dolan kayıtları düzenli olarak gözden geçirin.",
      },
      {
        q: "Her seansta yeni form doldurtmak gerekir mi?",
        a: "Tam formu her seansta tekrarlamak gerekmez. İlk ziyarette tam form, sonraki seanslarda ise kısa bir değişiklik sorusu yeterlidir. Sağlık durumu değiştiğinde veya yeni işleme geçildiğinde form güncellenmelidir.",
      },
      {
        q: "Müşteri formu doldurmazsa işlem yapılmalı mı?",
        a: "Özellikle lazer, kalıcı makyaj ve medikal estetik uygulamalarında form olmadan işlem yapmamak en güvenli yaklaşımdır. Müşteri salonda formu tabletten de doldurabilir.",
      },
      {
        q: "Hazır onam formu şablonu kullanılabilir mi?",
        a: "Şablonlar iyi bir başlangıçtır ama salonunuzun cihazlarına, ürünlerine ve hizmetlerine göre uyarlanmalıdır. Metnin son hâlini uzmanınız ve hukuk danışmanınızla birlikte onaylayın.",
      },
    ],
    related: [
      { pageKey: "forms", label: "Dijital onam ve anamnez formları" },
      { pageKey: "treatment-documentation", label: "İşlem kayıtları" },
      { pageKey: "client-records", label: "Müşteri takip programı" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4) Online randevu sistemi
  // ---------------------------------------------------------------------------
  {
    topic: "online-booking-salon",
    lang: "tr",
    slug: "online-randevu-sistemi-salon",
    title: "Salonlar İçin Online Randevu Sistemi: Kurulum, Kurallar ve WhatsApp Akışı",
    metaTitle: "Salonlar İçin Online Randevu Sistemi Kurulum Rehberi",
    description:
      "Online randevu sistemi salonunuza nasıl kurulur? Hizmet süreleri, tampon zaman, randevu kuralları, Instagram ve WhatsApp'ta link paylaşımı ve takip metrikleri.",
    excerpt:
      "DM ve telefonla randevu almak, gün içinde fark etmeden saatlerinizi yer. Online randevuyu doğru kurallarla açtığınızda takvim kendini yönetmeye başlar.",
    category: "Pazarlama",
    keywords: [
      "online randevu sistemi",
      "güzellik salonu online randevu",
      "randevu linki instagram",
      "whatsapp randevu sistemi",
      "komisyonsuz randevu sistemi",
      "salon randevu programı",
    ],
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 8,
    answer:
      "Bir salon için online randevu sistemi; müşterinin uygun saati kendisinin görüp seçtiği, randevunun anında takvime düştüğü ve onay ile hatırlatmanın otomatik gittiği bir randevu sayfasıdır. Doğru kurulum için önce hizmet sürelerini, tampon zamanları ve randevu kurallarını belirleyin, ardından linki Instagram profilinize, WhatsApp Business hesabınıza ve Google İşletme Profilinize ekleyin.",
    takeaways: [
      "Online randevunun asıl kazancı yeni müşteri değil, DM ve telefon trafiğinin azalması ve gece gelen taleplerin kaybolmamasıdır.",
      "Hizmet süresine temizlik ve hazırlık tamponu eklemezseniz online takvim sizi sıkıştırır.",
      "İlk seans, yeni müşteri ve riskli işlemler için ayrı hizmet veya ön onay tanımlayın.",
      "Link nerede görünürse orada kullanılır: Instagram biyografisi, WhatsApp hızlı yanıtları ve Google profili en önemli yerlerdir.",
      "Komisyonsuz, kendi markanızla çalışan bir randevu sayfası müşteri ilişkisini sizde tutar.",
    ],
    intro: [
      "Türkiye'de pek çok salonun randevu sistemi aslında bir WhatsApp sohbetidir: “Cumartesi yeriniz var mı?” – “Saat 11 dolu, 13:30 olur mu?” – “Kızıma sorup döneceğim.” Bu yazışma gün içinde onlarca kez tekrarlanır ve çoğu zaman işlem yaparken telefona bakmak zorunda kalırsınız.",
      "Online randevu sistemi bu döngüyü kırar. Ama sadece bir link açmak yetmez; kuralları doğru kurmazsanız ya takvim yanlış dolar ya da müşteri linki kullanmayıp yine mesaj atar. Bu rehberde kurulumu ve günlük kullanımı adım adım anlatıyoruz.",
    ],
    sections: [
      {
        heading: "Online randevu sistemi bir salona ne kazandırır?",
        paragraphs: [
          "En büyük kazanç zamandır. Her mesajlaşma ortalama birkaç dakika sürer, ama gün boyunca bölünen dikkat asıl maliyettir. Online randevuyla müşteri boş saatleri kendisi görür, seçer ve onay mesajını alır; siz sadece takvime bakarsınız.",
        ],
        bullets: [
          "Gece ve hafta sonu gelen talepler sabaha kadar beklemez, doğrudan randevuya dönüşür.",
          "Saat ve hizmet yazılı olarak kaydedildiği için yanlış anlaşılmalar azalır.",
          "Müşteri randevusunu aramadan erteleyebildiği için gelmeme oranı düşer.",
          "Yeni personel veya yeni hizmet eklediğinizde müşteriler bunu anında görür.",
          "Turistik bölgelerde çok dilli randevu sayfası yabancı müşterilerle yazışma yükünü azaltır.",
        ],
      },
      {
        heading: "Instagram DM ve WhatsApp'tan randevu almanın gizli maliyeti nedir?",
        paragraphs: [
          "Mesajla randevu almak ücretsiz görünür ama üç görünmez maliyeti vardır. Birincisi, işlem sırasında telefona bakmak hem kaliteyi hem hijyeni etkiler. İkincisi, geç cevaplanan mesaj müşteriyi rakibe yönlendirir; özellikle Instagram'da salon arayan biri aynı anda birkaç salona yazar. Üçüncüsü, mesajlarda kalan randevu bilgisi takvime aktarılırken hata yapılır.",
          "Bu, WhatsApp'ı bırakın demek değildir. WhatsApp müşteriyle ilişki kurmak için harikadır; sadece randevu pazarlığının kanalı olmamalıdır. İdeal akış: müşteri yazar, siz randevu linkini gönderirsiniz, müşteri saati seçer, onay ve hatırlatma otomatik gider.",
        ],
      },
      {
        heading: "Online randevuyu açmadan önce hangi kurallar belirlenmeli?",
        paragraphs: [
          "Online takvim, sizin kurduğunuz kurallarla çalışır. Kuralsız açılan bir takvim, gün sonunda uzmanı yorgun ve programı sıkışık bırakır.",
        ],
        steps: [
          "Her hizmetin gerçek süresini yazın; temizlik ve hazırlık için 10–15 dakikalık tampon ekleyin.",
          "Hangi personelin hangi hizmeti yapabildiğini tanımlayın; lazer gibi işlemlerde oda veya cihazı da bağlayın.",
          "İlk seansı ayrı bir hizmet olarak tanımlayın: danışmanlık ve form kontrolü için daha uzun süre gerekir.",
          "Minimum önceden rezervasyon süresi belirleyin (ör. en az 2 saat önce), böylece sürpriz randevular olmaz.",
          "Ne kadar ileri tarihe randevu alınabileceğini sınırlayın; çok uzak tarihler unutulmaya daha açıktır.",
          "İptal ve erteleme penceresini yazın ve randevu sayfasında gösterin.",
          "Riskli veya yüksek bedelli işlemler için online talep alıp onayı manuel vermeyi düşünün.",
        ],
      },
      {
        heading: "Hizmet menüsü online randevu için nasıl yazılmalı?",
        paragraphs: [
          "Müşteri hizmeti seçerken salonda değildir; soracak kimse yoktur. Bu yüzden hizmet adları ve açıklamaları kendi kendini anlatmalıdır.",
        ],
        table: {
          headers: ["Zayıf örnek", "Güçlü örnek"],
          rows: [
            ["Lazer", "Lazer epilasyon – tüm bacak (yaklaşık 45 dk)"],
            ["Kirpik", "İpek kirpik – ilk set, klasik (yaklaşık 120 dk)"],
            ["Bakım", "Klasik cilt bakımı – temizlik, peeling, maske (60 dk)"],
            ["Kalıcı makyaj", "Kalıcı dudak renklendirme – ilk seans, rötuş ayrı (150 dk)"],
            ["Tırnak", "Protez tırnak dolgu – 3–4 haftada bir (75 dk)"],
          ],
        },
        callout:
          "Fiyatı göstermek ya da “başlangıç fiyatı” yazmak, telefonda fiyat sorma mesajlarını azaltır ve son dakika vazgeçmelerinin önüne geçer.",
      },
      {
        heading: "Randevu linki nerede paylaşılmalı?",
        paragraphs: ["Link, müşterinin sizi ilk bulduğu her yerde görünmelidir:"],
        bullets: [
          "**Instagram biyografisi:** Türkiye'de salonların en önemli vitrini. Biyografi linkine doğrudan randevu sayfasını koyun, hikâye öne çıkanlarına da bir “Randevu” başlığı ekleyin.",
          "**WhatsApp Business:** Profil açıklamasına ve hızlı yanıtlara linki ekleyin. “Randevu” yazan müşteriye tek tuşla link gönderin.",
          "**Google İşletme Profili:** “Randevu” bağlantısı olarak ekleyin; haritadan sizi bulan müşteri doğrudan saat seçebilir.",
          "**Web siteniz:** Her hizmet sayfasında ve ana sayfada görünür bir “Randevu al” butonu kullanın.",
          "**Salon içi:** Kasanın yanında veya aynada QR kod; işlem sonrası müşteri bir sonraki randevusunu kendisi alabilir.",
        ],
      },
      {
        heading: "Pazaryeri ile kendi randevu sayfanız arasındaki fark nedir?",
        paragraphs: [
          "Randevu pazaryerleri birçok salonu tek bir uygulamada listeler; müşteri orada sizi rakiplerinizin yanında görür. Kendi randevu sayfanızda ise müşteri yalnızca sizi görür, randevu doğrudan sizin takviminize düşer ve iletişim bilgileri sizde kalır.",
          "Treatflow'un online randevusu bu ikinci modelle çalışır: kişisel randevu linkiniz vardır, randevu başına komisyon alınmaz ve randevu sayfası birden fazla dilde gösterilebilir. Antalya, Bodrum veya İstanbul gibi yabancı müşterinin yoğun olduğu bölgelerde bu özellik özellikle işe yarar.",
        ],
      },
      {
        heading: "Müşteriler online randevuya nasıl alıştırılır?",
        paragraphs: [
          "Sadık müşterileriniz yıllardır size yazarak randevu alıyorsa alışkanlığı bir günde değişmez. Geçişi nazikçe yönetin:",
        ],
        steps: [
          "Mevcut müşterilere kısa bir WhatsApp mesajıyla yeni sistemi duyurun ve linki paylaşın.",
          "İlk haftalarda mesajla gelen randevu talebini reddetmeyin; randevuyu kaydedin ve linki “bir dahaki sefere buradan da alabilirsiniz” notuyla gönderin.",
          "İşlem sonrası bir sonraki randevuyu salonda, müşteriyle birlikte linkten alın; müşteri sistemi bir kez görünce tekrar kullanır.",
          "Yaşlı veya teknolojiyle arası iyi olmayan müşteriler için telefonla randevuyu her zaman açık tutun.",
        ],
      },
      {
        heading: "Online randevu kurulumunda en sık yapılan hatalar nelerdir?",
        paragraphs: [
          "Online randevuyu deneyip “bizde işe yaramadı” diyen salonların çoğu aynı birkaç hatayı yapar:",
        ],
        bullets: [
          "**Tüm takvimi açmak:** Molaları, yönetim saatlerini ve özel müşterilere ayırdığınız saatleri kapatmadan takvimi açmak, gününüzü kontrolsüz doldurur.",
          "**Tampon süre koymamak:** Kirpik veya lazer arasında temizlik süresi yoksa her gecikme günün geri kalanına taşar.",
          "**Fazla hizmet seçeneği:** Otuz farklı varyasyon müşteriyi karar veremez hâle getirir. Benzer hizmetleri birleştirin, ayrıntıyı açıklamaya yazın.",
          "**Linki saklamak:** Link sadece web sitesinin alt köşesindeyse kimse kullanmaz. Instagram ve WhatsApp'ta ön planda olmalıdır.",
          "**Onay mesajını kişiselleştirmemek:** Adres, otopark bilgisi ve hazırlık notu olmayan bir onay mesajı, müşterinin yine size yazmasına neden olur.",
          "**Ekibi dahil etmemek:** Personel takvimi kullanmayıp randevuları deftere yazmaya devam ederse çift randevular kaçınılmazdır.",
        ],
      },
      {
        heading: "Online randevu sisteminin başarısı hangi metriklerle ölçülür?",
        paragraphs: [
          "Üç ay sonra sistemin işe yarayıp yaramadığını görmek için aşağıdaki rakamları takip edin:",
        ],
        table: {
          headers: ["Metrik", "Ne anlatır?"],
          rows: [
            ["Online gelen randevu payı", "Müşterilerin sistemi benimseyip benimsemediğini"],
            ["Mesai dışı alınan randevular", "Eskiden kaybolabilecek taleplerin miktarını"],
            ["Gelmeme ve son dakika iptal sayısı", "Hatırlatma ve iptal kuralının etkisini"],
            ["Takvim doluluk oranı", "Boş saatlerin hangi günlerde yoğunlaştığını"],
            ["Yeni müşteri sayısı ve kaynağı", "Instagram, Google veya tavsiye kanalının gücünü"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "Online randevu sistemi ücretli mi?",
        a: "Bazı sistemler ücretsiz görünür ama randevu veya ödeme başına komisyon alır. Abonelikli sistemlerde ise sabit aylık ücret ödersiniz. Bir yıllık toplam maliyeti karşılaştırmak en doğru yöntemdir.",
      },
      {
        q: "Instagram'a randevu butonu nasıl eklenir?",
        a: "En basit yöntem, randevu sayfanızın linkini Instagram biyografisindeki bağlantı alanına eklemektir. Ayrıca hikâye öne çıkanlarında bir randevu başlığı ve hikâyelerde bağlantı çıkartması kullanabilirsiniz.",
      },
      {
        q: "Müşteri online randevuyu iptal edebilir mi?",
        a: "İyi bir sistemde müşteri, sizin belirlediğiniz iptal penceresi içinde randevusunu kendisi iptal edebilir veya erteleyebilir. Bu, haber vermeden gelmemekten çok daha iyidir ve boşalan saati yeniden satmanızı sağlar.",
      },
      {
        q: "Online randevu ile telefon randevusu birlikte kullanılabilir mi?",
        a: "Evet. Telefonla veya WhatsApp'tan gelen randevular aynı takvime manuel girilir; böylece çift randevu oluşmaz ve tüm randevular aynı hatırlatma akışından geçer.",
      },
      {
        q: "Randevu sayfası farklı dillerde olabilir mi?",
        a: "Bazı sistemler randevu sayfasını birden fazla dilde gösterebilir. Treatflow'un Booking paketinde çok dilli randevu sayfası bulunur; bu, turistik bölgelerdeki salonlar için büyük kolaylık sağlar.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Komisyonsuz online randevu sistemi" },
      { pageKey: "appointment-calendar", label: "Randevu takvimi" },
      { pageKey: "studio-website", label: "Salon web sitesi" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5) KVKK
  // ---------------------------------------------------------------------------
  {
    topic: "gdpr-beauty-salon",
    lang: "tr",
    slug: "kvkk-guzellik-salonu",
    title: "Güzellik Salonları İçin KVKK Rehberi: Müşteri Verisi, Fotoğraf ve Sağlık Bilgisi",
    metaTitle: "Güzellik Salonları İçin KVKK Rehberi",
    description:
      "Güzellik salonlarında KVKK: aydınlatma metni, açık rıza, öncesi-sonrası fotoğraf, VERBİS, yurt dışı sunucu ve veri ihlaline karşı pratik kontrol listesi.",
    excerpt:
      "Anamnez formu, öncesi-sonrası fotoğraf ve WhatsApp yazışmaları: salonlar sandığından çok daha fazla kişisel veri işler. KVKK'nın salon günlüğüne nasıl yansıdığını pratik örneklerle anlattık.",
    category: "KVKK & Mevzuat",
    keywords: [
      "kvkk güzellik salonu",
      "güzellik merkezi aydınlatma metni",
      "kvkk açık rıza metni",
      "öncesi sonrası fotoğraf kvkk",
      "verbis kaydı güzellik salonu",
      "özel nitelikli kişisel veri",
      "salon müşteri verileri kvkk",
    ],
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 9,
    answer:
      "6698 sayılı KVKK, güzellik salonunu müşteri verileri için veri sorumlusu yapar: müşteriyi aydınlatmak, verileri güvenli saklamak ve yalnızca gerektiği kadar işlemek salonun sorumluluğundadır. Anamnez formundaki sağlık bilgileri özel nitelikli kişisel veridir ve daha sıkı korunmalıdır; öncesi-sonrası fotoğrafların reklamda kullanımı için ise ayrı ve açık bir izin alınmalıdır.",
    takeaways: [
      "Salonunuz, müşteri verileri açısından KVKK'daki veri sorumlusudur; yazılım sağlayıcısı veri işleyendir.",
      "Aydınlatma yükümlülüğü her müşteri için geçerlidir; açık rıza ise yalnızca gerektiği durumlarda ve ayrı alınmalıdır.",
      "Sağlık bilgisi ve yüz fotoğrafı içeren kayıtlara erişimi sınırlayın; kişisel telefonlarda ve WhatsApp galerisinde saklamayın.",
      "Verileri yurt dışındaki bir sunucuda saklamak, KVKK'daki yurt dışı aktarım kurallarına tabidir; sağlayıcınıza hangi mekanizmayı kullandığını sorun.",
      "Bu yazı genel bilgilendirmedir, hukuki danışmanlık yerine geçmez.",
    ],
    intro: [
      "Bir müşteri salonunuza ilk kez geldiğinde adını, telefonunu, doğum tarihini, kullandığı ilaçları, cilt hastalıklarını ve çoğu zaman yüzünün yakın plan fotoğrafını kayda geçirirsiniz. Bu, bir mağazanın müşterisi hakkında bildiğinden çok daha fazlasıdır ve 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) tam olarak bu tür bilgileri korumak için vardır.",
      "Bu rehber, KVKK'yı bir avukat diliyle değil, salon günlüğü üzerinden anlatıyor: hangi veriyi işliyorsunuz, müşteriye ne söylemelisiniz, fotoğraflar için nasıl izin alırsınız ve bir sorun çıktığında ne yaparsınız. Ayrıntılı ve güncel yükümlülükler için mutlaka Kişisel Verileri Koruma Kurumu'nun kaynaklarına ve kendi hukuk danışmanınıza başvurun.",
    ],
    sections: [
      {
        heading: "KVKK bir güzellik salonu için neden önemli?",
        paragraphs: [
          "KVKK, kişisel veri işleyen herkes için geçerlidir; işletmenin büyüklüğü bu yükümlülüğü ortadan kaldırmaz. Müşteri verilerini toplayan ve nasıl kullanılacağına karar veren salonunuz “veri sorumlusu”dur. Kullandığınız salon yazılımı, bulut sağlayıcısı veya muhasebeciniz ise sizin adınıza veri işleyen konumundadır.",
          "Güzellik ve estetik sektörünü özel kılan, işlenen verinin niteliğidir. Sağlık bilgileri KVKK'da özel nitelikli kişisel veri sayılır ve daha sıkı koşullara bağlıdır. Yüz ve vücut fotoğrafları da kişiyi doğrudan tanımlayan hassas kayıtlardır.",
        ],
      },
      {
        heading: "Bir salonda hangi kişisel veriler işlenir?",
        paragraphs: ["Salonunuzdaki veri envanterini çıkarmak, KVKK uyumunun ilk adımıdır:"],
        table: {
          headers: ["Veri", "Örnek", "Nitelik"],
          rows: [
            ["Kimlik ve iletişim", "Ad soyad, telefon, e-posta, doğum tarihi", "Genel kişisel veri"],
            ["Randevu ve işlem geçmişi", "Hangi hizmet, ne zaman, hangi uzman", "Genel kişisel veri"],
            ["Sağlık bilgileri", "İlaçlar, alerjiler, hamilelik, cilt hastalıkları", "Özel nitelikli kişisel veri"],
            ["Fotoğraflar", "Öncesi-sonrası, cilt analizi görüntüleri", "Kişiyi tanımlayan veri; içeriğe göre sağlık verisi niteliği taşıyabilir"],
            ["İletişim kayıtları", "WhatsApp yazışmaları, e-postalar", "Genel kişisel veri"],
            ["Ödeme bilgileri", "Fatura, ödeme tutarı, kapora", "Genel kişisel veri"],
          ],
        },
      },
      {
        heading: "Aydınlatma metni ile açık rıza arasındaki fark nedir?",
        paragraphs: [
          "Salonlarda en sık karıştırılan konu budur. Aydınlatma, müşteriye verisini neden ve nasıl işlediğinizi bildirmektir ve her durumda yapılmalıdır. Açık rıza ise belirli bir işlem için müşterinin özgür iradesiyle verdiği onaydır ve yalnızca kanunun başka bir hukuki sebep tanımadığı durumlarda gerekir.",
        ],
        table: {
          headers: ["", "Aydınlatma metni", "Açık rıza"],
          rows: [
            ["Ne zaman?", "Veri toplanırken, her müşteri için", "Başka hukuki sebep yoksa, belirli işlem için"],
            ["Müşteri onaylamak zorunda mı?", "Hayır, bilgilendirilir", "Evet, özgürce ve ayrı olarak onaylar"],
            ["Salon örneği", "Randevu ve iletişim verilerinin işlenmesi", "Fotoğrafın Instagram'da paylaşılması, kampanya mesajları"],
            ["Hizmet şartı olabilir mi?", "–", "Hayır, açık rıza hizmet alma şartına bağlanmamalıdır"],
          ],
        },
        callout:
          "Aydınlatma metnini “okudum, onaylıyorum” kutusuyla açık rızaya dönüştürmeye çalışmayın. Kurul, bu iki metnin birbirinden ayrılması gerektiğini vurgulamaktadır.",
      },
      {
        heading: "Öncesi-sonrası fotoğraflar için nasıl izin alınmalı?",
        paragraphs: [
          "Fotoğrafı işlemin takibi için çekmek ile sosyal medyada paylaşmak iki farklı amaçtır ve ayrı ele alınmalıdır. Takip amaçlı fotoğraf işlem kaydının bir parçasıdır; reklam ve sosyal medya kullanımı ise ayrı ve açık bir izne dayanmalıdır.",
        ],
        steps: [
          "Formda iki ayrı kutu kullanın: “İşlem takibi için fotoğraf çekilmesini kabul ediyorum” ve “Fotoğraflarımın salonun sosyal medya ve tanıtım materyallerinde kullanılmasını kabul ediyorum.”",
          "Paylaşım iznini zorunlu tutmayın; izin vermeyen müşteriye aynı hizmeti verin.",
          "Paylaşılacak fotoğraflarda mümkünse yüzü veya tanımlayıcı detayları (dövme, ben) kırpın.",
          "Müşteri izni geri çekerse yeni paylaşım yapmayın ve mevcut paylaşımları kaldırın.",
          "Fotoğrafları personelin kişisel telefon galerisinde değil, müşteri kaydına bağlı bir sistemde saklayın.",
        ],
      },
      {
        heading: "Güzellik salonunun VERBİS kaydı yapması gerekir mi?",
        paragraphs: [
          "VERBİS, veri sorumluları siciline kayıt sistemidir. Kayıt yükümlülüğü; çalışan sayısı, yıllık mali bilanço ve ana faaliyetin özel nitelikli kişisel veri işlemeye dayanıp dayanmadığı gibi kriterlere göre belirlenir. Kurul bu eşikleri zaman zaman güncellediği için güncel kriterleri VERBİS sayfasından kontrol edin.",
          "Kayıt yükümlülüğünüz olmasa bile aydınlatma, veri güvenliği ve ilgili kişi başvurularını yanıtlama yükümlülükleri devam eder. Medikal estetik hizmeti veren veya sağlık verisini yoğun işleyen işletmeler durumlarını özellikle dikkatle değerlendirmelidir.",
        ],
      },
      {
        heading: "Müşteri verilerini yurt dışındaki bir sunucuda saklamak mümkün mü?",
        paragraphs: [
          "Bulut tabanlı yazılımların çoğu verileri yurt dışındaki veri merkezlerinde saklar. KVKK'nın 9. maddesi yurt dışına aktarımı belirli şartlara bağlar; 2024'teki değişiklikle yeterlilik kararı, standart sözleşme gibi uygun güvenceler ve arızi aktarım gibi mekanizmalar tanımlanmıştır. Standart sözleşme kullanılan durumlarda sözleşmenin Kurum'a bildirilmesi de gerekir.",
          "Pratikte yapmanız gereken, yazılım sağlayıcınıza verilerin nerede saklandığını ve hangi aktarım mekanizmasının kullanıldığını sormaktır. Treatflow verileri Frankfurt'taki AB sunucularında SSL şifreleme ve günlük yedeklemeyle saklar; kendi aktarım dayanağınızı hukuk danışmanınızla birlikte netleştirin.",
        ],
      },
      {
        heading: "Salonda veri güvenliği için günlük olarak neler yapılmalı?",
        paragraphs: [
          "KVKK'daki “teknik ve idari tedbirler” kulağa büyük gelse de salon ölçeğinde çoğu basit alışkanlıklardır:",
        ],
        bullets: [
          "Her personelin kendi kullanıcı hesabı olsun; ortak şifre kullanmayın.",
          "Sağlık bilgisi ve fotoğraflara yalnızca işlemi yapan uzmanlar erişsin.",
          "Müşteri fotoğraflarını ve formlarını WhatsApp'ta veya kişisel telefon galerisinde tutmayın.",
          "Kâğıt formlar varsa kilitli bir dolapta saklayın ve dijitale geçişi planlayın.",
          "Resepsiyon ekranında müşteri bilgilerinin bekleyen diğer müşteriler tarafından görülmemesine dikkat edin.",
          "İşten ayrılan personelin erişimini aynı gün kapatın.",
          "Kampanya mesajı gönderiyorsanız ticari elektronik ileti onayı ve İYS kaydı konusunu ayrıca değerlendirin.",
        ],
      },
      {
        heading: "Müşteri verilerinin silinmesini isterse ne yapılmalı?",
        paragraphs: [
          "KVKK'nın 11. maddesi müşteriye verilerinin işlenip işlenmediğini öğrenme, düzeltilmesini ve şartları oluştuğunda silinmesini isteme gibi haklar tanır. Başvurular en geç 14 gün içinde ücretsiz olarak yanıtlanmalıdır (işlemin ayrıca bir maliyet gerektirdiği durumlar hariç).",
          "Silme talebinde, saklamanızı gerektiren yasal bir yükümlülük olup olmadığını değerlendirin (ör. fatura kayıtları). Bunun dışında kalan veriler silinmeli veya anonim hâle getirilmelidir. Bir kişisel veri saklama ve imha politikası hazırlamak bu kararları kolaylaştırır.",
        ],
      },
      {
        heading: "Veri ihlali olursa salon ne yapmalı?",
        paragraphs: [
          "Çalınan bir tablet, yanlış kişiye gönderilen bir fotoğraf veya ele geçirilen bir hesap veri ihlali sayılabilir. Kurul kararına göre ihlal, öğrenildiği andan itibaren en geç 72 saat içinde Kurul'a bildirilmeli ve etkilenen kişilere de makul süre içinde bilgi verilmelidir.",
        ],
        steps: [
          "İhlali durdurun: şifreleri değiştirin, cihazı uzaktan kilitleyin, erişimleri kapatın.",
          "Ne olduğunu yazılı olarak kaydedin: ne zaman, hangi veriler, kaç müşteri.",
          "Hukuk danışmanınızla birlikte Kurul'a bildirimi değerlendirin.",
          "Etkilenen müşterileri bilgilendirin.",
          "Tekrarını önleyecek tedbiri alın ve ekibe anlatın.",
        ],
      },
      {
        heading: "Salonlar için KVKK kontrol listesi",
        paragraphs: [
          "Aşağıdaki listeyi yılda bir kez, ayrıca yeni bir hizmet, yazılım veya personel eklediğinizde gözden geçirin:",
        ],
        bullets: [
          "Hangi verileri, hangi amaçla ve nerede sakladığınızı gösteren basit bir veri envanteri var.",
          "Aydınlatma metni web sitenizde, randevu sayfanızda ve formlarınızda erişilebilir.",
          "Açık rıza gereken işlemler (fotoğraf paylaşımı, kampanya mesajı) ayrı kutularla alınıyor.",
          "Yazılım ve bulut sağlayıcılarınızla veri işleme ve gerekiyorsa yurt dışı aktarım konuları sözleşmeyle düzenlenmiş.",
          "Her personelin kendi hesabı var, yetkiler role göre sınırlı.",
          "Müşteri başvurularını kimin ve nasıl yanıtlayacağı belli.",
          "Saklama ve imha süreleri yazılı olarak belirlenmiş.",
          "VERBİS kayıt yükümlülüğünüz güncel kriterlere göre kontrol edilmiş.",
          "Veri ihlali durumunda kimin ne yapacağı ekipçe biliniyor.",
        ],
      },
    ],
    faq: [
      {
        q: "Güzellik salonunun aydınlatma metni olması zorunlu mu?",
        a: "Evet. Kişisel veri toplayan her veri sorumlusunun aydınlatma yükümlülüğü vardır. Metin; kimin veri sorumlusu olduğunu, verilerin hangi amaçla işlendiğini, kime aktarılabileceğini ve müşterinin haklarını açıklamalıdır.",
      },
      {
        q: "Anamnez formu için açık rıza gerekir mi?",
        a: "Sağlık bilgisi özel nitelikli kişisel veridir ve kanun bu tür veriler için sınırlı hukuki sebepler tanır. Güzellik salonları için açık rıza çoğu zaman pratik dayanaktır; hangi dayanağın sizin durumunuza uygun olduğunu hukuk danışmanınızla netleştirin.",
      },
      {
        q: "Müşteri fotoğrafını Instagram'da izinsiz paylaşabilir miyim?",
        a: "Hayır. Tanınabilir bir müşteri fotoğrafının tanıtım amacıyla paylaşılması için müşterinin ayrı ve açık izni gerekir. İzin, hizmet alma şartına bağlanmamalıdır ve geri çekildiğinde paylaşımı kaldırmanız gerekir.",
      },
      {
        q: "Müşteri randevu hatırlatmaları için onay gerekir mi?",
        a: "Randevu onayı ve hatırlatması gibi hizmetle doğrudan ilgili bilgilendirme mesajları genellikle ticari ileti sayılmaz. Kampanya, indirim ve tanıtım mesajları için ise ticari elektronik ileti onayı ve İYS kurallarına uymanız gerekir.",
      },
      {
        q: "KVKK'ya uymayan salona ne olur?",
        a: "Kanun, aydınlatma ve veri güvenliği yükümlülüklerine aykırılık için idari para cezaları öngörür. Cezalar her yıl yeniden değerleme oranına göre güncellenir. Bunun yanında müşteri güveninin kaybı da ciddi bir risktir.",
      },
    ],
    related: [
      { pageKey: "client-records", label: "Müşteri takip programı" },
      { pageKey: "forms", label: "Dijital onam formları" },
      { pageKey: "treatment-documentation", label: "İşlem kayıtları ve fotoğraflar" },
    ],
    sources: [
      { label: "Kişisel Verileri Koruma Kurumu", url: "https://www.kvkk.gov.tr" },
      { label: "6698 sayılı Kişisel Verilerin Korunması Kanunu (Mevzuat Bilgi Sistemi)", url: "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf" },
      { label: "VERBİS – Veri Sorumluları Sicil Bilgi Sistemi", url: "https://verbis.kvkk.gov.tr" },
      { label: "İleti Yönetim Sistemi (İYS)", url: "https://iys.org.tr" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6) Müşteri sadakati
  // ---------------------------------------------------------------------------
  {
    topic: "client-retention",
    lang: "tr",
    slug: "musteri-sadakati-guzellik-salonu",
    title: "Güzellik Salonunda Müşteri Sadakati Nasıl Artırılır? Tekrar Randevu İçin 7 Yöntem",
    metaTitle: "Güzellik Salonunda Müşteri Sadakati Nasıl Artırılır?",
    description:
      "Yeni müşteri bulmak pahalı, mevcut müşteriyi tutmak kârlı. Bir sonraki randevu, takip mesajı, kişisel notlar ve geri kazanım mesajlarıyla sadakati artırın.",
    excerpt:
      "Sadakat kartından önce gelen şey sistemdir: müşteri koltuktan kalkmadan bir sonraki randevuyu almak, işlemden sonra hal hatır sormak ve onu hatırladığınızı göstermek.",
    category: "Müşteri sadakati",
    keywords: [
      "müşteri sadakati güzellik salonu",
      "salon müşteri kazanma",
      "tekrar randevu",
      "müşteri geri kazanma mesajı",
      "güzellik salonu kampanya fikirleri",
      "salon müşteri takibi",
      "whatsapp müşteri mesajı",
    ],
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 8,
    answer:
      "Güzellik salonunda müşteri sadakatini artırmanın en etkili yolu, sadakati bir kampanya değil bir süreç olarak kurmaktır: müşteri salondan çıkmadan bir sonraki randevuyu vermek, işlemden sonra kısa bir takip mesajı göndermek, müşteri kartındaki notlarla kişisel hizmet sunmak ve uzun süredir gelmeyen müşterilere zamanında ulaşmak. Sürekli indirim yerine kişisel ilgi ve düzenli hatırlatma, müşteriyi daha uzun süre tutar.",
    takeaways: [
      "Müşteri en çok ilk ziyaretten sonra ve seans paketi bittiğinde kaybedilir; bu iki anı planlayın.",
      "Bir sonraki randevuyu müşteri salondayken vermek, en basit ve en etkili sadakat aracıdır.",
      "Müşteri kartına yazılan küçük kişisel notlar, büyük indirimlerden daha çok bağlılık yaratır.",
      "Geri kazanım mesajını hizmetin doğal tekrar aralığına göre zamanlayın.",
      "Kampanya ve tanıtım mesajları için ticari elektronik ileti onayı ve İYS kurallarına dikkat edin.",
    ],
    intro: [
      "Instagram reklamına, influencer iş birliklerine ve açılış kampanyalarına ciddi bütçeler ayrılır. Oysa salonların büyük kısmının cirosunu, yıllardır aynı koltuğa oturan düzenli müşteriler taşır. Sadık bir müşteri sadece düzenli gelmez; arkadaşını getirir, yeni hizmetinizi ilk o dener ve küçük bir aksilikte sizi hemen bırakmaz.",
      "Sadakat çoğu zaman tesadüfe bırakılır: müşteri memnunsa döner, değilse sessizce kaybolur. Bu rehber, sadakati tesadüften çıkarıp tekrarlanabilir bir sisteme dönüştürmek için yedi pratik yöntem sunuyor.",
    ],
    sections: [
      {
        heading: "Müşteri sadakati neden yeni müşteri bulmaktan daha kârlı?",
        paragraphs: [
          "Yeni müşteri için reklam, tanıtım indirimi ve ilk seansta daha uzun danışmanlık süresi harcarsınız. Düzenli müşteri ise sizi zaten tanır; hizmeti hızlıdır, tavsiye eder ve yeni hizmetlere daha açıktır. Kendi rakamlarınızı görmek için son altı ayda ilk kez gelen müşterilerden kaçının ikinci kez geldiğine bakın; bu tek rakam size sadakat sisteminizin durumunu gösterir.",
        ],
      },
      {
        heading: "Müşteri hangi anlarda kaybedilir?",
        paragraphs: [
          "Müşteriler genellikle bir kriz yaşadıkları için değil, “araya bir şey girdiği” için gitmez. Bu anları önceden bilirseniz müdahale edebilirsiniz:",
        ],
        bullets: [
          "**İlk ziyaretten sonra:** Müşteri henüz alışkanlık geliştirmemiştir; bir sonraki randevu verilmezse kolayca başka salonu dener.",
          "**Seans paketi bittiğinde:** Lazer veya cilt bakımı paketini tamamlayan müşteriye bakım seansı önerilmezse ilişki biter.",
          "**Favori uzman ayrıldığında:** Müşteri salona değil kişiye bağlıysa, uzman değişikliğini önceden ve kişisel olarak anlatmak gerekir.",
          "**Kötü bir deneyimden sonra:** Gecikme, yanlış anlaşılma veya beklenmeyen sonuç; sorulmazsa müşteri şikâyet etmeden gider.",
        ],
      },
      {
        heading: "1. Bir sonraki randevuyu müşteri salondayken nasıl verirsiniz?",
        paragraphs: [
          "En basit sadakat aracı, müşteri koltuktan kalkmadan bir sonraki tarihi belirlemektir. “Sizi ararız” yerine “Dolgu için 3 hafta sonra, aynı gün aynı saat uygun mu?” sorusu, müşteriyi düşünmekten kurtarır. Aşağıdaki aralıklar sık kullanılan başlangıç noktalarıdır; kesin aralığı uzmanınız müşteriye göre belirler.",
        ],
        table: {
          headers: ["Hizmet", "Genellikle önerilen tekrar aralığı"],
          rows: [
            ["İpek kirpik dolgu", "2–3 hafta"],
            ["Protez tırnak dolgu", "3–4 hafta"],
            ["Klasik cilt bakımı", "4–6 hafta"],
            ["Lazer epilasyon seansı", "Bölgeye ve aşamaya göre birkaç hafta; uzman planına göre"],
            ["Kalıcı makyaj rötuşu", "İlk seanstan birkaç hafta sonra, uzman kontrolüyle"],
            ["Kaş tasarımı ve laminasyon", "4–8 hafta"],
          ],
        },
      },
      {
        heading: "2. İşlem sonrası takip mesajı nasıl olmalı?",
        paragraphs: [
          "İşlemden bir veya iki gün sonra gönderilen kısa bir mesaj, müşteriye onu unutmadığınızı gösterir ve olası bir sorunu büyümeden yakalar. Mesaj satış değil, ilgi kokmalıdır:",
          "“Merhaba Elif Hanım, dünkü kirpik uygulamanızdan sonra her şey yolunda mı? İlk 24 saat suyla temas etmemeyi unutmayın. Bir sorunuz olursa buradan yazabilirsiniz.”",
          "Lazer, kimyasal peeling ve kalıcı makyaj gibi işlemlerde bu mesaj aynı zamanda bakım talimatlarını hatırlatma fırsatıdır. Sonuç memnun ediciyse, birkaç gün sonra nazikçe Google değerlendirmesi istemek için de iyi bir zamandır.",
        ],
      },
      {
        heading: "3. Müşteri kartındaki notlar sadakati nasıl etkiler?",
        paragraphs: [
          "Müşteri, “Geçen sefer kızınızın düğünü vardı, nasıl geçti?” diye soran uzmanı unutmaz. Bu tür detayları hafızaya bırakmak yerine müşteri kartına yazın: sevdiği kahve, tercih ettiği kirpik uzunluğu, hassas olduğu ürün, son konuştuğunuz önemli bir olay.",
          "Treatflow'da müşteri kartı; işlem geçmişini, fotoğrafları, form yanıtlarını ve ekip notlarını tek yerde toplar. Böylece müşteri farklı bir uzmana gittiğinde bile aynı kişisel ilgiyi görür.",
        ],
        callout:
          "Kişisel notlar da kişisel veridir. Yalnızca hizmetle ilgili ve müşterinin rahatsız olmayacağı bilgileri yazın; sağlık bilgilerini ayrı ve erişimi sınırlı alanlarda tutun.",
      },
      {
        heading: "4. Uzun süredir gelmeyen müşteri nasıl geri kazanılır?",
        paragraphs: [
          "Müşteri listenizi düzenli olarak “son ziyaret tarihi”ne göre sıralayın. Hizmetin doğal tekrar aralığının iki katını geçen müşteriler risk grubundadır.",
        ],
        steps: [
          "Ayda bir, son ziyareti hizmet aralığının iki katını geçen müşterileri listeleyin.",
          "Kişisel bir mesaj gönderin: “Sizi bir süredir göremedik, umarız her şey yolundadır.” Genel kampanya metni yerine müşterinin adını ve son hizmetini kullanın.",
          "Bir neden sorun ama baskı yapmayın; gelen cevaplar hizmetinizi geliştirmek için değerli bilgidir.",
          "Geri dönüşü kolaylaştırın: randevu linkini ekleyin ve gerekiyorsa sınırlı süreli bir indirim kodu sunun.",
          "Cevap vermeyen müşteriye tekrar tekrar yazmayın; bir hatırlatma yeterlidir.",
        ],
        callout:
          "Kampanya, indirim veya tanıtım içeren mesajlar ticari elektronik ileti sayılır. Bu tür mesajlar için müşterinin önceden onay vermiş olması ve İYS kurallarına uyulması gerekir. Randevu hatırlatması gibi bilgilendirme mesajları ise genellikle bu kapsamda değildir.",
      },
      {
        heading: "5. Sadakat programı mı, indirim mi?",
        paragraphs: [
          "Sürekli indirim, müşteriye hizmetinizin aslında daha ucuz olduğunu öğretir. Sadakati ödüllendirmek istiyorsanız fiyatı düşürmek yerine değer ekleyen yöntemleri tercih edin.",
        ],
        table: {
          headers: ["Yöntem", "Artısı", "Dikkat edilecek nokta"],
          rows: [
            ["Seans paketi", "Müşteriyi düzenli getirir, ön ödeme sağlar", "Paket bitmeden bakım seansı önerin"],
            ["Ek hizmet hediyesi", "Fiyat algısını korur, yeni hizmeti tanıtır", "Maliyeti düşük, değeri yüksek bir hizmet seçin"],
            ["Tavsiye ödülü", "Yeni müşteriyi güvenilir kanaldan getirir", "Hem tavsiye edene hem yeni müşteriye küçük bir ödül"],
            ["Doğum günü sürprizi", "Kişisel ilgi gösterir", "Mesajı kişisel tutun, kampanya izni kurallarına dikkat edin"],
            ["Sınırlı indirim kodu", "Geri kazanımda hızlı sonuç verir", "Süreyi kısa tutun ve herkese dağıtmayın"],
          ],
        },
      },
      {
        heading: "6. Hatırlatmalar ve otomasyon sadakati nasıl destekler?",
        paragraphs: [
          "Sadakat sisteminin en büyük düşmanı yoğunluktur: salon dolu olduğunda takip mesajları ve geri kazanım listeleri ilk unutulan işlerdir. Bu yüzden tekrarlanan adımları otomatikleştirin. Treatflow'un Booking paketindeki müşteri otomasyonları ve WhatsApp ile e-posta hatırlatmaları, bu mesajların ekibin hafızasına bağlı kalmadan gitmesini sağlar.",
          "Otomasyonun tonu yine de insan gibi olmalıdır. Mesaj şablonlarını salonunuzun konuşma diliyle yazın, müşterinin adını ve hizmetini ekleyin ve cevap gelen mesajlara mutlaka bir kişi dönsün.",
        ],
      },
      {
        heading: "Ekip müşteri sadakatine nasıl katkı sağlar?",
        paragraphs: [
          "Müşteri çoğu zaman salona değil, onu karşılayan ve işlemini yapan kişiye bağlanır. Bu yüzden sadakat bir yönetim görevi değil, ekibin günlük alışkanlığıdır. Her uzmana işlem sonunda bir sonraki randevuyu sormayı, müşteri kartına kısa not yazmayı ve takip mesajlarına dönmeyi standart bir adım olarak öğretin.",
          "Uzman değişikliği kaçınılmazsa (izin, ayrılma, yoğunluk), müşteriye bunu önceden ve kişisel olarak bildirin, yeni uzmanı tanıtın ve önceki notların ona aktarıldığını söyleyin. Müşteri, geçmişinin bilindiğini gördüğünde değişikliği çok daha kolay kabul eder.",
        ],
      },
      {
        heading: "7. Müşteri sadakati hangi rakamlarla ölçülür?",
        paragraphs: [
          "Ölçmediğiniz şeyi geliştiremezsiniz. Ayda bir aşağıdaki rakamlara bakmak için 15 dakika ayırın:",
        ],
        table: {
          headers: ["Metrik", "Nasıl hesaplanır?", "Ne anlatır?"],
          rows: [
            ["İkinci ziyaret oranı", "İkinci kez gelen yeni müşteri / toplam yeni müşteri", "İlk deneyimin ne kadar iyi olduğunu"],
            ["Salondan tekrar randevu oranı", "Salondan çıkmadan randevu alan müşteri / toplam müşteri", "Ekibin bir sonraki randevuyu ne kadar sorduğunu"],
            ["Ortalama ziyaret aralığı", "İki ziyaret arasındaki ortalama gün", "Müşterilerin önerilen aralığa uyup uymadığını"],
            ["Risk grubundaki müşteri sayısı", "Önerilen aralığın iki katını geçenler", "Geri kazanım için kimlere yazmanız gerektiğini"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "Güzellik salonunda müşteri nasıl kalıcı olur?",
        a: "Müşteriyi kalıcı yapan; tutarlı kalite, kişisel ilgi ve kolaylıktır. Bir sonraki randevuyu salonda vermek, işlem sonrası takip mesajı göndermek ve müşteriyi hatırladığınızı göstermek en etkili adımlardır.",
      },
      {
        q: "Müşteriye WhatsApp'tan kampanya mesajı göndermek yasal mı?",
        a: "Kampanya ve tanıtım içeren mesajlar ticari elektronik ileti sayılır ve müşterinin önceden onayını gerektirir; İYS kuralları da geçerlidir. Randevu onayı ve hatırlatma gibi bilgilendirme mesajları genellikle bu kapsama girmez. Ayrıntılar için hukuk danışmanınıza danışın.",
      },
      {
        q: "Uzun süredir gelmeyen müşteriye ne yazılır?",
        a: "Kısa, kişisel ve baskısız bir mesaj en iyi sonucu verir: müşterinin adını ve son aldığı hizmeti anın, onu özlediğinizi söyleyin ve randevu linkini ekleyin. Tek bir hatırlatma yeterlidir; ısrarcı mesajlar ilişkiye zarar verir.",
      },
      {
        q: "Sadakat kartı hâlâ işe yarar mı?",
        a: "Basit bir damga kartı bazı müşteriler için motive edicidir, ama tek başına sadakat yaratmaz. Seans paketleri, tavsiye ödülleri ve kişisel ilgi genellikle daha kalıcı sonuç verir.",
      },
      {
        q: "Müşteri memnuniyetsizliğini nasıl erken fark ederim?",
        a: "İşlemden bir iki gün sonra gönderilen takip mesajı en erken uyarı sistemidir. Ayrıca ikinci ziyaret oranının düştüğü uzman veya hizmetlere bakmak, sorunun nerede olduğunu gösterir.",
      },
    ],
    related: [
      { pageKey: "messaging", label: "WhatsApp ve e-posta hatırlatmaları" },
      { pageKey: "client-records", label: "Müşteri takip programı" },
    ],
  },
  // ---------------------------------------------------------------------------
  // 7) Hizmet fiyatlandırma
  // ---------------------------------------------------------------------------
  {
    topic: "pricing-beauty-treatments",
    lang: "tr",
    slug: "guzellik-salonu-fiyat-hesaplama",
    title: "Güzellik Salonu Fiyatları Nasıl Hesaplanır? Hizmet Başına Adım Adım Fiyatlandırma",
    metaTitle: "Güzellik Salonu Fiyatları Nasıl Hesaplanır?",
    description:
      "Güzellik salonu fiyat hesaplama: saatlik maliyetinizi bulun, süre, sarf malzemesi ve kâr payını ekleyin, rakipleri doğru okuyun ve net bir fiyat listesi kurun.",
    excerpt:
      "Yandaki salonun fiyatını kopyalamak bir strateji değildir. Saatlik maliyet hesabı, dört hizmet için örnek fiyat ve müşterinin güvendiği bir fiyat listesi için pratik adımlar.",
    category: "İşletme",
    keywords: [
      "güzellik salonu fiyat hesaplama",
      "güzellik salonu fiyat listesi",
      "cilt bakımı fiyatı nasıl belirlenir",
      "salon hizmet fiyatlandırma",
      "kirpik fiyatı hesaplama",
      "lazer epilasyon fiyat belirleme",
      "güzellik merkezi kâr hesabı",
    ],
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    readMinutes: 8,
    answer:
      "Güzellik salonunda doğru fiyat, maliyetten yukarı doğru hesaplanır ve en son piyasayla karşılaştırılır. Önce saatlik asgari tutarınızı bulun: aylık sabit giderler ile kendinize ödemeniz gereken maaşın toplamını, gerçekten faturalanabilir çalışma saatlerine bölün. Bu tutarı hizmetin odayı ve uzmanı meşgul ettiği toplam süreyle çarpın, sarf malzemesini ve yüzde 10–20 civarında bir kâr payını ekleyin.",
    takeaways: [
      "Saatlik asgari tutar = (sabit giderler + kendi maaşınız) ÷ faturalanabilir saat; bu saat açık olduğunuz saatten çok daha azdır.",
      "Fiyata sadece müşterinin koltukta geçirdiği süreyi değil, hazırlık, temizlik ve kayıt süresini de katın.",
      "Her hizmetin sarf malzemesi maliyetini ayrı hesaplayın; cihaz taksitlerini iki kez saymayın.",
      "Rakip fiyatları piyasanın neyi kabul ettiğini gösterir, sizin ne kazanmanız gerektiğini değil.",
      "Kademeli, süresi ve fiyatı açıkça yazılmış bir liste güven verir ve üst pakete geçişi kolaylaştırır.",
    ],
    intro: [
      "Birçok salon fiyatlarını açılışta bir kez belirler: çevredeki salonlara bakılır, ortalama bir rakam seçilir. Aradan bir iki yıl geçer; kira, ürün, elektrik ve maaşlar artmıştır ama fiyat listesi neredeyse aynı kalmıştır. Takvim doludur, banka hesabında ise beklenen para yoktur. Yoğun olmak ile kârlı olmak aynı şey değildir.",
      "Bu rehber; güzellik salonları, medikal estetik klinikleri, lazer epilasyon merkezleri, protez tırnak, kirpik ve kalıcı makyaj stüdyoları, spa ve masaj salonları için maliyetinizi karşılayan ve emeğinizin karşılığını veren fiyatları nasıl hesaplayacağınızı gösteriyor. Örnekteki rakamlar yalnızca açıklama amaçlıdır; kendi rakamlarınızı yerleştirdiğinizde her hizmet için sağlam bir taban fiyatınız olur.",
    ],
    sections: [
      {
        heading: "Salonlar neden hizmetlerini değerinin altında satar?",
        paragraphs: [
          "En yaygın neden, fiyatın hesaplanmayıp kopyalanmasıdır. Örnek aldığınız salonun kirasını, personel giderini, cihazını nasıl finanse ettiğini bilmezsiniz. Yani başkasının varsayımlarını, belki de zararını devralırsınız.",
          "İkinci neden kaygıdır: düzenli müşteriyi kaybetme, pahalı görünme, boş saat kalma korkusu. Oysa sonucu ve hizmet deneyimini sevdiği için gelen müşteri, makul ve iyi anlatılmış bir fiyat farkı yüzünden kolay kolay vazgeçmez. Sadece en ucuzu arayan müşteri ise zaten bir sonraki kampanyaya gidecektir.",
          "Üçüncü neden görünmeyen süredir. 60 dakikalık bir cilt bakımı; ön görüşme, oda hazırlığı, temizlik, dezenfeksiyon ve işlem notuyla birlikte gününüzden 60 dakikadan fazlasını alır. Bu süre fiyatta yoksa, o kısmı ücretsiz çalışıyorsunuz demektir.",
        ],
      },
      {
        heading: "Saatlik asgari tutar nasıl hesaplanır?",
        paragraphs: [
          "Saatlik asgari tutar, tüm giderlerin karşılanması ve size adil bir maaş kalması için her faturalanabilir saatin getirmesi gereken paradır. Bu hesabı yılda en az bir kez ve kira artışı, yeni cihaz gibi büyük bir değişiklikte mutlaka yenileyin. Yüksek enflasyon dönemlerinde üç ayda bir gözden geçirmek daha sağlıklıdır.",
        ],
        steps: [
          "Aylık sabit giderlerinizi toplayın: kira, aidat, elektrik-su-doğalgaz, sigorta, yazılım, reklam, muhasebe, eğitim, cihaz taksidi ve müşteri gelse de gelmese de ödediğiniz her şey.",
          "Kendinize ödemeniz gereken maaşı belirleyin; vergi ve Bağ-Kur/SGK primlerini de dahil edin. Çalışanınız varsa onların toplam işveren maliyetini de ekleyin.",
          "Faturalanabilir saati bulun: aylık iş günü × günlük çalışma saati, eksi yönetim işleri, mola, müşteri arası temizlik, hastalık ve takvimdeki boşluklar. Çoğu salon için yüzde 20–30 düşmek gerçekçidir.",
          "Sabit giderler ile maaşın toplamını faturalanabilir saate bölün. Bu, başa baş saatlik tutarınızdır.",
          "Yedek, tamir, sakin aylar ve yatırım için yüzde 10–20 civarında kâr payı ekleyin.",
        ],
        table: {
          headers: ["Kalem (örnek)", "Aylık"],
          rows: [
            ["Kira", "30.000 TL"],
            ["Elektrik, su, doğalgaz", "5.000 TL"],
            ["Sigorta", "1.500 TL"],
            ["Salon yazılımı", "1.990 TL"],
            ["Reklam ve sosyal medya", "6.000 TL"],
            ["Muhasebe", "4.000 TL"],
            ["Eğitim", "3.000 TL"],
            ["Cihaz taksidi", "12.000 TL"],
            ["Diğer", "6.510 TL"],
            ["**Sabit giderler toplamı**", "**70.000 TL**"],
            ["Sahibin maaşı (vergi ve prim dahil)", "80.000 TL"],
            ["Faturalanabilir saat (22 gün × 8 saat, eksi yaklaşık %30)", "120 saat"],
            ["Başa baş tutar: 150.000 TL ÷ 120 saat", "1.250 TL/saat"],
            ["%15 kâr payıyla hedef tutar", "≈ 1.440 TL/saat"],
          ],
        },
        callout:
          "En sık yapılan hata faturalanabilir saattir. 160 saatle hesap yapıp gerçekte 110 saat müşteriyle çalışıyorsanız, listenizdeki her fiyat yaklaşık üçte bir düşük demektir.",
      },
      {
        heading: "Saatlik tutardan hizmet fiyatına nasıl geçilir?",
        paragraphs: [
          "Her hizmet için odayı ve uzmanı meşgul ettiği toplam süreyi hedef saatlik tutarla çarpın, ardından işlem başına sarf malzemesini ekleyin: maske, ampul, jel, kirpik, yapıştırıcı, iğne, tek kullanımlık örtü gibi. Cihaz taksidi zaten sabit giderlerin içindeyse onu bir kez daha eklemeyin.",
          "Çıkan sonuç taban fiyatınızdır. Deneyim, talep veya premium ürün nedeniyle daha fazlasını isteyebilirsiniz; ama düzenli olarak bunun altına inmemelisiniz.",
        ],
        table: {
          headers: ["Hizmet", "Toplam süre", "Süre × 1.440 TL", "Sarf malzemesi", "Taban fiyat"],
          rows: [
            ["Klasik cilt bakımı", "75 dk", "1.800 TL", "250 TL", "≈ 2.050 TL"],
            ["Kalıcı oje", "70 dk", "1.680 TL", "150 TL", "≈ 1.830 TL"],
            ["İpek kirpik, ilk uygulama", "130 dk", "3.120 TL", "400 TL", "≈ 3.520 TL"],
            ["Lazer epilasyon, koltuk altı", "25 dk", "600 TL", "100 TL", "≈ 700 TL"],
          ],
        },
        bullets: [
          "Lazer gibi kısa ama cihaz yatırımı yüksek işlemler genellikle süreye dayalı tabanın çok üzerinde fiyatlanır. Taban karşılandığı sürece bu sorun değildir.",
          "Masaj gibi uzun ve malzeme maliyeti düşük hizmetler en sık değerinin altında satılanlardır; önce onları kontrol edin.",
        ],
      },
      {
        heading: "Rakip fiyatlarına ne kadar bakmalısınız?",
        paragraphs: [
          "Şehirdeki tüm salonlara değil, hedef müşterinizin gerçekten karşılaştıracağı beş ila on işletmeye bakın. En önemli üç dört hizmetinizin fiyatlarını ve her salonun kendini nasıl konumlandırdığını not edin: ekonomik, orta segment ya da premium.",
          "Sonra bunu taban fiyatınızla karşılaştırın. Piyasa tabanınızın belirgin şekilde üzerindeyse değere göre fiyatlama alanınız var demektir. Piyasa tabanınızın altındaysa fiyatla yarışmak kaybedeceğiniz bir yarıştır; bunun yerine uzmanlaşma, sonuç, düzenli kayıt, konfor veya randevu kolaylığı gibi farkınızı netleştirin.",
        ],
        bullets: [
          "Ekonomik konum yüksek hacim ve çok yalın süreçler ister.",
          "Orta segment, her seferinde tutarlı bir deneyim ve iyi bir tekrar randevu oranı ister.",
          "Premium konum, görünür uzmanlık, özenli ön görüşme ve randevudan bakım sonrasına kadar kusursuz bir müşteri deneyimi ister.",
        ],
      },
      {
        heading: "Müşterinin anladığı bir fiyat listesi nasıl hazırlanır?",
        paragraphs: [
          "İyi bir fiyat listesi müşterinin hızlı karar vermesini sağlar ve daha değerli seçeneği doğal gösterir. Listeyi kısa tutun, her fiyatın yanına süreyi yazın ve sadece adımları değil sonucu da anlatın.",
          "Fiyatların görünür olması güven açısından olduğu kadar mevzuat açısından da önemlidir: Ticaret Bakanlığı'nın Fiyat Etiketi Yönetmeliği hizmet fiyatlarının da tüketicinin görebileceği şekilde ilan edilmesini ister. Ayrıntılar için muhasebecinize veya ilgili il ticaret müdürlüğüne danışın.",
        ],
        bullets: [
          "Ana hizmetler için iki üç kademe sunun; örneğin 45, 75 ve 90 dakikalık cilt bakımı. Farklar netse müşterilerin önemli bir kısmı ortadaki seçeneği tercih eder.",
          "Ek hizmetleri ayrı fiyatlayın (göz çevresi bakımı, ek maske, parafin, nail art); böylece ana hizmette indirim yapmadan yükseltme sunabilirsiniz.",
          "Lazer epilasyon veya cilt bakım programı gibi seanslı işlemleri, seans sayısı belli ve makul avantajlı paketler halinde sunun.",
          "Ön görüşmenin ücretsiz mi, ücretli mi, yoksa ilk işlemden düşülecek mi olduğuna karar verin ve bunu açıkça yazın.",
          "KDV dahil son fiyatı gösterin; ‘başlayan fiyatlarla’ ifadesini sadece fiyat gerçekten bölgeye veya uzunluğa göre değişiyorsa kullanın.",
          "Web sitesinde, online randevu sayfasında, Instagram'da ve salonda aynı fiyatları kullanın.",
        ],
        callout:
          "Online randevuda her hizmetin kendi süresi ve fiyatı vardır; müşteri onaylamadan önce ne aldığını görür. Treatflow'da randevu sayfası size ait bir bağlantıda çalışır, randevu başına komisyon alınmaz ve onay ile hatırlatmalar WhatsApp ve e-posta ile gider. 14 gün ücretsiz deneyebilirsiniz, kredi kartı gerekmez.",
      },
      {
        heading: "Fiyatlar ne zaman ve nasıl artırılmalı?",
        paragraphs: [
          "Hesabınızı en az yılda bir, enflasyonun yüksek olduğu dönemlerde daha sık gözden geçirin. Küçük ve düzenli artışlar, yıllar sonra yapılan büyük bir sıçramaya göre müşteri tarafından çok daha kolay kabul edilir.",
        ],
        steps: [
          "Güncel giderlerle saatlik tutarı yeniden hesaplayın ve her hizmeti taban fiyatıyla karşılaştırın.",
          "Yeni fiyatları birkaç hafta önceden WhatsApp, e-posta ve salondaki bilgilendirmeyle duyurun.",
          "Ürün, enerji veya eğitim maliyetleri gibi kısa ve dürüst bir gerekçe verin; özür diler gibi yazmayın.",
          "Önceden alınmış randevuların eski fiyattan kalmasına izin verin; kimse kendini kandırılmış hissetmesin.",
          "Ekibinizi bilgilendirin ki herkes sorulara aynı sakin cümlelerle yanıt versin.",
        ],
      },
      {
        heading: "Salonlara en çok para kaybettiren fiyat hataları hangileri?",
        paragraphs: [
          "Fiyat sorunlarının çoğu zamanla yerleşen birkaç alışkanlıktan doğar. Fiyat listenizi yılda bir kez bu listeye göre kontrol edin.",
        ],
        bullets: [
          "Hiç bitmeyen ‘açılış indirimleri’ ve sürekli kampanyalar; müşteri indirimi beklemeyi öğrenir.",
          "Kayda geçmeyen anlık kişisel indirimler; zamanla yeni normal haline gelir.",
          "Hizmet süresine hazırlık, temizlik ve kayıt süresini katmamak.",
          "Son dakika iptalleri ve gelmeyen müşteriler için hiçbir kural koymamak; boş saatin bedelini tamamen siz ödersiniz.",
          "Fiyatları yıllarca sabit tutup sonra tek seferde büyük oranda artırmak.",
          "Hangi hizmetin gerçekten kazandırdığını, hangisinin sadece takvimi doldurduğunu hiç kontrol etmemek.",
        ],
      },
    ],
    faq: [
      {
        q: "Bir güzellik hizmetinin fiyatı nasıl hesaplanır?",
        a: "Önce saatlik tutarınızı bulun: aylık sabit giderler artı maaşınız, gerçekçi faturalanabilir saate bölünür ve yüzde 10–20 kâr payı eklenir. Bu tutarı hizmetin hazırlık ve temizlik dahil toplam süresiyle çarpın, sarf malzemesini ekleyin. Sonuç taban fiyatınızdır.",
      },
      {
        q: "Cilt bakımı fiyatı ne kadar olmalı?",
        a: "Tek bir doğru fiyat yoktur; kira, maaş ve konum şehirden şehre değişir. Örnekteki 1.440 TL'lik saatlik tutar ve 75 dakikalık süreyle klasik bir cilt bakımının en az yaklaşık 2.050 TL olması gerekir. Hesabı kendi rakamlarınızla yapın, sonra müşterinizin karşılaştırdığı salonlara bakın.",
      },
      {
        q: "Rakiplerle aynı fiyatı vermek mantıklı mı?",
        a: "Rakip fiyatlarını başlangıç noktası değil, piyasa kontrolü olarak kullanın. Onların maliyetini ve kâr edip etmediğini bilmiyorsunuz. Hesapladığınız taban, piyasanın üzerindeyse fiyatı maliyetin altına çekmek yerine konumlandırmanızı güçlendirin.",
      },
      {
        q: "Fiyatları Instagram'da ve web sitesinde paylaşmalı mıyım?",
        a: "Çoğu durumda evet. ‘Fiyat için DM’ yerine açık fiyat göstermek gereksiz soruları azaltır, size uygun olmayan müşteriyi baştan eler ve online randevuyu kolaylaştırır. Fiyat bölgeye veya uzunluğa göre değişiyorsa net bir başlangıç fiyatı yazın.",
      },
      {
        q: "Salon fiyatları ne sıklıkla güncellenmeli?",
        a: "En az yılda bir kez ve büyük maliyet değişikliklerinden sonra. Enflasyonun yüksek olduğu dönemlerde birkaç ayda bir küçük güncellemeler, tek seferlik büyük artışlardan daha az tepki çeker. Değişikliği birkaç hafta önceden duyurun.",
      },
    ],
    related: [
      { pageKey: "pricing", label: "Fiyatlar ve 14 gün ücretsiz deneme" },
      { pageKey: "client-records", label: "Müşteri takip programı" },
      { pageKey: "features", label: "Tüm özellikler" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Markt-Thema (nur TR): Randevu defteri ve Excel mi, randevu takip programı mı?
  // ---------------------------------------------------------------------------
  {
    topic: "tr-appointment-book-vs-software",
    lang: "tr",
    slug: "randevu-defteri-mi-randevu-takip-programi-mi",
    title: "Randevu Defteri ve Excel mi, Randevu Takip Programı mı? Salonlar İçin Geçiş Rehberi",
    metaTitle: "Randevu Defteri mi, Randevu Takip Programı mı?",
    description:
      "Randevu defteri ve Excel nerede yetmez, randevu takip programı ne zaman gerekir? Güzellik salonları için karşılaştırma, maliyet hesabı ve 7 günlük geçiş planı.",
    excerpt:
      "Kâğıt defter ve Excel tablosu başlangıçta iş görür; ekip büyüdükçe çift randevu, kaybolan notlar ve unutulan müşteriler başlar. Bu rehber, ne zaman ve nasıl geçmeniz gerektiğini anlatıyor.",
    category: "Organizasyon",
    keywords: [
      "randevu takip programı",
      "güzellik salonu randevu programı",
      "randevu defteri",
      "excel randevu takibi",
      "kuaför randevu programı",
      "salon randevu takibi",
      "dijital randevu defteri",
    ],
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    readMinutes: 8,
    answer:
      "Tek kişilik ve az randevulu bir salonda randevu defteri veya Excel tablosu bir süre yeterli olabilir; ancak ikinci personel, ikinci oda ya da günde birkaç değişiklik geldiğinde çift randevu, okunamayan notlar ve unutulan hatırlatmalar başlar. Bu noktada bir randevu takip programı; ortak takvim, müşteri geçmişi ve otomatik hatırlatmayı tek yerde topladığı için defterden daha az zaman ve daha az kayıp randevu demektir.",
    takeaways: [
      "Defter ve Excel'in asıl sorunu kayıt değil, paylaşım ve hatırlatmadır: aynı anda tek kişi bakar, müşteriye kendiliğinden haber vermez.",
      "İkinci personel, ikinci oda/cihaz veya haftada birkaç çift randevu, geçiş için en net işaretlerdir.",
      "Defterin gizli maliyeti; telefonda geçen dakikalar, gelmeyen müşteriler ve kaybolan notlardır.",
      "Güzellik salonu randevu programına geçiş bir haftada planlanabilir; ileri tarihli randevular ve müşteri listesi ilk taşınacak verilerdir.",
      "Eski defteri kapatmak için net bir tarih koyun; iki sistemi uzun süre birlikte tutmak geçişi bozar.",
    ],
    intro: [
      "Türkiye'de pek çok kuaför ve güzellik salonunun kalbi hâlâ resepsiyondaki randevu defteridir. Kurşun kalemle yazılır, silinir, üstüne ok çekilir; bazı salonlarda bunun yanına bir Excel tablosu ya da telefondaki not uygulaması eklenir. Bu düzen yıllarca işe yarayabilir ve “bozulmayan şeyi neden değiştireyim?” sorusu çok yerindedir.",
      "Bu rehber size bir yazılım satmaya değil, karar vermenize yardım etmeye çalışıyor: Defter ve Excel hangi durumlarda yeterli, hangi noktada randevu takip programı gerçekten zaman kazandırır ve geçiş müşterileri ile ekibi yormadan nasıl yapılır?",
    ],
    sections: [
      {
        heading: "Randevu defteri ve Excel hangi durumlarda hâlâ yeterlidir?",
        paragraphs: [
          "Defterin güçlü yanları gerçektir: elektrik ya da internet gerektirmez, herkes kullanmayı bilir ve bir bakışta günü gösterir. Excel ise aramayı ve basit listeler çıkarmayı kolaylaştırır. Aşağıdaki koşulların çoğu sizin için geçerliyse defter veya tablo bir süre daha iş görebilir.",
        ],
        bullets: [
          "Salonda tek başınıza çalışıyorsunuz ve randevuları sadece siz alıyorsunuz.",
          "Günde birkaç randevunuz var ve değişiklik nadiren oluyor.",
          "Müşterilerinizin çoğu yıllardır gelen, alışkanlıkları belli kişiler.",
          "Onam formu, seans takibi veya işlem notu tutmanız gereken hizmetler sunmuyorsunuz.",
          "Gelmeyen müşteri sizin için ciddi bir ciro kaybı oluşturmuyor.",
        ],
        callout:
          "Excel tablosu defterden daha düzenli görünür ama aynı temel sorunu taşır: dosya bir cihazda açıkken diğer kişi en güncel hâlini görmez ve tablo müşteriye kendiliğinden hatırlatma göndermez.",
      },
      {
        heading: "Defterden randevu takip programına geçmenin zamanı geldiğini gösteren 7 işaret nedir?",
        paragraphs: [
          "Geçiş ihtiyacı genellikle tek bir büyük sorunla değil, küçük aksaklıkların birikmesiyle kendini gösterir. Son bir ayı düşünün ve aşağıdakilerden kaç tanesinin başınıza geldiğini sayın.",
        ],
        steps: [
          "Aynı saate iki müşteri yazıldı ya da bir personelin dolu olduğu saat başka birine verildi.",
          "Silinmiş veya okunamayan bir kayıt yüzünden müşteriyle “ben o saati demiştim” tartışması yaşandı.",
          "Randevuları sadece bir kişi bilebiliyor; o kişi izindeyken kimse günün planından emin değil.",
          "Hatırlatma için akşamları tek tek mesaj atıyor ya da arıyorsunuz, yetişemediğiniz günlerde müşteri gelmiyor.",
          "Bir müşterinin en son hangi işlemi, hangi ürünle yaptırdığını bulmak için eski defter sayfalarını karıştırıyorsunuz.",
          "Lazer, kirpik dolgusu veya kalıcı makyaj rötuşu gibi seanslı hizmetlerde sıradaki seansın zamanını kaçırıyorsunuz.",
          "Bir defter kaybolsa ya da üzerine bir şey dökülse hangi müşteri bilgisinin gideceğini bilmiyorsunuz.",
        ],
        callout:
          "Bu listeden üç veya daha fazlası tanıdık geliyorsa defter artık sizi yavaşlatıyor demektir. Özellikle ilk üç madde, ekip büyüdükçe katlanarak artar.",
      },
      {
        heading: "Randevu defteri, Excel ve randevu takip programı nasıl karşılaştırılır?",
        paragraphs: [
          "Üç yöntemi aynı kriterlerle yan yana koymak kararı netleştirir. Tablo, tipik bir güzellik salonundaki günlük ihtiyaçlara göre hazırlandı.",
        ],
        table: {
          headers: ["Kriter", "Randevu defteri", "Excel / tablo", "Randevu takip programı"],
          rows: [
            ["Birden fazla kişinin aynı anda görmesi", "Hayır, defter tek yerde durur", "Sınırlı, dosya çakışmaları olur", "Evet, herkes aynı güncel takvimi görür"],
            ["Çift randevu kontrolü", "Göze bağlı", "Göze bağlı", "Dolu saat, personel ve oda bazında görünür"],
            ["Müşteri hatırlatması", "Elle arama veya mesaj", "Elle arama veya mesaj", "Otomatik e-posta hatırlatması"],
            ["Müşteri geçmişi", "Eski sayfalarda dağınık", "Ayrı sekmelerde, elle güncellenir", "Müşteri kartında randevu ve işlem geçmişi"],
            ["Müşterinin kendisi randevu alması", "Mümkün değil", "Mümkün değil", "Online randevu linkiyle 7/24"],
            ["Yedekleme", "Yok", "Dosyayı kimin, nereye kaydettiğine bağlı", "Sunucuda düzenli yedekleme"],
            ["Başlangıç maliyeti", "Çok düşük", "Düşük", "Aylık abonelik"],
          ],
        },
      },
      {
        heading: "Defterin gizli maliyeti nasıl hesaplanır?",
        paragraphs: [
          "Defter ucuz görünür çünkü maliyeti faturada değil, gün içinde kaybolan zamanda ve boş kalan koltukta saklıdır. Kendi salonunuz için kabaca bir hesap yapmak, abonelik ücretiyle karşılaştırma yapmanızı sağlar.",
        ],
        steps: [
          "Bir hafta boyunca randevu almak, değiştirmek ve hatırlatmak için telefonda ve mesajda harcadığınız süreyi not edin.",
          "Aynı hafta haber vermeden gelmeyen müşteri sayısını ve bu randevuların ortalama tutarını yazın.",
          "Haftalık süreyi saatlik tutarınızla çarpın; buna gelmeyen randevuların tutarını ekleyin.",
          "Çıkan rakamı dört ile çarparak aylık tahmini kaybı bulun ve bir programın aylık ücretiyle karşılaştırın.",
        ],
        callout:
          "Bu hesap kesin bir sonuç vermez, ama çoğu salon sahibi ilk kez yaptığında telefonda geçen sürenin tahmin ettiğinden fazla olduğunu görür. Rakamları kendi kayıtlarınızdan alın; genel istatistiklere güvenmeyin.",
      },
      {
        heading: "Güzellik salonu randevu programında hangi özellikler olmalı?",
        paragraphs: [
          "Defterden geçerken amaç, defterin yaptığı her şeyi daha iyi yapmak ve defterin yapamadıklarını eklemektir. Gereğinden karmaşık bir sistem, ekibin defteri özlemesine yol açar. Aşağıdaki liste, ilk gün işinize yarayacak temel özellikleri sıralıyor.",
        ],
        bullets: [
          "**Personel ve oda sütunlu takvim:** Defterdeki sütunların dijital karşılığı; kimin, hangi odada, ne zaman müsait olduğunu tek ekranda gösterir.",
          "**Müşteri kartı:** Telefon, notlar, geçmiş randevular ve yapılan işlemler aynı yerde durur.",
          "**Otomatik hatırlatma:** Randevudan önce müşteriye kendiliğinden giden mesaj; Treatflow'da hatırlatmalar e-postayla gönderilir.",
          "**Online randevu linki:** Müşterinin Instagram biyografinizden veya web sitenizden boş saati kendisinin seçmesi.",
          "**Bekleme listesi:** İptal olan saati, o saati bekleyen müşteriye vermeyi kolaylaştırır.",
          "**Telefonda çalışma:** Resepsiyonda bilgisayar olmasa bile takvimi cep telefonundan ya da tabletten yönetebilmek.",
          "**Verilerin dışa aktarılması:** İleride sistemi değiştirmek isterseniz müşteri listenizi alabilmek.",
        ],
      },
      {
        heading: "Randevu defterinden programa 7 günde nasıl geçilir?",
        paragraphs: [
          "Geçişi bir hafta sonuna sıkıştırmak yerine bir haftaya yayın. Böylece günlük işler aksamadan, ekip ve müşteriler yeni düzene adım adım alışır.",
        ],
        steps: [
          "1. gün – Hizmetler: Hizmet listesini gerçek süreleri ve fiyatlarıyla girin; temizlik ve hazırlık için tampon süre ekleyin.",
          "2. gün – Ekip: Personeli, çalışma saatlerini, izin günlerini ve varsa odaları veya cihazları tanımlayın.",
          "3. gün – Müşteriler: Excel listenizi veya defterdeki aktif müşterileri aktarın; en azından ad, telefon ve e-posta olsun.",
          "4. gün – İleri tarihli randevular: Defterdeki gelecek randevuları tek tek yeni takvime girin ve her birinin yanına defterde bir tik atın.",
          "5. gün – Hatırlatmalar: Otomatik e-posta hatırlatmalarını açın ve kendinize bir test randevusu oluşturup müşterinin ne gördüğünü kontrol edin.",
          "6. gün – Online randevu: Randevu linkini önce birkaç sadık müşteriyle paylaşın, sonra Instagram biyografinize ekleyin.",
          "7. gün – Defteri kapatma: Belirlediğiniz tarihten sonra yeni randevuyu yalnızca programa yazın; defteri bir süre sadece okumak için saklayın.",
        ],
        callout:
          "Treatflow'da destek ekibi mevcut müşteri listenizi ücretsiz olarak dijital müşteri kartlarına taşır. Excel veya başka bir sistemden dışa aktardığınız liste geçişin en çok zaman alan kısmını kısaltır.",
      },
      {
        heading: "Ekibi ve sadık müşterileri yeni sisteme nasıl alıştırırsınız?",
        paragraphs: [
          "Geçişte en büyük direnç genellikle ekipten gelir: “Defter daha hızlıydı.” Bu çoğu zaman yazılımın değil, alışkanlığın sesidir. İlk iki hafta sabırlı olun ve sorunları birlikte not edin.",
        ],
        bullets: [
          "Her personelin kendi kullanıcı hesabı olsun; ortak şifre kimin neyi değiştirdiğini belirsizleştirir.",
          "Resepsiyonda takvimin açık durduğu tek bir tablet veya bilgisayar belirleyin; defterin yerini fiziksel olarak alsın.",
          "Yıllardır telefonla randevu alan müşterilere zorla link göndermeyin; telefonda konuşurken randevuyu doğrudan programa girin.",
          "Yeni müşterilere ise ilk temastan itibaren randevu linkini önerin; alışkanlık en kolay baştan kurulur.",
          "İlk hafta gün sonunda beş dakikalık kısa bir değerlendirme yapın: Bugün nerede zorlandık?",
        ],
      },
      {
        heading: "Randevu takip programının maliyeti ne kadar ve nasıl denenir?",
        paragraphs: [
          "Programları karşılaştırırken sadece aylık ücrete değil, bir yıllık toplam maliyete bakın: ek kullanıcı ücreti, mesaj kontörü, randevu başına komisyon ve kurulum bedeli varsa hepsini ekleyin.",
          "Treatflow'da takvim, online randevu, bekleme listesi ve e-posta hatırlatmaları Booking paketindedir; Türkiye'de ilk 100 işletmeye özel lansman fiyatı aylık ₺1.990'dır (KDV hariç). Sadece müşteri kartı, formlar ve işlem kayıtlarını içeren Basic paket aylık ₺1.490'dır, ancak randevu takvimi içermez. Randevu başına komisyon ve kurulum ücreti yoktur; 14 gün ücretsiz deneyebilirsiniz ve kredi kartı gerekmez.",
          "Deneme süresini gerçek bir test olarak kullanın: Bir haftayı yalnızca programla yönetin, ekipten geri bildirim toplayın ve yukarıdaki gizli maliyet hesabınızı tekrar yapın.",
        ],
      },
    ],
    faq: [
      {
        q: "Randevu takip programı küçük bir salon için gerekli mi?",
        a: "Tek kişilik ve az randevulu bir salonda defter bir süre yeterli olabilir. Ancak hatırlatmalar için harcanan zaman ve gelmeyen müşteriler artıyorsa, küçük bir salon da otomatik hatırlatma ve müşteri geçmişinden belirgin şekilde fayda görür.",
      },
      {
        q: "Excel ile randevu takibi yapmak yeterli değil mi?",
        a: "Excel defterden daha düzenli bir liste sunar, ama birden fazla kişinin aynı anda güncel takvimi görmesini, çift randevu kontrolünü ve otomatik hatırlatmayı sağlamaz. Tek kişilik kullanımda iş görür, ekip büyüdükçe zorlaşır.",
      },
      {
        q: "Defterdeki eski randevuları da programa aktarmam gerekir mi?",
        a: "Hayır. Önce ileri tarihli randevuları ve aktif müşteri listesini aktarmanız yeterlidir. Geçmiş kayıtlar için eski defterleri güvenli bir yerde saklayın; müşteri geldikçe önemli notları müşteri kartına ekleyebilirsiniz.",
      },
      {
        q: "İnternet kesilirse randevularımı görebilir miyim?",
        a: "Program tarayıcıda çalıştığı için bir bağlantı gerekir. Salonun internetinde sorun olduğunda takvime cep telefonunuzun mobil verisiyle ulaşabilirsiniz. Gün başında günün listesine bir göz atmak da iyi bir alışkanlıktır.",
      },
      {
        q: "Müşteri bilgilerini programda tutmak KVKK açısından uygun mu?",
        a: "Müşteri verisinin sorumlusu salonunuzdur; ister defterde ister programda tutun, KVKK yükümlülükleri geçerlidir. Programda erişimi kullanıcı bazında sınırlamak ve yedekleme genellikle kâğıda göre daha kolaydır. Ayrıntılar için Kişisel Verileri Koruma Kurumu'nun duyurularını takip edin veya bir uzmana danışın.",
      },
    ],
    related: [
      { pageKey: "appointment-calendar", label: "Randevu takvimi" },
      { pageKey: "online-booking", label: "Komisyonsuz online randevu sistemi" },
      { pageKey: "client-records", label: "Müşteri takip programı" },
    ],
  },
  // ---------------------------------------------------------------------------
  // Randevu iptal politikası ve kapora
  // ---------------------------------------------------------------------------
  {
    topic: "cancellation-policy-salon",
    lang: "tr",
    slug: "randevu-iptal-politikasi-kapora-guzellik-salonu",
    title: "Güzellik Salonunda Randevu İptal Politikası: Süreler, Kapora ve Hazır Metin",
    metaTitle: "Randevu İptal Politikası ve Kapora: Salon Rehberi",
    description:
      "Güzellik salonu için randevu iptal politikası nasıl yazılır? Ücretsiz iptal süresi, son dakika iptal ve gelmeyen müşteri ücreti, kapora ve örnek metin.",
    excerpt:
      "İptal kuralları ancak müşteri randevu almadan önce görürse ve siz her seferinde aynı şekilde uygularsanız işe yarar. Süreler, tutarlar, kapora, hazır metin ve zor konuşmalar için cümleler.",
    category: "İşletme",
    keywords: [
      "randevu iptal politikası",
      "güzellik salonu kapora",
      "randevuya gelmeyen müşteri",
      "son dakika randevu iptali",
      "salon iptal kuralları",
      "kapora iadesi salon",
      "kalıcı makyaj kapora",
    ],
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readMinutes: 8,
    answer:
      "İyi bir randevu iptal politikası, müşterinin randevuyu ne zamana kadar ücretsiz iptal edebileceğini (genellikle 24 veya 48 saat önce), son dakika iptalinde ne olacağını (çoğu salonda hizmet bedelinin yüzde 50'si veya kaporanın düşmesi) ve haber vermeden gelmeyen müşteri için kuralı açıkça söyler. Bu kurallar ancak müşteri bunları randevu almadan önce biliyorsa, yazılı olarak teyit ediliyorsa ve siz herkese aynı şekilde uyguluyorsanız işe yarar.",
    takeaways: [
      "Müşteri iptal kurallarını randevudan önce görmeli; sonradan öğrendiği kural tartışma çıkarır.",
      "Süreyi ve tutarı hizmete göre ayarlayın: 20 dakikalık kaş alma ile 3 saatlik ipek kirpik aynı kuralla yönetilmez.",
      "Kapora alacaksanız ne zaman iade edileceğini, ne zaman düşeceğini ve hizmet bedelinden düşüleceğini yazın.",
      "Her son dakika iptalini ve gelmeyen randevuyu müşteri kartına not edin; böylece tüm ekip aynı şekilde davranır.",
      "Hatırlatmalar, kolay randevu değiştirme ve bekleme listesi, hiçbir iptal ücretinin kurtaramayacağı kadar geliri korur.",
    ],
    intro: [
      "Doksan dakikalık bir cilt bakımından iki saat önce iptal eden müşteri, takviminizde neredeyse hiç dolduramayacağınız bir boşluk bırakır. Uzmanın maaşı ödenir, ürünler belki hazırlanmıştır. Ayda birkaç kez yaşandığında bu kayıp hızla binlerce liraya ulaşır. Yine de birçok salon sahibi, sadık müşterilerini kaybetmekten ya da ayıp olur diye hiçbir kural koymaz.",
      "Nazik olmakla gelirinizi korumak arasında seçim yapmak zorunda değilsiniz. Açık ve adil bir randevu iptal politikası takviminizi korur ve müşterinin de işini kolaylaştırır, çünkü kuralları baştan bilir. Bu rehberde politikaya neler yazılmalı, hangi süre ve tutarlar makul, kapora nasıl kullanılmalı ve kurallar ilişkiyi bozmadan nasıl uygulanır, adım adım anlatıyoruz. Bu yazı pratik bir rehberdir, hukuki danışmanlık değildir.",
    ],
    sections: [
      {
        heading: "Güzellik salonu son dakika iptali için ücret alabilir mi?",
        paragraphs: [
          "Genel olarak evet. Müşteri belirli bir saate randevu aldığında aranızda bir hizmet anlaşması oluşur ve siz o saati başkasına satamazsınız. Müşteri gelmezse ya da yerini dolduramayacağınız kadar geç iptal ederse, uğradığınız kaybın karşılanmasını istemek meşrudur.",
          "Burada iki nokta önemlidir. Birincisi, müşteri kuralları randevudan önce bilmelidir; sonradan çıkarılan bir ücret savunulması zor bir taleptir. İkincisi, tutar makul olmalıdır. 6502 sayılı Tüketicinin Korunması Hakkında Kanun, tüketici aleyhine dengesizlik yaratan haksız şartları geçersiz sayar. Gerçek kaybınızla, yani bloke edilen süre ve hazırlanan malzemeyle orantılı bir ücret, yüksek bir sabit cezadan çok daha sağlamdır.",
        ],
        callout:
          "Yüksek kapora almayı veya yüksek iptal ücreti uygulamayı düşünüyorsanız, metninizi bir kez bir avukata ya da meslek odanıza kontrol ettirin.",
      },
      {
        heading: "Kapora almak mı, sonradan ücret istemek mi daha doğru?",
        paragraphs: [
          "Türkiye'de özellikle kalıcı makyaj, ipek kirpik, gelin makyajı ve lazer paketlerinde kapora almak çok yaygındır. Bunun bir nedeni var: gelmeyen müşteriden sonradan ücret istemek çoğu zaman sonuçsuz kalır, küçük tutarların peşinden koşmak hem zaman hem de keyif kaybıdır. Randevu alırken ödenen kapora bu sorunu çözer ve düşünmeden alınan randevuları azaltır.",
          "Türk Borçlar Kanunu'na göre kapora (bağlanma parası), aksi kararlaştırılmadıkça hizmet bedelinden düşülür; kaporayı veren taraf anlaşmaya uymazsa kapora karşı tarafta kalır, alan taraf uymazsa iki katını iade eder. Yine de kuralı mutlaka yazılı ve açık şekilde belirtin. Kapora ayrıca randevu almayı bir adım zorlaştırır; yıllardır gelen müşterileriniz bunu güvensizlik olarak algılayabilir. Makul bir orta yol, kaporayı yalnızca riskin yüksek olduğu durumlarda istemektir:",
        ],
        bullets: [
          "İlk kez uzun veya pahalı bir işlem için randevu alan yeni müşteriler.",
          "Daha önce birden fazla kez gelmeyen ya da son dakika iptal eden müşteriler.",
          "Önceden malzeme sipariş ettiğiniz veya hazırladığınız işlemler, örneğin kalıcı makyaj pigmentleri ya da özel kirpik setleri.",
          "Çok talep gören saatler, örneğin hafta sonları, bayram öncesi ve düğün sezonu.",
        ],
      },
      {
        heading: "Randevu iptal politikasında neler yazmalı?",
        paragraphs: [
          "On saniyede anlaşılan bir kural, bir sayfalık resmi metinden çok daha iyi işler. Şu başlıkları sade bir dille yazın:",
        ],
        table: {
          headers: ["Başlık", "Ne yazılmalı", "Örnek"],
          rows: [
            ["Ücretsiz iptal", "Ne kadar önce ücretsiz iptal veya değişiklik yapılabileceği", "Randevudan 24 saat öncesine kadar"],
            ["Son dakika iptali", "Bu süre içinde ne olacağı", "Hizmet bedelinin %50'si veya kaporanın düşmesi"],
            ["Haber vermeden gelmeme", "Müşteri gelmez ve haber vermezse ne olacağı", "Kapora iade edilmez"],
            ["Geç kalma", "İşlemin ne zaman kısalacağı veya iptal edileceği", "15 dakikadan fazla gecikmede işlem kısalabilir"],
            ["Nasıl iptal edilir", "Hangi kanalın kullanılacağı", "Onay e-postasındaki bağlantı veya telefon"],
            ["İstisnalar", "Acil durumlara nasıl yaklaştığınız", "Hastalık veya acil durumda birlikte çözüm buluruz"],
            ["Kapora", "Hizmet bedelinden düşülüp düşülmeyeceği ve ne zaman yanacağı", "Bedelden düşülür, 48 saatten kısa iptalde iade edilmez"],
          ],
        },
        bullets: [
          "'Ceza' yerine 'randevu kuralları' ya da 'iptal politikası' deyin. Aynı kural bambaşka algılanır.",
          "Nedenini tek cümleyle açıklayın: o saat sadece müşteri için ayrılmıştır.",
          "Her yerde aynı metni kullanın: web sitesi, Instagram profili, randevu sayfası, onay, hatırlatma ve salon içi.",
        ],
      },
      {
        heading: "Hangi hizmette hangi süre ve ücret adil olur?",
        paragraphs: [
          "Herkese uyan tek bir rakam yoktur. Doğru kural; hizmetin takvimi ne kadar meşgul ettiğine, fiyatına ve son dakikada yerini doldurma ihtimalinize bağlıdır. Kısa bir kaş alımında boşalan saati çoğu zaman aynı gün doldurabilirsiniz; üç saatlik bir ipek kirpik uygulamasında ise bu neredeyse imkânsızdır. Bu yüzden tek bir kural yerine hizmet grubuna göre farklı süreler belirlemek hem daha adil hem de müşteriye daha kolay anlatılır. Birçok salon kademeli bir model kullanır:",
        ],
        table: {
          headers: ["Hizmet türü", "Ücretsiz iptal", "Son dakika iptali", "Gelmeme"],
          rows: [
            ["Kısa, 30 dk altı (kaş, ağda, boyama)", "12–24 saat", "Genellikle ücretsiz veya küçük sabit tutar", "%50"],
            ["Standart, 45–90 dk (cilt bakımı, manikür, masaj)", "24 saat", "%50", "%100"],
            ["Uzun veya pahalı (ipek kirpik, kalıcı makyaj, lazer paketi, gelin)", "48 saat", "Kapora yanar", "Kapora yanar"],
            ["Grup ve organizasyon randevuları", "72 saat veya daha fazla", "Anlaşmaya göre", "Kapora yanar"],
          ],
        },
        callout:
          "Son dakika iptal edilen saati başka bir müşteriyle doldurabildiyseniz ücretten vazgeçin ya da kaporayı bir sonraki randevuya aktarın. Bu hem adil hem de güven veren bir davranıştır.",
      },
      {
        heading: "Örnek randevu iptal politikası metni",
        paragraphs: [
          "Aşağıdaki metni kendi salonunuza göre uyarlayabilirsiniz. Rakamları değiştirin, tonu sıcak ama net tutun:",
          "**“Randevu saatinizi sadece sizin için ayırıyoruz. Randevunuzu 24 saat öncesine kadar ücretsiz iptal edebilir veya değiştirebilirsiniz. Daha geç iptallerde hizmet bedelinin %50'si, haber vermeden gelinmeyen randevularda tam bedel alınır. İki saatten uzun işlemlerde randevu sırasında kapora alınır; kapora hizmet bedelinden düşülür ve 48 saatten kısa süre kala yapılan iptallerde iade edilmez. 15 dakikadan fazla gecikmelerde işlem süresi kısalabilir. Gerçek bir acil durumda lütfen bizi arayın, birlikte adil bir çözüm bulalım.”**",
          "Kapora aldığınızda müşteriye tutarı, tarihi ve iade koşulunu yazılı olarak iletin ve ödeme kaydını müşteri kartında saklayın.",
        ],
      },
      {
        heading: "Müşterinin kuralları gerçekten görmesini nasıl sağlarsınız?",
        paragraphs: [
          "Tartışmaların çoğu tutar yüzünden değil, “bilmiyordum” yüzünden çıkar. Politikanızı randevu sürecinin her adımına yerleştirin:",
        ],
        steps: [
          "Web sitenizde fiyatların veya randevunun yanında yayınlayın ve online randevu sayfanızdan bağlantı verin.",
          "Uzun ve pahalı işlemlerin açıklamasında, daha sıkı kuralların geçerli olduğunu belirtin.",
          "Randevu onayında tarih, saat ve iptal yöntemiyle birlikte ana cümleyi tekrarlayın.",
          "Randevudan 24–48 saat önceki e-posta hatırlatmasında, ücretsiz iptal hâlâ mümkünken bir kez daha yazın.",
          "Telefonla alınan randevularda kuralı tek cümleyle söyleyin ve bunu müşteri kartına not edin.",
          "Resepsiyonda kısa bir versiyonu asılı tutun; kural hiçbir zaman sürpriz olmasın.",
        ],
      },
      {
        heading: "Kuralları müşteri kaybetmeden nasıl uygularsınız?",
        paragraphs: [
          "Unutmayın: amacınız para cezası toplamak değil, takviminizi korumak ve müşterinin randevusuna sahip çıkmasını sağlamaktır. Kuralı açıkça anlatan, ama gerektiğinde esneyebilen bir salon, hem sadık müşteri kazanır hem de gelirini korur.",
          "Bir kuralı adil yapan tutarlılıktır. Bir müşteriden ücret alıp diğerinden almazsanız ikisi de fark eder. Öte yandan on yıllık sadık bir müşteriye ilk kez gelmediğinde sert davranmak nadiren doğru bir karardır. Yaklaşımınızı önceden belirleyin; ruh hâlinize ya da o gün resepsiyonda kimin olduğuna bağlı kalmasın.",
        ],
        steps: [
          "Her son dakika iptalini ve gelmeyen randevuyu tarih ve nedeniyle müşteri kartına kaydedin.",
          "İyi bir müşteride ilk sefer: ücret almayın ama kuralı nazikçe hatırlatın.",
          "İkinci sefer: kuralı yazıldığı gibi uygulayın, kısa ve kibar bir mesajla.",
          "Tekrarlayan durumlarda: sonraki randevular için kapora isteyin.",
          "Ani hastalık veya kaza gibi gerçek acil durumlarda: ücret yerine yeni bir randevu önerin.",
        ],
        callout:
          "İşe yarayan bir cümle: “Bugün sizi bekledik, umarız her şey yolundadır. Randevu kurallarımızda belirttiğimiz gibi son dakika iptallerinde bedelin %50'sini alıyoruz. İsterseniz hemen yeni bir randevu ayarlayalım, perşembe günü yerimiz var.” Sakin, net ve bir sonraki randevuya odaklı.",
      },
      {
        heading: "Salon programı iptalleri azaltmaya nasıl yardımcı olur?",
        paragraphs: [
          "En iyi iptal ücreti, hiç almak zorunda kalmadığınız ücrettir. Bir randevu takip programı iptalleri önlemeye ve geriye kalanları kolayca yönetmeye yardımcı olur. Treatflow'da müşterileriniz komisyonsuz, size ait randevu bağlantısından randevu alır; her randevudan önce otomatik e-posta hatırlatması gider ve boşalan saatleri bekleme listesindeki müşterilere önerebilirsiniz. Müşteri kartındaki notlar, kimin daha önce son dakika iptal ettiğini tüm ekibe gösterir; böylece herkes kuralı aynı şekilde uygular. Veriler Frankfurt'taki AB sunucularında saklanır; KVKK kapsamında müşteri kartına yalnızca gerekli bilgileri yazmanız yeterlidir.",
          "Treatflow'u 14 gün boyunca ücretsiz ve kredi kartı olmadan deneyebilir, son dakika iptallerinin ve gelmeyen randevuların azalıp azalmadığını kendiniz görebilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Güzellik salonu ne kadar kapora alabilir?",
        a: "Kesin bir yasal oran yoktur; tutar makul olmalı ve hizmetle orantılı olmalıdır. Uygulamada birçok salon uzun ve pahalı işlemlerde hizmet bedelinin %20–50'si arasında kapora alır. Kaporanın bedelden düşüleceğini ve hangi durumda iade edilmeyeceğini önceden yazılı olarak bildirin.",
      },
      {
        q: "Müşteri randevuyu iptal ederse kapora iade edilir mi?",
        a: "Bu sizin önceden bildirdiğiniz kurallara bağlıdır. Yaygın uygulama, ücretsiz iptal süresi içinde kaporanın iade edilmesi veya yeni randevuya aktarılması, bu süre geçtikten sonra ya da haber vermeden gelinmediğinde ise iade edilmemesidir.",
      },
      {
        q: "24 saat mi, 48 saat mi ücretsiz iptal süresi?",
        a: "Standart işlemlerin çoğu için 24 saat yeterlidir. İpek kirpik, kalıcı makyaj veya gelin makyajı gibi uzun ve son dakikada doldurulması zor randevularda 48 saat daha uygundur.",
      },
      {
        q: "Müşteri kuralları bilmiyorsa ücret isteyebilir miyim?",
        a: "Zordur. Müşterinin kuralları randevudan önce gördüğünü gösteremezseniz anlaşmazlıkta zayıf kalırsınız. Kuralları randevu sırasında, onayda ve hatırlatmada mutlaka paylaşın.",
      },
      {
        q: "Hasta olduğu için gelemeyen müşteriden ücret almalı mıyım?",
        a: "Çoğu salon bu durumda ücret yerine yeni randevu önerir. Gerçek acil durumlarda anlayışlı olmak size az şeye mal olur ve sadık müşterilerinizi korur. Ücreti tekrarlayan veya açıklamasız gelmeme durumları için saklayın.",
      },
    ],
    related: [
      { pageKey: "online-booking", label: "Komisyonsuz online randevu sistemi" },
      { pageKey: "messaging", label: "Otomatik e-posta hatırlatmaları" },
      { pageKey: "appointment-calendar", label: "Randevu takvimi" },
    ],
  },
];
