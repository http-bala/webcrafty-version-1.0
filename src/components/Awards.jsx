import React from "react";
import { motion } from "framer-motion";

const AwardStep = ({ number, title, description, custom }) => (
  <motion.div
    className="flex flex-col items-center text-center px-6 py-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay: custom * 0.2, // Stagger animation delay based on index
    }}
    viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of it is visible
  >
    <motion.div
      className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-2 border-gray-500"
      whileHover={{ scale: 1.2, rotate: 360 }} // On hover, scale and rotate the number circle
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <span className="text-2xl font-bold text-left">{number}</span>
    </motion.div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </motion.div>
);

const Awards = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "Meet with the client to gather detailed information about their brand, objectives, & expectations.",
    },
    {
      number: "02",
      title: "Concept Development",
      description:
        "Crafting innovative concepts based on your objectives and brand vision to make the idea come to life.",
    },
    {
      number: "03",
      title: "Design & Production",
      description:
        "Execute the idea with detailed design and production to ensure a high-quality final product.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-8">
          Our Awards
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Simple Steps to Complete Work, How It Works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AwardStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              custom={index} // Pass index for staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
