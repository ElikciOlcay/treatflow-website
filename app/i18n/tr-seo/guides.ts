import type { TrGuideContent } from "@/app/components/tr-seo/TrGuideArticle";
import { TR_PATHS } from "./paths";

const DATE = "2026-09-07";

export const guideComparison2026: TrGuideContent = {
  slug: "turkiyedeki-en-iyi-guzellik-merkezi-programlari-2026",
  path: TR_PATHS.guideComparison2026,
  title: "Türkiye'deki En İyi Güzellik Merkezi Programları 2026",
  description:
    "Piyzi, İdeplan, SalonAppy, SalonRandevu, Bulut Randevu ve Treatflow: kamuya açık özelliklere göre 2026 bakışı. Yapay bir birincilik yok.",
  h1: "Türkiye'deki en iyi güzellik merkezi programları 2026",
  datePublished: DATE,
  dateModified: DATE,
  lede:
    "Bu yazı bir ödül töreni değil. Türkiye'de güzellik merkezi yazılımı arayan işletmelerin SERP'te gördüğü ürünleri, kendi sitelerinde 2026 Eylül itibarıyla anlattıkları özelliklere göre yan yana koyuyoruz. Treatflow satırında yalnızca canlı üründe olanlar var.",
  blocks: [
    {
      type: "note",
      text: "Kaynak: rakiplerin genel kullanım sayfaları (Piyzi, İdeplan, SalonAppy, SalonRandevu, Bulut Randevu). Fiyatlar sık değişir; buraya rakip fiyat yazılmadı. Kedy ve Salun için güvenilir, bu karşılaştırmaya yetecek ürün sayfası doğrulanamadı; tabloya alınmadı.",
    },
    {
      type: "h2",
      text: "Ne arıyorsunuz: randevu mu, tedavi dosyası mı?",
    },
    {
      type: "p",
      text: "Türkiye aramalarının çoğu 'güzellik merkezi programı' ve 'randevu programı' etrafında. Sitelerin kahramanı neredeyse her yerde takvim, kasa, prim ve SMS. Treatflow aynı kelimede durur ama vaat farklıdır: randevu, müşteri, dijital onam, işlem kaydı ve fotoğraf.",
    },
    {
      type: "p",
      text: "Kasa, adisyon, personel primi ve stok Türkiye'de Treatflow'da yoktur. DACH pazarına aittir. Karşılaştırmada bu satır Treatflow için 'yok' olmalıdır – 'gizli var' değil.",
    },
    {
      type: "h2",
      text: "Karşılaştırma tablosu (kamuya açık iddialar)",
    },
    {
      type: "table",
      caption:
        "Sütunlar: rakip sitelerin öne çıkardığı başlıklar. 'Evet' = sayfada açıkça anlatılıyor. 'Belirsiz' = sayfada net iddia yok. Treatflow sütunu ürün gerçeği.",
      headers: [
        "Ölçüt",
        "Treatflow",
        "Piyzi",
        "İdeplan",
        "SalonAppy",
        "SalonRandevu",
        "Bulut Randevu",
      ],
      rows: [
        ["Online randevu", "Evet (Booking)", "Evet", "Evet", "Evet", "Evet", "Evet"],
        ["Müşteri yönetimi", "Evet", "Evet", "Evet", "Evet", "Evet", "Evet"],
        ["Dijital form / onam", "Evet, imza kayda bağlı", "Belirsiz", "Belirsiz", "Belirsiz", "Belirsiz", "Belirsiz"],
        ["İşlem dokümantasyonu", "Evet, seans kaydı + sesli not", "Belirsiz", "Belirsiz", "Belirsiz", "Belirsiz", "Cilt notu / geçmiş"],
        ["Fotoğraf yönetimi", "Öncesi-sonrası işleme bağlı", "Belirsiz", "Belirsiz", "Belirsiz", "Galeri (işletme)", "Belirsiz"],
        ["Seans takibi", "Seans belgelenir; kasa paket sayacı yok", "Paket/kampanya vurgusu", "Paket/seans hakkı vurgusu", "Epilasyon seans vurgusu", "Paket yönetimi", "Paket/seans temeli"],
        ["Yapay zeka", "Sesli not → metin", "Müşteri risk / AI vurgusu", "Belirsiz", "Belirsiz", "Belirsiz", "Belirsiz"],
        ["Otomasyon", "Müşteri otomasyonları, WhatsApp+e-posta", "SMS/otomasyon vurgusu", "WhatsApp/SMS hatırlatma", "Hatırlatıcı", "SMS hatırlatma", "SMS+WhatsApp"],
        ["Çoklu personel", "Evet, roller + takvim sütunları", "Evet", "Evet", "Evet", "Evet", "Uzman/kabin"],
        ["Kasa / POS (TR)", "Yok", "Kasa vurgusu", "Kasa/prim", "Kasa", "Adisyon", "Adisyon"],
        ["Fiyat modeli", "Sabit TL abonelik, 30 gün deneme", "Abonelik (site)", "Deneme vurgusu", "Deneme vurgusu", "Paketler (site)", "Tek ürün çatısı"],
      ],
    },
    {
      type: "h2",
      text: "Kısa okuma: kim neyi optimize ediyor",
    },
    {
      type: "p",
      text: "Piyzi kendini yalnızca randevu uygulaması değil; kasa, müşteri yönetimi ve otomasyon platformu olarak konumlandırır. Yapay zekâyla müşteri kaybı tahmini sunduğunu kendi sitesinde belirtir; Treatflow'da böyle bir puanlama yoktur.",
    },
    {
      type: "p",
      text: "İdeplan güzellik salonu sayfasında WhatsApp randevu, paket/seans hakkı ve prim/kasa raporunu öne çıkarır. Kapora/Iyzico anlatımı vardır. Treatflow online kapora tahsilatı vaat etmez.",
    },
    {
      type: "p",
      text: "SalonAppy güzellik merkezi programını epilasyon seans, şube ve kasa ile satar. Treatflow şube zinciri ürünü olarak pazarlanmaz.",
    },
    {
      type: "p",
      text: "SalonRandevu (Vatan Soft) randevu + adisyon + stok + prim ve SMS hediyesi ile görünür. Treatflow SMS satmaz.",
    },
    {
      type: "p",
      text: "Bulut Randevu takvim, uzman/kabin, SMS+WhatsApp ve müşteri kartını anlatır. İşlem dokümantasyonu ve imzalı onam Treatflow kadar merkeze alınmamıştır.",
    },
    {
      type: "h2",
      text: "Treatflow ne zaman doğru tercih değil?",
    },
    {
      type: "ul",
      items: [
        "Öncelik kasa, e-arşiv, prim ve stok ise: Türkiye'de Treatflow bunları sunmaz.",
        "Öncelik ucuz SMS kontörü ve ücretsiz katman ise: başka araçlar bu işi anlatır.",
        "Öncelik onam, seans kaydı ve fotoğraf ise: Treatflow tam burada durur.",
      ],
    },
  ],
  faqs: [
    {
      question: "Türkiye'de güzellik merkezi için en iyi program hangisi?",
      answer:
        "Tek kazanan yok. Kasa ve prim istiyorsanız yerel randevu+adisyon araçları öne çıkar. Onam ve işlem kaydı istiyorsanız Treatflow'u 30 gün deneyin.",
    },
    {
      question: "Güzellik merkezi programı önerir misin?",
      answer:
        "İşletme tipi söylemeden öneri pazarlama olur. Lazer/estetik belgeleme ağırlıklıysa Treatflow; berber+kasa ağırlıklıysa bu karşılaştırma tablosundaki kasa odaklı ürünlere bakın.",
    },
  ],
  related: [
    { href: TR_PATHS.beautyCenter, label: "Güzellik merkezi programı" },
    { href: TR_PATHS.pricing, label: "Treatflow fiyatları" },
    { href: TR_PATHS.guideHowToChoose, label: "Program seçerken nelere bakmalı" },
  ],
};

