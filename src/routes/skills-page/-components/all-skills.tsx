import { HoverEffect } from "../../../components/ui/card-hover-effect";

const projects = [
  {
    id: 1,
    title: "HTML",
    description:
      "HTML is the foundation of web development, enabling the creation of structured web pages and content.",
    icon: "/html.png",
  },
  {
    id: 2,
    title: "CSS",
    description:
      "CSS enhances the visual appeal of web pages by allowing for styling and layout adjustments.",
    icon: "/css.png",
  },
  {
    id: 3,
    title: "BOOTSTRAP",
    description:
      "Bootstrap is a popular framework that simplifies responsive web design with its prebuilt components.",
    icon: "/bootstrap.png",
  },
  {
    id: 4,
    title: "TAILWIND",
    description:
      "Tailwind CSS is a utility-first framework that provides customizable styles for rapid UI development.",
    icon: "/tailwind.png",
  },
  {
    id: 5,
    title: "JAVASCRIPT",
    description:
      "JavaScript brings interactivity to web pages, enabling dynamic content and enhancing user experiences.",
    icon: "/js.png",
  },
  {
    id: 6,
    title: "REACT JS",
    description:
      "React JS is a JavaScript library for building user interfaces, focusing on component-based architecture.",
    icon: "/react.png",
  },
  {
    id: 7,
    title: "NEXT JS",
    description:
      "Next.js is a React framework that enables server-side rendering and static site generation for optimal performance.",
    icon: "/nextjs.png",
  },
];
// const projects1 = [
//   {
//     id: 1,
//     title: "back",
//     description:
//       "HTML is the foundation of web development, enabling the creation of structured web pages and content.",
//     icon: "/html.png",
//     link: "/html-development", // Updated link property
//   },
//   {
//     id: 2,
//     title: "CSS",
//     description:
//       "CSS enhances the visual appeal of web pages by allowing for styling and layout adjustments.",
//     icon: "/css.png",
//     link: "/css-styling", // Updated link property
//   },
//   {
//     id: 3,
//     title: "BOOTSTRAP",
//     description:
//       "Bootstrap is a popular framework that simplifies responsive web design with its prebuilt components.",
//     icon: "/bootstrap.png",
//     link: "/bootstrap-theme", // Updated link property
//   },
//   {
//     id: 4,
//     title: "TAILWIND",
//     description:
//       "Tailwind CSS is a utility-first framework that provides customizable styles for rapid UI development.",
//     icon: "/tailwind.png",
//     link: "/tailwind-design", // Updated link property
//   },
//   {
//     id: 5,
//     title: "JAVASCRIPT",
//     description:
//       "JavaScript brings interactivity to web pages, enabling dynamic content and enhancing user experiences.",
//     icon: "/js.png",
//     link: "/javascript-development", // Updated link property
//   },
//   {
//     id: 6,
//     title: "REACT JS",
//     description:
//       "React JS is a JavaScript library for building user interfaces, focusing on component-based architecture.",
//     icon: "/react.png",
//     link: "/react-application", // Updated link property
//   },
//   {
//     id: 7,
//     title: "NEXT JS",
//     description:
//       "Next.js is a React framework that enables server-side rendering and static site generation for optimal performance.",
//     icon: "/nextjs.png",
//     link: "/nextjs-application", // Updated link property
//   },
// ];

function All_skills() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#212428] to-[#424549]  flex flex-col items-center justify-center p-6 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mt-2 uppercase text-center tracking-wide">
          My Specializations Services
        </h2>
        {/* <h1 className="text-2xl md:text-4xl font-bold mt-2">What I Do</h1>
        <p className="text-center text-sm md:text-lg mt-4 max-w-3xl">
          Develop comprehensive content strategies tailored to your unique goals
          and target audience, ensuring that every piece of content.
        </p> */}

        {/* frontend skills*/}
        <div className="mt-12 max-w-5xl">
          <h1 className="text-xl md:text-2xl mt-4 p-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] animate-fadeIn tracking-wide hover:tracking-wider transition-all duration-200">
            Frontend Skills:
          </h1>
          <HoverEffect items={projects} />
        </div>

        {/* backend skills*/}
        {/* <div className="mt-12 max-w-5xl">
          <h1 className="text-white text-lg mt-4 max-w-3xl p-3">
            Backend Skills :
          </h1>
          <HoverEffect items={projects1} />
        </div> */}
      </div>
    </>
  );
}

export default All_skills;
