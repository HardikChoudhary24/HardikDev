import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full py-10 flex justify-center items-center gap-x-8 relative z-50">
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
  );
};

export default Footer;
