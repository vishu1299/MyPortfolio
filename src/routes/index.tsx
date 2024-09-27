import { createFileRoute } from "@tanstack/react-router";
import Aboutme from "./-components/AboutMe/aboutme";
import Herosection from "./-components/HeroSection/herosection";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <div className="w-full  flex justify-center items-center ">
        <div className=" max-w-[1536px]">
          <Herosection />
          <Aboutme />
        </div>
      </div>
    </>
  ),
});
