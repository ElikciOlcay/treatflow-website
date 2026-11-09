'use client';

import { FileText, Mail, Send } from 'lucide-react';
import { DemoGlow, DemoStepper, DrawCheck, pickLabels, useDemoSteps, type FeatureDemoProps } from './shared';
import { FORMS_LABELS } from './forms-demo-labels';
import './forms-demo.css';

/** Link → Anamnese → Unterschrift → Kundenakte (≈ 12,6 s) */
const DURATIONS = [2600, 3400, 3200, 3400] as const;

/** Handschriftlicher Namenszug, wird über stroke-dashoffset gezeichnet */
const SIGNATURE =
    'M12 48 C20 30 28 14 34 18 C40 23 28 44 26 52 C34 42 42 34 50 37 C56 40 50 49 58 47 C66 44 68 33 76 35 C82 37 76 49 84 47 C92 44 94 31 102 33 C108 35 104 48 112 45 C118 42 122 30 128 31 L134 48 L141 30 L148 48 L156 26 C162 19 176 38 190 30';

function StudioAvatar({ small = false }: { small?: boolean }) {
    return (
        <span
            className={`flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 font-bold text-white ${
                small ? 'h-7 w-7 text-[10px]' : 'h-9 w-9 text-[11px]'
            }`}
        >
            SA
        </span>
    );
}

function ClientAvatar({ initials }: { initials: string }) {
    return (
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-[10px] font-semibold text-rose-700">
            {initials}
        </span>
    );
}

/** Textfeld, dessen Antwort sich selbst eintippt */
function TypedField({ label, value, delay }: { label: string; value: string; delay: number }) {
    return (
        <div className="tf-ui-line-in" style={{ animationDelay: `${delay}ms` }}>
            <p className="text-[10px] font-medium leading-tight text-gray-500">{label}</p>
            <div className="mt-1 flex h-7 items-center rounded-lg border border-gray-200 px-2.5 text-xs text-gray-900">
                <span className="tf-forms-type" style={{ animationDelay: `${delay + 300}ms` }}>
                    {value}
                </span>
            </div>
        </div>
    );
}

/** Ja/Nein-Frage, „Nein“ wird angetippt */
function ChoiceField({ question, yes, no, delay }: { question: string; yes: string; no: string; delay: number }) {
    return (
        <div className="tf-ui-line-in" style={{ animationDelay: `${delay}ms` }}>
            <p className="text-[10px] font-medium leading-tight text-gray-500">{question}</p>
            <div className="mt-1 grid grid-cols-2 gap-1.5">
                <span className="flex h-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-[11px] font-semibold text-gray-500">
                    {yes}
                </span>
                <span className="tf-forms-pick flex h-7 items-center justify-center rounded-lg border text-[11px] font-semibold" style={{ animationDelay: `${delay + 400}ms` }}>
                    {no}
                </span>
            </div>
        </div>
    );
}

/**
 * Hero-Szene „Formulare“: Nach der Buchung kommt der Formular-Link per E-Mail, die Kundin füllt die Anamnese
 * am Handy aus, unterschreibt mit dem Finger, und das Formular liegt abgeschlossen im Kundenprofil.
 */
