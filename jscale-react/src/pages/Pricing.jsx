import { Link } from 'react-router-dom'
import { PageHero, Reveal, CTASection } from '../components/UI'
import { useCart } from '../context/CartContext'

// ===== INTERVIEW PLANS DATA =====
const interviewPlans = [
  {
    id: 'interview-basic', name: 'Basic Plan', tagline: 'Perfect for starting your job search journey',
    price: 2500, placementFee: 15, badge: null,
    features: ['One-on-One Enrollment Consultation', '10 Curated Interview Opportunities', '2 Complimentary Proxy Interviews', 'Resume Optimization Services', 'LinkedIn Profile Review & Enhancement', 'Weekly Job Market Insights'],
  },
  {
    id: 'interview-standard', name: 'Standard Plan', tagline: 'Comprehensive career advancement',
    price: 3500, placementFee: 12, badge: 'Recommended', badgeClass: 'badge-recommended',
    features: ['15 Interview Opportunities', '2 Complimentary Proxy Interviews', 'In-Depth Training Modules', 'Personalized Resume & Cover Letter Rebuild', 'Mock Interviews with Detailed Feedback', 'Exclusive Access to Recruiter Network'],
  },
  {
    id: 'interview-advanced', name: 'Advanced Plan', tagline: 'Intensive interview-focused program',
    price: 4000, placementFee: 12, badge: null,
    features: ['18 Interview Opportunities', 'Unlimited Proxy Interviews & Assessments', 'Intensive Interview Coaching', 'Personalized Interview Strategy Plan', 'Real-Time Role Play Sessions with Experts', 'Advanced LinkedIn Profile Optimization'],
  },
  {
    id: 'interview-premium', name: 'Premium Plan', tagline: 'Full-suite career launch experience',
    price: 5000, placementFee: 10, badge: 'VIP', badgeClass: 'badge-vip',
    features: ['22 Interview Opportunities', 'Unlimited Proxy & Interview Support', '1-Month Technical Training', 'Lifetime Resume Storage & Updates', 'Unlimited Mock Interviews', '24/7 Access to Career Strategy Portal'],
  },
]

const campaigns = [
  { id: 'campaign-60', icon: '📬', name: 'Apply Only 60', price: 350, desc: 'Campaign — 30 applications/day for 60 days.', features: ['30 job applications per day', '60-day campaign duration', 'No success fee — flat rate only'] },
  { id: 'campaign-30', icon: '📋', name: 'Apply Only 30', price: 200, desc: 'Campaign — 30 applications/day for 30 days.', features: ['30 job applications per day', '30-day campaign duration', 'No success fee — flat rate only'] },
]

const addons = [
  { id: 'addon-resume', icon: '📄', name: 'Resume Studio', price: 100, unit: 'one-time', desc: 'ATS-Smart résumé — built to pass recruiters & job portals.', features: ['ATS-friendly resume creation or revamp', 'Role-specific keywords & clean formatting', 'Ideal for freshers, switchers & experienced professionals'] },
  { id: 'addon-coaching', icon: '💬', name: 'Career Coaching', price: 50, unit: 'per hour', desc: '1:1 Expert — 60-minute session with a career specialist.', features: ['60-minute 1:1 session', 'Interview prep, strategy & feedback', 'Customized to your career goals'] },
]

