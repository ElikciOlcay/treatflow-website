'use client';

import type { ReactNode } from 'react';
import { Check, ChevronDown, ClipboardCheck, FileText, Mic, PenLine, SlidersHorizontal, Sparkles, type LucideIcon } from 'lucide-react';
import { DemoGlow, DemoStepper, DemoWindow, pickLabels, useDemoSteps, type DemoLabels, type FeatureDemoProps } from './shared';
import './nisv-demo.css';

/** Formular → Diktat → Parameter → Unterschriften & gespeichert (≈ 13 s) */
const DURATIONS = [2600, 3200, 3000, 4400] as const;

const SKIN_TYPES = ['I', 'II', 'III', 'IV', 'V', 'VI'] as const;
const LEVELS = [35, 60, 85, 50, 100, 70, 40, 90, 55, 75, 45, 65];

/** Namenszüge (viewBox 120 × 60), werden über stroke-dashoffset gezeichnet */
const SIGN_CLIENT =
    'M10 40 C14 26 20 14 24 17 C28 21 20 38 18 44 C24 36 30 30 35 32 C39 34 35 41 40 40 C46 38 47 30 52 31 C56 32 52 41 57 40 C62 38 64 29 69 30 C72 31 70 40 75 38 L80 44 L85 30 L90 44 L96 26 C100 22 108 34 114 28';
const SIGN_STAFF =
    'M12 42 L18 20 L24 38 L30 20 L36 42 C40 34 44 30 46 34 C48 38 44 42 48 41 C54 38 56 30 60 32 C64 34 58 42 64 41 C72 39 80 26 86 30 C92 34 84 44 92 42 C100 40 104 32 112 30';

type NisvText = {
    sr: string;
    steps: readonly [string, string, string, string];
    stepAria: string;
    title: string;
    status: string;
    client: string;
    initials: string;
    template: string;
    device: string;
    time: string;
    formsTitle: string;
    formName: string;
    completed: string;
    checks: readonly [string, string, string];
    templateReady: string;
    startDoc: string;
    dictTitle: string;
    recording: string;
    refined: string;
    transcript: readonly [string, string, string];
    paramsTitle: string;
    zone: string;
    newZone: string;
    skinType: string;
    energy: string;
    pulse: string;
    reaction: string;
    reactionValue: string;
    signTitle: string;
    signClient: string;
    signStaff: string;
    signedAt: string;
    save: string;
    savedTitle: string;
    savedMeta: string;
    savedItems: readonly [string, string, string, string];
    footer: readonly [string, string, string, string];
    saved: string;
};

