import React from "react";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

const ContactBody = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 px-20 mb-20 mt-28">
        <div className="p-4">
          <div className="flex items-center my-8 gap-3">
            <div className="flex justify-center items-center bg-secondary text-2xl w-16 h-16 rounded-full  text-white">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
          </div>
          <h5>Travel Agency</h5>
          <p className="my-5">
            123 Michigan, Miami Beach FL 5678, United States
          </p>
          <h5>Travel Operator</h5>
          <p className="my-5">20 Biscayne, Miami FL 330, United States</p>
        </div>

        {/* 2nd ---------- */}
        <div className="p-4">
          <div className="flex items-center my-8 gap-3">
            <div className="flex justify-center items-center bg-secondary text-white text-2xl w-16 h-16 rounded-full ">
              <BiSolidPhoneCall />
            </div>
            <h3>Give us a call</h3>
          </div>
          <h5>Mobile Number</h5>
          <p className="my-5">
            Tour Consultant : +1 234 567 890 <br></br>
            LocalGuide : +1 234 567 890
          </p>
          <h5>Office Number</h5>
          <p className="my-5">
            Administration : +1 234 567 890 <br></br>
            Technical Office +1 234 567 890
          </p>
        </div>

        {/* 3rd--------- */}
        <div className="p-4">
          <div className="flex items-center my-8 gap-3">
            <div className="flex justify-center items-center bg-secondary text-white text-2xl w-16 h-16 rounded-full ">
              <IoIosMail />
            </div>
            <h3>Write for anything</h3>
          </div>
          <h5>Quotes</h5>
          <p className="my-5">
            Write to this email for a detailed quotation -
            mdashik.contact@gmail.com
          </p>
          <h5>Consulting</h5>
          <p className="my-5">
            Consultation service can be requested here mdashik.contact@gmail.com
            every day Free.
          </p>
        </div>
      </div>

      <div className="p-20 text-center bg-slate-100">
        <div className="flex flex-col items-center">
          <h1 className="font-bold">Get in Touch</h1>
          <p className="my-5 max-w-[600px]">
            Write to us for personalized travel advice or for information on
            group travel and last minute travel, all travel is insured and safe.
          </p>
        </div>

        {/* form-------------- */}
        <form onSubmit={handleSubmit(onSubmit)} className="my-10">
          <div>
            <input
              placeholder="Your name"
              className="outline-none border-inherit border my-2 px-5 py-3 w-[600px] h-[60px] rounded-2xl"
              {...register("name", {
                required: "Your Name is required",
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p role="alert" className="px-5 text-red-500 text-xs my-3">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <input
              placeholder="Your Email"
              className="outline-none px-5 border-inherit border my-2 py-3 w-[600px] h-[60px] rounded-2xl"
              type="email"
              {...register("email", {
                required: "Your Email Address is required",
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p role="alert" className="px-5 text-red-500 text-xs my-3">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="outline-none px-5 border-inherit border my-2 py-3 w-[600px] h-[120px] rounded-2xl"
              {...register("messages", {
                required: "Your Message is required",
              })}
              aria-invalid={errors.messages ? "true" : "false"}
            />
            {errors.messages && (
              <p role="alert" className="px-5 text-red-500 text-xs my-3">
                {errors.messages.message}
              </p>
            )}
          </div>
          <input
            type="submit"
            value="Submit"
            className="hover:scale-[1.04] transition duration-150 ease-in-out bg-secondary h-[60px] px-7 w-[600px] rounded-full text-base"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactBody;
