"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function fireNewsletterSignup() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "newsletter_signup", {
      page: window.location.pathname,
    });
  }
  window.open("https://buttondown.com/pethealthguide", "popupwindow");
}

export default function EmailCapture({ heading = "Get our free pet wellness newsletter" }: { heading?: string }) {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
      <p className="text-2xl mb-1">🐕</p>
      <h2 className="text-xl font-bold text-emerald-900 mb-2">{heading}</h2>
      <p className="text-emerald-700 text-sm mb-4">
        Weekly tips on natural remedies, supplement reviews, and holistic care
        for dogs and cats — straight to your inbox.
      </p>
      {/* Buttondown embed form */}
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/pethealthguide"
        method="post"
        target="popupwindow"
        onSubmit={fireNewsletterSignup}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
        />
        <button
          type="submit"
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          Subscribe Free
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
