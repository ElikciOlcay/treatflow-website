import { type LucideIcon, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { featureHeroThemes, type FeatureHeroThemeKey } from './FeatureHero';
import { APP_REGISTER_BY_MARKET } from '../i18n/market-access';
import { htmlLangTags } from '../i18n/config';
import { resolveHrefOrHome } from '../i18n/site-pages';
import { getFeatureCommon } from '../site/content/feature-common';
import type { SiteMarket } from '../site/content/shared';

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    /** Sprache (für lang/Silbentrennung); ohne Angabe Deutsch. */
    market?: SiteMarket;
};

/** Einheitlicher Abstand für alle Abschnitte der Funktions- und Branchenseiten */
const SECTION = 'py-20 sm:py-24 lg:py-28';

export function FeatureSectionHeader({
    eyebrow,
    title,
    description,
    align = 'center',
    market = 'de',
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-3">{eyebrow}</p>
            )}
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 hyphens-none" lang={htmlLangTags[market]}>
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">{description}</p>
            )}
        </div>
    );
}

/** Drei Kernvorteile, groß und ohne Kartenrahmen. */
export function FeatureUnderstand({
    theme = 'indigo',
    title,
    description,
    items,
    market = 'de',
}: {
    theme?: FeatureHeroThemeKey;
    title?: string;
    description?: string;
    items: { icon: LucideIcon; title: string; text: string }[];
    market?: SiteMarket;
}) {
    const t = featureHeroThemes[theme];
    title ??= getFeatureCommon(market).sections.understand;

    return (
        <section className={`${SECTION} bg-white`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} description={description} market={market} />
                <div className={`grid gap-x-10 gap-y-12 ${items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
                    {items.map((item) => (
                        <div key={item.title} className="text-center md:text-left">
                            <div className={`mx-auto md:mx-0 mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${t.pillBg} ${t.accent}`}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/** Drei Schritte nebeneinander, verbunden durch eine Linie. */
export function FeatureHowItWorks({
    theme = 'indigo',
    title,
    description,
    steps,
    market = 'de',
}: {
    theme?: FeatureHeroThemeKey;
    title?: string;
    description?: string;
    steps: { title: string; text: string }[];
    market?: SiteMarket;
}) {
    const t = featureHeroThemes[theme];
    title ??= getFeatureCommon(market).sections.howItWorks;

    return (
        <section className={`${SECTION} bg-gray-50`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} description={description} market={market} />
                <ol className="relative grid md:grid-cols-3 gap-x-10 gap-y-10 md:before:absolute md:before:left-[16%] md:before:right-[16%] md:before:top-5 md:before:h-px md:before:bg-gray-200">
                    {steps.map((step, i) => (
                        <li key={step.title} className="relative text-center">
                            <div className={`relative z-10 mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full ${t.ctaBg} text-white font-bold ring-8 ring-gray-50`}>
                                {i + 1}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

/** Funktionsliste als ruhiges Raster: Icon und Titel in einer Zeile, Stichpunkte als leise Zeile darunter. */
export function FeatureCards({
    theme = 'indigo',
    title,
    description,
    items,
    market = 'de',
}: {
    theme?: FeatureHeroThemeKey;
    title?: string;
    description?: string;
    items: { icon: LucideIcon; title: string; text: string; points?: string[] }[];
    market?: SiteMarket;
}) {
    const t = featureHeroThemes[theme];
    title ??= getFeatureCommon(market).sections.cards;

    return (
        <section className={`${SECTION} bg-white`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} description={description} market={market} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                    {items.map((item) => (
                        <article key={item.title}>
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${t.pillBg} ${t.accent}`}>
                                    <item.icon className="h-5 w-5" />
                                </span>
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            {item.points && item.points.length > 0 && (
                                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-500">
                                    {item.points.map((p) => (
                                        <li key={p} className="flex items-center gap-1.5">
                                            <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/** Lange Funktionslisten als ruhige Checkliste in Spalten, ohne Kästen. */
export function FeatureChecklist({
    title,
    description,
    items,
    tone = 'white',
    market = 'de',
}: {
    title: string;
    description?: string;
    items: string[];
    tone?: 'white' | 'gray';
    market?: SiteMarket;
}) {
    return (
        <section className={`${SECTION} ${tone === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} description={description} market={market} />
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
                    {items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function FeatureFaq({
    title,
    items,
    market = 'de',
}: {
    title?: string;
    items: { question: string; answer: string }[];
    market?: SiteMarket;
}) {
    if (items.length === 0) return null;
    title ??= getFeatureCommon(market).sections.faq;

    return (
        <section className={`${SECTION} bg-white`}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} market={market} />
                <div className="divide-y divide-gray-200 border-y border-gray-200">
                    {items.map((faq) => (
                        <details key={faq.question} className="group">
                            <summary className="cursor-pointer list-none py-5 font-semibold text-gray-900 flex items-center justify-between gap-6 hover:text-indigo-600 transition-colors">
                                <h3 className="text-base font-semibold">{faq.question}</h3>
                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="pb-6 pr-12 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FeatureRelated({
    title,
    description,
    items,
    market = 'de',
}: {
    title?: string;
    description?: string;
    items: { href: string; title: string; description: string }[];
    market?: SiteMarket;
}) {
    if (items.length === 0) return null;
    title ??= getFeatureCommon(market).sections.related;

    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    {description && <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{description}</p>}
                </div>
                <div className={`grid gap-4 ${items.length >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 max-w-3xl mx-auto'}`}>
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-indigo-300 hover:shadow-md"
                        >
                            <span>
                                <h3 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">{item.title}</h3>
                                <span className="block text-sm text-gray-500">{item.description}</span>
                            </span>
                            <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300 transition-colors group-hover:text-indigo-500" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

/** Abschluss im Stil der Startseite: eine ruhige Fläche mit Verlauf statt Vollfarbe. */
export function FeaturePageCta({
    theme: _theme = 'indigo',
    title,
    description,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    secondaryExternal = false,
    market = 'de',
}: {
    theme?: FeatureHeroThemeKey;
    title: string;
    description: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    secondaryExternal?: boolean;
    market?: SiteMarket;
}) {
    const common = getFeatureCommon(market).pageCta;
    primaryLabel ??= common.primary;
    primaryHref ??= APP_REGISTER_BY_MARKET[market];
    secondaryLabel ??= common.secondary;
    secondaryHref ??= resolveHrefOrHome(market, common.secondaryHref);
    const secondaryClass =
        'inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10';
    return (
        <section className={`${SECTION} bg-white`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 px-6 py-14 text-center sm:px-12 sm:py-16">
                    <div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(30rem_18rem_at_85%_0%,rgba(255,255,255,0.18),transparent_60%)]"
                        aria-hidden="true"
                    />
                    <h2 className="relative text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 hyphens-none" lang={htmlLangTags[market]}>
                        {title}
                    </h2>
                    <p className="relative text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">{description}</p>
                    <div className="relative flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={primaryHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-indigo-700 shadow-lg transition-colors hover:bg-indigo-50"
                        >
                            {primaryLabel}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        {secondaryExternal ? (
                            <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className={secondaryClass}>
                                {secondaryLabel}
                            </a>
                        ) : (
                            <Link href={secondaryHref} className={secondaryClass}>
                                {secondaryLabel}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function FeatureContentBlock({ children }: { children: ReactNode }) {
    return (
        <section className={`${SECTION} bg-white`}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg prose-headings:hyphens-none prose-headings:tracking-tight">
                {children}
            </div>
        </section>
    );
}
