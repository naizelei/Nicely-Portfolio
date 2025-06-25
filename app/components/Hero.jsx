import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Hero = () => {
  // Static profile data
  const profile = {
    name: "Nicely Jane",
    title: "Chemical Engineer turned Software Engineer",
    bio: "I traded lab goggles for a laptop and haven’t looked back. As a full-stack developer, I build clean, intuitive web and mobile apps with real-world impact. I’m all about thoughtful UX, efficient code, and keeping things running smoother than your morning coffee.",
    resume: "/sample-resume.pdf",
    nicely: assets.nicely
  };

  return (
    <section id="top" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 mt-28 lg:mt-0 lg:px-8 xl:px-[8%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center">
          <div className="mb-6 flex items-center justify-center lg:justify-start">
              <Image
                src={assets.hand_icon}
                className="w-4 h-4 lg:w-8 lg:h-8 inline-block mr-2"
                alt="wave"
              />
              <span className="md:text-center sm:text-base lg:text-2xl text-gray-600 dark:text-gray-300">
                Hello, I'm
              </span>
            </div>
            
            <h1 className="text-lg md:text-xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {profile.name}
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-[#D661FF] dark:text-blue-400 mb-8">
              {profile.title}
            </h2>
            
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {profile.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-[#D661FF] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                Contact Me
                <Image
                  src={assets.arrow_icon}
                  className="w-4 h-4 ml-2"
                  alt="arrow"
                />
              </a>
              
              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#D661FF] text-[#D661FF] hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Image
                    src={assets.download_icon}
                    className="w-4 h-4 mr-2"
                    alt="download"
                  />
                  Download CV
                </a>
              )}
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800  flex items-center justify-center">
                  <Image
                    src={profile.nicely}
                    className="w-full h-full rounded-full object-cover"
                    alt={profile.name}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <Image
                  src={assets.code_icon}
                  className="w-6 h-6"
                  alt="code"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <Image
                  src={assets.graphics_icon}
                  className="w-6 h-6"
                  alt="graphics"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 