const LABELS: DemoLabels<NisvText> = {
    de: {
        sr: 'Beispiel für eine NiSV-Dokumentation mit Treatflow: Die Kundin hat Anamnese, Aufklärung und Einwilligung vorab digital ausgefüllt und unterschrieben. Die Mitarbeiterin diktiert die Behandlung, die KI bereitet den Text auf, Hauttyp, Energie und Pulsdauer werden je Zone eingetragen. Kundin und Mitarbeiterin unterschreiben, und die Behandlung wird mit Datum im Kundenprofil gespeichert.',
        steps: ['Formular', 'Diktat', 'Parameter', 'Signatur'],
        stepAria: 'Schritt',
        title: 'Behandlungsdoku', status: 'Laserraum · Mia',
        client: 'Lena Wagner', initials: 'LW', template: 'Laser-Haarentfernung', device: 'Diodenlaser 808 nm', time: 'Heute 14:00',
        formsTitle: 'Vor der Behandlung', formName: 'Laser-Haarentfernung Anamnese', completed: 'Abgeschlossen',
        checks: ['Hauttyp nach Fitzpatrick: III', 'Aufklärung gelesen', 'Einwilligung unterschrieben'],
        templateReady: 'Behandlungsvorlage', startDoc: 'Doku starten',
        dictTitle: 'Sprachnotiz', recording: 'Aufnahme läuft …', refined: 'Mit KI aufbereitet',
        transcript: ['Achseln, Hauttyp 3.', 'Diodenlaser 808 nm, 18 J/cm², Pulsdauer 30 ms.', 'Haut gekühlt, leichtes Erythem, Sonnenschutz besprochen.'],
        paramsTitle: 'Parameter je Zone', zone: 'Achseln', newZone: 'Neue Zone',
        skinType: 'Hauttyp (Fitzpatrick)', energy: 'Energie (J/cm²)', pulse: 'Pulsdauer (ms)', reaction: 'Hautreaktion', reactionValue: 'Leichtes Erythem',
        signTitle: 'Unterschriften', signClient: 'Kundin', signStaff: 'Mitarbeiterin', signedAt: 'Unterzeichnet heute, 14:32', save: 'Speichern',
        savedTitle: 'Gespeichert', savedMeta: 'Lena Wagner · heute',
        savedItems: ['Einwilligung', 'Parameter', 'Sprachnotiz', 'Unterschriften'],
        footer: ['Formular liegt vor – Doku kann starten', 'Einsprechen statt tippen', 'Gerätewerte eintragen', 'Kundin und Mitarbeiterin unterschreiben'],
        saved: 'Gespeichert · mit Datum im Kundenprofil',
    },
    en: {
        sr: 'Example of laser treatment documentation in Treatflow: the client has completed and signed the intake form, information and consent digitally in advance. The therapist dictates the treatment, AI tidies up the text, and skin type, energy and pulse duration are recorded per zone. Client and therapist sign, and the treatment is saved with its date in the client profile.',
        steps: ['Consent', 'Dictation', 'Settings', 'Sign-off'],
        stepAria: 'Step',
        title: 'Treatment record', status: 'Laser room · Mia',
        client: 'Emma Collins', initials: 'EC', template: 'Laser hair removal', device: 'Diode laser 808 nm', time: 'Today 14:00',
        formsTitle: 'Before the treatment', formName: 'Laser hair removal intake', completed: 'Completed',
        checks: ['Fitzpatrick skin type: III', 'Information read', 'Consent signed'],
        templateReady: 'Treatment template', startDoc: 'Start record',
        dictTitle: 'Voice note', recording: 'Recording …', refined: 'Refined with AI',
        transcript: ['Underarms, skin type 3.', 'Diode laser 808 nm, 18 J/cm², pulse duration 30 ms.', 'Skin cooled, mild erythema, sun protection discussed.'],
        paramsTitle: 'Settings per zone', zone: 'Underarms', newZone: 'New zone',
        skinType: 'Skin type (Fitzpatrick)', energy: 'Energy (J/cm²)', pulse: 'Pulse duration (ms)', reaction: 'Skin reaction', reactionValue: 'Mild erythema',
        signTitle: 'Signatures', signClient: 'Client', signStaff: 'Therapist', signedAt: 'Signed today, 14:32', save: 'Save',
        savedTitle: 'Saved', savedMeta: 'Emma Collins · today',
        savedItems: ['Consent', 'Settings', 'Voice note', 'Signatures'],
        footer: ['Form on file – ready to document', 'Speak instead of typing', 'Enter device settings', 'Client and therapist sign'],
        saved: 'Saved · dated in the client profile',
    },
};

