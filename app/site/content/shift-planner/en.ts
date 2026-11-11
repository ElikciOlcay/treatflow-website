import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "How do I plan shifts and holidays in a salon?",
    answer:
      "With the Treatflow shift planner you plan each week per team member: one or more shifts per day, templates such as early, late or full day, and absences such as holidays, sick leave or training as a date range. “Copy last week” sets up the next week in seconds. Online booking then only shows times when someone is actually on shift.",
  },
  {
    question: "How much does the shift planner cost?",
    answer:
      "The shift planner is an app in the Booking plan (€59 per month, €53 per month billed yearly, plus VAT) and currently costs nothing extra. You switch it on under Apps → Shift planner and can try it free during the 14-day trial.",
  },
  {
    question: "What happens to my current working hours?",
    answer:
      "When you switch it on, Treatflow pre-fills the next 8 weeks from your current working hours, so no bookable times are lost. After that you keep planning yourself – Treatflow doesn't fill weeks automatically. If you switch the shift planner off again, the regular working hours apply and your plan stays saved.",
  },
  {
    question: "Can clients see why someone isn't bookable?",
    answer:
      "No. During a holiday, sick leave or training the team member simply isn't bookable online. Clients only see the free times, never the reason for the absence.",
  },
  {
    question: "What happens to appointments that are already booked?",
    answer:
      "Booked appointments stay in place, even if you change a shift or add a holiday. If an appointment falls outside a shift or into an absence, Treatflow points it out when you open the appointment, so you can move it in good time.",
  },
  {
    question: "Can I plan several shifts on one day?",
    answer:
      "Yes. Each team member can have any number of shifts per day, for example 9–12 and 15–19 with a long lunch break. Shifts just can't overlap.",
  },
  {
    question: "Do shifts also count outside opening hours?",
    answer:
      "Yes. When the shift planner is on, the planned shift counts – even if it starts before or ends after your regular opening hours. That way you can offer a late Thursday with one team member without changing your opening hours.",
  },
  {
    question: "Can I open a shift for certain services only?",
    answer:
      "Yes. Every shift and every template can be limited online to certain categories or services, for example laser only on Thursday afternoon. The weekly plan then shows on the shift what can be booked online.",
  },
  {
    question: "Are public holidays taken into account?",
    answer:
      "Yes. Public holidays on which your salon is closed appear in the shift plan as a grey column with their name. You set them under Settings → Opening hours → Holidays.",
  },
  {
    question: "Who can edit the shift plan?",
    answer:
      "Owners and team members with the admin role can edit the shift plan. Team members who only sign in with their PIN don't have access to it.",
  },
];

