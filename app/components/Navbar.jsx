"use client";

import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 xl:px-[8%] h-20 flex justify-between items-center">
          <Link href="#top" className="flex items-center gap-2">
            <Image src={assets.nicelogo} className="w-20 md:w-28 " alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full font-semibold text-gray-700 dark:text-white/60 text-base lg:text-xl">
            <li>
              <Link href="#top" className="transition-transform duration-200 hover:scale-110">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="transition-transform duration-200 hover:scale-110">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="transition-transform duration-200 hover:scale-110">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#work" className="transition-transform duration-200 hover:scale-110">
                Projects
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-900 dark:text-white"
            >
              <Image src={assets.menu_white} className="w-7 h-7" alt="menu" />
            </button>
          </div>

          <div className="hidden md:flex">
            <Link href="#contact" className="flex items-center gap-2 dark:text-white/60 text-xl sm:text-base">
              Contact
              <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-7 right-7 text-white"
          >
            <Image src={assets.close_white} className="w-5 h-5" alt="close" />
          </button>
          <ul className="flex flex-col items-center gap-8 text-white text-2xl font-semibold">
            <li>
              <Link href="#top" onClick={handleMenuLinkClick} className="transition-all hover:font-bold">Home</Link>
            </li>
            <li>
              <Link href="#about" onClick={handleMenuLinkClick} className="transition-all hover:font-bold">About</Link>
            </li>
            <li>
              <Link href="#services" onClick={handleMenuLinkClick} className="transition-all hover:font-bold">Skills</Link>
            </li>
            <li>
              <Link href="#work" onClick={handleMenuLinkClick} className="transition-all hover:font-bold">Projects</Link>
            </li>
            <li>
              <Link href="#contact" onClick={handleMenuLinkClick} className="transition-all hover:font-bold">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
