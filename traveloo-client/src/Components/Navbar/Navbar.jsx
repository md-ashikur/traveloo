import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-none");


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setNavbarBackground("bg-none");
      } else {
        setNavbarBackground("bg-[#fff] backdrop-blur-sm drop-shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`${navbarBackground} fixed  top-0 w-full px-10 lg:px-20  py-5 z-50`}>
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 flex items-center justify-between">
        <div className="col-span-1 flex items-center  flex-shrink-0 gap-3 ">
        <SiYourtraveldottv className='w-10 h-10 text-secondary'/>
          <span className="font-semibold text-3xl tracking-tight">Traveloo</span>
        </div>

        {/* desktop------------- */}
        <div className="hidden col-span-2 md:flex md:items-center justify-between md:w-auto ">
          <div className="text-sm flex gap-5 ">
            <NavLink
             
              to="/"
             
              className="block mt-4 md:inline-block md:mt-0   mr-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
             
              className="block mt-4 md:inline-block md:mt-0   mr-4"
            >
             About
            </NavLink>
            <NavLink
              to="/discover"
             
              className="block mt-4 md:inline-block md:mt-0   mr-4"
            >
              Discover
            </NavLink>
            <NavLink
              to="/special-deal"
             
              className="block mt-4 md:inline-block md:mt-0  mr-4"
            >
              Special Deal
            </NavLink>
            <NavLink
              to="/contact"
             
              className="block mt-4 md:inline-block md:mt-0  "
            >
              Contact
            </NavLink>
          </div>

          <div className="ml-4 md:ml-0  ">
            <NavLink
              to="/login"
              className="inline-block text-sm px-4 py-2  mt-4 md:mt-0"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="inline-block text-sm px-7 py-4 leading-none border rounded-full text-white border-white hover:text-white hover:border-transparent hover:text-gray-900 bg-secondary ml-2 mt-4 md:mt-0"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        {/* Mobile menu */}
        <NavLink
         
          to="/"
         
          className="block   mb-2"
        >
          Home
        </NavLink>
        <NavLink
          to="/discover"
         
          className="block   mb-2"
        >
          Discover
        </NavLink>
        <NavLink
          to="/special-deal"
         
          className="block   mb-2"
        >
          Special Deal
        </NavLink>
        <NavLink
          to="/contact"
         
          className="block   mb-2"
        >
          Contact
        </NavLink>
        <div>
          <NavLink
            to="/login"
            className="block text-white border rounded border-white hover:border-transparent hover:text-gray-900 hover:bg-white px-3 py-1 mt-4"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="block text-white border rounded border-white hover:border-transparent hover:text-gray-900 hover:bg-white px-3 py-1 mt-2"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
