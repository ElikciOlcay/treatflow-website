import { Link2, Clock, Globe, Ticket, Bell, ShieldCheck } from "lucide-react";
import FeaturePageEn from "../../components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "online-booking",
  locale: "en",
  title: "Online Booking for Beauty Salons",
  description:
    "Let clients book appointments 24/7 with your own booking page. Automatic reminders, discount codes and multilingual booking. Request early access.",
  keywords: [
    "online booking beauty salon",
    "salon booking software",
    "beauty studio online booking",
  ],
});

export default function EnOnlineBooking() {
  return (
    <FeaturePageEn
      eyebrow="Online booking"
      title="Let clients book around the clock"
      subtitle="Your own booking page lets clients choose a service and time whenever it suits them - even outside your opening hours."
      bullets={[
        "Personal booking link, available 24/7",
        "No commission per booking",
        "Automatic confirmations and reminders",
        "Multilingual booking page",
      ]}
      image={{
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Client booking a beauty appointment online on a smartphone",
      }}
      features={[
        { icon: Link2, title: "Your booking link", desc: "Share one link on Instagram, Google or your website - clients book in seconds." },
        { icon: Clock, title: "24/7 availability", desc: "Take bookings while you sleep. The calendar updates automatically." },
        { icon: Globe, title: "Multilingual", desc: "Your booking page adapts to your clients' language." },
        { icon: Ticket, title: "Discount codes", desc: "Run promotions and new-client offers with trackable codes." },
        { icon: Bell, title: "Fewer no-shows", desc: "Automatic reminders keep appointments and reduce cancellations." },
        { icon: ShieldCheck, title: "No commission", desc: "You keep your revenue - no per-booking fees, ever." },
      ]}
      closingTitle="Turn your profile into bookings"
      closingText="Every day your studio is closed, clients still want to book. With Treatflow's online booking you capture those requests automatically and fill your calendar without extra admin."
    />
  );
}
