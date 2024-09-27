import Aboutcontent from "./components/aboutcontent";
import { OrbitingCirclesDemo } from "./components/orbit";
// import { ThreeDCardDemo } from "./components/test";

function Aboutme() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-between w-full">
          <div className="w-full flex relative ">
            <img
              src="/orbit-design.png"
              className="h-[29rem] absolute left-20"
              alt=""
            />
            <OrbitingCirclesDemo />
          </div>
          <Aboutcontent />
          {/* <ThreeDCardDemo /> */}
        </div>
      </div>
    </>
  );
}

export default Aboutme;
