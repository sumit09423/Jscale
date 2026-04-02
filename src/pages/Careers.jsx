import { useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageHero, Reveal } from '../components/UI'

// ===== JOB DATA =====
const jobs = [
  {
    id: 'job-application-specialist',
    title: 'Job Application Specialist',
    department: 'Client Delivery',
    type: 'Full-Time',
    location: 'Onsite',
    experience: '1–3 years',
    posted: 'April 2026',
    status: 'Active',
    summary: 'We are looking for a detail-oriented Job Application Specialist who will apply to jobs on behalf of our clients. You will be the frontline engine driving our placement success — targeting the right roles, tailoring résumés, and managing high-volume daily applications.',
    responsibilities: [
      'Apply to 30–60 targeted job openings per day on behalf of clients',
      'Tailor résumés and cover letters to match each job description',
      'Research and identify relevant job opportunities across multiple platforms (LinkedIn, Indeed, Naukri, Glassdoor, etc.)',
      'Track application status and maintain detailed logs in our internal tools',
      'Coordinate with the placement team on client progress and interview callbacks',
      'Stay updated on hiring trends, ATS requirements, and recruiter preferences',
      'Communicate professionally with clients regarding application progress',
    ],
    requirements: [
      '1–3 years of experience in recruitment, job marketing, or talent acquisition',
      'Strong understanding of ATS systems and keyword optimization',
      'Excellent written English and attention to detail',
      'Ability to manage high-volume, repetitive tasks with consistency',
      'Familiarity with job portals — LinkedIn, Indeed, Glassdoor, Naukri, Dice, ZipRecruiter',
      'Proficiency in Google Workspace / MS Office',
      'Self-motivated with strong time management skills',
    ],
    nice_to_have: [
      'Experience with résumé writing or career coaching',
      'Background in IT recruitment or tech hiring',
      'Knowledge of visa-sponsored / H1B job markets',
    ],
    compensation: 'Competitive salary + performance bonuses based on client placement success.',
  },
  {
    id: 'performance-marketing-lead',
    title: 'Performance Marketing Lead',
    department: 'Marketing',
    type: 'Full-Time',
    location: 'Onsite',
    experience: '3–6 years',
    posted: 'April 2026',
    status: 'Active',
    summary: 'We are hiring an experienced Performance Marketing Lead to drive growth for the JScale website. You will own paid acquisition, SEO, conversion optimization, and the full marketing funnel — scaling our reach to professionals seeking career acceleration services.',
    responsibilities: [
      'Plan, execute, and optimize paid campaigns across Google Ads, Meta Ads, LinkedIn Ads, and other channels',
      'Own the full marketing funnel — from awareness to lead generation to conversion',
      'Drive SEO strategy including keyword research, on-page optimization, content planning, and link building',
      'Set up and manage analytics, attribution, and tracking (Google Analytics, GTM, Meta Pixel, etc.)',
      'Run A/B tests on landing pages, ad creatives, and email sequences to improve conversion rates',
      'Manage monthly marketing budget and deliver ROI-driven results',
      'Build and maintain dashboards for campaign performance and KPI tracking',
      'Collaborate with content, design, and development teams for campaign execution',
    ],
    requirements: [
      '3–6 years of hands-on performance marketing experience',
      'Proven track record of managing paid campaigns with measurable ROI',
      'Deep expertise in Google Ads, Meta Business Suite, and LinkedIn Campaign Manager',
      'Strong SEO knowledge — technical, on-page, and off-page',
      'Experience with analytics tools — Google Analytics 4, Google Tag Manager, Hotjar',
      'Data-driven mindset with strong analytical and reporting skills',
      'Understanding of CRO (Conversion Rate Optimization) principles',
      'Excellent communication and project management skills',
    ],
    nice_to_have: [
      'Experience in B2C service marketing (career services, edtech, HR tech)',
      'Hands-on experience with email marketing platforms (Mailchimp, Sendinblue, etc.)',
      'Knowledge of marketing automation and CRM tools',
      'Video marketing or YouTube Ads experience',
    ],
    compensation: 'Competitive salary + performance bonuses tied to lead generation and conversion metrics.',
  }
]

