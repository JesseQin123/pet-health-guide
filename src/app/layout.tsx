import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";
const ADSENSE_PUB = process.env.NEXT_PUBLIC_ADSENSE_PUB ?? "ca-pub-XXXXXXXXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL("https://pethealthguide.com"),
  title: {
    default: "Pet Health Guide | Holistic Pet Care Reviews & Tips",
    template: "%s | Pet Health Guide",
  },
  description:
    "Expert reviews and guides on holistic pet health — CBD oil, joint supplements, and natural remedies for dogs and cats.",
  keywords: [
    "holistic pet health",
    "CBD oil for dogs",
    "dog joint supplements",
    "HolistaPet review",
    "natural pet remedies",
    "pet supplements",
  ],
  authors: [{ name: "Pet Health Guide" }],
  creator: "Pet Health Guide",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pethealthguide.com",
    siteName: "Pet Health Guide",
    title: "Pet Health Guide | Holistic Pet Care Reviews & Tips",
    description:
      "Expert reviews and guides on holistic pet health — CBD oil, joint supplements, and natural remedies for dogs and cats.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pet Health Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Health Guide | Holistic Pet Care Reviews & Tips",
    description:
      "Expert reviews and guides on holistic pet health — CBD oil, joint supplements, and natural remedies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
        {/* Google AdSense placeholder — set publisher ID after approval */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
