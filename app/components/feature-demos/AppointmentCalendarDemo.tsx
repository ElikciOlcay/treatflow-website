'use client';

import type { CSSProperties, ReactNode } from 'react';
import { Bell, CalendarDays, Check, ChevronLeft, ChevronRight, Globe, MousePointer2, Sparkles, UserRound, Users } from 'lucide-react';
import { DemoGlow, DemoStepper, DemoWindow, pickLabels, useDemoSteps, type FeatureDemoProps } from './shared';
import { APPOINTMENT_CALENDAR_LABELS } from './appointment-calendar-demo-labels';
import './appointment-calendar-demo.css';

const DURATIONS = [2600, 3200, 3400, 3800] as const;
/** Ab diesem Schritt zeigt der Kalender das Team statt nur dich */
const TEAM_STEP = 3;

/** Tagesraster 09:00–16:00; alle Zeiten in Minuten ab 09:00 */
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

type Slot = { staff: number; start: number; minutes: number; customer: number; service: number };

/** Spalte 0 ist die Inhaberin; Spalten 1 und 2 kommen erst mit dem Team dazu */
const EXISTING: Slot[] = [
    { staff: 0, start: 0, minutes: 60, customer: 0, service: 1 },
    { staff: 0, start: 240, minutes: 60, customer: 2, service: 3 },
    { staff: 1, start: 30, minutes: 60, customer: 3, service: 4 },
    { staff: 1, start: 180, minutes: 60, customer: 4, service: 0 },
    { staff: 2, start: 60, minutes: 60, customer: 5, service: 1 },
];
/** Wird per Drag & Drop in derselben Spalte von 11:00 auf 14:30 gezogen */
const MOVED = { from: 120, to: 330, minutes: 45, customer: 1, service: 2 };
/** Neue Online-Buchung in der freien Lücke um 12:00 */
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

const floatingCard = 'rounded-xl border border-gray-200 bg-white p-2.5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.5)]';

/**
 * Terminkalender im Hero: erst der Tag eines Einzelstudios (eine Spalte) → neue Online-Buchung landet →
 * Termin per Drag & Drop verschoben → Ansicht wechselt zum Team mit einer Spalte pro Mitarbeiterin.
 */
