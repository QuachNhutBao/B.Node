import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

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
    hidden: { scale: 0.9, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.19, 1.0, 0.22, 1.0],
        delay: 0.3
      }
    }
  };

  // 3D logo with more complex design
  const Logo3DLarge = () => (
    <motion.svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <radialGradient id="sphereGradientLarge" cx="50%" cy="50%" r="50%" fx="45%" fy="45%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
        </radialGradient>
        
        <filter id="glowLarge" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        
        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        
        <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      
      {/* Outer glow effect */}
      <circle cx="100" cy="100" r="75" fill="#3b82f6" opacity="0.15" filter="url(#glowLarge)" />
      
      {/* Main sphere */}
      <circle cx="100" cy="100" r="60" fill="url(#sphereGradientLarge)" />
      
      {/* Node particles with different colors and sizes */}
      <circle cx="55" cy="55" r="9" fill="#60a5fa" opacity="0.9" />
      <circle cx="150" cy="50" r="12" fill="#fcd34d" opacity="0.9" />
      <circle cx="55" cy="150" r="10" fill="#f3f4f6" opacity="0.9" />
      <circle cx="150" cy="150" r="11" fill="#60a5fa" opacity="0.9" />
      <circle cx="100" cy="30" r="8" fill="#fcd34d" opacity="0.8" />
      <circle cx="170" cy="100" r="8" fill="#60a5fa" opacity="0.8" />
      <circle cx="100" cy="170" r="8" fill="#f3f4f6" opacity="0.8" />
      <circle cx="30" cy="100" r="8" fill="#fcd34d" opacity="0.8" />
      
      <circle cx="75" cy="40" r="6" fill="#f3f4f6" opacity="0.6" />
      <circle cx="160" cy="75" r="6" fill="#60a5fa" opacity="0.6" />
      <circle cx="125" cy="160" r="6" fill="#fcd34d" opacity="0.6" />
      <circle cx="40" cy="125" r="6" fill="#f3f4f6" opacity="0.6" />
      
      {/* Connecting lines with gradients and varied widths */}
      <path d="M80 80 L60 60" stroke="url(#lineGradient1)" strokeWidth="2" strokeLinecap="round" />
      <path d="M120 80 L140 60" stroke="url(#lineGradient2)" strokeWidth="2" strokeLinecap="round" />
      <path d="M80 120 L60 140" stroke="url(#lineGradient3)" strokeWidth="2" strokeLinecap="round" />
      <path d="M120 120 L140 140" stroke="url(#lineGradient1)" strokeWidth="2" strokeLinecap="round" />
      
      <path d="M100 80 L100 40" stroke="url(#lineGradient2)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M120 100 L160 100" stroke="url(#lineGradient1)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 120 L100 160" stroke="url(#lineGradient3)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M80 100 L40 100" stroke="url(#lineGradient2)" strokeWidth="1.5" strokeLinecap="round" />
      
      <path d="M85 70 L75 45" stroke="#f3f4f6" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M130 85 L155 75" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M115 130 L130 155" stroke="#fcd34d" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M70 115 L45 125" stroke="#f3f4f6" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      
      {/* Center hollow with gradient */}
      <circle cx="100" cy="100" r="25" fill="#1f2937" />
      <circle cx="100" cy="100" r="15" fill="#111827" />
    </motion.svg>
  );

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

      {/* 3D B.Node Logo */}
      <div className="flex-shrink-0 mt-16 md:mt-0 order-first md:order-last mb-8 md:mb-0">
        <Logo3DLarge />
      </div>
    </motion.div>
  );
};

export default WelcomeSection;