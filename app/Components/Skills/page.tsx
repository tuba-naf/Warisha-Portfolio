import React from 'react';
import {
  FaFileAlt,
  FaExternalLinkAlt,
  FaTools,
  FaShareAlt,
  FaPenNib,
  FaChartLine,
  FaSearch,
  FaBrain,
} from 'react-icons/fa';

const Skills1 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full max-w-screen-xl mx-auto">
      {/* Dash Bar (Separator) */}
      <div className="flex flex-row justify-center items-center w-full py-2  mt-10">
        <div className="w-[30px] h-[4px] bg-gray-300"></div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col items-center justify-center w-full h-auto py-8 bg-white">
        {/* Skills Button */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[1216px] mb-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Skills
          </button>
        </div>

        {/* Container */}
        <div className="flex flex-col items-center min-h-[200px] w-full max-w-screen-lg gap-12 px-6 py-8">
          {/* Subtext */}
          <div className="flex flex-col items-center justify-center w-full h-7">
            <p className="text-center text-gray-600">
              The skills, tools, and technologies I am really good at:
            </p>
          </div>

          {/* Icons Grid Container */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full max-w-[960px] mx-auto px-6 py-4">
              {/* Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full place-items-center">
                {/* Icon: On-page SEO */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaFileAlt size={40} color="blue" />
                  <span className="text-center mt-1 text-gray-800">On-page SEO</span>
                </div>
                {/* Icon: Off-page SEO */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaExternalLinkAlt size={40} color="green" />
                  <span className="text-center mt-1 text-gray-800">Off-page SEO</span>
                </div>
                {/* Icon: Technical SEO */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaTools size={40} color="red" />
                  <span className="text-center mt-1 text-gray-800">Technical SEO</span>
                </div>
                {/* Icon: Social Media Marketing */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaShareAlt size={40} color="purple" />
                  <span className="text-center mt-1 text-gray-800">Social Media</span>
                </div>
                {/* Icon: Content Marketing */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaPenNib size={40} color="orange" />
                  <span className="text-center mt-1 text-gray-800">Content</span>
                </div>
                {/* Icon: Ahrefs */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaChartLine size={40} color="cyan" />
                  <span className="text-center mt-1 text-gray-800">Ahrefs</span>
                </div>
                {/* Icon: SEMrush */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaSearch size={40} color="teal" />
                  <span className="text-center mt-1 text-gray-800">SEMrush</span>
                </div>
                {/* Icon: Prompt Engineering */}
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                  <FaBrain size={40} color="pink" />
                  <span className="text-center mt-1 text-gray-800">Prompt Eng.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills1;
