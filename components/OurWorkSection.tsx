"use client"

import { themes } from '@/data/themes';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function OurWorkSection() {
  return (
    <section className="pt-10 pb-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Guiding Themes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our pathways for shaping sustainable and inclusive development across Africa.
          </p>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto px-4">
          {themes.map((theme, index) => {
            const isEven = index % 2 === 0;
            const colors = [
              'border-[#F5D7A2]',
              'border-[#F5D7A2]/70',
              'border-[#F5D7A2]/70',
              'border-[#F5D7A2]/70',
              'border-[#F5D7A2]/70',
              'border-[#F5D7A2]/70'
            ];
            const textColors = [
              'text-[#F5D7A2]',
              'text-[#F5D7A2]/80',
              'text-[#F5D7A2]/80',
              'text-[#F5D7A2]/80'
            ];
            const borderColors = [
              'border-[#F5D7A2] hover:border-[#F5D7A2]',
              'border-[#F5D7A2]/20 hover:border-[#F5D7A2]/20',
              'border-[#F5D7A2]/20 hover:border-[#F5D7A2]/20',
              'border-[#F5D7A2]/20 hover:border-[#F5D7A2]/20'
            ];
            
            return (
              <motion.div
                key={theme.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative`}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}>
                  {/* Number with circular border */}
                  <div className={`relative mt-8 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center ${isEven ? 'md:mr-6' : 'md:ml-0'}`}>
                    <div className={`absolute inset-0 rounded-full border-4 ${colors[index % colors.length]} opacity-20`}></div>
                    <span className={`text-3xl md:text-4xl font-bold ${textColors[index % textColors.length]}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 min-w-0 -mt-1 ${isEven ? 'md:pr-8' : 'md:pl-8'} mt-12`}>
                    <Link href={`/themes#${theme.slug}`} className="group">
                      <h3 className={`text-2xl md:text-3xl font-bold ${textColors[index % textColors.length]} mb-3 group-hover:underline`}>
                        {theme.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                      {theme.description}
                    </p>
                    <Link 
                      href={`/themes#${theme.slug}`}
                      className={`inline-flex items-center px-5 py-2 border-2 ${borderColors[index % borderColors.length]} rounded-full text-sm md:text-base font-medium ${textColors[index % textColors.length]} hover:bg-opacity-10 transition-all duration-200`}
                    >
                      {theme.ctaLink?.replace(/→/g, '').trim()}
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                  
                  {/* Image */}
                  <div className={`w-full md:w-[500px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 shadow-xl dark:shadow-gray-800/30 mt-6 md:mt-0 ${isEven ? 'md:ml-12' : 'md:mr-12'}`}>
                    <Link href={`/themes#${theme.slug}`} className="block h-full">
                      <Image
                        src={theme.image || "/placeholder.svg"}
                        alt={theme.title}
                        width={600}
                        height={500}
                        quality={100}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 dark:brightness-90"
                      />
                    </Link>
                  </div>
                </div>
                
                {/* Left border line */}
                <div className={`absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b ${colors[index % colors.length]} opacity-30 -z-10`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
