import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GasBillFetch = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { provider, phoneNumber, name } = state || {};

  useEffect(() => {
    if (!provider || !phoneNumber) {
      navigate("/gasbill");
    }
  }, [provider, phoneNumber, navigate]);

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center bg-white px-4 font-[Poppins] relative">
        <div className="text-center mb-16">
          <h2 className="text-lg text-blue-600 font-semibold">Are you sure?</h2>
          <p className="text-sm text-gray-600">
            Please confirm you want to <br /> proceed with the gas bill payment
          </p>
        </div>

        <div className="relative bg-gray-100 pt-10 p-6 rounded-2xl shadow-md w-full max-w-sm text-center">
          {/* Emblem or Provider Logo */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_1OunMOZE66bz_Qvhm6z9Vq8qMrwb1DOc39mt0zLy6mBKJpVTKH9iU3g9XaPS5YxJo4&usqp=CAU"
              alt="Gas"
              className="w-20 h-20 rounded-full"
            />
          </div>

          <h3 className="font-semibold text-gray-800 text-base mb-1 mt-2">{provider}</h3>
          <p className="text-gray-600 text-sm mb-2">{name || "Customer"}</p>

          <div className="text-red-600 bg-red-100 text-sm px-3 py-1 rounded-full inline-block mb-4">
            Transaction Status: Unpaid
          </div>

          <div className="text-3xl font-bold text-gray-800 mb-2">₹ 280.00</div>

          <div className="flex flex-col gap-4 text-sm text-gray-600 w-full mt-4">
            <div className="flex justify-between">
              <span className="font-semibold">Phone No:</span>
              <span>{phoneNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Bill No:</span>
              <span>GB-8956213</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Due Date:</span>
              <span>April 25, 2025</span>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            navigate("/gasinvoice", {
              state: {
                provider,
                phoneNumber,
                name,
                billNumber: "GB-8956213",
                dueDate: "April 25, 2025",
                amount: 280,
              },
            })
          }
          className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-xl w-full max-w-sm"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default GasBillFetch;
