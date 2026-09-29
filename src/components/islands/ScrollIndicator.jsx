import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const ScrollIndicator = () => (
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
      <FiArrowDown className="w-6 h-6 text-black" />
    </motion.div>
  </motion.div>
);

export default ScrollIndicator;
