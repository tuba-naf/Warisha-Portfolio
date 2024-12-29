import React from 'react';

// Sample experiences data
const experiences = [
  {
    year: 'March-Sep,2024',
    title: 'SEO Executive',
    description: 'Create blog structures for new and update blogs. Draft blogs on WordPress Review event blog and make translations in 16 different regions, and languages as per the Semantic SEO practices. Acquire quality backlinks from authoritative sites through guest post. Weekly monitoring of ranking.' ,
    company: 'Gaditek',
  },
  {
    year: 'Sep-Feb 2024',
    title: 'SEO Executive ',
    description: 'To create 20 backlinks daily with the help of relevant keywords to boost website traffic.Performed weekly performance checks on keywords, optimizing and adding new keywords to improve visibility.To upload products on a daily basis on the website of WordPress and Shopify.Collaborate with writers for content creation. To manage social media channels to promote the online presence of the company.',
    company: 'Digit Creator',
  },
  
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 gap-12 w-full max-w-[1280px] mx-auto">
      {/* Dash Bar and Experience Button */}
      <div className="flex flex-col items-center w-full gap-4">
        {/* Dash Bar */}
        <div className="w-8 h-1 bg-gray-300"></div>
        {/* Experience Button */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          aria-label="View experience details"
        >
          Experience
        </button>
      </div>

      {/* Main Experience Rows */}
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col items-start p-6 sm:p-8 w-full max-w-[896px] bg-white shadow-md rounded-lg gap-6 mb-6"
        >
          {/* Inner Row */}
          <div className="flex flex-col sm:flex-row items-start gap-12 w-full">
            {/* Column for Year */}
            <div className="flex items-start gap-6 w-full sm:w-[146px]">
              <span className="text-gray-800 font-medium">{experience.year}</span>
            </div>
            {/* Column for Title and Description */}
            <div className="flex flex-col items-start gap-4 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-500 transition duration-300">
                {experience.title}
              </h3>
              <p className="text-gray-700">{experience.description}</p>
            </div>
            {/* Column for Company Name */}
            <div className="flex items-start gap-3 w-full sm:w-auto">
              <span className="text-gray-900 font-medium">{experience.company}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
