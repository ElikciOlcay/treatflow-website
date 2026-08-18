import { type LucideIcon, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { featureHeroThemes, type FeatureHeroThemeKey } from './FeatureHero';

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
};

export function FeatureSectionHeader({
    eyebrow,
    title,
    description,
    align = 'center',
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
            {eyebrow && (
                <p className="text-sm font-semibold text-indigo-600 mb-2">{eyebrow}</p>
            )}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 hyphens-none" lang="de">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">{description}</p>
            )}
        </div>
    );
}

export function FeatureUnderstand({
    theme = 'indigo',
    title = 'So hilft dir die Funktion',
    description,
    items,
}: {
    theme?: FeatureHeroThemeKey;
    title?: string;
    description?: string;
    items: { icon: LucideIcon; title: string; text: string }[];
}) {
    const t = featureHeroThemes[theme];

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} description={description} />
                <div className="grid md:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="group bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl"
                        >
                            <div className={`w-12 h-12 ${t.pillBg} ${t.accent} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FeatureHowItWorks({
    theme = 'indigo',
    title = 'So funktioniert’s',
    description,
    steps,
}: {
    theme?: FeatureHeroThemeKey;
    title?: string;
    description?: string;
    steps: { title: string; text: string }[];
}) {
    const t = featureHeroThemes[theme];

    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} description={description} />
                <ol className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <li key={step.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${t.ctaBg} text-white font-bold mb-4`}>
                                {i + 1}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export function FeatureCards({
    theme = 'indigo',
    title = 'Was du bekommst',
    description,
    items,
}: {
    theme?: FeatureHeroThemeKey;
    title?: string;
    description?: string;
    items: { icon: LucideIcon; title: string; text: string; points?: string[] }[];
}) {
    const t = featureHeroThemes[theme];

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} description={description} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <article
                            key={item.title}
                            className="group bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl"
                        >
                            <div className={`w-12 h-12 ${t.pillBg} ${t.accent} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.text}</p>
                            {item.points && item.points.length > 0 && (
                                <ul className="space-y-2">
                                    {item.points.map((p) => (
                                        <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
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

export function FeatureFaq({
    title = 'Häufige Fragen',
    items,
}: {
    title?: string;
    items: { question: string; answer: string }[];
}) {
    if (items.length === 0) return null;

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureSectionHeader title={title} />
                <div className="space-y-3">
                    {items.map((faq) => (
                        <details
                            key={faq.question}
                            className="group rounded-2xl border border-gray-100 bg-white open:bg-gray-50"
                        >
                            <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-gray-900 flex items-center justify-between gap-4">
                                <span>{faq.question}</span>
                                <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                            </summary>
                            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
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
    title = 'Passende Funktionen',
    items,
}: {
    title?: string;
    items: { href: string; title: string; description: string }[];
}) {
    if (items.length === 0) return null;

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">{title}</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FeaturePageCta({
    theme = 'indigo',
    title,
    description,
    primaryLabel = '14 Tage gratis testen',
    primaryHref = 'https://app.treatflow.io/auth/register',
    secondaryLabel = 'Preise ansehen',
    secondaryHref = '/preise',
}: {
    theme?: FeatureHeroThemeKey;
    title: string;
    description: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}) {
    const t = featureHeroThemes[theme];

    return (
        <section className={`py-20 ${t.ctaBg}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 hyphens-none" lang="de">
                    {title}
                </h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">{description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={primaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center bg-white ${t.accent} px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg`}
                    >
                        {primaryLabel}
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                    <Link
                        href={secondaryHref}
                        className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function FeatureContentBlock({ children }: { children: ReactNode }) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:hyphens-none">
                {children}
            </div>
        </section>
    );
}
