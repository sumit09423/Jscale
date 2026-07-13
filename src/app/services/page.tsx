import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { servicePages } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "IT Staffing & Recruitment Services USA",
  description:
    "Explore JSCALE IT staffing services across US cities and technologies — New York, Texas, California, Java, AWS, Python, AI, DevOps, and more.",
  path: "/services",
});

const groups = [
  {
    title: "Location Staffing",
    items: servicePages.filter((page) => page.category === "location"),
  },
  {
    title: "Technology Staffing",
    items: servicePages.filter((page) => page.category === "technology"),
  },
  {
    title: "Core SEO Services",
    items: servicePages.filter((page) => page.category === "keyword"),
  },
] as const;

export default function ServicesPage() {
  return (
    <section className="mt-0 overflow-hidden rounded-[2rem] bg-white">
      <div className="page-x py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
          <h1 className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
            IT Staffing & Recruitment Services
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            SEO-focused service pages for US markets and technologies — built to
            help employers find talent and candidates find the right
            opportunities.
          </p>

          <div className="mt-12 space-y-12">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                  {group.title}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="block rounded-2xl border border-zinc-200 bg-[#f8fafc] px-5 py-4 text-sm font-medium text-zinc-800 transition-colors hover:border-[#5b92e5] hover:bg-white"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
