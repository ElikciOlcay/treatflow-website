import Image from 'next/image';
import { Calendar, CheckCircle, FileText, User } from 'lucide-react';

export default function HeroAppPreview() {
    return (
        <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" aria-hidden="true" />

            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-amber-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                        <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-center border border-gray-200">
                            app.treatflow.io
                        </div>
                    </div>
                </div>

                <div className="relative aspect-[4/3] bg-gray-50">
                    <Image
                        src="/images/mockups/dashboard-main.png"
                        alt="Treatflow Dashboard – Kalender, Kundenkartei und Behandlungsdokumentation für Kosmetikstudios"
                        fill
                        sizes="(max-width: 1024px) 100vw, 540px"
                        className="object-cover object-top"
                        priority
                    />
                </div>
            </div>

            <div className="absolute -bottom-3 -left-2 sm:-left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-3 sm:p-4 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-900">Heute, 14:30</p>
                        <p className="text-[10px] text-gray-500">Gesichtsbehandlung</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-green-600 font-medium">
                    <CheckCircle className="h-3 w-3" />
                    Online gebucht
                </div>
            </div>

            <div className="absolute -top-2 -right-2 sm:-right-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3 sm:p-4 max-w-[180px]">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        SK
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-900">Sarah K.</p>
                        <p className="text-[10px] text-gray-500">Stammkundin</p>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/3 -left-4 sm:-left-8 bg-white rounded-xl shadow-lg border border-gray-100 p-3 max-w-[170px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                    <FileText className="h-4 w-4 text-purple-600" />
                    <p className="text-xs font-semibold text-gray-900">Anamnese</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle className="h-2.5 w-2.5" />
                        Ausgefüllt
                    </span>
                </div>
            </div>

            <div className="absolute bottom-1/4 -right-3 sm:-right-6 bg-white rounded-xl shadow-lg border border-gray-100 p-3 max-w-[170px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                    <User className="h-4 w-4 text-indigo-600" />
                    <p className="text-xs font-semibold text-gray-900">Behandlungsdoku</p>
                </div>
                <p className="text-[10px] text-gray-500">Microneedling · 45 Min.</p>
                <p className="text-[10px] text-indigo-600 font-medium mt-1">Dokumentiert</p>
            </div>
        </div>
    );
}
