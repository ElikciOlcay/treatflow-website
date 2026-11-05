import { type LucideIcon, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';
import ContentAttribution from './ContentAttribution';
import { APP_REGISTER_BY_MARKET } from '../i18n/market-access';
import { htmlLangTags } from '../i18n/config';
import { sitePagePath } from '../i18n/site-pages';
import { getFeatureCommon } from '../site/content/feature-common';
import type { SiteMarket } from '../site/content/shared';

export type FeatureHeroTheme = {
    sectionBg: string;
    pillBg: string;
    pillText: string;
    accent: string;
    ctaBg: string;
    ctaHover: string;
    secondaryHover: string;
};

export const featureHeroThemes = {
    indigo: {
        sectionBg: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50',
        pillBg: 'bg-indigo-100',
        pillText: 'text-indigo-700',
        accent: 'text-indigo-600',
        ctaBg: 'bg-indigo-600',
        ctaHover: 'hover:bg-indigo-700',
        secondaryHover: 'hover:border-indigo-300 hover:text-indigo-600',
    },
    orange: {
        sectionBg: 'bg-gradient-to-br from-orange-50 via-white to-red-50',
        pillBg: 'bg-orange-100',
        pillText: 'text-orange-700',
        accent: 'text-orange-600',
        ctaBg: 'bg-orange-600',
        ctaHover: 'hover:bg-orange-700',
        secondaryHover: 'hover:border-orange-300 hover:text-orange-600',
    },
    purple: {
        sectionBg: 'bg-gradient-to-br from-purple-50 via-white to-pink-50',
        pillBg: 'bg-purple-100',
        pillText: 'text-purple-700',
        accent: 'text-purple-600',
        ctaBg: 'bg-purple-600',
        ctaHover: 'hover:bg-purple-700',
        secondaryHover: 'hover:border-purple-300 hover:text-purple-600',
    },
    blue: {
        sectionBg: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
        pillBg: 'bg-blue-100',
        pillText: 'text-blue-700',
        accent: 'text-blue-600',
        ctaBg: 'bg-blue-600',
        ctaHover: 'hover:bg-blue-700',
        secondaryHover: 'hover:border-blue-300 hover:text-blue-600',
    },
    green: {
        sectionBg: 'bg-gradient-to-br from-green-50 via-white to-emerald-50',
        pillBg: 'bg-green-100',
        pillText: 'text-green-700',
        accent: 'text-green-600',
        ctaBg: 'bg-green-600',
        ctaHover: 'hover:bg-green-700',
        secondaryHover: 'hover:border-green-300 hover:text-green-600',
    },
    emerald: {
        sectionBg: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
        pillBg: 'bg-emerald-100',
        pillText: 'text-emerald-700',
        accent: 'text-emerald-600',
        ctaBg: 'bg-emerald-600',
        ctaHover: 'hover:bg-emerald-700',
        secondaryHover: 'hover:border-emerald-300 hover:text-emerald-600',
    },
    teal: {
        sectionBg: 'bg-gradient-to-br from-teal-50 via-white to-emerald-50',
        pillBg: 'bg-teal-100',
        pillText: 'text-teal-700',
        accent: 'text-teal-600',
        ctaBg: 'bg-teal-600',
        ctaHover: 'hover:bg-teal-700',
        secondaryHover: 'hover:border-teal-300 hover:text-teal-600',
    },
    rose: {
        sectionBg: 'bg-gradient-to-br from-rose-50 via-white to-orange-50',
        pillBg: 'bg-rose-100',
        pillText: 'text-rose-700',
        accent: 'text-rose-600',
        ctaBg: 'bg-rose-600',
        ctaHover: 'hover:bg-rose-700',
        secondaryHover: 'hover:border-rose-300 hover:text-rose-600',
    },
} as const satisfies Record<string, FeatureHeroTheme>;

export type FeatureHeroThemeKey = keyof typeof featureHeroThemes;

type BreadcrumbItem = { label: string; href?: string };

type FeatureHeroProps = {
    theme?: FeatureHeroThemeKey;
    breadcrumbs: BreadcrumbItem[];
    eyebrow: string;
    eyebrowIcon: LucideIcon;
    title: ReactNode;
    description: string;
    chips?: string[];
    primaryCta?: { label: string; href: string; external?: boolean };
    secondaryCta?: { label: string; href: string; external?: boolean };
    aiCapsule?: { question: string; answer: string };
    aiCapsules?: { question: string; answer: string }[];
    dateModified?: string;
    datePublished?: string;
    image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        badge?: { title: string; subtitle: string; icon?: LucideIcon };
    };
    visual?: ReactNode;
    children?: ReactNode;
    /** Sprache; ohne Angabe Deutsch. Texte: app/site/content/feature-common */
    market?: SiteMarket;
};

