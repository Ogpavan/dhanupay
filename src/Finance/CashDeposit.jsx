import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CashDeposit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [bankName, setBankName] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [confirmAadharNumber, setConfirmAadharNumber] = useState('');
  const [amount, setAmount] = useState('');

  const quickAmounts = ['500', '1000', '1500', '2000', '5000'];

  const handleConfirm = () => {
    if (aadharNumber !== confirmAadharNumber) {
      alert("❗ Aadhar numbers do not match!");
      return;
    }

    const formData = {
      bankName,
      aadharNumber,
      amount,
    };

    console.log("✅ Cash Deposit Form Submitted:", formData);
    alert("Cash Deposit submitted successfully!");
  };

  const handleAmountClick = (val) => {
    setAmount(val);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-poppins px-5 py-6">
      {/* Back Button */}
      <div className="flex items-center mb-6 cursor-pointer text-gray-700" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </div>

      <h2 className="text-xl font-semibold text-indigo-700 mb-6 text-center">Cash Deposit</h2>

      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-600">Bank Name</label>
          <select
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          >
            <option value="" disabled>Select Bank</option>
            <option value="Punjab National Bank">Punjab National Bank</option>
            <option value="State Bank of India">State Bank of India</option>
            <option value="HDFC Bank">HDFC Bank</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Aadhar Number</label>
          <input
            type="password"
            placeholder="Enter Aadhar Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Confirm Aadhar Number</label>
          <input
            type="text"
            placeholder="Re-enter Aadhar Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={confirmAadharNumber}
            onChange={(e) => setConfirmAadharNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* Quick Amount Buttons */}
          <div className="flex flex-wrap gap-3 mt-3">
            {quickAmounts.map((val) => (
              <button
                key={val}
                type="button"
                className="border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700"
                onClick={() => handleAmountClick(val)}
              >
                ₹ {val}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-16">
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition duration-200"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default CashDeposit;
