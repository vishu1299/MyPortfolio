import { Link } from "@tanstack/react-router";
import "../../../../style.css";
import { FaChevronRight } from "react-icons/fa6";

function Skills_intro() {
  return (
    <>
      <div className="text-white w-[90%] col-span-2">
        <div className="flex flex-col gap-1 lg:gap-2 xl:gap-5">
          <div className="flex gap-3">
            <img
              className="w-[1rem] my-auto"
              src="/about-icon.png"
              alt="About Icon"
            />
            <h1 className="my-auto font-bold text-xs sm:text-[10px] lg:text-[14px] text-[#D21C23]">
              MY SKILLS
            </h1>
          </div>
          <div className="text-xl lg:text-2xl xl:text-4xl font-extrabold leading-[1.5] xl:leading-[1.3]">
            <h1>Transforming Ideas into Functional Web Designs</h1>
          </div>

          <div className="flex sm:hidden lg:flex xl:hidden">
            <p className="text-xs xl:text-sm font-normal text-[#C4CFDE] xl:w-[85%]">
              I transform design visions into seamless, interactive web
              experiences.
            </p>
          </div>
          <div className="hidden xl:flex">
            <p className="text-xs xl:text-sm font-normal text-[#C4CFDE] xl:w-[85%]">
              I transform design visions into seamless, interactive web
              experiences. I create responsive and engaging interfaces that
              enhance usability and deliver optimal performance across all
              devices.
            </p>
          </div>
          <Link to="/skills_page">
            <button
              type="submit"
              className="theme-btn max-w-fit mt-3 p-2 text-[10px] font-bold xl:p-3 xl:text-sm"
            >
              <div className="flex gap-1">
                EXPLORE More
                <FaChevronRight className="my-auto" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Skills_intro;
