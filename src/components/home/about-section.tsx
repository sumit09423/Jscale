import Link from "next/link";
import { ctaLink } from "@/lib/nav";

const values = [
  {
    title: "Careers, Not Just Jobs",
    description:
      "We focus on long-term growth — matching people with roles where they can build real careers, not just fill a seat.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Deadlines Mean Deadlines",
    description:
      "Speed matters. We move with urgency, clear timelines, and reliable follow-through for candidates and hiring teams.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <path
          d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M4 20a6 6 0 0 1 7.2-5.88M20 20a6 6 0 0 0-5.2-4.95"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="17.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Partnership Driven",
    description:
      "We work beside you — listening first, aligning on goals, and staying involved until the right outcome is delivered.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <path
          d="M12 3.5 13.8 9h5.7l-4.6 3.4 1.8 5.6L12 14.8 7.3 18l1.8-5.6L4.5 9h5.7L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Innovation",
    description:
      "Markets change fast. We keep refining our process with better tools, smarter matching, and fresher talent insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <path
          d="M8 14.5c0 2.2 1.8 4 4 4s4-1.8 4-4c0-3-4-3.5-4-7.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M10 19.5h4M11 21.5h2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M9 8.5h6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section_about-net mt-3 overflow-hidden rounded-[2rem] bg-white"
      aria-labelledby="about-heading"
    >
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl py-6 sm:py-8 lg:py-10">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start text-left">
              <h2
                id="about-heading"
                className="max-w-xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight text-balance text-zinc-900"
              >
                So, What is JSCALE Solutions?
              </h2>
            </div>

            <div className="flex flex-col items-start text-left">
              <p className="text-base leading-relaxed text-pretty text-zinc-600 sm:text-lg">
                JSCALE is built on a simple idea: talented people shouldn&apos;t
                struggle to find the right opportunities, and companies
                shouldn&apos;t struggle to find the right talent. We bridge that
                gap across the United States with focused recruiting, career
                guidance, and placement support.
              </p>

              <p className="mt-4 text-base leading-relaxed text-pretty text-zinc-600 sm:text-lg">
                From strategy to success, we help candidates land roles that match
                their skills — and help employers build strong teams faster. Our
                process is clear, human, and designed to scale with your growth.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex min-h-[var(--min-tap-target)] items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 sm:px-8 sm:text-base"
                >
                  About Us
                </Link>
                <Link
                  href={ctaLink.href}
                  className="inline-flex min-h-[var(--min-tap-target)] items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition-opacity duration-200 hover:opacity-90 sm:px-8 sm:text-base"
                >
                  {ctaLink.label}
                </Link>
              </div>
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {values.map((value, index) => (
              <li
                key={value.title}
                className="flex flex-col rounded-[1.5rem] bg-[#eef4fc] p-5 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#d9e7fb] text-[#2f6fdb]">
                    {value.icon}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#2f6fdb]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[0.95rem]">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
