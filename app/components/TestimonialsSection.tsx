import { Star } from "lucide-react";

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Was unsere Kunden sagen
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Über 500 Kosmetikstudios vertrauen bereits auf Treatflow für ihr Studio-Management.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6">
                            &ldquo;Ganz toller Service. Herr Elikci ist sehr nett, erklärt alles verständlich und macht sich auch die Mühe bei den einzelnen Formularen zu helfen. Für mich eine Arbeitserleichterung – hab alles für die Kunden griffbereit an einem Ort.&rdquo;
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                                VW
                            </div>
                            <div className="ml-4">
                                <div className="font-semibold text-gray-900">Valeska Weber</div>
                                <div className="text-sm text-gray-600">Skin13</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6">
                            &ldquo;Super👍 Ein sehr freundliches, kompetentes, kundenorientiertes und hilfsbereites Team. Das Programm passt perfekt in mein Unternehmen und man kann alles so anpassen, wie man es braucht. Ihr habt mein Unternehmen besser gemacht 🙂&rdquo;
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                                EK
                            </div>
                            <div className="ml-4">
                                <div className="font-semibold text-gray-900">Evangelia Karapouliou</div>
                                <div className="text-sm text-gray-600">Adam & Eva Kosmetikstudio</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6">
                            &ldquo;Kann Treatflow wirklich jedem empfehlen. Was mir am Allerbesten gefällt ist, Olcay geht so sympathisch und unkompliziert auf individuelle Anpassungen ein. Auch für technisch kleine Nieten wie mich hat er Probleme aus dem Weg geräumt.&rdquo;
                        </p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                SW
                            </div>
                            <div className="ml-4">
                                <div className="font-semibold text-gray-900">Simone Weigl</div>
                                <div className="text-sm text-gray-600">Auszeit Kosmetikstudio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
