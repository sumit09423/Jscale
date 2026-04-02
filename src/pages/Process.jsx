import { useState, useEffect, useRef } from 'react'
import { PageHero, Reveal, CTASection } from '../components/UI'
import CareerPath from '../components/CareerPath'

function LinkedInBar({ label, fill, gradient, value }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } }, { threshold: 0.3 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div className="li-metric" ref={ref}>
      <span className="li-label">{label}</span>
      <div className="li-bar"><div className="li-bar-fill" style={{ width: visible ? fill : '0%', background: gradient }} /></div>
      <span className="li-val">{value}</span>
    </div>
  )
}

export default function Process() {
  return (
    <>
      <PageHero badge="Your Journey" title='Your Career <span class="gradient-text">Path</span>' subtitle="A proven step-by-step process that transforms job seekers into placed professionals." />

      <section className="section"><div className="container"><CareerPath /></div></section>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal><div className="section-header"><span className="section-label">The Difference</span><h2 className="section-title">Before vs After <span className="gradient-text">JScale</span></h2></div></Reveal>
          <Reveal>
            <div className="ba-container">
              <div className="ba-card before"><h3>⚠️ Before JScale</h3><ul>
                <li>Generic one-size-fits-all résumé with no targeting</li><li>Zero or minimal interview callbacks</li><li>No ATS keyword optimization</li><li>Unfocused, scattershot job applications</li><li>Weak or incomplete LinkedIn presence</li><li>No career strategy or professional direction</li>
              </ul></div>
              <div className="ba-arrow">→</div>
              <div className="ba-card after"><h3>✅ After JScale</h3><ul>
                <li>ATS-optimized résumé tailored per application</li><li>Multiple interview calls every week</li><li>Keyword-rich, recruiter-friendly formatting</li><li>Targeted daily applications to matching roles</li><li>Professional LinkedIn driving inbound interest</li><li>Clear roadmap with dedicated career support</li>
              </ul></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="linkedin-grid">
            <Reveal direction="left">
              <span className="section-label">LinkedIn Optimization</span>
              <h2 className="section-title" style={{ marginTop: 8 }}>Your LinkedIn, <span className="gradient-text">Supercharged</span></h2>
              <p className="section-subtitle" style={{ marginTop: 18, marginBottom: 28 }}>We transform your LinkedIn profile into a recruiter magnet — optimized headline, compelling summary, keyword-rich experience sections, and an engagement strategy that gets you found.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Headline & summary rewrite for target roles', 'Skills & endorsements optimization', 'Keyword strategy for LinkedIn search visibility', 'Content & engagement tips for recruiter attention'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '.92rem' }}><span style={{ color: 'var(--teal2)', fontSize: '1.1rem' }}>✓</span> {item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="right">
              <div className="linkedin-visual">
                <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: 22, fontSize: '1rem', fontWeight: 700 }}>Typical Client Improvement</h4>
                <LinkedInBar label="Profile Views" fill="85%" gradient="linear-gradient(90deg,var(--accent),var(--hot))" value="+340%" />
                <LinkedInBar label="Search Appearances" fill="72%" gradient="linear-gradient(90deg,var(--accent),var(--teal))" value="+280%" />
                <LinkedInBar label="Recruiter Messages" fill="65%" gradient="linear-gradient(90deg,var(--teal),var(--gold))" value="+200%" />
                <LinkedInBar label="Connection Rate" fill="90%" gradient="linear-gradient(90deg,var(--gold),var(--hot))" value="+420%" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection title='Ready to Start Your <span class="gradient-text">Journey?</span>' subtitle="Book a free consultation and let's build your career strategy together." secondaryText="View Pricing" secondaryLink="/pricing" />
    </>
  )
}
