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
import styles from "./staffing-solution.module.css";
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

const serviceIncludeCards = [

  {
    title: "Expertise",
    text: "Our team of experienced recruiters has deep industry knowledge and understands the nuances of the IT sector.",
    Icon: BriefcaseBusiness
  },

  {
    title: "Customization",
    text: "We tailor our staffing solutions to fit your unique needs, providing personalized service and attention to detail.",
    Icon: ClipboardCheck
  },

  {
    title: "Quality",
    text: "We are committed to delivering high-quality candidates who are not only skilled but also a cultural fit for your organization.",
    Icon: BarChart3
  }

];

const offerCards = [
  {
    title: "IT Talent Acquisition",
    text: "We specialize in sourcing and recruiting top IT professionals who meet your specific requirements.",
    Icon: SearchCheck
  },

  {
    title: "Temporary Staffing",
    text: "We offer flexible staffing solutions to meet your short-term project needs.",
    Icon: Target
  },

  {
    title: "Permanent Placements",
    text: "Our permanent placement services focus on finding long-term candidates who align with your company culture and goals.",
    Icon: UserRoundCheck
  }


];



const faqs = [

  {
    question: "What types of staffing services do you offer?",
    answer:
      "We provide a range of staffing solutions including temporary staffing, permanent placement, executive search, and specialized staffing for IT and other industries."
  },

  {
    question: "How do you source candidates for staffing positions?",
    answer:
      "We use a combination of advanced candidate sourcing techniques, including job boards, social media, networking, and our extensive database of qualified candidates."
  },


  {
    question: "What industries do you specialize in for staffing services?",
    answer:
      "We specialize in IT, engineering, finance, healthcare, and administrative staffing services, among others."
  },


  {
    question: "How do you ensure the quality of candidates placed through your staffing services?",
    answer:
      "We have rigorous screening processes that include skills assessments, background checks, reference checks, and interviews to ensure we match the right candidates with the right positions."
  }

];

const achievements = [

  {
    title: "Needs Assessment",
    text:
      "We take the time to understand your business and specific staffing requirements to ensure we find the right fit.",
    image: "/assets/jscale-media/en/assets/images/resource/category-1.jpg",
    hover: styles.imageHoverOne
  },

  {
    title: "Tailored Recruitment",
    text:
      "Using strategies developed to attract top talent, we tailor our recruitment process to meet your unique needs.",
    image: "/assets/jscale-media/en/assets/images/resource/category-2.jpg",
    hover: styles.imageHoverTwo
  },


  {
    title: "Vast Network",
    text:
      "Access to a large pool of qualified IT professionals ensures that we can find the perfect match for your company.",
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

          <div className={shared.headerActions}>
            <a className={shared.loginLink} href="/candidate/auth/sign-in">Log In</a>
            <a className={shared.themeBtn} href="#contact">Get Started</a>
          </div>

          <button
            aria-controls="staffing-solution-mobile-menu"
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
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="staffing-solution-mobile-menu" aria-hidden={!mobileOpen}>
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
          Staffing Services at <span>Jscale</span>
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
              <img src="/assets/jscale-media/en/assets/images/service/ss1.jpg" alt="Staffing services team" />
            </figure>

            <figure className={styles.imageTwo}>
              <img src="/assets/jscale-media/en/assets/images/resource/category-1.jpg" alt="Recruitment planning" />
            </figure>

            <div className={styles.imageShape} />

          </div>
          <div className={styles.introCopy} data-coaching-reveal>
            <span className={styles.subTitle}>Staffing Services</span>
            <h2>Staffing Services at Jscale</h2>

            <p>
              Jscale delivers flexible staffing services built around your business goals. Our team brings
              deep industry expertise, customized recruitment strategies, and a quality-first screening process to help
              you connect with professionals who are skilled, reliable, and aligned with your culture.
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

          <span>Why Us</span>
          <h2>Our Services Include</h2>
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

    <section className={styles.offerSection}>
      <div className={shared.autoContainer}>

        <div className={styles.sectionTitle} data-coaching-reveal>
          <span>WHAT WE OFFER</span>
          <h2>Why Choose Us?</h2>
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

            <h2>Frequently Asked Questions (FAQs) about Staffing Solutions</h2>
            <h5>
              Staffing solutions are designed to streamline and optimize the process of sourcing, recruiting, and hiring talent for organizations.
              These services include candidate sourcing, screening, and placement, tailored to meet specific business needs and industry requirements.
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
          <h2>Customized Talent Acquisition for Your Business Needs</h2>
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
      source="staffing-solution-page"
      idPrefix="staffing-subscribe"
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





export default function StaffingSolutionPage() {
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
      <Offers />
      <FaqProcess />
      <Achievements />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
