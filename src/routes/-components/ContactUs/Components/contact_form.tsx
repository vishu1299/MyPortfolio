const Contact_form = () => {
  return (
    <div className="bg-[#171a1e58] p-6 sm:p-10 rounded-xl w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div>
          <label className="block text-white mb-3">Your Name:</label>
          <input
            type="text"
            placeholder="Name :"
            className="w-full p-3 rounded-md border bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-white mb-3">Your Email:</label>
          <input
            type="email"
            placeholder="Email :"
            className="w-full p-3 rounded-md border bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mt-8">
        <label className="block text-white mb-3">Your Question:</label>
        <input
          type="text"
          placeholder="Subject :"
          className="w-full p-3 rounded-md border bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
        />
      </div>

      <div className="mt-8">
        <label className="block text-white mb-3">Your Comment:</label>
        <textarea
          rows={8}
          placeholder="Message :"
          className="w-full p-2 rounded-md border bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
        />
      </div>

      <div className="mt-8">
        <button
          disabled
          className="w-full p-3 rounded-md bg-[#d21c23] text-white font-bold hover:bg-red-700 transition cursor-not-allowed"
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Contact_form;
