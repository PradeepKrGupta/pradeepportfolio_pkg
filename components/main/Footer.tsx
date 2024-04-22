import React from "react";
import Link from 'next/link';
import { Socials } from "@/constants";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube, FaEnvelope, FaHandshake,FaUser} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] ">Community</div>

                        <Link href="https://www.youtube.com/channel/UCzS2cOP4baaVZZiUQkmvCpg" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer nav-link" passHref>
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </Link>


                        <Link href="https://github.com/PradeepKrGupta" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer nav-link" passHref >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>

                        <Link href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer nav-link" passHref >
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </Link>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>

                        <Link href="https://www.instagram.com/pradeeprauniyarofficial/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer nav-link" passHref >
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </Link>

                        <Link href="https://twitter.com/Pradeepgupta_39" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer nav-link" passHref >
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </Link>



                        <Link href="https://www.linkedin.com/in/pradeep-kumar-gupta-b696a7234/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer nav-link" passHref >
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkwpSZRWPlbXsjJCVPHRTpdcdBdqQsnrZqVxCGXbJpZvvMPJLcrLFlGcLrJSWgchCMZflb" target="_blank" rel="noopener noreferrer" passHref className="flex flex-row items-center my-[15px] cursor-pointer nav-link">
                        <FaHandshake />
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1pdFI_cI42SzRt1Ip9mpCerOESi-Vzedp/view?usp=sharing" target="_blank" rel="noopener noreferrer" passHref className="flex flex-row items-center my-[15px] cursor-pointer nav-link">
                        <FaUser />
                            <span className="text-[15px] ml-[6px]">Learn about me</span>
                        </Link>
                        <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkwpSZRWPlbXsjJCVPHRTpdcdBdqQsnrZqVxCGXbJpZvvMPJLcrLFlGcLrJSWgchCMZflb" target="_blank" rel="noopener noreferrer" passHref className="flex flex-row items-center my-[15px] cursor-pointer nav-link">
                            <FaEnvelope />
                            <span className="text-[15px] ml-[6px]">pradeeprauniyarofficial@gmail.com</span>
                        </Link>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Pradeep Kumar Gupta 2023, All rights reserved
                </div>
            </div>
        </div>
    );
};


export default Footer;
