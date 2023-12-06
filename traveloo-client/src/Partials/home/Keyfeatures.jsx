import React from "react";
import { HiMiniTicket } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import feature1 from "../../assets/images/New folder/feature1.jpg";
import feature2 from "../../assets/images/New folder/feature2.jpg";
import bgdesign from "../../assets/images/BACKGROUND.png";
import { SiGooglemaps } from "react-icons/si";
const Keyfeatures = () => {
  return (
    <section className="px-28 pt-28 grid grid-cols-2">
      <div className="px-5 ">
        <h4 className="text-primary">Key features</h4>
        <h2 className="my-4">We offer best services</h2>
        <p className="my-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div className="my-10">
          <div className="key-div flex gap-5 items-center hover:border-inherit hover:border border border-base p-5 rounded-3xl">
            <div className="key-icon w-20 h-20 bg-tertiary rounded-3xl flex justify-center items-center text-base">
              <TiLocation className="w-10 h-10" />
            </div>
            <div>
              <h5>We offer best services</h5>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </div>

          {/* 2nd -------------- */}
          <div className="key-div flex gap-5 items-center hover:border-inherit hover:border border border-base p-5 rounded-3xl my-5">
            <div className="key-icon w-20 h-20 bg-[#FACD49] rounded-3xl flex justify-center items-center text-base">
              <IoCalendar className="w-10 h-10" />
            </div>
            <div>
              <h5>We offer best services</h5>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </div>

          {/* 3rd----------- */}
          <div className="key-div flex gap-5 items-center hover:border-inherit hover:border border border-base p-5 rounded-3xl">
            <div className="key-icon w-20 h-20 bg-primary rounded-3xl flex justify-center items-center text-base">
              <HiMiniTicket className="w-10 h-10" />
            </div>
            <div>
              <h5>We offer best services</h5>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </div>
        </div>
      </div>

      {/* right side----------- */}
      <div className="relative p-5">
        <img src={bgdesign} alt="" className="absolute -top-16 -right-28 -z-20 " />

        <div className="w-[400px] h-[600px]  rounded-full overflow-hidden">
          <img src={feature1} className="h-full w-auto" alt="" />
        </div>


        <h5 className="flex gap-2 items-center absolute top-28 right-20 bg-base px-5 py-2 rounded-full">
        <SiGooglemaps className="text-tertiary"/> Paradise on Earth
        </h5>


        <div className="w-[350px] h-[500px] rounded-full overflow-hidden border-[24px] border-base absolute -bottom-16 left-52">
          <img src={feature2} className="h-full w-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Keyfeatures;
