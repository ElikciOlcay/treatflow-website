import { FileText, Mic, Camera, History, ShieldCheck, Layers } from "lucide-react";
import FeaturePageEn from "../../components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "treatment-documentation",
  locale: "en",
  title: "Treatment Documentation for Beauty Salons",
  description:
    "Document every treatment cleanly and securely – with photos, notes and structured records. Request early access.",
  keywords: [
    "treatment documentation salon",
    "beauty treatment notes",
    "salon documentation software",
  ],
});

export default function EnTreatmentDocumentation() {
  return (
    <FeaturePageEn
      eyebrow="Treatment documentation"
      title="Document treatments the easy way"
      subtitle="Capture what you did, which products you used and how the skin reacted - with photos and voice input, right from the appointment."
      bullets={[
        "Photo and note documentation per treatment",
        "AI dictation - just speak your notes",
        "Linked to each client's history",
        "Secure, EU-hosted and encrypted",
      ]}
      image={{
        src: "/images/lifestyle/dokumentation-waehrend-behandlung.png",
        alt: "Beauty professional documenting a treatment on a tablet",
      }}
      features={[
        { icon: FileText, title: "Structured records", desc: "Document products, parameters and observations consistently." },
        { icon: Mic, title: "AI dictation", desc: "Speak your notes - the AI writes and refines them for you." },
        { icon: Camera, title: "Before & after photos", desc: "Attach images to show progress over time." },
        { icon: History, title: "Full history", desc: "Every treatment stays linked to the client record." },
        { icon: Layers, title: "Reusable templates", desc: "Standardise documentation across treatments and team members." },
        { icon: ShieldCheck, title: "Secure by design", desc: "Encrypted, EU-hosted and access-controlled." },
      ]}
      closingTitle="Professional records, without the effort"
      closingText="Good documentation protects your studio and improves your results. Treatflow makes it fast enough to actually keep up - so every treatment is recorded properly."
    />
  );
}
