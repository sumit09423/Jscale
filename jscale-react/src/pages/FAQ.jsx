import { useState } from 'react'
import { PageHero, Reveal, CTASection } from '../components/UI'
import { faqs } from '../data/constants'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen(!open)}>
        {question}
        <span className="icon">+</span>
      </div>
      <div className="faq-a"><p>{answer}</p></div>
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <PageHero badge="Got Questions?" title='Frequently <span class="gradient-text">Asked</span>' subtitle="Everything you need to know about JScale's services, pricing, and process." />

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal>
            <div className="faq-list">
              {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title='Still Have <span class="gradient-text">Questions?</span>' subtitle="Reach out directly — we're happy to help you figure out the best path forward." primaryText="Contact Us" secondaryText="View Pricing" secondaryLink="/pricing" />
    </>
  )
}
