import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export type PricingPageIntlContent = {
  title: string;
  subtitle: string;
  monthLabel: string;
  earlyAccessHref: string;
  ctaLabel: string;
  plans: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted: boolean;
  }[];
};

export default function PricingPageIntl({ content }: { content: PricingPageIntlContent }) {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {content.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted ? "border-indigo-600 shadow-xl" : "border-gray-200"
              }`}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">&euro;{plan.price}</span>
                <span className="text-gray-500"> {content.monthLabel}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={content.earlyAccessHref}
                className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-xl font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {content.ctaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
