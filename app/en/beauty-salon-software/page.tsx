import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { getGlobalEnPage } from "@/app/i18n/markets/global-en-pages";
import { buildPageMetadata } from "@/app/i18n/seo";

const content = getGlobalEnPage("beauty-salon-software");

export const metadata = buildPageMetadata({
  pageKey: content.pageKey,
  locale: "en",
  title: "Beauty Salon Software | Treatflow",
  description:
    "Beauty salon software with online booking, client records, consent forms and treatment documentation. GDPR-compliant, 14-day free trial.",
  keywords: [
    "beauty salon software",
    "salon management software",
    "online booking beauty salon",
    "client management salon",
  ],
});

export default function Page() {
  return <InternationalSeoPage content={content} />;
}