export default function AppointmentCalendarDemo({ market }: FeatureDemoProps) {
    const t = pickLabels(APPOINTMENT_CALENDAR_LABELS, market);
    const { ref, step, cycle, playing, goTo } = useDemoSteps(DURATIONS);
    const team = step >= TEAM_STEP;
    const moved = step >= 2;
    const dragFrom = { '--tf-from-x': '0px', '--tf-from-y': `${px(MOVED.from) - px(MOVED.to)}px` } as CSSProperties;
    // Allein: eine breite Spalte. Mit Team: drei gleich breite Spalten (die Breite wird weich übergeblendet)
    const columns: CSSProperties = {
        gridTemplateColumns: team ? '2.25rem repeat(3, minmax(0, 1fr))' : '2.25rem minmax(0, 1fr) minmax(0, 0fr) minmax(0, 0fr)',
        transition: 'grid-template-columns 700ms cubic-bezier(0.22, 1, 0.36, 1)',
    };

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
                            {t.date}
                        </>
                    }
                >
                    {/* Werkzeugleiste wie in der App: Heute, Tag und – sobald es ein Team gibt – Team/Räume */}
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
                            <span className="hidden rounded-md bg-gray-100 px-2 py-0.5 text-gray-600 sm:inline">{t.day}</span>
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

                    {/* Kopfzeile: allein nur du, mit Team eine Spalte pro Mitarbeiterin */}
                    <div className="grid border-b border-gray-100" style={columns}>
                        <span />
                        {t.staff.map((name, index) => (
                            <span
                                key={name}
                                className={`flex min-w-0 items-center justify-center gap-1.5 overflow-hidden py-2 transition-opacity duration-500 ${
                                    index > 0 ? (team ? 'border-l border-gray-100 opacity-100' : 'opacity-0') : 'border-l border-gray-100'
                                }`}
                            >
                                <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${TONES[index].dot}`}>
                                    {name.charAt(0)}
                                </span>
                                <span className="truncate text-xs font-semibold text-gray-700">{name}</span>
                            </span>
                        ))}
                    </div>

                    {/* Tagesraster */}
                    <div className="grid" style={{ ...columns, height: HOURS * HOUR_PX }}>
                        <div className="relative">
                            {Array.from({ length: HOURS }, (_, hour) => (
                                <span key={hour} className="absolute right-1.5 text-[10px] tabular-nums text-gray-400" style={{ top: px(hour * 60) + 2 }}>
                                    {clock(hour * 60)}
                                </span>
                            ))}
                        </div>
                        {[0, 1, 2].map((column) => (
                            <div
                                key={column}
                                className={`relative overflow-hidden ${column === 0 || team ? 'border-l border-gray-100' : ''}`}
                            >
                                {Array.from({ length: HOURS - 1 }, (_, line) => (
                                    <span key={line} className="absolute inset-x-0 border-t border-gray-100" style={{ top: px((line + 1) * 60) }} />
                                ))}

                                {EXISTING.map((slot, index) =>
                                    slot.staff !== column || (column > 0 && !team) ? null : (
                                        <Block
                                            key={`${cycle}-${index}`}
                                            start={slot.start}
                                            minutes={slot.minutes}
                                            tone={TONES[column].block}
                                            name={t.customers[slot.customer]}
                                            service={t.services[slot.service]}
                                            className={(column === 0 && step === 0) || column > 0 ? 'tf-ui-pop' : ''}
                                            style={
                                                column === 0 && step === 0
                                                    ? { animationDelay: `${index * 140}ms` }
                                                    : column > 0
                                                      ? { animationDelay: `${450 + index * 120}ms` }
                                                      : undefined
                                            }
                                        />
                                    )
                                )}

                                {/* Termin, der verschoben wird: erst um 11:00, ab Schritt 3 um 14:30 */}
                                {column === 0 && !moved && (
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
                                {column === 0 && step === 2 && (
                                    <div
                                        key={`ghost-${cycle}`}
                                        className="tf-cal-demo-ghost absolute inset-x-[3px] rounded-md border border-dashed border-rose-300 bg-rose-50/50"
                                        style={{ top: px(MOVED.from) + 1, height: px(MOVED.minutes) - 2 }}
                                    />
                                )}
                                {column === 0 && moved && (
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
                                        {step === 2 && <MousePointer2 className="tf-cal-demo-cursor absolute -bottom-2 right-2 h-4 w-4 fill-white text-gray-900" />}
                                    </Block>
                                )}

                                {/* Neue Online-Buchung */}
                                {column === 0 && step >= 1 && (
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
                                {column === 0 && step === 1 && (
                                    <span
                                        key={`badge-${cycle}`}
                                        className="tf-msg-pop absolute right-[3px] z-20 flex items-center gap-1 whitespace-nowrap rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow-lg"
                                        style={{ top: px(BOOKED.start) - 21, animationDelay: '750ms' }}
                                    >
                                        <Sparkles className="h-3 w-3" />
                                        {t.newBadge}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
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
                                    <span className="block truncate text-xs font-semibold text-gray-900">{t.notifTitle}</span>
                                    <span className="block truncate text-[11px] text-gray-600">
                                        {t.newCustomer} · {t.services[BOOKED.service]}
                                    </span>
                                    <span className="block truncate text-[10px] text-gray-400">
                                        {clock(BOOKED.start)} · {t.notifVia}
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
                                {clock(MOVED.from)} → {clock(MOVED.to)}
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
                    <div key={`team-${cycle}`} className="tf-ui-pop absolute -bottom-7 -right-2 z-30 w-[12.5rem] sm:-right-10 sm:w-[14rem]" style={{ animationDelay: '900ms' }}>
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
