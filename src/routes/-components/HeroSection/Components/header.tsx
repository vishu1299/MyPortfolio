// import { Link } from "@tanstack/react-router";

import ShimmerButton from "../../../../components/magicui/shimmer-button";

function Header() {
  return (
    <>
      <div className="sm:flex justify-center z-50 xl:pt-5 pt-2 lg:p-3 hidden ">
        <div className="flex justify-between gap-10 w-[75%] xl:w-[85%] ">
          <div className="logo my-auto ">
            <img className="h-5 lg:h-7 xl:h-full " src="/Logo.png" alt="logo" />
          </div>
          <div className="menu text-white font-bold text-[8px] lg:text-[10px] xl:text-sm flex xl:gap-7 gap-3 md:gap-4 lg:gap-6 my-auto  lg:mr-4 xl:mr-12">
            <a href="#">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#">RESUME</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">WORK</a>
            <a href="#">CONTACT</a>
          </div>
          <div className=" mt-2">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-xs lg:text-sm font-medium leading-none tracking-tight text-white dark:from-white  xl:text-xl">
                Let's Talk
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
