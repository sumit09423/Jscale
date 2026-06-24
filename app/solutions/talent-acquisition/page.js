"use client";

import { useEffect, useState } from "react";

import {
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Facebook,
  FileSearch,
  Handshake,
  Instagram,
  Linkedin,
  Menu,
  MessageCircleQuestion,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  UserRoundCheck,
  X
} from "lucide-react";

import shared from "../../about-us/about-us.module.css";
import styles from "./talent-acquisition.module.css";
import SubscribeBox from "../../components/SubscribeBox";

const cx = (...names) => names.filter(Boolean).join(" ");

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
    current: true,
    children: [
      { label: "Talent Acquisition Solutions", href: "/solutions/talent-acquisition" },
      { label: "Jscale Development Solutions", href: "/solutions/career-development" },
      { label: "Workforce Management Solutions", href: "/solutions/work-force" },
      { label: "Diversity and Inclusion Solutions", href: "/solutions/diversity" },
      { label: "Consulting Solutions", href: "/solutions/consulting" },
      { label: "Technology Solutions", href: "/solutions/technology" },
      { label: "Retention and Motivation Solutions", href: "/solutions/retention" },
      { label: "Organizational Development Solutions", href: "/solutions/organization" },
      { label: "Training and Certification Solutions", href: "/solutions/training-and-certification" }
    ]
  },
  { label: "Blog", href: "/blogs/blog" },
  { label: "Contact", href: "/contact/contact-us" },
  { label: "Talent Talks", href: "#talent-talks" }
];

const offeringCards = [
  {
    title: "IT Talent Acquisition",
    text:
      "Identify and recruit IT professionals to meet your organization's specific needs. Leverage our extensive network to find the best candidates.",
    Icon: SearchCheck
  },
  {
    title: "Temporary Staffing",
    text:
      "Access flexible staffing solutions to meet short-term project requirements. Quickly fill temporary positions with qualified professionals.",
    Icon: BriefcaseBusiness
  },
  {
    title: "Permanent Placements",
    text:
      "Find long-term talent that aligns with your company's culture and goals. Ensure a seamless integration of new hires into your organization.",
    Icon: Handshake
  }
];

const approachItems = [
  {
    title: "Customized Recruitment Strategies",
    date: "Fall 2023",
    Icon: FileSearch
  },
  {
    title: "Targeted Candidate Sourcing",
    date: "Winter 2023",
    Icon: UserRoundCheck
  },
  {
    title: "Comprehensive Screening Processes",
    date: "Winter 2023",
    Icon: ShieldCheck
  }
];

