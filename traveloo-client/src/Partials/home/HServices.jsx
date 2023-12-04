import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import destination1 from "../../assets/images/destination 1.png";
import booking from "../../assets/images/booking 1.png";
import cloudy from "../../assets/images/cloudy 1.png";
// Import Swiper styles
import "swiper/css";

const HServices = () => {
  return (
    <div>
      <section className="pl-28 my-10 grid grid-cols-3 overflow-hidden">
        <div className="place-self-center">
          <h4 className="text-primary">Services</h4>
          <h2>Our top value categories for you</h2>
        </div>
        <div className="col-span-2 relative ">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={10}
            grabCursor={true}
            className="mySwiper py-10 pl-28"
          >
            {/* card -1=========== */}
            <SwiperSlide className="service-slide flex flex-col items-center">
              <img src={destination1} alt="" className="w-16 h-16 my-5" />

              <div className="text-center">
                <h3 className="my-6">Best Tour Guide</h3>
                <p>
                  What looked like a small patch of purple grass, above five
                  feet.
                </p>
              </div>
            </SwiperSlide>

            {/* card -2=========== */}
            <SwiperSlide className="service-slide flex flex-col items-center">
              <img src={booking} alt="" className="w-16 h-16 my-5" />

              <div className="text-center">
                <h3 className="my-6">Easy Booking</h3>
                <p>Square, was moving across the sand in their direction.</p>
              </div>
            </SwiperSlide>

            {/* card -3=========== */}
            <SwiperSlide className="service-slide flex flex-col items-center">
              <img src={cloudy} alt="" className="w-16 h-16 my-5" />

              <div className="text-center">
                <h3 className="my-6">Weather Forecast</h3>
                <p>
                  What looked like a small patch of purple grass, above five
                  feet.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HServices;
