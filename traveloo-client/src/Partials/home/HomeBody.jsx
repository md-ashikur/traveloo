import React from "react";
import layer from "../../assets/images/layer.png";
import home1 from "../../assets/images/New folder/home1.jpg";
import home2 from "../../assets/images/New folder/home2.jpg";
import home3 from "../../assets/images/New folder/home3.jpg";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import clogo1 from "../../assets/images/Group.png";
import clogo2 from "../../assets/images/Group 2.png";
import clogo3 from "../../assets/images/Group-1.png";
import clogo4 from "../../assets/images/Group 9235.png";
import clogo5 from "../../assets/images/Group 3.png";
import "./HomeBody.css";
import HServices from "./HServices";
import HExplore from "./HExplore";
import TravelPoint from "./TravelPoint";
import Keyfeatures from "./Keyfeatures";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

const HomeBody = () => {
  return (
    <div className="">
      {/* <div className="circle1 min-h-[700px] min-w-[700px] absolute -top-52 -left-72 rounded-full opacity-50"></div> */}

      <div className="px-28 py-28 flex justify-center">
        {/* header   start */}
        <header className="flex gap-10">
          <div className="max-w-[350px] mt-16">
            <button className="text-primary  font-semibold flex items-center rounded-full  gap-4  ">
              Explore the world! <GiSuitcase className="w-10 h-10" />
            </button>
            <h1>
              Travel <span className="text-primary">top destination</span> of
              the world
            </h1>

            <p className="my-10 ">
              We always make our customer happy by providing as many choices as
              possible
            </p>

            <div className="flex gap-3">
              <Link to="">
                <button className="bg-secondary px-6 py-4 rounded-full text-base">
                  Get Started
                </button>
              </Link>
              <Link to="">
                <button className="border border-inherit px-6 py-4 rounded-full flex items-center gap-2 justify-center">
                  <FaPlayCircle className="text-secondary w-6 h-6" /> Watch Demo
                </button>
              </Link>
            </div>
          </div>

          <div className=" flex flex-col  items-center ">
            <img src={layer} alt="" className="" />
            <div className="relative -mt-52 grid grid-cols-2 gap-5 ">
              <div className="flex flex-col gap-5">
                <div className="h-[300px] w-[272px] rounded-[32px] overflow-hidden">
                  <img src={home1} alt="" className="h-auto w-full " />
                </div>
                <div className="h-[300px] w-[272px] rounded-[32px] overflow-hidden">
                  <img src={home3} alt="" className="h-auto w-full" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-[400px] w-[272px] rounded-[32px]  overflow-hidden">
                  <img src={home2} alt="" className="h-auto w-full" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header   end */}
      </div>

      {/* company logos start========== */}
      <section className="flex flex-wrap items-center lg:justify-between justify-center px-28 gap-10 py-20 ">
        <img src={clogo1} alt="" />
        <img src={clogo2} alt="" />
        <img src={clogo3} alt="" />
        <img src={clogo4} alt="" />
        <img src={clogo5} alt="" />
      </section>
      {/* company logos end========= */}

      {/* service start ======== */}
      <HServices />
      <HExplore/>
      <TravelPoint/>
      <Keyfeatures/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
};

export default HomeBody;
