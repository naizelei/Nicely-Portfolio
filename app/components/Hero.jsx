import React, { useState, useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

// TypeWriter component for typing animation
const TypeWriter = ({ text, speed = 100, delay = 500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span className="md:text-center sm:text-base lg:text-2xl text-gray-600 dark:text-gray-300">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Static profile data
  const profile = {
    name: "Nicely Jane Eleccion",
    title: "a chemical engineer turned software engineer",
    bio: "”Instead of balancing chemical equations, I now balance divs and deadlines. As a full-stack developer, I build clean, intuitive web and mobile apps with real-world impact. I'm all about thoughtful UX, efficient code, and keeping things running smoother than your morning coffee.",
    resume: "/Resume_Nicely-Jane-Eleccion-2025.pdf",
    nicely: assets.hero
  };

  // Shape components for circles and sparkles
  const shapeComponents = {
    circle: ({ size, color }) => (
      <svg width={size} height={size} viewBox="0 0 18 18" fill={color} fillOpacity="0.7">
        <circle cx="9" cy="9" r="9" />
      </svg>
    ),
    sparkle: ({ size, color }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} fillOpacity="0.7">
        <path d="M12 0L13.65 10.35L24 12L13.65 13.65L12 24L10.35 13.65L0 12L10.35 10.35L12 0Z" />
      </svg>
    ),
  };
  const shapeKeys = Object.keys(shapeComponents);

  // Generate sparkles with specific sizes and random shapes/colors
  const createSparkles = (count, minSize, maxSize) => {
    const colors = ["#E6A0FF", "#B8E9C6"];
    return Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * (maxSize - minSize) + minSize,
      delay: Math.random() * 5,
      duration: Math.random() * (7 - 4) + 4, // Slower duration
      shape: shapeKeys[Math.floor(Math.random() * shapeKeys.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  };

  const largeSparkles = createSparkles(2, 40, 50);
  const mediumSparkles = createSparkles(1, 25, 35);
  const smallSparkles = createSparkles(9, 8, 20);
  const sparkles = [...largeSparkles, ...mediumSparkles, ...smallSparkles];

  // 3D Parallax Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max tilt angle
    const maxTilt = 15;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Sparkles - Render only on client */}
      {isMounted && sparkles.map((sparkle, idx) => (
        <motion.span
          key={idx}
          className="absolute"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        >
          {React.createElement(shapeComponents[sparkle.shape], { size: sparkle.size, color: sparkle.color })}
        </motion.span>
      ))}
      <div className="relative z-10 container mx-auto px-4 mt-28 lg:mt-0 lg:px-8 xl:px-[8%]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center order-2 lg:order-1">
            <div className="mb-6 flex items-center justify-center ">
              <Image
                src={assets.hand_icon}
                className="w-4 h-4 lg:w-8 lg:h-8 inline-block mr-2"
                alt="wave"
              />
              <span className="dark:text-white/70 lg:text-2xl">Hello, I am</span>
            </div>
            
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            <TypeWriter text={profile.name} speed={80} delay={300} />
            </h1>
            
            <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#4D9260] dark:text-[#4D9260] mb-8">
              {profile.title}
            </h2>
            
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-justify">
              {profile.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-[#D661FF] hover:bg-[#E6A0FF] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
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
                  // href={profile.resume}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="border-2 darkborder-white dark:text-white bg-gray-200/60 opacity-60 cursor-not-allowed px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
                  aria-disabled="true"
                  tabIndex="-1"
                  style={{ pointerEvents: 'none' }}
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
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 md:w-100 md:h-100 lg:w-120 lg:h-120 rounded-full bg-gradient-to-br from-[#E6A0FF] to-[#B8E9C6] p-2">
                <motion.div
                  ref={imgRef}
                  initial={{ rotateX: 0, rotateY: 0 }}
                  animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                  transition={{ rotateX: { type: 'spring', stiffness: 120, damping: 10 }, rotateY: { type: 'spring', stiffness: 120, damping: 10 } }}
                  whileHover={{ scale: 1.04 }}
                  className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-xl"
                  style={{ perspective: 1000 }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={profile.nicely}
                    className="w-full h-full rounded-full object-cover"
                    alt={profile.name}
                    width={400}
                    height={400}
                  />
                </motion.div>
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