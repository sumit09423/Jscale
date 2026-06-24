"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUp,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Share2,
  Wallet,
  X
} from "lucide-react";

import shared from "../../about-us/about-us.module.css";
import { getJobById } from "../jobData";
import styles from "./view-job.module.css";
import SubscribeBox from "../../components/SubscribeBox";

const cx = (...names) => names.filter(Boolean).join(" ");

const solutionLinks = [
  ["Talent Acquisition Solutions", "/solutions/talent-acquisition"],
  ["Jscale Development Solutions", "/solutions/career-development"],
  ["Workforce Management Solutions", "/solutions/work-force"],
  ["Diversity and Inclusion Solutions", "/solutions/diversity"],
  ["Consulting Solutions", "/solutions/consulting"],
  ["Technology Solutions", "/solutions/technology"],
  ["Retention and Motivation Solutions", "/solutions/retention"],
  ["Organizational Development Solutions", "/solutions/organization"],
  ["Training and Certification Solutions", "/solutions/training-and-certification"]
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "career Coaching", href: "/services/career-coaching" },
      { label: "Staffing Solution", href: "/services/staffing-solution" },
      { label: "Outplacement Services", href: "/services/outplacement" }
    ]
  },
  {
    label: "Solutions",
    href: "/solutions/talent-acquisition",
    children: solutionLinks.map(([label, href]) => ({ label, href }))
  },
  { label: "Blog", href: "/blogs/blog" },
  { label: "Contact", href: "/contact/contact-us" },
  { label: "Talent Talks", href: "#talent-talks" }
];

const flagCountries = [
  ["USA", "https://flagcdn.com/w80/us.png"],
  ["Canada", "https://flagcdn.com/w80/ca.png"],
  ["UK", "https://flagcdn.com/w80/gb.png"],
  ["India", "https://flagcdn.com/w80/in.png"],
  ["Australia", "https://flagcdn.com/w80/au.png"],
  ["Germany", "https://flagcdn.com/w80/de.png"],
  ["Singapore", "https://flagcdn.com/w80/sg.png"],
  ["New Zealand", "https://flagcdn.com/w80/nz.png"]
];

