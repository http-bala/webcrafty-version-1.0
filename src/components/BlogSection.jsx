import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-[#021526] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Latest News & Articles</h2>
        <p className="text-center mb-12">From the blog</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#03346E] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Designing a Neumorphism Dashboard with API Blog Integration Using React.js
            </h3>
            <p className="text-gray-300 mb-4">11/21/2024</p>
            <p className="text-gray-300 mb-6">Post by: Balakrishna Kolla</p>
            <a
              href="#"
              className="text-[#6EACDA] hover:text-[#E2E2B6] transition-colors"
            >
              Read more...
            </a>
          </div>

          {/* Add more posts here */}
          <div className="bg-[#03346E] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Sample Blog Post Title
            </h3>
            <p className="text-gray-300 mb-4">12/01/2024</p>
            <p className="text-gray-300 mb-6">Post by: Balakrishna Kolla</p>
            <a
              href="#"
              className="text-[#6EACDA] hover:text-[#E2E2B6] transition-colors"
            >
              Read more...
            </a>
          </div>
          
          {/* Add more posts as needed */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
