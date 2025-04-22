import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const InsurancePremiumFetch = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    policyNumber,
    state: stateName,
    insurer,
    policyHolderName,
    dob,
  } = state || {};

  useEffect(() => {
    if (!policyNumber || !stateName || !insurer || !policyHolderName || !dob) {
      navigate("/insurancepremium");
    }
  }, [policyNumber, stateName, insurer, policyHolderName, dob, navigate]);

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <h1 className="text-xl font-bold text-blue-700 text-center mb-8">Insurance Premium Payment</h1>

      <div className="flex flex-col items-center justify-center bg-white px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-lg text-blue-600 font-semibold">Confirm Premium Payment</h2>
          <p className="text-sm text-gray-600">Please confirm your insurance details<br />before proceeding to pay.</p>
        </div>

        <div className="relative bg-gray-100 pt-10 p-6 rounded-2xl shadow-md w-full max-w-sm text-center">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
              alt="Insurance"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
          </div>

          <h3 className="font-semibold text-gray-800 text-base mb-1 mt-2">{insurer}</h3>
          <p className="text-gray-600 text-sm mb-1">{policyHolderName}</p>
          <p className="text-gray-600 text-sm mb-2">DOB: {dob}</p>

          <div className="text-red-600 bg-red-100 text-sm px-3 py-1 rounded-full inline-block mb-4">
            Premium Status: Unpaid
          </div>

          <div className="text-3xl font-bold text-gray-800 mb-2">₹ 8,500.00</div>

          <div className="flex flex-col gap-4 text-sm text-gray-600 w-full mt-4">
            <div className="text-center flex justify-between">
              <span className="font-semibold">Policy No :</span>
              <span>{policyNumber}</span>
            </div>
            <div className="text-center flex justify-between">
              <span className="font-semibold">Receipt No :</span>
              <span>INS98765432</span>
            </div>
            <div className="text-center flex justify-between">
              <span className="font-semibold">Due Date :</span>
              <span>May 10, 2025</span>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            navigate("/insuranceinvoice", {
              state: {
                policyNumber,
                stateName,
                insurer,
                policyHolderName,
                dob,
                receiptNumber: "INS98765432",
                dueDate: "May 10, 2025",
                amount: 8500,
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

export default InsurancePremiumFetch;
