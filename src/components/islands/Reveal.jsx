import React from 'react';
import { motion } from 'framer-motion';

// Entrance animation wrapper. Accepts the same props as motion.div
// (initial, animate, whileInView, transition, className) and wraps
// Astro-rendered children.
// Note: Astro places children inside a display:contents <astro-slot>, so
// Tailwind space-x/space-y classes must go on an inner element, not here.
const Reveal = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

export default Reveal;
