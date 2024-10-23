import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../../../style.css";

const Newfile = () => {
  // References for the left and right containers
  const leftContainerRef1 = useRef(null);
  const leftContainerRef2 = useRef(null);
  const rightContainerRef1 = useRef(null);
  const rightContainerRef2 = useRef(null);

  // In view states for each container
  const leftInView1 = useInView(leftContainerRef1, { once: true });
  const leftInView2 = useInView(leftContainerRef2, { once: true });
  const rightInView1 = useInView(rightContainerRef1, { once: true });
  const rightInView2 = useInView(rightContainerRef2, { once: true });

  // Check screen size to adjust animations
  const isMobile = window.innerWidth <= 640;

  return (
    <>
      <div
        id="portfolio"
        className="mx-auto sm:pb-16 pt-10 px-4 md:px-8 lg:px-10 text-center flex flex-col gap-3 shrink-0 mt-72 md:mt-20 lg:mt-24 xl:mt-36 responsive-div"
      >
        <div className="flex gap-3 justify-center items-center">
          <img
            className="w-[1rem] my-auto"
            src="/about-icon.png"
            alt="About Icon"
          />
          <h1 className="my-auto font-bold text-xs sm:text-[10px] lg:text-[14px] text-[#D21C23]">
            MY RESUME
          </h1>
          <img
            className="w-[1rem] my-auto"
            src="/resume-right.png"
            alt="About Icon"
          />
        </div>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-extrabold leading-[1.5] xl:leading-[1.3] text-white">
          Journey of Continuous Learning
        </h2>
        <p className="text-neutral-400 dark:text-neutral-300 text-xs md:text-base text-start line-clamp-3 sm:line-clamp-none sm:mx-auto sm:text-center xl:w-[70%]">
          As I advance through my career, I continuously seek out new challenges
          and opportunities for growth. Every step forward refines my skills
          pushing me to deliver better, smarter, and more efficient solutions in
          web development. This is just the beginning of my evolving expertise.
        </p>
      </div>

      <div className="timeline w-full sm:w-[100%] xl:w-[60%] relative mx-auto my-16">
        {/* Left Container 1 */}
        <motion.div
          ref={leftContainerRef1}
          initial={{
            opacity: 0,
            y: isMobile ? -100 : 0,
            x: isMobile ? 0 : -100,
          }} // Animate from top for mobile, left for large screens
          animate={leftInView1 ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="containers left-container"
        >
          <img src="/record.png" alt="" />
          <div className="text-box flex flex-col gap-1 sm:gap-3 sm:text-end shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h1 className="text-sm lg:text-lg font-semibold text-white">
              Frontend Developer at Xcrino
            </h1>
            <small className="text-[#D21C23] font-semibold text-[10px] sm:text-xs">
              2024 - Present
            </small>
            <p className="text-[12px] sm:text-sm text-gray-300 text-justify line-clamp-4">
              Joined Xcrino Business Solutions as a Frontend Developer Intern,
              to enhancing my skills in React.js, Next.js and modern web
              technologies.
            </p>
            <div className="left-container-arrow"></div>
          </div>
        </motion.div>

        {/* Right Container 1 */}
        <motion.div
          ref={rightContainerRef1}
          initial={{
            opacity: 0,
            y: isMobile ? -100 : 0,
            x: isMobile ? 0 : 100,
          }} // Animate from top for mobile, right for large screens
          animate={rightInView1 ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="containers right-container"
        >
          <img src="/record.png" alt="" />
          <div className="text-box flex flex-col gap-3 shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h1 className="text-sm lg:text-lg font-semibold text-white">
              MCA (Master's Of Computer Science)
            </h1>
            <small className="text-[#D21C23] text-[10px] font-semibold sm:text-xs">
              2024 - Present
            </small>
            <p className="text-[12px] sm:text-sm text-gray-300 text-justify line-clamp-4">
              Pursuing my MCA from Ganga Institute of Technology and Management,
              affiliated with Maharishi Dayanand University (MDU).
            </p>
            <div className="right-container-arrow"></div>
          </div>
        </motion.div>

        {/* Left Container 2 */}
        <motion.div
          ref={leftContainerRef2}
          initial={{
            opacity: 0,
            y: isMobile ? -100 : 0,
            x: isMobile ? 0 : -100,
          }} // Animate from top for mobile, left for large screens
          animate={leftInView2 ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.0 }}
          className="containers left-container"
        >
          <img src="/record.png" alt="" />
          <div className="text-box flex flex-col gap-1 sm:gap-3 sm:text-end shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h1 className="text-sm lg:text-lg font-semibold text-white">
              BCA (Bachelor's in Computer Applications)
            </h1>
            <small className="text-[#D21C23] font-semibold text-[10px] sm:text-xs">
              2020 - 2023
            </small>
            <p className="text-[12px] sm:text-sm text-gray-300 text-justify line-clamp-4">
              Graduated from Vash College of Engineering, affiliated with (MDU)
              Maharishi Dayanand University, with a first division and
              distinction (approx. 76%).
            </p>
            <div className="left-container-arrow"></div>
          </div>
        </motion.div>

        {/* Right Container 2 */}
        <motion.div
          ref={rightContainerRef2}
          initial={{
            opacity: 0,
            y: isMobile ? -100 : 0,
            x: isMobile ? 0 : 100,
          }} // Animate from top for mobile, right for large screens
          animate={rightInView2 ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="containers right-container"
        >
          <img src="/record.png" alt="" />
          <div className="text-box flex flex-col gap-3 shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h1 className="text-sm lg:text-lg font-semibold text-white">
              Class 12th
            </h1>
            <small className="text-[#D21C23] text-[10px] font-semibold sm:text-xs">
              2019 - 2020
            </small>
            <p className="text-[12px] sm:text-sm text-gray-300 text-justify line-clamp-4">
              Completed my Class 12 from Bal Bharti School, Bahadurgarh,
              specializing in the Humanities stream with an impressive score of
              82%.
            </p>
            <div className="right-container-arrow"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Newfile;
