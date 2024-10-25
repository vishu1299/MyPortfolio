import Contact_form from "./Components/contact_form";

const Contact_us = () => {
  const contactInfo = [
    {
      icon: "/Aicon.png", // or a path to an image
      label: "Phone",
      values: "(+91) 9416979830",
    },
    {
      icon: "/Aicon3.png",
      label: "Address",
      values: "Bahagurgarh,Haryana",
    },
    {
      icon: "/Aicon2.png",
      label: "Email",
      values: "vishvasgupta2002@gmail.com",
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full items-center  shrink-0 mt-28 sm:mt-20 lg:mt-32 xl:mt-52 responsive-div mb-5">
        <div className="w-[90%] lg:w-[80%]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="flex flex-col gap-10">
              <div className="">
                <div className="flex gap-3">
                  <img
                    className="w-[1rem] my-auto"
                    src="/contact-icons.png"
                    alt="About Icon"
                  />
                  <h1 className="my-auto font-bold text-[12px] text-[#D21C23]">
                    CONTACT
                  </h1>
                </div>
                <h1 className="text-white font-extrabold text-[44px]">
                  Contact Me
                </h1>
                <div className="grid md:grid-cols-2 gap-3 xl:gap-y-6 pt-7">
                  {contactInfo.map((value) => (
                    <div className="flex gap-3">
                      <img
                        className="h-8 xl:h-10 my-auto"
                        src={value.icon}
                        alt=""
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="text-[#C4CFDE] text-xs xl:text-sm font-normal">
                          {value.label} :
                        </h1>
                        <p className="text-sm text-white font-semibold xl:text-base">
                          {value.values}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25337.649656959762!2d76.90987450389234!3d28.6933321363263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d094dd5088c81%3A0x9aff990a79ed3240!2sBahadurgarh%2C%20Haryana%20124507!5e1!3m2!1sen!2sin!4v1729830215422!5m2!1sen!2sin"
                width="664"
                height="377"
                allowFullScreen
                loading="lazy"
                className="w-full rounded-xl filter: invert(90%)"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Contact_form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_us;
