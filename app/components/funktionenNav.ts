import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Users,
  FileText,
  ClipboardCheck,
  Link2,
  Bell,
  Shield,
  ShoppingBag,
  Receipt,
  Gift,
  Plug,
} from "lucide-react";

export type FunktionenNavItem = {
  href: string;
  label: string;
  desc: string;
  icon: LucideIcon;
  color: string;
};

export type FunktionenNavGroup = {
  title: string;
  items: FunktionenNavItem[];
};

export const funktionenGroups: FunktionenNavGroup[] = [
  {
    title: "Termine",
    items: [
      {
        href: "/terminkalender",
        label: "Terminkalender",
        desc: "Tages-, Wochen- und Monatsansicht",
        icon: Calendar,
        color: "text-indigo-600 bg-indigo-100",
      },
      {
        href: "/online-buchungen",
        label: "Online-Buchungen",
        desc: "Persönlicher Buchungslink 24/7",
        icon: Link2,
        color: "text-rose-600 bg-rose-100",
      },
      {
        href: "/nachrichtenautomatisierung",
        label: "Nachrichten",
        desc: "E-Mail und SMS automatisiert",
        icon: Bell,
        color: "text-purple-600 bg-purple-100",
      },
    ],
  },
  {
    title: "Kunden",
    items: [
      {
        href: "/kundenverwaltung",
        label: "Kundenverwaltung",
        desc: "Kundenprofile und Behandlungshistorie",
        icon: Users,
        color: "text-emerald-600 bg-emerald-100",
      },
      {
        href: "/formulare",
        label: "Formulare",
        desc: "Digitale Anamnese und Einwilligungen",
        icon: ClipboardCheck,
        color: "text-orange-600 bg-orange-100",
      },
      {
        href: "/behandlungsdokumentation",
        label: "Dokumentation",
        desc: "Behandlungen digital festhalten",
        icon: FileText,
        color: "text-blue-600 bg-blue-100",
      },
      {
        href: "/nisv-dokumentation",
        label: "NiSV-Dokumentation",
        desc: "Konform dokumentieren",
        icon: Shield,
        color: "text-teal-600 bg-teal-100",
      },
    ],
  },
  {
    title: "Kasse & Verkauf",
    items: [
      {
        href: "/kassensystem-kosmetikstudio",
        label: "Kassensystem",
        desc: "TSE- & RKSV-konform kassieren",
        icon: Receipt,
        color: "text-green-600 bg-green-100",
      },
      {
        href: "/gutscheine-kosmetikstudio",
        label: "Gutscheine",
        desc: "Verkaufen, einlösen, Restwert",
        icon: Gift,
        color: "text-purple-600 bg-purple-100",
      },
      {
        href: "/shop",
        label: "Shop",
        desc: "Produktverkauf und Lagerverwaltung",
        icon: ShoppingBag,
        color: "text-amber-600 bg-amber-100",
      },
      {
        href: "/integrationen",
        label: "Integrationen",
        desc: "Lexware, Google Kalender, Zapier, SumUp u. m.",
        icon: Plug,
        color: "text-indigo-600 bg-indigo-100",
      },
    ],
  },
];
