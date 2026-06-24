"use client";

import { useEffect, useState } from "react";

import {
  ArrowUp,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Send,
  Star,
  X
} from "lucide-react";

import shared from "../../about-us/about-us.module.css";
import styles from "./contact.module.css";
import { postData } from "../../utils/api";

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
  { label: "Contact", href: "/contact/contact-us", current: true },
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

const contactItems = [
  {
    title: "Corporate Office",
    text: "Sheridan, WY 82801.",
    icon: "/assets/jscale-media/en/assets/images/icons/icon-27.png"
  },
  {
    title: "Email Address",
    text: "contact@jscale.com",
    href: "mailto:contact@jscale.com",
    icon: "/assets/jscale-media/en/assets/images/icons/icon-28.png"
  },
  {
    title: "Phone Number",
    text: "+1 (307) 302-2460",
    href: "tel:+13073022460",
    icon: "/assets/jscale-media/en/assets/images/icons/icon-29.png"
  }
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
            <a className={shared.themeBtn} href="/contact/contact-us">Get Started</a>
          </div>
          <button aria-controls="contact-mobile-menu" aria-expanded={mobileOpen} aria-label="Open mobile menu" className={shared.mobileToggle} type="button" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="contact-mobile-menu" aria-hidden={!mobileOpen}>
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
    <section className={shared.pageTitle} data-contact-reveal>
      <div className={shared.autoContainer}>
        <div className={shared.pageTitleBox}>
          <h1>Contact us</h1>
          <ul className={shared.breadcrumb}>
            <li><a href="/">Home</a></li>
            <li>-</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      await postData("/contacts", payload);
      setStatus("Message sent successfully.");
      form.reset();
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={shared.autoContainer}>
        <div className={styles.contactGrid}>
          <aside className={styles.infoBox} data-contact-reveal>
            <h3>Contact Information</h3>
            {contactItems.map((item) => (
              <div className={styles.infoItem} key={item.title}>
                <span className={styles.iconBox}><img src={item.icon} alt="" /></span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.href ? <a href={item.href}>{item.text}</a> : item.text}</p>
                </div>
              </div>
            ))}
          </aside>
          <div className={styles.formInner} data-contact-reveal>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" placeholder="Enter Name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-phone">Phone</label>
                  <input id="contact-phone" name="phone" type="tel" placeholder="Enter Phone" minLength={10} maxLength={10} pattern="[0-9]{10}" required />
                </div>
                <div className={cx(styles.formGroup, styles.formGroupFull)}>
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" placeholder="Enter Email" required />
                </div>
                <div className={cx(styles.formGroup, styles.formGroupFull)}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" placeholder="Enter Message" required />
                </div>
                <div className={styles.messageBtn}>
                  <button className={shared.themeBtn} type="submit">Send Message</button>
                </div>
                {status ? <p className={styles.feedbackSuccess}>{status}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedbackSection() {
  const [status, setStatus] = useState("");
  const ratings = ["1", "2", "3", "4", "5"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      await postData("/feedbacks", payload);
      setStatus("Thank you. Your feedback has been saved.");
      form.reset();
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <section className={styles.feedbackSection} id="feedback">
      <div className={shared.autoContainer}>
        <div className={styles.feedbackShell} data-contact-reveal>
          <div className={styles.feedbackIntro}>
            <span className={styles.feedbackBadge}>Feedback</span>
            <h2>Share Your Experience With Jscale</h2>
            <p>
              Tell us what worked well and where we can improve. Your feedback helps us make the hiring and staffing
              journey clearer, faster, and more useful for every visitor.
            </p>
          </div>

          <form
            className={styles.feedbackForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="feedback-type">Feedback Type</label>
              <select id="feedback-type" name="feedbackType" defaultValue="" required>
                <option value="" disabled>Select feedback type</option>
                <option value="website">Website Experience</option>
                <option value="jobs">Jobs / Candidate Journey</option>
                <option value="hiring">Hiring / Employer Journey</option>
                <option value="support">Support Experience</option>
                <option value="other">Other</option>
              </select>
            </div>

            <fieldset className={styles.ratingGroup}>
              <legend>Overall Rating</legend>
              <div className={styles.ratingOptions}>
                {ratings.map((rating) => (
                  <label key={rating}>
                    <input type="radio" name="rating" value={rating} required />
                    <span>
                      <Star size={17} fill="currentColor" />
                      {rating}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className={styles.feedbackTwoCol}>
              <div className={styles.formGroup}>
                <label htmlFor="feedback-name">Name</label>
                <input id="feedback-name" name="name" type="text" placeholder="Enter Name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="feedback-email">Email</label>
                <input id="feedback-email" name="email" type="email" placeholder="Enter Email" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="feedback-message">Your Feedback</label>
              <textarea
                id="feedback-message"
                name="message"
                placeholder="Tell us what we should keep, fix, or improve"
                required
              />
            </div>

            <button className={cx(shared.themeBtn, styles.feedbackButton)} type="submit">
              Send Feedback
              <Send size={17} />
            </button>

            {status ? <p className={styles.feedbackSuccess}>{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function GoogleMap() {
  return (
    <section className={styles.mapSection}>
      <div className={shared.autoContainer}>
        <div className={styles.mapBox} data-contact-reveal>
          <iframe
            title="Jscale location in Sheridan WY"
            src="https://maps.google.com/maps?q=Sheridan,%20WY%2082801&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    try {
      await postData("/subscribers", { email, source: "contact-page" });
      setStatus("Email Subscribed");
      alert("Email Subscribed");
      form.reset();
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <section className={shared.subscribeSection}>
      <div className={shared.subscribeBg} />
      <div className={shared.autoContainer}>
        <div className={shared.subscribeInner} data-contact-reveal>
          <div className={shared.subscribeShapeOne} />
          <div className={shared.subscribeShapeTwo} />
          <div className={shared.subscribeText}><h2>Subscribe For <span>Latest Update</span></h2></div>
          <form className={shared.subscribeForm} onSubmit={handleSubmit}>
            <label className={shared.srOnly} htmlFor="contact-subscribe-email">Email address</label>
            <input id="contact-subscribe-email" name="email" type="email" placeholder="Email Address" required />
            <button className={shared.themeBtn} type="submit">Subscribe</button>
          </form>
          {status ? <p className={styles.feedbackSuccess}>{status}</p> : null}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={shared.footer}>
      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-contact-reveal>
            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services for lasting success.</p>
            <h4>Now we are also available in:</h4>
            <div className={shared.flags}>
              {flagCountries.map(([country, src]) => <img src={src} alt={`${country} flag`} title={country} key={country} />)}
            </div>
          </div>
          {footerGroups.map((group) => (
            <div className={shared.footerLinks} data-contact-reveal key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map((link) => (
                <a href={link === "Blog" ? "/blogs/blog" : link === "Contact Us" ? "/contact/contact-us" : "#contact"} key={link}>{link}</a>
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

export default function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-contact-reveal]")];
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
    <main className={cx(shared.aboutPage, styles.contactPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <PageTitle />
      <ContactSection />
      <FeedbackSection />
      <GoogleMap />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
