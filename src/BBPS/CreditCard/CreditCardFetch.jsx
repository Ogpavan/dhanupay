import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import chip from "../../assets/chip.svg";
import Swal from 'sweetalert2'

const CreditCardFetch = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const amount = 252;
  
  // Debugging: Check state
  console.log(state);

  // Extract values from state
  const { bankName, cardHolder, cardNumber } = state || {};

  useEffect(() => {
    if (!state || !cardHolder || !cardNumber  ) {
      navigate("/creditcard");
    }
  }, [state, cardHolder, cardNumber, amount, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Back Button */}
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      {/* Confirmation Text */}
      <div className="text-center mb-16">
        <h2 className="text-lg text-blue-600 font-semibold">Are you sure?</h2>
        <p className="text-sm text-gray-600">Please confirm you want to proceed with the credit card payment</p>
      </div>

      {/* Card Display */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-3xl shadow-2xl max-w-sm mx-auto mb-8 h-52 overflow-hidden">
        {/* Chip Image or Icon */}
        <div className="absolute top-8 right-10 w-11 h-10 opacity-70">
          <img src={chip} alt="Chip" className="w-full h-full" />
        </div>

        {/* Card Number */}
        <div className="mt-10 text-xl font-mono tracking-widest">
          {cardNumber ? cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ') : ""}
        </div>

        {/* Card Holder & Label */}
        <div className="mt-6 flex justify-between items-end text-xs uppercase tracking-wide">
          <div>
            <div className="text-gray-300">Card Holder</div>
            <div className="text-sm font-semibold tracking-wide">{cardHolder}</div>
          </div>
          <div>
            <div className="text-gray-300">Amount</div>
            <div className="text-sm font-semibold tracking-wide">₹{amount}</div>
          </div>
        </div>
      </div>

      {/* Pay Now */}
      <button
        onClick={async() => {
          await Swal.fire({
            title: "Success",
            text: "Payment was Sucessfull",
            icon: "success"
          });
          navigate("/dashboard/home");
        }}
        className="w-full max-w-sm mx-auto bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold"
      >
        Pay Now ₹{amount}
      </button>
    </div>
  );
};

export default CreditCardFetch;
