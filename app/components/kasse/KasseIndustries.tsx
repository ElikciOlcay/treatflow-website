import Link from 'next/link';
import { ArrowRight, Brush, Eye, Flower2, Footprints, Gem, Hand, PenTool, Sparkles, Stethoscope, Zap } from 'lucide-react';

const INDUSTRIES = [
    { href: '/kosmetikstudio-software', label: 'Kosmetikstudio', icon: Sparkles },
    { href: '/nagelstudio-software', label: 'Nagelstudio', icon: Gem },
    { href: '/lash-studio-software', label: 'Lash & Brows', icon: Eye },
    { href: '/massage-software', label: 'Massage', icon: Hand },
    { href: '/fusspflege-software', label: 'Fußpflege', icon: Footprints },
    { href: '/laser-haarentfernung-software', label: 'Laser-Haarentfernung', icon: Zap },
    { href: '/permanent-makeup-software', label: 'Permanent Make-up', icon: Brush },
    { href: '/spa-wellness-software', label: 'Spa & Wellness', icon: Flower2 },
    { href: '/aesthetische-medizin-software', label: 'Ästhetische Medizin', icon: Stethoscope },
    { href: '/tattoo-studio-software', label: 'Tattoo-Studio', icon: PenTool },
];

/** Branchen, in denen die Kasse eingesetzt wird – mit Links zu den Branchenseiten. */
export default function KasseIndustries() {
    return (
        <section id="branchen" className="scroll-mt-24 bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Für dein Studio</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 hyphens-none lg:text-4xl" lang="de">
                        Ein Kassensystem für jedes Studio, das Behandlungen verkauft
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Ob Kosmetik, Nägel, Wimpern oder Laser: Behandlungen, Pakete und Produkte kassierst du mit derselben Kasse.
                    </p>
                </div>

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {INDUSTRIES.map(({ href, label, icon: Icon }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="group flex h-full items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_14px_30px_-20px_rgba(79,70,229,0.6)]"
                            >
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                                    <Icon className="h-[18px] w-[18px]" />
                                </span>
                                <span className="min-w-0 text-sm font-semibold leading-snug text-gray-800 group-hover:text-indigo-700">{label}</span>
                                <ArrowRight className="ml-auto hidden h-4 w-4 flex-shrink-0 text-gray-300 transition-colors group-hover:text-indigo-500 sm:block" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
