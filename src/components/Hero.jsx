import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-8 tracking-tight leading-none">
              Web Developer
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
              I create digital experiences that are both beautiful and functional. 
              Specializing in modern web development with a focus on performance and user experience.
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
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
      </div>
    </section>
  );
};

export default Hero;