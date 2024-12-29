"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaTools, FaBriefcase, FaEnvelope, FaChartLine } from "react-icons/fa"; // Importing icons

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center px-6 lg:px-14 py-6 gap-4 w-full h-auto border-b border-gray-300 relative sm:h-[80px]">
      {/* Sub Div: Container */}
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1280px] relative">
       {/* Logo/Text Div */}
{/* Logo/Text Div */}
<div className="font-inter font-bold text-[20px] leading-[24px] text-[#111827] whitespace-nowrap sm:text-[10px] md:text-[30px] lg:text-[26px] flex items-center">
  I SEO Your Success
  <FaChartLine className="ml-2 text-blue-600" size={20} />
</div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-[#111827] z-30"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-[100%] left-1/2 transform -translate-x-1/2 w-[280px] bg-white shadow-lg z-50 rounded-md ${isMenuOpen ? "block" : "hidden"}`}
          >
            <div className="flex flex-col py-4 px-6">
              <Link
                href="#about"
                className="py-2 text-[#111827] hover:bg-blue-400 hover:text-white transition-colors duration-300 rounded flex items-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser className="mr-2 text-blue-600" size={20} />
                About
              </Link>
              <Link
                href="#skills"
                className="py-2 text-[#111827] hover:bg-blue-400 hover:text-white transition-colors duration-300 rounded flex items-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTools className="mr-2 text-blue-600" size={20} />
                Skills
              </Link>
              <Link
                href="#experience"
                className="py-2 text-[#111827] hover:bg-blue-400 hover:text-white transition-colors duration-300 rounded flex items-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaBriefcase className="mr-2 text-blue-600" size={20} />
                Experience
              </Link>
              <Link
                href="#contact"
                className="py-2 text-[#111827] hover:bg-blue-400 hover:text-white transition-colors duration-300 rounded flex items-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaEnvelope className="mr-2 text-blue-600" size={20} />
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-row gap-6">
          <Link href="#about" className="text-[#111827] hover:bg-blue-400 hover:text-white flex items-center py-2 px-3 rounded transition-colors duration-300 font-semibold">
            <FaUser className="mr-2 text-blue-600" size={20} />
            About
          </Link>
          <Link href="#skills" className="text-[#111827] hover:bg-blue-400 hover:text-white flex items-center py-2 px-3 rounded transition-colors duration-300 font-semibold">
            <FaTools className="mr-2 text-blue-600" size={20} />
            Skills
          </Link>
          <Link href="#experience" className="text-[#111827] hover:bg-blue-400 hover:text-white flex items-center py-2 px-3 rounded transition-colors duration-300 font-semibold">
            <FaBriefcase className="mr-2 text-blue-600" size={20} />
            Experience
          </Link>
          <Link href="#contact" className="text-[#111827] hover:bg-blue-400 hover:text-white flex items-center py-2 px-3 rounded transition-colors duration-300 font-semibold">
            <FaEnvelope className="mr-2 text-blue-600" size={20} />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
