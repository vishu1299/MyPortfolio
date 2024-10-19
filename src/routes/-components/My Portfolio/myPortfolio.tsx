function MyPortfolio() {
  return (
    <>
      <div className="flex justify-center items-center w-full shrink-0 mt-32 sm:mt-32 lg:mt-24 xl:mt-52 responsive-div">
        <div className="grid gap-14 sm:grid-cols-2 xl:w-[70%] w-[90%]">
          {/* component 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 ">
              <img
                className="w-[1rem] my-auto"
                src="/about-icon.png"
                alt="About Icon"
              />
              <h1 className="my-auto font-bold text-[12px] text-[#D21C23]">
                My Portfolio
              </h1>
            </div>
            <div className="">
              <h1 className="text-lg sm:text-xl lg:text-4xl font-extrabold text-white ">
                Crafting Experiences One Pixel at a Time
              </h1>
            </div>
            <div className="flex flex-col gap-3 mx-auto sm:mx-0">
              <img
                src="/project-1.jpg"
                className="h-full w-full  mt-10 rounded-2xl"
                alt=""
              />
              <h1 className="font-medium text-sm xl:text-base text-[#D21C23]">
                IntuiInteract Design
              </h1>
              <h1 className=" text-base xl:text-xl font-bold text-white">
                Designing the Future Today
              </h1>
            </div>
          </div>
          {/* component 2 */}
          <div className="flex flex-col gap-3 mx-auto">
            <div className="flex flex-col gap-3">
              <img
                src="/project-1.jpg"
                className="h-full w-full  mt-10 sm:mt-0 rounded-2xl"
                alt=""
              />
              <h1 className="font-medium text-sm xl:text-base text-[#D21C23]">
                IntuiInteract Design
              </h1>
              <h1 className=" text-base xl:text-xl font-bold text-white">
                Designing the Future Today
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/project-1.jpg"
                className="h-full w-full  mt-10 rounded-2xl"
                alt=""
              />
              <h1 className="font-medium text-sm xl:text-base text-[#D21C23]">
                IntuiInteract Design
              </h1>
              <h1 className=" text-base xl:text-xl font-bold text-white">
                Designing the Future Today
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPortfolio;
