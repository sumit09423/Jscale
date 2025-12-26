import heroImage from '../assets/Hero section .jpeg'

function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20 lg:py-24 xl:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8 drop-shadow-lg px-2">
          Accelerate Your Tech Career
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto drop-shadow-md px-4">
          Get certified faster, ace interviews, and land your dream job with our proven career acceleration services.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <button className="px-6 py-2.5 md:px-8 md:py-3 bg-blue-500/10 backdrop-blur-lg text-white font-semibold rounded-lg hover:bg-blue-500/20 transition transform hover:scale-105 border border-blue-400/30 text-sm md:text-base">
            Get Started
          </button>
          <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition backdrop-blur-sm border border-white/20 text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

