import type { HomeContent } from "./types";

/**
 * English homepage. Same sections as `de.ts`, without DACH-only features
 * (POS, vouchers, WhatsApp, Lexware, SumUp, NiSV). No product video yet –
 * the existing film is German.
 */
export const homeEn: HomeContent = {
  meta: {
    title: "Salon & Aesthetic Clinic Software",
    description:
      "All-in-one software for beauty salons and aesthetic clinics: online booking, client records, digital consultation and consent forms, treatment records and email reminders. Try it free for 14 days.",
  },

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      inLanguage: "en",
      description:
        "Treatflow is an all-in-one management platform for beauty salons, aesthetic clinics and treatment-focused businesses. It combines online booking, client records, digital consultation and consent forms, treatment records, before-and-after photos and automated follow-ups. Hosted in the EU.",
      url: "https://www.treatflow.io/en",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Client records, forms and treatment records",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
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
        "Consultation and consent forms",
        "Treatment records with photos",
        "Voice dictation for treatment notes",
        "Automatic email reminders",
        "Client workflows",
      ],
    },
  },

  hero: {
    badge: "For salons and clinics ready to grow",
    title: {
      before: "Say goodbye to booking chaos,",
      highlight: "paperwork",
      connector: "and",
      end: "no-shows",
    },
    subtitle:
      "Appointments, clients, forms and treatment records in one easy-to-use app. Your team will pick it up straight away.",
    primaryCta: "Start your 14-day free trial",
    demoCta: "Book a demo",
    checks: ["No credit card", "Set up in 2 minutes", "Free data migration"],
    rating: "4.6/5 on Google",
    tested: { before: "Already tried by ", highlight: "500+ salons & clinics", after: "" },
    calendarLocale: "en-GB",
    newBookingLabel: "New booking",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow on laptop and tablet: calendar and client records in a modern salon",
    },
    liveDemo: { href: { page: "try-features" }, label: "Try the features live" },
  },

  socialProof: {
    rating: "4.6/5 on Google",
    allReviews: "See all reviews",
    tested: { before: "Already tried by ", highlight: "500+ salons & clinics", after: "" },
    reviews: [
      {
        text: "Outstanding support – always kind, friendly and quick to find a solution. Highly recommended!",
        name: "Velura Saarburg",
        studio: "Laser hair removal",
      },
      {
        text: "Unbeatable value and intuitive to use. My feature request was built within a day!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Switched from Phorest – excellent value for money. I'd recommend it without hesitation.",
        name: "Sharon U.",
        studio: "Beauty salon",
      },
    ],
    note: "Google reviews, translated from German.",
  },

  studioDay: {
    eyebrow: "One appointment, one system",
    title: "From booking to aftercare. In one app.",
    subtitle: "Here's how an appointment flows through Treatflow – nothing gets entered twice.",
    steps: [
      {
        time: "Mon · 21:14",
        module: "Online booking",
        title: "Lena books from her sofa in the evening.",
        text: "No phone call, no booking commission. The appointment goes straight into the calendar.",
        meta: "Facial · Thu 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "Wed · 10:45",
        module: "Reminder",
        title: "The reminder goes out automatically.",
        text: "One day before, by email. Fewer forgotten appointments – and nobody has to remember to send it.",
        meta: "Delivered · confirmed",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "Thu · 10:40",
        module: "Forms",
        title: "Consultation form signed on the tablet.",
        text: "The form goes straight into Lena's client record. No paperwork to type up afterwards.",
        meta: "Consultation form · signed digitally",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "Thu · 11:40",
        module: "Treatment records",
        title: "Treatment recorded, photos included.",
        text: "Parameters, products and before-and-after photos are saved to her treatment history.",
        meta: "3 photos · parameters saved",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "Fri · 09:00",
        module: "Aftercare",
        title: "Aftercare and rebooking take care of themselves.",
        text: "An aftercare tip the next day, a rebooking nudge a few weeks later. Set up once as a client workflow.",
        meta: "Workflow · next step in 4 weeks",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Less chaos. More time for your clients.",
    subtitle: "Everything your salon needs – in one app your team will get the hang of straight away.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Online booking", desc: "Clients book themselves – even when you're closed.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Client records", desc: "History, notes and photos in one place, found in seconds.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Forms", desc: "Digital consultation and consent forms, filled in before the appointment via a link.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Treatment records", desc: "Record every treatment properly, with photos and parameters.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Take a deposit or full payment online when clients book.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Reminders", desc: "Automatic email reminders cut no-shows.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Client workflows", desc: "Automate multi-step aftercare and win-back campaigns.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Start your 14-day free trial",
    ctaNote: "No credit card. Cancel anytime.",
  },

  support: {
    ariaLabel: "Personal support from day one",
    badge: "Personal support",
    title: "You won't be left on your own",
    text: "From setup to moving your client data: our team supports you personally as you get started with Treatflow – so you and your team can work with confidence from day one.",
    trialCta: "Start your 14-day free trial",
    demoCta: "Book a free demo",
    imageAlt: "Personal support from the Treatflow team",
    chip: "Personal. Included.",
  },

  pricing: {
    eyebrow: "Clear pricing",
    titleBefore: "Simple pricing –",
    titleHighlight: " no hidden fees",
    subtitle:
      "Treatflow starts at €39/month (Basic) or €59/month (Booking). Try it free for 14 days – no commission and no risk.",
    monthly: "Monthly",
    yearly: "Yearly",
    saveBadge: "Save 10%",
    perMonth: "/month",
    perYear: "/year",
    vatNote: "plus VAT",
    basic: {
      name: "Basic",
      monthlyPrice: "€39",
      yearlyPrice: "€421",
      yearlyHint: "€35/month • Save €47/year",
      description: "Client records, digital consultation forms and treatment records – without the appointment calendar.",
      included: [
        "Client management",
        "Forms with digital signature",
        "Treatment records incl. voice dictation",
        "Before-and-after photos",
        "Team notes and tasks",
        "Shop and products",
        "Statistics",
        "Staff and roles",
        "Email support",
      ],
      excluded: [
        "Appointment calendar",
        "Online booking",
        "Automations and waitlist",
        "Priority support",
      ],
      cta: "Try free for 14 days",
    },
    booking: {
      name: "Booking",
      popular: "Popular",
      monthlyPrice: "€59",
      yearlyPrice: "€637",
      yearlyHint: "€53/month • Save €71/year",
      description: "Appointment calendar, online booking and automatic reminders for your salon.",
      included: [
        "Everything in Basic",
        "Calendar with staff and room columns",
        "Commission-free online booking",
        "Waitlist",
        "Email reminders",
        "Client workflows",
        "Discount codes",
        "Multilingual booking page",
        "Integrations (Google Calendar, Zapier, AI assistants)",
        "Priority email and chat support",
      ],
      cta: "Try free for 14 days",
    },
    trial: {
      title: "Try free for 14 days",
      text: "No credit card required • Cancel anytime • Free data migration",
      points: ["No setup fees", "Rolling monthly plan", "GDPR-compliant"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Got questions?",
    titleHighlight: " We've got answers.",
    subtitle: "Here you'll find answers to the most common questions about Treatflow.",
    items: [
      {
        question: "What is Treatflow?",
        answer:
          "Treatflow is an all-in-one app for the day-to-day running of your salon or clinic: appointments, client records, digital forms and treatment records are connected in one system – with no commission per booking. Developed in Austria, with data on EU servers.",
      },
      {
        question: "Who is Treatflow for?",
        answer: [
          "For any business that offers treatments – from beauty salons and aesthetics clinics to laser, nails, lashes, permanent makeup, massage and spa. Find out more about our ",
          { text: "aesthetic clinic software", href: { page: "aesthetic-clinic-software" } },
          " and ",
          { text: "client records", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "How long can I try Treatflow for free?",
        answer:
          "You can try Treatflow completely free for 14 days. No credit card required, no hidden costs. At the end of the trial, you decide whether to carry on.",
      },
      {
        question: "What is the difference between Basic and Booking?",
        answer: [
          "Basic (€39/month) includes unlimited ",
          { text: "client management", href: { page: "client-records" } },
          ", the form marketplace, the AI form generator and the shop. Booking (€59/month) adds the professional ",
          { text: "booking calendar", href: { page: "appointment-calendar" } },
          " with your own booking link and automatic ",
          { text: "appointment reminders", href: { page: "messaging" } },
          ".",
        ],
      },
      {
        question: "Is Treatflow GDPR-compliant?",
        answer: [
          "Yes. Treatflow is fully GDPR-compliant. All data is encrypted and stored securely on EU servers in Frankfurt, Germany. Digital ",
          { text: "consultation forms", href: { page: "forms" } },
          " and ",
          { text: "treatment records", href: { page: "treatment-documentation" } },
          " are covered as well.",
        ],
      },
      {
        question: "Can I import my existing client data?",
        answer: [
          "Yes – we'll move your data over free of charge. Our support team will help you transfer your existing client data safely into your ",
          { text: "digital client records", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Does Treatflow work on my phone?",
        answer:
          "Yes. Treatflow works on all devices – computer, tablet and smartphone. You can access your client and appointment data wherever you are.",
      },
      {
        question: "What happens to my data if I cancel?",
        answer:
          "You stay in full control of your data. If you cancel, you can export all of it. Your data is only fully deleted after a transition period.",
      },
      {
        question: "Do I need technical knowledge to use Treatflow?",
        answer:
          "No. Treatflow is very easy to use. There's nothing to install – just log in from your browser and get started. If you have questions, our support team is happy to help.",
      },
      {
        question: "How does the form marketplace work?",
        answer: [
          "In the marketplace you'll find professional ",
          { text: "forms", href: { page: "forms" } },
          " for all beauty treatments. Use them as they are, adapt them with the AI generator or customise them in the drag-and-drop editor. Digital consultation forms are ready to use straight away.",
        ],
      },
      {
        question: "Can I manage an unlimited number of clients?",
        answer:
          "Yes. You can manage as many clients as you like. Treatflow grows with your business, and the import function makes it easy to bring over existing client data.",
      },
    ],
    contactTitle: "Any other questions?",
    contactText:
      "Our support team is happy to help. Just drop us an email.",
    demoCta: "Book a call",
  },

  cta: {
    ariaLabel: "Call to action",
    title: "Ready for a calmer, better-organised salon?",
    subtitle: "Start today and see how easy running your salon can be.",
    checks: [
      "Try free for 14 days",
      "No credit card needed",
      "Set up in 2 minutes",
      "Friendly, personal support",
    ],
    primaryCta: "Start your free trial",
    demoCta: "Book a demo",
    note: "Cancel anytime. GDPR-compliant. Real people on hand to help.",
  },

  seo: {
    ariaLabel: "Further information",
    intro: [
      "Treatflow is the ",
      { text: "software for beauty salons", href: { page: "beauty-salon-software" } },
      " with appointment calendar, online booking, digital client records, forms and treatment records – no commission, GDPR-compliant and made in Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Client records software" },
      { href: { page: "online-booking" }, label: "Online appointment booking" },
      { href: { page: "treatment-documentation" }, label: "Treatment record software" },
      { href: { page: "forms" }, label: "Digital consultation forms" },
      { href: { page: "messaging" }, label: "Appointment reminders" },
      { href: { page: "software-comparison" }, label: "Software comparison" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
