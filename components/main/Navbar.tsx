// ===========================Making it more responsive ============================
"use client"
import { useState } from 'react';
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full flex items-center justify-between px-4 md:px-10 py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-2 md:block text-gray-300">
              Pradeep Kumar Gupta
            </span>
          </Link>
        </div>
        
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="outline-none focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-300 hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        
        <div className={`md:flex flex-col md:flex-row md:items-center md:justify-center md:mr-20 w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`flex flex-col md:flex-row md:gap-5 md:items-center ${isMenuOpen ? '' : 'border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full'}`}>
            <Link href="#about" className="nav-link">
              <span className="text-gray-200">About</span>
            </Link>
            <Link href="#skills" className="nav-link">
              <span className="text-gray-200">Skills</span>
            </Link>
            <Link href="#projects" className="nav-link">
              <span className="text-gray-200">Projects</span>
            </Link>
            <Link href="#education" className="nav-link">
              <span className="text-gray-200">Education</span>
            </Link>
            <Link href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkwpSZRWPlbXsjJCVPHRTpdcdBdqQsnrZqVxCGXbJpZvvMPJLcrLFlGcLrJSWgchCMZflb' target="_blank" rel="noreferrer noopener" className="nav-link">
              <span className="text-gray-200">Contact me</span>
            </Link>
            <Link href="https://drive.google.com/file/d/1fGL9HyrRpU15w2-0apu9NWEdZgwSgvAL/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="font-bold text-white bg-purple-400 rounded-lg py-1 px-2 hover:scale-105">
              My Resume
            </Link>
          </div>
          
          <div className="flex gap-5 mt-4 md:mt-0 md:ml-20">
            {Socials.map((social) => (
              <Link href={social.so} key={social.name} target="_blank" rel="noreferrer noopener">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer hover:scale-105" // Add hover:scale-105 class
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

