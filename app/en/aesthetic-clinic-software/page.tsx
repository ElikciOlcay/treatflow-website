import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { getGlobalEnPage } from "@/app/i18n/markets/global-en-pages";
import { buildPageMetadata } from "@/app/i18n/seo";

const content = getGlobalEnPage("aesthetic-clinic-software");

export const metadata = buildPageMetadata({
  pageKey: content.pageKey,
  locale: "en",
  title: "Aesthetic Clinic Software | Treatflow",
  description:
    "Software for aesthetic clinics: treatment documentation, consent forms, client records and online booking. GDPR-compliant.",
  keywords: [
    "aesthetic clinic software",
    "medical aesthetics software",
    "treatment documentation clinic",
  ],
});

export default function Page() {
  return <InternationalSeoPage content={content} />;
}
