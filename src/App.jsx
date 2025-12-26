import { useState, useEffect } from 'react'
import './App.css'
import desktopBackground from './assets/Desktop_background.jpeg'
import mobileBackground from './assets/mobile_background.jpeg'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FormSection from './components/FormSection'
import Footer from './components/Footer'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const backgroundImage = isMobile ? mobileBackground : desktopBackground

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <FormSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
