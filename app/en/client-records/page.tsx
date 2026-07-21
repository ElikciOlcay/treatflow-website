import { FileText, Search, History, Camera, Lock, NotebookPen } from "lucide-react";
import type { Metadata } from "next";
import FeaturePageEn from "../../components/FeaturePageEn";

const baseUrl = "https://www.treatflow.io";

export const metadata: Metadata = {
  title: "Client Records",
  description:
    "Keep client data, treatment history, notes and photos in one secure place. GDPR-compliant digital client records for your beauty studio. Try Treatflow free for 14 days.",
  alternates: { canonical: `${baseUrl}/en/client-records` },
};

export default function EnClientRecords() {
  return (
    <FeaturePageEn
      eyebrow="Client records"
      title="Every client detail in one place"
      subtitle="Replace paper cards and scattered notes with a digital client record - complete history, notes and photos, always at your fingertips."
      bullets={[
        "Full treatment history per client",
        "Before & after photos",
        "Private notes and preferences",
        "GDPR-compliant, EU-hosted",
      ]}
      image={{
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Digital client record open in Treatflow",
      }}
      features={[
        { icon: FileText, title: "Central records", desc: "All client data, contact details and history in one profile." },
        { icon: History, title: "Treatment history", desc: "See exactly what was done, when and by whom." },
        { icon: Camera, title: "Photo documentation", desc: "Attach before & after photos directly to each client." },
        { icon: NotebookPen, title: "Notes & preferences", desc: "Remember allergies, preferences and personal details." },
        { icon: Search, title: "Find anything fast", desc: "Search clients instantly - no more flipping through paper cards." },
        { icon: Lock, title: "Secure & compliant", desc: "Encrypted, EU-hosted and GDPR-compliant by design." },
      ]}
      closingTitle="Personal service, every single time"
      closingText="When you remember every detail, clients feel truly looked after. Treatflow's digital client records help you deliver a personal experience that keeps clients coming back."
    />
  );
}