const footerGroups = [
  {
    title: "For Workers",
    links: ["Jobs in USA", "Jobs in Canada", "Jobs in UK", "Jobs in India", "Jobs in Australia", "Jobs in Germany", "Jobs in Singapore", "Jobs in New Zealand"]
  },
  { title: "Our Services", links: ["Career Coaching", "Staffing Solution", "Outplacement Services"] },
  { title: "Company", links: ["About Us", "Testimonials", "Blog"] },
  { title: "Help & Support", links: ["Contact Us", "Partners Contact", "Privacy Policy", "Terms & Conditions"] }
];

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className={styles.refHeader}>
      <div className={styles.refHeaderInner}>
        <div className={styles.refHeaderOuter}>
          <a className={styles.refLogoBox} href="/" aria-label="Jscale home">
            <img src="/logo.png" alt="Jscale" className={styles.refBrandLogo} />
          </a>
          <nav className={styles.refNav} aria-label="Main navigation">
            <ul>
              {navItems.map((item) => (
                <li className={cx(item.children && styles.refHasDropdown)} key={item.label}>
                  <a href={item.href}>
                    {item.label}
                    {item.children ? <ChevronDown aria-hidden="true" size={14} strokeWidth={2.4} /> : null}
                  </a>
                  {item.children ? (
                    <ul className={styles.refDropdownMenu}>
                      {item.children.map((child) => <li key={child.label}><a href={child.href}>{child.label}</a></li>)}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.refHeaderActions}>
            <a className={styles.refLoginLink} href="/candidate/auth/sign-in">Log In</a>
            <a className={styles.refThemeBtn} href="/contact/contact-us">Get Started</a>
          </div>
          <button aria-controls="view-job-mobile-menu" aria-expanded={mobileOpen} aria-label="Open mobile menu" className={styles.refMobileToggle} type="button" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="view-job-mobile-menu" aria-hidden={!mobileOpen}>
      <button aria-label="Close mobile menu" className={shared.mobileBackdrop} type="button" onClick={() => setMobileOpen(false)} />
      <aside className={shared.mobilePanel}>
        <button aria-label="Close mobile menu" className={shared.closeMenu} type="button" onClick={() => setMobileOpen(false)}><X size={22} /></button>
        <a className={shared.mobileLogo} href="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Jscale" className={shared.brandLogo} />
        </a>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div className={shared.mobileNavGroup} key={item.label}>
              <a href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
              {item.children ? item.children.map((child) => (
                <a className={shared.mobileChildLink} href={child.href} key={child.label} onClick={() => setMobileOpen(false)}>{child.label}</a>
              )) : null}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}

function JobDetail({ job }) {
  const descriptionLines = job.description.split("\n");
  const responsibilityLines = Array.isArray(job.responsibilities)
    ? job.responsibilities
    : String(job.responsibilities || "").split("\n");

  return (
    <section className={styles.detailSection}>
      <div className={shared.autoContainer}>
        <div className={styles.detailLayout}>
          <article className={styles.detailCard} data-view-job-reveal>
            <ul className={styles.jobInfo}>
              <li><Clock3 size={17} /> Posted <span>{job.posted}</span></li>
              <li>job Code: <span>{job.code}</span></li>
            </ul>
            <div className={styles.jobIntro}>
              <div className={styles.jobHero}>
                <span className={styles.companyLogo}>{job.logo ? <img src={job.logo} alt="" /> : <BriefcaseBusiness size={28} />}</span>
                <div>
                  <h2>{job.title}</h2>
                  <h6>at</h6>
                  <p className={styles.jobType}>{job.jobType}</p>
                </div>
              </div>
              <div className={styles.introMeta}>
                <div><h3>Salary</h3><p>{job.salary}</p></div>
                <div><h3>Experience need</h3><p>{job.experience}</p></div>
                <a className={shared.themeBtn} href="/candidate/auth/sign-in">Apply Now</a>
              </div>
            </div>
          </article>

          <aside className={styles.sideCard} data-view-job-reveal>
            <h2>Job Overview</h2>
            <dl>
              <div><dt><MapPin size={14} /> Location</dt><dd>{job.location}</dd></div>
              <div><dt><Globe size={14} /> Website</dt><dd></dd></div>
              <div><dt><Wallet size={14} /> Salary</dt><dd>{job.salary}</dd></div>
              <div><dt><BriefcaseBusiness size={14} /> Experience Need</dt><dd>{job.experience}</dd></div>
              <div><dt><Clock size={14} /> Apply Within</dt><dd>{job.deadline}</dd></div>
            </dl>
          </aside>

          <div className={styles.descriptionColumn} data-view-job-reveal>
            <div className={styles.contentBlock}>
              <h2>Job Description</h2>
              {descriptionLines.map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className={styles.contentBlock}>
              <h2>Responsibilities</h2>
              {responsibilityLines.map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className={styles.shareBlock}>
              <h5><Share2 size={17} /> Share On:</h5>
              <div className={styles.shareLinks}>
                <a href="https://www.facebook.com" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="https://twitter.com" aria-label="Twitter">X</a>
                <a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="https://wa.me/918233633213" aria-label="WhatsApp">WA</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <SubscribeBox
      styles={shared}
      source="job-detail-page"
      idPrefix="view-job-subscribe"
      revealAttribute="data-view-job-reveal"
    />
  );
}

function Footer() {
  return (
    <footer className={shared.footer}>
      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-view-job-reveal>
            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services for lasting success.</p>
            <h4>Now we are also available in:</h4>
            <div className={shared.flags}>{flagCountries.map(([country, src]) => <img src={src} alt={`${country} flag`} title={country} key={country} />)}</div>
          </div>
          {footerGroups.map((group) => (
            <div className={shared.footerLinks} data-view-job-reveal key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map((link) => (
                <a href={link.startsWith("Jobs") ? "/jobs/job-list" : link === "Blog" ? "/blogs/blog" : link === "Contact Us" ? "/contact/contact-us" : "#contact"} key={link}>{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={shared.footerBottom}>
        <div className={cx(shared.autoContainer, shared.footerBottomInner)}>
          <p>Copyright 2025 <a href="/">Jscale</a> All rights reserved.</p>
          <div className={shared.socialLinks} aria-label="Follow us on">
            <span>Follow Us On:</span>
            <a href="#facebook" aria-label="Facebook"><Facebook size={21} fill="currentColor" /></a>
            <a href="#instagram" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ViewJobPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const job = useMemo(() => {
    if (typeof window === "undefined") {
      return getJobById(28);
    }
    return getJobById(new URLSearchParams(window.location.search).get("id"));
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-view-job-reveal]")];
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => {
        node.dataset.visible = "true";
      });
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -70px 0px", threshold: 0.12 }
    );
    nodes.forEach((node, index) => {
      if (!node.style.getPropertyValue("--reveal-delay")) {
        node.style.setProperty("--reveal-delay", `${Math.min(index * 55, 360)}ms`);
      }
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className={cx(shared.aboutPage, styles.viewJobPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <section className={styles.refPageTitle}>
        <div className={styles.refHeaderInner}>
          <div className={styles.viewTitleBox}>
            <h1>{job.title}</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li>-</li>
              <li>Job Details</li>
            </ul>
          </div>
        </div>
      </section>
      <JobDetail job={job} />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
