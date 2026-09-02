import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type WorkflowStep = {
  href: string;
  label: string;
  desc: string;
};

export default function TreatmentWorkflow({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle?: string;
  steps: WorkflowStep[];
}) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          {subtitle ? (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          ) : null}
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <li key={step.href + step.label}>
              <Link
                href={step.href}
                className="h-full flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-indigo-600 mb-2">
                  Step {index + 1}
                </span>
                <span className="font-semibold text-gray-900 mb-1">{step.label}</span>
                <span className="text-sm text-gray-600 leading-relaxed flex-1">{step.desc}</span>
                <span className="inline-flex items-center text-sm font-medium text-indigo-600 mt-3">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
