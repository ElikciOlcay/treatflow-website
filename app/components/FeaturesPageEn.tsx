import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle,
  ClipboardCheck,
  FileText,
  Gift,
  Globe,
  Link2,
  Plug,
  ShoppingBag,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AiAnswerCapsule, { AiAnswerCapsuleGroup } from "./AiAnswerCapsule";
import Breadcrumbs, { generateBreadcrumbSchema } from "./Breadcrumbs";
import FaqSectionEn from "./FaqSectionEn";
import TreatmentWorkflow from "./TreatmentWorkflow";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { EN_SLUGS } from "@/app/i18n/market-routes";

const REGISTER = APP_REGISTER_BY_MARKET.en;

const featureCards = [
  {
    href: `/en/${EN_SLUGS["appointment-calendar"]}`,
    icon: CalendarDays,
    title: "Appointment calendar",
    desc: "Day, week and month views with columns for staff or rooms. Online bookings land in the same calendar.",
    highlights: ["Staff and room columns", "Drag and drop", "Synced with online booking"],
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    href: `/en/${EN_SLUGS["online-booking"]}`,
    icon: Link2,
    title: "Online booking",
    desc: "Your own booking page with live availability. No marketplace commission. Confirmations go out automatically.",
    highlights: ["24/7 booking link", "No commission", "Optional deposits"],
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    href: `/en/${EN_SLUGS["client-records"]}`,
    icon: Users,
    title: "Client records",
    desc: "History, notes, forms and photos on one profile the whole team can open before the visit.",
    highlights: ["Searchable profiles", "Forms on the record", "Team visibility"],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    href: `/en/${EN_SLUGS.forms}`,
    icon: ClipboardCheck,
    title: "Consultation and consent",
    desc: "Send intake and consent forms before the appointment. Clients complete them on their phone, including a digital signature.",
    highlights: ["Send before arrival", "Digital signatures", "Stored on the record"],
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    href: `/en/${EN_SLUGS["treatment-documentation"]}`,
    icon: FileText,
    title: "Treatment documentation",
    desc: "Session notes, parameters and before-and-after photos on the visit. Dictate notes by voice and optionally refine them with AI.",
    highlights: ["Notes and parameters", "Voice dictation", "Before/after photos"],
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    href: `/en/${EN_SLUGS.messaging}`,
    icon: Bell,
    title: "Reminders and follow-ups",
    desc: "Automatic SMS and email reminders before appointments, plus follow-ups after treatments. Timing is configurable.",
    highlights: ["SMS and email", "Booking confirmations", "Reactivation messages"],
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    href: `/en/${EN_SLUGS.integrations}`,
    icon: Plug,
    title: "Integrations",
    desc: "Keep Treatflow in sync with tools you already use, including Google Calendar and Zapier.",
    highlights: ["Google Calendar", "Zapier", "Less double entry"],
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    href: `/en/${EN_SLUGS.shop}`,
    icon: ShoppingBag,
    title: "Shop and inventory",
    desc: "Sell retail products alongside treatments and keep stock in the same workspace.",
    highlights: ["Product sales", "Inventory", "Tied to the client"],
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    href: `/en/${EN_SLUGS.vouchers}`,
    icon: Gift,
    title: "Vouchers",
    desc: "Sell and redeem gift vouchers, including remaining balances, without a separate spreadsheet.",
    highlights: ["Sell and redeem", "Remaining balance", "Validity control"],
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    href: `/en/${EN_SLUGS["studio-website"]}`,
    icon: Globe,
    title: "Studio website",
    desc: "A studio site connected to your Treatflow booking page, so visitors can book instead of only browsing.",
    highlights: ["Mobile-first", "Booking connected", "Built for studios"],
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

const workflowSteps = [
  {
    href: `/en/${EN_SLUGS["online-booking"]}`,
    label: "Online booking",
    desc: "Clients book on your own link. Slots stay in sync with the studio calendar.",
  },
  {
    href: `/en/${EN_SLUGS.forms}`,
    label: "Intake and consent",
    desc: "Consultation and consent forms can be completed before the client arrives.",
  },
  {
    href: `/en/${EN_SLUGS["client-records"]}`,
    label: "Client records",
    desc: "History, notes and forms sit on one profile the whole team can open.",
  },
  {
    href: `/en/${EN_SLUGS["treatment-documentation"]}`,
    label: "Documentation",
    desc: "Notes, voice dictation, parameters and photos stay attached to the visit.",
  },
  {
    href: `/en/${EN_SLUGS.messaging}`,
    label: "Follow-ups",
    desc: "Reminders and automated messages reduce no-shows and bring clients back.",
  },
];

const industries = [
  { href: `/en/${EN_SLUGS["beauty-salon-software"]}`, label: "Beauty salons" },
  { href: `/en/${EN_SLUGS["aesthetic-clinic-software"]}`, label: "Aesthetic clinics" },
  { href: `/en/${EN_SLUGS["laser-hair-removal-software"]}`, label: "Laser hair removal" },
  { href: `/en/${EN_SLUGS["permanent-makeup-software"]}`, label: "Permanent makeup" },
  { href: `/en/${EN_SLUGS["lash-studio-software"]}`, label: "Lash studios" },
  { href: `/en/${EN_SLUGS["nail-salon-software"]}`, label: "Nail salons" },
  { href: `/en/${EN_SLUGS["massage-software"]}`, label: "Massage and wellness" },
  { href: `/en/${EN_SLUGS["spa-wellness-software"]}`, label: "Spa" },
];

const faqs = [
  {
    question: "What features does Treatflow include?",
    answer:
      "Treatflow includes an appointment calendar, online booking without commission, client records, digital consultation and consent forms, treatment documentation with photos and voice dictation, reminders, integrations, shop, vouchers and an optional studio website. Checkout and POS features depend on the country.",
  },
  {
    question: "Is Treatflow all-in-one software or only a booking tool?",
    answer:
      "Treatflow is studio software, not a marketplace. Booking, records, forms, documentation and follow-ups sit in one system so the team is not switching between apps.",
  },
  {
    question: "Does Treatflow include a point of sale?",
    answer:
      "Checkout and POS features are available where fiscal requirements are supported, currently in Germany and Austria. International studios can still use booking, records, forms and documentation.",
  },
  {
    question: "Can I try every feature before paying?",
    answer:
      "Yes. You can start a 14-day free trial with no credit card. Cancel anytime.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Treatflow features",
  itemListElement: featureCards.map((card, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: card.title,
    url: `https://www.treatflow.io${card.href}`,
  })),
};

export default function FeaturesPageEn() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([{ label: "Features" }], "/en")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Breadcrumbs homeHref="/en" items={[{ label: "Features" }]} />

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              All features
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Salon and clinic software, from booking to documentation
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              Treatflow combines calendar, online booking, client records, digital forms,
              treatment notes and follow-ups in one workspace. Built for beauty salons and
              aesthetic clinics – not as a booking marketplace.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {[
                "No commission on bookings",
                "Forms, photos and notes on the client record",
                "Voice dictation for treatment notes",
                "Checkout where available",
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                Start 14-day free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="/en/pricing"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                See pricing
              </Link>
            </div>
          </div>
          <div className="order-2 relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto">
            <Image
              src="/images/lifestyle/hero-startseite-kalender.png"
              alt="Treatflow calendar and studio workspace on a laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 bg-white pt-12 pb-10">
        <AiAnswerCapsuleGroup>
          <AiAnswerCapsule
            question="What features does Treatflow include?"
            answer="Treatflow includes an appointment calendar, online booking without commission, client records, digital consultation and consent forms, treatment documentation with photos and voice dictation, reminders, integrations, shop and vouchers. Checkout and POS features depend on the country."
          />
          <AiAnswerCapsule
            question="Is Treatflow all-in-one software?"
            answer="Yes. Treatflow is studio software for beauty salons and aesthetic clinics. Booking, records, forms, documentation and follow-ups sit in one system. It is not a marketplace and does not take a booking commission."
          />
        </AiAnswerCapsuleGroup>
      </div>

      <TreatmentWorkflow
        title="How the features work together"
        subtitle="Each step links to the next, so the team works from one client journey instead of separate tools."
        steps={workflowSteps}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Features at a glance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every card opens the dedicated page. POS stays country-specific and is not listed as
              an international product.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group flex h-full flex-col bg-white border border-gray-100 rounded-3xl p-7 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-1">{feature.desc}</p>
                <ul className="space-y-2 mb-5">
                  {feature.highlights.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-medium text-indigo-600 mt-auto">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Checkout where available
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fiscal POS (TSE in Germany, RKSV in Austria) is part of Treatflow for DACH studios.
            International studios can still run booking, records, forms and documentation in one
            place. Payments are not sold as a worldwide core feature.
          </p>
          <p className="text-sm text-gray-500">
            German product page:{" "}
            <Link href="/kassensystem-kosmetikstudio" className="text-indigo-600 hover:underline">
              Kassensystem
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Who these features are for</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            The same product map, adapted to how each studio works.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">Related pages</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/en/pricing", label: "Pricing" },
              { href: `/en/${EN_SLUGS["software-comparison"]}`, label: "Software comparison" },
              { href: `/en/${EN_SLUGS["treatflow-vs-fresha"]}`, label: "Treatflow vs Fresha" },
              { href: `/en/${EN_SLUGS["treatflow-vs-treatwell"]}`, label: "Treatflow vs Treatwell" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSectionEn faqs={faqs} />

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to run the studio in one place?</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Start your free trial – no credit card required, cancel anytime.
          </p>
          <a
            href={REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            Start 14-day free trial
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
