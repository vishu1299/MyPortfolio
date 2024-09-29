function Mobile_header() {
  return (
    <>
      <div className="z-50 sm:hidden justify-center items-center pt-6 flex">
        <div className="flex justify-between w-[90%]">
          <div className="">
            <img src="/Logo.png" alt="" className="h-5" />
          </div>
          <div className="">
            <img src="/hamMenu.png" alt="" className="h-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile_header;
