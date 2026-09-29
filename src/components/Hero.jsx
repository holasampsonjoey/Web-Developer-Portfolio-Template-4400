import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowDown } = FiIcons;

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-12 pt-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-8 tracking-tight leading-none">
              Sampson Joey
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-16 max-w-4xl leading-relaxed">
              Full Stack Developer & UI/UX Designer specializing in creating beautiful, 
              functional websites and web applications. Based in Austin, TX. Available for 
              freelance projects and collaborations.
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-black text-white px-12 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Let's Work Together
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-black text-black px-12 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="text-sm uppercase tracking-widest mb-4 text-gray-500">Scroll Down</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <SafeIcon icon={FiArrowDown} className="w-6 h-6 text-black" />
          </motion.div>
        </motion.div>

        {/* Colored dots decoration */}
        <div className="absolute top-1/3 right-12 hidden lg:block">
          <div className="w-4 h-4 rounded-full bg-blue-500 mb-3"></div>
          <div className="w-4 h-4 rounded-full bg-green-500 mb-3"></div>
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
