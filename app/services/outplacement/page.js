"use client";

import { useEffect, useState } from "react";

import {

  ArrowUp,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  ClipboardCheck,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Menu,
  MessageCircleQuestion,
  SearchCheck,
  Target,
  UserRoundCheck,
  X

} from "lucide-react";

import shared from "../../about-us/about-us.module.css";
import styles from "./outplacement.module.css";
import SubscribeBox from "../../components/SubscribeBox";


const cx = (...names) => names.filter(Boolean).join(" ");


const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },

  {
    label: "Services",
    href: "/services",
    current: true,
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


const offerCards = [

  {
    title: "Career Transition Support",
    text: "Personalized career counseling and guidance to help employees navigate their next steps and create a clear action plan.",
    Icon: ClipboardCheck
  },

  {
    title: "Job Search Assistance",
    text: "Access resume writing, cover letter development, interview preparation, networking opportunities, and tailored job leads.",
    Icon: Target
  },

  {
    title: "Emotional Support and Coaching",
    text: "Professional coaching to build confidence and resilience during transition, with workshops to manage stress and maintain a positive outlook.",
    Icon: BarChart3
  }

];


const serviceIncludeCards = [
  {
    title: "Expert Guidance",
    text: "Our experienced career consultants provide personalized support tailored to each individual's needs.",
    Icon: FileText
  },

  {
    title: "Comprehensive Resources",
    text: "We offer a wide range of tools and resources to facilitate a successful job search and career transition.",
    Icon: UserRoundCheck
  },

  {
    title: "Dedicated Support",
    text: "We are committed to helping employees find new opportunities that align with their skills, interests, and career goals.",
    Icon: SearchCheck
  }

];

const faqs = [

  {
    question: "What are outplacement services?",
    answer:
      "Outplacement services provide career support to employees who are transitioning out of a company, helping them find new job opportunities."
  },

  {
    question: "What does outplacement support include?",
    answer:
      "Outplacement services benefit both employers, by supporting their departing employees, and employees, by providing professional guidance during a career transition."
  },

  {
    question: "How do outplacement services help employees?",
    answer:
      "These services help employees navigate the job market effectively, enhance their job search skills, and find suitable employment opportunities faster."
  },

  {
    question: "Discover Answers to Your Questions",
    answer:
      "Explore comprehensive answers to common inquiries regarding our outplacement services, designed to help you navigate your career transition smoothly and confidently."
  }

];


const achievements = [
  {
    title: "Personalized Career Coaching",
    text:
      "Tailored advice and guidance to help individuals identify their strengths and career goals.",
    image: "/assets/jscale-media/en/assets/images/resource/category-1.jpg",
    hover: styles.imageHoverOne
  },

  {
    title: "Resume and LinkedIn Optimization",
    text:
      "Assistance in creating standout resumes and LinkedIn profiles that attract potential employer.",
    image: "/assets/jscale-media/en/assets/images/resource/category-2.jpg",
    hover: styles.imageHoverTwo
  },

  {
    title: "Job Search Strategies",
    text:
      "Effective techniques and tools for a targeted job search, including networking strategies and interview preparation.",
    image: "/assets/jscale-media/en/assets/images/service/cc1.jpg",
    hover: styles.imageHoverTwo
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
          <button
            aria-controls="outplacement-mobile-menu"
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

    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="outplacement-mobile-menu" aria-hidden={!mobileOpen}>
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

              {item.children ? item.children.map((child) => (
                <a className={shared.mobileChildLink} href={child.href} key={child.label} onClick={() => setMobileOpen(false)}>
                  {child.label}
                </a>

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

function Hero() {

  return (

    <section className={styles.hero} data-coaching-reveal>
      <div className={styles.heroPattern} />
      <div className={styles.heroShape} />
      <div className={styles.heroImage} />
      <div className={styles.heroContent}>

        <h1>
          Outplacement Services at <span>Jscale</span>
        </h1>

      </div>
    </section>
  );
}

function Intro() {

  return (

    <section className={styles.introSection}>
      <div className={shared.autoContainer}>

        <div className={styles.introGrid}>

          <div className={styles.imageStack} data-coaching-reveal>

            <figure className={styles.imageOne}>
              <img src="/assets/jscale-media/en/assets/images/resource/about-1.jpg" alt="Outplacement career support" />
            </figure>

            <figure className={styles.imageTwo}>
              <img src="/assets/jscale-media/en/assets/images/resource/about-2.jpg" alt="Career transition planning" />
            </figure>

            <div className={styles.imageShape} />

          </div>
          <div className={styles.introCopy} data-coaching-reveal>

            <span className={styles.subTitle}>Outplacement Services</span>
            <h2>At Outplacement Services</h2>

            <p>
              At Jscale, we offer comprehensive outplacement services to support employees transitioning to
              new career opportunities. Our goal is to ensure a smooth and positive transition for both the departing
              employees and the organization.

            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

function Offers() {

  return (

    <>
    <section className={styles.offerSection}>
      <div className={shared.autoContainer}>

        <div className={styles.sectionTitle} data-coaching-reveal>
          <span>WHAT WE OFFER</span>
          <h2>Our Outplacement <br className={styles.mobileBreak} />Services Include</h2>
        </div>

        <div className={styles.offerGrid}>
          {offerCards.map(({ title, text, Icon }, index) => (
            <article className={styles.offerCard} data-coaching-reveal key={title} style={{ "--reveal-delay": `${index * 70}ms` }}>
              <span className={styles.offerIcon}>
                <Icon size={34} strokeWidth={1.7} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>

            </article>
          ))}
        </div>
      </div>

    </section>
    <section className={styles.offerSection}>
      <div className={shared.autoContainer}>
        <div className={styles.sectionTitle} data-coaching-reveal>

          <span>Why Us</span>
          <h2>Our Services <br className={styles.mobileBreak} />Include</h2>

        </div>

        <div className={styles.offerGrid}>
          {serviceIncludeCards.map(({ title, text, Icon }, index) => (
            <article className={styles.offerCard} data-coaching-reveal key={title} style={{ "--reveal-delay": `${index * 70}ms` }}>
              <span className={styles.offerIcon}>
                <Icon size={34} strokeWidth={1.7} />
              </span>

              <h3>{title}</h3>
              <p>{text}</p>

            </article>
          ))}

        </div>
      </div>

    </section>
    </>

  );
}

function FaqProcess() {
  const [openIndex, setOpenIndex] = useState(0);


  return (
    <section className={styles.faqSection}>
      <div className={shared.autoContainer}>
        <div className={styles.faqGrid}>
          <div data-coaching-reveal>

            <span className={styles.subTitle}>General Faqs</span>

            <h2>Frequently Asked Questions</h2>
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

          <div className={styles.processCopy} data-coaching-reveal>
            <span className={styles.subTitle}>The Process</span>
            <h2>Get Answers to Your Questions</h2>

            <h5>
              Discover how Jscale's outplacement support can empower employees through career transition.
              Our expert coaches provide personalized guidance tailored to career goals, helping people navigate challenges
              and seize opportunities effectively.
            </h5>

          </div>
        </div>
      </div>

    </section>
  );
}

function Achievements() {
  
  return (
    <section className={styles.achievementSection}>

      <div className={shared.autoContainer}>
        <div className={styles.sectionTitle} data-coaching-reveal>
          <span>OUR ACHIEVEMENTS</span>
          <h2>Supporting Smooth Career <br className={styles.mobileBreak} />Transitions</h2>
        </div>

        <div className={styles.achievementGrid}>
          {achievements.map((item, index) => (
            <article className={styles.achievementCard} data-coaching-reveal key={item.title} style={{ "--reveal-delay": `${index * 90}ms` }}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>

              <figure className={cx(styles.achievementImage, item.hover)}>
                
                <img src={item.image} alt={item.title} />
              </figure>

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
      source="outplacement-page"
      idPrefix="outplacement-subscribe"
      revealAttribute="data-coaching-reveal"
    />
  );
}

function Footer() {

  return (

    <footer className={shared.footer}>
      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-coaching-reveal>

            <a href="/"><img src="/logo.png" alt="Jscale" className={shared.brandLogo} /></a>
            <p>Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services for lasting success.</p>
            <h4>Now we are also available in:</h4>

            <div className={shared.flags}>
              {flagCountries.map(([country, src]) => <img src={src} alt={`${country} flag`} title={country} key={country} />)}
            </div>

          </div>
          {footerGroups.map((group) => (

            <div className={shared.footerLinks} data-coaching-reveal key={group.title}>

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




export default function OutplacementPage() {

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";

    };

  }, [mobileOpen]);

  useEffect(() => {

    const nodes = [...document.querySelectorAll("[data-coaching-reveal]")];
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
    <main className={cx(shared.aboutPage, styles.coachingPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <Intro />
      <Offers />
      <FaqProcess />
      <Achievements />
      <Subscribe />
      <Footer />

      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
