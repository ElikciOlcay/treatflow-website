"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export type AccessFormCopy = {
  nameLabel: string;
  studioLabel: string;
  cityLabel: string;
  countryLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  submitLabel: string;
  successTitle: string;
  successText: string;
  errorText: string;
  requiredHint: string;
};

type Props = {
  locale: string;
  leadSource: string;
  copy: AccessFormCopy;
  defaultCountry?: string;
};

const defaultCopyEn: AccessFormCopy = {
  nameLabel: "Your name",
  studioLabel: "Studio / clinic name",
  cityLabel: "City",
  countryLabel: "Country",
  emailLabel: "Email",
  phoneLabel: "Phone (optional)",
  messageLabel: "How can we help? (optional)",
  submitLabel: "Request early access",
  successTitle: "Request received",
  successText:
    "Thanks! We will review your request and get back to you shortly.",
  errorText: "Something went wrong. Please try again or email hello@treatflow.io.",
  requiredHint: "Required fields",
};

export default function InternationalAccessForm({
  locale,
  leadSource,
  copy = defaultCopyEn,
  defaultCountry = "",
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      praxisname: String(form.get("studio") || ""),
      ort: String(form.get("city") || ""),
      telefon: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      wunsch: `Early Access | locale=${locale} | country=${String(form.get("country") || "")}`,
      nachricht: String(form.get("message") || ""),
      leadSource,
    };

    const formEl = event.currentTarget;

    try {
      const response = await fetch("/api/demo-anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("request failed");
      formEl.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-emerald-600" />
        <h3 className="text-xl font-semibold text-gray-900">{copy.successTitle}</h3>
        <p className="mt-2 text-gray-600">{copy.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <p className="text-sm text-gray-500">{copy.requiredHint}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            {copy.nameLabel} *
          </span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            {copy.studioLabel} *
          </span>
          <input
            name="studio"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            {copy.cityLabel}
          </span>
          <input
            name="city"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            {copy.countryLabel} *
          </span>
          <input
            name="country"
            required
            defaultValue={defaultCountry}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            {copy.emailLabel} *
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-700">
            {copy.phoneLabel}
          </span>
          <input
            name="phone"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-gray-700">
          {copy.messageLabel}
        </span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {copy.errorText}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <ArrowRight className="mr-2 h-5 w-5" />
        )}
        {copy.submitLabel}
      </button>
    </form>
  );
}
