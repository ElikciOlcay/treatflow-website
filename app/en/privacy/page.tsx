import type { Metadata } from "next";

const baseUrl = "https://www.treatflow.io";

// Englischer Entwurf auf Basis des deutschen Datenschutztextes.
// TODO(legal): Vor Produktivgang juristisch pruefen lassen (v. a. Drittanbieter,
// Fristen, internationale Datenuebermittlung).
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Treatflow collects, uses and protects your personal data. GDPR-compliant, EU-hosted.",
  alternates: { canonical: `${baseUrl}/en/privacy` },
  robots: { index: true, follow: true },
};

export default function EnPrivacy() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-10">
          Your data is safe with us. This page explains how we handle your personal
          information.
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Data controller</h2>
            <p className="mb-3">The party responsible for data processing on this website is:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Treatflow</strong></p>
              <p>Gökce Elikci</p>
              <p>Bahnhofstrasse 17</p>
              <p>5500 Bischofshofen, Austria</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:underline">
                  hello@treatflow.io
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. What data we collect</h2>
            <h3 className="font-semibold text-gray-900 mb-2">Automatically collected data</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP address</li>
              <li>Date and time of access</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
              <li>Amount of data transferred</li>
            </ul>
            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Data when you contact us</h3>
            <p>If you contact us by form or email, we store your name, email address, the content of your message and the time of contact.</p>
            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Data on sign-up</h3>
            <p>When you register for Treatflow, we collect your name, email address, studio information and chosen plan.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Purpose of processing</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Providing and improving our website and services</li>
              <li>Handling requests and customer support</li>
              <li>Performing our contract with you</li>
              <li>Technical administration and IT security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Legal basis</h2>
            <p className="mb-3">We process your data under the following legal bases of the GDPR:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Art. 6(1)(a):</strong> consent</li>
              <li><strong>Art. 6(1)(b):</strong> performance of a contract</li>
              <li><strong>Art. 6(1)(c):</strong> legal obligation</li>
              <li><strong>Art. 6(1)(f):</strong> legitimate interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Storage and deletion</h2>
            <p className="mb-3">We keep your data only as long as necessary for the relevant purpose:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Website logs:</strong> 30 days</li>
              <li><strong>Contact requests:</strong> 2 years after handling</li>
              <li><strong>Customer data:</strong> until termination of the contract plus statutory retention periods</li>
              <li><strong>Invoice data:</strong> 7 years (statutory tax retention)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Data security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>SSL/TLS encryption for all data transfers</li>
              <li>Secure servers in certified EU data centres</li>
              <li>Regular security updates</li>
              <li>Access restrictions and authentication</li>
              <li>Regular backups</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Your rights</h2>
            <p className="mb-3">You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Access:</strong> request information about the data we process</li>
              <li><strong>Rectification:</strong> request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> request deletion of your data</li>
              <li><strong>Restriction:</strong> request restriction of processing</li>
              <li><strong>Portability:</strong> receive your data in a structured format</li>
              <li><strong>Objection:</strong> object to processing</li>
              <li><strong>Complaint:</strong> lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-3">
              To exercise your rights, contact us at{" "}
              <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:underline">
                hello@treatflow.io
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              Our website uses cookies to ensure functionality and improve your
              experience. You can disable cookies in your browser settings, although
              this may affect the functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Third-party services</h2>
            <p className="mb-3">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>HubSpot:</strong> contact forms and CRM (USA)</li>
              <li><strong>Google Analytics:</strong> anonymised website analytics (only with consent)</li>
              <li><strong>Meta Pixel:</strong> marketing measurement (only with consent)</li>
              <li><strong>Hosting provider:</strong> delivery of the website</li>
            </ul>
            <p className="mt-3">
              These providers process data only on our behalf and are contractually
              bound to comply with data protection law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Changes to this policy</h2>
            <p>
              We may update this privacy policy to reflect legal requirements or
              changes to our services. The current version is always available on this
              page.
            </p>
            <p className="mt-3 text-sm text-gray-500">Last updated: July 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
