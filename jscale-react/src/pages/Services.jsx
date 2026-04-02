import { PageHero, Reveal, ServiceCard, CTASection } from '../components/UI'
import { services, expertise, tools } from '../data/constants'

export default function Services() {
  return (
    <>
      <PageHero badge="Our Services" title='Comprehensive Career <span class="gradient-text">Acceleration</span>' subtitle="Every service is designed to move you closer to your next offer — faster, smarter, and with expert precision." />

      <section className="section">
        <div className="mesh-gradient"><div className="blob blob-1" /><div className="blob blob-2" /></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-grid">
            {services.map((s, i) => <ServiceCard key={i} icon={s.icon} title={s.title} features={s.features} delay={i + 1} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal><div className="section-header"><span className="section-label">Domains We Cover</span><h2 className="section-title">Our <span className="gradient-text">Expertise Areas</span></h2></div></Reveal>
          <Reveal><div className="expertise-tags">{expertise.map((e, i) => <span key={i} className="expertise-tag">{e}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><div className="section-header"><span className="section-label">Our Toolkit</span><h2 className="section-title">Tools & Platforms <span className="gradient-text">We Leverage</span></h2></div></Reveal>
          <Reveal><div className="tools-grid">{tools.map((t, i) => <div key={i} className="tool-badge"><span className="tool-dot" style={{ background: t.color }} />{t.name}</div>)}</div></Reveal>
        </div>
      </section>

      <CTASection title='Let&apos;s Build Your <span class="gradient-text">Career Strategy</span>' subtitle="Get a personalized plan tailored to your goals." primaryText="Get Started" secondaryText="View Pricing" secondaryLink="/pricing" />
    </>
  )
}
