import Link from "next/link";

export function AboutHero() {
  return (
    <section className="section_hero service mt-0 overflow-hidden rounded-[1.5rem] bg-[var(--hero-bg)] sm:rounded-[2rem]">
      <div className="relative px-5 pt-[calc(5.25rem+var(--safe-top))] pb-12 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <div className="absolute -top-20 right-10 size-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 size-80 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/75 uppercase sm:text-xs">
            About JSCALE
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(1.85rem,6vw,4.25rem)] leading-[1.08] font-bold tracking-tight text-balance text-white">
            Connecting Talent with Opportunity Since 2021
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-lg">
            We&apos;re a leading job placement and recruitment company dedicated
            to empowering international students and connecting innovative
            companies with exceptional talent across the globe.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="mailto:hello@jscale.com?subject=Join%20Our%20Team"
              className="inline-flex min-h-[var(--min-tap-target)] w-full items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto sm:text-base"
            >
              Join Our Team
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[var(--min-tap-target)] w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-90 sm:w-auto sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
