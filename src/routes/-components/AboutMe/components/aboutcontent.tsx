import "../../../../style.css";
import { FaChevronRight } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

function AboutContent() {
  const expertiseItems = [
    { id: 1, label: "Wireframing and Prototyping" },
    { id: 2, label: "Usability Testing Device" },
    { id: 3, label: "Responsive Web Design" },
    { id: 4, label: "Usability Testing Device" },
  ];
  return (
    <div className="flex justify-center items-center w-full">
      <div className="text-white  xl:w-full w-[90%]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <img
              className="w-[1rem] my-auto"
              src="/about-icon.png"
              alt="About Icon"
            />
            <h1 className="my-auto font-bold text-[12px] text-[#D21C23]">
              ABOUT ME
            </h1>
          </div>

          <div className="text-xl lg:text-2xl xl:text-5xl font-extrabold leading-[1.5] xl:leading-[1.3]">
            <h1>Creating Seamless User Experiences for the Web</h1>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs xl:text-base font-normal text-[#C4CFDE] xl:w-[85%]">
              As a frontend developer, I translate UI/UX designs into
              interactive, responsive, and user-friendly interfaces.
            </p>
            <p className="text-xs xl:text-base font-normal text-[#C4CFDE] xl:w-[85%]">
              My role ensures that digital products not only look good but are
              fast, accessible and provide a seamless experience across devices.
            </p>
          </div>
          {/* <div className="grid xl:grid-cols-2 gap-3 xl:gap-y-6 pt-5">
            {contactInfo.map((value) => (
              <div className="flex gap-3">
                <img className="h-8 xl:h-10 my-auto" src={value.icon} alt="" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#C4CFDE] text-xs xl:text-sm">
                    {value.label} :
                  </h1>
                  <p className="text-sm xl:text-base">{value.values}</p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="">
            <h1 className="text-xl font-bold text-[#C4CFDE] pb-4 pt-3">
              My expertise includes:
            </h1>
            <div className="grid sm:grid-cols-2 gap-2 ">
              {expertiseItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                >
                  <FiCheckCircle className="h-8 xl:h-10 text-[#D21C23]" />
                  <div>
                    <h1 className="text-[#C4CFDE] text-sm md:text-xs xl:text-base">
                      {item.label}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="theme-btn max-w-fit mt-3 p-2 text-[10px] font-bold xl:p-3 xl:text-sm"
          >
            <div className="flex gap-1 ">
              HIRE ME
              <FaChevronRight className="my-auto" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
