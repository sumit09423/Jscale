const commitments = [
  {
    title: "Careers, Not Just Jobs",
    description:
      "We guide professionals toward roles that build long-term careers, not just short-term placements. Every opportunity we recommend is chosen with growth and stability in mind.",
  },
  {
    title: "Deadlines Mean Deadlines",
    description:
      "Great talent and great opportunities shouldn’t miss each other because of slow hiring. We move quickly while keeping quality and precision at every step.",
  },
  {
    title: "Partnership Driven",
    description:
      "We don't just place candidates—we build lasting relationships. Your success is our success, and we're committed to supporting you throughout the journey.",
  },
  {
    title: "Continuous Innovation",
    description:
      "We continuously evolve our processes, leverage modern tools, and adapt to changing market needs to deliver better outcomes for everyone.",
  },
];

export function AboutCommitment() {
  return (
    <section className="section_commitment mt-3 overflow-hidden rounded-[2rem] bg-white">
      <div className="padding-global page-x">
        <div className="container-large mx-auto max-w-6xl py-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
              Our Commitment To Individuals and Companies
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              At JSCALE, we are committed to delivering ethical recruitment,
              meaningful career outcomes, and reliable workforce solutions built
              on trust and transparency.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {commitments.map((item, index) => (
              <li
                key={item.title}
                className="rounded-[1.5rem] border border-zinc-200 bg-[#f8fafc] p-6 sm:p-8"
              >
                <div className="text-xs font-semibold tracking-[0.16em] text-[#5b92e5] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
