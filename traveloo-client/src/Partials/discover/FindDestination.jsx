import React from "react";
import { useForm } from "react-hook-form";
import SearchResult from "./SearchResult";

const FindDestination = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="">
      <div className="bg-[#f5f5f5] p-20 ">
       <div className="text-center">
       <h3>Find Your Dream Destinations</h3>
        <p>These popular destinations have a lot to offer</p>
       </div>

        {/* search bar start------------------ */}
        <div className="w-[85vw]  bg-base h-20 mx-auto p-3 flex items-center rounded-lg my-8 overflow-hidden">
          {/* form-------------- */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full gap-3">
            <div className="grid grid-cols-8">
              {/* ----------Location-------------- */}
              <div className="col-span-3 px-2">
                <h6 className="t">Location</h6>
                <input
                  placeholder="Where are you going?"
                  className="outline-none  mt-2 w-full "
                  {...register("location")}
                  
                />
                
              </div>

              {/* ---------Check in - Check out--------- */}
              <div className="col-span-2 border-l-2 px-3">
                <h6 className="">Check in - Check out</h6>
                <input
                  className="outline-none  my-2 "
                  type="date"
                  {...register("email", {
                    required: "Your Email Address is required",
                  })}
                />
              </div>

              {/* ---------Guest--------- */}
              <div className="col-span-2 relative border-l-2 px-3">
                <h6 className="">Guest</h6>
                <p className="text-[16px] mt-2 font-semibold absolute">2 adults - 1 childeren - 1 room</p>
                <input
                  className="outline-none "
                  type="text"
                  {...register("guest")}
                 
                />

              </div>

              <input
                type="submit"
                value="Search"
                className="h-[60px] hover:scale-[0.95]  rounded transition duration-150 ease-in-out bg-secondary   text-base"
              />
            </div>
          </form>
        </div>

        {/* search bar end------------------ */}
      </div>

      <SearchResult/>
    </section>
  );
};

export default FindDestination;
