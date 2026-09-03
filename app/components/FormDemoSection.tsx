import Link from 'next/link';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import {
  DEMO_FORMS_PATH,
  getDemoCopy,
  getDemoForms,
  type DemoFormMeta,
  type DemoLocale,
} from '@/lib/demoForms';

function FormCard({ form, locale }: { form: DemoFormMeta; locale: DemoLocale }) {
  const copy = getDemoCopy(locale);
  const difficulty = copy.gallery.difficulty[form.difficulty] ?? form.difficulty;

  return (
    <Link
      href={`${DEMO_FORMS_PATH[locale]}/${form.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${form.iconBg} rounded-2xl flex items-center justify-center`}>
          <ClipboardCheck className={`h-6 w-6 ${form.iconColor}`} />
        </div>
        <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full">
          {copy.gallery.pagesLabel(form.pageCount)}
        </span>
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{form.category}</p>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {form.name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{form.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">{difficulty}</span>
        <span className="inline-flex items-center text-sm font-semibold text-indigo-600">
          {copy.gallery.fillCta}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function FormDemoCards({ locale = 'de' }: { locale?: DemoLocale }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {getDemoForms(locale).map((form) => (
        <FormCard key={form.id} form={form} locale={locale} />
      ))}
    </div>
  );
}
