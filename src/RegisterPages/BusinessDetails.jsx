import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";

const BusinessDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    shopName: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleSameAsResidential = () => {
    const savedAddress = localStorage.getItem("residentialAddress");
    if (savedAddress) {
      const data = JSON.parse(savedAddress);
      setForm({
        ...form,
        address: data.address || "",
        landmark: data.landmark || "",
        pincode: data.pincode || "",
        city: data.city || "",
        state: data.state || "",
      });
    } else {
      alert("No residential address found.");
    }
  };

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={2} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Business Details
        </h1>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Firm or Shop Name"
            className="input-field w-full"
            value={form.shopName}
            onChange={(e) => setForm({ ...form, shopName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Firm or Shop Address"
            className="input-field w-full"
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
            <option value="" disabled>
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
            <option value="" disabled>
              Select State
            </option>
            <option>State 1</option>
            <option>State 2</option>
            <option>State 3</option>
          </select>

          {/* Same As Button */}
          <button
            type="button"
            onClick={handleSameAsResidential}
            className="w-full bg-gray-100 border border-gray-300 text-sm text-[#2C2DCB] font-semibold py-2 rounded-xl mt-2"
          >
            Same as Residential Address
          </button>
        </form>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-200 text-gray-800 text-lg py-2 rounded-xl font-semibold"
          >
            ← Back
          </button>
          <button
            onClick={() => navigate("/aadhaar-details")}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
