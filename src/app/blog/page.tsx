import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Blog | Pet Health Guide",
  description:
    "Browse all our holistic pet health guides, CBD reviews, and supplement comparisons.",
  alternates: { canonical: "https://pethealthguide.com/blog/" },
};

const PLACEHOLDER_POSTS = [
  {
    slug: "holistapet-review",
    title: "HolistaPet Review 2024: Is It the Best CBD for Dogs?",
    description:
      "We tested HolistaPet CBD oil on three dogs over 8 weeks. Here's an honest look at quality, dosing, and results.",
    date: "2024-01-15",
    tags: ["CBD Reviews"],
  },
  {
    slug: "best-cbd-oil-for-dogs",
    title: "Best CBD Oil for Dogs: Top 5 Picks",
    description:
      "A comprehensive comparison of the top-rated CBD oils for dogs in 2024 — covering potency, ingredients, and value.",
    date: "2024-01-10",
    tags: ["CBD Reviews"],
  },
  {
    slug: "dog-joint-supplements",
    title: "Dog Joint Supplements: What Actually Works?",
    description:
      "Joint pain affects 1 in 4 dogs. We break down glucosamine, fish oil, CBD, and turmeric — backed by research.",
    date: "2024-01-05",
    tags: ["Supplements"],
  },
  {
    slug: "innovet-pet-cbd-review",
    title: "Innovet Pet CBD Oil Review: Worth the Price?",
    description:
      "Innovet offers 20–40% commission and claims vet-formulated CBD. We put it to the test.",
    date: "2023-12-28",
    tags: ["CBD Reviews"],
  },
];

export default function BlogPage() {
  const posts = getAllPosts();
  const displayPosts = posts.length > 0 ? posts : PLACEHOLDER_POSTS;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Holistic Pet Health Blog
      </h1>
      <p className="text-gray-600 mb-10">
        Honest reviews and guides on CBD, supplements, and natural remedies for
        dogs and cats.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {displayPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded-full">
                {post.tags?.[0] ?? "Guide"}
              </span>
              {post.date && (
                <span className="text-xs text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>
            <h2 className="font-bold text-xl text-gray-900 mb-2 leading-snug">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-emerald-700 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-emerald-700 font-semibold text-sm hover:underline"
            >
              Read guide →
            </Link>
          </article>
        ))}
      </div>

      <EmailCapture />
    </div>
  );
}
