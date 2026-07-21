import InternationalAccessForm, {
  type AccessFormCopy,
} from "./InternationalAccessForm";

type Props = {
  locale: string;
  leadSource: string;
  title: string;
  subtitle: string;
  note: string;
  badge?: string;
  defaultCountry?: string;
  copy: AccessFormCopy;
};

export default function EarlyAccessPage({
  locale,
  leadSource,
  title,
  subtitle,
  note,
  badge = "Early Access",
  defaultCountry,
  copy,
}: Props) {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {badge}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
          <p className="mt-4 text-sm text-gray-500">{note}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <InternationalAccessForm
            locale={locale}
            leadSource={leadSource}
            copy={copy}
            defaultCountry={defaultCountry}
          />
        </div>
      </div>
    </section>
  );
}
