export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tone: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "h1b-shock-reversed-100000-visa-fee",
    title:
      "H-1B Shock Reversed: Why the $100,000 Visa Fee Was Struck Down by a U.S. Federal Judge",
    excerpt:
      "The proposal to increase H-1B visa fees under the U.S. administration has now been struck down by a federal judge.",
    date: "June 11, 2026",
    author: "JSCALE Editorial",
    tone: "bg-[#e8f1fc]",
    content: [
      "The proposal to increase H-1B costs created major uncertainty for employers and skilled professionals across the United States.",
      "For staffing partners and hiring teams, the ruling changes short-term planning around sponsorship budgets, timelines, and workforce strategy.",
      "JSCALE continues to help candidates and companies navigate visa-aware hiring with clear guidance and market-aligned opportunities.",
    ],
  },
  {
    slug: "can-you-work-multiple-jobs-on-opt",
    title: "Can You Work Multiple Jobs on OPT?",
    excerpt:
      "While searching for a job in the USA, is it possible to go for multiple jobs on an OPT visa?",
    date: "June 9, 2026",
    author: "Career Desk",
    tone: "bg-[#d9efe8]",
    content: [
      "OPT rules can allow more than one role in certain situations, but compliance depends on reporting, hours, and employer requirements.",
      "Before accepting multiple offers, students should confirm how each role affects their SEVIS record and long-term sponsorship path.",
      "A clear placement strategy often beats stacking short-term work that creates risk later.",
    ],
  },
  {
    slug: "stem-opt-2026-rules",
    title: "STEM OPT in 2026: The Rules Every International Student Should Know",
    excerpt:
      "For many international students, graduating with a STEM degree feels like reaching the finish line — here’s what comes next.",
    date: "June 3, 2026",
    author: "Immigration Desk",
    tone: "bg-[#fcf5ed]",
    content: [
      "STEM OPT can extend work authorization, but eligibility, timing, and employer obligations still matter.",
      "Students who prepare early — with a strong resume, interview readiness, and role fit — convert more opportunities before the clock becomes pressure.",
      "JSCALE supports STEM profiles with placement guidance designed for US market expectations.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