const faqs = [
  {
    question: "What are Talent Acquisition Solutions?",
    answer:
      "Talent Acquisition Solutions include strategic tools and methods that streamline recruitment, improve candidate sourcing, and support better workforce planning."
  },
  {
    question: "Who benefits from Talent Acquisition Solutions?",
    answer:
      "Businesses of all sizes benefit, especially teams that want stronger hiring efficiency, better candidate quality, and a smoother recruitment process."
  },
  {
    question: "How do Talent Acquisition Solutions work?",
    answer:
      "They combine recruitment strategy, targeted sourcing, screening, selection, and onboarding support to help organizations hire with more confidence."
  },
  {
    question: "What are the advantages of using Talent Acquisition Solutions?",
    answer:
      "Organizations can reduce hiring costs, reach better talent, improve candidate experience, and build stronger long-term retention."
  }
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
    links: [
      "Jobs in USA",
      "Jobs in Canada",
      "Jobs in UK",
      "Jobs in India",
      "Jobs in Australia",
      "Jobs in Germany",
      "Jobs in Singapore",
      "Jobs in New Zealand"
    ]
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
                  <a className={item.current ? shared.currentNav : undefined} href={item.href}>
                    {item.label}
                    {item.children ? <ChevronDown aria-hidden="true" size={14} strokeWidth={2.4} /> : null}
                  </a>

                  {item.children ? (
                    <ul className={shared.dropdownMenu}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href}>{child.label}</a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className={shared.headerActions}>
            <a className={shared.loginLink} href="/candidate/auth/sign-in">Log In</a>
            <a className={shared.themeBtn} href="#contact">Get Started</a>
          </div>

          <button
            aria-controls="talent-mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Open mobile menu"
            className={shared.mobileToggle}
            type="button"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="talent-mobile-menu" aria-hidden={!mobileOpen}>
      <button aria-label="Close mobile menu" className={shared.mobileBackdrop} type="button" onClick={() => setMobileOpen(false)} />
      <aside className={shared.mobilePanel}>
        <button aria-label="Close mobile menu" className={shared.closeMenu} type="button" onClick={() => setMobileOpen(false)}>
          <X size={22} />
        </button>

        <a className={shared.mobileLogo} href="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Jscale" className={shared.brandLogo} />
        </a>

        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div className={shared.mobileNavGroup} key={item.label}>
              <a href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
              {item.children
                ? item.children.map((child) => (
                    <a className={shared.mobileChildLink} href={child.href} key={child.label} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </a>
                  ))
                : null}
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

function Hero() {
  return (
    <section className={styles.hero} data-talent-reveal>
      <div className={styles.heroPattern} />
      <div className={shared.autoContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1>Talent Acquisition <span>Solutions</span></h1>
            <p>
              Our Talent Acquisition Solutions are designed to connect top IT talent with exceptional opportunities,
              ensuring the perfect fit for both candidates and employers.
            </p>
            <div className={styles.heroActions}>
              <a className={shared.themeBtn} href="/jobs/job-list">Find Works</a>
              <a className={styles.secondaryBtn} href="/company/auth/sign-in.php">Hire Talents Now <ArrowRight size={18} /></a>
            </div>
          </div>

          <div className={styles.heroMedia} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Offerings() {
  return (
    <section className={styles.offerSection} id="offerings">
      <div className={shared.autoContainer}>
        <div className={styles.sectionTitle} data-talent-reveal>
          <span>WHAT WE OFFER</span>
          <h2>Our Offerings Include</h2>
        </div>

        <div className={styles.offerGrid}>
          {offeringCards.map(({ title, text, Icon }, index) => (
            <article className={styles.offerCard} data-talent-reveal key={title} style={{ "--reveal-delay": `${index * 80}ms` }}>
              <span className={styles.offerIcon}><Icon size={36} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className={styles.approachSection}>
      <div className={shared.autoContainer}>
        <div className={styles.approachGrid}>
          <div className={styles.imageMosaic} data-talent-reveal>
            <figure className={styles.imageOne}>
              <img src="/assets/jscale-media/en/assets/images/resource/about-3.jpg" alt="Recruitment team discussion" />
            </figure>
            <figure className={styles.imageTwo}>
              <img src="/assets/jscale-media/en/assets/images/resource/about-4.jpg" alt="Candidate consultation" />
            </figure>
            <figure className={styles.imageThree}>
              <img src="/assets/jscale-media/en/assets/images/resource/about-5.jpg" alt="Talent planning" />
            </figure>
            <figure className={styles.imageFour}>
              <img src="/assets/jscale-media/en/assets/images/resource/about-6.jpg" alt="Hiring collaboration" />
            </figure>

            <div className={styles.supportBox}>
              <span className={styles.supportIcon}><PhoneCall size={24} /></span>
              <span>Online Support</span>
              <a href="tel:+13073022460">+1 (307) 302-2460</a>
            </div>
          </div>

          <div className={styles.approachCopy} data-talent-reveal>
            <span className={styles.subTitle}>Our Approach</span>
            <h2>Comprehensive Talent Acquisition Solutions</h2>
            <p>
              Jscale offers tailored Talent Acquisition Solutions designed to streamline your recruitment
              process and attract top talent that aligns with your company's culture and goals.
            </p>

            <div className={styles.timeline}>
              {approachItems.map(({ title, date, Icon }) => (
                <article className={styles.timelineItem} key={title}>
                  <span><Icon size={20} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.processSection}>
      <div className={shared.autoContainer}>
        <div className={styles.processGrid}>
          <div className={styles.processCopy} data-talent-reveal>
            <span className={styles.subTitle}>The Process</span>
            <h2>Efficient Strategies for Acquiring Top Talent</h2>
            <p>
              Explore Talent Acquisition Solutions designed to streamline recruitment processes, optimize candidate
              sourcing, and elevate your organization's ability to attract and retain skilled professionals.
            </p>
            <ul>
              <li><CheckCircle2 size={20} /> Candidate sourcing strategy</li>
              <li><CheckCircle2 size={20} /> Screening and selection support</li>
              <li><CheckCircle2 size={20} /> Smooth hiring and onboarding flow</li>
            </ul>
          </div>

          <div data-talent-reveal>
            <span className={styles.subTitle}>General Faqs</span>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.accordion}>
              {faqs.map((faq, index) => (
                <article className={cx(styles.faqItem, openIndex === index && styles.faqOpen)} key={faq.question}>
                  <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                    <span><MessageCircleQuestion size={18} /></span>
                    {faq.question}
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
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
      source="talent-acquisition-page"
      idPrefix="talent-acquisition-subscribe"
      revealAttribute="data-talent-reveal"
    />
  );
}

function Footer() {
  return (
    <footer className={shared.footer}>
      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-talent-reveal>
            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services for lasting success.</p>
            <h4>Now we are also available in:</h4>
            <div className={shared.flags}>
              {flagCountries.map(([country, src]) => <img src={src} alt={`${country} flag`} title={country} key={country} />)}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div className={shared.footerLinks} data-talent-reveal key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map((link) => <a href="#contact" key={link}>{link}</a>)}
            </div>
          ))}
        </div>
      </div>

      <div className={shared.footerBottom}>
        <div className={cx(shared.autoContainer, shared.footerBottomInner)}>
          <p>Copyright © 2025 <a href="/">Jscale</a> All rights reserved.</p>
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

export default function TalentAcquisitionPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-talent-reveal]")];

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
    <main className={cx(shared.aboutPage, styles.talentPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <Offerings />
      <Approach />
      <ProcessFaq />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
