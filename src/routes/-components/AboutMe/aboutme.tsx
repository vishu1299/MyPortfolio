import Aboutcontent from "./components/aboutcontent";
import { OrbitingCirclesDemo } from "./components/orbit";

function Aboutme() {
  return (
    <>
      <div id="about" className="shrink-0 md:mt-44 lg:mt-52  xl:mt-80 ">
        <div className="flex flex-col gap-10 sm:flex-row justify-between w-full">
          <div className="w-full flex relative h-full order-2 sm:order-1">
            <img
              src="/orbit-design.png"
              className="h-[29rem] absolute left-20"
              alt=""
            />
            <OrbitingCirclesDemo />
          </div>
          <div className="order-1 sm:order-2">
            <Aboutcontent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
