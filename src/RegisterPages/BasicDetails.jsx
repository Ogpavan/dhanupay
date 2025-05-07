import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";
import OtpModal from "../components/OtpModal";

const BasicDetails = () => {
  const navigate = useNavigate();

  const [showOTPModal, setShowOTPModal] = useState(false);
  const [verifyingField, setVerifyingField] = useState(null);
  const [otp, setOtp] = useState("");

  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    alternateMobile: "",
    email: "",
  });

  // State to track verification status
  const [verifiedFields, setVerifiedFields] = useState({
    mobile: false,
    alternateMobile: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVerifyClick = (field) => {
    setVerifyingField(field);
    setShowOTPModal(true);
  };

  const handleOTPSubmit = () => {
    console.log(`OTP entered for ${verifyingField}:`, otp);

    if (verifyingField === "Mobile Number") {
      setVerifiedFields((prev) => ({ ...prev, mobile: true }));
    } else if (verifyingField === "Alternate Mobile Number") {
      setVerifiedFields((prev) => ({ ...prev, alternateMobile: true }));
    }

    setShowOTPModal(false);
    setOtp("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Log form data to console
    console.log("Form Data:", formData);

    // Pass form data to next page/state
    navigate("/residential-details", { state: { basicDetails: formData } });                                            
  };

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center" onClick={() => navigate(-1)}>
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6 relative">
        <Stepper currentStep={0} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Basic Details
        </h1>

        <form className="space-y-3">
          {/* First & Last Name */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="input-field w-1/2"
              maxLength="10"
              pattern="[A-Za-z]{1,10}"
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                const key = e.key;
                if (!/^[a-zA-Z]$/.test(key) && key !== "Backspace" && key !== "Tab") {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-field w-1/2"
              maxLength="10"
              pattern="[A-Za-z]{1,10}"
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                const key = e.key;
                if (!/^[a-zA-Z]$/.test(key) && key !== "Backspace" && key !== "Tab") {
                  e.preventDefault();
                }
              }}
            />
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-field w-full pr-24"
              pattern="[0-9]{10}"
              maxLength="10"
              inputMode="numeric"
              required
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              disabled={verifiedFields.mobile}
              onKeyDown={(e) => {
                const key = e.key;
                if (!/^[0-9]$/.test(key) && key !== "Backspace" && key !== "Tab") {
                  e.preventDefault();
                }
              }}
            />
            <button
              type="button"
              onClick={() => handleVerifyClick("Mobile Number")}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold ${verifiedFields.mobile ? "text-green-400" : "text-[#2C2DCB]"}`}
              disabled={verifiedFields.mobile}
            >
              {verifiedFields.mobile ? "Verified" : "Verify"}
            </button>
          </div>

          {/* Alternate Mobile Number */}
          <div className="relative">
            <input
              type="tel"
              placeholder="Alternate Mobile Number"
              className="input-field w-full pr-24"
              pattern="[0-9]{10}"
              maxLength="10"
              inputMode="numeric"
              name="alternateMobile"
              value={formData.alternateMobile}
              onChange={handleInputChange}
              disabled={!verifiedFields.mobile || verifiedFields.alternateMobile}
              onKeyDown={(e) => {
                const key = e.key;
                if (!/^[0-9]$/.test(key) && key !== "Backspace" && key !== "Tab") {
                  e.preventDefault();
                }
              }}
            />
            <button
              type="button"
              onClick={() => handleVerifyClick("Alternate Mobile Number")}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold ${verifiedFields.alternateMobile ? "text-gray-400" : "text-[#2C2DCB]"}`}
              disabled={!verifiedFields.mobile || verifiedFields.alternateMobile}
            >
              {verifiedFields.alternateMobile ? "Verified" : "Verify"}
            </button>
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            className="input-field w-full"
            title="Enter a valid email address."
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!verifiedFields.alternateMobile}
          />
        </form>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Next →
        </button>

        {/* OTP Modal */}
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
