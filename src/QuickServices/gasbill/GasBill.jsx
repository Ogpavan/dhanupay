import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GasBill = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    provider: "",
    phoneNumber: "",
    name: "",
  });

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>
      <div className="">
        <h1 className="text-xl font-bold text-blue-700 text-center ">Gas Bill</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Pay your Gas Bill with ease</h2>
      </div>

      <form className="space-y-5 mt-16">
        {/* Gas Provider */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Gas Provider</label>
          <select
            value={form.provider}
            onChange={(e) => setForm({ ...form, provider: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none text-gray-800"
          >
            <option value="" disabled>Select Gas Provider</option>
            <option>Indraprastha Gas Limited (IGL)</option>
            <option>Mahanagar Gas Limited (MGL)</option>
            <option>Bharat Gas</option>
            <option>HP Gas</option>
            <option>Indian Oil (LPG)</option>
          </select>
        </div>

        {/* Registered Phone Number */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Registered Phone Number</label>
          <input
            type="tel"
            placeholder="9876543210"
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Name (Optional) */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Name (Optional)</label>
          <input
            type="text"
            placeholder="Rakesh Sharma"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Fetch Bill Button */}
        <button
          type="button"
          onClick={() => navigate("/gasbillfetch", { state: form })}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Bill
        </button>
      </form>
    </div>
  );
};

export default GasBill;
