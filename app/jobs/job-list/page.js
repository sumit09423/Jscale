"use client";

import { useEffect, useState } from "react";

import {
  ArrowUp,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  X
} from "lucide-react";

import shared from "../../about-us/about-us.module.css";
import { jobs } from "../jobData";
import styles from "./job-list.module.css";
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

const countries = [
  ["", "Select an option"],
  ["14", "Australia"],
  ["39", "Canada"],
  ["82", "Germany"],
  ["101", "India"],
  ["158", "New Zealand"],
  ["199", "Singapore"],
  ["232", "United Kingdom"],
  ["233", "United States"]
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
    <header className={shared.mainHeader}>
      <div className={shared.autoContainer}>
        <div className={shared.headerOuter}>
          <a className={shared.logoBox} href="/" aria-label="Jscale home">
            <img src="/logo.png" alt="Jscale" className={shared.brandLogo} />
          </a>
          <nav className={shared.mainNav} aria-label="Main navigation">
            <ul>
              {navItems.map((item) => (
                <li className={cx(item.children && shared.hasDropdown)} key={item.label}>
                  <a href={item.href}>
                    {item.label}
                    {item.children ? <ChevronDown aria-hidden="true" size={14} strokeWidth={2.4} /> : null}
                  </a>
                  {item.children ? (
                    <ul className={shared.dropdownMenu}>
                      {item.children.map((child) => (
                        <li key={child.label}><a href={child.href}>{child.label}</a></li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className={shared.headerActions}>
            <a className={shared.loginLink} href="/candidate/auth/sign-in">Log In</a>
            <a className={shared.themeBtn} href="/contact/contact-us">Get Started</a>
          </div>
          <button aria-controls="jobs-mobile-menu" aria-expanded={mobileOpen} aria-label="Open mobile menu" className={shared.mobileToggle} type="button" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="jobs-mobile-menu" aria-hidden={!mobileOpen}>
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
        <div className={shared.mobileContact}>
          <h4>Contact Info</h4>
          <p>Sheridan, WY 82801</p>
          <a href="mailto:contact@jscale.com">contact@jscale.com</a>
        </div>
      </aside>
    </div>
  );
}

const normalize = (value) => String(value || "").trim().toLowerCase();

function HeroSearch({ filters, onSearch }) {
  const [formValues, setFormValues] = useState(filters);

  useEffect(() => {
    setFormValues(filters);
  }, [filters]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(formValues);
  };

  return (
    <section className={styles.heroSearch}>
      <div className={shared.autoContainer}>
        <div className={styles.heroTitle} data-jobs-reveal>
          <span>1000+ Jobs Available</span>
          <h1>Find Your Job</h1>
        </div>
        <form className={styles.searchPanel} data-jobs-reveal onSubmit={handleSubmit}>
          <div className={styles.searchGrid}>
            <div className={styles.searchGroup}>
              <label htmlFor="country">Country</label>
              <select id="country" name="country" value={formValues.country} onChange={handleChange}>
                {countries.map(([value, label]) => <option value={value} key={label}>{label}</option>)}
              </select>
            </div>
            <div className={styles.searchGroup}>
              <label htmlFor="state">State</label>
              <input id="state" name="state" type="text" placeholder="Enter State" value={formValues.state} onChange={handleChange} />
            </div>
            <div className={styles.searchGroup}>
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" placeholder="Enter City" value={formValues.city} onChange={handleChange} />
            </div>
            <div className={styles.searchButton}>
              <button className={shared.themeBtn} type="submit">Search Job</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function FilterBox({ title, children }) {
  return (
    <div className={styles.filterBox} data-jobs-reveal>
      <div className={styles.filterTitle}><h3>{title}</h3></div>
      <div className={styles.filterBody}>{children}</div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <FilterBox title="Date Posted">
        {["Last Hour", "Last 24 Hours", "Last 7 Days", "Last 1 Month"].map((label) => (
          <label className={styles.checkRow} key={label}><input type="checkbox" /> {label}</label>
        ))}
      </FilterBox>
      <FilterBox title="Remote Job">
        {["Remote Only", "Temporary Remote", "All"].map((label, index) => (
          <label className={styles.checkRow} key={label}><input name="remote" type="radio" defaultChecked={index === 2} /> {label}</label>
        ))}
      </FilterBox>
      <FilterBox title="Industries">
        {["Business Professional", "Health Care", "IT Industry"].map((label) => (
          <label className={styles.checkRow} key={label}><input type="checkbox" /> {label}</label>
        ))}
      </FilterBox>
      <div className={styles.filterActions} data-jobs-reveal>
        <button className={shared.themeBtn} type="button">Apply Filter</button>
        <button className={shared.themeBtn} type="button">Clear Filter</button>
      </div>
    </aside>
  );
}

function JobCard({ job, index }) {
  return (
    <article className={cx(styles.jobCard, job.id === 27 && styles.featuredJobCard)} data-jobs-reveal style={{ "--reveal-delay": `${index * 80}ms` }}>
      <ul className={styles.jobInfo}>
        <li><Clock3 size={16} /> Posted <span>{job.posted}</span></li>
        <li>job Code: <span>{job.code}</span></li>
      </ul>
      <div className={styles.jobHeader}>
        <span className={styles.companyLogo}>{job.logo ? <img src={job.logo} alt="" /> : <BriefcaseBusiness size={24} />}</span>
        <div>
          <h3>{job.title}</h3>
          <span><MapPin size={15} /> {job.location}</span>
        </div>
      </div>
      <div className={styles.jobMeta}>
        <div><h4>Salary</h4><span>{job.salary}</span></div>
        <div><h4>Experience need</h4><span>{job.experience}</span></div>
        <a className={cx(styles.viewDetailsBtn, job.id === 27 && styles.activeViewDetailsBtn)} href={`/jobs/view-job?id=${job.id}`}>View Details</a>
      </div>
    </article>
  );
}

function JobsSection({ filteredJobs }) {
  return (
    <section className={styles.jobSection}>
      <div className={shared.autoContainer}>
        <div className={styles.jobLayout}>
          <Sidebar />
          <div>
            <div className={styles.jobsList}>
              {filteredJobs.length ? (
                filteredJobs.map((job, index) => <JobCard job={job} index={index} key={job.id} />)
              ) : (
                <div className={styles.emptyJobs} data-jobs-reveal>
                  <h3>No jobs found</h3>
                  <p>Try changing country, state, or city and search again.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  const [active, setActive] = useState("talents");

  return (
    <section className={styles.welcomeSection}>
      <div className={shared.autoContainer}>
        <div className={styles.sectionTitle} data-jobs-reveal>
          <span>Welcome to Jscale</span>
          <h2>Modern Day Staffing Agency</h2>
        </div>
        <div className={styles.tabs} data-jobs-reveal>
          <button className={active === "talents" ? styles.activeTab : undefined} type="button" onClick={() => setActive("talents")}>For Talents</button>
          <button className={active === "business" ? styles.activeTab : undefined} type="button" onClick={() => setActive("business")}>For Business</button>
        </div>
        <div className={styles.welcomeGrid} data-jobs-reveal>
          <div className={styles.welcomeCopy}>
            <h2>An Award Winning Hiring Agency for <span>12 years</span></h2>
            <p>Voted the fastest solution to implement the easiest to administer your employee & business.</p>
          </div>
          <div className={styles.welcomeImages}>
            <div>
              <figure className={styles.welcomeImage}><img src="/assets/jscale-media/en/assets/images/resource/welcome-1.jpg" alt="Jscale hiring agency" /></figure>
              <div className={styles.experienceBox}><h3>12</h3><h4>Year of Experience</h4></div>
            </div>
            <div>
              <div className={styles.supportBox}><span>Online Support</span><h4><a href="tel:+13073022460">+1 (307) 302-2460</a></h4></div>
              <figure className={styles.welcomeImage}><img src="/assets/jscale-media/en/assets/images/resource/welcome-2.jpg" alt="Jscale support team" /></figure>
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
      source="job-list-page"
      idPrefix="job-list-subscribe"
      revealAttribute="data-jobs-reveal"
    />
  );
}

function Footer() {
  return (
    <footer className={shared.footer}>
      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-jobs-reveal>
            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services for lasting success.</p>
            <h4>Now we are also available in:</h4>
            <div className={shared.flags}>{flagCountries.map(([country, src]) => <img src={src} alt={`${country} flag`} title={country} key={country} />)}</div>
          </div>
          {footerGroups.map((group) => (
            <div className={shared.footerLinks} data-jobs-reveal key={group.title}>
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

export default function JobListPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filters, setFilters] = useState({ country: "", state: "", city: "" });
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const applyFilters = (nextFilters) => {
    const country = normalize(nextFilters.country);
    const state = normalize(nextFilters.state);
    const city = normalize(nextFilters.city);

    const nextJobs = jobs.filter((job) => {
      const countryMatch = !country || normalize(job.country) === country;
      const stateMatch = !state || normalize(job.state).includes(state);
      const cityMatch = !city || normalize(job.city).includes(city);
      return countryMatch && stateMatch && cityMatch;
    });

    setFilteredJobs(nextJobs);
  };

  const handleSearch = (nextFilters) => {
    setFilters(nextFilters);
    applyFilters(nextFilters);

    const params = new URLSearchParams();
    params.set("country", nextFilters.country || "");
    params.set("state", nextFilters.state || "");
    params.set("city", nextFilters.city || "");
    params.set("submit-form", "");
    window.history.pushState(null, "", `/jobs/job-list?${params.toString()}`);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-jobs-reveal]")];
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialFilters = {
      country: params.get("country") || "",
      state: params.get("state") || "",
      city: params.get("city") || ""
    };
    setFilters(initialFilters);
    applyFilters(initialFilters);
  }, []);

  return (
    <main className={cx(shared.aboutPage, styles.jobsPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <HeroSearch filters={filters} onSearch={handleSearch} />
      <JobsSection filteredJobs={filteredJobs} />
      <WelcomeSection />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
