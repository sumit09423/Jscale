import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="JScale Logo" 
              className="h-12 sm:h-12 md:h-14 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="#home" className="text-white hover:text-yellow-400 transition font-medium text-sm lg:text-base">Home</a>
            <a href="#services" className="text-white hover:text-yellow-400 transition font-medium text-sm lg:text-base">Services</a>
            <a href="#testimonials" className="text-white hover:text-yellow-400 transition font-medium text-sm lg:text-base">Testimonials</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition font-medium text-sm lg:text-base">Contact</a>
          </div>
          <button className="md:hidden text-white p-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