export const guideHowToChoose: TrGuideContent = {
  slug: "guzellik-merkezi-programi-secerken-nelere-dikkat-edilmeli",
  path: TR_PATHS.guideHowToChoose,
  title: "Güzellik Merkezi Programı Seçerken Nelere Dikkat Edilmeli?",
  description:
    "Güzellik merkezi yazılımı alırken takvim dışında bakılacaklar: onam, seans kaydı, fotoğraf, hosting, komisyon, deneme.",
  h1: "Güzellik merkezi programı seçerken nelere dikkat edilmeli?",
  datePublished: DATE,
  dateModified: DATE,
  lede:
    "Demo gününde her takvim güzel görünür. Sözleşme bittikten sonra sizi yoran şey genelde kasa raporu değil, kayıp onam ve dağınık fotoğraftır.",
  blocks: [
    {
      type: "h2",
      text: "1. Randevu tek başına satın alma kriteri olmasın",
    },
    {
      type: "p",
      text: "Online randevu artık taban çizgisi. Sorun: randevu geldikten sonra form, imza ve işlem notunun nereye yazıldığı. Satıcıya 'randevu var mı' değil, 'bu randevu hangi müşteri kaydına nasıl bağlanıyor' diye sorun.",
    },
    {
      type: "h2",
      text: "2. Onam ve anamnez canlı demo isteyin",
    },
    {
      type: "p",
      text: "PDF yüklemek form sistemi değildir. Müşteri linki açabilmeli, imza kayda düşmeli, personel seans günü imzayı kartta görmeli. Treatflow'da örnek formları kayıt olmadan da deneyebilirsiniz.",
    },
    {
      type: "h2",
      text: "3. Fotoğraf galeri değil, seans eki olsun",
    },
    {
      type: "p",
      text: "İşletme galerisi pazarlama içindir. Lazer ve ciltte ihtiyaç, 3. seansın fotoğrafını 7. seansla karşılaştırmaktır. Görsel ziyaret satırına bağlı değilse arşiv işe yaramaz.",
    },
    {
      type: "h2",
      text: "4. Hosting ve sözleşme dili",
    },
    {
      type: "p",
      text: "Müşteri sağlık beyanı ve fotoğraf kişisel veridir. Sunucu bölgesi, yedekleme, kim veri sorumlusu net olsun. Treatflow AB (Frankfurt) barındırır, KVKK kapsamında konuşur; 'sertifikalı %100' iddiası taşımaz.",
    },
    {
      type: "h2",
      text: "5. Komisyon ve gizli kanal",
    },
    {
      type: "ol",
      items: [
        "Pazaryeri kesintisi var mı?",
        "SMS kontörü zorunlu mu?",
        "Online ödeme komisyonu yazılım fiyatının parçası mı?",
        "Deneme süresi kredi kartı istiyor mu?",
      ],
    },
    {
      type: "p",
      text: "Treatflow randevu komisyonu almaz. Hatırlatma WhatsApp ve e-posta iledir. 30 gün deneme, kredi kartı yok.",
    },
    {
      type: "h2",
      text: "6. Türkiye'de kasa ihtiyacı ayrı karar",
    },
    {
      type: "p",
      text: "Adisyon, e-arşiv, prim: birçok yerli yazılımın ana vitrini. Treatflow bunları TR'de sunmaz. İkisi birden şartsa iki araç veya kasa odaklı bir yerel ürün gerekir – bunu baştan kabul edin.",
    },
  ],
  faqs: [
    {
      question: "Güzellik merkezi programında hangi özellikler olmalı?",
      answer:
        "Randevu, müşteri kartı, dijital onam, işlem kaydı, fotoğraf, personel planı, hatırlatma. Kasa ayrı bir satın alma kararı olabilir.",
    },
  ],
  related: [
    { href: TR_PATHS.beautyCenter, label: "Güzellik merkezi programı" },
    { href: TR_PATHS.guideMustHaveFeatures, label: "Hangi özellikler olmalı" },
    { href: TR_PATHS.forms, label: "Dijital formlar" },
  ],
};

