
// import React, { useEffect, useState } from "react";
// import logo from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";

// const Homescreen = () => {
//   const navigate = useNavigate();
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     // Scroll to top
//     window.scrollTo(0, 0);

//     // Handle resize
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const Token = localStorage.getItem("Token");
//     const IsMPINSet = localStorage.getItem("IsMPINSet");

//     if (Token && IsMPINSet) {
//       navigate("/MPinScreen");
//     }
//   }, []);

//   if (!isMobileView) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-gray-100">
//         <h1 className="text-xl text-center text-red-600 px-6">
//           Please open this app on a mobile device or in mobile view.
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="h-[100vh] flex flex-col items-center justify-between bg-white">
//       <div className="w-full flex-1 flex items-center justify-center bg-[#2C2DCB] rounded-b-[40px]">
//         <img src={logo} alt="Dhanu Pay Logo" className="w-50 h-50 object-contain" />
//       </div>

//       <div className="w-full px-6 mt-10 mb-6">
//         <div className="flex justify-between space-x-4 mb-2 poppins-semibold">
//           <button onClick={() => navigate("/login")} className="flex-1 bg-[#2C2DCB] text-white py-2 rounded-full font-semibold">
//             Sign In
//           </button>
//           <button onClick={() => navigate("/signup")} className="flex-1 bg-[#2C2DCB] text-white py-2 rounded-full font-semibold">
//             Sign Up
//           </button>
//         </div>
//         <p className="text-center text-xs text-gray-500">*terms and conditions apply</p>
//       </div>
//     </div>
//   );
// };

// export default Homescreen;


import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import slide1 from "../assets/getStartedSlider/getStarted1.svg";
import slide2 from "../assets/getStartedSlider/getStarted2.svg";
import slide3 from "../assets/getStartedSlider/getStarted1.svg";

const slides = [
  {
    id: 1,
    text: "Welcome to Dhanu Pay - Safe & Secure Payments",
    image: slide1,
  },
  {
    id: 2,
    text: "Send & Receive Money Instantly",
    image: slide2,
  },
  {
    id: 3,
    text: "Set your M–PIN to get started quickly!",
    image: slide3,
  },
];

const Homescreen = () => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    const IsMPINSet = localStorage.getItem("IsMPINSet");
    if (Token && IsMPINSet) {
      navigate("/MPinScreen");
    }
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Preload images for smoother transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  if (!isMobileView) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-xl text-center text-red-600 px-6">
          Please open this app on a mobile device or in mobile view.
        </h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-between bg-white overflow-hidden">
      {/* Indigo section with slider */}
<div className="w-full flex-1 relative bg-[#2C2DCB] rounded-b-[40px] overflow-hidden">
  <div
    ref={slideRef}
    className="flex h-full transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {slides.map((slide) => (
      <div
        key={slide.id}
        className="w-full h-full flex-shrink-0 relative"
      >
        <img
          src={slide.image}
          alt="Slide"
          loading="eager"
          className="absolute w-full h-full object-cover top-0 left-0"
        />
      </div>
    ))}
  </div>

  {/* Dots */}
  <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-10">
    {slides.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          currentSlide === index ? "bg-white" : "bg-white/40"
        }`}
      ></div>
    ))}
  </div>
</div>

      {/* Buttons section */}
      <div className="w-full px-6 mt-10 mb-6">
        <div className="flex justify-between space-x-4 mb-2 font-semibold">
          <button
            onClick={() => navigate("/login")}
            className="flex-1 bg-[#2C2DCB] text-white py-2 rounded-full"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="flex-1 bg-[#2C2DCB] text-white py-2 rounded-full"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center text-xs text-gray-500">
          *terms and conditions apply
        </p>
      </div>
    </div>
  );
};

export default Homescreen;
