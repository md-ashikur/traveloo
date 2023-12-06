import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Discover from "./Pages/Discover/Discover";
import Offer from "./Pages/Offer/Offer";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import HExplore from "./Partials/home/HExplore";
import Footer from "./Components/Footer/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/special-deal" element={<Offer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<HExplore />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
