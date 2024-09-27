// import { Link } from "@tanstack/react-router";

import ShimmerButton from "../../../../components/magicui/shimmer-button";

function Header() {
  return (
    <>
      <div className=" flex justify-center z-50 pt-10">
        <div className="flex justify-between w-[80%]">
          <div className="logo my-auto">
            <img src="/Logo.png" alt="logo" />
          </div>
          <div className="menu text-white font-bold text-[14px] flex gap-10  rounded-3xl my-auto">
            <h1>HOME</h1>
            <h1>ABOUT</h1>
            <h1>RESUME</h1>
            <h1>PORTFOLIO</h1>
            <h1>MY WORK</h1>
            <h1>CONTACT</h1>
          </div>
          <div className="">
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
