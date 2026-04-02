import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">J<em>Scale</em></div>
            <p>Your end-to-end career growth partner — from résumé optimization to offer letter. Strategic job marketing, profile transformation, and placement support.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Job Marketing</Link></li>
              <li><Link to="/services">ATS-Smart Résumé</Link></li>
              <li><Link to="/services">LinkedIn Optimization</Link></li>
              <li><Link to="/services">Certification Fast-Track</Link></li>
              <li><Link to="/services">Assessment Support</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/process">How It Works</Link></li>
              <li><Link to="/results">Results</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Get in Touch</Link></li>
              <li><a href="mailto:support@jscale.com">support@jscale.com</a></li>
              <li><a href="tel:+918233633213">+91 82336 33213</a></li>
              <li><a href="https://wa.me/918233633213">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2026 JScale Marketing Service. All rights reserved.</div>
      </div>
    </footer>
  )
}
