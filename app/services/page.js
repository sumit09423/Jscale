"use client";

import { useEffect, useState } from "react";

import {
  ArrowUp,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Quote,
  X
} from "lucide-react";

import shared from "../about-us/about-us.module.css";

import styles from "./services.module.css";
import SubscribeBox from "../components/SubscribeBox";

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


const services = [
  {
    id: "career-coaching",
    title: "Career Coaching",
    text: "At Jscale, we understand that navigating the complexities of your career path can be challenging.",
    image: "/assets/jscale-media/en/assets/images/service/service-1.jpg",
    href: "/services/career-coaching",
    delay: "0ms"
  },

  {
    id: "staffing-solution",
    title: "Staffing Solution",
    text: "We tailor our staffing solutions to fit your unique needs, providing personalized service and attention to detail.",
    image: "/assets/jscale-media/en/assets/images/service/service-2.jpg",
    href: "/services/staffing-solution",
    delay: "120ms"
  },

  {
    id: "outplacement",
    title: "Outplacement Services",
    text: "At Jscale, we offer comprehensive outplacement services to support employees for career.",
    image: "/assets/jscale-media/en/assets/images/service/service-3.jpg",
    href: "/services/outplacement",
    delay: "240ms"
  }

];

const countries = [
  ["Jobs in USA", "/assets/jscale-media/en/assets/images/service/countries/USA.jpg"],
  ["Jobs in Canada", "/assets/jscale-media/en/assets/images/service/countries/Canada.jpg"],
  ["Jobs in UK", "/assets/jscale-media/en/assets/images/service/countries/UK.jpg"],
  ["Jobs in India", "/assets/jscale-media/en/assets/images/service/countries/India.jpg"],
  ["Jobs in Australia", "/assets/jscale-media/en/assets/images/service/countries/Australia.jpg"],
  ["Jobs in Germany", "/assets/jscale-media/en/assets/images/service/countries/Germany.jpg"],
  ["Jobs in Singapore", "/assets/jscale-media/en/assets/images/service/countries/Singapore.jpg"],
  ["Jobs in New Zealand", "/assets/jscale-media/en/assets/images/service/countries/New%20Zealand.jpg"]
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

const testimonials = [
  {
    name: "Franklin Bailey",
    title: "CEO, Jscale",
    image: "/assets/jscale-media/en/assets/images/resource/testimonial-5.png",
    text:
      "Company was impressed by the personal approach of their recruitment team for the improvement. They kept informed at every stage of the task."
  },


  {
    name: "Franklin Bailey",
    title: "CEO, Jscale",
    image: "/assets/jscale-media/en/assets/images/resource/testimonial-5.png",
    text:
      "Company was impressed by the personal approach of their recruitment team for the improvement. They kept informed at every stage of the task."
  },


  {
    name: "Franklin Bailey",
    title: "CEO, Jscale",
    image: "/assets/jscale-media/en/assets/images/resource/testimonial-5.png",
    text:
      "Company was impressed by the personal approach of their recruitment team for the improvement. They kept informed at every stage of the task."
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
            <a className={shared.loginLink} href="/candidate/auth/sign-in">
              Log In
            </a>

            <a className={shared.themeBtn} href="#contact">
              Get Started
            </a>

          </div>


          <button
            aria-controls="services-mobile-menu"
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

function MobileMenu({ mobileOpen, setMobileOpen })
 {
  return (

    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="services-mobile-menu" aria-hidden={!mobileOpen}>

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

              <a href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>

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

function PageTitle() {

  return (
    <section className={styles.pageTitle} data-services-reveal>

      <div className={shared.autoContainer}>
        <h1>Our Services</h1>
        <ul className={styles.breadcrumb}>

          <li>
            <a href="/">Home</a>
          </li>


          <li>-</li>
          <li>Our Services</li>
        </ul>

      </div>
    </section>
  );
}

function ServicesSection() {

  return (

    <section className={styles.serviceSection} id="services">
      <div className={shared.autoContainer}>
        <div className={styles.sectionTitle} data-services-reveal>

          <span>What We Provide</span>

          <h2>Inspiring Staffing Solutions</h2>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article
              className={styles.serviceCard}
              id={service.id}
              data-services-reveal
              key={service.title}
              style={{ "--reveal-delay": service.delay }}
            >

              <div className={styles.serviceInner}>
                <figure className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                  <img className={styles.serviceOverlayImage} src={service.image} alt="" />

                </figure>

                <div className={styles.serviceContent}>

                  <h3>
                    <a href={service.href}>{service.title}</a>
                  </h3>

                  <p>{service.text}</p>

                  <a className={cx(shared.themeBtn, styles.outlineButton)} href={service.href}>
                    View Details
                  </a>

                </div>
              </div>

            </article>
          ))}

        </div>
      </div>

    </section>
  );
}

function CountrySection() {

  return (

    <section className={styles.countrySection}>
      <div className={shared.autoContainer}>

        <div className={styles.sectionTitle} data-services-reveal>
          <span>Discover Worldwide</span>
          <h2>Explore Global Career Opportunities</h2>
        </div>

        <div className={styles.countryGrid}>
          {countries.map(([name, image], index) => (

            <a
              className={styles.countryCard}
              href="#jobs"
              data-services-reveal
              key={name}
              style={{ "--reveal-delay": `${Math.min(index * 70, 420)}ms` }}
            >
              <img src={image} alt={name} />
              <span>{name}</span>
            </a>

          ))}

        </div>
      </div>
    </section>
  );
}

function HiringSplit() {

  return (

    <section className={styles.hiringSplit}>

      <div className={styles.hiringBg} />
      <div className={styles.hiringShapeOne} />
      <div className={styles.hiringShapeTwo} />

      <img className={styles.hiringWoman} src="/assets/jscale-media/en/assets/images/resource/women-1.png" alt="" />

      <img className={styles.hiringMan} src="/assets/jscale-media/en/assets/images/resource/men-1.png" alt="" />

      <div className={shared.autoContainer}>
        <div className={styles.hiringGrid}>

          <article className={styles.hiringContent} data-services-reveal>

            <h2>Professions Hiring</h2>
            <p>This dynamic hiring landscape presents a wealth of opportunities for professionals across</p>

            <a className={shared.themeBtn} href="#professions">
              Professions
            </a>

          </article>

          <article className={cx(styles.hiringContent, styles.hiringLight)} data-services-reveal>

            <h2>Industries Hiring</h2>

            <p>The current job market is dynamic, with numerous industries actively seeking new talent</p>

            <a className={shared.themeBtn} href="#industries">
              Industries
            </a>

          </article>
        </div>
      </div>
    </section>
  );
}

function Testimonial({ activeIndex, setActiveIndex }) {
  const item = testimonials[activeIndex];

  return (
    <section className={styles.testimonialSection} id="blog">
      <div className={shared.autoContainer}>
        <div className={styles.testimonialInner} data-services-reveal>
          <div className={styles.testimonialShapeOne} />
          <div className={styles.testimonialShapeTwo} />

          <article className={styles.testimonialBlock}>

            <figure className={styles.testimonialThumb}>
              <img src={item.image} alt={item.name} />
            </figure>

            <div className={styles.testimonialContent}>

              <Quote size={40} strokeWidth={1.6} />
              <h2>{item.text}</h2>
              <h3>{item.name}</h3>

              <span>{item.title}</span>
              <div className={styles.testimonialDots}>

                {testimonials.map((testimonial, index) => (
                  <button
                    aria-label={`Show testimonial ${index + 1}`}
                    className={index === activeIndex ? styles.activeDot : undefined}
                    key={`${testimonial.name}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                  />
                ))}

              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <SubscribeBox
      styles={shared}
      source="services-page"
      idPrefix="services-subscribe"
      revealAttribute="data-services-reveal"
    />
  );
}

function Footer() {


  return (

    <footer className={shared.footer}>

      <div className={shared.footerWidgets}>
        <div className={cx(shared.autoContainer, shared.footerGrid)}>
          <div className={shared.footerBrand} data-services-reveal>

            <a href="/">
              <img src="/logo.png" alt="Jscale" className={shared.brandLogo} />
            </a>

            <p>
              Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services
              for lasting success.
            </p>

            <h4>Now we are also available in:</h4>

            <div className={shared.flags}>
              {flagCountries.map(([country, src]) => (
                <img src={src} alt={`${country} flag`} title={country} key={country} />
              ))}

            </div>
          </div>

          {footerGroups.map((group) => (
            <div className={shared.footerLinks} data-services-reveal key={group.title}>
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

      <div className={shared.footerBottom}>
        <div className={cx(shared.autoContainer, shared.footerBottomInner)}>

          <p>
            Copyright © 2025 <a href="/">Jscale</a> All rights reserved.
          </p>

          <div className={shared.socialLinks} aria-label="Follow us on">

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

export default function ServicesPage() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };

  }, [mobileOpen]);

  useEffect(() => {

    const nodes = [...document.querySelectorAll("[data-services-reveal]")];

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => {
        node.dataset.visible = "true";4
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
    const timer = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % testimonials.length);
    }, 4500);


    return () => window.clearInterval(timer);
  }, []);

  return (

    <main className={cx(shared.aboutPage, styles.servicesPage)}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <PageTitle />
      <ServicesSection />
      <CountrySection />
      <HiringSplit />
      <Testimonial activeIndex={testimonialIndex} setActiveIndex={setTestimonialIndex} />

      <Subscribe />
      <Footer />

      <a className={shared.scrollTop} href="#" aria-label="Back to top">
        <ArrowUp size={26} />
      </a>
      
    </main>
  );
}
