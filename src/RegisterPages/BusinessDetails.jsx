import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const BusinessDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();  // To access passed state data

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the data from the previous route (using useLocation)
  const { basicDetails, residentialData } = location.state || {};

  // Initialize form state
  const [form, setForm] = useState({
    shopName: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  // Handle "Same as Residential Address" click
  const handleSameAsResidential = () => {
    if (residentialData) {
      setForm({
        ...form,
        address: residentialData.address || "",
        landmark: residentialData.landmark || "",
        pincode: residentialData.pincode || "",
        city: residentialData.city || "",
        state: residentialData.state || "",
      });
    } else {
      Swal.fire({
        title: "Alert",
        text: "No residential address found.",
        icon: "warning",
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const { shopName, address, landmark, pincode, city, state } = form;
    if (
      !shopName.trim() ||
      !address.trim() ||
      !landmark.trim() ||
      !/^\d{6}$/.test(pincode) ||
      !city ||
      !state
    ) {
      Swal.fire({
        title: "Validation Error",
        text: "Please complete all fields correctly.",
        icon: "error",
      });
      return false;
    }
    return true;
  };

  // Handle the next button click
  const handleNext = () => {
    if (validateForm()) {
      // Combine the data from basic, residential, and business forms
      const combinedData = {
        heading: "Registration Form Data",
        basicDetails: { ...basicDetails },
        residentialData: { ...residentialData },
        businessDetails: { ...form },
      };

      // Log the combined data to the console
      console.log("Combined Data: ", combinedData);

      // Store the combined data in localStorage (optional)
      localStorage.setItem("registrationData", JSON.stringify(combinedData));

      // Navigate to the next page, passing the combined data as state
      navigate("/aadhaar-details", { state: { combinedData } });
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
            maxLength={50}
            onChange={(e) => setForm({ ...form, shopName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Firm or Shop Address"
            className="input-field w-full"
            value={form.address}
            maxLength={100}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Landmark"
            className="input-field"
            value={form.landmark}
            maxLength={50}
            onChange={(e) => setForm({ ...form, landmark: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Pincode"
            className="input-field"
            inputMode="numeric"
            maxLength={6}
            value={form.pincode}
            onKeyDown={(e) => {
              if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                e.preventDefault();
              }
            }}
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

export default BusinessDetails;
