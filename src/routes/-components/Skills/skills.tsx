import Skills_intro from "./components/skills_intro";
import "../../../style.css";
import My_skills from "./components/my_skills";

function Skills() {
  return (
    <>
      <div
        id="skills"
        className="flex flex-col justify-center h-full items-center shrink-0 mt-10 md:mt-40 lg:mt-52 xl:mt-48 responsive-div"
      >
        <div className="w-[97%] h-full sm:w-full relative ">
          <img
            className="hidden sm:flex absolute -z-10 size-full h-auto pt-2"
            src="/Skills1.png"
            alt=""
          />
          <div className=" mx-auto flex flex-col sm:flex-row justify-center items-center h-[22rem] sm:h-[16rem] lg:h-[20rem] xl:h-[30rem] lg:gap-0 sm:gap-x-5 xl:gap-x-5">
            <Skills_intro />
            <My_skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