export const guideLaserChoose: TrGuideContent = {
  slug: "lazer-epilasyon-merkezi-icin-program-nasil-secilir",
  path: TR_PATHS.guideLaserChoose,
  title: "Lazer Epilasyon Merkezi İçin Program Nasıl Seçilir?",
  description:
    "Lazer stüdyosu yazılımı: seans belgeleme, onam, fotoğraf, hatırlatma. Paket kasa sayacı ile karıştırmayın.",
  h1: "Lazer epilasyon merkezi için program nasıl seçilir?",
  datePublished: DATE,
  dateModified: DATE,
  lede:
    "Lazer geliri tek seanslık ciro değil, 6–10 seanslık bir sözleşmedir. Yazılım bu sözleşmenin hafızası olmalı, yalnızca ilk randevunun saati değil.",
  blocks: [
    {
      type: "h2",
      text: "Seans belgeleme ≠ paket hakkı sayacı",
    },
    {
      type: "p",
      text: "Birçok TR yazılımı '8 seans kaldı' kasa düşümünü satar. Bu muhasebedir. Klinik ihtiyaç ise: o sekansta hangi ayar, hangi bölge, hangi reaksiyon, hangi fotoğraf. Treatflow ikincisini yapar. Birincisini (kasa paket sayacı) Türkiye'de sunmaz – bunu net yazıyoruz ki yanlış satın almayın.",
    },
    {
      type: "h2",
      text: "Onam her paketin kapısı",
    },
    {
      type: "p",
      text: "Güneş, ilaç, cilt tipi beyanı kâğıtta kalırsa 4. seans tartışması kazanılmaz. Form randevu öncesi bitmeli, imza kartta durmalı.",
    },
    {
      type: "h2",
      text: "Cihaz slotu takvimde",
    },
    {
      type: "p",
      text: "İki lazer aynı anda aynı kabine yazılmamalı. Personel veya oda sütunu olan takvim, Excel'den daha az çakışma üretir. Treatflow Booking paketinde bu sütunlar vardır.",
    },
    {
      type: "h2",
      text: "İşlem sonrası takip olmadan seans zinciri kopar",
    },
    {
      type: "p",
      text: "Hatırlatma SMS'e mahkûm değil. Treatflow WhatsApp ve e-posta kullanır. SMS kanalı yoktur.",
    },
    {
      type: "ul",
      items: [
        "Demo: bir müşteriye 3 seans yazın, 3. seans kartında 1. seans fotoğrafını açın.",
        "Demo: onamı seans gününden önce tamamlayın.",
        "Sözleşme: veri nerede, yedek var mı.",
      ],
    },
  ],
  faqs: [
    {
      question: "Lazer epilasyon merkezi için hangi program kullanılmalı?",
      answer:
        "Seans kaydı + onam + fotoğraf tutan sistem. Sadece kasa/prim arıyorsanız yerel adisyon araçları daha uygun olabilir.",
    },
    {
      question: "Lazer epilasyon müşteri takibi nasıl yapılır?",
      answer:
        "Her seans ayrı işlem satırı: tarih, not, görsel. Treatflow bunu müşteri kartında gösterir.",
    },
  ],
  related: [
    { href: TR_PATHS.laser, label: "Lazer epilasyon programı" },
    { href: TR_PATHS.crm, label: "Müşteri takip programı" },
    { href: TR_PATHS.docs, label: "İşlem dokümantasyonu" },
  ],
};

