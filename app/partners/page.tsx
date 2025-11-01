import AnimatedHero from "@/components/AnimatedHero";
import BecomePartnerForm from "@/components/BecomePartnerForm";

// Placeholder for an icon. In a real app, this would be an SVG or an icon component.
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function BecomePartnerPage() {
  const benefits = [
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-primary" />,
      title: "Expert Guidance",
      description:
        "Leverage our team's deep expertise in sustainable models, project design and management, research, analysis, and emerging market trends to strengthen every stage of your initiative.",
    },
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-primary" />,
      title: "Achieve Measurable Excellence",
      description:
        "Benefit from evidence-based design, participatory approaches, and results that clearly demonstrate your impact.",
    },
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-primary" />,
      title: "Move Seamlessly",
      description:
        "Move seamlessly from ideas to impact with a team that helps you translate strategy into measurable action — from co-design to on-the-ground implementation.",
    },
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-primary" />,
      title: "Local Insight, Global Standards",
      description:
        "Gain a partner who understands Africa's systems from the soil up, combining local insight with global standards to make your interventions relevant, inclusive, and lasting.",
    },
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-primary" />,
      title: "Partnership That Grows With You",
      description:
        "Gain more than a service provider; gain an ally who evolves with you as contexts shift and opportunities expand.",
    }
  ];

  const partnerProfiles = [
    {
      title: "Development Agencies & NGOs",
      description:
        "Seeking grounded implementation partners across Africa.",
    },
    {
      title: "Government Institutions",
      description:
        "Aiming to develop and scale national or regional programs sustainably.",
    },
    {
      title: "Research & Academic Institutions",
      description:
        "Advancing applied learning, data, and innovation.",
    },
    {
      title: "Impact Investors & Foundations",
      description:
        "Funding initiatives that combine measurable social and environmental outcomes.",
    },
    {
      title: "Private Sector Actors",
      description:
        "Integrating sustainability and shared value into their operations.",
    },
    {
      title: "Community-Based Organizations",
      description:
        "Social innovators co-creating solutions with local ownership and global relevance.",
    }
  ];

  const partnershipSteps = [
    {
      step: 1,
      title: "Conversation & Alignment",
      description:
        "We start by understanding your goals, challenges, and the impact you hope to achieve.",
    },
    {
      step: 2,
      title: "Co-Design & Planning",
      description:
        "Together, we translate insights into a clear, actionable roadmap.",
    },
    {
      step: 3,
      title: "Implementation & Delivery",
      description:
        "Our team manages execution as agreed, ensuring efficiency, transparency, and measurable outcomes.",
    },
    {
      step: 4,
      title: "Learning & Growth",
      description:
        "We track impact, share lessons, and adapt to make every phase stronger than the last.",
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-18">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Why Partner With Us? Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Why Partner With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We bring the strength of a multidisciplinary team with deep experience across Africa and beyond. 
              — professionals who have worked with development agencies, governments, and innovators to turn strategies into measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 text-primary">{benefit.icon}</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ideal Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Who We&apos;re Looking For</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
             Together with like-minded partners, we pursue transformation that is ethical, inclusive, and sustainable.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {partnerProfiles.map((profile, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm dark:shadow-gray-900/30 text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {profile.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Partnership Journey Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Your Journey With Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A simple, transparent process to get our partnership started.
            </p>
          </div>
          <div className="flow-root">
            <ul className="-mb-8">
              {partnershipSteps.map((step, index) => (
                <li key={index}>
                  <div className="relative pb-8">
                    {index !== partnershipSteps.length - 1 && (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-gray-50 dark:ring-gray-800">
                          <span className="text-white font-bold">
                            {step.step}
                          </span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Become a Partner
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
             Ready to co-create sustainable change? Fill in the form below, and we will be in touch!
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <BecomePartnerForm />
          </div>
        </div>
      </section>
      {/* <PartnerSection /> */}
    </div>
  );
}

export default BecomePartnerPage;
