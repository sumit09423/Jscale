"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const journey = [
  {
    year: "2021",
    title: "The Making of JSCALE",
    body: "JSCALE started with a simple question: why are talented international students struggling to get jobs in the USA? A small founding team decided to do something about it. With no office and no structure, they began helping students from home — focusing on guidance, resumes, and real opportunities.",
  },
  {
    year: "2022",
    title: "When Things Started Getting Real",
    body: "A few students turned into many, and referrals kept growing. People started trusting them with something serious — their careers. Days became longer, nights shorter, and work never really stopped. Every placement added pressure and responsibility. It was no longer temporary — it was turning into a mission.",
  },
  {
    year: "2023",
    title: "The Leap That Changed Everything",
    body: "Growth demanded a decision: stay comfortable or take a risk. That’s when the first office came in, with a growing team. Roles were defined, systems were introduced, and processes began. Every candidate and every result started to matter more. This was the year JSCALE truly became real.",
  },
  {
    year: "2024",
    title: "Expanding Industry Reach",
    body: "Momentum picked up, and growth came faster than expected. A bigger team, better systems, and stronger execution followed. More candidates trusted the process and saw real outcomes. Placements increased, recognition grew, and JSCALE began delivering results at scale.",
  },
  {
    year: "2025",
    title: "The Shift That Changed the Game",
    body: "Until then, the focus was helping candidates get jobs. A bigger realization changed everything — companies needed help too. JSCALE expanded into recruitment, talent acquisition, background checks, payroll, and tax services. The shift from B2C to B2B opened a new chapter of building teams.",
  },
  {
    year: "2026",
    title: "Still Growing. Still Not Done.",
    body: "Today, JSCALE continues to grow across teams and branches. Systems and processes are established, but the mindset remains the same as day one. Every placement still matters. Growth hasn’t changed the purpose — it has strengthened it. And honestly, this still feels like just the beginning.",
  },
];

export function AboutJourney() {
  const [active, setActive] = useState(0);
  const item = journey[active];

  return (
    <section className="section_journey mt-3 overflow-hidden rounded-[2rem] bg-[#0f172a] text-white">
      <div className="padding-global page-x">
        <div className="container-large mx-auto max-w-6xl py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#8eb6f0] uppercase">
            Our Journey So Far
          </p>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight">
            Our Journey of Building Trust in Recruitment
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            From our foundation to becoming a trusted workforce partner —
            here&apos;s how JSCALE has grown over the years.
          </p>

          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Journey years"
          >
            {journey.map((entry, index) => (
              <button
                key={entry.year}
                type="button"
                role="tab"
                aria-selected={active === index}
                onClick={() => setActive(index)}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                  active === index
                    ? "bg-[#5b92e5] text-white"
                    : "bg-white/10 text-white/75 hover:bg-white/15",
                )}
              >
                {entry.year}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-white/5 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#8eb6f0] uppercase">
              Journey · {item.year}
            </p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              {item.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
