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
import styles from "./blog.module.css";
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

const blogPosts = [
  {
    id: 26,
    title: "Building Future-Ready Teams with Intentional Talent Solutions",
    image: "/assets/jscale-media/uploads/blog-thumbnails/69ef3dc6407fb3.81062019-1777286598.jpg",
    time: "2 weeks ago"
  },
  {
    id: 23,
    title: "Transforming Operations with Scalable Tech Solutions",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd79dd3bdd5.78454432-1749800861.png",
    time: "11 months ago"
  },
  {
    id: 22,
    title: "Transforming Businesses with Tailored OD Solutions",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd7383bf5b3.10628430-1749800760.png",
    time: "11 months ago"
  },
  {
    id: 21,
    title: "Smart Technology Solutions for a Digital-First World",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd6b2b3a624.59826479-1749800626.png",
    time: "11 months ago"
  },
  {
    id: 20,
    title: "Smart Talent Acquisition Solutions for a Competitive Edge",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd626439a17.33265045-1749800486.png",
    time: "11 months ago"
  },
  {
    id: 19,
    title: "Navigating Career Paths with Personalized Development Plans",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd591750346.34474022-1749800337.png",
    time: "11 months ago"
  },
  {
    id: 18,
    title: "Empowering Teams with Diversity and Inclusion Solutions That Work",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd4ef72d357.59408109-1749800175.png",
    time: "11 months ago"
  },
  {
    id: 17,
    title: "Empowering Teams for Sustainable Organizational Success",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd47ca4a449.41898864-1749800060.png",
    time: "11 months ago"
  },
  {
    id: 16,
    title: "Driving Workplace Equity Through Diversity and Inclusion Programs",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd3868492d2.28590346-1749799814.png",
    time: "12 months ago"
  },
  {
    id: 15,
    title: "Creating a Stronger Workforce Through Inclusive Practices",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd1165e8d86.29144950-1749799190.png",
    time: "1 year ago"
  },
  {
    id: 14,
    title: "Jscale Development Solutions for a Future-Ready Workforce",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bd080ba96b2.16899682-1749799040.png",
    time: "1 year ago"
  },
  {
    id: 13,
    title: "Building Stronger Organizations Through Change Management",
    image: "/assets/jscale-media/uploads/blog-thumbnails/684bcfa4246c44.13997602-1749798820.png",
    time: "1 year ago"
  },
  {
    id: 11,
    title: "How IT Staffing Solutions Drive Business Success in a Competitive Market",
    image: "/assets/jscale-media/uploads/blog-thumbnails/67af42302553d4.81265462-1739538992.jpg",
    time: "1 year ago"
  },
  {
    id: 10,
    title: "The Impact of AI on Workforce Solutions and Hiring Trends in 2025",
    image: "/assets/jscale-media/uploads/blog-thumbnails/67af3e1566ff85.12936534-1739537941.jpg",
    time: "1 year ago"
  },
  {
    id: 9,
    title: "Why IT Staffing is Essential for Business Growth in 2025",
    image: "/assets/jscale-media/uploads/blog-thumbnails/67af3c0127e4c3.10595764-1739537409.jpg",
    time: "1 year ago"
  },
  {
    id: 8,
    title: "The Future of IT Staffing: Trends Shaping the Job Market in 2025",
    image: "/assets/jscale-media/uploads/blog-thumbnails/67af38e09dcd04.44600901-1739536608.jpg",
    time: "1 year ago"
  },
  {
    id: 7,
    title: "Top IT Skills in Demand for 2025: How to Stay Ahead in Your Career",
    image: "/assets/jscale-media/uploads/blog-thumbnails/67af346dab5306.15968280-1739535469.jpg",
    time: "1 year ago"
  },
  {
    id: 6,
    title: "How AI is Transforming Recruitment: The Future of IT Staffing",
    image: "/assets/jscale-media/uploads/blog-thumbnails/67b0262ca7e8a5.63766844-1739597356.jpg",
    time: "1 year ago"
  }
];

const getBlogHref = (id) => `/blogs/view-blog.php?blog_id=${id}`;

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
          <button aria-controls="blog-mobile-menu" aria-expanded={mobileOpen} aria-label="Open mobile menu" className={shared.mobileToggle} type="button" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="blog-mobile-menu" aria-hidden={!mobileOpen}>
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

function PageTitle() {
  return (
    <section className={shared.pageTitle} data-blog-reveal>
      <div className={shared.autoContainer}>
        <div className={shared.pageTitleBox}>
          <h1>Blogs</h1>
          <ul className={shared.breadcrumb}>
            <li><a href="/">Home</a></li>
            <li>-</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  return (
    <section className={styles.blogGridSection}>
      <div className={shared.autoContainer}>
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <article className={styles.blogCard} data-blog-reveal key={post.id} style={{ "--reveal-delay": `${index * 55}ms` }}>
              <a className={styles.imageBox} href={getBlogHref(post.id)} aria-label={post.title}>
                <img className={styles.mainImage} src={post.image} alt={post.title} />
                <img className={styles.overlayImage} src={post.image} alt="" aria-hidden="true" />
              </a>
              <div className={styles.lowerContent}>
                <h3><a href={getBlogHref(post.id)}>{post.title}</a></h3>
                <ul className={styles.postInfo}>
                  <li>By <a href={getBlogHref(post.id)}>Jscale</a></li>
                  <li>{post.time}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <SubscribeBox
      styles={shared}
      source="blog-page"
      idPrefix="blog-subscribe"
      revealAttribute="data-blog-reveal"
    />
  );
}

function Footer() {
  return (
    <footer className={shared.footer}>
      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-blog-reveal>
            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services for lasting success.</p>
            <h4>Now we are also available in:</h4>
            <div className={shared.flags}>
              {flagCountries.map(([country, src]) => <img src={src} alt={`${country} flag`} title={country} key={country} />)}
            </div>
          </div>
          {footerGroups.map((group) => (
            <div className={shared.footerLinks} data-blog-reveal key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map((link) => <a href={link === "Blog" ? "/blogs/blog" : "#contact"} key={link}>{link}</a>)}
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

export default function BlogPage() {
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
      <PageTitle />
      <BlogGrid />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
