import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useCounter, useScrollProgress } from '../hooks/useAnimations'

// Preloader
export function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => { const t = setTimeout(() => setDone(true), 1600); return () => clearTimeout(t) }, [])
  return (
    <div className={`preloader ${done ? 'done' : ''}`} id="preloader">
      <div className="preloader-inner">
        <div className="preloader-logo">J<span>Scale</span></div>
        <div className="preloader-bar"><div className="preloader-bar-fill"></div></div>
      </div>
    </div>
  )
}

// Scroll Progress Bar
export function ScrollProgressBar() {
  const progress = useScrollProgress()
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
}

// Page Hero (for inner pages)
export function PageHero({ badge, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-badge">{badge}</div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

// Reveal wrapper
export function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useReveal()
  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'scale' ? 'reveal-scale' : 'reveal'
  const staggerClass = delay ? `stagger-${delay}` : ''
  return (
    <div ref={ref} className={`${dirClass} ${staggerClass} ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

// Stat Counter Item
export function StatItem({ count, label, color, width, delay = 0 }) {
  const isPercent = label.includes('%')
  const [ref, display] = useCounter(count, 2200, isPercent)
  const [barVisible, setBarVisible] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setBarVisible(true); obs.unobserve(el) }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`stat-item reveal visible stagger-${delay}`} ref={ref}>
      <div className="stat-num">{display}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar" ref={barRef}>
        <div className="stat-bar-fill" style={{ background: color, width: barVisible ? width : '0%' }} />
      </div>
    </div>
  )
}

// CTA Section
export function CTASection({ title, subtitle, primaryText = 'Start Now', primaryLink = '/contact', secondaryText, secondaryLink }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal direction="scale">
          <div className="cta-inner">
            <div className="cta-floating-icons">
              <span className="cta-fi">📄</span><span className="cta-fi">💼</span>
              <span className="cta-fi">🎯</span><span className="cta-fi">🏆</span><span className="cta-fi">🚀</span>
            </div>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p>{subtitle}</p>
            <div className="cta-actions">
              <Link to={primaryLink} className="btn btn-primary btn-glow">
                <span>{primaryText}</span><span className="btn-arrow">→</span>
              </Link>
              {secondaryText && (
                <Link to={secondaryLink || '/contact'} className="btn btn-secondary">{secondaryText}</Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Service Card
export function ServiceCard({ icon, title, features, delay = 1 }) {
  const cardRef = useRef(null)
  const handleMouseMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect()
    if (!r) return
    cardRef.current.style.setProperty('--glow-x', ((e.clientX - r.left) / r.width * 100) + '%')
    cardRef.current.style.setProperty('--glow-y', ((e.clientY - r.top) / r.height * 100) + '%')
  }

  return (
    <Reveal delay={delay}>
      <div className="glass-card service-card glow-border" ref={cardRef} onMouseMove={handleMouseMove}>
        <div className="card-accent" />
        <div className="card-glow" />
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <ul>{features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        <Link to="/contact" className="btn btn-secondary btn-sm">Explore →</Link>
      </div>
    </Reveal>
  )
}

// Testimonial Card
export function TestimonialCard({ name, role, review, initials, gradient, delay = 1 }) {
  return (
    <Reveal delay={delay}>
      <div className="glass-card testimonial-card">
        <div className="t-quote">"</div>
        <div className="stars">★★★★★</div>
        <div className="review">{review}</div>
        <div className="reviewer">
          <div className="reviewer-avatar" style={{ background: gradient }}>{initials}</div>
          <div className="reviewer-info">
            <div className="r-name">{name}</div>
            <div className="r-role">{role}</div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

// Candidate Card
export function CandidateCard({ name, role, company, tags, outcome, initials, gradient, delay = 1 }) {
  return (
    <Reveal delay={delay}>
      <div className="glass-card candidate-card">
        <div className="c-header">
          <div className="c-avatar" style={{ background: gradient }}>{initials}</div>
          <div><div className="c-name">{name}</div><div className="c-role">{role}</div></div>
        </div>
        <div className="c-company">{company}</div>
        <div className="c-tags">{tags.map((t, i) => <span key={i}>{t}</span>)}</div>
        <div className="c-outcome">✦ {outcome}</div>
      </div>
    </Reveal>
  )
}
