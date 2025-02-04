import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll({
    // Track scroll relative to document height minus viewport height
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 40,
    mass: 0.2
  });

  return (
    <motion.div
      className="fixed top-[64px] left-0 right-0 h-[2px] bg-black/10 z-50"
      style={{ transformOrigin: "0%" }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-black to-gray-700"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </motion.div>
  );
}; 