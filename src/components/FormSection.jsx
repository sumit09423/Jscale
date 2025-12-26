import { useState } from 'react'

function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    currentRole: '',
    experience: '',
    message: ''
  })

  // WhatsApp phone number
  const whatsappNumber = '919649224523' // +91 96492 24523

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the message for WhatsApp with candidate details
    const message = `*New Candidate Inquiry*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Current Role:* ${formData.currentRole || 'Not provided'}\n` +
      `*Experience:* ${formData.experience || 'Not provided'}\n\n` +
      `*Additional Message:*\n${formData.message || 'No additional message'}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Redirect directly to WhatsApp
    window.location.href = whatsappUrl
  }

  return (
    <section id="form" className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Form Content */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4 md:mb-6 lg:mb-8 drop-shadow-lg">
                Get in Touch
              </h2>
              <p className="text-white/90 text-center mb-6 md:mb-8 lg:mb-10 text-xs sm:text-sm md:text-base lg:text-lg">
                Ready to accelerate your career? Share your details and we'll get back to you!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition text-sm md:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    placeholder="Current Role/Position *"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition text-sm md:text-base"
                  />
                </div>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Years of Experience (e.g., 2 years, Fresher) *"
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition text-sm md:text-base"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Message (Optional)"
                  rows="4"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition resize-none text-sm md:text-base"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 md:px-6 md:py-3 lg:py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold rounded-lg transition transform hover:scale-105 text-sm md:text-base lg:text-lg"
                >
                  Send Message via WhatsApp
                </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection

