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
            <Link to="home" smooth={true} duration={500} offset={-70}>
              HOME
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-100}>
              ABOUT
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-100}>
              SKILLS
            </Link>
            <Link to="portfolio" smooth={true} duration={500} offset={-100}>
              PORTFOLIO
            </Link>
            <Link to="work" smooth={true} duration={500} offset={-100}>
              WORK
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              CONTACT
            </Link>
          </div>

          <div className="mt-2">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-xs lg:text-sm font-medium leading-none tracking-tight text-white dark:from-white xl:text-xl">
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
