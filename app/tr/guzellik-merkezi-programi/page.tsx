import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import TrMoneyPage from "@/app/components/tr-seo/TrMoneyPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { beautyCenterPage } from "@/app/i18n/tr-seo/money-pages";

export const metadata: Metadata = buildPageMetadata({
  pageKey: beautyCenterPage.pageKey,
  locale: "tr",
  title: beautyCenterPage.title,
  description: beautyCenterPage.description,
});

export default function Page() {
  return (
    <TrSeoShell>
      <TrMoneyPage content={beautyCenterPage} />
    </TrSeoShell>
  );
}
