function PricingSection() {
  const planGroups = [
    {
      title: "Placement Tracks",
      subtitle: "11% success fee after placement",
      plans: [
        {
          id: 1,
          name: "Prime",
          price: "$500",
          period: "",
          icon: "🎯",
          description: "Placement Track — we apply until you get placed.",
          features: [
            "30 job applications per day",
            "Targeted placement support",
            "Resume tailored for each application"
          ],
          successFee: "11% after placement"
        },
        {
          id: 2,
          name: "Prime Plus",
          price: "$1,000",
          period: "",
          icon: "⚡",
          description: "Turbo Apply — double the applications for faster results.",
          features: [
            "60 job applications per day",
            "Wider reach, more interviews",
            "Full placement track support"
          ],
          successFee: "11% after placement"
        },
        {
          id: 3,
          name: "Ultra Prime",
          price: "$5,000",
          period: "",
          icon: "👑",
          description: "End-to-End — white-glove support from apply to offer.",
          features: [
            "30 job applications per day",
            "Assessments & proxy included",
            "Full preparation + application + placement"
          ],
          successFee: "11% after placement"
        }
      ]
    },
    {
      title: "Apply Only — Campaigns",
      subtitle: "No success fee; assessments/proxy not included",
      plans: [
        {
          id: 4,
          name: "Apply Only 60",
          price: "$350",
          period: "",
          icon: "📤",
          description: "Campaign — 30 applications/day for 60 days.",
          features: [
            "30 job applications per day",
            "60-day campaign",
            "No success fee"
          ],
          noSuccessFee: true
        },
        {
          id: 5,
          name: "Apply Only 30",
          price: "$200",
          period: "",
          icon: "📋",
          description: "Campaign — 30 applications/day for 30 days.",
          features: [
            "30 job applications per day",
            "30-day campaign",
            "No success fee"
          ],
          noSuccessFee: true
        }
      ]
    },
    {
      title: "Add-ons",
      subtitle: null,
      plans: [
        {
          id: 6,
          name: "Resume Studio",
          price: "$100",
          period: "one-time",
          icon: "📄",
          description: "ATS Smart — resume built to pass recruiters & job portals.",
          features: [
            "ATS-friendly resume creation / revamp",
            "Role-specific keywords & clean formatting",
            "Ideal for freshers, switchers & experienced professionals"
          ]
        },
        {
          id: 7,
          name: "Career Coaching",
          price: "$50",
          period: "per hour",
          icon: "💬",
          description: "1:1 Expert — 60-minute session with a career specialist.",
          features: [
            "60-minute 1:1 session",
            "Interview prep, strategy & feedback",
            "Customized to your goals"
          ]
        }
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

        {/* Pricing Plans by Group */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-12 space-y-10 lg:space-y-14">
          {planGroups.map((group) => (
            <div key={group.title}>
              {/* Group Header */}
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {group.title}
                </h3>
                {group.subtitle && (
                  <p className="text-white/80 text-sm md:text-base">
                    {group.subtitle}
                  </p>
                )}
              </div>

              {/* Plans Grid */}
              <div
                className={`grid gap-4 md:gap-6 lg:gap-8 ${
                  group.plans.length === 3
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : group.plans.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                    : "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                }`}
              >
                {group.plans.map((plan) => (
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

                    {/* No Success Fee Badge */}
                    {plan.noSuccessFee && (
                      <div className="absolute -top-3 -right-3 bg-green-500/90 border-2 border-green-400 rounded-lg px-3 py-1 text-xs md:text-sm font-bold text-white">
                        No success fee
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl md:text-4xl">{plan.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {plan.name}
                        </h4>
                        <div className="flex items-baseline gap-1 flex-wrap">
                          <span className="text-2xl md:text-3xl font-bold text-yellow-400">
                            {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-white/80 text-sm md:text-base">
                              {plan.period}
                            </span>
                          )}
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
                  </div>
                ))}
              </div>
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

