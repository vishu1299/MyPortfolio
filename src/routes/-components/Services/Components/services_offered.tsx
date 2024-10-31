// import { FiArrowUpRight } from "react-icons/fi";

function Services_offered() {
  const services = [
    {
      title: "Responsive Web Designs",
      description:
        "Building and Implementing responsive websites that work seamlessly across different devices using CSS frameworks like Tailwind",
    },
    {
      title: "Website Performance Optimization",
      description:
        "Implementing lazy loading, caching strategies and performance best practices.",
    },
    {
      title: "Form Validation & Input Handling",
      description:
        "Implementing client-side form validation using JavaScript or React hooks with features like error messages and real-time validation",
    },
    {
      title: "Single Page Application (SPA) Development",
      description:
        "Building SPAs using React.js for fast and seamless user experiences without page reloads.",
    },
    {
      title: "Version Control with Git",
      description:
        "Using Git for version control, branching, and managing codebase changes.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full xl:h-[41rem] 2xl:h-[42.5rem] sm:h-[23rem] lg:h-[30rem]  z-40 ">
        <div className="text-white w-[90%] sm:w-[95%] flex flex-col sm:flex-row gap-14 sm:gap-0 justify-center ">
          <div className="flex flex-col gap-5 sm:w-[40%]">
            <div className="flex gap-3 ">
              <img
                className="w-[1rem] my-auto"
                src="/about-icon.png"
                alt="About Icon"
              />
              <h1 className="my-auto font-bold text-xs sm:text-[10px] lg:text-[14px] text-[#D21C23]">
                MY SERVICES
              </h1>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold leading-[1.5] xl:leading-[1.3] text-white ">
                Services I Offered
              </h1>
              <p className="text-sm lg:text-base text-gray-400 sm:w-[90%] flex sm:hidden xl:flex">
                " I specialize in crafting responsive and user-friendly websites
                that prioritize performance and scalability, ensuring an
                exceptional experience for every user."
              </p>
            </div>
            <div>
              <img
                className="h-[13rem] sm:h-[8rem] lg:h-[15rem] mx-auto sm:mx-0 xl:h-[18rem] mt-6 "
                src="/s2.png"
                alt=""
              />
            </div>
          </div>
          <div className=" text-white h-[20rem] md:h-[17rem] shadow-sm sm:shadow-none shadow-slate-500 lg:h-[23rem]  xl:h-[30rem]  xl:p-6 pt-0 overflow-y-scroll skills sm:w-[40%]">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-gray-600  flex p-3 lg:p-4 xl:p-6 items-center justify-between"
              >
                <div>
                  <h3 className="text-base xl:text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-xs xl:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services_offered;
