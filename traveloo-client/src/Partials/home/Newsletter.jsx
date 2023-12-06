import React from "react";
import { useForm } from "react-hook-form";
import Graphic_Element from "../../assets/images/Graphic_Elements.png"
const Newsletter = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className=" relative">
        <img src={Graphic_Element} alt="" className="absolute left-16 -top-10"/>
      <div className="flex flex-col justify-center items-center mx-28 my-20 rounded-3xl bg-[#FACD49] bg-opacity-[9%] py-28 px-16">
        <div className="text-center px-20">
          <h4 className="text-primary uppercase">
            subscribe to our newsletter
          </h4>
          <h2 className="my-6 text-black">
            Prepare yourself & let’s explore the beauty of the world
          </h2>
        </div>

        <div >
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
            <div>
            <input
            placeholder="Your Email"
            className="outline-none px-5 py-3 w-[600px] h-[60px] rounded-2xl"
            type="email"
              {...register("mail", { required: "Your Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert" className="px-5 text-red-500 text-xs my-3">{errors.mail.message}</p>}
            </div>
            <input type="submit" value="Subscribe" className="hover:scale-90 transition duration-150 ease-in-out bg-secondary h-[60px] px-7 rounded-full text-base"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
