import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pet Health Guide",
  description:
    "Privacy policy for Pet Health Guide — how we collect, use, and protect your data.",
  alternates: { canonical: "https://pethealthguide.com/privacy-policy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 15, 2024</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            Pet Health Guide (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates{" "}
            <strong>pethealthguide.com</strong>. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our
            website. Please read this policy carefully. If you disagree with its terms,
            please discontinue use of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <h3 className="font-semibold text-gray-800 mb-1">Information you provide</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address when you subscribe to our newsletter via Buttondown.</li>
            <li>Any messages you send us via contact forms.</li>
          </ul>
          <h3 className="font-semibold text-gray-800 mt-4 mb-1">
            Automatically collected information
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Log data</strong>: IP address, browser type, pages visited, time and
              date of your visit, time spent on pages.
            </li>
            <li>
              <strong>Cookies</strong>: Small files stored on your device. We use
              first-party cookies for analytics and third-party cookies (Google Analytics,
              Google AdSense) for advertising and measurement.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To send you our newsletter (only if you subscribed).</li>
            <li>To analyze site traffic and improve content.</li>
            <li>To display personalized advertisements via Google AdSense.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Google AdSense &amp; Advertising</h2>
          <p>
            We use Google AdSense to display advertisements. Google may use cookies and
            web beacons to collect data about your visits to this and other websites to
            serve you relevant ads. You can opt out of personalized advertising by
            visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-emerald-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ad Settings
            </a>{" "}
            or{" "}
            <a
              href="https://www.aboutads.info/choices/"
              className="text-emerald-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutads.info
            </a>
            . For more information on how Google uses data, see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-emerald-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Google Analytics</h2>
          <p>
            We use Google Analytics 4 to understand site traffic. Google Analytics
            collects data such as your IP address, browser, and pages visited. This data
            is anonymized and aggregated. You can opt out by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-emerald-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics opt-out browser add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Affiliate Links</h2>
          <p>
            This site contains affiliate links to products we recommend. If you click an
            affiliate link and make a purchase, we may earn a commission at no additional
            cost to you. We only recommend products we believe provide genuine value. Our
            editorial opinions are not influenced by affiliate relationships.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Third-Party Services</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Buttondown</strong>: Email newsletter service. Your email is stored
              by Buttondown per their{" "}
              <a
                href="https://buttondown.com/legal/privacy"
                className="text-emerald-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Vercel</strong>: Hosting provider. See Vercel&apos;s{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-emerald-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Data Retention &amp; Your Rights</h2>
          <p>
            We retain your email address as long as you are subscribed to our newsletter.
            You can unsubscribe at any time using the link in any email we send. To
            request deletion of your data, email us at{" "}
            <a href="mailto:privacy@pethealthguide.com" className="text-emerald-700 underline">
              privacy@pethealthguide.com
            </a>
            .
          </p>
          <p className="mt-2">
            If you are in the EEA or California, you may have additional rights under
            GDPR or CCPA, including the right to access, correct, or delete personal
            data we hold about you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
          <p>
            This site is not directed to children under 13. We do not knowingly collect
            personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will post the updated
            policy on this page with a new &quot;Last updated&quot; date. Continued use of
            the site after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact</h2>
          <p>
            Questions about this Privacy Policy? Contact us at{" "}
            <a href="mailto:privacy@pethealthguide.com" className="text-emerald-700 underline">
              privacy@pethealthguide.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
