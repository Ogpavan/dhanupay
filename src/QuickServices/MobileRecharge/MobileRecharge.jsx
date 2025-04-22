import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // optional icon package
import Swal from "sweetalert2";

const MobileRecharge = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mobile: "",
    operator: "",
    circle: "",
    amount: "",
  });

  const handleRecharge = () => {
    if (!form.mobile || !form.operator || !form.amount) {
      // alert("Please fill all required fields.");
      Swal.fire({
        title: "Alert",
        text: "Please fill all fields",
        icon: "warning"
      });
      return;
    }

    // API call logic here
    console.log("Recharge initiated:", form);
    // alert("under working");
    // navigate("/recharge-success");
    return
  };

  return (
    <div className="font-poppins bg-white min-h-screen px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

{/* Operator Logo */}
{/* Operator Logo - Full Circle Profile Style */}
<div className="flex justify-center mb-6">
  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
    <img
      src="
https://freelogopng.com/images/all_img/1680513525airtel-app-logo.png"
      alt="Operator"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      {/* Form */}
      <form className="space-y-5 mt-4">
      <div>
  <label className="text-sm text-gray-600 font-medium">Mobile Number</label>
  <div className="flex items-center border border-gray-300 rounded-xl mt-1 overflow-hidden">
    {/* Indian Flag and +91 */}
    <div className="flex items-center bg-gray-100 px-3 py-2 space-x-2">
      <img
        src="https://flagcdn.com/w40/in.png"
        alt="India"
        className="w-5 h-4 object-cover"
      />
      <span className="text-gray-800 font-medium">+91</span>
    </div>
    
    {/* Input for 10-digit number */}
    <input
      type="tel"
      maxLength={10}
      pattern="[0-9]{10}"
      inputMode="numeric"
      placeholder="Enter 10-digit number"
      className="flex-1 px-4 py-2 outline-none"
      value={form.mobile}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, ""); // only digits
        if (value.length <= 10) {
          setForm({ ...form, mobile: value });
        }
      }}
    />
  </div>
</div>


        <div>
          <label className="text-sm text-gray-600 font-medium">Operator</label>
          <select
            value={form.operator}
            onChange={(e) => setForm({ ...form, operator: e.target.value })}
            className={`w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none ${
              form.operator ? "text-gray-800" : "text-gray-400"
            }`}
          >
            <option value="" disabled>Select Operator</option>
            <option>Airtel</option>
            <option>Jio</option>
            <option>Vi</option>
            <option>BSNL</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Circle</label>
          <select
            value={form.circle}
            onChange={(e) => setForm({ ...form, circle: e.target.value })}
            className={`w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none ${
              form.circle ? "text-gray-800" : "text-gray-400"
            }`}
          >
            <option value="" disabled>Select Circle</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>UP East</option>
            <option>Rajasthan</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Amount</label>
          <input
            type="number"
            placeholder="Enter recharge amount"
            className="input-field w-full mt-1"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
        </div>

        <button
          type="button"
          onClick={handleRecharge}
          className="w-full bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold mt-6"
        >
          Proceed to Recharge →
        </button>
      </form>

      {/* Back button for additional navigation */}
      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-gray-200 text-gray-800 text-lg py-2 rounded-xl font-semibold"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default MobileRecharge;
