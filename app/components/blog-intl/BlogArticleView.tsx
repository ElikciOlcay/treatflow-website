import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle2, Clock } from "lucide-react";
import type { Market } from "@/app/i18n/config";
import { BASE_URL, htmlLangTags } from "@/app/i18n/config";
import { getPagePath } from "@/app/i18n/seo";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import type { BlogArticle } from "@/lib/blog-intl/types";
import { blogTopics } from "@/lib/blog-intl/topics";
import { blogBasePath, blogPostUrl } from "@/lib/blog-intl";
import { blogUi } from "@/lib/blog-intl/ui";

/** **fett** → <strong>, sonst reiner Text. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const plain = (text: string) => text.replace(/\*\*/g, "");

function anchorId(heading: string, index: number) {
  const base = heading
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  return base || `section-${index + 1}`;
}

export default function BlogArticleView({
  post,
  market,
  more,
}: {
  post: BlogArticle;
  market: Market;
  more: BlogArticle[];
}) {
  const ui = blogUi[post.lang];
  const url = blogPostUrl(post.lang, post.slug);
  const image = blogTopics[post.topic].image;
  const homeHref = market === "de" ? "/" : `/${market}`;
  const blogHref = blogBasePath(post.lang);
  const orgId = market === "de" ? `${BASE_URL}/#organization` : `${BASE_URL}/${market}#organization`;
  const dateFmt = new Intl.DateTimeFormat(ui.dateLocale, { dateStyle: "long" });
  const sections = post.sections.map((section, i) => ({ ...section, id: anchorId(section.heading, i) }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        image: `${BASE_URL}${image}`,
        inLanguage: htmlLangTags[market],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        mainEntityOfPage: url,
        abstract: post.answer,
        author: {
          "@type": "Person",
          name: ui.author,
          jobTitle: ui.authorRole,
          url: `${BASE_URL}${getPagePath(market, "about")}`,
          worksFor: { "@id": orgId },
        },
        publisher: {
          "@type": "Organization",
          "@id": orgId,
          name: "Treatflow",
          logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logos/treatflow-logo.svg` },
        },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#short-answer", "#key-takeaways"] },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: htmlLangTags[market],
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: plain(item.q),
          acceptedAnswer: { "@type": "Answer", text: plain(item.a) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ui.home, item: `${BASE_URL}${homeHref === "/" ? "" : homeHref}` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}${blogHref}` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="pt-28 pb-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6 flex flex-wrap gap-2">
            <Link href={homeHref} className="hover:text-indigo-600">{ui.home}</Link>
            <span>/</span>
            <Link href={blogHref} className="hover:text-indigo-600">Blog</Link>
          </nav>
          <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <span>{ui.author} · {ui.authorRole}</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.updatedAt}>{ui.updated} {dateFmt.format(new Date(post.updatedAt))}</time>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {ui.minRead(post.readMinutes)}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image src={image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>

        <section id="short-answer" className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-700 mb-2">{ui.answerLabel}</h2>
          <p className="text-lg text-gray-800 leading-relaxed"><RichText text={post.answer} /></p>
        </section>

        <section id="key-takeaways" className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{ui.takeawaysLabel}</h2>
          <ul className="space-y-3">
            {post.takeaways.map((item) => (
              <li key={item} className="flex gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span><RichText text={item} /></span>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-10">
          {post.intro.map((p) => (
            <p key={p.slice(0, 48)}><RichText text={p} /></p>
          ))}
        </div>

        <nav aria-label={ui.tocLabel} className="rounded-xl bg-gray-50 p-6 mb-12">
          <h2 className="font-semibold text-gray-900 mb-3">{ui.tocLabel}</h2>
          <ol className="list-decimal pl-5 space-y-1 text-gray-700">
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="hover:text-indigo-600">{s.heading}</a></li>
            ))}
            <li><a href="#faq" className="hover:text-indigo-600">{ui.faqTitle}</a></li>
          </ol>
        </nav>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{section.heading}</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}><RichText text={p} /></p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-5 list-disc pl-6 space-y-2 text-lg text-gray-700">
                {section.bullets.map((b) => <li key={b}><RichText text={b} /></li>)}
              </ul>
            )}
            {section.steps && (
              <ol className="mt-5 list-decimal pl-6 space-y-2 text-lg text-gray-700">
                {section.steps.map((b) => <li key={b}><RichText text={b} /></li>)}
              </ol>
            )}
            {section.table && (
              <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full text-left text-sm sm:text-base">
                  <thead className="bg-gray-50 text-gray-900">
                    <tr>{section.table.headers.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {section.table.rows.map((row, r) => (
                      <tr key={r}>{row.map((cell, c) => <td key={c} className="px-4 py-3 align-top"><RichText text={cell} /></td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.callout && (
              <p className="mt-6 rounded-xl border-l-4 border-indigo-500 bg-indigo-50 p-4 text-gray-800">
                <RichText text={section.callout} />
              </p>
            )}
          </section>
        ))}

        <section id="faq" className="mb-12 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{ui.faqTitle}</h2>
          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
            {post.faq.map((item) => (
              <details key={item.q} className="group p-5" open>
                <summary className="cursor-pointer list-none font-semibold text-gray-900">{item.q}</summary>
                <p className="mt-3 text-gray-700 leading-relaxed"><RichText text={item.a} /></p>
              </details>
            ))}
          </div>
        </section>

        {post.related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{ui.relatedTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {post.related.map((link) => (
                <Link
                  key={link.pageKey}
                  href={getPagePath(market, link.pageKey)}
                  className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-gray-800 hover:border-indigo-300 hover:text-indigo-700"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {post.sources && post.sources.length > 0 && (
          <section className="mb-12 text-sm text-gray-600">
            <h2 className="font-semibold text-gray-900 mb-2">{ui.sourcesTitle}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {post.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline break-words">{s.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-2">{ui.ctaTitle}</h2>
          <p className="text-indigo-100 mb-6">{ui.ctaText}</p>
          <a
            href={APP_REGISTER_BY_MARKET[market]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            {ui.ctaButton} <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {more.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{ui.moreArticles}</h2>
            <ul className="space-y-3">
              {more.map((item) => (
                <li key={item.slug}>
                  <Link href={`${blogHref}/${item.slug}`} className="text-indigo-700 hover:underline">{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
