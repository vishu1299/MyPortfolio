import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../../../style.css";

const Newfile = () => {
  // References for the left and right containers
  const leftContainerRefs = [useRef(null), useRef(null)];
  const rightContainerRefs = [useRef(null), useRef(null)];

  // In view states for each container
  const leftInViews = [
    useInView(leftContainerRefs[0], { once: true }),
    useInView(leftContainerRefs[1], { once: true }),
  ];
  const rightInViews = [
    useInView(rightContainerRefs[0], { once: true }),
    useInView(rightContainerRefs[1], { once: true }),
  ];

  // Data for the timeline items
  const timelineItems = [
    {
      title: "BCA",
      date: "2020 - 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sapiente quam, molestias nemo rem porro!",
    },
    {
      title: "BCA",
      date: "2020 - 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sapiente quam, molestias nemo rem porro!",
    },
  ];

  return (
    <>
      <div className=" mx-auto pt-10 px-4 md:px-8 lg:px-10 text-center flex flex-col gap-3 shrink-0 mt-40 md:mt-20 lg:mt-24 xl:mt-36 responsive-div">
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
        <h2 className="md:text-4xl mb-1 font-semibold text-white ">
          Journey of Continuous Learning
        </h2>
        <p className="text-neutral-400 dark:text-neutral-300 text-xs md:text-base mx-auto md:[80%] xl:w-[70%]">
          As I advance through my career, I continuously seek out new challenges
          and opportunities for growth. Every step forward refines my skills,
          pushing me to deliver better, smarter, and more efficient solutions in
          web development. This is just the beginning of my evolving expertise.
        </p>
      </div>

      <div className="timeline w-full sm:w-[100%] xl:w-[60%] relative mx-auto my-16">
        {timelineItems.map((item, index) => (
          <div key={index}>
            <motion.div
              ref={leftContainerRefs[index]}
              initial={{ opacity: 0, x: -100 }}
              animate={leftInViews[index] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="containers left-container"
            >
              <img src="/record.png" alt="" />
              <div className="text-box flex flex-col gap-1 sm:gap-3 sm:text-end shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h1 className="text-base sm:text-lg font-semibold text-white">
                  {item.title}
                </h1>
                <small className="text-[#D21C23] font-semibold text-[10px] sm:text-xs">
                  {item.date}
                </small>
                <p className="text-[12px] sm:text-sm text-gray-300">
                  {item.description}
                </p>
                <div className="left-container-arrow"></div>
              </div>
            </motion.div>

            <motion.div
              ref={rightContainerRefs[index]}
              initial={{ opacity: 0, x: 100 }}
              animate={rightInViews[index] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 + 0.1 }}
              className="containers right-container"
            >
              <img src="/record.png" alt="" />
              <div className="text-box  flex flex-col gap-3  shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h1 className="text-base sm:text-lg font-semibold text-white">
                  {item.title}
                </h1>
                <small className="text-[#D21C23] text-[10px] font-semibold sm:text-xs">
                  {item.date}
                </small>
                <p className="text-[12px] sm:text-sm text-gray-300">
                  {item.description}
                </p>
                <div className="right-container-arrow"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Newfile;
