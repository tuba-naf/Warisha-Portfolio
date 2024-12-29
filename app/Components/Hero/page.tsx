
import Link from "next/link";
import Image from "next/image"; // Correct import
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 lg:px-[110px] py-8 md:py-12 gap-8 md:gap-16 w-full max-w-[1440px] h-auto bg-white z-20">
      {/* Sub Div (Text Content) */}
      <div className="flex flex-col justify-center items-start gap-6 md:gap-8 w-full md:w-[60%] max-w-[768px] h-auto">
        {/* Content Div 1 */}
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[50px] font-bold leading-tight tracking-[-0.02em] text-[#111827] text-black">
            Hi, I’m Warisha
          </h1>
          {/* Description */}
          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-black text-justify">
            I’m Warisha, an SEO Executive with expertise in On-Page, Off-Page,
            and YouTube SEO, as well as leveraging AI to drive organic growth. I
            specialize in keyword research, content optimization, and link
            building to enhance website performance and user engagement.
            <br />I also volunteer my SEO skills for non-profits, contributing
            to meaningful community projects. Let’s connect to discuss how I can
            help your business rank higher and grow online!
          </p>
        </div>

        {/* Content Div 2 */}
        <div className="flex flex-row items-center gap-2">
          {/* Location Icon */}
          <FaMapMarkerAlt className="text-blue-600 text-lg" />
          <div className="text-black text-[14px] md:text-[16px]">
            Karachi, Pakistan
          </div>
        </div>
        <div className="text-[#4B5563] text-[14px] md:text-[16px]">
          Available for new projects
        </div>
        <div className="flex flex-row items-center gap-4 text-gray-500">
          {/* Social Icons */}
          <Link
            href=" https://www.instagram.com/alviiwarisha?igsh=eG5vNmd3b3NncHJi&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-800 text-2xl hover:text-blue-600"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/warisha-alvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 text-2xl hover:text-blue-600"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/warishaalvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 text-2xl hover:text-blue-600"
          >
            <FaFacebook />
          </Link>
        </div>
      </div>

      {/* Image Div */}
      <div className="relative flex items-center justify-center w-full max-w-[300px] md:max-w-[360px] h-auto md:h-[360px] hidden md:flex">
        {/* Background Layer */}
        <div className="absolute w-full h-full bg-gray-200 border-4 border-white rounded-full"></div>

        {/* Pic Container with Aesthetic Border */}
        <div className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-blue-700 p-2 group">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <Image
              src="/Image/Warisha.jpg"
              alt="Hero Image"
              width={420}
              height={420}
              className="object-cover object-[50%_25%] transform group-hover:scale-125"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
