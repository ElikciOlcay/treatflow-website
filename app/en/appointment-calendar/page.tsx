import { CalendarDays, Clock, Users, RefreshCw, Smartphone, Bell } from "lucide-react";
import FeaturePageEn from "../../components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "appointment-calendar",
  locale: "en",
  title: "Appointment Calendar for Beauty Salons",
  description:
    "Clear appointment calendar for beauty studios – daily, weekly and monthly views, team scheduling and automatic reminders. Request early access.",
  keywords: [
    "appointment calendar beauty salon",
    "salon scheduling software",
    "beauty studio calendar",
  ],
});

export default function EnAppointmentCalendar() {
  return (
    <FeaturePageEn
      eyebrow="Appointment calendar"
      title="All your appointments, clearly organised"
      subtitle="Manage your whole studio schedule in one place - with daily, weekly and monthly views your team understands at a glance."
      bullets={[
        "Daily, weekly and monthly views",
        "Schedule multiple team members and rooms",
        "Drag & drop to reschedule in seconds",
        "Syncs automatically with online bookings",
      ]}
      image={{
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Treatflow appointment calendar with weekly planning view",
      }}
      features={[
        { icon: CalendarDays, title: "Clear views", desc: "Switch between day, week and month - always the right overview for the moment." },
        { icon: Users, title: "Team scheduling", desc: "Manage appointments for several team members, rooms and resources at once." },
        { icon: RefreshCw, title: "Always in sync", desc: "Online bookings drop straight into the calendar - no double bookings." },
        { icon: Clock, title: "Fast rescheduling", desc: "Move or extend appointments with simple drag & drop." },
        { icon: Smartphone, title: "Works on any device", desc: "Manage your calendar from desktop, tablet or phone." },
        { icon: Bell, title: "Automatic reminders", desc: "Reduce no-shows with automatic SMS and email reminders." },
      ]}
      closingTitle="Less admin, more time for your clients"
      closingText="A well-organised calendar is the heart of every studio. Treatflow keeps your schedule tidy so you and your team can focus on what matters - great treatments and happy clients."
    />
  );
}
