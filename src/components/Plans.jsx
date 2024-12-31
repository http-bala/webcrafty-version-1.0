import React, { useState } from "react";

const plans = {
  customWebsite: [
    {
      title: "Starter Website Plan",
      price: "₹4,999",
      description: "Perfect for individuals, startups, or small businesses needing a basic online presence.",
      features: [
        "1-Page Static Website (Landing Page)",
        "Mobile-Friendly Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "Social Media Links",
        "Free Domain & Hosting (1 Year)",
        "WhatsApp Chat Integration",
        "Website Speed Optimization",
        "Delivery: 5 Days",
      ],
      bonus: "FREE Logo Design (Simple)",
    },
    {
      title: "Professional Website Plan",
      price: "₹9,999",
      description: "Ideal for growing businesses looking for a modern, multi-page website.",
      features: [
        "5-Page Dynamic Website",
        "Custom Mobile-Friendly Design",
        "CMS Integration (WordPress)",
        "SEO-Friendly Setup",
        "Contact Forms & Google Maps Integration",
        "Image Slider & Gallery",
        "Social Media Integration + Share Buttons",
        "Basic Content Writing (500 words/page)",
        "Free Domain & Hosting (1 Year)",
        "Delivery: 7-10 Days",
      ],
      bonus: "Google My Business Setup, 2 Revisions Included",
    },
    {
      title: "Advanced Corporate Website Plan",
      price: "₹19,999",
      description: "For established businesses and professionals needing custom design & advanced features.",
      features: [
        "Custom 10-Page Website",
        "Responsive Design with Custom Branding",
        "CMS (Admin Panel)",
        "Advanced SEO Setup",
        "Contact Forms & Lead Capture Tools",
        "Google Analytics & Search Console Setup",
        "Live Chat & WhatsApp Integration",
        "SSL Certificate for Security",
        "Delivery: 10-14 Days",
      ],
      bonus: "FREE Logo Design (Advanced), 3 Months Free Maintenance",
    },
  ],
  ecommerceWebsite: [
    {
      title: "E-Commerce Starter Plan",
      price: "₹14,999",
      description: "Great for small businesses starting to sell products online.",
      features: [
        "Up to 20 Products",
        "Custom 5-Page Design",
        "WooCommerce Integration",
        "Basic Payment Gateway Integration",
        "Mobile-Friendly Store Design",
        "Stock Management System",
        "Free Domain, Hosting & SSL (1 Year)",
        "Delivery: 7-10 Days",
      ],
      bonus: "FREE Logo Design (Basic), 1 Hour E-Commerce Training",
    },
    {
      title: "E-Commerce Growth Plan",
      price: "₹24,999",
      description: "Designed for growing stores needing more features and scalability.",
      features: [
        "Up to 100 Products",
        "Custom 8-Page Store Design",
        "Advanced Payment Gateway Integration",
        "Product Search & Filters",
        "Coupons & Discounts Setup",
        "Abandoned Cart Recovery",
        "Free Domain, Hosting & SSL (1 Year)",
        "Delivery: 10-14 Days",
      ],
      bonus: "Google My Business Setup, 3 Months Free Maintenance",
    },
    {
      title: "E-Commerce Premium Plan",
      price: "₹39,999",
      description: "For large businesses requiring a full-fledged online store with advanced functionality.",
      features: [
        "Unlimited Products",
        "Custom 10-Page Design",
        "Advanced Payment Gateway Integration",
        "Product Variants",
        "Advanced Search & Filtering",
        "Abandoned Cart Recovery System",
        "Coupons, Discounts & Gift Cards",
        "Free Domain, Hosting & SSL (1 Year)",
        "Delivery: 14-20 Days",
      ],
      bonus: "FREE Logo Design (Advanced), Google Ads Setup & Guidance",
    },
  ],
};

const PlanCard = ({ plan }) => (
  <div className="flex flex-col justify-between p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
    <h4 className="text-3xl font-extrabold text-blue-500">{plan.price}</h4>
    <p className="mt-2 text-gray-400">{plan.description}</p>
    <ul className="mt-4 space-y-2">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start text-gray-300">
          <span className="mr-2 text-green-500">☑️</span>
          {feature}
        </li>
      ))}
    </ul>
    <div className="mt-4 text-sm text-yellow-300 font-semibold">
      Bonus: {plan.bonus}
    </div>
    <button className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Get Started
    </button>
  </div>
);

const Plans = () => {
  const [activeTab, setActiveTab] = useState("customWebsite");

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Plans</h2>
          {/* <p className="text-lg text-gray-400">
            Our Website & E-Commerce Plans
          </p> */}
          <p className="text-lg text-gray-400">
            Choose the perfect plan to take your business online!
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`py-2 px-6 rounded-lg font-bold ${
              activeTab === "customWebsite"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setActiveTab("customWebsite")}
          >
            Custom Website
          </button>
          <button
            className={`py-2 px-6 rounded-lg font-bold ${
              activeTab === "ecommerceWebsite"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setActiveTab("ecommerceWebsite")}
          >
            E-Commerce Website
          </button>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans[activeTab].map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
