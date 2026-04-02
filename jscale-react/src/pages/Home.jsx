import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useParticleCanvas, useCounter } from '../hooks/useAnimations'
import { Reveal, StatItem } from '../components/UI'

function HeroMetric({ count, label }) {
  const isP = label.includes('%')
  const [ref, display] = useCounter(count, 2200, isP)
  return (
    <div className="hero-metric" ref={ref}>
      <div className="hm-num">{display}</div>
      <div className="hm-label">{label}</div>
    </div>
  )
}

export default function Home() {
  const canvasRef = useRef(null)
  useParticleCanvas(canvasRef)

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <canvas ref={canvasRef} id="heroCanvas" />
        <div className="hero-grid-bg" />
        <div className="hero-visual">
          <div className="hero-orb-container">
            <div className="hero-orb" /><div className="hero-rings" /><div className="hero-rings" /><div className="hero-rings" />
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><span className="pulse" /> JScale Career Growth Engine</div>
            <h1>From Résumé to<br /><em><span className="highlight-text">Offer Letter</span></em></h1>
            <p className="hero-sub">Not getting interview calls? Your résumé and job strategy matter more than you think. <strong>We help you stand out, get noticed, and get hired</strong> — with precision job marketing and end-to-end placement support.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-glow"><span>Get Started</span><span className="btn-arrow">→</span></Link>
              <Link to="/contact" className="btn btn-secondary">Book Free Consultation</Link>
            </div>
            <div className="hero-metrics">
              <HeroMetric count={2500} label="Profiles Optimized" />
              <HeroMetric count={1200} label="Interviews Generated" />
              <HeroMetric count={94} label="Client Satisfaction %" />
            </div>
          </div>
        </div>
      </section>

      {/* RIBBON */}
      <div className="ribbon"><div className="ribbon-track">
        {['Job Marketing', 'ATS-Smart Résumé', 'LinkedIn Optimization', 'Certification Fast-Track', 'Assessment Preparation', 'Live Project Assistance', 'Interview Coaching', 'Placement Support'].map((item, i) => (
          <span className="ribbon-item" key={`a${i}`}><span className="ri-dot" style={{ background: ['var(--accent)', 'var(--hot)', 'var(--teal)', 'var(--gold)'][i % 4] }} />{item}</span>
        ))}
        {['Job Marketing', 'ATS-Smart Résumé', 'LinkedIn Optimization', 'Certification Fast-Track', 'Assessment Preparation', 'Live Project Assistance', 'Interview Coaching', 'Placement Support'].map((item, i) => (
          <span className="ribbon-item" key={`b${i}`}><span className="ri-dot" style={{ background: ['var(--accent)', 'var(--hot)', 'var(--teal)', 'var(--gold)'][i % 4] }} />{item}</span>
        ))}
      </div></div>

      {/* WHY CHOOSE */}
      <section className="section" id="why">
        <div className="container">
          <Reveal><div className="section-header"><span className="section-label">The JScale Advantage</span><h2 className="section-title">Why Professionals <span className="gradient-text">Choose Us</span></h2></div></Reveal>
          <div className="why-grid">
            {[
              { icon: '🔄', title: 'End-to-End Partnership', desc: 'From the first consultation to your offer letter — we walk with you through every step, removing guesswork from your career journey.' },
              { icon: '👨‍💼', title: 'Industry Veterans', desc: 'Our team includes former recruiters, HR leaders, and tech professionals who understand exactly what hiring managers are looking for.' },
              { icon: '📈', title: 'High Conversion Rate', desc: 'Our optimized application strategy delivers significantly more interview callbacks than traditional job-hunting approaches.' },
              { icon: '🧩', title: 'Personalized Approach', desc: 'No two candidates are alike. Every strategy we build is custom-tailored to your experience, target roles, and career goals.' },
              { icon: '⚡', title: 'Rapid Execution', desc: 'We move fast — daily applications, 48-hour résumé turnaround, and immediate placement efforts from day one.' },
              { icon: '🎯', title: 'Aligned Incentives', desc: 'Our success fee model means we only profit when you do. Your placement is our priority — not just a promise.' },
            ].map((card, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="why-card"><div className="why-icon">{card.icon}</div><h3>{card.title}</h3><p>{card.desc}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section stats-section" id="stats">
        <div className="mesh-line" style={{ top: 0 }} /><div className="mesh-line" style={{ bottom: 0 }} />
        <div className="container">
          <div className="stats-grid">
            <StatItem count={2500} label="Profiles Improved" color="var(--accent)" width="92%" delay={1} />
            <StatItem count={1200} label="Interviews Generated" color="var(--hot)" width="78%" delay={2} />
            <StatItem count={680} label="Placements Achieved" color="var(--teal)" width="65%" delay={3} />
            <StatItem count={94} label="Client Satisfaction %" color="var(--gold)" width="94%" delay={4} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section"><div className="container"><Reveal direction="scale"><div className="cta-inner">
        <div className="cta-floating-icons"><span className="cta-fi">📄</span><span className="cta-fi">💼</span><span className="cta-fi">🎯</span><span className="cta-fi">🏆</span><span className="cta-fi">🚀</span></div>
        <span className="section-label" style={{ justifyContent: 'center' }}>Take the First Step</span>
        <h2>Ready to Get Your <span className="gradient-text">Offer Letter?</span></h2>
        <p>Stop waiting for opportunities. Start creating them. Begin your career transformation with JScale today.</p>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary btn-glow"><span>Start Now</span><span className="btn-arrow">→</span></Link>
          <Link to="/contact" className="btn btn-secondary">Book a Free Call</Link>
        </div>
      </div></Reveal></div></section>
    </>
  )
}
