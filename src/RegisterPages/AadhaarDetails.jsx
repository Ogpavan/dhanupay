import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate, useLocation } from "react-router-dom";
import aadhaar_front from "../assets/aadhaar_front.png";
import aadhaar_back from "../assets/aadhaar_back.png";
import { FiUploadCloud } from "react-icons/fi";
import Swal from "sweetalert2"; // Import SweetAlert

const AadhaarDetails = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the previous route's state data

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get combinedData passed from the previous route (BusinessDetails)
  const { combinedData } = location.state || {};

  const [aadhaarNo, setAadhaarNo] = useState(""); // Store Aadhaar Number
  const [aadhaarFront, setAadhaarFront] = useState(null); // Store Front Image
  const [aadhaarBack, setAadhaarBack] = useState(null); // Store Back Image

  // Handle Aadhaar Number input change
  const handleAadhaarChange = (e) => {
    setAadhaarNo(e.target.value);
  };

  // Handle file uploads for Aadhaar Front and Back
  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === "front") {
      setAadhaarFront(file);
    } else {
      setAadhaarBack(file);
    }
  };

  // Handle the "Next" button click
  const handleNext = () => {
    if (!aadhaarNo || !aadhaarFront || !aadhaarBack) {
      Swal.fire({
        title: "Incomplete Details",
        text: "Please fill all the required details, including Aadhaar number and both front and back images.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      // Add Aadhaar details to the combinedData
      const updatedData = {
        ...combinedData,
        aadhaarDetails: {
          aadhaarNo,
          aadhaarFront,
          aadhaarBack,
        },
      };

      // Log the updated data to the console for debugging
      console.log("Updated Combined Data: ", updatedData);

      // Store the updated combined data in localStorage
      localStorage.setItem("registrationData", JSON.stringify(updatedData));

      // Navigate to the next page (Pan Details), passing the updated data as state
      navigate("/pan-details", { state: { combinedData: updatedData } });
    }
  };

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={3} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Aadhaar Details
        </h1>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Aadhaar No. (12 Digits)"
            className="input-field w-full"
            maxLength={12} // Limit input to 12 characters
            inputMode="numeric" // Allow numeric input
            value={aadhaarNo}
            onChange={handleAadhaarChange}
            onKeyDown={(e) => {
              // Allow only numbers and control keys (Backspace, Tab)
              if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                e.preventDefault();
              }
            }}
          />

          {/* Aadhaar Front Upload */}
          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload Aadhaar Front Side
            </label>
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <img
                src={aadhaar_front}
                alt="Upload Aadhaar Front"
                className="absolute w-full h-full object-contain p-4"
              />
              <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                <FiUploadCloud className="text-white text-4xl" />
              </div>
              <input
                type="file"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileUpload(e, "front")}
              />
            </div>
          </div>

          {/* Aadhaar Back Upload */}
          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload Aadhaar Back Side
            </label>
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <img
                src={aadhaar_back}
                alt="Upload Aadhaar Back"
                className="absolute w-full h-full object-contain p-4"
              />
              <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                <FiUploadCloud className="text-white text-4xl" />
              </div>
              <input
                type="file"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileUpload(e, "back")}
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
            onClick={handleNext}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
            Next → 
          </button>
        </div>
      </div>
    </div>
  );
};

export default AadhaarDetails;
