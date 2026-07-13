import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutCta } from "@/components/about/about-cta";
import { AboutFaq } from "@/components/about/about-faq";
import { ContactForm } from "@/components/contact/contact-form";
import { InsightsSection } from "@/components/home/insights-section";
import { LogoSection } from "@/components/home/logo-section";
import { siteConfig, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | US IT Recruitment Services",
  description:
    "Got questions? Let’s talk. Connect with JSCALE to discuss job placement, IT staffing, and recruitment needs across the United States.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="section_hero service mt-0 overflow-hidden rounded-[1.5rem] bg-[var(--hero-bg)] sm:rounded-[2rem]">
        <div className="relative px-5 pt-[calc(5.25rem+var(--safe-top))] pb-10 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
            <div>
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/75 uppercase sm:text-xs">
                Contact Us
              </p>
              <h1 className="mt-4 max-w-xl text-[clamp(1.85rem,6vw,4rem)] leading-[1.08] font-bold tracking-tight text-white">
                Got Questions?
                <br />
                Let’s Talk
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-lg">
                Connect with people behind JSCALE to discuss your need and
                discover how our services can support your goal.
              </p>
              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
                <a
                  href="#contact-form"
                  className="inline-flex min-h-[var(--min-tap-target)] w-full items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white sm:w-auto"
                >
                  Connect Now
                </a>
                <Link
                  href="/services"
                  className="inline-flex min-h-[var(--min-tap-target)] w-full items-center justify-center rounded-full border border-white/40 bg-transparent px-7 py-3 text-sm font-medium text-white sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div
              id="contact-form"
              className="rounded-[1.5rem] bg-white p-5 sm:rounded-[1.75rem] sm:p-8"
            >
              <h2 className="text-[clamp(1.35rem,4vw,2rem)] leading-tight font-bold tracking-tight text-zinc-900">
                Let’s Make
                <br />
                Something Happen
              </h2>
              <p className="mt-2 text-sm text-zinc-500">You can reach us anytime</p>
              <div className="mt-5 sm:mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_culture mt-3 overflow-hidden rounded-[2rem] bg-white">
        <div className="padding-global page-x">
          <div className="container-large mx-auto max-w-6xl py-10 sm:py-12">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="contact_card flex items-start gap-4 rounded-[1.5rem] bg-[#f3f7fc] p-6">
                <div className="relative size-12 shrink-0">
                  <Image
                    src="/about/location-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Visit Us</p>
                  <address className="mt-1 text-base font-medium text-zinc-900 not-italic">
                    30 N Gould St Ste N
                    <br />
                    Sheridan, WY 82801
                  </address>
                </div>
              </div>
              <div className="contact_card flex items-start gap-4 rounded-[1.5rem] bg-[#f3f7fc] p-6">
                <div className="relative size-12 shrink-0">
                  <Image
                    src="/about/email-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email us on</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="mt-1 block text-base font-medium text-zinc-900 hover:underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  <p className="mt-1 text-sm text-zinc-600">
                    +91 79843 16542, +1 (412) 203-6859
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoSection />
      <AboutFaq />
      <InsightsSection />
      <AboutCta />
    </>
  );
}
