function PricingSection() {
  const plans = [
    {
      id: 1,
      name: "Resume Boost Plan",
      price: "$100",
      period: "One-Time",
      icon: "📄",
      description: "Perfect for candidates who want a strong ATS-friendly resume before applying.",
      features: [
        "ATS-friendly resume creation / revamp",
        "Optimized for recruiter & job portal screening",
        "Role-specific keywords & clean formatting",
        "Ideal for freshers, switchers & experienced professionals."
      ],
      highlight: "Best starting point if your resume isn't getting callbacks.",
      highlightIcon: "→"
    },
    {
      id: 2,
      name: "Starter Plan",
      price: "$150",
      period: "/ Month",
      icon: "💼",
      description: "For consistent job visibility with zero effort.",
      features: [
        "30 targeted job applications daily",
        "Resume customized for each role",
        "ATS-friendly resume usage",
        "Zero manual effort"
      ],
      badge: "Best Value"
    },
    {
      id: 3,
      name: "Growth Plan",
      price: "$200",
      period: "/ Month",
      icon: "🚀",
      description: "For faster results and wider reach.",
      features: [
        "40 targeted job applications daily",
        "Resume customized for every application",
        "Higher interview conversion rate",
        "Broader portal coverage"
      ],
      successFee: "Once placed, 10% of your yearly CTC"
    },
    {
      id: 4,
      name: "Premium Plan",
      price: "$500",
      period: "",
      icon: "🔥",
      description: "For serious job seekers who want preparation + applications.",
      features: [
        "We apply until you get placed",
        "Continuous resume updates",
        "Offer training",
        "Interview preparation & mock interviews"
      ]
    }
  ]

  return (
    <section id="pricing" className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl md:text-3xl">🚀</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              JScale Marketing Service – From Resume to Offer Letter
            </h2>
          </div>
          
          {/* Introductory Text */}
          <div className="max-w-3xl mx-auto space-y-2 mt-6 md:mt-8">
            <p className="text-base md:text-lg lg:text-xl text-white font-semibold">
              Not getting interview calls?
            </p>
            <p className="text-sm md:text-base lg:text-lg text-white/90">
              Your resume and job-hunt strategy matter more than you think.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-white/90">
              We help you stand out, get noticed, and get hired.
            </p>
          </div>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 md:mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-purple-500/50 hover:border-purple-400/70 transition shadow-xl"
            >
              {/* Best Value Badge */}
              {plan.badge && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 border-2 border-green-500 rounded-lg px-3 py-1 text-xs md:text-sm font-bold text-black">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl md:text-4xl">{plan.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-yellow-400">
                      {plan.price}
                    </span>
                    <span className="text-white/80 text-sm md:text-base">
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-white/90 text-xs md:text-sm flex-1">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Success Fee */}
              {plan.successFee && (
                <div className="mt-4 p-3 bg-yellow-400/20 border border-yellow-400/40 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-400">💰</span>
                    <span className="text-white font-semibold text-sm md:text-base">
                      Success Fee:
                    </span>
                  </div>
                  <p className="text-white/90 text-xs md:text-sm ml-6">
                    {plan.successFee}
                  </p>
                </div>
              )}

              {/* Highlight */}
              {plan.highlight && (
                <div className="mt-4 flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                  <span>{plan.highlightIcon}</span>
                  <span>{plan.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold rounded-xl md:rounded-2xl transition transform hover:scale-105 text-base md:text-lg lg:text-xl shadow-2xl">
            Level Up Your Job Search!
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