export default function FormsDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(FORMS_LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const panelKey = `${cycle}-${step}`;

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>

            <DemoGlow />

            <div className="relative" aria-hidden="true">
                {/* Handy der Kundin */}
                <div className="relative mx-auto w-[15.5rem] rounded-[2.4rem] bg-gray-900 p-[7px] shadow-[0_30px_70px_-30px_rgba(15,23,42,0.6)] sm:w-[17rem]">
                    <div className="relative h-[26rem] overflow-hidden rounded-[2rem] bg-white">
                        <div className="flex items-center justify-between px-6 pt-2.5 text-[10px] font-semibold tabular-nums text-gray-900">
                            <span>9:41</span>
                            <span className="absolute left-1/2 top-2 h-[18px] w-[4.5rem] -translate-x-1/2 rounded-full bg-gray-900" />
                            <span className="flex items-center gap-1">
                                <span className="flex items-end gap-px">
                                    {[4, 6, 8, 10].map((h) => (
                                        <span key={h} className="w-[3px] rounded-sm bg-gray-900" style={{ height: h }} />
                                    ))}
                                </span>
                                <span className="h-[9px] w-[18px] rounded-[3px] border border-gray-900 p-px">
                                    <span className="block h-full w-3/4 rounded-[1px] bg-gray-900" />
                                </span>
                            </span>
                        </div>

                        <div className="px-4 pt-4">
                            {/* 1 – E-Mail mit Formular-Link */}
                            {step === 0 && (
                                <div key={panelKey}>
                                    <p className="text-[11px] font-semibold text-indigo-600">‹ {t.inbox}</p>
                                    <div className="tf-ui-line-in mt-3 rounded-2xl border border-gray-200 p-3 shadow-sm">
                                        <div className="flex items-center gap-2.5">
                                            <StudioAvatar />
                                            <span className="min-w-0 flex-1 truncate text-xs font-semibold text-gray-900">Studio Aurora</span>
                                            <span className="text-[10px] text-gray-400">{t.now}</span>
                                        </div>
                                        <p className="mt-2 text-xs font-semibold leading-snug text-gray-900">{t.subject}</p>
                                        <p className="mt-1 text-[11px] leading-relaxed text-gray-600">{t.mailBody}</p>
                                        <div className="mt-3 flex items-center gap-2 rounded-xl bg-gray-50 p-2">
                                            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                                                <FileText className="h-4 w-4" />
                                            </span>
                                            <span className="min-w-0">
                                                <span className="block text-[11px] font-semibold leading-snug text-gray-900">{t.formName}</span>
                                                <span className="block truncate text-[10px] text-gray-400">{t.formMeta}</span>
                                            </span>
                                        </div>
                                        <span className="tf-ui-ring mt-3 flex h-9 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-2 text-center text-xs font-semibold text-white">
                                            {t.openForm}
                                        </span>
                                    </div>
                                    {/* ältere Mails, nur angedeutet */}
                                    {[0, 1].map((row) => (
                                        <div key={row} className="mt-3 flex items-center gap-2.5 px-1">
                                            <span className="h-7 w-7 flex-shrink-0 rounded-full bg-gray-100" />
                                            <span className="flex-1 space-y-1.5">
                                                <span className="block h-2 w-2/3 rounded-full bg-gray-100" />
                                                <span className="block h-2 w-5/6 rounded-full bg-gray-100/70" />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Kopf des Formulars mit Fortschritt (Schritt 2 und 3) */}
                            {(step === 1 || step === 2) && (
                                <div>
                                    <div className="flex items-center gap-2">
                                        <StudioAvatar small />
                                        <span className="min-w-0">
                                            <span className="block text-[10px] text-gray-400">Studio Aurora</span>
                                            <span className="block truncate text-xs font-semibold text-gray-900">{t.formName}</span>
                                        </span>
                                    </div>
                                    <p className="mt-2.5 text-[10px] text-gray-400">{t.pages[step - 1]}</p>
                                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-gray-100">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 transition-[width] duration-700"
                                            style={{ width: step === 1 ? '50%' : '100%' }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* 2 – Anamnese ausfüllen */}
                            {step === 1 && (
                                <div key={panelKey} className="mt-3 space-y-2.5">
                                    <TypedField label={t.nameLabel} value={t.client} delay={0} />
                                    <ChoiceField question={t.medsQ} yes={t.yes} no={t.no} delay={450} />
                                    <TypedField label={t.allergyLabel} value={t.allergyValue} delay={900} />
                                    <ChoiceField question={t.pregnantQ} yes={t.yes} no={t.no} delay={1350} />
                                </div>
                            )}

                            {/* 3 – Einwilligung unterschreiben */}
                            {step === 2 && (
                                <div key={panelKey} className="mt-3">
                                    <div className="tf-ui-line-in rounded-xl bg-gray-50 p-2.5">
                                        <p className="text-[11px] font-semibold text-gray-900">{t.consentTitle}</p>
                                        <p className="mt-1 text-[10px] leading-relaxed text-gray-600">{t.consentText}</p>
                                    </div>
                                    <div className="tf-ui-line-in mt-2 flex items-center gap-2 text-[11px] font-medium text-gray-700" style={{ animationDelay: '200ms' }}>
                                        <span className="tf-forms-pick flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border" style={{ animationDelay: '500ms' }}>
                                            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path pathLength={1} className="tf-forms-sign" style={{ animationDelay: '600ms', animationDuration: '400ms' }} d="M5 12.5l4.5 4.5L19 7.5" />
                                            </svg>
                                        </span>
                                        {t.consentCheck}
                                    </div>
                                    <p className="mt-2.5 text-[10px] font-medium text-gray-500">{t.signature}</p>
                                    <div className="relative mt-1 h-[4.5rem] rounded-xl border border-dashed border-gray-300">
                                        <span className="absolute inset-x-5 bottom-4 border-b border-gray-200" />
                                        <span className="absolute bottom-3.5 left-2.5 text-[10px] leading-none text-gray-300">×</span>
                                        <svg viewBox="0 0 200 70" className="absolute inset-0 h-full w-full" fill="none">
                                            <path
                                                pathLength={1}
                                                className="tf-forms-sign"
                                                style={{ animationDelay: '900ms' }}
                                                d={SIGNATURE}
                                                stroke="#312e81"
                                                strokeWidth="2.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* 4 – Bestätigung am Handy */}
                            {step === 3 && (
                                <div key={panelKey} className="flex flex-col items-center pt-2 text-center">
                                    <span className="tf-ui-pop flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-[0_12px_30px_-10px_rgba(16,185,129,0.7)]">
                                        <DrawCheck className="h-7 w-7" color="white" />
                                    </span>
                                    <p className="mt-4 text-base font-semibold text-gray-900">{t.thanks}</p>
                                    <p className="mt-1 px-2 text-xs leading-relaxed text-gray-500">{t.received}</p>
                                    <div className="tf-ui-line-in mt-4 w-full rounded-xl border border-gray-200 p-3 text-left" style={{ animationDelay: '350ms' }}>
                                        <div className="flex items-center gap-2">
                                            <FileText className="h-4 w-4 flex-shrink-0 text-indigo-600" />
                                            <span className="min-w-0">
                                                <span className="block truncate text-[11px] font-semibold text-gray-900">{t.formName}</span>
                                                <span className="block truncate text-[10px] text-gray-400">{t.signedAt}</span>
                                            </span>
                                        </div>
                                        <div className="mt-2 flex items-center gap-1.5 border-t border-gray-100 pt-2 text-[10px] font-medium text-emerald-700">
                                            <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                                            <span className="truncate">{t.copyByMail}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Knopf unten im Formular */}
                        {(step === 1 || step === 2) && (
                            <span
                                key={`btn-${panelKey}`}
                                className="tf-ui-ring absolute inset-x-4 bottom-4 flex h-9 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-xs font-semibold text-white"
                                style={{ animationDelay: step === 1 ? '2200ms' : '2500ms' }}
                            >
                                {step === 1 ? t.next : t.submit}
                            </span>
                        )}
                    </div>
                </div>

                {/* Studio-Seite: Termin gebucht, Link geht automatisch raus (auf dem Handy ausgeblendet) */}
                {step === 0 && (
                    <div key={`booked-${cycle}`} className="tf-ui-pop absolute -left-12 top-24 z-10 hidden w-52 sm:block" style={{ animationDelay: '300ms' }}>
                        <div className="tf-ui-float">
                            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)]">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{t.booked}</p>
                                <div className="mt-1.5 flex items-center gap-2">
                                    <ClientAvatar initials={t.initials} />
                                    <span className="min-w-0">
                                        <span className="block truncate text-xs font-semibold text-gray-900">{t.client}</span>
                                        <span className="block truncate text-[10px] text-gray-500">{t.bookedMeta}</span>
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-indigo-50 px-2 py-1.5 text-[10px] font-semibold text-indigo-700">
                                    <Send className="h-3 w-3 flex-shrink-0" />
                                    <span className="truncate">{t.linkSent}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Studio-Seite: Formular abgeschlossen im Kundenprofil, als PDF abrufbar */}
                {step === 3 && (
                    <div key={`profile-${cycle}`} className="tf-ui-pop absolute -bottom-6 -right-2 z-10 w-[12.5rem] sm:-right-10 sm:w-52" style={{ animationDelay: '700ms' }}>
                        <div className="tf-ui-float">
                            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)]">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{t.profile}</p>
                                <div className="mt-1.5 flex items-center gap-2">
                                    <ClientAvatar initials={t.initials} />
                                    <span className="truncate text-xs font-semibold text-gray-900">{t.client}</span>
                                </div>
                                <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-emerald-50 px-2 py-1.5">
                                    <FileText className="h-3.5 w-3.5 flex-shrink-0 text-emerald-600" />
                                    <span className="min-w-0 flex-1">
                                        <span className="block truncate text-[11px] font-semibold text-gray-900">{t.formName}</span>
                                        <span className="mt-0.5 flex items-center justify-between gap-2">
                                            <span className="truncate text-[10px] text-emerald-700">{t.completed}</span>
                                            <span className="rounded border border-rose-100 bg-white px-1 text-[9px] font-bold leading-4 text-rose-600">PDF</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
