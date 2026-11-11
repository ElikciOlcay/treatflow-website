'use client';

import { CalendarDays, Check, ChevronLeft, ChevronRight, Copy, Globe, Layers, MousePointer2, Plane } from 'lucide-react';
import { DemoGlow, DemoStepper, DemoWindow, pickLabels, useDemoSteps, type FeatureDemoProps } from './shared';
import { SHIFT_PLANNER_LABELS } from './shift-planner-demo-labels';

const DURATIONS = [3000, 3400, 3200, 3600] as const;

/** Montag bis Freitag, 16.–20. November */
const DATES = [16, 17, 18, 19, 20];

type Shift = readonly [start: number, end: number];

/** Schichten pro Mitarbeiterin und Tag (volle Stunden); Mara hat am Mittwoch eine geteilte Schicht */
const PLAN: readonly (readonly Shift[])[][] = [
    [[[9, 17]], [[9, 17]], [[9, 12], [15, 19]], [], [[9, 15]]],
    [[[8, 14]], [[8, 14]], [[13, 20]], [[8, 14]], [[13, 20]]],
    [[], [[9, 17]], [[9, 17]], [[12, 20]], []],
];

/** Vorlagen wie in der App: Früh, Spät, Ganztags */
const TEMPLATES: Shift[] = [
    [8, 14],
    [13, 20],
    [9, 18],
];
/** In Schritt 2 bekommt die dritte Mitarbeiterin am Montag die Spätschicht per Vorlage */
const FROM_TEMPLATE = { staff: 2, day: 0, template: 1 };
/** In Schritt 3 hat die zweite Mitarbeiterin Donnerstag und Freitag Urlaub */
const ABSENCE = { staff: 1, days: [3, 4] };
/** Schritt 4: Am Donnerstag ist nur die Schicht 12–20 übrig, die Buchungsseite zeigt nur diese Zeiten */
const BOOKING_DAY = 3;
const BOOKING_SLOTS = ['12:00', '13:00', '14:30', '16:00', '17:30', '19:00'];

/** Farben der Mitarbeiterinnen wie im Terminkalender */
const TONES = [
    { chip: 'border-rose-200 bg-rose-50 text-rose-800', dot: 'bg-rose-400' },
    { chip: 'border-violet-200 bg-violet-50 text-violet-800', dot: 'bg-violet-400' },
    { chip: 'border-sky-200 bg-sky-50 text-sky-800', dot: 'bg-sky-500' },
];

const range = ([start, end]: Shift) => `${start}–${end}`;
const clock = (hour: number) => `${String(hour).padStart(2, '0')}:00`;

const floatingCard = 'rounded-xl border border-gray-200 bg-white p-2.5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.5)]';
const COLUMNS = 'grid-cols-[4.25rem_repeat(5,minmax(0,1fr))] sm:grid-cols-[5rem_repeat(5,minmax(0,1fr))]';

function ShiftChip({ shift, tone, className = '', delay }: { shift: Shift; tone: string; className?: string; delay?: number }) {
    return (
        <span
            className={`block truncate rounded-md border px-1 py-[3px] text-center text-[10px] font-semibold tabular-nums leading-none ${tone} ${className}`}
            style={delay !== undefined ? { animationDelay: `${delay}ms` } : undefined}
        >
            {range(shift)}
        </span>
    );
}

/**
 * Schichtplaner im Hero: Woche des Teams füllt sich → Spätschicht per Vorlage → Urlaub eintragen →
 * Online-Buchung zeigt am Donnerstag nur Zeiten innerhalb der übrigen Schicht.
 */
