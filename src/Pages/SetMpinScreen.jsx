import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SetMpinScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.Message || "OTP send to registrered mobile number";
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [mpin, setMpin] = useState(["", "", "", ""]);
  const [confirmMpin, setConfirmMpin] = useState(["", "", "", ""]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showMpin, setShowMpin] = useState(false); // Toggle MPIN visibility
  const [showConfirmMpin, setShowConfirmMpin] = useState(false); // Toggle Confirm MPIN visibility
  const [timer, setTimer] = useState(30); // Timer state for resend OTP
  const [isResendDisabled, setIsResendDisabled] = useState(false); // Disable Resend OTP button
  const [intervalId, setIntervalId] = useState(null); // For clearing interval later



  useEffect(() => {
      // Start the countdown when the component mounts
      setIsResendDisabled(true);
      setTimer(30); // Set initial timer value to 30
      const countdownInterval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(countdownInterval); // Stop the countdown when timer reaches 0
            setIsResendDisabled(false); // Enable the "Resend OTP" button
          }
          return prevTime - 1; // Decrement the timer every second
        });
      }, 1000);
      setIntervalId(countdownInterval); // Store the interval ID for cleanup
    
      // Cleanup interval when the component is unmounted
      return () => clearInterval(countdownInterval);
    }, []); // Empty dependency array to run only once on mount

  const handleChange = (e, index, setter, values, namePrefix) => {
    const value = e.target.value;
    if (value.length > 1) return;

    const newVal = [...values];
    newVal[index] = value;
    setter(newVal);

    if (value !== "") {
      const nextInput = document.getElementById(`${namePrefix}-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index, namePrefix) => {
    if (e.key === "Backspace" && e.target.value === "") {
      const prevInput = document.getElementById(`${namePrefix}-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const renderInputs = (values, setter, namePrefix, showInput) =>
    values.map((digit, index) => (
      <input
        id={`${namePrefix}-${index}`}
        key={`${namePrefix}-${index}`}
        type={showInput ? "text" : "password"} // Toggle input type for show/hide
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength="1"
        className="w-12 h-12 text-center text-2xl border-2 border-indigo-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
        value={digit}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d?$/.test(value)) { // allow only single digit or empty
            handleChange(e, index, setter, values, namePrefix);
          }
        }}
        onKeyDown={(e) => handleKeyDown(e, index, namePrefix)}
      />
    ));



  const isFormValid =
    otp.every((val) => val !== "") &&
    mpin.every((val) => val !== "") &&
    confirmMpin.every((val) => val !== "");

  // const handleSubmit = () => {

  //   // alert("OTP: " + otp.join("") + "\nM-PIN: " + mpin.join(""));
  //   onClick=navigate("/login") ;
  // };
  const handleSubmit = async () => {
    setBtnLoading(true);
    const mpinValue = mpin.join("");
    const confirmMpinValue = confirmMpin.join("");
    const otpValue = otp.join("");

    if (mpinValue !== confirmMpinValue) {
      await Swal.fire({
        title: "M–PIN Mismatch",
        text: "The entered M–PIN and Confirm M–PIN do not match.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setBtnLoading(false);
      return;

    }

    try {
      const token = localStorage.getItem("Token");
      const UserId = localStorage.getItem("UserId");
      const LoginId = localStorage.getItem("loginid");
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      // Step 1: Validate OTP
      const validateOtpResponse = await axios.post(
        `${baseUrl}/users/OTPValidator`,
        {
          UserId,
          LoginId,
          OTP: otpValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!validateOtpResponse.data.success) {
        await Swal.fire({
          title: "OTP Verification Failed",
          text: validateOtpResponse.data.message || "Invalid OTP",
          icon: "error",
          confirmButtonText: "Retry",
        });
        setBtnLoading(false);
        return;
      }

      // Step 2: Set M–PIN
      console.log("")
      const setMpinResponse = await axios.post(
        `${baseUrl}/users/set-mpin`,
        {
          UserId : UserId,
          LoginId: LoginId,
          MPin: mpinValue,
          UserType:"Retailer"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (setMpinResponse.data.success) {
        await Swal.fire({
          title: "Success",
          text: "M–PIN set successfully.",
          icon: "success",
          confirmButtonText: "Login",
        });
        navigate("/login");
      } else {
        await Swal.fire({
          title: "Failed",
          text: setMpinResponse.data.message || "Failed to set M–PIN.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      await Swal.fire({
        title: "Error",
        text:
          error?.response?.data?.message ||
          error?.response?.data?.Message ||
          "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    finally {
      setBtnLoading(false); // Reset button state
    }
  };




  // const ResendOTP = async () => {
  //   try {

  //     let Token = localStorage.getItem('Token');
  //     let UserId = localStorage.getItem('UserId');
  //     let loginid = localStorage.getItem('loginid');
  //     const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/users/OTP_Resend`;
  //     const response = await axios.post(apiUrl, {
  //       UserId: UserId,
  //       LoginId: loginid,
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${Token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     }


  //     );

  //     const res = response.data;
  //     console.log(res);
  //     if (res.success) {
  //       // Show message in SweetAlert
  //       await Swal.fire({
  //         title: 'OTP RESENDED',
  //         text: res.message,
  //         icon: 'success',
  //         confirmButtonText: 'Continue'
  //       });
  //     } else {
  //       await Swal.fire({
  //         title: 'Login Failed',
  //         text: res.message || res.Message || 'Please check credentials or network.',
  //         icon: 'error',
  //         confirmButtonText: 'OK'
  //       });
  //       // navigate("/login");
  //     }



  //   } catch (error) {
  //     console.error('otp API Error:', error);
  //     Swal.fire({
  //       title: 'Login Failed',
  //       text: error?.response?.data?.Message || 'Please check credentials or network.',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };


  const ResendOTP = async () => {
      if (isResendDisabled) return;
      setIsResendDisabled(true);
      setTimer(30);
      const countdownInterval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(countdownInterval);
            setIsResendDisabled(false);
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(countdownInterval);
      setBtnLoading(true);
      try {
        const Token = localStorage.getItem('Token');
        const UserId = localStorage.getItem('UserId');
        const loginid = localStorage.getItem('loginid');
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/users/OTP_Resend`;
        const response = await axios.post(apiUrl, {
          UserId: UserId,
          LoginId: loginid,
        }, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json'
          }
        });
        if (response.data.success) {
          
          await Swal.fire({
            title: 'OTP RESENDED',
            text: response.data.message,
            icon: 'success',
            confirmButtonText: 'Continue'
          });
        } else {
          await Swal.fire({
            title: 'Failed',
            text: response.data.message || 'Please check credentials or network.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('OTP API Error:', error);
        await Swal.fire({
          title: 'Error',
          text: error?.response?.data?.Message || 'Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } finally {
        setBtnLoading(false);
      }
    };
  return (
    <div className="h-screen  bg-white font-[Poppins]  flex flex-col">
      {/* Blue Header (flat) */}
      <div className="bg-indigo-700 h-[15vh] px-4 pt-6  pb-4 text-white relative z-0">
        <div className="flex items-center space-x-2 text-sm font-medium poppins-medium">
          <span onClick={() => navigate(-1)} className="text-xl">&#8592;</span>
          <span>Set M–PIN</span>
        </div>
      </div>

      {/* White Rounded Container Overlapping */}
      <div className="-mt-6 bg-white rounded-t-3xl px-4 pt-6 pb-10 w-full  z-10 relative">
        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-6 rounded-full shadow-md relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM16 7a4 4 0 00-8 0v4h8V7z"
              />
            </svg>
            {/* Dots */}
            <div className="absolute top-0 left-1 bg-green-400 w-2 h-2 rounded-full"></div>
            <div className="absolute top-2 right-1 bg-red-400 w-3 h-3 rounded-full"></div>
            <div className="absolute bottom-2 right-2 bg-blue-400 w-2 h-2 rounded-full"></div>
            <div className="absolute bottom-3 left-2 bg-yellow-400 w-2 h-2 rounded-full"></div>
          </div>
        </div>

        {/* Text */}
        <p className="text-center text-sm text-gray-600 mb-2 poppins-regular">
          {message}
        </p>


        {/* OTP Input */}
        <div className="mb-4">
          <h3 className="text-center text-lg font-semibold text-gray-700 poppins-semibold mb-2">
            Enter OTP
          </h3>
          <div className="flex justify-center gap-3">
            {renderInputs(otp, setOtp, "otp", true)} {/* OTP is always visible */}
          </div>
        </div>

        {/* Set M–PIN */}
        <div className="mb-4">
          <h3 className="text-center text-lg font-semibold text-gray-700 poppins-semibold mb-2">
            Set M–PIN
          </h3>
          <div className="flex justify-center gap-3">
            {renderInputs(mpin, setMpin, "mpin", showMpin)} {/* MPIN with toggle */}
          </div>
          <button
            onClick={() => setShowMpin(!showMpin)}
            className="text-indigo-600  font-medium text-sm mb-4 mt-2 mx-auto  mr-20 block"
          >
            {showMpin ? "Hide MPIN" : "Show MPIN"}
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-center text-lg font-semibold text-gray-700 poppins-semibold mb-2">
            Confirm M–PIN
          </h3>
          <div className="flex justify-center gap-3">
            {renderInputs(confirmMpin, setConfirmMpin, "confirm", showConfirmMpin)} {/* Confirm MPIN with toggle */}
          </div>
          <button
            onClick={() => setShowConfirmMpin(!showConfirmMpin)}
            className="text-indigo-600  font-medium text-sm mb-4 mt-2 mx-auto  mr-20 block"
          >
            {showConfirmMpin ? "Hide Confirm MPIN" : "Show Confirm MPIN"}
          </button>
        </div>

        <div className="flex justify-center mb-4 ">
          <p                                                            
            onClick={ResendOTP}
            className="text-sm text-indigo-700 font-medium underline cursor-pointer poppins-medium"
          >
            {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
          </p>
        </div>  

        {/* Submit Button */}
        <button
          onClick={handleSubmit}

          disabled={!isFormValid || btnLoading}
          className={`w-full py-3 rounded-xl text-white text-center font-semibold transition poppins-semibold ${isFormValid
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-indigo-400 cursor-not-allowed"
            }`}
        >
          {btnLoading ? 'please wait...' : 'Set M–PIN'}
        </button>
      </div>
    </div>
  );
};

export default SetMpinScreen;
