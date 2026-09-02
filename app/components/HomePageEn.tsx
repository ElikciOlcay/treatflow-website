import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle,
  ClipboardCheck,
  FileText,
  Lock,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Star,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ChallengeSelector from "./ChallengeSelector";
import ComparisonTable from "./ComparisonTable";
import BenefitStats from "./BenefitStats";
import SupportTrustBanner from "./SupportTrustBanner";
import FAQSection from "./FAQSection";
import PricingSectionIntl from "./PricingSectionIntl";
import AiAnswerCapsule, { AiAnswerCapsuleGroup } from "./AiAnswerCapsule";
import TreatmentWorkflow from "./TreatmentWorkflow";
import { APP_REGISTER_BY_MARKET, DEMO_BOOKING_URL } from "@/app/i18n/market-access";
import { getPricingIntlCopy } from "@/app/i18n/markets/pricing-intl";
import { EN_SLUGS } from "@/app/i18n/market-routes";

const REGISTER = APP_REGISTER_BY_MARKET.en;

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Treatflow",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  description:
    "Treatflow is an all-in-one management platform for beauty salons, aesthetic clinics and treatment-focused businesses. It combines online booking, client records, digital consultation and consent forms, treatment documentation, before-and-after photos and automated follow-ups. Hosted in the EU.",
  url: "https://www.treatflow.io/en",
  author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
  offers: [
    {
      "@type": "Offer",
      name: "Basic",
      price: "39",
      priceCurrency: "EUR",
      description: "Client records, forms and treatment documentation",
    },
    {
      "@type": "Offer",
      name: "Booking",
      price: "59",
      priceCurrency: "EUR",
      description: "Calendar, online booking and automatic reminders",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    ratingCount: "19",
    reviewCount: "19",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Appointment calendar with online booking",
    "Digital client records",
    "Consent and intake forms",
    "Treatment documentation with photos",
    "Voice dictation for treatment notes",
    "SMS and email reminders",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Treatflow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treatflow is software for beauty salons and aesthetic clinics that combines online booking, client records, digital consent forms, treatment documentation and automated client communication in one platform.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Treatflow for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treatflow is for beauty salons, aesthetic clinics, laser hair removal clinics, med spas, skin clinics, permanent makeup studios, lash and nail studios, massage and wellness businesses, and similar treatment-based studios.",
      },
    },
    {
      "@type": "Question",
      name: "Can clients complete consultation forms before their appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Treatflow can send digital consultation or consent forms before an appointment, so the client can complete them before arriving.",
      },
    },
    {
      "@type": "Question",
      name: "Can I store before-and-after photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Treatment photos can be stored within the client's treatment history so documentation stays connected to the relevant client and appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Can I dictate treatment notes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In treatment documentation you can speak notes instead of typing. Treatflow turns speech into text and can refine it with AI. The note is saved with that visit.",
      },
    },
    {
      "@type": "Question",
      name: "Does Treatflow charge a booking commission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Treatflow is studio software, not a marketplace. Studios pay a fixed monthly plan and keep 100% of booking revenue.",
      },
    },
    {
      "@type": "Question",
      name: "Does Treatflow support online booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clients book on your own Treatflow booking page. There is no marketplace commission.",
      },
    },
    {
      "@type": "Question",
      name: "Can Treatflow send appointment reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Automatic SMS and email reminders are part of the Booking plan.",
      },
    },
    {
      "@type": "Question",
      name: "Does Treatflow work internationally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can register worldwide and start a 14-day free trial. Treatflow is hosted on EU servers. Some payment and POS features depend on the country.",
      },
    },
    {
      "@type": "Question",
      name: "Can multiple employees use Treatflow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The calendar, client records and documentation are shared across the team, so colleagues see the same history when they take over a client.",
      },
    },
    {
      "@type": "Question",
      name: "How long can I try Treatflow for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can try Treatflow for 14 days, no credit card and no hidden fees. After the trial you decide whether to continue.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Basic and Booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic (€39/month) includes unlimited client records, form templates and the form shop. Booking (€59/month) adds the appointment calendar, online booking without commission and automatic reminders.",
      },
    },
    {
      "@type": "Question",
      name: "Is Treatflow designed for GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treatflow is hosted on EU servers in Frankfurt, uses SSL encryption and daily backups. Consent forms and treatment documentation sit on the client record.",
      },
    },
  ],
};

