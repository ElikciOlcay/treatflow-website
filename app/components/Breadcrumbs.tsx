import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const BASE_URL = 'https://www.treatflow.io';

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
    const allItems = [{ label: 'Home', href: '/' }, ...items];
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: allItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
        })),
    };
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 sm:pb-6">
            <ol className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
                <li>
                    <Link href="/" className="flex items-center hover:text-indigo-600 transition-colors">
                        <Home className="h-3.5 w-3.5" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1.5">
                        <ChevronRight className="h-3.5 w-3.5 text-gray-300 flex-shrink-0" />
                        {item.href ? (
                            <Link href={item.href} className="hover:text-indigo-600 transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 font-medium">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
