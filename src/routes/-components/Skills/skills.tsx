import Skills_intro from "./components/skills_intro";
import "../../../style.css";
// import My_skills from "./components/my_skills";
import Skills_slider from "./components/skills_slider";

function Skills() {
  return (
    <>
      <div
        id="skills"
        className="flex flex-col justify-center h-full items-center shrink-0 mt-10 md:mt-24 lg:mt-24 xl:mt-40 responsive-div"
      >
        <div className="w-[97%] h-full sm:w-full relative ">
          <img
            className="hidden sm:flex absolute -z-10 size-full h-auto pt-2"
            src="/Skills1.png"
            alt=""
          />
          <div className=" mx-auto w-[90%] gap-8 sm:w-[60%] grid grid-cols-1 sm:grid-cols-3 justify-center items-center h-[22rem] sm:h-[16rem] lg:h-[20rem] xl:h-[26rem] 2xl:h-[30rem] lg:gap-0 sm:gap-x-5 xl:gap-x-5 ">
            <Skills_intro />
            {/* <My_skills /> */}
            <Skills_slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
