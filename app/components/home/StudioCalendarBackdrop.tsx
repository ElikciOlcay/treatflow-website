"use client";

import { useEffect, useRef } from "react";

type CalendarBackdropProps = {
  step: number;
  locale: string;
  newBookingLabel: string;
  /** Uhrzeit für den Hinweis „Neue Buchung“, z. B. aus der Buchungs-Demo */
  bookedTime?: string | null;
};

type Slot = { day: number; row: number; length: number; color: string };

const DAYS = 7;
const ROWS = 12; // 08:00 bis 19:00
const FIRST_HOUR = 8;
const COLORS = ["#818cf8", "#38bdf8", "#f472b6", "#34d399", "#fbbf24", "#a78bfa"];
const POP_MS = 520;
const STAGGER_MS = 140;

// Feste, überschneidungsfreie Terminverteilung, damit jeder Besuch gleich aussieht.
function buildSlots(): Slot[] {
  let seed = 7;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const taken = new Set<string>();
  const slots: Slot[] = [];
  let guard = 0;
  while (slots.length < 42 && guard < 2000) {
    guard += 1;
    const day = Math.floor(random() * 6);
    const row = Math.floor(random() * (ROWS - 1));
    const length = random() > 0.6 ? 2 : 1;
    const keys = Array.from({ length }, (_, i) => `${day}-${row + i}`);
    if (keys.some((key) => taken.has(key))) continue;
    keys.forEach((key) => taken.add(key));
    slots.push({ day, row, length, color: COLORS[slots.length % COLORS.length] });
  }
  return slots;
}

const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

/**
 * Wochenkalender als Bühne hinter dem Hero der Startseite: ein leicht gekipptes
 * Terminraster, das sich Schritt für Schritt mit Buchungen füllt.
 * Gleiche Optik wie im Onboarding der App (tfv2: CalendarBackdrop).
 */
const PALETTE = {
  line: "99, 102, 241",
  dot: "99, 102, 241",
  dayLabel: "rgba(71, 85, 105, 0.6)",
  dayLabelMuted: "rgba(100, 116, 139, 0.35)",
  hourLabel: "rgba(100, 116, 139, 0.5)",
  slotText: "rgba(30, 41, 59, 0.8)",
  fill: "3d",
  stage: "255, 255, 255",
};

