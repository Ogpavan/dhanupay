import React, { useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";
import OtpModal from "../components/OtpModal"; // 👈 import it

const BasicDetails = () => {
  const navigate = useNavigate();
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [verifyingField, setVerifyingField] = useState(null);
  const [otp, setOtp] = useState("");

  const handleVerifyClick = (field) => {
    setVerifyingField(field);
    setShowOTPModal(true);
  };

  const handleOTPSubmit = () => {
    console.log(`OTP entered for ${verifyingField}:`, otp);
    setShowOTPModal(false);
    setOtp("");
  };

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center" onClick={() => navigate(-1)}>
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6  shadow-md -mt-6 relative">
        <Stepper currentStep={0} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Basic Details
        </h1>

        <form className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="input-field w-1/2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-field w-1/2"
            />
          </div>

          {/* Mobile Number with Verify */}
          <div className="relative">
            <input
              type="text"
              placeholder="Mobile Number"
              className="input-field w-full pr-24"
            />
            <button
              type="button"
              onClick={() => handleVerifyClick("Mobile Number")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#2C2DCB] font-semibold"
            >
              Verify 
            </button>
          </div>

          {/* Alternate Mobile with Verify */}
          <div className="relative">
            <input
              type="text"
              placeholder="Alternate Mobile Number"
              className="input-field w-full pr-24"
            />
            <button
              type="button"
              onClick={() => handleVerifyClick("Alternate Mobile Number")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#2C2DCB] font-semibold"
            >
              Verify 
            </button>
          </div>

          <input
            type="email"
            placeholder="Email ID"
            className="input-field w-full"
          />
        </form>

        <button
          onClick={() => navigate("/residential-details")}
          className="mt-6 w-full bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Next →
        </button>

        {/* OTP Modal Component */}
        <OtpModal
          isOpen={showOTPModal}
          onClose={() => setShowOTPModal(false)}
          onSubmit={handleOTPSubmit}
          otp={otp}
          setOtp={setOtp}
          verifyingField={verifyingField}
        />
      </div>
    </div>
  );
};

export default BasicDetails;
