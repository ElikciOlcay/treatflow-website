import { CalendarCheck, CreditCard, ReceiptText, ShoppingBag } from 'lucide-react';

export const KASSE_FLOW_STEPS = [
    {
        icon: CalendarCheck,
        title: 'Termin antippen',
        text: 'Im Kalender auf „Kassieren“: Kundin, Behandlung und Preis landen automatisch im Warenkorb.',
    },
    {
        icon: ShoppingBag,
        title: 'Ergänzen',
        text: 'Produkte, Gutscheine oder freie Beträge dazunehmen, Rabatt vergeben, Trinkgeld getrennt erfassen.',
    },
    {
        icon: CreditCard,
        title: 'Bezahlen lassen',
        text: 'Bar mit Wechselgeld-Rechnung, Karte über SumUp, Gutschein, Überweisung oder Split aus Bar und Karte.',
    },
    {
        icon: ReceiptText,
        title: 'Beleg ausgeben',
        text: 'Signierter Beleg mit QR-Code als PDF oder per E-Mail. Der Verkauf steht sofort in der Kundenkartei.',
    },
];

/** Vier Schritte vom Termin zum Beleg; die Verbindungslinie wird beim Scrollen gezeichnet. */
export default function KasseFlowSteps() {
    return (
        <section id="so-funktionierts" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">So funktioniert’s</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 hyphens-none lg:text-4xl" lang="de">
                        Vom Termin zum signierten Beleg in unter einer Minute
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Kein Abtippen, kein zweites Programm. Die Kasse kennt deine Termine, Leistungen und Kundinnen schon.
                    </p>
                </div>

                <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
                    {/* Linie zwischen den Schritten (nur ab Tablet) */}
                    <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-gray-200 md:block" aria-hidden="true">
                        <span className="tf-ui-progress block h-full w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500" />
                    </span>

                    {KASSE_FLOW_STEPS.map(({ icon: Icon, title, text }, index) => (
                        <li key={title} className="tf-reveal relative text-center">
                            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-[0_10px_30px_-12px_rgba(79,70,229,0.55)] ring-1 ring-indigo-100">
                                <Icon className="h-6 w-6" />
                                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-xs font-bold text-white">
                                    {index + 1}
                                </span>
                            </span>
                            <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
                            <p className="mx-auto mt-2 max-w-xs text-gray-600 leading-relaxed">{text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
