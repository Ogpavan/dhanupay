import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dmt2() {
  const navigate = useNavigate();

  const [bankName, setBankName] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleConfirm = () => {
    if (accountNumber !== confirmAccountNumber) {
      alert("❗ Account numbers do not match!");
      return;
    }

    const formData = {
      bankName,
      accountHolder,
      accountNumber,
      ifscCode,
      mobileNumber,
    };

    console.log("✅ Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-poppins px-5 py-6">
      {/* Back Button */}
      <div className="flex items-center mb-6 cursor-pointer text-gray-700" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </div>

      <h2 className="text-xl font-semibold text-indigo-700 mb-6 text-center">Domestic Money Transfer 2</h2>

      {/* Form */}
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
          <label className="text-sm font-medium text-gray-600">Account Holder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Account Number</label>
          <input
            type="password"
            placeholder="123456789012"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Confirm Account Number</label>
          <input
            type="text"
            placeholder="Re-enter Account Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={confirmAccountNumber}
            onChange={(e) => setConfirmAccountNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">IFSC Code</label>
          <input
            type="text"
            placeholder="SBIN0001234"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Mobile Number</label>
          <input
            type="text"
            placeholder="9876543210"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition duration-200"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Dmt2;
