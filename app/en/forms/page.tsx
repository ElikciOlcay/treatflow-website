import { ClipboardCheck, PenLine, Send, Smartphone, ShieldCheck, FileSignature } from "lucide-react";
import type { Metadata } from "next";
import FeaturePageEn from "../../components/FeaturePageEn";

const baseUrl = "https://www.treatflow.io";

export const metadata: Metadata = {
  title: "Digital Forms",
  description:
    "Digital intake and consent forms your clients fill in before the appointment. Legally sound signatures, no paperwork. Try Treatflow free for 14 days.",
  alternates: { canonical: `${baseUrl}/en/forms` },
};

export default function EnForms() {
  return (
    <FeaturePageEn
      eyebrow="Forms"
      title="Intake & consent, fully digital"
      subtitle="Send intake and consent forms ahead of the appointment. Clients fill them in on their phone - you start on time, with everything ready."
      bullets={[
        "Clients complete forms before they arrive",
        "Digital signatures on any device",
        "Reusable templates for every treatment",
        "Stored securely with the client record",
      ]}
      image={{
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Client filling in a digital consent form on a tablet",
      }}
      features={[
        { icon: Send, title: "Send in advance", desc: "Share a form link so clients complete it before the appointment." },
        { icon: Smartphone, title: "Fill in anywhere", desc: "Forms work perfectly on phone, tablet and desktop." },
        { icon: FileSignature, title: "Digital signatures", desc: "Capture legally sound consent with an on-screen signature." },
        { icon: ClipboardCheck, title: "Ready-made templates", desc: "Start from templates for intake, consent and aftercare." },
        { icon: PenLine, title: "Fully customisable", desc: "Adapt every form to your treatments and wording." },
        { icon: ShieldCheck, title: "Safely stored", desc: "Completed forms attach automatically to the client record." },
      ]}
      closingTitle="Start every appointment prepared"
      closingText="No more clipboards and paper stacks. Digital forms save time at reception, reduce mistakes and keep your documentation clean and complete."
    />
  );
}