export const guideCrmHow: TrGuideContent = {
  slug: "guzellik-merkezi-musteri-takibi-nasil-yapilir",
  path: TR_PATHS.guideCrmHow,
  title: "Güzellik Merkezi Müşteri Takibi Nasıl Yapılır?",
  description:
    "Güzellik merkezinde müşteri takibi: düzenli müşteri kartı, form, işlem, fotoğraf ve işlem sonrası takip. Genel amaçlı satış CRM'i değil.",
  h1: "Güzellik merkezi müşteri takibi nasıl yapılır?",
  datePublished: DATE,
  dateModified: DATE,
  lede:
    "Takip, 'doğum günü SMS'i' değildir. Takip, dün hangi peeling'in uygulandığını bugünkü personele göstermektir.",
  blocks: [
    {
      type: "h2",
      text: "Tek kart kuralı",
    },
    {
      type: "p",
      text: "Aynı telefon iki kayıtta olmasın. Yeni randevu önce arama ile açılsın. Treatflow kartında ziyaretler listelenir; ikinci hayalet kart üretmeyin.",
    },
    {
      type: "h2",
      text: "Ziyaret = kayıt",
    },
    {
      type: "p",
      text: "Ücretsiz danışma bile bir satır olsun. Aksi halde 'geçen ay geldi' efsanesi başlar. İşlem kaydına not veya sesli not yeter.",
    },
    {
      type: "h2",
      text: "Formlar kartın eki",
    },
    {
      type: "p",
      text: "Anamnez değişince yeni form, eski form silinmez. Treatflow yanıtı müşteri kaydına bağlar.",
    },
    {
      type: "h2",
      text: "Fotoğraf izni ve dosya",
    },
    {
      type: "p",
      text: "Personel telefonu stüdyo arşivi değildir. Görsel işleme eklenir. Paylaşım için ayrı onam gerekir; yazılım bunu hatırlatır, hukuki metni sizin avukatınız yazar.",
    },
    {
      type: "ol",
      items: [
        "Resepsiyon: kartı aç, randevuyu bağla.",
        "Seans öncesi: onam tamam mı?",
        "Seans: not + fotoğraf.",
        "Çıkış: sonraki randevu veya işlem sonrası takip.",
      ],
    },
  ],
  faqs: [
    {
      question: "Güzellik merkezi müşteri takip programı hangisi?",
      answer:
        "Randevu, form ve işlemi aynı kartta tutan yazılım. Treatflow güzellik ve lazer için bu dosya modelini kullanır.",
    },
  ],
  related: [
    { href: TR_PATHS.crm, label: "Müşteri takip programı" },
    { href: TR_PATHS.beautyCenter, label: "Güzellik merkezi programı" },
    { href: TR_PATHS.guideFormsOnam, label: "Dijital form ve onam süreci" },
  ],
};

