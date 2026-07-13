"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { SiteLogo } from "@/components/layout/site-logo";
import { SocialLinks } from "@/components/layout/social-links";
import { ctaLink, mainNavLinks } from "@/lib/nav";
import { servicesNavLinks } from "@/lib/services";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const drawer = mounted
    ? createPortal(
        <>
          <div
            className={cn(
              "fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300 lg:hidden",
              open ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={!open}
            onClick={closeMenu}
          />

          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            aria-hidden={!open}
            className={cn(
              "fixed inset-y-0 right-0 z-[110] flex h-[100dvh] w-[min(100vw-2.5rem,20rem)] max-w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
              open ? "translate-x-0" : "translate-x-full",
            )}
            style={{
              paddingTop: "max(var(--safe-top), 1rem)",
              paddingBottom: "max(var(--safe-bottom), 1rem)",
              paddingRight: "var(--safe-right)",
            }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-zinc-100 px-4 pb-3">
              <SiteLogo size="sm" onClick={closeMenu} />
              <button
                type="button"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-4">
              {mainNavLinks.slice(0, 2).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[var(--min-tap-target)] items-center rounded-xl px-3 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  className="flex min-h-[var(--min-tap-target)] w-full items-center justify-between rounded-xl px-3 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  Services
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={cn(
                      "size-5 transition-transform",
                      servicesOpen && "rotate-180",
                    )}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {servicesOpen && (
                  <ul className="mt-1 max-h-64 space-y-1 overflow-y-auto pl-3">
                    {servicesNavLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        className="flex min-h-10 items-center rounded-xl px-3 text-sm font-semibold text-[#2f6fdb]"
                        onClick={closeMenu}
                      >
                        View all services →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {mainNavLinks.slice(2).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[var(--min-tap-target)] items-center rounded-xl px-3 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-4 border-t border-zinc-100 px-4 pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-zinc-500">Follow us</p>
                <SocialLinks variant="navbar" />
              </div>
              <Link
                href={ctaLink.href}
                className="flex min-h-[var(--min-tap-target)] w-full items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white"
                onClick={closeMenu}
              >
                {ctaLink.label}
              </Link>
            </div>
          </nav>
        </>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        type="button"
        className="inline-flex size-10 min-tap items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          aria-hidden="true"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          {open ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {drawer}
    </>
  );
}
