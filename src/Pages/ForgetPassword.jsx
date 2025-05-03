// import React, { useEffect, useState } from "react";
// import AlertPopup from "../utils/AlertPopup";
// import { useNavigate } from "react-router-dom";

// const ForgetPassword = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const navigate = useNavigate();
//   const [Otp, setOtp] = useState(""); // State for OTP
//   const [UserID, setUserID] = useState("");
//   const [Newpassword, setNewPassword] = useState("");
//   const [ConfirmNewpassword, setConfirmNewpassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   // Generate OTP when the "Send OTP" button is clicked
//   const handleSendOtp = () => {
//     // Generate OTP only when the button is clicked
//     // const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     // setOtp(generatedOtp); // Set the generated OTP to state
//     // setShowAlert(true); // Show the alert when OTP is generated
//   };

//   const btnclick = () => {
//     // alert(`OTP: ${Otp}\nDistributor ID: ${UserID}\nNew Password: ${Newpassword}`);
//     Swal.fire({
//       title: "Success",
//       text: "Sucessfully Reset ",
//       icon: "success"
//     });

//     navigate("/"); // Navigate to home page or another route after clicking change password
//   };

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

//   return (
//     <div className="flex flex-col min-h-screen bg-indigo-700 font-poppins">
//       {/* Top bar */}
//       <div className="px-4 pt-10 pb-4 text-white">
//         <div className="flex items-center mb-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2 cursor-pointer"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//             onClick={() => navigate(-1)}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//           <span className="text-sm">Change Password</span>
//         </div>
//       </div>

//       {/* White Section */}
//       <div className="flex-1 bg-white rounded-t-3xl px-6 py-8">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl text-indigo-700 font-semibold">Forget Password</h1>
//           <p className="text-sm text-gray-500 mt-1">Create Your New Password</p>
//         </div>

//         {/* Form */}
//         <div className="flex flex-col gap-5">
//           {/* USER ID with Send OTP inside input */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="User ID"
//               value={UserID}
//               onChange={(e) => setUserID(e.target.value)}
//               className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//             <button
//               onClick={handleSendOtp} // Only triggers OTP generation when clicked
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-600 text-sm font-medium hover:text-indigo-800"
//             >
//               Send OTP
//             </button>
//           </div>

//           {/* OTP */}
//           <input
//             type="text"
//             placeholder="OTP"
//             // value={Otp}
//             // onChange={(e) => setOtp(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           {/* New Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="New Password"
//               value={Newpassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//             >
// {showPassword ? (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth={2}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//     />
//   </svg>
// ) : (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth={2}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.058 10.058 0 012.264-3.592M9.88 9.88a3 3 0 104.24 4.24"
//     />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
//   </svg>
// )}
//             </button>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm New Password"
//               value={ConfirmNewpassword}
//               onChange={(e) => setConfirmNewpassword(e.target.value)}
//               className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//             <button
//               type="button"
//               onClick={toggleConfirmPasswordVisibility}
//               className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//             >
//               {showConfirmPassword ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.058 10.058 0 012.264-3.592M9.88 9.88a3 3 0 104.24 4.24"
//                   />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={btnclick}
//             className="w-full py-3 bg-indigo-700 text-white rounded-xl text-lg font-medium hover:bg-indigo-800 transition"
//           >
//             Change Password
//           </button>
//         </div>
//       </div>

//       {/* AlertPopup */}
//       {showAlert && (
//         <AlertPopup
//           title="OTP Sent!"
//           text="OTP has been sent successfully to your registered mobile number."
//           icon="success"
//         />
//       )}
//     </div>
//   );
// };

// export default ForgetPassword;




