import React, { useState } from "react";
import TestimonialCards from "./TestimonialCards";
import layer from "../../assets/images/Layer1.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {
  const [clientslides] = useState(TestimonialCards);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="relative text-center my-20 top-0 ">
       <div><img src={layer} alt="" className="w-full" /></div>

      <div className="flex flex-col items-center justify-center ">
      <div className="absolute -top-10  my-20">
     
     <h4 className="text-primary">Testimonials</h4>
      <h2>Trust our clients</h2>
   

     
        <div className="flex justify-between absolute top-64  w-full">
          <button
            ref={navigationPrevRef}
            className=" hover:bg-secondary hover:text-base border hover:border-secondary transition ease-in-out delay-150  hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 rounded-full flex items-center justify-center  w-16 h-16 p-5"
          >
            <FaArrowLeftLong />
          </button>
          <button
            ref={navigationNextRef}
            className="right-0 hover:bg-secondary hover:text-base border hover:border-secondary transition ease-in-out delay-150  hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 rounded-full flex items-center justify-center  w-16 h-16 p-5"
          >
            <FaArrowRightLong />
          </button>
        </div>

      <div className="flex justify-center ">
      <Swiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          slidesPerView={1}
          loop={true}
          loopfillgroupwithblank="true"
          spaceBetween={30}
          modules={[Navigation]}
          speed={1000} 
          effect={"slide"} 
          grabCursor={true}
          className="mySwiper !w-[920px]  py-5 mx-28 px-2 "
        >
          {clientslides.map((elem) => {
            const { id, picture, name, title, description } = elem;

            return (
              <SwiperSlide
                key={id}
                className="shadow-none rounded-2xl testimonial-slide !w-full flex flex-col justify-center items-center text-center"
              >
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img src={picture} alt="" className="h-auto w-full" />
                </div>
                <div className="p-5">
                  <h5 className="text-tertiary">{name}</h5>
                  <h5 className="">{title}</h5>
                  <h5 className="text-tertiary my-5">4.8</h5>
                  <p className="mt-3 max-w-[500px]">{description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
