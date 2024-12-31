import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a project take?",
      answer: "The project timeline depends on the complexity and requirements. On average, it can take anywhere from 2 to 6 weeks."
    },
    {
      question: "What services do you offer?",
      answer: "We offer web development, graphic design, SEO services, digital marketing, and much more."
    },
    {
      question: "Do you provide support after the project is completed?",
      answer: "Yes, we offer post-project support, including maintenance and updates."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and bank transfers."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto md:w-[50%] px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg shadow-md transition-all ${
                activeIndex === index ? "bg-blue-100 border-blue-500" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span className="text-blue-500">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