export default function ShiftPlannerDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(SHIFT_PLANNER_LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);

    const absent = (staff: number, day: number) => step >= 2 && staff === ABSENCE.staff && ABSENCE.days.includes(day);
    const shiftsFor = (staff: number, day: number): readonly Shift[] => {
        if (absent(staff, day)) return [];
        if (step >= 1 && staff === FROM_TEMPLATE.staff && day === FROM_TEMPLATE.day) return [TEMPLATES[FROM_TEMPLATE.template]];
        return PLAN[staff][day];
    };
    const weekHours = (staff: number) =>
        DATES.reduce((sum, _, day) => sum + shiftsFor(staff, day).reduce((s, [start, end]) => s + end - start, 0), 0);

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[34rem] pb-4 pt-10 sm:pt-12">
            <p className="sr-only">{t.sr}</p>
            <DemoGlow />

            <div className="relative" aria-hidden="true">
                <DemoWindow
                    title={t.title}
                    subtitle="Studio Aurora"
                    status={
                        <>
                            <CalendarDays className="h-3.5 w-3.5" />
                            {t.week}
                        </>
                    }
                >
                    {/* Werkzeugleiste wie in der App: Woche blättern, Vorwoche kopieren, Vorlagen */}
                    <div className="flex items-center justify-between gap-2 border-b border-gray-100 px-3 py-2">
                        <div className="flex min-w-0 items-center gap-1">
                            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-400">
                                <ChevronLeft className="h-3.5 w-3.5" />
                            </span>
                            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-400">
                                <ChevronRight className="h-3.5 w-3.5" />
                            </span>
                            <span className="ml-1 truncate rounded-md border border-gray-200 px-2 py-0.5 text-[11px] font-semibold text-gray-700">{t.today}</span>
                        </div>
                        <div className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold">
                            <span className="hidden min-w-0 items-center gap-1 truncate rounded-md border border-gray-200 px-2 py-0.5 text-gray-600 sm:flex">
                                <Copy className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{t.copyWeek}</span>
                            </span>
                            <span
                                className={`flex flex-shrink-0 items-center gap-1 rounded-md px-2 py-0.5 transition-colors ${
                                    step === 1 ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-700'
                                }`}
                            >
                                <Layers className="h-3 w-3" />
                                {t.templatesButton}
                            </span>
                        </div>
                    </div>

                    {/* Kopfzeile: Mo–Fr */}
                    <div className={`grid ${COLUMNS} border-b border-gray-100`}>
                        <span />
                        {t.weekdays.map((weekday, day) => (
                            <span
                                key={weekday}
                                className={`flex min-w-0 flex-col items-center border-l border-gray-100 py-1.5 leading-none transition-colors ${
                                    step === 3 && day === BOOKING_DAY ? 'bg-indigo-50' : ''
                                }`}
                            >
                                <span className={`text-[10px] font-medium ${step === 3 && day === BOOKING_DAY ? 'text-indigo-600' : 'text-gray-400'}`}>{weekday}</span>
                                <span className="mt-1 text-[11px] font-semibold tabular-nums text-gray-700">{DATES[day]}</span>
                            </span>
                        ))}
                    </div>

                    {/* Eine Zeile pro Mitarbeiterin mit Wochensumme */}
                    {t.staff.map((name, staff) => (
                        <div key={name} className={`grid ${COLUMNS} border-b border-gray-100 last:border-b-0`}>
                            <div className="flex min-w-0 items-center gap-1.5 px-2 py-2">
                                {/* Auf dem Handy ohne Avatar, damit der Name ganz zu sehen ist */}
                                <span className={`hidden h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white sm:flex ${TONES[staff].dot}`}>
                                    {name.charAt(0)}
                                </span>
                                <span className="min-w-0 leading-tight">
                                    <span className="block truncate text-[11px] font-semibold text-gray-800">{name}</span>
                                    <span key={`${cycle}-${step}-${staff}`} className="block truncate text-[10px] tabular-nums text-gray-400">
                                        {t.hours.replace('{n}', String(weekHours(staff)))}
                                    </span>
                                </span>
                            </div>

                            {DATES.map((date, day) => {
                                const fromTemplate = staff === FROM_TEMPLATE.staff && day === FROM_TEMPLATE.day;
                                const shifts = shiftsFor(staff, day);
                                const highlight = step === 3 && day === BOOKING_DAY;
                                return (
                                    <div
                                        key={date}
                                        className={`relative flex min-h-[2.75rem] min-w-0 flex-col justify-center gap-0.5 border-l border-gray-100 p-1 transition-colors ${
                                            highlight ? 'bg-indigo-50/70' : ''
                                        } ${step === 1 && fromTemplate ? 'rounded-md ring-2 ring-inset ring-indigo-400' : ''}`}
                                    >
                                        {absent(staff, day) ? (
                                            <span
                                                key={`absent-${cycle}`}
                                                className={`flex items-center justify-center gap-0.5 truncate rounded-md border border-amber-200 bg-amber-50 px-1 py-[3px] text-[10px] font-semibold leading-none text-amber-800 ${
                                                    step === 2 ? 'tf-ui-pop' : ''
                                                }`}
                                                style={step === 2 ? { animationDelay: `${900 + ABSENCE.days.indexOf(day) * 160}ms` } : undefined}
                                            >
                                                <Plane className="h-2.5 w-2.5 flex-shrink-0" />
                                                {/* Auf dem Handy reicht das Symbol, das Wort würde abgeschnitten */}
                                                <span className="hidden truncate sm:inline">{t.vacation}</span>
                                            </span>
                                        ) : shifts.length > 0 ? (
                                            shifts.map((shift, index) => (
                                                <ShiftChip
                                                    key={`${cycle}-${index}`}
                                                    shift={shift}
                                                    tone={TONES[staff].chip}
                                                    className={step === 0 || (step === 1 && fromTemplate) ? 'tf-ui-pop' : ''}
                                                    delay={step === 0 ? (staff * 5 + day) * 70 : step === 1 && fromTemplate ? 1500 : undefined}
                                                />
                                            ))
                                        ) : (
                                            <span className="text-center text-[10px] text-gray-300">{t.off}</span>
                                        )}

                                        {step === 1 && fromTemplate && (
                                            <MousePointer2
                                                key={`cursor-${cycle}`}
                                                className="tf-ui-pop absolute -bottom-2 right-0 h-4 w-4 fill-white text-gray-900"
                                                style={{ animationDelay: '250ms' }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </DemoWindow>

                {/* Schritt 2: Schnellauswahl aus den Schichtvorlagen */}
                {step === 1 && (
                    <div key={`templates-${cycle}`} className="tf-ui-pop absolute -bottom-9 -left-2 z-30 w-[12rem] sm:-left-10 sm:w-[13rem]" style={{ animationDelay: '450ms' }}>
                        <div className={floatingCard}>
                            <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                                <Layers className="h-3.5 w-3.5 flex-shrink-0 text-indigo-500" />
                                <span className="truncate">{t.templatesTitle}</span>
                            </p>
                            <div className="mt-1.5 space-y-1">
                                {TEMPLATES.map((template, index) => (
                                    <span
                                        key={index}
                                        className={`flex items-center justify-between gap-2 rounded-md px-2 py-1 text-[11px] ${
                                            index === FROM_TEMPLATE.template ? 'bg-indigo-50 font-semibold text-indigo-700 ring-1 ring-indigo-200' : 'text-gray-600'
                                        }`}
                                    >
                                        <span className="truncate">{t.templates[index]}</span>
                                        <span className="flex-shrink-0 tabular-nums">
                                            {clock(template[0])}–{clock(template[1])}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Schritt 3: Urlaub eintragen */}
                {step === 2 && (
                    <div key={`absence-${cycle}`} className="tf-ui-pop absolute -right-2 -top-8 z-30 w-[12.5rem] sm:-right-10 sm:-top-9 sm:w-[14rem]" style={{ animationDelay: '200ms' }}>
                        <div className={`tf-ui-float ${floatingCard}`}>
                            <div className="flex items-start gap-2">
                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                                    <Plane className="h-3.5 w-3.5" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block truncate text-xs font-semibold text-gray-900">{t.absenceTitle}</span>
                                    <span className="block truncate text-[11px] text-gray-600">
                                        {t.staff[ABSENCE.staff]} · {t.vacation}
                                    </span>
                                    <span className="block truncate text-[10px] text-gray-400">{t.absenceRange}</span>
                                </span>
                            </div>
                            <p className="mt-2 flex items-center gap-1.5 rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-600">
                                <Globe className="h-3 w-3 flex-shrink-0 text-gray-400" />
                                <span className="truncate">{t.absenceNote}</span>
                            </p>
                        </div>
                    </div>
                )}

                {/* Schritt 4: Buchungsseite bietet nur Zeiten innerhalb der Schicht an */}
                {step === 3 && (
                    <div key={`booking-${cycle}`} className="tf-ui-pop absolute -bottom-10 -right-2 z-30 w-[13rem] sm:-right-10 sm:w-[14.5rem]" style={{ animationDelay: '500ms' }}>
                        <div className={`tf-ui-float ${floatingCard}`}>
                            <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                                <Globe className="h-3.5 w-3.5 flex-shrink-0 text-indigo-500" />
                                <span className="truncate">
                                    {t.bookingTitle} · {t.bookingDay}
                                </span>
                            </p>
                            <div className="mt-2 grid grid-cols-3 gap-1">
                                {BOOKING_SLOTS.map((slot, index) => (
                                    <span
                                        key={slot}
                                        className="tf-ui-pop rounded-md border border-indigo-100 bg-indigo-50 py-1 text-center text-[10px] font-semibold tabular-nums text-indigo-700"
                                        style={{ animationDelay: `${800 + index * 90}ms` }}
                                    >
                                        {slot}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-500">
                                <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                    <Check className="h-2 w-2" strokeWidth={4} />
                                </span>
                                <span className="truncate">{t.bookingNote}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
