import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import Margin from "./Margin";
import Link from "next/link";

const Hero = () => {
  return (
    <Margin>
      <div className="flex mt-16 lg:mt-0 flex-col-reverse lg:flex-row justify-between items-center text-white gap-x-12 gap-y-12">
        <div className="absolute top-10 right-0 left-0 px-10 w-full flex justify-between items-center">
          <p className="text-xl lg:text-3xl font-extrabold ">
            HardikDev<span className="text-green-500">.</span>
          </p>
          <div className="lg:flex justify-center items-center gap-x-5 hidden">
            <Link
              href={"https://github.com/HardikChoudhary24"}
              target="_blank"
              className="cursor-pointer transition-all duration-500 ease-in-out hover:text-green-500"
            >
              <FaGithub size={25} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/hardik-choudhary-dev"}
              className="cursor-pointer transition-all duration-500 ease-in-out hover:text-green-500"
              target="_blank"
            >
              <IoLogoLinkedin size={25} />
            </Link>
            <Link
              href={"https://www.instagram.com/hardik_._choudhary/"}
              target="_blank"
              className="cursor-pointer transition-all duration-500 ease-in-out hover:text-green-500"
            >
              <FaInstagram size={25} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h1 className="font-extrabold text-4xl lg:text-6xl text-wrap text-center">
            HARDIK CHOUDHARY
          </h1>
          <h2 className="font-extrabold text-xl lg:text-2xl text-center">
            Full Stack Developer
          </h2>
          <div className="flex items-center gap-x-3">
            <Link
              href={"https://github.com/HardikChoudhary24"}
              target="_blank"
              className="cursor-pointer transition-all duration-500 ease-in-out hover:text-green-500"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/hardik-choudhary-dev"}
              className="cursor-pointer transition-all duration-500 ease-in-out hover:text-green-500"
              target="_blank"
            >
              <IoLogoLinkedin size={30} />
            </Link>
            <Link
              href={"https://www.instagram.com/hardik_._choudhary/"}
              target="_blank"
              className="cursor-pointer transition-all duration-500 ease-in-out hover:text-green-500"
            >
              <FaInstagram size={30} />
            </Link>
          </div>
          <p className="text-lg lg:text-xl text-wrap text-center">
            Building Seamless Applications,
            <br /> One Line at a Time.
          </p>
          <button
            className={`rounded-lg bg-white text-xl text-black font-bold p-2 transition-all duration-500 ease-in-out hover:bg-green-500`}
          >
            Resume
          </button>
        </div>
        <div className="w-fit flex justify-center items-center h-full">
          <img
            src={"/assets/Headerpng.png"}
            // width={400}
            // height={400}
            className="rounded-full w-[300px] lg:w-[400px] shadow-2xl"
            alt="logo"
          />
        </div>
      </div>
    </Margin>
  );
};

export default Hero;
