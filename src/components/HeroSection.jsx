import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slides from '../utils/bannerText';
import Button from './Button';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-left justify-center text-center text-white px-10">
            <div className="lg:w-1/2 text-center md:text-left">
              <AnimatePresence>
                {index === currentIndex && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                    key={slide.id}
                  >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                    <div className="flex space-x-4 justify-center md:justify-start">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm lg:text-lg font-semibold hover:bg-blue-700 transition"
                      >
                        Get Started
                      </motion.button>
                      <Button
                      text="Learn More"
                      animation="shadow"
                        className="bg-gray-200 text-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm lg:text-lg font-semibold hover:bg-gray-300 transition"
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
