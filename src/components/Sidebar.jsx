import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-[#03346E] text-white z-50 transform transition-transform duration-300 md:relative md:w-1/4 md:block ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button for Mobile */}
      <div className="flex justify-end p-4 md:hidden">
        <button onClick={toggleSidebar} className="text-white text-2xl">×</button>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col items-center space-y-6 p-6">
        {/* Social Icons */}
        <div className="flex space-x-4 text-skyBlue">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="pink" size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook color="blue" size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube color="red" size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color="lightBlue" size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub color="white" size={20} />
          </a>
        </div>

        {/* Links */}
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-lg font-medium text-[#E2E2B6] hover:text-[#6EACDA]">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-medium text-[#E2E2B6] hover:text-[#6EACDA]">About</Link>
          </li>
          <li>
            <Link to="/service" className="text-lg font-medium text-[#E2E2B6] hover:text-[#6EACDA]">Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-lg font-medium text-[#E2E2B6] hover:text-[#6EACDA]">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-medium text-[#E2E2B6] hover:text-[#6EACDA]">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
