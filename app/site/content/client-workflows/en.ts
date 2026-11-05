import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsEn: ClientWorkflowsContent = {
  meta: {
    title: "Client Workflows for Beauty Salons: Automated Aftercare",
    description:
      "Multi-step automations in Treatflow: aftercare, reactivation and follow-ups with wait times, conditions and email delivery – no more manual chasing.",
    keywords: [
      "client workflows beauty salon",
      "salon marketing automation",
      "aftercare automation",
      "win back salon clients",
      "follow-up workflow salon",
      "Treatflow workflows",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Client Workflows for Beauty Salons: Automated Aftercare",
      description:
        "Multi-step automations: aftercare, reactivation and follow-ups with wait times, conditions and email delivery.",
    },
  },
  breadcrumb: "Client workflows",
  hero: {
    eyebrow: "Client workflows",
    eyebrowIcon: "workflow",
    title: { before: "Multi-step ", highlight: "automations" },
    description:
      "Build aftercare, reactivation and follow-up sequences – with wait times, conditions and automatic emails.",
    chips: ["Visual builder", "Automatic emails", "Stops when the client rebooks"],
    secondaryCta: { label: "See reminders", href: { page: "messaging" } },
    capsules: [
      {
        question: "How do I automate aftercare and follow-ups in my beauty salon?",
        answer:
          "With client workflows in Treatflow you build multi-step sequences: for example, wait 2 days after the treatment, ask how the client is doing, check whether she has rebooked and only then send an invitation for a follow-up appointment. You stay in touch without chasing anyone manually.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Treatflow workflow builder with trigger, wait time and message",
    },
  },
  understand: {
    title: "Sequences that run on their own",
    description:
      "Instead of single reminders, you build sequences – made for aftercare, reactivation and follow-ups with several steps.",
    items: [
      {
        icon: "heart",
        title: "Aftercare without extra work",
        text: "Automatically ask how the skin is doing – and offer the follow-up appointment if the client is interested.",
      },
      {
        icon: "bell",
        title: "Win back inactive clients",
        text: "After 60–90 days without a visit, an invitation goes out to bring them back – personal and at the right moment.",
      },
      {
        icon: "git-branch",
        title: "Smart branching",
        text: "Check whether the client has rebooked. If so, the workflow stops – no duplicate messages.",
      },
    ],
  },
  howItWorks: {
    description: "Your first workflow in three steps.",
    steps: [
      { title: "Choose a trigger", text: "Start, for example, when an appointment ends or when a client hasn't visited for a while." },
      { title: "Connect the steps", text: "Arrange wait times, messages and conditions in the visual builder." },
      { title: "Activate", text: "Treatflow runs the sequence and sends the messages by email." },
    ],
  },
  cards: {
    title: "What you get",
    description: "Everything for multi-step client communication – clear and easy to control.",
    items: [
      { icon: "workflow", title: "Visual builder", text: "Trigger, wait times, message and condition via drag & drop.", points: ["Clear overview", "Multiple stages", "Quick to adjust"] },
      { icon: "message-circle", title: "Email messages", text: "Each step reaches your clients in their inbox.", points: ["Email", "Your own text", "Sent automatically"] },
      { icon: "clock", title: "Wait times", text: "Days or hours between steps – just like your salon routine.", points: ["Aftercare timing", "Reactivation", "Nothing to remember"] },
      { icon: "git-branch", title: "Conditions", text: "Check for new bookings, for example, and stop the sequence in time.", points: ["No duplicate emails", "Smart branching", "More relevance"] },
      { icon: "heart", title: "Aftercare sequences", text: "A first check-in, then optionally a follow-up appointment – only when it makes sense.", points: ["Stronger loyalty", "Fewer no-shows later", "More repeat appointments"] },
      { icon: "zap", title: "Reactivation", text: "Automatically invite clients back after a longer break.", points: ["60–90 days", "Personal", "No spreadsheet chaos"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about client workflows",
    items: [
      {
        question: "What are client workflows in Treatflow?",
        answer:
          "Client workflows are multi-step automations: you build sequences with a trigger, wait times, messages and conditions. Aftercare, reactivation and follow-ups then run automatically – without you writing every message by hand.",
      },
      {
        question: "How are workflows different from simple reminders?",
        answer:
          "Simple messages (such as appointment reminders) are one trigger and one message. Workflows are made for sequences with several steps and branches – for example: check in after the treatment, wait, check whether the client has rebooked and only then send a second message.",
      },
      {
        question: "Which channel do workflow messages use?",
        answer:
          "Workflow steps are sent by email. Appointment reminders remain available under the simple messages.",
      },
      {
        question: "Can a workflow stop when the client rebooks?",
        answer:
          "Yes. You can set conditions, for example checking whether the client has booked again since the last appointment. If so, the sequence stops – you stay in touch without sending duplicate messages.",
      },
      {
        question: "Which workflows are good to start with?",
        answer:
          "Popular choices are: aftercare 1–2 days after the treatment, reactivation after 60–90 days without a visit, and multi-step aftercare with a second message only if no follow-up appointment has been booked yet.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Reminders", description: "Emails before the appointment" },
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "Appointments and automations together" },
      { href: { page: "client-records" }, title: "Client records", description: "History and follow-ups" },
    ],
  },
  cta: {
    title: "Ready for multi-step client workflows?",
    description: "Try it free for 14 days – aftercare and reactivation without manual chasing.",
    secondary: { label: "See reminders", href: { page: "messaging" } },
  },
};
