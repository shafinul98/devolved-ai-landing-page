import { useForm, SubmitHandler } from 'react-hook-form';

const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    console.log("hi");
    // Handle your form submission logic here
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-[#495167] text-[0.875rem] mb-2 font-ubuntu font-light">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
          className="w-full p-3 border border-[#d9e2ec] rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block text-[#495167] text-[0.875rem] mb-2 font-ubuntu font-light">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: "Last name is required" })}
          className="w-full p-3 border border-[#d9e2ec] rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-[#495167] text-[0.875rem] mb-2 font-ubuntu font-light">
          Message
        </label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          rows={4}
          className="w-full p-3 border border-[#d9e2ec] rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-full md:w-[15rem] md:h-[3rem]"
      >
        Submit
      </button>
    </form>
  );
};


export default ContactUsForm;
