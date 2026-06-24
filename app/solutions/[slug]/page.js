"use client";

import { useEffect, useState } from "react";

import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Facebook,
  FileSearch,
  Handshake,
  Instagram,
  Laptop,
  Linkedin,
  Menu,
  MessageCircleQuestion,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  X
} from "lucide-react";

import shared from "../../about-us/about-us.module.css";
import styles from "../talent-acquisition/talent-acquisition.module.css";
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

const iconSet = [SearchCheck, BriefcaseBusiness, Handshake, UsersRound, ShieldCheck, Laptop, Award, Target, BookOpenCheck, Sparkles];

const solutionData = {
  "career-development": {
    title: "Careeer Development Solutions",
    intro: "Unlock your full potential and achieve your career aspirations with our tailored career development solutions.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/cd.jpg",
    sections: ["approach", "processFaq", "offerings"],
    offerTitle: "Our Offerings Include",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Enhancing Careers Through Tailored Development",
    approachText:
      "Jscale offers comprehensive Jscale Development Solutions designed to empower professionals at every stage of their career journey. Our programs are crafted to address individual aspirations, providing personalized guidance and resources that foster growth and success in diverse professional landscapes.",
    processTitle: "Efficient Strategies for Acquiring Top Talent",
    processText:
      "Explore our comprehensive career Development Solutions designed to streamline your recruitment processes, optimize candidate sourcing, and elevate your organization's ability to attract and retain skilled professionals.",
    offerings: [
      ["Personalized Career Coaching", "Receive one-on-one guidance to clarify career goals and create actionable plans. Identify strengths and areas for growth with the help of our expert consultants."],
      ["Skill Enhancement Programs", "Participate in workshops and training sessions to develop critical skills. Enhance both technical and soft skills to stay competitive in the job market."],
      ["Resume and Interview Preparation", "Get professional assistance in crafting impactful resumes and cover letters. Prepare for interviews with mock sessions and feedback from our career consultants."]
    ],
    approachItems: [["Professional Growth", "Fall 2023"], ["Success Stories", "Winter 2023"], ["Industry Recognition", "Winter 2023"]],
    faqs: [
      ["What services do Jscale Development Solutions offer?", "Jscale Development Solutions at Jscale encompass personalized career coaching, skill development programs, and resources aimed at enhancing professional growth and advancement."],
      ["Who can benefit from Jscale Development Solutions?", "Professionals at various career stages, from entry-level to seasoned executives, seeking to advance their careers through tailored coaching and skill enhancement."],
      ["How does Jscale Development Solutions support career growth?", "We offer individualized career planning, skill assessments, and access to professional development resources to align personal aspirations with career goals effectively."],
      ["What are the benefits of investing in Jscale Development Solutions?", "Clients benefit from improved career prospects, enhanced job satisfaction, and increased readiness for career transitions or advancements."]
    ]
  },
  "work-force": {
    title: "Workforce Management Solutions",
    intro: "Optimize your workforce with our comprehensive management solutions.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/wf.jpg",
    sections: ["offerings", "approach", "why"],
    offerTitle: "Our Offerings Include",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Our Approach to Workforce Management Solutions",
    approachText:
      "Our approach to Workforce Management Solutions is rooted in strategic alignment and operational excellence. We focus on customizing strategies that enhance employee engagement, optimize performance, and ensure your workforce is equipped to meet your organization's evolving needs. Through tailored solutions, proactive engagement initiatives, and leveraging advanced technology, we empower your organization to achieve sustainable growth and success.",
    whyTitle: "Enhanced Workforce Management Solutions for Organizational Excellence",
    whyText: "Optimize your workforce with our comprehensive management solutions.",
    whyVariant: "dark",
    offerings: [
      ["Talent Acquisition", "Streamline the hiring process with our expert recruitment services. Access a pool of highly qualified candidates ready to contribute to your success."],
      ["Performance Management", "Develop robust performance evaluation systems. Provide continuous feedback and support to improve employee performance."],
      ["Employee Retention Strategies", "Implement effective programs to retain top talent. Foster a positive work environment and enhance employee satisfaction."]
    ],
    approachItems: [["Strategic Workforce Planning", ""], ["Employee Engagement Initiatives", ""], ["Performance Optimization", ""]],
    whyItems: [
      ["Client Success Stories", "Highlighting specific cases where your solutions improved efficiency or reduced costs for clients."],
      ["Industry Recognition", "Any awards or certifications received for excellence in workforce management solutions."],
      ["Scalability and Impact", "Demonstrating how your solutions have scaled effectively and impacted client organizations positively."]
    ]
  },
  outplacement: {
    title: "Workforce Management Solutions",
    intro: "Optimize your workforce with our comprehensive management solutions.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/wf.jpg",
    sections: ["offerings", "approach", "why"],
    offerTitle: "Our Offerings Include",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Our Approach to Workforce Management Solutions",
    approachText:
      "Our approach to Workforce Management Solutions is rooted in strategic alignment and operational excellence. We focus on customizing strategies that enhance employee engagement, optimize performance, and ensure your workforce is equipped to meet your organization's evolving needs. Through tailored solutions, proactive engagement initiatives, and leveraging advanced technology, we empower your organization to achieve sustainable growth and success.",
    whyTitle: "Enhanced Workforce Management Solutions for Organizational Excellence",
    whyText: "Optimize your workforce with our comprehensive management solutions.",
    whyVariant: "dark",
    offerings: [
      ["Talent Acquisition", "Streamline the hiring process with our expert recruitment services. Access a pool of highly qualified candidates ready to contribute to your success."],
      ["Performance Management", "Develop robust performance evaluation systems. Provide continuous feedback and support to improve employee performance."],
      ["Employee Retention Strategies", "Implement effective programs to retain top talent. Foster a positive work environment and enhance employee satisfaction."]
    ],
    approachItems: [["Strategic Workforce Planning", ""], ["Employee Engagement Initiatives", ""], ["Performance Optimization", ""]],
    whyItems: [
      ["Client Success Stories", "Highlighting specific cases where your solutions improved efficiency or reduced costs for clients."],
      ["Industry Recognition", "Any awards or certifications received for excellence in workforce management solutions."],
      ["Scalability and Impact", "Demonstrating how your solutions have scaled effectively and impacted client organizations positively."]
    ]
  },
  diversity: {
    title: "Diversity and Inclusion Solutions",
    intro:
      "We believe that a diverse and inclusive workforce is key to driving innovation, enhancing collaboration, and achieving business success. Our Diversity and Inclusion Solutions are designed to help organizations build and sustain an inclusive culture where every individual feels valued and empowered.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/dis.jpg",
    sections: ["approach", "processFaq", "why", "offerings"],
    offerTitle: "Our Approach",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Our Approach to Diversity and Inclusion Solutions",
    approachText:
      "At Jscale, we are dedicated to cultivating inclusive workplaces through strategic approaches that foster diversity and promote equity.",
    processTitle: "Enhancing Workplace Diversity and Inclusion",
    processText: "Explore our tailored solutions designed to foster an inclusive workplace culture that values diversity, equity, and belonging.",
    whyTitle: "Our Services Include",
    whyVariant: "dark",
    whyItems: [
      ["Expertise", "Our team includes experienced D&I professionals who bring deep insights and practical strategies to promote inclusivity."],
      ["Customization", "We tailor our solutions to meet the specific needs and goals of your organization, ensuring relevance and impact."],
      ["Commitment", "We are dedicated to fostering genuine and sustainable change, helping organizations build inclusive cultures that drive success."]
    ],
    offerings: [
      ["Diversity Recruitment", "Implementing strategies to attract and hire talent from diverse backgrounds, ensuring a rich mix of perspectives and experiences."],
      ["Inclusive Leadership Training", "Equipping leaders with the knowledge and skills to foster an inclusive workplace, where all team members can thrive and contribute fully."],
      ["Employee Resource Groups (ERGs)", "Supporting the creation and growth of ERGs to provide a platform for underrepresented groups to connect, share experiences, and influence organizational policies."],
      ["Bias Awareness and Mitigation", "Conducting workshops and training sessions to raise awareness about unconscious biases and implement strategies to mitigate their impact on decision-making processes."],
      ["Inclusive Workplace Policies", "Reviewing and advising on policies and practices to ensure they support diversity, equity, and inclusion at all levels of the organization."]
    ],
    approachItems: [["Customized Strategies", "Fall 2023"], ["Training and Education", "Winter 2023"], ["Policy Education", "Winter 2023"]],
    faqs: [
      ["What are Diversity and Inclusion Solutions?", "Diversity and Inclusion Solutions are initiatives and strategies aimed at creating equitable and inclusive workplaces that value and leverage diverse perspectives and talents."],
      ["Who can benefit from Diversity and Inclusion Solutions?", "Organizations of all sizes and industries can benefit from Diversity and Inclusion Solutions to enhance employee engagement, innovation, and organizational performance."],
      ["How can Jscale help with Diversity and Inclusion?", "We offer customized strategies, training, policy development, and ongoing support to help organizations build inclusive cultures that drive success and employee satisfaction."],
      ["What are the benefits of implementing Diversity and Inclusion Solutions?", "Benefits include improved employee morale, enhanced innovation, broader talent acquisition pools, and stronger connections with diverse customer bases."]
    ]
  },
  consulting: {
    title: "Consulting Solutions",
    intro:
      "We provide expert consulting services to help organizations navigate the complexities of today's business environment. Our Consulting Solutions are designed to drive strategic initiatives, optimize processes, and deliver tangible results that align with your business objectives.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/cs.jpg",
    sections: ["approach", "why", "offerings"],
    offerTitle: "Our Offerings",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Leading Consulting Solutions Provider",
    approachText:
      "We pride ourselves on delivering top-tier consulting services that drive transformative outcomes for businesses. Our approach combines deep industry knowledge with tailored strategies to meet your unique challenges and goals effectively.",
    whyTitle: "Our Services Include",
    whyText: "Optimize your workforce with our comprehensive management solutions.",
    whyVariant: "dark",
    whyItems: [
      ["Expertise", "Our consultants bring deep industry knowledge and a proven track record of helping organizations achieve their goals."],
      ["Tailored Solutions", "We understand that each organization is unique. Our solutions are customized to address your specific challenges and opportunities."],
      ["Results-Driven", "We are committed to delivering measurable outcomes and sustainable improvements that drive your business forward."]
    ],
    offerings: [
      ["Strategic Planning", "Assisting organizations in developing and implementing robust strategic plans that drive growth and ensure long-term success."],
      ["Process Optimization", "Identifying inefficiencies and implementing process improvements to enhance productivity, reduce costs, and streamline operations."],
      ["Talent Management", "Developing and executing strategies for attracting, retaining, and developing top talent, ensuring your organization has the human capital needed to thrive."],
      ["Technology Advisory", "Providing expert guidance on leveraging technology to achieve business goals, from IT infrastructure enhancements to adopting innovative solutions."],
      ["Organizational Development", "Facilitating cultural transformations, change management, and leadership development to build a resilient and agile organization."]
    ],
    approachItems: [["Customized Solutions", "Fall 2023"], ["Industry Expertise", "Winter 2023"], ["Implementation Support", "Winter 2023"]],
    faqs: []
  },
  technology: {
    title: "Technology Solutions",
    intro:
      "Jscale understands the pivotal role that technology plays in driving business growth and innovation. Our Technology Solutions are crafted to empower organizations with cutting-edge solutions that enhance efficiency, scalability, and competitive advantage in today's digital landscape.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/ts.jpg",
    sections: ["approach", "offerings"],
    offerTitle: "Our Offerings",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Strategic and Customized Technology Implementation",
    approachText:
      "Our approach to technology solutions is centered around understanding your unique business needs and delivering customized, strategic implementations. We leverage cutting-edge technology and industry expertise to ensure your organization operates at peak efficiency and remains competitive in the ever-evolving technological landscape.",
    offerings: [
      ["IT Staffing and Recruitment", "Connecting businesses with top-tier IT talent across various domains, ensuring a perfect fit for your specific needs and projects."],
      ["Project-Based Solutions", "Delivering tailored project teams equipped with specialized skills to tackle complex IT initiatives, from software development to infrastructure upgrades."],
      ["Digital Transformation", "Guiding organizations through digital transformation journeys by leveraging emerging technologies and best practices to streamline operations and enhance customer experiences."],
      ["Cybersecurity Services", "Implementing robust cybersecurity measures to safeguard your digital assets and protect against evolving threats, ensuring peace of mind and compliance with industry standards."]
    ],
    approachItems: [["Proven Impact", ""], ["Client Satisfaction", ""], ["Industry Recognition", ""]],
    faqs: []
  },
  retention: {
    title: "Retention and Motivation Solutions",
    intro:
      "We recognize that retaining top talent and keeping them motivated are critical factors for organizational success. Our Retention and Motivation Solutions are designed to help businesses create an engaging and fulfilling work environment where employees thrive and contribute their best.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/rms.jpg",
    sections: ["approach", "processFaq", "offerings"],
    offerTitle: "Our Approach",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Tailored Strategies for Employee Engagement",
    approachText:
      "We develop customized retention and motivation strategies aligned with your organization's culture and goals. Our comprehensive approach ensures that specific challenges are addressed, leading to reduced turnover and increased employee satisfaction.",
    processTitle: "FAQs About Retention and Motivation Solutions",
    processText: "Our FAQs section provides answers to common questions about our Retention and Motivation Solutions, helping you understand how we can help improve employee engagement and reduce turnover in your organization.",
    offerings: [
      ["Employee Engagement Strategies", "Implementing tailored strategies to enhance employee satisfaction, loyalty, and commitment to the organization's mission and values."],
      ["Recognition and Rewards Programs", "Designing and implementing effective recognition and rewards programs to celebrate achievements and reinforce desired behaviors."],
      ["Career Development Initiatives", "Providing pathways for career growth and advancement through coaching, training, and development opportunities tailored to individual aspirations."]
    ],
    approachItems: [["Customized Retention Strategies", "Fall 2023"], ["Employee Motivation Programs", "Winter 2023"], ["Leadership Development", "Winter 2023"]],
    faqs: [
      ["What are Retention and Motivation Solutions?", "Retention and Motivation Solutions involve strategies and programs designed to keep employees engaged, satisfied, and committed to the organization, reducing turnover and enhancing productivity."],
      ["How does Jscale's Retention and Motivation approach work?", "We offer customized strategies and programs, including tailored retention plans, motivation initiatives, leadership development, work-life balance support, and continuous feedback mechanisms."],
      ["What are the benefits of implementing Retention and Motivation Solutions?", "Benefits include increased employee engagement, reduced turnover, higher job satisfaction, improved productivity, and a positive workplace culture."],
      ["Who can benefit from Retention and Motivation Solutions?", "Organizations of all sizes and industries seeking to improve employee engagement, reduce turnover, and foster a positive work environment can benefit from these solutions."]
    ]
  },
  organization: {
    title: "Organizational Development Solutions",
    intro:
      "We understand that organizational success hinges on cultivating a dynamic and resilient workforce. Our Organizational Development Solutions are designed to empower businesses to optimize performance, foster innovation, and drive sustainable growth. Whether your organization is navigating change, seeking to enhance leadership capabilities, or striving to build cohesive teams, our tailored solutions can help you achieve your goals.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/ods.jpg",
    sections: ["approach", "processFaq", "offerings"],
    offerTitle: "Our Approach",
    offerEyebrow: "WHAT WE OFFER",
    approachTitle: "Our Achievements in Organizational Development Solutions",
    approachText:
      "Achievements in Organizational Development Solutions highlight our success in fostering organizational effectiveness, employee engagement, and sustainable growth through strategic interventions. These achievements are grounded in proven methodologies and tailored approaches that address the unique needs of each organization, driving measurable improvements in performance and culture.",
    processTitle: "FAQs About Organizational Development Solutions",
    processText: "Explore common questions and answers regarding our Organizational Development Solutions to learn more about how we can help your organization thrive.",
    offerings: [
      ["Change Management", "Guiding organizations through transitions with strategic planning, communication strategies, and employee engagement initiatives to minimize disruption and maximize acceptance."],
      ["Leadership Development", "Equipping current and emerging leaders with the skills and insights needed to inspire, motivate, and lead effectively in today's rapidly evolving business landscape."],
      ["Team Building", "Strengthening team dynamics through targeted workshops, activities, and coaching sessions aimed at improving collaboration, communication, and trust among team members."]
    ],
    approachItems: [["Client Success Stories", "Fall 2023"], ["Customized Solutions", "Winter 2023"], ["Leadership Development", "Winter 2023"]],
    faqs: [
      ["What is Organizational Development (OD)?", "Organizational Development focuses on improving organizational effectiveness and employee well-being through planned interventions in processes, systems, and behaviors."],
      ["How can Organizational Development benefit my company?", "OD initiatives can lead to improved productivity, enhanced employee engagement, better communication, and increased adaptability to change within your organization."],
      ["What types of services are included in Organizational Development Solutions?", "Services typically include leadership development, change management, team building, cultural transformation, performance management, and talent management strategies."],
      ["How do you assess the needs of an organization for OD interventions?", "We conduct comprehensive assessments, including surveys, interviews, and data analysis, to identify strengths, challenges, and opportunities for improvement within your organization."]
    ]
  },
  "training-and-certification": {
    title: "Training and Certifications",
    intro:
      "Elevate your skills and credentials with our targeted training programs. We are dedicated to providing high-quality training and certification solutions that empower individuals and businesses to achieve their full potential.",
    heroImage: "/assets/jscale-media/en/assets/images/solutions/tcs.jpg",
    sections: ["approach", "processFaq", "offerings"],
    offerTitle: "Training and Certification Solutions",
    offerEyebrow: "Special Features",
    approachTitle: "Our Approach to Training and Certification Solutionst",
    approachText:
      "Our Approach to Training and Certification Solutions At Jscale, we are committed to providing comprehensive Training and Certification Solutions tailored to meet the evolving needs of professionals in the IT industry. Our approach emphasizes:",
    processTitle: "FAQs about Training and Certification Solutions",
    processText: "Here are some frequently asked questions about our Training and Certification Solutions.",
    offerings: [
      ["Leadership Training", "Develop essential leadership skills. Enhance your ability to manage and inspire teams effectively."],
      ["Technical Skill Enhancement", "Stay updated with the latest industry trends and technologies. Gain practical knowledge through hands-on training sessions."],
      ["Soft Skills Workshops", "Improve communication, teamwork, and problem-solving abilities. Build a well-rounded skill set to excel in any professional environment."]
    ],
    approachItems: [["Customized Learning Path", "Fall 2023"], ["Expert Instruction", "Winter 2023"], ["Flexible Learning Options", "Winter 2023"]],
    faqs: [
      ["What training programs do you offer??", "Training programs are available both online and in-person, providing flexibility to accommodate different learning preferences and schedules."],
      ["How are the training programs delivered?", "Training programs are available both online and in-person, providing flexibility to accommodate different learning preferences and schedules."],
      ["What certifications do your courses prepare for?", "Our courses are designed to prepare participants for industry-recognized certifications such as (mention specific certifications if applicable)."],
      ["What support is available after completing a course?", "We provide ongoing support, including access to resources and updates, to help participants maintain and advance their skills in the IT field."]
    ]
  }
};

