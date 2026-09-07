export type DemoLocale = 'de' | 'en' | 'tr';

export const DEMO_FORMS_PATH = {
  de: '/formulare-testen',
  en: '/en/try-forms',
  tr: '/tr/try-forms',
} as const;

export const DEMO_FORMS_FEATURE_PATH = {
  de: '/formulare',
  en: '/en/forms',
  tr: '/tr/forms',
} as const;

export function getDemoCopy(locale: DemoLocale) {
  if (locale === 'tr') {
    return {
      gallery: {
        eyebrow: 'Örnek formlar',
        titleBefore: 'Formları deneyin – ',
        titleHighlight: 'kayıt gerekmez',
        intro:
          'Bunlar örnek şablonlardır; dijital anamnez, onam ve imzanın Treatflow\'da nasıl durduğunu gösterir. Kendi formlarınızı üreticiyle oluşturursunuz – veya birlikte kurarız.',
        points: [
          'Yalnızca örnek şablonlar',
          'Kendi formunuzu üreticiyle oluşturun',
          'Kurulumda birlikte hazırlarız',
          'Hiçbir şey kaydedilmez',
        ],
        noticeTitle: 'Yönlendirme için örnek şablonlar',
        noticeText:
          'Aşağıdaki formlar dijital ön kaydın nasıl işlediğini gösterir – anamnez, onam ve imza. Salonunuzdaki formları Türkçe üreticiyle veya birlikte oluşturursunuz. Örnek soru metinleri İngilizce kalabilir.',
        generatorTitle: 'Kendi formunuzu üreticiyle oluşturun',
        generatorText:
          'Bir işlemi kendi cümlelerinizle yazın. Yapay zeka alanları kurar; sonrasında her şeyi düzenlersiniz.',
        generatorCta: 'Üretici nasıl çalışır',
        supportTitle: 'Yeni formları birlikte kurarız',
        supportText:
          'İşlemleriniz için anamnez, onam veya bakım formu mu lazım? Kurulumda birlikte hazırlarız.',
        supportCta: 'Kurulum randevusu alın',
        cardsHeading: 'Bir örnek form açın',
        fillCta: 'Şimdi doldur',
        pagesLabel: (count: number) => (count === 1 ? '1 sayfa' : `${count} sayfa`),
        difficulty: {
          einfach: 'Hızlı doldurulur',
          mittel: 'Onam içerir',
          komplex: 'Tam anamnez',
        } as Record<string, string>,
        bottomLock: 'Demo hiçbir şey kaydetmez',
        bottomTitle: 'Formları salonunuzda kullanmaya hazır mısınız?',
        bottomText:
          'Bu örnekler bir başlangıçtır. Şablonları uyarlayın, linkle gönderin veya yeni formları birlikte kuralım – 30 gün ücretsiz.',
        trialCta: '30 gün ücretsiz deneyin',
        moreCta: 'Formlar hakkında',
      },
      player: {
        allTemplates: 'Tüm örnekler',
        demoBadge: 'Demo – hiçbir şey kaydedilmez',
        banner:
          'Bu bir örnek formdur. Müşterinin ön kayıtta gördüğünü gösterir. Cevaplar bu tarayıcıda kalır, Treatflow\'a gönderilmez.',
        requiredCheckbox: 'Lütfen en az bir seçenek işaretleyin.',
        requiredField: 'Lütfen bu alanı doldurun.',
        requiredSignature: 'Lütfen burayı imzalayın.',
        completedNote: 'Demo bitti – hiçbir şey kaydedilmedi.',
        completedFallback:
          'Tamamlanan form daha sonra müşteri kaydında böyle durur – imza ve zaman damgasıyla.',
        doneTitle: 'Müşteri ön kaydı böyle biter',
        doneText:
          'Treatflow\'da şablonları uyarlar, link veya QR ile gönderir ya da üreticiyle yeni form oluşturursunuz. Kurulumda da yardımcı oluruz.',
        trialCta: '30 gün ücretsiz deneyin',
        moreSamples: 'Daha fazla örnek aç',
        signatureSection: 'İmza',
        signHint: 'Parmak veya fareyle imzalayın',
        clear: 'Temizle',
        signHere: 'Burayı imzalayın',
        back: 'Geri',
        next: 'Devam',
        submit: 'Gönder',
        restart: 'Yeniden doldur',
        drawingSkip:
          'Demoda yok. Treatflow\'da müşteri burada şablon üzerine çizebilir.',
        fileSkip: 'Demoda yok. Treatflow\'da müşteri burada dosya yükleyebilir.',
        defaultSignature: 'Müşteri imzası',
        done: 'Tamam',
      },
      meta: {
        galleryTitle: 'Kayıt olmadan örnek formları deneyin',
        galleryDescription:
          'Treatflow örnek şablonlarını açın ve doldurun – hesap gerekmez. Kendi formlarınızı üreticiyle oluşturun veya birlikte kuralım.',
        playerTitle: (name: string) => `${name} deneyin`,
        playerDescription: (description: string) =>
          `${description} Örnek form – kayıt yok, hiçbir şey kaydedilmez.`,
        notFound: 'Form bulunamadı',
      },
    };
  }

  if (locale === 'en') {
    return {
      gallery: {
        eyebrow: 'Sample forms',
        titleBefore: 'Try forms – ',
        titleHighlight: 'no sign-up needed',
        intro:
          'These are sample templates so you can feel digital intake, consent and signature in Treatflow. Build your own forms with the form generator – or we help you set them up.',
        points: [
          'Sample templates only',
          'Create your own with the generator',
          'We help you set up new forms',
          'Nothing is saved',
        ],
        noticeTitle: 'Sample templates for orientation',
        noticeText:
          'The forms below show how digital check-in works in Treatflow – intake, consent and signature. You create forms for your studio with the AI generator, or we set them up together with you.',
        generatorTitle: 'Create your own with the form generator',
        generatorText:
          'Describe a treatment in your own words. The AI builds the fields; you can edit everything afterwards.',
        generatorCta: 'How the generator works',
        supportTitle: 'We help you set up new forms',
        supportText:
          'Need intake, consent or aftercare forms for your treatments? We set them up with you during onboarding.',
        supportCta: 'Book a walkthrough',
        cardsHeading: 'Open a sample form',
        fillCta: 'Fill in now',
        pagesLabel: (count: number) => (count === 1 ? '1 page' : `${count} pages`),
        difficulty: {
          einfach: 'Quick to complete',
          mittel: 'Includes consent',
          komplex: 'Full intake',
        } as Record<string, string>,
        bottomLock: 'The demo does not save anything',
        bottomTitle: 'Ready to use forms in your studio?',
        bottomText:
          'These samples are a starting point. Adapt templates, send them by link, or we help you create new forms – 14 days free.',
        trialCta: 'Start 14-day free trial',
        moreCta: 'More about forms',
      },
      player: {
        allTemplates: 'All samples',
        demoBadge: 'Demo – nothing is saved',
        banner:
          'This is a sample form. It shows what clients see at check-in. Answers stay in this browser and are not sent to Treatflow.',
        requiredCheckbox: 'Please select at least one option.',
        requiredField: 'Please fill in this field.',
        requiredSignature: 'Please sign here.',
        completedNote: 'Demo finished – nothing was saved.',
        completedFallback:
          'This is how the completed form later sits on the client record – with signature and timestamp.',
        doneTitle: 'That was your client check-in',
        doneText:
          'In Treatflow you adapt templates, send them by link or QR code, or create new forms with the generator. We can also set them up with you.',
        trialCta: 'Start 14-day free trial',
        moreSamples: 'Open more samples',
        signatureSection: 'Signature',
        signHint: 'Sign with finger or mouse',
        clear: 'Clear',
        signHere: 'Sign here',
        back: 'Back',
        next: 'Continue',
        submit: 'Submit',
        restart: 'Fill in again',
        drawingSkip:
          'Not available in the demo. In Treatflow, clients can sketch directly on a template here.',
        fileSkip: 'Not available in the demo. In Treatflow, clients can upload files here.',
        defaultSignature: 'Client signature',
        done: 'Done',
      },
      meta: {
        galleryTitle: 'Try sample forms without signing up',
        galleryDescription:
          'Open Treatflow sample templates and fill them in – no account. Create your own with the form generator, or we help you set up new forms.',
        playerTitle: (name: string) => `Try ${name}`,
        playerDescription: (description: string) =>
          `${description} Sample form – no sign-up, nothing is saved.`,
        notFound: 'Form not found',
      },
    };
  }

  return {
    gallery: {
      eyebrow: 'Beispiel-Formulare',
      titleBefore: 'Formulare testen – ',
      titleHighlight: 'ohne dich anzumelden',
      intro:
        'Die Formulare hier sind Beispiele. So erlebst du digitale Anamnese, Aufklärung und Unterschrift im Check-in. Eigene Formulare erstellst du mit dem Formular-Generator – oder wir legen sie mit dir an.',
      points: [
        'Nur Beispiele zum Ausprobieren',
        'Eigene Formulare mit dem Generator',
        'Wir helfen beim Anlegen',
        'Nichts wird gespeichert',
      ],
      noticeTitle: 'Musterformulare zur Orientierung',
      noticeText:
        'Die folgenden Vorlagen zeigen, wie der digitale Check-in in Treatflow abläuft – Anamnese, Aufklärung und Unterschrift. Formulare für dein Studio erstellst du mit dem KI-Generator, oder wir richten sie gemeinsam mit dir ein.',
      generatorTitle: 'Eigene Formulare mit dem Generator erstellen',
      generatorText:
        'Beschreibe eine Behandlung in eigenen Worten. Die KI baut die Felder – danach kannst du alles anpassen.',
      generatorCta: 'So funktioniert der Generator',
      supportTitle: 'Wir legen Formulare mit dir an',
      supportText:
        'Du brauchst Anamnese, Einwilligung oder Nachsorge für deine Behandlungen? Wir richten die Formulare mit dir ein.',
      supportCta: 'Beratung buchen',
      cardsHeading: 'Beispiel öffnen',
      fillCta: 'Jetzt ausfüllen',
      pagesLabel: (count: number) => (count === 1 ? '1 Seite' : `${count} Seiten`),
      difficulty: {
        einfach: 'Schnell ausgefüllt',
        mittel: 'Mit Aufklärung',
        komplex: 'Vollständige Anamnese',
      } as Record<string, string>,
      bottomLock: 'Die Demo speichert nichts',
      bottomTitle: 'Bereit, Formulare im eigenen Studio zu nutzen?',
      bottomText:
        'Die Beispiele sind der Einstieg. Vorlagen anpassen, per Link versenden oder neue Formulare mit uns anlegen – 14 Tage kostenlos.',
      trialCta: '14 Tage kostenlos testen',
      moreCta: 'Mehr zu Formularen',
    },
    player: {
      allTemplates: 'Alle Beispiele',
      demoBadge: 'Demo – nichts wird gespeichert',
      banner:
        'Das ist ein Beispiel-Formular. So sehen deine Kundinnen den Check-in. Angaben bleiben nur in diesem Browser und werden nicht an Treatflow gesendet.',
      requiredCheckbox: 'Bitte mindestens eine Option auswählen.',
      requiredField: 'Bitte dieses Feld ausfüllen.',
      requiredSignature: 'Bitte hier unterschreiben.',
      completedNote: 'Demo abgeschlossen – es wurde nichts gespeichert.',
      completedFallback:
        'Genau so landet das ausgefüllte Formular später in der Kundenkartei – mit Unterschrift und Zeitstempel.',
      doneTitle: 'Das war der Check-in deiner Kundinnen',
      doneText:
        'In Treatflow passt du Vorlagen an, sendest sie per Link oder QR-Code oder erstellst neue Formulare mit dem Generator. Wir legen sie auch gerne mit dir an.',
      trialCta: '14 Tage kostenlos testen',
      moreSamples: 'Weitere Beispiele öffnen',
      signatureSection: 'Unterschrift',
      signHint: 'Mit Finger oder Maus unterschreiben',
      clear: 'Löschen',
      signHere: 'Hier unterschreiben',
      back: 'Zurück',
      next: 'Weiter',
      submit: 'Absenden',
      restart: 'Nochmal ausfüllen',
      drawingSkip:
        'In der Demo nicht verfügbar. In Treatflow können Kundinnen hier direkt auf einer Vorlage skizzieren.',
      fileSkip:
        'In der Demo nicht verfügbar. In Treatflow können Kundinnen hier Dateien hochladen.',
      defaultSignature: 'Unterschrift Kundin',
      done: 'Fertig',
    },
    meta: {
      galleryTitle: 'Beispiel-Formulare ohne Anmeldung testen',
      galleryDescription:
        'Treatflow-Beispielformulare öffnen und ausfüllen – ohne Account. Eigene Formulare erstellst du mit dem Formular-Generator, oder wir helfen beim Anlegen.',
      playerTitle: (name: string) => `${name} live testen`,
      playerDescription: (description: string) =>
        `${description} Beispiel-Formular – ohne Anmeldung, nichts wird gespeichert.`,
      notFound: 'Formular nicht gefunden',
    },
  };
}

