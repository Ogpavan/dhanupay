import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MPinScreen = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(["", "", "", ""]);
  const userName = "John Doe"; // Replace this with dynamic username if needed

  const btnclick = () => {
    onClick=navigate("/dashboard/home");
    // alert(pin.join(""));
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
    <div className="flex flex-col min-h-screen font-[Poppins]">
      {/* Blue top section (left intentionally empty) */}
      <div className="bg-indigo-700 h-[15vh] py-10 rounded-b-3xl text-white text-center"></div>

      {/* White section starts here */}
      <div className="flex-1 w-full bg-white overflow-hidden pt-10">
        {/* Welcome + Username now inside white container */}
        <div className="text-center">
          <div className="text-4xl font-bold text-indigo-700 poppins-bold">Welcome Back</div>
          <div className="text-lg mt-1 text-indigo-700 poppins-medium">{userName}</div>
        </div>

        {/* Lock Icon */}
        <div className="flex justify-center mt-12">
          <div className="bg-purple-100 p-6 rounded-full shadow-md relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => navigate(-1)} 
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM16 7a4 4 0 00-8 0v4h8V7z"
              />
            </svg>
            <div className="absolute top-0 left-1 bg-green-400 w-2 h-2 rounded-full"></div>
            <div className="absolute top-2 right-1 bg-red-400 w-3 h-3 rounded-full"></div>
            <div className="absolute bottom-2 right-2 bg-blue-400 w-2 h-2 rounded-full"></div>
            <div className="absolute bottom-3 left-2 bg-yellow-400 w-2 h-2 rounded-full"></div>
          </div>
        </div>

        {/* Enter M–PIN Title */}
        <div className="mt-8 text-center text-2xl font-semibold text-gray-700 poppins-semibold">
          Enter M–PIN
        </div>

        {/* PIN Inputs */}
        <div className="flex justify-center gap-4 mt-4">
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pin-${index}`}
              type="password"
              maxLength="1"
              className="w-12 h-12 text-center text-3xl border-2 border-indigo-500 rounded-xl text-black focus:outline-none focus:ring-4 focus:ring-indigo-300"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>

        <div className="mt-6 text-sm text-center   poppins-light">
          <Link to="/forget-m-pin"  className="text-indigo-700 font-semibold hover:underline poppins-medium">
          forgot M-PIN ?
            </Link>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center px-4">
          <button
            onClick={btnclick}
            disabled={pin.some((val) => val === "")}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              pin.every((val) => val !== "")
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-indigo-600 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MPinScreen;
