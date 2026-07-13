"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Placement = {
  name: string;
  update: string;
  location: string;
  salary: string;
  logo: string;
  story: string;
};

const placements: Placement[] = [
  {
    name: "Karthik Subramanian",
    update: "Received offer letter from Trust Lab",
    location: "California",
    salary: "$135k",
    logo: "/placements/trust-lab.png",
    story:
      "Karthik Subramanian has officially made a strong move into the tech space with a new opportunity at Trust Lab. He’ll be joining the team in California as a Software Engineer with a remarkable $135K package. From chasing opportunities to converting the right one, this achievement reflects the kind of growth that comes from staying consistent and ready for the moment.",
  },
  {
    name: "Anjali Krishnan",
    update: "Technical round scheduled at Disney",
    location: "California",
    salary: "Negotiation",
    logo: "/placements/disney.png",
    story:
      "Anjali Krishnan is currently preparing for an exciting opportunity with Disney, with her technical interview round now officially scheduled. As the process moves forward, JSCALE is closely supporting her with interview preparation and strategic guidance, while the role details and compensation are still under discussion.",
  },
  {
    name: "Suresh Iyer",
    update: "Received offer letter from Verisk",
    location: "Boston",
    salary: "$100k",
    logo: "/placements/verisk.png",
    story:
      "Suresh Iyer has secured an exciting opportunity at Verisk as an Associate Scientist in Boston with a package of $100K. A strong achievement that reflects his dedication, capability, and the effort he consistently put into reaching the right opportunity.",
  },
  {
    name: "Deepa Nair",
    update: "Technical round scheduled at EY",
    location: "New York",
    salary: "Negotiation",
    logo: "/placements/ey.png",
    story:
      "Deepa Nair is making steady progress in the hiring process with EY. Her second technical round has now been scheduled, marking another important step toward the opportunity. With salary discussions underway and strong preparation behind her, she’s giving her best at every stage.",
  },
  {
    name: "Ramesh Venkatesh",
    update: "Received offer letter from Fiserv",
    location: "Milwaukee, WI",
    salary: "$180k",
    logo: "/placements/fiserv.png",
    story:
      "Ramesh Venkatesh has reached an incredible milestone in his career journey. He has secured a Product Manager role at Fiserv in Milwaukee, WI, with an outstanding package of $180K. This achievement reflects his vision, persistence, and ability to seize the right opportunity.",
  },
  {
    name: "Lakshmi Narayanan",
    update: "Received offer letter from Intellias",
    location: "Ohio",
    salary: "$114k",
    logo: "/placements/intellias.png",
    story:
      "Lakshmi Narayanan has secured a fantastic full-time opportunity with Intellias as an AI-Enabled Data Engineer in Ohio, USA. With an impressive package of $114K, this achievement is a testament to her technical expertise and dedication.",
  },
  {
    name: "Arjun Pillai",
    update: "Interview scheduled at Dexian",
    location: "Virginia",
    salary: "Negotiation",
    logo: "/placements/dexian.png",
    story:
      "Arjun Pillai is currently progressing through the interview process with Dexian for an exciting opportunity. With his interview rounds now scheduled and salary discussions underway, he’s entering a crucial phase of the journey.",
  },
  {
    name: "Meenakshi Raman",
    update: "Offer accepted at Trust Lab",
    location: "Texas",
    salary: "$128k",
    logo: "/placements/trust-lab.png",
    story:
      "Meenakshi Raman has accepted an offer from Trust Lab in Texas with a $128K package. Her consistency through preparation and interviews helped her land a role that matches both her skills and long-term career goals.",
  },
  {
    name: "Vijay Prakash",
    update: "Final round completed at Verisk",
    location: "Chicago",
    salary: "$118k",
    logo: "/placements/verisk.png",
    story:
      "Vijay Prakash has completed the final interview round at Verisk in Chicago. With strong feedback so far and a $118K package under discussion, he is close to closing a major career milestone.",
  },
  {
    name: "Divya Srinivasan",
    update: "Received offer letter from Disney",
    location: "California",
    salary: "$142k",
    logo: "/placements/disney.png",
    story:
      "Divya Srinivasan has received an offer letter from Disney in California with a $142K package. A proud milestone that reflects her preparation, confidence, and the right guidance at every step.",
  },
  {
    name: "Harish Kumar",
    update: "Technical round scheduled at Fiserv",
    location: "Atlanta",
    salary: "Negotiation",
    logo: "/placements/fiserv.png",
    story:
      "Harish Kumar has a technical round scheduled at Fiserv in Atlanta. He is preparing with focused mock interviews and role-specific strategy as compensation discussions continue.",
  },
  {
    name: "Swathi Reddy",
    update: "Received offer letter from Intellias",
    location: "Ohio",
    salary: "$121k",
    logo: "/placements/intellias.png",
    story:
      "Swathi Reddy has secured a full-time role at Intellias in Ohio with a $121K package. Her persistence and technical clarity helped turn interviews into a strong career outcome.",
  },
];

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.23828 10.3915C4.25269 6.15094 7.70204 2.72494 11.9426 2.7393C16.1832 2.75376 19.6092 6.20311 19.5948 10.4437V10.5307C19.5426 13.2872 18.0035 15.835 16.1165 17.8263C15.0374 18.9469 13.8323 19.939 12.5252 20.7828C12.1757 21.0851 11.6573 21.0851 11.3078 20.7828C9.35935 19.5146 7.64922 17.9133 6.25567 16.0524C5.01363 14.4296 4.30845 12.46 4.23828 10.4176V10.3915Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.4"
        d="M11.9159 13.0004C13.275 13.0004 14.3768 11.8986 14.3768 10.5395C14.3768 9.18038 13.275 8.07861 11.9159 8.07861C10.5568 8.07861 9.45508 9.18038 9.45508 10.5395C9.45508 11.8986 10.5568 13.0004 11.9159 13.0004Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SalaryIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.19087 11.3764C7.8807 10.2283 8.62501 9.09873 9.34695 7.96815L7.37378 4.27576C7.37378 4.27576 7.52459 4.14635 7.90113 3.85446C9.02685 2.98269 10.2586 2.75696 11.5906 3.27458C12.8594 3.76787 14.1466 4.14149 15.5243 4.06365C15.9252 4.0403 17.4634 3.83598 17.4634 3.83598L15.6566 7.96134C16.3786 9.09095 17.1209 10.2283 17.8108 11.3764C18.9452 13.264 20.0301 15.3695 19.1515 17.5606C18.1289 20.1117 15.1458 20.9582 12.5003 21C9.85582 20.9582 6.87272 20.1117 5.85014 17.5606C4.97155 15.3695 6.05639 13.264 7.19087 11.3764Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.8706 12.332H11.8916C11.3029 12.332 10.8262 12.8088 10.8262 13.3974C10.8262 13.9861 11.3029 14.4638 11.8916 14.4638H13.1097C13.6984 14.4638 14.1751 14.9405 14.1751 15.5292C14.1751 16.1178 13.6984 16.5946 13.1097 16.5946H11.1307"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ProvenSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [active, setActive] = useState<Placement | null>(null);

  const updateButtons = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8);
  };

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-proven-card]");
    if (!track || !card) return;
    const amount = card.offsetWidth + 24;
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateButtons();
    track.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      track.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section
      id="placements"
      className="section_proven mt-3 overflow-hidden rounded-[2rem] bg-white"
      aria-labelledby="proven-heading"
    >
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl">
          <div className="padding-section-medium py-10 sm:py-14">
            <div className="slider-main_component">
              <div className="proven_header mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                <h2
                  id="proven-heading"
                  className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900"
                >
                  Live Placement Updates of Our Candidates
                </h2>

                <div className="slider-main_button-wrapper right flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    disabled={!canPrev}
                    onClick={() => scrollByCard("prev")}
                    className={cn(
                      "slider-main_button swiper-prev inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-opacity",
                      !canPrev && "is-disabled opacity-30",
                    )}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.25 11H4.34978V12.5L20.25 12.5V11Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.6113 17.7721L5.56353 11.7494L11.6113 5.72758L10.5529 4.66468L3.43773 11.7493L10.5528 18.835L11.6113 17.7721Z" fill="currentColor" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    disabled={!canNext}
                    onClick={() => scrollByCard("next")}
                    className={cn(
                      "slider-main_button swiper-next inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-opacity",
                      !canNext && "is-disabled opacity-30",
                    )}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="rotate-180">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.25 11H4.34978V12.5L20.25 12.5V11Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.6113 17.7721L5.56353 11.7494L11.6113 5.72758L10.5529 4.66468L3.43773 11.7493L10.5528 18.835L11.6113 17.7721Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                ref={trackRef}
                className="swiper is-slider-main -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {placements.map((item) => (
                  <article
                    key={item.name}
                    data-proven-card
                    className="swiper-slide is-slider-main card w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[calc((100%-2.5rem)/3)]"
                  >
                    <div className="proven_card overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white">
                      <div className="proven_card-content p-5 sm:p-6">
                        <div className="proven_header-tags-wrap flex items-center gap-3">
                          <div className="live_btn inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            <span className="live_cic relative flex size-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                            </span>
                            Live
                          </div>
                          <div className="text-size-tiny text-xs text-zinc-500">
                            Recently Updated
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="job_guy-name text-xl font-bold tracking-tight text-zinc-900">
                            {item.name}
                          </div>
                          <div className="text_company mt-2">
                            <div className="text-size-medium text-sm leading-relaxed text-zinc-600 sm:text-base">
                              {item.update}
                            </div>
                          </div>
                        </div>

                        <div className="job-tag-wrappper mt-4 flex flex-wrap gap-2">
                          <div className="tag_block inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700">
                            <LocationIcon />
                            {item.location}
                          </div>
                          <div className="tag_block inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700">
                            <SalaryIcon />
                            {item.salary}
                          </div>
                        </div>
                      </div>

                      <div className="proven_card-image relative aspect-[16/10] overflow-hidden bg-zinc-50">
                        <Image
                          src={item.logo}
                          alt=""
                          fill
                          className="image-cover object-cover"
                          sizes="(max-width: 1024px) 85vw, 33vw"
                        />
                        <div className="view_wrap absolute right-4 bottom-4">
                          <button
                            type="button"
                            onClick={() => setActive(item)}
                            className="button is-alternate is-icon is-fade inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
                          >
                            View More
                            <span className="inline-flex size-6 items-center justify-center rounded-full bg-white text-zinc-900">
                              →
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {active && (
        <div className="popup_main fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            className="popup_bg absolute inset-0 bg-black/50"
            aria-label="Close modal"
            onClick={() => setActive(null)}
          />
          <div className="popup_content-main relative z-10 w-full max-w-lg rounded-[1.5rem] bg-white p-6 sm:p-8">
            <button
              type="button"
              className="close_btn absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-900"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <div className="popup_block">
              <h3 className="heading-style-h4 text-2xl font-bold tracking-tight text-zinc-900">
                {active.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {active.story}
              </p>
              <div className="company_logo relative mt-6 h-28 overflow-hidden rounded-xl bg-zinc-50">
                <Image
                  src={active.logo}
                  alt=""
                  fill
                  className="object-contain p-4"
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
