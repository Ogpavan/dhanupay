import React, { useEffect } from "react";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";
import pan from "../assets/PAN.png";
 import { FiUploadCloud } from "react-icons/fi";


const PanDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={4} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          PAN Details
        </h1>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Aadhaar No. (12 Digits)"
            className="input-field w-full"
          />

 {/* Aadhaar Front Upload */}
<div>
  <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
    Upload PAN Front Side
  </label>
  <div className="relative w-full h-40 rounded-xl overflow-hidden">
    <img
      src={pan}
      alt="Upload Aadhaar Front"
      className="absolute w-full h-full object-contain p-4"
    />
    {/* Dark overlay */}
    <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
    {/* Upload icon */}
    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
    <FiUploadCloud className="text-white text-4xl" />

    </div>
    <input
      type="file"
      accept="image/*"
      className="absolute w-full h-full opacity-0 cursor-pointer"
    />
  </div>
</div>

 

      
        </form>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-200 text-gray-800 text-lg py-2 rounded-xl font-semibold"
          >
            ← Back
          </button>
          <button
            onClick={() => navigate("/video-kyc")}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default  PanDetails;
