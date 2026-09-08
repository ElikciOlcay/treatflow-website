import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import TrMoneyPage from "@/app/components/tr-seo/TrMoneyPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { beautySalonPage } from "@/app/i18n/tr-seo/money-pages";

export const metadata: Metadata = buildPageMetadata({
  pageKey: beautySalonPage.pageKey,
  locale: "tr",
  title: beautySalonPage.title,
  description: beautySalonPage.description,
});

export default function Page() {
  return (
    <TrSeoShell>
      <TrMoneyPage content={beautySalonPage} />
    </TrSeoShell>
  );
}
