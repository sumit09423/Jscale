import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ServicesDropdown } from "@/components/layout/services-dropdown";
import { SiteLogo } from "@/components/layout/site-logo";
import { SocialLinks } from "@/components/layout/social-links";
import { ctaLink, mainNavLinks } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header
      role="banner"
      className="navbar absolute top-0 left-0 z-30 w-full bg-transparent"
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="nav-shell mx-auto flex h-16 w-[calc(100%-1rem)] max-w-6xl items-center justify-between gap-2 rounded-b-[1.5rem] bg-white px-4 sm:h-[4.5rem] sm:w-full sm:gap-3 sm:rounded-b-[1.75rem] sm:px-5 lg:h-16 lg:px-8">
        <SiteLogo />

        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8"
        >
          {mainNavLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          <ServicesDropdown />
          {mainNavLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
          <SocialLinks variant="navbar" />
          <Link
            href={ctaLink.href}
            className="hidden min-h-10 items-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 lg:inline-flex"
          >
            {ctaLink.label}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
