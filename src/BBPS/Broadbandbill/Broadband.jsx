import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Broadband() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    broadbandOperator: "",
    Number1: "",
  });

  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  const [showDropdown, setShowDropdown] = useState(false); // State to control the dropdown visibility

  const navigate = useNavigate();

  const broadbandOperators = [
    "Airtel Broadband",
    "JioFiber",
    "ACT Fibernet",
    "BSNL Broadband",
    "Hathway",
    "Spectra",
    "Excitel"
  ];

  // Filtered list based on search term
  const filteredOperators = broadbandOperators.filter(operator =>
    operator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { broadbandOperator, Number1 } = form;

    if (!broadbandOperator || !Number1) {
      Swal.fire({
        title: "Alert",
        text: "Please fill all fields",
        icon: "warning"
      });
      return;
    }

    // Navigating to the next route and passing the form data
    navigate("/Broadbandfetch", {
      state: {
        broadbandOperator, // Send selected broadband operator
        Number1,            // Send the number with STD code
      },
    });
  };

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => window.history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-5">
        <div className="">
          <h1 className="text-xl font-bold text-blue-700 text-center">Broadband Bill Payment</h1>
          <h2 className="text-md text-gray-600 text-center mb-8">Pay your Bill instantly and securely</h2>
        </div>

        {/* Search Operator */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Operator</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true); // Show dropdown when the user starts typing
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Hide dropdown when focus leaves input
            placeholder="Search operator"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
          />

          {/* Dropdown list for filtered broadband operators */}
          {showDropdown && filteredOperators.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredOperators.map((operator, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => {
                    handleChange("broadbandOperator", operator); // Update selected operator
                    setSearchTerm(operator); // Set the search input to selected operator
                    setShowDropdown(false); // Hide dropdown after selection
                  }}
                >
                  {operator}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Fill Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Number with STD code</label>
          <input
            type="text"
            value={form.Number1}
            onChange={(e) => handleChange("Number1", e.target.value)}
            placeholder="Enter number with STD code"
            className="w-full p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#2C2DCB] hover:bg-[#2C2DCB] text-white py-2 px-4 rounded-xl font-semibold focus:outline-none"
        >
          Fetch Bill
        </button>
      </div>
    </div>
  );
}
  