export default function FeatureHero({
    theme = 'indigo',
    breadcrumbs,
    eyebrow,
    eyebrowIcon: EyebrowIcon,
    title,
    description,
    chips = [],
    primaryCta: primaryCtaProp,
    secondaryCta,
    aiCapsule,
    aiCapsules,
    dateModified,
    datePublished,
    image,
    visual,
    children,
    market = 'de',
}: FeatureHeroProps) {
    const t = featureHeroThemes[theme];
    const common = getFeatureCommon(market);
    const lang = htmlLangTags[market];
    const primaryCta = primaryCtaProp ?? {
        label: common.hero.primaryCta,
        href: APP_REGISTER_BY_MARKET[market],
        external: true,
    };
    const capsules = aiCapsules && aiCapsules.length > 0 ? aiCapsules : aiCapsule ? [aiCapsule] : [];
    const primaryClass =
        'group inline-flex w-full sm:w-fit items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_34px_-14px_rgba(79,70,229,0.8)] transition-all duration-200 hover:brightness-110';
    const secondaryClass =
        'inline-flex w-full sm:w-fit items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:border-indigo-300 hover:text-indigo-600';

    return (
        <>
            <section className="relative overflow-hidden bg-white pb-20 sm:pb-24">
                {/* Ruhiger Hintergrund wie auf der Startseite statt kräftiger Verläufe */}
                <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(56rem_32rem_at_8%_-10%,rgba(99,102,241,0.09),transparent_60%),radial-gradient(44rem_28rem_at_100%_0%,rgba(56,189,248,0.07),transparent_60%)]"
                    aria-hidden="true"
                />
                <div className="relative">
                    <Breadcrumbs
                        items={breadcrumbs}
                        homeHref={sitePagePath(market, 'home') ?? '/'}
                        homeLabel={common.breadcrumbHome}
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                        <div className="order-1 text-center lg:text-left">
                            <div className={`inline-flex items-center gap-2 ${t.pillBg} ${t.pillText} px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}>
                                <EyebrowIcon className="h-4 w-4" />
                                {eyebrow}
                            </div>

                            <h1
                                className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-5 hyphens-none"
                                lang={lang}
                            >
                                {title}
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {description}
                            </p>

                            {chips.length > 0 && (
                                <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
                                    {chips.map((label) => (
                                        <li
                                            key={label}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700"
                                        >
                                            <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                {primaryCta.external ? (
                                    <a href={primaryCta.href} target="_blank" rel="noopener noreferrer" className={primaryClass}>
                                        {primaryCta.label}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </a>
                                ) : (
                                    <Link href={primaryCta.href} className={primaryClass}>
                                        {primaryCta.label}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                )}
                                {secondaryCta &&
                                    (secondaryCta.external ? (
                                        <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer" className={secondaryClass}>
                                            {secondaryCta.label}
                                        </a>
                                    ) : (
                                        <Link href={secondaryCta.href} className={secondaryClass}>
                                            {secondaryCta.label}
                                        </Link>
                                    ))}
                            </div>

                            {/* Eine ruhige Vertrauenszeile statt zwei */}
                            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-gray-500">
                                {common.hero.trust.map((item) => (
                                    <span key={item} className="flex items-center gap-1.5">
                                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                                        {item}
                                    </span>
                                ))}
                                <span className="flex items-center gap-1.5">
                                    <span className="flex text-amber-500" aria-hidden="true">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                        ))}
                                    </span>
                                    {common.hero.rating}
                                </span>
                            </div>

                            {children}
                        </div>

                        <div className="order-2">
                            {visual ? (
                                <div className="relative w-full">{visual}</div>
                            ) : image ? (
                                <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)] aspect-[4/3]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>

            {(capsules.length > 0 || (dateModified && datePublished)) && (
                <section className="border-y border-gray-100 bg-gray-50/70 py-14 sm:py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {capsules.length > 0 && (
                            <>
                                <p className={`mb-6 text-sm font-semibold uppercase tracking-wide ${t.accent} text-center lg:text-left`}>{common.hero.shortExplained}</p>
                                <div className={`grid gap-x-12 gap-y-8 ${capsules.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl'}`}>
                                    {capsules.map((capsule) => (
                                        <div key={capsule.question}>
                                            <h2 className="text-lg font-semibold text-gray-900 mb-2 hyphens-none" lang={lang}>
                                                {capsule.question}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed">{capsule.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {dateModified && datePublished && (
                            <ContentAttribution
                                dateModified={dateModified}
                                datePublished={datePublished}
                                market={market}
                                className={capsules.length > 0 ? 'mt-8 lg:justify-start' : ''}
                            />
                        )}
                    </div>
                </section>
            )}
        </>
    );
}

export function FeatureTitleHighlight({
    theme = 'indigo',
    children,
}: {
    theme?: FeatureHeroThemeKey;
    children: ReactNode;
}) {
    const t = featureHeroThemes[theme];
    return <span className={t.accent}>{children}</span>;
}
