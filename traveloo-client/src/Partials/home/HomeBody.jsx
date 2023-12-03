import React from "react";
import layer from "../../assets/images/layer.png";
import home1 from "../../assets/images/New folder/home1.jpg";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import "./HomeBody.css";

const HomeBody = () => {
  return (
    <div >
    
    {/* <div className="circle1 min-h-[700px] min-w-[700px] absolute -top-52 -left-72 rounded-full opacity-50"></div> */}
      <div className="px-28 pt-5  relative">
   
        <header className="flex  items-center gap-8">
          <div className="max-w-[350px] relative top-40">
            <button className="text-primary my-5 font-semibold flex items-center rounded-full  gap-4  ">
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

          <div className="relative flex justify-center">
            <img src={layer} alt="" />
            <div className="absolute top-20 grid grid-cols-2 gap-5 h-52">
              <div className="flex flex-col gap-5">
                <div className="h-[300px] w-[272px] rounded-[32px] overflow-hidden">
                  <img src={home1} alt="" className="h-auto w-full " />
                </div>
                <div className="h-[300px] w-[272px] rounded-[32px] overflow-hidden">
                  <img src={home1} alt="" className="h-auto w-full" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-[400px] w-[272px] rounded-[32px]  overflow-hidden">
                  <img src={home1} alt="" className="h-auto w-full" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomeBody;
