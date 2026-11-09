'use client';

import type { CSSProperties, ReactNode } from 'react';
import { Bell, CalendarDays, Check, ChevronLeft, ChevronRight, Globe, MousePointer2, Sparkles, UserRound, Users } from 'lucide-react';
import { DemoGlow, DemoStepper, DemoWindow, pickLabels, useDemoSteps, type FeatureDemoProps } from './shared';
import { APPOINTMENT_CALENDAR_LABELS } from './appointment-calendar-demo-labels';
import './appointment-calendar-demo.css';

const DURATIONS = [2600, 3200, 3400, 3800] as const;
/** Ab diesem Schritt zeigt der Kalender das Team in der Tagesansicht statt deiner Woche */
const TEAM_STEP = 3;

/** Raster 09:00–16:00; alle Zeiten in Minuten ab 09:00 */
const HOURS = 7;
const HOUR_PX = 44;
const px = (minutes: number) => (minutes / 60) * HOUR_PX;
const clock = (minutes: number) => `${String(9 + Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

/** Jede Mitarbeiterin hat in der App eine Kalenderfarbe; ihre Termine erscheinen darin */
const TONES = [
    { block: 'border-rose-400 bg-rose-50 text-rose-900', dot: 'bg-rose-400' },
    { block: 'border-violet-400 bg-violet-50 text-violet-900', dot: 'bg-violet-400' },
    { block: 'border-sky-400 bg-sky-50 text-sky-900', dot: 'bg-sky-500' },
];

/** Montag bis Freitag, 9.–13. November; Donnerstag ist „heute“ */
const DATES = [9, 10, 11, 12, 13];
const TODAY = 3;

type Slot = { column: number; start: number; minutes: number; customer: number; service: number };

/** Deine Woche als Einzelstudio (Spalte = Wochentag) */
const WEEK: Slot[] = [
    { column: 0, start: 0, minutes: 60, customer: 0, service: 1 },
    { column: 0, start: 240, minutes: 60, customer: 2, service: 3 },
    { column: 2, start: 60, minutes: 60, customer: 5, service: 1 },
    { column: TODAY, start: 0, minutes: 60, customer: 4, service: 0 },
    { column: 4, start: 180, minutes: 60, customer: 3, service: 4 },
];
/** Tagesansicht mit Team am Donnerstag (Spalte = Mitarbeiterin); Spalte 0 bist du mit deinem Donnerstag */
const TEAM_DAY: Slot[] = [
    { column: 0, start: 0, minutes: 60, customer: 4, service: 0 },
    { column: 1, start: 30, minutes: 60, customer: 3, service: 4 },
    { column: 1, start: 240, minutes: 60, customer: 2, service: 3 },
    { column: 2, start: 60, minutes: 60, customer: 5, service: 1 },
    { column: 2, start: 300, minutes: 60, customer: 0, service: 0 },
];
/** Wird per Drag & Drop von Dienstag 11:00 auf Donnerstag 14:30 gezogen */
const MOVED = { fromDay: 1, from: 120, toDay: TODAY, to: 330, minutes: 45, customer: 1, service: 2 };
/** Neue Online-Buchung am Donnerstag um 12:00 */
const BOOKED = { start: 180, minutes: 60, service: 0 };

/** Termin im Raster: Kundin oben, Leistung darunter */
function Block({
    start,
    minutes,
    tone,
    name,
    service,
    icon,
    className = '',
    style,
    children,
}: {
    start: number;
    minutes: number;
    tone: string;
    name: string;
    service: string;
    icon?: ReactNode;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}) {
    return (
        <div className={`absolute inset-x-[3px] rounded-md border-l-[3px] ${tone} ${className}`} style={{ top: px(start) + 1, height: px(minutes) - 2, ...style }}>
            <div className="h-full overflow-hidden px-1.5 py-[3px] text-[10px] leading-tight">
                <p className="flex items-center gap-1 font-semibold">
                    <span className="truncate">{name}</span>
                    {icon}
                </p>
                <p className="truncate opacity-75">{service}</p>
            </div>
            {children}
        </div>
    );
}

/** Stundenlinien und Uhrzeiten-Spalte */
function HourLines() {
    return (
        <>
            {Array.from({ length: HOURS - 1 }, (_, line) => (
                <span key={line} className="absolute inset-x-0 border-t border-gray-100" style={{ top: px((line + 1) * 60) }} />
            ))}
        </>
    );
}

function TimeColumn() {
    return (
        <div className="relative">
            {Array.from({ length: HOURS }, (_, hour) => (
                <span key={hour} className="absolute right-1.5 text-[10px] tabular-nums text-gray-400" style={{ top: px(hour * 60) + 2 }}>
                    {clock(hour * 60)}
                </span>
            ))}
        </div>
    );
}

const floatingCard = 'rounded-xl border border-gray-200 bg-white p-2.5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.5)]';
const WEEK_COLUMNS = 'grid-cols-[2.25rem_repeat(5,minmax(0,1fr))]';
const TEAM_COLUMNS = 'grid-cols-[2.25rem_repeat(3,minmax(0,1fr))]';

/**
 * Terminkalender im Hero: erst die Wochenansicht eines Einzelstudios → neue Online-Buchung landet →
 * Termin per Drag & Drop auf einen anderen Tag → Wechsel zur Tagesansicht mit einer Spalte pro Mitarbeiterin.
 */
export default function AppointmentCalendarDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(APPOINTMENT_CALENDAR_LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const team = step >= TEAM_STEP;
    const moved = step >= 2;
    // Zwei Tagesspalten nach rechts und von 11:00 auf 14:30
    const dragFrom = {
        '--tf-from-x': `calc(${(MOVED.fromDay - MOVED.toDay) * 100}% - ${(MOVED.toDay - MOVED.fromDay) * 7}px)`,
        '--tf-from-y': `${px(MOVED.from) - px(MOVED.to)}px`,
    } as CSSProperties;

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
                            {team ? t.date : t.weekRange}
                        </>
                    }
                >
                    {/* Werkzeugleiste wie in der App: Heute, Woche/Tag und – sobald es ein Team gibt – Team/Räume */}
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
                        <div className="flex flex-shrink-0 items-center gap-1.5 text-[11px] font-semibold">
                            <span className="hidden rounded-md bg-gray-100 px-2 py-0.5 text-gray-600 sm:inline">{team ? t.day : t.week}</span>
                            {team ? (
                                <span key={`toggle-${cycle}`} className="tf-ui-pop flex rounded-md bg-gray-100 p-0.5">
                                    <span className="rounded bg-white px-2 py-0.5 text-indigo-700 shadow-sm">{t.team}</span>
                                    <span className="px-2 py-0.5 text-gray-500">{t.rooms}</span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-0.5 text-indigo-700">
                                    <UserRound className="h-3 w-3" />
                                    {t.solo}
                                </span>
                            )}
                        </div>
                    </div>

                    {team ? (
                        /* Tagesansicht mit Team: eine Spalte pro Mitarbeiterin */
                        <div key={`team-${cycle}`} className="tf-ui-pop">
                            <div className={`grid ${TEAM_COLUMNS} border-b border-gray-100`}>
                                <span />
                                {t.staff.map((name, index) => (
                                    <span key={name} className="flex min-w-0 items-center justify-center gap-1.5 border-l border-gray-100 py-2">
                                        <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${TONES[index].dot}`}>
                                            {name.charAt(0)}
                                        </span>
                                        <span className="truncate text-xs font-semibold text-gray-700">{name}</span>
                                    </span>
                                ))}
                            </div>
                            <div className={`grid ${TEAM_COLUMNS}`} style={{ height: HOURS * HOUR_PX }}>
                                <TimeColumn />
                                {[0, 1, 2].map((column) => (
                                    <div key={column} className="relative border-l border-gray-100">
                                        <HourLines />
                                        {TEAM_DAY.map((slot, index) =>
                                            slot.column !== column ? null : (
                                                <Block
                                                    key={index}
                                                    start={slot.start}
                                                    minutes={slot.minutes}
                                                    tone={TONES[column].block}
                                                    name={t.customers[slot.customer]}
                                                    service={t.services[slot.service]}
                                                    className={column > 0 ? 'tf-ui-pop' : ''}
                                                    style={column > 0 ? { animationDelay: `${350 + index * 140}ms` } : undefined}
                                                />
                                            )
                                        )}
                                        {column === 0 && (
                                            <>
                                                <Block
                                                    start={BOOKED.start}
                                                    minutes={BOOKED.minutes}
                                                    tone={TONES[0].block}
                                                    name={t.newCustomer}
                                                    service={t.services[BOOKED.service]}
                                                    icon={<Globe className="h-2.5 w-2.5 flex-shrink-0 text-rose-500" />}
                                                />
                                                <Block
                                                    start={MOVED.to}
                                                    minutes={MOVED.minutes}
                                                    tone={TONES[0].block}
                                                    name={t.customers[MOVED.customer]}
                                                    service={t.services[MOVED.service]}
                                                />
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Wochenansicht als Einzelstudio: eine Spalte pro Wochentag */
                        <div>
                            <div className={`grid ${WEEK_COLUMNS} border-b border-gray-100`}>
                                <span />
                                {t.weekdays.map((weekday, index) => (
                                    <span key={weekday} className="flex min-w-0 flex-col items-center border-l border-gray-100 py-1.5 leading-none">
                                        <span className={`text-[10px] font-medium ${index === TODAY ? 'text-indigo-600' : 'text-gray-400'}`}>{weekday}</span>
                                        <span
                                            className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums ${
                                                index === TODAY ? 'bg-indigo-600 text-white' : 'text-gray-700'
                                            }`}
                                        >
                                            {DATES[index]}
                                        </span>
                                    </span>
                                ))}
                            </div>
                            <div className={`grid ${WEEK_COLUMNS}`} style={{ height: HOURS * HOUR_PX }}>
                                <TimeColumn />
                                {DATES.map((date, column) => (
                                    <div key={date} className={`relative border-l border-gray-100 ${column === TODAY ? 'bg-indigo-50/30' : ''}`}>
                                        <HourLines />

                                        {WEEK.map((slot, index) =>
                                            slot.column !== column ? null : (
                                                <Block
                                                    key={`${cycle}-${index}`}
                                                    start={slot.start}
                                                    minutes={slot.minutes}
                                                    tone={TONES[0].block}
                                                    name={t.customers[slot.customer]}
                                                    service={t.services[slot.service]}
                                                    className={step === 0 ? 'tf-ui-pop' : ''}
                                                    style={step === 0 ? { animationDelay: `${index * 140}ms` } : undefined}
                                                />
                                            )
                                        )}

                                        {/* Termin, der verschoben wird: erst Dienstag 11:00, ab Schritt 3 Donnerstag 14:30 */}
                                        {column === MOVED.fromDay && !moved && (
                                            <Block
                                                key={`moved-${cycle}`}
                                                start={MOVED.from}
                                                minutes={MOVED.minutes}
                                                tone={TONES[0].block}
                                                name={t.customers[MOVED.customer]}
                                                service={t.services[MOVED.service]}
                                                className={step === 0 ? 'tf-ui-pop' : ''}
                                                style={step === 0 ? { animationDelay: '300ms' } : undefined}
                                            />
                                        )}
                                        {column === MOVED.fromDay && step === 2 && (
                                            <div
                                                key={`ghost-${cycle}`}
                                                className="tf-cal-demo-ghost absolute inset-x-[3px] rounded-md border border-dashed border-rose-300 bg-rose-50/50"
                                                style={{ top: px(MOVED.from) + 1, height: px(MOVED.minutes) - 2 }}
                                            />
                                        )}
                                        {column === MOVED.toDay && moved && (
                                            <Block
                                                key={`moved-${cycle}`}
                                                start={MOVED.to}
                                                minutes={MOVED.minutes}
                                                tone={TONES[0].block}
                                                name={t.customers[MOVED.customer]}
                                                service={t.services[MOVED.service]}
                                                className={`z-10 ${step === 2 ? 'tf-cal-demo-drag' : ''}`}
                                                style={step === 2 ? dragFrom : undefined}
                                            >
                                                {step === 2 && <MousePointer2 className="tf-cal-demo-cursor absolute -bottom-2 right-1 h-4 w-4 fill-white text-gray-900" />}
                                            </Block>
                                        )}

                                        {/* Neue Online-Buchung am Donnerstag */}
                                        {column === TODAY && step >= 1 && (
                                            <Block
                                                key={`booked-${cycle}`}
                                                start={BOOKED.start}
                                                minutes={BOOKED.minutes}
                                                tone={TONES[0].block}
                                                name={t.newCustomer}
                                                service={t.services[BOOKED.service]}
                                                icon={<Globe className="h-2.5 w-2.5 flex-shrink-0 text-rose-500" />}
                                                className={`z-10 ${step === 1 ? 'tf-cal-demo-drop' : ''}`}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </DemoWindow>

                {/* Benachrichtigung zur neuen Buchung */}
                {step === 1 && (
                    <div key={`notif-${cycle}`} className="tf-ui-pop absolute -right-2 -top-8 z-30 w-[12rem] sm:-right-10 sm:-top-9 sm:w-[13.5rem]" style={{ animationDelay: '200ms' }}>
                        <div className={`tf-ui-float ${floatingCard}`}>
                            <div className="flex items-start gap-2">
                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 text-white">
                                    <Bell className="h-3.5 w-3.5" />
                                </span>
                                <span className="min-w-0">
                                    <span className="flex items-center gap-1 text-xs font-semibold text-gray-900">
                                        <Sparkles className="h-3 w-3 flex-shrink-0 text-indigo-500" />
                                        <span className="truncate">{t.notifTitle}</span>
                                    </span>
                                    <span className="block truncate text-[11px] text-gray-600">
                                        {t.newCustomer} · {t.services[BOOKED.service]}
                                    </span>
                                    <span className="block truncate text-[10px] text-gray-400">
                                        {t.weekdays[TODAY]} {clock(BOOKED.start)} · {t.notifVia}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nach dem Verschieben: Kundin informieren? */}
                {step === 2 && (
                    <div key={`moved-toast-${cycle}`} className="tf-ui-pop absolute -bottom-7 -left-2 z-30 w-[13.5rem] sm:-left-10 sm:w-[14.5rem]" style={{ animationDelay: '1900ms' }}>
                        <div className={floatingCard}>
                            <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                                <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                                </span>
                                <span className="truncate">{t.moved}</span>
                            </p>
                            <p className="mt-0.5 truncate pl-[22px] text-[10px] tabular-nums text-gray-500">
                                {t.weekdays[MOVED.fromDay]} {clock(MOVED.from)} → {t.weekdays[MOVED.toDay]} {clock(MOVED.to)}
                            </p>
                            <div className="mt-2 flex items-center justify-between gap-2">
                                <span className="min-w-0 text-[11px] leading-tight text-gray-700">{t.notify}</span>
                                <span className="flex flex-shrink-0 gap-1 text-[10px] font-semibold">
                                    <span className="rounded-md bg-indigo-600 px-2 py-0.5 text-white">{t.yes}</span>
                                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-gray-600">{t.no}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mit Team: jede Mitarbeiterin bekommt eine Spalte */}
                {team && (
                    <div key={`team-card-${cycle}`} className="tf-ui-pop absolute -bottom-7 -right-2 z-30 w-[12.5rem] sm:-right-10 sm:w-[14rem]" style={{ animationDelay: '900ms' }}>
                        <div className={`tf-ui-float ${floatingCard}`}>
                            <div className="flex items-start gap-2">
                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 text-white">
                                    <Users className="h-3.5 w-3.5" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-xs font-semibold text-gray-900">{t.teamTitle}</span>
                                    <span className="block text-[11px] leading-snug text-gray-600">{t.teamText}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DemoStepper labels={t.steps} durations={DURATIONS} step={step} cycle={cycle} playing={playing} onSelect={goTo} stepAriaPrefix={t.stepAria} />
        </div>
    );
}
