import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';


const Header = () => {

    return (
      <div className="bg-deepNavy text-softBeige text-sm py-2 hidden md:block">
        {/* Hidden on small screens and visible on medium+ screens */}
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Contact Info */}
          <div className="flex space-x-6 cursor-pointer">
            <a href="mailto:devops@balakrishna.site"><span href="">Email: devops@balakrishna.site</span></a>
            <span>Office: 123 Webcrafty Lane</span>
            <a href="tel:8154954408"><span>Phone: +91 8154954408</span></a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 text-skyBlue">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram color="pink" size={20}/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook color="blue" size={20}/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube color="red" size={20}/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="lightBlue" size={20}/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub color="white" size={20}/>
            </a>
          </div>
        </div>
      </div>
    );
  };
  

export default Header