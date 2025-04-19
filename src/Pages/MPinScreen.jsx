
import React, { useState } from "react";


const MPinScreen = () => {
  const [pin, setPin] = useState(["", "", "", ""]);

  const btnclick = ()=>{
    alert(pin); 
  }

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
    <div className="flex  flex-col">
    {/* Top section (no rounded corners here) */}
    <div className="bg-indigo-700 py-10 rounded-b-3xl text-white text-center">
      <div className="text-4xl font-bold">Welcome Back</div>
    </div>
  
    {/* White container with rounded top corners */}
    <div className="flex-1 w-full bg-white  overflow-hidden pt-10">
      {/* Lock Icon Circle */}
      <div className="flex justify-center mt-12">
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
          {/* Colored Dots */}
          <div className="absolute top-0 left-1 bg-green-400 w-2 h-2 rounded-full"></div>
          <div className="absolute top-2 right-1 bg-red-400 w-3 h-3 rounded-full"></div>
          <div className="absolute bottom-2 right-2 bg-blue-400 w-2 h-2 rounded-full"></div>
          <div className="absolute bottom-3 left-2 bg-yellow-400 w-2 h-2 rounded-full"></div>
        </div>
      </div>
  
      {/* Enter M-PIN */}
      <div className="mt-8 text-center text-2xl font-semibold text-gray-700">
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
          className="w-12 h-12 text-center text-6xl border-2  border-indigo-500 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
        />
        
        ))}
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
  
  )}
export default MPinScreen;
 