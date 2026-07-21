import type { Metadata } from "next";

const baseUrl = "https://www.treatflow.io";

// Englischer Entwurf der AGB/Terms. TODO(legal): Vor Produktivgang juristisch
// pruefen lassen (Vertragsrecht, Widerruf, anwendbares Recht, Gerichtsstand).
export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms of service for using Treatflow, the all-in-one software for beauty studios.",
  alternates: { canonical: `${baseUrl}/en/terms` },
  robots: { index: true, follow: true },
};

export default function EnTerms() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-10">
          These terms govern your use of Treatflow. By creating an account you agree
          to them.
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Provider</h2>
            <p>
              Treatflow is operated by Gökce Elikci, Bahnhofstrasse 17, 5500
              Bischofshofen, Austria (&quot;Treatflow&quot;, &quot;we&quot;, &quot;us&quot;). Contact:{" "}
              <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:underline">
                hello@treatflow.io
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Scope</h2>
            <p>
              These terms apply to the use of the Treatflow web application and
              related services. Treatflow is a business-to-business service intended
              for use by studios and professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Account and registration</h2>
            <p>
              You must provide accurate information when registering and keep your
              login credentials confidential. You are responsible for all activity
              under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Free trial</h2>
            <p>
              We offer a 14-day free trial. No payment details are required to start
              the trial. If you do not subscribe, access to paid features ends when
              the trial expires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Subscriptions and payment</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Subscriptions are billed monthly or yearly in advance.</li>
              <li>Prices are shown before checkout; your local currency and any applicable tax are displayed at checkout.</li>
              <li>Payments are processed by our payment provider (Stripe).</li>
              <li>Subscriptions renew automatically until cancelled.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Cancellation</h2>
            <p>
              You can cancel your subscription at any time with effect from the end of
              the current billing period. After cancellation you retain access until
              the paid period ends.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Your data and responsibilities</h2>
            <p>
              You remain responsible for the data you enter into Treatflow, including
              client data, and for having a lawful basis to process it. We process
              such data on your behalf as described in our{" "}
              <a href="/en/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Availability</h2>
            <p>
              We aim for high availability but do not guarantee uninterrupted service.
              Maintenance, updates or factors beyond our control may cause temporary
              interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Liability</h2>
            <p>
              To the extent permitted by law, our liability is limited to intent and
              gross negligence. We are not liable for indirect or consequential
              damages or for loss of data caused by factors outside our reasonable
              control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Changes</h2>
            <p>
              We may update these terms. We will inform you of material changes in good
              time. Continued use after changes take effect constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Governing law</h2>
            <p>
              These terms are governed by Austrian law, without prejudice to mandatory
              consumer protection rules that may apply in your country of residence.
            </p>
            <p className="mt-3 text-sm text-gray-500">Last updated: July 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
