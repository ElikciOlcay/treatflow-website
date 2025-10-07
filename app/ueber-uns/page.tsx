import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Users, Shield, Zap } from 'lucide-react';

export const metadata = {
    title: 'Über uns - Treatflow Team Made in Austria | Treatflow',
    description: 'Erfahre mehr über das Treatflow Team. Olcay Elikci (Gründer & Entwickler) und Gökce Elikci (Co-Gründerin & Kosmetikerin) entwickeln Software speziell für die Beauty-Branche. Made in Austria.',
    keywords: ['Treatflow Team', 'Made in Austria Software', 'Kosmetik Software Entwickler', 'Beauty Branche Österreich', 'Treatflow Gründer'],
    alternates: {
        canonical: 'https://www.treatflow.io/ueber-uns',
    },
    openGraph: {
        title: 'Über uns - Treatflow Team Made in Austria',
        description: 'Erfahre mehr über das Treatflow Team. Software-Entwicklung speziell für die Beauty-Branche aus Österreich.',
        url: 'https://www.treatflow.io/ueber-uns',
        images: [
            {
                url: '/images/og-team.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Team - Made in Austria',
            },
        ],
    },
};

export default function UeberUnsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Shield className="h-4 w-4" />
                            Made in Austria
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Über <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Treatflow</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Wir entwickeln die Software, die Kosmetikstudios wirklich brauchen -
                            mit Leidenschaft und Verständnis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Unsere Mission
                            </h2>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Kosmetikstudios sollen sich auf das konzentrieren können, was sie am besten können:
                                ihre Kunden schön und zufrieden zu machen.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Deshalb haben wir Treatflow entwickelt - eine Software, die speziell für die
                                Bedürfnisse der Beauty-Branche gemacht ist. Keine komplizierte Technik,
                                keine überflüssigen Features, sondern genau das, was du brauchst.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                                    <div className="text-gray-600">Zufriedene Studios</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-indigo-600 mb-2">2024</div>
                                    <div className="text-gray-600">Gegründet</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <Heart className="h-12 w-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Mit Herz entwickelt
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Jede Funktion in Treatflow entsteht aus echten Gesprächen mit Kosmetikerinnen.
                                Wir hören zu, verstehen die Herausforderungen und entwickeln Lösungen, die wirklich helfen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Unsere Werte
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Was uns antreibt und wie wir arbeiten
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Kundenorientiert</h3>
                            <p className="text-gray-600">
                                Jede Entscheidung treffen wir mit Blick auf den Nutzen für unsere Kunden.
                                Ihr Erfolg ist unser Erfolg.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Vertrauenswürdig</h3>
                            <p className="text-gray-600">
                                Datenschutz und Sicherheit stehen bei uns an erster Stelle.
                                Made in Austria, DSGVO-konform, 100% sicher.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <Zap className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovativ</h3>
                            <p className="text-gray-600">
                                Wir nutzen modernste Technologien wie KI, um euch das Leben zu erleichtern -
                                aber immer benutzerfreundlich.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Persönlich</h3>
                            <p className="text-gray-600">
                                Bei uns bekommst du persönlichen Support auf Deutsch.
                                Kein Callcenter, sondern echte Menschen, die helfen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Das Team hinter Treatflow
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ein kleines, aber leidenschaftliches Team aus Österreich
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Olcay Elikci - Founder */}
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                                OE
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Olcay Elikci
                            </h3>
                            <p className="text-lg text-indigo-600 mb-4">
                                Founder
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Als erfahrener Software-Entwickler bringt Olcay die technische Vision von Treatflow zum Leben.
                                Mit seiner Expertise in modernen Technologien und seinem Gespür für benutzerfreundliche
                                Lösungen entwickelt er eine Plattform, die wirklich funktioniert. Seine Mission:
                                Komplexe Technik einfach und zugänglich zu machen.
                            </p>
                        </div>

                        {/* Gökce Elikci - Co-Founder */}
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                                GE
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Gökce Elikci
                            </h3>
                            <p className="text-lg text-pink-600 mb-4">
                                Co-Founder
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Als ausgebildete Kosmetikerin kennt Gökce die täglichen Herausforderungen der Beauty-Branche
                                aus erster Hand. Sie sorgt dafür, dass jede Funktion in Treatflow praxistauglich ist und
                                echte Probleme löst. Mit ihrem fachlichen Input und ihrer Branchenerfahrung stellt sie
                                sicher, dass Treatflow genau das bietet, was Kosmetikerinnen wirklich brauchen.
                            </p>
                        </div>
                    </div>

                    {/* Team Quote */}
                    <div className="max-w-4xl mx-auto mt-16">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
                            <p className="text-xl text-gray-700 leading-relaxed italic mb-4">
                                &ldquo;Gemeinsam verbinden wir technische Innovation mit praktischer Branchenerfahrung.
                                So entsteht Software, die nicht nur funktioniert, sondern auch wirklich hilft.&rdquo;
                            </p>
                            <p className="text-gray-600 font-semibold">
                                - Das Treatflow Team
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Hast du Fragen oder Feedback?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                        Wir freuen uns über jede Nachricht und jeden Verbesserungsvorschlag.
                        Schreib uns einfach eine E-Mail!
                    </p>
                    <a
                        href="mailto:hello@treatflow.io"
                        className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        hello@treatflow.io
                        <Heart className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
