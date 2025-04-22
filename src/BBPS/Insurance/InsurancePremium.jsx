import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InsurancePremium = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    policyNumber: "",
    state: "",
    insurer: "",
    policyHolderName: "",
    dob: "",
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
        <h1 className="text-xl font-bold text-blue-700 text-center ">Insurance Premium Payment</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Pay your Insurance Premium  with ease</h2>
      </div>

      <form className="space-y-5">
        <div>
          <label className="text-sm text-gray-600 font-medium">Policy Number</label>
          <input
            type="text"
            placeholder="INS1234567890"
            value={form.policyNumber}
            onChange={(e) => setForm({ ...form, policyNumber: e.target.value })}
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
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Insurance Company</label>
          <select
            value={form.insurer}
            onChange={(e) => setForm({ ...form, insurer: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          >
            <option value="" disabled>Select Insurer</option>
            <option>LIC of India</option>
            <option>HDFC Life</option>
            <option>Bajaj Allianz</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Policy Holder Name</label>
          <input
            type="text"
            placeholder="Ramesh Kumar"
            value={form.policyHolderName}
            onChange={(e) => setForm({ ...form, policyHolderName: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Date of Birth</label>
          <input
            type="date"
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate("/insurancepremiumfetch", { state: form })}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Premium
        </button>
      </form>
    </div>
  );
};

export default InsurancePremium;
