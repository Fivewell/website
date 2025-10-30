"use client";

import { motion } from "framer-motion";
// import { BarChart, Zap, Leaf, ArrowRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    client: "Large-Scale Commercial Farm, Kenya",
    title: "Boosting Crop Yield and Reducing Water Usage with Precision Agriculture",
    image: "/assets/PipeDrip.jpg",
    challenge: "A leading commercial farm is facing declining profitability due to rising water costs and inconsistent crop yields across its 5,000-hectare property.",
    solution: "Fivewell Africa begins with a comprehensive assessment to identify current inefficiencies in farm practices. Using these insights, we design a precision agriculture strategy tailored to the farm's specific conditions.\n\nThe strategy integrates data-driven options, mapping, and digital monitoring systems to optimize resource use, enhance yield consistency, and reduce operational costs.\n\nThe findings and recommendations are presented through a two-part report: one focused on capacity building to equip the farm's team with the necessary skills to implement solutions, and another on organizational adjustments to support long-term efficiency and decision-making.\n\n**Expected Outcome:**\nThe approach is projected to reduce water use by up to 25%, increase crop yields by 15–20%, and improve profit margins by approximately 10–12%.",
    results: [
      { metric: "+40%", label: "Increase in Crop Yield" },
      { metric: "-25%", label: "Reduction in Water Usage" },
      { metric: "+15%", label: "Increase in Profit Margin" }
    ]
  },
  {
    client: "Coffee Cooperative, Ethiopia",
    title: "Unlocking European Markets Through Supply Chain Optimization",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    challenge: "A coffee cooperative produced high-quality beans but struggled with inefficient post-harvest processing and lacked the certifications needed to access lucrative European markets.",
    solution: "We begin with a comprehensive diagnostic; mapping the value chain, auditing post-harvest operations, and benchmarking quality against international standards. We translate these insights into targeted interventions that ensure consistent, traceable output. At the same time, we support the cooperative in achieving certification readiness by developing actionable roadmaps and internal control systems to meet international compliance requirements. Finally, we facilitate access to European markets, shaping market positioning, branding, and commercial agreements, while establishing monitoring frameworks to sustain performance improvements over time.\n\n**Expected Outcomes**\nOptimized post-harvest operations and achieved certifications enable the cooperative to reduce quality losses from 15–20% to below 5% and raise cupping scores above 85. Direct access to premium European buyers is expected to increase farmer incomes by 25–40%, while robust monitoring and control frameworks ensure sustained quality, compliance, and long-term growth.",
    results: [
      { metric: "+60%", label: "Higher Price Per Kilogram" },
      { metric: "3", label: "New International Buyers" },
      { metric: "100%", label: "Fair Trade Certified" }
    ]
  },
  // {
  //   client: "Agri-Fintech Startup, Nigeria",
  //   title: "Developing a De-Risking Model for Smallholder Farmer Loans",
  //   image:
  //     "https://images.unsplash.com/photo-1554224155-16954405a255?w=800&h=600&fit=crop",
  //   challenge:
  //     "An innovative fintech startup aimed to provide loans to smallholder farmers but needed a reliable model to assess risk and predict repayment rates, a major barrier for traditional banks.",
  //   solution:
  //     "FiveWell Africa's data science team analyzed historical agricultural data and developed a proprietary credit scoring algorithm based on crop type, weather patterns, and satellite data. We helped them integrate this model into their loan application platform.",
  //   results: [
  //     { metric: "70%", label: "More Accurate Risk Prediction" },
  //     { metric: "5,000+", label: "Farmers Financed in Year 1" },
  //     { metric: "<5%", label: "Default Rate on Loans" },
  //   ],
  // },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 dark:from-primary/90 dark:to-primary/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Proven Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We deliver measurable outcomes. Explore our case studies to see
              how we empower African agribusinesses to achieve growth,
              sustainability, and profitability.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`lg:order-${index % 2 === 0 ? "1" : "2"}`}>
                  <p className="font-semibold text-primary">{study.client}</p>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                    {study.title}
                  </h2>

                  <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        The Challenge
                      </h3>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Our Solution
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: study.solution.replace(/\n\n/g, '<br/><br/>') }} />
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-gray-800/30"
                      >
                        <p className="text-2xl font-bold text-primary dark:text-white">
                          {result.metric}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`lg:order-${index % 2 === 0 ? "2" : "1"}`}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl object-cover dark:ring-2 dark:ring-gray-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
