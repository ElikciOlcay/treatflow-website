'use client';

/* Gezeichnete Vorher-/Nachher-Porträts für die Doku-Szene – bewusst keine echten Fotos. */

const SKIN = 'radial-gradient(ellipse at 50% 30%, #fbe5d7 0%, #efc4ab 80%)';
const CHEEK_BEFORE = 'radial-gradient(circle, rgba(225,29,72,0.5), rgba(225,29,72,0) 70%)';
const CHEEK_BEFORE_SOFT = 'radial-gradient(circle, rgba(225,29,72,0.28), rgba(225,29,72,0) 70%)';
const CHEEK_AFTER = 'radial-gradient(circle, rgba(251,146,60,0.18), rgba(251,146,60,0) 70%)';

/** Hautunreinheiten auf der linken Wange (Position in % des Gesichts) */
const BLEMISHES = [
    [14, 44],
    [24, 50],
    [18, 55],
    [30, 43],
    [10, 51],
] as const;

/** Porträt; `mark` zeichnet die markierte Zone (Kreis-Werkzeug) samt Beschriftung auf die Wange. */
export function SkinPhoto({ after = false, mark }: { after?: boolean; mark?: string }) {
    return (
        <div className="absolute inset-0 overflow-hidden" style={{ background: 'linear-gradient(160deg, #fdf2ec 0%, #f1d8ca 100%)' }}>
            {/* Haare, Hals, Schultern */}
            <div className="absolute left-1/2 top-[12%] aspect-[4/5] h-[84%] -translate-x-1/2 rounded-[45%] bg-gradient-to-b from-amber-900/80 via-amber-800/60 to-amber-700/30" />
            <div className="absolute left-1/2 top-[74%] h-[20%] w-[18%] -translate-x-1/2" style={{ background: '#ecc0a6' }} />
            <div className="absolute left-1/2 top-[86%] h-[30%] w-[86%] -translate-x-1/2 rounded-t-[45%] bg-gradient-to-b from-white to-sky-100" />

            {/* Gesicht */}
            <div className="absolute left-1/2 top-[18%] aspect-[2/3] h-[66%] -translate-x-1/2 rounded-[48%]" style={{ background: SKIN }}>
                <span className="absolute left-[20%] top-[30%] h-1.5 w-[20%] rounded-b-full border-b-2 border-amber-950/40" />
                <span className="absolute right-[20%] top-[30%] h-1.5 w-[20%] rounded-b-full border-b-2 border-amber-950/40" />
                <span className="absolute left-[4%] top-[42%] h-[20%] w-[36%] rounded-full" style={{ background: after ? CHEEK_AFTER : CHEEK_BEFORE }} />
                <span className="absolute right-[4%] top-[42%] h-[20%] w-[36%] rounded-full" style={{ background: after ? CHEEK_AFTER : CHEEK_BEFORE_SOFT }} />
                <span className="absolute left-1/2 top-[70%] h-1 w-[24%] -translate-x-1/2 rounded-full bg-rose-400/70" />
                {!after &&
                    BLEMISHES.map(([x, y]) => (
                        <span key={`${x}-${y}`} className="absolute h-1 w-1 rounded-full bg-rose-500/60" style={{ left: `${x}%`, top: `${y + 4}%` }} />
                    ))}
                {after && <span className="absolute left-[58%] top-[38%] h-[10%] w-[18%] rounded-full bg-white/60 blur-[3px]" />}
                {mark && (
                    <>
                        {/* viewBox im Seitenverhältnis des Gesichts (2:3), damit der Kreis nicht verzerrt */}
                        <svg viewBox="0 0 100 150" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                            <path
                                d="M0 78 A22 21 0 1 0 44 78 A22 21 0 1 0 0 78"
                                pathLength={1}
                                className="tf-tdoc-draw"
                                style={{ animationDelay: '1300ms' }}
                                fill="none"
                                stroke="#4f46e5"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span
                            className="tf-ui-pop absolute left-[42%] top-[34%] rounded bg-white/90 px-1.5 py-px text-[9px] font-semibold text-indigo-700 shadow-sm"
                            style={{ animationDelay: '1800ms' }}
                        >
                            {mark}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

/** Beschriftung oben links auf einem Foto, z. B. „Vorher · 10:02“. */
export function PhotoTag({ children }: { children: string }) {
    return <span className="absolute left-1.5 top-1.5 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-medium text-white">{children}</span>;
}
