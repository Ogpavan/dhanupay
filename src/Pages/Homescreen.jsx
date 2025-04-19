import React from "react";
import logo from "../assets/logo.png"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";

const Homescreen = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex flex-col items-center justify-between bg-white sm:hidden">
      {/* Top container with logo */}
      <div className="w-full flex-1 flex items-center justify-center bg-[#2C2DCB] rounded-b-[40px]">
        <img
          src={logo}
          alt="Dhanu Pay Logo"
          className="w-50 h-50 object-contain"
        />
      </div>

      {/* Buttons */}
      <div className="w-full px-6 mt-10 mb-6">
        <div className="flex justify-between space-x-4 mb-2 poppins-semibold">
          <button onClick={() => navigate("/login")}  className="flex-1 bg-[#2C2DCB] text-white py-2 rounded-full font-semibold">
            Sign In
          </button>
          <button onClick={() => navigate("/signup")}  className="flex-1 bg-[#2C2DCB] text-white py-2 rounded-full font-semibold">
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
