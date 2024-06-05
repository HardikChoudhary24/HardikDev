"use client";
import React, { useRef } from "react";
import Margin from "./Margin";
import { experience, languagesAndTools } from "@/helper/data";
import Image from "next/image";
import {Roboto_Mono } from "next/font/google";

import { useScroll, useTransform, motion } from "framer-motion";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto_mono",
});

const Experience = () => {
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
        <div className="flex flex-col justify-start items-center gap-y-20 pt-20 px-10 md:px-16 lg:px-0 h-full">
          <div className="lg:sticky top-0 w-full z-40">
            <div className="relative h-full w-full bg-slate-950 py-2 lg:py-8">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              <h1 className="font-extrabold text-3xl lg:text-5xl text-wrap text-center z-50 relative">
                WORK EXPERIENCE
              </h1>
            </div>
          </div>
          <motion.div
            className="flex justify-center flex-col items-center gap-16 py-2 w-full"
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            ref={ref}
          >
            {experience.map((company) => (
              <div
                key={company.company}
                className="flex flex-col justify-start items-start gap-y-8"
              >
                <div className="flex w-full justify-between items-center">
                  <h1 className="text-lg font-bold">
                    <span className="underline underline-offset-8 decoration-green-500">
                      {company.company}
                    </span>{" "}
                    | {company.position}
                  </h1>
                  <p className="font-medium text-green-500">
                    {company.startDate} - {company.endDate}
                  </p>
                </div>
                <div className="text-lg">{company.highlights}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Margin>
    </div>
  );
};

export default Experience;
