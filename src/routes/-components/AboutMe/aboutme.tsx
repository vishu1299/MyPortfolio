import Aboutcontent from "./components/aboutcontent";
import { OrbitingCirclesDemo } from "./components/orbit";

function Aboutme() {
  return (
    <>
      <div id="about" className="shrink-0 mt-80 ">
        <div className="flex justify-between w-full">
          <div className="w-full flex relative h-full">
            <img
              src="/orbit-design.png"
              className="h-[29rem] absolute left-20"
              alt=""
            />
            <OrbitingCirclesDemo />
          </div>
          <Aboutcontent />
        </div>
      </div>
    </>
  );
}

export default Aboutme;
