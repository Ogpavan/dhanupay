import React from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import { FiUploadCloud } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

const VideoKYC = () => {
  const navigate = useNavigate();

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={5} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Video KYC
        </h1>

        <form className="space-y-6">
            <div className="flex justify-evenly space-x-4">
          {/* Profile Photo Upload (Circle) */}
          <div className="flex flex-col items-center">
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload Profile Photo
            </label>
            <div className="relative w-32 aspect-square bg-gray-100 rounded-full overflow-hidden shadow-md">
              <div className="absolute w-full h-full bg-black bg-opacity-40 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
              <FaCamera />
              </div>
              <input
                type="file"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Shop Photo Upload (Circle) */}
          <div className="flex flex-col items-center">
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload Shop Photo
            </label>
            <div className="relative w-32 aspect-square bg-gray-100 rounded-full overflow-hidden shadow-md">
              <div className="absolute w-full h-full bg-black bg-opacity-40 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
                <FaCamera />
              </div>
              <input
                type="file"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
          </div>
          {/* Video Upload */}
          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload KYC Video (Max 30 seconds)
            </label>
            <div className="relative w-full h-40 bg-gray-100 rounded-xl overflow-hidden">
              <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
              <IoVideocam />
              </div>
              <input
                type="file"
                accept="video/*"
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
            onClick={() => navigate("/KYCSucessScreen")}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
            Submit →
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoKYC;
