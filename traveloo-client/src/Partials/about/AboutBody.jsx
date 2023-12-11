import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LuCalendarClock } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import about from "../../assets/images/New folder/willian-justen-de-vasconcellos-7kCNXfo35aU-unsplash.jpg"

import "./AboutBody.css";
import Team from "./Team";

const AboutBody = () => {
  return (
    <div>
        <header className="header-pic mt-20 pt-5 text-white text-center flex flex-col  justify-center">
           <h1>Looking for joy?</h1>
           <p className="text-white py-5">Your trusted trip companion</p>
        </header>

      {/* ==================Why Choose Us ==============*/}
      <section className="my-28 px-28 text-center">
        <div className="my-16">
          <h2>Why Choose Us</h2>
          <p className="mt-5">These popular destinations have a lot to offer</p>
        </div>
        <div className="grid grid-cols-3 gap-5 text-center my-10">
          {/* Best Price Guarantee */}
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="bg-slate-100 text-secondary w-28 h-28 rounded-full flex justify-center items-center p-6">
              <VscWorkspaceTrusted className="w-20 h-20" />
            </div>
            <h5>Best Price Guarantee</h5>
            <p className="text-sm">
              We promise the best rates for your adventures, ensuring unbeatable
              prices for your dream getaways.
            </p>
          </div>

          {/* Easy & Quick Booking */}
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="bg-slate-100 text-secondary w-28 h-28 rounded-full flex justify-center items-center p-6">
              <LuCalendarClock className="w-20 h-20" />
            </div>
            <h5>Easy & Quick Booking</h5>
            <p className="text-sm">
              Our seamless booking process makes planning effortless, ensuring
              swift reservations for your travel plans.
            </p>
          </div>

          {/* Customer Care 24/7 */}
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="bg-slate-100 text-secondary w-28 h-28 rounded-full flex justify-center items-center p-6">
              <RiCustomerService2Line className="w-20 h-20" />
            </div>
            <h5>Customer Care 24/7</h5>
            <p className="text-sm">
              Experience round-the-clock support from our dedicated team,
              providing assistance whenever you need it throughout your journey.
            </p>
          </div>
        </div>
      </section>

      {/* About traveloo=================== */}
      <section className="px-28">
        <div className="grid grid-cols-2 gap-5">
            <div className="pr-20">
                <h2>About Traveloo</h2>
                <p className="my-5 text-justify text-sm  leading-loose text-black">
                Welcome to Traveloo, where every journey is a story waiting to unfold. Founded on the passion for exploration and a commitment to exceptional travel experiences, Traveloo is your gateway to a world of adventure. 

                </p>
                <p className="text-justify text-sm leading-loose text-black">Our mission is to curate and craft unforgettable moments, tailored to your preferences and wanderlust dreams. With a team of seasoned travelers and local experts, we pave the way for immersive cultural discoveries, breathtaking landscapes, and unique encounters. From the bustling cities to the serene corners of the globe, we&apos;re here to guide you, ensuring every step of your journey is seamless and extraordinary.</p>
            </div>

            <div className="flex items-center">
                <img src={about} alt="" className="rounded-lg"/>
            </div>

        </div>
      </section>

      <Team/>

    
    </div>
  );
};

export default AboutBody;
