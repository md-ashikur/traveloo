import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TeamCards from "./TeamCards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";

const Team = () => {
  const [slides] = useState(TeamCards);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="flex justify-center ">
      <div className="px-20 py-10 my-20 max-w-[1300px] overflow-hidden">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="text-primary">Our Team</h2>
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
          modules={[Navigation]}
          speed={1000} 
          effect={"slide"} 
          grabCursor={true}
          className="mySwiper my-5 py-5 px-2"
        >
          {slides.map((elem) => {
            const { id, picture, name, title } = elem;

            return (
              <SwiperSlide
                key={id}
                className=" shadow-none overflow-hidden"
              >
                <div className="w-full h-[400px] overflow-hidden">
                  <img
                    src={picture}
                    alt=""
                    className="h-auto w-auto rounded-2xl"
                  />
                </div>
                <div className="py-5">
                  <h5 className="col-span-2">{name}</h5>
                  <p>{title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
