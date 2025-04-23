import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DMT1 from "../assets/icons/dBt1.svg";

// Mock config - replace with fetch from server in production
const DMTConfig = {
  "DMT 1": {
    monthlyCharge: 5,
    commissions: [
      { range: "₹0 - ₹5000", rate: "2%" },
      { range: "Above ₹5000", rate: "3%" }
    ]
  },
  "DMT 2": {
    monthlyCharge: 10,
    commissions: [
      { range: "₹0 - ₹5000", rate: "1.5%" },
      { range: "Above ₹5000", rate: "2.5%" }
    ]
  }
};

function DMTselect() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [selectedDMT, setSelectedDMT] = useState(null);

  const handleNext = () => {
    if (!selectedDMT) {
      Swal.fire({
        title: "Alert",
        text: "Please select an DMT.",
        icon: "warning"
      });
      return;
    }

    if (selectedDMT === "DMT 1") {
      navigate("/DMT1", {
        state: { selectedDMT },
      });
    } else {
      navigate("/DMT2", {
        state: { selectedDMT },
      });
    }
  };

  const renderDMTInfo = () => {
    if (!selectedDMT) return null;

    const config = DMTConfig[selectedDMT];
    if (!config) return null;

    return (
      <div className="w-full mt-6 bg-gray-100 rounded-xl p-4 shadow-md text-gray-800">
        <h3 className="text-lg font-semibold mb-2">
          Monthly Charges: <span className="text-indigo-600">₹{config.monthlyCharge}</span>
        </h3>
        <h4 className="font-medium mb-2">Commission Structure</h4>
        <table className="w-full border text-sm text-left">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800">
              <th className="border px-4 py-2">Transaction Amount</th>
              <th className="border px-4 py-2">Commission</th>
            </tr>
          </thead>
          <tbody>
            {config.commissions.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.range}</td>
                <td className="border px-4 py-2">{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins">
      {/* Header */}
      <div className="pt-10 px-4 pb-2 text-gray-800">
        <div className="flex items-center mb-2 cursor-pointer" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Select DMT</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-start px-6 flex-1 gap-6">
        <h2 className="text-base font-medium text-gray-800 mb-2 mt-4">Select DMT</h2>

        <div className="flex justify-center gap-8 mt-2">
          {/* DMT 1 */}
          <div
            className={`flex flex-col items-center cursor-pointer border-2 rounded-xl p-2 w-[100px] h-[120px] transition ${
              selectedDMT === 'DMT 1' ? 'border-indigo-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedDMT('DMT 1')}
          >
            <img src={DMT1} alt="DMT 1" className="h-16 mb-2" />
            <span className="text-sm font-medium text-gray-700">DMT 1</span>
          </div>

          {/* DMT 2 */}
          <div
            className={`flex flex-col items-center cursor-pointer border-2 rounded-xl p-2 w-[100px] h-[120px] transition ${
              selectedDMT === 'DMT 2' ? 'border-indigo-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedDMT('DMT 2')}
          >
            <img src={DMT1} alt="DMT 2" className="h-16 mb-2" />
            <span className="text-sm font-medium text-gray-700">DMT 2</span>
          </div>
        </div>

        {/* Dynamic Info */}
        {renderDMTInfo()}
      </div>

      {/* Next Button */}
      <div className="px-6 pb-6">
        <button
          onClick={handleNext}
          className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DMTselect;
