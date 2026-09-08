import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import TrMoneyPage from "@/app/components/tr-seo/TrMoneyPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { crmPage } from "@/app/i18n/tr-seo/money-pages";

export const metadata: Metadata = buildPageMetadata({
  pageKey: crmPage.pageKey,
  locale: "tr",
  title: crmPage.title,
  description: crmPage.description,
});

export default function Page() {
  return (
    <TrSeoShell>
      <TrMoneyPage content={crmPage} />
    </TrSeoShell>
  );
}
