"use client";

import { useRef } from "react";

const team = [
  { name: "Karthik Subramanian", role: "Founder and CEO" },
  { name: "Anjali Krishnan", role: "Founder & COO" },
  { name: "Suresh Iyer", role: "Co-founder & Director" },
  { name: "Meenakshi Raman", role: "Marketing Manager" },
  { name: "Ramesh Venkatesh", role: "Marketing Manager" },
  { name: "Deepa Nair", role: "Business Development Lead" },
  { name: "Arjun Pillai", role: "Senior Recruiter" },
  { name: "Lakshmi Narayanan", role: "Lead Generation Lead" },
  { name: "Vijay Prakash", role: "Business Development Lead" },
  { name: "Swathi Reddy", role: "Business Development Lead" },
  { name: "Harish Kumar", role: "Senior Process Analyst" },
  { name: "Divya Srinivasan", role: "Business Development Lead" },
  { name: "Rohit Menon", role: "Business Development Lead" },
  { name: "Priya Chandrasekar", role: "Business Development Lead" },
  { name: "Ganesh Balaji", role: "Payroll and Compliance Manager" },
  { name: "Kavitha Murugan", role: "Business Development Lead" },
  { name: "Sai Charan", role: "HR Manager" },
  { name: "Nithin Raj", role: "Senior Recruiter" },
  { name: "Shreya Venugopal", role: "Senior Recruiter" },
  { name: "Aditya Krishnamurthy", role: "CFO" },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function AboutTeam() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-team-card]");
    if (!track || !card) return;
    track.scrollBy({
      left: direction === "next" ? card.offsetWidth + 16 : -(card.offsetWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section className="section_meet-people mt-3 overflow-hidden rounded-[2rem] bg-white">
      <div className="padding-global page-x">
        <div className="container-large mx-auto max-w-6xl py-12 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
                Meet the People Behind JSCALE&apos;s Success
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                Our diverse team of experts brings together decades of experience
                in recruitment, technology, operations, and international student
                support to deliver exceptional results.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous team members"
                onClick={() => scrollByCard("prev")}
                className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next team members"
                onClick={() => scrollByCard("next")}
                className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {team.map((person) => (
              <article
                key={person.name}
                data-team-card
                className="w-[70%] shrink-0 snap-start rounded-[1.5rem] border border-zinc-200 bg-[#f8fafc] p-5 sm:w-[45%] lg:w-[calc((100%-3rem)/4)]"
              >
                <div className="flex aspect-[4/5] items-center justify-center rounded-[1.25rem] bg-[#e8f1fc] text-3xl font-bold text-[#5b92e5]">
                  {initials(person.name)}
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-zinc-900">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
