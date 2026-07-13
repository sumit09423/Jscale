import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AboutCta } from "@/components/about/about-cta";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import {
  getRelatedServices,
  getServiceBySlug,
  servicePages,
} from "@/lib/services";
import { createPageMetadata, getSiteUrl, siteConfig } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) return {};
  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/services/${page.slug}`,
  });
}

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) notFound();

  const related = getRelatedServices(slug);
  const faq = [
    {
      q: `Do you provide ${page.title}?`,
      a: `Yes. JSCALE delivers ${page.title.toLowerCase()} with screened candidates, clear timelines, and placement support for employers and job seekers.`,
    },
    {
      q: "Do you hire for full-time and contract roles?",
      a: "We primarily focus on full-time and 40hrs/week opportunities, with flexible contract IT staffing when the role requires it.",
    },
    {
      q: "How fast can you shortlist candidates?",
      a: "Timelines depend on role complexity, but our process prioritizes speed without sacrificing screening quality.",
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: getSiteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: getSiteUrl("/services"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.title,
          item: getSiteUrl(`/services/${page.slug}`),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: page.location ?? "United States",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <section className="mt-0 overflow-hidden rounded-[2rem] bg-white">
        <div className="page-x py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: page.title },
              ]}
            />

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#5b92e5] uppercase">
                  {page.category === "location"
                    ? "Location Staffing"
                    : page.category === "technology"
                      ? "Technology Staffing"
                      : "IT Recruitment"}
                </p>
                <h1 className="mt-4 text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
                  {page.headline}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {page.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[var(--min-tap-target)] items-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white"
                  >
                    Book Free Call
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex min-h-[var(--min-tap-target)] items-center rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium text-zinc-900"
                  >
                    All Services
                  </Link>
                </div>

                <div className="mt-12 space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                    Why companies choose JSCALE
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Screened, interview-ready IT talent",
                      "Transparent one-time fee model",
                      "Support for OPT/CPT and full-time hiring",
                      "US market coverage with fast coordination",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-zinc-200 bg-[#f8fafc] px-4 py-3 text-sm text-zinc-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                    Frequently asked questions
                  </h2>
                  <div className="mt-5 divide-y divide-zinc-200 rounded-2xl border border-zinc-200">
                    {faq.map((item) => (
                      <div key={item.q} className="px-5 py-4">
                        <h3 className="text-sm font-semibold text-zinc-900">
                          {item.q}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="rounded-[1.5rem] border border-zinc-200 bg-[#f3f7fc] p-6 sm:p-7">
                <h2 className="text-lg font-bold text-zinc-900">
                  Related services
                </h2>
                <ul className="mt-4 space-y-2">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="text-sm font-medium text-[#2f6fdb] hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-zinc-200 pt-6">
                  <p className="text-sm text-zinc-600">
                    Looking for custom hiring support?
                  </p>
                  <Link
                    href="/contact"
                    className="mt-3 inline-flex text-sm font-semibold text-zinc-900 hover:underline"
                  >
                    Contact our recruiters →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <AboutCta />
    </>
  );
}
