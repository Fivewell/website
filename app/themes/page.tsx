"use client";

import ProcessSection from "@/components/ProcessSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { themes } from "@/data/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ThemesPage() {
  const themeColors = [
    // Building Sustainable and Adaptive Pathways for Development
    {
      bg: 'bg-white dark:bg-white/10',
      border: 'border-gray-200 dark:border-gray-700',
      text: 'text-gray-800 dark:text-gray-200',
      hover: 'hover:bg-gray-50 dark:hover:bg-white/20',
      button: 'bg-white dark:bg-white/20 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/30'
    },
    // Knowledge, Research, and Capacity Building
    {
      bg: 'bg-white dark:bg-white/10',
      border: 'border-gray-200 dark:border-gray-700',
      text: 'text-gray-800 dark:text-gray-200',
      hover: 'hover:bg-gray-50 dark:hover:bg-white/20',
      button: 'bg-white dark:bg-white/20 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/30'
    },
    // Innovation & Technology
     {
      bg: 'bg-white dark:bg-white/10',
      border: 'border-gray-200 dark:border-gray-700',
      text: 'text-gray-800 dark:text-gray-200',
      hover: 'hover:bg-gray-50 dark:hover:bg-white/20',
      button: 'bg-white dark:bg-white/20 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/30'
    },
    // Market Access & Regional Integration
    {
      bg: 'bg-white dark:bg-white/10',
      border: 'border-gray-200 dark:border-gray-700',
      text: 'text-gray-800 dark:text-gray-200',
      hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/50',
      button: 'bg-purple-100 dark:bg-purple-800/50 text-purple-700 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700/70'
    },
    // Partnerships & Systems Change
    {
      bg: 'bg-white dark:bg-white/10',
      border: 'border-gray-200 dark:border-gray-700',
      text: 'text-gray-800 dark:text-gray-200',
      hover: 'hover:bg-gray-50 dark:hover:bg-white/20',
      button: 'bg-white dark:bg-white/20 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/30'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-18">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/hero1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Strategic Themes
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how our focused initiatives drive meaningful change and
              create lasting impact across all our areas of expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Driving Change Through Focused Initiatives
              </h2>
            
              <p className="text-lg text-gray-600 mb-8">
                Explore our themes to learn more about our approach, key focus
                areas, and the difference we&apos;re making in communities
                worldwide.
              </p>
            
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/image.png"
                alt="Strategic Themes"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div> */}
            <WhatWeDoSection />
        </div>
      </section>

      {/* Themes Grid Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl mt-6 md:text-4xl font-bold text-gray-900 dark:text-white">
              Explore Our Themes
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4">
            {/* All Themes - Full Width Layout */}
            {themes.map((theme, index) => {
              const color = themeColors[index % themeColors.length];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={theme.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full mb-12"
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} rounded-2xl overflow-hidden border ${color.border} ${color.bg} ${color.hover} transition-all duration-300`}>
                    {/* Image */}
                    <div className="lg:w-1/2 h-80 lg:h-auto lg:min-h-[32rem]">
                      <div className="relative h-full w-full">
                        <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-black/60 to-transparent z-10`}></div>
                        <Image
                          src={theme.image || "/placeholder-theme.jpg"}
                          alt={theme.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index === 0}
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${color.button} text-base font-bold mb-3`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-3xl font-bold text-white">
                            <Link href={``} className="hover:underline">
                              {theme.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-1/2 p-8 flex flex-col">
                      <div className={`${color.text} text-lg whitespace-pre-line`}>
                        {theme.theme_page_description}
                      </div>
                      
                      {theme.subthemes && theme.subthemes.length > 0 && (
                        <div className="mt-2 space-y-2">
                          <h4 className="text-lg font-semibold mb-2">Focus Areas</h4>
                          <ol className="space-y-2">
                            {theme.subthemes.map((subtheme, idx) => (
                              <li key={subtheme.id} className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-white font-medium mr-3 mt-0.5">
                                  {idx + 1}
                                </span>
                                <div>
                                  <h5 className="font-semibold text-gray-900 dark:text-white">{subtheme.title}</h5>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                    {subtheme.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {themes[0]?.process && (
        <section>
          <ProcessSection process={themes[0].process} />
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary dark:bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto mb-8 dark:text-gray-300">
              Join us in our mission to create sustainable change. Explore
              partnership opportunities or learn how you can get involved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex bg-[#F5D7A2] items-center justify-center px-6 py-3 text-primary rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors duration-200"
              >
                Book a Call
              </Link>
             
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
