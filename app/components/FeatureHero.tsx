import { type LucideIcon, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';
import AiAnswerCapsule from './AiAnswerCapsule';
import ContentAttribution from './ContentAttribution';
import { APP_REGISTER_URL } from '../i18n/market-access';

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
    secondaryCta?: { label: string; href: string };
    aiCapsule?: { question: string; answer: string };
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
};

const DEFAULT_PRIMARY = {
    label: '14 Tage gratis testen',
    href: APP_REGISTER_URL,
    external: true,
};

const DEFAULT_TRUST = [
    '14 Tage kostenlos',
    'Keine Kreditkarte',
    'Keine Provision',
];

export default function FeatureHero({
    theme = 'indigo',
    breadcrumbs,
    eyebrow,
    eyebrowIcon: EyebrowIcon,
    title,
    description,
    chips = [],
    primaryCta = DEFAULT_PRIMARY,
    secondaryCta,
    aiCapsule,
    dateModified,
    datePublished,
    image,
    visual,
    children,
}: FeatureHeroProps) {
    const t = featureHeroThemes[theme];

    return (
        <>
            <section className={`pb-16 sm:pb-20 ${t.sectionBg}`}>
                <Breadcrumbs items={breadcrumbs} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        <div className="order-1 text-center lg:text-left">
                            <div className={`inline-flex items-center gap-2 ${t.pillBg} ${t.pillText} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                                <EyebrowIcon className="h-4 w-4" />
                                {eyebrow}
                            </div>

                            <h1
                                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 hyphens-none"
                                lang="de"
                            >
                                {title}
                            </h1>

                            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                                {description}
                            </p>

                            {chips.length > 0 && (
                                <ul className="space-y-2 mb-8 inline-block text-left">
                                    {chips.map((label) => (
                                        <li key={label} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {primaryCta.external ? (
                                    <a
                                        href={primaryCta.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${t.ctaBg} text-white px-8 py-4 rounded-xl text-lg font-semibold ${t.ctaHover} transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg`}
                                    >
                                        {primaryCta.label}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                ) : (
                                    <Link
                                        href={primaryCta.href}
                                        className={`${t.ctaBg} text-white px-8 py-4 rounded-xl text-lg font-semibold ${t.ctaHover} transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg`}
                                    >
                                        {primaryCta.label}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                )}
                                {secondaryCta && (
                                    <Link
                                        href={secondaryCta.href}
                                        className={`inline-flex items-center justify-center border border-gray-200 bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold ${t.secondaryHover} transition-colors`}
                                    >
                                        {secondaryCta.label}
                                    </Link>
                                )}
                            </div>

                            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600">
                                {DEFAULT_TRUST.map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 flex items-center justify-center lg:justify-start gap-3 text-sm">
                                <span className="font-semibold text-gray-900">500+ Studios</span>
                                <span className="text-gray-400">|</span>
                                <div className="flex text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-gray-600">4,6/5 auf Google</span>
                            </div>

                            {children}
                        </div>

                        <div className="order-2">
                            {visual ? (
                                <div className="relative w-full">{visual}</div>
                            ) : image ? (
                                <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto bg-white">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>

            {(aiCapsule || (dateModified && datePublished)) && (
                <section className="py-10 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {aiCapsule && (
                            <AiAnswerCapsule
                                question={aiCapsule.question}
                                answer={aiCapsule.answer}
                                className="!mt-0 !mx-0"
                            />
                        )}
                        {dateModified && datePublished && (
                            <ContentAttribution dateModified={dateModified} datePublished={datePublished} />
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
