import React from 'react';
import { motion } from 'framer-motion';

// Generic motion element for hover/tap effects, e.g.
// <Motion as="a" href="#contact" whileHover={{ scale: 1.05 }} client:load>
const Motion = ({ as = 'div', children, ...props }) => {
  const Component = motion[as];
  return <Component {...props}>{children}</Component>;
};

export default Motion;
