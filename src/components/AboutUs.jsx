import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import aboutimage1 from "../assets/images/about-1.jpg";

const Counter = ({ start = 0, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <span>{count}+</span>;
};

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[{
            end: 3,
            label: "Years Experience",
            description:
              "Tailored Web Design for Every Business With over three years of expertise, we create custom websites that reflect your brand and drive results.",
          },
          {
            end: 50,
            label: "Project Done",
            description:
              "Delivering Results Across Industries We’ve helped over 50 businesses build their online presence with creative, user-friendly designs.",
          },
          {
            end: 10,
            label: "Industry Recognitions",
            description:
              "Proven Success in Web Design and Digital Marketing Our work has been recognized with 10+ industry awards, showcasing our commitment to quality and innovation.",
          }].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h2 className="text-5xl font-bold text-sky-600">
                <Counter end={stat.end} duration={2000} />
              </h2>
              <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Added fade-up effect
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-5xl font-extrabold text-gray-900 leading-snug">
              About Our Company
            </h3>
            <h4 className="text-2xl font-bold text-sky-600 mt-4">
              Connecting People And Build Technology
            </h4>
            <p className="text-xl font-bold text-gray-800 mt-2">
              <Counter end={3} duration={2000} />{" "}
              <span className="text-base font-normal">Years Experience</span>
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Webcrafty, we’re here to help businesses in Daman thrive in the
              digital world. What started as a dream to bring technology and
              businesses together has now become a dedicated digital marketing
              agency ready to support your growth.
            </p>
            <ul className="mt-6 space-y-2">
              <h4 className="text-2xl font-bold text-sky-600 mt-4">
                Why Work With Us?
              </h4>
              {[
                "Custom Plans for Your Business",
                "Creative & Innovative Ideas",
                "Personalized Support",
                "Results That Matter",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-sky-600 mt-1 rounded-full"></span>
                  <p className="text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
            <motion.button
              className="mt-6 bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition"
              whileHover={{ scale: 1.1 }}
            >
              Get Started Now
            </motion.button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }} // Added fade-up effect
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden shadow-md">
              <img
                src={aboutimage1}
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
