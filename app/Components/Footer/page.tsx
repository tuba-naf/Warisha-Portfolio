import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <div className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-12 w-full max-w-screen-xl mx-auto">
      {/* Dash Bar and Footer Button */}
      <div className="flex flex-col items-center w-full gap-4">
        {/* Dash Bar */}
        <div className="w-8 h-1 bg-gray-300"></div>
        {/* Footer Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Get in Touch
        </button>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[960px]">
        {/* "What’s next?" text */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-lg text-gray-800">
            What is next? Feel free to reach out to me if you are looking for an SEO expert, have a query or need a success roadmap to elevate your brand.
          </div>
        </div>

        {/* Contact Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[596px] sm:justify-center">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500" />
            <span className="text-gray-700">warishaalvi96@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-500" />
            <span className="text-gray-700">03340291019</span>
          </div>
        </div>
      </div>

      {/* Optional Bottom Text */}
      <div className="text-center text-gray-900">
        <p>&copy;2024 Designed & Created by Tuba Nafees.</p>
      </div>
    </div>
  );
};

export default Footer;
