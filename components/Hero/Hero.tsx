import React from 'react';
import { motion } from "framer-motion"

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.05
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        opacity: { duration: 1.5 },
        scale: { 
          duration: 2.5,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <motion.section 
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-black px-4 overflow-hidden"
      style={{ minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Geometric Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 geometric-pattern animate-float" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Hi, I'm Chethan
        </motion.h1>

        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-gray-800"
          variants={itemVariants}
        >
          AI & ML Engineer
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
          variants={itemVariants}
        >
          Passionate about applying AI and Machine Learning to address real-world challenges.
          Skilled in computer vision, deep learning, and AI development.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
          variants={itemVariants}
        >
          <a 
            href="https://github.com/chethanachari1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 sm:px-8 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            View Projects
          </a>
          <a 
            href="mailto:chethanachari371@gmail.com"
            className="px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-600"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
};