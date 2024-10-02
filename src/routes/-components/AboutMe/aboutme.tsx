import Aboutcontent from "./components/aboutcontent";
import { OrbitingCirclesDemo } from "./components/orbit";
import "../../../style.css";

function Aboutme() {
  return (
    <>
      <div
        id="about"
        // agar jo index.tsx mai gap diya hai vo theek na lagai to add md:mt-40 lg:mt-52  xl:mt-80 responsive-div this in this div and remove that css in index.tsx
        className="shrink-0 mb-5 mt-10 md:mt-40 lg:mt-52 xl:mt-80 responsive-div"
      >
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full flex relative h-full order-2 sm:order-1 my-auto">
            <img
              src="/orbit-design.png"
              className="h-[21.5rem] xl:h-[29rem] absolute left-14 xl:left-12 2xl:left-16 hidden lg:flex "
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
