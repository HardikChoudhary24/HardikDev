"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
type props = {
  project:
    | {
        image: string;
        name: string;
        desc: string;
        stack: string[];
        demoLink: string;
        codeLink: string;
        scrollImage: boolean;
      }
    | {
        image: string;
        name: string;
        desc: string;
        stack: string[];
        demoLink: string;
        codeLink: string;
        scrollImage?: undefined;
      };
};
const ProjectCard = ({
  project,
}: props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={`w-full h-screen flex lg:flex-row flex-col justify-center lg:justify-start items-center gap-x-10 gap-y-8 px-3`}
      ref={ref}
    >
      <div className="flex flex-col justify-start items-center gap-y-6">
        <h2 className="font-extrabold text-xl md:text-3xl lg:text-5xl text-wrap text-center">
          {project.name}
        </h2>
        <p className="text-center text-sm md:text-lg">{project.desc}</p>
        <p className="text-green-500 font-medium lg:text-lg text-center">
          {project.stack.map((tech) => (
            <span key={tech}>{tech} </span>
          ))}
        </p>
        {/* <hr className="boder w-full border-gray-600" /> */}
        <div className="flex justify-center items-center gap-x-5">
          <Link
            href={project.codeLink}
            className="cursor-pointer hover:text-green-500"
            target="_blank"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href={project.demoLink}
            className="bg-white p-1 rounded-full text-black cursor-pointer  hover:bg-green-500"
            target="_blank"
          >
            <LuLink size={20} />
          </Link>
        </div>
      </div>
      <div className="w-fit">
        <div className="w-[250px] md:w-[500px] h-[300px] lg:w-[550px] lg:h-[350px] overflow-hidden rounded-lg shadow-xl border-2 border-black">
          <img
            src={project.image}
            alt={project.name}
            className={`w-[250px] md:w-[500px] lg:w-[550px] ${
              project.scrollImage
                ? "hover:translate-y-[-55%] transition-all ease-in-out duration-[3000ms]"
                : ""
            } `}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
