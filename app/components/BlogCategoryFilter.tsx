'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    publishDate: string;
    featured: boolean;
    image: string;
};

type Category = {
    name: string;
    count: number;
};

type Props = {
    posts: BlogPost[];
    categories: Category[];
};

export default function BlogCategoryFilter({ posts, categories }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

    const filteredPosts =
        selectedCategory === 'Alle'
            ? posts.filter((post) => !post.featured)
            : posts.filter((post) => post.category === selectedCategory);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        type="button"
                        onClick={() => setSelectedCategory(category.name)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            selectedCategory === category.name
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                        }`}
                    >
                        {category.name} ({category.count})
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500 py-12">
                        Keine Artikel in dieser Kategorie.
                    </p>
                ) : (
                    filteredPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center text-gray-500 text-xs">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {post.readTime}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {post.excerpt.substring(0, 120)}...
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-gray-500 text-xs">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {post.publishDate}
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                                    >
                                        Lesen
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </>
    );
}
