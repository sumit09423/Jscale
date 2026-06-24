"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUp,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  UserRound,
  X
} from "lucide-react";
import styles from "./about-us.module.css";
import SubscribeBox from "../components/SubscribeBox";

const cx = (...names) => names.filter(Boolean).join(" ");

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us", current: true },
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
    href: "#solutions",
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

const clientLogos = [
  ["Amazon", "/assets/jscale-media/en/assets/images/about/amazon.png"],
  ["Centene", "/assets/jscale-media/en/assets/images/about/centene.png"],
  ["Comcast", "/assets/jscale-media/en/assets/images/about/comcast.png"],
  ["Goldman Sachs", "/assets/jscale-media/en/assets/images/about/goldman-sachs.png"],
  ["HP", "/assets/jscale-media/en/assets/images/about/hp.png"],
  ["Humana", "/assets/jscale-media/en/assets/images/about/humana.png"],
  ["TCS", "/assets/jscale-media/en/assets/images/about/tcs.png"],
  ["TIAA", "/assets/jscale-media/en/assets/images/about/tiaa.png"]
];

const chooseCards = [
  {
    title: "Industry Expertise and Precision Hiring",
    text:
      "Benefit from our deep industry knowledge and specialized recruitment strategies, ensuring we match the right talent to your business needs.",
    Icon: BriefcaseBusiness
  },
  {
    title: "Tailored Staffing Solutions",
    text:
      "We customize every staffing plan to meet your unique requirements, offering flexible and scalable solutions that drive long-term success.",
    Icon: Check
  },
  {
    title: "Commitment to Diversity and Innovation",
    text:
      "Our technology-driven approach, combined with inclusive hiring programs, fosters a diverse, dynamic workforce that fuels innovation and growth.",
    Icon: ShieldCheck
  }
];

const missionCards = [
  {
    title: "Our Mission",
    text:
      "Our mission is to connect the right talent with the right opportunities, fostering long-term success for both employers and employees. We aim to be the go-to partner for organizations seeking staffing solutions that go beyond recruitment, delivering a positive impact on their overall business performance.",
    button: "Find Work",
    image: "/assets/jscale-media/en/assets/images/resource/category-1.jpg",
    hoverClass: styles.imageHoverY
  },
  {
    title: "Our Vision",
    text:
      "At Jscale, our vision is to be a leading force in transforming the recruitment landscape by championing inclusivity and diversity. We aspire to create a world where every individual, regardless of their background or abilities, has equal access to meaningful employment opportunities.",
    button: "Find Employee",
    image: "/assets/jscale-media/en/assets/images/resource/category-2.jpg",
    hoverClass: styles.imageHoverX
  }
];

const values = [
  {
    title: "Client-Centered",
    text: "Our expert team ensures precise staffing with industry-specific knowledge."
  },
  {
    title: "Integrity",
    text: "We uphold transparency, trust, and ethical standards in every recruitment process."
  },
  {
    title: "Innovation",
    text: "We deliver efficient recruitment strategies using technology and industry insights."
  },
  {
    title: "Diversity & Inclusion",
    text: "We create equal opportunities, ensuring success for all candidates inclusively."
  }
];

const testimonials = [
  {
    name: "Priya Mehta",
    title: "Talent Acquisition Manager, Zenith Corp",
    image: "/assets/jscale-media/uploads/icons/testimonial-new.png",
    text:
      "Jscale transformed the way we approach hiring. Their team delivered top-tier candidates faster than we expected, and their process was seamless."
  },
  {
    name: "Rohan Khanna",
    title: "Founder, Codex Systems",
    image: "/assets/jscale-media/en/assets/images/resource/testimonial-4.png",
    text:
      "What impressed me most was their deep understanding of tech roles. We hired three engineers through them and each one was an ideal fit culturally and technically."
  },
  {
    name: "Ankita Sharma",
    title: "HR Executive, MedineX",
    image: "/assets/jscale-media/uploads/icons/testimonial-new-2.png",
    text:
      "I've worked with several hiring platforms, but none matched the personal attention and consistency that Jscale provides. Highly recommended."
  },
  {
    name: "Suresh Patel",
    title: "Operations Lead, Agrowise",
    image: "/assets/jscale-media/en/assets/images/resource/testimonial-4.png",
    text:
      "We've hired for both short-term and long-term roles through Jscale. Their team is responsive, insightful, and always aligned with our goals."
  }
];

