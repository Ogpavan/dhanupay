import React, { useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";

const ResidentialDetails = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    houseNo: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleNext = () => {
    const residentialData = {
      houseNo: form.houseNo,
      address: form.address,
      landmark: form.landmark,
      pincode: form.pincode,
      city: form.city,
      state: form.state,
    };

    localStorage.setItem("residentialAddress", JSON.stringify(residentialData));
    navigate("/business-details");
  };

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={1} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Residential Details
        </h1>

        <form className="space-y-3">
             <input
              type="text"
              placeholder="House No."
              className="input-field w-1/2"
              value={form.houseNo}
              onChange={(e) => setForm({ ...form, houseNo: e.target.value })}
            />
            <input
              type="text"
              placeholder="Residential Area"
              className="input-field w-1/2"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
 
          <input
            type="text"
            placeholder="Landmark"
            className="input-field"
            value={form.landmark}
            onChange={(e) => setForm({ ...form, landmark: e.target.value })}
          />

          <input
            type="text"
            placeholder="Pincode"
            className="input-field"
            value={form.pincode}
            onChange={(e) => setForm({ ...form, pincode: e.target.value })}
          />

          <select
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none ${
              form.city ? "text-gray-800" : "text-gray-400"
            }`}
          >
            <option value="" disabled hidden>
              Select City
            </option>
            <option>City 1</option>
            <option>City 2</option>
            <option>City 3</option>
          </select>

          <select
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none ${
              form.state ? "text-gray-800" : "text-gray-400"
            }`}
          >
            <option value="" disabled hidden>
              Select State
            </option>
            <option>State 1</option>
            <option>State 2</option>
            <option>State 3</option>
          </select>
        </form>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-200 text-gray-800 text-lg py-2 rounded-xl font-semibold"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentialDetails;
