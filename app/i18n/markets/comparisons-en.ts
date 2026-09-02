import type { EnComparisonContent } from "@/app/components/EnComparisonPage";

/**
 * Live EN comparisons. Additional `/en/compare/*` aliases (Phorest, Vagaro, Booksy, Pabau)
 * wait for verified feature data. Do not publish thin competitor tables.
 */
export const vsFreshaEn: EnComparisonContent = {
  competitor: "Fresha",
  title: "Treatflow vs Fresha",
  description:
    "Treatflow vs Fresha for beauty salons: studio software with documentation and consent vs a free booking tool funded by payments. Honest comparison.",
  intro:
    "Fresha is widely used as a free booking tool. Treatflow is paid studio software: you keep your clients, pay a fixed fee, and document treatments and consent in one place. No marketplace commission.",
  rows: [
    { feature: "Business model", treatflow: "SaaS, fixed monthly price", competitor: "Free core, monetised via payments", treatflowOk: true, competitorOk: false },
    { feature: "Booking commission", treatflow: "None", competitor: "No marketplace cut, payment fees possible", treatflowOk: true, competitorOk: true },
    { feature: "Client ownership", treatflow: "Studio owns the records", competitor: "Depends on how you use the platform", treatflowOk: true, competitorOk: false },
    { feature: "Consent & intake forms", treatflow: "Built-in, signed, stored on the record", competitor: "Limited / not beauty-documentation first", treatflowOk: true, competitorOk: false },
    { feature: "Treatment documentation", treatflow: "Notes, parameters, before/after photos", competitor: "Not a documentation system", treatflowOk: true, competitorOk: false },
    { feature: "Pricing", treatflow: "From €39/month, transparent", competitor: "Free entry, costs scale with payments", treatflowOk: true, competitorOk: true },
    { feature: "Hosting", treatflow: "EU servers, GDPR-ready", competitor: "International product", treatflowOk: true, competitorOk: false },
  ],
  faqs: [
    {
      q: "Is Fresha really free?",
      a: "The booking layer can be free. Fresha typically earns on card payments and extra products. Your real cost depends on turnover, not a published studio SaaS fee.",
    },
    {
      q: "What is the difference between Treatflow and Fresha?",
      a: "Treatflow is independent studio software with calendar, records, consent forms and treatment documentation. Fresha is a free-first booking product. Treatflow does not take a booking commission.",
    },
    {
      q: "Does Fresha include treatment documentation for aesthetic clinics?",
      a: "Fresha is not built as NiSV-style or photo-based treatment documentation. Treatflow stores parameters, notes and photos on the visit.",
    },
    {
      q: "Can I switch from Fresha to Treatflow?",
      a: "Yes. We help migrate client data. You can trial Treatflow for 14 days without a credit card.",
    },
  ],
  ctaTitle: "Prefer software you pay – not a cut of every visit?",
};

export const vsTreatwellEn: EnComparisonContent = {
  competitor: "Treatwell",
  title: "Treatflow vs Treatwell",
  description:
    "Treatflow vs Treatwell: keep your clients and pay a monthly fee, or list on a marketplace that takes commission. Comparison for beauty salons.",
  intro:
    "Treatwell is a marketplace. Treatflow is your own software. If you want discovery on a platform, Treatwell can help. If you want to own the relationship and avoid commission, Treatflow is the closer fit.",
  rows: [
    { feature: "Model", treatflow: "Your studio software", competitor: "Marketplace / platform", treatflowOk: true, competitorOk: false },
    { feature: "Commission", treatflow: "0% per booking", competitor: "Commission on marketplace bookings", treatflowOk: true, competitorOk: false },
    { feature: "Client data", treatflow: "Stays in your studio account", competitor: "Shared with the platform", treatflowOk: true, competitorOk: false },
    { feature: "Online booking", treatflow: "Your link, your brand", competitor: "Platform listing plus tools", treatflowOk: true, competitorOk: true },
    { feature: "Forms & documentation", treatflow: "Core product", competitor: "Not the main job of a marketplace", treatflowOk: true, competitorOk: false },
    { feature: "Price", treatflow: "€39–€59/month SaaS", competitor: "Commission-based", treatflowOk: true, competitorOk: false },
  ],
  faqs: [
    {
      q: "Is Treatflow an alternative to Treatwell without commission?",
      a: "Yes, if you want software rather than a marketplace. You share your own booking link and pay a monthly plan instead of a cut per booking.",
    },
    {
      q: "Does Treatwell include consent forms and treatment notes?",
      a: "Marketplace products focus on discovery and booking. Treatflow is built around records, forms and documentation as well as the calendar.",
    },
    {
      q: "Can I use both?",
      a: "Some studios keep a marketplace for acquisition and run operations in Treatflow. Treatflow does not require a marketplace account.",
    },
  ],
  ctaTitle: "Run bookings on your own link, not a marketplace cut",
};

export const softwareComparisonEn: EnComparisonContent = {
  competitor: "Typical tools",
  title: "Beauty salon software comparison",
  description:
    "Compare beauty salon software: marketplace vs free booking tool vs Treatflow. No commission, GDPR-ready records, consent and documentation.",
  intro:
    "Most studios mix a calendar, a booking widget, paper forms and photo folders. Treatflow replaces that stack with one app: appointments, online booking without commission, client records, forms and treatment documentation.",
  rows: [
    { feature: "All-in-one", treatflow: "Calendar, records, forms, docs", competitor: "Often several tools", treatflowOk: true, competitorOk: false },
    { feature: "Commission", treatflow: "None", competitor: "Marketplaces take a cut", treatflowOk: true, competitorOk: false },
    { feature: "GDPR / EU hosting", treatflow: "EU servers", competitor: "Varies", treatflowOk: true, competitorOk: false },
    { feature: "Consent forms", treatflow: "Digital, on the client file", competitor: "Paper or add-on", treatflowOk: true, competitorOk: false },
    { feature: "Trial", treatflow: "14 days, no card", competitor: "Varies", treatflowOk: true, competitorOk: true },
  ],
  faqs: [
    {
      q: "What software does a beauty salon actually need?",
      a: "A calendar that matches online booking, a client record, intake/consent, and a way to document treatments. Treatflow is built around that set.",
    },
    {
      q: "Best beauty salon software in Europe without booking commission?",
      a: "Treatflow is studio SaaS from Austria with EU hosting and no marketplace commission. Plans from €39/month.",
    },
  ],
  ctaTitle: "See Treatflow next to the tools you already use",
};
