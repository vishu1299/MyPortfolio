function Aboutcontent() {
  return (
    <>
      <div className="text-white pt-14  w-[80%]">
        <div className="flex flex-col gap-5">
          <div className="flex  gap-3 ">
            <img className="w-[1rem]  my-auto" src="/about-icon.png" alt="" />
            <h1 className="my-auto font-bold text-[12px] text-[#D21C23]">
              ABOUT ME
            </h1>
          </div>
          <div className="text-[44px] font-extrabold">
            <h1>Creating Seamless User </h1>
            <h1>Experiences for the Web</h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-normal text-[#C4CFDE] w-[85%]">
              As a frontend developer, I translate UI/UX designs into
              interactive, responsive, and user-friendly interfaces.
            </p>
            <p className="text-[16px] font-normal text-[#C4CFDE] w-[85%]">
              My role ensures that digital products not only look good but are
              fast, accessible, and provide a seamless experience across devices
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcontent;
