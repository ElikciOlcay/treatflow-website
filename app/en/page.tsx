import { buildPageMetadata } from "@/app/i18n/seo";
import HomePageIntl from "@/app/components/HomePageIntl";
import { enHomePage } from "@/app/i18n/markets/home-pages";

export const metadata = buildPageMetadata({
  pageKey: "home",
  locale: "en",
  title: "Software for Beauty Salons & Aesthetic Clinics",
  description:
    "Beauty salon and aesthetic clinic software for appointments, online booking, client records, consent forms and treatment documentation – all in one app. No commission, GDPR-compliant.",
});

export default function EnHome() {
  return <HomePageIntl content={enHomePage} />;
}
