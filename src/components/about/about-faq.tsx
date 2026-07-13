"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "How do international students get a job in the USA?",
    a: "International students succeed by combining the right skills, resume strategy, and interview preparation. With JSCALE, candidates get expert guidance and access to opportunities that lead to real placements.",
  },
  {
    q: "Which is the best agency for IT and Non-IT job placement for international students and job seekers?",
    a: "JSCALE is a strong placement partner for international students, offering structured support for both IT and Non-IT roles. We use a one-time fee model with no salary cuts or hourly commissions, keeping the process transparent and candidate-focused.",
  },
  {
    q: "Do you offer job placement for OPT and CPT students?",
    a: "Yes, we specialize in job placement for OPT and CPT students across IT and Non-IT roles. Our team has deep expertise in OPT/CPT profiles, including resume building, job responsibilities, and employer alignment.",
  },
  {
    q: "Can international students get H-1B visa sponsorship jobs in the USA?",
    a: "Yes, JSCALE helps candidates explore job opportunities that can lead to H-1B visa sponsorship in the USA. While many candidates receive sponsorship, the final decision depends on the candidate’s performance and the employer’s requirements.",
  },
  {
    q: "Do you provide full-time jobs or contract jobs?",
    a: "We primarily focus on full-time or 40hrs/week job opportunities that support long-term career growth. Our goal is to help candidates build stable careers, not just short-term placements.",
  },
  {
    q: "How much does the job placement service of JSCALE cost?",
    a: "The cost varies based on profile, such as OPT/CPT students, US citizens/GC holders, and IT or Non-IT roles. JSCALE offers customized plans for each category with a one-time fee model and no ongoing deductions.",
  },
  {
    q: "Why should companies use a staffing agency instead of hiring in-house?",
    a: "Staffing agencies reduce hiring time, cost, and effort by handling candidate sourcing and screening. JSCALE enables faster hiring with pre-vetted candidates and flexible workforce solutions.",
  },
  {
    q: "Can companies outsource talent acquisition to external partners?",
    a: "Yes, many businesses outsource talent acquisition to improve hiring efficiency and access wider talent pools. JSCALE works as an extended hiring partner to manage sourcing, screening, and onboarding processes.",
  },
  {
    q: "Can one company handle recruitment, payroll, and compliance together?",
    a: "Yes, many businesses prefer a single partner for hiring, payroll, and compliance to simplify operations. JSCALE offers integrated workforce solutions across recruitment, payroll, and verification.",
  },
  {
    q: "Where is JSCALE based?",
    a: "JSCALE is based in Sheridan, Wyoming, USA, with supporting operations that enable seamless service delivery for candidates and employers across the United States.",
  },
];

export function AboutFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section_faq mt-3 overflow-hidden rounded-[2rem] bg-white">
      <div className="padding-global page-x">
        <div className="container-large mx-auto max-w-6xl py-12 sm:py-16">
          <div className="faq_main-split grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
            <div className="is-sticky lg:sticky lg:top-28">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] font-bold tracking-tight text-zinc-900">
                Frequently asked questions
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-600 opacity-70 sm:text-[0.95rem]">
                Everything you need to know about our job placement services is
                covered in these FAQs. If you&apos;re looking for something else,
                just contact us.
              </p>
            </div>

            <div className="faq_wrapper divide-y divide-zinc-200 rounded-[1.25rem] border border-zinc-200">
              {faqs.map((item, index) => {
                const isOpen = open === index;
                return (
                  <div key={item.q} className="faq_block px-4 sm:px-5">
                    <button
                      type="button"
                      className="faq_question flex w-full items-start justify-between gap-3 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span className="text-sm font-medium text-zinc-900 sm:text-[0.95rem]">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-700 transition-transform",
                          isOpen && "rotate-45",
                        )}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq_answer pb-4">
                        <p className="text-sm leading-relaxed text-zinc-600 opacity-70">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
