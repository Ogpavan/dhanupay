import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FastagRechargeFetch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { state } = useLocation();

  const { vehicleNumber, bank, ownerName, state: stateName } = state || {};

  useEffect(() => {
    if (!vehicleNumber || !bank || !ownerName || !stateName) {
      navigate("/fastagrecharge");
    }
  }, [vehicleNumber, bank, ownerName, stateName, navigate]);

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <h1 className="text-xl font-bold text-blue-700 text-center mb-8">FASTag Recharge</h1>

      <div className="flex flex-col items-center justify-center bg-white px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-lg text-blue-600 font-semibold">Confirm Recharge</h2>
          <p className="text-sm text-gray-600">Review the vehicle and account details<br />before making payment.</p>
        </div>

        <div className="relative bg-gray-100 pt-10 p-6 rounded-2xl shadow-md w-full max-w-sm text-center">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2098/2098311.png"
              alt="Fastag"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
          </div>

          <h3 className="font-semibold text-gray-800 text-base mb-1 mt-2">{bank}</h3>
          <p className="text-gray-600 text-sm mb-1">{ownerName}</p>
          <p className="text-gray-600 text-sm mb-2">Vehicle No: {vehicleNumber}</p>

          <div className="text-red-600 bg-red-100 text-sm px-3 py-1 rounded-full inline-block mb-4">
            Recharge Status: Unpaid
          </div>

          <div className="text-3xl font-bold text-gray-800 mb-2">₹ 500.00</div>

          <div className="flex flex-col gap-4 text-sm text-gray-600 w-full mt-4">
            <div className="text-center flex justify-between">
              <span className="font-semibold">Vehicle :</span>
              <span>{vehicleNumber}</span>
            </div>
            <div className="text-center flex justify-between">
              <span className="font-semibold">Transaction ID :</span>
              <span>FTG456987321</span>
            </div>
            <div className="text-center flex justify-between">
              <span className="font-semibold">Recharge Date :</span>
              <span>April 25, 2025</span>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            navigate("/fastaginvoice", {
              state: {
                vehicleNumber,
                bank,
                ownerName,
                stateName,
                transactionId: "FTG456987321",
                rechargeDate: "April 25, 2025",
                amount: 500,
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

export default FastagRechargeFetch;