export const guideFormsOnam: TrGuideContent = {
  slug: "guzellik-merkezlerinde-dijital-form-ve-onam-sureci",
  path: TR_PATHS.guideFormsOnam,
  title: "Güzellik Merkezlerinde Dijital Form ve Onam Süreci Nasıl Yönetilir?",
  description:
    "Anamnez ve onam: randevu öncesi link, imza, müşteri kaydı. Kâğıt klasöründen çıkış.",
  h1: "Güzellik merkezlerinde dijital form ve onam süreci nasıl yönetilir?",
  datePublished: DATE,
  dateModified: DATE,
  lede:
    "Form, seans günü resepsiyonda kalem aramak değildir. Form, randevu ile aynı müşteriye giden bir adımdır.",
  blocks: [
    {
      type: "h2",
      text: "Ne zaman gönderilir?",
    },
    {
      type: "p",
      text: "İlk seans ve yeni işlem tipi. Treatflow randevu öncesi form göndermeyi destekler. Cevap ve imza kartta durur.",
    },
    {
      type: "h2",
      text: "Kağıt PDF taramak dijital onam değildir",
    },
    {
      type: "p",
      text: "Tarama, arşiv kutusunu dijitalleştirir; süreci değil. Personel 'imzaladı mı'yı karttan görmelidir. Örnek akışı /tr/try-forms adresinde deneyebilirsiniz.",
    },
    {
      type: "h2",
      text: "Lazer ve estetikte ayrı şablon",
    },
    {
      type: "p",
      text: "Cilt bakımı onamı ile lazer onamı aynı metin olmamalı. Treatflow'da şablonlar hizmete bağlanabilir. Metni avukatınızla yazın; yazılım taşıyıcıdır, hukuki içerik sizin sorumluluğunuzdadır.",
    },
    {
      type: "h2",
      text: "KVKK notu",
    },
    {
      type: "p",
      text: "Form sağlık ve görünüm verisi içerir. Treatflow veriyi AB sunucusunda tutar. Aydınlatma metni sizin sitenizde ve formunuzda durmalıdır.",
    },
  ],
  faqs: [
    {
      question: "Dijital onam yasal mı?",
      answer:
        "Türkiye'de elektronik imza ve ispat konusu işleme ve metne bağlıdır. Treatflow imzayı kaydeder; hukuki yeterlilik için kendi danışmanınıza sorun. Yazılım 'mahkeme garantisi' satmaz.",
    },
  ],
  related: [
    { href: TR_PATHS.forms, label: "Onam formları" },
    { href: TR_PATHS.tryForms, label: "Örnek formları dene" },
    { href: TR_PATHS.beautyCenter, label: "Güzellik merkezi programı" },
  ],
};

