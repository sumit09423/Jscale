"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Play,
  Plus,
  ShieldCheck,
  UserRound,
  X
} from "lucide-react";
import styles from "./page.module.css";
import { postData } from "./utils/api";


const cx = (...classes) => classes.filter(Boolean).join(" ");

const navItems = [

  { label: "Home", href: "#home", current: true },
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

const seekerImages = [

  "/assets/jscale-media/en/assets/images/home/it.jpg",
  "/assets/jscale-media/en/assets/images/home/assistant.jpg",
  "/assets/jscale-media/en/assets/images/home/doctor.jpg",
  "/assets/jscale-media/en/assets/images/home/nurse.jpg",
  "/assets/jscale-media/en/assets/images/home/finance.jpg",
  "/assets/jscale-media/en/assets/images/home/partner.png"

];


const companyLogos = [

  ["Amazon", "/assets/jscale-media/en/assets/images/about/amazon.png"],
  ["Centene", "/assets/jscale-media/en/assets/images/about/centene.png"],
  ["Comcast", "/assets/jscale-media/en/assets/images/about/comcast.png"],
  ["Goldman Sachs", "/assets/jscale-media/en/assets/images/about/goldman-sachs.png"],
  ["HP", "/assets/jscale-media/en/assets/images/about/hp.png"],
  ["Humana", "/assets/jscale-media/en/assets/images/about/humana.png"],
  ["TCS", "/assets/jscale-media/en/assets/images/about/tcs.png"],
  ["TIAA", "/assets/jscale-media/en/assets/images/about/tiaa.png"]

];


const choiceCards = [

  {
    title: "Looking For a",
    highlight: "Job",
    text:
      "Unlock inclusive workforce solutions with Jscale, tailored to elevate your career aspirations and empower your journey to success!",
    image: "/assets/jscale-media/en/assets/images/home/job.png",
    href: "/jobs/job-list"
  },

  {
    title: "Looking For a",
    highlight: "Talent",
    text: "Source qualified, diverse talent to effectively address your ever-evolving business demands.",
    image: "/assets/jscale-media/en/assets/images/home/talent.png",
    href: "/company/auth/sign-in.php"
  },

  {
    title: "Looking For a",
    highlight: "Partnership",
    text:
      "Seamlessly integrate the latest AI Advancement into your processes and workflows, Empowering your business for success!",
    image: "/assets/jscale-media/en/assets/images/home/partner.png",
    href: "/contact/contact-us"
  }

];



const stats = [

  { target: 96.5, decimals: 1, suffix: "%", label: "Jobs accomplished Rate" },
  { target: 10, suffix: "k+", label: "Careers Secured" },
  { target: 700, suffix: "+", label: "Delighted Businesses" }

];

const industries = [

  "Supply Chain",
  "Information Technology",
  "Logistics",
  "Finance",
  "Healthcare",
  "Banking",
  "Construction",
  "Engineering"

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

function Header({ menuOpen, setMenuOpen }) 
{
  return (

    <header className={styles.mainHeader}>
      <div className={styles.autoContainer}>
        <div className={styles.headerOuter}>

          <a className={styles.logoBox} href="#home" aria-label="Jscale home">
            <img src="/logo.png" alt="Jscale" className={styles.brandLogo} />
          </a>

          <nav className={styles.mainNav} aria-label="Main navigation">

            <ul>
              {navItems.map((item) => (
                <li className={cx(item.children && styles.hasDropdown)} key={item.label}>
                  <a className={item.current ? styles.currentNav : undefined} href={item.href}>
                    {item.label}
                    {item.children ? <ChevronDown size={14} strokeWidth={2.6} aria-hidden="true" /> : null}
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
            <a href="/candidate/auth/sign-in" className={styles.loginLink}>
              Log In
            </a>

            <a href="#contact" className={styles.themeBtn}>
              Get Started
            </a>

          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className={styles.mobileToggle}
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ menuOpen, setMenuOpen }) {

  return (

    <div className={cx(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)} id="mobile-menu" aria-hidden={!menuOpen}>
      <button className={styles.mobileBackdrop} type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
      <aside className={styles.mobilePanel}>

        <button className={styles.closeMenu} type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <X size={22} />
        </button>

        <a className={styles.mobileLogo} href="#home" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Jscale" className={styles.brandLogo} />
        </a>

        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div className={styles.mobileNavGroup} key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>

              {item.children
                ? item.children.map((child) => (
                    <a className={styles.mobileChildLink} href={child.href} key={child.label} onClick={() => setMenuOpen(false)}>
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

function MatchingBoard() {

  return (

    <div className={styles.solutionDiagram} data-home-reveal>
      <div className={styles.workflowDiagram}>

        <section className={cx(styles.diagramPanel, styles.seekersPanel)} aria-label="Job seekers">
          <div className={styles.panelTag}>
            <UserRound size={17} />
            Job Seekers
          </div>

          <div className={styles.avatarGrid}>
            {seekerImages.map((src, index) => (
              <img className={cx(styles.avatarImg, styles[`avatar${index + 1}`])} src={src} alt="" key={`${src}-${index}`} />

            ))}

          </div>
        </section>

        <div className={styles.flowWrapper} aria-hidden="true">

          <span className={cx(styles.serviceIcon, styles.purpleIcon)}>
            <ChevronDown size={20} />
          </span>

          <span className={styles.blueBadge}>Jscale</span>

          <span className={cx(styles.serviceIcon, styles.tealIcon)}>
            <Plus size={18} />
          </span>

          <span className={cx(styles.connectionDot, styles.dot1)} />
          <span className={cx(styles.connectionDot, styles.dot2)} />
          <span className={cx(styles.connectionDot, styles.dot3)} />
          <span className={cx(styles.connectionDot, styles.dot4)} />
          <span className={cx(styles.connectionDot, styles.dot5)} />

        </div>

        <section className={cx(styles.diagramPanel, styles.employersPanel)} aria-label="Employers">

          <div className={cx(styles.panelTag, styles.employerTag)}>
            <BriefcaseBusiness size={17} />
            Employers
          </div>

          <div className={styles.logoGrid}>
            {companyLogos.map(([name, src]) => (

              <div className={styles.teamMember} key={name}>
                <img className={styles.companyLogo} src={src} alt={name} />
                <span>{name}</span>

              </div>

            ))}

          </div>
        </section>
      </div>

      <div className={styles.securityBadge}>

        <span>Secured Job Matching</span>

        <ShieldCheck size={24} />
      </div>
    </div>
  );
}

function Hero() {

  return (

    <section className={styles.heroSection} id="home">
      <div className={styles.autoContainer}>

        <div className={styles.heroContent} data-home-reveal>

          <h1>
            Discover your next career adventure!
            <br />
            Shape the future with <span>Jscale</span>
          </h1>

          <p>
            Explore our open positions to find roles that align with your interests and expertise. From entry-level
            positions to leadership roles.
          </p>

          <div className={styles.heroButtons}>

            <a href="/jobs/job-list" className={styles.btnBlue}>
              Find Works
            </a>

            <a href="/company/auth/sign-in.php" className={styles.btnOutline}>
              Hire Talents Now
            </a>

          </div>
        </div>

        <MatchingBoard />

      </div>
    </section>
  );
}

function ChoiceCards() {

  return (

    <section className={styles.choiceSection} id="services">
      <div className={styles.autoContainer}>

        <div className={styles.choiceGrid}>
          {choiceCards.map((card) => (
            <article className={styles.choiceCard} data-home-reveal key={card.highlight}>
              <img className={styles.choiceImage} src={card.image} alt={card.highlight} />

              <h2>
                {card.title} <span>{card.highlight}</span>
              </h2>

              <p>{card.text}</p>

              <a href={card.href} className={styles.learnLink}>
                Learn More
                <ChevronDown size={18} />
              </a>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

function AboutSection() {

  return (

    <section className={styles.aboutSection} id="about">

      <div className={cx(styles.autoContainer, styles.aboutGrid)}>
        <div className={styles.videoColumn} data-home-reveal>
          <div className={styles.videoBox}>

            <div className={styles.videoLayer}>
              <img className={styles.videoLayerOne} src="/assets/jscale-media/en/assets/images/resource/video-3.jpg" alt="" />
              <img className={styles.videoLayerTwo} src="/assets/jscale-media/en/assets/images/resource/video-2.jpg" alt="" />
            </div>

            <div className={styles.videoInner}>

              <button className={styles.videoButton} type="button" aria-label="Play video preview">
                <Play fill="currentColor" size={31} />
                <span className={styles.borderOne} />
                <span className={styles.borderTwo} />

              </button>
            </div>
          </div>
        </div>

        <div className={styles.aboutCopy} data-home-reveal>

          <span className={styles.subTitle}>About us</span>

          <h2>Elevating Career Journeys through Innovative IT solutions and our comprehenzsive job portal.</h2>

          <p>
            This staffing platform offers access to a diverse pool of highly qualified candidates with specialized
            skills in areas such as software development and IT project Management. Discover the talent that can drive
            your organization's success!
          </p>

          <ul>
            <li>
              <Check size={18} />
              <span>This helps businesses maintain service excellence</span>
            </li>

            <li>
              <Check size={18} />
              <span>This scalability allows businesses to adjust staffing</span>
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
}

function CountUpStat({ target, decimals = 0, suffix, label }) {
  const ref = useRef(null);

  const [value, setValue] = useState(0);





  useEffect(() => {

    const node = ref.current;
    let frame;
    let observer;
    let started = false;

    const startAnimation = () => {

      if (started) return;
      started = true;

      const start = performance.now();
      const duration = 1400;


      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);


        if (progress < 1) {

          frame = requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    
    if ("IntersectionObserver" in window && node) {

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();


          }
        },

        { threshold: 0.2 }

      );

      observer.observe(node);

    } else {
      startAnimation();
    }

    return () => {
      if (observer) observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };

  }, [target]);

  const number = decimals ? value.toFixed(decimals) : Math.round(value);

  return (

    <article className={styles.statCard} ref={ref} data-home-reveal>
      <strong>
        {number}
        {suffix}
      </strong>
      <p>{label}</p>
    </article>
  );
}

function Stats() {
  return (
    <section className={styles.statsSection} aria-label="Jscale stats">

      <div className={cx(styles.autoContainer, styles.statsGrid)}>
        {stats.map((stat) => (
          <CountUpStat key={stat.label} {...stat} />
        ))}
      </div>

    </section>
  );
}

function IndustryStrip() {
  const repeated = [...industries, ...industries, ...industries, ...industries];

  return (
    <section className={styles.industrySection} aria-label="Industries">
     
      <div className={styles.slideText}>
        <div className={styles.industryTrack}>
          {repeated.map((item, index) => (
            <span className={styles.industryItem} key={`${item}-${index}`}>
              {item}
              <i aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

function Subscribe() {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    try {
      await postData("/subscribers", {
        email,
        source: "home-page"
      });
      setStatusMessage("Email Subscribed");
      alert("Email Subscribed");
      form.reset();
    } catch (error) {
      setStatusMessage(error.message || "Subscription failed.");
    }
  };

  return (
    <section className={styles.subscribeSection} id="contact">

      <div className={styles.subscribeBg} />
      <div className={styles.autoContainer}>
        <div className={styles.subscribeInner} data-home-reveal>
          <div className={styles.subscribeShapeOne} />
          <div className={styles.subscribeShapeTwo} />

          <h2>
            Subscribe For <span>Latest Update</span>
          </h2>

          <form className={styles.subscribeForm} onSubmit={handleSubmit}>
            <label className={styles.srOnly} htmlFor="email">
              Email Address
            </label>
            <input id="email" name="email" type="email" placeholder="Email Address" required />
            <button className={styles.themeBtn} type="submit">
              Subscribe
            </button>
          </form>
          {statusMessage ? (
            <p className={styles.subscribeStatus}>{statusMessage}</p>
          ) : null}

        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerWidgets}>
        <div className={cx(styles.autoContainer, styles.footerGrid)}>
          <div className={styles.footerBrand} data-home-reveal>

            <a href="#home">
              <img src="/logo.png" alt="Jscale" className={styles.brandLogo} />
            </a>

            <p>
              Empowering IT talent and businesses with <strong>Jscale</strong> and expert staffing services
              for lasting success.
            </p>

            <h4>Now we are also available in:</h4>

            <div className={styles.flagGrid}>
              {countries.map(([country, src]) => (
                <img src={src} alt={`${country} flag`} title={country} key={country} />
              ))}
            </div>

          </div>


          {footerGroups.map((group) => (
            <div className={styles.footerLinks} data-home-reveal key={group.title}>
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

          <p> Copyright © 2025 Jscale All rights reserved.
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";

    };
  }, [menuOpen]);


  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-home-reveal]")];


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
      node.style.setProperty("--reveal-delay", `${Math.min(index * 55, 360)}ms`);
      observer.observe(node);
    });




    return () => observer.disconnect();
  }, []);


  return (


    <main className={styles.homePage}>


      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <ChoiceCards />
      <AboutSection />
      <Stats />
      <IndustryStrip />
      <Subscribe />
      <Footer />

      <a className={styles.scrollTop} href="#home" aria-label="Back to top">
        <ArrowUp size={26} />
      </a>
      
    </main>
  );
}
