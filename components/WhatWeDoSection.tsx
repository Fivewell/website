
// Commented out unused component to fix lint warning
// interface FeatureCardProps {
//   icon: string; // Placeholder for icon component or path
//   title: string;
//   description: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
//       <div className="text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   );
// };

const WhatWeDoSection = () => {
  return (
    <section className="py-12  transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What We Do</h2>
        {/* <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We work to build resilient food systems through various initiatives.
        </p> */}
        <div className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Fivewell Africa&apos;s work is anchored on five interconnected themes that guide our approach to
          sustainable and inclusive development. Our themes revolve around community transformation,
          environmental stewardship, and economic resilience to collectively form a holistic framework for
          transforming communities, ecosystems, and economies.
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="💡"
            title="Partner with Entrepreneurs"
            description="We collaborate with local entrepreneurs to develop and scale sustainable food businesses."
          />
          <FeatureCard
            icon="🤝"
            title="Consult with Experts"
            description="We provide expert consultation to organizations to improve food accessibility and nutrition."
          />
          <FeatureCard
            icon="🌱"
            title="Design Food Systems"
            description="We design holistic and climate-sensitive food systems from production to distribution."
          />
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
