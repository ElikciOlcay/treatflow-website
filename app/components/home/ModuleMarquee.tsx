import {
  Bell,
  CalendarDays,
  Camera,
  ClipboardList,
  FileSignature,
  Gift,
  Globe,
  Link2,
  Receipt,
  ShoppingBag,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Item = { label: string; Icon: LucideIcon; color: string };

const MODULES: Item[] = [
  { label: "Terminkalender", Icon: CalendarDays, color: "text-indigo-500" },
  { label: "Online-Buchung", Icon: Globe, color: "text-sky-500" },
  { label: "Kundenkartei", Icon: Users, color: "text-violet-500" },
  { label: "Formulare", Icon: FileSignature, color: "text-rose-500" },
  { label: "Behandlungsdoku", Icon: Camera, color: "text-pink-500" },
  { label: "Erinnerungen", Icon: Bell, color: "text-amber-500" },
  { label: "Kasse", Icon: Receipt, color: "text-emerald-500" },
  { label: "Gutscheine", Icon: Gift, color: "text-orange-500" },
  { label: "Shop", Icon: ShoppingBag, color: "text-teal-500" },
  { label: "Aufgaben", Icon: ClipboardList, color: "text-slate-500" },
];

const INTEGRATIONS: Item[] = [
  { label: "Google", Icon: Link2, color: "text-blue-500" },
  { label: "Lexware", Icon: Link2, color: "text-red-500" },
  { label: "AbaNinja", Icon: Link2, color: "text-emerald-600" },
  { label: "SumUp", Icon: Link2, color: "text-gray-700" },
  { label: "Zapier", Icon: Zap, color: "text-orange-500" },
];

function Row({ items, reverse = false }: { items: Item[]; reverse?: boolean }) {
  // Vierfach, damit die Zeile auch auf breiten Bildschirmen nahtlos läuft
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="tf-marquee overflow-hidden" aria-hidden="true">
      <div className="tf-marquee__track" data-reverse={reverse ? "true" : "false"}>
        {loop.map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className="flex flex-shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
          >
            <item.Icon className={`h-4 w-4 ${item.color}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Laufband mit allen Modulen und Anbindungen. Für Screenreader steht die Liste einmal als Text daneben. */
export default function ModuleMarquee() {
  return (
    <section className="overflow-hidden bg-white py-14" aria-labelledby="module-marquee-title">
      <div className="mx-auto mb-8 max-w-3xl px-4 text-center">
        <h2 id="module-marquee-title" className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          Alles in einer App – und verbunden mit deinen Tools
        </h2>
        <p className="sr-only">
          Module: {MODULES.map((item) => item.label).join(", ")}. Anbindungen: {INTEGRATIONS.map((item) => item.label).join(", ")}.
        </p>
      </div>
      <div className="space-y-3">
        <Row items={MODULES} />
        <Row items={[...INTEGRATIONS, ...MODULES.slice(0, 4)]} reverse />
      </div>
    </section>
  );
}
