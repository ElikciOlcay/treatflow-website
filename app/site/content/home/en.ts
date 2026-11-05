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
      "Treatflow is all-in-one software for beauty salons, aesthetic clinics and treatment businesses. Online booking, client records, digital forms, treatment documentation and reminders. 14-day free trial.",
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
        "Treatflow is an all-in-one management platform for beauty salons, aesthetic clinics and treatment-focused businesses. It combines online booking, client records, digital consultation and consent forms, treatment documentation, before-and-after photos and automated follow-ups. Hosted in the EU.",
      url: "https://www.treatflow.io/en",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Client records, forms and treatment documentation",
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
        "Treatment documentation with photos",
        "Voice dictation for treatment notes",
        "Automatic email reminders",
        "Client workflows",
      ],
    },
  },

  hero: {
    badge: "For beauty studios that want to grow",
    title: {
      before: "No more booking chaos,",
      highlight: "paperwork",
      connector: "and",
      end: "no-shows",
    },
    subtitle:
      "Appointments, clients, forms and treatment documentation in one clear app. Your team will find its way around straight away.",
    primaryCta: "Start your 14-day free trial",
    demoCta: "Book a demo",
    checks: ["No credit card", "Ready in 2 minutes", "Free data migration"],
    rating: "4.6/5 on Google",
    tested: { before: "Already tested by ", highlight: "500+ studios", after: "" },
    calendarLocale: "en-GB",
    newBookingLabel: "New booking",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow on laptop and tablet: calendar and client records in a modern studio",
    },
    liveDemo: { href: { page: "try-features" }, label: "Try the features live" },
  },

  socialProof: {
    rating: "4.6/5 on Google",
    allReviews: "See all reviews",
    tested: { before: "Already tested by ", highlight: "500+ studios", after: "" },
    reviews: [
      {
        text: "The support is outstanding – always kind, friendly and solution-focused. Highly recommended!",
        name: "Velura Saarburg",
        studio: "Laser hair removal",
      },
      {
        text: "Unbeatable value and intuitive to use. My feature request was built within a day!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Switched from Phorest – excellent value for money. I can recommend it with a clear conscience.",
        name: "Sharon U.",
        studio: "Beauty studio",
      },
    ],
    note: "Google reviews, translated from German.",
  },

  studioDay: {
    eyebrow: "One appointment, one system",
    title: "From booking to aftercare. In one app.",
    subtitle: "This is how an appointment runs with Treatflow. Nothing has to be entered twice.",
    steps: [
      {
        time: "Mon · 21:14",
        module: "Online booking",
        title: "Lena books in the evening from her sofa.",
        text: "No phone call and no commission per booking. The appointment is in the calendar straight away.",
        meta: "Facial · Thu 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "Wed · 10:45",
        module: "Reminder",
        title: "The reminder goes out automatically.",
        text: "One day before, by email. Fewer forgotten appointments, without anyone having to think about it.",
        meta: "Delivered · confirmed",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "Thu · 10:40",
        module: "Forms",
        title: "Consultation form on the tablet, signed.",
        text: "The form goes straight into Lena's client record. No paperwork to type up afterwards.",
        meta: "Consultation form · signed digitally",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "Thu · 11:40",
        module: "Documentation",
        title: "Treatment documented, with photos.",
        text: "Parameters, products and before-and-after photos stay in the treatment history.",
        meta: "3 photos · parameters saved",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "Fri · 09:00",
        module: "Aftercare",
        title: "Aftercare and rebooking run on their own.",
        text: "A care tip the next day, a rebooking reminder a few weeks later. Set up once as a client workflow.",
        meta: "Workflow · next step in 4 weeks",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Less chaos. More time for your clients.",
    subtitle: "Everything your studio needs – in one app your team understands straight away.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Online booking", desc: "Clients book themselves – even outside your opening hours.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Client records", desc: "History, notes and photos in one place and quick to find.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Forms", desc: "Digital consultation and consent forms, completed in advance via link.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Documentation", desc: "Document every treatment properly, with photos and parameters.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Take a deposit or full payment online when clients book.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Reminders", desc: "Automatic email reminders reduce no-shows.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Client workflows", desc: "Automate aftercare and reactivation in several steps.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Start your 14-day free trial",
    ctaNote: "No credit card. Cancel anytime.",
  },

  pricing: {
    eyebrow: "Transparent pricing",
    titleBefore: "Simple pricing -",
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
      description: "Digital consultation forms, client records and treatment documentation – without scheduling.",
      included: [
        "Client management",
        "Forms with digital signature",
        "Documentation incl. voice notes",
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
      description: "Appointment calendar, online booking and automatic reminders for your studio.",
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
      points: ["No setup fees", "Cancel monthly", "GDPR-compliant"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Still have questions?",
    titleHighlight: " We have answers!",
    subtitle: "Here you'll find answers to the most common questions about Treatflow.",
    items: [
      {
        question: "What is Treatflow?",
        answer:
          "Treatflow is an all-in-one app for everyday studio work: appointments, client records, digital forms and treatment documentation are connected in one system – with no commission per booking. Developed in Austria, with data on EU servers.",
      },
      {
        question: "Who is Treatflow for?",
        answer: [
          "For studios that perform treatments – from beauty and aesthetics to laser, nails, lashes, permanent makeup, massage and spa. Learn more about our ",
          { text: "aesthetic clinic software", href: { page: "aesthetic-clinic-software" } },
          " and ",
          { text: "client records", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "How long can I try Treatflow for free?",
        answer:
          "You can try Treatflow completely free for 14 days. No credit card required, no hidden costs. After the trial you decide whether you want to continue.",
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
          { text: "treatment documentation", href: { page: "treatment-documentation" } },
          " are covered as well.",
        ],
      },
      {
        question: "Can I import my existing client data?",
        answer: [
          "Yes, we help you move your data free of charge. Our support team helps you transfer your existing client data safely into your ",
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
          "You stay in full control of your data. If you cancel, you can export all of it. We only delete your data completely after a transition period.",
      },
      {
        question: "Do I need technical knowledge to use Treatflow?",
        answer:
          "No. Treatflow is very easy to use. There is nothing to install – simply sign in in your browser and get started. If you have questions, our support team is happy to help.",
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
          "Yes. You can manage as many clients as you like. The system scales and grows with your studio, and the import function makes it easy to bring over existing client data.",
      },
    ],
    contactTitle: "Any other questions?",
    contactText:
      "Our support team is happy to help. Send us an email or book a consultation call directly.",
    demoCta: "Book a consultation",
  },

  cta: {
    ariaLabel: "Call to action",
    title: "Ready to run your studio with more clarity?",
    subtitle: "Start today and see how easy studio organisation can be.",
    checks: [
      "Try free for 14 days",
      "No credit card needed",
      "Ready in 2 minutes",
      "Personal support and help",
    ],
    primaryCta: "Start your free trial",
    demoCta: "Book a demo",
    note: "Cancel anytime. GDPR-compliant. With personal support and help.",
  },

  seo: {
    ariaLabel: "Further information",
    intro: [
      "Treatflow is the ",
      { text: "software for beauty salons", href: { page: "beauty-salon-software" } },
      " with appointment calendar, online booking, digital client records, forms and treatment documentation – no commission, GDPR-compliant and made in Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Client records software" },
      { href: { page: "online-booking" }, label: "Online appointment booking" },
      { href: { page: "treatment-documentation" }, label: "Treatment documentation" },
      { href: { page: "forms" }, label: "Digital consultation forms" },
      { href: { page: "messaging" }, label: "Appointment reminders" },
      { href: { page: "software-comparison" }, label: "Software comparison" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
