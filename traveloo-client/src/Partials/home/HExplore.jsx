import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import ExploreCards from "./ExploreCards";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules 
import {  Navigation } from "swiper/modules";

const HExplore = () => {
  const [slides] = useState(ExploreCards);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className="flex justify-center">
      <div className="px-28 my-20 max-w-[1345px] overflow-hidden">
      <div className="flex justify-between items-center ">
        <div>
          <h4 className="text-primary">Top Destination</h4>
          <h2>Explore top destination</h2>
        </div>

        <div className="flex gap-5">
          <button
            ref={navigationPrevRef}
            className=" hover:bg-secondary hover:text-base border hover:border-secondary transition ease-in-out delay-150  hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 rounded-full flex items-center justify-center  w-16 h-16 p-5"
          >
            <FaArrowLeftLong />
          </button>
          <button
            ref={navigationNextRef}
            className="hover:bg-secondary hover:text-base border hover:border-secondary transition ease-in-out delay-150  hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 rounded-full flex items-center justify-center  w-16 h-16 p-5"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* cards----------- */}
   
        <Swiper
         
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            390: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
           
          }}
          loop={true}
          loopfillgroupwithblank="true"
          spaceBetween={30}
          modules={[ Navigation]}
          speed={1000} 
          effect={"slide"} 
          grabCursor={true}
          className="mySwiper my-5 py-5 px-6"
        >
          {slides.map((elem) => {
            const { id, picture, title, price, description } = elem;

            return (
              <SwiperSlide
                key={id}
                className="explorer-slide shadow-lg  rounded-[32px] overflow-hidden"
              >
                <div className="w-[350px] h-[300px] overflow-hidden">
                  <img src={picture} alt="" className="h-auto w-auto" />
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3">
                    <h5 className="col-span-2">{title}</h5>
                    <h5 className="text-primary text-right">{price}</h5>
                  </div>
                  <p className="mt-3">{description}</p>
                  <h5 className="text-tertiary my-5">4.8</h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    
    </section>
  );
};

export default HExplore;
