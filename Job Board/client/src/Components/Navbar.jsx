import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-lime-500">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <NavLink to="/"><img src={./assets/logo.png}</NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:space-x-4">
          <ul className="flex space-x-4">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/browse-jobs" className="hover:underline">Browse Jobs</NavLink></li>
            <li><NavLink to="/pages" className="hover:underline">Pages</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>

        {/* Mobile and Tablet Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile and Tablet Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-lime-500">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:text-gray-600 absolute top-2 right-4"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <ul className="p-4 space-y-2">
              <li><NavLink to="/" className="block text-gray-800 hover:text-gray-600">Home</NavLink></li>
              <li><NavLink to="/browse-jobs" className="block text-gray-800 hover:text-gray-600">Browse Jobs</NavLink></li>
              <li><NavLink to="/pages" className="block text-gray-800 hover:text-gray-600">Pages</NavLink></li>
              <li><NavLink to="/contact" className="block text-gray-800 hover:text-gray-600">Contact</NavLink></li>
              {/* Include Login and Post Job buttons in mobile menu */}
              <li><NavLink to="/login" className="block text-gray-800 hover:text-gray-600">Login</NavLink></li>
              <li><button className="block p-2 rounded bg-blue-400 text-white hover:bg-red-500">POST JOB</button></li>
            </ul>
          </div>
        )}

        {/* Login and Post Job Button (Visible on Desktop) */}
        <div className="hidden md:flex md:items-center">
          <NavLink to="/login" className="text-gray-800 hover:text-white">Login</NavLink>
         <NavLink to="/jobpost" ><button className="ml-4 p-2 rounded bg-blue-400 hover:bg-red-500 text-white">POST JOB</button></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
