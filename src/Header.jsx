import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center p-3 ml-10 font-medium">
        {/* Logo */}
        <div>
          <img src="https://vikashitechnursery.com/wp-content/uploads/2023/01/Vikas_web.png" alt="Logo" className="h-12 w-36 " />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-9 text-xl mr-14">
          <a href="/" className="text-gray-700 hover:text-green-500 active:text-green-700">Home</a>
          <a href="/aboutUs" className="text-gray-700 hover:text-green-500 active:text-green-700">About Us</a>

          {/* Dropdown for "Our Products" */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-green-500 active:text-green-700"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Our Products
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                <a href="/product1" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Product 1</a>
                <a href="/product2" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Product 2</a>
                <a href="/product3" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Product 3</a>
              </div>
            )}
          </div>

          <a href="/blog" className="text-gray-700 hover:text-green-500 active:text-green-700">Blog</a>
          <a href="/mediaCoverage" className="text-gray-700 hover:text-green-500 active:text-green-700">Media Coverage</a>
          <a href="/career" className="text-gray-700 hover:text-green-500 active:text-green-700">Career</a>
          <a href="/contactUs" className="text-gray-700 hover:text-green-500 active:text-green-700">Contact Us</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-green-500"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 ">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Home</a>
          <a href="/aboutUs" className="block px-4 py-2 text-gray-700 hover:bg-green-100">About Us</a>

          {/* Dropdown for "Our Products" */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-green-500"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Our Products
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                <a href="/product1" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Product 1</a>
                <a href="/product2" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Product 2</a>
                <a href="/product3" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Product 3</a>
              </div>
            )}
          </div>

          <a href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Blog</a>
          <a href="/mediaCoverage" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Media Coverage</a>
          <a href="/career" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Career</a>
          <a href="/contactUs" className="block px-4 py-2 text-gray-700 hover:bg-green-100 ">Contact Us</a>
        </div>
      )}
    </div>

    
  );
}
