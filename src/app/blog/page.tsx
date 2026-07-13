import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { blogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Insights for Careers & Businesses",
  description:
    "Insights from JSCALE on H-1B, OPT, STEM careers, IT staffing, and hiring across the United States.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="mt-0 overflow-hidden rounded-[2rem] bg-white">
      <div className="page-x py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
                Insights That Empower Careers & Businesses
              </h1>
              <p className="mt-4 max-w-2xl text-base text-zinc-600">
                Practical guidance on staffing, immigration-aware hiring, and
                career growth in the US tech market.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white"
              >
                <div
                  className={`flex min-h-[10rem] items-end p-6 ${post.tone}`}
                >
                  <div className="text-xs font-semibold tracking-[0.12em] text-zinc-700 uppercase">
                    {post.date}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="text-sm text-zinc-500">{post.author}</div>
                  <h2 className="mt-3 text-xl leading-snug font-bold tracking-tight text-zinc-900">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900"
                  >
                    Read more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
