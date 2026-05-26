import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogCategoryFilter from '../components/BlogCategoryFilter';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Sparkles } from 'lucide-react';
import { blogPosts } from '@/lib/blogPosts';

export const metadata = {
    title: 'Kosmetikstudio Blog: Tipps für Beauty-Profis',
    description: 'Expertentipps für Kosmetikstudios: Kundenbindung, Praxisführung, neue Behandlungen und Business-Strategien. Von Profis für Profis.',
    keywords: ['Kosmetikstudio Blog', 'Beauty Business Tipps', 'Kundenbindung Kosmetik', 'Praxisführung Beauty', 'Kosmetik Trends', 'Studio Management'],
    alternates: {
        canonical: 'https://www.treatflow.io/blog',
    },
    openGraph: {
        title: 'Kosmetikstudio Blog - Tipps & Trends für Beauty-Profis',
        description: 'Expertentipps für erfolgreiche Kosmetikstudios. Kundenbindung, Business-Strategien und neue Behandlungstrends.',
        url: 'https://www.treatflow.io/blog',
        images: [
            {
                url: '/images/og-blog.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Blog für Kosmetikstudios',
            },
        ],
    },
};

const categories = [
    { name: 'Alle', count: 30, active: true },
    { name: 'Software', count: 2, active: false },
    { name: 'Business', count: 7, active: false },
    { name: 'Marketing', count: 5, active: false },
    { name: 'Fachkompetenz', count: 3, active: false },
    { name: 'Recht & Compliance', count: 5, active: false },
    { name: 'Digitalisierung', count: 4, active: false },
    { name: 'Kundenbindung', count: 2, active: false },
    { name: 'Organisation', count: 3, active: false },
    { name: 'Automatisierung', count: 3, active: false }
];


export default function BlogPage() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4 mr-2" />
                            Beauty Business Blog
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Expertentipps für <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">erfolgreiche</span> Kosmetikstudios
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Von Kundenbindung bis Digitalisierung - praktische Tipps und bewährte Strategien
                            für mehr Erfolg in deinem Beauty-Business.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                <TrendingUp className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-900">Wöchentlich neue Artikel</div>
                                <div className="text-sm text-gray-600">Immer aktuell</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-900">Von Profis für Profis</div>
                                <div className="text-sm text-gray-600">Praxiserprobt</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Aktuelle Highlights
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Die wichtigsten Artikel für dein Beauty-Business
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {featuredPosts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="aspect-video overflow-hidden relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {post.publishDate}
                                        </div>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                                        >
                                            Weiterlesen
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories & Regular Posts */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BlogCategoryFilter
                        posts={blogPosts}
                        categories={categories.map(({ name, count }) => ({ name, count }))}
                    />
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Verpasse keine Expertentipps
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Erhalte wöchentlich die neuesten Artikel und exklusive Tipps für dein Kosmetikstudio direkt in dein Postfach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Deine E-Mail-Adresse"
                            className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                            Anmelden
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-indigo-200 text-sm mt-4">
                        Kostenlos • Jederzeit abbestellbar • Kein Spam
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
