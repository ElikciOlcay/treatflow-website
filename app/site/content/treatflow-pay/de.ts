import type { TreatflowPayContent } from "./types";

export const treatflowPayDe: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – Anzahlung und Vollzahlung bei der Online-Buchung",
    description:
      "Treatflow Pay: Kundinnen zahlen Anzahlung oder den vollen Preis direkt bei der Online-Buchung. Pro Leistung einstellbar, 2,69 % pro Transaktion.",
    keywords: [
      "Treatflow Pay",
      "Anzahlung Online-Buchung",
      "Online-Zahlung Kosmetikstudio",
      "Anzahlungsfunktion Kosmetikstudio",
      "Vorauszahlung Terminbuchung",
      "Stripe Zahlung Studio",
    ],
    openGraph: {
      title: "Treatflow Pay – Anzahlung und Vollzahlung bei der Online-Buchung",
      description: "Anzahlung oder Vollzahlung direkt beim Buchen. Pro Leistung einstellbar, 2,69 % pro Transaktion.",
      image: { url: "/images/product-updates/treatflow-pay.png", alt: "Treatflow Pay – Anzahlung oder Vollzahlung" },
    },
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – Anzahlung und Vollzahlung bei der Online-Buchung",
      description:
        "Treatflow Pay: Kundinnen zahlen Anzahlung oder den vollen Preis direkt bei der Online-Buchung. Pro Leistung einstellbar, 2,69 % pro Transaktion.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Anzahlung oder Vollzahlung ", highlight: "beim Buchen" },
    description: "Lege pro Leistung fest, ob die Kundin eine Anzahlung, den vollen Preis oder nichts online zahlt.",
    chips: ["Pro Leistung", "Karte, Apple Pay, Google Pay", "2,69 %"],
    secondaryCta: { label: "Zur Online-Buchung", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Was ist Treatflow Pay?",
        answer:
          "Treatflow Pay ist die Online-Zahlung bei der Terminbuchung. Pro Leistung kann das Studio keine Zahlung, eine Anzahlung in Prozent oder als Betrag, oder die Vollzahlung verlangen. Bezahlt wird per Kredit- oder Debitkarte, dazu Apple Pay und Google Pay im Stripe-Checkout. Die Gebühr beträgt 2,69 % pro Transaktion.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – Anzahlung oder Vollzahlung bei der Online-Buchung",
    },
  },
  understand: {
    title: "Weniger Ausfälle, klarer Zahlungseingang",
    description: "Du entscheidest je Behandlung, was online fällig ist. Die Kundin bezahlt direkt im Buchungsablauf.",
    items: [
      {
        icon: "percent",
        title: "Pro Leistung festlegen",
        text: "Keine Online-Zahlung, Anzahlung oder Vollzahlung. Die Anzahlung ist ein Prozentsatz oder ein fester Euro-Betrag.",
      },
      {
        icon: "credit-card",
        title: "Bezahlen beim Buchen",
        text: "Kredit- und Debitkarte im Stripe-Checkout. Apple Pay und Google Pay, wenn das Gerät der Kundin sie anbietet.",
      },
      {
        icon: "banknote",
        title: "2,69 % pro Transaktion",
        text: "Eine Gebühr, all-in. Keine weitere Treatflow-Gebühr auf die Zahlung.",
      },
    ],
  },
  howItWorks: {
    description: "Einmal verbinden, danach je Leistung festlegen.",
    steps: [
      { title: "Treatflow Pay verbinden", text: "Unter Apps richtest du Treatflow Pay ein und verbindest dein Stripe-Konto. Erst danach kann bei der Buchung kassiert werden." },
      { title: "Je Leistung wählen", text: "Bei jeder Behandlung: keine Online-Zahlung, Anzahlung in Prozent oder als Betrag, oder den vollen Preis." },
      { title: "Kund:in bezahlt", text: "Die Buchung wird mit der Zahlung abgeschlossen. Bei einer Anzahlung bleibt der Rest vor Ort." },
    ],
  },
  cards: {
    title: "Alle Möglichkeiten",
    description: "Das stellt Treatflow Pay bei der Online-Buchung bereit.",
    items: [
      { icon: "wallet", title: "Keine Zahlung, Anzahlung oder Vollzahlung", text: "Jede Leistung hat einen eigenen Modus. Leistungen ohne Online-Zahlung bleiben wie bisher buchbar.", points: ["Keine Online-Zahlung", "Anzahlung", "Vollzahlung"] },
      { icon: "percent", title: "Anzahlung in Prozent", text: "Zum Beispiel 30 % des Leistungspreises. Der Satz gilt für diese Behandlung.", points: ["Prozent vom Preis", "Pro Leistung", "Rest vor Ort"] },
      { icon: "banknote", title: "Anzahlung als Betrag", text: "Ein fester Euro-Betrag, höchstens der Preis der Leistung.", points: ["Fester Betrag", "Gedeckelt auf den Preis", "Rest vor Ort"] },
      { icon: "credit-card", title: "Karte und Wallets", text: "Zahlung im Stripe-Checkout mit Karte, Apple Pay und Google Pay.", points: ["Kredit- und Debitkarte", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69 % all-in", text: "Eine Gebühr pro Transaktion. Mindestbetrag 0,50 €.", points: ["2,69 % pro Zahlung", "Ab 0,50 €", "All-in"] },
      { icon: "layers", title: "Mehrere Leistungen", text: "Beträge einer Buchung werden zusammengerechnet, höchstens bis zum Buchungspreis.", points: ["Summe der Leistungen", "Gedeckelt auf den Preis", "Pro Leistung einstellbar"] },
    ],
  },
  faq: {
    title: "Häufige Fragen zu Treatflow Pay",
    items: [
      {
        question: "Was kann ich mit Treatflow Pay einstellen?",
        answer:
          "Pro Leistung wählst du: keine Online-Zahlung, eine Anzahlung oder die Vollzahlung. Die Anzahlung ist ein Prozentsatz oder ein fester Betrag. Bucht die Kundin mehrere Leistungen, werden die fälligen Beträge addiert, höchstens bis zum Preis der Buchung.",
      },
      {
        question: "Welche Zahlarten gibt es?",
        answer:
          "Die Kundin bezahlt im Stripe-Checkout mit Kredit- oder Debitkarte. Apple Pay und Google Pay erscheinen dort, wenn ihr Gerät sie anbietet.",
      },
      {
        question: "Was kostet Treatflow Pay?",
        answer: "2,69 % pro Transaktion, all-in. Es gibt keine weitere Treatflow-Gebühr auf die Zahlung. Der Mindestbetrag liegt bei 0,50 €.",
      },
      {
        question: "Ersetzt Treatflow Pay die Kasse oder SumUp?",
        answer:
          "Nein. Treatflow Pay gilt für die Online-Buchung. Kartenzahlung im Studio läuft weiter über die Kasse, zum Beispiel mit SumUp.",
        feature: "pos",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Online-Buchungen", description: "Buchungslink mit Treatflow Pay" },
      { href: { page: "point-of-sale" }, title: "Kassensystem", description: "Zahlung im Studio", feature: "pos" },
      { href: { page: "integrations" }, title: "Integrationen", description: "Stripe, SumUp und mehr" },
    ],
  },
  cta: {
    title: "Anzahlung direkt bei der Buchung",
    description:
      "14 Tage kostenlos testen. Treatflow Pay verbindest du danach unter Apps, die Gebühr fällt nur bei einer echten Zahlung an.",
    secondary: { label: "Zur Online-Buchung", href: { page: "online-booking" } },
  },
};
