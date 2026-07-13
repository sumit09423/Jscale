import Link from "next/link";
import { SocialLinks } from "@/components/layout/social-links";
import { siteConfig } from "@/lib/seo";

const services = [
  { label: "IT Staffing New York", href: "/services/it-staffing-new-york" },
  { label: "IT Staffing Texas", href: "/services/it-staffing-texas" },
  { label: "IT Staffing California", href: "/services/it-staffing-california" },
  { label: "Java Recruiters Texas", href: "/services/java-recruiters-texas" },
  { label: "AWS Staffing California", href: "/services/aws-staffing-california" },
  { label: "View all services", href: "/services" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Refer and Earn", href: "mailto:hello@jscale.com?subject=Refer%20and%20Earn" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="section_footer mt-2 overflow-hidden rounded-t-[1.5rem] bg-[#0f172a] text-white sm:mt-3 sm:rounded-t-[2rem]">
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl">
          <div className="padding-section-medium py-10 sm:py-14 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <Link
                  href="/"
                  aria-label={`${siteConfig.name} home`}
                  className="inline-flex text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  JScale
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70 sm:mt-5">
                  Workforce solutions that help candidates land the right roles
                  and help companies hire with confidence across the United
                  States.
                </p>
                <div className="mt-5">
                  <SocialLinks />
                </div>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
                  Our Services
                </h3>
                <ul className="mt-4 space-y-3">
                  {services.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {company.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
                  Corporate Address
                </h3>
                <address className="mt-4 space-y-2 text-sm leading-relaxed text-white/80 not-italic">
                  <p>30 N Gould St Ste R</p>
                  <p>Sheridan, WY 82801</p>
                  <p>United States</p>
                </address>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="block text-white/80 transition-colors hover:text-white"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/80 transition-colors hover:text-white"
                  >
                    WhatsApp: {siteConfig.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div
              id="contact"
              className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-8"
            >
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} {siteConfig.name}. All rights
                reserved.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <SocialLinks variant="outline" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex min-h-[var(--min-tap-target)] flex-1 items-center justify-center rounded-full bg-[#5b92e5] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:flex-none"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
