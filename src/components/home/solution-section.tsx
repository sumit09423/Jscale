import Image from "next/image";

export function SolutionSection() {
  return (
    <section
      id="solutions"
      className="section_solution mt-3 overflow-hidden rounded-[2rem] bg-white"
      aria-labelledby="solutions-heading"
    >
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl">
          <div className="padding-section-large bottom-0 py-10 sm:py-14 lg:py-16">
            <div className="margin-bottom margin-large mb-10 mx-auto max-w-3xl text-center sm:mb-12">
              <h2
                id="solutions-heading"
                className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900"
              >
                Workforce Solution for Businesses and Job seekers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                From hiring to get hired, JSCALE supports businesses and job
                seekers with end-to-end services.
              </p>
            </div>

            <div className="solution_grid-wrapper space-y-4 sm:space-y-5">
              <div className="solution_grid grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
                <article className="solution_card card-1 relative flex min-h-[20rem] flex-col overflow-hidden rounded-[2rem] bg-[#fcf5ed] p-7 sm:min-h-[22rem] sm:p-9 lg:col-span-8 lg:min-h-[24rem]">
                  <div className="solution-card_content relative z-10 max-w-[17rem] sm:max-w-[20rem] lg:max-w-[22rem]">
                    <div className="sol-card_head text-[1.65rem] font-bold tracking-tight text-zinc-900 sm:text-[1.85rem]">
                      Job Placement
                    </div>
                    <div className="text-size-medium mt-3 text-[0.95rem] leading-relaxed text-zinc-700 opacity-70 sm:text-base">
                      Helping professionals land meaningful full-time roles with
                      end to end services that
                      <br className="hidden sm:block" />
                      turn jobs into long-term careers.
                    </div>
                  </div>

                  <div className="sol_card-img pointer-events-none absolute right-[-6%] bottom-[-8%] h-[88%] w-[70%] sm:right-[-4%] sm:bottom-[-6%] sm:h-[96%] sm:w-[66%] lg:w-[62%]">
                    <Image
                      src="/solutions/job-placement.avif"
                      alt=""
                      fill
                      priority
                      className="image-cover object-contain object-right-bottom"
                      sizes="(max-width: 1024px) 70vw, 45vw"
                    />
                  </div>
                </article>

                <article className="solution_card card-2 relative flex min-h-[20rem] flex-col overflow-hidden rounded-[2rem] bg-[#f4e8a8] p-7 sm:min-h-[22rem] sm:p-8 lg:col-span-4 lg:min-h-[24rem]">
                  <div className="solution-card_content relative z-10">
                    <div className="sol-card_head text-[1.45rem] font-bold tracking-tight text-zinc-900 sm:text-[1.65rem]">
                      Recruitment & Staffing
                    </div>
                    <div className="text-size-medium mt-3 text-[0.95rem] leading-relaxed text-zinc-700 opacity-70 sm:text-base">
                      Connecting businesses with skilled professionals who
                      actually fit the role and the team.
                    </div>
                  </div>

                  <div className="spacer-xhuge mt-auto h-24" />
                  <div className="spacer-xhuge h-10" />

                  <div className="rec_sol-img pointer-events-none absolute inset-x-0 bottom-0 h-[58%]">
                    <Image
                      src="/solutions/walk.avif"
                      alt=""
                      fill
                      priority
                      className="image-cover object-contain object-bottom"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </article>
              </div>

              <div className="solution_sub-grid grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                {[
                  {
                    title: "Talent Acquisition",
                    description:
                      "Strategic hiring support to build long-term, high-performing teams.",
                    image: "/solutions/talent-acquisition.avif",
                    bg: "bg-[#d7ebf8]",
                  },
                  {
                    title: "Background Verification",
                    description:
                      "Comprehensive checks to ensure trust, compliance, and reliability.",
                    image: "/solutions/background-verification.avif",
                    bg: "bg-[#f8d9bc]",
                  },
                  {
                    title: "IT Training",
                    description:
                      "Training that prepares candidates for real-world tech careers.",
                    image: "/solutions/it-training.avif",
                    bg: "bg-[#ffe2f4]",
                  },
                  {
                    title: "Accounting & Taxes",
                    description:
                      "Seamless payroll processing with full tax and regulatory compliance.",
                    image: "/solutions/accounting-taxes.avif",
                    bg: "bg-[#dce48a]",
                  },
                ].map((card) => (
                  <article
                    key={card.title}
                    className={`solution_card relative flex min-h-[22rem] flex-col overflow-hidden rounded-[2rem] p-6 sm:min-h-[24rem] ${card.bg}`}
                  >
                    <div className="solution-card_content relative z-10">
                      <div className="sol-card_head text-[1.25rem] font-bold tracking-tight text-zinc-900 sm:text-xl">
                        {card.title}
                      </div>
                      <div className="text-size-medium mt-2 text-sm leading-relaxed text-zinc-700 opacity-70 sm:text-[0.95rem]">
                        {card.description}
                      </div>
                    </div>

                    <div className="spacer-xhuge mt-auto h-24" />
                    <div className="spacer-xhuge h-12" />

                    <div className="rec_sol-img mid pointer-events-none absolute inset-x-0 bottom-[-4%] h-[58%]">
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        className="image-cover object-contain object-bottom"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
