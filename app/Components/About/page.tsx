import React from "react";
import Image from "next/image";

const About1: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center p-6 sm:p-8 md:p-12 w-full max-w-[1440px] h-auto bg-gray-50 mx-auto">
      {/* Top Div */}
      <div className="flex flex-row justify-between items-center py-4 w-full max-w-[1440px] h-auto bg-gray-50 mt-0">
        {/* Dash Bar */}
        <div className="w-[30px] h-[4px] bg-gray-300 mx-auto"></div>
      </div>
      {/* About Button */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[1216px] mt-1">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">About</button>
      </div>
      {/* Content Div */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 md:px-8 mt-12 gap-12 w-full max-w-[1280px] mx-auto">
        {/* Picture on Left */}
        <div className="flex justify-center items-center w-full sm:w-[50%] lg:w-[45%]">
          <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto bg-gray-200 rounded-full shadow-lg transform hover:scale-110 hover:shadow-2xl transition-transform duration-500 ease-in-out">
            <Image
              src="/Image/Warisha.jpg"
              alt="Description of Image"
              width={500}
              height={500}
              quality={90}
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Content on Right */}
        <div className="flex flex-col justify-center lg:justify-start gap-4 w-full sm:w-[50%] lg:w-[55%] text-center lg:text-left mt-8">
          <p className="text-gray-700 text-justify text-sm sm:text-base md:text-lg leading-relaxed">
            Warisha is a dynamic SEO Executive with a rich blend of experience
            in digital marketing and a solid foundation in quality control
            within the pharmaceutical sector. Her journey has seamlessly
            transitioned from scientific research to the forefront of digital
            marketing, driven by a passion for continuous learning and
            innovation. Warisha excels in optimizing website visibility and
            driving organic traffic growth. With expertise in On-Page SEO,
            Off-Page SEO, and YouTube SEO, she specializes in leveraging
            semantic SEO and AI in SEO to stay ahead of the latest SEO trends.
            Her skills include in-depth keyword research, strategic content
            optimization, and effective link building, all aimed at enhancing
            engagement and improving website metrics. Beyond corporate
            settings, Warisha volunteers her SEO expertise at non-profit
            organizations like SBA, where she helps drive positive community
            impact. Looking for Digital Marketing / paid help for ranking your
            business? Shoot me a message with what you have in your mind. I&apos;d love to help you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
