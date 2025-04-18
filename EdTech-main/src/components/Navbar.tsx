import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header
      className={`w-full z-[999999999] relative transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 flex items-center"
          >
            <span className="bg-indigo-600 text-white p-1 rounded mr-1">
              Ed
            </span>
            tech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            <div className="flex space-x-6 text-base font-medium">
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-indigo-600 transition-colors relative group"
              >
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/courses"
                className="text-gray-700 hover:text-indigo-600 transition-colors relative group"
              >
                Courses
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/calendar"
                className="text-gray-700 hover:text-indigo-600 transition-colors relative group"
              >
                Calendar
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/leaderboard"
                className="text-gray-700 hover:text-indigo-600 transition-colors relative group"
              >
                Leaderboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                Login
              </button>
              <button className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md">
                Free Trial
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                }`}
              />
              <span
                className={`absolute h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "w-0 opacity-0"
                    : "w-6 opacity-100 translate-y-2.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 flex items-center"
            onClick={toggleMenu}
          >
            <span className="bg-indigo-600 text-white p-1 rounded mr-1">
              Ed
            </span>
            tech
          </Link>

          <button
            className="p-2 text-gray-800 hover:text-indigo-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col px-6 py-6 space-y-6">
          <Link
            to="/calendar"
            className="text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Calendar
          </Link>
          <Link
            to="/courses"
            className="text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Courses
          </Link>
          <Link
            to="/dashboard"
            className="text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
          <Link
            to="/leaderboard"
            className="text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Leaderboard
          </Link>

          <div className="flex flex-col space-y-4 pt-4">
            <button
              className="w-full py-3 text-center text-indigo-600 font-medium border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              onClick={toggleMenu}
            >
              Login
            </button>
            <button
              className="w-full py-3 text-center bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
              onClick={toggleMenu}
            >
              Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
