import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import Clock3D from './Clock3D';

const WelcomeSection = () => {
  const { language } = useLanguage();

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.19, 1.0, 0.22, 1.0]
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.19, 1.0, 0.22, 1.0],
        delay: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-between py-32 md:py-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-xl">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          {language === 'vi' ? 'Chào bạn, tui là B.Node' : 'Welcome to B.Node'}
        </motion.h1>
        
        <motion.div 
          className="flex items-center mb-8"
          variants={itemVariants}
        >
          <p className="text-xl text-gray-300">
            {language === 'vi' ? 'Người làm dịch vụ đáng tin' : 'Freelancer trusted'}
          </p>
          <svg className="w-6 h-6 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          variants={itemVariants}
        >
          <Link 
            to="/about"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 text-center"
          >
            {language === 'vi' ? 'Giới thiệu' : 'Introduction'}
          </Link>
          <Link 
            to="/services"
            className="bg-transparent border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
          >
            {language === 'vi' ? 'Dịch vụ của tôi' : 'Our services'}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="flex-shrink-0 mt-16 md:mt-0 order-first md:order-last mb-8 md:mb-0"
        variants={logoVariants}
      >
        <Clock3D />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeSection;