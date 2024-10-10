"use client";
import {
  // useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="portfolio"
      className=" shrink-0 mt-40 md:mt-20 lg:mt-24 xl:mt-36 responsive-div"
    >
      <div className="w-full  md:px-10" ref={containerRef}>
        <div className=" mx-auto py-10 px-4 md:px-8 lg:px-10 text-center flex flex-col gap-3">
          <div className="flex gap-3 justify-center items-center">
            <img
              className="w-[1rem] my-auto"
              src="/about-icon.png"
              alt="About Icon"
            />
            <h1 className="my-auto font-bold text-xs sm:text-[10px] lg:text-sm text-[#D21C23]">
              MY Resume
            </h1>
            <img
              className="w-[1rem] my-auto"
              src="/resume-right.png"
              alt="About Icon"
            />
          </div>
          <h2 className=" md:text-4xl mb-1 font-semibold text-white ">
            Journey of Continuous Learning
          </h2>
          <p className="text-neutral-400 dark:text-neutral-300 text-xs md:text-base mx-auto md:[80%] xl:w-[70%]">
            As I advance through my career, I continuously seek out new
            challenges and opportunities for growth. Every step forward refines
            my skills, pushing me to deliver better, smarter, and more efficient
            solutions in web development. This is just the beginning of my
            evolving expertise.
          </p>
        </div>

        <div
          ref={ref}
          className="relative max-w-7xl mx-auto pb-10 md:pb-20 lg:pb-64"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-6 md:h-10 absolute left-5  md:left-3 w-6 md:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-2 w-2 md:h-4 md:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
