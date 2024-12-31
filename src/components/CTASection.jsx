import React from 'react';
import CTAImage from "../assets/images/cta-1.jpg"; // Make sure to replace with your actual image URL

const CTASection = () => {
  return (
    <section className="bg-[#03346E] text-white py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            We’re Ready to Work For You
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6">
            Let’s collaborate for your next project and achieve great results together.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="bg-[#6EACDA] text-[#021526] px-6 py-3 rounded-lg font-semibold hover:bg-[#E2E2B6] transition-colors"
            >
              Get A Quote
            </a>

            <div className="flex items-center text-md sm:text-xl space-x-2">
              <span className="text-xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p className="text-[#E2E2B6]">Call Us Anytime</p>
              <span className="text-[#6EACDA]">(+91) 8154954405</span>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2">
          <img
            src={CTAImage} // Replace with your image URL
            alt="CTA Image"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default CTASection;
