import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPost, getPostMeta } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://pethealthguide.com/blog/${slug}/` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.date,
      authors: [meta.author ?? "Pet Health Guide Team"],
      images: meta.image ? [{ url: meta.image }] : [{ url: "/og-image.png" }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author ?? "Pet Health Guide Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Pet Health Guide",
      url: "https://pethealthguide.com",
    },
    url: `https://pethealthguide.com/blog/${slug}/`,
    ...(post.image ? { image: post.image } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pethealthguide.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://pethealthguide.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://pethealthguide.com/blog/${slug}/` },
    ],
  };

  const faqLd = post.faqs && post.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-emerald-700">
            Home
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-emerald-700">
            Blog
          </Link>
          {" / "}
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Tags + date */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-emerald-700 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
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

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {post.description}
        </p>

        {/* Affiliate disclosure */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 mb-8 text-sm text-amber-900">
          <strong>Affiliate Disclosure:</strong> This post contains affiliate
          links. We may earn a commission at no extra cost to you. We only
          recommend products we genuinely believe in.
        </div>

        {/* Rendered markdown */}
        <div
          className="prose prose-emerald max-w-none prose-headings:font-bold prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:underline prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* End-of-post email capture */}
        <div className="mt-16">
          <EmailCapture heading="Enjoyed this guide? Get more in your inbox" />
        </div>
      </article>
    </>
  );
}
