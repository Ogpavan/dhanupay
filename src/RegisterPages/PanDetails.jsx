import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate, useLocation } from "react-router-dom";
import pan from "../assets/PAN.png";
import { FiUploadCloud } from "react-icons/fi";
import Swal from "sweetalert2";

const PanDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the updatedData passed from the AadhaarDetails page
  const { combinedData } = location.state || {};

  const [panNumber, setPanNumber] = useState("");
  const [panFront, setPanFront] = useState(null);

  const handlePanChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (!/^[A-Z0-9]*$/.test(value)) return; // Prevent invalid characters
    setPanNumber(value);
  };

  const handlePanFrontUpload = (e) => {
    const file = e.target.files[0];
    setPanFront(file);
  };

  const handleNext = () => {
    if (!panNumber || !panFront) {
      Swal.fire({
        title: "Incomplete Details",
        text: "Please fill in the PAN number and upload the PAN front image.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Append PAN details to combined data
    const updatedData = {
      ...combinedData,
      panDetails: {
        panNumber,
        panFront,
      },
    };

    // Optionally update localStorage as well
    localStorage.setItem("registrationData", JSON.stringify(updatedData));

    // Navigate to the next route with updated data
    navigate("/video-kyc", { state: { combinedData: updatedData } });
  };

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
            placeholder="PAN No. (AAAAA9999A)"
            className="input-field w-full"
            maxLength={10}
            inputMode="text"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            value={panNumber}
            onChange={handlePanChange}
          />

          {/* PAN Front Upload */}
          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload PAN Front Side
            </label>
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <img
                src={pan}
                alt="Upload PAN Front"
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
                onChange={handlePanFrontUpload}
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

export default PanDetails;