import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [UserID, setUserID] = useState("");
  const [Otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [ConfirmNewpassword, setConfirmNewpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSendOtp = async () => {
    if (!UserID) {
      Swal.fire("Error", "Please enter your User ID", "error");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/ForgetPassword`,
        { Username: UserID },

      );
      console.log(response.data);
      localStorage.setItem("otpId", response.data.otpid);
      localStorage.setItem("userid", response.data.userid);
      localStorage.setItem("token", response.data.token);
      if (response.data.success) {
        Swal.fire("OTP Sent", response.data.message || response.data.Message || "OTP sent to your registered number", "success");
        setOtpSent(true);

      }


    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || error.response?.data?.Message || "Failed to send OTP", "error");
      navigate("/login");
    }
  };

  const handleVerifyOtp = async () => {
    const token = localStorage.getItem("token");
    const otpId = localStorage.getItem("otpId");
    const userid = localStorage.getItem("userid");
    if (!enteredOtp) {
      Swal.fire("Error", "Please enter the OTP", "error");
      return;
    }
    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/users/OTPValidator`;
      const response = await axios.post(apiUrl, {
        UserId: userid,
        LoginId: otpId,
        OTP: enteredOtp,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }


      );

      const res = response.data;
      console.log(res);
      if (res.success) {
        // Show message in SweetAlert
        await Swal.fire({
          title: 'OTP verified',
          text: res.message,
          icon: 'success',
          confirmButtonText: 'Continue'
        });
        setOtpVerified(true);
        // navigate("/dashboard/home");
      } else {
        await Swal.fire({
          title: 'Login Failed',
          text: res.message || res.Message || 'Please check credentials or network.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        // navigate("/login");
      }
    } catch (error) {
      console.error('otp API Error:', error);
      Swal.fire({
        title: 'Login Failed',
        text: error?.response?.data?.Message || 'Please check credentials or network.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };


  const handleResetPassword = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid");
    const loginId = localStorage.getItem("otpId"); // if "LoginId" is returned earlier and stored

    if (!Newpassword || !ConfirmNewpassword) {
      Swal.fire("Error", "Please enter both password fields", "error");
      return;
    }

    if (Newpassword !== ConfirmNewpassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    try {
      console.log("userId, loginId, Newpassword");
      console.log(userId, loginId, Newpassword);
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/set-password`,
        {
          UserId: userId,
          LoginId: loginId,
          Password: Newpassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        Swal.fire("Success", response.data.message || "Password set successfully", "success").then(() => {
          localStorage.clear();
          navigate("/");
        });
      } else {
        Swal.fire("Error", response.data.message || "Reset failed", "error");
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || error.response?.data?.Message || "Failed to set password", "error");
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-indigo-700 font-poppins">
      <div className="px-4 pt-10 pb-4 text-white">
        <div className="flex items-center mb-2">
          <svg
            onClick={() => navigate(-1)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Change Password</span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-t-3xl px-6 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl text-indigo-700 font-semibold">Forget Password</h1>
          <p className="text-sm text-gray-500 mt-1">Create Your New Password</p>
        </div>

        <div className="flex flex-col gap-5">
          {/* User ID */}
          <div className="relative">
            <input
              type="text"
              placeholder="User ID"
              value={UserID}
              onChange={(e) => setUserID(e.target.value)}
              className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              disabled={otpSent}
            />
            <button
              onClick={handleSendOtp}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-600 text-sm font-medium hover:text-indigo-800"
            >
              Send OTP
            </button>
          </div>

          {/* OTP + Verify */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter OTP"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              disabled={!otpSent || otpVerified}
            />
            {!otpVerified ? (
              <button
                onClick={handleVerifyOtp}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600 text-sm font-medium hover:text-green-800"
              >
                Verify
              </button>
            ) : (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600 font-medium">
                Verified
              </span>
            )}
          </div>

          {/* New Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={Newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              disabled={!otpVerified}
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
              disabled={!otpVerified}
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

          {/* Submit */}
          <button
            onClick={handleResetPassword}
            disabled={!otpVerified}
            className="w-full py-3 bg-indigo-700 text-white rounded-xl text-lg font-medium hover:bg-indigo-800 transition"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

