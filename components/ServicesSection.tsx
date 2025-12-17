import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    number: "01",
    title: "Applied Research & Data Analytics",
    subtitle: "Technical Advisory & Evidence Generation",
    description: "We design and conduct research, assessments, and evaluations that give partners the evidence they need to plan, adapt, and improve their programmes. This includes market studies, data analyses, and baseline-to-endline evaluations.",
    icon: "📊"
  },
  {
    number: "02",
    title: "Capacity Building & Training",
    subtitle: "Empowering Communities",
    description: "We train and mentor farmers, cooperatives, institutions, trainers (ToT) and organisations, to adopt better practices and technologies to improve project outcomes.",
   icon: "🧑‍🏫"
  },
  {
    number: "03",
    title: "Knowledge Management & Learning",
    subtitle: "Translating Insights to Action",
    description: "We translate research and field experience into practical resources, including manuals, toolkits,case studies, and digital products that teams can use in the long term.. We also design learning platforms and peer-exchange opportunities such as field days to share insights and best practices.",
    icon: "📚"
  },
  {
    number: "04",
    title: "Programme & Project Implementation",
    subtitle: "Full-Cycle Support",
    description: "We translate research and field experience into practical resources, including manuals, toolkits, case studies, and digital products that teams can use in the long term.. We also design learning platforms and peer-exchange opportunities such as field days to share insights and best practices.",
    icon: "🚀"
  },
  {
    number: "05",
    title: "Supply Chain Development",
    subtitle: "Market Access Solutions",
    description: "We translate research and field experience into practical resources, including manuals, toolkits, case studies, and digital products that teams can use in the long term.. We also design learning platforms and peer-exchange opportunities such as field days to share insights and best practices.",
    icon: "🌾"
  }
];

export default function ServicesSection() {
  const [viewMode, setViewMode] = useState('cards');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our services span the full agricultural value chain, offering end-to-end support that connects
            insight, people, and implementation to deliver impact on the ground.
          </p>

          {/* View Toggle */}
          {/* <div className="flex justify-center gap-4">
            <button
               onClick={() => setViewMode('cards')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                viewMode === 'cards'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              3D Cards View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                viewMode === 'table'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              Table View
            </button>
          </div> */}
        </motion.div>

        {/* Cards View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  whileHover={{
                    rotateY: 5,
                    rotateX: -5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="relative h-full"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 h-full border border-gray-700 hover:border-[#F3E6C2] transition-all">
                    {/* Alternating Number Badge - Top Right or Bottom Left */}
                    <motion.div
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? 5 : 0
                      }}
                      className={`absolute ${isEven
                          ? '-top-4 -right-4'
                          : '-bottom-4 -left-4'
                        } ${isEven
                          ? 'bg-gradient-to-br from-[#F3E6C2] to-[#e6d4a8]'
                          : 'bg-gradient-to-br from-[#F3E6C2] to-[#e6d4a8]'
                        } ${isEven ? 'text-gray-900' : 'text-gray-900'
                        } w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg`}
                      style={{
                        transform: 'translateZ(20px)'
                      }}
                    >
                      {service.number}
                    </motion.div>

                    {/* Icon */}
                    <div className="text-6xl mb-4">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#F3E6C2] mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover Accent */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredCard === index ? '100%' : 0 }}
                      className={`absolute bottom-0 left-0 h-1 ${isEven
                          ? 'bg-gradient-to-r from-[#F3E6C2] to-blue-500'
                          : 'bg-gradient-to-r from-blue-500 to-[#F3E6C2]'
                        }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Table View - Simplified */}
        {viewMode === 'table' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 40px rgba(243, 230, 194, 0.2)'
                }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-[#F3E6C2] transition-all"
              >
                <div className="flex items-start gap-6">
                  {/* Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-2xl font-bold text-white">
                      {service.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{service.icon}</span>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#F3E6C2] font-semibold mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
     
        </motion.div>
      </div>
    </section>
  );
}