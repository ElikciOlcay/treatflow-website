import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";

export const metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "it",
  title: "Prezzi",
  description:
    "Prezzi trasparenti di Treatflow: Basic da 39 EUR/mese, Booking da 59 EUR/mese. Richiedi l'accesso anticipato per l'Italia.",
});

export default function ItPricingPage() {
  return (
    <PricingPageIntl
      content={{
        title: "Prezzi semplici e trasparenti",
        subtitle:
          "La registrazione diretta è disponibile in Germania, Austria e Svizzera. Negli altri Paesi richiedi l'accesso anticipato.",
        monthLabel: "/ mese",
        earlyAccessHref: "/it/accesso-anticipato",
        ctaLabel: "Richiedi accesso anticipato",
        plans: [
          {
            name: "Basic",
            price: "39",
            description: "Perfetto per piccoli centri e professionisti singoli.",
            features: [
              "Calendario appuntamenti",
              "Schede clienti digitali",
              "Anamnesi e consensi",
              "Documentazione trattamenti",
              "Supporto personale",
            ],
            highlighted: false,
          },
          {
            name: "Booking",
            price: "59",
            description: "Ideale per centri in crescita con prenotazioni online.",
            features: [
              "Tutto di Basic",
              "Pagina di prenotazione online 24/7",
              "Promemoria SMS ed email",
              "Codici sconto",
              "Prenotazione multilingue",
            ],
            highlighted: true,
          },
        ],
      }}
    />
  );
}
