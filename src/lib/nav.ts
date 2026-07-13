export type NavLink = {
  href: string;
  label: string;
};

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const ctaLink = {
  href: "/contact",
  label: "Book Free Call",
};
