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

  const [searchTermState, setSearchTermState] = useState('');
  const [searchTermInsurer, setSearchTermInsurer] = useState('');
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showInsurerDropdown, setShowInsurerDropdown] = useState(false);

  // Mocked state and insurer lists
  const stateList = ["Uttar Pradesh", "Maharashtra", "Delhi"];
  const insurerList = ["LIC of India", "HDFC Life", "Bajaj Allianz"];

  const filteredStates = stateList.filter(state =>
    state.toLowerCase().includes(searchTermState.toLowerCase())
  );

  const filteredInsurers = insurerList.filter(insurer =>
    insurer.toLowerCase().includes(searchTermInsurer.toLowerCase())
  );

  const handleStateSelect = (state) => {
    setForm(prev => ({ ...prev, state }));
    setSearchTermState(state);
    setShowStateDropdown(false);  // Hide dropdown after selection
  };

  const handleInsurerSelect = (insurer) => {
    setForm(prev => ({ ...prev, insurer }));
    setSearchTermInsurer(insurer);
    setShowInsurerDropdown(false);  // Hide dropdown after selection
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { state, insurer, policyNumber, policyHolderName, dob } = form;

    if (!state || !insurer || !policyNumber || !policyHolderName || !dob) {
      alert("Please fill all fields");
      return;
    }

    navigate("/insurancepremiumfetch", { state: form });
  };

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <div>
        <h1 className="text-xl font-bold text-blue-700 text-center">Insurance Premium Payment</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Pay your Insurance Premium with ease</h2>
      </div>

      <form className="space-y-5">
       

        {/* State Search */}
        <div className="relative">
          <label className="text-sm text-gray-600 font-medium">Select State</label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            placeholder="Search State..."
            value={searchTermState}
            onChange={(e) => {
              setSearchTermState(e.target.value);
              setShowStateDropdown(true);
            }}
            onFocus={() => setShowStateDropdown(true)}
          />
          {showStateDropdown && filteredStates.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredStates.map((state, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => handleStateSelect(state)}
                >
                  {state}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Insurance Company Search */}
        <div className="relative">
          <label className="text-sm text-gray-600 font-medium">Insurance Company</label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            placeholder="Search Insurance Company..."
            value={searchTermInsurer}
            onChange={(e) => {
              setSearchTermInsurer(e.target.value);
              setShowInsurerDropdown(true);
            }}
            onFocus={() => setShowInsurerDropdown(true)}
          />
          {showInsurerDropdown && filteredInsurers.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredInsurers.map((insurer, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => handleInsurerSelect(insurer)}
                >
                  {insurer}
                </li>
              ))}
            </ul>
          )}
        </div>
         {/* Policy Number */}
         <div>
          <label className="text-sm text-gray-600 font-medium">Policy Number</label>
          <input
            type="text"
            placeholder="INS1234567890"
            value={form.policyNumber}
            onChange={(e) => handleChange("policyNumber", e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Policy Holder Name */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Policy Holder Name</label>
          <input
            type="text"
            placeholder="Ramesh Kumar"
            value={form.policyHolderName}
            onChange={(e) => handleChange("policyHolderName", e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Date of Birth</label>
          <input
            type="date"
            value={form.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Premium
        </button>
      </form>
    </div>
  );
};

export default InsurancePremium;