const countries = [
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
  {
    title: "Our Services",
    links: ["Career Coaching", "Staffing Solution", "Outplacement Services"]
  },
  {
    title: "Company",
    links: ["About Us", "Testimonials", "Blog"]
  },
  {
    title: "Help & Support",
    links: ["Contact Us", "Partners Contact", "Privacy Policy", "Terms & Conditions"]
  }
];

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.autoContainer}>
        <div className={styles.headerOuter}>
          <a className={styles.logoBox} href="/" aria-label="Jscale home">
            <img src="/logo.png" alt="Jscale" className={styles.brandLogo} />
          </a>

          <nav className={styles.mainNav} aria-label="Main navigation">
            <ul>
              {navItems.map((item) => (
                <li className={cx(item.children && styles.hasDropdown)} key={item.label}>
                  <a className={item.current ? styles.currentNav : undefined} href={item.href}>
                    {item.label}
                    {item.children ? <ChevronDown aria-hidden="true" size={14} strokeWidth={2.4} /> : null}
                  </a>
                  {item.children ? (
                    <ul className={styles.dropdownMenu}>
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

          <div className={styles.headerActions}>
            <a className={styles.loginLink} href="/candidate/auth/sign-in">
              Log In
            </a>
            <a className={styles.themeBtn} href="#contact">
              Get Started
            </a>
          </div>

          <button
            aria-controls="about-mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Open mobile menu"
            className={styles.mobileToggle}
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
    <div
      className={cx(styles.mobileMenu, mobileOpen && styles.mobileMenuOpen)}
      id="about-mobile-menu"
      aria-hidden={!mobileOpen}
    >
      <button
        aria-label="Close mobile menu"
        className={styles.mobileBackdrop}
        type="button"
        onClick={() => setMobileOpen(false)}
      />
      <aside className={styles.mobilePanel}>
        <button
          aria-label="Close mobile menu"
          className={styles.closeMenu}
          type="button"
          onClick={() => setMobileOpen(false)}
        >
          <X size={22} />
        </button>
        <a className={styles.mobileLogo} href="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Jscale" className={styles.brandLogo} />
        </a>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div className={styles.mobileNavGroup} key={item.label}>
              <a href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
              {item.children
                ? item.children.map((child) => (
                    <a className={styles.mobileChildLink} href={child.href} key={child.label} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </a>
                  ))
                : null}
            </div>
          ))}
        </nav>
        <div className={styles.mobileContact}>
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
    <section className={styles.pageTitle} data-about-reveal>
      <div className={styles.autoContainer}>
        <div className={styles.pageTitleBox}>
          <h1>About Us</h1>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>-</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function AboutIntro() {
  const collage = [
    "/assets/jscale-media/en/assets/images/resource/about-3.jpg",
    "/assets/jscale-media/en/assets/images/resource/about-4.jpg",
    "/assets/jscale-media/en/assets/images/resource/about-5.jpg",
    "/assets/jscale-media/en/assets/images/resource/about-6.jpg"
  ];

  return (
    <section className={styles.aboutIntro}>
      <div className={cx(styles.autoContainer, styles.aboutGrid)}>
        <div className={styles.imageMosaic} data-about-reveal>
          <div className={styles.imageColumn}>
            <figure className={cx(styles.mosaicImage, styles.imageOne)}>
              <img src={collage[0]} alt="Professional working on staffing support" />
            </figure>
            <figure className={cx(styles.mosaicImage, styles.imageTwo)}>
              <img src={collage[1]} alt="Recruitment planning conversation" />
            </figure>
          </div>
          <div className={styles.imageColumn}>
            <figure className={cx(styles.mosaicImage, styles.imageThree)}>
              <img src={collage[2]} alt="Career support meeting" />
            </figure>
            <figure className={cx(styles.mosaicImage, styles.imageFour)}>
              <img src={collage[3]} alt="Team collaboration for hiring" />
            </figure>
          </div>
          <div className={styles.supportBox}>
            <span className={styles.supportIcon}>
              <Mail size={22} />
            </span>
            <span>Online Support</span>
            <a href="tel:+13073022460">+1 (307) 302-2460</a>
          </div>
        </div>

        <div className={styles.aboutCopy} data-about-reveal>
          <span className={styles.subTitle}>About us</span>
          <h2>
            The most loved <span>Agency</span>
          </h2>
          <p>
            At Jscale, we are committed to transforming the way organizations hire and retain talent by
            providing tailored, innovative staffing solutions. With a focus on understanding the unique needs of every
            client, we help businesses build strong, diverse, and high-performing teams. Our mission is to empower both
            companies and candidates to achieve success through a seamless recruitment process built on transparency,
            expertise, and results.
          </p>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className={styles.clientsSection}>
      <div className={styles.clientBg} />
      <div className={styles.autoContainer}>
        <div className={styles.logoPanel} data-about-reveal>
          {clientLogos.map(([name, src]) => (
            <a className={styles.clientLogo} href="#clients" key={name} aria-label={name}>
              <img src={src} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className={styles.chooseSection} id="services">
      <div className={styles.choosePattern} />
      <div className={styles.autoContainer}>
        <div className={cx(styles.sectionTitle, styles.lightTitle)} data-about-reveal>
          <span className={styles.subTitle}>Why Us</span>
          <h2>Who are We</h2>
        </div>
        <div className={styles.chooseGrid}>
          {chooseCards.map(({ title, text, Icon }) => (
            <article className={styles.chooseCard} data-about-reveal key={title}>
              <span className={styles.chooseIcon}>
                <Icon size={38} strokeWidth={1.8} />
              </span>
              <h3>
                <a href="#services">{title}</a>
              </h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className={styles.categorySection} id="solutions">
      <div className={cx(styles.autoContainer, styles.categoryGrid)}>
        {missionCards.map((card) => (
          <article className={styles.categoryCard} data-about-reveal key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            <a className={cx(styles.themeBtn, styles.whiteTextBtn)} href="#contact">
              {card.button}
            </a>
            <figure className={cx(styles.categoryImage, card.hoverClass)}>
              <img src={card.image} alt={card.title} />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesOuter}>
        <div className={styles.autoContainer}>
          <div className={styles.sectionTitle} data-about-reveal>
            <h2>Our Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article className={styles.valueCircle} data-about-reveal key={value.title}>
                <div className={styles.valueInner}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ activeIndex, setActiveIndex }) {
  const visibleTestimonials = useMemo(() => {
    return [testimonials[activeIndex], testimonials[(activeIndex + 1) % testimonials.length]];
  }, [activeIndex]);

  return (
    <section className={styles.testimonialsSection} id="blog">
      <div className={styles.testimonialPattern} />
      <div className={styles.autoContainer}>
        <div className={styles.sectionTitle} data-about-reveal>
          <h2>Love From Users</h2>
        </div>
        <div className={styles.testimonialGrid} data-about-reveal>
          {visibleTestimonials.map((item) => (
            <article className={styles.testimonialCard} key={item.name}>
              <img
                className={styles.quoteIcon}
                src="/assets/jscale-media/en/assets/images/icons/icon-11.png"
                alt=""
              />
              <div className={styles.authorBox}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.title}</span>
                </div>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.dots} aria-label="Testimonial slides">
          {testimonials.map((item, index) => (
            <button
              aria-label={`Show testimonial ${index + 1}`}
              className={index === activeIndex ? styles.activeDot : undefined}
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <SubscribeBox
      styles={styles}
      source="about-page"
      idPrefix="about-subscribe"
      revealAttribute="data-about-reveal"
    />
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWidgets}>
        <div className={cx(styles.autoContainer, styles.footerGrid)}>
          <div className={styles.footerBrand} data-about-reveal>
            <a href="/">
              <img src="/logo.png" alt="Jscale" className={styles.brandLogo} />
            </a>
            <p>
              Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services
              for lasting success.
            </p>
            <h4>Now we are also available in:</h4>
            <div className={styles.flags}>
              {countries.map(([country, src]) => (
                <img src={src} alt={`${country} flag`} title={country} key={country} />
              ))}
            </div>
          </div>
          {footerGroups.map((group) => (
            <div className={styles.footerLinks} data-about-reveal key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map((link) => (
                <a href="#contact" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={cx(styles.autoContainer, styles.footerBottomInner)}>
          <p>
            Copyright © 2025 <a href="/">Jscale</a> All rights reserved.
          </p>
          <div className={styles.socialLinks} aria-label="Follow us on">
            <span>Follow Us On:</span>
            <a href="#facebook" aria-label="Facebook">
              <Facebook size={21} fill="currentColor" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AboutUsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-about-reveal]")];

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
      node.style.setProperty("--reveal-delay", `${Math.min(index * 60, 360)}ms`);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={styles.aboutPage}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <PageTitle />
      <AboutIntro />
      <Clients />
      <WhyUs />
      <MissionVision />
      <Values />
      <Testimonials activeIndex={testimonialIndex} setActiveIndex={setTestimonialIndex} />
      <Subscribe />
      <Footer />
      <a className={styles.scrollTop} href="#" aria-label="Back to top">
        <ArrowUp size={26} />
      </a>
    </main>
  );
}
