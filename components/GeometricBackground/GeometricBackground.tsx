import React from 'react';
import { motion } from 'framer-motion';

export const GeometricBackground: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10 opacity-[0.03]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-repeat w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #333333 12%, transparent 12.5%, transparent 87%, #333333 87.5%, #333333),
            linear-gradient(150deg, #333333 12%, transparent 12.5%, transparent 87%, #333333 87.5%, #333333),
            linear-gradient(30deg, #333333 12%, transparent 12.5%, transparent 87%, #333333 87.5%, #333333),
            linear-gradient(150deg, #333333 12%, transparent 12.5%, transparent 87%, #333333 87.5%, #333333),
            linear-gradient(60deg, #33333377 25%, transparent 25.5%, transparent 75%, #33333377 75%, #33333377)
          `,
          backgroundSize: '40px 70px',
          backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0'
        }}
      />
    </motion.div>
  );
}; 