export type DemoCopy = ReturnType<typeof getDemoCopy>;

const BASE_URL = 'https://www.treatflow.io';

export function demoFormHreflang(slug?: string) {
  const de = slug ? `${BASE_URL}/formulare-testen/${slug}` : `${BASE_URL}/formulare-testen`;
  const en = slug ? `${BASE_URL}/en/try-forms/${slug}` : `${BASE_URL}/en/try-forms`;
  const tr = slug ? `${BASE_URL}/tr/try-forms/${slug}` : `${BASE_URL}/tr/try-forms`;
  return {
    canonical: de,
    languages: {
      de,
      en,
      tr,
      'x-default': de,
    },
  };
}

export function demoFormHreflangEn(slug?: string) {
  const de = slug ? `${BASE_URL}/formulare-testen/${slug}` : `${BASE_URL}/formulare-testen`;
  const en = slug ? `${BASE_URL}/en/try-forms/${slug}` : `${BASE_URL}/en/try-forms`;
  const tr = slug ? `${BASE_URL}/tr/try-forms/${slug}` : `${BASE_URL}/tr/try-forms`;
  return {
    canonical: en,
    languages: {
      de,
      en,
      tr,
      'x-default': de,
    },
  };
}

export function demoFormHreflangTr(slug?: string) {
  const de = slug ? `${BASE_URL}/formulare-testen/${slug}` : `${BASE_URL}/formulare-testen`;
  const en = slug ? `${BASE_URL}/en/try-forms/${slug}` : `${BASE_URL}/en/try-forms`;
  const tr = slug ? `${BASE_URL}/tr/try-forms/${slug}` : `${BASE_URL}/tr/try-forms`;
  return {
    canonical: tr,
    languages: {
      de,
      en,
      tr,
      'x-default': de,
    },
  };
}
