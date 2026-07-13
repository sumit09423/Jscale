import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AboutCta } from "@/components/about/about-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { createPageMetadata, getSiteUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "JSCALE",
    },
    mainEntityOfPage: getSiteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <JsonLd data={schema} />
      <article className="mt-0 overflow-hidden rounded-[2rem] bg-white">
        <div className="page-x py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <p className="text-sm text-zinc-500">
              {post.date} · {post.author}
            </p>
            <h1 className="mt-4 text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
              {post.title}
            </h1>
            <div className={`mt-8 h-40 rounded-[1.5rem] ${post.tone}`} />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-600">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-[var(--min-tap-target)] items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
            >
              Talk to JSCALE
            </Link>
          </div>
        </div>
      </article>
      <AboutCta />
    </>
  );
}
