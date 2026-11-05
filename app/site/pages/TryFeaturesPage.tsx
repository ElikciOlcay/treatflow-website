import Link from "next/link";
import { ArrowRight, CalendarDays, FilePenLine, Mic, PlayCircle } from "lucide-react";
import LiveDemos from "@/app/components/live-demo/LiveDemos";
import { FeaturePageCta } from "@/app/components/FeatureSections";
import { resolveHref, resolveHrefOrHome, sitePagePath } from "@/app/i18n/site-pages";
import { getDemoForms, type DemoLocale } from "@/lib/demoForms";
import { getFeatureCommon } from "@/app/site/content/feature-common";
import { getTryFeaturesContent } from "@/app/site/content/try-features";
import type { SiteMarket } from "@/app/site/content/shared";
import { PageSchemas } from "@/app/site/schema";

/** Sprachen mit Formular-Demo (lib/demoForms); die anderen haben keine `try-forms`-Seite. */
function demoFormsLocale(market: SiteMarket): DemoLocale | null {
  return market === "de" || market === "en" || market === "tr" ? market : null;
}

/** Pfad der Formular-Demo in der Sprache oder `null` (dann entfällt die Formular-Sektion). */
function tryFormsPath(market: SiteMarket): string | null {
  return demoFormsLocale(market) ? resolveHref(market, { page: "try-forms" }) : null;
}

/**
 * JSON-LD der Seite (Breadcrumb, WebPage, SoftwareApplication). Eigene Komponente, weil sie auf der DE-Seite (wie bisher)
 * vor der Navigation steht.
 */
export function TryFeaturesSchema({ market }: { market: SiteMarket }) {
  const content = getTryFeaturesContent(market);
  const common = getFeatureCommon(market);
  const featuresPath = sitePagePath(market, "features");
  const breadcrumbs = [
    featuresPath ? { label: common.breadcrumbFeatures, href: featuresPath } : { label: common.breadcrumbFeatures },
    { label: content.breadcrumb },
  ];
  return (
    <PageSchemas
      market={market}
      path={sitePagePath(market, "try-features") ?? "/"}
      name={content.meta.title}
      description={content.meta.description}
      breadcrumbs={breadcrumbs}
    />
  );
}

/**
 * Seite „Funktionen live testen“ für alle Sprachen (ohne Navigation/Footer).
 * DE: app/(de)/funktionen-live-testen, sonst app/[market]/try-features, TR: app/tr/canli-demo.
 * Texte: app/site/content/try-features/<lang>.ts. Markup = bisherige deutsche Seite.
 */
export default function TryFeaturesPage({ market }: { market: SiteMarket }) {
  const content = getTryFeaturesContent(market);
  const { hero, forms, anchors, cta } = content;
  const formsBase = tryFormsPath(market);
  const formsLocale = demoFormsLocale(market);
  const featuredForms = formsBase && formsLocale ? getDemoForms(formsLocale).filter((form) => form.featured).slice(0, 3) : [];
  const showForms = featuredForms.length > 0;

  const jumpLinks = [
    { href: `#${anchors.booking}`, label: hero.jumpBooking, Icon: CalendarDays },
    { href: `#${anchors.dictation}`, label: hero.jumpDictation, Icon: Mic },
    ...(showForms ? [{ href: `#${anchors.forms}`, label: hero.jumpForms, Icon: FilePenLine }] : []),
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(56rem_32rem_at_50%_-10%,rgba(99,102,241,0.10),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
            <PlayCircle className="h-4 w-4" />
            {hero.badge}
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
            {hero.titleBefore}{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">{hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {jumpLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
              >
                <Icon className="h-4 w-4 text-indigo-500" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <LiveDemos
        content={content.demos}
        links={{
          booking: resolveHref(market, content.demos.booking.link.href),
          dictation: resolveHref(market, content.demos.dictation.link.href),
        }}
        anchors={anchors}
        formsHref={showForms ? `#${anchors.forms}` : null}
      />

      {showForms && formsBase && (
        <section id={anchors.forms} className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
              <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
                <FilePenLine className="h-4 w-4" />
                {forms.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">{forms.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{forms.text}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {featuredForms.map((form) => (
                <Link
                  key={form.slug}
                  href={`${formsBase}/${form.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg"
                >
                  <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${form.iconBg} ${form.iconColor}`}>
                    <FilePenLine className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">{form.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{form.description}</p>
                  <p className="mt-4 text-xs text-gray-400">
                    {form.pageCount}
                    {forms.pagesSeparator}
                    {form.fieldCount}
                    {forms.fieldsSuffix}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                    {forms.fillCta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href={formsBase} className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-800">
                {forms.allLink}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <FeaturePageCta
        title={cta.title}
        description={cta.description}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={resolveHrefOrHome(market, { page: "pricing" })}
        market={market}
      />
    </>
  );
}
