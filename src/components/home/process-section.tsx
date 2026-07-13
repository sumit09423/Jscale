"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const seekerSteps = [
  {
    step: "Step 1",
    title: "Free Consultation",
    description:
      "A quick consultation to understand your background, skills, career goals, and visa status so we can design the right path forward.",
  },
  {
    step: "Step 2",
    title: "Profile & Resume Prep",
    description:
      "We refine your resume, LinkedIn, and professional positioning to match US market expectations and hiring manager priorities.",
  },
  {
    step: "Step 3",
    title: "Targeted Opportunities",
    description:
      "Get matched with roles that fit your skills and goals, with clear guidance on interviews, timelines, and next steps.",
  },
  {
    step: "Step 4",
    title: "Offer & Onboarding",
    description:
      "From negotiation support to joining day readiness, we stay with you until the placement is complete and you’re set up for success.",
  },
];

const employerSteps = [
  {
    step: "Step 1",
    title: "Requirement Discovery",
    description:
      "We learn your role needs, team culture, timeline, and compliance requirements so sourcing starts with the right brief.",
  },
  {
    step: "Step 2",
    title: "Candidate Shortlist",
    description:
      "Receive screened, interview-ready candidates aligned to your stack, experience bar, and business priorities.",
  },
  {
    step: "Step 3",
    title: "Interview Coordination",
    description:
      "We manage scheduling, feedback loops, and candidate communication so your hiring process stays fast and organized.",
  },
  {
    step: "Step 4",
    title: "Hire & Support",
    description:
      "Close the offer confidently and get post-placement support that helps new hires ramp smoothly into your team.",
  },
];

export function ProcessSection() {
  const [audience, setAudience] = useState<"seekers" | "employers">("seekers");
  const steps = audience === "seekers" ? seekerSteps : employerSteps;

  return (
    <section
      className="section_proce mt-3 overflow-hidden rounded-[2rem] bg-white"
      aria-labelledby="process-heading"
    >
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl">
          <div className="padding-section-medium py-10 sm:py-14 lg:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="process-heading"
                className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900"
              >
                A Simple, Transparent Process for Everyone
              </h2>

              <div
                className="mt-8 inline-flex rounded-full border border-zinc-200 bg-zinc-50 p-1"
                role="tablist"
                aria-label="Process audience"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={audience === "seekers"}
                  onClick={() => setAudience("seekers")}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6",
                    audience === "seekers"
                      ? "bg-[#5b92e5] text-white"
                      : "text-zinc-600 hover:text-zinc-900",
                  )}
                >
                  For Job Seekers
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={audience === "employers"}
                  onClick={() => setAudience("employers")}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6",
                    audience === "employers"
                      ? "bg-[#5b92e5] text-white"
                      : "text-zinc-600 hover:text-zinc-900",
                  )}
                >
                  For Employers
                </button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {steps.map((item, index) => (
                <article
                  key={`${audience}-${item.title}`}
                  className="rounded-[1.5rem] border border-zinc-200 bg-[#f8fafc] p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-[0.14em] text-[#5b92e5] uppercase">
                      {item.step}
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#5b92e5]/10 text-sm font-bold text-[#5b92e5]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[0.95rem]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
