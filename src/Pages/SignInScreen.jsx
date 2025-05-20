import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

const SignInScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [ip, setIp] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate form
  const validateForm = () => {
    let isValid = true;

    // Phone number validation (only 10 digits allowed)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(emailOrPhone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Password validation (minimum 6 characters)
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const btnclick = async () => {
    if (!validateForm()) return; // Prevent API call if form is invalid

    console.log("Email or Phone:", emailOrPhone);
    // console.log("ip:", ip);
    console.log("Password:", password);


    setBtnLoading(true);
    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/users/login`;
      const response = await axios.post(apiUrl, {
        Username: emailOrPhone,
        Password: password,
        // IP: ip,
        IP: "127.25.25.25",
        OS: "Android",
        Browser: "WebView",
        Device: "Android",
        UserTypeId: "16",
      });

      const res = response.data;

      await Swal.fire({
        title: 'OTP Sent',
        text: res.Message,
        icon: 'success',
        confirmButtonText: 'Continue'
      });
      console.log("date come from api after login", res);
      // Store values
      localStorage.setItem('Token', res.Token);
      localStorage.setItem('UserId', res.UserId);
      localStorage.setItem('loginid', res.loginid);
      localStorage.setItem('UserName', res.UserName);
      localStorage.setItem('IsMPINSet', res.IsMPINSet);
      localStorage.setItem('role', res.role);
      localStorage.setItem('UserTypeName', res.UserTypeName);
      localStorage.setItem('eSignStatus', res.eSignStatus);

      if (res.IsMPINSet === "0") {
        navigate('/SetMPinScreen', { state: { Message: res.Message || res.message } });
      } else {
        navigate('/otp', { state: { Message: res.Message || res.message } });
      }
    } catch (error) {
      console.error('Login API Error:', error);

      if (error.response && error.response.status === 409) {
        const res = error.response.data;
        const result = await Swal.fire({
          title: 'User Already Logged In',
          text: 'This user is already logged in on another device. Do you want to continue?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, continue',
          cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
          try {
            const retryUrl = `${import.meta.env.VITE_API_BASE_URL}/users/ConfirmLogin`;
            const retryResponse = await axios.post(
              retryUrl,
              {
                UserId: res.UserId,
                UserType: "Retailer"
              },
              {
                headers: {
                  Authorization: `Bearer ${res.Token}`,
                  'Content-Type': 'application/json'
                }
              }
            );

            const retryData = retryResponse.data;

            await Swal.fire({
              title: 'OTP Sent',
              text: retryData.Message,
              icon: 'success',
              confirmButtonText: 'Continue'
            });
            console.log("date come from api after login in retry", retryData);
            localStorage.setItem('Token', retryData.Token);
            localStorage.setItem('UserId', retryData.UserId);
            localStorage.setItem('loginid', retryData.loginid);
            localStorage.setItem('UserName', retryData.UserName);
            localStorage.setItem('IsMPINSet', retryData.IsMPINSet);
            localStorage.setItem('role', retryData.role);
            if (retryData.eSignStatus !== undefined && retryData.eSignStatus !== null && retryData.eSignStatus.trim() !== "") {
              localStorage.setItem('eSignStatus', retryData.eSignStatus);
            } else {
              Swal.fire({
                title: 'Error',
                text: "eSign is not Avialable please contact admin ",
                icon: 'error',
                confirmButtonText: 'OK'
              })
              localStorage.clear();
              navigate('/login');
            }
            localStorage.setItem('UserTypeName', retryData.UserTypeName);

            if (retryData.IsMPINSet === "0") {
              navigate('/SetMPinScreen', { state: { Message: retryData.Message || retryData.message } });
            } else {
              navigate('/otp', { state: { Message: retryData.Message || retryData.message } });
            }
          } catch (retryError) {
            console.error('ConfirmLogin Retry Failed:', retryError);
            Swal.fire({
              title: 'Retry Failed',
              text: retryError?.response?.data?.Message || retryError?.response?.data?.message || 'Please try again.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        }
      } else {
        Swal.fire({
          title: 'Login Failed',
          text: error?.response?.data?.Message || error?.response?.data?.message || 'Please check credentials or network.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } finally {
      setBtnLoading(false); // Reset button state
    }
  };

  return (
    <div className="flex flex-col h-screen bg-indigo-700 font-poppins">
      {/* Top bar */}
      <div className="px-4 pt-10 pb-4 text-white">
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => navigate(-1)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm poppins-regular">Sign in</span>
        </div>
      </div>

      {/* White section with rounded top */}
      <div className="flex-1 bg-white rounded-t-3xl p-6">
        {/* Header */}
        <div className="text-center mt-4">
          <h1 className="text-2xl text-indigo-700 poppins-bold">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1 poppins-light">Hello there, sign in to continue</p>
        </div>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Registered Phone Number"
          value={emailOrPhone}
          onChange={(e) => {
            const input = e.target.value;
            const sanitized = input.replace(/[^0-9]/g, '').slice(0, 10);
            setEmailOrPhone(sanitized);
          }}
          maxLength={10}
          className="w-full mt-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 poppins-regular"
        />
        {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

        <div className="w-full mt-4 border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-400 bg-white poppins-regular">
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              maxLength={25}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow outline-none border-none text-sm sm:text-base bg-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

        {/* Forgot password */}
        <div className="text-right text-sm text-gray-500 mt-2 mb-6 poppins-light">
          <Link to="/forget-password" className="hover:underline">
            Forgot your password?
          </Link>
        </div>

        {/* Submit button */}
        <button
          disabled={btnLoading}
          onClick={btnclick}
          className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all hover:bg-indigo-800 poppins-medium"
        >
          {btnLoading ? 'please wait...' : 'Sign In'}
        </button>

        {/* Footer */}
        <div className="mt-6 text-sm text-center text-gray-500 poppins-light">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-700 font-semibold hover:underline poppins-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
