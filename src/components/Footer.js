import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  // Don't render footer on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className="bg-transparent text-gray-700 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left side */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold text-gray-800">56 - East</h5>
            <p className="text-sm text-gray-600 mt-1">© 2025 Company, Inc. All rights reserved.</p>
          </div>

          {/* Right side navigation */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Features</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">About</a></li>
          </ul>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
