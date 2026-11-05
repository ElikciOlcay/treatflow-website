import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function TrSeoShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation market="tr" />
      {children}
      <Footer market="tr" />
    </div>
  );
}
