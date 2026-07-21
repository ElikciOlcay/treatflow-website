import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata: Metadata = buildPageMetadata({
  pageKey: "contact",
  locale: "en",
  title: "Contact",
  description: "Get in touch with the Treatflow team or request early access for your country.",
});

export default function EnContact() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in touch</h1>
        <p className="text-lg text-gray-600 mb-12">
          Have a question about Treatflow? We&apos;re happy to help.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <a
            href="mailto:hello@treatflow.io"
            className="rounded-2xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="font-bold text-gray-900 mb-1">Email us</h2>
            <p className="text-sm text-gray-600">hello@treatflow.io</p>
          </a>

          <Link
            href="/en/early-access"
            className="rounded-2xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
              <ArrowRight className="h-6 w-6" />
            </div>
            <h2 className="font-bold text-gray-900 mb-1">Request early access</h2>
            <p className="text-sm text-gray-600 inline-flex items-center">
              Tell us about your studio
              <ArrowRight className="ml-1 h-4 w-4" />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