function makeNavItems(currentHref) {
  return [
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
      href: currentHref,
      current: true,
      children: solutionLinks.map(([label, href]) => ({ label, href }))
    },
    { label: "Blog", href: "/blogs/blog" },
    { label: "Contact", href: "/contact/contact-us" },
    { label: "Talent Talks", href: "#talent-talks" }
  ];
}

function Header({ mobileOpen, setMobileOpen, navItems }) {
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
          <button aria-controls="solution-mobile-menu" aria-expanded={mobileOpen} aria-label="Open mobile menu" className={shared.mobileToggle} type="button" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen, navItems }) {
  return (
    <div className={cx(shared.mobileMenu, mobileOpen && shared.mobileMenuOpen)} id="solution-mobile-menu" aria-hidden={!mobileOpen}>
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

function Hero({ data }) {
  return (
    <section className={styles.hero} data-talent-reveal style={{ "--hero-image": `url("${data.heroImage || "/assets/jscale-media/en/assets/images/banner/banner-1.jpg"}")` }}>
      <div className={styles.heroPattern} />
      <div className={shared.autoContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
            <div className={styles.heroActions}>
              <a className={shared.themeBtn} href="/jobs/job-list">Find Works <ArrowRight size={18} /></a>
              <a className={styles.secondaryBtn} href="/company/auth/sign-in.php">Hire Talents Now</a>
            </div>
          </div>
          <div className={styles.heroMedia} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Offerings({ data }) {
  return (
    <section className={styles.offerSection} id="offerings">
      <div className={shared.autoContainer}>
        <div className={styles.sectionTitle} data-talent-reveal>
          <span>{data.offerEyebrow || "WHAT WE OFFER"}</span>
          <h2>{data.offerTitle}</h2>
        </div>
        <div className={styles.offerGrid}>
          {data.offerings.map(([title, text], index) => {
            const Icon = iconSet[index % iconSet.length];
            return (
              <article className={styles.offerCard} data-talent-reveal key={title} style={{ "--reveal-delay": `${index * 80}ms` }}>
                <span className={styles.offerIcon}><Icon size={36} strokeWidth={1.7} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyCards({ data }) {
  return (
    <section className={cx(styles.offerSection, data.whyVariant === "dark" && styles.whyDarkSection)}>
      <div className={shared.autoContainer}>
        <div className={styles.sectionTitle} data-talent-reveal>
          <span>WHY US</span>
          <h2>{data.whyTitle}</h2>
          {data.whyText ? <p className={styles.sectionText}>{data.whyText}</p> : null}
        </div>
        <div className={styles.offerGrid}>
          {(data.whyItems || []).map(([title, text], index) => {
            const Icon = iconSet[(index + 4) % iconSet.length];
            return (
              <article className={styles.offerCard} data-talent-reveal key={title} style={{ "--reveal-delay": `${index * 80}ms` }}>
                <span className={styles.offerIcon}><Icon size={36} strokeWidth={1.7} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Approach({ data }) {
  return (
    <section className={styles.approachSection}>
      <div className={shared.autoContainer}>
        <div className={styles.approachGrid}>
          <div className={styles.imageMosaic} data-talent-reveal>
            {["about-3.jpg", "about-4.jpg", "about-5.jpg", "about-6.jpg"].map((image, index) => (
              <figure className={styles[["imageOne", "imageTwo", "imageThree", "imageFour"][index]]} key={image}>
                <img src={`/assets/jscale-media/en/assets/images/resource/${image}`} alt="" />
              </figure>
            ))}
            <div className={styles.supportBox}>
              <span className={styles.supportIcon}><PhoneCall size={24} /></span>
              <span>Online Support</span>
              <a href="tel:+13073022460">+1 (307) 302-2460</a>
            </div>
          </div>
          <div className={styles.approachCopy} data-talent-reveal>
            <span className={styles.subTitle}>Our Approach</span>
            <h2>{data.approachTitle}</h2>
            <p>{data.approachText}</p>
            <div className={styles.timeline}>
              {data.approachItems.map(([title, date], index) => {
                const Icon = iconSet[(index + 3) % iconSet.length];
                return (
                  <article className={styles.timelineItem} key={title}>
                    <span><Icon size={20} /></span>
                    <div>
                      <h3>{title}</h3>
                      {date ? <p>{date}</p> : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = data.faqs?.length ? data.faqs : data.offerings;
  return (
    <section className={styles.processSection}>
      <div className={shared.autoContainer}>
        <div className={styles.processGrid}>
          <div className={styles.processCopy} data-talent-reveal>
            <span className={styles.subTitle}>The Process</span>
            <h2>{data.processTitle}</h2>
            <p>{data.processText}</p>
            <ul>
              {data.approachItems.map(([item]) => (
                <li key={item}><CheckCircle2 size={20} /> {item}</li>
              ))}
            </ul>
          </div>
          <div data-talent-reveal>
            <span className={styles.subTitle}>General Faqs</span>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.accordion}>
              {faqs.map(([question, answer], index) => (
                <article className={cx(styles.faqItem, openIndex === index && styles.faqOpen)} key={question}>
                  <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                    <span><MessageCircleQuestion size={18} /></span>
                    {question}
                  </button>
                  <div className={styles.faqAnswer}><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSections({ data }) {
  const sections = data.sections || ["offerings", "approach", "processFaq"];

  return sections.map((section) => {
    if (section === "offerings") return <Offerings data={data} key={section} />;
    if (section === "approach") return <Approach data={data} key={section} />;
    if (section === "why") return <WhyCards data={data} key={section} />;
    if (section === "processFaq") return <ProcessFaq data={data} key={section} />;
    return null;
  });
}

function Subscribe() {
  return (
    <SubscribeBox
      styles={shared}
      source="solution-page"
      idPrefix="solution-subscribe"
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

export default function SolutionDetailPage({ params }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const slug = decodeURIComponent(params.slug || "").toLowerCase();
  const data = solutionData[slug] || solutionData["career-development"];
  const currentHref = `/solutions/${params.slug}`;
  const navItems = makeNavItems(currentHref);

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
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} navItems={navItems} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} navItems={navItems} />
      <Hero data={data} />
      <SolutionSections data={data} />
      <Subscribe />
      <Footer />
      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}
