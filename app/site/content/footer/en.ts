import type { FooterContent } from "./types";

/**
 * English footer. Same columns as `de.ts` without DACH-only items (POS, vouchers,
 * NiSV, regions, German PDF templates). Links to pages that do not exist in a
 * language yet are hidden automatically (see app/i18n/site-pages.ts).
 */
export const footerEn: FooterContent = {
  tagline: "The digital assistant for salons and clinics. Made in Austria.",
  instagramAria: "Treatflow on Instagram",
  columns: [
    {
      sections: [
        {
          title: "Features",
          links: [
            { href: { page: "appointment-calendar" }, label: "Appointment calendar" },
            { href: { page: "shift-planner" }, label: "Shift planner" },
            { href: { page: "online-booking" }, label: "Online booking" },
            { href: { page: "treatflow-pay" }, label: "Treatflow Pay", feature: "pay" },
            { href: { page: "client-records" }, label: "Client records" },
            { href: { page: "forms" }, label: "Forms" },
            { href: { page: "try-forms" }, label: "Try sample forms" },
            { href: { page: "treatment-documentation" }, label: "Treatment records" },
            { href: { page: "messaging" }, label: "Reminders" },
            { href: { page: "customer-workflows" }, label: "Client workflows" },
            { href: { page: "integrations" }, label: "Integrations" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Industries",
          links: [
            { href: { page: "beauty-salon-software" }, label: "Beauty salons" },
            { href: { page: "laser-hair-removal-software" }, label: "Laser & IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Permanent makeup" },
            { href: { page: "aesthetic-clinic-software" }, label: "Aesthetic clinics" },
            { href: { page: "nail-salon-software" }, label: "Nail salons" },
            { href: { page: "foot-care-software" }, label: "Foot care" },
            { href: { page: "lash-studio-software" }, label: "Lash studios" },
            { href: { page: "tattoo-studio-software" }, label: "Tattoo studios" },
            { href: { page: "spa-wellness-software" }, label: "Spa & wellness" },
            { href: { page: "massage-software" }, label: "Massage" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Product",
          links: [
            { href: { page: "pricing" }, label: "Pricing" },
            { href: { page: "software-comparison" }, label: "Software comparison" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
            { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
            { href: { page: "shop" }, label: "Shop" },
            { href: { page: "studio-website" }, label: "Salon websites" },
            { special: "register", label: "Start free trial" },
            { special: "login", label: "Log in" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Company",
          links: [
            { href: { page: "about" }, label: "About us" },
            { href: { page: "blog" }, label: "Blog" },
            { href: { page: "news" }, label: "News" },
            { href: { page: "try-features" }, label: "Try the features live" },
            { href: { page: "contact" }, label: "Contact" },
          ],
        },
        {
          title: "Legal",
          links: [
            { href: { page: "privacy" }, label: "Privacy policy" },
            { special: "cookie-settings", label: "Cookie settings" },
            { href: { page: "terms" }, label: "Terms & conditions" },
            { href: { page: "imprint" }, label: "Legal notice" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Popular topics",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Online booking for beauty salons" },
    { href: { page: "treatment-documentation" }, label: "Treatment record software" },
    { href: { page: "forms" }, label: "Digital consultation forms" },
    { href: { page: "messaging" }, label: "Appointment reminders" },
    { href: { page: "appointment-calendar" }, label: "Salon appointment diary software" },
    { href: { page: "client-records" }, label: "Salon client record software" },
    { href: { page: "aesthetic-clinic-software" }, label: "Aesthetic clinic software" },
    { href: { page: "software-comparison" }, label: "Salon software comparison" },
  ],
  rights: "All rights reserved.",
};
