"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Loader2, Mic, Sparkles, Square } from "lucide-react";
import { tryFeaturesDe } from "@/app/site/content/try-features/de";
import type { DictationStrings } from "@/app/site/content/try-features/types";

// Öffentlicher Demo-Endpunkt der App (gleiche KI wie in der Behandlungsdoku, gedrosselt)
const DEMO_API = `${process.env.NEXT_PUBLIC_DEMO_API_BASE || "https://app.treatflow.io"}/api/public/demo-dictation`;
const MAX_LENGTH = 800;

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0?: { transcript?: string } }> }) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

function speechRecognition(): { new (): SpeechRecognitionLike } | null {
  if (typeof window === "undefined") return null;
  const w = window as Window & {
    SpeechRecognition?: { new (): SpeechRecognitionLike };
    webkitSpeechRecognition?: { new (): SpeechRecognitionLike };
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

type DictationPanelProps = {
  booking: { time: string; treatment: string } | null;
  /** Texte, Beispiel und Sprache der Spracherkennung (Default: Deutsch) */
  content?: DictationStrings;
  /** Anhang hinter Uhrzeiten (" Uhr" bzw. "") */
  timeSuffix?: string;
  /** Sprungziel „Weiter: Formulare“; `null` = Button ausblenden (Sprache ohne Formular-Demo) */
  formsHref?: string | null;
};

/** KI-Diktat wie in der App: sprechen oder tippen, die KI macht daraus eine saubere Behandlungsdoku. */
export default function DictationPanel({
  booking,
  content: c = tryFeaturesDe.demos.dictationPanel,
  timeSuffix = tryFeaturesDe.demos.bookingPanel.timeSuffix,
  formsHref = `#${tryFeaturesDe.anchors.forms}`,
}: DictationPanelProps) {
  const EXAMPLE = c.example;
  const STEPS = c.steps;
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const [supported, setSupported] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const committedRef = useRef("");

  useEffect(() => {
    setSupported(Boolean(speechRecognition()));
    return () => recognitionRef.current?.abort();
  }, []);

  const toggleRecording = () => {
    if (recording) {
      recognitionRef.current?.stop();
      return;
    }
    const Ctor = speechRecognition();
    if (!Ctor) {
      setSupported(false);
      return;
    }
    const recognition = new Ctor();
    recognition.lang = c.speechLang;
    recognition.continuous = true;
    recognition.interimResults = true;
    committedRef.current = text ? `${text.trim()} ` : "";
    recognition.onresult = (event) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const piece = event.results[i]?.[0]?.transcript ?? "";
        if (event.results[i].isFinal) committedRef.current += `${piece.trim()} `;
        else interim += piece;
      }
      setText(`${committedRef.current}${interim}`.slice(0, MAX_LENGTH));
    };
    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        setMessage(c.micDenied);
      } else if (event.error === "no-speech") {
        setMessage(c.noSpeech);
      } else if (event.error === "network") {
        setMessage(c.network);
      }
    };
    recognition.onend = () => {
      setRecording(false);
      recognitionRef.current = null;
    };
    recognitionRef.current = recognition;
    setMessage(null);
    setRecording(true);
    recognition.start();
  };

  const refine = async () => {
    const raw = text.trim();
    if (!raw) {
      setMessage(c.empty);
      return;
    }
    recognitionRef.current?.stop();
    setStatus("loading");
    setMessage(null);
    try {
      // text/plain, damit der Browser ohne Preflight sendet
      const response = await fetch(DEMO_API, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(c.apiLocale ? { rawText: raw, locale: c.apiLocale } : { rawText: raw }),
      });
      const data = (await response.json().catch(() => ({}))) as { refinedText?: string; error?: string };
      if (!response.ok || !data.refinedText) {
        // Server-Meldungen sind deutsch; andere Sprachen zeigen eigene Texte
        if (!c.useServerErrors) throw new Error(response.status === 429 ? c.rateLimited : c.unavailable);
        throw new Error(data.error || "Die KI ist gerade nicht erreichbar.");
      }
      setResult(
        data.refinedText
          .split("\n")
          .map((line) => line.replace(/^\s*-\s*/, "").trim())
          .filter(Boolean)
      );
      setStatus("done");
    } catch (error) {
      setStatus("error");
      // Netzwerkfehler (z. B. „Failed to fetch“) nicht roh anzeigen
      const offline = error instanceof TypeError;
      setMessage(
        !offline && error instanceof Error
          ? error.message
          : c.unavailable
      );
    }
  };

  if (status === "done") {
    return (
      <div aria-live="polite">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Sparkles className="h-4 w-4 text-indigo-500" />
          {c.resultTitle}
          {booking && <span className="font-normal text-gray-500">· {booking.treatment}, {booking.time}{timeSuffix}</span>}
        </div>
        <ul className="space-y-2 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 text-sm text-gray-800">
          {result.map((line, index) => (
            <li key={index} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-gray-500">{c.resultNote}</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          {formsHref && (
            <a
              href={formsHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              {c.nextForms}
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setResult([]);
            }}
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
          >
            {c.again}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-semibold text-gray-900">
        {c.title}
        {booking && <span className="font-normal text-gray-500"> · {booking.treatment}</span>}
      </p>
      <ol className="mb-3 mt-2 space-y-1 text-xs text-gray-600">
        {STEPS.map((step, index) => (
          <li key={step} className="flex items-start gap-2">
            <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="relative">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value.slice(0, MAX_LENGTH))}
          rows={3}
          maxLength={MAX_LENGTH}
          placeholder={c.placeholder}
          aria-label={c.textareaAria}
          className="block w-full resize-none rounded-xl border border-gray-200 bg-white px-3.5 py-3 pr-14 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
        />
        {supported && (
          <button
            type="button"
            onClick={toggleRecording}
            aria-pressed={recording}
            aria-label={recording ? c.stopAria : c.startAria}
            className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full text-white transition-all ${
              recording ? "bg-rose-500 shadow-[0_0_0_6px_rgba(244,63,94,0.18)] animate-pulse" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {recording ? <Square className="h-4 w-4 fill-current" /> : <Mic className="h-5 w-5" />}
          </button>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
        <button type="button" onClick={() => setText(EXAMPLE)} className="font-semibold text-indigo-600 hover:text-indigo-800">
          {c.insertExample}
        </button>
        <span>
          {recording ? c.listening : supported ? c.typeHint : c.unsupported}
        </span>
      </div>

      {message && <p className="mt-3 text-sm text-rose-600">{message}</p>}

      <button
        type="button"
        onClick={refine}
        disabled={status === "loading" || !text.trim()}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:from-gray-200 disabled:to-gray-200 disabled:text-gray-400"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
        {status === "loading" ? c.refining : c.refine}
      </button>
      <p className="mt-3 text-center text-[11px] text-gray-400">{c.disclaimer}</p>
    </div>
  );
}
