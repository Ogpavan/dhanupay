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
  // const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

// const btnclick = async () => {
//   try {
//     // Update login count
//     let loginCount = localStorage.getItem('userlogincount');
//     loginCount = loginCount ? parseInt(loginCount) + 1 : 1;
//     localStorage.setItem('userlogincount', loginCount);
//     localStorage.setItem('userAEPSKYCValid', "false");

//     // API Call
//     const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/users/login`;

//     const response = await axios.post(apiUrl, {
//       Username: emailOrPhone,
//       Password: password,
//       IP: "11.00.123",
//       OS: "Android",
//       Browser: "Chrome",
//       Device: "Realme"
//     });

//     const res = response.data;
//     console.log(res);

//     // Show message in SweetAlert
//     await Swal.fire({
//       title: 'OTP Sent',
//       text: res.Message,
//       icon: 'success',
//       confirmButtonText: 'Continue'
//     });

//     // Store token and userID
//     localStorage.setItem('Token', res.Token);
//     localStorage.setItem('UserId', res.UserId);
//     localStorage.setItem('loginid', res.loginid);
//     localStorage.setItem('UserName', res.UserName);
//  localStorage.setItem('IsMPINSet', res.IsMPINSet);

//     if(res.IsMPINSet == "0") {
//       navigate('/SetMPinScreen', { state: { Message: res.Message || res.message } });
//     }else{
//       navigate('/otp', { state: { Message: res.Message || res.message } });
//     }

//   } catch (error) {
//     console.error('Login API Error:', error);
//     if(error.response.status == 409){
//       console.log(error.response.data.message);
//       console.log("error 409 accored sucecesfully");
//     }
//     Swal.fire({
//       title: 'Login Failed',
//       text: error?.response?.data?.Message ||error?.response?.data?.message|| 'Please check credentials or network.',
//       icon: 'error',
//       confirmButtonText: 'OK'
//     });
//   }
// };

const btnclick = async () => {
  try {
    // Update login count
    let loginCount = localStorage.getItem('userlogincount');
    loginCount = loginCount ? parseInt(loginCount) + 1 : 1;
    localStorage.setItem('userlogincount', loginCount);
    localStorage.setItem('userAEPSKYCValid', "false");

    // API Call
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/users/login`;

    const response = await axios.post(apiUrl, {
      Username: emailOrPhone,
      Password: password,
      IP: "11.00.123",
      OS: "Android",
      Browser: "Chrome",
      Device: "Realme"
    });

    const res = response.data;
    console.log(res);

    await Swal.fire({
      title: 'OTP Sent',
      text: res.Message,
      icon: 'success',
      confirmButtonText: 'Continue'
    });

    // Store values
    localStorage.setItem('Token', res.Token);
    localStorage.setItem('UserId', res.UserId);
    localStorage.setItem('loginid', res.loginid);
    localStorage.setItem('UserName', res.UserName);
    localStorage.setItem('IsMPINSet', res.IsMPINSet);

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
          // Retry API with Bearer token and UserId
          const retryUrl = `${import.meta.env.VITE_API_BASE_URL}/users/ConfirmLogin`;

          const retryResponse = await axios.post(
            retryUrl,
            { UserId: res.UserId },
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

          localStorage.setItem('Token', retryData.Token);
          localStorage.setItem('UserId', retryData.UserId);
          localStorage.setItem('loginid', retryData.loginid);
          localStorage.setItem('UserName', retryData.UserName);
          localStorage.setItem('IsMPINSet', retryData.IsMPINSet);

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
  }
};


  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      if (nextInput) nextInput.focus();
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

        {/* Lock Icon + Dots */}
        <div className="relative bg-purple-100 p-6 rounded-full shadow-md mx-auto mt-6 w-fit">
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
          <div className="absolute top-0 left-1 bg-green-400 w-2 h-2 rounded-full" />
          <div className="absolute top-2 right-1 bg-red-400 w-3 h-3 rounded-full" />
          <div className="absolute bottom-2 right-2 bg-blue-400 w-2 h-2 rounded-full" />
          <div className="absolute bottom-3 left-2 bg-yellow-400 w-2 h-2 rounded-full" />
        </div>

        {/* Input fields */}
        <input
          type="text"
          placeholder="Phone Number Or Email ID"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="w-full mt-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 poppins-regular"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 poppins-regular"
        />

        {/* Forgot password */}
        <div className="text-right text-sm text-gray-500 mt-2 mb-6 poppins-light">
        <Link to="/forget-password" className="hover:underline">
    Forgot your password?
  </Link>
        </div>

        {/* Submit button */}
        <button
          onClick={btnclick}
          className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all hover:bg-indigo-800 poppins-medium"
        >
          Sign in
        </button>

        {/* Footer */}
        <div className="mt-6 text-sm text-center text-gray-500 poppins-light">
          Don’t have an account?{" "}
          <Link to="/signup"  className="text-indigo-700 font-semibold hover:underline poppins-medium">
            Sign Up
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;






// import React, { useState } from "react";

// const SignInScreen = () => {

//   return (
//     <div className="flex flex-col h-screen bg-indigo-700 font-poppins">
//       {/* Top bar */}
//       <div className="px-4 h-[15vh] pb-4 text-white">
       
//       </div>

//       {/* White section with rounded top */}
//       <div className="flex-1 bg-white rounded-t-3xl p-6">
       
        

        

      

//       </div>
//     </div>
//   );
// };

// export default SignInScreen;
