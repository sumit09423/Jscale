const stats = [
  {
    value: "1750+",
    label: "Candidates Placed",
    tone: "bg-[#5b92e5] text-white",
  },
  {
    value: "320+",
    label: "Partner Companies",
    tone: "bg-[#e8f1fc] text-zinc-900",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    tone: "bg-[#1e3a5f] text-white",
  },
  {
    value: "12+",
    label: "Years of Experience",
    tone: "bg-[#d9efe8] text-zinc-900",
  },
];

export function SuccessSection() {
  return (
    <section
      className="section_succe mt-3 overflow-hidden rounded-[2rem] bg-[#f3f7fc]"
      aria-labelledby="success-heading"
    >
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl">
          <div className="padding-section-medium py-10 sm:py-14 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <h2
                  id="success-heading"
                  className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900"
                >
                  Success Since Our Establishment
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                  JSCALE has facilitated the successful placement of{" "}
                  <span className="font-semibold text-zinc-900">1750+</span>{" "}
                  candidates, underscoring our proficiency in generating
                  meaningful employment opportunities for individuals and
                  dependable hiring outcomes for businesses across the United
                  States.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                  From first consultation to final offer, every placement
                  reflects focused matching, interview readiness, and lasting
                  career support.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-[1.5rem] p-5 sm:p-6 ${stat.tone}`}
                  >
                    <div className="text-[clamp(1.75rem,4vw,2.75rem)] leading-none font-bold tracking-tight">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm font-medium opacity-90 sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
