import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ElectricityBill = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    consumerNumber: "",
    state: "",
    board: "",
    name: "",
  });

 

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">   Back</span>
      </div>

      <form className="space-y-5 mt-16">
        {/* Consumer Number */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Consumer number</label>
          <input
            type="text"
            placeholder="0123456789"
            value={form.consumerNumber}
            onChange={(e) => setForm({ ...form, consumerNumber: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Select State */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Select State</label>
          <select
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none text-gray-800"
          >
            <option value="" disabled>Select State</option>
            <option>Uttar Pradesh West</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
          </select>
        </div>

        {/* Electricity Board */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Electricity Board</label>
          <select
            value={form.board}
            onChange={(e) => setForm({ ...form, board: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none text-gray-800"
          >
            <option value="" disabled>Select Board</option>
            <option>Madhyanchal Vidyut (PVVNL) - bill</option>
            <option>NPCL</option>
            <option>BSES Rajdhani</option>
          </select>
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
          onClick={() => navigate("/electricitybillfetch", { state: form })}

          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch bill
        </button>
      </form>
    </div>
  );
};

export default ElectricityBill;
