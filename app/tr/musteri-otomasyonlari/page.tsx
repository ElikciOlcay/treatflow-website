import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import ClientWorkflowsPage from "@/app/site/pages/ClientWorkflowsPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getClientWorkflowsContent } from "@/app/site/content/client-workflows";

const { meta } = getClientWorkflowsContent("tr");

export const metadata: Metadata = buildPageMetadata({
  pageKey: "customer-workflows",
  locale: "tr",
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
});

/** Gleiche Seite wie DE/[market], Inhalte aus app/site/content/client-workflows/tr.ts */
export default function Page() {
  return (
    <TrSeoShell>
      <ClientWorkflowsPage market="tr" />
    </TrSeoShell>
  );
}
