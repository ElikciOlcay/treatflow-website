import { Heart, MapPin, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

const baseUrl = "https://www.treatflow.io";
const EARLY_ACCESS = "/en/early-access";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Treatflow is the all-in-one software for beauty studios. Made in Austria, built together with studios, GDPR-compliant and hosted in the EU.",
  alternates: { canonical: `${baseUrl}/en/about` },
};

const values = [
  { icon: Heart, title: "Built for studios", desc: "We build hand in hand with beauty professionals - every feature solves a real, everyday problem." },
  { icon: ShieldCheck, title: "Privacy first", desc: "GDPR-compliant and hosted on EU servers. Your data and your clients' data stay protected." },
  { icon: Users, title: "Personal support", desc: "Real people who know the beauty industry - and help you get set up and get the most out of Treatflow." },
  { icon: MapPin, title: "Made in Austria", desc: "Developed and supported in Europe, for studios across Europe and beyond." },
];

export default function EnAbout() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About us
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Software that gives studios their time back
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Treatflow started with a simple observation: beauty professionals spend
            far too much time on admin instead of their clients. We set out to change
            that - with one clear app that brings appointments, clients, forms,
            documentation and payments together.
          </p>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[16/9]">
          <Image
            src="/images/lifestyle/ueber-uns-studio-interior.png"
            alt="Modern beauty studio interior"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What we stand for
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles behind everything we build.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join 500+ studios using Treatflow
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            See for yourself - free for 14 days, no credit card required.
          </p>
          <a
            href={EARLY_ACCESS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            Request early access
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}
