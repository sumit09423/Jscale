import Image from "next/image";
import Link from "next/link";
import { ctaLink } from "@/lib/nav";

export function HeroSection() {
  return (
    <section className="section_home">
      <div className="hero_wrap relative overflow-hidden rounded-[1.5rem] bg-[var(--hero-bg)] pt-[calc(5rem+var(--safe-top))] sm:rounded-[2rem]">
        <div
          className="hero-bg-anim pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
          <span className="hero-orb hero-orb-3" />
          <span className="hero-grid" />
          <span className="hero-shine" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[24rem] w-full max-w-6xl items-center gap-8 px-5 py-10 sm:min-h-[34rem] sm:gap-10 sm:px-10 sm:py-16 lg:min-h-[48.5rem] lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-20">
          <div className="flex flex-col items-start text-left">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
              From strategy to success
            </p>

            <h1 className="mt-3 max-w-xl text-[clamp(1.85rem,6.5vw,4.25rem)] leading-[1.08] font-semibold tracking-tight text-balance text-white sm:mt-5">
              Build and Growth with Scalable Tools
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-pretty text-white/80 sm:mt-5 sm:text-lg lg:text-xl">
              Easily adapt to changes and scale your operations with our flexible
              infrastructure, designed to support your business growth.
            </p>

            <div className="mt-6 w-full sm:mt-8 sm:w-auto">
              <Link
                href={ctaLink.href}
                className="inline-flex min-h-[var(--min-tap-target)] w-full items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 sm:w-auto sm:px-8 sm:text-base"
              >
                {ctaLink.label}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] sm:aspect-[5/6] sm:rounded-[1.5rem] lg:aspect-[4/5] lg:min-h-[28rem]">
              <Image
                src="/699c8d86557b461aa615af89_Job20Placement.avif"
                alt="Career and placement growth with Jscale"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
