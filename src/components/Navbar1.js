import React, { useState } from "react";

function Navbar1() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white/30 backdrop-blur-md shadow-lg border border-white/20 font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <a className="text-2xl font-bold text-gray-800" href="#">
          56-EAST
        </a>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Home Link */}
          <a
            className="text-gray-800 hover:text-blue-500 transition"
            href="/"
          >
            Home
          </a>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 hover:text-blue-500 transition focus:outline-none"
            >
              Order link ▾
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    href="/Categories"
                  >
                    Categories
                  </a>
                </li>
                
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    href="/Payment"
                  >
                    Pay
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
