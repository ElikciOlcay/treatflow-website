import NavigationEn from "@/app/components/NavigationEn";
import FooterEn from "@/app/components/FooterEn";
import { getDictionaryForMarket } from "@/app/i18n/dictionaries";

export default async function TrSeoShell({ children }: { children: React.ReactNode }) {
  const dict = await getDictionaryForMarket("tr");
  return (
    <div className="min-h-screen bg-white">
      <NavigationEn dict={dict} locale="tr" />
      {children}
      <FooterEn dict={dict} locale="tr" />
    </div>
  );
}
