import { useForm } from "react-hook-form";

const Contact_form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Congratulations Your message Has Been Sent");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[#171a1e58] p-6 sm:p-10 rounded-xl w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <label className="block text-white mb-3">Your Name:</label>
            <input
              placeholder="Name :"
              className="w-full p-3 focus:outline-none  rounded-md border bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
              {...register("name", {
                required: "Please Enter Your Name",
                minLength: {
                  value: 5,
                  message: "minimum 5 alphabets are required ",
                },
                maxLength: {
                  value: 15,
                  message: "maximum 15 alphabets can be used ",
                },
              })}
            />
            {errors.name?.message && (
              <p className="text-red-600 pt-2">{String(errors.name.message)}</p>
            )}
          </div>
          <div>
            <label className="block text-white mb-3">Your Email:</label>
            <input
              type="email"
              placeholder="Email :"
              className="w-full p-3 rounded-md border focus:outline-none bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
              {...register("Email", {
                required: "Email Is Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid Email Eddress",
                },
              })}
            />
            {errors.Email?.message && (
              <p className="text-red-600 pt-2">
                {String(errors.Email.message)}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-white mb-3">Your Question:</label>
          <input
            type="text"
            placeholder="Subject :"
            className="w-full p-3 rounded-md border focus:outline-none bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
            {...register("Question", {
              required: "Ask Something",
              minLength: {
                value: 5,
                message: "Minimum 5 Alphabets Are required ",
              },
              maxLength: {
                value: 30,
                message: "Maximum 30 Alphabets Can Be Used ",
              },
            })}
          />
          {errors.Question?.message && (
            <p className="text-red-600 pt-2">
              {String(errors.Question.message)}
            </p>
          )}
        </div>

        <div className="mt-8">
          <label className="block text-white mb-3">Your Comment:</label>
          <textarea
            rows={8}
            placeholder="Message :"
            className="w-full p-2 rounded-md border focus:outline-none bg-transparent border-[#c4cfde61] text-gray-300 placeholder-gray-400"
            {...register("Comment", {
              maxLength: {
                value: 50,
                message: "Maximum 50 Alphabets Can Be Used ",
              },
            })}
          />
          {errors.Comment?.message && (
            <p className="text-red-600 pt-2">
              {String(errors.Comment.message)}
            </p>
          )}
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-[#d21c23] text-white font-bold hover:bg-red-700 transition "
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact_form;
