import React, { useState, useEffect } from "react";
import aboutimage1 from "../assets/images/about-1.jpg"

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold text-sky-600">
              <Counter end={3} duration={2000} />
            </h2>
            <p className="mt-2 text-lg font-medium text-gray-700">
              Years Experience
            </p>
            <p className="mt-1 text-sm text-gray-500">
            Tailored Web Design for Every Business
            With over three years of expertise, we create custom websites that reflect your brand and drive results.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-sky-600">
              <Counter end={50} duration={2000} />
            </h2>
            <p className="mt-2 text-lg font-medium text-gray-700">
              project done 
            </p>
            <p className="mt-1 text-sm text-gray-500">
            Delivering Results Across Industries 
            We’ve helped over 50 businesses build their online presence with creative, user-friendly designs.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-sky-600">
              <Counter end={10} duration={2000} />
            </h2>
            <p className="mt-2 text-lg font-medium text-gray-700">
            Industry Recognitions
            </p>
            <p className="mt-1 text-sm text-gray-500">
            Proven Success in Web Design and Digital Marketing
Our work has been recognized with 10+ industry awards, showcasing our commitment to quality and innovation.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
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
            At Webcrafty, we’re here to help businesses in Daman thrive in the digital world. What started as a dream to bring technology and businesses together has now become a dedicated digital marketing agency ready to support your growth.
            </p>
            <ul className="mt-6 space-y-2">
            <h4 className="text-2xl font-bold text-sky-600 mt-4">
            Why Work With Us?
            </h4>
              <li className="flex  space-x-2">
                <span className="w-3 h-3 bg-sky-600 mt-1 rounded-full"></span>
                <p className="text-gray-600">Custom Plans for Your Business</p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-sky-600 rounded-full"></span>
                <p className="text-gray-600">Creative & Innovative Ideas</p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-sky-600 rounded-full"></span>
                <p className="text-gray-600">Personalized Support</p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-sky-600 rounded-full"></span>
                <p className="text-gray-600">Results That Matter</p>
              </li>
            </ul>
            <button className="mt-6 bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition">
              Get Started Now
            </button>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden shadow-md">
              <img
                src={aboutimage1}
                alt="About Us"
                className="w-full h-full object-fit "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
