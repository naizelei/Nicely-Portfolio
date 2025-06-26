"use client";

import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <Link href="#top" className="flex items-center">
          <Image
            src={assets.nicelogo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full font-semibold text-gray-700 dark:text-white/60 text-base lg:text-xl">
          <li>
            <Link href="#top" className="hover:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:font-bold">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="hover:font-bold">
              Projects
            </Link>
          </li>
        </ul>

        <div>
          <Link href="#contact" className="flex items-center gap-2 dark:text-white/60 text-xl sm:text-base">
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
