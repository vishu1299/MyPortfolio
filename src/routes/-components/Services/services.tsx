import Services_offered from "./Components/services_offered";

function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center shrink-0  mt-24 sm:mt-32  xl:mt-52 responsive-div">
        <div className="w-[97%] sm:w-full relative">
          <img
            className="hidden sm:flex absolute -z-10 size-full h-auto pt-2"
            src="/services.png"
            alt=""
          />
          <img
            className="sm:hidden flex absolute -z-10 size-full pt-2"
            src="/mobile-bg.png"
            alt=""
          />
        </div>
        <Services_offered />
      </div>
    </>
  );
}

export default Services;
