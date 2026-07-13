import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="section_insight mt-3 overflow-hidden rounded-[2rem] bg-white"
      aria-labelledby="insights-heading"
    >
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl">
          <div className="padding-section-medium py-10 sm:py-14 lg:py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="insights-heading"
                className="max-w-2xl text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900"
              >
                Insights That Empower Careers & Businesses
              </h2>
              <Link
                href="/blog"
                className="inline-flex min-h-[var(--min-tap-target)] items-center text-sm font-semibold text-[#5b92e5] hover:underline sm:text-base"
              >
                View All Insights
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {blogPosts.slice(0, 3).map((post) => (
                <article
                  key={post.slug}
                  className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white"
                >
                  <div
                    className={`flex min-h-[10rem] items-end p-6 sm:min-h-[11rem] ${post.tone}`}
                  >
                    <div className="text-xs font-semibold tracking-[0.12em] text-zinc-700 uppercase">
                      {post.date}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="text-sm text-zinc-500">{post.author}</div>
                    <h3 className="mt-3 text-xl leading-snug font-bold tracking-tight text-zinc-900">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
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
      </div>
    </section>
  );
}
