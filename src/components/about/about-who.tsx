const highlights = [
  "Specialized in career placement for international students and professionals",
  "End-to-end recruitment, staffing, and talent acquisition solutions",
  "Global hiring support for companies across industries",
  "Practical guidance and support from job search to successful placement",
];

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "5K+", label: "Candidates Placed" },
  { value: "360+", label: "Partner Companies" },
  { value: "12+", label: "Countries Covered" },
];

export function AboutWho() {
  return (
    <section className="section_who mt-3 overflow-hidden rounded-[2rem] bg-[#f3f7fc]">
      <div className="padding-global page-x">
        <div className="container-large mx-auto max-w-6xl py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#5b92e5] uppercase">
            About JSCALE
          </p>
          <h2 className="mt-4 max-w-4xl text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
            We&apos;ve helped over 5400+ individuals &amp; 360+ employers
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>
              At JSCALE, we know that behind every job search and every open
              role, there&apos;s a goal of building careers and building teams.
              What started as a mission to connect talented professionals with
              the right opportunities has grown into helping companies and
              candidates succeed through smarter hiring, global talent
              acquisition, and career support.
            </p>
            <p>
              Over the years, JSCALE has helped 5400+ job seekers step into
              meaningful roles while supporting 360+ businesses in building
              strong, reliable teams. From job placement and staffing to talent
              acquisition and global hiring support, we work behind the scenes
              to make the connection between talent and opportunity.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl bg-white px-4 py-4 text-sm leading-relaxed text-zinc-700 sm:text-[0.95rem]"
              >
                <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#5b92e5] text-[0.65rem] font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] bg-white p-5 sm:p-6"
              >
                <div className="text-[clamp(1.75rem,4vw,2.75rem)] leading-none font-bold tracking-tight text-zinc-900">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-medium text-zinc-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
