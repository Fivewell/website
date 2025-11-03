'use client'

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroSlides = [
  {
    image: '/assets/SprinklerOriginal.jpg',
    title: 'Sustainable Solutions for a Sustainable Future',
    subtitle: 'Driving transformation in Africa and beyond through innovative and sustainable solutions.',
    cta: 'Discover Our Mission'
  },
  {
    image: '/assets/NairobiCity.jpg',
    title: 'Sustainable Solutions for a Sustainable Future',
    subtitle: 'Driving transformation in Africa and beyond through innovative and sustainable solutions.',
    cta: 'Discover Our Mission'
  },
  {
    image: '/assets/Pollution.jpg',
    title: 'Sustainable Solutions for a Sustainable Future',
    subtitle: 'Driving transformation in Africa and beyond through innovative and sustainable solutions.',
    cta: 'Explore Tech'
  },
  {
    image: '/assets/Solar.jpg',
    title: 'Sustainable Solutions for a Sustainable Future',
    subtitle: 'Driving transformation in Africa and beyond through innovative and sustainable solutions.',
    cta: 'See Our Research'
  },
  {
    image: '/assets/Packhouse.jpg',
    title: 'Sustainable Solutions for a Sustainable Future',
    subtitle: 'Driving transformation in Africa and beyond through innovative and sustainable solutions.',
    cta: 'Discover Our Mission'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[72vh] overflow-hidden pt-24 pb-16">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 pb-20 mt-28 md:py-28 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          
          {/* <motion.div
            key={`cta-${currentSlide}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              {heroSlides[currentSlide].cta}
            </button>
          </motion.div> */}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform mt-24 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform mt-24 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
