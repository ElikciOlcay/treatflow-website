import { ArrowRight, CheckCircle, Receipt, Star } from 'lucide-react';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { APP_REGISTER_BY_MARKET, demoBookingUrl } from '@/app/i18n/market-access';
import KasseCheckoutDemo from './KasseCheckoutDemo';

const CHIPS = ['TSE & RKSV inklusive', 'ELSTER- & FinanzOnline-Anmeldung', 'SumUp Solo & Air', 'Keine Transaktionsgebühr'];

/** Hero der Kassenseite: Botschaft links, animierter Kassiervorgang rechts. */
export default function KasseHero({ breadcrumbs }: { breadcrumbs: { label: string; href?: string }[] }) {
    const registerUrl = APP_REGISTER_BY_MARKET.de;
    const demoUrl = demoBookingUrl('de');

    return (
        <section className="relative overflow-hidden bg-white pb-16 sm:pb-20">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-[radial-gradient(56rem_32rem_at_8%_-10%,rgba(99,102,241,0.11),transparent_60%),radial-gradient(44rem_28rem_at_100%_0%,rgba(56,189,248,0.10),transparent_60%)]" />
                {/* feines Raster wie Bonpapier */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
            </div>

            <div className="relative">
                <Breadcrumbs items={breadcrumbs} homeHref="/" homeLabel="Startseite" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pt-2 sm:px-6 sm:pt-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
                    <div className="text-center lg:text-left">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                            <Receipt className="h-4 w-4" />
                            Treatflow Kasse · TSE &amp; RKSV
                        </div>

                        <h1 className="mb-5 text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 hyphens-none sm:text-5xl xl:text-[3.5rem]" lang="de">
                            Kassensystem fürs Kosmetikstudio:{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                                direkt aus dem Termin kassieren
                            </span>
                        </h1>

                        <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0">
                            Die Treatflow Kasse (in Österreich: Kassa) ist mit Terminkalender, Kundenkartei und Gutscheinen verbunden. Ein Klick,
                            und Kundin, Behandlung und Preis stehen im Warenkorb. Jeder Beleg ist in Deutschland TSE- und in Österreich
                            RKSV-signiert, Kartenzahlungen laufen über SumUp.
                        </p>

                        <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                            {CHIPS.map((label) => (
                                <li
                                    key={label}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-sm text-gray-700 backdrop-blur"
                                >
                                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                                    {label}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                            <a
                                href={registerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_34px_-14px_rgba(79,70,229,0.8)] transition-all duration-200 hover:brightness-110"
                            >
                                14 Tage gratis testen
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            {demoUrl && (
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/90 px-6 py-3.5 text-base font-semibold text-gray-700 backdrop-blur transition-colors hover:border-indigo-300 hover:text-indigo-600"
                                >
                                    Kasse in der Demo ansehen
                                </a>
                            )}
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500 lg:justify-start">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                Ab 39 €/Monat
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                Keine Kassenhardware nötig
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="flex text-amber-500" aria-hidden="true">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                    ))}
                                </span>
                                4,6/5 auf Google · 500+ Studios
                            </span>
                        </div>
                    </div>

                    <KasseCheckoutDemo />
                </div>
            </div>
        </section>
    );
}
