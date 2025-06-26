import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  // Static profile data
  const profile = {
    name: "Nicely",
    title: "Full Stack Developer",
    bio: `Hi! I'm a licensed Chemical Engineer who discovered a genuine passion for programming — and made the leap. Now a full-stack software engineer, I design and build scalable, intuitive web applications that aim to solve real-world problems and create seamless user experiences.\n\nI've worked across both frontend and backend stacks, building everything from business dashboards to customer-facing interfaces. I'm proud to say I can take a project and run with it — from planning to production — with minimal supervision. I'm comfortable working solo or within a team, and I've also had the chance to lead small teams and help others grow along the way.\n\nOver the years, I've received multiple Employee of the Month awards, not just for performance, but for being a strong communicator and reliable teammate. I understand the importance of hitting deadlines, giving updates without being asked, and keeping quality high — even when things move fast.\n\nWhether I'm working remotely or in a corporate setting, I bring focus, energy, and a sense of ownership to everything I build. I love the challenge of solving problems with code, and I take pride in writing clean, maintainable solutions that people actually enjoy using.\n\nLet's build something awesome!`,
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8 xl:px-[8%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#E6A0FF] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            {/* Large screens: overlapping images */}
            <div className="hidden lg:block w-[480px] h-[480px] self-center">
              <div className="relative w-full h-full">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute -top-55 -left-40 w-full h-full z-0"
                >
                  <Image
                    src={assets.about}
                    alt="About background"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-2xl object-cover opacity-90 shadow-lg border-4 border-white dark:border-gray-900"
                    priority={false}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="absolute top-40 left-10 w-full h-full z-10"
                >
                  <Image
                    src={assets.nicely}
                    className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-gray-900"
                    alt={profile.name}
                    width={400}
                    height={400}
                    priority={true}
                  />
                </motion.div>
              </div>
            </div>
            {/* Medium screens: side by side */}
            <div className="hidden sm:flex lg:hidden gap-4 w-full h-auto self-center px-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-1/2 h-full relative"
              >
                <Image
                  src={assets.about}
                  alt="About background"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-2xl object-cover shadow-lg border-4 border-white dark:border-gray-900s"
                  priority={false}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                className="w-1/2 h-full relative"
              >
                <Image
                  src={assets.nicely}
                  className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-gray-900"
                  alt={profile.name}
                  width={200}
                  height={200}
                  priority={true}
                />
              </motion.div>
            </div>
            {/* Small screens: stacked column */}
            <div className="flex flex-col gap-4 w-[220px] h-[440px] sm:hidden self-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full h-1/2 relative"
              >
                <Image
                  src={assets.about}
                  alt="About background"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-2xl object-cover shadow-lg border-4 border-white dark:border-gray-900"
                  priority={false}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="w-full h-1/2 relative"
              >
                <Image
                  src={assets.nicely}
                  className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-gray-900"
                  alt={profile.name}
                  width={200}
                  height={200}
                  priority={true}
                />
              </motion.div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="pt-16 lg:pt-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {profile.title}
            </h3>
            
            {/* Render bio as paragraphs */}
            {profile.bio.split(/\n\n/).map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm md:text-lg  text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-justify tracking-widest"
              >
                {paragraph}
              </p>
            ))}

            {/* Personal Info */}
            {/* <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src={assets.mail_icon}
                    className="w-6 h-6"
                    alt="email"
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="text-gray-900 dark:text-white">{profile.email}</div>
                </div>
              </div>

              {profile.phone && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                    <div className="text-gray-900 dark:text-white">{profile.phone}</div>
                  </div>
                </div>
              )}

              {profile.location && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                    <div className="text-gray-900 dark:text-white">{profile.location}</div>
                  </div>
                </div>
              )}
            </div> */}

            {/* Social Links */}
            {/* <div className="flex space-x-4 mt-8">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}

              {profile.twitter && (
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 