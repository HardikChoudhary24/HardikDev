"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Margin from "./Margin";
import { projectsList } from "@/helper/data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div>
      <Margin>
        <div className="flex flex-col justify-start items-center 2xl:gap-y-16 pt-20 px-1 md:px-16 lg:px-0 relative">
          <div className="lg:sticky top-0 w-full z-40">
            <div className="relative h-full w-full bg-slate-950 py-2 lg:py-8">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              <h1 className="font-extrabold text-3xl lg:text-5xl text-wrap text-center z-50 relative">
                PROJECTS
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            {projectsList.map((project, projectNo) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </Margin>
    </div>
  );
};

export default Projects;
