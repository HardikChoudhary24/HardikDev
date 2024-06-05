"use client";
import React, { useRef } from "react";
import Margin from "./Margin";
import { languagesAndTools } from "@/helper/data";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div>
      <Margin>
        <div className="flex flex-col justify-start items-center gap-y-36 pt-20 px-1 md:px-16 lg:px-0 relative h-screen">
          <div className="lg:sticky top-0 w-full z-40">
            <div className="relative h-full w-full bg-slate-950  py-2 lg:py-8">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              <h1 className="font-extrabold text-3xl lg:text-5xl text-wrap text-center z-50 relative">
                SKILLS
              </h1>
            </div>
          </div>
          <motion.div
            className="flex justify-center items-center flex-wrap gap-5 md:gap-16 py-8 w-full"
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            ref={ref}
          >
            {languagesAndTools.map((tool, index) => (
              <div
                key={tool.name}
                className={`rounded-full p-3 bg-zinc-600 w-[55px] h-[55px] md:w-[65px] md:h-[65px] flex justify-center items-center ring ring-green-500 `}
              >
                <Image src={tool.url} alt={tool.name} width={65} height={65} />
              </div>
            ))}
          </motion.div>
        </div>
      </Margin>
    </div>
  );
};

export default Skills;
