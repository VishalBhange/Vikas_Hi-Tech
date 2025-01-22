import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='shadow-md shadow-gray-400'>
      <nav className="flex justify-between items-center p-3 ml-10 font-medium relative">
        {/* Logo */}
        <div>
          <img
            src="https://vikashitechnursery.com/wp-content/uploads/2023/01/Vikas_web.png"
            alt="Logo"
            className="h-12 w-36"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-9 text-xl mr-14 relative">
          <Link to="/" className="text-gray-700 hover:text-green-500 active:text-green-700">
            Home
          </Link>
          <Link to="/about_Us" className="text-gray-700 hover:text-green-500 active:text-green-700">
            About Us
          </Link>

          {/* Dropdown */}
          <div className="relative">
            {/* Dropdown Trigger */}
            <button
              className="text-gray-700 hover:text-green-500 active:text-green-700"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Our Products
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <Link
                  to="/marigold"
                  className="block px-4 py-2 text-black hover:text-black hover:bg-[#6BB327]"
                >
                  Marigold
                </Link>
                <Link
                  to="/chrysanthemum"
                  className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]"
                >
                  Chrysanthemum
                </Link>
                <Link
                  to="/watermelon"
                  className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]"
                >
                  Watermelon
                </Link>
              </div>
            )}
          </div>

          <Link to="/blog" className="text-gray-700 hover:text-green-500 active:text-green-700">
            Blog
          </Link>
          <Link to="/media_Coverage" className="text-gray-700 hover:text-green-500 active:text-green-700">
            Media Coverage
          </Link>
          <Link to="/career" className="text-gray-700 hover:text-green-500 active:text-green-700">
            Career
          </Link>
          <Link to="/contact_Us" className="text-gray-700 hover:text-green-500 active:text-green-700">
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-green-500"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]">
            Home
          </Link>
          <Link to="/about_Us" className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]">
            About Us
          </Link>

          {/* Mobile Dropdown for "Our Products" */}
          <div>
            <p className="block px-4 py-2 text-gray-700">Our Products</p>
            <Link to="/marigold" className="block px-4 py-2 pl-6 text-gray-700 hover:text-black hover:bg-[#6BB327]">
              Marigold
            </Link>
            <Link
              to="/chrysanthemum"
              className="block px-4 py-2 pl-6 text-gray-700 hover:text-black hover:bg-[#6BB327]"
            >
              Chrysanthemum
            </Link>
            <Link to="/watermelon" className="block px-4 py-2 pl-6 text-gray-700 hover:text-black hover:bg-[#6BB327]">
              Watermelon
            </Link>
          </div>

          <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]">
            Blog
          </Link>
          <Link to="/media_Coverage" className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]">
            Media Coverage
          </Link>
          <Link to="/career" className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]">
            Career
          </Link>
          <Link to="/contact_Us" className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-[#6BB327]">
            Contact Us
          </Link>
        </div>
      )}

      
    </div>
  );
}
