"use client";

import { useEffect, useState } from "react";

import {
  ArrowUp,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X
} from "lucide-react";

import shared from "../../about-us/about-us.module.css";
import styles from "../blog/blog.module.css";
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
  { label: "Blog", href: "/blogs/blog", current: true },
  { label: "Contact", href: "/contact/contact-us" },
  { label: "Talent Talks", href: "#talent-talks" }
];

const footerGroups = [
  {
    title: "For Workers",
    links: ["Find Work", "Jobs in Dubai", "Jobs in Virginia", "Jobs in California", "Jobs in Alaska"]
  },
  { title: "For Business", links: ["Merchandising", "Hospitality Staff", "General Labour", "Car Drivers", "Bus Driver"] },
  { title: "Company", links: ["About Us", "Career", "Partners", "Blog", "Clients"] },
  { title: "Help & Support", links: ["Contact Us", "General FAQ", "Support Center", "Privacy Policy", "Terms & Conditions"] }
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
            <a className={shared.themeBtn} href="#contact">Get Started</a>
          </div>
          <button aria-controls="blog-detail-mobile-menu" aria-expanded={mobileOpen} aria-label="Open mobile menu" className={shared.mobileToggle} type="button" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="blog-detail-mobile-menu" aria-hidden={!mobileOpen}>
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

function PageTitle({ title }) {
  return (
    <section className={cx(shared.pageTitle, styles.blogDetailTitle)} data-blog-reveal>
      <div className={shared.autoContainer}>
        <div className={shared.pageTitleBox}>
          <h1>{title}</h1>
          <ul className={shared.breadcrumb}>
            <li><a href="/">Home</a></li>
            <li>-</li>
            <li>Blog Details</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function BlogDetails({ article }) {
  return (
    <section className={styles.detailSection}>
      <div className={shared.autoContainer}>
        <article className={styles.detailCard}>
          <div className={styles.detailImageBox}>
            <img src={article.image} alt={article.title} />
          </div>
          <div className={styles.detailLowerContent}>
            <h2>{article.title}</h2>
            <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          </div>
        </article>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <SubscribeBox
      styles={shared}
      source="blog-detail-page"
      idPrefix="blog-detail-subscribe"
      revealAttribute="data-blog-reveal"
    />
  );
}

function Footer() {
  return (
    <footer className={styles.blogDetailFooter}>
      <div className={styles.blogFooterWidgets}>
        <div className={cx(shared.autoContainer, styles.blogFooterGrid)}>
          <div className={styles.blogFooterBrand} data-blog-reveal>
            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Since 2018, Jscale has connecting hospitality workers to thousands of business, private events and universities.</p>
            <div className={styles.downloadButtons}>
              <a className={styles.storeButton} href="#app-store">
                <img src="/assets/jscale-media/en/assets/images/icons/icon-4.png" alt="" />
                <span>Download on</span>
                App Store
              </a>
              <a className={styles.storeButton} href="#google-play">
                <img src="/assets/jscale-media/en/assets/images/icons/icon-5.png" alt="" />
                <span>Get it on</span>
                Google Play
              </a>
            </div>
          </div>
          {footerGroups.map((group) => (
            <div className={styles.blogFooterLinks} data-blog-reveal key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map((link) => <a href={link === "Blog" ? "/blogs/blog" : "#contact"} key={link}>{link}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.blogFooterBottom}>
        <div className={cx(shared.autoContainer, styles.blogFooterBottomInner)}>
          <p>Copyright © 2024 <a href="/">Jscale</a> All rights reserved.</p>
          <div className={styles.blogSocialLinks} aria-label="Follow us on">
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

export default function BlogDetailClient({ article }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-blog-reveal]")];
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
    <main className={cx(shared.aboutPage, styles.blogPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <PageTitle title={article.title} />
      <BlogDetails article={article} />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
