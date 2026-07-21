import type { Metadata } from "next";
import EarlyAccessPage from "@/app/components/EarlyAccessPage";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  pageKey: "early-access",
  locale: "en",
  title: "Request early access",
  description:
    "Treatflow self-serve signup is currently available in Germany, Austria and Switzerland. Request early access for your country.",
  keywords: [
    "beauty salon software early access",
    "treatflow international",
    "beauty software waitlist",
  ],
});

export default function EnEarlyAccessPage() {
  return (
    <EarlyAccessPage
      locale="en"
      leadSource="Early Access EN"
      title="Request early access to Treatflow"
      subtitle="We are expanding beyond the German-speaking market. Tell us about your studio and we will follow up personally."
      note="Self-serve registration is currently open for Germany, Austria and Switzerland only."
      copy={{
        nameLabel: "Your name",
        studioLabel: "Studio / clinic name",
        cityLabel: "City",
        countryLabel: "Country",
        emailLabel: "Email",
        phoneLabel: "Phone (optional)",
        messageLabel: "How can we help? (optional)",
        submitLabel: "Request early access",
        successTitle: "Request received",
        successText: "Thanks! We will review your request and get back to you shortly.",
        errorText: "Something went wrong. Please try again or email hello@treatflow.io.",
        requiredHint: "Fields marked with * are required",
      }}
    />
  );
}
