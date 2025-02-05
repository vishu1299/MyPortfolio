import { createFileRoute } from "@tanstack/react-router";
import Aboutme from "./-components/AboutMe/aboutme";
import Herosection from "./-components/HeroSection/herosection";
import Skills from "./-components/Skills/skills";

import Newfile from "./-components/Resume/resume";
import MyPortfolio from "./-components/My Portfolio/myPortfolio";
import Services from "./-components/Services/services";
import Connect from "./-components/LetsConnect/connect";

import Projects from "./-components/ProjectCarousel/projectcarousel";
import Contact_us from "./-components/ContactUs/contact_us";
import Footer from "./-components/Footer/footer";
import Mobilenav from "./-components/Small_mobilenav/smallMenu";
// import { Portfolio } from "./-components/Portfolio/portfolio";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <div className=" flex flex-col justify-center items-center ">
        {/* flex flex-col gap-10 xl:gap-80 sm:gap-36 lg:gap-60 */}
        <Mobilenav />
        <div className="w-[98%] max-w-[1536px] ">
          <Herosection />
          <Aboutme />
          <Skills />
          {/* <Portfolio /> */}
          <Newfile />
          <MyPortfolio />
          <Services />
          <Connect />
          <Projects />
          <Contact_us />
        </div>
        <div className="w-full max-w-[1536px]">
          <Footer />
        </div>
        <div className="fixed  lg:bottom-2 2xl:bottom-12 right-5 hidden sm:flex">
          <div className="w-24 h-24 lg:w-32 lg:h-32 ">
            <lottie-player
              src="https://lottie.host/2fa2f462-47dc-4cbb-94f3-c496bdb2e739/BKDAGMHTjI.json"
              background="##000000"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
              style={{ width: "100%", height: "100%" }} // This ensures the animation fills the container
            ></lottie-player>
          </div>
        </div>
      </div>
    </>
  ),
});
