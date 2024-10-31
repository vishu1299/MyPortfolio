"use client";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "../../../style.css";
import { useState } from "react";

function Mobilenav() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div className="sm:hidden fixed bottom-0 z-50 w-full">
      <nav className="bg-[#1E1E1F] border border-[#383838] flex bottom-0 rounded-t-3xl rounded-r-3xl w-full  justify-center ">
        <Link
          to="home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <AiOutlineHome className="text-lg Custom_nav-menu" />
        </Link>
        <Link
          to="about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <AiOutlineUser className="text-lg Custom_nav-menu" />
        </Link>
        <Link
          to="skills"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <BiBook className="text-lg Custom_nav-menu" />
        </Link>
        <Link
          to="portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <RiServiceLine className="text-lg Custom_nav-menu" />
        </Link>
        <Link
          to="contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <BiMessageSquareDetail className="text-lg Custom_nav-menu" />
        </Link>
      </nav>
    </div>
  );
}

export default Mobilenav;
