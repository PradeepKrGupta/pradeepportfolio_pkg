"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from 'next/link';

const HeroContent = () => {
  return (

    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-2 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-1 justify-center mt-20 text-start">
        <motion.div
          variants={slideInFromTop}
          // className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Software Engineer Portfolio
          </h1> */}
        </motion.div>

        {/* Adding the profile image */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="w-full h-full flex justify-left items-left"
        >
          <Image
            src="/newProfile.png"
            alt="profile_image"
            height={550}
            width={550}
          />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 mt-2 text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              {" "}
              the best{" "} project{" "}
            </span>
             exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-1 max-w-[600px]"
        >
          I&apos;m a Full Stack Developer and Data Science Enthusiast with knowledge of Website, Mobile, and Software development. Check out my projects and skills.
        </motion.p>


        <Link href="https://drive.google.com/file/d/18SKHC13F4yzzZJnCHfs45zArcL0yn_xK/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="font-bold py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          {/* <motion.a> */}
          My Resume
          {/* </motion.a> */}
        </Link>
      </div>


      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={580}
          width={580}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;