export const enPrivacy = {
  metaTitle: "Privacy Policy",
  metaDescription:
    "Treatflow privacy policy: GDPR-ready processing, EU hosting in Frankfurt, your rights and how we handle studio and website data.",
  title: "Privacy Policy",
  intro:
    "Treatflow is studio software for beauty salons and aesthetic clinics. We process personal data in line with the GDPR. The German privacy statement at /datenschutz is the legally complete version. This English page summarises the points studios and clients ask about most often.",
  sections: [
    {
      heading: "1. Controller",
      html: `<p>Controller for this website and the Treatflow application:</p>
<p><strong>Treatflow</strong><br/>Olcay Elikci<br/>Bahnhofstrasse 17<br/>5500 Bischofshofen, Austria<br/>Email: <a href="mailto:hello@treatflow.io">hello@treatflow.io</a></p>`,
    },
    {
      heading: "2. Where data is hosted",
      html: `<p>Treatflow is hosted on EU servers (Frankfurt). Connections are SSL-encrypted. We keep daily backups. Hosting is designed for GDPR. We do not sell client data and we are not a booking marketplace.</p>`,
    },
    {
      heading: "3. Data we process",
      html: `<p><strong>Website visitors:</strong> IP address, time of access, browser, referrer – needed to deliver and secure the site.</p>
<p><strong>Contact and trial signup:</strong> name, email, studio details you submit.</p>
<p><strong>Inside the app (studio data):</strong> client records, appointments, forms, signatures, treatment notes, photos and billing data that a studio stores. The studio is typically the controller for its client data; Treatflow acts as processor under a data processing agreement.</p>`,
    },
    {
      heading: "4. Purposes and legal bases",
      html: `<ul>
<li>Providing the website and software (contract / legitimate interest)</li>
<li>Account, billing and support (contract)</li>
<li>Legal obligations (tax, accounting)</li>
<li>Optional analytics and marketing cookies only with consent</li>
</ul>`,
    },
    {
      heading: "5. Your rights",
      html: `<p>Depending on applicable law you may request access, rectification, erasure, restriction, portability and object to processing. You can lodge a complaint with a supervisory authority. Austrian authority: Datenschutzbehörde. Contact us at hello@treatflow.io.</p>`,
    },
    {
      heading: "6. Google Calendar integration",
      html: `<p>Studios can optionally connect their Google account to Treatflow (app.treatflow.io) under <strong>Apps → Google Calendar</strong>. The connection is voluntary and only established when a user actively grants access through Google's consent screen.</p>
<p><strong>Data we access and why:</strong></p>
<ul>
<li><strong>Basic profile (openid, email, profile):</strong> to link the Google account to the Treatflow account and to display which Google account is connected.</li>
<li><strong>List of calendars (calendar.readonly):</strong> to show your calendars so you can choose the calendar to synchronise with.</li>
<li><strong>Calendar events (calendar.events):</strong> to create, update and delete Treatflow appointments and time blocks as events in the selected calendar, and to read events from that calendar so they appear in Treatflow as blocked times or appointments (two-way sync).</li>
</ul>
<p><strong>Data we store:</strong> access and refresh tokens (AES-encrypted), the Google account ID and email address, the ID and name of the selected calendar, the IDs, times and titles of synchronised events, and sync logs. All data is stored in our database in the EU (Supabase, Frankfurt).</p>
<p><strong>Use and sharing:</strong> Google user data is used exclusively to provide the calendar synchronisation within Treatflow. We do not share it with third parties, do not sell it, do not use it for advertising and do not use it to train AI models. Humans do not read this data unless you explicitly consent (e.g. for a support request), it is necessary for security purposes or to investigate abuse, or it is required by law.</p>
<p><strong>Revoking access and deletion:</strong> you can disconnect at any time in Treatflow under Apps → Google Calendar with “Disconnect”, which deletes the stored tokens, or revoke access via <a href="https://myaccount.google.com/permissions">https://myaccount.google.com/permissions</a>.</p>
<p>Treatflow's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>`,
    },
    {
      heading: "7. Full German statement",
      html: `<p>For cookies, processors, retention and the complete legal text see the <a href="/datenschutz">German privacy policy</a>.</p>`,
    },
  ],
};

export const enTerms = {
  metaTitle: "Terms of Service",
  metaDescription:
    "Treatflow terms: SaaS for beauty salons, transparent pricing, 14-day trial, no booking commission. Full German AGB apply.",
  title: "Terms of Service",
  intro:
    "Treatflow is a paid SaaS product for studio operations. By creating an account you agree to these terms. The German AGB at /agb are the binding contract. This English page explains the commercial points for international studios.",
  sections: [
    {
      heading: "1. The service",
      html: `<p>Treatflow provides web software for appointments, online booking, client records, forms, treatment documentation and related studio tools. It is not a marketplace and does not charge a commission per booking.</p>`,
    },
    {
      heading: "2. Plans, trial and cancellation",
      html: `<p>Plans start at €39/month (Basic) and €59/month (Booking), excluding VAT. A 14-day trial does not require a credit card. Monthly plans can be cancelled at the end of the billing period.</p>`,
    },
    {
      heading: "3. Studio responsibility",
      html: `<p>You are responsible for the data you enter, for using forms and documentation correctly, and for complying with beauty, health and tax rules in your country. Treatflow does not replace legal or medical advice.</p>`,
    },
    {
      heading: "4. Availability and support",
      html: `<p>We aim for high availability and provide email support (priority support on Booking). We may update the product. Critical security updates can be applied without notice.</p>`,
    },
    {
      heading: "5. Binding German terms",
      html: `<p>The complete contractual terms are the <a href="/agb">German AGB</a>. Questions: hello@treatflow.io.</p>`,
    },
  ],
};
