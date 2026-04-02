import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  { icon: '📞', title: 'Free Consultation', desc: 'A one-on-one strategy call to understand your career goals, experience level, and current challenges.', tag: '30-min call · No commitment', tagColor: 'var(--teal2)' },
  { icon: '🔍', title: 'Profile Deep-Dive', desc: 'Comprehensive audit of your résumé, LinkedIn profile, skills positioning, and job search strategy.', tag: 'Detailed audit report', tagColor: 'var(--accent)' },
  { icon: '✨', title: 'Résumé & LinkedIn Transformation', desc: 'ATS-optimized résumé creation with strategic keywords and a complete LinkedIn profile overhaul.', tag: 'Tailored per application', tagColor: 'var(--hot)' },
  { icon: '🚀', title: 'Daily Job Marketing', desc: '30–60 targeted applications daily with optimized cover letters and strategic recruiter outreach.', tag: '30–60 applications/day', tagColor: 'var(--gold)' },
  { icon: '🎯', title: 'Interview & Placement', desc: 'Mock interviews, assessment coaching, salary negotiation — we support you until you sign the offer.', tag: "Until you're placed", tagColor: 'var(--teal2)' },
]

function CareerStep({ step, index, isVisible }) {
  const num = index + 1
  return (
    <div className={`cp-step ${isVisible ? 'visible' : ''}`} data-step={num}>
      <div className="cp-content">
        <h4>{step.title}</h4>
        <p>{step.desc}</p>
      </div>
      <div className="cp-node-wrap">
        <div className="cp-node">
          <div className="cp-node-bg" />
          <div className="cp-node-ring" />
          <div className="cp-node-ring-2" />
          <span className="cp-node-icon">{step.icon}</span>
          <span className="cp-node-num">{num}</span>
        </div>
      </div>
      <div className="cp-detail">
        <span className="cp-tag">
          <span className="cp-tag-dot" style={{ background: step.tagColor }} />
          {step.tag}
        </span>
      </div>
    </div>
  )
}

export default function CareerPath() {
  const [visibleSteps, setVisibleSteps] = useState(new Set())
  const [destVisible, setDestVisible] = useState(false)
  const stepsRef = useRef([])
  const destRef = useRef(null)
  const lineProgress = visibleSteps.size / steps.length * 100

  useEffect(() => {
    const observers = []
    stepsRef.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleSteps(prev => new Set([...prev, i]))
          }, (i + 1) * 220)
          obs.unobserve(el)
        }
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })
      obs.observe(el)
      observers.push(obs)
    })

    if (destRef.current) {
      const dObs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setDestVisible(true); dObs.unobserve(e.target) }
      }, { threshold: 0.3 })
      dObs.observe(destRef.current)
      observers.push(dObs)
    }

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="career-path-wrapper">
      <div className="cp-ambient">
        <div className="glow glow-1" /><div className="glow glow-2" />
      </div>
      <div className="cp-particles">
        {[...Array(6)].map((_, i) => <div key={i} className="cp-particle" />)}
      </div>
      <div className="cp-line">
        <div className="cp-line-bg" />
        <div className={`cp-line-fill ${visibleSteps.size > 0 ? 'animated' : ''}`} style={{ height: `${lineProgress}%` }} />
        <div className="cp-line-pulse" />
      </div>
      <div className="cp-steps">
        {steps.map((step, i) => (
          <div key={i} ref={el => stepsRef.current[i] = el}>
            <CareerStep step={step} index={i} isVisible={visibleSteps.has(i)} />
          </div>
        ))}
      </div>
      <div ref={destRef} className={`cp-destination ${destVisible ? 'visible' : ''}`}>
        <div className="cp-dest-card">
          <div className="cp-dest-icon">🏆</div>
          <h3>Offer Letter Received!</h3>
          <p>Your new chapter starts here.</p>
          <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 12, position: 'relative', zIndex: 2 }}>
            <span>Start Your Journey</span><span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