export const shiftPlannerEn: ShiftPlannerContent = {
  meta: {
    title: "Shift planner for salons: staff rota & holidays",
    description:
      "Shift planner for salons and clinics: plan shifts week by week, add holidays and sick leave – online booking only shows times when someone is working.",
    keywords: [
      "salon shift planner",
      "salon staff rota software",
      "staff scheduling beauty salon",
      "salon rota app",
      "staff holiday planner",
      "employee scheduling clinic",
      "shift planning software",
      "online booking staff schedule",
    ],
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "shift-planner",
    webPage: {
      name: "Shift planner for salons: staff rota & holidays",
      description:
        "Shift planner for salons and clinics with a weekly plan per team member, shift templates, holidays and sick leave – online booking follows the shift plan.",
    },
    software: {
      name: "Treatflow shift planner for salons",
      description:
        "Shift planner with a weekly plan per team member, shift templates and absences. Online booking only offers times within planned shifts.",
      featureList: [
        "Weekly plan per team member with several shifts per day",
        "Shift templates such as early, late and full day",
        "Copy last week or fill from working hours",
        "Holidays, sick leave and training as a date range",
        "Online booking only within planned shifts",
        "Open shifts for certain services only",
        "Shifts and absences in the appointment calendar",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Shift planner",
  hero: {
    eyebrow: "Shift planner & staff rota",
    eyebrowIcon: "calendar-clock",
    title: { before: "Shift planner for salons: ", highlight: "clients only book when your team is in" },
    description:
      "Plan your team's week with shifts, templates and holidays. Online booking follows the shift plan automatically – days without a shift and absences can't be booked.",
    chips: ["Shifts per week", "Holidays & sick leave", "Booking follows the plan"],
    secondaryCta: { label: "Appointment calendar", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "How do I plan shifts and holidays in a salon?",
        answer:
          "With the Treatflow shift planner you plan each week per team member: one or more shifts per day, templates such as early, late or full day, and absences such as holidays or sick leave as a date range. Online booking then only shows times when someone is actually on shift.",
      },
      {
        question: "What happens to online booking when someone is on holiday?",
        answer:
          "During a holiday, sick leave or training the team member isn't bookable online. Clients don't see the reason, only the free times of the rest of the team. Appointments already booked stay in place.",
      },
    ],
    image: {
      src: "/images/mockups/en/schichtplan.png",
      alt: "Treatflow shift planner – weekly plan with shifts and absences per team member",
    },
  },
  understand: {
    title: "A shift plan that steers your online booking",
    description:
      "Instead of fixed working hours you plan week by week – and clients only book when someone is actually in.",
    items: [
      {
        icon: "calendar-days",
        title: "Plan week by week",
        text: "Each team member gets one or more shifts per day, including split shifts with a lunch break. The week's hours are shown right next to the name.",
      },
      {
        icon: "plane",
        title: "Holidays, sick leave, training",
        text: "You enter absences as a date range. During that time the team member isn't bookable online – clients don't see the reason.",
      },
      {
        icon: "globe",
        title: "Booking follows the plan",
        text: "Your booking page only shows times within planned shifts. Days without a shift can't be booked, and the waitlist and rescheduling follow the plan too.",
      },
    ],
  },
  howItWorks: {
    description: "Three steps from weekly plan to matching online booking.",
    steps: [
      {
        title: "Switch on the shift planner",
        text: "Turn on the shift planner under Apps. So no bookable times are lost, Treatflow pre-fills the next 8 weeks from your current working hours.",
      },
      {
        title: "Adjust the week",
        text: "Set shifts from a template, copy last week or change single days. Enter holidays and sick leave as a date range.",
      },
      {
        title: "Clients book by the plan",
        text: "Online booking only offers times within shifts. In the appointment calendar you see shifts and absences right in the day view.",
      },
    ],
  },
  cards: {
    description: "Everything for staff planning in your salon – connected to the calendar and online booking.",
    items: [
      {
        icon: "users",
        title: "Weekly plan per team member",
        text: "Team members listed below each other, days side by side – with any number of shifts per day.",
        points: ["Split shifts", "Hours per week", "Copy last week"],
      },
      {
        icon: "layers",
        title: "Shift templates",
        text: "Create templates such as early, late or full day and set them with one click. Or fill a week from the standard working hours.",
        points: ["Your own templates", "Quick pick per day", "Fill from working hours"],
      },
      {
        icon: "plane",
        title: "Absences",
        text: "Holidays, sick leave, training or other absences as a date range – with an optional note.",
        points: ["Holidays & sick leave", "Training", "Reason stays internal"],
      },
      {
        icon: "globe",
        title: "Online booking by shift plan",
        text: "Bookings only happen within planned shifts – including the waitlist and when clients reschedule themselves.",
        points: ["Days without shifts blocked", "Waitlist & rescheduling", "Booked appointments stay"],
      },
      {
        icon: "list-ordered",
        title: "Shifts for certain services",
        text: "Open a shift online for certain categories or services only – for example laser only on Thursday afternoon.",
        points: ["Set per shift", "Categories or services", "Also in templates"],
      },
      {
        icon: "calendar",
        title: "Visible in the calendar",
        text: "In the day view, times outside a shift are hatched, and shifts and absences are shown under each name.",
        points: ["Hatching outside shifts", "Note on the appointment", "Public holidays in the plan"],
      },
    ],
  },
  faq: {
    title: "Frequently asked questions about the shift planner",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "Team and rooms in one calendar" },
      { href: { page: "online-booking" }, title: "Online booking", description: "24/7 via your booking link" },
      { href: { page: "messaging" }, title: "Reminders", description: "Automatic email reminders" },
    ],
  },
  cta: {
    title: "Plan your team – online booking follows",
    description: "Try it free for 14 days – no credit card. Shift plan, appointment calendar and online booking in one app.",
    secondary: { label: "Appointment calendar", href: { page: "appointment-calendar" } },
  },
};
