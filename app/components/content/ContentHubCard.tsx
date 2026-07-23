import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';

export type ContentHubCardProps = {
  href: string;
  title: string;
  description: string;
  badge?: string;
  icon?: LucideIcon;
};

export default function ContentHubCard({
  href,
  title,
  description,
  badge,
  icon: Icon,
}: ContentHubCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 hover:border-indigo-200 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        {Icon ? (
          <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
        ) : (
          <span />
        )}
        {badge ? (
          <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-indigo-600 mt-4">
        Weiterlesen
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