function PanelTitle({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
    return (
        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            <Icon className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">{children}</span>
        </p>
    );
}

/** Eingabefeld, dessen Wert sich selbst eintippt */
function ValueField({ label, value, delay, select = false }: { label: string; value: string; delay: number; select?: boolean }) {
    return (
        <div className="tf-ui-line-in min-w-0" style={{ animationDelay: `${delay}ms` }}>
            <p className="truncate text-[10px] font-medium text-gray-500">{label}</p>
            <div className="mt-1 flex h-8 items-center justify-between gap-2 rounded-lg border border-gray-200 px-2.5 text-xs font-semibold tabular-nums text-gray-900">
                <span className="tf-nisv-type" style={{ animationDelay: `${delay + 250}ms` }}>
                    {value}
                </span>
                {select && <ChevronDown className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" />}
            </div>
        </div>
    );
}

/** Namenszug, der sich selbst zeichnet */
function Signature({ path, delay, className, duration }: { path: string; delay: number; className: string; duration?: number }) {
    return (
        <svg viewBox="0 0 120 60" className={className} fill="none">
            <path
                pathLength={1}
                className="tf-nisv-sign"
                style={{ animationDelay: `${delay}ms`, animationDuration: duration ? `${duration}ms` : undefined }}
                d={path}
                stroke="#312e81"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/**
 * Hero-Szene „NiSV-Dokumentation“ (nur DE): Einwilligung liegt als Formular vor, Diktat mit KI,
 * Laser-Parameter je Zone, Unterschriften von Kundin und Mitarbeiterin, gespeichert im Kundenprofil.
 */
export default function NisvDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const panelKey = `${cycle}-${step}`;

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>

            <DemoGlow />

            <div className="relative" aria-hidden="true">
                <DemoWindow
                    title={t.title}
                    subtitle={t.template}
                    status={
                        <>
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            {t.status}
                        </>
                    }
                >
                    <div className="space-y-3.5 p-4 sm:p-5">
                        {/* Kundin und Vorlage */}
                        <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-3">
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-sm font-semibold text-rose-700">
                                {t.initials}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-semibold text-gray-900">{t.client}</span>
                                <span className="block truncate text-xs text-gray-500">{t.template}</span>
                                <span className="block truncate text-[11px] text-gray-400">{t.device}</span>
                            </span>
                            <span className="self-start whitespace-nowrap text-xs tabular-nums text-gray-400">{t.time}</span>
                        </div>

                        <div className="h-[15.5rem]">
                            {/* 1 – Anamnese, Aufklärung und Einwilligung liegen als Formular vor */}
                            {step === 0 && (
                                <div key={panelKey}>
                                    <PanelTitle icon={ClipboardCheck}>{t.formsTitle}</PanelTitle>
                                    <div className="tf-ui-line-in mt-2 rounded-xl border border-gray-100 p-3">
                                        <div className="flex items-center gap-2.5">
                                            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                                <FileText className="h-4 w-4" />
                                            </span>
                                            <span className="min-w-0 flex-1">
                                                <span className="block truncate text-sm font-semibold text-gray-900">{t.formName}</span>
                                                <span className="block truncate text-[11px] font-medium text-emerald-600">{t.completed}</span>
                                            </span>
                                        </div>
                                        <ul className="mt-2.5 space-y-2 border-t border-gray-100 pt-2.5">
                                            {t.checks.map((label, index) => (
                                                <li key={label} className="tf-ui-line-in flex items-center gap-2 text-xs text-gray-700" style={{ animationDelay: `${250 + index * 350}ms` }}>
                                                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                                                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <path pathLength={1} className="tf-nisv-sign" style={{ animationDelay: `${450 + index * 350}ms`, animationDuration: '400ms' }} d="M5 12.5l4.5 4.5L19 7.5" />
                                                        </svg>
                                                    </span>
                                                    <span className="min-w-0 flex-1 truncate">{label}</span>
                                                    {index === 2 && <Signature path={SIGN_CLIENT} delay={1100} duration={600} className="h-5 w-12 flex-shrink-0" />}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="tf-ui-line-in mt-3 flex items-center justify-between gap-3 rounded-xl bg-indigo-50/70 px-3 py-2" style={{ animationDelay: '1300ms' }}>
                                        <span className="min-w-0">
                                            <span className="block truncate text-[10px] font-semibold uppercase tracking-wide text-indigo-400">{t.templateReady}</span>
                                            <span className="block truncate text-xs font-semibold text-indigo-900">{t.template}</span>
                                        </span>
                                        <span className="tf-ui-ring whitespace-nowrap rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white" style={{ animationDelay: '1600ms' }}>
                                            {t.startDoc}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* 2 – Diktat, von der KI aufbereitet */}
                            {step === 1 && (
                                <div key={panelKey}>
                                    <PanelTitle icon={Mic}>{t.dictTitle}</PanelTitle>
                                    <div className="mt-2 rounded-xl border border-gray-100 p-3">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="relative h-5 min-w-0 flex-1">
                                                <span className="tf-nisv-out absolute inset-0 flex items-center gap-1.5 truncate text-xs font-semibold text-rose-600" style={{ animationDelay: '1800ms' }}>
                                                    <span className="tf-nisv-blink h-2 w-2 flex-shrink-0 rounded-full bg-rose-500" />
                                                    {t.recording}
                                                </span>
                                                <span className="tf-ui-pop absolute inset-0 flex items-center gap-1.5 truncate text-xs font-semibold text-emerald-700" style={{ animationDelay: '1950ms' }}>
                                                    <Sparkles className="h-3.5 w-3.5 flex-shrink-0" />
                                                    {t.refined}
                                                </span>
                                            </span>
                                            <span className="flex h-6 flex-shrink-0 items-center gap-[3px]">
                                                {LEVELS.map((height, index) => (
                                                    <span
                                                        key={index}
                                                        className="tf-nisv-level w-[3px] rounded-full bg-gradient-to-t from-indigo-600 to-sky-400"
                                                        style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }}
                                                    />
                                                ))}
                                            </span>
                                        </div>
                                        <div className="mt-3 space-y-1 rounded-lg bg-gray-50 p-2.5 text-xs leading-relaxed text-gray-700">
                                            {t.transcript.map((line, index) => (
                                                <p key={line} className="tf-ui-line-in" style={{ animationDelay: `${150 + index * 500}ms` }}>
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3 – Laser-Parameter je Zone */}
                            {step === 2 && (
                                <div key={panelKey}>
                                    <PanelTitle icon={SlidersHorizontal}>{t.paramsTitle}</PanelTitle>
                                    <div className="mt-2 flex gap-1.5">
                                        <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-[11px] font-semibold text-white">{t.zone}</span>
                                        <span className="rounded-lg border border-dashed border-gray-300 px-2.5 py-1 text-[11px] font-medium text-gray-400">+ {t.newZone}</span>
                                    </div>
                                    <div className="tf-ui-line-in mt-3" style={{ animationDelay: '150ms' }}>
                                        <p className="truncate text-[10px] font-medium text-gray-500">{t.skinType}</p>
                                        <div className="mt-1 grid grid-cols-6 gap-1">
                                            {SKIN_TYPES.map((type) =>
                                                type === 'III' ? (
                                                    <span key={type} className="tf-nisv-pick flex h-7 items-center justify-center rounded-md border text-[11px] font-semibold" style={{ animationDelay: '500ms' }}>
                                                        {type}
                                                    </span>
                                                ) : (
                                                    <span key={type} className="flex h-7 items-center justify-center rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-500">
                                                        {type}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                                        <ValueField label={t.energy} value="18" delay={800} />
                                        <ValueField label={t.pulse} value="30" delay={1150} />
                                    </div>
                                    <div className="mt-2.5">
                                        <ValueField label={t.reaction} value={t.reactionValue} delay={1500} select />
                                    </div>
                                </div>
                            )}

                            {/* 4 – Unterschriften von Kundin und Mitarbeiterin */}
                            {step === 3 && (
                                <div key={panelKey}>
                                    <PanelTitle icon={PenLine}>{t.signTitle}</PanelTitle>
                                    <div className="mt-2 grid grid-cols-2 gap-2.5">
                                        {[
                                            { label: t.signClient, path: SIGN_CLIENT, delay: 150 },
                                            { label: t.signStaff, path: SIGN_STAFF, delay: 900 },
                                        ].map(({ label, path, delay }) => (
                                            <div key={label} className="min-w-0">
                                                <p className="truncate text-[10px] font-medium text-gray-500">{label}</p>
                                                <div className="relative mt-1 h-28 rounded-xl border border-dashed border-gray-300 bg-gray-50/40">
                                                    <span className="absolute inset-x-3 bottom-5 border-b border-gray-200" />
                                                    <Signature path={path} delay={delay} duration={900} className="absolute inset-0 h-full w-full" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="tf-ui-line-in mt-3 flex items-center justify-between gap-3" style={{ animationDelay: '1500ms' }}>
                                        <span className="truncate text-[11px] text-gray-500">{t.signedAt}</span>
                                        <span className="tf-ui-ring whitespace-nowrap rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white" style={{ animationDelay: '1700ms' }}>
                                            {t.save}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Status */}
                        <div
                            className={`relative flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-center text-xs font-semibold transition-colors duration-500 sm:text-sm ${
                                step === 0 ? 'bg-gray-50 text-gray-500' : 'bg-indigo-50 text-indigo-700'
                            }`}
                        >
                            <span className="truncate">{t.footer[step]}</span>
                            {step === 3 && (
                                <span
                                    key={`saved-${cycle}`}
                                    className="tf-ui-pop absolute inset-0 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 text-emerald-700"
                                    style={{ animationDelay: '1900ms' }}
                                >
                                    <Check className="h-4 w-4 flex-shrink-0" />
                                    <span className="truncate">{t.saved}</span>
                                </span>
                            )}
                        </div>
                    </div>
                </DemoWindow>

                {/* Mikrofon während des Diktats */}
                {step === 1 && (
                    <div key={`mic-${cycle}`} className="tf-ui-pop absolute -bottom-6 left-2 z-10 sm:-left-8">
                        <div className="relative flex h-14 w-14 items-center justify-center">
                            {[0, 1, 2].map((wave) => (
                                <span key={wave} className="tf-ui-wave absolute inset-0 rounded-full border-2 border-sky-400" style={{ animationDelay: `${wave * 500}ms` }} />
                            ))}
                            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-[0_16px_30px_-12px_rgba(79,70,229,0.7)]">
                                <Mic className="h-5 w-5" />
                            </span>
                        </div>
                    </div>
                )}

                {/* Gespeicherte Behandlung im Kundenprofil */}
                {step === 3 && (
                    <div key={`record-${cycle}`} className="absolute -right-2 -top-9 z-20 w-[10.5rem] drop-shadow-[0_22px_28px_rgba(15,23,42,0.28)] sm:-right-10 sm:w-48">
                        <div className="tf-ui-print rounded-xl bg-white p-3" style={{ animationDelay: '2000ms' }}>
                            <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                                </span>
                                <span className="truncate">{t.savedTitle}</span>
                            </p>
                            <p className="mt-0.5 truncate pl-[1.625rem] text-[10px] text-gray-400">{t.template}</p>
                            <ul className="mt-2 space-y-1 border-t border-dashed border-gray-200 pt-2">
                                {t.savedItems.map((item) => (
                                    <li key={item} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                                        <Check className="h-3 w-3 flex-shrink-0 text-emerald-500" strokeWidth={3} />
                                        <span className="truncate">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-2 flex items-center justify-between gap-2 border-t border-dashed border-gray-200 pt-2 text-[10px] text-gray-400">
                                <span className="truncate">{t.savedMeta}</span>
                                <span className="rounded border border-rose-100 px-1.5 py-0.5 text-[9px] font-bold text-rose-600">PDF</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
