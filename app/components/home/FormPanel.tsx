"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, FolderCheck } from "lucide-react";
import DemoSignaturePad from "@/app/components/demo-forms/DemoSignaturePad";

const SKIN_TYPES = ["Normal", "Trocken", "Fettig", "Mischhaut", "Empfindlich"];

/** Kurzes Anamneseformular mit Unterschrift, wie es Kundinnen vor dem Termin ausfüllen. */
export default function FormPanel() {
  const [name, setName] = useState("");
  const [skinType, setSkinType] = useState("");
  const [allergies, setAllergies] = useState<"" | "ja" | "nein">("");
  const [allergyDetails, setAllergyDetails] = useState("");
  const [consent, setConsent] = useState(false);
  const [signature, setSignature] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);

  const missing = {
    name: !name.trim(),
    skinType: !skinType,
    allergies: !allergies,
    consent: !consent,
    signature: !signature,
  };
  const stepOneValid = !missing.name && !missing.skinType && !missing.allergies;
  const valid = !Object.values(missing).some(Boolean);

  if (done) {
    return (
      <div className="py-4 text-center" role="status" aria-live="polite">
        <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_24px_-10px_rgba(16,185,129,0.9)]">
          <Check className="h-6 w-6" strokeWidth={3} />
        </span>
        <p className="text-lg font-semibold text-gray-900">Formular unterschrieben</p>
        <p className="mt-1 text-sm text-gray-600">Anamnese von {name.trim()}</p>
        <p className="mx-auto mt-4 flex max-w-xs items-center gap-2 text-left text-sm text-gray-600">
          <FolderCheck className="h-4 w-4 flex-shrink-0 text-indigo-500" />
          Landet in Treatflow direkt in der Kundenakte, mit Unterschrift und Datum.
        </p>
        <Link
          href="/formulare-testen"
          className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Alle Formular-Vorlagen testen
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const fieldClass = (error: boolean) =>
    `block w-full rounded-xl border px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 ${
      error ? "border-rose-300 bg-rose-50" : "border-gray-200 bg-white"
    }`;
  const show = (key: keyof typeof missing) => tried && missing[key];

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        setTried(true);
        if (step === 1) {
          if (stepOneValid) {
            setStep(2);
            setTried(false);
          }
          return;
        }
        if (valid) setDone(true);
      }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-wide text-gray-500">
          {step === 1 ? "1. Deine Angaben" : "2. Einwilligung"}
        </span>
        <span className="text-gray-400">Seite {step} von 2</span>
      </div>

      {step === 1 && (
        <>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block text-xs font-semibold text-gray-700">
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Lena Muster" className={`mt-1 ${fieldClass(show("name"))}`} />
        </label>
        <label className="block text-xs font-semibold text-gray-700">
          Hauttyp
          <select value={skinType} onChange={(e) => setSkinType(e.target.value)} className={`mt-1 ${fieldClass(show("skinType"))}`}>
            <option value="">Bitte wählen</option>
            {SKIN_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset>
        <legend className="text-xs font-semibold text-gray-700">Hast du Allergien?</legend>
        <div className="mt-1.5 flex gap-2">
          {(["nein", "ja"] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={allergies === value}
              onClick={() => setAllergies(value)}
              className={`flex-1 rounded-lg border py-2 text-sm font-semibold capitalize transition-all ${
                allergies === value
                  ? "border-indigo-500 bg-indigo-600 text-white"
                  : show("allergies")
                    ? "border-rose-300 bg-rose-50 text-gray-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
        {allergies === "ja" && (
          <input
            value={allergyDetails}
            onChange={(e) => setAllergyDetails(e.target.value)}
            placeholder="Welche? z. B. Nickel, Duftstoffe"
            className={`mt-2 ${fieldClass(false)}`}
          />
        )}
      </fieldset>

        </>
      )}

      {step === 2 && (
        <>
      <label className={`flex items-start gap-2.5 text-sm ${show("consent") ? "text-rose-600" : "text-gray-700"}`}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        Ich habe die Aufklärung gelesen und willige in die Behandlung ein.
      </label>

      <div>
        <p className="text-xs font-semibold text-gray-700">Unterschrift</p>
        <div className={`mt-1.5 overflow-hidden rounded-xl border [&_canvas]:h-32 ${show("signature") ? "border-rose-300" : "border-gray-200"}`}>
          <DemoSignaturePad value={signature} onChange={setSignature} error={show("signature")} />
        </div>
        <div className="mt-1 flex justify-between text-[11px] text-gray-400">
          <span>Mit Finger oder Maus unterschreiben</span>
          {signature && (
            <button type="button" onClick={() => setSignature("")} className="font-semibold text-indigo-600 hover:text-indigo-800">
              Löschen
            </button>
          )}
        </div>
      </div>

        </>
      )}

      {tried && !valid && <p className="text-sm text-rose-600">Bitte fülle die markierten Felder aus.</p>}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
      >
        {step === 1 ? "Weiter" : "Formular absenden"}
        <ArrowRight className="h-4 w-4" />
      </button>
      {step === 2 && (
        <button type="button" onClick={() => setStep(1)} className="mx-auto block text-xs font-semibold text-indigo-600 hover:text-indigo-800">
          Zurück zu Seite 1
        </button>
      )}
      <p className="text-center text-[11px] text-gray-400">Nur eine Vorschau, es wird nichts gesendet oder gespeichert.</p>
    </form>
  );
}
