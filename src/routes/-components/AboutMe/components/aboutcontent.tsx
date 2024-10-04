import "../../../../style.css";
import { FaChevronRight } from "react-icons/fa6";

function AboutContent() {
  const contactInfo = [
    {
      icon: "/Aicon.png", // or a path to an image
      label: "Phone",
      values: "(+91) 9416979830",
    },
    {
      icon: "/Aicon2.png",
      label: "Email",
      values: "vishvasgupta2002@gmail.com",
    },
    {
      icon: "/Aicon3.png",
      label: "Address",
      values: "Bahagurgarh,Haryana",
    },
    {
      icon: "/Aicon4.png",
      label: "Websites",
      values: "www.website.com",
    },
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
          <div className="text-2xl xl:text-5xl font-extrabold leading-[1.5] xl:leading-[1.3]">
            <h1>Creating Seamless User Experiences for the Web</h1>
          </div>

          <div className="flex flex-col ">
            <p className="text-xs xl:text-base font-normal text-[#C4CFDE] xl:w-[85%]">
              As a frontend developer, I translate UI/UX designs into
              interactive, responsive, and user-friendly interfaces.
            </p>
            <p className="text-xs xl:text-base font-normal text-[#C4CFDE] xl:w-[85%]">
              My role ensures that digital products not only look good but are
              fast, accessible and provide a seamless experience across devices.
            </p>
          </div>
          <div className="grid xl:grid-cols-2 gap-3 xl:gap-y-6 pt-5">
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
          </div>
          <button
            type="submit"
            className="theme-btn max-w-fit mt-3 p-2 text-[10px] font-bold xl:p-3 xl:text-sm"
          >
            <div className="flex gap-1 hover:gap-3">
              HIRE ME
              <FaChevronRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
