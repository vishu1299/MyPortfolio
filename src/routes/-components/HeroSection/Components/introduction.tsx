import { AnimatedSubscribeButton } from "../../../../components/magicui/animated-subscribe-button";
import { CheckIcon } from "lucide-react";
import { FaDownload } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "../../../../components/ui/typewriter-effect";
// import { MaskContainer } from "../../../../components/ui/svg-mask-effect";

function Introduction() {
  const words = [
    {
      text: "Frontend",
      className:
        "text-red-500 font-extrabold dark:text-blue-500 md:text-[60px]",
    },
    {
      text: "Developer",
      className: "text-white font-extrabold dark:text-blue-500 md:text-[60px]",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full z-50">
        <div className="text-white w-[80%] flex">
          <div className="flex flex-col gap-5">
            <div className="flex gap-1 ">
              <img src="/hi.png" alt="" />
              <h1 className="my-auto font-bold text-[24px]">HI I’ M</h1>
            </div>
            <div className="text-[60px] font-extrabold">
              <h1 className="leading-none">Vishwas</h1>
              <TypewriterEffectSmooth words={words} />
            </div>
            <div className="">
              <p className="text-[16px] font-normal text-[#C4CFDE] w-2/3">
                Frontend development involves building responsive and
                interactive web applications, ensuring a seamless user
                experience across various devices
              </p>
            </div>
            <div className="mt-3">
              <AnimatedSubscribeButton
                buttonColor="#D21C23"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                  <span className="group inline-flex gap-2 items-center">
                    DOWNLOAD CV{" "}
                    <FaDownload className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4" />
                    DOWNLODED{" "}
                  </span>
                }
              />
            </div>
          </div>
          <div className="">
            <img src="/profile.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;

// masking example see acernety ui masking

{
  /* <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
  <MaskContainer
    revealText={
      <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
        The first rule of MRR Club is you do not talk about MRR Club. The
        second rule of MRR Club is you DO NOT talk about MRR Club.
      </p>
    }
    className="h-[40rem] border rounded-md"
  >
    The first rule of <span className="text-red-500">MRR Club</span> is
    you do not talk about MRR Club. The second rule of MRR Club is you DO
    NOT talk about <span className="text-red-500">MRR Club</span>.
  </MaskContainer>
</div> */
}
