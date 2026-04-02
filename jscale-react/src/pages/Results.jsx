import { PageHero, Reveal, CandidateCard, TestimonialCard, CTASection } from '../components/UI'
import { candidates, testimonials, stories, logos } from '../data/constants'

export default function Results() {
  return (
    <>
      <PageHero badge="Proven Track Record" title='Where Our Candidates <span class="gradient-text">Got Placed</span>' subtitle="Our candidates have secured opportunities at some of the most respected companies worldwide." />

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal><div className="logos-container"><div className="logos-track">
            {[...logos, ...logos].map((l, i) => <div key={i} className="logo-chip">{l}</div>)}
          </div></div></Reveal>
          <div className="candidates-grid">
            {candidates.map((c, i) => <CandidateCard key={i} {...c} delay={i + 1} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><div className="section-header"><span className="section-label">Success Stories</span><h2 className="section-title">Real <span className="gradient-text">Transformations</span></h2></div></Reveal>
          <div className="stories-grid">
            {stories.map((s, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="glass-card story-card glow-border">
                  <div className="story-header"><div className="s-name">{s.title}</div><div className="s-journey">{s.journey}</div></div>
                  <div className="story-body"><p>{s.body}</p><div className="story-result">{s.result}</div></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="mesh-gradient"><div className="blob blob-1" /><div className="blob blob-3" /></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal><div className="section-header"><span className="section-label">Client Reviews</span><h2 className="section-title">What Our Clients <span className="gradient-text">Say About Us</span></h2></div></Reveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} delay={i + 1} />)}
          </div>
        </div>
      </section>

      <CTASection title='Ready to Be Our Next <span class="gradient-text">Success Story?</span>' subtitle="Join hundreds of professionals who transformed their careers with JScale." secondaryText="View Pricing" secondaryLink="/pricing" />
    </>
  )
}
