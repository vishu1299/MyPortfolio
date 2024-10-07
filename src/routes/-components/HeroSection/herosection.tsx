import Header from "./Components/header";
import Introduction from "./Components/introduction";
// import Mobile_header from "./Components/mobile_header";

function Herosection() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col justify-center items-center shrink-0 "
      >
        <div className="w-[97%] sm:w-full relative">
          <img
            className="hidden sm:flex absolute -z-10 size-full h-auto pt-2"
            src="/dark-bg2.png"
            // src="/design1.png"
            alt=""
          />
          <img
            className="sm:hidden flex absolute -z-10 size-full pt-2"
            src="/mobile-bg.png"
            alt=""
          />
          {/* <Mobile_header /> */}
          <Header />
          <Introduction />
        </div>
      </div>

      {/* <div className="">
        <Header />
        <Introduction />
      </div> */}
    </>
  );
}

export default Herosection;

// lg:bg-[url('/bg-1.png')] lg:bg-contain lg:bg-center lg:bg-no-repeat

// "use client";
// import Header from "./Components/header";
// import Introduction from "./Components/introduction";
// import { Boxes } from "../../../components/ui/background-boxes";

// export default Herosection;

// export default function Herosection() {
//   return (
//     <div className="h-screen relative overflow-hidden">
//       <div className="absolute bg-slate-900  [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

//       <Boxes />
//       <Header />
//       <Introduction />
//       <div></div>
//     </div>
//   );
// }
