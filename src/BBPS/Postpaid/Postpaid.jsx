import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PostpaidMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mobileNumber: "",
    operator: "",
    userName: "",
  });

  const [searchTerm, setSearchTerm] = useState("");  // State to hold search term for operators
  const [showDropdown, setShowDropdown] = useState(false);  // State to control dropdown visibility

  const operators = ["Airtel", "Vi", "Jio", "BSNL", "MTNL"];

  const filteredOperators = operators.filter((op) =>
    op.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = () => {
    const { mobileNumber, operator, userName } = form;

    if (!mobileNumber || !operator || !userName) {
      Swal.fire({
        title: "Alert",
        text: "Please fill all fields",
        icon: "warning",
      });
      return;
    }

    navigate("/postpaidfetch", { state: form });
  };

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Back Header */}
      <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-xl font-bold text-blue-700 text-center ">Postpaid Recharge</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Pay your mobile postpaid bills with ease</h2>
      </div>

      {/* Form */}
      <form className="space-y-5">

        {/* Search Operator */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Operator</label>
          <input
            type="text"
            placeholder="Search operator"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true); // Show dropdown when typing
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}  // Hide dropdown after blur
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />

          {/* Dropdown list for filtered operators */}
          {showDropdown && filteredOperators.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredOperators.map((operator, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => {
                    setForm({ ...form, operator });
                    setSearchTerm(operator);  // Set the selected operator
                    setShowDropdown(false);  // Hide dropdown after selection
                  }}
                >
                  {operator}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-600 font-medium">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={form.mobileNumber}
            onChange={(e) => setForm({ ...form, mobileNumber: e.target.value })}
            maxLength={10}
            pattern="[0-9]{10}"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={form.userName}
            onChange={(e) => setForm({ ...form, userName: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Bill
        </button>
      </form>
    </div>
  );
};

export default PostpaidMobile;
