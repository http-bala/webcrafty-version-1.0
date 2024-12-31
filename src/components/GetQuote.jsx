import React from "react";

const GetQuote = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            What We Can Do For You
          </h2>
          <p className="text-lg text-gray-400">
            Request a free quote by filling out the form below.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-300 font-medium mb-2"
              >
                First Name <span className="text-red-500">(required)</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name*"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-300 font-medium mb-2"
              >
                Last Name <span className="text-red-500">(required)</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name*"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Company Email */}
            <div>
              <label
                htmlFor="companyEmail"
                className="block text-gray-300 font-medium mb-2"
              >
                Company Email <span className="text-red-500">(required)</span>
              </label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                placeholder="Company Email*"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-gray-300 font-medium mb-2"
              >
                Company Name <span className="text-red-500">(required)</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company Name*"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Company URL */}
            <div>
              <label
                htmlFor="companyURL"
                className="block text-gray-300 font-medium mb-2"
              >
                Company URL <span className="text-red-500">(required)</span>
              </label>
              <input
                type="url"
                id="companyURL"
                name="companyURL"
                placeholder="Company URL*"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Select Topic */}
            <div>
              <label
                htmlFor="selectTopic"
                className="block text-gray-300 font-medium mb-2"
              >
                Select Topic <span className="text-red-500">(required)</span>
              </label>
              <select
                id="selectTopic"
                name="selectTopic"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Your Topic*</option>
                <option value="website">Custom Website</option>
                <option value="ecommerce">E-Commerce Website</option>
                <option value="seo">SEO Services</option>
                <option value="digitalMarketing">Digital Marketing</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Get a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
