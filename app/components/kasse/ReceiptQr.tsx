/**
 * Dekorativer QR-Code wie auf einem signierten Beleg (kein echter, lesbarer Code).
 * Das Muster ist fest berechnet, damit Server und Browser dasselbe zeichnen.
 */
const SIZE = 25;

function buildPath(seed: number): string {
    let state = seed;
    const random = () => {
        state = (state * 1103515245 + 12345) % 2147483648;
        return state / 2147483648;
    };

    const inFinder = (x: number, y: number) => {
        const corners = [
            [0, 0],
            [SIZE - 7, 0],
            [0, SIZE - 7],
        ];
        return corners.some(([cx, cy]) => x >= cx - 1 && x <= cx + 7 && y >= cy - 1 && y <= cy + 7);
    };

    const finderDark = (x: number, y: number) => {
        const corners = [
            [0, 0],
            [SIZE - 7, 0],
            [0, SIZE - 7],
        ];
        for (const [cx, cy] of corners) {
            const dx = x - cx;
            const dy = y - cy;
            if (dx < 0 || dy < 0 || dx > 6 || dy > 6) continue;
            const ring = Math.min(dx, dy, 6 - dx, 6 - dy);
            return ring !== 1;
        }
        return false;
    };

    let d = '';
    for (let y = 0; y < SIZE; y++) {
        for (let x = 0; x < SIZE; x++) {
            const dark = inFinder(x, y) ? finderDark(x, y) : random() > 0.52;
            if (dark) d += `M${x} ${y}h1v1h-1z`;
        }
    }
    return d;
}

const PATH = buildPath(418);

export default function ReceiptQr({ className = '' }: { className?: string }) {
    return (
        <svg viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`} className={className} aria-hidden="true" shapeRendering="crispEdges">
            <rect x={-1} y={-1} width={SIZE + 2} height={SIZE + 2} fill="#fff" />
            <path d={PATH} fill="#111827" />
        </svg>
    );
}