// ===== API SERVICE =====
const API_BASE_URL = '/api' // Change to your actual backend URL

async function submitApplication(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/careers/apply`, {
      method: 'POST',
      body: formData, // FormData (multipart — includes file)
    })

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API submission failed:', error)
    // Fallback: even if API fails, we still send to WhatsApp
    return { success: false, error: error.message }
  }
}

function sendToWhatsApp(data) {
  const phone = '918233633213'
  const lines = [
    `📋 *NEW JOB APPLICATION*`,
    ``,
    `*Position:* ${data.position}`,
    `*Name:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Location:* ${data.currentLocation}`,
    `*Experience:* ${data.totalExperience}`,
    `*Current Role:* ${data.currentRole}`,
    `*Current Company:* ${data.currentCompany}`,
    `*Notice Period:* ${data.noticePeriod}`,
    `*Expected CTC:* ${data.expectedCtc}`,
    `*LinkedIn:* ${data.linkedin || 'Not provided'}`,
    `*Portfolio:* ${data.portfolio || 'Not provided'}`,
    ``,
    `*Why Join JScale:*`,
    data.whyJoin || 'Not provided',
    ``,
    `*Past Experience Summary:*`,
    data.pastExperience || 'Not provided',
    ``,
    `*Key Skills:*`,
    data.keySkills || 'Not provided',
    ``,
    `📎 Resume was uploaded via the website form.`,
  ]
  const message = encodeURIComponent(lines.join('\n'))
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}


// ===== JOB LISTING CARD =====
function JobCard({ job }) {
  return (
    <Reveal>
      <div className="glass-card job-card">
        <div className="job-card-header">
          <div className="job-card-badges">
            <span className="job-badge job-badge-active">🟢 {job.status}</span>
            <span className="job-badge">{job.type}</span>
            <span className="job-badge">{job.location}</span>
          </div>
          <h3 className="job-card-title">{job.title}</h3>
          <div className="job-card-meta">
            <span>📁 {job.department}</span>
            <span>📅 {job.posted}</span>
            <span>💼 {job.experience}</span>
          </div>
        </div>
        <p className="job-card-summary">{job.summary}</p>
        <div className="job-card-actions">
          <Link to={`/careers/${job.id}`} className="btn btn-primary btn-sm">
            <span>View Details & Apply</span><span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </Reveal>
  )
}


// ===== JOB DETAIL + APPLICATION FORM =====
function JobDetail() {
  const { jobId } = useParams()
  const job = jobs.find(j => j.id === jobId)
  const formRef = useRef(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  if (!job) {
    return (
      <>
        <PageHero badge="Not Found" title="Job Not Found" subtitle="This position may have been filled or removed." />
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <Link to="/careers" className="btn btn-primary"><span>View All Openings</span></Link>
          </div>
        </section>
      </>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const form = formRef.current
    const formData = new FormData(form)
    formData.append('position', job.title)
    formData.append('jobId', job.id)
    formData.append('appliedAt', new Date().toISOString())

    // 1. Send to backend API
    const apiResult = await submitApplication(formData)
    console.log('API result:', apiResult)

    // 2. Send summary to WhatsApp
    const whatsappData = {
      position: job.title,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      currentLocation: formData.get('currentLocation'),
      totalExperience: formData.get('totalExperience'),
      currentRole: formData.get('currentRole'),
      currentCompany: formData.get('currentCompany'),
      noticePeriod: formData.get('noticePeriod'),
      expectedCtc: formData.get('expectedCtc'),
      linkedin: formData.get('linkedin'),
      portfolio: formData.get('portfolio'),
      whyJoin: formData.get('whyJoin'),
      pastExperience: formData.get('pastExperience'),
      keySkills: formData.get('keySkills'),
    }
    sendToWhatsApp(whatsappData)

    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <PageHero badge="Application Sent!" title='Thank You for <span class="gradient-text">Applying</span>' subtitle="We've received your application and sent the details to our team. We'll review it and get back to you within 3–5 business days." />
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <div className="success-submission">
              <div className="success-icon">🎉</div>
              <h3>Application Submitted Successfully</h3>
              <p>Your application for <strong>{job.title}</strong> has been sent to our hiring team via WhatsApp and our backend system.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
                <Link to="/careers" className="btn btn-secondary">View Other Openings</Link>
                <Link to="/" className="btn btn-primary"><span>Back to Home</span></Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero badge={`${job.department} · ${job.type} · ${job.location}`} title={`<span class="gradient-text">${job.title}</span>`} subtitle={job.summary} />

      {/* JOB DETAILS */}
      <section className="section">
        <div className="container">
          <div className="job-detail-grid">
            {/* LEFT — Job Info */}
            <div className="job-info">
              <Reveal>
                <div className="glass-card job-info-card">
                  <div className="job-info-badges">
                    <div className="job-info-badge"><span>📁</span> {job.department}</div>
                    <div className="job-info-badge"><span>💼</span> {job.experience}</div>
                    <div className="job-info-badge"><span>📍</span> {job.location}</div>
                    <div className="job-info-badge"><span>⏰</span> {job.type}</div>
                    <div className="job-info-badge"><span>📅</span> Posted {job.posted}</div>
                  </div>

                  <div className="job-section">
                    <h3>Responsibilities</h3>
                    <ul>{job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>
                  </div>

                  <div className="job-section">
                    <h3>Requirements</h3>
                    <ul>{job.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul>
                  </div>

                  {job.nice_to_have && (
                    <div className="job-section">
                      <h3>Nice to Have</h3>
                      <ul>{job.nice_to_have.map((r, i) => <li key={i}>{r}</li>)}</ul>
                    </div>
                  )}

                  <div className="job-section">
                    <h3>Compensation</h3>
                    <p>{job.compensation}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Application Form */}
            <div className="job-form-wrap">
              <Reveal direction="right">
                <div className="glass-card job-form-card">
                  <h3 className="job-form-title">Apply for this Position</h3>
                  <p className="job-form-subtitle">Fill in your details and upload your résumé. We'll review and get back within 3–5 business days.</p>

                  <form ref={formRef} onSubmit={handleSubmit} className="job-application-form">
                    {/* Personal Info */}
                    <div className="form-section-label">Personal Information</div>
                    <div className="form-row">
                      <div className="form-group"><label>Full Name *</label><input type="text" name="fullName" placeholder="Your full name" required /></div>
                      <div className="form-group"><label>Email Address *</label><input type="email" name="email" placeholder="you@email.com" required /></div>
                    </div>
                    <div className="form-row">
                      <div className="form-group"><label>Phone Number *</label><input type="tel" name="phone" placeholder="+91 98765 43210" required /></div>
                      <div className="form-group"><label>Current Location *</label><input type="text" name="currentLocation" placeholder="City, Country" required /></div>
                    </div>

                    {/* Professional Info */}
                    <div className="form-section-label">Professional Details</div>
                    <div className="form-row">
                      <div className="form-group"><label>Total Experience *</label>
                        <select name="totalExperience" required>
                          <option value="">Select experience</option>
                          <option>Fresher (0–1 year)</option>
                          <option>1–2 years</option>
                          <option>2–4 years</option>
                          <option>4–6 years</option>
                          <option>6–10 years</option>
                          <option>10+ years</option>
                        </select>
                      </div>
                      <div className="form-group"><label>Notice Period</label>
                        <select name="noticePeriod">
                          <option value="">Select notice period</option>
                          <option>Immediate</option>
                          <option>15 days</option>
                          <option>30 days</option>
                          <option>60 days</option>
                          <option>90 days</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group"><label>Current Role / Title</label><input type="text" name="currentRole" placeholder="e.g. Marketing Manager" /></div>
                      <div className="form-group"><label>Current Company</label><input type="text" name="currentCompany" placeholder="e.g. Infosys" /></div>
                    </div>
                    <div className="form-group"><label>Expected CTC / Salary</label><input type="text" name="expectedCtc" placeholder="e.g. $60,000/year or ₹12 LPA" /></div>

                    {/* Links */}
                    <div className="form-section-label">Online Profiles</div>
                    <div className="form-row">
                      <div className="form-group"><label>LinkedIn Profile URL</label><input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourname" /></div>
                      <div className="form-group"><label>Portfolio / Website</label><input type="url" name="portfolio" placeholder="https://yourportfolio.com" /></div>
                    </div>

                    {/* Experience Details */}
                    <div className="form-section-label">Experience & Skills</div>
                    <div className="form-group">
                      <label>Past Experience Summary *</label>
                      <textarea name="pastExperience" placeholder="Briefly describe your past roles, companies, key achievements, and relevant experience for this position..." rows="4" required />
                    </div>
                    <div className="form-group">
                      <label>Key Skills *</label>
                      <textarea name="keySkills" placeholder="List your top skills relevant to this role (e.g., Google Ads, SEO, ATS systems, Excel...)" rows="3" required />
                    </div>
                    <div className="form-group">
                      <label>Why do you want to join JScale?</label>
                      <textarea name="whyJoin" placeholder="Tell us what excites you about this role and why you'd be a great fit..." rows="3" />
                    </div>

                    {/* Resume Upload */}
                    <div className="form-section-label">Resume / CV</div>
                    <div className="form-group">
                      <label>Upload Your Résumé * <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(PDF, DOC, DOCX — Max 5MB)</span></label>
                      <div className="file-upload-area">
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          id="resumeInput"
                          onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                        />
                        <label htmlFor="resumeInput" className="file-upload-label">
                          <span className="file-upload-icon">📎</span>
                          <span className="file-upload-text">
                            {fileName ? fileName : 'Click to upload or drag your résumé here'}
                          </span>
                          <span className="file-upload-hint">PDF, DOC, DOCX up to 5MB</span>
                        </label>
                      </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary btn-submit" disabled={submitting}>
                      <span>{submitting ? 'Submitting...' : 'Submit Application'}</span>
                      {!submitting && <span className="btn-arrow">→</span>}
                    </button>
                    <p className="form-disclaimer">By submitting, you agree that your information will be shared with our hiring team via WhatsApp and our backend system for review.</p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


// ===== MAIN CAREERS PAGE (Listing) =====
export default function Careers() {
  return (
    <>
      <PageHero
        badge="Join Our Team"
        title='Build Careers — <span class="gradient-text">Including Yours</span>'
        subtitle="We're growing fast. If you're passionate about helping professionals land their dream jobs, we want to hear from you."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-label">Open Positions</span>
              <h2 className="section-title">Current <span className="gradient-text">Openings</span></h2>
              <p className="section-subtitle">All positions are onsite. We're looking for driven professionals who want to make a real impact on people's careers.</p>
            </div>
          </Reveal>

          <div className="jobs-grid">
            {jobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </section>

      {/* Why work at JScale */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-label">Life at JScale</span>
              <h2 className="section-title">Why Work <span className="gradient-text">With Us</span></h2>
            </div>
          </Reveal>
          <div className="why-grid">
            {[
              { icon: '🚀', title: 'High-Impact Work', desc: "Every day you directly help people get hired. There's no better feeling than knowing your work changes lives." },
              { icon: '📈', title: 'Rapid Growth', desc: "We're scaling fast. Early team members get outsized responsibility, learning, and career growth." },
              { icon: '💰', title: 'Performance Bonuses', desc: 'Your pay grows with your results. We reward people who deliver, not just people who show up.' },
              { icon: '🧠', title: 'Learn Cutting-Edge Tools', desc: 'Work with ATS systems, recruiter tools, marketing platforms, and AI — skills that are in high demand.' },
              { icon: '🤝', title: 'Collaborative Culture', desc: "Small team, big ambition. Everyone's voice matters and good ideas get implemented fast." },
              { icon: '🎯', title: 'Mission-Driven', desc: "We believe career growth shouldn't be a privilege. Join us in democratizing access to professional opportunities." },
            ].map((card, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="why-card"><div className="why-icon">{card.icon}</div><h3>{card.title}</h3><p>{card.desc}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <Reveal direction="scale">
            <div className="cta-inner">
              <h2>Don't See a Role <span className="gradient-text">That Fits?</span></h2>
              <p>Send us your résumé anyway — we're always looking for talented people and may have something perfect for you soon.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-glow"><span>Send Your Résumé</span><span className="btn-arrow">→</span></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

// Export JobDetail separately for routing
export { JobDetail }
