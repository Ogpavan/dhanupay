import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoanRepayment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [form, setForm] = useState({
    loanProviders: "",
    AgreementNumber1: "",
  });

  const navigate = useNavigate();

  // List of loan providers
  const loanProviders = [
    "Bajaj Finserv", "Tata Capital", "HDB Financial Services",
    "Home Credit", "Indiabulls", "Muthoot Finance", "Mahindra Finance"
  ];

  const [searchTerm, setSearchTerm] = useState("");  // State to handle the search term
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  // Filter the loan providers based on the search term
  const filteredProviders = loanProviders.filter((provider) =>
    provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { loanProviders, AgreementNumber1 } = form;

    if (!loanProviders || !AgreementNumber1) {
      // alert("Please fill all fields");
      Swal.fire({
        title: "Alert",
        text: "Please fill all fields",
        icon: "warning"
      });
      return;
    }

    navigate("/loanrepaymentfetch", {
      state: {
        loanProviders,
        AgreementNumber1,
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
        <div>
          <h1 className="text-xl font-bold text-blue-700 text-center "> Loan EMI Payment</h1>
          <h2 className="text-md text-gray-600 text-center mb-8">Pay your Loan EMI instantly and securely</h2>
        </div>

        {/* Searchable Loan Provider */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Loan Provider</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true); // Show dropdown when typing
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Hide dropdown after blur
            placeholder="Search Loan Provider"
            className="w-full p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none"
          />

          {/* Dropdown list for filtered loan providers */}
          {showDropdown && filteredProviders.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredProviders.map((provider, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => {
                    setForm({ ...form, loanProviders: provider });
                    setSearchTerm(provider); // Set the selected loan provider
                    setShowDropdown(false); // Hide dropdown after selection
                  }}
                >
                  {provider}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Agreement Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Agreement Number</label>
          <input
            type="text"
            value={form.AgreementNumber1}
            onChange={(e) => handleChange("AgreementNumber1", e.target.value)}
            placeholder="Enter agreement number"
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