const coreFeatures = [
  {
    href: `/en/${EN_SLUGS["appointment-calendar"]}`,
    icon: CalendarDays,
    label: "Appointment calendar",
    desc: "Day, week and staff views so the whole team sees the same schedule.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    href: `/en/${EN_SLUGS["online-booking"]}`,
    icon: Users,
    label: "Online booking",
    desc: "A branded booking page with live availability. No marketplace commission.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    href: `/en/${EN_SLUGS["client-records"]}`,
    icon: FileText,
    label: "Client records",
    desc: "Visit history, notes, forms and photos on one client profile.",
                color: "bg-blue-100 text-blue-600",
  },
  {
    href: `/en/${EN_SLUGS.forms}`,
    icon: ClipboardCheck,
    label: "Consultation & consent",
    desc: "Digital intake and consent forms, completed before the visit.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    href: `/en/${EN_SLUGS["treatment-documentation"]}`,
    icon: Shield,
    label: "Documentation",
    desc: "Session notes, voice dictation, parameters and before-and-after photos per visit.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    href: `/en/${EN_SLUGS.shop}`,
    icon: ShoppingBag,
    label: "Shop",
    desc: "Sell products and keep inventory in one place.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    href: `/en/${EN_SLUGS.messaging}`,
    icon: Bell,
    label: "Reminders",
    desc: "Automatic SMS and email reminders that cut no-shows.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    href: `/en/${EN_SLUGS.messaging}`,
    icon: Workflow,
    label: "Client workflows",
    desc: "Follow-up and reactivation, automated in steps.",
    color: "bg-violet-100 text-violet-600",
  },
];

const seoLinks = [
  { href: `/en/${EN_SLUGS["beauty-salon-software"]}`, label: "Beauty salon software" },
  { href: `/en/${EN_SLUGS["aesthetic-clinic-software"]}`, label: "Aesthetic clinic software" },
  { href: `/en/${EN_SLUGS["laser-hair-removal-software"]}`, label: "Laser hair removal software" },
  { href: `/en/${EN_SLUGS["online-booking"]}`, label: "Online booking" },
  { href: `/en/${EN_SLUGS["client-records"]}`, label: "Client records" },
  { href: `/en/${EN_SLUGS.forms}`, label: "Consultation and consent forms" },
  { href: `/en/${EN_SLUGS["treatment-documentation"]}`, label: "Treatment documentation" },
  { href: `/en/${EN_SLUGS.messaging}`, label: "Reminders and follow-ups" },
  { href: `/en/${EN_SLUGS["software-comparison"]}`, label: "Software comparison" },
  { href: `/en/${EN_SLUGS["treatflow-vs-treatwell"]}`, label: "Treatflow vs Treatwell" },
  { href: `/en/${EN_SLUGS["treatflow-vs-fresha"]}`, label: "Treatflow vs Fresha" },
];

const audiences = [
  { href: `/en/${EN_SLUGS["beauty-salon-software"]}`, label: "Beauty salons" },
  { href: `/en/${EN_SLUGS["aesthetic-clinic-software"]}`, label: "Aesthetic clinics" },
  { href: `/en/${EN_SLUGS["laser-hair-removal-software"]}`, label: "Laser hair removal clinics" },
  { href: `/en/${EN_SLUGS["aesthetic-clinic-software"]}`, label: "Med spas & skin clinics" },
  { href: `/en/${EN_SLUGS["permanent-makeup-software"]}`, label: "Permanent makeup studios" },
  { href: `/en/${EN_SLUGS["lash-studio-software"]}`, label: "Lash studios" },
  { href: `/en/${EN_SLUGS["nail-salon-software"]}`, label: "Nail salons" },
  { href: `/en/${EN_SLUGS["massage-software"]}`, label: "Massage & wellness" },
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
    label: "Treatment documentation",
    desc: "Session notes (typed or dictated), parameters and before-and-after photos stay with the visit.",
  },
  {
    href: `/en/${EN_SLUGS.messaging}`,
    label: "Follow-ups and rebooking",
    desc: "Reminders and automated messages reduce no-shows and bring clients back.",
  },
  {
    href: `/en/${EN_SLUGS.features}`,
    label: "Payments where available",
    desc: "Checkout and POS features depend on your country. Documentation and booking work worldwide.",
  },
];

