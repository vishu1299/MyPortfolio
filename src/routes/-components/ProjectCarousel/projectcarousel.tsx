import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const cards = [
    {
      date: "01 April, 2023",
      title: "Crafting Experiences One Pixel at a Time",
      image: "",
    },
    {
      date: "02 April, 2023",
      title: "Designing the Future One Click at a Time",
      image: "",
    },
    {
      date: "03 April, 2023",
      title: "Designing Tomorrow's Experiences Today",
      image: "",
    },
    {
      date: "04 April, 2023",
      title: "Exploring New Frontiers of Design",
      image: "",
    },
    {
      date: "05 April, 2023",
      title: "Shaping a More Interactive Future",
      image: "",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const totalCards = cards.length;
  const visibleCardsCount = 3; // Number of cards visible at a time

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div
      id="work"
      className="flex justify-center items-center w-full shrink-0 mt-28 sm:mt-20 lg:mt-32 xl:mt-52"
    >
      <div className="lg:w-[80%] w-[90%] text-white">
        {/* Header Section */}
        <div className="flex flex-col gap-y-10 sm:flex-row w-full justify-between mb-4 sm:mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <img
                className="w-[1rem] my-auto"
                src="/about-icon.png"
                alt="About Icon"
              />
              <h1 className="my-auto font-bold text-xs sm:text-[10px] lg:text-[14px] text-[#D21C23]">
                MY WORK
              </h1>
            </div>
            <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-[44px] w-full sm:w-[70%] font-extrabold leading-[1.5] xl:leading-[1.3] text-white">
              Take a Look at What I've Built
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 my-auto justify-end sm:justify-start">
            <button
              onClick={handlePrev}
              className="bg-[#D21C23] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex justify-center items-center"
            >
              <FaArrowLeft className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#171A1E] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex justify-center items-center"
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="overflow-hidden border border-[#c4cfde7c] p-5 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-300">
            {Array.from({ length: visibleCardsCount }).map((_, i) => {
              const index = (startIndex + i) % totalCards; // Circular index
              return (
                <div
                  key={index}
                  className={`bg-transparent sm:p-6 ${i !== visibleCardsCount - 1 ? "border-r border-[#c4cfde7c] pr-6" : ""}`}
                >
                  <div className="bg-[#C4CFDE] h-[217px] w-full mb-6 rounded-xl"></div>
                  <p className="text-gray-400">{cards[index].date}</p>
                  <h3 className="text-xl font-semibold mb-4">
                    {cards[index].title}
                  </h3>
                  <button className="text-red-500 font-medium text-sm">
                    VISIT SITE
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing React Icons

// const Projects = () => {
//   // Array to hold the card data
//   const cards = [
//     {
//       date: "01 April, 2023",
//       title: "Crafting Experiences One Pixel at a Time",
//       image: "", // You can put the image URL here
//     },
//     {
//       date: "02 April, 2023",
//       title: "Designing the Future One Click at a Time",
//       image: "", // You can put the image URL here
//     },
//     {
//       date: "03 April, 2023",
//       title: "Designing Tomorrow's Experiences Today",
//       image: "", // You can put the image URL here
//     },
//     {
//       date: "04 April, 2023",
//       title: "Designing Tomorrow's Experiences Today",
//       image: "", // You can put the image URL here
//     },
//     {
//       date: "05 April, 2023",
//       title: "Designing Tomorrow's Experiences Today",
//       image: "", // You can put the image URL here
//     },
//   ];

//   return (
//     <div
//       id="work"
//       className="flex justify-center items-center w-full shrink-0 mt-28 sm:mt-20 lg:mt-32 xl:mt-52 responsive-div "
//     >
//       <div className=" lg:w-[80%] w-[90%] text-white">
//         <div className="flex flex-col gap-y-10 sm:flex-row w-full justify-between mb-4 sm:mb-16">
//           {/* Heading */}
//           <div className="flex flex-col gap-3">
//             <div className="flex gap-3">
//               <img
//                 className="w-[1rem] my-auto"
//                 src="/about-icon.png"
//                 alt="About Icon"
//               />
//               <h1 className="my-auto font-bold text-xs sm:text-[10px] lg:text-[14px] text-[#D21C23]">
//                 MY WORK
//               </h1>
//             </div>
//             <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-[44px] w-full sm:w-[70%]  font-extrabold leading-[1.5] xl:leading-[1.3] text-white">
//               Take a Look at What I've Built
//             </h1>
//           </div>

//           {/* Navigation with React Icons */}
//           <div className="flex gap-2 my-auto justify-end sm:justify-start">
//             <button className="bg-[#D21C23] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex justify-center items-center">
//               <FaArrowLeft className="text-white" /> {/* Left Arrow Icon */}
//             </button>
//             <button className="bg-[#171A1E] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex justify-center items-center">
//               <FaArrowRight className="text-white" /> {/* Right Arrow Icon */}
//             </button>
//           </div>
//         </div>

//         {/* Cards - Using map to render each card */}
//         <div className="overflow-hidden border border-[#c4cfde7c] p-5 rounded-2xl">
//           <div className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%]  xl:auto-cols-[33.33%] gap-8 md:gap-0">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`bg-transparent sm:p-6 ${
//                   index !== cards.length - 1
//                     ? "md:border-r md:border-[#c4cfde7c]"
//                     : ""
//                 }`}
//               >
//                 <div className="bg-[#C4CFDE] h-[217px] w-full mb-6 rounded-xl"></div>{" "}
//                 {/* Placeholder for image */}
//                 <p className="text-gray-400">{card.date}</p>
//                 <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
//                 <button className="text-red-500 font-medium text-sm">
//                   VISIT SITE
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


