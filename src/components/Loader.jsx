// src/components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <motion.div
        className="relative w-24 h-24 border-4 border-t-4 border-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      >
        {/* Dots around the circle */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
        />
        <motion.div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
