import React from "react";
import {
  FaSearch,
  FaPenNib,
  FaShareAlt,
  FaPalette,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
    <div className="text-sky-600 text-4xl mb-4">
      <Icon />
    </div>
    <h3 className="text-xl font-bold text-sky-600">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: FaSearch,
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your visibility and drive traffic. Our SEO strategies improve your search engine rankings, helping your business stand out in a crowded digital space.",
    },
    {
      icon: FaPenNib,
      title: "Content Creation and Management",
      description:
        "Crafting compelling content that connects with your audience. We create and manage content that aligns with your brand’s voice and resonates with your target audience.",
    },
    {
      icon: FaShareAlt,
      title: "Social Media Management",
      description:
        "Amplify your brand on social platforms. We manage your social profiles with strategic content that increases brand awareness, engages your audience, and drives business growth.",
    },
    {
      icon: FaPalette,
      title: "Graphic Design and Branding",
      description:
        "Designs that tell your brand story. From logos to marketing materials, we create stunning visuals that represent your brand’s identity and values.",
    },
    {
      icon: FaLaptopCode,
      title: "Website Design and Development",
      description:
        "Create a seamless digital experience. We design responsive, user-friendly websites optimized for performance and designed to convert visitors into customers.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description:
        "Innovative apps for your growing business. We develop intuitive, functional mobile apps for iOS and Android that engage and satisfy your customers.",
    },
  ];
  

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-extrabold text-gray-900 mb-14">
        Explore Unique Digital Agency Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
