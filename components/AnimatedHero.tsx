'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedHero() {
  return (
    <section className="relative py-24 sm:py-32 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Partnerships.jpg"
          alt="Partnerships background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 opacity-50 bg-black "></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Partner With Us
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
         Connect. Collaborate. Create Impact
        </motion.p>
      </div>
    </section>
  );
}
