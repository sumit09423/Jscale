export type ServicePage = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  category: "location" | "technology" | "keyword";
  location?: string;
  technology?: string;
  keywords: string[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const locationMarkets = [
  "New York",
  "Texas",
  "California",
  "Florida",
  "Chicago",
  "Dallas",
  "Houston",
  "Atlanta",
  "Phoenix",
  "Seattle",
] as const;

const techCombos = [
  { tech: "Java", role: "Java Recruiters", location: "Texas" },
  { tech: "AWS", role: "AWS Staffing", location: "California" },
  { tech: "Python", role: "Python Recruiters", location: "New York" },
  { tech: "React", role: "React Developers", location: "Florida" },
  { tech: "AI", role: "AI Recruitment", location: "Dallas" },
  { tech: "DevOps", role: "DevOps Recruiters", location: "Seattle" },
] as const;

const coreKeywords = [
  "IT Staffing Company USA",
  "IT Recruitment Agency USA",
  "Software Developer Recruitment",
  "Tech Staffing Agency",
  "IT Consulting Services",
  "Hire Software Developers",
  "Hire Java Developers",
  "Hire Python Developers",
  "Hire AI Engineers",
  "Hire AWS Engineers",
  "Contract IT Staffing",
  "Remote Software Developers",
  "US Staffing Company",
  "Technical Recruiters USA",
  "Recruitment Agency for IT Jobs",
] as const;

const locationPages: ServicePage[] = locationMarkets.map((location) => {
  const title = `IT Staffing ${location}`;
  return {
    slug: slugify(title),
    title,
    headline: `${title} Services`,
    description: `JSCALE provides IT staffing in ${location} — connecting companies with software engineers, developers, and technical talent for full-time and contract roles.`,
    category: "location",
    location,
    keywords: [
      title,
      `IT recruitment ${location}`,
      `tech staffing ${location}`,
      "IT Staffing Company USA",
    ],
  };
});

const technologyPages: ServicePage[] = techCombos.map((item) => {
  const title = `${item.role} ${item.location}`;
  return {
    slug: slugify(title),
    title,
    headline: `${title}`,
    description: `Hire ${item.tech} talent in ${item.location} with JSCALE. We source, screen, and place ${item.tech} professionals for startups and enterprises across the United States.`,
    category: "technology",
    location: item.location,
    technology: item.tech,
    keywords: [
      title,
      `hire ${item.tech} developers ${item.location}`,
      `${item.tech} staffing ${item.location}`,
      "Technical Recruiters USA",
    ],
  };
});

const keywordPages: ServicePage[] = coreKeywords.map((title) => ({
  slug: slugify(title),
  title,
  headline: title,
  description: `JSCALE is your partner for ${title.toLowerCase()}. We help employers hire skilled IT professionals across the United States with transparent, results-driven recruitment.`,
  category: "keyword",
  keywords: [title, "IT Staffing Company USA", "Tech Staffing Agency"],
}));

export const servicePages: ServicePage[] = [
  ...locationPages,
  ...technologyPages,
  ...keywordPages,
];

export const servicesBySlug = Object.fromEntries(
  servicePages.map((page) => [page.slug, page]),
) as Record<string, ServicePage>;

export function getServiceBySlug(slug: string) {
  return servicesBySlug[slug];
}

export function getRelatedServices(slug: string, limit = 6) {
  const current = getServiceBySlug(slug);
  if (!current) return servicePages.slice(0, limit);
  return servicePages
    .filter((page) => page.slug !== slug)
    .filter(
      (page) =>
        page.category === current.category ||
        page.location === current.location ||
        page.technology === current.technology,
    )
    .slice(0, limit);
}

/** Featured links for navbar Services dropdown */
export const servicesNavLinks = [
  ...locationPages.slice(0, 6),
  ...technologyPages.slice(0, 4),
].map((page) => ({
  href: `/services/${page.slug}`,
  label: page.title,
}));
