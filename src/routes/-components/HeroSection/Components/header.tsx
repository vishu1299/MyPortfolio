// import { Link } from "@tanstack/react-router";

import ShimmerButton from "../../../../components/magicui/shimmer-button";

function Header() {
  return (
    <>
      <div className="flex justify-center z-50 pt-5">
        <div className="flex justify-between w-[80%]">
          <div className="logo my-auto">
            <img src="/Logo.png" alt="logo" />
          </div>
          <div className="menu text-white font-bold text-sm flex gap-9  rounded-3xl my-auto mr-1">
            <a href="#">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#">RESUME</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">MY WORK</a>
            <a href="#">CONTACT</a>
          </div>
          <div className="mr-12 mt-2">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white  lg:text-lg">
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
