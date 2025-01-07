import { AnimatedSubscribeButton } from "../../../../components/magicui/animated-subscribe-button";
import { CheckIcon } from "lucide-react";
import { FaDownload } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "../../../../components/ui/typewriter-effect";
import { useState } from "react";

function Introduction() {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const downloadPDF = () => {
    const pdfUrl = "VishwasResume.pdf"; // Specify the URL or path to your PDF file
    const fileName = "VishwasResume.pdf";

    // Fetch the PDF file
    fetch(pdfUrl)
      .then((response) => response.blob()) // Convert the response to a Blob (binary large object)
      .then((blob) => {
        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element and trigger a download
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName; // Set the file name
        document.body.appendChild(a); // Append the anchor to the document
        a.click(); // Trigger a click to download the file
        setIsDownloaded(true);
        // Clean up
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url); // Release the memory used for the Blob URL
      })
      .catch((error) => {
        console.error("Error downloading the PDF:", error);
        setIsDownloaded(false);
      });
  };
  const words = [
    {
      text: "Frontend",
      className:
        "text-red-500 font-extrabold dark:text-blue-500 heading text-2xl lg:text-4xl xl:text-6xl ",
    },
    {
      text: "Developer",
      className:
        "text-white font-extrabold dark:text-blue-500 heading text-2xl lg:text-4xl xl:text-6xl",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center w-full z-50 ">
        <div className="text-white w-[90%] sm:w-[75%] xl:w-[85%] flex lg:justify-between sm:gap-x-5 lg:gap-0 flex-col sm:flex-row gap-y-16">
          {/* sir jasai aapnai kaha tha custom kam sai kam use kare to width kasai du ? */}
          <div className="flex  flex-col gap-5 sm:w-[55%] xl:w-[60%] mt-12 xl:mt-18 2xl:mt-20 ">
            <div className="flex gap-2 ">
              <img
                src="/hi.png"
                className="h-5 sm:h-6 lg:h-7 xl:h-full"
                alt=""
              />
              <h1 className=" font-bold text-xs lg:text-base xl:text-2xl my-auto">
                HI I’ M
              </h1>
            </div>
            <div className="text-2xl lg:text-4xl xl:text-6xl font-extrabold">
              <h1 className="leading-none heading">Vishwas</h1>
              <TypewriterEffectSmooth words={words} />
              <p className="lg:hidden pt-2 md:pt-0 text-[11px] leading-4 sm:w-[95%] xl:text-base font-normal text-[#C4CFDE] ">
                Frontend development involves building responsive and
                interactive web applications.
              </p>
              <p className="hidden lg:flex text-xs xl:text-base font-normal  xl:w-[80%] text-[#C4CFDE] ">
                Frontend development involves building responsive and
                interactive web applications ensuring a seamless user experience
                across various devices
              </p>
            </div>
            <div className="mt-1 xl:mt-3">
              <AnimatedSubscribeButton
                buttonColor="#D21C23"
                buttonTextColor="#ffffff"
                subscribeStatus={isDownloaded}
                initialText={
                  <span
                    className="group inline-flex gap-2 items-center text-[10px] lg:text-xs xl:text-lg my-auto text-center"
                    onClick={downloadPDF}
                  >
                    DOWNLOAD CV{" "}
                    <FaDownload className="ml-1 xl:h-4 xl:w-4 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center text-[10px] lg:text-xs xl:text-lg text-center">
                    <CheckIcon className="mr-2 xl:h-4 xl:w-4 h-3 w-3" />
                    DOWNLODED{" "}
                  </span>
                }
              />
            </div>
          </div>
          <div className="my-auto  sm:w-[40%]  2xl:w-[50%] ">
            <img
              className="h-full md:h-70 xl:h-full mx-auto mb-12 sm:mb-0 "
              src="/hero1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;

// masking example see acernety ui masking
