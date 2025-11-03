"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const BecomePartner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with dark mode overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-[url('/assets/Partnerships.jpg')] bg-cover bg-center bg-no-repeat dark:brightness-50 dark:contrast-125"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Partner with Fivewell Africa
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join us in our drive to transform Africa through innovative solutions and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partners">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ExternalLink className="mr-2" size={20} />
                Become a Partner
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomePartner;