// ===== MAIN PAGE =====
export default function Pricing() {
  const { addItem } = useCart()

  const cartAdd = (item) => addItem({ id: item.id, name: item.name, price: item.price, type: item.type || 'Plan', desc: item.desc || item.tagline || '' })

  return (
    <>
      <PageHero badge="Plans & Pricing" title='Invest in Your <span class="gradient-text">Future</span>' subtitle="Choose the plan that matches your career goals — from daily applications to guaranteed interview opportunities." />

      {/* ===== INTERVIEW-BASED PLANS ===== */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal><div className="section-header">
            <span className="section-label">Interview-Based Plans</span>
            <h2 className="section-title">Interview <span className="gradient-text">Packages</span></h2>
            <p className="section-subtitle">Guaranteed interview opportunities with coaching, proxy support, and career strategy — choose by interview count.</p>
          </div></Reveal>
          <div className="interview-grid">
            {interviewPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i + 1}>
                <div className={`glass-card interview-card ${plan.badge ? 'interview-featured' : ''}`}>
                  {plan.badge && <div className={`interview-badge ${plan.badgeClass || ''}`}>{plan.badge}</div>}
                  <div className="interview-name">{plan.name}</div>
                  <div className="interview-tagline">{plan.tagline}</div>
                  <div className="interview-price">${plan.price.toLocaleString()}</div>
                  <div className="interview-fee-label">Enrollment Fee</div>
                  <div className="interview-placement">+ {plan.placementFee}% Placement Fee</div>
                  <ul className="interview-features">
                    {plan.features.map((f, j) => <li key={j}><span className="iv-check">✓</span>{f}</li>)}
                  </ul>
                  <div className="pricing-actions">
                    <button className="btn btn-cart" onClick={() => cartAdd({ ...plan, type: 'Interview Plan' })}>
                      <span>🛒 Add to Cart</span>
                    </button>
                    <Link to="/cart" className={`btn btn-enroll ${plan.badge ? 'btn-enroll-featured' : ''}`} onClick={() => cartAdd({ ...plan, type: 'Interview Plan' })}>
                      <span>📋 Enroll Now</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLACEMENT TRACKS ===== */}
      <section className="section pricing-section">
        <div className="container">
          <Reveal><div className="section-header">
            <span className="section-label">Apply-Based Tracks</span>
            <h2 className="section-title">Placement <span className="gradient-text">Tracks</span></h2>
            <p className="section-subtitle">We apply to jobs on your behalf daily until you're placed. Success fee only after you land the job.</p>
          </div></Reveal>
          <div className="pricing-grid">
            {[
              { id: 'track-prime', tier: 1, name: 'Prime', price: '500', priceNum: 500, desc: 'Structured placement track — we apply strategically until you get hired.', features: ['30 targeted job applications per day', 'Dedicated placement strategist', 'Résumé tailored per application', 'Weekly progress reports & insights', 'Success Fee: 11% after placement'] },
              { id: 'track-prime-plus', tier: 2, name: 'Prime Plus', price: '1,000', priceNum: 1000, featured: true, desc: 'Turbo Apply — double the volume, wider reach, more interviews.', features: ['60 targeted job applications per day', 'Multi-platform reach & recruiter outreach', 'Full placement track support', 'Priority processing & fast turnaround', 'Success Fee: 11% after placement'] },
              { id: 'track-ultra', tier: 3, name: 'Ultra Prime', price: '5,000', priceNum: 5000, desc: 'White-glove, end-to-end career transformation — profile to offer letter.', features: ['Complete apply-to-offer support', 'Assessment & interview preparation', 'Full résumé + LinkedIn + strategy', 'Dedicated career strategist assigned', 'Success Fee: 11% after placement'] },
            ].map(t => (
              <Reveal key={t.id} delay={t.tier}>
                <div className={`glass-card pricing-card glow-border ${t.featured ? 'featured' : ''}`}>
                  <div className="pricing-tier">Track {String(t.tier).padStart(2, '0')}</div>
                  <div className="pricing-name">{t.name}</div>
                  <div className="pricing-price"><span className="dollar">$</span>{t.price}</div>
                  <div className="pricing-desc">{t.desc}</div>
                  <ul className="pricing-features">{t.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                  <div className="pricing-actions">
                    <button className="btn btn-cart" onClick={() => cartAdd({ id: t.id, name: t.name, price: t.priceNum, type: 'Placement Track', desc: t.desc })}>
                      <span>🛒 Add to Cart</span>
                    </button>
                    <Link to="/cart" className={`btn ${t.featured ? 'btn-primary' : 'btn-enroll'}`} onClick={() => cartAdd({ id: t.id, name: t.name, price: t.priceNum, type: 'Placement Track', desc: t.desc })}>
                      <span>📋 Enroll Now</span>{t.featured && <span className="btn-arrow">→</span>}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><div className="success-note"><div className="success-note-inner"><span className="sn-icon">🛡️</span> All placement tracks include a <span>success fee</span> — charged only after you receive an offer.</div></div></Reveal>
        </div>
      </section>

      {/* ===== CAMPAIGNS ===== */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal><div className="section-header"><span className="section-label">Budget Options</span><h2 className="section-title">Apply Only — <span className="gradient-text">Campaigns</span></h2><p className="section-subtitle">No success fee. No assessments or proxy. Pure application firepower.</p></div></Reveal>
          <div className="campaigns-grid">
            {campaigns.map((c, i) => (
              <Reveal key={c.id} delay={i + 1}>
                <div className="glass-card campaign-card">
                  <div className="no-fee-badge">No success fee</div>
                  <div className="cc-header"><span className="cc-icon">{c.icon}</span><span className="cc-name">{c.name}</span></div>
                  <div className="cc-price">${c.price}</div>
                  <div className="cc-desc">{c.desc}</div>
                  <ul className="cc-features">{c.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
                  <div className="pricing-actions">
                    <button className="btn btn-cart" onClick={() => cartAdd({ ...c, type: 'Campaign' })}><span>🛒 Add to Cart</span></button>
                    <Link to="/cart" className="btn btn-enroll" onClick={() => cartAdd({ ...c, type: 'Campaign' })}><span>📋 Enroll Now</span></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ADD-ONS */}
          <Reveal><div className="addons-header"><h3><span className="gradient-text">Add-ons</span></h3><p>Standalone services you can purchase individually or combine with any plan.</p></div></Reveal>
          <div className="addons-grid">
            {addons.map((a, i) => (
              <Reveal key={a.id} delay={i + 1}>
                <div className="glass-card addon-card">
                  <div className="ao-header"><span className="ao-icon">{a.icon}</span><span className="ao-name">{a.name}</span></div>
                  <div className="ao-price">${a.price} <span>{a.unit}</span></div>
                  <div className="ao-desc">{a.desc}</div>
                  <ul className="ao-features">{a.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
                  <button className="btn btn-cart" style={{ width: '100%', marginTop: 16 }} onClick={() => cartAdd({ ...a, type: 'Add-on' })}><span>🛒 Add to Cart</span></button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title='Not Sure Which Plan <span class="gradient-text">Is Right?</span>' subtitle="Book a free consultation and we'll recommend the perfect plan for your situation." primaryText="Book Free Call" secondaryText="Read FAQ" secondaryLink="/faq" />
    </>
  )
}
