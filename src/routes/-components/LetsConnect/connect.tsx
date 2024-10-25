const Connect = () => {
  return (
    <>
      <div
        
        className="flex justify-center items-center w-full  shrink-0 mt-28 sm:mt-20 lg:mt-32 xl:mt-52 responsive-div"
      >
        <div className="w-[90%] lg:w-[80%]">
          <div className="grid grid-cols-5">
            <div className="col-span-1 hidden sm:flex flex-col gap-28 mx-auto">
              <img
                src="/connect-1.png"
                className="h-12 w-auto  xl:h-16 xl:w-[65px] mx-auto"
                alt=""
              />
              <img
                src="/connect-2.png"
                className="h-[100px] w-auto xl:h-[138px] xl:w-[119px]"
                alt=""
              />
            </div>
            <div className="mx-auto my-auto flex flex-col gap-5 col-span-5 sm:col-span-3">
              <div className="flex gap-3 justify-center items-center ">
                <img
                  className="w-[1rem] my-auto"
                  src="/about-icon.png"
                  alt="About Icon"
                />
                <h1 className="my-auto font-bold text-xs sm:text-[10px] lg:text-[14px] text-[#D21C23]">
                  LET'S CONNECT
                </h1>
                <img
                  className="w-[1rem] my-auto"
                  src="/resume-right.png"
                  alt="About Icon"
                />
              </div>
              <h2 className="text-xl lg:text-2xl mx-auto xl:text-4xl w-full sm:w-[70%] text-center font-extrabold leading-[1.5] xl:leading-[1.3] text-white">
                Let's Build Something Great Together !
              </h2>
              <p className="text-neutral-400 dark:text-neutral-300 mx-auto text-center w-full text-xs xl:text-base sm:w-[85%] xl:w-[70%] ">
                “I am here to help you with your next big project. Reach out to
                discuss your ideas and how we can bring them to life.”
              </p>
              <button
                type="submit"
                className="theme-btn max-w-fit mt-5 p-2 text-[10px] font-bold  xl:text-xs mx-auto"
              >
                <div className="mx-auto">GET IN TOUCH</div>
              </button>
            </div>
            <div className="col-span-1 hidden sm:flex flex-col gap-28 mx-auto">
              <img
                src="/connect-3.png"
                className="h-[125px] w-auto xl:h-[170px] xl:w-[147px] mx-auto"
                alt=""
              />
              <img
                src="/connect-4.png "
                className="h-3 w-auto xl:h-6 xl:w-[70px] mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
