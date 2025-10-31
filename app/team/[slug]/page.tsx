'use client';

import { TeamMember, teamMembers } from '@/data/team';
import { motion, Variants } from 'framer-motion';
import { Briefcase, Linkedin, Mail, Sparkles, Twitter, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 * i,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

// Define the type for the unwrapped params
type UnwrappedParams = Awaited<Promise<{ slug: string }>>;

export default function TeamMemberPage({ params }: PageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [member, setMember] = React.useState<TeamMember | null>(null);
  
  // Properly unwrap the params Promise using React.use()
  const unwrappedParams = React.use<UnwrappedParams>(params as unknown as Promise<UnwrappedParams>);
  const { slug } = unwrappedParams;
  
  React.useEffect(() => {
    const foundMember = teamMembers.find(m => m.slug === slug);
    setMember(foundMember || null);
    setIsLoading(false);
  }, [slug]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!member) {
    notFound();
  }

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen pt-20 md:pt-24 pb-16 bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        {/* Back button */}
        <motion.div 
          variants={item}
          className="mb-6"
        >
          <Link 
            href="/about"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Team
          </Link>
        </motion.div>

        <motion.div 
          variants={item}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <div className="md:flex">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/5 relative h-96 md:h-auto group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10" />
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-800 capitalize">{member.department}</span>
                </div>
              </div>

              {/* Social links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 z-20 flex gap-3"
              >
                {member.social?.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-primary hover:bg-white transition-all hover:scale-110 shadow-md"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.social?.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-primary hover:bg-white transition-all hover:scale-110 shadow-md"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social?.email && (
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-primary hover:bg-white transition-all hover:scale-110 shadow-md"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </motion.div>
            </motion.div>
            
            {/* Content Section */}
            <div className="p-6 md:p-8 lg:p-12 md:w-3/5 flex flex-col">
              <div className="flex-grow">
                {/* Header */}
                <div className="mb-8">
                  <motion.h1 
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3"
                  >
                    {member.name}
                  </motion.h1>
                  <motion.div 
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="flex items-center gap-2 text-primary/90 mb-4"
                  >
                    <Briefcase className="w-5 h-5" />
                    <p className="text-xl font-semibold">{member.role}</p>
                  </motion.div>
                  {/* <motion.p 
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-gray-600 text-base sm:text-lg italic"
                  >
                    {member.bio}
                  </motion.p> */}
                </div>

                {/* Detailed Bio */}
                <motion.div 
                  variants={item}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 mb-8 border border-primary/20 hover:shadow-md transition-shadow"
                >
                 
                  {member.detailedBio && (
                    <div 
                      className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: member.detailedBio.replace(/\n\n/g, '<br/><br/>') }}
                    />
                  )}
                </motion.div>
                <motion.div 
                  variants={item}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                >
                  <motion.div 
                    whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    className="bg-white border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Department</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900 capitalize">{member.department}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    className="bg-white border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Specialization</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{member.role.split('&')[0].trim()}</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
