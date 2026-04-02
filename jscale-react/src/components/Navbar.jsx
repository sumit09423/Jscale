import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavScrolled } from '../hooks/useAnimations'
import { useCart } from '../context/CartContext'

const navItems = [
  { path: '/services', label: 'Services' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/results', label: 'Results' },
  { path: '/process', label: 'How It Works' },
  { path: '/faq', label: 'FAQ' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useNavScrolled()
  const location = useLocation()
  const { totalItems } = useCart()

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">J<em>Scale</em></Link>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`} id="navLinks">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname.startsWith(item.path) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" className={`nav-cart-link ${location.pathname === '/cart' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              🛒{totalItems > 0 && <span className="nav-cart-badge">{totalItems}</span>}
            </Link>
          </li>
          <li className="nav-cta">
            <Link to="/contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
              <span>Get Started</span>
            </Link>
          </li>
        </ul>
        <div className="nav-right-mobile">
          <Link to="/cart" className="nav-cart-mobile">
            🛒{totalItems > 0 && <span className="nav-cart-badge">{totalItems}</span>}
          </Link>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">☰</button>
        </div>
      </div>
    </nav>
  )
}
