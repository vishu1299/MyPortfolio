function My_skills() {
  return (
    <>
      <div className="sm:grid h-[10rem] lg:h-[14rem] xl:h-[15rem] sm:grid-cols-1 lg:grid-cols-2 flex overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-scroll skills sm:gap-5 pt-10 sm:pt-0 xl:w-[35%]">
        {[
          "/Figma.png",
          "/Figma.png",
          "/Figma.png",
          "/Figma.png",
          "/Figma.png",
        ].map((src, index) => (
          <div
            key={index}
            className="relative w-full h-24 xl:h-32 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-lg group"
          >
            <img
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
              src={src}
              alt="skill icon"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default My_skills;
