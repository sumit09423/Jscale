import { useState } from 'react'
import { PageHero, Reveal } from '../components/UI'

const serviceOptions = [
  'Select a service...', 'Precision Job Marketing', 'ATS-Smart Résumé', 'LinkedIn Optimization',
  'Certification Fast-Track', 'Assessment Support', 'Prime Track ($500)', 'Prime Plus Track ($1,000)',
  'Ultra Prime Track ($5,000)', 'Apply Only 60 ($350)', 'Apply Only 30 ($200)', 'Resume Studio ($100)', 'Career Coaching ($50/hr)'
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset() }, 2000)
  }

  return (
    <>
      <PageHero badge="Let's Talk" title='Get in <span class="gradient-text">Touch</span>' subtitle="Ready to accelerate your career? Reach out and we'll build your personalized strategy." />

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal>
            <div className="contact-grid">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your full name" required /></div>
                  <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@email.com" required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+91 98765 43210" /></div>
                  <div className="form-group"><label>Service Interested In</label>
                    <select>{serviceOptions.map((o, i) => <option key={i}>{o}</option>)}</select>
                  </div>
                </div>
                <div className="form-group"><label>Tell Us About Your Situation</label><textarea placeholder="Current role, years of experience, target roles, challenges you're facing..." /></div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>{submitted ? '✓ Sent!' : 'Submit Inquiry'}</span>
                  {!submitted && <span className="btn-arrow">→</span>}
                </button>
              </form>
              <div className="contact-info">
                <div className="contact-item"><div className="ci-icon">📧</div><div><h4>Email Us</h4><p>support@jscale.com</p></div></div>
                <div className="contact-item"><div className="ci-icon">📞</div><div><h4>Call Us</h4><p>+91 82336 33213</p></div></div>
                <div className="contact-item"><div className="ci-icon">🕒</div><div><h4>Working Hours</h4><p>Monday – Saturday, 9 AM – 8 PM (EST)</p></div></div>
                <div className="contact-item"><div className="ci-icon">📍</div><div><h4>Our Reach</h4><p>Serving candidates globally, with a focus on India, US, and Middle East markets.</p></div></div>
                <button className="whatsapp-btn" onClick={() => window.open('https://wa.me/918233633213', '_blank')}>💬 Chat on WhatsApp</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