export default function CalendarBackdrop({ step, locale, newBookingLabel, bookedTime = null }: CalendarBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bookedTimeRef = useRef(bookedTime);
  bookedTimeRef.current = bookedTime;
  const stateRef = useRef({ step, changedAt: 0, shownBefore: 0 });

  useEffect(() => {
    const state = stateRef.current;
    if (state.step !== step) {
      state.shownBefore = Math.min(visibleCount(state.step), visibleCount(step));
      state.step = step;
      state.changedAt = performance.now();
    }
  }, [step]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = PALETTE;
    const slots = buildSlots();
    const weekdayFormat = new Intl.DateTimeFormat(locale, { weekday: "short" });
    // 2024-01-01 war ein Montag
    const dayLabels = Array.from({ length: DAYS }, (_, i) => weekdayFormat.format(new Date(2024, 0, 1 + i)));
    const state = stateRef.current;
    state.changedAt = performance.now();
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    // Nur zeichnen, solange der Hero sichtbar ist
    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => {
      const wasVisible = visible;
      visible = entry.isIntersecting;
      if (visible && !wasVisible) frame = window.requestAnimationFrame(render);
    });
    visibility.observe(canvas);

    const render = (now: number) => {
      if (!visible) return;
      ctx.clearRect(0, 0, width, height);

      // Kalender als Fläche in Perspektive: oben schmal, unten breit
      const top = height * 0.46;
      const bottom = height * 1.08;
      const planeWidth = Math.min(width * 0.92, 1080);
      const project = (u: number, v: number) => {
        const depth = Math.pow(v, 1.5);
        const y = top + depth * (bottom - top);
        const spread = 0.62 + 0.75 * depth;
        return { x: width / 2 + (u - 0.5) * planeWidth * spread, y, scale: spread };
      };
      const cellPoint = (day: number, row: number) => project(day / DAYS, row / ROWS);

      // Raster: Punkte an den Kreuzungen, feine Linien zwischen den Tagen
      for (let day = 0; day <= DAYS; day += 1) {
        const a = cellPoint(day, 0);
        const b = cellPoint(day, ROWS);
        const line = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        line.addColorStop(0, `rgba(${palette.line}, 0)`);
        line.addColorStop(1, `rgba(${palette.line}, 0.28)`);
        ctx.strokeStyle = line;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      for (let row = 0; row <= ROWS; row += 1) {
        const left = cellPoint(0, row);
        const right = cellPoint(DAYS, row);
        ctx.strokeStyle = `rgba(${palette.line}, ${0.03 + (row / ROWS) * 0.1})`;
        ctx.beginPath();
        ctx.moveTo(left.x, left.y);
        ctx.lineTo(right.x, right.y);
        ctx.stroke();
        for (let day = 0; day <= DAYS * 4; day += 1) {
          const p = cellPoint(day / 4, row);
          const alpha = 0.08 + (row / ROWS) * 0.3;
          ctx.fillStyle = `rgba(${palette.dot}, ${alpha})`;
          const size = 1.1 + p.scale * 0.6;
          ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
        }
      }

      // Oberkante weich ausblenden
      const fadeTop = ctx.createLinearGradient(0, top - 40, 0, top + height * 0.12);
      fadeTop.addColorStop(0, `rgba(${palette.stage}, 1)`);
      fadeTop.addColorStop(1, `rgba(${palette.stage}, 0)`);
      ctx.fillStyle = fadeTop;
      ctx.fillRect(0, top - 40, width, height * 0.12 + 40);

      // Wochentage und Uhrzeiten
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (let day = 0; day < DAYS; day += 1) {
        const p = cellPoint(day + 0.5, -0.55);
        ctx.font = `600 ${Math.round(10 + p.scale * 3)}px Inter, ui-sans-serif, system-ui, sans-serif`;
        ctx.fillStyle = day === 6 ? palette.dayLabelMuted : palette.dayLabel;
        ctx.fillText(dayLabels[day], p.x, p.y);
      }
      ctx.textAlign = "right";
      for (let row = 0; row < ROWS; row += 2) {
        const p = cellPoint(0, row + 0.5);
        ctx.font = `500 ${Math.round(9 + p.scale * 3)}px Inter, ui-sans-serif, system-ui, sans-serif`;
        ctx.fillStyle = palette.hourLabel;
        ctx.fillText(`${String(FIRST_HOUR + row).padStart(2, "0")}:00`, p.x - 10 * p.scale, p.y);
      }
      ctx.textAlign = "left";

      // Termine: bereits gezeigte stehen, neue springen gestaffelt herein
      const count = visibleCount(state.step);
      let newest: { x: number; y: number; w: number; label: string; progress: number } | null = null;
      for (let index = 0; index < count; index += 1) {
        const slot = slots[index];
        const fresh = index >= state.shownBefore;
        const delay = fresh ? (index - state.shownBefore) * STAGGER_MS : 0;
        const t = reduceMotion || !fresh ? 1 : Math.max(0, Math.min(1, (now - state.changedAt - delay) / POP_MS));
        if (t <= 0) continue;
        const pop = reduceMotion ? 1 : easeOutBack(t);

        const a = cellPoint(slot.day, slot.row);
        const b = cellPoint(slot.day + 1, slot.row + slot.length);
        const inset = 3 * a.scale;
        const x = a.x + inset;
        const y = a.y + inset;
        const w = cellPoint(slot.day + 1, slot.row).x - a.x - inset * 2;
        const h = b.y - a.y - inset * 2;
        const cx = x + w / 2;
        const cy = y + h / 2;

        ctx.save();
        ctx.globalAlpha = Math.min(1, t * 1.5) * (0.4 + 0.4 * (slot.row / ROWS));
        ctx.translate(cx, cy);
        ctx.scale(pop, pop);
        ctx.translate(-cx, -cy);
        roundRect(ctx, x, y, w, h, 5 * a.scale);
        ctx.fillStyle = `${slot.color}${palette.fill}`;
        ctx.fill();
        ctx.strokeStyle = `${slot.color}cc`;
        ctx.lineWidth = 1;
        ctx.stroke();
        roundRect(ctx, x, y, 3 * a.scale, h, 2);
        ctx.fillStyle = slot.color;
        ctx.fill();
        if (w > 46 && h > 16) {
          ctx.font = `600 ${Math.round(8 + a.scale * 3)}px Inter, ui-sans-serif, system-ui, sans-serif`;
          ctx.fillStyle = palette.slotText;
          ctx.fillText(`${String(FIRST_HOUR + slot.row).padStart(2, "0")}:00`, x + 8 * a.scale, y + 9 * a.scale);
        }
        ctx.restore();

        if (fresh && index === count - 1) {
          newest = { x: cx, y, w, label: `${newBookingLabel} · ${bookedTimeRef.current ?? `${String(FIRST_HOUR + slot.row).padStart(2, "0")}:00`}`, progress: t };
        }
      }

      // Hinweis zur neuesten Buchung, schwebt über dem Termin
      const toastAge = now - state.changedAt;
      if (newest && newest.progress >= 1 && !reduceMotion && toastAge < 6500) {
        const appear = Math.min(1, (toastAge - (count - state.shownBefore) * STAGGER_MS - POP_MS) / 300);
        const fade = toastAge > 5800 ? 1 - (toastAge - 5800) / 700 : 1;
        const alpha = Math.max(0, Math.min(appear, fade));
        if (alpha > 0) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.font = "600 11px Inter, ui-sans-serif, system-ui, sans-serif";
          const textWidth = ctx.measureText(newest.label).width;
          const boxW = textWidth + 30;
          const boxX = newest.x - boxW / 2;
          const boxY = newest.y - 34 - (1 - alpha) * 6;
          roundRect(ctx, boxX, boxY, boxW, 22, 11);
          ctx.fillStyle = "#6366f1";
          ctx.shadowColor = "rgba(99, 102, 241, 0.8)";
          ctx.shadowBlur = 16;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.fillStyle = "#a7f3d0";
          ctx.beginPath();
          ctx.arc(boxX + 11, boxY + 11, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#f8fafc";
          ctx.textBaseline = "middle";
          ctx.fillText(newest.label, boxX + 20, boxY + 11.5);
          ctx.restore();
        }
      }

      // Dezente „Jetzt“-Linie, die langsam durch den Tag wandert
      if (!reduceMotion) {
        const row = ((now / 1000) % 40) / 40 * ROWS;
        const left = cellPoint(0, row);
        const right = cellPoint(DAYS, row);
        const sweep = ctx.createLinearGradient(left.x, left.y, right.x, right.y);
        sweep.addColorStop(0, "rgba(56, 189, 248, 0)");
        sweep.addColorStop(0.5, "rgba(56, 189, 248, 0.35)");
        sweep.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.strokeStyle = sweep;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(left.x, left.y);
        ctx.lineTo(right.x, right.y);
        ctx.stroke();
      }

      frame = window.requestAnimationFrame(render);
    };

    frame = window.requestAnimationFrame(render);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
    };
  }, [locale, newBookingLabel]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function visibleCount(step: number) {
  return Math.min(26, 4 + Math.max(0, step) * 4);
}
