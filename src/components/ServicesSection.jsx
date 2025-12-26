import liveProjectImage from '../assets/Live Project Assistance .jpeg'
import certificationImage from '../assets/Certification Fast-Track .jpeg'
import clearAssessmentImage from '../assets/Clear my assesment .jpeg'
import atsResumeImage from '../assets/ATS-SMART Resume.jpeg'
import precisionJobImage from '../assets/Precision Job marketing.jpeg'

function ServicesSection() {
  const services = [
    {
      name: "Precision Job Marketing",
      description: "From invisible to in-demand. Quality leads, not spam.",
      image: precisionJobImage
    },
    {
      name: "Live Project Assistance",
      description: "Real-time help that turns blockers into learning moments.",
      image: liveProjectImage
    },
    {
      name: "Certification Fast-Track",
      description: "Focused prep, no fluff. Pass your certification exams faster.",
      image: certificationImage
    },
    {
      name: "Clear My Assessment",
      description: "Timed drills + tips to boost your score beyond the cutoff.",
      image: clearAssessmentImage
    },
    {
      name: "ATS-SMART Resume",
      description: "Crisp, keyword-mapped résumé that actually reads like you.",
      image: atsResumeImage
    }
  ]

  return (
    <section id="services" className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 md:mb-8 lg:mb-12 drop-shadow-lg">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition transform hover:scale-105 shadow-xl"
            >
              {/* Service Image - Full image on mobile, fixed height on larger screens */}
              <div className="relative w-full md:h-64 lg:h-80 xl:h-96">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-auto md:h-full object-contain md:object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

