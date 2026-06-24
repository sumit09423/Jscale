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
import styles from "./sign-in/sign-in.module.css";
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

const authConfig = {
  signIn: {
    title: "Candidate Sign In",
    audience: "Candidate",
    breadcrumb: "Sign In",
    button: "Sign In",
    fields: [
      { id: "email", label: "Email", type: "email", placeholder: "Enter Email" },
      { id: "password", label: "Password", type: "password", placeholder: "Enter Password" }
    ],
    showPassword: true,
    forgotLink: true,
    forgotHref: "/candidate/auth/forgot-password",
    lowerText: "Not registered yet?",
    lowerLink: "Create an Account",
    lowerHref: "/candidate/auth/sign-up"
  },
  forgotPassword: {
    title: "Forgot Password",
    audience: "Candidate",
    breadcrumb: "Fogot Password",
    button: "Forgot Password",
    fields: [
      { id: "email", label: "Email", type: "email", placeholder: "Enter Email" }
    ],
    lowerText: "Not registered yet?",
    lowerLink: "Create an Account",
    lowerHref: "/candidate/auth/sign-up"
  },
  signUp: {
    title: "Candidate Sign Up",
    audience: "Candidate",
    breadcrumb: "Sign Up",
    button: "Sign Up",
    fields: [
      { id: "name", label: "Name", type: "text", placeholder: "Enter Name" },
      { id: "email", label: "Email", type: "email", placeholder: "Enter Email" },
      { id: "phone", label: "Phone", type: "tel", placeholder: "Enter Phone" },
      { id: "password", label: "Password", type: "password", placeholder: "Enter Password" }
    ],
    lowerText: "Already have an account?",
    lowerLink: "Sign In",
    lowerHref: "/candidate/auth/sign-in"
  },
  companySignIn: {
    title: "Company Sign In",
    audience: "Company",
    breadcrumb: "Sign In",
    button: "Sign In",
    assetBase: "/assets/jscale-media/company/assets/images",
    fields: [
      { id: "email", label: "Email", type: "email", placeholder: "Enter Email" },
      { id: "password", label: "Password", type: "password", placeholder: "Enter Password" }
    ],
    showPassword: true,
    forgotLink: true,
    forgotHref: "/company/auth/forgot-password",
    lowerText: "Not registered yet?",
    lowerLink: "Create an Account",
    lowerHref: "/company/auth/sign-up"
  },
  companyForgotPassword: {
    title: "Forgot Password",
    audience: "Company",
    breadcrumb: "Fogot Password",
    button: "Forgot Password",
    assetBase: "/assets/jscale-media/company/assets/images",
    fields: [
      { id: "email", label: "Email", type: "email", placeholder: "Enter Email" }
    ],
    lowerText: "Not registered yet?",
    lowerLink: "Create an Account",
    lowerHref: "/company/auth/sign-up"
  },
  companySignUp: {
    title: "Company Sign Up",
    audience: "Company",
    breadcrumb: "Sign Up",
    button: "Sign Up",
    assetBase: "/assets/jscale-media/company/assets/images",
    fields: [
      { id: "name", label: "Name", type: "text", placeholder: "Enter Name" },
      { id: "email", label: "Email", type: "email", placeholder: "Enter Email" },
      { id: "phone", label: "Phone", type: "tel", placeholder: "Enter Phone", minLength: 10, maxLength: 10, pattern: "[0-9]{10}" },
      { id: "password", label: "Password", type: "password", placeholder: "Enter Password" }
    ],
    showPassword: true,
    lowerText: "Already have an account?",
    lowerLink: "Sign In",
    lowerHref: "/company/auth/sign-in.php"
  }
};

function Header({ mobileOpen, setMobileOpen, assetBase }) {
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
          <button aria-controls="auth-mobile-menu" aria-expanded={mobileOpen} aria-label="Open mobile menu" className={shared.mobileToggle} type="button" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen, assetBase }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="auth-mobile-menu" aria-hidden={!mobileOpen}>
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
          <a href="tel:+13073022460">+1 (307) 302-2460</a>
          <a href="mailto:contact@jscale.com">contact@jscale.com</a>
        </div>
      </aside>
    </div>
  );
}

function PageTitle({ data }) {
  return (
    <section className={shared.pageTitle} data-sign-reveal>
      <div className={shared.autoContainer}>
        <div className={shared.pageTitleBox}>
          <h1>{data.title}</h1>
          <ul className={shared.breadcrumb}>
            <li>{data.audience}</li>
            <li>-</li>
            <li>{data.breadcrumb}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function AuthForm({ data, type }) {
  const [showPassword, setShowPassword] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPopup({ title: "Please wait", message: "We are processing your request.", type: "loading" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const role = type.startsWith("company") ? "company" : "candidate";
    const lowerType = type.toLowerCase();
    const endpoint = lowerType.includes("forgotpassword")
      ? "/auth/forgot-password"
      : lowerType.includes("signup")
        ? "/auth/signup"
        : "/auth/signin";

    try {
      await postData(endpoint, { ...payload, role });
      if (lowerType.includes("signup")) {
        const params = new URLSearchParams({ email: payload.email, role });
        localStorage.setItem("pendingOtpEmail", payload.email);
        localStorage.setItem("pendingOtpRole", role);
        window.location.href = `/candidate/auth/email-otp-verification?${params.toString()}`;
        return;
      }

      setPopup({
        title: "Success",
        message:
        lowerType.includes("forgotpassword")
          ? "Password reset request saved."
          : "Signed in successfully.",
        type: "success"
      });
      form.reset();
    } catch (error) {
      if (error.message === "Please verify your email OTP first") {
        localStorage.setItem("pendingOtpEmail", payload.email);
        localStorage.setItem("pendingOtpRole", role);
        const params = new URLSearchParams({ email: payload.email, role });
        window.location.href = `/candidate/auth/email-otp-verification?${params.toString()}`;
        return;
      }

      setPopup({ title: "Something went wrong", message: error.message, type: "error" });
    }
  };

  return (
    <section className={styles.signSection}>
      <div className={styles.patternLayer} />
      <div className={shared.autoContainer}>
        <div className={styles.formInner} data-sign-reveal>
          <form onSubmit={handleSubmit}>
            {data.fields.map((field) => {
              const isPassword = field.type === "password";
              return (
                <div className={styles.formGroup} key={field.id}>
                  <label htmlFor={`auth-${field.id}`}>{field.label}</label>
                  <input
                    id={`auth-${field.id}`}
                    type={isPassword && showPassword ? "text" : field.type}
                    name={field.id}
                    placeholder={field.placeholder}
                    minLength={field.minLength}
                    maxLength={field.maxLength}
                    pattern={field.pattern}
                    required
                  />
                </div>
              );
            })}
            <div className={styles.messageBtn}>
              <button className={shared.themeBtn} type="submit">{data.button}</button>
            </div>
          </form>
          {data.showPassword || data.forgotLink ? (
            <div className={styles.optionsRow}>
              {data.showPassword ? (
                <label className={styles.checkBox} htmlFor="auth-show-password">
                  <input id="auth-show-password" type="checkbox" checked={showPassword} onChange={(event) => setShowPassword(event.target.checked)} />
                  Show Password
                </label>
              ) : <span />}
              {data.forgotLink ? <a className={styles.forgotPassword} href={data.forgotHref}>Forget password?</a> : null}
            </div>
          ) : null}
          <div className={styles.lowerText}>
            <p>{data.lowerText} <a href={data.lowerHref}>{data.lowerLink}</a></p>
          </div>
        </div>
      </div>
      {popup ? <AuthPopup popup={popup} onClose={() => setPopup(null)} /> : null}
    </section>
  );
}

function AuthPopup({ popup, onClose }) {
  return (
    <div className={styles.popupOverlay} role="dialog" aria-modal="true" aria-labelledby="auth-popup-title">
      <div className={styles.popupCard}>
        <button className={styles.popupClose} type="button" aria-label="Close popup" onClick={onClose}>
          <X size={18} />
        </button>
        <div className={cx(styles.popupIcon, styles[popup.type])}>
          {popup.type === "success" ? "✓" : popup.type === "error" ? "!" : "..."}
        </div>
        <h3 id="auth-popup-title">{popup.title}</h3>
        <p>{popup.message}</p>
        {popup.type !== "loading" ? (
          <button className={shared.themeBtn} type="button" onClick={onClose}>OK</button>
        ) : null}
      </div>
    </div>
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
      await postData("/subscribers", { email, source: "auth-page" });
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
        <div className={shared.subscribeInner} data-sign-reveal>
          <div className={shared.subscribeShapeOne} />
          <div className={shared.subscribeShapeTwo} />
          <div className={shared.subscribeText}><h2>Subscribe For <span>Latest Update</span></h2></div>
          <form className={shared.subscribeForm} onSubmit={handleSubmit}>
            <label className={shared.srOnly} htmlFor="auth-subscribe-email">Email address</label>
            <input id="auth-subscribe-email" name="email" type="email" placeholder="Email Address" required />
            <button className={shared.themeBtn} type="submit">Subscribe</button>
          </form>
          {status ? <p className={styles.lowerText}>{status}</p> : null}
        </div>
      </div>
    </section>
  );
}

function Footer({ assetBase }) {
  return (
    <footer className={shared.footer}>
      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-sign-reveal>
            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services for lasting success.</p>
            <h4>Now we are also available in:</h4>
            <div className={shared.flags}>
              {flagCountries.map(([country, src]) => <img src={src} alt={`${country} flag`} title={country} key={country} />)}
            </div>
          </div>
          {footerGroups.map((group) => (
            <div className={shared.footerLinks} data-sign-reveal key={group.title}>
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
          <p>Copyright 2024 <a href="/">Jscale</a> All rights reserved.</p>
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

export default function AuthPageClient({ type }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const data = authConfig[type] || authConfig.signIn;
  const assetBase = data.assetBase || "/assets/jscale-media/candidate/assets/images";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-sign-reveal]")];
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
  }, [type]);

  return (
    <main className={cx(shared.aboutPage, styles.signPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} assetBase={assetBase} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} assetBase={assetBase} />
      <PageTitle data={data} />
      <AuthForm data={data} type={type} />
      <Subscribe />
      <Footer assetBase={assetBase} />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
