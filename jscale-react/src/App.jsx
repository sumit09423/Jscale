import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Preloader, ScrollProgressBar } from './components/UI'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Results from './pages/Results'
import Process from './pages/Process'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Careers, { JobDetail } from './pages/Careers'
import Cart from './pages/Cart'
import { CartProvider, useCart } from './context/CartContext'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <CartProvider>
      <Preloader />
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />
      <CartNotification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/process" element={<Process />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:jobId" element={<JobDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}

// Toast notification for cart actions
function CartNotification() {
  const { notification } = useCart()
  if (!notification) return null
  return (
    <div className={`cart-toast cart-toast-${notification.type}`}>
      {notification.type === 'success' ? '✓' : 'ℹ'} {notification.message}
    </div>
  )
}
