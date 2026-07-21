import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

const baseUrl = "https://www.treatflow.io";
const EARLY_ACCESS = "/en/early-access";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for beauty studios. Start with a 14-day free trial, no credit card required.",
  alternates: {
    canonical: `${baseUrl}/en/pricing`,
  },
};

const plans = [
  {
    name: "Basic",
    price: "39",
    description: "Perfect for small studios and solo professionals.",
    features: [
      "Appointment calendar",
      "Digital client records",
      "Intake & consent forms",
      "Treatment documentation",
      "Personal support",
    ],
    highlighted: false,
  },
  {
    name: "Booking",
    price: "59",
    description: "Ideal for growing studios with online booking.",
    features: [
      "Everything in Basic",
      "Online booking page 24/7",
      "Automatic SMS & email reminders",
      "Discount codes",
      "Multilingual booking page",
    ],
    highlighted: true,
  },
];

export default function EnPricing() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-indigo-600 shadow-xl"
                  : "border-gray-200"
              }`}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  &euro;{plan.price}
                </span>
                <span className="text-gray-500"> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={EARLY_ACCESS}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-xl font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Request early access
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Prices shown in EUR. Your local currency and any applicable tax are shown
          at checkout.
        </p>
      </div>
    </section>
  );
}
