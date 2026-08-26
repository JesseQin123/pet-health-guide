import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Pet Health Guide | Holistic Pet Care Reviews & Tips",
  description:
    "Expert reviews and guides on holistic pet health — CBD oil, joint supplements, and natural remedies for dogs and cats.",
  alternates: { canonical: "https://pethealthguide.com/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pet Health Guide",
  url: "https://pethealthguide.com",
  description:
    "Expert reviews and guides on holistic pet health — CBD oil, joint supplements, and natural remedies.",
};

const FALLBACK_FEATURED = [
  {
    title: "HolistaPet Review 2024: Is It the Best CBD for Dogs?",
    slug: "holistapet-review",
    description:
      "We tested HolistaPet CBD oil on three dogs over 8 weeks. Here's what we found about quality, dosing, and results.",
    tags: ["CBD Reviews"],
  },
  {
    title: "Best CBD Oil for Dogs: Top 5 Picks",
    slug: "best-cbd-oil-for-dogs",
    description:
      "A comprehensive comparison of the top-rated CBD oils for dogs — covering potency, ingredients, and value.",
    tags: ["CBD Reviews"],
  },
  {
    title: "Dog Joint Supplements: What Actually Works?",
    slug: "dog-joint-supplements",
    description:
      "Joint pain affects 1 in 4 dogs. We break down glucosamine, fish oil, CBD, and turmeric — backed by research.",
    tags: ["Supplements"],
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const featured = posts.length > 0 ? posts : FALLBACK_FEATURED;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-5xl mb-4">🐾</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Natural Health for{" "}
            <span className="text-emerald-300">Happy Pets</span>
          </h1>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Honest, research-backed reviews of CBD oils, joint supplements, and
            holistic remedies — so your dog or cat can thrive naturally.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-emerald-800 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Browse All Guides →
          </Link>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <EmailCapture heading="Get free weekly pet wellness tips" />
        </div>
      </section>

      {/* Featured posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Featured Reviews &amp; Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-emerald-50 px-6 pt-6 pb-2">
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                  {post.tags?.[0] ?? "Guide"}
                </span>
              </div>
              <div className="p-6 pt-2">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-emerald-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-emerald-700 font-semibold text-sm hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trust indicators */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-emerald-700">50+</p>
            <p className="text-gray-600 text-sm mt-1">Products Reviewed</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-emerald-700">Vet-Informed</p>
            <p className="text-gray-600 text-sm mt-1">Research-backed content</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-emerald-700">100% Honest</p>
            <p className="text-gray-600 text-sm mt-1">Unbiased affiliate reviews</p>
          </div>
        </div>
      </section>

      {/* Bottom email capture */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <EmailCapture />
      </section>
    </>
  );
}
