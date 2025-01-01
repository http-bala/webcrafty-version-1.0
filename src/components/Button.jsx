import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  text = 'Button', // Default button text
  onClick, // Function to handle button clicks
//   variant = 'primary', // Button style variant
  className = '', // Additional CSS classes
  animation = 'scale', // Hover animation type
}) => {
// Define hover animations
const animations = {
    scale: { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 } },
    rotate: { whileHover: { rotate: 5, scale: 1.05 }, whileTap: { scale: 0.95 } },
    shadow: { whileHover: { boxShadow: '0px 8px 20px rgba(0,0,0,0.2)' } },
    slide: { whileHover: { x: 5 }, whileTap: { x: -5 } },
    wiggle: {
      whileHover: { rotate: [0, 10, -10, 10, 0], transition: { duration: 0.4 } },
    },
  };

  return (
    <motion.button
      className={`${className}`}
      {...animations[animation]}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
