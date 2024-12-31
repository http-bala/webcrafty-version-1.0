import React from 'react';

const ModernFooter = () => {
  return (
    <footer className="bg-[#021526] text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Footer Top - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:text-[#6EACDA] transition-colors">About Us</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#6EACDA] transition-colors">Our Gallery</a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#6EACDA] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="/team" className="hover:text-[#6EACDA] transition-colors">Our Team</a>
              </li>
            </ul>
          </div>

          {/* Working Time */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Working Time</h3>
            <p className="text-gray-300 mb-2">Mon - Fri: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-300 mb-2">Saturday: 10:00 AM - 6:00 PM</p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p>Email: <a href="mailto:support@agency.com" className="hover:text-[#6EACDA]">support@agency.com</a></p>
              </li>
              <li>
                <p>Phone: <span className="text-[#6EACDA]">+91 8154954408</span></p>
              </li>
              <li>
                <p>Address: 2589 Dorland Street Luke INUA, Berlin, Germany</p>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe Newsletter</h3>
            <p className="text-gray-300 mb-4">Sign up to receive the latest updates and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 w-full rounded-lg bg-[#03346E] text-white focus:outline-none"
              />
              <button className="bg-[#6EACDA] text-[#021526] px-6 py-2 rounded-lg font-semibold hover:bg-[#E2E2B6] transition-colors">
                SignUp
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <label>
                <input type="checkbox" className="mr-2" />
                I’m okay with getting emails and having that tracked to improve my experience
              </label>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-gray-600 pt-6">
          <p className="text-sm text-gray-400">
            &copy; 2024 Runok. All Rights Reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="/Privacy" className="hover:text-[#6EACDA]">Privacy & Cookie Policy</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#6EACDA]">Terms of Services</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default ModernFooter;
