import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DTHPayment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    operator: "",
    subscriberId: "",
    name: "",
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

      {/* Title */}
      <div className="">
        <h1 className="text-xl font-bold text-blue-700 text-center ">DTH Recharge</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Recharge Your DTH with ease</h2>
      </div>

      <form className="space-y-5">
        {/* Operator */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Select Operator</label>
          <select
            value={form.operator}
            onChange={(e) => setForm({ ...form, operator: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none text-gray-800"
          >
            <option value="" disabled>Select Operator</option>
            <option>Tata Play</option>
            <option>Airtel Digital TV</option>
            <option>Dish TV</option>
            <option>Sun Direct</option>
            <option>Videocon d2h</option>
          </select>
        </div>

        {/* Subscriber ID */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Subscriber ID</label>
          <input
            type="text"
            placeholder="123456789"
            value={form.subscriberId}
            onChange={(e) => setForm({ ...form, subscriberId: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Name */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Subscriber Name</label>
          <input
            type="text"
            placeholder="Amit Singh"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate("/dthpaymentfetch", { state: form })}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch DTH Bill
        </button>
      </form>
    </div>
  );
};

export default DTHPayment;