export const guideMustHaveFeatures: TrGuideContent = {
  slug: "guzellik-merkezi-yaziliminda-hangi-ozellikler-olmali",
  path: TR_PATHS.guideMustHaveFeatures,
  title: "Güzellik Merkezi Yazılımında Hangi Özellikler Olmalı?",
  description:
    "Olmazsa olmaz özellik listesi: randevu, müşteri kartı, form, işlem, fotoğraf, personel ve işlem sonrası takip. Kasa ayrı bir karardır.",
  h1: "Güzellik merkezi yazılımında hangi özellikler olmalı?",
  datePublished: DATE,
  dateModified: DATE,
  lede:
    "Özellik listesi şişirilmesin. Aşağıdaki on başlık, Treatflow'un TR'de gerçekten teslim ettiği iş ile hizalıdır. Olmayanlar ayrıca işaretli.",
  blocks: [
    {
      type: "table",
      headers: ["Özellik", "Neden şart", "Treatflow TR"],
      rows: [
        ["Randevu takvimi", "Çakışma ve uzman planı", "Booking paketi"],
        ["Online randevu", "Mesai dışı talep", "Booking, komisyonsuz"],
        ["Müşteri kartı", "Hafıza", "Evet"],
        ["Dijital form / onam", "Seans öncesi ispat", "Evet"],
        ["İşlem kaydı", "Sonraki seans kör başlamasın", "Evet, sesli not dahil"],
        ["Fotoğraf", "İlerleme", "İşleme bağlı"],
        ["Personel rolleri", "Yetki", "Evet"],
        ["Hatırlatma", "Randevuya gelmeme", "WhatsApp + e-posta"],
        ["Otomasyon", "İşlem sonrası takip", "Booking"],
        ["Yapay zeka", "Hızlı not", "Sesli not; kayıp tahmini yok"],
        ["Kasa / POS", "Adisyon", "TR'de yok"],
        ["SMS", "Kontör", "Yok"],
        ["Hediye çeki", "Satış", "TR'de yok (DACH kasa)"],
      ],
    },
    {
      type: "h2",
      text: "Önce süreç, sonra eklenti",
    },
    {
      type: "p",
      text: "Zapier Booking paketindedir. Entegrasyon, onam yokken işe yaramaz. Önce kart-form-işlem zincirini kurun.",
    },
  ],
  faqs: [
    {
      question: "Güzellik salonu randevuları nasıl yönetilir?",
      answer:
        "Tek takvim, online link, telefonla gelen kayıt. Treatflow'da online katman Booking paketindedir; belgeleme Basic'te de vardır.",
    },
  ],
  related: [
    { href: TR_PATHS.beautyCenter, label: "Güzellik merkezi programı" },
    { href: TR_PATHS.beautySalon, label: "Güzellik salonu programı" },
    { href: TR_PATHS.features, label: "Tüm özellikler" },
    { href: TR_PATHS.pricing, label: "Fiyatlar" },
  ],
};

export const trGuides: TrGuideContent[] = [
  guideComparison2026,
  guideHowToChoose,
  guideLaserChoose,
  guideCrmHow,
  guideFormsOnam,
  guideMustHaveFeatures,
];
