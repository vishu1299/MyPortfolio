

const Timeline = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Scripting Success, One Word at a Time
      </h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">2001 - 2020</h2>

      <div className="flex justify-center mb-6">
        <div className="border-l-2 border-gray-600 h-full"></div>
      </div>

      {/* Job Experience */}
      <h3 className="text-2xl font-semibold mb-4">Job Experience</h3>
      <div className="relative mb-10">
        <div className="flex items-center mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mr-4">
            <h4 className="font-bold">Cybersecurity Analyst</h4>
            <p>Silicon Valley, California - (2015 - present)</p>
            <p>
              Analyze and interpret complex datasets to extract valuable
              insights, helping organizations make informed decisions and
              optimize business processes.
            </p>
          </div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>

        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-6 border-l-2 border-gray-600"></div>
      </div>

      <div className="relative mb-10">
        <div className="flex items-center mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mr-4">
            <h4 className="font-bold">Content Strategist</h4>
            <p>Sydney, Australia - (2012 - 2015)</p>
            <p>
              Develop and execute content plans that align with brand
              objectives, ensuring a cohesive and engaging narrative across
              various platforms to captivate the target audience.
            </p>
          </div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>

        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-6 border-l-2 border-gray-600"></div>
      </div>

      <div className="relative mb-10">
        <div className="flex items-center mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mr-4">
            <h4 className="font-bold">Renewable Energy Technician</h4>
            <p>Toronto, Canada - (2010 - 2011)</p>
            <p>
              Install, maintain, and repair renewable energy systems, such as
              solar panels and wind turbines, to promote sustainable energy
              sources.
            </p>
          </div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>

        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-6 border-l-2 border-gray-600"></div>
      </div>

      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mr-4">
            <h4 className="font-bold">Wisdom Weave Scribe</h4>
            <p>Harmony Institute - (2015 - 2020)</p>
            <p>
              Content writers create various forms of written material including
              articles, blog posts, website content, social media posts, and
              more.
            </p>
          </div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>

        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-6 border-l-2 border-gray-600"></div>
      </div>

      {/* Education Quality */}
      <h3 className="text-2xl font-semibold mb-4 text-center mt-8">
        Education Quality
      </h3>
      <div className="relative mb-10">
        <div className="flex items-center mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mr-4">
            <h4 className="font-bold">Learn Craft Narratives</h4>
            <p>Horizon Institute of Knowledge - (2010 - 2015)</p>
            <p>
              Turnaround times vary based on the scope and complexity of the
              project. Content writers often provide an estimated delivery time
              during project discussions.
            </p>
          </div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="relative mb-10">
        <div className="flex items-center mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mr-4">
            <h4 className="font-bold">Edu Prose Junction</h4>
            <p>Stellar Learning Academy - (2001 - 2010)</p>
            <p>
              Revisions policies is content writers. It’s to discuss revision
              terms before starting a project to ensure both parties have a
              clear understanding of the process.
            </p>
          </div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
