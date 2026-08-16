import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

type LeadMagnetEmbedProps = {
    href: string;
    title: string;
    description: string;
    cta?: string;
};

export default function LeadMagnetEmbed({
    href,
    title,
    description,
    cta = 'Kostenlos herunterladen',
}: LeadMagnetEmbedProps) {
    return (
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 my-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
                <Link
                    href={href}
                    className="inline-flex items-center justify-center bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-indigo-700 whitespace-nowrap"
                >
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
