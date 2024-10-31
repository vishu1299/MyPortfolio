"use client";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import { Link } from "react-scroll"; // Import Link from react-scroll
import "../../../../style.css";
import { useState, useEffect } from "react";

function Mobile_header() {
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to update scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div>
        {scrollPosition >= 100 && scrollPosition <= 7130 && (
          <nav className="hidden sm:flex rounded-[3rem]">
            {/* <h1 className="text-white">{scrollPosition}</h1> */}
            <Link
              to="home"
              onClick={() => setActiveNav("#home")}
              className={activeNav === "#home" ? "active" : ""}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <AiOutlineHome />
            </Link>
            <Link
              to="about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <AiOutlineUser />
            </Link>
            <Link
              to="skills"
              onClick={() => setActiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <BiBook />
            </Link>
            <Link
              to="portfolio"
              onClick={() => setActiveNav("#portfolio")}
              className={activeNav === "#portfolio" ? "active" : ""}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <RiServiceLine />
            </Link>
            <Link
              to="contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <BiMessageSquareDetail />
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Mobile_header;

{
  /* <div className="z-50 sm:hidden justify-center items-center pt-6 flex">
        <div className="flex justify-between w-[90%]">
          <div className="">
            <img src="/Logo.png" alt="" className="h-5" />
          </div>
          <div className="">
            <img src="/hamMenu.png" alt="" className="h-4" />
          </div>
        </div>
      </div> */
}
