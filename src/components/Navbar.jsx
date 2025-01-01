import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';  // Import Sidebar Component

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar for Mobile */}
      <div className='md:hidden'>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/> 
      </div>
      <nav className="bg-richBlue text-softBeige py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">WebCraftery</div>

          {/* Nav Items for Desktop */}
          <div className="hidden md:flex space-x-6 font-bold items-center">
            <ul className="flex space-x-6">
              <li className="hover:text-skyBlue cursor-pointer"><Link to="/"> Home</Link></li>
              <li className="hover:text-skyBlue cursor-pointer"><Link to="/about"> About</Link></li>
              <li className="hover:text-skyBlue cursor-pointer"><Link to="/service"> Services</Link></li>
              <li className="hover:text-skyBlue cursor-pointer"><Link to="/portfolio"> Portfolio</Link></li>
              <li className="hover:text-skyBlue cursor-pointer"><Link to="/contact"> Contact</Link></li>
            </ul>

            {/* Get in Touch Button */}
            <button className="bg-skyBlue text-white font-semibold text-xl ml-5 px-4 py-2">
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="block md:hidden">
            <button className="text-skyBlue text-2xl" onClick={toggleSidebar}>
              ☰
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
