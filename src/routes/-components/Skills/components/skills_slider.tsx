import { Autoplay, EffectFade } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../../../../style.css";
import { EffectCards } from "swiper/modules";

// import required modules

function Skills_slider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className="flex justify-end w-[200px] h-[280px] sm:w-[140px] sm:h-[180px] lg:w-[180px] lg:h-[235px] xl:w-[260px] xl:h-[364px]"
      >
        {/** Array of skills with text */}
        {[
          // {
          //   imgSrc: "/skill-bg3.png",
          //   title: "React",
          //   description: "Build dynamic user interfaces.",
          //   progress: 85,
          //   color: "#00DBF6",
          // },
          // {
          //   imgSrc: "/skill-bg1.png",
          //   title: "JavaScript",
          //   description: "The language of the web.",
          //   progress: 90,
          //   color: "#FBD725",
          // },
          // {
          //   imgSrc: "/skill-bg4.png",
          //   title: "CSS",
          //   description: "Style your web with flair.",
          //   progress: 80,
          //   color: "#35A8DB",
          // },
          {
            imgSrc: "/skills-html.svg",
            title: "HTML",
            description: "Structure your web content.",
            progress: 75,
            color: "#F88736",
          },
          {
            imgSrc: "/skills-css.svg",
            title: "HTML",
            description: "Structure your web content.",
            progress: 75,
            color: "#F88736",
          },
          {
            imgSrc: "/skills-js.svg",
            title: "HTML",
            description: "Structure your web content.",
            progress: 75,
            color: "#F88736",
          },
          {
            imgSrc: "/skills-react.svg",
            title: "HTML",
            description: "Structure your web content.",
            progress: 75,
            color: "#F88736",
          },
        ].map((skill, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={skill.imgSrc}
              alt={skill.title}
              className="object-cover w-full h-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105" //
              style={{ objectFit: "cover" }}
            />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 rounded-lg p-4">
              <h3 className="text-white text-xs lg:text-lg xl:text-2xl font-bold mb-1 transform transition-transform duration-300 hover:translate-y-1">
                {skill.title}
              </h3>
              <p className="text-white text-[10px] lg:text-sm xl:text-base text-center mb-2">
                {skill.description}
              </p>

              <div className="w-full bg-gray-300 rounded-full mb-2">
                <div
                  className="h-1 xl:h-2 rounded-full transition-all duration-1000 "
                  style={{
                    width: `${skill.progress}%`,
                    backgroundColor: `${skill.color}`,
                  }}
                ></div>
              </div>
              <p className="text-white text-[10px] lg:text-sm mb-1">
                {skill.progress}% Proficient
              </p>

              
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Skills_slider;
