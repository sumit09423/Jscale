import Link from "next/link";

export function AboutCta() {
  return (
    <section className="section_cta mt-3 overflow-hidden rounded-[2rem] bg-[#5b92e5]">
      <div className="padding-global page-x">
        <div className="container-large relative z-10 mx-auto max-w-6xl py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.15] font-bold tracking-tight text-white">
              Got a Job Hunt Stress or Hiring Problem? We Love Those
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              Big careers and great teams usually start with a simple message.
              Send us one and let&apos;s see what we can build together.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="mailto:hello@jscale.com?subject=Book%20Free%20Call"
                className="inline-flex min-h-[var(--min-tap-target)] items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-base"
              >
                Book Free Call
              </Link>
              <Link
                href="mailto:hello@jscale.com"
                className="inline-flex min-h-[var(--min-tap-target)] items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-90 sm:text-base"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
