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
    amount: "", // Add amount field to the form state
  });

  const [searchTermBank, setSearchTermBank] = useState('');
  const [searchTermState, setSearchTermState] = useState('');
  const [showBankDropdown, setShowBankDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  // Mocked bank and state lists
  const bankList = ["Axis Bank", "ICICI Bank", "HDFC Bank"];
  const stateList = ["Delhi", "Maharashtra", "Uttar Pradesh"];

  // Filtered lists based on the search term
  const filteredBanks = bankList.filter(bank =>
    bank.toLowerCase().includes(searchTermBank.toLowerCase())
  );

  const filteredStates = stateList.filter(state =>
    state.toLowerCase().includes(searchTermState.toLowerCase())
  );

  const handleBankSelect = (bank) => {
    setForm(prev => ({ ...prev, bank }));
    setSearchTermBank(bank);
    setShowBankDropdown(false);
  };

  const handleStateSelect = (state) => {
    setForm(prev => ({ ...prev, state }));
    setSearchTermState(state);
    setShowStateDropdown(false);
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { vehicleNumber, bank, ownerName, state, amount } = form;
    if (!vehicleNumber || !bank || !ownerName || !state || !amount) {
      alert("Please fill all fields");
      return;
    }

    // Send the form data (including the amount) to the next page
    navigate("/fastagrechargefetch", { state: form });
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
        <h1 className="text-xl font-bold text-blue-700 text-center">FASTag Recharge</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Recharge your FASTag with ease</h2>
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

        {/* Bank Search */}
        <div className="relative">
          <label className="text-sm text-gray-600 font-medium">FasTag Provider</label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            placeholder="Search FasTag Provider..."
            value={searchTermBank}
            onChange={(e) => {
              setSearchTermBank(e.target.value);
              setShowBankDropdown(true);
            }}
            onFocus={() => setShowBankDropdown(true)}
          />
          {showBankDropdown && filteredBanks.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredBanks.map((bank, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => handleBankSelect(bank)}
                >
                  {bank}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Vehicle Number */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Vehicle Number</label>
          <input
            type="text"
            placeholder="UP14AB1234"
            value={form.vehicleNumber}
            onChange={(e) => handleChange("vehicleNumber", e.target.value.toUpperCase())}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none uppercase"
          />
        </div>

        {/* Owner Name */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Owner Name</label>
          <input
            type="text"
            placeholder="Ravi Sharma"
            value={form.ownerName}
            onChange={(e) => handleChange("ownerName", e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={form.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Recharge Info
        </button>
      </form>
    </div>
  );
};

export default FastagRecharge;
