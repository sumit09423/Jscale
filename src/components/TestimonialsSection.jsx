import { useEffect, useRef, useState } from 'react'
import testimonialsData from '../stub/jscale_testimonials.json'

function TestimonialsSection() {
  const scrollContainerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollRef = useRef(null)

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollSpeed = 1
    let lastScrollTime = Date.now()

    const autoScroll = () => {
      if (!isPaused && container) {
        const now = Date.now()
        const deltaTime = now - lastScrollTime
        lastScrollTime = now

        const currentScroll = container.scrollLeft
        const maxScroll = container.scrollWidth - container.clientWidth

        if (maxScroll > 0) {
          if (currentScroll >= maxScroll - 1) {
            // Reset to beginning when reaching the end
            container.scrollLeft = 0
          } else {
            // Continue scrolling
            container.scrollLeft = currentScroll + scrollSpeed
          }
        }
      }
    }

    autoScrollRef.current = setInterval(autoScroll, 20) // ~50fps for smoother animation
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [isPaused])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Pause on manual scroll
  const handleScroll = () => {
    if (!isPaused) {
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
    }
  }

  return (
    <section id="testimonials" className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 lg:mb-6 drop-shadow-lg">
            What Students Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-md px-2">
            Real outcomes from learners who trusted JScale.
          </p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card flex-shrink-0 bg-white/10 backdrop-blur-lg rounded-2xl transition relative z-0 w-[320px] md:w-[450px] lg:w-[550px]"
            >
              <div className="p-4 md:p-6 lg:p-8">
                {/* Rating Stars */}
                <div className="flex items-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-white mb-4 md:mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="mb-4 md:mb-6">
                  <p className="text-white text-base md:text-lg font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-white/80 text-sm md:text-base">
                    {testimonial.role}
                    <span className="mx-2">•</span>
                    {testimonial.city}
                  </p>
                </div>

                {/* Service Tag */}
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-lg font-semibold text-xs md:text-sm lg:text-base">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection


