import React, { useEffect, useState } from "react";
import AlertPopup from "../utils/AlertPopup";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [Otp, setOtp] = useState(""); // State for OTP
  const [DistrbutorID, setDistrbutorID] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [ConfirmNewpassword, setConfirmNewpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Generate OTP when the "Send OTP" button is clicked
  const handleSendOtp = () => {
    // Generate OTP only when the button is clicked
    // const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    // setOtp(generatedOtp); // Set the generated OTP to state
    // setShowAlert(true); // Show the alert when OTP is generated
  };

  const btnclick = () => {
    // alert(`OTP: ${Otp}\nDistributor ID: ${DistrbutorID}\nNew Password: ${Newpassword}`);
    Swal.fire({
      title: "Success",
      text: "Sucessfully Reset ",
      icon: "success"
    });

    navigate("/"); // Navigate to home page or another route after clicking change password
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="flex flex-col min-h-screen bg-indigo-700 font-poppins">
      {/* Top bar */}
      <div className="px-4 pt-10 pb-4 text-white">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => navigate(-1)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Change Password</span>
        </div>
      </div>

      {/* White Section */}
      <div className="flex-1 bg-white rounded-t-3xl px-6 py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl text-indigo-700 font-semibold">Forget Password</h1>
          <p className="text-sm text-gray-500 mt-1">Create Your New Password</p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          {/* Distributor ID with Send OTP inside input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Distributor ID"
              value={DistrbutorID}
              onChange={(e) => setDistrbutorID(e.target.value)}
              className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={handleSendOtp} // Only triggers OTP generation when clicked
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-600 text-sm font-medium hover:text-indigo-800"
            >
              Send OTP
            </button>
          </div>

          {/* OTP */}
          <input
            type="text"
            placeholder="OTP"
            // value={Otp}
            // onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* New Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={Newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.058 10.058 0 012.264-3.592M9.88 9.88a3 3 0 104.24 4.24"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              value={ConfirmNewpassword}
              onChange={(e) => setConfirmNewpassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showConfirmPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.058 10.058 0 012.264-3.592M9.88 9.88a3 3 0 104.24 4.24"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={btnclick}
            className="w-full py-3 bg-indigo-700 text-white rounded-xl text-lg font-medium hover:bg-indigo-800 transition"
          >
            Change Password
          </button>
        </div>
      </div>

      {/* AlertPopup */}
      {showAlert && (
        <AlertPopup
          title="OTP Sent!"
          text="OTP has been sent successfully to your registered mobile number."
          icon="success"
        />
      )}
    </div>
  );
};

export default ForgetPassword;
