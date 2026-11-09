import { Check, Minus, X } from 'lucide-react';

type Cell = { kind: 'yes' | 'no' | 'partly'; text?: string };

const yes = (text?: string): Cell => ({ kind: 'yes', text });
const no = (text?: string): Cell => ({ kind: 'no', text });
const partly = (text: string): Cell => ({ kind: 'partly', text });

const COLUMNS = ['Treatflow Kasse', 'Klassische Registrierkasse', 'Kassen-App vom Kartenanbieter'];

const ROWS: { label: string; cells: [Cell, Cell, Cell] }[] = [
    { label: 'Kassieren direkt aus dem Termin', cells: [yes(), no(), no()] },
    { label: 'Verkauf landet in der Kundenkartei', cells: [yes('mit Behandlungshistorie'), no(), partly('Kundenliste ohne Behandlungen')] },
    { label: 'TSE (DE) bzw. RKSV (AT)', cells: [yes('inklusive'), yes(), partly('je nach Anbieter und Tarif')] },
    { label: 'Anmeldung bei ELSTER bzw. FinanzOnline', cells: [yes('wird für dich übermittelt'), partly('meist selbst'), partly('meist selbst')] },
    { label: 'Gutscheine online und an der Kasse', cells: [yes(), partly('meist nur an der Kasse'), partly('je nach Anbieter')] },
    { label: 'Online-Buchung und Erinnerungen in derselben App', cells: [yes(), no(), no()] },
    { label: 'Export für Steuerberater (DSFinV-K / DEP7)', cells: [yes(), yes(), partly('je nach Anbieter')] },
    { label: 'Ohne eigene Kassenhardware nutzbar', cells: [yes('Browser genügt'), no('Kassenterminal nötig'), yes('Smartphone oder Tablet')] },
];

function CellView({ cell, highlight }: { cell: Cell; highlight: boolean }) {
    const icon =
        cell.kind === 'yes' ? (
            <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${highlight ? 'bg-indigo-600 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
                <Check className="h-3.5 w-3.5" />
            </span>
        ) : cell.kind === 'no' ? (
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <X className="h-3.5 w-3.5" />
            </span>
        ) : (
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Minus className="h-3.5 w-3.5" />
            </span>
        );
    const label = cell.kind === 'yes' ? 'Ja' : cell.kind === 'no' ? 'Nein' : 'Teilweise';
    return (
        <span className="flex items-center gap-2">
            {icon}
            <span className={`text-sm ${highlight ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                <span className="sr-only">{label}{cell.text ? ': ' : ''}</span>
                {cell.text ?? <span aria-hidden="true">{label}</span>}
            </span>
        </span>
    );
}

/** Vergleich mit klassischer Registrierkasse und Kassen-Apps der Kartenanbieter. */
export default function KasseComparison() {
    return (
        <section id="vergleich" className="scroll-mt-24 bg-gray-50/80 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Vergleich</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 hyphens-none lg:text-4xl" lang="de">
                        Treatflow Kasse oder klassische Registrierkasse?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Eine Kasse fürs Kosmetikstudio muss mehr als Beträge addieren. Der Unterschied liegt in der Verbindung zu Terminen und
                        Kundinnen.
                    </p>
                </div>

                <div className="tf-reveal overflow-x-auto rounded-3xl border border-gray-200/80 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]">
                    <table className="w-full min-w-[44rem] border-collapse text-left">
                        <caption className="sr-only">Vergleich: Treatflow Kasse, klassische Registrierkasse und Kassen-App vom Kartenanbieter</caption>
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th scope="col" className="w-[32%] px-5 py-4 text-sm font-semibold text-gray-500">
                                    Funktion
                                </th>
                                {COLUMNS.map((column, index) => (
                                    <th
                                        key={column}
                                        scope="col"
                                        className={`px-5 py-4 text-sm font-semibold ${index === 0 ? 'bg-indigo-50/70 text-indigo-700' : 'text-gray-700'}`}
                                    >
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((row) => (
                                <tr key={row.label} className="border-b border-gray-100 last:border-0">
                                    <th scope="row" className="px-5 py-4 text-sm font-medium text-gray-900">
                                        {row.label}
                                    </th>
                                    {row.cells.map((cell, index) => (
                                        <td key={index} className={`px-5 py-4 ${index === 0 ? 'bg-indigo-50/40' : ''}`}>
                                            <CellView cell={cell} highlight={index === 0} />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-center text-xs text-gray-400">
                    Stand: November 2026. Funktionen anderer Kassen unterscheiden sich je nach Modell und Tarif.
                </p>
            </div>
        </section>
    );
}
