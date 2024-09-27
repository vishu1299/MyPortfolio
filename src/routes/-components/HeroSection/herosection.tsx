import Header from "./Components/header";
import Introduction from "./Components/introduction";

function Herosection() {
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center h-screen ">
        <div className=" w-full relative">
          <img className="absolute -z-10" src="/bg-1.png" alt="" />
          <Header />
          <Introduction />
        </div>
      </div> */}

      <div className="">
        <Header />
        <Introduction />
      </div>
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
