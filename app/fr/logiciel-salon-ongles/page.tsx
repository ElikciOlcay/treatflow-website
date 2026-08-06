import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getIndustryPage } from "@/app/i18n/markets/industry-pages-intl";

const content = getIndustryPage("fr", "nail-salon-software");

export const metadata = buildPageMetadata({
  pageKey: content.pageKey,
  locale: "fr",
  title: content.serviceName,
  description: content.serviceDescription,
});

export default function Page() {
  return <InternationalSeoPage content={content} />;
}
