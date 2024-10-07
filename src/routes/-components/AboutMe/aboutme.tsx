import Aboutcontent from "./components/aboutcontent";
import { OrbitingCirclesDemo } from "./components/orbit";
import "../../../style.css";

function Aboutme() {
  return (
    <>
      <div
        id="about"
        // agar jo index.tsx mai gap diya hai vo theek na lagai to add md:mt-40 lg:mt-52  xl:mt-80 responsive-div this in this div and remove that css in index.tsx
        className="shrink-0  mb-5 mt-10 md:mt-40 lg:mt-52 xl:mt-80 responsive-div"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          <div className="w-full flex relative h-full order-2 sm:order-1 my-auto">
            <img
              src="/orbit-design.png"
              className="h-[20rem] xl:h-[29rem] absolute left-6 xl:left-4 2xl:left-10 hidden lg:flex "
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
