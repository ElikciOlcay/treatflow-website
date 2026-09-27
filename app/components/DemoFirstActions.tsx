"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { trackCtaClick, type CtaKind, type CtaLocation } from "@/lib/analytics/ctaEvents";
import {
  DEMO_BOOKING_URL,
  getDemoFirstCopy,
  registerHrefForLang,
  type DemoFirstLang,
} from "@/lib/cta/demoFirst";

type Tone = "brand" | "onDark" | "pricingMuted" | "pricingFeatured" | "nav";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const buttonByTone: Record<Tone, string> = {
  brand: `bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg ${focusRing} focus-visible:outline-indigo-600`,
  onDark: `bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl ${focusRing} focus-visible:outline-white`,
  pricingMuted: `w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 ${focusRing} focus-visible:outline-gray-900`,
  pricingFeatured: `w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 ${focusRing} focus-visible:outline-white`,
  nav: `bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap ${focusRing} focus-visible:outline-indigo-600`,
};

type DemoFirstActionsProps = {
  location: CtaLocation;
  lang?: DemoFirstLang;
  tone?: Tone;
  align?: "start" | "center";
  fullWidth?: boolean;
  showDemoNote?: boolean;
  showTrialDetail?: boolean;
  trialVariant?: "link" | "sentence";
  plan?: string;
  registerHref?: string;
  className?: string;
  density?: "default" | "compact";
  showTrial?: boolean;
  onActivate?: () => void;
};

export default function DemoFirstActions({
  location,
  lang = "de",
  tone = "brand",
  align = "start",
  fullWidth = false,
  showDemoNote = true,
  showTrialDetail = true,
  trialVariant = "link",
  plan,
  registerHref,
  className = "",
  density = "default",
  showTrial = false,
  onActivate,
}: DemoFirstActionsProps) {
  const copy = getDemoFirstCopy(lang);
  const trialHref = registerHref ?? registerHrefForLang(lang);
  const isNav = tone === "nav";
  const onDark = tone === "onDark" || tone === "pricingFeatured";
  const noteClass = onDark ? "text-indigo-100" : "text-gray-600";
  const trialClass = onDark
    ? `text-base font-medium text-white underline underline-offset-4 decoration-white/60 hover:text-indigo-100 rounded-sm ${focusRing} focus-visible:outline-white`
    : `text-base font-semibold text-indigo-700 underline underline-offset-4 decoration-indigo-300 hover:text-indigo-900 rounded-sm ${focusRing} focus-visible:outline-indigo-600`;
  const navTrialClass = `whitespace-nowrap text-sm font-medium text-indigo-700 underline underline-offset-4 decoration-indigo-200 hover:text-indigo-900 rounded-sm ${focusRing} focus-visible:outline-indigo-600`;

  const alignClass =
    align === "center" || fullWidth ? "items-center text-center" : "items-center lg:items-start text-center lg:text-left";

  if (isNav) {
    return (
      <div className={`flex shrink-0 items-center gap-4 ${className}`}>
        {showTrial ? (
          <TrialAnchor
            href={trialHref}
            location={location}
            plan={plan}
            className={navTrialClass}
            onActivate={onActivate}
          >
            {copy.trialPrompt}
          </TrialAnchor>
        ) : null}
        <a
          href={DEMO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackCtaClick({ kind: "demo", location, plan });
            onActivate?.();
          }}
          className={`inline-flex items-center justify-center gap-2 ${buttonByTone.nav}`}
        >
          {copy.demo}
        </a>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-3 ${alignClass} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <div className={fullWidth ? "w-full" : ""}>
        <a
          href={DEMO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackCtaClick({ kind: "demo", location, plan });
            onActivate?.();
          }}
          className={`inline-flex items-center justify-center gap-2 ${buttonByTone[tone]} ${density === "compact" && tone === "brand" ? "!px-5 !py-3.5 !text-base !rounded-xl" : ""} ${fullWidth ? "w-full" : ""}`}
        >
          {copy.demo}
          {!isNav && <ArrowRight className={density === "compact" ? "h-4 w-4" : "h-5 w-5"} aria-hidden="true" />}
        </a>
        {showDemoNote && !isNav && (
          <p className={`mt-2 text-sm ${noteClass}`}>{copy.demoNote}</p>
        )}
      </div>

      {showTrial && (trialVariant === "sentence" ? (
        <p className={`text-base ${onDark ? "text-indigo-100" : "text-gray-700"}`}>
          {copy.selfServeLead}{" "}
          <TrialAnchor href={trialHref} location={location} plan={plan} className={trialClass} onActivate={onActivate}>
            {copy.selfServeLink}
          </TrialAnchor>
        </p>
      ) : (
        <div className={isNav ? "" : "flex flex-col gap-1"}>
          <TrialAnchor
            href={trialHref}
            location={location}
            plan={plan}
            className={isNav ? navTrialClass : trialClass}
            onActivate={onActivate}
          >
            {copy.trialPrompt}
          </TrialAnchor>
          {showTrialDetail && !isNav && (
            <p className={`text-sm ${noteClass}`}>
              {copy.trialDetail}
              <span aria-hidden="true"> · </span>
              {copy.trialNoCard}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function TrialAnchor({
  href,
  location,
  plan,
  className,
  children,
  onActivate,
}: {
  href: string;
  location: CtaLocation;
  plan?: string;
  className: string;
  children: ReactNode;
  onActivate?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackCtaClick({ kind: "trial", location, plan });
        onActivate?.();
      }}
      className={className}
    >
      {children}
    </a>
  );
}

export function CtaTextLink({
  href,
  kind,
  location,
  plan,
  className,
  children,
}: {
  href: string;
  kind: CtaKind;
  location: CtaLocation;
  plan?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick({ kind, location, plan })}
      className={className}
    >
      {children}
    </a>
  );
}
