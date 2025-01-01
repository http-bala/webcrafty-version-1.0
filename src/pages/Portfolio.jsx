// src/pages/Portfolio.jsx
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import aboutImage from "../assets/images/about-1.jpg";

const Portfolio = () => {
  // Project categories
  const categories = ['All', 'Web Development', 'Graphic Design', 'SEO', 'Products', 'Content Writing'];

  // Projects data
  const allProjects = [
    {
      title: 'Project 1',
      description: 'A brief description of a Web Development project.',
      image: '/path/to/project1-image.jpg',
      link: '/project-1',
      category: 'Web Development',
    },
    {
      title: 'Project 2',
      description: 'A brief description of a Graphic Design project.',
      image: '/path/to/project2-image.jpg',
      link: '/project-2',
      category: 'Graphic Design',
    },
    {
      title: 'Project 3',
      description: 'A brief description of an SEO project.',
      image: '/path/to/project3-image.jpg',
      link: '/project-3',
      category: 'SEO',
    },
    {
      title: 'Project 4',
      description: 'A brief description of a Product.',
      image: '/path/to/project4-image.jpg',
      link: '/project-4',
      category: 'Products',
    },
    {
      title: 'Project 5',
      description: 'A brief description of a Content Writing project.',
      image: '/path/to/project5-image.jpg',
      link: '/project-5',
      category: 'Content Writing',
    },
  ];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div>
      <PageHeader title="Portfolio" backgroundImage={aboutImage} />
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4 text-center">
        {/* <h2 className="text-4xl font-bold text-gray-800 mb-8">My Portfolio</h2> */}

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto scrollbar-hidden">
          <ul className="flex space-x-4 whitespace-nowrap">
            {categories.map(category => (
              <li key={category}>
                <button
                  className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 
                    ${selectedCategory === category 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-gray-300 shadow-lg'
                      : 'bg-white text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white border border-gray-300'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-xl font-semibold">
                More Info
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Portfolio;
