'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function DemoAnfrageForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: formData.get('name'),
            praxisname: formData.get('praxisname'),
            ort: formData.get('ort'),
            telefon: formData.get('telefon'),
            email: formData.get('email'),
            wunsch: formData.get('wunsch'),
            nachricht: formData.get('nachricht'),
            leadSource: 'Landing: Heilmasseur Software Österreich',
        };

        try {
            const response = await fetch('/api/demo-anfrage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => null);
                throw new Error(data?.error || 'Ein Fehler ist aufgetreten.');
            }

            setStatus('success');
            form.reset();
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-white rounded-2xl border border-blue-100 p-10 text-center shadow-sm">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Vielen Dank für Ihre Anfrage!</h3>
                <p className="text-slate-600 leading-relaxed">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen, um einen Termin
                    für Ihre kostenlose Demo zu vereinbaren.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="demo-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name *
                    </label>
                    <input
                        id="demo-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Max Mustermann"
                    />
                </div>
                <div>
                    <label htmlFor="demo-praxisname" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Praxisname
                    </label>
                    <input
                        id="demo-praxisname"
                        name="praxisname"
                        type="text"
                        autoComplete="organization"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Praxis für Heilmassage"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="demo-ort" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Ort *
                    </label>
                    <input
                        id="demo-ort"
                        name="ort"
                        type="text"
                        required
                        autoComplete="address-level2"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="z. B. Salzburg"
                    />
                </div>
                <div>
                    <label htmlFor="demo-telefon" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Telefon
                    </label>
                    <input
                        id="demo-telefon"
                        name="telefon"
                        type="tel"
                        autoComplete="tel"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+43 ..."
                    />
                </div>
            </div>

            <div>
                <label htmlFor="demo-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    E-Mail *
                </label>
                <input
                    id="demo-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="praxis@beispiel.at"
                />
            </div>

            <div>
                <span className="block text-sm font-medium text-slate-700 mb-2">Wie sollen wir die Demo zeigen?</span>
                <div className="grid sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50 transition-colors">
                        <input
                            type="radio"
                            name="wunsch"
                            value="Vor-Ort-Demo"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-slate-700 font-medium">Vor-Ort-Demo</span>
                    </label>
                    <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50 transition-colors">
                        <input
                            type="radio"
                            name="wunsch"
                            value="Online-Demo"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-slate-700 font-medium">Online-Demo</span>
                    </label>
                </div>
            </div>

            <div>
                <label htmlFor="demo-nachricht" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Nachricht
                </label>
                <textarea
                    id="demo-nachricht"
                    name="nachricht"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Was ist Ihnen bei der Dokumentation besonders wichtig?"
                />
            </div>

            {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {errorMessage}
                </p>
            )}

            <button
                id="cta-demo-form-submit"
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
            >
                {status === 'loading' ? 'Wird gesendet ...' : 'Demo anfragen'}
                {status !== 'loading' && <ArrowRight className="ml-2 h-5 w-5" />}
            </button>

            <p className="text-xs text-slate-500 text-center">
                Unverbindlich und kostenlos. Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
        </form>
    );
}
