import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid grid-cols-5 gap-5 bg-base px-28 py-20">
      <div className="col-span-2 p-4">
        <h3 className="flex gap-3 items-center">
          {" "}
          <SiYourtraveldottv className="w-10 h-10 text-secondary" />
          Traveloo
        </h3>
        <p className="my-5 w-[300px] text-justify">
          Embark on endless adventures with Traveloo&apos;s curated journeys,
          Explore the world&apos;s wonders through our tailored experiences,
          make memories that last a lifetime.
        </p>

        <div className="flex gap-5 pt-7">
          <a
            href="/"
            className="bg-secondary text-base rounded-full p-2 w-8 h-8 hover:scale-90"
          >
            <FaFacebookF />
          </a>
          <a
            href="/"
            className="bg-secondary text-base rounded-full p-2 w-8 h-8 hover:scale-90"
          >
            <FaXTwitter />
          </a>
          <a
            href="/"
            className="bg-secondary text-base rounded-full p-2 w-8 h-8 hover:scale-90"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="/"
            className="bg-secondary text-base rounded-full p-2 w-8 h-8 hover:scale-90"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="p-4">
        <ul>
          <h3>Company</h3>
          <li className="mt-5"><Link to="" className="hover:text-secondary hover:pl-3 ">About</Link></li>
          <li className="mt-5"><Link to="" className="hover:text-secondary hover:pl-3 ">Career</Link></li>
          <li className="mt-5"><Link to="" className="hover:text-secondary hover:pl-3 ">Mobile</Link></li>
        </ul>
      </div>

      <div className="p-4">
        <ul>
          <h3>Contact</h3>
          <li className="mt-5"><Link to="" className="hover:text-secondary hover:pl-3 ">Why Travloo?</Link></li>
          <li className="mt-5"><Link to="" className="hover:text-secondary hover:pl-3 ">Partner with us</Link></li>
          <li className="mt-5"><Link to="" className="hover:text-secondary hover:pl-3 ">FAQ’s</Link></li>
          <li className="mt-5"><Link to="" className="hover:text-secondary hover:pl-3 ">Blog</Link></li>
        </ul>
      </div>

      <div className="p-4">
        <ul>
          <h3>Meet Us</h3>
          <li className="mt-5">+00 92 1234 56789</li>
          <li className="mt-5">info@travloo.com</li>
          <li className="mt-5">205. R Street, New York</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