export default function HomePageEn() {
  const pricing = getPricingIntlCopy("en");

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Software for beauty salons, aesthetic clinics and laser studios
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
              From booking to treatment documentation —{" "}
              <span className="text-indigo-600">everything in one place</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              Treatflow is an all-in-one management platform for beauty salons, aesthetic clinics
              and treatment-focused businesses. Online booking, client records, digital forms,
              treatment notes and follow-ups work together — not as separate tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href={REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Start 14-day free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                Book a demo
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 mb-6">
              {["No credit card", "Ready in 2 minutes", "Free data migration", "Complete setup"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.6/5 on Google</span>
              </div>
              <span className="hidden sm:inline text-gray-400">|</span>
              <span className="text-gray-600">
                Already tried by <span className="font-semibold text-gray-900">500+ studios</span>
              </span>
            </div>
          </div>
          <div className="order-2 relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto">
            <Image
              src="/images/lifestyle/hero-startseite-kalender.png"
              alt="Treatflow appointment calendar open on a laptop in a modern beauty studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: Lock, text: "SSL-encrypted" },
              { icon: Server, text: "EU servers (GDPR)" },
              { icon: Shield, text: "Daily backups" },
              { icon: ShieldCheck, text: "Designed for GDPR" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                <item.icon className="h-4 w-4 text-indigo-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 bg-white pt-12 pb-10">
        <AiAnswerCapsuleGroup>
          <AiAnswerCapsule
            question="What is Treatflow?"
            answer="Treatflow is software for beauty salons and aesthetic clinics that combines online booking, client records, digital consent forms, treatment documentation and automated client communication in one platform."
          />
          <AiAnswerCapsule
            question="Who is Treatflow for?"
            answer="Treatflow is for beauty salons, aesthetic clinics, laser hair removal clinics, med spas, skin clinics, permanent makeup studios, lash and nail studios, massage and wellness businesses, and similar treatment-based studios."
          />
        </AiAnswerCapsuleGroup>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">
            Who Treatflow is built for
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Treatflow is built for studios that run treatments — not just appointment calendars.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {audiences.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-800 hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TreatmentWorkflow
        title="The treatment workflow, in one system"
        subtitle="Treatflow connects booking to intake, documentation and follow-up so the team is not switching between apps."
        steps={workflowSteps}
      />

      <ChallengeSelector locale="en" />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 lg:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                How to start with Treatflow
              </h2>
              <p className="text-gray-600">A clear path. No long setup.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Register for free",
                  desc: "Create your account in a few minutes and start straight away.",
                },
                {
                  step: "2",
                  title: "Move your data",
                  desc: "We help you import existing client records.",
                },
                {
                  step: "3",
                  title: "Turn on online booking",
                  desc: "Share your booking link and take the first appointments automatically.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl border border-gray-100 p-5 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href={REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                Start for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Not just a calendar. The full treatment workflow.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Online booking, digital forms, client records, treatment notes and automated messages
                stay connected — so your team works from one place.
              </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {coreFeatures.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start 14-day free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-3">No credit card. Cancel anytime.</p>
          </div>
        </div>
      </section>

      <BenefitStats locale="en" />
      <ComparisonTable locale="en" />
      <SupportTrustBanner locale="en" />
      <PricingSectionIntl copy={pricing} embedded />
      <FAQSection locale="en" />

      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Looking for Treatwell? That is not us.</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Treatflow is not a booking marketplace with commission. It is studio software for beauty salons –
                with client records, documentation and a complete setup.
              </p>
            </div>
            <Link
              href={`/en/${EN_SLUGS["treatflow-vs-treatwell"]}`}
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap flex-shrink-0"
            >
              See the differences
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Ready to run your studio more clearly?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Start today and see how simple studio organisation can be.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 text-white/90">
            {[
              "14-day free trial",
              "No credit card needed",
              "Ready in 2 minutes",
              "Full setup included",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-sm"
              >
                <CheckCircle className="h-4 w-4 text-indigo-200 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href={REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Start free trial
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Book a demo
            </a>
          </div>
          <p className="text-sm text-indigo-200 mt-6">
            Cancel anytime. GDPR-ready. With personal support.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-gray-100" aria-label="Further reading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Treatflow is{" "}
            <Link href={`/en/${EN_SLUGS["beauty-salon-software"]}`} className="text-indigo-600 hover:underline">
              beauty salon software
            </Link>{" "}
            and{" "}
            <Link href={`/en/${EN_SLUGS["aesthetic-clinic-software"]}`} className="text-indigo-600 hover:underline">
              aesthetic clinic software
            </Link>{" "}
            that combines online booking, client records, digital forms and treatment documentation
            in one platform. Hosted in the EU. Made in Austria.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
            {seoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
