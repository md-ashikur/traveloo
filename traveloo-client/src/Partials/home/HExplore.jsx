import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import ExploreCards from "./ExploreCards";
import pic4 from "../../assets/images/New folder/forest.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const HExplore = () => {
  const [slides, setSlides] = useState(ExploreCards);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className="px-28 my-20">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-primary">Top Destination</h4>
          <h2>Explore top destination</h2>
        </div>
        <div className="flex gap-5">
          <button ref={navigationPrevRef} className=" hover:bg-secondary hover:text-base border hover:border-secondary transition ease-in-out delay-150  hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 rounded-full flex items-center justify-center  w-16 h-16 p-5">
            <FaArrowLeftLong />
          </button>
          <button ref={navigationNextRef} className="hover:bg-secondary hover:text-base border hover:border-secondary transition ease-in-out delay-150  hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 rounded-full flex items-center justify-center  w-16 h-16 p-5">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* cards----------- */}
      <div className=" relative ">
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            390: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[ Navigation]}
          className="mySwiper my-5 py-5 "
        >
          {slides.map((elem) => {
            const { id, picture, title, price, description } = elem;

            return (
              <SwiperSlide key={id} className="shadow-lg w-[300px] h-[470px] rounded-[32px] overflow-hidden">
                <div className="w-full h-[300px] overflow-hidden">
                  <img src={pic4} alt="" className="h-auto w-full"/>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3">
                    <h5 className="col-span-2">
                     {title}
                    </h5>
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
