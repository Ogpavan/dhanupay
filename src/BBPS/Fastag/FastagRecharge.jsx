import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FastagRecharge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    vehicleNumber: "",
    bank: "",
    ownerName: "",
    state: "",
  });

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <div className="">
        <h1 className="text-xl font-bold text-blue-700 text-center ">FASTag Recharge</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Recharge your FASTag with ease</h2>
      </div>

      <form className="space-y-5">
        <div>
          <label className="text-sm text-gray-600 font-medium">Vehicle Number</label>
          <input
  type="text"
  placeholder="UP14AB1234"
  value={form.vehicleNumber}
  onChange={(e) =>
    setForm({ ...form, vehicleNumber: e.target.value.toUpperCase() })
  }
  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none uppercase"
/>

        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Bank</label>
          <select
            value={form.bank}
            onChange={(e) => setForm({ ...form, bank: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          >
            <option value="" disabled>Select Bank</option>
            <option>Axis Bank</option>
            <option>ICICI Bank</option>
            <option>HDFC Bank</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Owner Name</label>
          <input
            type="text"
            placeholder="Ravi Sharma"
            value={form.ownerName}
            onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Select State</label>
          <select
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          >
            <option value="" disabled>Select State</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
            <option>Uttar Pradesh</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => navigate("/fastagrechargefetch", { state: form })}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Recharge Info
        </button>
      </form>
    </div>
  );
};

export default FastagRecharge;
