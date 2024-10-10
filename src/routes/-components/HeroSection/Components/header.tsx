import ShimmerButton from "../../../../components/magicui/shimmer-button";
import { Link } from "react-scroll"; // Import the Link component

function Header() {
  return (
    <>
      <div className="sm:flex justify-center z-50 xl:pt-5 pt-2 lg:p-3 hidden ">
        <div className="flex justify-between gap-10 w-[75%] xl:w-[85%] ">
          <div className="logo my-auto ">
            <img className="h-5 lg:h-7 xl:h-full " src="/Logo.png" alt="logo" />
          </div>

          {/* Use Link from react-scroll for smooth scrolling */}
          <div className="menu text-white font-bold text-[8px] lg:text-[10px] xl:text-sm flex xl:gap-7 gap-3 md:gap-4 lg:gap-6 my-auto lg:mr-4 xl:mr-12">
            <Link
              to="home"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              offset={-100}
            >
              HOME
            </Link>
            <Link
              to="about"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              offset={-100}
            >
              ABOUT
            </Link>
            <Link
              to="skills"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              offset={-100}
            >
              SKILLS
            </Link>
            <Link
              to="portfolio"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              offset={-50}
            >
              PORTFOLIO
            </Link>
            <Link
              to="work"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              offset={-100}
            >
              WORK
            </Link>
            <Link
              to="contact"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              offset={-100}
            >
              CONTACT
            </Link>
          </div>

          <div className="mt-2">
            <ShimmerButton className="shadow-2xl">
              <span className=" text-center text-xs lg:text-sm font-medium leading-none tracking-tight text-white dark:from-white xl:text-xl button_heading">
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
