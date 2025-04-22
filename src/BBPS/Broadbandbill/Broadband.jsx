import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Broadband() {
  const [form, setForm] = useState({
    broadbandOperator: "",
    Number1: "",
  });

  const navigate = useNavigate();

//   const banks = ["HDFC Bank", "SBI", "ICICI Bank", "Axis Bank", "Kotak Mahindra"];
  const broadbandOperators = ["Airtel Broadband", "JioFiber", "ACT Fibernet", "BSNL Broadband", "Hathway", "Spectra", "Excitel"];


  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { broadbandOperators, Number1   } = form;

    if (!broadbandOperators || !Number1 ) {
      alert("Please fill all fields");
      return;
    }

    navigate("/Broadbandfetch", {
      state: {
        broadbandOperators,
        Number1,
       
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
        <h1 className="text-xl font-bold text-blue-700 text-center ">Broadband Bill Payment</h1>
        <h2 className="text-md text-gray-600 text-center mb-8"> Pay your Bill instantly and securely</h2>
      </div>

        {/* Select operator */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Bank</label>
          <select
            value={form.bank}
            onChange={(e) => handleChange("broadbandOperators", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
          >
            <option value="">Select operator</option>
            {broadbandOperators.map((b, i) => (
              <option key={i} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* fill Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700"> Number with STD code</label>
          <input
            type="text"
            value={form.Number1}
            onChange={(e) => handleChange("Number1", e.target.value)}
            placeholder="Enter  number with STD code"
            className="w-full p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none"
          />
          
        </div>
        {/* Amount */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={form.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div> */}

        {/* Submit */}
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
