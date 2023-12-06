import React from "react";
import { Link } from "react-router-dom";

const SpecialDealBody = () => {
  return (
    <div className="my-28 px-20">
      <div className="flex flex-col justify-center items-center">
        <h1>Affordable Travel Packages</h1>
        <p className="max-w-[800px] mt-6 text-center">
          Explore our diverse range of travel packages crafted to fulfill every
          wanderlust desire. From exotic getaways to cultural immersions, find
          your perfect adventure with us.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 my-20">
        {/* 1st ------------- */}
        <div className="text-white bg-gradient-to-b from-cyan-500 to-secondary  text-center py-20 px-10 rounded-3xl">
          <h3>Beach Paradise Retreat</h3>
          <h1 className="mt-5">
            $150 <span className="text-lg">/ Day</span>
          </h1>
          <ul className=" my-5">
            <li className="mt-3">Daily Breakfast Buffet</li>
            <li className="mt-3">Sunset Cruise</li>
            <li className="mt-3">Beachfront Accommodation</li>
            <li className="mt-3">Airport Transfers</li>
            <li className="mt-3">Snorkeling Excursion</li>
            <li className="mt-3">Water Sports Equipment Rental</li>
            <li className="mt-3">Access to Resort Amenities</li>
          </ul>
          <Link to=""><button className="bg-white hover:scale-110 transition duration-150 ease-in-out text-secondary font-bold px-5 py-2 w-full rounded-2xl">VIEW ALL</button></Link>
        </div>

       
        {/* 2nd------------- */}
        <div className="bg-gradient-to-b from-cyan-500 to-emerald-500 text-white text-center py-20 px-10 rounded-3xl">
          <h3>Mountain Adventure Getaway</h3>
          <h1 className="mt-5">
            $120 <span className="text-lg">/ Day</span>
          </h1>
          <ul className=" my-5">
            <li className="mt-3">Chalet Accommodation</li>
            <li className="mt-3">Guided Hiking Tours</li>
            <li className="mt-3">Zip-lining Experience</li>
            <li className="mt-3">Campfire Nights</li>
            <li className="mt-3">Scenic Cable Car Ride</li>
            <li className="mt-3">Breakfast and Dinner at Lodge</li>
            <li className="mt-3">Transportation to Trailheads</li>
          </ul>
          <Link to=""><button className="bg-white hover:scale-110 transition duration-150 ease-in-out text-emerald-500 font-bold px-5 py-2 w-full rounded-2xl">VIEW ALL</button></Link>
        </div>

        {/* 3rd------------- */}
        <div className=" bg-gradient-to-b from-primary to-pink-600 text-white text-center py-20 px-10 rounded-3xl">
          <h3>Cultural Immersion Experience</h3>
          <h1 className="mt-5">
            $99 <span className="text-lg">/ Day</span>
          </h1>
          <ul className=" my-5">
            <li className="mt-3">Boutique Hotel Stay</li>
            <li className="mt-3">Local Food Tasting Tours</li>
            <li className="mt-3">Historical Walking Tours</li>
            <li className="mt-3">Entry to Museums and Galleries</li>
            <li className="mt-3">Traditional Craft Workshops</li>
            <li className="mt-3">Authentic Cultural Performances</li>
            <li className="mt-3">Airport Pick-Up and Drop-Off</li>
          </ul>
          <Link to=""><button className="bg-white hover:scale-110 transition duration-150 ease-in-out text-pink-600 font-bold px-5 py-2 w-full rounded-2xl">VIEW ALL</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialDealBody;
