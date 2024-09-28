import { createFileRoute } from "@tanstack/react-router";
import Aboutme from "./-components/AboutMe/aboutme";
import Herosection from "./-components/HeroSection/herosection";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <div className=" flex justify-center items-center ">
        <div className="w-[98%] max-w-[1536px]">
          <Herosection />
          <Aboutme />
        </div>
      </div>
    </>
  ),
});
